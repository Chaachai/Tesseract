(this["webpackJsonpmy-testing-app"]=this["webpackJsonpmy-testing-app"]||[]).push([[0],{53:function(e,t,a){},78:function(e,t,a){},91:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),s=a(14),r=a.n(s),c=(a(53),a(46)),o=a(7),d=a.n(o),l=a(22),h=a(42),u=a(43),g=a(15),b=a(48),j=a(47),f=a(44),v=a.n(f),m=a(28),p=a.n(m),O=(a(78),a(97)),x=a(94),w=a(95),R=a(98),S=a(96),C=a.p+"static/media/Adria-logo.94b4bae1.png",y=(a.p,a(3)),I=a(80),k=p.a.createWorker(),T=function(e){Object(b.a)(a,e);var t=Object(j.a)(a);function a(e){var n;return Object(h.a)(this,a),(n=t.call(this,e)).state={loading:!1,loadingMessage:"",ocrResult:"",started:!1,terminated:!1,deviceOrientation:window.screen.orientation.angle,queuedImages:[]},n.webcamRef=i.a.createRef(null),n.canvasRef=i.a.createRef(null),n.doOCR=n.doOCR.bind(Object(g.a)(n)),n.handleStart=n.handleStart.bind(Object(g.a)(n)),n.loadTesseract=n.loadTesseract.bind(Object(g.a)(n)),n.reset=n.reset.bind(Object(g.a)(n)),n.pushCurrentImage=n.pushCurrentImage.bind(Object(g.a)(n)),window.addEventListener("orientationchange",(function(e){n.setState({deviceOrientation:e.target.screen.orientation.angle}),console.log("the orientation of the device is now "+e.target.screen.orientation.angle)})),n}return Object(u.a)(a,[{key:"componentDidMount",value:function(){}},{key:"doOCR",value:function(){var e=Object(l.a)(d.a.mark((function e(){var t,a,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("Inside doOCR"),t=0;case 2:if(!(t<this.state.queuedImages.length)){e.next=13;break}return console.log("First for loop iteration.., i == ",t),e.next=6,k.recognize(this.state.queuedImages[t]);case 6:a=e.sent,n=a.data.text,console.log("Returned the text number ",t),n&&""!==n&&n.length>0&&(console.log(n),this.setState({ocrResult:this.state.ocrResult+n}));case 10:t++,e.next=2;break;case 13:console.log("FINISHED");case 14:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"pushCurrentImage",value:function(){if("undefined"!==typeof this.webcamRef.current&&null!==this.webcamRef.current&&4===this.webcamRef.current.video.readyState){var e=this.webcamRef.current.video,t=this.canvasRef.current,a=this.webcamRef.current.video.videoWidth,n=this.webcamRef.current.video.videoHeight;t.width=a,t.height=n;var i=t.getContext("2d");i.drawImage(e,0,0,a,n);var s=0,r=0,o=i.getImageData(0,0,a,n);for(s=0;s<o.height;s++)for(r=0;r<o.width;r++){var d=4*s*o.width+4*r,l=o.data[d],h=o.data[d+1],u=o.data[d+2],g=o.data[d+3],b=(l+h+u)/3;o.data[d]=b,o.data[d+1]=b,o.data[d+2]=b,o.data[d+3]=g}i.putImageData(o,0,0);var j=t.toDataURL("image/jpeg",1);this.setState({queuedImages:[].concat(Object(c.a)(this.state.queuedImages),[j])})}}},{key:"handleStart",value:function(e){var t=this;e.preventDefault(),console.log("STARTED..."),this.setState({started:!0},(function(){var e=0,a=setInterval((function(){console.log("TimesRun === ",e),20===e&&(console.log("Stopping the interval loop.. "),clearInterval(a),console.log("Cleared the interval "),t.setState({terminated:!0,loading:!0,loadingMessage:"Getting the text...."}),setTimeout(Object(l.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.doOCR();case 2:console.log("LAST CODE LINE TO BE EXECUTED.."),t.setState({loading:!1,loadingMessage:""});case 4:case"end":return e.stop()}}),e)}))),10)),t.pushCurrentImage(),e+=1}),500)}))}},{key:"loadTesseract",value:function(){var e=Object(l.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({loading:!0,loadingMessage:"Loading Tesseract..."}),e.next=3,k.load();case 3:return e.next=5,k.loadLanguage("eng");case 5:return e.next=7,k.initialize("eng");case 7:return e.next=9,k.setParameters({tessedit_pageseg_mode:p.a.PSM.SINGLE_BLOCK,tessedit_ocr_engine_mode:p.a.OEM.TESSERACT_ONLY});case 9:this.setState({loading:!1,loadingMessage:""});case 10:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"reset",value:function(e){var t=this;e.preventDefault();var a=this.webcamRef.current.video,n=this.canvasRef.current,i=this.webcamRef.current.video.videoWidth,s=this.webcamRef.current.video.videoHeight;n.width=i,n.height=s,n.getContext("2d").drawImage(a,0,0,i,s),this.setState({loading:!0,terminated:!0},Object(l.a)(d.a.mark((function e(){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I(n);case 2:a=e.sent,console.log(a),t.setState({loading:!1,ocrResult:a});case 5:case"end":return e.stop()}}),e)}))))}},{key:"render",value:function(){var e=this;return Object(y.jsxs)("div",{children:[Object(y.jsx)(O.a,{show:this.state.loading,onHide:function(){},className:"loadingModal",keyboard:!1,children:Object(y.jsx)(O.a.Body,{children:Object(y.jsx)(x.a,{children:Object(y.jsx)(w.a,{xs:12,md:12,children:Object(y.jsx)("div",{className:"spinner",children:Object(y.jsx)("span",{style:{fontSize:"11px"},children:this.state.loadingMessage})})})})})}),0===this.state.deviceOrientation&&Object(y.jsx)(R.a,{bg:"light",variant:"light",children:Object(y.jsx)(R.a.Brand,{onClick:function(t){e.reset(t)},children:Object(y.jsx)("img",{alt:"",src:C,width:"135",height:"43",className:"d-inline-block align-top"})})}),Object(y.jsxs)(S.a,{fluid:!0,children:[!0===this.state.started?Object(y.jsx)("div",{children:!1===this.state.terminated?Object(y.jsx)(x.a,{children:Object(y.jsxs)(w.a,{sm:"12",children:[Object(y.jsx)(v.a,{id:"myCam",ref:this.webcamRef,muted:!0,audio:!1,videoConstraints:0===this.state.deviceOrientation?{width:720,height:1280,facingMode:"environment",aspectRatio:1.777777778}:{height:720,width:1280,facingMode:"environment",aspectRatio:1.777777778},style:{width:"100%"}}),Object(y.jsx)("canvas",{id:"myCanvas",ref:this.canvasRef,style:{display:"none",left:0,top:0,right:0,bottom:0,width:"100%",height:"auto"}})]})}):Object(y.jsx)(x.a,{children:Object(y.jsx)(w.a,{children:Object(y.jsx)("div",{children:Object(y.jsx)("textarea",{style:{margin:"5px 0",width:"100%",height:"382px",fontSize:"13px"},disabled:!0,onChange:function(e){console.log(e.target.name)},value:this.state.ocrResult})})})})}):Object(y.jsx)(x.a,{children:Object(y.jsx)(w.a,{children:Object(y.jsx)("div",{className:"startBtnWrapper",children:Object(y.jsx)("button",{className:"startBtn",onClick:function(t){e.handleStart(t)},children:"START"})})})}),0===this.state.deviceOrientation&&Object(y.jsx)(x.a,{className:"footer",children:Object(y.jsxs)(w.a,{children:[Object(y.jsx)("p",{children:"Adria Business & Technology"}),Object(y.jsx)("p",{children:"2021 \xa9 All rights reserved"})]})})]})]})}}]),a}(n.Component),E=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,99)).then((function(t){var a=t.getCLS,n=t.getFID,i=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),n(e),i(e),s(e),r(e)}))};r.a.render(Object(y.jsx)(T,{}),document.getElementById("root")),E()}},[[91,1,2]]]);
//# sourceMappingURL=main.bae79543.chunk.js.map