import {
  pageView,
  track,
  profileSet,
  profileSetOnce,
  profileAppend,
  profileIncrement,
  profileDelete,
  profileUnset,
  registerSuperProperty,
  unRegisterSuperProperty,
  clearSuperProperties,
  getSuperProperty,
  getSuperProperties,
  reset,
  identify,
  alias,
  getDistinctId,
  getPresetProperties
} from './test'
var app = getApp();

let allTest = [...pageView,
...track,
...profileSet,
...profileSetOnce,
...profileAppend,
...profileIncrement,
...profileDelete,
...profileUnset,
...registerSuperProperty,
...unRegisterSuperProperty,
...clearSuperProperties,
...getSuperProperty,
...getSuperProperties,
...reset,
...identify,
...alias,
...getDistinctId,
...getPresetProperties]
Page({
  data: {
    log: app.globalData.log
  },
  onLoad(query) {
    // 页面加载
    // console.info(`Page onLoad with query: ${JSON.stringify(query)}`);


  },
  onReady() {
    // 页面加载完成

  },
  onShow() {
    //所有API集体测试
    // allTest.forEach(item=>{
    //   item.call(item,this.data.log)
    // })
    // 单独测试pageView测试
    // this.pageView()
    //单独测试track测试
    // this.track()
    //单独测试profileSet测试
    // this.profileSet()
    //单独测试profileSetOnce测试
    // this.profileSetOnce()
    //单独测试profileAppend测试
    // this.profileAppend()
    //单独测试profileIncrement测试
    // this.profileIncrement()
    //单独测试profileDelete测试
    // this.profileDelete()
    //单独测试profileUnset测试
    // this.profileUnset()
    //单独测试registerSuperProperty测试
    // this.registerSuperProperty()
    //单独测试unRegisterSuperProperty测试
    // this.unRegisterSuperProperty()
    //单独测试clearSuperProperties测试
    // this.clearSuperProperties()
    //单独测试getSuperProperty测试
    // this.getSuperProperty()
    //单独测试getSuperProperties测试
    // this.getSuperProperties()
    //单独测试reset测试
    // this.reset()
    //单独测试identify测试
    // this.identify()
    //单独测试alias测试
    // this.alias()
    //单独测试getDistinctId测试
    // this.getDistinctId()
    //单独测试getPresetProperties测试
    this.getPresetProperties()
  },
  pageView() {
    pageView.forEach(item => {
      item.call(item, this.data.log)
    })
  },
  track() {
    track.forEach(item => {
      item.call(item, this.data.log)
    })
  },
  profileSet() {
    profileSet.forEach(item => {
      item.call(item, this.data.log)
    })
  },
  profileSetOnce() {
    profileSetOnce.forEach(item => {
      item.call(item, this.data.log)
    })
  },
  profileAppend() {
    profileAppend.forEach(item => {
      item.call(item, this.data.log)
    })
  },
  profileIncrement() {
    profileIncrement.forEach(item => {
      item.call(item, this.data.log)
    })
  },
  profileDelete() {
    profileDelete.forEach(item => {
      item.call(item, this.data.log)
    })
  },
  profileUnset() {
    profileUnset.forEach(item => {
      item.call(item, this.data.log)
    })
  },
  registerSuperProperty() {
    registerSuperProperty.forEach(item => {
      item.call(item, this.data.log)
    })
  },
  unRegisterSuperProperty() {
    unRegisterSuperProperty.forEach(item => {
      item.call(item, this.data.log)
    })
  },
  clearSuperProperties(){
    clearSuperProperties.forEach(item => {
      item.call(item, this.data.log)
    })
  },
  getSuperProperty(){
    getSuperProperty.forEach(item => {
      item.call(item, this.data.log)
    })
  },
  getSuperProperties(){
    getSuperProperties.forEach(item => {
      item.call(item, this.data.log)
    })
  },
  reset(){
    reset.forEach(item => {
      item.call(item, this.data.log)
    })
  },
  identify(){
    identify.forEach(item => {
      item.call(item, this.data.log)
    })
  },
  alias(){
    alias.forEach(item => {
      item.call(item, this.data.log)
    })
  },
  getDistinctId(){
    getDistinctId.forEach(item => {
      item.call(item, this.data.log)
    })
  },
  getPresetProperties(){
    getPresetProperties.forEach(item => {
      item.call(item, this.data.log)
    })
  },
  onHide() {
    // 页面隐藏
  },
  onUnload() {
    // 页面被关闭
  },
  onTitleClick() {
    // 标题被点击
  },
  onPullDownRefresh() {
    // 页面被下拉
  },
  onReachBottom() {
    // 页面被拉到底部
  },
  onShareAppMessage() {
    // 返回自定义分享信息
    return {
      title: 'My App',
      desc: 'My App description',
      path: 'pages/index/index',
    };
  },
});
