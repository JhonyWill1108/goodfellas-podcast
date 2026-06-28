# 🏗️ Arquitetura - Upload de Planilha

## 📊 Fluxo de Dados

```
┌─────────────────────────────────────────────────────────────┐
│                   INTERFACE DO USUÁRIO                       │
├─────────────────────────────────────────────────────────────┤
│                                                               │
│  [Lutadores] tab     [CTs] tab                               │
│     ↓                  ↓                                      │
│  [📤 Importar]    [📤 Importar]                              │
│     ↓                  ↓                                      │
│  ┌─────────────────────────────┐                             │
│  │   Modal de Upload            │                             │
│  ├─────────────────────────────┤                             │
│  │ [📁 Drop Zone]              │                             │
│  │ Selecione ou arraste arquivo│                             │
│  └─────────────────────────────┘                             │
└─────────────────────────────────────────────────────────────┘
                         ↓
┌─────────────────────────────────────────────────────────────┐
│              PROCESSAMENTO DE ARQUIVO                        │
├─────────────────────────────────────────────────────────────┤
│                                                               │
│  handleFileUpload(event)                                     │
│    ├── FileReader.readAsBinaryString()                       │
│    ├── XLSX.read()                   [SheetJS]              │
│    └── XLSX.utils.sheet_to_json()                            │
│         ↓                                                     │
│  validarPlanilha(rows, tipo)                                 │
│    ├── Verifica linhas vazias                               │
│    ├── Verifica campos obrigatórios                         │
│    └── Retorna erro ou continua                             │
│         ↓                                                     │
│  previewUpload(rows, tipo)                                   │
│    ├── Armazena em uploadData                               │
│    ├── Cria tabela com 10 primeiros                         │
│    └── Habilita botão [📤 Importar]                         │
└─────────────────────────────────────────────────────────────┘
                         ↓
┌─────────────────────────────────────────────────────────────┐
│              USUÁRIO REVISA E CONFIRMA                       │
├─────────────────────────────────────────────────────────────┤
│                                                               │
│  [Preview Table]                                             │
│  - 10 primeiros registros                                   │
│  - Contador: \"X registros prontos\"                          │
│                                                               │
│  Usuário clica [📤 Importar]                                 │
└─────────────────────────────────────────────────────────────┘
                         ↓
┌─────────────────────────────────────────────────────────────┐
│           IMPORTAÇÃO AO FIREBASE                             │
├─────────────────────────────────────────────────────────────┤
│                                                               │
│  importarPlanilha()                                          │
│    ├── writeBatch(db)                                        │
│    ├── Iterate rows                                          │
│    │   └── batch.set(doc(), data)                            │
│    ├── batch.commit()                 [Firebase]             │
│    └── Feedback: \"✓ X registros importados\"                │
│         ↓                                                     │
│  Reload Data:                                                │
│    ├── loadLutadores() ou loadCTs()                          │
│    ├── renderAll()                                           │
│    └── showSection()                                         │
└─────────────────────────────────────────────────────────────┘
                         ↓
┌─────────────────────────────────────────────────────────────┐
│              DADOS APARECEM NA TABELA                        │
├─────────────────────────────────────────────────────────────┤
│                                                               │
│  Tabela de Lutadores/CTs                                    │
│  ├── Novos registros listados                               │
│  ├── Busca e paginação atualizadas                         │
│  └── Contadores do Painel atualizados                       │
└─────────────────────────────────────────────────────────────┘
```

---

## 🔧 Stack Técnico

```
┌─ FRONTEND ────────────────┐
│                           │
│  HTML5                    │
│  └── Estrutura            │
│                           │
│  CSS3                     │
│  └── Estilos + temas      │
│                           │
│  JavaScript (Vanilla)     │
│  ├── DOM manipulation     │
│  ├── Event handlers       │
│  └── Async/await          │
│                           │
│  Bibliotecas              │
│  ├── Firebase SDK         │
│  └── SheetJS (XLSX)       │
│                           │
└───────────────────────────┘
          ↓
┌─ BACKEND ─────────────────┐
│                           │
│  Firebase                 │
│  ├── Firestore Database   │
│  ├── Batch Operations     │
│  └── Real-time Sync       │
│                           │
└───────────────────────────┘
```

