!function(t){function n(r){if(e[r])return e[r].exports;var o=e[r]={exports:{},id:r,loaded:!1};return t[r].call(o.exports,o,o.exports,n),o.loaded=!0,o.exports}var e={};return n.m=t,n.c=e,n.p="",n(0)}([function(t,n,e){e(1),e(2)},function(t,n){!function(t){var n=t.document.documentMode,e="onhashchange"in t&&(void 0===n||n>7),r=t.jHash={jhash:"2.1",change:function(n){e?u(t,"hashchange",n):o.push(n)},unbind:function(n){return e?s(t,"hashchange",n):a(o,o.indexOf(n)),this},val:function(t,n){var e=r.query();return 2===arguments.length?(e[t.toLowerCase()]=null===n?"":n,this.set(this.root(),e)):1===arguments.length&&"string"==typeof t?e[t.toLowerCase()]:"object"==typeof t?this.set(this.root(),t):e},root:function(n){return void 0===n?c(t.location.hash):this.set(n,this.val())},set:function(n,e){var r=null;if(null===n&&null===e)r=null;else if(void 0!==e){var o=n,i="string"==typeof e?e:l(e);i.length>0&&(o+="?"),r=o+i}else r=n;return t.location.hash=r,this},remove:function(t){var n=r.query();return n[t.toLowerCase()]=void 0,this.set(this.root(),n)},query:function(){return h(t.location.hash)},clear:function(){return t.location.hash="",this},clearQuery:function(){return this.set(this.root()),this},clearRoot:function(){return this.set("",this.query()),this},_routes:{},_routeHandlerRegistered:!1,_defaultRoute:null,route:function(t,n){this._routes[t]=n,this._routeHandlerRegistered||(this._routeHandlerRegistered=!0,r.change(g))},processRoute:function(){g()},defaultRoute:function(t,n){return 0==arguments.length?this._defaultRoute:void(this._defaultRoute={root:t,query:n})}};e||t.setInterval(function(){var n=t.location.hash;if(i!==n)for(var e in o)o[e].call(t);i=n},200);var o=[],i=t.location.hash,u=function(t,n,e){t.addEventListener?t.addEventListener(n,e,!1):t.attachEvent?t.attachEvent("on"+n,e):t["on"+n]+=e},s=function(t,n,e){t.removeEventListener?t.removeEventListener(n,e,!1):t.detachEvent?t.detachEvent("on"+n,e):t["on"+n]-=e},a=function(t,n,e){var r=t.slice((e||n)+1||t.length);return t.length=0>n?t.length+n:n,t.push.apply(t,r)},h=function(t){var n={},e=null,r=t.substring(0,t.length);if(null!==t&&void 0!==t){0===r.indexOf("#")&&(r=r.substring(1,r.length));var o=r.indexOf("?");if(o>-1){r=r.substring(o+1,r.length);var i=r.split("&");for(var u in i)e=i[u].split("="),n[e[0].toString().toLowerCase()]=e[1]}}return n},l=function(t){var n="";for(var e in t)void 0!==t[e]&&(n.length>0&&(n+="&"),n+=e.toString()+"="+t[e].toString());return n},c=function(t){var n=t.substring(0,t.length);return n.indexOf("#")>-1&&(n=n.substring(1,n.length)),n.indexOf("?")>-1&&(n=n.substring(0,n.indexOf("?"))),n},f="([^/]+)",v=/{([\w\d]+)}/g,d=function(t,n){var e=new RegExp(t.replace(v,f)+"$");return n.match(e)},g=function(){var t=r.root(),n=r.defaultRoute();if(0===(t||"").length&&n)return void r.set(n.root,n.query);for(var e in r._routes)if("string"==typeof e){var o=d(e,t);if(null!==o){var i=r._routes[e],u={},s=e.match(v);if(null!==s)for(var a=0;a<s.length;a++){var h=s[a].substring(1).substring(0,s[a].length-2);u[h]=o[a+1]}return void i.call(u)}}}}(window)},function(t,n){}]);