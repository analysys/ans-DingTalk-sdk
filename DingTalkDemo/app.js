import AnalysysAgent from './util/sdk/AnalysysAgent_Dingtalk_SDK.es6.min'
import AnalysysEncryption from './util/sdk/AnalysysAgent_encryption.es6.min'
// AnalysysAgent.encrypt = AnalysysEncryption
AnalysysAgent.debugMode = 2
AnalysysAgent.appkey = 'sdktest201907'
AnalysysAgent.uploadURL = 'https://arkpaastest.analysys.cn:4089'
AnalysysAgent.encryptType = 1
AnalysysAgent.autoShare = true
AnalysysAgent.allowTimeCheck = false;
AnalysysAgent.maxDiffTimeInterval = 1
App({
    onLaunch (options) { },
    onLoad () { },
    onShow (options) {
        this.globalData.StartUpOption = options
        // AnalysysAgent.identify('z123123', false)/

        AnalysysAgent.appStart(options)
    },
    onHide () {
        console.log('App Hide')
    },
    globalData: {
        hasLogin: false
    }
})
