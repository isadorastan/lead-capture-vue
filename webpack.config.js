
module.exports = {
    module: {
        // configuration regarding modules
        rules: [
            {
                test: /\.less$/,
                use: [
                  'vue-style-loader',
                  'css-loader',
                  'less-loader'
                ]
            }
        ]
    }
}