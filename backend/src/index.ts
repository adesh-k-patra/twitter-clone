import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { sign } from 'hono/jwt'
import { withAccelerate } from '@prisma/extension-accelerate'
import { authMiddleware } from './middleware'

const DATABASE_URL = "prisma://accelerate.prisma-data.net/?api_key=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlfa2V5IjoiYTFhZmUxMWMtY2I0YS00ZWUxLTljNjUtYzJmNDVjN2Q3MWY0IiwidGVuYW50X2lkIjoiNzYyNjJmZmQ1MDA1YWMxMDYyZmNlN2MxMjc2YzExODlmNjc1MWE0NGYyN2Q2MWRhMGUxZWY0OTMyNGY3MzRhZSIsImludGVybmFsX3NlY3JldCI6IjQwNGEzY2Q4LTkzOTQtNGY5Ny05NzA5LTYyMmU2OTRhYmY4NCJ9.b6wGN7BulKtc0eSiQQMbnLwdfdU36d-FbxV7EhXVT6w"
const prisma = new PrismaClient({
  datasourceUrl: DATABASE_URL,
}).$extends(withAccelerate())
const app = new Hono()
const jwtPassword = "123456"

app.post('/signup', async (c) => {
  const body = await c.req.json()
  const userId = await prisma.user.create({
    data : {
      name : body.name,
      username : body.username,
      password : body.password,
      dob : body.dob,
      following : 0,
      followers : 0,
      dateOfJoining : body.date
    },
    select : {
      id : true
    }
  })
  const token = await sign({userId},jwtPassword)
  return c.json({token})
})

app.post('/login', async (c) => {
  const body = await c.req.json()
  const userId = await prisma.user.findFirst({
    where : {
      username : body.username,
      password : body.password
    },
    select : {
      id : true
    }
  })
  if(userId === null){
    return c.notFound()
  }
  const token = await sign({userId},jwtPassword)
  return c.json({token})
})

export default app