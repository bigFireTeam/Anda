
export default {
  remRefontsize: (win, doc, undef) => {
    let el = doc.documentElement
    let resizeEvt = 'orientationchange' in win ? 'orientationchange' : 'resize'
    function calcSize () {
      let clientWidth = el.clientWidth
      if (clientWidth === undef) {
        return
      }
      el.style.fontSize = clientWidth / 1920 * 16 + 'px'
    }
    win.addEventListener(resizeEvt, calcSize)
    win.addEventListener('DOMContentLoaded', calcSize)
  }
}
