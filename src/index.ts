import { Hono } from 'hono'
import db from './db.json'

const app = new Hono()

app.get('/', (c) => c.json(db))

export default app
