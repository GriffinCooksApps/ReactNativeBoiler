import { StyleSheet } from 'react-native';

export const _buildTheme = (structure) => {
  var theme = getStyles(structure);

  //TODO: VALIDATE theme
  return StyleSheet.create(theme);
};

const getStyles = (structure, _name, _current) => {
  var theme = {};
  if (structure == null) return null;
  const keys = Object.keys(structure);
  var style = buildStyle(_current, structure.style);
  for (var i = 0; i < keys.length; i++) {
    const keyName = `${_name}_${keys[i]}`;
    if (keys[i] == 'style') continue; //dealt with earlier.
    theme = Object.assign(
      {},
      theme,
      getStyles(structure[(keys[i], keyName, style)])
    );
  }
}

const buildStyle = (oldStyle, newStyle) => {
  //TODO: Validate style.
  return Object.assign({}, oldStyle, newStyle);
}
