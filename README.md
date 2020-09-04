# Comic Burger - Back-end

[Introdução](#introdução-hamburger) | [Como utilizar](#como-utilizar-computer) | [Endpoints](#endpoints) | [Tecnologias e bibliotecas utilizadas](#tecnologias-e-bibliotecas-utilizadas-star) | [Implementações futuras](#implementações-futuras)

---

## Introdução :hamburger:

Criação de uma _API rest_, para uma hamburgueria com o banco de dados relacional dos produtos do menu e pedidos.

A API foi desenvolvida com [Node.js](https://nodejs.org/), [Express](https://expressjs.com/), [Sequelize](https://sequelize.org), [PostgreSQL](https://www.postgresql.org/docs/) e outras bibliotecas auxiliares na plataforma [Docker](https://www.docker.com/) e hospedagem no [Heroku](https://www.heroku.com/home).

## Como utilizar :computer:

### Deploy

É possível acessar a API pelo [link](https://api-comic-burger.herokuapp.com/) e verificar aqui o [menu](https://api-comic-burger.herokuapp.com/api/menu) e [pedidos](https://api-comic-burger.herokuapp.com/api/order).

### Local

- Clone o projeto na sua máquina executando o seguinte comando no seu terminal:

```sh
git clone https://github.com/camilagerarde/SAP004-burger-queen-api
```

- Instale as dependências do projeto com o comando:

```sh
npm install
```

- Rode o projeto na sua máquina com: (o ambiente pode ser _dev_ ou _db_)

```sh
docker compose up <ambiente>
```

_Obs. Caso retorne erro, talvez seja necessário o uso de `sudo` no início do comando, dessa forma: `sudo docker compose up <ambiente>`_

- E visualize no seu navegador com o link:

```sh
http://localhost:3000
```

**Menu:**

```sh
http://localhost:3000/api/menu
```

**Pedidos:**

```sh
http://localhost:3000/api/order
```

## Endpoints

### `/menu`

- [ ] `GET /menu`
- [ ] `GET /menu/:productid`
- [ ] `POST /menu`
- [ ] `PUT /menu/:productid`
- [ ] `DELETE /menu/:productid`

### `/order`

- [ ] `GET /order`
- [ ] `GET /order/:orderid`
- [ ] `POST /order`
- [ ] `PUT /order/:orderid`
- [ ] `DELETE /order/:orderid`

## Tecnologias e bibliotecas utilizadas :star:

- [Node.js](https://nodejs.org/)
- [Docker](https://www.docker.com/)
- [Sequelize](https://sequelize.org)
- [Express](https://expressjs.com/)
- [PostgreSQL](https://www.postgresql.org/docs/)
- [Babel](https://babeljs.io/)
- [Dotenv](https://www.npmjs.com/package/dotenv)
- [Postman](https://www.getpostman.com)
- [Eslint](https://www.npmjs.com/package/eslint-plugin-react)
- [Heroku](https://www.heroku.com/home)

## Implementações futuras

- Testes
- Inclusão dos itens nos pedidos
- Autenticação de usuários

**Projeto realizado por [Camila Cunha](https://github.com/camilagerarde), para o Bootcamp da [Laboratória](https://github.com/Laboratoria).**

[![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)](https://forthebadge.com)
