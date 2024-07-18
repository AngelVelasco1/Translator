import React, { useEffect } from 'react'
import '@radix-ui/themes/styles.css';
import { Button, Theme } from '@radix-ui/themes';
import { useActions } from "./hooks/useActions";
import { AUTO_LANGUAGE } from "./constants/languages";
import { SelectLanguage } from './components/SelectLanguage';
import { SelectionType } from './interfaces/general';
import { TextArea } from './components/TextArea';

import { translateTextPost } from './services/translate'

function App() {
  const { isLoading, fromLanguage, toLanguage, setFromLanguage, setToLanguage, changeLanguages, userText, translatedText, setUserText, setTranslatedText } = useActions()

  const translateText = async () => {
    try {
      const result = await translateTextPost(userText, fromLanguage, toLanguage);
      if(result == null) return
      setTranslatedText(result.text)
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    if(userText === '') {
      setTranslatedText('')
      return
    }
    translateText()
    
  }, [userText, fromLanguage, toLanguage])
  return (
    <Theme>
      <div className="app w-10/12 mx-auto">
        <div className="grid grid-cols-3 gap-x-24">
          <div className='flex flex-col'>
            <SelectLanguage type={SelectionType.From} value={fromLanguage} onChange={setFromLanguage} />
            <TextArea type={SelectionType.From} placeholder='Insert Text' value={userText} onChange={setUserText}></TextArea>
          </div>

          <div className='flex flex-col'>
            <Button className='w-2/3 mx-auto mt-6' disabled={fromLanguage === AUTO_LANGUAGE} onClick={() => { changeLanguages() }}>
              Interchange
            </Button>
          </div>

          <div className='flex flex-col'>
            <SelectLanguage type={SelectionType.To} value={toLanguage} onChange={setToLanguage} />
            <TextArea loading={isLoading} type={SelectionType.To} placeholder={isLoading ? "Loading..." : "Translate"} value={translatedText} onChange={setTranslatedText}></TextArea>
          </div>
        </div>
      </div>
    </Theme>
  )
}

export default App
