let app = getApp()
let AnalysysAgent = dd.AnalysysAgent
Page({
  onLoad(options) {
    // options 可以获取到页面参数，通过添加编译模式设置页面参数，在启动页面可以获取到
      console.log(options)
      // AnalysysAgent.pageView('分享',options)
   },
  data: {},
  onShow(options) {
    // console.log(options)
  },
  onShareAppMessage() {
    let shareObj = AnalysysAgent.share({
      title: '分享 View 组件',
      desc: 'View 组件很通用'

    })
    dd.alert({
      title: JSON.stringify(shareObj),
    });
    return shareObj
    // 文档 ：https://ding-doc.dingtalk.com/doc#/dev/share-app
    // 从文档看目前不支持 按钮 分享，所以把方法注了
  }
  // share: () => {
  //   dd.showSharePanel();/
  // }
});