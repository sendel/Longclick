/**
 * jQuery Longclick Event
 * ======================
 * Press & hold mouse button "long click" special event for jQuery 1.4.x
 *
 * @license Longclick Event
 * Copyright (c) 2010 Petr Vostrel (http://petr.vostrel.cz/)
 * Modified in 2014 by Pascal GANAYE (https://github.com/paganaye/Longclick/)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * Version: 0.4.0
 * Updated: 2014-10-13
 */
!function(t){function n(n){return t.each("touchstart touchend touchcancel".split(/ /),function(i,e){n.addEventListener(e,function(){t(n).trigger(e)},!1)}),t(n)}function i(n){function i(){t(e).data(v,!0).data(m,null),n.type=o;var i=jQuery.event.dispatch||jQuery.event.handle;i.apply(e,a)}if(!t(this).data(m)){var e=this,a=arguments;t(this).data(v,!1).data(m,setTimeout(i,t(this).data(p)||t.longclick.duration))}}function e(){var n=t(this).data(m);n&&t(this).data(m,clearTimeout(n)||null)}function a(n){return t(this).data(v)?n.stopImmediatePropagation()||!1:void 0}t.fn.longclick=function(){var n=arguments[0],i=arguments[1],e=t(this).data(p,i||null);return n?e.bind(o,n):e.trigger(o)},t.longclick={duration:500},t.event.special.longclick={setup:function(){/iphone|ipad|ipod/i.test(navigator.userAgent)?n(this).bind(h,i).bind([g,f].join(" "),e).bind(r,a).css({WebkitUserSelect:"none"}):t(this).bind(c,i).bind([d,s,l].join(" "),e).bind(r,a)},teardown:function(){t(this).unbind(u)}};var o="longclick",u="."+o,c="mousedown"+u,r="click"+u,d="mouseup"+u,s="mouseout"+u,l="contextmenu"+u,h="touchstart"+u,g="touchend"+u,f="touchcancel"+u,p="duration"+u,m="timer"+u,v="fired"+u}(jQuery);
