# Instruções para rodar o projeto


1. Antes criar um arquivo na raiz do projeto chamado ormconfig.json descrito no final do README.
2. Executar um dos comandos: `yarn` ou `npm install`
3. Esse comando cria a estrutura no banco de dados: `yarn typeorm migration:run` ou `npm typeorm migration:run`
4. E por fim: `yarn dev` ou `npm run dev` para colocar o projeto no ar no endereço: http://localhost:3333
5. Rotas para acesso: (/gravacao "POST") (/tabulacao "POST") (/match "GET")


Estrutura do arquivo ormconfig.json:

{
   "type": "postgres", 
   "host": "localhost", 
   "port": 5432,
   "username": "postgres", 
   "password": "123456", 
   "database": "match",
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
