import { createContext, useState } from 'react';
import CV from './CV';

export const LocaleContext = createContext(null);

// Create Document Component
export default function App() {
  const [locale, setLocale] = useState('it');

  return <>
    <LocaleContext.Provider value={locale}>
      <div style={{ display: 'flex', padding: '8px' }}>
        <label htmlFor='language-switcher' style={{marginRight: '8px'}}>Language: </label>
        <select id='language-switcher' defaultValue={locale} onChange={(e) => setLocale(e.target.value)}>
          <option value='en'>EN</option>
          <option value='it'>IT</option>
        </select>
      </div>
      <CV></CV>
    </LocaleContext.Provider>
  </>
}