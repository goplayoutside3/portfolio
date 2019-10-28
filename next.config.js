const StyleLintPlugin = require('stylelint-webpack-plugin')
const withPlugins = require('next-compose-plugins')
const withSass = require('@zeit/next-sass')

const siteUrl = ''
const micrositePath = ''

const assetPrefix = process.env.NODE_ENV === 'production' ? micrositePath : ''

const nextConfig = {
    // include custom config settings
    assetPrefix,
    env: {
        MICROSITE_PATH: micrositePath,
        SITE_URL: siteUrl,
    },
    exportPathMap: function () {
        return {
            '/': { page: '/' },
            '/moodboard': { page: '/moodboard'},
        }
    },
    webpack( config ) {
        const { module = {} } = config

        /** Uncomment if external dependencies need polyfills */
        /**
            const originalEntry = config.entry
            config.entry = async () => {
                const entries = await originalEntry()
                if (
                    entries['main.js'] &&
                    !entries['main.js'].includes('./polyfills.js')
                ) {
                    entries['main.js'].unshift('./polyfills.js')
                }
                return entries
            }
        */

        /** Add Webpack Plugins: */
        config.plugins.push(new StyleLintPlugin({
            // emitErrors: false,
            syntax: 'scss'
        }))

        return {
            ...config,
            module: {
                ...module,
                rules: [
                    ...( module.rules || [] ),
                    {
                        test: /\.js?$/,
                        loader: 'stylelint-custom-processor-loader',
                        exclude: /node_modules/,
                        options: {
                            emitWarning: false
                        },
                    },
                    {
                        test: /\.(png|woff|woff2|eot|otf|ttf|gif|jpg|ico|svg|mp4)$/,
                        loader: 'file-loader',
                        options: {
                            name: '[name]_[hash].[ext]',
                            publicPath: `${ assetPrefix }/_next/static/files`,
                            outputPath: 'static/files'
                        }
                    }
                ]
            }
        }
    }
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
