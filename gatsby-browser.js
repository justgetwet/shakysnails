import './src/styles/tailwind.css'
import '@fontsource/lato'
import '@fontsource/yakuhanjp'
import '@fontsource/kosugi-maru'
import '@fontsource/noto-sans-jp/100.css'

export const onRouteUpdate = ({ location, prevLocation }) => {
  console.log('new pathname', location.pathname)
  console.log('old pathname', prevLocation ? prevLocation.pathname : null)
}