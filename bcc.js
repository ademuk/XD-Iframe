;(function(d, id) {

BCC = {
  documentPadding: 20,

  init: function(options) {
    var self = this;
    this.settings = options;
    this.frame = d.createElement('iframe');
    this.frame.id = id;
    this.frame.style.display = 'none';
    this.frame.src = this.settings.xdReciever;
    this.frame.onload = function() {
      self.xdFrameLoaded = true;
    }
    d.getElementById('bccRoot').parentNode.insertBefore(this.frame, null);
  },

  execute: function(func, args) {
    var self = this;
        execute = function() {
          self.frame.src = self.settings.xdReciever + '#' + func + '-' + (args ? args.join() : '');
        }
    self.xdFrameLoaded ? execute() : setTimeout(execute, 500);
  },

  setIframeSize: function(w, h) {
    var h = h || this.getDocumentHeight() + this.documentPadding,
        w = w || this.getDocumentWidth() + this.documentPadding;
    this.execute('setIframeSize', [w, h]);
  },

  setAutoIframeSize: function(w, h) {
    var self = this;
    this.autoSizeInterval = setInterval(function() {
      var h = h || self.getDocumentHeight(),
          w = w || self.getDocumentWidth();
          //TODO(adem) add width check once option is implemented
          if(self.iframeHeight != h) {
            self.iframeHeight = h;
            self.iframeWidth = w;
            self.execute('setIframeSize', [w, h]);
          }
    }, 500);
  },

  getDocumentHeight: function() {
    return Math.max(
        Math.max(d.body.scrollHeight, d.documentElement.scrollHeight),
        Math.max(d.body.offsetHeight, d.documentElement.offsetHeight),
        Math.max(d.body.clientHeight, d.documentElement.clientHeight)
    );
  },

  getDocumentWidth: function() {
    return Math.max(
        Math.max(d.body.scrollWidth, d.documentElement.scrollWidth),
        Math.max(d.body.offsetWidth, d.documentElement.offsetWidth),
        Math.max(d.body.clientWidth, d.documentElement.clientWidth)
    );
  }
}

d.BCC = BCC;

}(document, 'bccXDFrame'));