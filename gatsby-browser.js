import './src/styles/tailwind.css'

// import '@fontsource/roboto'
// import '@fontsource/yakuhanjp'
// import '@fontsource/noto-sans-jp/100.css'
import './src/styles/webfonts.css'

export const onRouteUpdate = ({ location, prevLocation }) => {
  console.log('new pathname', location.pathname)
  console.log('old pathname', prevLocation ? prevLocation.pathname : null)
}