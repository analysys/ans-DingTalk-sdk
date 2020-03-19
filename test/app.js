import AnalysysAgent from './util/sdk/AnalysysAgent_Dingtalk_SDK.es6.min'
import AnalysysEncryption from './util/sdk/AnalysysAgent_encryption.es6.min'
AnalysysAgent.encrypt = AnalysysEncryption
AnalysysAgent.encryptType = 1
AnalysysAgent.debugMode = 2
AnalysysAgent.appkey = 'sdktest201907'
AnalysysAgent.uploadURL = 'https://arkpaastest.analysys.cn:4089'
App({
    onLaunch (options) {
        if (AnalysysAgent) {
            this.globalData.log.push('SDK加载完毕！')
        } else {
            this.globalData.log.push('SDK加载失败！')
        }
    },
    onShow (options) {
        AnalysysAgent.appStart(options)
        this.globalData.log.push('启动成功')
    },
    globalData: {
        log: [],
    }
});
