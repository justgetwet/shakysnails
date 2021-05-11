module.exports = {
  purge: ['./src/**/*.{js,jsx}', './content/mdx-pages/*.mdx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    // fontFamily: {
    //   kosugi: ['Roboto', 'YakuHanJP_Noto', '"Kosugi Maru"', 'sans-serif'],
    // },
    extend: {
      fontFamily: {
        sans: ['Roboto', 'YakuHanJP_Noto', '"Noto Sans JP"'],
      },
      colors: {
        dclBackground: '#282a36',
        dclForeground: '#f8f8f2',
        dclCyan: '#8be9fd',
        dclYellow: '#f1fa8c',
        dclOrange: '#ffb86c',
        dclPurple: '#bd93f9',
        dclPink: '#ff79c6',
        dclRed: '#ff5555',
        dclComment: '#6272a4',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
