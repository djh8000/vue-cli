import Vue from 'vue'
import {
  Header,
  Button,
  Toast,
  Popup,
  Indicator,
  Spinner,
  Actionsheet,
  Field,
  Radio} from 'mint-ui'

export default (() => {
  // header
  Vue.component(Header.name, Header)
  // button
  Vue.component(Button.name, Button)
  // 消息提示
  Vue.component(Toast.name, Toast)
  // 弹出框组件
  Vue.component(Popup.name, Popup)
  // loding
  Vue.component(Spinner.name, Spinner)
  // 输入框
  Vue.component(Field.name, Field)
  // 单选框
  Vue.component(Radio.name, Radio)
  // 底部弹框
  Vue.component(Actionsheet.name, Actionsheet)
  Vue.prototype.$loding = Indicator
  Vue.prototype.$msg = function (msg) {
    Toast({
      className: 'msg',
      message: msg,
      duration: 1000
    })
  }
})()
