import { StyleSheet, Text } from 'react-native';
import { WebView } from 'react-native-webview';
import React from 'react';
import { AppConfigContext } from '../../AppConfig';

const styles = StyleSheet.create({
  logo: {
    width: 250,
    height: 250,
    backgroundColor: "rgba(0,0,0,0)",
    shadowColor: '#555555'
  }
});

export default class Logo extends React.Component {

  render() {
    const { style } = this.props;
    return (
      <AppConfigContext.Consumer>
        {value => (
          <WebView style={[styles.logo, style]} source={{ html: LOGO }} />
        )}
      </AppConfigContext.Consumer>
    );
  }

}

const LOGO = `
  <html>
    <header></header>
    <body width="100%" height="100%">

    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
       viewBox="0 0 100 100" style="enable-background:new 0 0 100 100;" xml:space="preserve">
      <defs>
        <filter id="shadow">
          <feDropShadow dx="1" dy="1" stdDeviation="0.2" flood-opacity="0.5"/>
        </filter>
        <filter id="shadow2">
          <feDropShadow dx="1" dy="1" stdDeviation="0.5" flood-opacity="0.9"/>
        </filter>
    
        <linearGradient id="cir-grad">  
             <stop offset="0" stop-color="white" stop-opacity="0.1" />  
            <stop offset="1" stop-color="white" stop-opacity="0.5" />  
           </linearGradient>
           <mask id="cir-mask">  
             <rect x="0" y="0" width="100" height="100" fill="url(#cir-grad)"  />  
        </mask>  
    
        <linearGradient id="text-grad">  
             <stop offset="0" stop-color="#54aFf3" stop-opacity="0.2" />  
            <stop offset="1" stop-color="#247FC3" stop-opacity="1" />  
           </linearGradient>
           <mask id="textMask">  
             <rect x="0" y="0" width="100" height="100" fill="url(#text-grad)"  />  
        </mask>  
      </defs>
    
    
      <style type="text/css">
        .blueText{fill:#247FC3; text-decoration: underline; font-family:'MyriadPro-Regular'; font-size:36px;letter-spacing:-3.90; filter:url(#shadow);}
        .textBorder{fill:black; text-decoration: underline; font-family:'MyriadPro-Regular'; font-size:36px;letter-spacing:-3.90; opacity:0.7}
        .blueCircle{fill:#449Fe3;stroke:#247FC3;stroke-width:3;stroke-miterlimit:10;stroke-dasharray:11,3; filter:url(#shadow);}
        .outerCircle{fill:none;stroke:#247FC3;stroke-width:3;stroke-miterlimit:10;stroke-dasharray:11,3; filter:url(#shadow);}
      </style>
    
      
      <text x="18.1" y="58.1" transform="matrix(1 0 0 1 0 0)" class="blueText" mask="url(#textMask)">Blu.</text>
      <text x="18" y="58" transform="matrix(1 0 0 1 0 0)" class="textBorder" mask="url(#textMask)">Blu.</text>
    
      <circle class="blueCircle" cx="48" cy="48" r="45" mask="url(#cir-mask)">
        <animateTransform 
          attributeName="transform" 
          attributeType="XML"
          type="rotate" from="0 48 48" to="360 48 48"
          dur="10s"
          repeatCount="indefinite"
          fill-opacity="1"
          fill-color="#999999"
        />
      </circle>
      <circle class="outerCircle" cx="48" cy="48" r="45" mask="url(#textMask)">
        <animateTransform 
          attributeName="transform" 
          attributeType="XML"
          type="rotate" from="0 48 48" to="360 48 48"
          dur="10s"
          repeatCount="indefinite"
          fill-opacity="1"
          fill-color="#999999"
        />
      </circle>
      
    </svg>
    
    
    </body>
  </html>`;