(self.webpackChunk_indeepvision_onevision_docs=self.webpackChunk_indeepvision_onevision_docs||[]).push([[6011],{6734:(e,t,s)=>{var i,r=Object.create,n=Object.defineProperty,o=Object.getOwnPropertyDescriptor,a=Object.getOwnPropertyNames,h=Object.getPrototypeOf,l=Object.prototype.hasOwnProperty,p=(e,t,s,i)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let r of a(t))l.call(e,r)||r===s||n(e,r,{get:()=>t[r],enumerable:!(i=o(t,r))||i.enumerable});return e},d=(e,t,s)=>(((e,t,s)=>{t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s})(e,"symbol"!=typeof t?t+"":t,s),s),u={};((e,t)=>{for(var s in t)n(e,s,{get:t[s],enumerable:!0})})(u,{default:()=>L}),e.exports=(i=u,p(n({},"__esModule",{value:!0}),i));var c=((e,t,s)=>(s=null!=e?r(h(e)):{},p(!t&&e&&e.__esModule?s:n(s,"default",{value:e,enumerable:!0}),e)))(s(2784)),y=s(3756),f=s(5299);const v="undefined"!=typeof navigator,m=v&&"MacIntel"===navigator.platform&&navigator.maxTouchPoints>1,E=v&&(/iPad|iPhone|iPod/.test(navigator.userAgent)||m)&&!window.MSStream,P=v&&/^((?!chrome|android).)*safari/i.test(navigator.userAgent)&&!window.MSStream,g=/www\.dropbox\.com\/.+/,b=/https:\/\/watch\.cloudflarestream\.com\/([a-z0-9]+)/;class L extends c.Component{constructor(){super(...arguments),d(this,"onReady",((...e)=>this.props.onReady(...e))),d(this,"onPlay",((...e)=>this.props.onPlay(...e))),d(this,"onBuffer",((...e)=>this.props.onBuffer(...e))),d(this,"onBufferEnd",((...e)=>this.props.onBufferEnd(...e))),d(this,"onPause",((...e)=>this.props.onPause(...e))),d(this,"onEnded",((...e)=>this.props.onEnded(...e))),d(this,"onError",((...e)=>this.props.onError(...e))),d(this,"onPlayBackRateChange",(e=>this.props.onPlaybackRateChange(e.target.playbackRate))),d(this,"onEnablePIP",((...e)=>this.props.onEnablePIP(...e))),d(this,"onDisablePIP",(e=>{const{onDisablePIP:t,playing:s}=this.props;t(e),s&&this.play()})),d(this,"onPresentationModeChange",(e=>{if(this.player&&(0,y.supportsWebKitPresentationMode)(this.player)){const{webkitPresentationMode:t}=this.player;"picture-in-picture"===t?this.onEnablePIP(e):"inline"===t&&this.onDisablePIP(e)}})),d(this,"onSeek",(e=>{this.props.onSeek(e.target.currentTime)})),d(this,"mute",(()=>{this.player.muted=!0})),d(this,"unmute",(()=>{this.player.muted=!1})),d(this,"renderSourceElement",((e,t)=>"string"==typeof e?c.default.createElement("source",{key:t,src:e}):c.default.createElement("source",{key:t,...e}))),d(this,"renderTrack",((e,t)=>c.default.createElement("track",{key:t,...e}))),d(this,"ref",(e=>{this.player&&(this.prevPlayer=this.player),this.player=e}))}componentDidMount(){this.props.onMount&&this.props.onMount(this),this.addListeners(this.player);const e=this.getSource(this.props.url);e&&(this.player.src=e),(E||this.props.config.forceDisableHls)&&this.player.load()}componentDidUpdate(e){this.shouldUseAudio(this.props)!==this.shouldUseAudio(e)&&(this.removeListeners(this.prevPlayer,e.url),this.addListeners(this.player)),this.props.url===e.url||(0,y.isMediaStream)(this.props.url)||this.props.url instanceof Array||(this.player.srcObject=null)}componentWillUnmount(){this.player.removeAttribute("src"),this.removeListeners(this.player),this.hls&&this.hls.destroy()}addListeners(e){const{url:t,playsinline:s}=this.props;e.addEventListener("play",this.onPlay),e.addEventListener("waiting",this.onBuffer),e.addEventListener("playing",this.onBufferEnd),e.addEventListener("pause",this.onPause),e.addEventListener("seeked",this.onSeek),e.addEventListener("ended",this.onEnded),e.addEventListener("error",this.onError),e.addEventListener("ratechange",this.onPlayBackRateChange),e.addEventListener("enterpictureinpicture",this.onEnablePIP),e.addEventListener("leavepictureinpicture",this.onDisablePIP),e.addEventListener("webkitpresentationmodechanged",this.onPresentationModeChange),this.shouldUseHLS(t)||e.addEventListener("canplay",this.onReady),s&&(e.setAttribute("playsinline",""),e.setAttribute("webkit-playsinline",""),e.setAttribute("x5-playsinline",""))}removeListeners(e,t){e.removeEventListener("canplay",this.onReady),e.removeEventListener("play",this.onPlay),e.removeEventListener("waiting",this.onBuffer),e.removeEventListener("playing",this.onBufferEnd),e.removeEventListener("pause",this.onPause),e.removeEventListener("seeked",this.onSeek),e.removeEventListener("ended",this.onEnded),e.removeEventListener("error",this.onError),e.removeEventListener("ratechange",this.onPlayBackRateChange),e.removeEventListener("enterpictureinpicture",this.onEnablePIP),e.removeEventListener("leavepictureinpicture",this.onDisablePIP),e.removeEventListener("webkitpresentationmodechanged",this.onPresentationModeChange),this.shouldUseHLS(t)||e.removeEventListener("canplay",this.onReady)}shouldUseAudio(e){return!e.config.forceVideo&&(!e.config.attributes.poster&&(f.AUDIO_EXTENSIONS.test(e.url)||e.config.forceAudio))}shouldUseHLS(e){return!!(P&&this.props.config.forceSafariHLS||this.props.config.forceHLS)||!E&&!this.props.config.forceDisableHls&&(f.HLS_EXTENSIONS.test(e)||b.test(e))}shouldUseDASH(e){return f.DASH_EXTENSIONS.test(e)||this.props.config.forceDASH}shouldUseFLV(e){return f.FLV_EXTENSIONS.test(e)||this.props.config.forceFLV}load(e){const{hlsVersion:t,hlsOptions:s,dashVersion:i,flvVersion:r}=this.props.config;if(this.hls&&this.hls.destroy(),this.dash&&this.dash.reset(),this.shouldUseHLS(e)&&(0,y.getSDK)("https://cdn.jsdelivr.net/npm/hls.js@VERSION/dist/hls.min.js".replace("VERSION",t),"Hls").then((t=>{if(this.hls=new t(s),this.hls.on(t.Events.MANIFEST_PARSED,(()=>{this.props.onReady()})),this.hls.on(t.Events.ERROR,((e,s)=>{this.props.onError(e,s,this.hls,t)})),b.test(e)){const t=e.match(b)[1];this.hls.loadSource("https://videodelivery.net/{id}/manifest/video.m3u8".replace("{id}",t))}else this.hls.loadSource(e);this.hls.attachMedia(this.player),this.props.onLoaded()})),this.shouldUseDASH(e)&&(0,y.getSDK)("https://cdnjs.cloudflare.com/ajax/libs/dashjs/VERSION/dash.all.min.js".replace("VERSION",i),"dashjs").then((t=>{this.dash=t.MediaPlayer().create(),this.dash.initialize(this.player,e,this.props.playing),this.dash.on("error",this.props.onError),parseInt(i)<3?this.dash.getDebug().setLogToBrowserConsole(!1):this.dash.updateSettings({debug:{logLevel:t.Debug.LOG_LEVEL_NONE}}),this.props.onLoaded()})),this.shouldUseFLV(e)&&(0,y.getSDK)("https://cdn.jsdelivr.net/npm/flv.js@VERSION/dist/flv.min.js".replace("VERSION",r),"flvjs").then((t=>{this.flv=t.createPlayer({type:"flv",url:e}),this.flv.attachMediaElement(this.player),this.flv.on(t.Events.ERROR,((e,s)=>{this.props.onError(e,s,this.flv,t)})),this.flv.load(),this.props.onLoaded()})),e instanceof Array)this.player.load();else if((0,y.isMediaStream)(e))try{this.player.srcObject=e}catch(n){this.player.src=window.URL.createObjectURL(e)}}play(){const e=this.player.play();e&&e.catch(this.props.onError)}pause(){this.player.pause()}stop(){this.player.removeAttribute("src"),this.dash&&this.dash.reset()}seekTo(e,t=!0){this.player.currentTime=e,t||this.pause()}setVolume(e){this.player.volume=e}enablePIP(){this.player.requestPictureInPicture&&document.pictureInPictureElement!==this.player?this.player.requestPictureInPicture():(0,y.supportsWebKitPresentationMode)(this.player)&&"picture-in-picture"!==this.player.webkitPresentationMode&&this.player.webkitSetPresentationMode("picture-in-picture")}disablePIP(){document.exitPictureInPicture&&document.pictureInPictureElement===this.player?document.exitPictureInPicture():(0,y.supportsWebKitPresentationMode)(this.player)&&"inline"!==this.player.webkitPresentationMode&&this.player.webkitSetPresentationMode("inline")}setPlaybackRate(e){try{this.player.playbackRate=e}catch(t){this.props.onError(t)}}getDuration(){if(!this.player)return null;const{duration:e,seekable:t}=this.player;return e===1/0&&t.length>0?t.end(t.length-1):e}getCurrentTime(){return this.player?this.player.currentTime:null}getSecondsLoaded(){if(!this.player)return null;const{buffered:e}=this.player;if(0===e.length)return 0;const t=e.end(e.length-1),s=this.getDuration();return t>s?s:t}getSource(e){const t=this.shouldUseHLS(e),s=this.shouldUseDASH(e),i=this.shouldUseFLV(e);if(!(e instanceof Array||(0,y.isMediaStream)(e)||t||s||i))return g.test(e)?e.replace("www.dropbox.com","dl.dropboxusercontent.com"):e}render(){const{url:e,playing:t,loop:s,controls:i,muted:r,config:n,width:o,height:a}=this.props,h=this.shouldUseAudio(this.props)?"audio":"video",l={width:"auto"===o?o:"100%",height:"auto"===a?a:"100%"};return c.default.createElement(h,{ref:this.ref,src:this.getSource(e),style:l,preload:"auto",autoPlay:t||void 0,controls:i,muted:r,loop:s,...n.attributes},e instanceof Array&&e.map(this.renderSourceElement),n.tracks.map(this.renderTrack))}}d(L,"displayName","FilePlayer"),d(L,"canPlay",f.canPlay.file)}}]);