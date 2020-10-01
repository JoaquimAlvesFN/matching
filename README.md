# Instruções para rodar o projeto

Steps to run this project:

1. Antes criar um arquivo na raiz do projeto chamado descrito logo abaixo: ormconfig.json
2. Executar um dos comandos: `yarn` ou `npm install`
3. Esse comando cria a estrutura no banco de dados: `yarn typeorm migration:run` ou `npm typeorm migration:run`
4. E por fim: `yarn dev` ou `npm rundev`


Estrutura do arquivo ormconfig.json:

{
   "type": "postgres", //Driver do DB
   "host": "localhost", // IP da Rede
   "port": 5432,
   "username": "postgres", //Usuario do banco de dados
   "password": "123456", //Senha de acesso ao banco de dados
   "database": "match", //Nome do banco de dados
   "entities": [
      "./src/models/*.ts"
   ],
   "migrations": [
      "./src/database/migrations/*.ts"
   ],
   "cli": {
      "entitiesDir": "./src/models",
      "migrationsDir": "./src/database/migrations"
   }
}
