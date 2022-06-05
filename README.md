# react-no-cra

react project without create react app

## Usage

```bash
node server.js -U 'me' -p 'password' -d 'localdev' -t 5432
```

## Install

npm install

## Start dev server
npm start

## Build for production
npm run build

### Action items

- [] Add proxy with http-proxy-middleware [guide](https://medium.com/bb-tutorials-and-thoughts/react-how-to-proxy-to-backend-server-5588a9e0347)
- [] Follow guide on business logic but instead of mongo use pg [link](https://faizanv.medium.com/authentication-for-your-react-and-express-application-w-json-web-tokens-923515826e0)


# Common Commands


#### Show tables in database

```sql
\dt
```

#### Delete table in SQL

```sql
DROP TABLE <table_name>
```


#### Delete DB in sql

Angle brackets are simply templating

```sql
DROP DATABASE <db_name>;
```