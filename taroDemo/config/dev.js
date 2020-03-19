module.exports = {
    env: {
        NODE_ENV: '"development"'
    },
    defineConstants: {},
    weapp: {
        compile: {
            exclude: ['AnalysysAgent_Dingtalk_SDK.min.js', 'src/sdk/AnalysysAgent_encryption.min.js']
        }
    },
    h5: {}
}
