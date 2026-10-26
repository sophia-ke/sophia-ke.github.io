(()=>{var ti={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},ei={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},ll=0,Ta=1,hl=2;var Oc=1,ul=2,fn=3,Ln=0,Pe=1,Ze=2,Pn=0,_i=1,Da=2,Ba=3,Ia=4,dl=5,Yn=100,fl=101,pl=102,gl=103,ml=104,Al=200,vl=201,xl=202,yl=203,Jr=204,qr=205,Ml=206,El=207,_l=208,wl=209,Sl=210,Cl=211,bl=212,Tl=213,Dl=214,Zr=0,$r=1,to=2,bi=3,eo=4,no=5,io=6,so=7,Nc=0,Bl=1,Il=2,Rn=0,Pl=1,Rl=2,Ll=3,Fl=4,Ul=5,Ol=6,Nl=7;var Gc=300,Ti=301,Di=302,ro=303,oo=304,pr=306,ao=1e3,Xn=1001,co=1002,Ne=1003,Gl=1004;var ls=1005;var sn=1006,xr=1007;var Kn=1008;var An=1009,zc=1010,kc=1011,ts=1012,pa=1013,jn=1014,rn=1015,as=1016,ga=1017,ma=1018,Bi=1020,Hc=35902,Qc=1021,Yc=1022,$e=1023,Vc=1024,Wc=1025,wi=1026,Ii=1027,Aa=1028,va=1029,Xc=1030,xa=1031;var ya=1033,Ls=33776,Fs=33777,Us=33778,Os=33779,lo=35840,ho=35841,uo=35842,fo=35843,po=36196,go=37492,mo=37496,Ao=37808,vo=37809,xo=37810,yo=37811,Mo=37812,Eo=37813,_o=37814,wo=37815,So=37816,Co=37817,bo=37818,To=37819,Do=37820,Bo=37821,Ns=36492,Io=36494,Po=36495,Kc=36283,Ro=36284,Lo=36285,Fo=36286;var Gs=2300,Uo=2301,yr=2302,Pa=2400,Ra=2401,La=2402;var zl=3200,kl=3201;var Hl=0,Ql=1,In="",Ie="srgb",Ui="srgb-linear",gr="linear",ee="srgb";var oi=7680;var Fa=519,Yl=512,Vl=513,Wl=514,jc=515,Xl=516,Kl=517,jl=518,Jl=519,Ua=35044;var Oa="300 es",pn=2e3,zs=2001,vn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},we=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Na=1234567,qi=Math.PI/180,es=180/Math.PI;function Oi(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(we[i&255]+we[i>>8&255]+we[i>>16&255]+we[i>>24&255]+"-"+we[t&255]+we[t>>8&255]+"-"+we[t>>16&15|64]+we[t>>24&255]+"-"+we[e&63|128]+we[e>>8&255]+"-"+we[e>>16&255]+we[e>>24&255]+we[n&255]+we[n>>8&255]+we[n>>16&255]+we[n>>24&255]).toLowerCase()}function _e(i,t,e){return Math.max(t,Math.min(e,i))}function Ma(i,t){return(i%t+t)%t}function ql(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Zl(i,t,e){return i!==t?(e-i)/(t-i):0}function Zi(i,t,e){return(1-e)*i+e*t}function $l(i,t,e,n){return Zi(i,t,1-Math.exp(-e*n))}function th(i,t=1){return t-Math.abs(Ma(i,t*2)-t)}function eh(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function nh(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function ih(i,t){return i+Math.floor(Math.random()*(t-i+1))}function sh(i,t){return i+Math.random()*(t-i)}function rh(i){return i*(.5-Math.random())}function oh(i){i!==void 0&&(Na=i);let t=Na+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function ah(i){return i*qi}function ch(i){return i*es}function lh(i){return(i&i-1)===0&&i!==0}function hh(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function uh(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function dh(i,t,e,n,s){let r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),l=r((t+n)/2),u=o((t+n)/2),d=r((t-n)/2),f=o((t-n)/2),p=r((n-t)/2),m=o((n-t)/2);switch(s){case"XYX":i.set(a*u,c*d,c*f,a*l);break;case"YZY":i.set(c*f,a*u,c*d,a*l);break;case"ZXZ":i.set(c*d,c*f,a*u,a*l);break;case"XZX":i.set(a*u,c*m,c*p,a*l);break;case"YXY":i.set(c*p,a*u,c*m,a*l);break;case"ZYZ":i.set(c*m,c*p,a*u,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Mi(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ce(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var ni={DEG2RAD:qi,RAD2DEG:es,generateUUID:Oi,clamp:_e,euclideanModulo:Ma,mapLinear:ql,inverseLerp:Zl,lerp:Zi,damp:$l,pingpong:th,smoothstep:eh,smootherstep:nh,randInt:ih,randFloat:sh,randFloatSpread:rh,seededRandom:oh,degToRad:ah,radToDeg:ch,isPowerOfTwo:lh,ceilPowerOfTwo:hh,floorPowerOfTwo:uh,setQuaternionFromProperEuler:dh,normalize:Ce,denormalize:Mi},bt=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(_e(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ft=class i{constructor(t,e,n,s,r,o,a,c,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l)}set(t,e,n,s,r,o,a,c,l){let u=this.elements;return u[0]=t,u[1]=s,u[2]=a,u[3]=e,u[4]=r,u[5]=c,u[6]=n,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],u=n[4],d=n[7],f=n[2],p=n[5],m=n[8],v=s[0],g=s[3],h=s[6],S=s[1],w=s[4],M=s[7],O=s[2],C=s[5],b=s[8];return r[0]=o*v+a*S+c*O,r[3]=o*g+a*w+c*C,r[6]=o*h+a*M+c*b,r[1]=l*v+u*S+d*O,r[4]=l*g+u*w+d*C,r[7]=l*h+u*M+d*b,r[2]=f*v+p*S+m*O,r[5]=f*g+p*w+m*C,r[8]=f*h+p*M+m*b,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8];return e*o*u-e*a*l-n*r*u+n*a*c+s*r*l-s*o*c}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],d=u*o-a*l,f=a*c-u*r,p=l*r-o*c,m=e*d+n*f+s*p;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/m;return t[0]=d*v,t[1]=(s*l-u*n)*v,t[2]=(a*n-s*o)*v,t[3]=f*v,t[4]=(u*e-s*c)*v,t[5]=(s*r-a*e)*v,t[6]=p*v,t[7]=(n*c-l*e)*v,t[8]=(o*e-n*r)*v,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Mr.makeScale(t,e)),this}rotate(t){return this.premultiply(Mr.makeRotation(-t)),this}translate(t,e){return this.premultiply(Mr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Mr=new Ft;function Jc(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function ks(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function fh(){let i=ks("canvas");return i.style.display="block",i}var Ga={};function ji(i){i in Ga||(Ga[i]=!0,console.warn(i))}function ph(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function gh(i){let t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function mh(i){let t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var Wt={enabled:!0,workingColorSpace:Ui,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===ee&&(i.r=mn(i.r),i.g=mn(i.g),i.b=mn(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===ee&&(i.r=Si(i.r),i.g=Si(i.g),i.b=Si(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===In?gr:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function mn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Si(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var za=[.64,.33,.3,.6,.15,.06],ka=[.2126,.7152,.0722],Ha=[.3127,.329],Qa=new Ft().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ya=new Ft().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Wt.define({[Ui]:{primaries:za,whitePoint:Ha,transfer:gr,toXYZ:Qa,fromXYZ:Ya,luminanceCoefficients:ka,workingColorSpaceConfig:{unpackColorSpace:Ie},outputColorSpaceConfig:{drawingBufferColorSpace:Ie}},[Ie]:{primaries:za,whitePoint:Ha,transfer:ee,toXYZ:Qa,fromXYZ:Ya,luminanceCoefficients:ka,outputColorSpaceConfig:{drawingBufferColorSpace:Ie}}});var ai,Oo=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ai===void 0&&(ai=ks("canvas")),ai.width=t.width,ai.height=t.height;let n=ai.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=ai}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=ks("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=mn(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(mn(e[n]/255)*255):e[n]=mn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Ah=0,Hs=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ah++}),this.uuid=Oi(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Er(s[o].image)):r.push(Er(s[o]))}else r=Er(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Er(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Oo.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var vh=0,ze=class i extends vn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Xn,s=Xn,r=sn,o=Kn,a=$e,c=An,l=i.DEFAULT_ANISOTROPY,u=In){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:vh++}),this.uuid=Oi(),this.name="",this.source=new Hs(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new bt(0,0),this.repeat=new bt(1,1),this.center=new bt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ft,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Gc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ao:t.x=t.x-Math.floor(t.x);break;case Xn:t.x=t.x<0?0:1;break;case co:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ao:t.y=t.y-Math.floor(t.y);break;case Xn:t.y=t.y<0?0:1;break;case co:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};ze.DEFAULT_IMAGE=null;ze.DEFAULT_MAPPING=Gc;ze.DEFAULT_ANISOTROPY=1;var ue=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,c=t.elements,l=c[0],u=c[4],d=c[8],f=c[1],p=c[5],m=c[9],v=c[2],g=c[6],h=c[10];if(Math.abs(u-f)<.01&&Math.abs(d-v)<.01&&Math.abs(m-g)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+v)<.1&&Math.abs(m+g)<.1&&Math.abs(l+p+h-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let w=(l+1)/2,M=(p+1)/2,O=(h+1)/2,C=(u+f)/4,b=(d+v)/4,L=(m+g)/4;return w>M&&w>O?w<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(w),s=C/n,r=b/n):M>O?M<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),n=C/s,r=L/s):O<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(O),n=b/r,s=L/r),this.set(n,s,r,e),this}let S=Math.sqrt((g-m)*(g-m)+(d-v)*(d-v)+(f-u)*(f-u));return Math.abs(S)<.001&&(S=1),this.x=(g-m)/S,this.y=(d-v)/S,this.z=(f-u)/S,this.w=Math.acos((l+p+h-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},No=class extends vn{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ue(0,0,t,e),this.scissorTest=!1,this.viewport=new ue(0,0,t,e);let s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:sn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new ze(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new Hs(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},xn=class extends No{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Qs=class extends ze{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ne,this.minFilter=Ne,this.wrapR=Xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Go=class extends ze{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ne,this.minFilter=Ne,this.wrapR=Xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ke=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let c=n[s+0],l=n[s+1],u=n[s+2],d=n[s+3],f=r[o+0],p=r[o+1],m=r[o+2],v=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=u,t[e+3]=d;return}if(a===1){t[e+0]=f,t[e+1]=p,t[e+2]=m,t[e+3]=v;return}if(d!==v||c!==f||l!==p||u!==m){let g=1-a,h=c*f+l*p+u*m+d*v,S=h>=0?1:-1,w=1-h*h;if(w>Number.EPSILON){let O=Math.sqrt(w),C=Math.atan2(O,h*S);g=Math.sin(g*C)/O,a=Math.sin(a*C)/O}let M=a*S;if(c=c*g+f*M,l=l*g+p*M,u=u*g+m*M,d=d*g+v*M,g===1-a){let O=1/Math.sqrt(c*c+l*l+u*u+d*d);c*=O,l*=O,u*=O,d*=O}}t[e]=c,t[e+1]=l,t[e+2]=u,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],c=n[s+1],l=n[s+2],u=n[s+3],d=r[o],f=r[o+1],p=r[o+2],m=r[o+3];return t[e]=a*m+u*d+c*p-l*f,t[e+1]=c*m+u*f+l*d-a*p,t[e+2]=l*m+u*p+a*f-c*d,t[e+3]=u*m-a*d-c*f-l*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),u=a(s/2),d=a(r/2),f=c(n/2),p=c(s/2),m=c(r/2);switch(o){case"XYZ":this._x=f*u*d+l*p*m,this._y=l*p*d-f*u*m,this._z=l*u*m+f*p*d,this._w=l*u*d-f*p*m;break;case"YXZ":this._x=f*u*d+l*p*m,this._y=l*p*d-f*u*m,this._z=l*u*m-f*p*d,this._w=l*u*d+f*p*m;break;case"ZXY":this._x=f*u*d-l*p*m,this._y=l*p*d+f*u*m,this._z=l*u*m+f*p*d,this._w=l*u*d-f*p*m;break;case"ZYX":this._x=f*u*d-l*p*m,this._y=l*p*d+f*u*m,this._z=l*u*m-f*p*d,this._w=l*u*d+f*p*m;break;case"YZX":this._x=f*u*d+l*p*m,this._y=l*p*d+f*u*m,this._z=l*u*m-f*p*d,this._w=l*u*d-f*p*m;break;case"XZY":this._x=f*u*d-l*p*m,this._y=l*p*d-f*u*m,this._z=l*u*m+f*p*d,this._w=l*u*d+f*p*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],u=e[6],d=e[10],f=n+a+d;if(f>0){let p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-c)*p,this._y=(r-l)*p,this._z=(o-s)*p}else if(n>a&&n>d){let p=2*Math.sqrt(1+n-a-d);this._w=(u-c)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+l)/p}else if(a>d){let p=2*Math.sqrt(1+a-n-d);this._w=(r-l)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(c+u)/p}else{let p=2*Math.sqrt(1+d-n-a);this._w=(o-s)/p,this._x=(r+l)/p,this._y=(c+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(_e(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,u=e._w;return this._x=n*u+o*a+s*l-r*c,this._y=s*u+o*c+r*a-n*l,this._z=r*u+o*l+n*c-s*a,this._w=o*u-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let c=1-a*a;if(c<=Number.EPSILON){let p=1-e;return this._w=p*o+e*this._w,this._x=p*n+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}let l=Math.sqrt(c),u=Math.atan2(l,a),d=Math.sin((1-e)*u)/l,f=Math.sin(e*u)/l;return this._w=o*d+this._w*f,this._x=n*d+this._x*f,this._y=s*d+this._y*f,this._z=r*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},B=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Va.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Va.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*n),u=2*(a*e-r*s),d=2*(r*n-o*e);return this.x=e+c*l+o*d-a*u,this.y=n+c*u+a*l-r*d,this.z=s+c*d+r*u-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return _r.copy(this).projectOnVector(t),this.sub(_r)}reflect(t){return this.sub(_r.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(_e(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},_r=new B,Va=new ke,yn=class{constructor(t=new B(1/0,1/0,1/0),e=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Ke.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Ke.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Ke.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Ke):Ke.fromBufferAttribute(r,o),Ke.applyMatrix4(t.matrixWorld),this.expandByPoint(Ke);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),hs.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),hs.copy(n.boundingBox)),hs.applyMatrix4(t.matrixWorld),this.union(hs)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ke),Ke.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Hi),us.subVectors(this.max,Hi),ci.subVectors(t.a,Hi),li.subVectors(t.b,Hi),hi.subVectors(t.c,Hi),Sn.subVectors(li,ci),Cn.subVectors(hi,li),On.subVectors(ci,hi);let e=[0,-Sn.z,Sn.y,0,-Cn.z,Cn.y,0,-On.z,On.y,Sn.z,0,-Sn.x,Cn.z,0,-Cn.x,On.z,0,-On.x,-Sn.y,Sn.x,0,-Cn.y,Cn.x,0,-On.y,On.x,0];return!wr(e,ci,li,hi,us)||(e=[1,0,0,0,1,0,0,0,1],!wr(e,ci,li,hi,us))?!1:(ds.crossVectors(Sn,Cn),e=[ds.x,ds.y,ds.z],wr(e,ci,li,hi,us))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ke).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ke).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(cn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),cn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),cn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),cn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),cn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),cn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),cn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),cn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(cn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},cn=[new B,new B,new B,new B,new B,new B,new B,new B],Ke=new B,hs=new yn,ci=new B,li=new B,hi=new B,Sn=new B,Cn=new B,On=new B,Hi=new B,us=new B,ds=new B,Nn=new B;function wr(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Nn.fromArray(i,r);let a=s.x*Math.abs(Nn.x)+s.y*Math.abs(Nn.y)+s.z*Math.abs(Nn.z),c=t.dot(Nn),l=e.dot(Nn),u=n.dot(Nn);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}var xh=new yn,Qi=new B,Sr=new B,Fn=class{constructor(t=new B,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):xh.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Qi.subVectors(t,this.center);let e=Qi.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Qi,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Sr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Qi.copy(t.center).add(Sr)),this.expandByPoint(Qi.copy(t.center).sub(Sr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},ln=new B,Cr=new B,fs=new B,bn=new B,br=new B,ps=new B,Tr=new B,Jn=class{constructor(t=new B,e=new B(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ln)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=ln.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ln.copy(this.origin).addScaledVector(this.direction,e),ln.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Cr.copy(t).add(e).multiplyScalar(.5),fs.copy(e).sub(t).normalize(),bn.copy(this.origin).sub(Cr);let r=t.distanceTo(e)*.5,o=-this.direction.dot(fs),a=bn.dot(this.direction),c=-bn.dot(fs),l=bn.lengthSq(),u=Math.abs(1-o*o),d,f,p,m;if(u>0)if(d=o*c-a,f=o*a-c,m=r*u,d>=0)if(f>=-m)if(f<=m){let v=1/u;d*=v,f*=v,p=d*(d+o*f+2*a)+f*(o*d+f+2*c)+l}else f=r,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*c)+l;else f=-r,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*c)+l;else f<=-m?(d=Math.max(0,-(-o*r+a)),f=d>0?-r:Math.min(Math.max(-r,-c),r),p=-d*d+f*(f+2*c)+l):f<=m?(d=0,f=Math.min(Math.max(-r,-c),r),p=f*(f+2*c)+l):(d=Math.max(0,-(o*r+a)),f=d>0?r:Math.min(Math.max(-r,-c),r),p=-d*d+f*(f+2*c)+l);else f=o>0?-r:r,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Cr).addScaledVector(fs,f),p}intersectSphere(t,e){ln.subVectors(t.center,this.origin);let n=ln.dot(this.direction),s=ln.dot(ln)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,c,l=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return l>=0?(n=(t.min.x-f.x)*l,s=(t.max.x-f.x)*l):(n=(t.max.x-f.x)*l,s=(t.min.x-f.x)*l),u>=0?(r=(t.min.y-f.y)*u,o=(t.max.y-f.y)*u):(r=(t.max.y-f.y)*u,o=(t.min.y-f.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(t.min.z-f.z)*d,c=(t.max.z-f.z)*d):(a=(t.max.z-f.z)*d,c=(t.min.z-f.z)*d),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,ln)!==null}intersectTriangle(t,e,n,s,r){br.subVectors(e,t),ps.subVectors(n,t),Tr.crossVectors(br,ps);let o=this.direction.dot(Tr),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;bn.subVectors(this.origin,t);let c=a*this.direction.dot(ps.crossVectors(bn,ps));if(c<0)return null;let l=a*this.direction.dot(br.cross(bn));if(l<0||c+l>o)return null;let u=-a*bn.dot(Tr);return u<0?null:this.at(u/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},qt=class i{constructor(t,e,n,s,r,o,a,c,l,u,d,f,p,m,v,g){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l,u,d,f,p,m,v,g)}set(t,e,n,s,r,o,a,c,l,u,d,f,p,m,v,g){let h=this.elements;return h[0]=t,h[4]=e,h[8]=n,h[12]=s,h[1]=r,h[5]=o,h[9]=a,h[13]=c,h[2]=l,h[6]=u,h[10]=d,h[14]=f,h[3]=p,h[7]=m,h[11]=v,h[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/ui.setFromMatrixColumn(t,0).length(),r=1/ui.setFromMatrixColumn(t,1).length(),o=1/ui.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let f=o*u,p=o*d,m=a*u,v=a*d;e[0]=c*u,e[4]=-c*d,e[8]=l,e[1]=p+m*l,e[5]=f-v*l,e[9]=-a*c,e[2]=v-f*l,e[6]=m+p*l,e[10]=o*c}else if(t.order==="YXZ"){let f=c*u,p=c*d,m=l*u,v=l*d;e[0]=f+v*a,e[4]=m*a-p,e[8]=o*l,e[1]=o*d,e[5]=o*u,e[9]=-a,e[2]=p*a-m,e[6]=v+f*a,e[10]=o*c}else if(t.order==="ZXY"){let f=c*u,p=c*d,m=l*u,v=l*d;e[0]=f-v*a,e[4]=-o*d,e[8]=m+p*a,e[1]=p+m*a,e[5]=o*u,e[9]=v-f*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){let f=o*u,p=o*d,m=a*u,v=a*d;e[0]=c*u,e[4]=m*l-p,e[8]=f*l+v,e[1]=c*d,e[5]=v*l+f,e[9]=p*l-m,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){let f=o*c,p=o*l,m=a*c,v=a*l;e[0]=c*u,e[4]=v-f*d,e[8]=m*d+p,e[1]=d,e[5]=o*u,e[9]=-a*u,e[2]=-l*u,e[6]=p*d+m,e[10]=f-v*d}else if(t.order==="XZY"){let f=o*c,p=o*l,m=a*c,v=a*l;e[0]=c*u,e[4]=-d,e[8]=l*u,e[1]=f*d+v,e[5]=o*u,e[9]=p*d-m,e[2]=m*d-p,e[6]=a*u,e[10]=v*d+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(yh,t,Mh)}lookAt(t,e,n){let s=this.elements;return Ue.subVectors(t,e),Ue.lengthSq()===0&&(Ue.z=1),Ue.normalize(),Tn.crossVectors(n,Ue),Tn.lengthSq()===0&&(Math.abs(n.z)===1?Ue.x+=1e-4:Ue.z+=1e-4,Ue.normalize(),Tn.crossVectors(n,Ue)),Tn.normalize(),gs.crossVectors(Ue,Tn),s[0]=Tn.x,s[4]=gs.x,s[8]=Ue.x,s[1]=Tn.y,s[5]=gs.y,s[9]=Ue.y,s[2]=Tn.z,s[6]=gs.z,s[10]=Ue.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],u=n[1],d=n[5],f=n[9],p=n[13],m=n[2],v=n[6],g=n[10],h=n[14],S=n[3],w=n[7],M=n[11],O=n[15],C=s[0],b=s[4],L=s[8],E=s[12],y=s[1],T=s[5],W=s[9],z=s[13],X=s[2],q=s[6],Q=s[10],tt=s[14],H=s[3],rt=s[7],dt=s[11],Mt=s[15];return r[0]=o*C+a*y+c*X+l*H,r[4]=o*b+a*T+c*q+l*rt,r[8]=o*L+a*W+c*Q+l*dt,r[12]=o*E+a*z+c*tt+l*Mt,r[1]=u*C+d*y+f*X+p*H,r[5]=u*b+d*T+f*q+p*rt,r[9]=u*L+d*W+f*Q+p*dt,r[13]=u*E+d*z+f*tt+p*Mt,r[2]=m*C+v*y+g*X+h*H,r[6]=m*b+v*T+g*q+h*rt,r[10]=m*L+v*W+g*Q+h*dt,r[14]=m*E+v*z+g*tt+h*Mt,r[3]=S*C+w*y+M*X+O*H,r[7]=S*b+w*T+M*q+O*rt,r[11]=S*L+w*W+M*Q+O*dt,r[15]=S*E+w*z+M*tt+O*Mt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],u=t[2],d=t[6],f=t[10],p=t[14],m=t[3],v=t[7],g=t[11],h=t[15];return m*(+r*c*d-s*l*d-r*a*f+n*l*f+s*a*p-n*c*p)+v*(+e*c*p-e*l*f+r*o*f-s*o*p+s*l*u-r*c*u)+g*(+e*l*d-e*a*p-r*o*d+n*o*p+r*a*u-n*l*u)+h*(-s*a*u-e*c*d+e*a*f+s*o*d-n*o*f+n*c*u)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],d=t[9],f=t[10],p=t[11],m=t[12],v=t[13],g=t[14],h=t[15],S=d*g*l-v*f*l+v*c*p-a*g*p-d*c*h+a*f*h,w=m*f*l-u*g*l-m*c*p+o*g*p+u*c*h-o*f*h,M=u*v*l-m*d*l+m*a*p-o*v*p-u*a*h+o*d*h,O=m*d*c-u*v*c-m*a*f+o*v*f+u*a*g-o*d*g,C=e*S+n*w+s*M+r*O;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let b=1/C;return t[0]=S*b,t[1]=(v*f*r-d*g*r-v*s*p+n*g*p+d*s*h-n*f*h)*b,t[2]=(a*g*r-v*c*r+v*s*l-n*g*l-a*s*h+n*c*h)*b,t[3]=(d*c*r-a*f*r-d*s*l+n*f*l+a*s*p-n*c*p)*b,t[4]=w*b,t[5]=(u*g*r-m*f*r+m*s*p-e*g*p-u*s*h+e*f*h)*b,t[6]=(m*c*r-o*g*r-m*s*l+e*g*l+o*s*h-e*c*h)*b,t[7]=(o*f*r-u*c*r+u*s*l-e*f*l-o*s*p+e*c*p)*b,t[8]=M*b,t[9]=(m*d*r-u*v*r-m*n*p+e*v*p+u*n*h-e*d*h)*b,t[10]=(o*v*r-m*a*r+m*n*l-e*v*l-o*n*h+e*a*h)*b,t[11]=(u*a*r-o*d*r-u*n*l+e*d*l+o*n*p-e*a*p)*b,t[12]=O*b,t[13]=(u*v*s-m*d*s+m*n*f-e*v*f-u*n*g+e*d*g)*b,t[14]=(m*a*s-o*v*s-m*n*c+e*v*c+o*n*g-e*a*g)*b,t[15]=(o*d*s-u*a*s+u*n*c-e*d*c-o*n*f+e*a*f)*b,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,u=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,u*a+n,u*c-s*o,0,l*c-s*a,u*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,u=o+o,d=a+a,f=r*l,p=r*u,m=r*d,v=o*u,g=o*d,h=a*d,S=c*l,w=c*u,M=c*d,O=n.x,C=n.y,b=n.z;return s[0]=(1-(v+h))*O,s[1]=(p+M)*O,s[2]=(m-w)*O,s[3]=0,s[4]=(p-M)*C,s[5]=(1-(f+h))*C,s[6]=(g+S)*C,s[7]=0,s[8]=(m+w)*b,s[9]=(g-S)*b,s[10]=(1-(f+v))*b,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=ui.set(s[0],s[1],s[2]).length(),o=ui.set(s[4],s[5],s[6]).length(),a=ui.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],je.copy(this);let l=1/r,u=1/o,d=1/a;return je.elements[0]*=l,je.elements[1]*=l,je.elements[2]*=l,je.elements[4]*=u,je.elements[5]*=u,je.elements[6]*=u,je.elements[8]*=d,je.elements[9]*=d,je.elements[10]*=d,e.setFromRotationMatrix(je),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=pn){let c=this.elements,l=2*r/(e-t),u=2*r/(n-s),d=(e+t)/(e-t),f=(n+s)/(n-s),p,m;if(a===pn)p=-(o+r)/(o-r),m=-2*o*r/(o-r);else if(a===zs)p=-o/(o-r),m=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=pn){let c=this.elements,l=1/(e-t),u=1/(n-s),d=1/(o-r),f=(e+t)*l,p=(n+s)*u,m,v;if(a===pn)m=(o+r)*d,v=-2*d;else if(a===zs)m=r*d,v=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=v,c[14]=-m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},ui=new B,je=new qt,yh=new B(0,0,0),Mh=new B(1,1,1),Tn=new B,gs=new B,Ue=new B,Wa=new qt,Xa=new ke,Mn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],u=s[9],d=s[2],f=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(_e(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-_e(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(_e(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-_e(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(_e(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-_e(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Wa.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Wa,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Xa.setFromEuler(this),this.setFromQuaternion(Xa,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Mn.DEFAULT_ORDER="XYZ";var ns=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Eh=0,Ka=new B,di=new ke,hn=new qt,ms=new B,Yi=new B,_h=new B,wh=new ke,ja=new B(1,0,0),Ja=new B(0,1,0),qa=new B(0,0,1),Za={type:"added"},Sh={type:"removed"},fi={type:"childadded",child:null},Dr={type:"childremoved",child:null},De=class i extends vn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Eh++}),this.uuid=Oi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new B,e=new Mn,n=new ke,s=new B(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new qt},normalMatrix:{value:new Ft}}),this.matrix=new qt,this.matrixWorld=new qt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ns,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return di.setFromAxisAngle(t,e),this.quaternion.multiply(di),this}rotateOnWorldAxis(t,e){return di.setFromAxisAngle(t,e),this.quaternion.premultiply(di),this}rotateX(t){return this.rotateOnAxis(ja,t)}rotateY(t){return this.rotateOnAxis(Ja,t)}rotateZ(t){return this.rotateOnAxis(qa,t)}translateOnAxis(t,e){return Ka.copy(t).applyQuaternion(this.quaternion),this.position.add(Ka.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ja,t)}translateY(t){return this.translateOnAxis(Ja,t)}translateZ(t){return this.translateOnAxis(qa,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(hn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ms.copy(t):ms.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Yi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?hn.lookAt(Yi,ms,this.up):hn.lookAt(ms,Yi,this.up),this.quaternion.setFromRotationMatrix(hn),s&&(hn.extractRotation(s.matrixWorld),di.setFromRotationMatrix(hn),this.quaternion.premultiply(di.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Za),fi.child=t,this.dispatchEvent(fi),fi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Sh),Dr.child=t,this.dispatchEvent(Dr),Dr.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),hn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),hn.multiply(t.parent.matrixWorld)),t.applyMatrix4(hn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Za),fi.child=t,this.dispatchEvent(fi),fi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Yi,t,_h),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Yi,wh,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){let d=c[l];r(t.shapes,d)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){let a=o(t.geometries),c=o(t.materials),l=o(t.textures),u=o(t.images),d=o(t.shapes),f=o(t.skeletons),p=o(t.animations),m=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),m.length>0&&(n.nodes=m)}return n.object=s,n;function o(a){let c=[];for(let l in a){let u=a[l];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};De.DEFAULT_UP=new B(0,1,0);De.DEFAULT_MATRIX_AUTO_UPDATE=!0;De.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Je=new B,un=new B,Br=new B,dn=new B,pi=new B,gi=new B,$a=new B,Ir=new B,Pr=new B,Rr=new B,Lr=new ue,Fr=new ue,Ur=new ue,Vn=class i{constructor(t=new B,e=new B,n=new B){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Je.subVectors(t,e),s.cross(Je);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Je.subVectors(s,e),un.subVectors(n,e),Br.subVectors(t,e);let o=Je.dot(Je),a=Je.dot(un),c=Je.dot(Br),l=un.dot(un),u=un.dot(Br),d=o*l-a*a;if(d===0)return r.set(0,0,0),null;let f=1/d,p=(l*c-a*u)*f,m=(o*u-a*c)*f;return r.set(1-p-m,m,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,dn)===null?!1:dn.x>=0&&dn.y>=0&&dn.x+dn.y<=1}static getInterpolation(t,e,n,s,r,o,a,c){return this.getBarycoord(t,e,n,s,dn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,dn.x),c.addScaledVector(o,dn.y),c.addScaledVector(a,dn.z),c)}static getInterpolatedAttribute(t,e,n,s,r,o){return Lr.setScalar(0),Fr.setScalar(0),Ur.setScalar(0),Lr.fromBufferAttribute(t,e),Fr.fromBufferAttribute(t,n),Ur.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Lr,r.x),o.addScaledVector(Fr,r.y),o.addScaledVector(Ur,r.z),o}static isFrontFacing(t,e,n,s){return Je.subVectors(n,e),un.subVectors(t,e),Je.cross(un).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Je.subVectors(this.c,this.b),un.subVectors(this.a,this.b),Je.cross(un).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;pi.subVectors(s,n),gi.subVectors(r,n),Ir.subVectors(t,n);let c=pi.dot(Ir),l=gi.dot(Ir);if(c<=0&&l<=0)return e.copy(n);Pr.subVectors(t,s);let u=pi.dot(Pr),d=gi.dot(Pr);if(u>=0&&d<=u)return e.copy(s);let f=c*d-u*l;if(f<=0&&c>=0&&u<=0)return o=c/(c-u),e.copy(n).addScaledVector(pi,o);Rr.subVectors(t,r);let p=pi.dot(Rr),m=gi.dot(Rr);if(m>=0&&p<=m)return e.copy(r);let v=p*l-c*m;if(v<=0&&l>=0&&m<=0)return a=l/(l-m),e.copy(n).addScaledVector(gi,a);let g=u*m-p*d;if(g<=0&&d-u>=0&&p-m>=0)return $a.subVectors(r,s),a=(d-u)/(d-u+(p-m)),e.copy(s).addScaledVector($a,a);let h=1/(g+v+f);return o=v*h,a=f*h,e.copy(n).addScaledVector(pi,o).addScaledVector(gi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},qc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Dn={h:0,s:0,l:0},As={h:0,s:0,l:0};function Or(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Yt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ie){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Wt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=Wt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Wt.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=Wt.workingColorSpace){if(t=Ma(t,1),e=_e(e,0,1),n=_e(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Or(o,r,t+1/3),this.g=Or(o,r,t),this.b=Or(o,r,t-1/3)}return Wt.toWorkingColorSpace(this,s),this}setStyle(t,e=Ie){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ie){let n=qc[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=mn(t.r),this.g=mn(t.g),this.b=mn(t.b),this}copyLinearToSRGB(t){return this.r=Si(t.r),this.g=Si(t.g),this.b=Si(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ie){return Wt.fromWorkingColorSpace(Se.copy(this),t),Math.round(_e(Se.r*255,0,255))*65536+Math.round(_e(Se.g*255,0,255))*256+Math.round(_e(Se.b*255,0,255))}getHexString(t=Ie){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Wt.workingColorSpace){Wt.fromWorkingColorSpace(Se.copy(this),e);let n=Se.r,s=Se.g,r=Se.b,o=Math.max(n,s,r),a=Math.min(n,s,r),c,l,u=(a+o)/2;if(a===o)c=0,l=0;else{let d=o-a;switch(l=u<=.5?d/(o+a):d/(2-o-a),o){case n:c=(s-r)/d+(s<r?6:0);break;case s:c=(r-n)/d+2;break;case r:c=(n-s)/d+4;break}c/=6}return t.h=c,t.s=l,t.l=u,t}getRGB(t,e=Wt.workingColorSpace){return Wt.fromWorkingColorSpace(Se.copy(this),e),t.r=Se.r,t.g=Se.g,t.b=Se.b,t}getStyle(t=Ie){Wt.fromWorkingColorSpace(Se.copy(this),t);let e=Se.r,n=Se.g,s=Se.b;return t!==Ie?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Dn),this.setHSL(Dn.h+t,Dn.s+e,Dn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Dn),t.getHSL(As);let n=Zi(Dn.h,As.h,e),s=Zi(Dn.s,As.s,e),r=Zi(Dn.l,As.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Se=new Yt;Yt.NAMES=qc;var Ch=0,qn=class extends vn{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ch++}),this.uuid=Oi(),this.name="",this.blending=_i,this.side=Ln,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Jr,this.blendDst=qr,this.blendEquation=Yn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Yt(0,0,0),this.blendAlpha=0,this.depthFunc=bi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Fa,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=oi,this.stencilZFail=oi,this.stencilZPass=oi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==_i&&(n.blending=this.blending),this.side!==Ln&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Jr&&(n.blendSrc=this.blendSrc),this.blendDst!==qr&&(n.blendDst=this.blendDst),this.blendEquation!==Yn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==bi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Fa&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==oi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==oi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==oi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},on=class extends qn{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Yt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Mn,this.combine=Nc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var fe=new B,vs=new bt,Ge=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Ua,this.updateRanges=[],this.gpuType=rn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)vs.fromBufferAttribute(this,e),vs.applyMatrix3(t),this.setXY(e,vs.x,vs.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)fe.fromBufferAttribute(this,e),fe.applyMatrix3(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)fe.fromBufferAttribute(this,e),fe.applyMatrix4(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)fe.fromBufferAttribute(this,e),fe.applyNormalMatrix(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)fe.fromBufferAttribute(this,e),fe.transformDirection(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Mi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ce(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Mi(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ce(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Mi(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ce(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Mi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ce(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Mi(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ce(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ce(e,this.array),n=Ce(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Ce(e,this.array),n=Ce(n,this.array),s=Ce(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Ce(e,this.array),n=Ce(n,this.array),s=Ce(s,this.array),r=Ce(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ua&&(t.usage=this.usage),t}};var Ys=class extends Ge{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Vs=class extends Ge{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Ae=class extends Ge{constructor(t,e,n){super(new Float32Array(t),e,n)}},bh=0,Ye=new qt,Nr=new De,mi=new B,Oe=new yn,Vi=new yn,Ee=new B,He=class i extends vn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:bh++}),this.uuid=Oi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Jc(t)?Vs:Ys)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ft().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ye.makeRotationFromQuaternion(t),this.applyMatrix4(Ye),this}rotateX(t){return Ye.makeRotationX(t),this.applyMatrix4(Ye),this}rotateY(t){return Ye.makeRotationY(t),this.applyMatrix4(Ye),this}rotateZ(t){return Ye.makeRotationZ(t),this.applyMatrix4(Ye),this}translate(t,e,n){return Ye.makeTranslation(t,e,n),this.applyMatrix4(Ye),this}scale(t,e,n){return Ye.makeScale(t,e,n),this.applyMatrix4(Ye),this}lookAt(t){return Nr.lookAt(t),Nr.updateMatrix(),this.applyMatrix4(Nr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(mi).negate(),this.translate(mi.x,mi.y,mi.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ae(n,3))}else{for(let n=0,s=e.count;n<s;n++){let r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new yn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];Oe.setFromBufferAttribute(r),this.morphTargetsRelative?(Ee.addVectors(this.boundingBox.min,Oe.min),this.boundingBox.expandByPoint(Ee),Ee.addVectors(this.boundingBox.max,Oe.max),this.boundingBox.expandByPoint(Ee)):(this.boundingBox.expandByPoint(Oe.min),this.boundingBox.expandByPoint(Oe.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Fn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(t){let n=this.boundingSphere.center;if(Oe.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];Vi.setFromBufferAttribute(a),this.morphTargetsRelative?(Ee.addVectors(Oe.min,Vi.min),Oe.expandByPoint(Ee),Ee.addVectors(Oe.max,Vi.max),Oe.expandByPoint(Ee)):(Oe.expandByPoint(Vi.min),Oe.expandByPoint(Vi.max))}Oe.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Ee.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ee));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)Ee.fromBufferAttribute(a,l),c&&(mi.fromBufferAttribute(t,l),Ee.add(mi)),s=Math.max(s,n.distanceToSquared(Ee))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ge(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],c=[];for(let L=0;L<n.count;L++)a[L]=new B,c[L]=new B;let l=new B,u=new B,d=new B,f=new bt,p=new bt,m=new bt,v=new B,g=new B;function h(L,E,y){l.fromBufferAttribute(n,L),u.fromBufferAttribute(n,E),d.fromBufferAttribute(n,y),f.fromBufferAttribute(r,L),p.fromBufferAttribute(r,E),m.fromBufferAttribute(r,y),u.sub(l),d.sub(l),p.sub(f),m.sub(f);let T=1/(p.x*m.y-m.x*p.y);isFinite(T)&&(v.copy(u).multiplyScalar(m.y).addScaledVector(d,-p.y).multiplyScalar(T),g.copy(d).multiplyScalar(p.x).addScaledVector(u,-m.x).multiplyScalar(T),a[L].add(v),a[E].add(v),a[y].add(v),c[L].add(g),c[E].add(g),c[y].add(g))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let L=0,E=S.length;L<E;++L){let y=S[L],T=y.start,W=y.count;for(let z=T,X=T+W;z<X;z+=3)h(t.getX(z+0),t.getX(z+1),t.getX(z+2))}let w=new B,M=new B,O=new B,C=new B;function b(L){O.fromBufferAttribute(s,L),C.copy(O);let E=a[L];w.copy(E),w.sub(O.multiplyScalar(O.dot(E))).normalize(),M.crossVectors(C,E);let T=M.dot(c[L])<0?-1:1;o.setXYZW(L,w.x,w.y,w.z,T)}for(let L=0,E=S.length;L<E;++L){let y=S[L],T=y.start,W=y.count;for(let z=T,X=T+W;z<X;z+=3)b(t.getX(z+0)),b(t.getX(z+1)),b(t.getX(z+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ge(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);let s=new B,r=new B,o=new B,a=new B,c=new B,l=new B,u=new B,d=new B;if(t)for(let f=0,p=t.count;f<p;f+=3){let m=t.getX(f+0),v=t.getX(f+1),g=t.getX(f+2);s.fromBufferAttribute(e,m),r.fromBufferAttribute(e,v),o.fromBufferAttribute(e,g),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),a.fromBufferAttribute(n,m),c.fromBufferAttribute(n,v),l.fromBufferAttribute(n,g),a.add(u),c.add(u),l.add(u),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(v,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let f=0,p=e.count;f<p;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ee.fromBufferAttribute(t,e),Ee.normalize(),t.setXYZ(e,Ee.x,Ee.y,Ee.z)}toNonIndexed(){function t(a,c){let l=a.array,u=a.itemSize,d=a.normalized,f=new l.constructor(c.length*u),p=0,m=0;for(let v=0,g=c.length;v<g;v++){a.isInterleavedBufferAttribute?p=c[v]*a.data.stride+a.offset:p=c[v]*u;for(let h=0;h<u;h++)f[m++]=l[p++]}return new Ge(f,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=t(c,n);e.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let u=0,d=l.length;u<d;u++){let f=l[u],p=t(f,n);c.push(p)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],u=[];for(let d=0,f=l.length;d<f;d++){let p=l[d];u.push(p.toJSON(t.data))}u.length>0&&(s[c]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let l in s){let u=s[l];this.setAttribute(l,u.clone(e))}let r=t.morphAttributes;for(let l in r){let u=[],d=r[l];for(let f=0,p=d.length;f<p;f++)u.push(d[f].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let l=0,u=o.length;l<u;l++){let d=o[l];this.addGroup(d.start,d.count,d.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},tc=new qt,Gn=new Jn,xs=new Fn,ec=new B,ys=new B,Ms=new B,Es=new B,Gr=new B,_s=new B,nc=new B,ws=new B,me=class extends De{constructor(t=new He,e=new on){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){_s.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let u=a[c],d=r[c];u!==0&&(Gr.fromBufferAttribute(d,t),o?_s.addScaledVector(Gr,u):_s.addScaledVector(Gr.sub(e),u))}e.add(_s)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),xs.copy(n.boundingSphere),xs.applyMatrix4(r),Gn.copy(t.ray).recast(t.near),!(xs.containsPoint(Gn.origin)===!1&&(Gn.intersectSphere(xs,ec)===null||Gn.origin.distanceToSquared(ec)>(t.far-t.near)**2))&&(tc.copy(r).invert(),Gn.copy(t.ray).applyMatrix4(tc),!(n.boundingBox!==null&&Gn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Gn)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,f=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,v=f.length;m<v;m++){let g=f[m],h=o[g.materialIndex],S=Math.max(g.start,p.start),w=Math.min(a.count,Math.min(g.start+g.count,p.start+p.count));for(let M=S,O=w;M<O;M+=3){let C=a.getX(M),b=a.getX(M+1),L=a.getX(M+2);s=Ss(this,h,t,n,l,u,d,C,b,L),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let m=Math.max(0,p.start),v=Math.min(a.count,p.start+p.count);for(let g=m,h=v;g<h;g+=3){let S=a.getX(g),w=a.getX(g+1),M=a.getX(g+2);s=Ss(this,o,t,n,l,u,d,S,w,M),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let m=0,v=f.length;m<v;m++){let g=f[m],h=o[g.materialIndex],S=Math.max(g.start,p.start),w=Math.min(c.count,Math.min(g.start+g.count,p.start+p.count));for(let M=S,O=w;M<O;M+=3){let C=M,b=M+1,L=M+2;s=Ss(this,h,t,n,l,u,d,C,b,L),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let m=Math.max(0,p.start),v=Math.min(c.count,p.start+p.count);for(let g=m,h=v;g<h;g+=3){let S=g,w=g+1,M=g+2;s=Ss(this,o,t,n,l,u,d,S,w,M),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}};function Th(i,t,e,n,s,r,o,a){let c;if(t.side===Pe?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,t.side===Ln,a),c===null)return null;ws.copy(a),ws.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(ws);return l<e.near||l>e.far?null:{distance:l,point:ws.clone(),object:i}}function Ss(i,t,e,n,s,r,o,a,c,l){i.getVertexPosition(a,ys),i.getVertexPosition(c,Ms),i.getVertexPosition(l,Es);let u=Th(i,t,e,n,ys,Ms,Es,nc);if(u){let d=new B;Vn.getBarycoord(nc,ys,Ms,Es,d),s&&(u.uv=Vn.getInterpolatedAttribute(s,a,c,l,d,new bt)),r&&(u.uv1=Vn.getInterpolatedAttribute(r,a,c,l,d,new bt)),o&&(u.normal=Vn.getInterpolatedAttribute(o,a,c,l,d,new B),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let f={a,b:c,c:l,normal:new B,materialIndex:0};Vn.getNormal(ys,Ms,Es,f.normal),u.face=f,u.barycoord=d}return u}var is=class i extends He{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],u=[],d=[],f=0,p=0;m("z","y","x",-1,-1,n,e,t,o,r,0),m("z","y","x",1,-1,n,e,-t,o,r,1),m("x","z","y",1,1,t,n,e,s,o,2),m("x","z","y",1,-1,t,n,-e,s,o,3),m("x","y","z",1,-1,t,e,n,s,r,4),m("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new Ae(l,3)),this.setAttribute("normal",new Ae(u,3)),this.setAttribute("uv",new Ae(d,2));function m(v,g,h,S,w,M,O,C,b,L,E){let y=M/b,T=O/L,W=M/2,z=O/2,X=C/2,q=b+1,Q=L+1,tt=0,H=0,rt=new B;for(let dt=0;dt<Q;dt++){let Mt=dt*T-z;for(let Nt=0;Nt<q;Nt++){let Kt=Nt*y-W;rt[v]=Kt*S,rt[g]=Mt*w,rt[h]=X,l.push(rt.x,rt.y,rt.z),rt[v]=0,rt[g]=0,rt[h]=C>0?1:-1,u.push(rt.x,rt.y,rt.z),d.push(Nt/b),d.push(1-dt/L),tt+=1}}for(let dt=0;dt<L;dt++)for(let Mt=0;Mt<b;Mt++){let Nt=f+Mt+q*dt,Kt=f+Mt+q*(dt+1),Y=f+(Mt+1)+q*(dt+1),$=f+(Mt+1)+q*dt;c.push(Nt,Kt,$),c.push(Kt,Y,$),H+=6}a.addGroup(p,H,E),p+=H,f+=tt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Pi(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function be(i){let t={};for(let e=0;e<i.length;e++){let n=Pi(i[e]);for(let s in n)t[s]=n[s]}return t}function Dh(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Zc(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Wt.workingColorSpace}var Bh={clone:Pi,merge:be},Ih=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ph=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ve=class extends qn{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ih,this.fragmentShader=Ph,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Pi(t.uniforms),this.uniformsGroups=Dh(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},Ws=class extends De{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new qt,this.projectionMatrix=new qt,this.projectionMatrixInverse=new qt,this.coordinateSystem=pn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Bn=new B,ic=new bt,sc=new bt,Te=class extends Ws{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=es*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(qi*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return es*2*Math.atan(Math.tan(qi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Bn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Bn.x,Bn.y).multiplyScalar(-t/Bn.z),Bn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Bn.x,Bn.y).multiplyScalar(-t/Bn.z)}getViewSize(t,e){return this.getViewBounds(t,ic,sc),e.subVectors(sc,ic)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(qi*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Ai=-90,vi=1,zo=class extends De{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Te(Ai,vi,t,e);s.layers=this.layers,this.add(s);let r=new Te(Ai,vi,t,e);r.layers=this.layers,this.add(r);let o=new Te(Ai,vi,t,e);o.layers=this.layers,this.add(o);let a=new Te(Ai,vi,t,e);a.layers=this.layers,this.add(a);let c=new Te(Ai,vi,t,e);c.layers=this.layers,this.add(c);let l=new Te(Ai,vi,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,c]=e;for(let l of e)this.remove(l);if(t===pn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===zs)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,u]=this.children,d=t.getRenderTarget(),f=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;let v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,s),t.render(e,u),t.setRenderTarget(d,f,p),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},Xs=class extends ze{constructor(t,e,n,s,r,o,a,c,l,u){t=t!==void 0?t:[],e=e!==void 0?e:Ti,super(t,e,n,s,r,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},ko=class extends xn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Xs(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:sn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new is(5,5,5),r=new Ve({name:"CubemapFromEquirect",uniforms:Pi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Pe,blending:Pn});r.uniforms.tEquirect.value=e;let o=new me(s,r),a=e.minFilter;return e.minFilter===Kn&&(e.minFilter=sn),new zo(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}},zr=new B,Rh=new B,Lh=new Ft,qe=class{constructor(t=new B(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=zr.subVectors(n,e).cross(Rh.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(zr),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Lh.getNormalMatrix(t),s=this.coplanarPoint(zr).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},zn=new Fn,Cs=new B,ss=class{constructor(t=new qe,e=new qe,n=new qe,s=new qe,r=new qe,o=new qe){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=pn){let n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],u=s[5],d=s[6],f=s[7],p=s[8],m=s[9],v=s[10],g=s[11],h=s[12],S=s[13],w=s[14],M=s[15];if(n[0].setComponents(c-r,f-l,g-p,M-h).normalize(),n[1].setComponents(c+r,f+l,g+p,M+h).normalize(),n[2].setComponents(c+o,f+u,g+m,M+S).normalize(),n[3].setComponents(c-o,f-u,g-m,M-S).normalize(),n[4].setComponents(c-a,f-d,g-v,M-w).normalize(),e===pn)n[5].setComponents(c+a,f+d,g+v,M+w).normalize();else if(e===zs)n[5].setComponents(a,d,v,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),zn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),zn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(zn)}intersectsSprite(t){return zn.center.set(0,0,0),zn.radius=.7071067811865476,zn.applyMatrix4(t.matrixWorld),this.intersectsSphere(zn)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Cs.x=s.normal.x>0?t.max.x:t.min.x,Cs.y=s.normal.y>0?t.max.y:t.min.y,Cs.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Cs)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function $c(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Fh(i){let t=new WeakMap;function e(a,c){let l=a.array,u=a.usage,d=l.byteLength,f=i.createBuffer();i.bindBuffer(c,f),i.bufferData(c,l,u),a.onUploadCallback();let p;if(l instanceof Float32Array)p=i.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=i.SHORT;else if(l instanceof Uint32Array)p=i.UNSIGNED_INT;else if(l instanceof Int32Array)p=i.INT;else if(l instanceof Int8Array)p=i.BYTE;else if(l instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,c,l){let u=c.array,d=c.updateRanges;if(i.bindBuffer(l,a),d.length===0)i.bufferSubData(l,0,u);else{d.sort((p,m)=>p.start-m.start);let f=0;for(let p=1;p<d.length;p++){let m=d[f],v=d[p];v.start<=m.start+m.count+1?m.count=Math.max(m.count,v.start+v.count-m.start):(++f,d[f]=v)}d.length=f+1;for(let p=0,m=d.length;p<m;p++){let v=d[p];i.bufferSubData(l,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var Ri=class i extends He{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(s),l=a+1,u=c+1,d=t/a,f=e/c,p=[],m=[],v=[],g=[];for(let h=0;h<u;h++){let S=h*f-o;for(let w=0;w<l;w++){let M=w*d-r;m.push(M,-S,0),v.push(0,0,1),g.push(w/a),g.push(1-h/c)}}for(let h=0;h<c;h++)for(let S=0;S<a;S++){let w=S+l*h,M=S+l*(h+1),O=S+1+l*(h+1),C=S+1+l*h;p.push(w,M,C),p.push(M,O,C)}this.setIndex(p),this.setAttribute("position",new Ae(m,3)),this.setAttribute("normal",new Ae(v,3)),this.setAttribute("uv",new Ae(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},Uh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Oh=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Nh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Gh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,zh=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,kh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Hh=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Qh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Yh=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Vh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Wh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Xh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Kh=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,jh=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Jh=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,qh=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Zh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,$h=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,tu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,eu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,nu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,iu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,su=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,ru=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,ou=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,au=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,cu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,lu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,hu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,uu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,du="gl_FragColor = linearToOutputTexel( gl_FragColor );",fu=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,pu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,gu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,mu=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Au=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,vu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,xu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,yu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Mu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Eu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,_u=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,wu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Su=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Cu=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,bu=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Tu=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Du=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Bu=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Iu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Pu=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ru=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Lu=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Fu=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Uu=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Ou=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Nu=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Gu=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zu=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ku=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Hu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Qu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Yu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Vu=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Wu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Xu=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ku=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ju=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ju=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,qu=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Zu=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$u=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,td=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,ed=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,nd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,id=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,sd=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,rd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,od=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ad=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,cd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ld=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,hd=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,ud=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,dd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,fd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,pd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,gd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,md=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ad=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,vd=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,xd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,yd=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Md=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ed=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,_d=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,wd=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Sd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Cd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,bd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Td=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Dd=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Bd=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Id=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Pd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Rd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Ld=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Fd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ud=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Od=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Nd=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kd=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Hd=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Qd=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Yd=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Vd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Wd=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xd=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Kd=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,jd=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Jd=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qd=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Zd=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$d=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,tf=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ef=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,nf=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,sf=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,rf=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,of=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,af=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cf=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,lf=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hf=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,uf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,df=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ff=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,pf=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,gf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ot={alphahash_fragment:Uh,alphahash_pars_fragment:Oh,alphamap_fragment:Nh,alphamap_pars_fragment:Gh,alphatest_fragment:zh,alphatest_pars_fragment:kh,aomap_fragment:Hh,aomap_pars_fragment:Qh,batching_pars_vertex:Yh,batching_vertex:Vh,begin_vertex:Wh,beginnormal_vertex:Xh,bsdfs:Kh,iridescence_fragment:jh,bumpmap_pars_fragment:Jh,clipping_planes_fragment:qh,clipping_planes_pars_fragment:Zh,clipping_planes_pars_vertex:$h,clipping_planes_vertex:tu,color_fragment:eu,color_pars_fragment:nu,color_pars_vertex:iu,color_vertex:su,common:ru,cube_uv_reflection_fragment:ou,defaultnormal_vertex:au,displacementmap_pars_vertex:cu,displacementmap_vertex:lu,emissivemap_fragment:hu,emissivemap_pars_fragment:uu,colorspace_fragment:du,colorspace_pars_fragment:fu,envmap_fragment:pu,envmap_common_pars_fragment:gu,envmap_pars_fragment:mu,envmap_pars_vertex:Au,envmap_physical_pars_fragment:Tu,envmap_vertex:vu,fog_vertex:xu,fog_pars_vertex:yu,fog_fragment:Mu,fog_pars_fragment:Eu,gradientmap_pars_fragment:_u,lightmap_pars_fragment:wu,lights_lambert_fragment:Su,lights_lambert_pars_fragment:Cu,lights_pars_begin:bu,lights_toon_fragment:Du,lights_toon_pars_fragment:Bu,lights_phong_fragment:Iu,lights_phong_pars_fragment:Pu,lights_physical_fragment:Ru,lights_physical_pars_fragment:Lu,lights_fragment_begin:Fu,lights_fragment_maps:Uu,lights_fragment_end:Ou,logdepthbuf_fragment:Nu,logdepthbuf_pars_fragment:Gu,logdepthbuf_pars_vertex:zu,logdepthbuf_vertex:ku,map_fragment:Hu,map_pars_fragment:Qu,map_particle_fragment:Yu,map_particle_pars_fragment:Vu,metalnessmap_fragment:Wu,metalnessmap_pars_fragment:Xu,morphinstance_vertex:Ku,morphcolor_vertex:ju,morphnormal_vertex:Ju,morphtarget_pars_vertex:qu,morphtarget_vertex:Zu,normal_fragment_begin:$u,normal_fragment_maps:td,normal_pars_fragment:ed,normal_pars_vertex:nd,normal_vertex:id,normalmap_pars_fragment:sd,clearcoat_normal_fragment_begin:rd,clearcoat_normal_fragment_maps:od,clearcoat_pars_fragment:ad,iridescence_pars_fragment:cd,opaque_fragment:ld,packing:hd,premultiplied_alpha_fragment:ud,project_vertex:dd,dithering_fragment:fd,dithering_pars_fragment:pd,roughnessmap_fragment:gd,roughnessmap_pars_fragment:md,shadowmap_pars_fragment:Ad,shadowmap_pars_vertex:vd,shadowmap_vertex:xd,shadowmask_pars_fragment:yd,skinbase_vertex:Md,skinning_pars_vertex:Ed,skinning_vertex:_d,skinnormal_vertex:wd,specularmap_fragment:Sd,specularmap_pars_fragment:Cd,tonemapping_fragment:bd,tonemapping_pars_fragment:Td,transmission_fragment:Dd,transmission_pars_fragment:Bd,uv_pars_fragment:Id,uv_pars_vertex:Pd,uv_vertex:Rd,worldpos_vertex:Ld,background_vert:Fd,background_frag:Ud,backgroundCube_vert:Od,backgroundCube_frag:Nd,cube_vert:Gd,cube_frag:zd,depth_vert:kd,depth_frag:Hd,distanceRGBA_vert:Qd,distanceRGBA_frag:Yd,equirect_vert:Vd,equirect_frag:Wd,linedashed_vert:Xd,linedashed_frag:Kd,meshbasic_vert:jd,meshbasic_frag:Jd,meshlambert_vert:qd,meshlambert_frag:Zd,meshmatcap_vert:$d,meshmatcap_frag:tf,meshnormal_vert:ef,meshnormal_frag:nf,meshphong_vert:sf,meshphong_frag:rf,meshphysical_vert:of,meshphysical_frag:af,meshtoon_vert:cf,meshtoon_frag:lf,points_vert:hf,points_frag:uf,shadow_vert:df,shadow_frag:ff,sprite_vert:pf,sprite_frag:gf},ct={common:{diffuse:{value:new Yt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ft},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ft}},envmap:{envMap:{value:null},envMapRotation:{value:new Ft},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ft}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ft}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ft},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ft},normalScale:{value:new bt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ft},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ft}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ft}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ft}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Yt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Yt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0},uvTransform:{value:new Ft}},sprite:{diffuse:{value:new Yt(16777215)},opacity:{value:1},center:{value:new bt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ft},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0}}},nn={basic:{uniforms:be([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.fog]),vertexShader:Ot.meshbasic_vert,fragmentShader:Ot.meshbasic_frag},lambert:{uniforms:be([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,ct.lights,{emissive:{value:new Yt(0)}}]),vertexShader:Ot.meshlambert_vert,fragmentShader:Ot.meshlambert_frag},phong:{uniforms:be([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,ct.lights,{emissive:{value:new Yt(0)},specular:{value:new Yt(1118481)},shininess:{value:30}}]),vertexShader:Ot.meshphong_vert,fragmentShader:Ot.meshphong_frag},standard:{uniforms:be([ct.common,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.roughnessmap,ct.metalnessmap,ct.fog,ct.lights,{emissive:{value:new Yt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ot.meshphysical_vert,fragmentShader:Ot.meshphysical_frag},toon:{uniforms:be([ct.common,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.gradientmap,ct.fog,ct.lights,{emissive:{value:new Yt(0)}}]),vertexShader:Ot.meshtoon_vert,fragmentShader:Ot.meshtoon_frag},matcap:{uniforms:be([ct.common,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,{matcap:{value:null}}]),vertexShader:Ot.meshmatcap_vert,fragmentShader:Ot.meshmatcap_frag},points:{uniforms:be([ct.points,ct.fog]),vertexShader:Ot.points_vert,fragmentShader:Ot.points_frag},dashed:{uniforms:be([ct.common,ct.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ot.linedashed_vert,fragmentShader:Ot.linedashed_frag},depth:{uniforms:be([ct.common,ct.displacementmap]),vertexShader:Ot.depth_vert,fragmentShader:Ot.depth_frag},normal:{uniforms:be([ct.common,ct.bumpmap,ct.normalmap,ct.displacementmap,{opacity:{value:1}}]),vertexShader:Ot.meshnormal_vert,fragmentShader:Ot.meshnormal_frag},sprite:{uniforms:be([ct.sprite,ct.fog]),vertexShader:Ot.sprite_vert,fragmentShader:Ot.sprite_frag},background:{uniforms:{uvTransform:{value:new Ft},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ot.background_vert,fragmentShader:Ot.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ft}},vertexShader:Ot.backgroundCube_vert,fragmentShader:Ot.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ot.cube_vert,fragmentShader:Ot.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ot.equirect_vert,fragmentShader:Ot.equirect_frag},distanceRGBA:{uniforms:be([ct.common,ct.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ot.distanceRGBA_vert,fragmentShader:Ot.distanceRGBA_frag},shadow:{uniforms:be([ct.lights,ct.fog,{color:{value:new Yt(0)},opacity:{value:1}}]),vertexShader:Ot.shadow_vert,fragmentShader:Ot.shadow_frag}};nn.physical={uniforms:be([nn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ft},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ft},clearcoatNormalScale:{value:new bt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ft},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ft},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ft},sheen:{value:0},sheenColor:{value:new Yt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ft},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ft},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ft},transmissionSamplerSize:{value:new bt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ft},attenuationDistance:{value:0},attenuationColor:{value:new Yt(0)},specularColor:{value:new Yt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ft},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ft},anisotropyVector:{value:new bt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ft}}]),vertexShader:Ot.meshphysical_vert,fragmentShader:Ot.meshphysical_frag};var bs={r:0,b:0,g:0},kn=new Mn,mf=new qt;function Af(i,t,e,n,s,r,o){let a=new Yt(0),c=r===!0?0:1,l,u,d=null,f=0,p=null;function m(S){let w=S.isScene===!0?S.background:null;return w&&w.isTexture&&(w=(S.backgroundBlurriness>0?e:t).get(w)),w}function v(S){let w=!1,M=m(S);M===null?h(a,c):M&&M.isColor&&(h(M,1),w=!0);let O=i.xr.getEnvironmentBlendMode();O==="additive"?n.buffers.color.setClear(0,0,0,1,o):O==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||w)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(S,w){let M=m(w);M&&(M.isCubeTexture||M.mapping===pr)?(u===void 0&&(u=new me(new is(1,1,1),new Ve({name:"BackgroundCubeMaterial",uniforms:Pi(nn.backgroundCube.uniforms),vertexShader:nn.backgroundCube.vertexShader,fragmentShader:nn.backgroundCube.fragmentShader,side:Pe,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(O,C,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),kn.copy(w.backgroundRotation),kn.x*=-1,kn.y*=-1,kn.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(kn.y*=-1,kn.z*=-1),u.material.uniforms.envMap.value=M,u.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(mf.makeRotationFromEuler(kn)),u.material.toneMapped=Wt.getTransfer(M.colorSpace)!==ee,(d!==M||f!==M.version||p!==i.toneMapping)&&(u.material.needsUpdate=!0,d=M,f=M.version,p=i.toneMapping),u.layers.enableAll(),S.unshift(u,u.geometry,u.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new me(new Ri(2,2),new Ve({name:"BackgroundMaterial",uniforms:Pi(nn.background.uniforms),vertexShader:nn.background.vertexShader,fragmentShader:nn.background.fragmentShader,side:Ln,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.toneMapped=Wt.getTransfer(M.colorSpace)!==ee,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(d!==M||f!==M.version||p!==i.toneMapping)&&(l.material.needsUpdate=!0,d=M,f=M.version,p=i.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function h(S,w){S.getRGB(bs,Zc(i)),n.buffers.color.setClear(bs.r,bs.g,bs.b,w,o)}return{getClearColor:function(){return a},setClearColor:function(S,w=1){a.set(S),c=w,h(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(S){c=S,h(a,c)},render:v,addToRenderList:g}}function vf(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,o=!1;function a(y,T,W,z,X){let q=!1,Q=d(z,W,T);r!==Q&&(r=Q,l(r.object)),q=p(y,z,W,X),q&&m(y,z,W,X),X!==null&&t.update(X,i.ELEMENT_ARRAY_BUFFER),(q||o)&&(o=!1,M(y,T,W,z),X!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(X).buffer))}function c(){return i.createVertexArray()}function l(y){return i.bindVertexArray(y)}function u(y){return i.deleteVertexArray(y)}function d(y,T,W){let z=W.wireframe===!0,X=n[y.id];X===void 0&&(X={},n[y.id]=X);let q=X[T.id];q===void 0&&(q={},X[T.id]=q);let Q=q[z];return Q===void 0&&(Q=f(c()),q[z]=Q),Q}function f(y){let T=[],W=[],z=[];for(let X=0;X<e;X++)T[X]=0,W[X]=0,z[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:T,enabledAttributes:W,attributeDivisors:z,object:y,attributes:{},index:null}}function p(y,T,W,z){let X=r.attributes,q=T.attributes,Q=0,tt=W.getAttributes();for(let H in tt)if(tt[H].location>=0){let dt=X[H],Mt=q[H];if(Mt===void 0&&(H==="instanceMatrix"&&y.instanceMatrix&&(Mt=y.instanceMatrix),H==="instanceColor"&&y.instanceColor&&(Mt=y.instanceColor)),dt===void 0||dt.attribute!==Mt||Mt&&dt.data!==Mt.data)return!0;Q++}return r.attributesNum!==Q||r.index!==z}function m(y,T,W,z){let X={},q=T.attributes,Q=0,tt=W.getAttributes();for(let H in tt)if(tt[H].location>=0){let dt=q[H];dt===void 0&&(H==="instanceMatrix"&&y.instanceMatrix&&(dt=y.instanceMatrix),H==="instanceColor"&&y.instanceColor&&(dt=y.instanceColor));let Mt={};Mt.attribute=dt,dt&&dt.data&&(Mt.data=dt.data),X[H]=Mt,Q++}r.attributes=X,r.attributesNum=Q,r.index=z}function v(){let y=r.newAttributes;for(let T=0,W=y.length;T<W;T++)y[T]=0}function g(y){h(y,0)}function h(y,T){let W=r.newAttributes,z=r.enabledAttributes,X=r.attributeDivisors;W[y]=1,z[y]===0&&(i.enableVertexAttribArray(y),z[y]=1),X[y]!==T&&(i.vertexAttribDivisor(y,T),X[y]=T)}function S(){let y=r.newAttributes,T=r.enabledAttributes;for(let W=0,z=T.length;W<z;W++)T[W]!==y[W]&&(i.disableVertexAttribArray(W),T[W]=0)}function w(y,T,W,z,X,q,Q){Q===!0?i.vertexAttribIPointer(y,T,W,X,q):i.vertexAttribPointer(y,T,W,z,X,q)}function M(y,T,W,z){v();let X=z.attributes,q=W.getAttributes(),Q=T.defaultAttributeValues;for(let tt in q){let H=q[tt];if(H.location>=0){let rt=X[tt];if(rt===void 0&&(tt==="instanceMatrix"&&y.instanceMatrix&&(rt=y.instanceMatrix),tt==="instanceColor"&&y.instanceColor&&(rt=y.instanceColor)),rt!==void 0){let dt=rt.normalized,Mt=rt.itemSize,Nt=t.get(rt);if(Nt===void 0)continue;let Kt=Nt.buffer,Y=Nt.type,$=Nt.bytesPerElement,gt=Y===i.INT||Y===i.UNSIGNED_INT||rt.gpuType===pa;if(rt.isInterleavedBufferAttribute){let it=rt.data,St=it.stride,Tt=rt.offset;if(it.isInstancedInterleavedBuffer){for(let Ut=0;Ut<H.locationSize;Ut++)h(H.location+Ut,it.meshPerAttribute);y.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let Ut=0;Ut<H.locationSize;Ut++)g(H.location+Ut);i.bindBuffer(i.ARRAY_BUFFER,Kt);for(let Ut=0;Ut<H.locationSize;Ut++)w(H.location+Ut,Mt/H.locationSize,Y,dt,St*$,(Tt+Mt/H.locationSize*Ut)*$,gt)}else{if(rt.isInstancedBufferAttribute){for(let it=0;it<H.locationSize;it++)h(H.location+it,rt.meshPerAttribute);y.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let it=0;it<H.locationSize;it++)g(H.location+it);i.bindBuffer(i.ARRAY_BUFFER,Kt);for(let it=0;it<H.locationSize;it++)w(H.location+it,Mt/H.locationSize,Y,dt,Mt*$,Mt/H.locationSize*it*$,gt)}}else if(Q!==void 0){let dt=Q[tt];if(dt!==void 0)switch(dt.length){case 2:i.vertexAttrib2fv(H.location,dt);break;case 3:i.vertexAttrib3fv(H.location,dt);break;case 4:i.vertexAttrib4fv(H.location,dt);break;default:i.vertexAttrib1fv(H.location,dt)}}}}S()}function O(){L();for(let y in n){let T=n[y];for(let W in T){let z=T[W];for(let X in z)u(z[X].object),delete z[X];delete T[W]}delete n[y]}}function C(y){if(n[y.id]===void 0)return;let T=n[y.id];for(let W in T){let z=T[W];for(let X in z)u(z[X].object),delete z[X];delete T[W]}delete n[y.id]}function b(y){for(let T in n){let W=n[T];if(W[y.id]===void 0)continue;let z=W[y.id];for(let X in z)u(z[X].object),delete z[X];delete W[y.id]}}function L(){E(),o=!0,r!==s&&(r=s,l(r.object))}function E(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:L,resetDefaultState:E,dispose:O,releaseStatesOfGeometry:C,releaseStatesOfProgram:b,initAttributes:v,enableAttribute:g,disableUnusedAttributes:S}}function xf(i,t,e){let n;function s(l){n=l}function r(l,u){i.drawArrays(n,l,u),e.update(u,n,1)}function o(l,u,d){d!==0&&(i.drawArraysInstanced(n,l,u,d),e.update(u,n,d))}function a(l,u,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,u,0,d);let p=0;for(let m=0;m<d;m++)p+=u[m];e.update(p,n,1)}function c(l,u,d,f){if(d===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<l.length;m++)o(l[m],u[m],f[m]);else{p.multiDrawArraysInstancedWEBGL(n,l,0,u,0,f,0,d);let m=0;for(let v=0;v<d;v++)m+=u[v]*f[v];e.update(m,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function yf(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let b=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(b){return!(b!==$e&&n.convert(b)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(b){let L=b===as&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(b!==An&&n.convert(b)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&b!==rn&&!L)}function c(b){if(b==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);let d=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),h=i.getParameter(i.MAX_VERTEX_ATTRIBS),S=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),w=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),O=m>0,C=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:d,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:m,maxTextureSize:v,maxCubemapSize:g,maxAttributes:h,maxVertexUniforms:S,maxVaryings:w,maxFragmentUniforms:M,vertexTextures:O,maxSamples:C}}function Mf(i){let t=this,e=null,n=0,s=!1,r=!1,o=new qe,a=new Ft,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){let p=d.length!==0||f||n!==0||s;return s=f,n=d.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){e=u(d,f,0)},this.setState=function(d,f,p){let m=d.clippingPlanes,v=d.clipIntersection,g=d.clipShadows,h=i.get(d);if(!s||m===null||m.length===0||r&&!g)r?u(null):l();else{let S=r?0:n,w=S*4,M=h.clippingState||null;c.value=M,M=u(m,f,w,p);for(let O=0;O!==w;++O)M[O]=e[O];h.clippingState=M,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=S}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(d,f,p,m){let v=d!==null?d.length:0,g=null;if(v!==0){if(g=c.value,m!==!0||g===null){let h=p+v*4,S=f.matrixWorldInverse;a.getNormalMatrix(S),(g===null||g.length<h)&&(g=new Float32Array(h));for(let w=0,M=p;w!==v;++w,M+=4)o.copy(d[w]).applyMatrix4(S,a),o.normal.toArray(g,M),g[M+3]=o.constant}c.value=g,c.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,g}}function Ef(i){let t=new WeakMap;function e(o,a){return a===ro?o.mapping=Ti:a===oo&&(o.mapping=Di),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===ro||a===oo)if(t.has(o)){let c=t.get(o).texture;return e(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new ko(c.height);return l.fromEquirectangularTexture(i,o),t.set(o,l),o.addEventListener("dispose",s),e(l.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var Ks=class extends Ws{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Ei=4,rc=[.125,.215,.35,.446,.526,.582],Wn=20,kr=new Ks,oc=new Yt,Hr=null,Qr=0,Yr=0,Vr=!1,Qn=(1+Math.sqrt(5))/2,xi=1/Qn,ac=[new B(-Qn,xi,0),new B(Qn,xi,0),new B(-xi,0,Qn),new B(xi,0,Qn),new B(0,Qn,-xi),new B(0,Qn,xi),new B(-1,1,-1),new B(1,1,-1),new B(-1,1,1),new B(1,1,1)],js=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Hr=this._renderer.getRenderTarget(),Qr=this._renderer.getActiveCubeFace(),Yr=this._renderer.getActiveMipmapLevel(),Vr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=hc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=lc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Hr,Qr,Yr),this._renderer.xr.enabled=Vr,t.scissorTest=!1,Ts(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ti||t.mapping===Di?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Hr=this._renderer.getRenderTarget(),Qr=this._renderer.getActiveCubeFace(),Yr=this._renderer.getActiveMipmapLevel(),Vr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:sn,minFilter:sn,generateMipmaps:!1,type:as,format:$e,colorSpace:Ui,depthBuffer:!1},s=cc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=cc(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=_f(r)),this._blurMaterial=wf(r,t,e)}return s}_compileMaterial(t){let e=new me(this._lodPlanes[0],t);this._renderer.compile(e,kr)}_sceneToCubeUV(t,e,n,s){let a=new Te(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(oc),u.toneMapping=Rn,u.autoClear=!1;let p=new on({name:"PMREM.Background",side:Pe,depthWrite:!1,depthTest:!1}),m=new me(new is,p),v=!1,g=t.background;g?g.isColor&&(p.color.copy(g),t.background=null,v=!0):(p.color.copy(oc),v=!0);for(let h=0;h<6;h++){let S=h%3;S===0?(a.up.set(0,c[h],0),a.lookAt(l[h],0,0)):S===1?(a.up.set(0,0,c[h]),a.lookAt(0,l[h],0)):(a.up.set(0,c[h],0),a.lookAt(0,0,l[h]));let w=this._cubeSize;Ts(s,S*w,h>2?w:0,w,w),u.setRenderTarget(s),v&&u.render(m,a),u.render(t,a)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=f,u.autoClear=d,t.background=g}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===Ti||t.mapping===Di;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=hc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=lc());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new me(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let c=this._cubeSize;Ts(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,kr)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=ac[(s-r-1)%ac.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,d=new me(this._lodPlanes[s],l),f=l.uniforms,p=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Wn-1),v=r/m,g=isFinite(r)?1+Math.floor(u*v):Wn;g>Wn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Wn}`);let h=[],S=0;for(let b=0;b<Wn;++b){let L=b/v,E=Math.exp(-L*L/2);h.push(E),b===0?S+=E:b<g&&(S+=2*E)}for(let b=0;b<h.length;b++)h[b]=h[b]/S;f.envMap.value=t.texture,f.samples.value=g,f.weights.value=h,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:w}=this;f.dTheta.value=m,f.mipInt.value=w-n;let M=this._sizeLods[s],O=3*M*(s>w-Ei?s-w+Ei:0),C=4*(this._cubeSize-M);Ts(e,O,C,3*M,2*M),c.setRenderTarget(e),c.render(d,kr)}};function _f(i){let t=[],e=[],n=[],s=i,r=i-Ei+1+rc.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let c=1/a;o>i-Ei?c=rc[o-i+Ei-1]:o===0&&(c=0),n.push(c);let l=1/(a-2),u=-l,d=1+l,f=[u,u,d,u,d,d,u,u,d,d,u,d],p=6,m=6,v=3,g=2,h=1,S=new Float32Array(v*m*p),w=new Float32Array(g*m*p),M=new Float32Array(h*m*p);for(let C=0;C<p;C++){let b=C%3*2/3-1,L=C>2?0:-1,E=[b,L,0,b+2/3,L,0,b+2/3,L+1,0,b,L,0,b+2/3,L+1,0,b,L+1,0];S.set(E,v*m*C),w.set(f,g*m*C);let y=[C,C,C,C,C,C];M.set(y,h*m*C)}let O=new He;O.setAttribute("position",new Ge(S,v)),O.setAttribute("uv",new Ge(w,g)),O.setAttribute("faceIndex",new Ge(M,h)),t.push(O),s>Ei&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function cc(i,t,e){let n=new xn(i,t,e);return n.texture.mapping=pr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ts(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function wf(i,t,e){let n=new Float32Array(Wn),s=new B(0,1,0);return new Ve({name:"SphericalGaussianBlur",defines:{n:Wn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Ea(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Pn,depthTest:!1,depthWrite:!1})}function lc(){return new Ve({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ea(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Pn,depthTest:!1,depthWrite:!1})}function hc(){return new Ve({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ea(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Pn,depthTest:!1,depthWrite:!1})}function Ea(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Sf(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let c=a.mapping,l=c===ro||c===oo,u=c===Ti||c===Di;if(l||u){let d=t.get(a),f=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new js(i)),d=l?e.fromEquirectangular(a,d):e.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),d.texture;if(d!==void 0)return d.texture;{let p=a.image;return l&&p&&p.height>0||u&&p&&s(p)?(e===null&&(e=new js(i)),d=l?e.fromEquirectangular(a):e.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),a.addEventListener("dispose",r),d.texture):null}}}return a}function s(a){let c=0,l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function r(a){let c=a.target;c.removeEventListener("dispose",r);let l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Cf(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&ji("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function bf(i,t,e,n){let s={},r=new WeakMap;function o(d){let f=d.target;f.index!==null&&t.remove(f.index);for(let m in f.attributes)t.remove(f.attributes[m]);for(let m in f.morphAttributes){let v=f.morphAttributes[m];for(let g=0,h=v.length;g<h;g++)t.remove(v[g])}f.removeEventListener("dispose",o),delete s[f.id];let p=r.get(f);p&&(t.remove(p),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(d,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function c(d){let f=d.attributes;for(let m in f)t.update(f[m],i.ARRAY_BUFFER);let p=d.morphAttributes;for(let m in p){let v=p[m];for(let g=0,h=v.length;g<h;g++)t.update(v[g],i.ARRAY_BUFFER)}}function l(d){let f=[],p=d.index,m=d.attributes.position,v=0;if(p!==null){let S=p.array;v=p.version;for(let w=0,M=S.length;w<M;w+=3){let O=S[w+0],C=S[w+1],b=S[w+2];f.push(O,C,C,b,b,O)}}else if(m!==void 0){let S=m.array;v=m.version;for(let w=0,M=S.length/3-1;w<M;w+=3){let O=w+0,C=w+1,b=w+2;f.push(O,C,C,b,b,O)}}else return;let g=new(Jc(f)?Vs:Ys)(f,1);g.version=v;let h=r.get(d);h&&t.remove(h),r.set(d,g)}function u(d){let f=r.get(d);if(f){let p=d.index;p!==null&&f.version<p.version&&l(d)}else l(d);return r.get(d)}return{get:a,update:c,getWireframeAttribute:u}}function Tf(i,t,e){let n;function s(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function c(f,p){i.drawElements(n,p,r,f*o),e.update(p,n,1)}function l(f,p,m){m!==0&&(i.drawElementsInstanced(n,p,r,f*o,m),e.update(p,n,m))}function u(f,p,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,f,0,m);let g=0;for(let h=0;h<m;h++)g+=p[h];e.update(g,n,1)}function d(f,p,m,v){if(m===0)return;let g=t.get("WEBGL_multi_draw");if(g===null)for(let h=0;h<f.length;h++)l(f[h]/o,p[h],v[h]);else{g.multiDrawElementsInstancedWEBGL(n,p,0,r,f,0,v,0,m);let h=0;for(let S=0;S<m;S++)h+=p[S]*v[S];e.update(h,n,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function Df(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Bf(i,t,e){let n=new WeakMap,s=new ue;function r(o,a,c){let l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0,f=n.get(a);if(f===void 0||f.count!==d){let E=function(){b.dispose(),n.delete(a),a.removeEventListener("dispose",E)};f!==void 0&&f.texture.dispose();let p=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],h=a.morphAttributes.normal||[],S=a.morphAttributes.color||[],w=0;p===!0&&(w=1),m===!0&&(w=2),v===!0&&(w=3);let M=a.attributes.position.count*w,O=1;M>t.maxTextureSize&&(O=Math.ceil(M/t.maxTextureSize),M=t.maxTextureSize);let C=new Float32Array(M*O*4*d),b=new Qs(C,M,O,d);b.type=rn,b.needsUpdate=!0;let L=w*4;for(let y=0;y<d;y++){let T=g[y],W=h[y],z=S[y],X=M*O*4*y;for(let q=0;q<T.count;q++){let Q=q*L;p===!0&&(s.fromBufferAttribute(T,q),C[X+Q+0]=s.x,C[X+Q+1]=s.y,C[X+Q+2]=s.z,C[X+Q+3]=0),m===!0&&(s.fromBufferAttribute(W,q),C[X+Q+4]=s.x,C[X+Q+5]=s.y,C[X+Q+6]=s.z,C[X+Q+7]=0),v===!0&&(s.fromBufferAttribute(z,q),C[X+Q+8]=s.x,C[X+Q+9]=s.y,C[X+Q+10]=s.z,C[X+Q+11]=z.itemSize===4?s.w:1)}}f={count:d,texture:b,size:new bt(M,O)},n.set(a,f),a.addEventListener("dispose",E)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let p=0;for(let v=0;v<l.length;v++)p+=l[v];let m=a.morphTargetsRelative?1:1-p;c.getUniforms().setValue(i,"morphTargetBaseInfluence",m),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function If(i,t,e,n){let s=new WeakMap;function r(c){let l=n.render.frame,u=c.geometry,d=t.get(c,u);if(s.get(d)!==l&&(t.update(d),s.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let f=c.skeleton;s.get(f)!==l&&(f.update(),s.set(f,l))}return d}function o(){s=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}var Js=class extends ze{constructor(t,e,n,s,r,o,a,c,l,u=wi){if(u!==wi&&u!==Ii)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===wi&&(n=jn),n===void 0&&u===Ii&&(n=Bi),super(null,s,r,o,a,c,u,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Ne,this.minFilter=c!==void 0?c:Ne,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},tl=new ze,uc=new Js(1,1),el=new Qs,nl=new Go,il=new Xs,dc=[],fc=[],pc=new Float32Array(16),gc=new Float32Array(9),mc=new Float32Array(4);function Ni(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=dc[s];if(r===void 0&&(r=new Float32Array(s),dc[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function ve(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function xe(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function mr(i,t){let e=fc[t];e===void 0&&(e=new Int32Array(t),fc[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Pf(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Rf(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ve(e,t))return;i.uniform2fv(this.addr,t),xe(e,t)}}function Lf(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ve(e,t))return;i.uniform3fv(this.addr,t),xe(e,t)}}function Ff(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ve(e,t))return;i.uniform4fv(this.addr,t),xe(e,t)}}function Uf(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(ve(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),xe(e,t)}else{if(ve(e,n))return;mc.set(n),i.uniformMatrix2fv(this.addr,!1,mc),xe(e,n)}}function Of(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(ve(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),xe(e,t)}else{if(ve(e,n))return;gc.set(n),i.uniformMatrix3fv(this.addr,!1,gc),xe(e,n)}}function Nf(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(ve(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),xe(e,t)}else{if(ve(e,n))return;pc.set(n),i.uniformMatrix4fv(this.addr,!1,pc),xe(e,n)}}function Gf(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function zf(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ve(e,t))return;i.uniform2iv(this.addr,t),xe(e,t)}}function kf(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ve(e,t))return;i.uniform3iv(this.addr,t),xe(e,t)}}function Hf(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ve(e,t))return;i.uniform4iv(this.addr,t),xe(e,t)}}function Qf(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Yf(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ve(e,t))return;i.uniform2uiv(this.addr,t),xe(e,t)}}function Vf(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ve(e,t))return;i.uniform3uiv(this.addr,t),xe(e,t)}}function Wf(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ve(e,t))return;i.uniform4uiv(this.addr,t),xe(e,t)}}function Xf(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(uc.compareFunction=jc,r=uc):r=tl,e.setTexture2D(t||r,s)}function Kf(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||nl,s)}function jf(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||il,s)}function Jf(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||el,s)}function qf(i){switch(i){case 5126:return Pf;case 35664:return Rf;case 35665:return Lf;case 35666:return Ff;case 35674:return Uf;case 35675:return Of;case 35676:return Nf;case 5124:case 35670:return Gf;case 35667:case 35671:return zf;case 35668:case 35672:return kf;case 35669:case 35673:return Hf;case 5125:return Qf;case 36294:return Yf;case 36295:return Vf;case 36296:return Wf;case 35678:case 36198:case 36298:case 36306:case 35682:return Xf;case 35679:case 36299:case 36307:return Kf;case 35680:case 36300:case 36308:case 36293:return jf;case 36289:case 36303:case 36311:case 36292:return Jf}}function Zf(i,t){i.uniform1fv(this.addr,t)}function $f(i,t){let e=Ni(t,this.size,2);i.uniform2fv(this.addr,e)}function tp(i,t){let e=Ni(t,this.size,3);i.uniform3fv(this.addr,e)}function ep(i,t){let e=Ni(t,this.size,4);i.uniform4fv(this.addr,e)}function np(i,t){let e=Ni(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function ip(i,t){let e=Ni(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function sp(i,t){let e=Ni(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function rp(i,t){i.uniform1iv(this.addr,t)}function op(i,t){i.uniform2iv(this.addr,t)}function ap(i,t){i.uniform3iv(this.addr,t)}function cp(i,t){i.uniform4iv(this.addr,t)}function lp(i,t){i.uniform1uiv(this.addr,t)}function hp(i,t){i.uniform2uiv(this.addr,t)}function up(i,t){i.uniform3uiv(this.addr,t)}function dp(i,t){i.uniform4uiv(this.addr,t)}function fp(i,t,e){let n=this.cache,s=t.length,r=mr(e,s);ve(n,r)||(i.uniform1iv(this.addr,r),xe(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||tl,r[o])}function pp(i,t,e){let n=this.cache,s=t.length,r=mr(e,s);ve(n,r)||(i.uniform1iv(this.addr,r),xe(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||nl,r[o])}function gp(i,t,e){let n=this.cache,s=t.length,r=mr(e,s);ve(n,r)||(i.uniform1iv(this.addr,r),xe(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||il,r[o])}function mp(i,t,e){let n=this.cache,s=t.length,r=mr(e,s);ve(n,r)||(i.uniform1iv(this.addr,r),xe(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||el,r[o])}function Ap(i){switch(i){case 5126:return Zf;case 35664:return $f;case 35665:return tp;case 35666:return ep;case 35674:return np;case 35675:return ip;case 35676:return sp;case 5124:case 35670:return rp;case 35667:case 35671:return op;case 35668:case 35672:return ap;case 35669:case 35673:return cp;case 5125:return lp;case 36294:return hp;case 36295:return up;case 36296:return dp;case 35678:case 36198:case 36298:case 36306:case 35682:return fp;case 35679:case 36299:case 36307:return pp;case 35680:case 36300:case 36308:case 36293:return gp;case 36289:case 36303:case 36311:case 36292:return mp}}var Ho=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=qf(e.type)}},Qo=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Ap(e.type)}},Yo=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},Wr=/(\w+)(\])?(\[|\.)?/g;function Ac(i,t){i.seq.push(t),i.map[t.id]=t}function vp(i,t,e){let n=i.name,s=n.length;for(Wr.lastIndex=0;;){let r=Wr.exec(n),o=Wr.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Ac(e,l===void 0?new Ho(a,i,t):new Qo(a,i,t));break}else{let d=e.map[a];d===void 0&&(d=new Yo(a),Ac(e,d)),e=d}}}var Ci=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);vp(r,o,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function vc(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var xp=37297,yp=0;function Mp(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var xc=new Ft;function Ep(i){Wt._getMatrix(xc,Wt.workingColorSpace,i);let t=`mat3( ${xc.elements.map(e=>e.toFixed(4))} )`;switch(Wt.getTransfer(i)){case gr:return[t,"LinearTransferOETF"];case ee:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function yc(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Mp(i.getShaderSource(t),o)}else return s}function _p(i,t){let e=Ep(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function wp(i,t){let e;switch(t){case Pl:e="Linear";break;case Rl:e="Reinhard";break;case Ll:e="Cineon";break;case Fl:e="ACESFilmic";break;case Ol:e="AgX";break;case Nl:e="Neutral";break;case Ul:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Ds=new B;function Sp(){Wt.getLuminanceCoefficients(Ds);let i=Ds.x.toFixed(4),t=Ds.y.toFixed(4),e=Ds.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Cp(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ji).join(`
`)}function bp(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Tp(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Ji(i){return i!==""}function Mc(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ec(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Dp=/^[ \t]*#include +<([\w\d./]+)>/gm;function Vo(i){return i.replace(Dp,Ip)}var Bp=new Map;function Ip(i,t){let e=Ot[t];if(e===void 0){let n=Bp.get(t);if(n!==void 0)e=Ot[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Vo(e)}var Pp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function _c(i){return i.replace(Pp,Rp)}function Rp(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function wc(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Lp(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Oc?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===ul?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===fn&&(t="SHADOWMAP_TYPE_VSM"),t}function Fp(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ti:case Di:t="ENVMAP_TYPE_CUBE";break;case pr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Up(i){let t="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===Di&&(t="ENVMAP_MODE_REFRACTION"),t}function Op(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Nc:t="ENVMAP_BLENDING_MULTIPLY";break;case Bl:t="ENVMAP_BLENDING_MIX";break;case Il:t="ENVMAP_BLENDING_ADD";break}return t}function Np(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Gp(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,c=Lp(e),l=Fp(e),u=Up(e),d=Op(e),f=Np(e),p=Cp(e),m=bp(r),v=s.createProgram(),g,h,S=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Ji).join(`
`),g.length>0&&(g+=`
`),h=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Ji).join(`
`),h.length>0&&(h+=`
`)):(g=[wc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ji).join(`
`),h=[wc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Rn?"#define TONE_MAPPING":"",e.toneMapping!==Rn?Ot.tonemapping_pars_fragment:"",e.toneMapping!==Rn?wp("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ot.colorspace_pars_fragment,_p("linearToOutputTexel",e.outputColorSpace),Sp(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ji).join(`
`)),o=Vo(o),o=Mc(o,e),o=Ec(o,e),a=Vo(a),a=Mc(a,e),a=Ec(a,e),o=_c(o),a=_c(a),e.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,g=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,h=["#define varying in",e.glslVersion===Oa?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Oa?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);let w=S+g+o,M=S+h+a,O=vc(s,s.VERTEX_SHADER,w),C=vc(s,s.FRAGMENT_SHADER,M);s.attachShader(v,O),s.attachShader(v,C),e.index0AttributeName!==void 0?s.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function b(T){if(i.debug.checkShaderErrors){let W=s.getProgramInfoLog(v).trim(),z=s.getShaderInfoLog(O).trim(),X=s.getShaderInfoLog(C).trim(),q=!0,Q=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(q=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,O,C);else{let tt=yc(s,O,"vertex"),H=yc(s,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+T.name+`
Material Type: `+T.type+`

Program Info Log: `+W+`
`+tt+`
`+H)}else W!==""?console.warn("THREE.WebGLProgram: Program Info Log:",W):(z===""||X==="")&&(Q=!1);Q&&(T.diagnostics={runnable:q,programLog:W,vertexShader:{log:z,prefix:g},fragmentShader:{log:X,prefix:h}})}s.deleteShader(O),s.deleteShader(C),L=new Ci(s,v),E=Tp(s,v)}let L;this.getUniforms=function(){return L===void 0&&b(this),L};let E;this.getAttributes=function(){return E===void 0&&b(this),E};let y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(v,xp)),y},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=yp++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=O,this.fragmentShader=C,this}var zp=0,Wo=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Xo(t),e.set(t,n)),n}},Xo=class{constructor(t){this.id=zp++,this.code=t,this.usedTimes=0}};function kp(i,t,e,n,s,r,o){let a=new ns,c=new Wo,l=new Set,u=[],d=s.logarithmicDepthBuffer,f=s.vertexTextures,p=s.precision,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(E){return l.add(E),E===0?"uv":`uv${E}`}function g(E,y,T,W,z){let X=W.fog,q=z.geometry,Q=E.isMeshStandardMaterial?W.environment:null,tt=(E.isMeshStandardMaterial?e:t).get(E.envMap||Q),H=tt&&tt.mapping===pr?tt.image.height:null,rt=m[E.type];E.precision!==null&&(p=s.getMaxPrecision(E.precision),p!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",p,"instead."));let dt=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,Mt=dt!==void 0?dt.length:0,Nt=0;q.morphAttributes.position!==void 0&&(Nt=1),q.morphAttributes.normal!==void 0&&(Nt=2),q.morphAttributes.color!==void 0&&(Nt=3);let Kt,Y,$,gt;if(rt){let U=nn[rt];Kt=U.vertexShader,Y=U.fragmentShader}else Kt=E.vertexShader,Y=E.fragmentShader,c.update(E),$=c.getVertexShaderID(E),gt=c.getFragmentShaderID(E);let it=i.getRenderTarget(),St=i.state.buffers.depth.getReversed(),Tt=z.isInstancedMesh===!0,Ut=z.isBatchedMesh===!0,ie=!!E.map,Dt=!!E.matcap,Qt=!!tt,I=!!E.aoMap,pe=!!E.lightMap,Ht=!!E.bumpMap,zt=!!E.normalMap,_t=!!E.displacementMap,Zt=!!E.emissiveMap,Et=!!E.metalnessMap,_=!!E.roughnessMap,A=E.anisotropy>0,F=E.clearcoat>0,j=E.dispersion>0,J=E.iridescence>0,V=E.sheen>0,mt=E.transmission>0,st=A&&!!E.anisotropyMap,ut=F&&!!E.clearcoatMap,Vt=F&&!!E.clearcoatNormalMap,Z=F&&!!E.clearcoatRoughnessMap,ft=J&&!!E.iridescenceMap,wt=J&&!!E.iridescenceThicknessMap,Ct=V&&!!E.sheenColorMap,pt=V&&!!E.sheenRoughnessMap,kt=!!E.specularMap,Rt=!!E.specularColorMap,$t=!!E.specularIntensityMap,D=mt&&!!E.transmissionMap,at=mt&&!!E.thicknessMap,k=!!E.gradientMap,K=!!E.alphaMap,nt=E.alphaTest>0,lt=!!E.alphaHash,Bt=!!E.extensions,le=Rn;E.toneMapped&&(it===null||it.isXRRenderTarget===!0)&&(le=i.toneMapping);let de={shaderID:rt,shaderType:E.type,shaderName:E.name,vertexShader:Kt,fragmentShader:Y,defines:E.defines,customVertexShaderID:$,customFragmentShaderID:gt,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:p,batching:Ut,batchingColor:Ut&&z._colorsTexture!==null,instancing:Tt,instancingColor:Tt&&z.instanceColor!==null,instancingMorph:Tt&&z.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:it===null?i.outputColorSpace:it.isXRRenderTarget===!0?it.texture.colorSpace:Ui,alphaToCoverage:!!E.alphaToCoverage,map:ie,matcap:Dt,envMap:Qt,envMapMode:Qt&&tt.mapping,envMapCubeUVHeight:H,aoMap:I,lightMap:pe,bumpMap:Ht,normalMap:zt,displacementMap:f&&_t,emissiveMap:Zt,normalMapObjectSpace:zt&&E.normalMapType===Ql,normalMapTangentSpace:zt&&E.normalMapType===Hl,metalnessMap:Et,roughnessMap:_,anisotropy:A,anisotropyMap:st,clearcoat:F,clearcoatMap:ut,clearcoatNormalMap:Vt,clearcoatRoughnessMap:Z,dispersion:j,iridescence:J,iridescenceMap:ft,iridescenceThicknessMap:wt,sheen:V,sheenColorMap:Ct,sheenRoughnessMap:pt,specularMap:kt,specularColorMap:Rt,specularIntensityMap:$t,transmission:mt,transmissionMap:D,thicknessMap:at,gradientMap:k,opaque:E.transparent===!1&&E.blending===_i&&E.alphaToCoverage===!1,alphaMap:K,alphaTest:nt,alphaHash:lt,combine:E.combine,mapUv:ie&&v(E.map.channel),aoMapUv:I&&v(E.aoMap.channel),lightMapUv:pe&&v(E.lightMap.channel),bumpMapUv:Ht&&v(E.bumpMap.channel),normalMapUv:zt&&v(E.normalMap.channel),displacementMapUv:_t&&v(E.displacementMap.channel),emissiveMapUv:Zt&&v(E.emissiveMap.channel),metalnessMapUv:Et&&v(E.metalnessMap.channel),roughnessMapUv:_&&v(E.roughnessMap.channel),anisotropyMapUv:st&&v(E.anisotropyMap.channel),clearcoatMapUv:ut&&v(E.clearcoatMap.channel),clearcoatNormalMapUv:Vt&&v(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Z&&v(E.clearcoatRoughnessMap.channel),iridescenceMapUv:ft&&v(E.iridescenceMap.channel),iridescenceThicknessMapUv:wt&&v(E.iridescenceThicknessMap.channel),sheenColorMapUv:Ct&&v(E.sheenColorMap.channel),sheenRoughnessMapUv:pt&&v(E.sheenRoughnessMap.channel),specularMapUv:kt&&v(E.specularMap.channel),specularColorMapUv:Rt&&v(E.specularColorMap.channel),specularIntensityMapUv:$t&&v(E.specularIntensityMap.channel),transmissionMapUv:D&&v(E.transmissionMap.channel),thicknessMapUv:at&&v(E.thicknessMap.channel),alphaMapUv:K&&v(E.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(zt||A),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!q.attributes.uv&&(ie||K),fog:!!X,useFog:E.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:St,skinning:z.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:Mt,morphTextureStride:Nt,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:i.shadowMap.enabled&&T.length>0,shadowMapType:i.shadowMap.type,toneMapping:le,decodeVideoTexture:ie&&E.map.isVideoTexture===!0&&Wt.getTransfer(E.map.colorSpace)===ee,decodeVideoTextureEmissive:Zt&&E.emissiveMap.isVideoTexture===!0&&Wt.getTransfer(E.emissiveMap.colorSpace)===ee,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Ze,flipSided:E.side===Pe,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Bt&&E.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Bt&&E.extensions.multiDraw===!0||Ut)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return de.vertexUv1s=l.has(1),de.vertexUv2s=l.has(2),de.vertexUv3s=l.has(3),l.clear(),de}function h(E){let y=[];if(E.shaderID?y.push(E.shaderID):(y.push(E.customVertexShaderID),y.push(E.customFragmentShaderID)),E.defines!==void 0)for(let T in E.defines)y.push(T),y.push(E.defines[T]);return E.isRawShaderMaterial===!1&&(S(y,E),w(y,E),y.push(i.outputColorSpace)),y.push(E.customProgramCacheKey),y.join()}function S(E,y){E.push(y.precision),E.push(y.outputColorSpace),E.push(y.envMapMode),E.push(y.envMapCubeUVHeight),E.push(y.mapUv),E.push(y.alphaMapUv),E.push(y.lightMapUv),E.push(y.aoMapUv),E.push(y.bumpMapUv),E.push(y.normalMapUv),E.push(y.displacementMapUv),E.push(y.emissiveMapUv),E.push(y.metalnessMapUv),E.push(y.roughnessMapUv),E.push(y.anisotropyMapUv),E.push(y.clearcoatMapUv),E.push(y.clearcoatNormalMapUv),E.push(y.clearcoatRoughnessMapUv),E.push(y.iridescenceMapUv),E.push(y.iridescenceThicknessMapUv),E.push(y.sheenColorMapUv),E.push(y.sheenRoughnessMapUv),E.push(y.specularMapUv),E.push(y.specularColorMapUv),E.push(y.specularIntensityMapUv),E.push(y.transmissionMapUv),E.push(y.thicknessMapUv),E.push(y.combine),E.push(y.fogExp2),E.push(y.sizeAttenuation),E.push(y.morphTargetsCount),E.push(y.morphAttributeCount),E.push(y.numDirLights),E.push(y.numPointLights),E.push(y.numSpotLights),E.push(y.numSpotLightMaps),E.push(y.numHemiLights),E.push(y.numRectAreaLights),E.push(y.numDirLightShadows),E.push(y.numPointLightShadows),E.push(y.numSpotLightShadows),E.push(y.numSpotLightShadowsWithMaps),E.push(y.numLightProbes),E.push(y.shadowMapType),E.push(y.toneMapping),E.push(y.numClippingPlanes),E.push(y.numClipIntersection),E.push(y.depthPacking)}function w(E,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),y.batchingColor&&a.enable(21),E.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reverseDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),E.push(a.mask)}function M(E){let y=m[E.type],T;if(y){let W=nn[y];T=Bh.clone(W.uniforms)}else T=E.uniforms;return T}function O(E,y){let T;for(let W=0,z=u.length;W<z;W++){let X=u[W];if(X.cacheKey===y){T=X,++T.usedTimes;break}}return T===void 0&&(T=new Gp(i,y,E,r),u.push(T)),T}function C(E){if(--E.usedTimes===0){let y=u.indexOf(E);u[y]=u[u.length-1],u.pop(),E.destroy()}}function b(E){c.remove(E)}function L(){c.dispose()}return{getParameters:g,getProgramCacheKey:h,getUniforms:M,acquireProgram:O,releaseProgram:C,releaseShaderCache:b,programs:u,dispose:L}}function Hp(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Qp(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Sc(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Cc(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(d,f,p,m,v,g){let h=i[t];return h===void 0?(h={id:d.id,object:d,geometry:f,material:p,groupOrder:m,renderOrder:d.renderOrder,z:v,group:g},i[t]=h):(h.id=d.id,h.object=d,h.geometry=f,h.material=p,h.groupOrder=m,h.renderOrder=d.renderOrder,h.z=v,h.group=g),t++,h}function a(d,f,p,m,v,g){let h=o(d,f,p,m,v,g);p.transmission>0?n.push(h):p.transparent===!0?s.push(h):e.push(h)}function c(d,f,p,m,v,g){let h=o(d,f,p,m,v,g);p.transmission>0?n.unshift(h):p.transparent===!0?s.unshift(h):e.unshift(h)}function l(d,f){e.length>1&&e.sort(d||Qp),n.length>1&&n.sort(f||Sc),s.length>1&&s.sort(f||Sc)}function u(){for(let d=t,f=i.length;d<f;d++){let p=i[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:u,sort:l}}function Yp(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new Cc,i.set(n,[o])):s>=r.length?(o=new Cc,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function Vp(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new B,color:new Yt};break;case"SpotLight":e={position:new B,direction:new B,color:new Yt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new B,color:new Yt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new B,skyColor:new Yt,groundColor:new Yt};break;case"RectAreaLight":e={color:new Yt,position:new B,halfWidth:new B,halfHeight:new B};break}return i[t.id]=e,e}}}function Wp(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new bt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new bt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new bt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var Xp=0;function Kp(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function jp(i){let t=new Vp,e=Wp(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new B);let s=new B,r=new qt,o=new qt;function a(l){let u=0,d=0,f=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let p=0,m=0,v=0,g=0,h=0,S=0,w=0,M=0,O=0,C=0,b=0;l.sort(Kp);for(let E=0,y=l.length;E<y;E++){let T=l[E],W=T.color,z=T.intensity,X=T.distance,q=T.shadow&&T.shadow.map?T.shadow.map.texture:null;if(T.isAmbientLight)u+=W.r*z,d+=W.g*z,f+=W.b*z;else if(T.isLightProbe){for(let Q=0;Q<9;Q++)n.probe[Q].addScaledVector(T.sh.coefficients[Q],z);b++}else if(T.isDirectionalLight){let Q=t.get(T);if(Q.color.copy(T.color).multiplyScalar(T.intensity),T.castShadow){let tt=T.shadow,H=e.get(T);H.shadowIntensity=tt.intensity,H.shadowBias=tt.bias,H.shadowNormalBias=tt.normalBias,H.shadowRadius=tt.radius,H.shadowMapSize=tt.mapSize,n.directionalShadow[p]=H,n.directionalShadowMap[p]=q,n.directionalShadowMatrix[p]=T.shadow.matrix,S++}n.directional[p]=Q,p++}else if(T.isSpotLight){let Q=t.get(T);Q.position.setFromMatrixPosition(T.matrixWorld),Q.color.copy(W).multiplyScalar(z),Q.distance=X,Q.coneCos=Math.cos(T.angle),Q.penumbraCos=Math.cos(T.angle*(1-T.penumbra)),Q.decay=T.decay,n.spot[v]=Q;let tt=T.shadow;if(T.map&&(n.spotLightMap[O]=T.map,O++,tt.updateMatrices(T),T.castShadow&&C++),n.spotLightMatrix[v]=tt.matrix,T.castShadow){let H=e.get(T);H.shadowIntensity=tt.intensity,H.shadowBias=tt.bias,H.shadowNormalBias=tt.normalBias,H.shadowRadius=tt.radius,H.shadowMapSize=tt.mapSize,n.spotShadow[v]=H,n.spotShadowMap[v]=q,M++}v++}else if(T.isRectAreaLight){let Q=t.get(T);Q.color.copy(W).multiplyScalar(z),Q.halfWidth.set(T.width*.5,0,0),Q.halfHeight.set(0,T.height*.5,0),n.rectArea[g]=Q,g++}else if(T.isPointLight){let Q=t.get(T);if(Q.color.copy(T.color).multiplyScalar(T.intensity),Q.distance=T.distance,Q.decay=T.decay,T.castShadow){let tt=T.shadow,H=e.get(T);H.shadowIntensity=tt.intensity,H.shadowBias=tt.bias,H.shadowNormalBias=tt.normalBias,H.shadowRadius=tt.radius,H.shadowMapSize=tt.mapSize,H.shadowCameraNear=tt.camera.near,H.shadowCameraFar=tt.camera.far,n.pointShadow[m]=H,n.pointShadowMap[m]=q,n.pointShadowMatrix[m]=T.shadow.matrix,w++}n.point[m]=Q,m++}else if(T.isHemisphereLight){let Q=t.get(T);Q.skyColor.copy(T.color).multiplyScalar(z),Q.groundColor.copy(T.groundColor).multiplyScalar(z),n.hemi[h]=Q,h++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ct.LTC_FLOAT_1,n.rectAreaLTC2=ct.LTC_FLOAT_2):(n.rectAreaLTC1=ct.LTC_HALF_1,n.rectAreaLTC2=ct.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=f;let L=n.hash;(L.directionalLength!==p||L.pointLength!==m||L.spotLength!==v||L.rectAreaLength!==g||L.hemiLength!==h||L.numDirectionalShadows!==S||L.numPointShadows!==w||L.numSpotShadows!==M||L.numSpotMaps!==O||L.numLightProbes!==b)&&(n.directional.length=p,n.spot.length=v,n.rectArea.length=g,n.point.length=m,n.hemi.length=h,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.pointShadow.length=w,n.pointShadowMap.length=w,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=S,n.pointShadowMatrix.length=w,n.spotLightMatrix.length=M+O-C,n.spotLightMap.length=O,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=b,L.directionalLength=p,L.pointLength=m,L.spotLength=v,L.rectAreaLength=g,L.hemiLength=h,L.numDirectionalShadows=S,L.numPointShadows=w,L.numSpotShadows=M,L.numSpotMaps=O,L.numLightProbes=b,n.version=Xp++)}function c(l,u){let d=0,f=0,p=0,m=0,v=0,g=u.matrixWorldInverse;for(let h=0,S=l.length;h<S;h++){let w=l[h];if(w.isDirectionalLight){let M=n.directional[d];M.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(g),d++}else if(w.isSpotLight){let M=n.spot[p];M.position.setFromMatrixPosition(w.matrixWorld),M.position.applyMatrix4(g),M.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(g),p++}else if(w.isRectAreaLight){let M=n.rectArea[m];M.position.setFromMatrixPosition(w.matrixWorld),M.position.applyMatrix4(g),o.identity(),r.copy(w.matrixWorld),r.premultiply(g),o.extractRotation(r),M.halfWidth.set(w.width*.5,0,0),M.halfHeight.set(0,w.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),m++}else if(w.isPointLight){let M=n.point[f];M.position.setFromMatrixPosition(w.matrixWorld),M.position.applyMatrix4(g),f++}else if(w.isHemisphereLight){let M=n.hemi[v];M.direction.setFromMatrixPosition(w.matrixWorld),M.direction.transformDirection(g),v++}}}return{setup:a,setupView:c,state:n}}function bc(i){let t=new jp(i),e=[],n=[];function s(u){l.camera=u,e.length=0,n.length=0}function r(u){e.push(u)}function o(u){n.push(u)}function a(){t.setup(e)}function c(u){t.setupView(e,u)}let l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function Jp(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new bc(i),t.set(s,[a])):r>=o.length?(a=new bc(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var Ko=class extends qn{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=zl,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},jo=class extends qn{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},qp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Zp=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function $p(i,t,e){let n=new ss,s=new bt,r=new bt,o=new ue,a=new Ko({depthPacking:kl}),c=new jo,l={},u=e.maxTextureSize,d={[Ln]:Pe,[Pe]:Ln,[Ze]:Ze},f=new Ve({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new bt},radius:{value:4}},vertexShader:qp,fragmentShader:Zp}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let m=new He;m.setAttribute("position",new Ge(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new me(m,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Oc;let h=this.type;this.render=function(C,b,L){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||C.length===0)return;let E=i.getRenderTarget(),y=i.getActiveCubeFace(),T=i.getActiveMipmapLevel(),W=i.state;W.setBlending(Pn),W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);let z=h!==fn&&this.type===fn,X=h===fn&&this.type!==fn;for(let q=0,Q=C.length;q<Q;q++){let tt=C[q],H=tt.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",tt,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);let rt=H.getFrameExtents();if(s.multiply(rt),r.copy(H.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/rt.x),s.x=r.x*rt.x,H.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/rt.y),s.y=r.y*rt.y,H.mapSize.y=r.y)),H.map===null||z===!0||X===!0){let Mt=this.type!==fn?{minFilter:Ne,magFilter:Ne}:{};H.map!==null&&H.map.dispose(),H.map=new xn(s.x,s.y,Mt),H.map.texture.name=tt.name+".shadowMap",H.camera.updateProjectionMatrix()}i.setRenderTarget(H.map),i.clear();let dt=H.getViewportCount();for(let Mt=0;Mt<dt;Mt++){let Nt=H.getViewport(Mt);o.set(r.x*Nt.x,r.y*Nt.y,r.x*Nt.z,r.y*Nt.w),W.viewport(o),H.updateMatrices(tt,Mt),n=H.getFrustum(),M(b,L,H.camera,tt,this.type)}H.isPointLightShadow!==!0&&this.type===fn&&S(H,L),H.needsUpdate=!1}h=this.type,g.needsUpdate=!1,i.setRenderTarget(E,y,T)};function S(C,b){let L=t.update(v);f.defines.VSM_SAMPLES!==C.blurSamples&&(f.defines.VSM_SAMPLES=C.blurSamples,p.defines.VSM_SAMPLES=C.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new xn(s.x,s.y)),f.uniforms.shadow_pass.value=C.map.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,i.setRenderTarget(C.mapPass),i.clear(),i.renderBufferDirect(b,null,L,f,v,null),p.uniforms.shadow_pass.value=C.mapPass.texture,p.uniforms.resolution.value=C.mapSize,p.uniforms.radius.value=C.radius,i.setRenderTarget(C.map),i.clear(),i.renderBufferDirect(b,null,L,p,v,null)}function w(C,b,L,E){let y=null,T=L.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(T!==void 0)y=T;else if(y=L.isPointLight===!0?c:a,i.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){let W=y.uuid,z=b.uuid,X=l[W];X===void 0&&(X={},l[W]=X);let q=X[z];q===void 0&&(q=y.clone(),X[z]=q,b.addEventListener("dispose",O)),y=q}if(y.visible=b.visible,y.wireframe=b.wireframe,E===fn?y.side=b.shadowSide!==null?b.shadowSide:b.side:y.side=b.shadowSide!==null?b.shadowSide:d[b.side],y.alphaMap=b.alphaMap,y.alphaTest=b.alphaTest,y.map=b.map,y.clipShadows=b.clipShadows,y.clippingPlanes=b.clippingPlanes,y.clipIntersection=b.clipIntersection,y.displacementMap=b.displacementMap,y.displacementScale=b.displacementScale,y.displacementBias=b.displacementBias,y.wireframeLinewidth=b.wireframeLinewidth,y.linewidth=b.linewidth,L.isPointLight===!0&&y.isMeshDistanceMaterial===!0){let W=i.properties.get(y);W.light=L}return y}function M(C,b,L,E,y){if(C.visible===!1)return;if(C.layers.test(b.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&y===fn)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,C.matrixWorld);let z=t.update(C),X=C.material;if(Array.isArray(X)){let q=z.groups;for(let Q=0,tt=q.length;Q<tt;Q++){let H=q[Q],rt=X[H.materialIndex];if(rt&&rt.visible){let dt=w(C,rt,E,y);C.onBeforeShadow(i,C,b,L,z,dt,H),i.renderBufferDirect(L,null,z,dt,C,H),C.onAfterShadow(i,C,b,L,z,dt,H)}}}else if(X.visible){let q=w(C,X,E,y);C.onBeforeShadow(i,C,b,L,z,q,null),i.renderBufferDirect(L,null,z,q,C,null),C.onAfterShadow(i,C,b,L,z,q,null)}}let W=C.children;for(let z=0,X=W.length;z<X;z++)M(W[z],b,L,E,y)}function O(C){C.target.removeEventListener("dispose",O);for(let L in l){let E=l[L],y=C.target.uuid;y in E&&(E[y].dispose(),delete E[y])}}}var tg={[Zr]:$r,[to]:io,[eo]:so,[bi]:no,[$r]:Zr,[io]:to,[so]:eo,[no]:bi};function eg(i,t){function e(){let D=!1,at=new ue,k=null,K=new ue(0,0,0,0);return{setMask:function(nt){k!==nt&&!D&&(i.colorMask(nt,nt,nt,nt),k=nt)},setLocked:function(nt){D=nt},setClear:function(nt,lt,Bt,le,de){de===!0&&(nt*=le,lt*=le,Bt*=le),at.set(nt,lt,Bt,le),K.equals(at)===!1&&(i.clearColor(nt,lt,Bt,le),K.copy(at))},reset:function(){D=!1,k=null,K.set(-1,0,0,0)}}}function n(){let D=!1,at=!1,k=null,K=null,nt=null;return{setReversed:function(lt){if(at!==lt){let Bt=t.get("EXT_clip_control");at?Bt.clipControlEXT(Bt.LOWER_LEFT_EXT,Bt.ZERO_TO_ONE_EXT):Bt.clipControlEXT(Bt.LOWER_LEFT_EXT,Bt.NEGATIVE_ONE_TO_ONE_EXT);let le=nt;nt=null,this.setClear(le)}at=lt},getReversed:function(){return at},setTest:function(lt){lt?it(i.DEPTH_TEST):St(i.DEPTH_TEST)},setMask:function(lt){k!==lt&&!D&&(i.depthMask(lt),k=lt)},setFunc:function(lt){if(at&&(lt=tg[lt]),K!==lt){switch(lt){case Zr:i.depthFunc(i.NEVER);break;case $r:i.depthFunc(i.ALWAYS);break;case to:i.depthFunc(i.LESS);break;case bi:i.depthFunc(i.LEQUAL);break;case eo:i.depthFunc(i.EQUAL);break;case no:i.depthFunc(i.GEQUAL);break;case io:i.depthFunc(i.GREATER);break;case so:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}K=lt}},setLocked:function(lt){D=lt},setClear:function(lt){nt!==lt&&(at&&(lt=1-lt),i.clearDepth(lt),nt=lt)},reset:function(){D=!1,k=null,K=null,nt=null,at=!1}}}function s(){let D=!1,at=null,k=null,K=null,nt=null,lt=null,Bt=null,le=null,de=null;return{setTest:function(U){D||(U?it(i.STENCIL_TEST):St(i.STENCIL_TEST))},setMask:function(U){at!==U&&!D&&(i.stencilMask(U),at=U)},setFunc:function(U,ot,It){(k!==U||K!==ot||nt!==It)&&(i.stencilFunc(U,ot,It),k=U,K=ot,nt=It)},setOp:function(U,ot,It){(lt!==U||Bt!==ot||le!==It)&&(i.stencilOp(U,ot,It),lt=U,Bt=ot,le=It)},setLocked:function(U){D=U},setClear:function(U){de!==U&&(i.clearStencil(U),de=U)},reset:function(){D=!1,at=null,k=null,K=null,nt=null,lt=null,Bt=null,le=null,de=null}}}let r=new e,o=new n,a=new s,c=new WeakMap,l=new WeakMap,u={},d={},f=new WeakMap,p=[],m=null,v=!1,g=null,h=null,S=null,w=null,M=null,O=null,C=null,b=new Yt(0,0,0),L=0,E=!1,y=null,T=null,W=null,z=null,X=null,q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Q=!1,tt=0,H=i.getParameter(i.VERSION);H.indexOf("WebGL")!==-1?(tt=parseFloat(/^WebGL (\d)/.exec(H)[1]),Q=tt>=1):H.indexOf("OpenGL ES")!==-1&&(tt=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),Q=tt>=2);let rt=null,dt={},Mt=i.getParameter(i.SCISSOR_BOX),Nt=i.getParameter(i.VIEWPORT),Kt=new ue().fromArray(Mt),Y=new ue().fromArray(Nt);function $(D,at,k,K){let nt=new Uint8Array(4),lt=i.createTexture();i.bindTexture(D,lt),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Bt=0;Bt<k;Bt++)D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY?i.texImage3D(at,0,i.RGBA,1,1,K,0,i.RGBA,i.UNSIGNED_BYTE,nt):i.texImage2D(at+Bt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,nt);return lt}let gt={};gt[i.TEXTURE_2D]=$(i.TEXTURE_2D,i.TEXTURE_2D,1),gt[i.TEXTURE_CUBE_MAP]=$(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),gt[i.TEXTURE_2D_ARRAY]=$(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),gt[i.TEXTURE_3D]=$(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),it(i.DEPTH_TEST),o.setFunc(bi),Ht(!1),zt(Ta),it(i.CULL_FACE),I(Pn);function it(D){u[D]!==!0&&(i.enable(D),u[D]=!0)}function St(D){u[D]!==!1&&(i.disable(D),u[D]=!1)}function Tt(D,at){return d[D]!==at?(i.bindFramebuffer(D,at),d[D]=at,D===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=at),D===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=at),!0):!1}function Ut(D,at){let k=p,K=!1;if(D){k=f.get(at),k===void 0&&(k=[],f.set(at,k));let nt=D.textures;if(k.length!==nt.length||k[0]!==i.COLOR_ATTACHMENT0){for(let lt=0,Bt=nt.length;lt<Bt;lt++)k[lt]=i.COLOR_ATTACHMENT0+lt;k.length=nt.length,K=!0}}else k[0]!==i.BACK&&(k[0]=i.BACK,K=!0);K&&i.drawBuffers(k)}function ie(D){return m!==D?(i.useProgram(D),m=D,!0):!1}let Dt={[Yn]:i.FUNC_ADD,[fl]:i.FUNC_SUBTRACT,[pl]:i.FUNC_REVERSE_SUBTRACT};Dt[gl]=i.MIN,Dt[ml]=i.MAX;let Qt={[Al]:i.ZERO,[vl]:i.ONE,[xl]:i.SRC_COLOR,[Jr]:i.SRC_ALPHA,[Sl]:i.SRC_ALPHA_SATURATE,[_l]:i.DST_COLOR,[Ml]:i.DST_ALPHA,[yl]:i.ONE_MINUS_SRC_COLOR,[qr]:i.ONE_MINUS_SRC_ALPHA,[wl]:i.ONE_MINUS_DST_COLOR,[El]:i.ONE_MINUS_DST_ALPHA,[Cl]:i.CONSTANT_COLOR,[bl]:i.ONE_MINUS_CONSTANT_COLOR,[Tl]:i.CONSTANT_ALPHA,[Dl]:i.ONE_MINUS_CONSTANT_ALPHA};function I(D,at,k,K,nt,lt,Bt,le,de,U){if(D===Pn){v===!0&&(St(i.BLEND),v=!1);return}if(v===!1&&(it(i.BLEND),v=!0),D!==dl){if(D!==g||U!==E){if((h!==Yn||M!==Yn)&&(i.blendEquation(i.FUNC_ADD),h=Yn,M=Yn),U)switch(D){case _i:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Da:i.blendFunc(i.ONE,i.ONE);break;case Ba:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ia:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case _i:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Da:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Ba:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ia:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}S=null,w=null,O=null,C=null,b.set(0,0,0),L=0,g=D,E=U}return}nt=nt||at,lt=lt||k,Bt=Bt||K,(at!==h||nt!==M)&&(i.blendEquationSeparate(Dt[at],Dt[nt]),h=at,M=nt),(k!==S||K!==w||lt!==O||Bt!==C)&&(i.blendFuncSeparate(Qt[k],Qt[K],Qt[lt],Qt[Bt]),S=k,w=K,O=lt,C=Bt),(le.equals(b)===!1||de!==L)&&(i.blendColor(le.r,le.g,le.b,de),b.copy(le),L=de),g=D,E=!1}function pe(D,at){D.side===Ze?St(i.CULL_FACE):it(i.CULL_FACE);let k=D.side===Pe;at&&(k=!k),Ht(k),D.blending===_i&&D.transparent===!1?I(Pn):I(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),o.setFunc(D.depthFunc),o.setTest(D.depthTest),o.setMask(D.depthWrite),r.setMask(D.colorWrite);let K=D.stencilWrite;a.setTest(K),K&&(a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),Zt(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?it(i.SAMPLE_ALPHA_TO_COVERAGE):St(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ht(D){y!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),y=D)}function zt(D){D!==ll?(it(i.CULL_FACE),D!==T&&(D===Ta?i.cullFace(i.BACK):D===hl?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):St(i.CULL_FACE),T=D}function _t(D){D!==W&&(Q&&i.lineWidth(D),W=D)}function Zt(D,at,k){D?(it(i.POLYGON_OFFSET_FILL),(z!==at||X!==k)&&(i.polygonOffset(at,k),z=at,X=k)):St(i.POLYGON_OFFSET_FILL)}function Et(D){D?it(i.SCISSOR_TEST):St(i.SCISSOR_TEST)}function _(D){D===void 0&&(D=i.TEXTURE0+q-1),rt!==D&&(i.activeTexture(D),rt=D)}function A(D,at,k){k===void 0&&(rt===null?k=i.TEXTURE0+q-1:k=rt);let K=dt[k];K===void 0&&(K={type:void 0,texture:void 0},dt[k]=K),(K.type!==D||K.texture!==at)&&(rt!==k&&(i.activeTexture(k),rt=k),i.bindTexture(D,at||gt[D]),K.type=D,K.texture=at)}function F(){let D=dt[rt];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function j(){try{i.compressedTexImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function J(){try{i.compressedTexImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function V(){try{i.texSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function mt(){try{i.texSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function st(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ut(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Vt(){try{i.texStorage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Z(){try{i.texStorage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ft(){try{i.texImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function wt(){try{i.texImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ct(D){Kt.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),Kt.copy(D))}function pt(D){Y.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),Y.copy(D))}function kt(D,at){let k=l.get(at);k===void 0&&(k=new WeakMap,l.set(at,k));let K=k.get(D);K===void 0&&(K=i.getUniformBlockIndex(at,D.name),k.set(D,K))}function Rt(D,at){let K=l.get(at).get(D);c.get(at)!==K&&(i.uniformBlockBinding(at,K,D.__bindingPointIndex),c.set(at,K))}function $t(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},rt=null,dt={},d={},f=new WeakMap,p=[],m=null,v=!1,g=null,h=null,S=null,w=null,M=null,O=null,C=null,b=new Yt(0,0,0),L=0,E=!1,y=null,T=null,W=null,z=null,X=null,Kt.set(0,0,i.canvas.width,i.canvas.height),Y.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:it,disable:St,bindFramebuffer:Tt,drawBuffers:Ut,useProgram:ie,setBlending:I,setMaterial:pe,setFlipSided:Ht,setCullFace:zt,setLineWidth:_t,setPolygonOffset:Zt,setScissorTest:Et,activeTexture:_,bindTexture:A,unbindTexture:F,compressedTexImage2D:j,compressedTexImage3D:J,texImage2D:ft,texImage3D:wt,updateUBOMapping:kt,uniformBlockBinding:Rt,texStorage2D:Vt,texStorage3D:Z,texSubImage2D:V,texSubImage3D:mt,compressedTexSubImage2D:st,compressedTexSubImage3D:ut,scissor:Ct,viewport:pt,reset:$t}}function Tc(i,t,e,n){let s=ng(n);switch(e){case Qc:return i*t;case Vc:return i*t;case Wc:return i*t*2;case Aa:return i*t/s.components*s.byteLength;case va:return i*t/s.components*s.byteLength;case Xc:return i*t*2/s.components*s.byteLength;case xa:return i*t*2/s.components*s.byteLength;case Yc:return i*t*3/s.components*s.byteLength;case $e:return i*t*4/s.components*s.byteLength;case ya:return i*t*4/s.components*s.byteLength;case Ls:case Fs:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Us:case Os:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ho:case fo:return Math.max(i,16)*Math.max(t,8)/4;case lo:case uo:return Math.max(i,8)*Math.max(t,8)/2;case po:case go:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case mo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ao:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case vo:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case xo:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case yo:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Mo:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Eo:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case _o:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case wo:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case So:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Co:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case bo:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case To:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Do:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Bo:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Ns:case Io:case Po:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Kc:case Ro:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Lo:case Fo:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function ng(i){switch(i){case An:case zc:return{byteLength:1,components:1};case ts:case kc:case as:return{byteLength:2,components:1};case ga:case ma:return{byteLength:2,components:4};case jn:case pa:case rn:return{byteLength:4,components:1};case Hc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function ig(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new bt,u=new WeakMap,d,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(_,A){return p?new OffscreenCanvas(_,A):ks("canvas")}function v(_,A,F){let j=1,J=Et(_);if((J.width>F||J.height>F)&&(j=F/Math.max(J.width,J.height)),j<1)if(typeof HTMLImageElement<"u"&&_ instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&_ instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&_ instanceof ImageBitmap||typeof VideoFrame<"u"&&_ instanceof VideoFrame){let V=Math.floor(j*J.width),mt=Math.floor(j*J.height);d===void 0&&(d=m(V,mt));let st=A?m(V,mt):d;return st.width=V,st.height=mt,st.getContext("2d").drawImage(_,0,0,V,mt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+V+"x"+mt+")."),st}else return"data"in _&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),_;return _}function g(_){return _.generateMipmaps}function h(_){i.generateMipmap(_)}function S(_){return _.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:_.isWebGL3DRenderTarget?i.TEXTURE_3D:_.isWebGLArrayRenderTarget||_.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function w(_,A,F,j,J=!1){if(_!==null){if(i[_]!==void 0)return i[_];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+_+"'")}let V=A;if(A===i.RED&&(F===i.FLOAT&&(V=i.R32F),F===i.HALF_FLOAT&&(V=i.R16F),F===i.UNSIGNED_BYTE&&(V=i.R8)),A===i.RED_INTEGER&&(F===i.UNSIGNED_BYTE&&(V=i.R8UI),F===i.UNSIGNED_SHORT&&(V=i.R16UI),F===i.UNSIGNED_INT&&(V=i.R32UI),F===i.BYTE&&(V=i.R8I),F===i.SHORT&&(V=i.R16I),F===i.INT&&(V=i.R32I)),A===i.RG&&(F===i.FLOAT&&(V=i.RG32F),F===i.HALF_FLOAT&&(V=i.RG16F),F===i.UNSIGNED_BYTE&&(V=i.RG8)),A===i.RG_INTEGER&&(F===i.UNSIGNED_BYTE&&(V=i.RG8UI),F===i.UNSIGNED_SHORT&&(V=i.RG16UI),F===i.UNSIGNED_INT&&(V=i.RG32UI),F===i.BYTE&&(V=i.RG8I),F===i.SHORT&&(V=i.RG16I),F===i.INT&&(V=i.RG32I)),A===i.RGB_INTEGER&&(F===i.UNSIGNED_BYTE&&(V=i.RGB8UI),F===i.UNSIGNED_SHORT&&(V=i.RGB16UI),F===i.UNSIGNED_INT&&(V=i.RGB32UI),F===i.BYTE&&(V=i.RGB8I),F===i.SHORT&&(V=i.RGB16I),F===i.INT&&(V=i.RGB32I)),A===i.RGBA_INTEGER&&(F===i.UNSIGNED_BYTE&&(V=i.RGBA8UI),F===i.UNSIGNED_SHORT&&(V=i.RGBA16UI),F===i.UNSIGNED_INT&&(V=i.RGBA32UI),F===i.BYTE&&(V=i.RGBA8I),F===i.SHORT&&(V=i.RGBA16I),F===i.INT&&(V=i.RGBA32I)),A===i.RGB&&F===i.UNSIGNED_INT_5_9_9_9_REV&&(V=i.RGB9_E5),A===i.RGBA){let mt=J?gr:Wt.getTransfer(j);F===i.FLOAT&&(V=i.RGBA32F),F===i.HALF_FLOAT&&(V=i.RGBA16F),F===i.UNSIGNED_BYTE&&(V=mt===ee?i.SRGB8_ALPHA8:i.RGBA8),F===i.UNSIGNED_SHORT_4_4_4_4&&(V=i.RGBA4),F===i.UNSIGNED_SHORT_5_5_5_1&&(V=i.RGB5_A1)}return(V===i.R16F||V===i.R32F||V===i.RG16F||V===i.RG32F||V===i.RGBA16F||V===i.RGBA32F)&&t.get("EXT_color_buffer_float"),V}function M(_,A){let F;return _?A===null||A===jn||A===Bi?F=i.DEPTH24_STENCIL8:A===rn?F=i.DEPTH32F_STENCIL8:A===ts&&(F=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===jn||A===Bi?F=i.DEPTH_COMPONENT24:A===rn?F=i.DEPTH_COMPONENT32F:A===ts&&(F=i.DEPTH_COMPONENT16),F}function O(_,A){return g(_)===!0||_.isFramebufferTexture&&_.minFilter!==Ne&&_.minFilter!==sn?Math.log2(Math.max(A.width,A.height))+1:_.mipmaps!==void 0&&_.mipmaps.length>0?_.mipmaps.length:_.isCompressedTexture&&Array.isArray(_.image)?A.mipmaps.length:1}function C(_){let A=_.target;A.removeEventListener("dispose",C),L(A),A.isVideoTexture&&u.delete(A)}function b(_){let A=_.target;A.removeEventListener("dispose",b),y(A)}function L(_){let A=n.get(_);if(A.__webglInit===void 0)return;let F=_.source,j=f.get(F);if(j){let J=j[A.__cacheKey];J.usedTimes--,J.usedTimes===0&&E(_),Object.keys(j).length===0&&f.delete(F)}n.remove(_)}function E(_){let A=n.get(_);i.deleteTexture(A.__webglTexture);let F=_.source,j=f.get(F);delete j[A.__cacheKey],o.memory.textures--}function y(_){let A=n.get(_);if(_.depthTexture&&(_.depthTexture.dispose(),n.remove(_.depthTexture)),_.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(A.__webglFramebuffer[j]))for(let J=0;J<A.__webglFramebuffer[j].length;J++)i.deleteFramebuffer(A.__webglFramebuffer[j][J]);else i.deleteFramebuffer(A.__webglFramebuffer[j]);A.__webglDepthbuffer&&i.deleteRenderbuffer(A.__webglDepthbuffer[j])}else{if(Array.isArray(A.__webglFramebuffer))for(let j=0;j<A.__webglFramebuffer.length;j++)i.deleteFramebuffer(A.__webglFramebuffer[j]);else i.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&i.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&i.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let j=0;j<A.__webglColorRenderbuffer.length;j++)A.__webglColorRenderbuffer[j]&&i.deleteRenderbuffer(A.__webglColorRenderbuffer[j]);A.__webglDepthRenderbuffer&&i.deleteRenderbuffer(A.__webglDepthRenderbuffer)}let F=_.textures;for(let j=0,J=F.length;j<J;j++){let V=n.get(F[j]);V.__webglTexture&&(i.deleteTexture(V.__webglTexture),o.memory.textures--),n.remove(F[j])}n.remove(_)}let T=0;function W(){T=0}function z(){let _=T;return _>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+_+" texture units while this GPU supports only "+s.maxTextures),T+=1,_}function X(_){let A=[];return A.push(_.wrapS),A.push(_.wrapT),A.push(_.wrapR||0),A.push(_.magFilter),A.push(_.minFilter),A.push(_.anisotropy),A.push(_.internalFormat),A.push(_.format),A.push(_.type),A.push(_.generateMipmaps),A.push(_.premultiplyAlpha),A.push(_.flipY),A.push(_.unpackAlignment),A.push(_.colorSpace),A.join()}function q(_,A){let F=n.get(_);if(_.isVideoTexture&&_t(_),_.isRenderTargetTexture===!1&&_.version>0&&F.__version!==_.version){let j=_.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(F,_,A);return}}e.bindTexture(i.TEXTURE_2D,F.__webglTexture,i.TEXTURE0+A)}function Q(_,A){let F=n.get(_);if(_.version>0&&F.__version!==_.version){Y(F,_,A);return}e.bindTexture(i.TEXTURE_2D_ARRAY,F.__webglTexture,i.TEXTURE0+A)}function tt(_,A){let F=n.get(_);if(_.version>0&&F.__version!==_.version){Y(F,_,A);return}e.bindTexture(i.TEXTURE_3D,F.__webglTexture,i.TEXTURE0+A)}function H(_,A){let F=n.get(_);if(_.version>0&&F.__version!==_.version){$(F,_,A);return}e.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+A)}let rt={[ao]:i.REPEAT,[Xn]:i.CLAMP_TO_EDGE,[co]:i.MIRRORED_REPEAT},dt={[Ne]:i.NEAREST,[Gl]:i.NEAREST_MIPMAP_NEAREST,[ls]:i.NEAREST_MIPMAP_LINEAR,[sn]:i.LINEAR,[xr]:i.LINEAR_MIPMAP_NEAREST,[Kn]:i.LINEAR_MIPMAP_LINEAR},Mt={[Yl]:i.NEVER,[Jl]:i.ALWAYS,[Vl]:i.LESS,[jc]:i.LEQUAL,[Wl]:i.EQUAL,[jl]:i.GEQUAL,[Xl]:i.GREATER,[Kl]:i.NOTEQUAL};function Nt(_,A){if(A.type===rn&&t.has("OES_texture_float_linear")===!1&&(A.magFilter===sn||A.magFilter===xr||A.magFilter===ls||A.magFilter===Kn||A.minFilter===sn||A.minFilter===xr||A.minFilter===ls||A.minFilter===Kn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(_,i.TEXTURE_WRAP_S,rt[A.wrapS]),i.texParameteri(_,i.TEXTURE_WRAP_T,rt[A.wrapT]),(_===i.TEXTURE_3D||_===i.TEXTURE_2D_ARRAY)&&i.texParameteri(_,i.TEXTURE_WRAP_R,rt[A.wrapR]),i.texParameteri(_,i.TEXTURE_MAG_FILTER,dt[A.magFilter]),i.texParameteri(_,i.TEXTURE_MIN_FILTER,dt[A.minFilter]),A.compareFunction&&(i.texParameteri(_,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(_,i.TEXTURE_COMPARE_FUNC,Mt[A.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===Ne||A.minFilter!==ls&&A.minFilter!==Kn||A.type===rn&&t.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||n.get(A).__currentAnisotropy){let F=t.get("EXT_texture_filter_anisotropic");i.texParameterf(_,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,s.getMaxAnisotropy())),n.get(A).__currentAnisotropy=A.anisotropy}}}function Kt(_,A){let F=!1;_.__webglInit===void 0&&(_.__webglInit=!0,A.addEventListener("dispose",C));let j=A.source,J=f.get(j);J===void 0&&(J={},f.set(j,J));let V=X(A);if(V!==_.__cacheKey){J[V]===void 0&&(J[V]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,F=!0),J[V].usedTimes++;let mt=J[_.__cacheKey];mt!==void 0&&(J[_.__cacheKey].usedTimes--,mt.usedTimes===0&&E(A)),_.__cacheKey=V,_.__webglTexture=J[V].texture}return F}function Y(_,A,F){let j=i.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(j=i.TEXTURE_2D_ARRAY),A.isData3DTexture&&(j=i.TEXTURE_3D);let J=Kt(_,A),V=A.source;e.bindTexture(j,_.__webglTexture,i.TEXTURE0+F);let mt=n.get(V);if(V.version!==mt.__version||J===!0){e.activeTexture(i.TEXTURE0+F);let st=Wt.getPrimaries(Wt.workingColorSpace),ut=A.colorSpace===In?null:Wt.getPrimaries(A.colorSpace),Vt=A.colorSpace===In||st===ut?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Vt);let Z=v(A.image,!1,s.maxTextureSize);Z=Zt(A,Z);let ft=r.convert(A.format,A.colorSpace),wt=r.convert(A.type),Ct=w(A.internalFormat,ft,wt,A.colorSpace,A.isVideoTexture);Nt(j,A);let pt,kt=A.mipmaps,Rt=A.isVideoTexture!==!0,$t=mt.__version===void 0||J===!0,D=V.dataReady,at=O(A,Z);if(A.isDepthTexture)Ct=M(A.format===Ii,A.type),$t&&(Rt?e.texStorage2D(i.TEXTURE_2D,1,Ct,Z.width,Z.height):e.texImage2D(i.TEXTURE_2D,0,Ct,Z.width,Z.height,0,ft,wt,null));else if(A.isDataTexture)if(kt.length>0){Rt&&$t&&e.texStorage2D(i.TEXTURE_2D,at,Ct,kt[0].width,kt[0].height);for(let k=0,K=kt.length;k<K;k++)pt=kt[k],Rt?D&&e.texSubImage2D(i.TEXTURE_2D,k,0,0,pt.width,pt.height,ft,wt,pt.data):e.texImage2D(i.TEXTURE_2D,k,Ct,pt.width,pt.height,0,ft,wt,pt.data);A.generateMipmaps=!1}else Rt?($t&&e.texStorage2D(i.TEXTURE_2D,at,Ct,Z.width,Z.height),D&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Z.width,Z.height,ft,wt,Z.data)):e.texImage2D(i.TEXTURE_2D,0,Ct,Z.width,Z.height,0,ft,wt,Z.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){Rt&&$t&&e.texStorage3D(i.TEXTURE_2D_ARRAY,at,Ct,kt[0].width,kt[0].height,Z.depth);for(let k=0,K=kt.length;k<K;k++)if(pt=kt[k],A.format!==$e)if(ft!==null)if(Rt){if(D)if(A.layerUpdates.size>0){let nt=Tc(pt.width,pt.height,A.format,A.type);for(let lt of A.layerUpdates){let Bt=pt.data.subarray(lt*nt/pt.data.BYTES_PER_ELEMENT,(lt+1)*nt/pt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,k,0,0,lt,pt.width,pt.height,1,ft,Bt)}A.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,k,0,0,0,pt.width,pt.height,Z.depth,ft,pt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,k,Ct,pt.width,pt.height,Z.depth,0,pt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Rt?D&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,k,0,0,0,pt.width,pt.height,Z.depth,ft,wt,pt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,k,Ct,pt.width,pt.height,Z.depth,0,ft,wt,pt.data)}else{Rt&&$t&&e.texStorage2D(i.TEXTURE_2D,at,Ct,kt[0].width,kt[0].height);for(let k=0,K=kt.length;k<K;k++)pt=kt[k],A.format!==$e?ft!==null?Rt?D&&e.compressedTexSubImage2D(i.TEXTURE_2D,k,0,0,pt.width,pt.height,ft,pt.data):e.compressedTexImage2D(i.TEXTURE_2D,k,Ct,pt.width,pt.height,0,pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Rt?D&&e.texSubImage2D(i.TEXTURE_2D,k,0,0,pt.width,pt.height,ft,wt,pt.data):e.texImage2D(i.TEXTURE_2D,k,Ct,pt.width,pt.height,0,ft,wt,pt.data)}else if(A.isDataArrayTexture)if(Rt){if($t&&e.texStorage3D(i.TEXTURE_2D_ARRAY,at,Ct,Z.width,Z.height,Z.depth),D)if(A.layerUpdates.size>0){let k=Tc(Z.width,Z.height,A.format,A.type);for(let K of A.layerUpdates){let nt=Z.data.subarray(K*k/Z.data.BYTES_PER_ELEMENT,(K+1)*k/Z.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,K,Z.width,Z.height,1,ft,wt,nt)}A.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Z.width,Z.height,Z.depth,ft,wt,Z.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Ct,Z.width,Z.height,Z.depth,0,ft,wt,Z.data);else if(A.isData3DTexture)Rt?($t&&e.texStorage3D(i.TEXTURE_3D,at,Ct,Z.width,Z.height,Z.depth),D&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Z.width,Z.height,Z.depth,ft,wt,Z.data)):e.texImage3D(i.TEXTURE_3D,0,Ct,Z.width,Z.height,Z.depth,0,ft,wt,Z.data);else if(A.isFramebufferTexture){if($t)if(Rt)e.texStorage2D(i.TEXTURE_2D,at,Ct,Z.width,Z.height);else{let k=Z.width,K=Z.height;for(let nt=0;nt<at;nt++)e.texImage2D(i.TEXTURE_2D,nt,Ct,k,K,0,ft,wt,null),k>>=1,K>>=1}}else if(kt.length>0){if(Rt&&$t){let k=Et(kt[0]);e.texStorage2D(i.TEXTURE_2D,at,Ct,k.width,k.height)}for(let k=0,K=kt.length;k<K;k++)pt=kt[k],Rt?D&&e.texSubImage2D(i.TEXTURE_2D,k,0,0,ft,wt,pt):e.texImage2D(i.TEXTURE_2D,k,Ct,ft,wt,pt);A.generateMipmaps=!1}else if(Rt){if($t){let k=Et(Z);e.texStorage2D(i.TEXTURE_2D,at,Ct,k.width,k.height)}D&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ft,wt,Z)}else e.texImage2D(i.TEXTURE_2D,0,Ct,ft,wt,Z);g(A)&&h(j),mt.__version=V.version,A.onUpdate&&A.onUpdate(A)}_.__version=A.version}function $(_,A,F){if(A.image.length!==6)return;let j=Kt(_,A),J=A.source;e.bindTexture(i.TEXTURE_CUBE_MAP,_.__webglTexture,i.TEXTURE0+F);let V=n.get(J);if(J.version!==V.__version||j===!0){e.activeTexture(i.TEXTURE0+F);let mt=Wt.getPrimaries(Wt.workingColorSpace),st=A.colorSpace===In?null:Wt.getPrimaries(A.colorSpace),ut=A.colorSpace===In||mt===st?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ut);let Vt=A.isCompressedTexture||A.image[0].isCompressedTexture,Z=A.image[0]&&A.image[0].isDataTexture,ft=[];for(let K=0;K<6;K++)!Vt&&!Z?ft[K]=v(A.image[K],!0,s.maxCubemapSize):ft[K]=Z?A.image[K].image:A.image[K],ft[K]=Zt(A,ft[K]);let wt=ft[0],Ct=r.convert(A.format,A.colorSpace),pt=r.convert(A.type),kt=w(A.internalFormat,Ct,pt,A.colorSpace),Rt=A.isVideoTexture!==!0,$t=V.__version===void 0||j===!0,D=J.dataReady,at=O(A,wt);Nt(i.TEXTURE_CUBE_MAP,A);let k;if(Vt){Rt&&$t&&e.texStorage2D(i.TEXTURE_CUBE_MAP,at,kt,wt.width,wt.height);for(let K=0;K<6;K++){k=ft[K].mipmaps;for(let nt=0;nt<k.length;nt++){let lt=k[nt];A.format!==$e?Ct!==null?Rt?D&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,nt,0,0,lt.width,lt.height,Ct,lt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,nt,kt,lt.width,lt.height,0,lt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Rt?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,nt,0,0,lt.width,lt.height,Ct,pt,lt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,nt,kt,lt.width,lt.height,0,Ct,pt,lt.data)}}}else{if(k=A.mipmaps,Rt&&$t){k.length>0&&at++;let K=Et(ft[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,at,kt,K.width,K.height)}for(let K=0;K<6;K++)if(Z){Rt?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,ft[K].width,ft[K].height,Ct,pt,ft[K].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,kt,ft[K].width,ft[K].height,0,Ct,pt,ft[K].data);for(let nt=0;nt<k.length;nt++){let Bt=k[nt].image[K].image;Rt?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,nt+1,0,0,Bt.width,Bt.height,Ct,pt,Bt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,nt+1,kt,Bt.width,Bt.height,0,Ct,pt,Bt.data)}}else{Rt?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Ct,pt,ft[K]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,kt,Ct,pt,ft[K]);for(let nt=0;nt<k.length;nt++){let lt=k[nt];Rt?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,nt+1,0,0,Ct,pt,lt.image[K]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,nt+1,kt,Ct,pt,lt.image[K])}}}g(A)&&h(i.TEXTURE_CUBE_MAP),V.__version=J.version,A.onUpdate&&A.onUpdate(A)}_.__version=A.version}function gt(_,A,F,j,J,V){let mt=r.convert(F.format,F.colorSpace),st=r.convert(F.type),ut=w(F.internalFormat,mt,st,F.colorSpace),Vt=n.get(A),Z=n.get(F);if(Z.__renderTarget=A,!Vt.__hasExternalTextures){let ft=Math.max(1,A.width>>V),wt=Math.max(1,A.height>>V);J===i.TEXTURE_3D||J===i.TEXTURE_2D_ARRAY?e.texImage3D(J,V,ut,ft,wt,A.depth,0,mt,st,null):e.texImage2D(J,V,ut,ft,wt,0,mt,st,null)}e.bindFramebuffer(i.FRAMEBUFFER,_),zt(A)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,j,J,Z.__webglTexture,0,Ht(A)):(J===i.TEXTURE_2D||J>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,j,J,Z.__webglTexture,V),e.bindFramebuffer(i.FRAMEBUFFER,null)}function it(_,A,F){if(i.bindRenderbuffer(i.RENDERBUFFER,_),A.depthBuffer){let j=A.depthTexture,J=j&&j.isDepthTexture?j.type:null,V=M(A.stencilBuffer,J),mt=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,st=Ht(A);zt(A)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,st,V,A.width,A.height):F?i.renderbufferStorageMultisample(i.RENDERBUFFER,st,V,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,V,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,mt,i.RENDERBUFFER,_)}else{let j=A.textures;for(let J=0;J<j.length;J++){let V=j[J],mt=r.convert(V.format,V.colorSpace),st=r.convert(V.type),ut=w(V.internalFormat,mt,st,V.colorSpace),Vt=Ht(A);F&&zt(A)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Vt,ut,A.width,A.height):zt(A)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Vt,ut,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,ut,A.width,A.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function St(_,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,_),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let j=n.get(A.depthTexture);j.__renderTarget=A,(!j.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),q(A.depthTexture,0);let J=j.__webglTexture,V=Ht(A);if(A.depthTexture.format===wi)zt(A)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,J,0,V):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,J,0);else if(A.depthTexture.format===Ii)zt(A)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,J,0,V):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function Tt(_){let A=n.get(_),F=_.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==_.depthTexture){let j=_.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),j){let J=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,j.removeEventListener("dispose",J)};j.addEventListener("dispose",J),A.__depthDisposeCallback=J}A.__boundDepthTexture=j}if(_.depthTexture&&!A.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");St(A.__webglFramebuffer,_)}else if(F){A.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(e.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer[j]),A.__webglDepthbuffer[j]===void 0)A.__webglDepthbuffer[j]=i.createRenderbuffer(),it(A.__webglDepthbuffer[j],_,!1);else{let J=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,V=A.__webglDepthbuffer[j];i.bindRenderbuffer(i.RENDERBUFFER,V),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,V)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=i.createRenderbuffer(),it(A.__webglDepthbuffer,_,!1);else{let j=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,J=A.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,J),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,J)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ut(_,A,F){let j=n.get(_);A!==void 0&&gt(j.__webglFramebuffer,_,_.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),F!==void 0&&Tt(_)}function ie(_){let A=_.texture,F=n.get(_),j=n.get(A);_.addEventListener("dispose",b);let J=_.textures,V=_.isWebGLCubeRenderTarget===!0,mt=J.length>1;if(mt||(j.__webglTexture===void 0&&(j.__webglTexture=i.createTexture()),j.__version=A.version,o.memory.textures++),V){F.__webglFramebuffer=[];for(let st=0;st<6;st++)if(A.mipmaps&&A.mipmaps.length>0){F.__webglFramebuffer[st]=[];for(let ut=0;ut<A.mipmaps.length;ut++)F.__webglFramebuffer[st][ut]=i.createFramebuffer()}else F.__webglFramebuffer[st]=i.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){F.__webglFramebuffer=[];for(let st=0;st<A.mipmaps.length;st++)F.__webglFramebuffer[st]=i.createFramebuffer()}else F.__webglFramebuffer=i.createFramebuffer();if(mt)for(let st=0,ut=J.length;st<ut;st++){let Vt=n.get(J[st]);Vt.__webglTexture===void 0&&(Vt.__webglTexture=i.createTexture(),o.memory.textures++)}if(_.samples>0&&zt(_)===!1){F.__webglMultisampledFramebuffer=i.createFramebuffer(),F.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let st=0;st<J.length;st++){let ut=J[st];F.__webglColorRenderbuffer[st]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,F.__webglColorRenderbuffer[st]);let Vt=r.convert(ut.format,ut.colorSpace),Z=r.convert(ut.type),ft=w(ut.internalFormat,Vt,Z,ut.colorSpace,_.isXRRenderTarget===!0),wt=Ht(_);i.renderbufferStorageMultisample(i.RENDERBUFFER,wt,ft,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+st,i.RENDERBUFFER,F.__webglColorRenderbuffer[st])}i.bindRenderbuffer(i.RENDERBUFFER,null),_.depthBuffer&&(F.__webglDepthRenderbuffer=i.createRenderbuffer(),it(F.__webglDepthRenderbuffer,_,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(V){e.bindTexture(i.TEXTURE_CUBE_MAP,j.__webglTexture),Nt(i.TEXTURE_CUBE_MAP,A);for(let st=0;st<6;st++)if(A.mipmaps&&A.mipmaps.length>0)for(let ut=0;ut<A.mipmaps.length;ut++)gt(F.__webglFramebuffer[st][ut],_,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+st,ut);else gt(F.__webglFramebuffer[st],_,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0);g(A)&&h(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(mt){for(let st=0,ut=J.length;st<ut;st++){let Vt=J[st],Z=n.get(Vt);e.bindTexture(i.TEXTURE_2D,Z.__webglTexture),Nt(i.TEXTURE_2D,Vt),gt(F.__webglFramebuffer,_,Vt,i.COLOR_ATTACHMENT0+st,i.TEXTURE_2D,0),g(Vt)&&h(i.TEXTURE_2D)}e.unbindTexture()}else{let st=i.TEXTURE_2D;if((_.isWebGL3DRenderTarget||_.isWebGLArrayRenderTarget)&&(st=_.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(st,j.__webglTexture),Nt(st,A),A.mipmaps&&A.mipmaps.length>0)for(let ut=0;ut<A.mipmaps.length;ut++)gt(F.__webglFramebuffer[ut],_,A,i.COLOR_ATTACHMENT0,st,ut);else gt(F.__webglFramebuffer,_,A,i.COLOR_ATTACHMENT0,st,0);g(A)&&h(st),e.unbindTexture()}_.depthBuffer&&Tt(_)}function Dt(_){let A=_.textures;for(let F=0,j=A.length;F<j;F++){let J=A[F];if(g(J)){let V=S(_),mt=n.get(J).__webglTexture;e.bindTexture(V,mt),h(V),e.unbindTexture()}}}let Qt=[],I=[];function pe(_){if(_.samples>0){if(zt(_)===!1){let A=_.textures,F=_.width,j=_.height,J=i.COLOR_BUFFER_BIT,V=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,mt=n.get(_),st=A.length>1;if(st)for(let ut=0;ut<A.length;ut++)e.bindFramebuffer(i.FRAMEBUFFER,mt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,mt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,mt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,mt.__webglFramebuffer);for(let ut=0;ut<A.length;ut++){if(_.resolveDepthBuffer&&(_.depthBuffer&&(J|=i.DEPTH_BUFFER_BIT),_.stencilBuffer&&_.resolveStencilBuffer&&(J|=i.STENCIL_BUFFER_BIT)),st){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,mt.__webglColorRenderbuffer[ut]);let Vt=n.get(A[ut]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Vt,0)}i.blitFramebuffer(0,0,F,j,0,0,F,j,J,i.NEAREST),c===!0&&(Qt.length=0,I.length=0,Qt.push(i.COLOR_ATTACHMENT0+ut),_.depthBuffer&&_.resolveDepthBuffer===!1&&(Qt.push(V),I.push(V),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,I)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Qt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),st)for(let ut=0;ut<A.length;ut++){e.bindFramebuffer(i.FRAMEBUFFER,mt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.RENDERBUFFER,mt.__webglColorRenderbuffer[ut]);let Vt=n.get(A[ut]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,mt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.TEXTURE_2D,Vt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,mt.__webglMultisampledFramebuffer)}else if(_.depthBuffer&&_.resolveDepthBuffer===!1&&c){let A=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[A])}}}function Ht(_){return Math.min(s.maxSamples,_.samples)}function zt(_){let A=n.get(_);return _.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function _t(_){let A=o.render.frame;u.get(_)!==A&&(u.set(_,A),_.update())}function Zt(_,A){let F=_.colorSpace,j=_.format,J=_.type;return _.isCompressedTexture===!0||_.isVideoTexture===!0||F!==Ui&&F!==In&&(Wt.getTransfer(F)===ee?(j!==$e||J!==An)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),A}function Et(_){return typeof HTMLImageElement<"u"&&_ instanceof HTMLImageElement?(l.width=_.naturalWidth||_.width,l.height=_.naturalHeight||_.height):typeof VideoFrame<"u"&&_ instanceof VideoFrame?(l.width=_.displayWidth,l.height=_.displayHeight):(l.width=_.width,l.height=_.height),l}this.allocateTextureUnit=z,this.resetTextureUnits=W,this.setTexture2D=q,this.setTexture2DArray=Q,this.setTexture3D=tt,this.setTextureCube=H,this.rebindTextures=Ut,this.setupRenderTarget=ie,this.updateRenderTargetMipmap=Dt,this.updateMultisampleRenderTarget=pe,this.setupDepthRenderbuffer=Tt,this.setupFrameBufferTexture=gt,this.useMultisampledRTT=zt}function sg(i,t){function e(n,s=In){let r,o=Wt.getTransfer(s);if(n===An)return i.UNSIGNED_BYTE;if(n===ga)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ma)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Hc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===zc)return i.BYTE;if(n===kc)return i.SHORT;if(n===ts)return i.UNSIGNED_SHORT;if(n===pa)return i.INT;if(n===jn)return i.UNSIGNED_INT;if(n===rn)return i.FLOAT;if(n===as)return i.HALF_FLOAT;if(n===Qc)return i.ALPHA;if(n===Yc)return i.RGB;if(n===$e)return i.RGBA;if(n===Vc)return i.LUMINANCE;if(n===Wc)return i.LUMINANCE_ALPHA;if(n===wi)return i.DEPTH_COMPONENT;if(n===Ii)return i.DEPTH_STENCIL;if(n===Aa)return i.RED;if(n===va)return i.RED_INTEGER;if(n===Xc)return i.RG;if(n===xa)return i.RG_INTEGER;if(n===ya)return i.RGBA_INTEGER;if(n===Ls||n===Fs||n===Us||n===Os)if(o===ee)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ls)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Fs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Us)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Os)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ls)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Fs)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Us)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Os)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===lo||n===ho||n===uo||n===fo)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===lo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ho)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===uo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===fo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===po||n===go||n===mo)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===po||n===go)return o===ee?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===mo)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ao||n===vo||n===xo||n===yo||n===Mo||n===Eo||n===_o||n===wo||n===So||n===Co||n===bo||n===To||n===Do||n===Bo)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ao)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===vo)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===xo)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===yo)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Mo)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Eo)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===_o)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===wo)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===So)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Co)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===bo)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===To)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Do)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Bo)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ns||n===Io||n===Po)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Ns)return o===ee?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Io)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Po)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Kc||n===Ro||n===Lo||n===Fo)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ns)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ro)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Lo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Fo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Bi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var Jo=class extends Te{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},gn=class extends De{constructor(){super(),this.isGroup=!0,this.type="Group"}},rg={type:"move"},$i=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new gn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new gn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new gn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(let v of t.hand.values()){let g=e.getJointPose(v,n),h=this._getHandJoint(l,v);g!==null&&(h.matrix.fromArray(g.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=g.radius),h.visible=g!==null}let u=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],f=u.position.distanceTo(d.position),p=.02,m=.005;l.inputState.pinching&&f>p+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&f<=p-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(rg)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new gn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},og=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ag=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,qo=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let s=new ze,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Ve({vertexShader:og,fragmentShader:ag,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new me(new Ri(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Zo=class extends vn{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,u=null,d=null,f=null,p=null,m=null,v=new qo,g=e.getContextAttributes(),h=null,S=null,w=[],M=[],O=new bt,C=null,b=new Te;b.viewport=new ue;let L=new Te;L.viewport=new ue;let E=[b,L],y=new Jo,T=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let $=w[Y];return $===void 0&&($=new $i,w[Y]=$),$.getTargetRaySpace()},this.getControllerGrip=function(Y){let $=w[Y];return $===void 0&&($=new $i,w[Y]=$),$.getGripSpace()},this.getHand=function(Y){let $=w[Y];return $===void 0&&($=new $i,w[Y]=$),$.getHandSpace()};function z(Y){let $=M.indexOf(Y.inputSource);if($===-1)return;let gt=w[$];gt!==void 0&&(gt.update(Y.inputSource,Y.frame,l||o),gt.dispatchEvent({type:Y.type,data:Y.inputSource}))}function X(){s.removeEventListener("select",z),s.removeEventListener("selectstart",z),s.removeEventListener("selectend",z),s.removeEventListener("squeeze",z),s.removeEventListener("squeezestart",z),s.removeEventListener("squeezeend",z),s.removeEventListener("end",X),s.removeEventListener("inputsourceschange",q);for(let Y=0;Y<w.length;Y++){let $=M[Y];$!==null&&(M[Y]=null,w[Y].disconnect($))}T=null,W=null,v.reset(),t.setRenderTarget(h),p=null,f=null,d=null,s=null,S=null,Kt.stop(),n.isPresenting=!1,t.setPixelRatio(C),t.setSize(O.width,O.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(Y){l=Y},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return d},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(Y){if(s=Y,s!==null){if(h=t.getRenderTarget(),s.addEventListener("select",z),s.addEventListener("selectstart",z),s.addEventListener("selectend",z),s.addEventListener("squeeze",z),s.addEventListener("squeezestart",z),s.addEventListener("squeezeend",z),s.addEventListener("end",X),s.addEventListener("inputsourceschange",q),g.xrCompatible!==!0&&await e.makeXRCompatible(),C=t.getPixelRatio(),t.getSize(O),s.renderState.layers===void 0){let $={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,$),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new xn(p.framebufferWidth,p.framebufferHeight,{format:$e,type:An,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}else{let $=null,gt=null,it=null;g.depth&&(it=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,$=g.stencil?Ii:wi,gt=g.stencil?Bi:jn);let St={colorFormat:e.RGBA8,depthFormat:it,scaleFactor:r};d=new XRWebGLBinding(s,e),f=d.createProjectionLayer(St),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),S=new xn(f.textureWidth,f.textureHeight,{format:$e,type:An,depthTexture:new Js(f.textureWidth,f.textureHeight,gt,void 0,void 0,void 0,void 0,void 0,void 0,$),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),Kt.setContext(s),Kt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function q(Y){for(let $=0;$<Y.removed.length;$++){let gt=Y.removed[$],it=M.indexOf(gt);it>=0&&(M[it]=null,w[it].disconnect(gt))}for(let $=0;$<Y.added.length;$++){let gt=Y.added[$],it=M.indexOf(gt);if(it===-1){for(let Tt=0;Tt<w.length;Tt++)if(Tt>=M.length){M.push(gt),it=Tt;break}else if(M[Tt]===null){M[Tt]=gt,it=Tt;break}if(it===-1)break}let St=w[it];St&&St.connect(gt)}}let Q=new B,tt=new B;function H(Y,$,gt){Q.setFromMatrixPosition($.matrixWorld),tt.setFromMatrixPosition(gt.matrixWorld);let it=Q.distanceTo(tt),St=$.projectionMatrix.elements,Tt=gt.projectionMatrix.elements,Ut=St[14]/(St[10]-1),ie=St[14]/(St[10]+1),Dt=(St[9]+1)/St[5],Qt=(St[9]-1)/St[5],I=(St[8]-1)/St[0],pe=(Tt[8]+1)/Tt[0],Ht=Ut*I,zt=Ut*pe,_t=it/(-I+pe),Zt=_t*-I;if($.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(Zt),Y.translateZ(_t),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),St[10]===-1)Y.projectionMatrix.copy($.projectionMatrix),Y.projectionMatrixInverse.copy($.projectionMatrixInverse);else{let Et=Ut+_t,_=ie+_t,A=Ht-Zt,F=zt+(it-Zt),j=Dt*ie/_*Et,J=Qt*ie/_*Et;Y.projectionMatrix.makePerspective(A,F,j,J,Et,_),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function rt(Y,$){$===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices($.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(s===null)return;let $=Y.near,gt=Y.far;v.texture!==null&&(v.depthNear>0&&($=v.depthNear),v.depthFar>0&&(gt=v.depthFar)),y.near=L.near=b.near=$,y.far=L.far=b.far=gt,(T!==y.near||W!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),T=y.near,W=y.far),b.layers.mask=Y.layers.mask|2,L.layers.mask=Y.layers.mask|4,y.layers.mask=b.layers.mask|L.layers.mask;let it=Y.parent,St=y.cameras;rt(y,it);for(let Tt=0;Tt<St.length;Tt++)rt(St[Tt],it);St.length===2?H(y,b,L):y.projectionMatrix.copy(b.projectionMatrix),dt(Y,y,it)};function dt(Y,$,gt){gt===null?Y.matrix.copy($.matrixWorld):(Y.matrix.copy(gt.matrixWorld),Y.matrix.invert(),Y.matrix.multiply($.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy($.projectionMatrix),Y.projectionMatrixInverse.copy($.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=es*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(f===null&&p===null))return c},this.setFoveation=function(Y){c=Y,f!==null&&(f.fixedFoveation=Y),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Y)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(y)};let Mt=null;function Nt(Y,$){if(u=$.getViewerPose(l||o),m=$,u!==null){let gt=u.views;p!==null&&(t.setRenderTargetFramebuffer(S,p.framebuffer),t.setRenderTarget(S));let it=!1;gt.length!==y.cameras.length&&(y.cameras.length=0,it=!0);for(let Tt=0;Tt<gt.length;Tt++){let Ut=gt[Tt],ie=null;if(p!==null)ie=p.getViewport(Ut);else{let Qt=d.getViewSubImage(f,Ut);ie=Qt.viewport,Tt===0&&(t.setRenderTargetTextures(S,Qt.colorTexture,f.ignoreDepthValues?void 0:Qt.depthStencilTexture),t.setRenderTarget(S))}let Dt=E[Tt];Dt===void 0&&(Dt=new Te,Dt.layers.enable(Tt),Dt.viewport=new ue,E[Tt]=Dt),Dt.matrix.fromArray(Ut.transform.matrix),Dt.matrix.decompose(Dt.position,Dt.quaternion,Dt.scale),Dt.projectionMatrix.fromArray(Ut.projectionMatrix),Dt.projectionMatrixInverse.copy(Dt.projectionMatrix).invert(),Dt.viewport.set(ie.x,ie.y,ie.width,ie.height),Tt===0&&(y.matrix.copy(Dt.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),it===!0&&y.cameras.push(Dt)}let St=s.enabledFeatures;if(St&&St.includes("depth-sensing")){let Tt=d.getDepthInformation(gt[0]);Tt&&Tt.isValid&&Tt.texture&&v.init(t,Tt,s.renderState)}}for(let gt=0;gt<w.length;gt++){let it=M[gt],St=w[gt];it!==null&&St!==void 0&&St.update(it,$,l||o)}Mt&&Mt(Y,$),$.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:$}),m=null}let Kt=new $c;Kt.setAnimationLoop(Nt),this.setAnimationLoop=function(Y){Mt=Y},this.dispose=function(){}}},Hn=new Mn,cg=new qt;function lg(i,t){function e(g,h){g.matrixAutoUpdate===!0&&g.updateMatrix(),h.value.copy(g.matrix)}function n(g,h){h.color.getRGB(g.fogColor.value,Zc(i)),h.isFog?(g.fogNear.value=h.near,g.fogFar.value=h.far):h.isFogExp2&&(g.fogDensity.value=h.density)}function s(g,h,S,w,M){h.isMeshBasicMaterial||h.isMeshLambertMaterial?r(g,h):h.isMeshToonMaterial?(r(g,h),d(g,h)):h.isMeshPhongMaterial?(r(g,h),u(g,h)):h.isMeshStandardMaterial?(r(g,h),f(g,h),h.isMeshPhysicalMaterial&&p(g,h,M)):h.isMeshMatcapMaterial?(r(g,h),m(g,h)):h.isMeshDepthMaterial?r(g,h):h.isMeshDistanceMaterial?(r(g,h),v(g,h)):h.isMeshNormalMaterial?r(g,h):h.isLineBasicMaterial?(o(g,h),h.isLineDashedMaterial&&a(g,h)):h.isPointsMaterial?c(g,h,S,w):h.isSpriteMaterial?l(g,h):h.isShadowMaterial?(g.color.value.copy(h.color),g.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function r(g,h){g.opacity.value=h.opacity,h.color&&g.diffuse.value.copy(h.color),h.emissive&&g.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(g.map.value=h.map,e(h.map,g.mapTransform)),h.alphaMap&&(g.alphaMap.value=h.alphaMap,e(h.alphaMap,g.alphaMapTransform)),h.bumpMap&&(g.bumpMap.value=h.bumpMap,e(h.bumpMap,g.bumpMapTransform),g.bumpScale.value=h.bumpScale,h.side===Pe&&(g.bumpScale.value*=-1)),h.normalMap&&(g.normalMap.value=h.normalMap,e(h.normalMap,g.normalMapTransform),g.normalScale.value.copy(h.normalScale),h.side===Pe&&g.normalScale.value.negate()),h.displacementMap&&(g.displacementMap.value=h.displacementMap,e(h.displacementMap,g.displacementMapTransform),g.displacementScale.value=h.displacementScale,g.displacementBias.value=h.displacementBias),h.emissiveMap&&(g.emissiveMap.value=h.emissiveMap,e(h.emissiveMap,g.emissiveMapTransform)),h.specularMap&&(g.specularMap.value=h.specularMap,e(h.specularMap,g.specularMapTransform)),h.alphaTest>0&&(g.alphaTest.value=h.alphaTest);let S=t.get(h),w=S.envMap,M=S.envMapRotation;w&&(g.envMap.value=w,Hn.copy(M),Hn.x*=-1,Hn.y*=-1,Hn.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(Hn.y*=-1,Hn.z*=-1),g.envMapRotation.value.setFromMatrix4(cg.makeRotationFromEuler(Hn)),g.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=h.reflectivity,g.ior.value=h.ior,g.refractionRatio.value=h.refractionRatio),h.lightMap&&(g.lightMap.value=h.lightMap,g.lightMapIntensity.value=h.lightMapIntensity,e(h.lightMap,g.lightMapTransform)),h.aoMap&&(g.aoMap.value=h.aoMap,g.aoMapIntensity.value=h.aoMapIntensity,e(h.aoMap,g.aoMapTransform))}function o(g,h){g.diffuse.value.copy(h.color),g.opacity.value=h.opacity,h.map&&(g.map.value=h.map,e(h.map,g.mapTransform))}function a(g,h){g.dashSize.value=h.dashSize,g.totalSize.value=h.dashSize+h.gapSize,g.scale.value=h.scale}function c(g,h,S,w){g.diffuse.value.copy(h.color),g.opacity.value=h.opacity,g.size.value=h.size*S,g.scale.value=w*.5,h.map&&(g.map.value=h.map,e(h.map,g.uvTransform)),h.alphaMap&&(g.alphaMap.value=h.alphaMap,e(h.alphaMap,g.alphaMapTransform)),h.alphaTest>0&&(g.alphaTest.value=h.alphaTest)}function l(g,h){g.diffuse.value.copy(h.color),g.opacity.value=h.opacity,g.rotation.value=h.rotation,h.map&&(g.map.value=h.map,e(h.map,g.mapTransform)),h.alphaMap&&(g.alphaMap.value=h.alphaMap,e(h.alphaMap,g.alphaMapTransform)),h.alphaTest>0&&(g.alphaTest.value=h.alphaTest)}function u(g,h){g.specular.value.copy(h.specular),g.shininess.value=Math.max(h.shininess,1e-4)}function d(g,h){h.gradientMap&&(g.gradientMap.value=h.gradientMap)}function f(g,h){g.metalness.value=h.metalness,h.metalnessMap&&(g.metalnessMap.value=h.metalnessMap,e(h.metalnessMap,g.metalnessMapTransform)),g.roughness.value=h.roughness,h.roughnessMap&&(g.roughnessMap.value=h.roughnessMap,e(h.roughnessMap,g.roughnessMapTransform)),h.envMap&&(g.envMapIntensity.value=h.envMapIntensity)}function p(g,h,S){g.ior.value=h.ior,h.sheen>0&&(g.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),g.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(g.sheenColorMap.value=h.sheenColorMap,e(h.sheenColorMap,g.sheenColorMapTransform)),h.sheenRoughnessMap&&(g.sheenRoughnessMap.value=h.sheenRoughnessMap,e(h.sheenRoughnessMap,g.sheenRoughnessMapTransform))),h.clearcoat>0&&(g.clearcoat.value=h.clearcoat,g.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(g.clearcoatMap.value=h.clearcoatMap,e(h.clearcoatMap,g.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,e(h.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(g.clearcoatNormalMap.value=h.clearcoatNormalMap,e(h.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Pe&&g.clearcoatNormalScale.value.negate())),h.dispersion>0&&(g.dispersion.value=h.dispersion),h.iridescence>0&&(g.iridescence.value=h.iridescence,g.iridescenceIOR.value=h.iridescenceIOR,g.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(g.iridescenceMap.value=h.iridescenceMap,e(h.iridescenceMap,g.iridescenceMapTransform)),h.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=h.iridescenceThicknessMap,e(h.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),h.transmission>0&&(g.transmission.value=h.transmission,g.transmissionSamplerMap.value=S.texture,g.transmissionSamplerSize.value.set(S.width,S.height),h.transmissionMap&&(g.transmissionMap.value=h.transmissionMap,e(h.transmissionMap,g.transmissionMapTransform)),g.thickness.value=h.thickness,h.thicknessMap&&(g.thicknessMap.value=h.thicknessMap,e(h.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=h.attenuationDistance,g.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(g.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(g.anisotropyMap.value=h.anisotropyMap,e(h.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=h.specularIntensity,g.specularColor.value.copy(h.specularColor),h.specularColorMap&&(g.specularColorMap.value=h.specularColorMap,e(h.specularColorMap,g.specularColorMapTransform)),h.specularIntensityMap&&(g.specularIntensityMap.value=h.specularIntensityMap,e(h.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,h){h.matcap&&(g.matcap.value=h.matcap)}function v(g,h){let S=t.get(h).light;g.referencePosition.value.setFromMatrixPosition(S.matrixWorld),g.nearDistance.value=S.shadow.camera.near,g.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function hg(i,t,e,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(S,w){let M=w.program;n.uniformBlockBinding(S,M)}function l(S,w){let M=s[S.id];M===void 0&&(m(S),M=u(S),s[S.id]=M,S.addEventListener("dispose",g));let O=w.program;n.updateUBOMapping(S,O);let C=t.render.frame;r[S.id]!==C&&(f(S),r[S.id]=C)}function u(S){let w=d();S.__bindingPointIndex=w;let M=i.createBuffer(),O=S.__size,C=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,O,C),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,w,M),M}function d(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(S){let w=s[S.id],M=S.uniforms,O=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,w);for(let C=0,b=M.length;C<b;C++){let L=Array.isArray(M[C])?M[C]:[M[C]];for(let E=0,y=L.length;E<y;E++){let T=L[E];if(p(T,C,E,O)===!0){let W=T.__offset,z=Array.isArray(T.value)?T.value:[T.value],X=0;for(let q=0;q<z.length;q++){let Q=z[q],tt=v(Q);typeof Q=="number"||typeof Q=="boolean"?(T.__data[0]=Q,i.bufferSubData(i.UNIFORM_BUFFER,W+X,T.__data)):Q.isMatrix3?(T.__data[0]=Q.elements[0],T.__data[1]=Q.elements[1],T.__data[2]=Q.elements[2],T.__data[3]=0,T.__data[4]=Q.elements[3],T.__data[5]=Q.elements[4],T.__data[6]=Q.elements[5],T.__data[7]=0,T.__data[8]=Q.elements[6],T.__data[9]=Q.elements[7],T.__data[10]=Q.elements[8],T.__data[11]=0):(Q.toArray(T.__data,X),X+=tt.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,W,T.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(S,w,M,O){let C=S.value,b=w+"_"+M;if(O[b]===void 0)return typeof C=="number"||typeof C=="boolean"?O[b]=C:O[b]=C.clone(),!0;{let L=O[b];if(typeof C=="number"||typeof C=="boolean"){if(L!==C)return O[b]=C,!0}else if(L.equals(C)===!1)return L.copy(C),!0}return!1}function m(S){let w=S.uniforms,M=0,O=16;for(let b=0,L=w.length;b<L;b++){let E=Array.isArray(w[b])?w[b]:[w[b]];for(let y=0,T=E.length;y<T;y++){let W=E[y],z=Array.isArray(W.value)?W.value:[W.value];for(let X=0,q=z.length;X<q;X++){let Q=z[X],tt=v(Q),H=M%O,rt=H%tt.boundary,dt=H+rt;M+=rt,dt!==0&&O-dt<tt.storage&&(M+=O-dt),W.__data=new Float32Array(tt.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=M,M+=tt.storage}}}let C=M%O;return C>0&&(M+=O-C),S.__size=M,S.__cache={},this}function v(S){let w={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(w.boundary=4,w.storage=4):S.isVector2?(w.boundary=8,w.storage=8):S.isVector3||S.isColor?(w.boundary=16,w.storage=12):S.isVector4?(w.boundary=16,w.storage=16):S.isMatrix3?(w.boundary=48,w.storage=48):S.isMatrix4?(w.boundary=64,w.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),w}function g(S){let w=S.target;w.removeEventListener("dispose",g);let M=o.indexOf(w.__bindingPointIndex);o.splice(M,1),i.deleteBuffer(s[w.id]),delete s[w.id],delete r[w.id]}function h(){for(let S in s)i.deleteBuffer(s[S]);o=[],s={},r={}}return{bind:c,update:l,dispose:h}}var qs=class{constructor(t={}){let{canvas:e=fh(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;let m=new Uint32Array(4),v=new Int32Array(4),g=null,h=null,S=[],w=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ie,this.toneMapping=Rn,this.toneMappingExposure=1;let M=this,O=!1,C=0,b=0,L=null,E=-1,y=null,T=new ue,W=new ue,z=null,X=new Yt(0),q=0,Q=e.width,tt=e.height,H=1,rt=null,dt=null,Mt=new ue(0,0,Q,tt),Nt=new ue(0,0,Q,tt),Kt=!1,Y=new ss,$=!1,gt=!1,it=new qt,St=new qt,Tt=new B,Ut=new ue,ie={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Dt=!1;function Qt(){return L===null?H:1}let I=n;function pe(x,P){return e.getContext(x,P)}try{let x={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine","three.js r170"),e.addEventListener("webglcontextlost",K,!1),e.addEventListener("webglcontextrestored",nt,!1),e.addEventListener("webglcontextcreationerror",lt,!1),I===null){let P="webgl2";if(I=pe(P,x),I===null)throw pe(P)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(x){throw console.error("THREE.WebGLRenderer: "+x.message),x}let Ht,zt,_t,Zt,Et,_,A,F,j,J,V,mt,st,ut,Vt,Z,ft,wt,Ct,pt,kt,Rt,$t,D;function at(){Ht=new Cf(I),Ht.init(),Rt=new sg(I,Ht),zt=new yf(I,Ht,t,Rt),_t=new eg(I,Ht),zt.reverseDepthBuffer&&f&&_t.buffers.depth.setReversed(!0),Zt=new Df(I),Et=new Hp,_=new ig(I,Ht,_t,Et,zt,Rt,Zt),A=new Ef(M),F=new Sf(M),j=new Fh(I),$t=new vf(I,j),J=new bf(I,j,Zt,$t),V=new If(I,J,j,Zt),Ct=new Bf(I,zt,_),Z=new Mf(Et),mt=new kp(M,A,F,Ht,zt,$t,Z),st=new lg(M,Et),ut=new Yp,Vt=new Jp(Ht),wt=new Af(M,A,F,_t,V,p,c),ft=new $p(M,V,zt),D=new hg(I,Zt,zt,_t),pt=new xf(I,Ht,Zt),kt=new Tf(I,Ht,Zt),Zt.programs=mt.programs,M.capabilities=zt,M.extensions=Ht,M.properties=Et,M.renderLists=ut,M.shadowMap=ft,M.state=_t,M.info=Zt}at();let k=new Zo(M,I);this.xr=k,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){let x=Ht.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){let x=Ht.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(x){x!==void 0&&(H=x,this.setSize(Q,tt,!1))},this.getSize=function(x){return x.set(Q,tt)},this.setSize=function(x,P,N=!0){if(k.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Q=x,tt=P,e.width=Math.floor(x*H),e.height=Math.floor(P*H),N===!0&&(e.style.width=x+"px",e.style.height=P+"px"),this.setViewport(0,0,x,P)},this.getDrawingBufferSize=function(x){return x.set(Q*H,tt*H).floor()},this.setDrawingBufferSize=function(x,P,N){Q=x,tt=P,H=N,e.width=Math.floor(x*N),e.height=Math.floor(P*N),this.setViewport(0,0,x,P)},this.getCurrentViewport=function(x){return x.copy(T)},this.getViewport=function(x){return x.copy(Mt)},this.setViewport=function(x,P,N,G){x.isVector4?Mt.set(x.x,x.y,x.z,x.w):Mt.set(x,P,N,G),_t.viewport(T.copy(Mt).multiplyScalar(H).round())},this.getScissor=function(x){return x.copy(Nt)},this.setScissor=function(x,P,N,G){x.isVector4?Nt.set(x.x,x.y,x.z,x.w):Nt.set(x,P,N,G),_t.scissor(W.copy(Nt).multiplyScalar(H).round())},this.getScissorTest=function(){return Kt},this.setScissorTest=function(x){_t.setScissorTest(Kt=x)},this.setOpaqueSort=function(x){rt=x},this.setTransparentSort=function(x){dt=x},this.getClearColor=function(x){return x.copy(wt.getClearColor())},this.setClearColor=function(){wt.setClearColor.apply(wt,arguments)},this.getClearAlpha=function(){return wt.getClearAlpha()},this.setClearAlpha=function(){wt.setClearAlpha.apply(wt,arguments)},this.clear=function(x=!0,P=!0,N=!0){let G=0;if(x){let R=!1;if(L!==null){let et=L.texture.format;R=et===ya||et===xa||et===va}if(R){let et=L.texture.type,ht=et===An||et===jn||et===ts||et===Bi||et===ga||et===ma,At=wt.getClearColor(),vt=wt.getClearAlpha(),Pt=At.r,Lt=At.g,xt=At.b;ht?(m[0]=Pt,m[1]=Lt,m[2]=xt,m[3]=vt,I.clearBufferuiv(I.COLOR,0,m)):(v[0]=Pt,v[1]=Lt,v[2]=xt,v[3]=vt,I.clearBufferiv(I.COLOR,0,v))}else G|=I.COLOR_BUFFER_BIT}P&&(G|=I.DEPTH_BUFFER_BIT),N&&(G|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",K,!1),e.removeEventListener("webglcontextrestored",nt,!1),e.removeEventListener("webglcontextcreationerror",lt,!1),ut.dispose(),Vt.dispose(),Et.dispose(),A.dispose(),F.dispose(),V.dispose(),$t.dispose(),D.dispose(),mt.dispose(),k.dispose(),k.removeEventListener("sessionstart",te),k.removeEventListener("sessionend",ge),Me.stop()};function K(x){x.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),O=!0}function nt(){console.log("THREE.WebGLRenderer: Context Restored."),O=!1;let x=Zt.autoReset,P=ft.enabled,N=ft.autoUpdate,G=ft.needsUpdate,R=ft.type;at(),Zt.autoReset=x,ft.enabled=P,ft.autoUpdate=N,ft.needsUpdate=G,ft.type=R}function lt(x){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function Bt(x){let P=x.target;P.removeEventListener("dispose",Bt),le(P)}function le(x){de(x),Et.remove(x)}function de(x){let P=Et.get(x).programs;P!==void 0&&(P.forEach(function(N){mt.releaseProgram(N)}),x.isShaderMaterial&&mt.releaseShaderCache(x))}this.renderBufferDirect=function(x,P,N,G,R,et){P===null&&(P=ie);let ht=R.isMesh&&R.matrixWorld.determinant()<0,At=cs(x,P,N,G,R);_t.setMaterial(G,ht);let vt=N.index,Pt=1;if(G.wireframe===!0){if(vt=J.getWireframeAttribute(N),vt===void 0)return;Pt=2}let Lt=N.drawRange,xt=N.attributes.position,Xt=Lt.start*Pt,se=(Lt.start+Lt.count)*Pt;et!==null&&(Xt=Math.max(Xt,et.start*Pt),se=Math.min(se,(et.start+et.count)*Pt)),vt!==null?(Xt=Math.max(Xt,0),se=Math.min(se,vt.count)):xt!=null&&(Xt=Math.max(Xt,0),se=Math.min(se,xt.count));let oe=se-Xt;if(oe<0||oe===1/0)return;$t.setup(R,G,At,N,vt);let Be,jt=pt;if(vt!==null&&(Be=j.get(vt),jt=kt,jt.setIndex(Be)),R.isMesh)G.wireframe===!0?(_t.setLineWidth(G.wireframeLinewidth*Qt()),jt.setMode(I.LINES)):jt.setMode(I.TRIANGLES);else if(R.isLine){let yt=G.linewidth;yt===void 0&&(yt=1),_t.setLineWidth(yt*Qt()),R.isLineSegments?jt.setMode(I.LINES):R.isLineLoop?jt.setMode(I.LINE_LOOP):jt.setMode(I.LINE_STRIP)}else R.isPoints?jt.setMode(I.POINTS):R.isSprite&&jt.setMode(I.TRIANGLES);if(R.isBatchedMesh)if(R._multiDrawInstances!==null)jt.renderMultiDrawInstances(R._multiDrawStarts,R._multiDrawCounts,R._multiDrawCount,R._multiDrawInstances);else if(Ht.get("WEBGL_multi_draw"))jt.renderMultiDraw(R._multiDrawStarts,R._multiDrawCounts,R._multiDrawCount);else{let yt=R._multiDrawStarts,an=R._multiDrawCounts,Jt=R._multiDrawCount,Xe=vt?j.get(vt).bytesPerElement:1,ri=Et.get(G).currentProgram.getUniforms();for(let Fe=0;Fe<Jt;Fe++)ri.setValue(I,"_gl_DrawID",Fe),jt.render(yt[Fe]/Xe,an[Fe])}else if(R.isInstancedMesh)jt.renderInstances(Xt,oe,R.count);else if(N.isInstancedBufferGeometry){let yt=N._maxInstanceCount!==void 0?N._maxInstanceCount:1/0,an=Math.min(N.instanceCount,yt);jt.renderInstances(Xt,oe,an)}else jt.render(Xt,oe)};function U(x,P,N){x.transparent===!0&&x.side===Ze&&x.forceSinglePass===!1?(x.side=Pe,x.needsUpdate=!0,En(x,P,N),x.side=Ln,x.needsUpdate=!0,En(x,P,N),x.side=Ze):En(x,P,N)}this.compile=function(x,P,N=null){N===null&&(N=x),h=Vt.get(N),h.init(P),w.push(h),N.traverseVisible(function(R){R.isLight&&R.layers.test(P.layers)&&(h.pushLight(R),R.castShadow&&h.pushShadow(R))}),x!==N&&x.traverseVisible(function(R){R.isLight&&R.layers.test(P.layers)&&(h.pushLight(R),R.castShadow&&h.pushShadow(R))}),h.setupLights();let G=new Set;return x.traverse(function(R){if(!(R.isMesh||R.isPoints||R.isLine||R.isSprite))return;let et=R.material;if(et)if(Array.isArray(et))for(let ht=0;ht<et.length;ht++){let At=et[ht];U(At,N,R),G.add(At)}else U(et,N,R),G.add(et)}),w.pop(),h=null,G},this.compileAsync=function(x,P,N=null){let G=this.compile(x,P,N);return new Promise(R=>{function et(){if(G.forEach(function(ht){Et.get(ht).currentProgram.isReady()&&G.delete(ht)}),G.size===0){R(x);return}setTimeout(et,10)}Ht.get("KHR_parallel_shader_compile")!==null?et():setTimeout(et,10)})};let ot=null;function It(x){ot&&ot(x)}function te(){Me.stop()}function ge(){Me.start()}let Me=new $c;Me.setAnimationLoop(It),typeof self<"u"&&Me.setContext(self),this.setAnimationLoop=function(x){ot=x,k.setAnimationLoop(x),x===null?Me.stop():Me.start()},k.addEventListener("sessionstart",te),k.addEventListener("sessionend",ge),this.render=function(x,P){if(P!==void 0&&P.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(O===!0)return;if(x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),P.parent===null&&P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),k.enabled===!0&&k.isPresenting===!0&&(k.cameraAutoUpdate===!0&&k.updateCamera(P),P=k.getCamera()),x.isScene===!0&&x.onBeforeRender(M,x,P,L),h=Vt.get(x,w.length),h.init(P),w.push(h),St.multiplyMatrices(P.projectionMatrix,P.matrixWorldInverse),Y.setFromProjectionMatrix(St),gt=this.localClippingEnabled,$=Z.init(this.clippingPlanes,gt),g=ut.get(x,S.length),g.init(),S.push(g),k.enabled===!0&&k.isPresenting===!0){let et=M.xr.getDepthSensingMesh();et!==null&&Gt(et,P,-1/0,M.sortObjects)}Gt(x,P,0,M.sortObjects),g.finish(),M.sortObjects===!0&&g.sort(rt,dt),Dt=k.enabled===!1||k.isPresenting===!1||k.hasDepthSensing()===!1,Dt&&wt.addToRenderList(g,x),this.info.render.frame++,$===!0&&Z.beginShadows();let N=h.state.shadowsArray;ft.render(N,x,P),$===!0&&Z.endShadows(),this.info.autoReset===!0&&this.info.reset();let G=g.opaque,R=g.transmissive;if(h.setupLights(),P.isArrayCamera){let et=P.cameras;if(R.length>0)for(let ht=0,At=et.length;ht<At;ht++){let vt=et[ht];he(G,R,x,vt)}Dt&&wt.render(x);for(let ht=0,At=et.length;ht<At;ht++){let vt=et[ht];re(g,x,vt,vt.viewport)}}else R.length>0&&he(G,R,x,P),Dt&&wt.render(x),re(g,x,P);L!==null&&(_.updateMultisampleRenderTarget(L),_.updateRenderTargetMipmap(L)),x.isScene===!0&&x.onAfterRender(M,x,P),$t.resetDefaultState(),E=-1,y=null,w.pop(),w.length>0?(h=w[w.length-1],$===!0&&Z.setGlobalState(M.clippingPlanes,h.state.camera)):h=null,S.pop(),S.length>0?g=S[S.length-1]:g=null};function Gt(x,P,N,G){if(x.visible===!1)return;if(x.layers.test(P.layers)){if(x.isGroup)N=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(P);else if(x.isLight)h.pushLight(x),x.castShadow&&h.pushShadow(x);else if(x.isSprite){if(!x.frustumCulled||Y.intersectsSprite(x)){G&&Ut.setFromMatrixPosition(x.matrixWorld).applyMatrix4(St);let ht=V.update(x),At=x.material;At.visible&&g.push(x,ht,At,N,Ut.z,null)}}else if((x.isMesh||x.isLine||x.isPoints)&&(!x.frustumCulled||Y.intersectsObject(x))){let ht=V.update(x),At=x.material;if(G&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),Ut.copy(x.boundingSphere.center)):(ht.boundingSphere===null&&ht.computeBoundingSphere(),Ut.copy(ht.boundingSphere.center)),Ut.applyMatrix4(x.matrixWorld).applyMatrix4(St)),Array.isArray(At)){let vt=ht.groups;for(let Pt=0,Lt=vt.length;Pt<Lt;Pt++){let xt=vt[Pt],Xt=At[xt.materialIndex];Xt&&Xt.visible&&g.push(x,ht,Xt,N,Ut.z,xt)}}else At.visible&&g.push(x,ht,At,N,Ut.z,null)}}let et=x.children;for(let ht=0,At=et.length;ht<At;ht++)Gt(et[ht],P,N,G)}function re(x,P,N,G){let R=x.opaque,et=x.transmissive,ht=x.transparent;h.setupLightsView(N),$===!0&&Z.setGlobalState(M.clippingPlanes,N),G&&_t.viewport(T.copy(G)),R.length>0&&Le(R,P,N),et.length>0&&Le(et,P,N),ht.length>0&&Le(ht,P,N),_t.buffers.depth.setTest(!0),_t.buffers.depth.setMask(!0),_t.buffers.color.setMask(!0),_t.setPolygonOffset(!1)}function he(x,P,N,G){if((N.isScene===!0?N.overrideMaterial:null)!==null)return;h.state.transmissionRenderTarget[G.id]===void 0&&(h.state.transmissionRenderTarget[G.id]=new xn(1,1,{generateMipmaps:!0,type:Ht.has("EXT_color_buffer_half_float")||Ht.has("EXT_color_buffer_float")?as:An,minFilter:Kn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Wt.workingColorSpace}));let et=h.state.transmissionRenderTarget[G.id],ht=G.viewport||T;et.setSize(ht.z,ht.w);let At=M.getRenderTarget();M.setRenderTarget(et),M.getClearColor(X),q=M.getClearAlpha(),q<1&&M.setClearColor(16777215,.5),M.clear(),Dt&&wt.render(N);let vt=M.toneMapping;M.toneMapping=Rn;let Pt=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),h.setupLightsView(G),$===!0&&Z.setGlobalState(M.clippingPlanes,G),Le(x,N,G),_.updateMultisampleRenderTarget(et),_.updateRenderTargetMipmap(et),Ht.has("WEBGL_multisampled_render_to_texture")===!1){let Lt=!1;for(let xt=0,Xt=P.length;xt<Xt;xt++){let se=P[xt],oe=se.object,Be=se.geometry,jt=se.material,yt=se.group;if(jt.side===Ze&&oe.layers.test(G.layers)){let an=jt.side;jt.side=Pe,jt.needsUpdate=!0,Un(oe,N,G,Be,jt,yt),jt.side=an,jt.needsUpdate=!0,Lt=!0}}Lt===!0&&(_.updateMultisampleRenderTarget(et),_.updateRenderTargetMipmap(et))}M.setRenderTarget(At),M.setClearColor(X,q),Pt!==void 0&&(G.viewport=Pt),M.toneMapping=vt}function Le(x,P,N){let G=P.isScene===!0?P.overrideMaterial:null;for(let R=0,et=x.length;R<et;R++){let ht=x[R],At=ht.object,vt=ht.geometry,Pt=G===null?ht.material:G,Lt=ht.group;At.layers.test(N.layers)&&Un(At,P,N,vt,Pt,Lt)}}function Un(x,P,N,G,R,et){x.onBeforeRender(M,P,N,G,R,et),x.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),R.onBeforeRender(M,P,N,G,x,et),R.transparent===!0&&R.side===Ze&&R.forceSinglePass===!1?(R.side=Pe,R.needsUpdate=!0,M.renderBufferDirect(N,P,G,R,x,et),R.side=Ln,R.needsUpdate=!0,M.renderBufferDirect(N,P,G,R,x,et),R.side=Ze):M.renderBufferDirect(N,P,G,R,x,et),x.onAfterRender(M,P,N,G,R,et)}function En(x,P,N){P.isScene!==!0&&(P=ie);let G=Et.get(x),R=h.state.lights,et=h.state.shadowsArray,ht=R.state.version,At=mt.getParameters(x,R.state,et,P,N),vt=mt.getProgramCacheKey(At),Pt=G.programs;G.environment=x.isMeshStandardMaterial?P.environment:null,G.fog=P.fog,G.envMap=(x.isMeshStandardMaterial?F:A).get(x.envMap||G.environment),G.envMapRotation=G.environment!==null&&x.envMap===null?P.environmentRotation:x.envMapRotation,Pt===void 0&&(x.addEventListener("dispose",Bt),Pt=new Map,G.programs=Pt);let Lt=Pt.get(vt);if(Lt!==void 0){if(G.currentProgram===Lt&&G.lightsStateVersion===ht)return Gi(x,At),Lt}else At.uniforms=mt.getUniforms(x),x.onBeforeCompile(At,M),Lt=mt.acquireProgram(At,vt),Pt.set(vt,Lt),G.uniforms=At.uniforms;let xt=G.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(xt.clippingPlanes=Z.uniform),Gi(x,At),G.needsLights=si(x),G.lightsStateVersion=ht,G.needsLights&&(xt.ambientLightColor.value=R.state.ambient,xt.lightProbe.value=R.state.probe,xt.directionalLights.value=R.state.directional,xt.directionalLightShadows.value=R.state.directionalShadow,xt.spotLights.value=R.state.spot,xt.spotLightShadows.value=R.state.spotShadow,xt.rectAreaLights.value=R.state.rectArea,xt.ltc_1.value=R.state.rectAreaLTC1,xt.ltc_2.value=R.state.rectAreaLTC2,xt.pointLights.value=R.state.point,xt.pointLightShadows.value=R.state.pointShadow,xt.hemisphereLights.value=R.state.hemi,xt.directionalShadowMap.value=R.state.directionalShadowMap,xt.directionalShadowMatrix.value=R.state.directionalShadowMatrix,xt.spotShadowMap.value=R.state.spotShadowMap,xt.spotLightMatrix.value=R.state.spotLightMatrix,xt.spotLightMap.value=R.state.spotLightMap,xt.pointShadowMap.value=R.state.pointShadowMap,xt.pointShadowMatrix.value=R.state.pointShadowMatrix),G.currentProgram=Lt,G.uniformsList=null,Lt}function ii(x){if(x.uniformsList===null){let P=x.currentProgram.getUniforms();x.uniformsList=Ci.seqWithValue(P.seq,x.uniforms)}return x.uniformsList}function Gi(x,P){let N=Et.get(x);N.outputColorSpace=P.outputColorSpace,N.batching=P.batching,N.batchingColor=P.batchingColor,N.instancing=P.instancing,N.instancingColor=P.instancingColor,N.instancingMorph=P.instancingMorph,N.skinning=P.skinning,N.morphTargets=P.morphTargets,N.morphNormals=P.morphNormals,N.morphColors=P.morphColors,N.morphTargetsCount=P.morphTargetsCount,N.numClippingPlanes=P.numClippingPlanes,N.numIntersection=P.numClipIntersection,N.vertexAlphas=P.vertexAlphas,N.vertexTangents=P.vertexTangents,N.toneMapping=P.toneMapping}function cs(x,P,N,G,R){P.isScene!==!0&&(P=ie),_.resetTextureUnits();let et=P.fog,ht=G.isMeshStandardMaterial?P.environment:null,At=L===null?M.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:Ui,vt=(G.isMeshStandardMaterial?F:A).get(G.envMap||ht),Pt=G.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,Lt=!!N.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),xt=!!N.morphAttributes.position,Xt=!!N.morphAttributes.normal,se=!!N.morphAttributes.color,oe=Rn;G.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(oe=M.toneMapping);let Be=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,jt=Be!==void 0?Be.length:0,yt=Et.get(G),an=h.state.lights;if($===!0&&(gt===!0||x!==y)){let Qe=x===y&&G.id===E;Z.setState(G,x,Qe)}let Jt=!1;G.version===yt.__version?(yt.needsLights&&yt.lightsStateVersion!==an.state.version||yt.outputColorSpace!==At||R.isBatchedMesh&&yt.batching===!1||!R.isBatchedMesh&&yt.batching===!0||R.isBatchedMesh&&yt.batchingColor===!0&&R.colorTexture===null||R.isBatchedMesh&&yt.batchingColor===!1&&R.colorTexture!==null||R.isInstancedMesh&&yt.instancing===!1||!R.isInstancedMesh&&yt.instancing===!0||R.isSkinnedMesh&&yt.skinning===!1||!R.isSkinnedMesh&&yt.skinning===!0||R.isInstancedMesh&&yt.instancingColor===!0&&R.instanceColor===null||R.isInstancedMesh&&yt.instancingColor===!1&&R.instanceColor!==null||R.isInstancedMesh&&yt.instancingMorph===!0&&R.morphTexture===null||R.isInstancedMesh&&yt.instancingMorph===!1&&R.morphTexture!==null||yt.envMap!==vt||G.fog===!0&&yt.fog!==et||yt.numClippingPlanes!==void 0&&(yt.numClippingPlanes!==Z.numPlanes||yt.numIntersection!==Z.numIntersection)||yt.vertexAlphas!==Pt||yt.vertexTangents!==Lt||yt.morphTargets!==xt||yt.morphNormals!==Xt||yt.morphColors!==se||yt.toneMapping!==oe||yt.morphTargetsCount!==jt)&&(Jt=!0):(Jt=!0,yt.__version=G.version);let Xe=yt.currentProgram;Jt===!0&&(Xe=En(G,P,R));let ri=!1,Fe=!1,zi=!1,ae=Xe.getUniforms(),en=yt.uniforms;if(_t.useProgram(Xe.program)&&(ri=!0,Fe=!0,zi=!0),G.id!==E&&(E=G.id,Fe=!0),ri||y!==x){_t.buffers.depth.getReversed()?(it.copy(x.projectionMatrix),gh(it),mh(it),ae.setValue(I,"projectionMatrix",it)):ae.setValue(I,"projectionMatrix",x.projectionMatrix),ae.setValue(I,"viewMatrix",x.matrixWorldInverse);let _n=ae.map.cameraPosition;_n!==void 0&&_n.setValue(I,Tt.setFromMatrixPosition(x.matrixWorld)),zt.logarithmicDepthBuffer&&ae.setValue(I,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&ae.setValue(I,"isOrthographic",x.isOrthographicCamera===!0),y!==x&&(y=x,Fe=!0,zi=!0)}if(R.isSkinnedMesh){ae.setOptional(I,R,"bindMatrix"),ae.setOptional(I,R,"bindMatrixInverse");let Qe=R.skeleton;Qe&&(Qe.boneTexture===null&&Qe.computeBoneTexture(),ae.setValue(I,"boneTexture",Qe.boneTexture,_))}R.isBatchedMesh&&(ae.setOptional(I,R,"batchingTexture"),ae.setValue(I,"batchingTexture",R._matricesTexture,_),ae.setOptional(I,R,"batchingIdTexture"),ae.setValue(I,"batchingIdTexture",R._indirectTexture,_),ae.setOptional(I,R,"batchingColorTexture"),R._colorsTexture!==null&&ae.setValue(I,"batchingColorTexture",R._colorsTexture,_));let ki=N.morphAttributes;if((ki.position!==void 0||ki.normal!==void 0||ki.color!==void 0)&&Ct.update(R,N,Xe),(Fe||yt.receiveShadow!==R.receiveShadow)&&(yt.receiveShadow=R.receiveShadow,ae.setValue(I,"receiveShadow",R.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(en.envMap.value=vt,en.flipEnvMap.value=vt.isCubeTexture&&vt.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&P.environment!==null&&(en.envMapIntensity.value=P.environmentIntensity),Fe&&(ae.setValue(I,"toneMappingExposure",M.toneMappingExposure),yt.needsLights&&We(en,zi),et&&G.fog===!0&&st.refreshFogUniforms(en,et),st.refreshMaterialUniforms(en,G,H,tt,h.state.transmissionRenderTarget[x.id]),Ci.upload(I,ii(yt),en,_)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Ci.upload(I,ii(yt),en,_),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&ae.setValue(I,"center",R.center),ae.setValue(I,"modelViewMatrix",R.modelViewMatrix),ae.setValue(I,"normalMatrix",R.normalMatrix),ae.setValue(I,"modelMatrix",R.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){let Qe=G.uniformsGroups;for(let _n=0,wn=Qe.length;_n<wn;_n++){let ba=Qe[_n];D.update(ba,Xe),D.bind(ba,Xe)}}return Xe}function We(x,P){x.ambientLightColor.needsUpdate=P,x.lightProbe.needsUpdate=P,x.directionalLights.needsUpdate=P,x.directionalLightShadows.needsUpdate=P,x.pointLights.needsUpdate=P,x.pointLightShadows.needsUpdate=P,x.spotLights.needsUpdate=P,x.spotLightShadows.needsUpdate=P,x.rectAreaLights.needsUpdate=P,x.hemisphereLights.needsUpdate=P}function si(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(x,P,N){Et.get(x.texture).__webglTexture=P,Et.get(x.depthTexture).__webglTexture=N;let G=Et.get(x);G.__hasExternalTextures=!0,G.__autoAllocateDepthBuffer=N===void 0,G.__autoAllocateDepthBuffer||Ht.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(x,P){let N=Et.get(x);N.__webglFramebuffer=P,N.__useDefaultFramebuffer=P===void 0},this.setRenderTarget=function(x,P=0,N=0){L=x,C=P,b=N;let G=!0,R=null,et=!1,ht=!1;if(x){let vt=Et.get(x);if(vt.__useDefaultFramebuffer!==void 0)_t.bindFramebuffer(I.FRAMEBUFFER,null),G=!1;else if(vt.__webglFramebuffer===void 0)_.setupRenderTarget(x);else if(vt.__hasExternalTextures)_.rebindTextures(x,Et.get(x.texture).__webglTexture,Et.get(x.depthTexture).__webglTexture);else if(x.depthBuffer){let xt=x.depthTexture;if(vt.__boundDepthTexture!==xt){if(xt!==null&&Et.has(xt)&&(x.width!==xt.image.width||x.height!==xt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");_.setupDepthRenderbuffer(x)}}let Pt=x.texture;(Pt.isData3DTexture||Pt.isDataArrayTexture||Pt.isCompressedArrayTexture)&&(ht=!0);let Lt=Et.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(Lt[P])?R=Lt[P][N]:R=Lt[P],et=!0):x.samples>0&&_.useMultisampledRTT(x)===!1?R=Et.get(x).__webglMultisampledFramebuffer:Array.isArray(Lt)?R=Lt[N]:R=Lt,T.copy(x.viewport),W.copy(x.scissor),z=x.scissorTest}else T.copy(Mt).multiplyScalar(H).floor(),W.copy(Nt).multiplyScalar(H).floor(),z=Kt;if(_t.bindFramebuffer(I.FRAMEBUFFER,R)&&G&&_t.drawBuffers(x,R),_t.viewport(T),_t.scissor(W),_t.setScissorTest(z),et){let vt=Et.get(x.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+P,vt.__webglTexture,N)}else if(ht){let vt=Et.get(x.texture),Pt=P||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,vt.__webglTexture,N||0,Pt)}E=-1},this.readRenderTargetPixels=function(x,P,N,G,R,et,ht){if(!(x&&x.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let At=Et.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&ht!==void 0&&(At=At[ht]),At){_t.bindFramebuffer(I.FRAMEBUFFER,At);try{let vt=x.texture,Pt=vt.format,Lt=vt.type;if(!zt.textureFormatReadable(Pt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!zt.textureTypeReadable(Lt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}P>=0&&P<=x.width-G&&N>=0&&N<=x.height-R&&I.readPixels(P,N,G,R,Rt.convert(Pt),Rt.convert(Lt),et)}finally{let vt=L!==null?Et.get(L).__webglFramebuffer:null;_t.bindFramebuffer(I.FRAMEBUFFER,vt)}}},this.readRenderTargetPixelsAsync=async function(x,P,N,G,R,et,ht){if(!(x&&x.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let At=Et.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&ht!==void 0&&(At=At[ht]),At){let vt=x.texture,Pt=vt.format,Lt=vt.type;if(!zt.textureFormatReadable(Pt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!zt.textureTypeReadable(Lt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(P>=0&&P<=x.width-G&&N>=0&&N<=x.height-R){_t.bindFramebuffer(I.FRAMEBUFFER,At);let xt=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,xt),I.bufferData(I.PIXEL_PACK_BUFFER,et.byteLength,I.STREAM_READ),I.readPixels(P,N,G,R,Rt.convert(Pt),Rt.convert(Lt),0);let Xt=L!==null?Et.get(L).__webglFramebuffer:null;_t.bindFramebuffer(I.FRAMEBUFFER,Xt);let se=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await ph(I,se,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,xt),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,et),I.deleteBuffer(xt),I.deleteSync(se),et}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(x,P=null,N=0){x.isTexture!==!0&&(ji("WebGLRenderer: copyFramebufferToTexture function signature has changed."),P=arguments[0]||null,x=arguments[1]);let G=Math.pow(2,-N),R=Math.floor(x.image.width*G),et=Math.floor(x.image.height*G),ht=P!==null?P.x:0,At=P!==null?P.y:0;_.setTexture2D(x,0),I.copyTexSubImage2D(I.TEXTURE_2D,N,0,0,ht,At,R,et),_t.unbindTexture()},this.copyTextureToTexture=function(x,P,N=null,G=null,R=0){x.isTexture!==!0&&(ji("WebGLRenderer: copyTextureToTexture function signature has changed."),G=arguments[0]||null,x=arguments[1],P=arguments[2],R=arguments[3]||0,N=null);let et,ht,At,vt,Pt,Lt,xt,Xt,se,oe=x.isCompressedTexture?x.mipmaps[R]:x.image;N!==null?(et=N.max.x-N.min.x,ht=N.max.y-N.min.y,At=N.isBox3?N.max.z-N.min.z:1,vt=N.min.x,Pt=N.min.y,Lt=N.isBox3?N.min.z:0):(et=oe.width,ht=oe.height,At=oe.depth||1,vt=0,Pt=0,Lt=0),G!==null?(xt=G.x,Xt=G.y,se=G.z):(xt=0,Xt=0,se=0);let Be=Rt.convert(P.format),jt=Rt.convert(P.type),yt;P.isData3DTexture?(_.setTexture3D(P,0),yt=I.TEXTURE_3D):P.isDataArrayTexture||P.isCompressedArrayTexture?(_.setTexture2DArray(P,0),yt=I.TEXTURE_2D_ARRAY):(_.setTexture2D(P,0),yt=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,P.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,P.unpackAlignment);let an=I.getParameter(I.UNPACK_ROW_LENGTH),Jt=I.getParameter(I.UNPACK_IMAGE_HEIGHT),Xe=I.getParameter(I.UNPACK_SKIP_PIXELS),ri=I.getParameter(I.UNPACK_SKIP_ROWS),Fe=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,oe.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,oe.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,vt),I.pixelStorei(I.UNPACK_SKIP_ROWS,Pt),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Lt);let zi=x.isDataArrayTexture||x.isData3DTexture,ae=P.isDataArrayTexture||P.isData3DTexture;if(x.isRenderTargetTexture||x.isDepthTexture){let en=Et.get(x),ki=Et.get(P),Qe=Et.get(en.__renderTarget),_n=Et.get(ki.__renderTarget);_t.bindFramebuffer(I.READ_FRAMEBUFFER,Qe.__webglFramebuffer),_t.bindFramebuffer(I.DRAW_FRAMEBUFFER,_n.__webglFramebuffer);for(let wn=0;wn<At;wn++)zi&&I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Et.get(x).__webglTexture,R,Lt+wn),x.isDepthTexture?(ae&&I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Et.get(P).__webglTexture,R,se+wn),I.blitFramebuffer(vt,Pt,et,ht,xt,Xt,et,ht,I.DEPTH_BUFFER_BIT,I.NEAREST)):ae?I.copyTexSubImage3D(yt,R,xt,Xt,se+wn,vt,Pt,et,ht):I.copyTexSubImage2D(yt,R,xt,Xt,se+wn,vt,Pt,et,ht);_t.bindFramebuffer(I.READ_FRAMEBUFFER,null),_t.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else ae?x.isDataTexture||x.isData3DTexture?I.texSubImage3D(yt,R,xt,Xt,se,et,ht,At,Be,jt,oe.data):P.isCompressedArrayTexture?I.compressedTexSubImage3D(yt,R,xt,Xt,se,et,ht,At,Be,oe.data):I.texSubImage3D(yt,R,xt,Xt,se,et,ht,At,Be,jt,oe):x.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,R,xt,Xt,et,ht,Be,jt,oe.data):x.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,R,xt,Xt,oe.width,oe.height,Be,oe.data):I.texSubImage2D(I.TEXTURE_2D,R,xt,Xt,et,ht,Be,jt,oe);I.pixelStorei(I.UNPACK_ROW_LENGTH,an),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Jt),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Xe),I.pixelStorei(I.UNPACK_SKIP_ROWS,ri),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Fe),R===0&&P.generateMipmaps&&I.generateMipmap(yt),_t.unbindTexture()},this.copyTextureToTexture3D=function(x,P,N=null,G=null,R=0){return x.isTexture!==!0&&(ji("WebGLRenderer: copyTextureToTexture3D function signature has changed."),N=arguments[0]||null,G=arguments[1]||null,x=arguments[2],P=arguments[3],R=arguments[4]||0),ji('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(x,P,N,G,R)},this.initRenderTarget=function(x){Et.get(x).__webglFramebuffer===void 0&&_.setupRenderTarget(x)},this.initTexture=function(x){x.isCubeTexture?_.setTextureCube(x,0):x.isData3DTexture?_.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?_.setTexture2DArray(x,0):_.setTexture2D(x,0),_t.unbindTexture()},this.resetState=function(){C=0,b=0,L=null,_t.reset(),$t.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return pn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=Wt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Wt._getUnpackColorSpace()}};var Zs=class extends De{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Mn,this.environmentIntensity=1,this.environmentRotation=new Mn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var $o=class extends ze{constructor(t=null,e=1,n=1,s,r,o,a,c,l=Ne,u=Ne,d,f){super(null,o,a,c,l,u,s,r,d,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var $s=class extends Ge{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},yi=new qt,Dc=new qt,Bs=[],Bc=new yn,ug=new qt,Wi=new me,Xi=new Fn,tr=class extends me{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new $s(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,ug)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new yn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,yi),Bc.copy(t.boundingBox).applyMatrix4(yi),this.boundingBox.union(Bc)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Fn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,yi),Xi.copy(t.boundingSphere).applyMatrix4(yi),this.boundingSphere.union(Xi)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(Wi.geometry=this.geometry,Wi.material=this.material,Wi.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Xi.copy(this.boundingSphere),Xi.applyMatrix4(n),t.ray.intersectsSphere(Xi)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,yi),Dc.multiplyMatrices(n,yi),Wi.matrixWorld=Dc,Wi.raycast(t,Bs);for(let o=0,a=Bs.length;o<a;o++){let c=Bs[o];c.instanceId=r,c.object=this,e.push(c)}Bs.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new $s(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new $o(new Float32Array(s*this.count),s,this.count,Aa,rn));let r=this.morphTexture.source.data.data,o=0;for(let l=0;l<n.length;l++)o+=n[l];let a=this.geometry.morphTargetsRelative?1:1-o,c=s*t;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var er=class extends qn{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new Yt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},nr=new B,ir=new B,Ic=new qt,Ki=new Jn,Is=new Fn,Xr=new B,Pc=new B,sr=class extends De{constructor(t=new He,e=new er){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)nr.fromBufferAttribute(e,s-1),ir.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=nr.distanceTo(ir);t.setAttribute("lineDistance",new Ae(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Is.copy(n.boundingSphere),Is.applyMatrix4(s),Is.radius+=r,t.ray.intersectsSphere(Is)===!1)return;Ic.copy(s).invert(),Ki.copy(t.ray).applyMatrix4(Ic);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,u=n.index,f=n.attributes.position;if(u!==null){let p=Math.max(0,o.start),m=Math.min(u.count,o.start+o.count);for(let v=p,g=m-1;v<g;v+=l){let h=u.getX(v),S=u.getX(v+1),w=Ps(this,t,Ki,c,h,S);w&&e.push(w)}if(this.isLineLoop){let v=u.getX(m-1),g=u.getX(p),h=Ps(this,t,Ki,c,v,g);h&&e.push(h)}}else{let p=Math.max(0,o.start),m=Math.min(f.count,o.start+o.count);for(let v=p,g=m-1;v<g;v+=l){let h=Ps(this,t,Ki,c,v,v+1);h&&e.push(h)}if(this.isLineLoop){let v=Ps(this,t,Ki,c,m-1,p);v&&e.push(v)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Ps(i,t,e,n,s,r){let o=i.geometry.attributes.position;if(nr.fromBufferAttribute(o,s),ir.fromBufferAttribute(o,r),e.distanceSqToSegment(nr,ir,Xr,Pc)>n)return;Xr.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(Xr);if(!(c<t.near||c>t.far))return{distance:c,point:Pc.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}var ta=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),s=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);let u=n[s],f=n[s+1]-u,p=(o-u)/f;return(s+p)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),c=e||(o.isVector2?new bt:new B);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new B,s=[],r=[],o=[],a=new B,c=new qt;for(let p=0;p<=t;p++){let m=p/t;s[p]=this.getTangentAt(m,new B)}r[0]=new B,o[0]=new B;let l=Number.MAX_VALUE,u=Math.abs(s[0].x),d=Math.abs(s[0].y),f=Math.abs(s[0].z);u<=l&&(l=u,n.set(1,0,0)),d<=l&&(l=d,n.set(0,1,0)),f<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let p=1;p<=t;p++){if(r[p]=r[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(s[p-1],s[p]),a.length()>Number.EPSILON){a.normalize();let m=Math.acos(_e(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(c.makeRotationAxis(a,m))}o[p].crossVectors(s[p],r[p])}if(e===!0){let p=Math.acos(_e(r[0].dot(r[t]),-1,1));p/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(p=-p);for(let m=1;m<=t;m++)r[m].applyMatrix4(c.makeRotationAxis(s[m],p*m)),o[m].crossVectors(s[m],r[m])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}};function dg(i,t){let e=1-i;return e*e*t}function fg(i,t){return 2*(1-i)*i*t}function pg(i,t){return i*i*t}function Kr(i,t,e,n){return dg(i,t)+fg(i,e)+pg(i,n)}var rr=class extends ta{constructor(t=new B,e=new B,n=new B){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new B){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Kr(t,s.x,r.x,o.x),Kr(t,s.y,r.y,o.y),Kr(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}};var or=class i extends He{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],c=[],l=new B,u=new bt;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let d=0,f=3;d<=e;d++,f+=3){let p=n+d/e*s;l.x=t*Math.cos(p),l.y=t*Math.sin(p),o.push(l.x,l.y,l.z),a.push(0,0,1),u.x=(o[f]/t+1)/2,u.y=(o[f+1]/t+1)/2,c.push(u.x,u.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new Ae(o,3)),this.setAttribute("normal",new Ae(a,3)),this.setAttribute("uv",new Ae(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}};var ar=class i extends He{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);let a=[],c=[],l=[],u=[],d=t,f=(e-t)/s,p=new B,m=new bt;for(let v=0;v<=s;v++){for(let g=0;g<=n;g++){let h=r+g/n*o;p.x=d*Math.cos(h),p.y=d*Math.sin(h),c.push(p.x,p.y,p.z),l.push(0,0,1),m.x=(p.x/e+1)/2,m.y=(p.y/e+1)/2,u.push(m.x,m.y)}d+=f}for(let v=0;v<s;v++){let g=v*(n+1);for(let h=0;h<n;h++){let S=h+g,w=S,M=S+n+1,O=S+n+2,C=S+1;a.push(w,M,C),a.push(M,O,C)}}this.setIndex(a),this.setAttribute("position",new Ae(c,3)),this.setAttribute("normal",new Ae(l,3)),this.setAttribute("uv",new Ae(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var Li=class i extends He{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,u=[],d=new B,f=new B,p=[],m=[],v=[],g=[];for(let h=0;h<=n;h++){let S=[],w=h/n,M=0;h===0&&o===0?M=.5/e:h===n&&c===Math.PI&&(M=-.5/e);for(let O=0;O<=e;O++){let C=O/e;d.x=-t*Math.cos(s+C*r)*Math.sin(o+w*a),d.y=t*Math.cos(o+w*a),d.z=t*Math.sin(s+C*r)*Math.sin(o+w*a),m.push(d.x,d.y,d.z),f.copy(d).normalize(),v.push(f.x,f.y,f.z),g.push(C+M,1-w),S.push(l++)}u.push(S)}for(let h=0;h<n;h++)for(let S=0;S<e;S++){let w=u[h][S+1],M=u[h][S],O=u[h+1][S],C=u[h+1][S+1];(h!==0||o>0)&&p.push(w,M,C),(h!==n-1||c<Math.PI)&&p.push(M,O,C)}this.setIndex(p),this.setAttribute("position",new Ae(m,3)),this.setAttribute("normal",new Ae(v,3)),this.setAttribute("uv",new Ae(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var cr=class extends er{static get type(){return"LineDashedMaterial"}constructor(t){super(),this.isLineDashedMaterial=!0,this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(t)}copy(t){return super.copy(t),this.scale=t.scale,this.dashSize=t.dashSize,this.gapSize=t.gapSize,this}};function Rs(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function gg(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var Fi=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},ea=class extends Fi{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Pa,endingEnd:Pa}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Ra:r=t,a=2*e-n;break;case La:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Ra:o=t,c=2*n-e;break;case La:o=1,c=n+s[1]-s[0];break;default:o=t-1,c=e}let l=(n-e)*.5,u=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(c-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,u=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,p=this._weightNext,m=(n-e)/(s-e),v=m*m,g=v*m,h=-f*g+2*f*v-f*m,S=(1+f)*g+(-1.5-2*f)*v+(-.5+f)*m+1,w=(-1-p)*g+(1.5+p)*v+.5*m,M=p*g-p*v;for(let O=0;O!==a;++O)r[O]=h*o[u+O]+S*o[l+O]+w*o[c+O]+M*o[d+O];return r}},na=class extends Fi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,u=(n-e)/(s-e),d=1-u;for(let f=0;f!==a;++f)r[f]=o[l+f]*d+o[c+f]*u;return r}},ia=class extends Fi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},tn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Rs(e,this.TimeBufferType),this.values=Rs(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Rs(t.times,Array),values:Rs(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new ia(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new na(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new ea(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Gs:e=this.InterpolantFactoryMethodDiscrete;break;case Uo:e=this.InterpolantFactoryMethodLinear;break;case yr:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Gs;case this.InterpolantFactoryMethodLinear:return Uo;case this.InterpolantFactoryMethodSmooth:return yr}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),t=!1;break}o=c}if(s!==void 0&&gg(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===yr,r=t.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=t[a],u=t[a+1];if(l!==u&&(a!==1||l!==t[0]))if(s)c=!0;else{let d=a*n,f=d-n,p=d+n;for(let m=0;m!==n;++m){let v=e[d+m];if(v!==e[f+m]||v!==e[p+m]){c=!0;break}}}if(c){if(a!==o){t[o]=t[a];let d=a*n,f=o*n;for(let p=0;p!==n;++p)e[f+p]=e[d+p]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)e[c+l]=e[a+l];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};tn.prototype.TimeBufferType=Float32Array;tn.prototype.ValueBufferType=Float32Array;tn.prototype.DefaultInterpolation=Uo;var Zn=class extends tn{constructor(t,e,n){super(t,e,n)}};Zn.prototype.ValueTypeName="bool";Zn.prototype.ValueBufferType=Array;Zn.prototype.DefaultInterpolation=Gs;Zn.prototype.InterpolantFactoryMethodLinear=void 0;Zn.prototype.InterpolantFactoryMethodSmooth=void 0;var sa=class extends tn{};sa.prototype.ValueTypeName="color";var ra=class extends tn{};ra.prototype.ValueTypeName="number";var oa=class extends Fi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-e)/(s-e),l=t*a;for(let u=l+a;l!==u;l+=4)ke.slerpFlat(r,0,o,l-a,o,l,c);return r}},lr=class extends tn{InterpolantFactoryMethodLinear(t){return new oa(this.times,this.values,this.getValueSize(),t)}};lr.prototype.ValueTypeName="quaternion";lr.prototype.InterpolantFactoryMethodSmooth=void 0;var $n=class extends tn{constructor(t,e,n){super(t,e,n)}};$n.prototype.ValueTypeName="string";$n.prototype.ValueBufferType=Array;$n.prototype.DefaultInterpolation=Gs;$n.prototype.InterpolantFactoryMethodLinear=void 0;$n.prototype.InterpolantFactoryMethodSmooth=void 0;var aa=class extends tn{};aa.prototype.ValueTypeName="vector";var ca=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,d){return l.push(u,d),this},this.removeHandler=function(u){let d=l.indexOf(u);return d!==-1&&l.splice(d,2),this},this.getHandler=function(u){for(let d=0,f=l.length;d<f;d+=2){let p=l[d],m=l[d+1];if(p.global&&(p.lastIndex=0),p.test(u))return m}return null}}},mg=new ca,la=class{constructor(t){this.manager=t!==void 0?t:mg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};la.DEFAULT_MATERIAL_NAME="__DEFAULT";var hr=class extends De{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Yt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}};var jr=new qt,Rc=new B,Lc=new B,ha=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new bt(512,512),this.map=null,this.mapPass=null,this.matrix=new qt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ss,this._frameExtents=new bt(1,1),this._viewportCount=1,this._viewports=[new ue(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;Rc.setFromMatrixPosition(t.matrixWorld),e.position.copy(Rc),Lc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Lc),e.updateMatrixWorld(),jr.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(jr),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(jr)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var ua=class extends ha{constructor(){super(new Ks(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},rs=class extends hr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(De.DEFAULT_UP),this.updateMatrix(),this.target=new De,this.shadow=new ua}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},ur=class extends hr{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}};var _a="\\[\\]\\.:\\/",Ag=new RegExp("["+_a+"]","g"),wa="[^"+_a+"]",vg="[^"+_a.replace("\\.","")+"]",xg=/((?:WC+[\/:])*)/.source.replace("WC",wa),yg=/(WCOD+)?/.source.replace("WCOD",vg),Mg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",wa),Eg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",wa),_g=new RegExp("^"+xg+yg+Mg+Eg+"$"),wg=["material","materials","bones","map"],da=class{constructor(t,e,n){let s=n||ce.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},ce=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Ag,"")}static parseTrackName(t){let e=_g.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);wg.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let c=n(a.children);if(c)return c}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===l){l=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let o=t[s];if(o===void 0){let l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ce.Composite=da;ce.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ce.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ce.prototype.GetterByBindingType=[ce.prototype._getValue_direct,ce.prototype._getValue_array,ce.prototype._getValue_arrayElement,ce.prototype._getValue_toArray];ce.prototype.SetterByBindingTypeAndVersioning=[[ce.prototype._setValue_direct,ce.prototype._setValue_direct_setNeedsUpdate,ce.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ce.prototype._setValue_array,ce.prototype._setValue_array_setNeedsUpdate,ce.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ce.prototype._setValue_arrayElement,ce.prototype._setValue_arrayElement_setNeedsUpdate,ce.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ce.prototype._setValue_fromArray,ce.prototype._setValue_fromArray_setNeedsUpdate,ce.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var zg=new Float32Array(1);var Fc=new qt,dr=class{constructor(t,e,n=0,s=1/0){this.ray=new Jn(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new ns,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Fc.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Fc),this}intersectObject(t,e=!0,n=[]){return fa(t,this,n,e),n.sort(Uc),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)fa(t[s],this,n,e);return n.sort(Uc),n}};function Uc(i,t){return i.distance-t.distance}function fa(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let o=0,a=r.length;o<a;o++)fa(r[o],t,e,!0)}}var os=class{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(_e(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var fr=class extends vn{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"170"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="170");var sl={type:"change"},Ca={type:"start"},ol={type:"end"},Ar=new Jn,rl=new qe,Cg=Math.cos(70*ni.DEG2RAD),ye=new B,Re=2*Math.PI,ne={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Sa=1e-6,vr=class extends fr{constructor(t,e=null){super(t,e),this.state=ne.NONE,this.enabled=!0,this.target=new B,this.cursor=new B,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ti.ROTATE,MIDDLE:ti.DOLLY,RIGHT:ti.PAN},this.touches={ONE:ei.ROTATE,TWO:ei.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new B,this._lastQuaternion=new ke,this._lastTargetPosition=new B,this._quat=new ke().setFromUnitVectors(t.up,new B(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new os,this._sphericalDelta=new os,this._scale=1,this._panOffset=new B,this._rotateStart=new bt,this._rotateEnd=new bt,this._rotateDelta=new bt,this._panStart=new bt,this._panEnd=new bt,this._panDelta=new bt,this._dollyStart=new bt,this._dollyEnd=new bt,this._dollyDelta=new bt,this._dollyDirection=new B,this._mouse=new bt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Tg.bind(this),this._onPointerDown=bg.bind(this),this._onPointerUp=Dg.bind(this),this._onContextMenu=Ug.bind(this),this._onMouseWheel=Pg.bind(this),this._onKeyDown=Rg.bind(this),this._onTouchStart=Lg.bind(this),this._onTouchMove=Fg.bind(this),this._onMouseDown=Bg.bind(this),this._onMouseMove=Ig.bind(this),this._interceptControlDown=Og.bind(this),this._interceptControlUp=Ng.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(sl),this.update(),this.state=ne.NONE}update(t=null){let e=this.object.position;ye.copy(e).sub(this.target),ye.applyQuaternion(this._quat),this._spherical.setFromVector3(ye),this.autoRotate&&this.state===ne.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=Re:n>Math.PI&&(n-=Re),s<-Math.PI?s+=Re:s>Math.PI&&(s-=Re),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(ye.setFromSpherical(this._spherical),ye.applyQuaternion(this._quatInverse),e.copy(this.target).add(ye),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){let a=ye.length();o=this._clampDistance(a*this._scale);let c=a-o;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),r=!!c}else if(this.object.isOrthographicCamera){let a=new B(this._mouse.x,this._mouse.y,0);a.unproject(this.object);let c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=c!==this.object.zoom;let l=new B(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(a),this.object.updateMatrixWorld(),o=ye.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Ar.origin.copy(this.object.position),Ar.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Ar.direction))<Cg?this.object.lookAt(this.target):(rl.setFromNormalAndCoplanarPoint(this.object.up,this.target),Ar.intersectPlane(rl,this.target))))}else if(this.object.isOrthographicCamera){let o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Sa||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Sa||this._lastTargetPosition.distanceToSquared(this.target)>Sa?(this.dispatchEvent(sl),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Re/60*this.autoRotateSpeed*t:Re/60/60*this.autoRotateSpeed}_getZoomScale(t){let e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){ye.setFromMatrixColumn(e,0),ye.multiplyScalar(-t),this._panOffset.add(ye)}_panUp(t,e){this.screenSpacePanning===!0?ye.setFromMatrixColumn(e,1):(ye.setFromMatrixColumn(e,0),ye.crossVectors(this.object.up,ye)),ye.multiplyScalar(t),this._panOffset.add(ye)}_pan(t,e){let n=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;ye.copy(s).sub(this.target);let r=ye.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),s=t-n.left,r=e-n.top,o=n.width,a=n.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(Re*this._rotateDelta.x/e.clientHeight),this._rotateUp(Re*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(Re*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(-Re*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(Re*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(-Re*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{let n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(Re*this._rotateDelta.x/e.clientHeight),this._rotateUp(Re*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new bt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){let e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){let e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function bg(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function Tg(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function Dg(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(ol),this.state=ne.NONE;break;case 1:let t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function Bg(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case ti.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=ne.DOLLY;break;case ti.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ne.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ne.ROTATE}break;case ti.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ne.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ne.PAN}break;default:this.state=ne.NONE}this.state!==ne.NONE&&this.dispatchEvent(Ca)}function Ig(i){switch(this.state){case ne.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case ne.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case ne.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function Pg(i){this.enabled===!1||this.enableZoom===!1||this.state!==ne.NONE||(i.preventDefault(),this.dispatchEvent(Ca),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(ol))}function Rg(i){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(i)}function Lg(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case ei.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=ne.TOUCH_ROTATE;break;case ei.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=ne.TOUCH_PAN;break;default:this.state=ne.NONE}break;case 2:switch(this.touches.TWO){case ei.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=ne.TOUCH_DOLLY_PAN;break;case ei.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=ne.TOUCH_DOLLY_ROTATE;break;default:this.state=ne.NONE}break;default:this.state=ne.NONE}this.state!==ne.NONE&&this.dispatchEvent(Ca)}function Fg(i){switch(this._trackPointer(i),this.state){case ne.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case ne.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case ne.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case ne.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=ne.NONE}}function Ug(i){this.enabled!==!1&&i.preventDefault()}function Og(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Ng(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var al="eOoO5XjqkuXC6iDkwuqh5MLqIeXC6qLlwuqw8Q7rYuMO6+DjDuvd5A7rW+VY66LjWOua5FjrFuWk62bjpOvg46TrWuSk69Tk7uu04u7rpOPu6xzk7uuU5O7rVOju68zoOuz04jrsauM67ODjOuxW5DrszOSE7ODihOxU44TsyeOE7D3khOyy5ITsJuXQ7Kri0Owd49DskOPQ7ALk0Ox15NDs6OTQ7Frl0OyLGxrt6OIa7VnjGu3J4xrtOuQa7avkGu0c5RrtjeUa7f7lZu0j42btkuNm7QHkZu1w5Gbt4ORm7U/lZu2+5WbtLeaw7Q/jsO1947Dt6+Ow7VnksO3G5LDtNOWw7aLlsO3LDvzt3eL87Unj/O214/ztIeT87Y3k/O355PztZeX87XVB/O3hQfztTUJG7qDjRu4L5EbuduRG7uDkRu5L5UbutuVG7oRBRu7uQUbuWUKS7gPjku5s45Lu1eOS7j/kku6o5JLuEeWS7nvlku7k5ZLuTeaS7pVBku7/QZLuaEKS7tFC3O7B49zuKeTc7pHk3O755NzuYeXc7snl3O4x5tzuDELc7nRC3O7cQtzuREMo70bjKO+t4yjvE+Qo73rkKO/h5CjvSOUo76/lKO8W5ijvfeYo70E5KO/mQijvTUNy7xXjcu/g43LvReRy76vkcu8Q5XLvduVy79vlcu9A5nLvpuZy7wvncu8LOXLvcDly7/JCcu9XQ3LvvUO+72jjvu/M477vMOS+75Xkvu/55L7vXeW+78Hlvu8m5r7viua+78w4vu8xOb7vlTm+72BDvu/EQwjwVeMI8LjjCPAc5Ajwf+QI8OLkCPBF5QjwqOUI8AvmCPBv5gjw0uYI8DXnCPCY5wjwjzgI8GhDCPCSRFTwQ+NU8KXjVPAH5FTwaeRU8MvkVPAu5VTwkOVU8PLlVPBU5lTwtuZU8BjnVPB651Tw3DlU8JdEVPD5RJ7wkuOe8PPjnvBU5J7wteSe8BflnvB45Z7w2eWe8DrmnvCb5p7w/Oae8F3nnvC+557wOkSe8JtEnvD8ROrwgOPq8ODj6vBA5OrwoOTq8ADl6vBg5erwwOXq8CDm6vCA5urw4Obq8EDn6vCg5+rwAOjq8GDo6vDA6Orw4Dfq8AA56vBAROrwoETq8ABF6vBgRTTxbuM08c3jNPEs5DTxi+Q08erkNPFJ5TTxqOU08Qfm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XPe/Clz3Dwtc92ALXPexC1z3Agxc91MMXPekDFz39Qxc90YNXPeXDVz3ERFc92ERXPeyEVz3AxJc91QSXPelElz3jyxc9+AsXPcxLVz3gS1c99ItXPcjLlz3dC5c98UuXPcWL1z3Zy9c97gvXPcJMFz3WjBc96owXPf7MFz3TDFc950xXPfuMVz3PzJc95AyXPfhMlz3MjNc94MzXPfTM1z3JDRc93U0XPfGNFz3FzVc92g1XPe5NVz3CjZc91s2XPesNlz3/DZc9003XPeeN1z37zdc90A4XPeROFz34jhc9zM5XPeEOVz31Dlc9yU6XPcZQab3oeSm9/LkpvdC5ab3k+Wm9+Plpvc05qb3heam99Xmpvcm56b3duem98fnpvcX6Kb3aOim97jopvcJ6ab3Wemm96rppvf66ab3S+qm95vqpvfs6qb3Peum943rpvfe66b3Luym93/spvfP7Kb3IO2m93DtpvfB7ab3Ee6m92Lupvey7qb3A++m91Tvpvek76b39e+m96oFpvf6Bab3Swam95sGpvfsBqb3PAem940HpvfdB6b3Lgim934IpvfPCKb3IAmm93AJpvfBCab3EQqm92IKpveyCqb3Awum91MLpvekC6b39Aum90UMpveVDKb35gym9zcNpveHDab3/RCm904RpveeEab37xGm9z8SpveQEqb34BKm900tpveeLab37i2m9z8upvePLqb34C6m9zEvpveBL6b30i+m9yIwpvdzMKb3wzCm9xQxpvdkMab3tTGm9wUypvdWMqb3pjKm9/cypvdIM6b3mDOm9+kzpvc5NKb3ijSm99o0pvcrNab3ezWm98w1pvccNqb3bTam9702pvcON6b3Xjem9683pvcAOKb3UDim96E4pvfxOKb3Qjmm95I5pvfjOab3Mzqm935A8vfA5PL3EeXy92Hl8vex5fL3Aeby91Hm8vei5vL38uby90Ln8veS5/L34ufy9zLo8veD6PL30+jy9yPp8vdz6fL3w+ny9xTq8vdk6vL3tOry9wTr8vdU6/L3pOvy9/Xr8vdF7PL3lezy9+Xs8vc17fL3he3y99bt8vcm7vL3du7y98bu8vcW7/L3Z+/y97fv8vcH8PL3UwXy96MF8vfzBfL3RAby95QG8vfkBvL3NAfy94QH8vfUB/L3JQjy93UI8vfFCPL3FQny92UJ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Fg8A3BYPYNwWD8DcFg8g3RYPgN0WD+DdFg9A3hYPoN4WDwDfFg9g3xYPwN8WDyDgFg+A4BYP4OAWD0DhFg+g4RYPAOIWD2DiFg+g/BYPAP0WD2D9Fg/A/RYPIP4WD4D+Fg/g/hYPQP8WD6D/Fg8AABYPYAYWD0AIFg+gCBYPAAkWD2AJFg+AChYP4AoWD0ALFg+gCxYPAAwWD2AMFg/ADBYPIA0WD4ANFg/gDRYPQA4WD6AOFg8ADxYPYA8WD8APFg8gEBYPgBAWD+AQFg9AERYPoBEWDwASFg9gEhYPwBIWDyATFg+AExYP4BMWD0AUFg+gFBYPABUWD2AVFg/AFRYPIBYWD4AWFg/gFhYPQBcWD6AXFg8AGBYPYBgWD8AYFg8gGRYPgBkWD+AZFg9AGhYPoBoWDwAbFg9gGxYPwBsWDyAcFg+AHBYP4BwWD0AdFg+gHRYPAB4WD2AeFg/AHhYPIB8WD4AfFg/gHxYPQCAWD6AgFg8AIRYPYCEWD8AhFg8gIhYPgCIWD+AiFg9AIxYPoCMWDwAkFg9gJBYPwCQWDyAlFg+AJRYP4CUWD0AmFg+gJhYPACcWD2AnFg/AJxYPICgWD4AoFg/gKBYPQCkWD6ApFg8AKhYPYCoWD8AqFg8gKxYPgCsWD+ArFg9ALBYPoCwWDwAtFg9gLRYPwC0WDyAxFg+AMRYP4DEWD8A2Fg8gN2IP3c9iDz7QYg+f0GIPANFiD2HRYg/C0WIPI9JiD4TSYg/l0mIPRtNiD6fTYg8I1GIPadRiD8rUYg8r1WIPjNViD+3VYg9O1mIPr9ZiDxDXYg9x12IP0tdiDzPYYg+U2GIP9dhiD1bZYg+32WIPGNpiD3raYg/b2mIPPNtiD53bYg/+22IPX9xiD8DcYg8h3WIPgt1iD+PdYg9E3mIPpd5iDwbfYg9n32IPyN9iDyngYg+K4GIP6+BiD0zhYg+t4WIPDuJiD2/iYg/Q4mIPl/xiD/j8Yg9Z/WIPuv1iDxv+Yg98/mIP3f5iDz7/Yg+f/2IPIwFiD2kDYg9yBmIP9gdiD1cIYg+4CGIPPApiD50KYg/+CmIPXwtiD8ALYg8hDGIPggxiD+MMYg9EDWIPpQ1iDwYOYg9nDmIPyA5iDykPYg+KD2IP6w9iD00QYg+uEGIPDxFiD3ARYg/REWIPMhJiD5MSYg/0EmIPVRNiD7YT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";var cl=document.getElementById("isoStage");cl&&Gg(cl);function Gg(i){let t=window.gsap,e=window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches,n=document.getElementById("isoTip"),s=document.getElementById("isoPanel"),r=s.querySelector(".pol-img"),o=s.querySelector(".pol-cap"),a=s.querySelector(".pol-sub"),c=s.querySelector(".iso-panel-close"),l=document.getElementById("isoReplay"),u=[].slice.call(document.querySelectorAll(".jmap .jstep")),d="assets/journey/",f=[{id:"neu",city:"Boston",org:"Northeastern University",short:"Northeastern",role:"BFA, Graphic Design",years:"2017 \u2013 21",lat:42.36,lon:-71.06,step:0,ox:.16,oy:.14},{id:"usyd",city:"Sydney",org:"University of Sydney",short:"USYD",role:"Exchange Program",years:"2017 \u2013 18",lat:-33.87,lon:151.21,step:1,ox:.14,oy:-.06},{id:"wayfair",city:"Boston",org:"Wayfair",role:"Product Designer Co-op",years:"2020",lat:42.36,lon:-70.6,step:2,ox:.16,oy:-.08},{id:"tn",city:"Shanghai",org:"Tang Ning Medical Technology",short:"Tang Ning",role:"Product Designer",years:"2021 \u2013 22",lat:31.23,lon:121.47,step:3,ox:.14,oy:.06},{id:"umich",city:"Michigan",org:"University of Michigan",short:"UMich",role:"MS, Information Science (HCI)",years:"2022 \u2013 24",lat:42.28,lon:-83.74,step:4,ox:0,oy:.15},{id:"speedy",city:"Chicago",org:"SpeedyJob",role:"UX Designer",years:"2023 \u2013 24",lat:41.88,lon:-87.63,step:5,ox:-.14,oy:-.08},{id:"moms",city:"Los Angeles",org:"MomsinLA",role:"UX Designer",years:"2024 \u2013 25",lat:34.05,lon:-118.24,step:6,ox:-.14,oy:-.08},{id:"vizard",city:"Palo Alto",org:"Vizard",role:"UX Designer",years:"2025 \u2014 now",lat:37.44,lon:-122.14,step:7,ox:-.16,oy:.1,now:!0}],p=9411583,m=1710618,v=1,g=new qs({antialias:!0,alpha:!0,powerPreference:"high-performance"});g.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),g.outputColorSpace=Ie,g.domElement.className="iso-canvas",g.domElement.setAttribute("role","img"),g.domElement.setAttribute("aria-label","3D globe of my career journey. Drag to rotate, scroll to zoom, click a city for a photo."),i.insertBefore(g.domElement,i.firstChild);let h=new Zs,S=new Te(34,1,.1,50),w=de(30,-92,4.4);S.position.copy(w);let M=new vr(S,g.domElement);M.enableDamping=!0,M.dampingFactor=.07,M.enablePan=!1,M.minDistance=2.6,M.maxDistance=6.5,M.rotateSpeed=.55,M.zoomSpeed=.5,M.autoRotate=!e,M.autoRotateSpeed=.4,M.update(),h.add(new ur(16777215,1.9));let O=new rs(16777215,1.1);O.position.set(-3,4,5),h.add(O);let C=new rs(16777215,.5);C.position.set(4,-2,-3),h.add(C);let b=()=>document.documentElement.getAttribute("data-theme")==="dark",L={light:16448248,dark:2500134},E={light:1710618,dark:15921902},y=new me(new Li(v*.995,96,96),new on({color:b()?L.dark:L.light}));h.add(y);let T=new me(new Li(v*.996,96,96),new Ve({transparent:!0,depthWrite:!1,uniforms:{c:{value:new Yt(12434872)},k:{value:b()?0:.22}},vertexShader:"varying vec3 vN; varying vec3 vV; void main(){ vN = normalize(normalMatrix * normal); vec4 mv = modelViewMatrix * vec4(position,1.0); vV = normalize(-mv.xyz); gl_Position = projectionMatrix * mv; }",fragmentShader:"uniform vec3 c; uniform float k; varying vec3 vN; varying vec3 vV; void main(){ float f = 1.0 - max(dot(vN, vV), 0.0); float a = smoothstep(0.55, 1.0, f) * k; gl_FragColor = vec4(c, a); }"}));h.add(T);let W=atob(al),z=new Int16Array(W.length/2);for(let U=0;U<z.length;U++)z[U]=(W.charCodeAt(U*2)|W.charCodeAt(U*2+1)<<8)<<16>>16;let X=z.length/2,Q=ni.degToRad(.75)*v*.52,tt=new Ri(Q,Q),H=new on({color:b()?E.dark:E.light,side:Ze}),rt=new tr(tt,H,X);{let U=new qt,ot=new ke,It=new B(0,0,1),te=new B,ge=new B(1,1,1),Me=new B(0,1,0),Gt=new B,re=new B,he=new qt;for(let Le=0;Le<X;Le++){let Un=de(z[Le*2]/100,z[Le*2+1]/100,v*1.0005);te.copy(Un).normalize(),Gt.crossVectors(Me,te).normalize(),re.crossVectors(te,Gt).normalize(),he.makeBasis(Gt,re,te),ot.setFromRotationMatrix(he),U.compose(Un,ot,ge),rt.setMatrixAt(Le,U)}rt.instanceMatrix.needsUpdate=!0}rt.frustumCulled=!1,h.add(rt);let dt=new gn;h.add(dt);let Mt=new or(.0135,24),Nt=new ar(.0135,.0165,24),Kt=[],Y=document.createElement("div");Y.className="glabels",i.appendChild(Y);let $=f.map(U=>{let ot=new gn,It=de(U.lat,U.lon,v);ot.position.copy(It);let te=It.clone().normalize();ot.quaternion.setFromUnitVectors(new B(0,0,1),te);let ge=new on({color:U.now?p:b()?16777215:1710618}),Me=new me(Mt,ge);Me.position.z=.004;let Gt=new me(Nt,new on({color:b()?2500134:16448248}));Gt.position.z=.0035;let re=new me(new Li(.05,8,8),new on({visible:!1}));Me.userData.d=U,re.userData.d=U,ot.add(Gt,Me,re),dt.add(ot),Kt.push(re);let he=document.createElement("span");return he.className="gtag",he.textContent=U.short||U.org,Y.appendChild(he),Object.assign(U,{group:ot,dot:Me,out:Gt,mat:ge,tag:he,pos:It,n:te,t:0}),U}),gt=[];for(let U=0;U<f.length-1;U++){let ot=f[U].pos,It=f[U+1].pos,te=ot.angleTo(It),ge=ot.clone().add(It).normalize().multiplyScalar(v*(1+.06+te*.18)),Gt=new rr(ot.clone().multiplyScalar(1.006),ge,It.clone().multiplyScalar(1.006)).getPoints(80),re=new He().setFromPoints(Gt),he=new sr(re,new cr({color:b()?16777215:m,dashSize:.022,gapSize:.016,transparent:!0,opacity:.55}));he.computeLineDistances(),he.geometry.setDrawRange(0,0),h.add(he),gt.push(he)}let it=null;function St(){$.forEach(U=>{U.group.scale.set(1,1,1),U.t=1}),gt.forEach(U=>U.geometry.setDrawRange(0,81)),nt()}function Tt(){if(it&&it.kill(),e){St();return}$.forEach(ot=>{ot.group.scale.set(.001,.001,.001),ot.t=0}),gt.forEach(ot=>ot.geometry.setDrawRange(0,0)),it=t.timeline({onUpdate:nt});let U=.3;$.forEach((ot,It)=>{if(it.to(ot.group.scale,{x:1,y:1,z:1,duration:.45,ease:"back.out(2)"},U),it.to(ot,{t:1,duration:.3},U+.15),It<gt.length){let te={n:0};it.to(te,{n:81,duration:.5,ease:"power2.inOut",onUpdate:()=>gt[It].geometry.setDrawRange(0,Math.round(te.n))},U+.2)}U+=.45})}let Ut=new dr,ie=new bt,Dt=null,Qt=null,I=null,pe=!1,Ht=0,zt=new B;function _t(U){let ot=g.domElement.getBoundingClientRect();ie.set((U.clientX-ot.left)/ot.width*2-1,-((U.clientY-ot.top)/ot.height)*2+1)}function Zt(U){_t(U),Ut.setFromCamera(ie,S);let It=Ut.intersectObjects(Kt.concat([y]),!1)[0];return It&&It.object!==y?It.object.userData.d:null}let Et=new Yt(p);function _(U){U.tag.classList.add("on"),t.to(U.dot.scale,{x:1.7,y:1.7,z:1.7,duration:.25,ease:"power3.out",onUpdate:nt}),t.to(U.out.scale,{x:1.7,y:1.7,z:1.7,duration:.25,onUpdate:nt}),U.now||t.to(U.mat.color,{r:Et.r,g:Et.g,b:Et.b,duration:.25,onUpdate:nt})}function A(U){U.tag.classList.remove("on");let ot=new Yt(b()?16777215:1710618);t.to(U.dot.scale,{x:1,y:1,z:1,duration:.3,ease:"power3.out",onUpdate:nt}),t.to(U.out.scale,{x:1,y:1,z:1,duration:.3,onUpdate:nt}),U.now||t.to(U.mat.color,{r:ot.r,g:ot.g,b:ot.b,duration:.3,onUpdate:nt})}function F(U){U!==Dt&&(Dt&&Dt!==Qt&&A(Dt),Dt=U,g.domElement.style.cursor=U?"pointer":"grab",u.forEach((ot,It)=>ot.classList.toggle("hot",!!U&&It===U.step)),U?(_(U),j(U)):V(),nt())}function j(U){n.innerHTML="<b>"+mt(U.city)+"</b><span>"+mt(U.role)+" \xB7 "+mt(U.years)+"</span>",i.classList.add("tipon"),J(U)}function J(U){zt.copy(U.pos).multiplyScalar(1.03).project(S);let ot=g.domElement.getBoundingClientRect();n.style.left=(zt.x+1)/2*ot.width+"px",n.style.top=(1-zt.y)/2*ot.height+"px"}function V(){i.classList.remove("tipon")}function mt(U){return String(U).replace(/[&<>"]/g,ot=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[ot])}let st=g.domElement;st.style.cursor="grab";function ut(){M.autoRotate=!1,clearTimeout(Ht),Ht=setTimeout(()=>{!Qt&&!e&&(M.autoRotate=!0)},7e3)}st.addEventListener("pointerdown",U=>{I={x:U.clientX,y:U.clientY},pe=!1,ut()}),st.addEventListener("pointermove",U=>{if(I&&Math.hypot(U.clientX-I.x,U.clientY-I.y)>5&&(pe=!0),pe){Dt&&F(null);return}U.pointerType==="mouse"&&F(Zt(U))}),st.addEventListener("pointerup",U=>{let ot=pe;if(I=null,pe=!1,ot)return;let It=Zt(U);It?Vt(It):Qt&&Z()}),st.addEventListener("pointerleave",()=>{pe||F(null)}),st.addEventListener("wheel",ut,{passive:!0});function Vt(U){Qt&&Qt!==U&&A(Qt),Qt=U,_(U),V(),M.autoRotate=!1;let ot=Math.min(Math.max(S.position.length(),3.6),4),It=U.n.clone();if(i.clientWidth>480){let ge=new B().crossVectors(new B(0,1,0),It).normalize();It.add(ge.multiplyScalar(.3)).normalize()}ft(It.multiplyScalar(ot),.9),wt(U)}function Z(){Qt&&A(Qt),Qt=null,Ct(),ut()}function ft(U,ot){M.enabled=!1,t.to(S.position,{x:U.x,y:U.y,z:U.z,duration:e?0:ot,ease:"power3.inOut",onUpdate:()=>{M.update(),nt()},onComplete:()=>{M.enabled=!0}})}function wt(U){o.textContent=U.org,a.textContent=U.role+" \xB7 "+U.years+" \xB7 "+U.city,s.classList.remove("noimg"),r.onerror=()=>{s.classList.add("noimg"),r.removeAttribute("src")},r.alt=U.org+", "+U.city,r.src=d+U.id+".jpg",s.querySelector(".pol-ph").dataset.initial=U.city.charAt(0),s.hidden=!1,s.style.setProperty("--tilt",(Math.random()*6-3).toFixed(1)+"deg"),requestAnimationFrame(()=>{s.classList.add("open"),c.focus({preventScroll:!0})})}function Ct(){s.classList.remove("open"),setTimeout(()=>{s.classList.contains("open")||(s.hidden=!0)},280)}c.addEventListener("click",Z),document.addEventListener("keydown",U=>{U.key==="Escape"&&Qt&&Z()}),l.addEventListener("click",()=>{Z(),ft(w,.8),Tt()});let pt=new B,kt=new B,Rt=[[1,-1],[-1,-1],[1,1],[-1,1],[0,-1],[0,1]];function $t(){let U=g.domElement.getBoundingClientRect(),ot=U.width,It=U.height;pt.copy(S.position).normalize();let te=$.map(Gt=>{let re=Gt.n.dot(pt),he=ni.clamp((re-.12)/.2,0,1)*Gt.t;return kt.copy(Gt.pos).multiplyScalar(1.01).project(S),{d:Gt,vis:he,x:(kt.x+1)/2*ot,y:(1-kt.y)/2*It,w:Gt.tag.offsetWidth||60,h:Gt.tag.offsetHeight||22}});te.sort((Gt,re)=>(re.d===Dt||re.d===Qt)-(Gt.d===Dt||Gt.d===Qt)||re.vis-Gt.vis);let ge=[],Me=10;for(let Gt of te){let re=Gt.d.tag;if(Gt.vis<=.02){re.style.opacity=0,re.style.visibility="hidden";continue}let he=null,Le=Gt.d.ox<0?Gt.d.oy>0?1:3:Gt.d.oy>0?0:2,Un=[Rt[Le]].concat(Rt.filter((En,ii)=>ii!==Le));for(let[En,ii]of Un){let Gi=Gt.x+En*(Gt.w/2+Me)+0,cs=Gt.y+ii*(Gt.h/2+Me),We={l:Gi-Gt.w/2,t:cs-Gt.h/2,r:Gi+Gt.w/2,b:cs+Gt.h/2};if(!(We.l<4||We.t<4||We.r>ot-4||We.b>It-4)&&!ge.some(si=>!(We.r<si.l||We.l>si.r||We.b<si.t||We.t>si.b))){he=We;break}}if(!he){re.style.opacity=0,re.style.visibility="hidden";continue}ge.push(he),re.style.transform="translate("+he.l.toFixed(1)+"px,"+he.t.toFixed(1)+"px)",re.style.opacity=Gt.vis.toFixed(2),re.style.visibility="visible"}}function D(){let U=b();y.material.color.set(U?L.dark:L.light),H.color.set(U?E.dark:E.light),T.material.uniforms.k.value=U?0:.22,gt.forEach(ot=>ot.material.color.set(U?16777215:m)),$.forEach(ot=>{ot.out.material.color.set(U?2500134:16448248),!ot.now&&ot!==Dt&&ot!==Qt&&ot.mat.color.set(U?16777215:1710618)}),nt()}new MutationObserver(D).observe(document.documentElement,{attributes:!0,attributeFilter:["data-theme"]});function at(){let U=i.clientWidth,ot=i.clientHeight;g.setSize(U,ot,!1),S.aspect=U/ot,S.updateProjectionMatrix(),nt()}let k=!0,K=!1;function nt(){k=!0}function lt(){$t(),g.render(h,S),Dt&&J(Dt)}function Bt(){if(requestAnimationFrame(Bt),!K)return;(M.update()||k||M.autoRotate)&&(lt(),k=!1)}M.addEventListener("change",nt),new ResizeObserver(at).observe(i),at(),new IntersectionObserver(U=>U.forEach(ot=>{K=ot.isIntersecting,K&&!i.dataset.played&&(i.dataset.played="1",Tt()),K&&nt()}),{threshold:.2}).observe(i),Bt(),i.__pinScreen=U=>{let ot=$.find(ge=>ge.id===U);if(!ot)return null;let It=ot.pos.clone().multiplyScalar(1.02).project(S),te=g.domElement.getBoundingClientRect();return[te.left+(It.x+1)/2*te.width,te.top+(1-It.y)/2*te.height]};function de(U,ot,It){let te=ni.degToRad(90-U),ge=ni.degToRad(ot+180);return new B(-It*Math.sin(te)*Math.cos(ge),It*Math.cos(te),It*Math.sin(te)*Math.sin(ge))}}})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
