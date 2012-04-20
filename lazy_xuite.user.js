// ==UserScript==
// @id             lazy_xuite
// @name           Lazy Xuite
// @version        1.0.4
// @namespace      http://blog.k2ds.net/
// @author         killtw
// @description    方便下載Xuite檔案，跳過必須按廣告的限制，並且取消倒數
// @include        http://webhd.xuite.net/_oops/*
// @exclude        http://webhd.xuite.net/*@*
// ==/UserScript==

(function() {
  var req = new XMLHttpRequest();
  if (location.search != "") {
    location.assign('javascript: var time = 10;');
  } else {
    var src = document.getElementById('my2-main-content').getElementsByTagName('a')[0].getAttribute('href');
    req.open("GET", src, true);
    req.send();
    document.getElementById('verify_code_value').onkeyup = function() {
      if (this.value.length == 6) {
        document.getElementById('save_action').value = 0;
        document.getElementById('myForm').submit();
      }
    };
  }
})();