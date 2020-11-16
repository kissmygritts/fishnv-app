/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
module.exports = {
  theme: {
    fontFamily: {
      header: ['"Roboto Condensed"'],
      content: ['Roboto']
    },
    extend: {
      colors: {
        carolina: '#589fd6',
        ginger: '#e0dd89',
        almond: '#ffead1',
        oxford: {
          lightest: '#2e598a',
          lighter: '#24456b',
          default: '#19304b',
          darker: '#14273d',
          darkest: '#0f1e2e'
        },
        olive: {
          lightest: '#acc3af',
          lighter: '#95b298',
          default: '#7a9e7f',
          darker: '#678e6c',
          darkest: '56765a'
        },
        saffron: {
          lightest: '#f8c9a0',
          lighter: '#f6b379',
          default: '#f29647',
          darker: '#f0882d',
          darkest: '#e57310'
        }
      }
    }
  },
  variants: {},
  plugins: [],
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      './components/**/*.vue',
      './layouts/**/*.vue',
      './pages/**/*.vue',
      './plugins/**/*.js'
    ]
  }
}
