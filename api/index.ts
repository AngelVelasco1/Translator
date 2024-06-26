import app from './app.ts'
import { CREDENTIALS } from './config/credentials.ts'

app.listen(CREDENTIALS.back_port, () => {
    console.log(`Listening on http://${CREDENTIALS.hostname}:${CREDENTIALS.back_port}`);
})