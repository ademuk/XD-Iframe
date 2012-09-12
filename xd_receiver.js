;(function(w, d) {

BCCXDReceiver = {
  init: function() {
    var self = this,
        docmode = document.documentMode;
    if (("onhashchange" in w) && (docmode === undefined || docmode > 7 )) {
      w.onhashchange = function () {
        self.execute(w.location.hash);
      }
    } else {
      this.prevHash = w.location.hash;
      this.poll = w.setInterval(function () {
       if (w.location.hash != self.prevHash) {
          self.prevHash = w.location.hash;
          self.execute(w.location.hash);
       }
      }, 100);
    }
  },

  execute: function(hash) {
    var func = hash.substring(1, hash.indexOf('-')),
        args = hash.substring(hash.indexOf('-') + 1, hash.length),
        args = args ? args.split(',') : [];
    this[func].call(this, args);
  },

  setIframeSize: function(args) {
    var iframe = parent.parent.document.getElementById('bccFrame');
    //TODO(adem) Add width resize as option
    //iframe.width = args[0];
    iframe.height = args[1];
  }
}

BCCXDReceiver.init();

}(window, document));