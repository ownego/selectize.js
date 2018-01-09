Selectize.define('enter_key_submit', function (options) {
  var self = this

  this.onKeyDown = (function (e) {
    var original = self.onKeyDown
    return function (e) {
      if (e.keyCode === 13) {
        self.trigger('submit')
        e.preventDefault()
      }
      return original.apply(this, arguments)
    }
  })()
})
