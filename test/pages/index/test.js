let AnalysysAgent = my.AnalysysAgent
let test = 'test'
let test99 = 'a'
for (let i = 0; i < 100; i++) {
  test99 += 'a'
}
let test255 = 'a'
for (let i = 0; i < 255; i++) {
  test255 += 'a'
}
let test500 = 'a'
for (let i = 0; i < 500; i++) {
  test500 += 'a'
}
let testEmpty = ''
let testOther = '12a'
let pageView = [
  function (log) {
    console.log(log)
    AnalysysAgent.pageView()
    log.push('pageView-无参-调用成功')
  },
  function (log) {
    AnalysysAgent.pageView(test)
    log.push(`pageView-pagename-正常值(${test})-调用成功`)
  },
  function (log) {
    AnalysysAgent.pageView(testEmpty)
    log.push('pageView-pagename-空值-调用成功')
  },
  function (log) {
    AnalysysAgent.pageView(testOther)
    log.push('pageView-pagename-属性key不符合正则-调用成功')
  },
  function (log) {
    AnalysysAgent.pageView(test255)
    log.push('pageView-pagename-超过255-调用成功')
  },
  function (log) {
    AnalysysAgent.pageView(test500)
    log.push('pageView-pagename-超过500-调用成功')
  },
  function (log) {
    AnalysysAgent.pageView(test, { 'b': test })
    log.push(`pageView-属性正常-调用成功`)
  },
  function (log) {
    let pros = {}
    pros[test99] = 'abc'
    AnalysysAgent.pageView(test, pros)
    log.push('pageView-属性key超99-调用成功')
  },
  function (log) {
    let pros = {}
    pros[test] = 'abc'
    AnalysysAgent.pageView(test, pros)
    log.push('pageView-属性value-string类型正常值-调用成功')
  },
  function (log) {
    let pros = {}
    pros[test] = 11
    AnalysysAgent.pageView(test, pros)
    log.push('pageView-属性value-number类型正常值-调用成功')
  },
  function (log) {
    let pros = {}
    pros[test] = true
    AnalysysAgent.pageView(test, pros)
    log.push('pageView-属性value-布尔类型正常值-调用成功')
  },

  function (log) {
    let pros = {}
    pros[test] = testEmpty
    AnalysysAgent.pageView(test, pros)
    log.push('pageView-属性value-string类型为空-调用成功')
  },
  function (log) {
    let pros = {}
    pros[test] = test255
    AnalysysAgent.pageView(test, pros)
    log.push('pageView-属性value-string类型超出255-调用成功')
  },
  function (log) {
    let pros = {}
    pros[test] = test500
    AnalysysAgent.pageView(test, pros)
    log.push('pageView-属性value-string类型超出500-调用成功')
  },
  function (log) {
    let pros = {}
    pros[test] = [testEmpty]
    AnalysysAgent.pageView(test, pros)
    log.push('pageView-属性value-list类型含空字符串-调用成功')
  },
  function (log) {
    let pros = {}
    pros[test] = [test255]
    AnalysysAgent.pageView(test, pros)
    log.push('pageView-属性value-list类型含超出255字符串-调用成功')
  },
  function (log) {
    let pros = {}
    pros[test] = [test500]
    AnalysysAgent.pageView(test, pros)
    log.push('pageView-属性value-list类型含超出500字符串-调用成功')
  },
]

