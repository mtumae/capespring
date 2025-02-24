import {drizzle} from 'drizzle-orm/neon-http'


const db = drizzle(import.meta.env.VITE_DATABASE_URL)
