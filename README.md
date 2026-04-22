# Registro de Desaparecidos - Gestão de Enchentes

## 📌 Sobre o Projeto

 Este projeto foi desenvolvido a partir do desafio sobre enchentes no Brasil. Uma grande questão é quanto o desaparecimento de pessoas durante essas enchentes.
 A falta de informação gera um impacto emocional maior além nas famílias e, diante disso, este projeto visa ser uma ferramenta de apoio para a busca de pessoas desaparecidas, algo simples de utilizar para o registro, identificação e atualização dessas pessoas.

## 📌 Problema Escolhido

**Registro de pessoas desaparecidas**

### Qual é a dificuldade enfrentada?
- Ausência de dados organizados
- Desencontro de informações

### Quem são as pessoas impactadas?
- Famílias dos desaparecidos
- Equipes de resgate 

### Por que esse problema é relevante?
Pelo sofrimento que gera nos familiares e amigos que ficam sem apoio, sem respostas e com o psicológico fragilizado decorrente da tragédia.

---

## Solução Proposta

### Como o sistema funciona?
É uma simples API para: 
- Cadastrar desaparecidos colocando dados completos sobre eles
- Consultar a lista de desaparecidos
- Buscar desaparecidos por ID, nome, ultimo local visto
- Atualizar se a pessoa já foi encontrada ou não através de um status
- Remover pessoas que já foram encontradas após o registro

### Como ajuda a resolver o problema
 É uma base de dados para facilitar a procura da família quanto aos seus entes desaparecidos. 

### Principal diferencial da proposta
- API de fácil entendimento

---

## Estrutura do Sistema

### Back-end
- **Node.js** com **Express** - ferramenta para criar o servidor.
- **Postman** - Ferramenta para cadastrar, atualizar e deletar novos desaparecidos.
- **SQLite3** - Banco de dados usado.

### 🗄️ Banco de Dados

| Campo              | Descrição            | 
|------------------- |-----------------------------|
|id                  |Identificador                |
|nome                |nome do desaparecido         |
|idade               |idade                        |
|cidade              |cidade onde mora             |
|fisionomia          |características físicas      |
|ultima_localizacao  |último local visto           |
|data_desaparecimento|data do desaparecimento      |
|status              |Status (padrão: Desaparecido)|

### 🔗 Endpoints

| Método | Rota               | Descrição                     |
|--------|--------------------|-------------------------------|
| POST   | /desaparecidos     | Novo registro de desaparecido |
| GET    | /desaparecidos     | Listar os desaparecidos       |
| GET    | /desaparecidos/:id | Buscar desaparecido por ID    |
| PUT    | /desaparecidos/:id | Atualizar status              |
| DELETE | /desaparecidos/:id | Remover desaparecidos         |

---
## Passo a passo para a instalação do projeto

**Tecnologias usadas:**
- Node.js
- Git Bash
- Postman

**1 - Clonar o repositório:**
```bash
git clone https://github.com/usuario/Projeto_DesafioFinal.git
cd Projeto Desafio Final
```

**2 - Instalação:**
```bash
npm install 
```

**3 - Execução:**
```bash
npm run dev
```

Servidor disponível em: http://localhost:3000


**Como cadastrar usando Postman:**
Body (JSON):
```
json
{
  "nome": "Paloma Albuquerque",
  "idade": "50,
  "cidade": "Petrópolis",
  "fisionomia": "cabelo curto loiro, estatura baixa",
  "ultima_localizacao": " Em frente ao supermercado",
  "data_desaparecimento": "19-03-2026"
}
```

---
Este projeto foi desenvolvido para fins de aprendizado em back-end com Node.js
---