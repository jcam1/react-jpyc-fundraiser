(this["webpackJsonpreact-jpyc-fundraiser"]=this["webpackJsonpreact-jpyc-fundraiser"]||[]).push([[0],{216:function(n,e,t){},217:function(n,e,t){},219:function(n,e,t){},233:function(n,e){},235:function(n,e){},239:function(n,e){},240:function(n,e){},267:function(n,e){},269:function(n,e){},280:function(n,e){},282:function(n,e){},292:function(n,e){},294:function(n,e){},310:function(n,e){},344:function(n,e){},345:function(n,e){},415:function(n,e){},417:function(n,e){},422:function(n,e){},424:function(n,e){},431:function(n,e){},443:function(n,e){},446:function(n,e){},451:function(n,e){},524:function(n,e,t){"use strict";t.r(e);var a=t(39),i=t.n(a),r=t(205),s=t.n(r),o=(t(216),t(217),t(27)),u=t.n(o),c=t(206),p=t(209),d=[{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"spender",type:"address"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"Transfer",type:"event"},{inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"address",name:"spender",type:"address"}],name:"allowance",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"approve",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"totalSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"recipient",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"transfer",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"sender",type:"address"},{internalType:"address",name:"recipient",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"transferFrom",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"}],y=(t(219),t(108)),l=t.n(y),f=t(14);var m=function(n){var e=Object(a.useState)(!1),t=Object(p.a)(e,2),i=t[0],r=t[1],s=function(){var e=Object(c.a)(u.a.mark((function e(){var t,a,i;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=window,a=t.ethereum,e.next=3,window.ethereum.enable().catch((function(n){console.error(n)}));case 3:i=new l.a(l.a.givenProvider),new i.eth.Contract(d,n.contractAddress).methods.transfer(n.to,"0x"+(n.amount*Math.pow(10,18)).toString(16)).send({from:a.selectedAddress}).on("transactionHash",(function(n){r(!0)})).on("receipt",(function(n){r(!1)})).on("error",(function(n){r(!1),alert(n.message)}));case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(f.jsxs)("div",{className:"Box",children:[Object(f.jsx)("div",{className:"Title",children:"JPYC\u306e\u6295\u3052\u92ad\u3092\u3059\u308b"}),Object(f.jsx)("button",{onClick:function(){return s()},disabled:i,className:i?"Disabled":"JPYCTipButton",children:"JPYC (100 JPYC)"})]})};var b=function(){return Object(f.jsxs)("div",{className:"App",children:[Object(f.jsx)("h1",{children:"Demo Page"}),Object(f.jsx)("span",{children:"\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u306fRinkeby\u3067\u3059\u3002"}),Object(f.jsx)(m,{amount:100,contractAddress:"0xbD9c419003A36F187DAf1273FCe184e1341362C0",to:"0x7f83740f797dbD832b3C948834503Cd46AfDE8B0"})]})},T=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,528)).then((function(e){var t=e.getCLS,a=e.getFID,i=e.getFCP,r=e.getLCP,s=e.getTTFB;t(n),a(n),i(n),r(n),s(n)}))};s.a.render(Object(f.jsx)(i.a.StrictMode,{children:Object(f.jsx)(b,{})}),document.getElementById("root")),T()}},[[524,1,2]]]);
//# sourceMappingURL=main.7713986c.chunk.js.map