let track = [
  function (log) {
    AnalysysAgent.track(test)
    log.push(`track-EventName-正常值(${test})-调用成功`)
  },
  function (log) {
    AnalysysAgent.track(testEmpty)
    log.push('track-EventName-空值-调用成功')
  },
  function (log) {
    AnalysysAgent.track(testOther)
    log.push('track-EventName-属性key不符合正则-调用成功')
  },
  function (log) {
    AnalysysAgent.track(test255)
    log.push('track-EventName-超过255-调用成功')
  },
  function (log) {
    AnalysysAgent.track(test500)
    log.push('track-EventName-超过500-调用成功')
  },
  function (log) {
    AnalysysAgent.track(test, { 'b': test })
    log.push(`track-属性正常-调用成功`)
  },
  function (log) {
    let pros = {}
    pros[test99] = 'abc'
    AnalysysAgent.track(test, pros)
    log.push('track-属性key超99-调用成功')
  },
  function (log) {
    let pros = {}
    pros[test] = 'abc'
    AnalysysAgent.track(test, pros)
    log.push('track-属性value-string类型正常值-调用成功')
  },
  function (log) {
    let pros = {}
    pros[test] = 11
    AnalysysAgent.track(test, pros)
    log.push('track-属性value-number类型正常值-调用成功')
  },
  function (log) {
    let pros = {}
    pros[test] = true
    AnalysysAgent.track(test, pros)
    log.push('track-属性value-布尔类型正常值-调用成功')
  },

  function (log) {
    let pros = {}
    pros[test] = testEmpty
    AnalysysAgent.track(test, pros)
    log.push('track-属性value-string类型为空-调用成功')
  },
  function (log) {
    let pros = {}
    pros[test] = test255
    AnalysysAgent.track(test, pros)
    log.push('track-属性value-string类型超出255-调用成功')
  },
  function (log) {
    let pros = {}
    pros[test] = test500
    AnalysysAgent.track(test, pros)
    log.push('track-属性value-string类型超出500-调用成功')
  },
  function (log) {
    let pros = {}
    pros[test] = [testEmpty]
    AnalysysAgent.track(test, pros)
    log.push('track-属性value-list类型含空字符串-调用成功')
  },
  function (log) {
    let pros = {}
    pros[test] = [test255]
    AnalysysAgent.track(test, pros)
    log.push('track-属性value-list类型含超出255字符串-调用成功')
  },
  function (log) {
    let pros = {}
    pros[test] = [test500]
    AnalysysAgent.track(test, pros)
    log.push('track-属性value-list类型含超出500字符串-调用成功')
  },
]
let profileSet = [

  function (log) {
    let pros = {}
    pros[test] = 'abc'
    AnalysysAgent.profileSet(pros)
    log.push('profileSet-属性value-string类型正常值-调用成功')
  },

  function (log) {
    let pros = {}
    pros[testEmpty] = 'abc'
    AnalysysAgent.profileSet(pros)
    log.push('profileSet-属性key为空-调用成功')
  },
  function (log) {
    let pros = {}
    pros[testOther] = 'abc'
    AnalysysAgent.profileSet(pros)
    log.push('profileSet-属性key不符合正则-调用成功')
  },
  function (log) {
    let pros = {}
    pros[test99] = 'abc'
    AnalysysAgent.profileSet(pros)
    log.push('profileSet-属性key超99-调用成功')
  },
  function (log) {
    let pros = {}
    pros[test] = 11
    AnalysysAgent.profileSet(pros)
    log.push('profileSet-属性value-number类型正常值-调用成功')
  },
  function (log) {
    let pros = {}
    pros[test] = true
    AnalysysAgent.profileSet(pros)
    log.push('profileSet-属性value-布尔类型正常值-调用成功')
  },

  function (log) {
    let pros = {}
    pros[test] = testEmpty
    AnalysysAgent.profileSet(pros)
    log.push('profileSet-属性value-string类型为空-调用成功')
  },
  function (log) {
    let pros = {}
    pros[test] = test255
    AnalysysAgent.profileSet(pros)
    log.push('profileSet-属性value-string类型超出255-调用成功')
  },
  function (log) {
    let pros = {}
    pros[test] = test500
    AnalysysAgent.profileSet(pros)
    log.push('profileSet-属性value-string类型超出500-调用成功')
  },
  function (log) {
    let pros = {}
    pros[test] = [testEmpty]
    AnalysysAgent.profileSet(pros)
    log.push('profileSet-属性value-list类型含空字符串-调用成功')
  },
  function (log) {
    let pros = {}
    pros[test] = [test255]
    AnalysysAgent.profileSet(pros)
    log.push('profileSet-属性value-list类型含超出255字符串-调用成功')
  },
  function (log) {
    let pros = {}
    pros[test] = [test500]
    AnalysysAgent.profileSet(pros)
    log.push('profileSet-属性value-list类型含超出500字符串-调用成功')
  },
]
let profileSetOnce = [

  function (log) {
    let pros = {}
    pros[test] = 'abc'
    AnalysysAgent.profileSetOnce(pros)
    log.push('profileSetOnce-属性value-string类型正常值-调用成功')
  },

  function (log) {
    let pros = {}
    pros[testEmpty] = 'abc'
    AnalysysAgent.profileSetOnce(pros)
    log.push('profileSetOnce-属性key为空-调用成功')
  },
  function (log) {
    let pros = {}
    pros[testOther] = 'abc'
    AnalysysAgent.profileSetOnce(pros)
    log.push('profileSetOnce-属性key不符合正则-调用成功')
  },
  function (log) {
    let pros = {}
    pros[test99] = 'abc'
    AnalysysAgent.profileSetOnce(pros)
    log.push('profileSetOnce-属性key超99-调用成功')
  },
  function (log) {
    let pros = {}
    pros[test] = 11
    AnalysysAgent.profileSetOnce(pros)
    log.push('profileSetOnce-属性value-number类型正常值-调用成功')
  },
  function (log) {
    let pros = {}
    pros[test] = true
    AnalysysAgent.profileSetOnce(pros)
    log.push('profileSetOnce-属性value-布尔类型正常值-调用成功')
  },

  function (log) {
    let pros = {}
    pros[test] = testEmpty
    AnalysysAgent.profileSetOnce(pros)
    log.push('profileSetOnce-属性value-string类型为空-调用成功')
  },
  function (log) {
    let pros = {}
    pros[test] = test255
    AnalysysAgent.profileSetOnce(pros)
    log.push('profileSetOnce-属性value-string类型超出255-调用成功')
  },
  function (log) {
    let pros = {}
    pros[test] = test500
    AnalysysAgent.profileSetOnce(pros)
    log.push('profileSetOnce-属性value-string类型超出500-调用成功')
  },
  function (log) {
    let pros = {}
    pros[test] = [testEmpty]
    AnalysysAgent.profileSetOnce(pros)
    log.push('profileSetOnce-属性value-list类型含空字符串-调用成功')
  },
  function (log) {
    let pros = {}
    pros[test] = [test255]
    AnalysysAgent.profileSetOnce(pros)
    log.push('profileSetOnce-属性value-list类型含超出255字符串-调用成功')
  },
  function (log) {
    let pros = {}
    pros[test] = [test500]
    AnalysysAgent.profileSetOnce(pros)
    log.push('profileSetOnce-属性value-list类型含超出500字符串-调用成功')
  },
]
let profileAppend = [

  function (log) {
    let pros = {}
    pros[test] = 'abc'
    AnalysysAgent.profileAppend(pros)
    log.push('profileAppend-属性value-string类型正常值-调用成功')
  },

  function (log) {
    let pros = {}
    pros[testEmpty] = 'abc'
    AnalysysAgent.profileAppend(pros)
    log.push('profileAppend-属性key为空-调用成功')
  },
  function (log) {
    let pros = {}
    pros[testOther] = 'abc'
    AnalysysAgent.profileAppend(pros)
    log.push('profileAppend-属性key不符合正则-调用成功')
  },
  function (log) {
    let pros = {}
    pros[test99] = 'abc'
    AnalysysAgent.profileAppend(pros)
    log.push('profileAppend-属性key超99-调用成功')
  },
  function (log) {
    let pros = {}
    pros[test] = 11
    AnalysysAgent.profileAppend(pros)
    log.push('profileAppend-属性value-number类型正常值-调用成功')
  },
  function (log) {
    let pros = {}
    pros[test] = true
    AnalysysAgent.profileAppend(pros)
    log.push('profileAppend-属性value-布尔类型正常值-调用成功')
  },

  function (log) {
    let pros = {}
    pros[test] = testEmpty
    AnalysysAgent.profileAppend(pros)
    log.push('profileAppend-属性value-string类型为空-调用成功')
  },
  function (log) {
    let pros = {}
    pros[test] = test255
    AnalysysAgent.profileAppend(pros)
    log.push('profileAppend-属性value-string类型超出255-调用成功')
  },
  function (log) {
    let pros = {}
    pros[test] = test500
    AnalysysAgent.profileAppend(pros)
    log.push('profileAppend-属性value-string类型超出500-调用成功')
  },
  function (log) {
    let pros = {}
    pros[test] = [testEmpty]
    AnalysysAgent.profileAppend(pros)
    log.push('profileAppend-属性value-list类型含空字符串-调用成功')
  },
  function (log) {
    let pros = {}
    pros[test] = [test255]
    AnalysysAgent.profileAppend(pros)
    log.push('profileAppend-属性value-list类型含超出255字符串-调用成功')
  },
  function (log) {
    let pros = {}
    pros[test] = [test500]
    AnalysysAgent.profileAppend(pros)
    log.push('profileAppend-属性value-list类型含超出500字符串-调用成功')
  },
]
let profileIncrement = [
  function (log) {
    let pros = {}
    pros[testEmpty] = 11
    AnalysysAgent.profileIncrement(pros)
    log.push('profileIncrement-属性key为空-调用成功')
  },
  function (log) {
    let pros = {}
    pros[testOther] = 11
    AnalysysAgent.profileIncrement(pros)
    log.push('profileIncrement-属性key不符合正则-调用成功')
  },
  function (log) {
    let pros = {}
    pros[test99] = 11
    AnalysysAgent.profileIncrement(pros)
    log.push('profileIncrement-属性key超99-调用成功')
  },
  function (log) {
    let pros = {}
    pros[test] = 11
    AnalysysAgent.profileIncrement(pros)
    log.push('profileIncrement-属性value-number类型正常值-调用成功')
  },
  function (log) {
    let pros = {}
    pros[test] = true
    AnalysysAgent.profileIncrement(pros)
    log.push('profileIncrement-属性value-布尔类型-调用成功')
  },

  function (log) {
    let pros = {}
    pros[test] = test
    AnalysysAgent.profileIncrement(pros)
    log.push('profileIncrement-属性value-string类型-调用成功')
  }
]
let profileDelete = [
  function (log) {
    AnalysysAgent.profileDelete()
    log.push('profileDelete-调用成功')
  }
]
let profileUnset = [
  function (log) {
    AnalysysAgent.profileUnset(test)
    log.push('profileUnset-传值为正常-调用成功')
  },
  function (log) {
    AnalysysAgent.profileUnset(testEmpty)
    log.push('profileUnset-传值为空-调用成功')
  },
  function (log) {
    AnalysysAgent.profileUnset(testOther)
    log.push('profileUnset-传值不符合正则-调用成功')
  },
  function (log) {
    AnalysysAgent.profileUnset(test99)
    log.push('profileUnset-传值超出99-调用成功')
  },
  function (log) {
    AnalysysAgent.profileUnset(false)
    log.push('profileUnset-传值为非string-调用成功')
  }
]

