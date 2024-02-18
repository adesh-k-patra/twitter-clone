import { verify } from 'hono/jwt'

const jwtPassword = "123456"

export async function authMiddleware (c:any , next:any){
  const token = c.req.header("Authorization")
  try {
    const decoded = await verify(token, jwtPassword)
    c.req.userId = decoded.userId
    next()
  } catch (err) {
    return c.notFound()
  }
}