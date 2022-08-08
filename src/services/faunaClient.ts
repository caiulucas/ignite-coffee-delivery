import faunadb from 'faunadb'

const client = new faunadb.Client({
  secret: import.meta.env.VITE_FAUNA_DB_KEY,
  domain: import.meta.env.VITE_FAUNA_DOMAIN,
})

const q = faunadb.query
export { client, q }
