module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.js',
    './nuxt.config.js'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        carolina: '#589fd6',
        ginger: '#e0dd89',
        almond: '#ffead1',
        oxford: {
          lightest: '#2e598a',
          lighter: '#24456b',
          DEFAULT: '#19304b',
          darker: '#14273d',
          darkest: '#0f1e2e'
        },
        olive: {
          lightest: '#acc3af',
          lighter: '#95b298',
          DEFAULT: '#7a9e7f',
          darker: '#678e6c',
          darkest: '#56765a'
        },
        saffron: {
          lightest: '#f8c9a0',
          lighter: '#f6b379',
          DEFAULT: '#f29647',
          darker: '#f0882d',
          darkest: '#e57310'
        }
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
