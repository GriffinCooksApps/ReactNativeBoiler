//TODO: Use Axios to load settings from a URL at some point after installing redux or some other store.
import React, { createContext } from 'react';

const defaultConfig = {
  logoURI: "http://www.secsoc.org/Logo.svg",
  loadingURL: "http:www/secsoc.org/Loading.svg"
}

export const AppConfigContext = createContext({ defaultConfig });

export default AppConfig = (props) => {

  return (
    <AppConfigContext.Consumer>
      {
        value => {
          return React.Children.map(props.children, ( (child, i) => {
            return React.cloneElement(child, { appData: value });
          }))
        }
      }
    </AppConfigContext.Consumer>
  )
}

export const AppConfiguration = (props) => {

  return (
    <AppConfigContext.Provider value={defaultConfig} >
      {props.children}
    </AppConfigContext.Provider>
  );

}

