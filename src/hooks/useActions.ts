import { type InitialState, Actions, ToLanguages, FromLanguage } from '../interfaces/general';
import { useReducer } from 'react'
import { AUTO_LANGUAGE } from '../constants/languages';



const initialState: InitialState = {
    fromLanguage: 'es',
    toLanguage: 'en-US',
    userText: '',
    translatedText: '',
    isLoading: false
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
        if (state.fromLanguage === action.payload) return state
        const isLoading = state.userText !== ''
        return {
            ...state,
            fromLanguage: action.payload,
            isLoading,
            result: ''
        }
    }

    if (type === 'SET_TO_LANGUAGE') {
        if (state.toLanguage === action.payload) return state
        const isLoading = state.userText !== ''
        return {
            ...state,
            toLanguage: action.payload,
            isLoading,
            result: ''
        }
    }

    if (type === 'USER_TEXT') {
        const isLoading = action.payload !== ''
        return {
            ...state,
            isLoading,
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
        isLoading
    }, dispatch] = useReducer(reducer, initialState)

    const changeLanguages = () => {
        dispatch({ type: 'INTERCHANGE_LANGUAGES' })
    }
    const setFromLanguage = (payload: FromLanguage) => {
        dispatch({ type: 'SET_FROM_LANGUAGE', payload })
    }

    const setToLanguage = (payload: ToLanguages) => {
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
        isLoading,
        changeLanguages,
        setFromLanguage,
        setToLanguage,
        setUserText,
        setTranslatedText
    }
}   