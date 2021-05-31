(this["webpackJsonpmy-testing-app"]=this["webpackJsonpmy-testing-app"]||[]).push([[0],{49:function(e,t,n){},75:function(e,t,n){},80:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(14),c=n.n(r),s=(n(49),n(7)),o=n.n(s),d=n(21),l=n(39),h=n(40),u=n(16),b=n(44),j=n(43),f=n(41),g=n.n(f),v=n(33),O=(n(75),n(86)),p=n(83),x=n(84),m=n(87),w=n(85),k=n.p+"static/media/Adria-logo.94b4bae1.png",R=n(5),y=Object(v.createScheduler)(),C=Object(v.createWorker)(),S=function(e){Object(b.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={loading:!1,loadingMessage:"",ocrResult:"",started:!1,terminated:!1,deviceOrientation:window.screen.orientation.angle},a.webcamRef=i.a.createRef(null),a.canvasRef=i.a.createRef(null),a.doOCR=a.doOCR.bind(Object(u.a)(a)),a.handleStart=a.handleStart.bind(Object(u.a)(a)),a.loadTesseract=a.loadTesseract.bind(Object(u.a)(a)),window.addEventListener("orientationchange",(function(e){a.setState({deviceOrientation:e.target.screen.orientation.angle}),console.log("the orientation of the device is now "+e.target.screen.orientation.angle)})),a}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var e=this;Object(d.a)(o.a.mark((function t(){var n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.setState({loading:!0,loadingMessage:"Loading Tesseract..."}),n=0;case 2:if(!(n<4)){t.next=13;break}return t.next=5,C.load();case 5:return t.next=7,C.loadLanguage("fra");case 7:return t.next=9,C.initialize("fra");case 9:y.addWorker(C);case 10:n++,t.next=2;break;case 13:e.setState({loading:!1});case 14:case"end":return t.stop()}}),t)})))()}},{key:"doOCR",value:function(){var e=Object(d.a)(o.a.mark((function e(){var t,n,a,i;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:"undefined"!==typeof this.webcamRef.current&&null!==this.webcamRef.current&&4===this.webcamRef.current.video.readyState&&(t=this.webcamRef.current.video,n=this.canvasRef.current,a=this.webcamRef.current.video.videoWidth,i=this.webcamRef.current.video.videoHeight,n.width=a,n.height=i,n.getContext("2d").drawImage(t,0,0,a,i));case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"handleStart",value:function(e){e.preventDefault(),this.setState({loading:!0},this.loadTesseract)}},{key:"loadTesseract",value:function(){var e=Object(d.a)(o.a.mark((function e(){var t,n,a=this;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.setState({loading:!1,started:!0}),t=0,n=setInterval(Object(d.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(200!==(t+=1)){e.next=6;break}return e.next=4,y.terminate();case 4:clearInterval(n),a.setState({terminated:!0});case 6:a.doOCR();case 7:case"end":return e.stop()}}),e)}))),200);case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return Object(R.jsxs)("div",{children:[Object(R.jsx)(O.a,{show:this.state.loading,onHide:function(){},className:"loadingModal",keyboard:!1,children:Object(R.jsx)(O.a.Body,{children:Object(R.jsx)(p.a,{children:Object(R.jsx)(x.a,{xs:12,md:12,children:Object(R.jsx)("div",{className:"spinner",children:Object(R.jsx)("span",{style:{fontSize:"11px"},children:this.state.loadingMessage})})})})})}),Object(R.jsx)(m.a,{bg:"light",variant:"light",children:Object(R.jsx)(m.a.Brand,{onClick:function(t){t.preventDefault(),e.doOCR()},children:0===this.state.deviceOrientation&&Object(R.jsx)("img",{alt:"",src:k,width:"135",height:"43",className:"d-inline-block align-top"})})}),Object(R.jsx)(w.a,{fluid:!0,children:!0===this.state.started?Object(R.jsx)("div",{children:!1===this.state.terminated?Object(R.jsx)(p.a,{children:Object(R.jsxs)(x.a,{sm:"12",children:[Object(R.jsx)(g.a,{id:"myCam",ref:this.webcamRef,muted:!0,audio:!1,videoConstraints:0===this.state.deviceOrientation?{width:720,height:1280,facingMode:"environment"}:{width:1280,height:720,facingMode:"environment"},style:{width:"100%"}}),Object(R.jsx)("canvas",{id:"myCanvas",ref:this.canvasRef,style:{backgroundColor:"red",position:"absolute",left:0,top:0,right:0,bottom:0,width:"100%",height:"auto"}})]})}):Object(R.jsx)(p.a,{children:Object(R.jsx)(x.a,{children:Object(R.jsx)("div",{children:Object(R.jsx)("textarea",{style:{margin:"5px 0",width:"100%",height:"382px",fontSize:"13px"},disabled:!0,onChange:function(e){console.log(e.target.name)},value:this.state.ocrResult})})})})}):Object(R.jsx)(p.a,{children:Object(R.jsx)(x.a,{children:Object(R.jsx)("div",{className:"startBtnWrapper",children:Object(R.jsx)("button",{className:"startBtn",onClick:function(t){e.handleStart(t)},children:"START"})})})})})]})}}]),n}(a.Component),T=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,88)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,r=t.getLCP,c=t.getTTFB;n(e),a(e),i(e),r(e),c(e)}))};c.a.render(Object(R.jsx)(S,{}),document.getElementById("root")),T()}},[[80,1,2]]]);
//# sourceMappingURL=main.4184ee10.chunk.js.map