import cookie from '../config/cookie'
import url from '../config/url'

var appPublic = JSON.parse(cookie.get('appPublic'))
// webview 高度交互
export function homePage (to) {
  if (appPublic) {
    // ios传参交互
    if (Number(appPublic.platform) === 1) {
      if (to.name !== 'home') {
        window.webkit.messageHandlers.homePage.postMessage('0')
      } else {
        window.webkit.messageHandlers.homePage.postMessage('1')
      }
    // 安卓传参交互
    } else if (Number(appPublic.platform) === 2) {
      if (to.name !== 'home') {
        window.ZJTK.homePage('0')
      } else {
        window.ZJTK.homePage('1')
      }
    }
  }
}

// webview 登录失效交互
export function loginLose () {
  var fromUrl = window.location.href
  if (appPublic) {
    // ios传参交互
    if (Number(appPublic.platform) === 1) {
      window.webkit.messageHandlers.loginLose.postMessage(fromUrl)
    // 安卓传参交互
    } else if (Number(appPublic.platform) === 2) {
      window.ZJTK.loginLose(fromUrl)
    }
  } else {
    window.location.href = url.uchttp + '?fromUrl=' + fromUrl
  }
}

// webview 返回交互
export function wbBack () {
  window.history.go(-1)
  let route = JSON.parse(sessionStorage.getItem('VUE_NAVIGATION')).length
  if (appPublic && route === 1) {
    // ios传参交互
    if (Number(appPublic.platform) === 1) {
      window.webkit.messageHandlers.wbBack.postMessage('')
    // 安卓传参交互
    } else if (Number(appPublic.platform) === 2) {
      window.ZJTK.wbBack()
    }
  }
}
