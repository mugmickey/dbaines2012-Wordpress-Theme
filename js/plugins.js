/* ------------------------------------------------------------------------------

OPTIMISED AND JOINED PLUGINS, YO
dbaines.com

Compressed with:
http://www.refresh-sf.com/yui

------------------------------------------------------------------------------ */

// Sudo Slider ver 2.1.3 - jQuery plugin 
// Written by Erik Kristensen info@webbies.dk. 
// Based on Easy Slider 1.7 by Alen Grakalic http://cssglobe.com/post/5780/easy-slider-17-numeric-navigation-jquery-slider
// Dual licensed under the MIT and GPL licenses.
// Modifications by David Baines - dbaines.com
(function(a){a.fn.sudoSlider=function(d){var b=!1,c=!b,f={controlsShow:c,controlsFadeSpeed:400,controlsFade:c,insertAfter:c,firstShow:b,lastShow:b,vertical:b,speed:800,ease:"swing",auto:b,pause:2000,continuous:b,prevNext:c,numeric:b,numericAttr:'class="controls"',numericText:[],clickableAni:b,history:b,speedhistory:400,autoheight:c,customLink:b,fade:b,crossFade:c,fadespeed:1000,updateBefore:b,ajax:b,preloadAjax:100,startSlide:b,ajaxLoadFunction:b,beforeAniFunc:b,afterAniFunc:b,uncurrentFunc:b,currentFunc:b,prevHtml:'<a href="#" class="prevBtn"> previous </a>',nextHtml:'<a href="#" class="nextBtn"> next </a>',loadingText:"Loading Content...",firstHtml:'<a href="#" class="firstBtn"> first </a>',controlsAttr:'id="controls"',lastHtml:'<a href="#" class="lastBtn"> last </a>',autowidth:c,slideCount:1,resumePause:b,moveCount:1,keyboardNav:true},e=this;d=a.extend(f,d);return this.each(function(){var am,V,U,h,ae,ad,N,aw,an,ak,g,l,v,F,aA,K,M,O,D,at,C,ai,x,p,W,L,al,az,ay,ap,ao,S,B=b,af,m=a(this),H=d,Z=[];ac(m,b);function ac(t,s){if(H.keyboardNav){function i(aB){switch(aB.keyCode){case 37:aB.preventDefault();ag("prev",true);break;case 39:aB.preventDefault();ag("next",true);break;default:}}if(a.browser.mozilla){a(document).keypress(i)}else{a(document).keydown(i)}}ay=0;for(az in H){Z[ay]=H[az];ay++}aA=b;am=c;V=t.children("ul");U=V.children("li");ae=U.length;if(Z[25]){if(V.length==0){t.append(V=a("<ul></ul>"))}if(Z[25].length>ae){for(az=1;az<=Z[25].length-ae;az++){V.append("<li><p>"+Z[35]+"</p></li>")}U=V.children("li");ae=U.length}}ad=0;N=ad;aw=ae-1;an=c;ak=b;g=b;l=b;v=new Array();aA=b;if(t.css("position")=="static"){t.css("position","relative")}U.css({"float":"left",display:"block"});Z[40]=r(Z[40]);Z[42]--;S=Z[40];if(!Z[21]){Z[40]+=Z[42]}if(Z[40]>ae){Z[40]=ae}Z[27]=r(Z[27])||1;ao=Z[11]&&(!Z[21]||Z[40]>1);for(az=0;az<ae;az++){Z[15][az]=Z[15][az]||(az+1);Z[25][az]=Z[25][az]||b}if(ao){for(ap=Z[40];ap>=1;ap--){V.prepend(U.eq(-Z[40]+ap-1).clone()).append(U.eq(Z[40]-ap).clone())}h=V.children("li");if(Z[25]){for(az=ae-Z[40];az<ae;az++){if(Z[25][az]&&az!=Z[27]-1){Y(az,b,0,b)}}}}Z[2]=Z[2]&&!Z[11];V[Z[6]?"height":"width"](10000000);h=V.children("li");K=b;if(Z[0]){K=a("<span "+Z[37]+"></span>");a(t)[Z[3]?"after":"before"](K);if(Z[13]){F=K.prepend("<ol "+Z[14]+"></ol>").children();ay=Z[13]=="pages"?S:1;for(az=0;az<ae-((Z[11]||Z[13]=="pages")?1:S)+1;az+=ay){v[az]=a("<li rel='"+(az+1)+"'><a href='#'><span>"+Z[15][az]+"</span></a></li>").appendTo(F).click(function(){ag(a(this).attr("rel")-1,c);return b})}}if(Z[4]){O=ab(Z[36],"first")}if(Z[5]){D=ab(Z[38],"last")}if(Z[12]){at=ab(Z[34],"next");C=ab(Z[33],"prev")}}if(Z[26]===c){for(ap=0;ap<=aw;ap++){if(Z[25][ap]&&Z[27]-1!=ap){Y(ap,b,0,b)}}}ay=[1,7,10,18,23];for(az in ay){Z[r(ay[az])]=j(Z[r(ay[az])])}if(Z[20]){a(Z[20]).live("click",function(){if(az=a(this).attr("rel")){if(az=="stop"){Z[9]=b;k()}else{if(az=="start"){ai=J(Z[10]);Z[9]=c}else{if(az=="block"){an=b}else{if(az=="unblock"){an=c}else{if(an){ag((az==r(az))?az-1:az,c)}}}}}}return b})}I(h.slice(0,Z[40]),c,function(){if(Z[9]){ai=J(Z[10])}if(s){aj(s,b,b,b)}else{if(Z[17]){if(a.hashchange){a(window).hashchange(A)}else{if(a.address){a.address.change(function(aB){A()})}else{a(window).bind("hashchange",A)}}A()}else{aj(Z[27]-1,b,b,b)}}})}function A(){ap=G(location.hash.substr(1));if(am){aj(ap,b,b,b)}else{if(ap!=ad){ag(ap,b)}}}function u(){if(Z[25]&&r(Z[26])){for(az in Z[25]){if(Z[25][az]){clearTimeout(af);af=setTimeout(function(){Y(az,b,0,b)},r(Z[26]));break}}}}function J(i){al=c;return setTimeout(function(){ag("next",b)},i)}function k(){clearTimeout(ai);al=b}function j(i){return(r(i)||i==0)?r(i):i=="fast"?200:(i=="normal"||i=="medium")?400:i=="slow"?600:400}function ab(i,s){return a(i).prependTo(K).click(function(){ag(s,c);return b})}function ag(aB,t){B=b;if(!aA){if(Z[9]){var s=Z[7];if(g&&Z[22]){s=r((s)*(3/5))}else{if(g){s=0}}if(t){k();if(Z[41]){ai=J(s+Z[41])}}else{ai=J(Z[10]+s)}}if(Z[21]){E(aB,t)}else{if(Z[11]){aB=T(aB);var aC=Math.abs(ad-aB);if(aB<Z[40]-S+1&&Math.abs(ad-aB-ae)<aC){aB=aB+ae;aC=Math.abs(ad-aB-ae)}if(aB>aw-Z[40]&&Math.abs(ad-aB+ae)<aC){aB=aB-ae}}else{aB=T(aB)}aj(aB,t,c,b)}}}function R(aD,aC,i){if(i){var aB=at,s=D,aE="next",t="last",aF=Z[5]}else{var aB=C,s=O,aE="prev",t="first",aF=Z[4]}if(Z[0]){if(Z[12]){aB[aD?"fadeIn":"fadeOut"](aC)}if(aF){s[aD?"fadeIn":"fadeOut"](aC)}}if(Z[20]){a(Z[20]).filter(function(aG){return(a(this).attr("rel")==aE||a(this).attr("rel")==t)})[aD?"fadeIn":"fadeOut"](aC)}}function q(i,s){R(i,s,b);R(i<ae-S,s,c)}function z(s){s=aq(s)+1;if(Z[13]){for(az in v){ah(v[az],s)}}if(Z[20]){ah(a(Z[20]),s)}}function ah(t,s){if(t.filter){t.filter(".current").removeClass("current").each(function(){if(ax(Z[31])){Z[31].call(this,a(this).attr("rel"))}});t.filter(function(){ay=a(this).attr("rel");if(Z[13]=="pages"){for(az=0;az<S;az++){if(ay==s-az){return c}}}else{return ay==s}return b}).addClass("current").each(function(i){if(ax(Z[32])){Z[32].call(this,s)}})}}function G(i){for(ap in Z[15]){if(Z[15][ap]==i){return ap}}return i?ad:0}function I(aB,t,aC){var s=aB.add(aB.find("img")).filter("img");var i=s.length;if(!i){aC()}s.load(function(){if(this.naturalHeight&&!this.clientHeight){a(this).height(this.naturalHeight).width(this.naturalWidth)}if(t){i--;if(i==0){aC()}}else{aC()}}).each(function(){if((this.complete||this.complete===undefined)&&t){var aD=this.src;this.src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";this.src=aD}})}function y(s,t){if(Z[19]){o(s,t,c)}if(Z[39]){o(s,t,b)}}function o(s,aB,t){m.ready(function(){av(s,aB,t);I(U.eq(s),b,function(){av(s,aB,t)})})}function av(s,aB,t){var s=aq(s);var aC=U.eq(s);ay=aC[t?"height":"width"]();m.animate(t?{height:ay}:{width:ay},{queue:b,duration:aB,easing:Z[8]})}function Q(){V.css(Z[6]?"margin-top":"margin-left",aa(ad))}function aa(i){i=h.eq(i+(ao?Z[40]:0));return i.length?-i.position()[Z[6]?"top":"left"]:0}function ar(){ad=aq(ad);if(!Z[24]){z(ad)}Q();an=c;if(Z[17]&&ak){window.location.hash=Z[15][ad]}if(!g&&B){n(ad,c)}}function n(s,t){(t?au:w)(U.eq(s),aq(s)+1);if(ao){if(s<Z[40]){(t?au:w)(h.eq((s<0)?s+Z[40]:s-Z[40]),s+1)}if(s>aw-Z[40]||s==-Z[40]){(t?au:w)(h.eq((s==-Z[40])?-1:Z[40]+s-aw-1),s+1)}}}function au(s,i){if(ax(Z[30])){Z[30].call(s,i)}}function w(s,i){if(ax(Z[29])){Z[29].call(s,i)}}function T(i){return i=="next"?aq(ad+1+Z[42]):i=="prev"?aq(ad-1-Z[42]):i=="first"?0:i=="last"?aw:r(i)}function Y(aD,aI,aB,s){if(af){clearTimeout(af)}var aF=Z[25][aD],aC=U.eq(aD),aG=aB===c,aB=(aB===c)?0:aB,aH=(g)?(!Z[22]?r(Z[23]*(2/5)):Z[23]):aB,aE=aD+1,t=b;a.ajax({url:aF,success:function(aK,aL,aJ){var i=aJ.getResponseHeader("Content-Type").substr(0,5);if(i!="image"){t=c;aC.html(aK);P(aD,aB,s,aI,aG,b)}},complete:function(i){if(!t){image=new Image();aC.html("").append(image);image.src=aF;P(aD,aB,s,aI,aG,c)}}});Z[25][aD]=b;H.ajax[aD]=b}function P(aC,aD,s,aF,aB,t){var aE=U.eq(aC);if(ao){if(aC<Z[40]){h.eq((aC<0)?aC+Z[40]:aC-Z[40]).replaceWith(a(aE).clone())}if(aC>aw-Z[40]){h.eq(Z[40]+aC-aw-1).replaceWith(a(aE).clone())}h=V.children("li");if(aB===c){Q()}}if(aF){y(aC,aD)}I(aE,c,function(){if(aB===c){Q()}if(ax(s)){s()}u()});if(ax(Z[28])){Z[28].call(aE,r(aC)+1,t)}if(s==2){n(aC,b);if(!B){n(aC,c);B=c}}}function E(aB,aD,aH){if(T(aB)!=ad&&!aA&&an){l=b;if(Z[24]){z(T(aB))}var s=(!aD&&!Z[9]&&Z[17])?Z[23]*(Z[18]/Z[7]):Z[23],aF=T(aB);if(Z[2]){q(aF,Z[1])}if(aH){s=p;if(L){L--}}else{if(Z[25]){L=0;p=s;for(az=aF;az<aF+S;az++){if(Z[25][az]){Y(aq(az),b,s,function(){E(aB,aD,c)});L++}}}else{L=b}}if(!L){an=!aD;y(aF,Z[23]);n(aF,b);if(Z[22]){var aC=c,aE=0;for(az=aF;az<aF+S;az++){U.eq(aq(az)).clone().prependTo(m).css({"z-index":"100000",position:"absolute","list-style":"none",top:Z[6]?aE:0,left:Z[6]?0:aE}).hide().fadeIn(Z[23],function(){X(this);an=c;g=c;if(aC){aj(aF,b,b,b);if(Z[17]&&aD){window.location.hash=Z[15][ad]}n(aF,c);aC=b}a(this).remove();g=b});aE+=U.eq(az)[Z[6]?"outerHeight":"outerWidth"](c)}}else{var t=r((s)*(3/5));var aG=s-t;U.stop().fadeTo(aG,0.001,function(){an=c;g=c;aj(aF,b,b,b);an=!aD;U.fadeTo(t,1,function(){X(this);if(Z[17]&&aD){window.location.hash=Z[15][ad]}an=c;g=b;n(aF,c)})})}}}}function aj(aC,aF,t,aI){if((an&&!aA&&(aC!=ad||am))&&ae>aq(aC)||aI){if(!aI){l=b}an=(!aF&&!Z[9])?c:Z[16];ak=aF;N=ad;ad=aC;if(Z[24]){z(ad)}var aG=Math.sqrt(Math.abs(N-ad)),aB=(!t)?0:((!aF&&!Z[9])?r(aG*Z[18]):r(aG*Z[7])),aD=aq(ad);if(aI){aB=p;if(W){W--}}else{if(Z[25]){if(Z[25][aD]){Y(aD,c,am||aB,2);l=c}if(!g){var s=(N>ad)?ad:N,aH=(N>ad)?N:ad;W=0;p=aB;for(az=s;az<=aH;az++){if(az<=aw&&az>=0&&Z[25][az]){Y(az,b,aB,function(){aj(aC,aF,t,c)});W++}}}for(az=aD+1;az<=aD+S;az++){if(Z[25][az]){Y(az,b,0,b)}}}}if(!W){if(!g&&!l){n(aD,b);B=c}if(!g){y(ad,aB)}ay=aa(ad);V.animate(Z[6]?{marginTop:ay}:{marginLeft:ay},{queue:b,duration:aB,easing:Z[8],complete:ar});if(Z[2]){var aE=Z[1];if(!aF&&!Z[9]){aE=(Z[18]/Z[7])*Z[1]}if(!t){aE=0}if(g){aE=r((Z[23])*(3/5))}q(ad,aE)}if(am){if(!Z[25][aD]){u()}}am=b}}}function aq(i){return r(i<0?i+ae:i>aw?i-ae:i)}function ax(i){return a.isFunction(i)}function r(i){return parseInt(i,10)}function X(i){if(screen.fontSmoothingEnabled){i.style.removeAttribute("filter")}}e.getOption=function(i){return H[i]};e.setOption=function(i,s){if(s){e.destroy();H[i]=s;e.init()}return e};e.insertSlide=function(s,t,i){if(s){e.destroy();if(t>ae){t=ae}var s="<li>"+s+"</li>";if(!t||t==0){V.prepend(s)}else{U.eq(t-1).after(s)}if(t<=x||(!t||t==0)){x++}if(Z[15].length<t){Z[15].length=t}Z[15].splice(t,0,i||r(t)+1);e.init()}return e};e.removeSlide=function(i){i--;e.destroy();U.eq(i).remove();Z[15].splice(i,1);if(i<x){x--}e.init();return e};e.goToSlide=function(i){ag((i==r(i))?i-1:i,c);return e};e.block=function(){an=b;return e};e.unblock=function(){an=c;return e};e.startAuto=function(){Z[9]=c;ai=J(Z[10]);return e};e.stopAuto=function(){Z[9]=b;k();return e};e.destroy=function(){x=ad;if(K){K.remove()}aA=c;a(Z[20]).die("click");if(ao){for(az=1;az<=Z[40];az++){h.eq(az-1).add(h.eq(-az)).remove()}}V.css(Z[6]?"margin-top":"margin-left",aa(ad));return e};e.init=function(){if(aA){ac(m,x)}return e};e.adjust=function(i){if(!i){i=0}y(ap,i);return e};e.getValue=function(i){return i=="currentSlide"?ad+1:i=="totalSlides"?ae:i=="clickable"?an:i=="destroyed"?aA:i=="autoAnimation"?al:undefined}})}})(jQuery);

// ColorBox v1.3.15 - a full featured, light-weight, customizable lightbox based on jQuery 1.3+
// Copyright (c) 2010 Jack Moore - jack@colorpowered.com
// Licensed under the MIT license: http://www.opensource.org/licenses/mit-license.php
(function(B,P){var C={transition:"elastic",speed:300,width:false,initialWidth:"600",innerWidth:false,maxWidth:false,height:false,initialHeight:"450",innerHeight:false,maxHeight:false,scalePhotos:true,scrolling:true,inline:false,html:false,iframe:false,photo:false,href:false,title:false,rel:false,opacity:0.9,preloading:true,current:"image {current} of {total}",previous:"previous",next:"next",close:"close",open:false,returnFocus:true,loop:true,slideshow:false,slideshowAuto:true,slideshowSpeed:2500,slideshowStart:"start slideshow",slideshowStop:"stop slideshow",onOpen:false,onLoad:false,onComplete:false,onCleanup:false,onClosed:false,overlayClose:true,escKey:true,arrowKey:true,showdate:false},t="colorbox",M="cbox",O=M+"_open",e=M+"_load",N=M+"_complete",q=M+"_cleanup",U=M+"_closed",i=M+"_purge",I=M+"_loaded",r=B.browser.msie&&!B.support.opacity,X=r&&B.browser.version<7,T=M+"_IE6",K,Y,Z,d,z,m,b,J,c,S,F,j,h,l,p,Q,o,L,v,aa,k,g,a,s,A,V,x,R,E=false,D,n=M+"Element";function H(ac,ab){ac=ac?' id="'+M+ac+'"':"";ab=ab?' style="'+ab+'"':"";return B("<div"+ac+ab+"/>")}function G(ab,ac){ac=ac==="x"?S.width():S.height();return(typeof ab==="string")?Math.round((/%/.test(ab)?(ac/100)*parseInt(ab,10):parseInt(ab,10))):ab}function w(ab){return V.photo||/\.(gif|png|jpg|jpeg|bmp)(?:\?([^#]*))?(?:#(\.*))?$/i.test(ab)}function W(ac){for(var ab in ac){if(B.isFunction(ac[ab])&&ab.substring(0,2)!=="on"){ac[ab]=ac[ab].call(s)}}ac.rel=ac.rel||s.rel||"nofollow";ac.href=ac.href||B(s).attr("href");ac.title=ac.title||s.title;ac.date=B(s).attr("data-date");return ac}function y(ab,ac){if(ac){ac.call(s)}B.event.trigger(ab)}function u(){var ac,ae=M+"Slideshow_",af="click."+M,ag,ad,ab;if(V.slideshow&&c[1]){ag=function(){Q.text(V.slideshowStop).unbind(af).bind(N,function(){if(A<c.length-1||V.loop){ac=setTimeout(D.next,V.slideshowSpeed)}}).bind(e,function(){clearTimeout(ac)}).one(af+" "+q,ad);Y.removeClass(ae+"off").addClass(ae+"on");ac=setTimeout(D.next,V.slideshowSpeed)};ad=function(){clearTimeout(ac);Q.text(V.slideshowStart).unbind([N,e,q,af].join(" ")).one(af,ag);Y.removeClass(ae+"on").addClass(ae+"off")};if(V.slideshowAuto){ag()}else{ad()}}}function f(ab){if(!E){s=ab;V=W(B.extend({},B.data(s,t)));c=B(s);A=0;if(V.rel!=="nofollow"){c=B("."+n).filter(function(){var ad=B.data(this,t).rel||this.rel;return(ad===V.rel)});A=c.index(s);if(A===-1){c=c.add(s);A=c.length-1}}if(!x){x=R=true;Y.show();if(V.returnFocus){try{s.blur();B(s).one(U,function(){try{this.focus()}catch(ad){}})}catch(ac){}}K.css({opacity:+V.opacity,cursor:V.overlayClose?"pointer":"auto"}).show();V.w=G(V.initialWidth,"x");V.h=G(V.initialHeight,"y");D.position(0);if(X){S.bind("resize."+T+" scroll."+T,function(){K.css({width:S.width(),height:S.height(),top:S.scrollTop(),left:S.scrollLeft()})}).trigger("scroll."+T)}y(O,V.onOpen);p.add(L).add(o).add(Q).add(l).add($date).hide();v.html(V.close).show()}D.load(true)}}D=B.fn[t]=B[t]=function(ab,ae){var ac=this,ad;if(!ac[0]&&ac.selector){return ac}ab=ab||{};if(ae){ab.onComplete=ae}if(!ac[0]||ac.selector===undefined){ac=B("<a/>");ab.open=true}ac.each(function(){B.data(this,t,B.extend({},B.data(this,t)||C,ab));B(this).addClass(n)});ad=ab.open;if(B.isFunction(ad)){ad=ad.call(ac)}if(ad){f(ac[0])}return ac};D.init=function(){S=B(P);Y=H().attr({id:t,"class":r?M+"IE":""});K=H("Overlay",X?"position:absolute":"").hide();Z=H("Wrapper");d=H("Content").append(F=H("LoadedContent","width:0; height:0; overflow:hidden"),h=H("LoadingOverlay").add(H("LoadingGraphic")),l=H("Title"),$date=H("Date"),p=H("Current"),o=H("Next"),L=H("Previous"),Q=H("Slideshow").bind(O,u),v=H("Close"));Z.append(H().append(H("TopLeft"),z=H("TopCenter"),H("TopRight")),H(false,"clear:left").append(m=H("MiddleLeft"),d,b=H("MiddleRight")),H(false,"clear:left").append(H("BottomLeft"),J=H("BottomCenter"),H("BottomRight"))).children().children().css({"float":"left"});j=H(false,"position:absolute; width:9999px; visibility:hidden; display:none");B("body").prepend(K,Y.append(Z,j));d.children().hover(function(){B(this).addClass("hover")},function(){B(this).removeClass("hover")}).addClass("hover");aa=z.height()+J.height()+d.outerHeight(true)-d.height();k=m.width()+b.width()+d.outerWidth(true)-d.width();g=F.outerHeight(true);a=F.outerWidth(true);Y.css({"padding-bottom":aa,"padding-right":k}).hide();o.click(D.next);L.click(D.prev);v.click(D.close);d.children().removeClass("hover");B("."+n).live("click",function(ab){if(!((ab.button!==0&&typeof ab.button!=="undefined")||ab.ctrlKey||ab.shiftKey||ab.altKey)){ab.preventDefault();f(this)}});K.click(function(){if(V.overlayClose){D.close()}});B(document).bind("keydown",function(ab){if(x&&V.escKey&&ab.keyCode===27){ab.preventDefault();D.close()}if(x&&V.arrowKey&&!R&&c[1]){if(ab.keyCode===37&&(A||V.loop)){ab.preventDefault();L.click()}else{if(ab.keyCode===39&&(A<c.length-1||V.loop)){ab.preventDefault();o.click()}}}})};D.remove=function(){Y.add(K).remove();B("."+n).die("click").removeData(t).removeClass(n)};D.position=function(af,ac){var ae,ad=Math.max(document.documentElement.clientHeight-V.h-g-aa,0)/2+S.scrollTop(),ab=Math.max(S.width()-V.w-a-k,0)/2+S.scrollLeft();ae=(Y.width()===V.w+a&&Y.height()===V.h+g)?0:af;Z[0].style.width=Z[0].style.height="9999px";function ag(ah){z[0].style.width=J[0].style.width=d[0].style.width=ah.style.width;h[0].style.height=h[1].style.height=d[0].style.height=m[0].style.height=b[0].style.height=ah.style.height}Y.dequeue().animate({width:V.w+a,height:V.h+g,top:ad,left:ab},{duration:ae,complete:function(){ag(this);R=false;Z[0].style.width=(V.w+a+k)+"px";Z[0].style.height=(V.h+g+aa)+"px";if(ac){ac()}},step:function(){ag(this)}})};D.resize=function(ab){if(x){ab=ab||{};if(ab.width){V.w=G(ab.width,"x")-a-k}if(ab.innerWidth){V.w=G(ab.innerWidth,"x")}F.css({width:V.w});if(ab.height){V.h=G(ab.height,"y")-g-aa}if(ab.innerHeight){V.h=G(ab.innerHeight,"y")}if(!ab.innerHeight&&!ab.height){var ac=F.wrapInner("<div style='overflow:auto'></div>").children();V.h=ac.height();ac.replaceWith(ac.children())}F.css({height:V.h});D.position(V.transition==="none"?0:V.speed)}};D.prep=function(ae){if(!x){return}var ad,af=V.transition==="none"?0:V.speed;S.unbind("resize."+M);F.remove();F=H("LoadedContent").html(ae);function ab(){V.w=V.w||F.width();V.w=V.mw&&V.mw<V.w?V.mw:V.w;return V.w}function ag(){V.h=V.h||F.height();V.h=V.mh&&V.mh<V.h?V.mh:V.h;return V.h}F.hide().appendTo(j.show()).css({width:ab(),overflow:V.scrolling?"auto":"hidden"}).css({height:ag()}).prependTo(d);j.hide();B("#"+M+"Photo").css({cssFloat:"none",marginLeft:"auto",marginRight:"auto"});if(X){B("select").not(Y.find("select")).filter(function(){return this.style.visibility!=="hidden"}).css({visibility:"hidden"}).one(q,function(){this.style.visibility="inherit"})}function ac(ak){var am,an,aj,ai,al=c.length,ah=V.loop;D.position(ak,function(){function ao(){if(r){Y[0].style.removeAttribute("filter")}}if(!x){return}if(r){if(ad){F.fadeIn(100)}}F.show();y(I);l.show().html(V.title);if(V.showdate){$date.show().html(V.date)}if(al>1){if(typeof V.current==="string"){p.html(V.current.replace(/\{current\}/,A+1).replace(/\{total\}/,al)).show()}o[(ah||A<al-1)?"show":"hide"]().html(V.next);L[(ah||A)?"show":"hide"]().html(V.previous);am=A?c[A-1]:c[al-1];aj=A<al-1?c[A+1]:c[0];if(V.slideshow){Q.show()}if(V.preloading){ai=B.data(aj,t).href||aj.href;an=B.data(am,t).href||am.href;ai=B.isFunction(ai)?ai.call(aj):ai;an=B.isFunction(an)?an.call(am):an;if(w(ai)){B("<img/>")[0].src=ai}if(w(an)){B("<img/>")[0].src=an}}}h.hide();if(V.transition==="fade"){Y.fadeTo(af,1,function(){ao()})}else{ao()}S.bind("resize."+M,function(){D.position(0)});y(N,V.onComplete)})}if(V.transition==="fade"){Y.fadeTo(af,0,function(){ac(0)})}else{ac(af)}};D.load=function(ae){var ad,ac,af,ab=D.prep;R=true;s=c[A];if(!ae){V=W(B.extend({},B.data(s,t)))}y(i);y(e,V.onLoad);V.h=V.height?G(V.height,"y")-g-aa:V.innerHeight&&G(V.innerHeight,"y");V.w=V.width?G(V.width,"x")-a-k:V.innerWidth&&G(V.innerWidth,"x");V.mw=V.w;V.mh=V.h;if(V.maxWidth){V.mw=G(V.maxWidth,"x")-a-k;V.mw=V.w&&V.w<V.mw?V.w:V.mw}if(V.maxHeight){V.mh=G(V.maxHeight,"y")-g-aa;V.mh=V.h&&V.h<V.mh?V.h:V.mh}ad=V.href;h.show();if(V.inline){H().hide().insertBefore(B(ad)[0]).one(i,function(){B(this).replaceWith(F.children())});ab(B(ad))}else{if(V.iframe){Y.one(I,function(){var ag=B("<iframe frameborder='0' style='width:100%; height:100%; border:0; display:block'/>")[0];ag.name=M+(+new Date());ag.src=V.href;if(!V.scrolling){ag.scrolling="no"}if(r){ag.allowtransparency="true"}B(ag).appendTo(F).one(i,function(){ag.src="//about:blank"})});ab(" ")}else{if(V.html){ab(V.html)}else{if(w(ad)){ac=new Image();ac.onload=function(){var ag;ac.onload=null;ac.id=M+"Photo";B(ac).css({border:"none",display:"block",cssFloat:"left"});if(V.scalePhotos){af=function(){ac.height-=ac.height*ag;ac.width-=ac.width*ag};if(V.mw&&ac.width>V.mw){ag=(ac.width-V.mw)/ac.width;af()}if(V.mh&&ac.height>V.mh){ag=(ac.height-V.mh)/ac.height;af()}}if(V.h){ac.style.marginTop=Math.max(V.h-ac.height,0)/2+"px"}if(c[1]&&(A<c.length-1||V.loop)){B(ac).css({cursor:"pointer"}).click(D.next)}if(r){ac.style.msInterpolationMode="bicubic"}setTimeout(function(){ab(ac)},1)};setTimeout(function(){ac.src=ad},1)}else{if(ad){j.load(ad,function(ah,ag,ai){ab(ag==="error"?"Request unsuccessful: "+ai.statusText:B(this).children())})}}}}}};D.next=function(){if(!R){A=A<c.length-1?A+1:0;D.load()}};D.prev=function(){if(!R){A=A?A-1:c.length-1;D.load()}};D.close=function(){if(x&&!E){E=true;x=false;y(q,V.onCleanup);S.unbind("."+M+" ."+T);K.fadeTo("fast",0);Y.stop().fadeTo("fast",0,function(){y(i);F.remove();Y.add(K).css({opacity:1,cursor:"auto"}).hide();setTimeout(function(){E=false;y(U,V.onClosed)},1)})}};D.element=function(){return B(s)};D.settings=C;B(D.init)}(jQuery,this));