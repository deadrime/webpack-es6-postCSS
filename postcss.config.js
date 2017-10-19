const devSettings = {
    plugins: {
        'postcss-import': {},
        'postcss-cssnext': {}
    },
    options: {
        sourceMap: true
    }
};

const prodSettings = {
    plugins: {
        'postcss-import': {},
        'postcss-cssnext': {
            browsers: ['last 2 versions', '> 5%'],
        },
        'cssnano': {}
    },
    options: {
        sourceMap: false
    }
};

module.exports = ctx => {
    //console.log(PRODUCTION);
    return ctx.env === 'production' ? prodSettings : devSettings;
};

