"use strict";(self.webpackChunktodo=self.webpackChunktodo||[]).push([[750],{7750:function(t,e,n){n.r(e),n.d(e,{createSwipeBackGesture:function(){return o}});var r=n(2413),i=n(26),u=n(6037),o=function(t,e,n,o,a){var c=t.ownerDocument.defaultView,f=(0,i.i)(t),s=function(t){return f?-t.deltaX:t.deltaX};return(0,u.createGesture)({el:t,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:function(t){return function(t){var e=t.startX;return f?e>=c.innerWidth-50:e<=50}(t)&&e()},onStart:n,onMove:function(t){var e=s(t)/c.innerWidth;o(e)},onEnd:function(t){var e=s(t),n=c.innerWidth,i=e/n,u=function(t){return f?-t.velocityX:t.velocityX}(t),o=u>=0&&(u>.2||e>n/2),d=(o?1-i:i)*n,h=0;if(d>5){var l=d/Math.abs(u);h=Math.min(l,540)}a(o,i<=0?.01:(0,r.j)(0,i,.9999),h)}})}}}]);
//# sourceMappingURL=750.4133a5c6.chunk.js.map