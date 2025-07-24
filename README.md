
# 🏎️ Mini Kart Battle - Jogo de Corrida em Node.js

Um jogo de corrida estilo Mario Kart desenvolvido em **Node.js**, onde dois jogadores se enfrentam em uma corrida com personagens clássicos e eventos aleatórios como **bombas**, **cascos**, **turbo** e muito mais!

---

## 🎮 Personagens Disponíveis

Cada personagem possui atributos diferentes de **Velocidade (speed)**, **Dirigibilidade (handling)** e **Poder (power)**:

<img src="./docs/header.gif" alt="Mario Kart" width="60" heigth="60">

| Personagem | Velocidade | Dirigibilidade | Poder |
|------------|------------|----------------|--------|
| Mario      | 4          | 3              | 3      |
| Luigi      | 3          | 4              | 4      |
| Peach      | 3          | 4              | 2      |
| Yoshi      | 2          | 4              | 3      |
| Bowser     | 5          | 2              | 5      |
| Kong       | 2          | 2              | 5      |

---

## 🚀 Como Jogar

### 1. Pré-requisitos

- Node.js instalado (versão 16 ou superior)

### 2. Instalação

Clone o repositório:

```bash
git clone https://github.com/Jolimpioo/mini-kart-battle.git
cd mini-kart-battle
```

Instale as dependências:

```bash
npm install
```

### 3. Execute o jogo

```bash
node src/index.js
```

Siga as instruções no terminal para:

- Escolher seu personagem
- Acompanhar os blocos de corrida (RETA, CURVA ou CONFRONTO)
- Observar os eventos aleatórios
- Ver quem ganha no final!

---

## 🧠 Como Funciona

A corrida tem **5 rodadas**. Em cada rodada, um dos seguintes **blocos** é sorteado:

- 🛣️ **RETA** – Testa a **velocidade** dos personagens.
- 🔄 **CURVA** – Testa a **dirigibilidade**.
- 🥊 **CONFRONTO** – Testa o **poder** e aplica eventos de ataque/defesa com chances de bombas e bônus!

Cada teste envolve rolagem de dados somado ao atributo. Quem tiver maior total ganha pontos e ativa eventos!

---

## 🎲 Eventos Aleatórios

Durante a corrida, eventos aleatórios podem ser ativados:

### RETA

- 🪙 Moeda (+1 ponto)
- 🌟 Estrela (+2 pontos)

### CURVA

- 🍄 Cogumelo (+1 ponto)
- 🌻 Flor de Fogo (+2 pontos)

### CONFRONTO

- 🐢 Casco (-1 ponto do adversário)
- 💣 Bomba (-2 pontos do adversário)
- 🚀 Turbo (+1 ponto extra para o vencedor – chance aleatória)

---

## 📁 Estrutura de Pastas

```
src
├── characters/
│   └── charactersList.js       # Lista dos personagens
├── engine/
│   ├── retaEngine.js
│   ├── curvaEngine.js
│   ├── confrontoEngine.js
│   └── raceEngine.js
├── utils/
│   ├── dice.js                 # Função de rolagem de dado
│   ├── logger.js               # Logs formatados e verificação de vencedor
│   ├── randomEvents.js         # Eventos aleatórios
│   ├── selectCharacters.js     # Seleção dos personagens via Inquirer
│   ├── testSkill.js            # Testa habilidades com dado + atributo
│   └── sleep.js                # Delay entre rodadas
└── index.js                    # Arquivo principal
```

---

## ✨ Créditos

Criado por [José Olimpio de Melo Neto](https://github.com/Jolimpioo)  
Inspirado em Mario Kart e jogos de corrida com elementos aleatórios.

---

## 📜 Licença

Este projeto é licenciado sob a [MIT License](LICENSE).
