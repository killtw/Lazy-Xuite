// ==UserScript==
// @id             xuite_download_helper
// @name           Xuite Download Helper
// @version        1.0.0
// @namespace      http://blog.k2ds.net/
// @author         killtw
// @description    方便下載Xuite檔案，跳過必須按廣告的限制，並且取消倒數
// @include        http://webhd.xuite.net/_oops/*
// @exclude        http://webhd.xuite.net/*@*
// ==/UserScript==

// a function that loads jQuery and calls a callback function when jQuery has finished loading
function addjQuery(callback) {
  var script = document.createElement("script");
  script.setAttribute("src", "http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js");
  script.addEventListener('load', function() {
    var script = document.createElement("script");
    script.textContent = "(" + callback.toString() + ")();";
    document.body.appendChild(script);
  }, false);
  document.body.appendChild(script);
}

function main() {
  var unsafeWindow = this['unsafeWindow'] || window;
  if (document.location.href.match(/\?download/)) {
    location.assign('javascript: var time = 10;');
  } else {
    var src = $('#my2-main-content a').attr('href');
    //console.log(src);
    $.get(src);
    unsafeWindow.isClick = 1;
    $('#verify_code_value').keyup(function() {
      if ($(this).val().length == 6) {
        $('#save_action').val(1);
        document.myForm.submit();
      }
    });
  }
}

addjQuery(main);