---

## 📦 Componentes

### 1. Modal de Upload
```
Modal
├── Header
│   ├── Título: \"IMPORTAR PLANILHA\"
│   └── Botão fechar
├── Body
│   ├── Seção: Formatos
│   │   └── Badges: Excel, CSV
│   ├── Seção: Upload
│   │   └── Drop Zone (click + drag)
│   ├── Seção: Preview
│   │   └── Tabela dinamicamente gerada
│   └── Seção: Estrutura esperada
│       ├── Instruções
│       └── Botão: Baixar template
└── Footer
    ├── Cancelar
    └── Importar (desativado até preview)
```

### 2. Variáveis de Estado
```javascript
let uploadData = null;      // Dados da planilha
let uploadTipo = null;      // 'lutadores' ou 'cts'
```

### 3. Funções Principais
```javascript
// Abrir modal
openUploadLutadores()
openUploadCTs()

// Processar arquivo
handleFileUpload(event)
validarPlanilha(rows, tipo)
previewUpload(rows, tipo)

// Importar
importarPlanilha()

// Baixar template
downloadTemplateLutadores()
downloadTemplateCTs()
```

---

## 📋 Modelo de Dados

### Documento: Lutador
```json
{
  "nome": "João Silva",
  "instagram": "joaosilva",
  "faixa": "AZUL",
  "grau": "3°",
  "equipe": "Atos",
  "idade": "25",
  "peso": "78",
  "altura": "175"
}
```

### Documento: CT
```json
{
  "nome": "CT Atos",
  "dono": "João Silva",
  "endereco": "Rua A, 123 - São Paulo, SP"
}
```

---

## 🔄 Ciclo de Vida

```
1. INICIALIZAÇÃO
   └── Modal criado (display: none)
       └── Listeners adicionados

2. ABERTURA
   └── Usuário clica [📤 Importar]
       └── openUpload*()
           ├── Reset state
           ├── Atualizar template info
           └── Mostrar modal

3. SELEÇÃO DE ARQUIVO
   └── Usuário seleciona/arrasta arquivo
       └── handleFileUpload()
           ├── FileReader
           ├── XLSX.read()
           ├── Validar
           └── Preview

4. REVISÃO
   └── Usuário revisa preview
       └── [📤 Importar] habilitado

5. IMPORTAÇÃO
   └── Usuário clica [📤 Importar]
       └── importarPlanilha()
           ├── writeBatch
           ├── Commit
           ├── Reload
           └── Close modal

6. FINALIZAÇÃO
   └── Dados aparecem na tabela
       └── Contadores atualizados
```

---

## 🎯 Pontos de Integração

### Com Firebase
- ✅ Batch operations para importação eficiente
- ✅ Colecções: `lutadores`, `cts`
- ✅ Auto-ID para novos documentos

### Com Interface Existente
- ✅ Reutiliza modal overlays
- ✅ Mesmo padrão de cores/temas
- ✅ Integração com renderAll()
- ✅ Toast notifications

### Com Dados Existentes
- ✅ Mesma estrutura de documentos
- ✅ Compatível com renderLutadores() e renderCTs()
- ✅ Atualiza contadores do Painel

---

## 🔒 Validações em Camadas

```
CAMADA 1: Client-side Validation
├── Arquivo não vazio
├── Estrutura de colunas
└── Campos obrigatórios

      ↓

CAMADA 2: Firebase Rules
├── Autenticação (se configurado)
├── Permissões de escrita
└── Estrutura de documento
```

---

## ⚡ Performance

```
Operação: Importar 100 registros

Timeline:
├── Read file: ~50ms
├── Parse XLSX: ~100ms
├── Validate: ~10ms
├── Preview render: ~50ms
└── Batch commit: ~500-1000ms
   └── Total: ~1.2 segundos

Firebase Batch:
├── Max docs: 500
├── Operações: Set/Update/Delete
└── Atomic: Tudo ou nada
```

