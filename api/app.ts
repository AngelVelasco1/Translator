import express from 'express'
import cors from 'cors'
import { CREDENTIALS } from './config/credentials'
import translateStorage from './routes/translate';

const app = express()

app.use(cors({
    origin: `http://${CREDENTIALS.hostname}:${CREDENTIALS.front_port}`,
    methods: ["GET", "POST", "DELETE", "PUT"],
    credentials: true,
}));

app.use(express.json())
app.use("/api", translateStorage)

export default app;