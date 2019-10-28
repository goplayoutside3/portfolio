const withSass = require('@zeit/next-sass')
const withPlugins = require('next-compose-plugins')

const nextConfig = {
    env: {
        MICROSITE_PATH: '',
        SITE_URL: '',
    },
}

module.exports = withPlugins([
    [ withSass, {
        sassLoaderOptions: {
            sourceMap: true
        },
        postcssLoaderOptions: {
            sourceMap: true
        }
    }],
], nextConfig)
