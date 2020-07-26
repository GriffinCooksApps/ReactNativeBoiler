
export const defaultTheme = {
  menu: {
    style: { backgroundColor: '#333333', borderWidth: 2, borderColor: '#444444' },
    titleBar: {
      style: { borderBottomRightRadius: 5, elevation: 2, borderBottomColor: '#666666', borderRightColor: '#666666', padding: 5 },
      active: { backgroundColor: '#555555' },
      scrolled: { opacity: 0.3 }
    },
    option: { //menu-option
      style: { elevation: 3 },
      hover: {
        style: { backgroundColor: '#555555', borderColor: '#666666' }
      },
      text: { //menu-option-text
        style: { backgroundColor: '#000022', fontSize: 24, fontWeight: '600', textAlign: 'center' }
      }
    }
  },
  background: {
    style: { backgroundColor: 'white' },
  },
  text: {
    style: { color: '#112222', fontFamily: 'sans-serif-medium' }
  },//text-highlight
  highlight: {
    style: { fontWeight: 700 }
  }
}
