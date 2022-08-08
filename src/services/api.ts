import { client, q } from './faunaClient'

interface Coffee {
  id: string
  name: string
  description: string
  image: string
  price: number
  categories: string[]
}

export async function getAllCoffees() {
  const response: { data: [{ data: Coffee; ref: { value: { id: string } } }] } =
    await client.query(
      q.Map(
        q.Paginate(q.Documents(q.Collection('coffees'))),
        q.Lambda('x', q.Get(q.Var('x'))),
      ),
    )

  return response.data.map((item) => ({ ...item.data, id: item.ref.value.id }))
}
