import React, { useState } from 'react';
import { ThemeProvider } from '@mui/material';
import { themeCreator } from './base';
import { LocalStorageProtocol } from '@/protocols/cache/local_cache';
import { StorageKeysEnum } from '../utilities';
// import { StylesProvider } from '@mui/styles';

export const ThemeContext = React.createContext(
  (themeName: string): void => {}
);

type Props = {
  children: JSX.Element[] | any,
};


const ThemeProviderWrapper: React.FC<Props> = (props) => {
  
  const loacalProtocols=new LocalStorageProtocol()
  const curThemeName = loacalProtocols.get(StorageKeysEnum.theme)??'PureLightTheme';

  const [themeName, _setThemeName] = useState(curThemeName);
  const theme = themeCreator(themeName);
  const setThemeName = (themeName: string): void => {
    localStorage.setItem('appTheme',StorageKeysEnum.theme);
    _setThemeName(themeName);
  };

  return (
    // <StylesProvider injectFirst>
      <ThemeContext.Provider value={setThemeName}>
        <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
      </ThemeContext.Provider>
    // </StylesProvider>
  );
};

export default ThemeProviderWrapper;
