import { type InitialState, Actions } from '../interfaces/general';
import { useReducer } from 'react'
import { Languages, FromLanguage } from '../interfaces/general';
import { AUTO_LANGUAGE } from '../constants/languages';


const initialState: InitialState = {
    fromLanguage: 'auto',
    toLanguage: 'en',
    userText: '',
    translatedText: '',
    isloading: false
}

const reducer = (state: InitialState, action: Actions) => {
    const { type } = action

    if (type === 'INTERCHANGE_LANGUAGES' && state.fromLanguage !== AUTO_LANGUAGE) {
        return {
            ...state,
            fromLanguage: state.toLanguage,
            toLanguage: state.fromLanguage
        }
    }

    if (type === 'SET_FROM_LANGUAGE') {
        return {
            ...state,
            fromLanguage: action.payload
        }
    }

    if (type === 'SET_TO_LANGUAGE') {
        return {
            ...state,
            toLanguage: action.payload
        }
    }

    if (type === 'USER_TEXT') {
        return {
            ...state,
            isLoading: true,
            userText: action.payload,
            result: ''
        }
    }

    if (type === 'TRANSLATED_TEXT') {
        return {
            ...state,
            isLoading: false,
            translatedText: action.payload
        }
    }

    return state
}

export const useActions = () => {
    const [{
        fromLanguage,
        toLanguage,
        userText,
        translatedText,
        isloading
    }, dispatch] = useReducer(reducer, initialState)

    const changeLanguages = () => {
        dispatch({type: 'INTERCHANGE_LANGUAGES'})
    }
    const setFromLanguage = (payload: FromLanguage) => {
        dispatch({ type: 'SET_FROM_LANGUAGE', payload })
    }

    const setToLanguage = (payload: Languages) => {
        dispatch({ type: 'SET_TO_LANGUAGE', payload })
    }

    const setUserText = (payload: string) => {
        dispatch({ type: 'USER_TEXT', payload })
    }
    const setTranslatedText = (payload: string) => {
        dispatch({ type: 'TRANSLATED_TEXT', payload })
    }
    return {
        fromLanguage,
        toLanguage,
        userText,
        translatedText,
        isloading,
        changeLanguages,
        setFromLanguage,
        setToLanguage,
        setUserText,
        setTranslatedText
    }
}   