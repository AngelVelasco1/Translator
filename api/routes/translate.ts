import * as deepl from 'deepl-node';
import { Router } from "express";
import { CREDENTIALS } from 'api/config/credentials';
import { FromLanguage, ToLanguages } from 'src/interfaces/general';

const translateStorage = Router();

const authKey = CREDENTIALS.deepl_key;
const translator = new deepl.Translator(authKey);


export const TranslateText = async ({ userText, fromLanguage, toLanguage }:
    {
        userText: string
        fromLanguage: FromLanguage
        toLanguage: ToLanguages
    }) => {

    const result = await translator.translateText(userText, fromLanguage, toLanguage);
    return result
}

translateStorage.post("/translate", async (req, res) => {
    try {
        const { userText, fromLanguage, toLanguage } = req.body
        const data = await TranslateText({ fromLanguage, toLanguage, userText })
        res.status(200).json(data)
    } catch (err: any) {
        res.status(500).send({ error: err.message });

    }
})

export default translateStorage;