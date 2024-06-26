import { LANGUAGES, AUTO_LANGUAGE, TARGET_LANGUAGES } from "../constants/languages"

export interface InitialState {
    fromLanguage: FromLanguage,
    toLanguage: ToLanguages,
    userText: string,
    translatedText: string,
    isLoading: boolean
}

export type Actions = 
    | { type: 'INTERCHANGE_LANGUAGES'}
    | { type: 'SET_FROM_LANGUAGE', payload: FromLanguage}
    | { type: 'SET_TO_LANGUAGE', payload: ToLanguages  }
    | { type: 'USER_TEXT', payload: string }
    | { type: 'TRANSLATED_TEXT', payload: string }

export type Languages = keyof typeof LANGUAGES
export type AutoLanguage = typeof AUTO_LANGUAGE

export type FromLanguage = Languages | AutoLanguage
export type ToLanguages = keyof typeof TARGET_LANGUAGES


export enum SelectionType {
    From = 'from',
    To = 'to'
}

