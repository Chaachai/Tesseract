(this["webpackJsonpmy-testing-app"]=this["webpackJsonpmy-testing-app"]||[]).push([[0],{290:function(e,t,n){},295:function(e,t){},296:function(e,t){},304:function(e,t){},307:function(e,t){},308:function(e,t){},340:function(e,t,n){},346:function(e,t,n){"use strict";n.r(t);var a=n(17),i=n.n(a),r=n(114),s=n.n(r),c=(n(290),n(4)),o=n.n(c),d=n(11),l=n(5),u=n(10),h=n(49),f=n(14),b=n(15),j=(n(345),n(309),n(284)),g=n.n(j),x=n(215),p=(n(6),n(340),n(352)),v=n(349),m=n(350),O=n(353),k=n(351),w=n.p+"static/media/Adria-logo.94b4bae1.png",y=n(42),R=Object(x.createScheduler)(),S=function(e){Object(f.a)(n,e);var t=Object(b.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).webcamRef=i.a.createRef(null),a.canvasRef=i.a.createRef(null),a.state={loading:!0,loadingMessage:"Loading...",ocrResult:"",started:!1,terminated:!1},a.doOCR=a.doOCR.bind(Object(h.a)(a)),a.handleStart=a.handleStart.bind(Object(h.a)(a)),a.loadTesseract=a.loadTesseract.bind(Object(h.a)(a)),a}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.setState({loading:!1,loadingMessage:""})}},{key:"doOCR",value:function(){var e=Object(d.a)(o.a.mark((function e(){var t,n,a,i,r,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("undefined"===typeof this.webcamRef.current||null===this.webcamRef.current||4!==this.webcamRef.current.video.readyState){e.next=16;break}return t=this.webcamRef.current.video,n=this.canvasRef.current,a=this.webcamRef.current.video.videoWidth,i=this.webcamRef.current.video.videoHeight,this.webcamRef.current.video.width=a,this.webcamRef.current.video.height=i,n.width=a,n.height=i,n.getContext("2d").drawImage(t,0,0,a,i),e.next=13,R.addJob("recognize",n);case 13:r=e.sent,(s=r.data.text)&&""!==s&&s.length>0&&this.setState({ocrResult:s});case 16:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"runOcr",value:function(){var e=Object(d.a)(o.a.mark((function e(){var t,n,a=this;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.setState({loading:!0}),t=0;case 2:if(!(t<4)){e.next=14;break}return n=Object(x.createWorker)({logger:function(e){console.log(e),a.setState({loadingMessage:"Loading.. "+(100*e.progress).toFixed(1)+"%"})}}),e.next=6,n.load();case 6:return e.next=8,n.loadLanguage("fra");case 8:return e.next=10,n.initialize("fra");case 10:R.addWorker(n);case 11:t++,e.next=2;break;case 14:this.setState({loading:!1}),document.getElementById("startBtn").addEventListener("click",(function(){console.log("STAR !!!")})),document.getElementById("stopBtn").addEventListener("click",(function(){}));case 17:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"handleStart",value:function(e){e.preventDefault(),this.setState({loading:!0},this.loadTesseract)}},{key:"loadTesseract",value:function(){var e=Object(d.a)(o.a.mark((function e(){var t,n,a,i,r=this;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=0;case 1:if(!(t<4)){e.next=14;break}return n=Object(x.createWorker)(),e.next=5,n.load();case 5:return e.next=7,n.loadLanguage("fra");case 7:return e.next=9,n.initialize("fra");case 9:R.addWorker(n),this.setState({started:!0});case 11:t++,e.next=1;break;case 14:this.setState({loading:!1}),a=0,i=setInterval(Object(d.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(100!==(a+=1)){e.next=6;break}return e.next=4,R.terminate();case 4:clearInterval(i),r.setState({terminated:!0});case 6:r.doOCR();case 7:case"end":return e.stop()}}),e)}))),200);case 17:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return Object(y.jsxs)("div",{children:[Object(y.jsx)(p.a,{show:this.state.loading,onHide:function(){},className:"loadingModal",keyboard:!1,children:Object(y.jsx)(p.a.Body,{children:Object(y.jsx)(v.a,{children:Object(y.jsx)(m.a,{xs:12,md:12,children:Object(y.jsx)("div",{className:"spinner",children:Object(y.jsx)("span",{style:{fontSize:"11px"},children:this.state.loadingMessage})})})})})}),Object(y.jsx)(O.a,{bg:"light",variant:"light",children:Object(y.jsx)(O.a.Brand,{onClick:function(t){t.preventDefault(),e.setState({started:!1,terminated:!1,ocrResult:""})},children:Object(y.jsx)("img",{alt:"",src:w,width:"135",height:"43",className:"d-inline-block align-top"})})}),Object(y.jsx)(k.a,{fluid:!0,children:!0===this.state.started?Object(y.jsxs)(v.a,{children:[Object(y.jsx)(m.a,{sm:"12",md:"4",children:!1===this.state.terminated&&Object(y.jsxs)("div",{children:[Object(y.jsx)("div",{style:{position:"relative",display:"inline-block"},children:Object(y.jsx)(g.a,{ref:this.webcamRef,muted:!0,audio:!1,screenshotFormat:"image/png",videoConstraints:{facingMode:"environment"},style:{zindex:9,width:"100%",height:"248px"}})}),Object(y.jsx)("canvas",{ref:this.canvasRef,style:{position:"absolute",left:"4%",top:0,zindex:10,width:"92%",height:"248px"}})]})}),Object(y.jsx)(m.a,{sm:"12",md:"8",children:Object(y.jsx)("div",{children:Object(y.jsx)("textarea",{style:{margin:"5px 0",width:"100%",height:"382px",fontSize:"13px"},disabled:!0,onChange:function(e){console.log(e.target.name)},value:this.state.ocrResult})})})]}):Object(y.jsx)(v.a,{children:Object(y.jsx)(m.a,{children:Object(y.jsx)("div",{className:"startBtnWrapper",children:Object(y.jsx)("button",{className:"startBtn",onClick:function(t){e.handleStart(t)},children:"START"})})})})}),Object(y.jsxs)("footer",{children:[Object(y.jsx)("p",{children:"Adria Business & Technology"}),Object(y.jsx)("p",{children:"2021 \xa9 All rights reserved"})]})]})}}]),n}(a.Component),C=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,354)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),i(e),r(e),s(e)}))};s.a.render(Object(y.jsx)(S,{}),document.getElementById("root")),C()}},[[346,1,2]]]);
//# sourceMappingURL=main.3a8e8314.chunk.js.map