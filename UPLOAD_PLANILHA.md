# 📊 Guia de Upload de Planilha

O FellasCast agora permite importar lutadores e CTs em lote através de planilhas Excel ou CSV!

## Como Usar

### 1️⃣ Importar Lutadores

1. Acesse a seção **Lutadores** no menu
2. Clique no botão **📤 Importar Planilha**
3. Na janela que abrir:
   - Clique em **"📥 Baixar template"** para obter um modelo pré-formatado
   - Preencha o arquivo com seus dados
   - Clique no botão de upload ou arraste o arquivo
4. Visualize os dados no preview
5. Clique em **📤 Importar** para salvar no Firebase

### 2️⃣ Importar CTs

1. Acesse a seção **CTs** no menu
2. Clique no botão **📤 Importar Planilha**
3. Na janela que abrir:
   - Clique em **"📥 Baixar template"** para obter um modelo pré-formatado
   - Preencha o arquivo com seus dados
   - Clique no botão de upload ou arraste o arquivo
4. Visualize os dados no preview
5. Clique em **📤 Importar** para salvar no Firebase

---

## 📋 Estrutura das Planilhas

### Lutadores

| Coluna | Campo | Tipo | Obrigatório |
|--------|-------|------|------------|
| A | Nome | Texto | ✅ Sim |
| B | Instagram | Texto (sem @) | ❌ Não |
| C | Faixa | Texto | ❌ Não |
| D | Grau | Texto (1°, 2°, etc) | ❌ Não |
| E | Equipe | Texto | ❌ Não |
| F | Idade | Número | ❌ Não |
| G | Peso | Número (kg) | ❌ Não |
| H | Altura | Número (cm) | ❌ Não |

**Exemplo:**
```
Nome               | Instagram    | Faixa | Grau | Equipe    | Idade | Peso | Altura
João Silva         | joaosilva    | AZUL  | 3°   | Atos      | 25    | 78   | 175
Maria Santos       | mariasantos  | ROXA  |      | Alliance  | 30    | 65   | 168
Pedro Oliveira     | pedrooliveira| PRETA | 2°   | Gracie    | 35    | 82   | 180
```

### CTs

| Coluna | Campo | Tipo | Obrigatório |
|--------|-------|------|------------|
| A | Nome do CT | Texto | ✅ Sim |
| B | Responsável | Texto | ❌ Não |
| C | Endereço | Texto | ❌ Não |

**Exemplo:**
```
Nome do CT    | Responsável | Endereço
CT Atos       | João Silva  | Rua A, 123 - São Paulo, SP
CT Alliance   | Maria Santos| Av. B, 456 - Rio de Janeiro, RJ
CT Gracie     | Pedro Costa | Rua C, 789 - Belo Horizonte, MG
```

---

## ✅ Validações

- **Campos obrigatórios**: Nome (lutadores) e Nome do CT devem estar preenchidos
- **Arquivos aceitos**: `.xlsx`, `.xls`, `.csv`
- **Primeira linha**: Deve conter os nomes das colunas exatamente como especificado
- **Máximo por importação**: Sem limite!

---

## 🎯 Dicas

- Use o template fornecido como ponto de partida
- Linhas vazias são ignoradas
- Caracteres especiais e acentos são preservados
- A importação é rápida - todos os registros são salvos de uma vez
- Você verá um preview com até 10 primeiros registros antes de confirmar

---

## 🚀 Exemplos de Uso

### Cenário 1: Importar equipe inteira
1. Baixe o template de lutadores
2. Peça à sua equipe para preencher com todos os dados
3. Combine os arquivos em um único Excel
4. Importe tudo de uma vez

### Cenário 2: Importação mensal
1. Mantenha um arquivo atualizado com todos os lutadores
2. Toda vez que houver novos cadastros, importe o arquivo
3. O sistema não duplica registros automaticamente, então você pode reimportar com segurança

### Cenário 3: Migrar de outro sistema
1. Exporte os dados do sistema anterior em CSV ou Excel
2. Remapeie as colunas para coincidir com o template do FellasCast
3. Importe tudo de uma vez

---

## ❓ Perguntas Frequentes

**P: Posso editar um registro após importação?**
R: Sim! Use os botões de edição (✏️) na tabela para fazer ajustes individuais.

**P: E se cometer um erro durante a importação?**
R: Use os botões de exclusão (🗑️) para remover registros incorretos ou use a edição para corrigir.

**P: Qual é o tamanho máximo do arquivo?**
R: O navegador aguenta arquivos até alguns MB, mas teste com arquivos menores primeiro.

**P: Os dados são salvos no Firebase?**
R: Sim! Após a importação, todos os dados ficam sincronizados no seu projeto Firebase.

---

## 📞 Precisa de Ajuda?

Certifique-se de que:
1. ✅ O Firebase está conectado (verifique o badge no canto inferior esquerdo)
2. ✅ As colunas estão com os nomes exatos
3. ✅ O campo obrigatório "Nome" ou "Nome do CT" está preenchido
4. ✅ Você tem permissão de escrita no Firestore