---

## 🌳 Estrutura de Arquivos

```
/goodfellas-podcast
├── index.html               ← APP + NOVO UPLOAD
├── README.md               ← DOCUMENTAÇÃO PRINCIPAL
├── UPLOAD_PLANILHA.md      ← GUIA DE USO
├── EXEMPLOS_UPLOAD.md      ← EXEMPLOS PRÁTICOS
├── QUICK_START.md          ← INÍCIO RÁPIDO
├── CHANGELOG.md            ← HISTÓRICO
├── IMPLEMENTACAO.md        ← RESUMO TÉCNICO
└── .git/                   ← VERSION CONTROL
```

---

## 🔐 Fluxo de Segurança

```
1. Usuário seleciona arquivo
   ↓
2. Validação local
   ├── Extensão verificada
   ├── Conteúdo parseado
   └── Estrutura validada
   ↓
3. Dados limpos (trim)
   ↓
4. Enviado ao Firebase
   ↓
5. Firestore valida
   ├── Regras de segurança
   ├── Estrutura de documento
   └── Permissões de usuário
   ↓
6. Dados salvos/rejeitados
   ↓
7. Feedback ao usuário
```

---

## 📊 Diagrama UML Simplificado

```
┌─────────────────────┐
│   UploadModal       │
├─────────────────────┤
│ - uploadData        │
│ - uploadTipo        │
├─────────────────────┤
│ + openUpload*()     │
│ + handleFile()      │
│ + validate()        │
│ + preview()         │
│ + import()          │
└─────────────────────┘
          ↑
          │ uses
          │
┌─────────────────────┐
│     Firebase        │
├─────────────────────┤
│ + writeBatch()      │
│ + addDoc()          │
│ + getDocs()         │
└─────────────────────┘

┌─────────────────────┐
│   SheetJS (XLSX)    │
├─────────────────────┤
│ + read()            │
│ + sheet_to_json()   │
│ + aoa_to_sheet()    │
│ + writeFile()       │
└─────────────────────┘
```

---

## 🎨 Estado da UI

```
Estado: INICIAL
└── Modal: hidden
    Button: habilitado
    Preview: vazio

        ↓ (Clica no botão)

Estado: ABERTO
└── Modal: visible
    Drop zone: pronto
    Preview: vazio

        ↓ (Seleciona arquivo)

Estado: CARREGANDO
└── File: processando
    Preview: (aguardando)

        ↓ (Validação ok)

Estado: PREVIEW
└── Modal: aberto
    Preview: visível
    Button: habilitado
    Info: \"X registros prontos\"

        ↓ (Clica em importar)

Estado: IMPORTANDO
└── Button: desativado
    Texto: \"⏳ Importando...\"

        ↓ (Batch commit concluído)

Estado: SUCESSO
└── Toast: \"✓ X importados\"
    Modal: fecha
    Tabela: atualizada
```

---

## 📈 Escalabilidade

Considerações:
- ✅ Firebase Batch suporta até 500 operações
- ✅ Para 1000+ docs: dividir em múltiplos batches
- ✅ SheetJS otimizado para arquivos grandes
- ✅ Preview limita a 10 registros (performático)

Futuros melhoramentos:
- [ ] Chunking para lotes de 500+
- [ ] Progress bar para importações longas
- [ ] Cancelamento de importação em progresso
- [ ] Resumo detalhado pós-importação

---

## ✅ Checklist de Implementação

- [x] Adicionar biblioteca XLSX
- [x] Criar modal de upload
- [x] Implementar drag-and-drop
- [x] Criar funções de validação
- [x] Criar preview
- [x] Implementar batch import
- [x] Adicionar templates
- [x] Criar documentação
- [x] Testar fluxo completo
- [x] Integrar com interface

---

**Arquitetura completa e documentada!** ✅
