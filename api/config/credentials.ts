import dotenv from "dotenv"
dotenv.config();

export const CREDENTIALS = {
    "hostname": process.env.VITE_HOSTNAME,
    "front_port": process.env.VITE_FRONTEND_PORT,
    "back_port": process.env.VITE_BACKEND_PORT,
    "deepl_key": process.env.DEEPL_API_KEY as string
}