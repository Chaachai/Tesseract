(this["webpackJsonpmy-testing-app"]=this["webpackJsonpmy-testing-app"]||[]).push([[0],{53:function(e,t,a){},78:function(e,t,a){},91:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),s=a(14),r=a.n(s),c=(a(53),a(46)),o=a(7),d=a.n(o),h=a(22),l=a(42),u=a(43),g=a(15),b=a(48),j=a(47),f=a(44),v=a.n(f),m=a(28),p=a.n(m),O=(a(78),a(97)),x=a(94),w=a(95),R=a(98),y=a(96),C=a.p+"static/media/Adria-logo.94b4bae1.png",S=(a.p,a(3)),k=a(80),I=p.a.createWorker(),M=function(e){Object(b.a)(a,e);var t=Object(j.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={loading:!1,loadingMessage:"",ocrResult:"",started:!0,terminated:!1,deviceOrientation:window.screen.orientation.angle,queuedImages:[]},n.webcamRef=i.a.createRef(null),n.canvasRef=i.a.createRef(null),n.doOCR=n.doOCR.bind(Object(g.a)(n)),n.handleStart=n.handleStart.bind(Object(g.a)(n)),n.loadTesseract=n.loadTesseract.bind(Object(g.a)(n)),n.reset=n.reset.bind(Object(g.a)(n)),n.pushCurrentImage=n.pushCurrentImage.bind(Object(g.a)(n)),window.addEventListener("orientationchange",(function(e){n.setState({deviceOrientation:e.target.screen.orientation.angle}),console.log("the orientation of the device is now "+e.target.screen.orientation.angle)})),n}return Object(u.a)(a,[{key:"componentDidMount",value:function(){}},{key:"doOCR",value:function(){var e=Object(h.a)(d.a.mark((function e(){var t,a,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=0;case 1:if(!(t<this.state.queuedImages.length)){e.next=10;break}return e.next=4,I.recognize(this.state.queuedImages[t]);case 4:a=e.sent,(n=a.data.text)&&""!==n&&n.length>0&&(console.log(n),this.setState({ocrResult:this.state.ocrResult+n}));case 7:t++,e.next=1;break;case 10:console.log("FINISHED"),this.setState({loading:!1,loadingMessage:""});case 12:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"pushCurrentImage",value:function(){if("undefined"!==typeof this.webcamRef.current&&null!==this.webcamRef.current&&4===this.webcamRef.current.video.readyState){var e=this.webcamRef.current.video,t=this.canvasRef.current,a=this.webcamRef.current.video.videoWidth,n=this.webcamRef.current.video.videoHeight;t.width=a,t.height=n;var i=t.getContext("2d");i.drawImage(e,0,0,a,n);var s=0,r=0,o=i.getImageData(0,0,a,n);for(s=0;s<o.height;s++)for(r=0;r<o.width;r++){var d=4*s*o.width+4*r,h=o.data[d],l=o.data[d+1],u=o.data[d+2],g=o.data[d+3],b=(h+l+u)/3;o.data[d]=b,o.data[d+1]=b,o.data[d+2]=b,o.data[d+3]=g}i.putImageData(o,0,0);var j=t.toDataURL("image/jpeg",1);this.setState({queuedImages:[].concat(Object(c.a)(this.state.queuedImages),[j])})}}},{key:"handleStart",value:function(e){var t=this;e.preventDefault(),this.setState({started:!0},(function(){var e=0,a=setInterval(Object(h.a)(d.a.mark((function n(){return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(3!==e){n.next=5;break}return clearInterval(a),t.setState({terminated:!0,loading:!0,loadingMessage:"Getting the text...."}),n.next=5,t.doOCR();case 5:t.pushCurrentImage(),e+=1;case 7:case"end":return n.stop()}}),n)}))),3e3)}))}},{key:"loadTesseract",value:function(){var e=Object(h.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({loading:!0,loadingMessage:"Loading Tesseract..."}),e.next=3,I.load();case 3:return e.next=5,I.loadLanguage("eng");case 5:return e.next=7,I.initialize("eng");case 7:return e.next=9,I.setParameters({tessedit_pageseg_mode:p.a.PSM.SINGLE_BLOCK,tessedit_ocr_engine_mode:p.a.OEM.TESSERACT_ONLY});case 9:this.setState({loading:!1,loadingMessage:""});case 10:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"reset",value:function(){var e=Object(h.a)(d.a.mark((function e(t){var a,n,i,s,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a=this.webcamRef.current.video,n=this.canvasRef.current,i=this.webcamRef.current.video.videoWidth,s=this.webcamRef.current.video.videoHeight,n.width=i,n.height=s,n.getContext("2d").drawImage(a,0,0,i,s),e.next=11,k(n);case 11:r=e.sent,console.log(r);case 13:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return Object(S.jsxs)("div",{children:[Object(S.jsx)(O.a,{show:this.state.loading,onHide:function(){},className:"loadingModal",keyboard:!1,children:Object(S.jsx)(O.a.Body,{children:Object(S.jsx)(x.a,{children:Object(S.jsx)(w.a,{xs:12,md:12,children:Object(S.jsx)("div",{className:"spinner",children:Object(S.jsx)("span",{style:{fontSize:"11px"},children:this.state.loadingMessage})})})})})}),0===this.state.deviceOrientation&&Object(S.jsx)(R.a,{bg:"light",variant:"light",children:Object(S.jsx)(R.a.Brand,{onClick:function(t){e.reset(t)},children:Object(S.jsx)("img",{alt:"",src:C,width:"135",height:"43",className:"d-inline-block align-top"})})}),Object(S.jsxs)(y.a,{fluid:!0,children:[!0===this.state.started?Object(S.jsx)("div",{children:!1===this.state.terminated?Object(S.jsx)(x.a,{children:Object(S.jsxs)(w.a,{sm:"12",children:[Object(S.jsx)(v.a,{id:"myCam",ref:this.webcamRef,muted:!0,audio:!1,videoConstraints:0===this.state.deviceOrientation?{width:720,height:1280,facingMode:"environment",aspectRatio:1.777777778}:{height:720,width:1280,facingMode:"environment",aspectRatio:1.777777778},style:{width:"100%"}}),Object(S.jsx)("canvas",{id:"myCanvas",ref:this.canvasRef,style:{display:"none",left:0,top:0,right:0,bottom:0,width:"100%",height:"auto"}})]})}):Object(S.jsx)(x.a,{children:Object(S.jsx)(w.a,{children:Object(S.jsx)("div",{children:Object(S.jsx)("textarea",{style:{margin:"5px 0",width:"100%",height:"382px",fontSize:"13px"},disabled:!0,onChange:function(e){console.log(e.target.name)},value:this.state.ocrResult})})})})}):Object(S.jsx)(x.a,{children:Object(S.jsx)(w.a,{children:Object(S.jsx)("div",{className:"startBtnWrapper",children:Object(S.jsx)("button",{className:"startBtn",onClick:function(t){e.handleStart(t)},children:"START"})})})}),0===this.state.deviceOrientation&&Object(S.jsx)(x.a,{className:"footer",children:Object(S.jsxs)(w.a,{children:[Object(S.jsx)("p",{children:"Adria Business & Technology"}),Object(S.jsx)("p",{children:"2021 \xa9 All rights reserved."})]})})]})]})}}]),a}(n.Component),T=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,99)).then((function(t){var a=t.getCLS,n=t.getFID,i=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),n(e),i(e),s(e),r(e)}))};r.a.render(Object(S.jsx)(M,{}),document.getElementById("root")),T()}},[[91,1,2]]]);
//# sourceMappingURL=main.85023e64.chunk.js.map