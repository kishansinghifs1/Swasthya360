import { Hono } from 'hono'
import { userRouter } from './routes/userRoutes'

const app = new Hono<{
  Bindings: {
   Gemin_API : string
   WHATSAPP_TOKEN : string
   WHATSAPP_PHONE_NUMBER_ID : string
   WHATSAPP_API_URL : string
   LONG_ACCESS_TOKEN: string;
  }
}>()

app.route('/api/v1/webhook' , userRouter);

export default app