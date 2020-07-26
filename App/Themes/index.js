import React, { createContext } from 'react';
import { defaultTheme } from './themes/defaultTheme';
import { _buildTheme } from './themeBuilder';

export * from './themes';


const baseTheme = _buildTheme(defaultTheme);
export const ThemeContext = createContext(baseTheme);

export class ThemeProvider extends React.Component{

  constructor(props) {
    super(props);
    const theme = props.theme || defaultTheme;
    this.state = {
      theme: _buildTheme(theme)
    }
  }

  render() {
    return(
      <ThemeContext.Provider value={this.state.theme} >
        {this.props.children}
      </ThemeContext.Provider>
    );
  }

}

class ThemeWrap extends React.Component{

  static context = ThemeContext;
  render() {

    const { classRef, ...props } = this.props;

    return (
      <classRef {...props} theme={context} />
    );

  }

}

//TODO: Add validation to this.
export const Themed = (classRef) => {
  return (props) => {
    return (
      <ThemeWrap {...props} classRef={classRef} />
    )
  }
}

