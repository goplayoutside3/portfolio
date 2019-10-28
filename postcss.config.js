const fs = require('fs')

module.exports = ( ctx ) => {
    const plugins = {
        'autoprefixer': {
            ...ctx.options.autoprefixer,
            flexbox: 'no-2009',
        },
        'postcss-nested': {}
    }

    // Minify for Production
    if ( process.env.NODE_ENV === 'production' ) {
        // TO-DO: make plugin read js files instead of html output
        // if ( fs.existsSync( 'out/' ) ) {
        //     plugins['postcss-uncss'] = {
        //         html: [ 'out/*.html' ]
        //     }
        // }

        plugins['cssnano'] = {
            preset: ['default', {
                discardComments: {
                    removeAll: true,
                },
            }]
        }
    }

    return { plugins }
}
