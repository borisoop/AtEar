/*!CK:842896568!*//*1437978781,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["szUyo"]); }

if(!Array.from)Array.from=function(a){if(a==null)throw new TypeError('Object is null or undefined');var b=arguments[1],c=arguments[2],d=this,e=Object(a),f=typeof Symbol==='function'?Symbol.iterator:'@@iterator',g=typeof b==='function',h=typeof e[f]==='function',i=0,j,k;if(h){j=typeof d==='function'?new d():[];var l=e[f](),m;while(!(m=l.next()).done){k=m.value;if(g)k=b.call(c,k,i);j[i]=k;i+=1;}j.length=i;return j;}var n=e.length;if(isNaN(n)||n<0)n=0;j=typeof d==='function'?new d(n):new Array(n);while(i<n){k=e[i];if(g)k=b.call(c,k,i);j[i]=k;i+=1;}j.length=i;return j;};

self.__DEV__=self.__DEV__||0;
(function(a){function b(c,d){if(this==null)throw new TypeError('Array.prototype.findIndex called on null or undefined');if(typeof c!=='function')throw new TypeError('predicate must be a function');var e=Object(this),f=e.length>>>0;for(var g=0;g<f;g++)if(c.call(d,e[g],g,e))return g;return -1;}if(!Array.prototype.findIndex)Array.prototype.findIndex=b;if(!Array.prototype.find)Array.prototype.find=function(c,d){if(this==null)throw new TypeError('Array.prototype.find called on null or undefined');var e=b.call(this,c,d);return e===-1?a:this[e];};})();





(function(){var a={},b=function(i,j){if(!i&&!j)return null;var k={};if(typeof i!=='undefined')k.type=i;if(typeof j!=='undefined')k.signature=j;return k;},c=function(i,j){return b(i&&/^[A-Z]/.test(i)?i:(void 0),j&&((j.params&&j.params.length)||j.returns)?'function('+(j.params?j.params.map(function(k){return (/\?/).test(k)?'?'+k.replace('?',''):k;}).join(','):'')+')'+(j.returns?':'+j.returns:''):(void 0));},d=function(i,j,k){return i;},e=function(i,j,k){if('sourcemeta' in __transform_includes)i.__SMmeta=j;if('typechecks' in __transform_includes){var l=c(j?j.name:(void 0),k);if(l)__w(i,l);}return i;},f=function(i,j,k){return k.apply(i,j);},g=function(i,j,k,l){if(l&&l.params)__t.apply(i,l.params);var m=k.apply(i,j);if(l&&l.returns)__t([m,l.returns]);return m;},h=function(i,j,k,l,m){if(m){if(!m.callId)m.callId=m.module+':'+(m.line||0)+':'+(m.column||0);var n=m.callId;a[n]=(a[n]||0)+1;}return k.apply(i,j);};if(typeof __transform_includes==='undefined'){__annotator=d;__bodyWrapper=f;}else{__annotator=e;if('codeusage' in __transform_includes){__annotator=d;__bodyWrapper=h;__bodyWrapper.getCodeUsage=function(){return a;};__bodyWrapper.clearCodeUsage=function(){a={};};}else if('typechecks' in __transform_includes){__bodyWrapper=g;}else __bodyWrapper=f;}})();

if(JSON.stringify(["\u2028\u2029"])==='["\u2028\u2029"]')JSON.stringify=function(a){var b=/\u2028/g,c=/\u2029/g;return function(d,e,f){var g=a.call(this,d,e,f);if(g){if(-1<g.indexOf('\u2028'))g=g.replace(b,'\\u2028');if(-1<g.indexOf('\u2029'))g=g.replace(c,'\\u2029');}return g;};}(JSON.stringify);






(function(){if(Object.assign)return;var a=Object.prototype.hasOwnProperty,b;if(Object.keys&&Object.keys.name!=='object_keys_polyfill'){b=function(c,d){var e=Object.keys(d);for(var f=0;f<e.length;f++)c[e[f]]=d[e[f]];};}else b=function(c,d){for(var e in d)if(a.call(d,e))c[e]=d[e];};Object.assign=function(c,d){if(c==null)throw new TypeError('Object.assign target cannot be null or undefined');var e=Object(c);for(var f=1;f<arguments.length;f++){var g=arguments[f];if(g!=null)b(e,Object(g));}return e;};}());

(function(a){a.__m=function(b,c){b.__SMmeta=c;return b;};})(this);
if(!String.prototype.startsWith)String.prototype.startsWith=function(a){"use strict";if(this==null)throw TypeError();var b=String(this),c=arguments.length>1?(Number(arguments[1])||0):0,d=Math.min(Math.max(c,0),b.length);return b.indexOf(String(a),c)==d;};if(!String.prototype.endsWith)String.prototype.endsWith=function(a){"use strict";if(this==null)throw TypeError();var b=String(this),c=b.length,d=String(a),e=arguments.length>1?(Number(arguments[1])||0):c,f=Math.min(Math.max(e,0),c),g=f-d.length;if(g<0)return false;return b.lastIndexOf(d,g)==g;};if(!String.prototype.contains)String.prototype.contains=function(a){"use strict";if(this==null)throw TypeError();var b=String(this),c=arguments.length>1?(Number(arguments[1])||0):0;return b.indexOf(String(a),c)!=-1;};if(!String.prototype.repeat)String.prototype.repeat=function(a){"use strict";if(this==null)throw TypeError();var b=String(this);a=Number(a)||0;if(a<0||a===Infinity)throw RangeError();if(a===1)return b;var c='';while(a){if(a&1)c+=b;if((a>>=1))b+=b;}return c;};


__t=function(a){return a[0];};__w=function(a){return a;};

(function(a){if(a.require)return;var b={},c={},d={},e={},f=0,g=1,h=2,i=4,j={},k=Object.prototype.hasOwnProperty,l=Object.prototype.toString;function m(ja){var ka=Array.prototype.slice.call(ja),la={},ma,na,oa,pa;while(ka.length){na=ka.shift();if(la[na])continue;la[na]=true;oa=b[na];if(!oa||!oa.waiting)continue;for(ma=0;ma<oa.dependencies.length;ma++){pa=oa.dependencies[ma];if(!b[pa]||b[pa].waiting)ka.push(pa);}}for(na in la)if(k.call(la,na))ka.push(na);var qa=[];for(ma=0;ma<ka.length;ma++){na=ka[ma];var ra=na;oa=b[na];if(!oa){ra+=' is not defined';}else if(!oa.waiting){ra+=' is ready';}else{var sa=[];for(var ta=0;ta<oa.dependencies.length;ta++){pa=oa.dependencies[ta];if(!b[pa]||b[pa].waiting)sa.push(pa);}ra+=' is waiting for '+sa.join(', ');}qa.push(ra);}return qa.join('\n');}function n(ja){this.name='ModuleError';this.message=ja;this.stack=Error(ja).stack;this.framesToPop=2;}n.prototype=Object.create(Error.prototype);n.prototype.constructor=n;var o,p;o=p=Date.now.bind(Date);var q=a.performance||a.msPerformance||a.webkitPerformance||{};if(q.now){o=q.now.bind(q);var r=q.timing&&q.timing.navigationStart;if(r)p=function(){return o()+r;};}var s=[0],t=[],u=0,v=0;function w(ja){v++;var ka=b[ja];if(ka&&ka.exports!=null){if(ka.refcount--===1)delete b[ja];return ka.exports;}return x(ja);}function x(ja){if(a.ErrorUtils&&!a.ErrorUtils.inGuard())return ErrorUtils.applyWithGuard(x,null,[ja]);var ka=b[ja];if(!ka){var la='Requiring unknown module "'+ja+'"';throw new n(la);}if(ka.hasError)throw new n('Requiring module "'+ja+'" which threw an exception');if(ka.waiting)throw new n('Requiring module "'+ja+'" with unresolved dependencies: '+m([ja]));var ma=ka.exports={},na=ka.factory;if(l.call(na)==='[object Function]'){var oa=ka.dependencies,pa=oa.length,qa;if(ka.special&h)pa=Math.min(pa,na.length);try{fa(ka,[]);var sa=[];for(var ta=0;sa.length<pa;ta++){var ua=oa[ta];if(!ka.inlineRequires[ua])sa.push(ua==='module'?ka:(ua==='exports'?ma:w.call(null,ua)));}++u;s.push(0);t.push(NaN);var va=p();try{qa=na.apply(ka.context||a,sa);}catch(ra){if(b.ex&&b.erx){var wa=w.call(null,'ex'),xa=w.call(null,'erx'),ya=xa(ra.message);if(ya[0].indexOf(' from module "%s"')<0){ya[0]+=' from module "%s"';ya[ya.length]=ja;}ra.message=wa.apply(null,ya);}throw ra;}finally{var za=p(),ab=za-va,bb=ab-s.pop(),cb=t.pop();s[s.length-1]+=ab;var db=c[ka.id];db.factoryTime=bb;db.factoryEnd=za;if(!isNaN(cb)){db.compileTime=cb-va;db.factoryTime-=db.compileTime;db.compileEnd=cb;}if(na.__SMmeta)for(var eb in na.__SMmeta)if(na.__SMmeta.hasOwnProperty(eb))db[eb]=na.__SMmeta[eb];}}catch(ra){ka.hasError=true;ka.exports=null;throw ra;}if(qa)ka.exports=qa;}else ka.exports=na;var fb=ja+':__required__';if(d[fb])y(fb,j);if(ka.refcount--===1)delete b[ja];return ka.exports;}w.__markCompiled=function(){t[t.length-1]=p();};w.__getFactoryTime=function(){var ja=0;for(var ka in c)if(c.hasOwnProperty(ka))ja+=c[ka].factoryTime;return ja;};w.__getCompileTime=function(){var ja=0;for(var ka in c)if(c.hasOwnProperty(ka))ja+=c[ka].compileTime;return ja;};w.__getTotalFactories=function(){return u;};w.__getTotalRequireCalls=function(){return v;};w.__getModuleTimeDetails=function(){var ja={};for(var ka in c)if(c.hasOwnProperty(ka))ja[ka]=c[ka];return ja;};function y(ja,ka,la,ma,na,oa,pa){if(a.TimeSlice&&!a.TimeSlice.inGuard())return a.TimeSlice.guard(function(){y(ja,ka,la,ma,na,oa,pa);},'define '+ja)();if(ka===(void 0)){ka=[];la=ja;ja=ca();}else if(la===(void 0)){la=ka;if(l.call(ja)==='[object Array]'){ka=ja;ja=ca(ka.join(','));}else ka=[];}var qa={cancel:aa.bind(this,ja)},ra=b[ja];if(ra){if(oa)ra.refcount+=oa;return qa;}else if(!ka&&!la&&oa){e[ja]=(e[ja]||0)+oa;return qa;}var sa=(e[ja]||0)+(oa||0);delete e[ja];ra=new z(ja,sa,null,la,ka,na,ma,pa||{});b[ja]=ra;c[ja]={id:ja,compileTime:null,factoryTime:null,compileEnd:null,factoryEnd:null};ea(ja);return qa;}function z(ja,ka,la,ma,na,oa,pa,qa){this.id=ja;this.refcount=ka;this.exports=la||null;this.factory=ma;this.dependencies=na;this.context=oa;this.special=pa||0;this.inlineRequires=qa;this.waitingMap={};this.waiting=0;this.hasError=false;this.ranRecursiveSideEffects=false;}function aa(ja){if(!b[ja])return;var ka=b[ja];delete b[ja];for(var la in ka.waitingMap)if(ka.waitingMap[la])delete d[la][ja];for(var ma=0;ma<ka.dependencies.length;ma++){la=ka.dependencies[ma];if(b[la]){if(b[la].refcount--===1)aa(la);}else if(e[la])e[la]--;}}function ba(ja,ka,la){return y('__requireLazy__'+(ja.length>0?ja.join(',')+'__':'')+f++,ja,ka,g,la,1);}function ca(ja){return '__mod__'+(ja?ja+'__':'')+f++;}function da(ja,ka){if(!ja.waitingMap[ka]&&ja.id!==ka){ja.waiting++;ja.waitingMap[ka]=1;d[ka]||(d[ka]={});d[ka][ja.id]=1;}}function ea(ja){var ka=[],la=b[ja],ma,na,oa;for(na=0;na<la.dependencies.length;na++){ma=la.dependencies[na];if(!b[ma]){da(la,ma);}else if(b[ma].waiting)for(oa in b[ma].waitingMap)if(b[ma].waitingMap[oa])da(la,oa);}if(la.waiting===0&&la.special&g)ka.push(ja);if(d[ja]){var pa=d[ja],qa;d[ja]=(void 0);for(ma in pa){qa=b[ma];for(oa in la.waitingMap)if(la.waitingMap[oa])da(qa,oa);if(qa.waitingMap[ja]){qa.waitingMap[ja]=0;qa.waiting--;}if(qa.waiting===0&&qa.special&g)ka.push(ma);}}for(na=0;na<ka.length;na++)w.call(null,ka[na]);}function fa(ja,ka){if(ja.ranRecursiveSideEffects)return;ka.push(ja.id);var la=ja.dependencies;if(la)for(var ma=0;ma<la.length;ma++){var na=la[ma];if(ka.indexOf(na)!==-1)continue;var oa=b[na];if(oa.ranRecursiveSideEffects)continue;fa(oa,ka);if(oa.special&i)w.call(null,na);}ja.ranRecursiveSideEffects=true;ka.pop();}function ga(ja,ka){b[ja]=new z(ja,0,ka);c[ja]={id:ja,compileTime:null,factoryTime:null,compileEnd:null,factoryEnd:null};}ga('module',0);ga('exports',0);ga('define',y);ga('global',a);ga('require',w);ga('requireDynamic',w);ga('requireLazy',ba);ga('requireWeak',ha);ga('ifRequired',ia);y.amd={};a.define=y;a.require=w;a.requireDynamic=w;a.requireLazy=ba;function ha(ja,ka){if(l.call(ja)==='[object Array]'){if(ja.length!==1)throw new Error('requireWeak only supports a one-arg array for push safety');ja=ja[0];}ia.call(null,ja,function(la){ka(la);},function(){y('__requireWeak__'+ja+'__'+f++,[ja+':__required__'],function(){ka(b[ja].exports);},g,null,1);});}function ia(ja,ka,la){var ma=b[ja];if(ma&&ma.exports!=null&&!ma.hasError){if(typeof ka==='function')ka(ma.exports);}else if(typeof la==='function')la();}w.__debug={modules:b,deps:d,printDependencyInfo:function(){if(!a.console)return;var ja=Object.keys(w.__debug.deps);a.console.log(m(ja));}};a.__d=function(ja,ka,la,ma,na){var oa=['global','require','requireDynamic','requireLazy','module','exports'];y(ja,oa.concat(ka),la,ma||h,null,null,na);};})(this);
__d("DeadImage",[],function(a,b,c,d,e,f){b.__markCompiled&&b.__markCompiled();window.addEventListener('error',function(g){if(g.target&&g.target.nodeName=='IMG')g.target.src='data:image/gif;base64,'+'R0lGODlhAQABAID/AMDAwAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==';},true);},null);
__d("Env",[],function(a,b,c,d,e,f){b.__markCompiled&&b.__markCompiled();var g={};if(a.FB_GKS)g.nocatch=a.FB_GKS.js_nocatch;e.exports=g;},null);
__d("eprintf",[],function(a,b,c,d,e,f){b.__markCompiled&&b.__markCompiled();var g=function(h){var i=Array.prototype.slice.call(arguments).map(function(l){return String(l);}),j=h.split('%s').length-1;if(j!==i.length-1)return g('eprintf args number mismatch: %s',JSON.stringify(i));var k=1;return h.replace(/%s/g,function(l){return String(i[k++]);});};e.exports=g;},null);
__d("ex",["eprintf"],function(a,b,c,d,e,f,g){b.__markCompiled&&b.__markCompiled();var h=function(){for(var i=[],j=0,k=arguments.length;j<k;j++)i.push(arguments[j]);i=i.map(function(l){return String(l);});if(i[0].split('%s').length!==i.length)return h('ex args number mismatch: %s',JSON.stringify(i));return h._prefix+JSON.stringify(i)+h._suffix;};h._prefix='<![EX[';h._suffix=']]>';e.exports=h;},null);
__d("erx",["ex"],function(a,b,c,d,e,f,g){b.__markCompiled&&b.__markCompiled();var h=function(i){if(typeof i!=='string')return i;var j=i.indexOf(g._prefix),k=i.lastIndexOf(g._suffix);if(j<0||k<0)return [i];var l=j+g._prefix.length,m=k+g._suffix.length;if(l>=k)return ['erx slice failure: %s',i];var n=i.substring(0,j),o=i.substring(m);i=i.substring(l,k);var p;try{p=JSON.parse(i);p[0]=n+p[0]+o;}catch(q){return ['erx parse failure: %s',i];}return p;};e.exports=h;},null);
__d("ErrorUtils",["Env","eprintf","erx"],function(a,b,c,d,e,f,g,h,i){b.__markCompiled&&b.__markCompiled();var j={},k='<anonymous guard>',l='<generated guard>',m='<window.onerror>',n=/^https?:\/\//i,o=/^Type Mismatch for/,p=['Unknown script code','Function code','eval code'],q=new RegExp('(.*?)(\\s)(?:'+p.join('|')+')$'),r=[],s,t=[],u=50,v=[],w=false,x=false,y=j.nocatch||(/nocatch/).test(location.search);function z(la){if(!la)return [];var ma=la.split(/\n\n/)[0].replace(/[\(\)]|\[.*?\]|^\w+:\s.*?\n/g,'').split('\n').map(function(na){var oa,pa,qa;na=na.trim();if(/(:(\d+)(:(\d+))?)$/.test(na)){pa=RegExp.$2;qa=RegExp.$4;na=na.slice(0,-RegExp.$1.length);}if(q.test(na)||/(.*)(@|\s)[^\s]+$/.test(na)){na=na.substring(RegExp.$1.length+1);oa=/(at)?\s*(.*)([^\s]+|$)/.test(RegExp.$1)?RegExp.$2:'';}var ra={identifier:oa,script:na,line:pa,column:qa};if(s)s(ra);ra.text='    at'+(ra.identifier?' '+ra.identifier+' (':' ')+ra.script+(ra.line?':'+ra.line:'')+(ra.column?':'+ra.column:'')+(ra.identifier?')':'');return ra;});return ma;}function aa(la){if(!la){return {};}else if(la._originalError)return la;var ma=z(la.stackTrace||la.stack),na=false;if(la.framesToPop){var oa=la.framesToPop,pa;while(oa>0&&ma.length>0){pa=ma.shift();oa--;na=true;}if(o.test(la.message)&&la.framesToPop===2&&pa)if(n.test(pa.script))la.message+=' at '+pa.script+(pa.line?':'+pa.line:'')+(pa.column?':'+pa.column:'');delete la.framesToPop;}var qa={line:la.lineNumber||la.line,column:la.columnNumber||la.column,name:la.name,message:la.message,messageWithParams:la.messageWithParams,type:la.type,script:la.fileName||la.sourceURL||la.script,stack:ma.map(function(sa){return sa.text;}).join('\n'),stackFrames:ma,guard:la.guard,guardList:la.guardList,extra:la.extra,snapshot:la.snapshot};if(typeof qa.message==='string'&&!qa.messageWithParams){qa.messageWithParams=i(qa.message);qa.message=h.apply(a,qa.messageWithParams);}else{qa.messageObject=qa.message;qa.message=String(qa.message);}if(s)s(qa);if(na){delete qa.script;delete qa.line;delete qa.column;}if(ma[0]){qa.script=qa.script||ma[0].script;qa.line=qa.line||ma[0].line;qa.column=qa.column||ma[0].column;}qa._originalError=la;for(var ra in qa)(qa[ra]==null&&delete qa[ra]);return qa;}function ba(la,ma){if(x)return false;if(v.length>0){la.guard=la.guard||v[0];la.guardList=v.slice();}la=aa(la);!ma;if(t.length>u)t.splice(u/2,1);t.push(la);x=true;for(var na=0;na<r.length;na++)try{r[na](la);}catch(oa){}x=false;return true;}function ca(){return w;}function da(la){v.unshift(la);w=true;}function ea(){v.shift();w=(v.length!==0);}function fa(la,ma,na,oa,pa){da(pa||k);var qa;if(g.nocatch)y=true;if(y){try{qa=la.apply(ma,na||[]);}finally{ea();}return qa;}try{qa=la.apply(ma,na||[]);return qa;}catch(ra){var sa=aa(ra);if(oa)oa(sa);if(la)sa.callee=la.toString().substring(0,100);if(na)sa.args=Array.prototype.slice.call(na).toString().substring(0,100);sa.guard=v[0];sa.guardList=v.slice();ba(sa);}finally{ea();}}function ga(la,ma,na){ma=ma||la.name||l;function oa(){return fa(la,na||this,arguments,null,ma);}if(la.__SMmeta)oa.__SMmeta=la.__SMmeta;return oa;}function ha(la,ma,na,oa,pa){pa=pa||{};pa.message=pa.message||la;pa.script=pa.script||ma;pa.line=pa.line||na;pa.column=pa.column||oa;pa.guard=m;pa.guardList=[m];ba(pa,true);}window.onerror=ha;function ia(la,ma){r.push(la);if(!ma)t.forEach(la);}function ja(la){s=la;}var ka={ANONYMOUS_GUARD_TAG:k,GENERATED_GUARD_TAG:l,GLOBAL_ERROR_HANDLER_TAG:m,addListener:ia,setSourceResolver:ja,applyWithGuard:fa,guard:ga,history:t,inGuard:ca,normalizeError:aa,onerror:ha,reportError:ba};e.exports=a.ErrorUtils=ka;if(typeof __t==='function'&&__t.setHandler)__t.setHandler(ba);},6);
__d("sprintf",[],function(a,b,c,d,e,f){b.__markCompiled&&b.__markCompiled();function g(h){for(var i=[],j=1,k=arguments.length;j<k;j++)i.push(arguments[j]);var l=0;return h.replace(/%s/g,function(m){return i[l++];});}e.exports=g;},null);
__d("invariant",["ex","sprintf"],function(a,b,c,d,e,f,g,h){b.__markCompiled&&b.__markCompiled();'use strict';var i=g,j=function(k,l){if(!k){var m;if(l===(void 0)){m=new Error('Minified exception occurred; use the non-minified dev environment '+'for the full error message and additional helpful warnings.');}else{var n=['Invariant Violation: '+l];for(var o=2,p=arguments.length;o<p;o++)n.push(arguments[o]);m=new Error(i.apply(null,n));m.messageWithParams=n;}m.framesToPop=1;throw m;}};e.exports=j;},null);
__d("CircularBuffer",["invariant"],function(a,b,c,d,e,f,g){b.__markCompiled&&b.__markCompiled();function h(i){"use strict";g(i>0);this.$CircularBuffer0=i;this.$CircularBuffer1=0;this.$CircularBuffer2=[];}h.prototype.write=function(i){"use strict";if(this.$CircularBuffer2.length<this.$CircularBuffer0){this.$CircularBuffer2.push(i);}else{this.$CircularBuffer2[this.$CircularBuffer1]=i;this.$CircularBuffer1++;this.$CircularBuffer1%=this.$CircularBuffer0;}return this;};h.prototype.read=function(){"use strict";return this.$CircularBuffer2.slice(this.$CircularBuffer1).concat(this.$CircularBuffer2.slice(0,this.$CircularBuffer1));};h.prototype.clear=function(){"use strict";this.$CircularBuffer1=0;this.$CircularBuffer2=[];return this;};e.exports=h;},null);
__d("LogBuffer",["CircularBuffer"],function(a,b,c,d,e,f,g){b.__markCompiled&&b.__markCompiled();var h=a.setTimeout.nativeBackup||a.setTimeout,i=5000,j={},k={},l={write:function(m,n){var o=j[m]=j[m]||new g(i);o.write(n);if(k[m])k[m].forEach(function(p){try{p(n);}catch(q){}});},read:function(m){if(!j[m]){return [];}else return j[m].read();},tail:function(m,n){if(typeof n!=='function')return;k[m]=k[m]||[];k[m].push(n);if(j[m]){var o=j[m];o.read().forEach(function(p){try{n(p);}catch(q){}});}},clear:function(m){if(j[m])h(function(){j[m].clear();},0);}};e.exports=l;},null);
__d("ExecutionEnvironment",[],function(a,b,c,d,e,f){b.__markCompiled&&b.__markCompiled();'use strict';var g=!!(typeof window!=='undefined'&&window.document&&window.document.createElement),h={canUseDOM:g,canUseWorkers:typeof Worker!=='undefined',canUseEventListeners:g&&!!(window.addEventListener||window.attachEvent),canUseViewport:g&&!!window.screen,isInWorker:!g};e.exports=h;},null);
__d("performance",["ExecutionEnvironment"],function(a,b,c,d,e,f,g){b.__markCompiled&&b.__markCompiled();'use strict';var h;if(g.canUseDOM)h=window.performance||window.msPerformance||window.webkitPerformance;e.exports=h||{};},null);
__d("performanceAbsoluteNow",["performance"],function(a,b,c,d,e,f,g){b.__markCompiled&&b.__markCompiled();var h;if(g.now&&g.timing&&g.timing.navigationStart){var i=g.timing.navigationStart;h=function(){return g.now.apply(g,arguments)+i;};}else h=Date.now.bind(Date);e.exports=h;},null);
__d("wrapFunction",[],function(a,b,c,d,e,f){b.__markCompiled&&b.__markCompiled();var g={};function h(i,j,k){j=j||'default';return function(){var l=j in g?g[j](i,k):i;return l.apply(this,arguments);};}h.setWrapper=function(i,j){j=j||'default';g[j]=i;};e.exports=h;},null);
__d("TimeSlice",["ErrorUtils","LogBuffer","invariant","performanceAbsoluteNow","wrapFunction"],function(a,b,c,d,e,f,g,h,i,j,k){b.__markCompiled&&b.__markCompiled();var l=false,m,n=[],o,p={guard:function(q,r){var s='TimeSlice'+(r?': '+r:''),t='TimeSlice Task'+(r?': '+r:'');return function(){var u=j(),v,w;if(l)return q.apply(this,arguments);l=true;m=r;n.length=0;o=0;w=g.applyWithGuard(q,this,arguments,null,s);while(n.length>0){var x=n.shift();o=x.depth;g.applyWithGuard(x.fn,a,null,null,t);}l=false;v=j();h.write('time_slice',Object.assign({begin:u,end:v,guard:r},q.__SMmeta));return w;};},enqueue:function(q){i(l);i(o<1000);n.push({fn:q,depth:o+1});},inGuard:function(){return l;}};p.getContext=function(){if(!l)return null;return {name:m,depth:o};};k.setWrapper(p.guard,'entry');a.TimeSlice=p;e.exports=p;},null);
__d("StratcomManager",["TimeSlice"],function(a,b,c,d,e,f,g){b.__markCompiled&&b.__markCompiled();var h;function i(p){h=p;}var j=[],k=function(p){j.push(p);if(h){var q=j;j=[];for(var r=0;r<q.length;++r){var s=q[r];h.dispatch(s);}}else{var t=p.srcElement||p.target;if(t&&(p.type in {click:1,submit:1})&&t.getAttribute&&t.getAttribute('data-mustcapture')==='1'){p.returnValue=false;p.preventDefault&&p.preventDefault();document.body.id='event_capture';return false;}}};function l(p,q){p.addEventListener(q,g.guard(k,'Stratcom:'+q),true);}var m=['click','change','submit','keypress','mousedown','mouseover','mouseout','mouseup','load','keyup','keydown','input','drop','dragenter','dragleave','dragover','touchstart','touchmove','touchend','touchcancel'],n;for(n=0;n<m.length;++n)l(document.documentElement,m[n]);var o=[('onpagehide' in window)?'pagehide':'unload','resize','focus','blur','popstate','hashchange'];for(n=0;n<o.length;++n)l(window,o[n]);var f={injectStratcom:i,enableDispatch:l};e.exports=f;},null);
__d("javelin-magical-init",["StratcomManager"],function(a,b,c,d,e,f,g){b.__markCompiled&&b.__markCompiled();if(!a.JX)a.JX={};a.JX.__allowedEvents=g.allowedEvents;a.JX.enableDispatch=g.enableDispatch;e.exports={'JX.__allowedEvents':g.allowedEvents,'JX.enableDispatch':g.enableDispatch};},null);
__d("MPrelude",["DeadImage","StratcomManager","TimeSlice","javelin-magical-init"],function(a,b,c,d,e,f){b.__markCompiled&&b.__markCompiled();b('DeadImage');b('StratcomManager');b('TimeSlice');b('javelin-magical-init');},null);