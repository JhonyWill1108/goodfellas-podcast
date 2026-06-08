# 🚀 Script de Importação - FellasCast

## 📋 Como Usar

### Pré-requisitos
```bash
npm install firebase-admin
```

### Passo 1: Configure as Credenciais
Edite `import-data.js` e procure por:
```javascript
const serviceAccount = {
  "type": "service_account",
  "project_id": "seu-project-id",
  // ... etc
};
```

**Como obter as credenciais:**
1. Vá em [Firebase Console](https://console.firebase.google.com)
2. Projeto → Configurações (⚙️)
3. Contas de Serviço
4. Gerar Nova Chave Privada
5. Cole todo o JSON no script

### Passo 2: Execute
```bash
node import-data.js
```

### Resultado
```
╔═════════════════════════════════════════╗
║  FellasCast - Importador de Dados      ║
║  Upload de Lutadores e CTs             ║
╚═════════════════════════════════════════╝

📥 Importando Lutadores...

📊 Total de lutadores para importar: 31
✅ Total de lutadores importados: 31

📥 Importando CTs...

📊 Total de CTs para importar: 9
✅ Total de CTs importados: 9

🔍 Validando dados no Firebase...

✅ Lutadores no Firebase: 31
✅ CTs no Firebase: 9

📋 Primeiros 3 Lutadores:
   - Brunno Araruna (MARROM)
   - Camilo Borges (PRETA)
   - Daniel Marchezini (ROXA)

📋 Primeiros 3 CTs:
   - Academia Fit Garra
   - CT GRU TEAM
   - GoodFellas

╔═════════════════════════════════════════╗
║  ✅ IMPORTAÇÃO CONCLUÍDA COM SUCESSO! ║
║  📊 31 Lutadores + 9 CTs               ║
╚═════════════════════════════════════════╝
```

---

## ⚙️ O que o Script Faz

✅ Lê `lutadores_importacao.csv`
✅ Lê `cts_importacao.csv`
✅ Conecta ao Firebase
✅ Faz upload em batch (eficiente)
✅ Valida dados após importação
✅ Mostra resumo

---

## 🔐 Segurança

⚠️ **NÃO commite o arquivo com credenciais!**

Melhores práticas:
1. Use variáveis de ambiente
2. Adicione `import-data.js` ao `.gitignore`
3. Ou use autenticação via Firebase CLI

---

## 📊 Arquivos Necessários

- `lutadores_importacao.csv` ✅
- `cts_importacao.csv` ✅
- `import-data.js` ✅
- Credenciais Firebase

---

## 🐛 Troubleshooting

### Erro: "Cannot find module 'firebase-admin'"
```bash
npm install firebase-admin
```

### Erro: "Invalid service account"
- Verifique se o JSON está correto
- Não há caracteres extras
- Está todo entre as chaves {}

### Erro: "Permission denied"
- Verifique Firestore Rules
- Deve permitir escrita em `lutadores` e `cts`

---

## ✨ Alternativas

Se não quer usar Node.js:
1. **Interface Web**: Use [QUICK_START.md](./QUICK_START.md) - upload manual
2. **Python**: Pode adaptar fácil usando `firebase-admin` Python
3. **Google Sheets**: Sincronizar direto com Firestore

---

## 🎯 Próximas Etapas

Após importar:
1. ✅ Abra `index.html`
2. ✅ Vá em Painel
3. ✅ Veja contadores atualizados
4. ✅ Veja lutadores em Lutadores
5. ✅ Veja CTs em CTs

Tudo sincronizado! 🎉
