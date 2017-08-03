const { pipe, cond, equals, always, prepend, flatten } = require('ramda')

const url = require('postcss-url')
const next = require('postcss-cssnext')
const browserReporter = require('postcss-browser-reporter')
const reporter = require('postcss-reporter')
const browsersList = require('browserslist')

const browsers = browsersList('> 1%, last 3 versions, Safari > 7.1, Firefox ESR, not IE 9')

const setPluginsByEnv = pipe(
  cond([
    [equals('development'), always([
      browserReporter,
      reporter
    ])]
  ]),
  prepend([
    url,
    next({
      browsers
    })
  ]),
  flatten
)

module.exports = ({ file, options, env }) => ({
  plugins: setPluginsByEnv(env)
})
