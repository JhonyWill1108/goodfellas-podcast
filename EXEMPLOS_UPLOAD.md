# 📋 Exemplos de Dados para Upload

Este arquivo contém exemplos de dados formatados corretamente que você pode usar como referência.

## Exemplo Completo: Lutadores

```
Nome                    | Instagram      | Faixa          | Grau | Equipe           | Idade | Peso | Altura
---|---|---|---|---|---|---|---
João Silva              | joaosilva      | AZUL           | 3°   | Atos             | 25    | 78   | 175
Maria Santos            | mariasantos    | ROXA           |      | Alliance         | 30    | 65   | 168
Pedro Oliveira          | pedrooliveira  | PRETA          | 2°   | Gracie           | 35    | 82   | 180
Ana Costa               | anacosta       | BRANCA         |      | Atos             | 20    | 60   | 162
Carlos Mendes           | carlosmendes   | AZUL           | 2°   | CheckMat         | 28    | 75   | 176
Fernanda Lima           | fernandalima   | CINZA          |      | Alliance         | 23    | 62   | 165
Roberto Gomes           | robertogomes   | ROXA           | 1°   | Gracie           | 32    | 80   | 178
Juliana Santos          | julianasantos  | LARANJA        |      | Atos             | 27    | 68   | 170
Marco Aurelio           | marcoaurelio   | PRETA          | 3°   | CheckMat         | 38    | 85   | 182
Beatriz Ferreira        | beatrizf       | AMARELA        |      | Alliance         | 22    | 58   | 160
```

## Exemplo Completo: CTs

```
Nome do CT              | Responsável        | Endereço
---|---|---
CT Atos                 | João Silva         | Rua A, 123 - São Paulo, SP - 01234-567
CT Alliance             | Maria Santos       | Av. Paulista, 456 - São Paulo, SP - 01311-200
CT Gracie               | Pedro Costa        | Rua B, 789 - Rio de Janeiro, RJ - 20040-020
CheckMat São Paulo      | Carlos Oliveira    | Av. Morumbi, 999 - São Paulo, SP - 05651-000
Alliance Belo Horizonte | Ana Ferreira       | Rua C, 111 - Belo Horizonte, MG - 30140-071
Atos Salvador           | Roberto Silva      | Av. Sete de Setembro, 222 - Salvador, BA - 40060-160
Gracie Zona Leste       | Fernanda Costa     | Rua do Comércio, 333 - São Paulo, SP - 03210-000
Nova Luta               | Marcus Aurelio     | Estrada do M'Boi Mirim, 444 - São Paulo, SP - 04850-000
CheckMat Itaquera       | Juliana Rodrigues  | Av. Itaquera, 555 - São Paulo, SP - 08210-000
Alliance Vila Maria     | Patricia Gomes     | Rua dos Pinheiros, 666 - São Paulo, SP - 02139-000
```

## Faixas Válidas

```
BRANCA
CINZA
CINZA/PRETA
AMARELA
AMARELA/PRETA
LARANJA
LARANJA/PRETA
VERDE
VERDE/PRETA
AZUL
ROXA
MARROM
PRETA
CORAL
VERMELHA
```

## Graus Válidos

```
(deixar em branco para sem grau)
1°
2°
3°
4°
5°
6°
7°
8°
9°
10°
```

## Dicas Adicionais

### Para Excel
- Use a primeira linha para os nomes das colunas
- Salve como `.xlsx` para melhor compatibilidade
- Não deixe espaços em branco extras no início ou fim das células
- Números podem estar formatados ou como texto - ambos funcionam

### Para CSV
- Separe as colunas com vírgula (`,`) ou ponto-e-vírgula (`;`)
- A primeira linha deve conter os nomes das colunas
- Valores com espaços ou vírgulas devem estar entre aspas
- Codificação: UTF-8 (para preservar acentos)

### Exemplo de CSV para Lutadores
```csv
Nome,Instagram,Faixa,Grau,Equipe,Idade,Peso,Altura
João Silva,joaosilva,AZUL,3°,Atos,25,78,175
Maria Santos,mariasantos,ROXA,,Alliance,30,65,168
```

### Exemplo de CSV para CTs
```csv
Nome do CT,Responsável,Endereço
CT Atos,João Silva,"Rua A, 123 - São Paulo, SP"
CT Alliance,Maria Santos,"Av. Paulista, 456 - São Paulo, SP"
```

---

## 📌 Checklist Antes de Importar

- [ ] Primeira linha com nomes corretos das colunas
- [ ] Nome (lutadores) ou "Nome do CT" preenchido em todas as linhas
- [ ] Sem linhas vazias no meio dos dados
- [ ] Sem caracteres especiais problemáticos (exceto acentos)
- [ ] Arquivo salvo com extensão correta (.xlsx, .xls ou .csv)
- [ ] Testou com poucos registros primeiro?

---

## 🎯 Como Proceder

1. Copie os dados de exemplo acima
2. Cole em seu software de planilha (Excel, Google Sheets, LibreOffice)
3. Personalize com seus dados
4. Salve em Excel ou CSV
5. Use o botão de importação no FellasCast

**Pronto! Seus dados serão importados em segundos!** ⚡
