# ⚡ Quick Start - Upload de Planilha

## 🎯 Objetivo
Importar múltiplos lutadores e CTs rapidamente via arquivo Excel ou CSV.

---

## 🚀 3 Passos Simples

### Passo 1: Clique no botão de Importação
```
Seção LUTADORES ou CTs
          ↓
[📤 Importar Planilha] ← Clique aqui
```

### Passo 2: Escolha seu arquivo
```
Opção A: Clique para selecionar
        ↓
   [Selecionar arquivo]

Opção B: Arraste o arquivo
        ↓
   [Drop zone]
```

### Passo 3: Confirme a importação
```
        [Preview]
            ↓
   Revise os dados
            ↓
   [📤 Importar]
```

---

## 📊 Dados Suportados

### LUTADORES
| Campo | Obrigatório | Exemplo |
|-------|-------------|---------|
| Nome | ✅ | João Silva |
| Instagram | ❌ | joaosilva |
| Faixa | ❌ | AZUL |
| Grau | ❌ | 3° |
| Equipe | ❌ | Atos |
| Idade | ❌ | 25 |
| Peso (kg) | ❌ | 78 |
| Altura (cm) | ❌ | 175 |

### CTs
| Campo | Obrigatório | Exemplo |
|-------|-------------|---------|
| Nome do CT | ✅ | CT Atos |
| Responsável | ❌ | João Silva |
| Endereço | ❌ | Rua A, 123 - SP |

---

## 📥 Baixe o Template

Dentro do modal, clique em:
```
[📥 Baixar template]
        ↓
Template Excel pronto para usar
```

---

## ✅ Checklist Antes de Importar

- [ ] Primeira linha contém nomes das colunas corretos
- [ ] Campo **Nome** está preenchido (todos os registros)
- [ ] Sem linhas vazias no meio dos dados
- [ ] Arquivo é .xlsx, .xls ou .csv
- [ ] Dados validados no preview

---

## 🎨 Estrutura do Excel

```
┌─────────────┬──────────┬───────┬──────┬────────┬───────┬──────┬────────┐
│ Nome (A)    │ Instagram│ Faixa │ Grau │ Equipe │ Idade │ Peso │ Altura │
├─────────────┼──────────┼───────┼──────┼────────┼───────┼──────┼────────┤
│ João Silva  │ jsilva   │ AZUL  │ 3°   │ Atos   │ 25    │ 78   │ 175    │
│ Maria S.    │ marias   │ ROXA  │      │Alliance│ 30    │ 65   │ 168    │
└─────────────┴──────────┴───────┴──────┴────────┴───────┴──────┴────────┘
```

---

## 🔄 Fluxo Completo

```
   [Importar Planilha]
           ↓
   Selecionar Arquivo
           ↓
   Validar Estrutura
           ↓
   Preview (10 primeiros)
           ↓
   Usuário Confirma
           ↓
   Batch Import Firebase
           ↓
   ✅ Sucesso / ❌ Erro
           ↓
   [Recarregar tabela]
```

---

## ⚙️ Arquivos Formatos

### Excel (.xlsx)
- Mais robusto
- Suporta formatação
- Recomendado

### CSV
- Compatível com qualquer editor
- Simples e rápido
- Funciona bem também

---

## 🚨 Erros Comuns

### ❌ "Planilha vazia"
→ Adicione dados na planilha

### ❌ "Linha X: Nome é obrigatório"
→ Preencha a coluna Nome em todas as linhas

### ❌ Arquivo não apareça
→ Verifique: .xlsx, .xls ou .csv

### ❌ Nada acontece ao clicar
→ Verifique console (F12) para erros

---

## 💡 Dicas Pro

1. **Teste com poucos registros** antes de importar tudo
2. **Use o template fornecido** como base
3. **Verifique nomes de colunas** - são sensíveis a maiúsculas
4. **Remova espaços extras** nas células
5. **Firebase deve estar conectado** (verifique o badge)

---

## 📞 Suporte Rápido

| Problema | Solução |
|----------|---------|
| Firebase não conecta | Verifique FIREBASE_CONFIG |
| Arquivo não reconhecido | Use .xlsx ou .csv |
| Dados não salvam | Confira permissões Firestore |
| Nomes de colunas errados | Copie do template |

---

## 📊 Exemplo Pronto para Usar

### Lutadores (CSV)
```csv
Nome,Instagram,Faixa,Grau,Equipe,Idade,Peso,Altura
João Silva,joaosilva,AZUL,3°,Atos,25,78,175
Maria Santos,maria,ROXA,,Alliance,30,65,168
```

### CTs (CSV)
```csv
Nome do CT,Responsável,Endereço
CT Atos,João Silva,Rua A - SP
CT Alliance,Maria Santos,Av. B - RJ
```

---

## 🎯 Próximos Passos

1. ✅ Clique em **"📤 Importar Planilha"**
2. ✅ Baixe o template
3. ✅ Preencha com seus dados
4. ✅ Importe!

**Pronto! Seus dados estão no Firebase!** 🎉

---

Para mais detalhes, veja:
- 📋 [UPLOAD_PLANILHA.md](./UPLOAD_PLANILHA.md)
- 📋 [EXEMPLOS_UPLOAD.md](./EXEMPLOS_UPLOAD.md)
- 📖 [README.md](./README.md)
