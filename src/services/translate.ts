import axios from 'axios'
import { FromLanguage, ToLanguages } from 'src/interfaces/general'

export const translateTextPost = async (userText: string, fromLanguage: FromLanguage, toLanguage: ToLanguages) => {
    try {
        const response = await axios.post(`http://${import.meta.env.VITE_HOSTNAME}:${import.meta.env.VITE_BACKEND_PORT}/api/translate`, {
            userText, fromLanguage, toLanguage
        })
        return response.data

    } catch(err) {
        console.error(err);
        throw err  
    }
}