let registerSuperProperty = [
  function (log) {
    let pros = {}
    pros[test] = 'abc'
    AnalysysAgent.registerSuperProperty(test, 'abc')
    log.push('registerSuperProperty-注册单个生效-调用成功')
    
    setTimeout(()=>{   console.log(`当前所有通用属性为${JSON.stringify(AnalysysAgent.getSuperProperties())}`)   },3000)
  },
  function (log) {
    let pros = {}
    pros[test + 1] = 'def'
    pros[test + 2] = 'ghj'
    AnalysysAgent.registerSuperProperties(pros)
    log.push('registerSuperProperties-注册多个生效-调用成功')

    setTimeout(()=>{   console.log(`当前所有通用属性为${JSON.stringify(AnalysysAgent.getSuperProperties())}`)   },3000)
  },
  function (log) {
    let pros = {}
    pros[testEmpty] = 'abc'
    AnalysysAgent.registerSuperProperties(pros)
    log.push('registerSuperProperties-属性key超99-调用成功')
    setTimeout(()=>{   console.log(`当前所有通用属性为${JSON.stringify(AnalysysAgent.getSuperProperties())}`)   },3000)
  },
  function (log) {
    let pros = {}
    pros[testOther] = 'abc'
    AnalysysAgent.registerSuperProperties(pros)
    log.push('registerSuperProperties-属性key不符合正则-调用成功')
    setTimeout(()=>{   console.log(`当前所有通用属性为${JSON.stringify(AnalysysAgent.getSuperProperties())}`)   },3000)
  },
  function (log) {
    let pros = {}
    pros[test99] = 'abc'
    AnalysysAgent.registerSuperProperties(pros)
    log.push('registerSuperProperties-属性key超99-调用成功')
    setTimeout(()=>{   console.log(`当前所有通用属性为${JSON.stringify(AnalysysAgent.getSuperProperties())}`)   },3000)
  },
  function (log) {
    let pros = {}
    pros[test] = 11
    AnalysysAgent.registerSuperProperties(pros)
    log.push('registerSuperProperties-属性value-number类型正常值-调用成功')
    setTimeout(()=>{   console.log(`当前所有通用属性为${JSON.stringify(AnalysysAgent.getSuperProperties())}`)   },3000)
  },
  function (log) {
    let pros = {}
    pros[test] = true
    AnalysysAgent.registerSuperProperties(pros)
    log.push('registerSuperProperties-属性value-布尔类型正常值-调用成功')
    setTimeout(()=>{   console.log(`当前所有通用属性为${JSON.stringify(AnalysysAgent.getSuperProperties())}`)   },3000)
  },

  function (log) {
    let pros = {}
    pros[test] = testEmpty
    AnalysysAgent.registerSuperProperties(pros)
    log.push('registerSuperProperties-属性value-string类型为空-调用成功')
    setTimeout(()=>{   console.log(`当前所有通用属性为${JSON.stringify(AnalysysAgent.getSuperProperties())}`)   },3000)
  },
  function (log) {
    let pros = {}
    pros[test] = test255
    AnalysysAgent.registerSuperProperties(pros)
    log.push('profileSetregisterSuperProperties-属性value-string类型超出255-调用成功')
    setTimeout(()=>{   console.log(`当前所有通用属性为${JSON.stringify(AnalysysAgent.getSuperProperties())}`)   },3000)
  },
  function (log) {
    let pros = {}
    pros[test] = test500
    AnalysysAgent.registerSuperProperties(pros)
    log.push('registerSuperProperties-属性value-string类型超出500-调用成功')
    setTimeout(()=>{   console.log(`当前所有通用属性为${JSON.stringify(AnalysysAgent.getSuperProperties())}`)   },3000)
  },
  function (log) {
    let pros = {}
    pros[test] = [testEmpty]
    AnalysysAgent.registerSuperProperties(pros)
    log.push('registerSuperProperties-属性value-list类型含空字符串-调用成功')
    setTimeout(()=>{   console.log(`当前所有通用属性为${JSON.stringify(AnalysysAgent.getSuperProperties())}`)   },3000)
  },
  function (log) {
    let pros = {}
    pros[test] = [test255]
    AnalysysAgent.registerSuperProperties(pros)
    log.push('registerSuperProperties-属性value-list类型含超出255字符串-调用成功')
    setTimeout(()=>{   console.log(`当前所有通用属性为${JSON.stringify(AnalysysAgent.getSuperProperties())}`)   },3000)
  },
  function (log) {
    let pros = {}
    pros[test] = [test500]
    AnalysysAgent.registerSuperProperties(pros)
    log.push('registerSuperProperties-属性value-list类型含超出500字符串-调用成功')
    setTimeout(()=>{   console.log(`当前所有通用属性为${JSON.stringify(AnalysysAgent.getSuperProperties())}`)   },3000)
  },
]

