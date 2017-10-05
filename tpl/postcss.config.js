const cssnano = require('cssnano')
const autoprefixer = require('autoprefixer')
const postcssImport = require('postcss-import')

module.exports = {
    plugins: [
        autoprefixer({
            browsers: [
                'last 2 versions',
                '> 1%',
                'ie >= 8',
                'iOS >= 8',
                'Android >= 4',
            ],
        }),
        postcssImport(),
        cssnano({
            safe: true,
            core: false,
        }),
    ],
}
