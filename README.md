# 🎙️ FellasCast — Controle de Eventos BJJ

Um aplicativo web moderno para gerenciar eventos, lutadores e centros de treinamento (CTs) de BJJ.

## ✨ Funcionalidades

- 📅 **Gerenciamento de Eventos**: Crie e organize eventos (podcasts, lutas, especiais)
- 🥋 **Cadastro de Lutadores**: Registre lutadores com faixa, equipe, dados biométricos
- 🏟️ **Cadastro de CTs**: Mantenha informações de centros de treinamento
- 📊 **Importação em Lote**: Importe múltiplos lutadores e CTs via Excel/CSV
- 📤 **Upload de Planilha**: Suporte para Excel (.xlsx) e CSV
- 🔥 **Firebase Integration**: Sincronização em tempo real com Firebase
- 🎨 **Interface Moderna**: Design dark mode com animações suaves
- 📱 **Responsivo**: Funciona em desktop e mobile

## 🚀 Como Começar

### 1. Configurar Firebase

1. Acesse [console.firebase.google.com](https://console.firebase.google.com)
2. Crie um novo projeto
3. Ative o **Firestore Database** em modo de produção
4. Em **Configurações do Projeto → Seus apps**, clique em **Web** e copie o `firebaseConfig`
5. Edite o arquivo `index.html` e substitua os valores em `FIREBASE_CONFIG`
6. Configure as regras do Firestore para permitir leitura e escrita

### 2. Regras do Firestore (Produção)

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if request.auth != null;
    }
  }
}
```

### 3. Deploy

- **GitHub Pages**: Faça push para seu repositório e ative GitHub Pages
- **Vercel**: Conecte seu repositório ao Vercel
- **Netlify**: Faça upload ou conecte ao GitHub
- **Local**: Abra simplesmente o `index.html` no navegador (funciona offline com dados locais)

## 📊 Como Usar

### Seção Painel
- Visualize estatísticas gerais
- Veja os próximos eventos programados
- Controle de eventos por tipo

### Seção Eventos
- Crie novo evento manualmente
- Selecione convidados da lista de lutadores
- Defina horário, tipo e local (CT)
- Adicione links de transmissão

### Seção Lutadores
- Cadastre lutadores individuais
- **Ou importe múltiplos via planilha** 📊
- Edite ou exclua registros
- Busque por nome, equipe ou faixa

### Seção CTs
- Cadastre centros de treinamento
- **Ou importe múltiplos via planilha** 📊
- Registre responsável e endereço
- Edite ou exclua registros

## 📊 Upload de Planilha

### Importar Lutadores

1. Vá em **Lutadores** → **📤 Importar Planilha**
2. Clique em **📥 Baixar template** para obter um modelo
3. Preencha com seus dados
4. Arraste ou selecione o arquivo
5. Visualize o preview
6. Clique em **📤 Importar**

**Estrutura esperada:**
- Coluna A: Nome (obrigatório)
- Coluna B: Instagram
- Coluna C: Faixa
- Coluna D: Grau
- Coluna E: Equipe
- Coluna F: Idade
- Coluna G: Peso (kg)
- Coluna H: Altura (cm)

### Importar CTs

1. Vá em **CTs** → **📤 Importar Planilha**
2. Clique em **📥 Baixar template** para obter um modelo
3. Preencha com seus dados
4. Arraste ou selecione o arquivo
5. Visualize o preview
6. Clique em **📤 Importar**

**Estrutura esperada:**
- Coluna A: Nome do CT (obrigatório)
- Coluna B: Responsável
- Coluna C: Endereço

## 📋 Documentação Completa

- [📊 Guia de Upload de Planilha](./UPLOAD_PLANILHA.md)
- [📋 Exemplos de Dados](./EXEMPLOS_UPLOAD.md)

## 🔧 Stack Técnico

- **Frontend**: HTML5, CSS3, JavaScript (Vanilla)
- **Backend**: Firebase (Firestore)
- **Bibliotecas**:
  - [Firebase SDK](https://firebase.google.com/docs/web/setup)
  - [SheetJS (XLSX)](https://sheetjs.com/) - Leitura de planilhas
- **Design**: CSS-in-HTML com variáveis customizáveis
- **Fonte**: Bebas Neue, DM Sans, JetBrains Mono

## 🎨 Cores & Temas

O aplicativo usa um tema dark mode moderno com cores personalizadas:
- Primária: `#e63946` (Vermelho)
- Secundária: `#7b2d8b` (Roxo)
- Sucesso: `#2d9b6b` (Verde)
- Ouro: `#f4a261` (Destaque)

## 📱 Responsividade

- Desktop: Layout completo com sidebar
- Tablet: Sidebar reduzida
- Mobile: Sidebar ícones, layout compacto

## 🔐 Segurança

- ⚠️ Firebase deve estar configurado com autenticação em produção
- Atualmente usa modo público (permitir leitura e escrita)
- Implemente autenticação para proteção adicional

## 🐛 Troubleshooting

### Firebase não conecta
- Verifique se `FIREBASE_CONFIG` está correto
- Confirme se Firestore está ativado
- Verifique as regras de segurança do Firestore

### Upload não funciona
- Verifique se a primeira linha tem os nomes corretos
- Confirme se o nome está preenchido em todas as linhas
- Tente com um arquivo menor primeiro

### Dados não aparecem
- Verifique console (F12) para erros
- Confirme que Firebase está conectado
- Recarregue a página

## 📞 Suporte

Para mais informações ou reportar problemas, entre em contato.

## 📄 Licença

Todos os direitos reservados. Desenvolvido com ❤️ para a comunidade BJJ.

---

**FellasCast** - Controle de Eventos BJJ | Desenvolvido com ❤️
