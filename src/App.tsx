import '@radix-ui/themes/styles.css';
import { Button, Theme } from '@radix-ui/themes';
import { useActions } from "./hooks/useActions";
import { AUTO_LANGUAGE } from "./constants/languages";
import { SelectLanguage } from './components/SelectLanguage';
import { SelectionType } from './interfaces/general';
import { TextArea } from './components/TextArea';

function App() {
  const {isloading, fromLanguage, toLanguage, setFromLanguage, setToLanguage, changeLanguages, userText, translatedText, setUserText, setTranslatedText} = useActions()
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
            <TextArea loading={isloading} type={SelectionType.To} placeholder='Translate' value={translatedText} onChange={setTranslatedText}></TextArea>
          </div>
        </div>
      </div>
    </Theme>
  )
}

export default App
