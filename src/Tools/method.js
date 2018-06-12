class MethodFn {
  // 单页的高度计算
  pageHeight (cls) {
    let divHeight = document.querySelectorAll(cls)
    for (let i = 0; i < divHeight.length; i++) {
      divHeight[i].style.height = window.innerHeight + 'px'
    }
  }
}

export default MethodFn