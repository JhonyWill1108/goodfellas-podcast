#!/usr/bin/env node

/**
 * Script de Importação de Dados para Goodfellas Podcast
 * 
 * Uso:
 * 1. npm install firebase firebase-admin
 * 2. Configure FIREBASE_CONFIG abaixo
 * 3. node import-data.js
 */

const fs = require('fs');
const path = require('path');
const admin = require('firebase-admin');

// ═══════════════════════════════════════════════════════════
// ⚙️ CONFIGURAÇÃO - ADICIONE SUAS CREDENCIAIS DO FIREBASE
// ═══════════════════════════════════════════════════════════

const serviceAccount = {
  // Cole o conteúdo do seu arquivo JSON de credenciais aqui
  "type": "service_account",
  "project_id": "seu-project-id",
  "private_key_id": "sua-key-id",
  "private_key": "sua-private-key",
  "client_email": "firebase-adminsdk@seu-project.iam.gserviceaccount.com",
  "client_id": "seu-client-id",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "sua-cert-url"
};

// ═══════════════════════════════════════════════════════════

// Inicializar Firebase
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://seu-project.firebaseio.com"
});

const db = admin.firestore();

// ═══════════════════════════════════════════════════════════
// 📂 FUNÇÕES DE LEITURA DE CSV
// ═══════════════════════════════════════════════════════════

function parseCSV(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const lines = content.split('\n');
  const headers = lines[0].split('\t');
  
  const data = [];
  for (let i = 1; i < lines.length; i++) {
    if (lines[i].trim() === '') continue;
    
    const values = lines[i].split('\t');
    const obj = {};
    
    headers.forEach((header, index) => {
      obj[header.trim()] = (values[index] || '').trim();
    });
    
    data.push(obj);
  }
  
  return data;
}

// ═══════════════════════════════════════════════════════════
// 🚀 IMPORTAR LUTADORES
// ═══════════════════════════════════════════════════════════

async function importarLutadores() {
  console.log('\n📥 Importando Lutadores...\n');
  
  try {
    const lutatores = parseCSV(path.join(__dirname, 'lutadores_importacao.csv'));
    console.log(`📊 Total de lutadores para importar: ${lutatores.length}`);
    
    const batch = db.batch();
    let count = 0;
    
    for (const lutador of lutatores) {
      const data = {
        nome: lutador.Nome || '',
        instagram: lutador.Instagram || '',
        faixa: lutador.Faixa || '',
        grau: lutador.Grau || '',
        equipe: lutador.Equipe || '',
        idade: lutador.Idade ? lutador.Idade.toString() : '',
        peso: lutador.Peso ? lutador.Peso.toString() : '',
        altura: lutador.Altura ? lutador.Altura.toString() : '',
      };
      
      if (!data.nome) {
        console.log(`⚠️ Pulando linha sem nome: ${JSON.stringify(lutador)}`);
        continue;
      }
      
      const docRef = db.collection('lutadores').doc();
      batch.set(docRef, data);
      count++;
      
      // Firebase tem limite de 500 operações por batch
      if (count % 500 === 0) {
        await batch.commit();
        console.log(`✅ ${count} lutadores salvos...`);
      }
    }
    
    // Commit final
    if (count % 500 !== 0) {
      await batch.commit();
    }
    
    console.log(`✅ Total de lutadores importados: ${count}\n`);
    return count;
    
  } catch (error) {
    console.error('❌ Erro ao importar lutadores:', error);
    throw error;
  }
}

// ═══════════════════════════════════════════════════════════
// 🏟️ IMPORTAR CTs
// ═══════════════════════════════════════════════════════════

async function importarCTs() {
  console.log('\n📥 Importando CTs...\n');
  
  try {
    const cts = parseCSV(path.join(__dirname, 'cts_importacao.csv'));
    console.log(`📊 Total de CTs para importar: ${cts.length}`);
    
    const batch = db.batch();
    let count = 0;
    
    for (const ct of cts) {
      const data = {
        nome: ct['Nome do CT'] || '',
        dono: ct.Responsável || '',
        endereco: ct.Endereço || '',
      };
      
      if (!data.nome) {
        console.log(`⚠️ Pulando linha sem nome: ${JSON.stringify(ct)}`);
        continue;
      }
      
      const docRef = db.collection('cts').doc();
      batch.set(docRef, data);
      count++;
      
      // Firebase tem limite de 500 operações por batch
      if (count % 500 === 0) {
        await batch.commit();
        console.log(`✅ ${count} CTs salvos...`);
      }
    }
    
    // Commit final
    if (count % 500 !== 0) {
      await batch.commit();
    }
    
    console.log(`✅ Total de CTs importados: ${count}\n`);
    return count;
    
  } catch (error) {
    console.error('❌ Erro ao importar CTs:', error);
    throw error;
  }
}

// ═══════════════════════════════════════════════════════════
// 🔍 VALIDAR DADOS
// ═══════════════════════════════════════════════════════════

async function validarDados() {
  console.log('\n🔍 Validando dados no Firebase...\n');
  
  try {
    const lutatoresRef = await db.collection('lutadores').get();
    const ctsRef = await db.collection('cts').get();
    
    console.log(`✅ Lutadores no Firebase: ${lutatoresRef.size}`);
    console.log(`✅ CTs no Firebase: ${ctsRef.size}`);
    
    // Mostrar alguns exemplos
    console.log('\n📋 Primeiros 3 Lutadores:');
    let count = 0;
    lutatoresRef.forEach(doc => {
      if (count < 3) {
        console.log(`   - ${doc.data().nome} (${doc.data().faixa})`);
        count++;
      }
    });
    
    console.log('\n📋 Primeiros 3 CTs:');
    count = 0;
    ctsRef.forEach(doc => {
      if (count < 3) {
        console.log(`   - ${doc.data().nome}`);
        count++;
      }
    });
    
  } catch (error) {
    console.error('❌ Erro ao validar dados:', error);
  }
}

// ═══════════════════════════════════════════════════════════
// 🎯 EXECUTAR
// ═══════════════════════════════════════════════════════════

async function main() {
  console.log('╔═════════════════════════════════════════╗');
  console.log('║  Goodfellas Podcast - Importador de     ║');
  console.log('║  Dados - Upload de Lutadores e CTs      ║');
  console.log('╚═════════════════════════════════════════╝');
  
  try {
    const lutadoresCount = await importarLutadores();
    const ctsCount = await importarCTs();
    
    await validarDados();
    
    console.log('\n╔═════════════════════════════════════════╗');
    console.log('║  ✅ IMPORTAÇÃO CONCLUÍDA COM SUCESSO! ║');
    console.log(`║  📊 ${lutadoresCount} Lutadores + ${ctsCount} CTs      ║`);
    console.log('╚═════════════════════════════════════════╝\n');
    
    process.exit(0);
    
  } catch (error) {
    console.error('\n❌ ERRO NA IMPORTAÇÃO:', error);
    process.exit(1);
  }
}

// Executar se for chamado diretamente
if (require.main === module) {
  main();
}

module.exports = { importarLutadores, importarCTs, validarDados };
