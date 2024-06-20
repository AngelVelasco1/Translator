import { LANGUAGES, AUTO_LANGUAGE } from "../constants/languages"

export interface InitialState {
    fromLanguage: FromLanguage,
    toLanguage: Languages,
    userText: string,
    translatedText: string,
    isloading: boolean
}

export type Actions = 
    | { type: 'INTERCHANGE_LANGUAGES'}
    | { type: 'SET_FROM_LANGUAGE', payload: FromLanguage}
    | { type: 'SET_TO_LANGUAGE', payload: Languages }
    | { type: 'USER_TEXT', payload: string }
    | { type: 'TRANSLATED_TEXT', payload: string }

export type Languages = keyof typeof LANGUAGES
export type AutoLanguage = typeof AUTO_LANGUAGE
export type FromLanguage = Languages | AutoLanguage

export enum SelectionType {
    From = 'from',
    To = 'to'
}

