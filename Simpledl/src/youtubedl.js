/** Created by Goka Sarath kumar on 15/05/2022. ...*/


  var videoUrls = window.ytplayer.config.args.url_encoded_fmt_stream_map.split(',').map(function(item){
    return item.split("&"). reduce(function(pre, cur){

        cur = cur.split("=");

        return Object.assign(pre, {[cur[0]] : decodeURIComponent(cur[1])});
    }, {});
});
console.log("Our extension has loaded", videoUrls);

var container = document.getElementById("watch8-secondary-actions");
var btn = document.createElement("button");
btn.className ="ytd-button-renderer.style-scope.ytd-menu-renderer.force-icon-button.style-default.size-default";
btn.setAttribute("role", "button");
btn.innerText = "Download";

container.appendChild(btn);