let unRegisterSuperProperty = [
  function (log) {
    AnalysysAgent.unRegisterSuperProperty(test)
    log.push('unRegisterSuperProperty-删除单个属性-调用成功')
    console.log(log)

    console.log('当前通用属性为：' + JSON.stringify(AnalysysAgent.getSuperProperties()))
  },
  function (log) {
    AnalysysAgent.unRegisterSuperProperty(test99)
    AnalysysAgent.unRegisterSuperProperty(testEmpty)
    log.push('unRegisterSuperProperty-删除多个个属性-调用成功')
    console.log(log)

    console.log('当前通用属性为：' + JSON.stringify(AnalysysAgent.getSuperProperties()))
  }
]
let clearSuperProperties = [
  function (log) {
    log.push('clearSuperProperties-清空通用-调用成功')
    AnalysysAgent.clearSuperProperties(test)
    setTimeout(() => {
      console.log('当前通用属性为：' + JSON.stringify(AnalysysAgent.getSuperProperties()))
    }, 3000)
  }
]
let getSuperProperty = [
  function (log) {

    log.push(`getSuperProperty-属性${test}-调用成功`)
    setTimeout(() => {
    let proper = AnalysysAgent.getSuperProperty(test)

      console.log(`属性${test}为：${proper}`)
    },3000)
  }
]
let getSuperProperties = [
  function (log) {

    log.push('getSuperProperty-所有通用属性-调用成功')
    setTimeout(() => {
    let propers = AnalysysAgent.getSuperProperties()

      console.log(`所有通用属性为：${JSON.stringify(propers)}`)
    }, 3000)
  }
]
let reset = [
  function (log) {
    AnalysysAgent.reset()
    log.push('reset-清除本地设置-调用成功')
    setTimeout(()=>{
      let propers = AnalysysAgent.getPresetProperties()
      console.log(`所有预置属性为：${JSON.stringify(propers)}`)
    },3000)
  }
]
let identify = [
  function (log) {
    AnalysysAgent.identify('aaa')
    log.push('identify-单参数-调用成功')
  },
  function (log) {
    AnalysysAgent.identify('aaa', true)
    log.push('identify-双参数(true)-调用成功')
  }
]
let alias = [
  function (log) {
    AnalysysAgent.alias('aaa')
    log.push('alias-调用成功')
  }
]
let getDistinctId = [
  function (log) {
    let id = AnalysysAgent.getDistinctId('aaa')
    log.push(`getDistinctId-${id}-调用成功`)
  }
]
let getPresetProperties = [
  function (log) {
    let Properties = AnalysysAgent.getPresetProperties()
    log.push(`getPresetProperties-调用成功`)
  }
]

export {
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
}