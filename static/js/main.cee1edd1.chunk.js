(this["webpackJsonpsolana-defi-hackathon"]=this["webpackJsonpsolana-defi-hackathon"]||[]).push([[0],{100:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n(3),r=n.n(a),c=n(293),o=Object(c.a)("div")({name:"Wrapper",class:"wr1gyc2",vars:{"wr1gyc2-0":[function(e){return e.size||"32"},"px"],"wr1gyc2-2":[function(e){return e.src?'url("'.concat(e.src,'")'):"none"}]}}),i=function(e){var t=e.src,n=(e.symbol,e.size);return r.a.createElement(o,{src:t,size:n})};n(216)},125:function(e,t,n){"use strict";(function(e){var t=n(1),a=n.n(t),r=n(11),c=n(4),o=n(157),i=n(35),s=n(45),u=n(72);s.a.use(function(){var t=Object(c.a)(a.a.mark((function t(n){var c,s,l,d,m,f;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=n.fundAddress,s=Object(i.c)(),t.next=4,s.getAccountInfo(c);case 4:if(l=t.sent){t.next=7;break}throw new Error("fund doesn't exists");case 7:return d=u.Fund.decodePoolState(e.from(l.data)),m=d.assets.map((function(e){return e.vaultAddress.toBase58()})).concat(d.poolTokenMint.toBase58()),t.next=11,s._rpcRequest("getMultipleAccounts",[m,{commiment:s.commitment,encoding:"jsonParsed"}]);case 11:return f=t.sent,d.assets=d.assets.map((function(e,t){var n=Object(o.a)(["result","value",t,"data","parsed","info"],f);return Object(r.a)(Object(r.a)({},e),{},{vaultPopulated:n})})),d.poolTokenMintPopulated=Object(o.a)(["result","value",d.assets.length,"data","parsed","info"],f),t.abrupt("return",{pubkey:c,account:{executable:l.executable,owner:l.owner,lamports:l.lamports,data:d}});case 15:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}).call(this,n(40).Buffer)},14:function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return o}));var a=n(5),r=n(21),c=Object(a.createDomain)({loc:{file:"/src/models/app/index.ts",line:4,column:19},name:"app",sid:"-xq4xmt"}),o=Object(r.a)()},141:function(e,t,n){"use strict";(function(e){var t=n(1),a=n.n(t),r=n(4),c=n(109),o=n.n(c),i=n(23),s=n(287),u=n(286),l=n(35),d=n(38),m=n(156),f=n(45),b=n(72);f.b.use(Object(r.a)(a.a.mark((function t(){var n,r,c,f,p;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=Object(l.c)(),r=[{dataSize:751}],t.next=4,n._rpcRequest("getProgramAccounts",[d.a.toBase58(),{commitment:n.commitment,filters:r,encoding:"base64"}]);case 4:if(c=t.sent,!(f=Object(m.a)(c)).error){t.next=8;break}throw new Error("failed to get accounts owned by program "+d.a.toBase58()+": "+f.error.message);case 8:return p=f.result,o()("undefined"!==typeof p),t.abrupt("return",p.map((function(t){o()("base64"===t.account.data[1]);var n=b.Fund.decodePoolState(e.from(t.account.data[0],"base64"));return{pubkey:new i.b(t.pubkey),account:{executable:t.account.executable,owner:new i.b(t.account.owner),lamports:t.account.lamports,data:n}}})).filter(Object(s.a)(u.a)));case 11:case"end":return t.stop()}}),t)}))))}).call(this,n(40).Buffer)},156:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n(2);var r=Object(a.a)({executable:"boolean",owner:"string",lamports:"number",data:"any",rentEpoch:"number?"}),c=Object(a.a)({pubkey:"string",account:r}),o=function(e){var t=a.a.literal("2.0");return a.a.union([Object(a.a)({jsonrpc:t,id:"string",error:"any"}),Object(a.a)({jsonrpc:t,id:"string",error:"null?",result:e})])}(a.a.array([c]))},169:function(e,t){},170:function(e,t){},188:function(e,t){},189:function(e,t){},209:function(e,t,n){},214:function(e,t,n){},215:function(e,t,n){},216:function(e,t,n){},221:function(e,t,n){},222:function(e,t,n){},223:function(e,t,n){},224:function(e,t,n){},225:function(e,t,n){},226:function(e,t,n){},230:function(e,t){},240:function(e,t){},246:function(e,t){},247:function(e,t){},263:function(e,t){},284:function(e,t,n){},285:function(e,t,n){"use strict";n.r(t),n.d(t,"globals",(function(){return Pt}));var a,r=n(3),c=n.n(r),o=n(143),i=n.n(o),s=n(144),u=n(13),l=n(21),d=n(14),m=n(24),f=Object(m.a)({basename:window.location.pathname}),b=n(152),p=n(293),v=n(149),O=n(12),h=n(1),j=n.n(h),E=n(4),g=n(23),k=n(38),w=n(50),y=n(35),S=n(6),A=n(8),T=n(15),C=n(16),P=n(148),N=n(47),F=n.n(N);!function(e){e.CONNECT="connect",e.DISCONNECT="disconnect",e.SIGNED="signed",e.CONFIRMED="confirmed"}(a||(a={}));var x,I,D=function(e){Object(T.a)(n,e);var t=Object(C.a)(n);function n(e){var a;return Object(S.a)(this,n),(a=t.call(this)).network=void 0,a.network=e,a}return Object(A.a)(n,[{key:"sign",value:function(){var e=Object(E.a)(j.a.mark((function e(t){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.signTransaction(t);case 2:return n=e.sent,this.emit(a.SIGNED,{transaction:n}),e.abrupt("return",n);case 5:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()}]),n}(F.a),B="https://www.sollet.io",W=function(e){Object(T.a)(n,e);var t=Object(C.a)(n);function n(e){var r,c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:B;return Object(S.a)(this,n),(r=t.call(this,e)).solletWallet=void 0,r.solletWallet=new P.a(c,e),r.solletWallet.on(a.CONNECT,(function(){return r.emit(a.CONNECT)})),r.solletWallet.on(a.DISCONNECT,(function(){return r.emit(a.DISCONNECT)})),r.solletWallet.connect(),r}return Object(A.a)(n,[{key:"pubkey",get:function(){return this.solletWallet.publicKey}},{key:"disconnect",value:function(){this.solletWallet.disconnect()}},{key:"signTransaction",value:function(e){return this.solletWallet.signTransaction(e)}}]),n}(D);k.d;!function(e){e[e.MANUAL=0]="MANUAL",e[e.SOLLET=1]="SOLLET",e[e.BONFIDA=2]="BONFIDA",e[e.LOCAL=3]="LOCAL"}(I||(I={}));var R=function(e,t){var n=Object(y.d)(t);switch(e){case I.SOLLET:return new W(n);case I.BONFIDA:return new W(n,"https://bonfida.com/wallet");default:return new W(n)}},M=function(){var e=Object(E.a)(j.a.mark((function e(t,n){var r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=R(n,t),x=r,Object(y.c)(t),e.abrupt("return",new Promise((function(e){r.on(a.CONNECT,(function(){return e(r)}))})));case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();y.a,y.a;var U="/src/models/wallet/index.ts",L=d.b.createEffect({loc:{file:U,line:5,column:25},name:"connectFx",sid:"-tao976"}),H=d.b.createEffect({loc:{file:U,line:7,column:28},name:"disconnectFx",sid:"-n37f0l"}),K=d.b.createStore("devnet",{loc:{file:U,line:9,column:24},name:"$cluster",sid:"pkjv7p"}),_=(d.b.createEvent({loc:{file:U,line:11,column:32},name:"clusterPersisted",sid:"59xbo0"}),d.b.createStore(I.SOLLET,{loc:{file:U,line:13,column:21},name:"$type",sid:"mo6cqx"})),Y=d.b.createStore(!1,{loc:{file:U,line:15,column:26},name:"$connected",sid:"-kso2bp"}),q=d.b.createStore(null,{loc:{file:U,line:17,column:23},name:"$wallet",sid:"nqw8dg"}),z=n(65),J=n(5),Q="/src/components/common/Header/model.ts",G=d.b.createEvent({loc:{file:Q,line:6,column:30},name:"connectClicked",sid:"omezo5"});Object(J.forward)({"\u0254":{from:G,to:L},config:{loc:{file:Q,line:8,column:0},sid:"-tfy29v"}});var V=Object(p.a)("div")({name:"Wrapper",class:"w1xwrcq2"}),Z=Object(p.a)("div")({name:"Container",class:"cu4syn9"}),X=Object(p.a)("div")({name:"Left",class:"l1ekikc4"}),$=Object(p.a)(v.a)({name:"LogoLink",class:"l17m3d8c"}),ee=Object(p.a)("a")({name:"ByA",class:"b1gyjr0u"}),te=Object(p.a)("div")({name:"Right",class:"r1r08nhz"}),ne=function(){var e=Object(l.c)(Y);return c.a.createElement(V,null,c.a.createElement(Z,null,c.a.createElement(X,null,c.a.createElement($,{to:"/"},"DTF"),c.a.createElement(ee,{href:"https://p2p.org",target:"_blank",rel:"noopener noreferrer"},"\u2014","     ","by p2p.org")),c.a.createElement(te,null,e?null:c.a.createElement(z.a,{primary:!0,onClick:G},"Connect wallet"))))};n(214);var ae=Object(p.a)("div")({name:"Wrapper",class:"wacvqdn"}),re=function(e){var t=e.children,n=e.style,a=e.className;return c.a.createElement(ae,{style:n,className:a},t)};n(215);var ce=n(22),oe=n.n(ce),ie=n(100),se="/src/models/modals/index.ts",ue=d.b.createStore([],{loc:{file:se,line:4,column:23},name:"$modals",sid:"-66cm4u"}),le=d.b.createEffect({loc:{file:se,line:6,column:28},name:"closeModalFx",sid:"-6t2g3c"}),de=d.b.createEvent({loc:{file:se,line:14,column:26},name:"closeModal",sid:"ggaw7t"}),me=d.b.createEffect({loc:{file:se,line:16,column:27},name:"openModalFx",sid:"-n79f6y"}),fe=d.b.createEvent({loc:{file:se,line:24,column:25},name:"openModal",sid:"d5283x"}),be="MODAL_INVEST",pe="MODAL_WITHDRAW",ve=n(11),Oe=n(151),he=Object(ve.a)(Object(ve.a)({},Oe.TOKENS),{},{devnet:[{tokenSymbol:"SOL",mintAddress:"8UGbGeCyvnWZQ2DL2VDxyCTsmy7dUEoJtJBr9EZxnTH4",tokenName:"Solana",icon:"https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/solana/info/logo.png"},{tokenSymbol:"FTT",mintAddress:"DLMTFLwUMocgy63KEMb59VBHYPvjWv399N5HFgrXsgnv",tokenName:"FTT",icon:"https://raw.githubusercontent.com/trustwallet/assets/f3ffd0b9ae2165336279ce2f8db1981a55ce30f8/blockchains/ethereum/assets/0x50D1c9771902476076eCFc8B2A83Ad6b9355a4c9/logo.png"},{tokenSymbol:"REN",mintAddress:"4McZwrFKMo9QhXNQFKuwxhG3aHik6xhsFZBhHVaCW9CJ",tokenName:"REN",icon:"https://s2.coinmarketcap.com/static/img/coins/64x64/2539.png"},{tokenSymbol:"SRM",mintAddress:"J6L4Ujv82ryQgjnA2rgaFsbtPwRBJNGCQsWdWWuH1aPT",tokenName:"Serum",icon:"https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x476c5E26a75bd202a9683ffD34359C0CC15be0fF/logo.png",website:"https://projectserum.com"},{tokenSymbol:"SUSHI",mintAddress:"6Cyp4H66L5JE2DnEgpYRBS27sY7rYSLPz6b31q1coUYJ",tokenName:"SUSHI",icon:"https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x6B3595068778DD592e39A122f4f5a5cF09C90fE2/logo.png"},{tokenSymbol:"RAY",mintAddress:"757dVSETUqFjmDQPAkCyiZzumjtShHTb7B8PpFFFUSib",tokenName:"RAY",icon:"https://s2.coinmarketcap.com/static/img/coins/64x64/8526.png"},{tokenSymbol:"FIDA",mintAddress:"FhxsBCrUZYhiUyWQkfbJQdG9Y32NXmtxFriQs7WMdtwo",tokenName:"Bonfida",icon:"https://raw.githubusercontent.com/dr497/awesome-serum-markets/02ce7c74fd2e9bd4cb55a15f735fc3ad0e7335f6/icons/fida.svg"},{tokenSymbol:"USDC",mintAddress:"DbMXbT2zYBNC9QbbcPtQKEZ491vXiTb4mTXmTBRor1TC",tokenName:"USDC",icon:"https://raw.githubusercontent.com/trustwallet/assets/f3ffd0b9ae2165336279ce2f8db1981a55ce30f8/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png"}]}),je={devnet:[{address:"t72redTRJkPtUmTWWvPyjnkFKGVrHakv3DBQTheY4oD",fundName:"Alameda Bull DTF (AB)",icon:"data:image/png;base64,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"}]},Ee=Object(p.a)("div")({name:"Column",class:"c1d1bp53"});n(221);var ge="/src/models/rates/index.ts",ke=d.b.createStore({},{loc:{file:ge,line:3,column:25},name:"$ratesMap",sid:"-skfpgd"}),we=d.b.createEffect({loc:{file:ge,line:5,column:28},name:"fetchRatesFx",sid:"-5rz2ww"}),ye=Object(p.a)("div")({name:"TopWrapper",class:"t1py45dm"}),Se=Object(p.a)("div")({name:"InfoWrapper",class:"i924jnr"}),Ae=Object(p.a)("h4")({name:"FundName",class:"f1s5u18z"}),Te=Object(p.a)("div")({name:"FundDate",class:"f14e207j"}),Ce=Object(p.a)(Ee)({name:"ColumnValue",class:"cg1wy7j"}),Pe=Object(p.a)("div")({name:"AdditionalInfo",class:"a1801oxu"}),Ne=Object(p.a)("div")({name:"ColumnButtons",class:"c1e0ed2a"}),Fe=Object(p.a)("div")({name:"Wrapper",class:"wzzikay"}),xe=Object(p.a)(z.a)({name:"ButtonStyled",class:"b16kc9fu"}),Ie=Object(p.a)("div")({name:"BottomWrapper",class:"b1t4o50s"}),De=Object(p.a)("div")({name:"TokenSharesRow",class:"t1r2ds9j"}),Be=Object(p.a)("div")({name:"TokenShare",class:"tiquq44"}),We=Object(p.a)("div")({name:"TokenName",class:"tg2tfp2"}),Re=Object(p.a)("div")({name:"TokenShareValue",class:"t1c0k1eq"}),Me=function(e){var t=e.fund,n=Object(l.c)(ke),a=Object(r.useMemo)((function(){return t.account.data.assets.reduce((function(e,t){if(!t.vaultPopulated)return console.error("vaultPopulated for marketCap calculation did not found:",t.mint.toBase58()),e;var a=he.devnet.find((function(e){return e.mintAddress===t.mint.toBase58()}));if(!a)return console.error("tokenMeta for marketCap calculation did not found:",t.mint.toBase58()),e;var r=n[a.tokenSymbol];return r?e+t.vaultPopulated.tokenAmount.uiAmount*r:(console.error("rate for marketCap calculation did not found:",a.tokenSymbol),e)}),0)}),[t,n]),o=Object(r.useMemo)((function(){var e;return(null===(e=t.account.data.poolTokenMintPopulated)||void 0===e?void 0:e.supply)?a/Number(t.account.data.poolTokenMintPopulated.supply):(console.error("supply for fundPrice calculation did not found:",t.account.data.poolTokenMint.toBase58()),0)}),[t,a]),i=Object(r.useMemo)((function(){return je.devnet.find((function(e){return e.address===t.pubkey.toBase58()}))}),[t]),s=Object(r.useMemo)((function(){var e=t.account.data,n=e.assets,a=e.fundState,r=null===a||void 0===a?void 0:a.assetWeights;return r?r.map((function(e,t){return{mintAddress:n[t].mint,weight:e/10}})):[]}),[t]);return c.a.createElement(Fe,{onClick:function(){me({modalType:be})}},c.a.createElement(ye,null,c.a.createElement(Ee,{className:oe()({name:!0})},c.a.createElement(ie.a,{src:null===i||void 0===i?void 0:i.icon}),c.a.createElement(Se,null,c.a.createElement(Ae,null,null===i||void 0===i?void 0:i.fundName),c.a.createElement(Te,null,"Inception date: Feb 26, 2021"))),c.a.createElement(Ce,{title:String(a||""),className:oe()({marketCap:!0})},new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(a)),c.a.createElement(Ce,{title:String(o||""),className:oe()({price:!0})},new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(o)),c.a.createElement(Ce,{className:oe()({since:!0,profit:!0})},"+ 420.01%"),c.a.createElement(Ce,{className:oe()({balance:!0})},c.a.createElement("div",null,"48.00 ABDFS"),c.a.createElement(Pe,null,"Valuation: $5952")),c.a.createElement(Ne,null,c.a.createElement(xe,{primary:!0,disabled:!1,onClick:function(e){e.stopPropagation(),me({modalType:pe})}},"Withdraw"),c.a.createElement(xe,{primary:!0},"+ Invest"))),c.a.createElement(Ie,null,c.a.createElement(De,null,s.map((function(e){var t=he.devnet.find((function(t){return t.mintAddress===e.mintAddress.toBase58()}));return c.a.createElement(Be,{key:e.mintAddress.toBase58()},c.a.createElement(ie.a,{size:18,src:null===t||void 0===t?void 0:t.icon}),c.a.createElement(We,null,(null===t||void 0===t?void 0:t.tokenName)||Object(w.a)(e.mintAddress.toBase58())," ",c.a.createElement(Re,null,e.weight,"%")))})))))};n(222);var Ue=n(17),Le=n(74),He=n(73),Ke=n.p+"static/media/arrow-triangle-icon.12c58ff8.svg",_e=n.p+"static/media/checkmark-icon.26a65993.svg",Ye=new Map([["arrow-triangle",Ke],["checkmark",_e]]),qe=function(e){var t=e.name,n=e.size,a=e.height,r=e.width,o=Object(Le.a)(e,["name","size","height","width"]),i={};Object.keys(o).forEach((function(e){Object(He.a)(e)&&(i[e]=o[e])}));var s=Ye.get(t);return s?c.a.createElement("svg",Object.assign({},i,{viewBox:s.viewBox,height:n||a,width:n||r}),c.a.createElement("use",{xlinkHref:"#".concat(s.id)})):null},ze=Object(p.a)("div")({name:"Wrapper",class:"wp1pljv"}),Je=Object(p.a)("div")({name:"SelectorWrapper",class:"s12s9gka"}),Qe=Object(p.a)("div")({name:"ArrowWrapper",class:"acu5ndx"}),Ge=Object(p.a)(qe)({name:"ArrowIcon",class:"a5yzjtd"}),Ve=Object(p.a)("div")({name:"DropDownList",class:"d3ft2d7"}),Ze=function(e){var t=e.children,n=Object(r.useRef)(null),a=Object(r.useState)(!1),o=Object(Ue.a)(a,2),i=o[0],s=o[1],u=function(e){var t;(null===(t=n.current)||void 0===t?void 0:t.contains(e.target))||s(!1)};Object(r.useEffect)((function(){return window.addEventListener("click",u),function(){window.removeEventListener("click",u)}}),[]);return c.a.createElement(ze,{ref:n},c.a.createElement(Je,{onClick:function(){s(!i)},className:oe()({isOpen:i})},t,c.a.createElement(Qe,null,c.a.createElement(Ge,{name:"arrow-triangle"}))),i?c.a.createElement(Ve,null):void 0)};n(223);var Xe=n(45),$e="/src/pages/home/Funds/model.ts",et=Object(l.a)(),tt=d.b.createStore([],{loc:{file:$e,line:10,column:22},name:"$funds",sid:"mt01l5"});tt.on(Xe.a.doneData,(function(e,t){return[].concat(Object(O.a)(e.filter((function(e){return!e.pubkey.equals(t.pubkey)}))),[t])})),Object(J.forward)({"\u0254":{from:et.open,to:Xe.a},config:{loc:{file:$e,line:21,column:0},sid:"rxepjf"}});var nt=Object(p.a)("div")({name:"Wrapper",class:"wwl7c2o"}),at=Object(p.a)("div")({name:"Title",class:"t1bazbev"}),rt=Object(p.a)("div")({name:"ColumnsHeader",class:"c5jb0ks"}),ct=Object(p.a)("div")({name:"ColumnName",class:"c16tqij9"}),ot=Object(p.a)("div")({name:"FundList",class:"f1x1qjio"}),it=new g.b("t72redTRJkPtUmTWWvPyjnkFKGVrHakv3DBQTheY4oD"),st=function(e){var t=e.style,n=e.className;Object(l.b)(et,{fundAddress:it});var a=Object(l.c)(tt);return c.a.createElement(nt,{style:t,className:n},c.a.createElement(at,null,"DTFs"),c.a.createElement(rt,null,c.a.createElement(Ee,{className:oe()({name:!0})},c.a.createElement(ct,null,"Name")),c.a.createElement(Ee,{className:oe()({marketCap:!0})},c.a.createElement(ct,null,"Market Cap")),c.a.createElement(Ee,{className:oe()({price:!0})},c.a.createElement(ct,null,"Price")),c.a.createElement(Ee,{className:oe()({since:!0})},c.a.createElement(ct,{className:oe()({since:!0})},c.a.createElement(Ze,null,"Since inception"))),c.a.createElement(Ee,{className:oe()({balance:!0})},c.a.createElement(ct,null,"Balance"))),c.a.createElement(ot,null,a.map((function(e){return c.a.createElement(Me,{key:e.pubkey.toBase58(),fund:e})}))))};n(224);var ut=Object(p.a)("div")({name:"Wrapper",class:"w1boau85"}),lt=Object(p.a)(re)({name:"Container",class:"ce7kw32"}),dt=Object(p.a)("h1")({name:"Title",class:"t1eap9pn"}),mt=Object(p.a)("div")({name:"Description",class:"dk40tde"}),ft=Object(p.a)(st)({name:"FundsStyled",class:"fod55wo"}),bt=function(){return c.a.createElement(ut,null,c.a.createElement(ne,null),c.a.createElement(lt,null,c.a.createElement(dt,null,"Non-custodial DEX Traded Funds(DTFs)"),c.a.createElement(mt,null,"Build on top of Solana and Serum"),c.a.createElement(ft,null)))};n(225);var pt=function(){var e=Object(l.c)(Y);return Object(r.useMemo)((function(){return Object(b.a)((t=e,[{path:"/",exact:!0,component:bt},{path:"*",component:function(){return c.a.createElement(u.a,{to:"/"})}}].map((function(e){return e.needAuth&&e.needAuth!==t?(e.component=function(){return c.a.createElement(u.a,{to:"/"})},e):e}))));var t}),[e])},vt=n(48),Ot=n(7),ht=n(290),jt=Object(p.a)("div")({name:"Wrapper",class:"w1nsw3o8"}),Et=Object(p.a)("div")({name:"ModalContainer",class:"mun8gmr"}),gt=Object(p.a)("div")({name:"ModalWrapper",class:"msqwm39"}),kt=Object(p.a)("div")({name:"ModalBackground",class:"maqqgs"}),wt=new Map([[be,Object(r.lazy)((function(){return n.e(4).then(n.bind(null,303))}))],[pe,Object(r.lazy)((function(){return n.e(3).then(n.bind(null,302))}))]]),yt=function(){var e=Object(r.useState)({}),t=Object(Ue.a)(e,2),n=t[0],a=t[1],o=Object(l.c)(ue),i=function(){var e=Object(E.a)(j.a.mark((function e(){var t,a,r,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=Object(ht.a)(o)){e.next=3;break}return e.abrupt("return");case 3:if(r=a.modalId,c=n[r],e.t0=null===(t=c.current)||void 0===t?void 0:t.canClose,!e.t0){e.next=10;break}return e.next=9,c.current.canClose();case 9:e.t0=!e.sent;case 10:if(!e.t0){e.next=12;break}return e.abrupt("return");case 12:le({modalId:r});case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),s=function(e){e.target===e.currentTarget&&i()},u=function(){var e,t=[],n=Object(Ot.a)(o);try{for(n.s();!(e=n.n()).done;){var a=e.value,r=a.modalType,c=a.modalId,i=a.props,s=wt.get(r);s&&t.push({modalType:r,modalId:c,props:i,ModalComponent:s})}}catch(u){n.e(u)}finally{n.f()}return t}().map((function(e){var t=e.modalId,o=e.props,i=e.ModalComponent,u=n[t];return u||(u=Object(r.createRef)(),a((function(e){return Object(ve.a)(Object(ve.a)({},e),{},Object(vt.a)({},t,u))}))),c.a.createElement(r.Suspense,{fallback:null,key:t},c.a.createElement(Et,null,c.a.createElement(gt,{onClick:s},c.a.createElement(i,Object.assign({},o,{modalId:t,modalRef:u,close:function(e){return le({modalId:t,result:e})}})))))}));return u.length>0?c.a.createElement(jt,null,c.a.createElement(kt,null),u):null};n(226);var St=function(){return Object(l.b)(d.a),c.a.createElement(c.a.Fragment,null,c.a.createElement(u.c,{history:f},c.a.createElement(pt,null)),c.a.createElement(yt,null))};d.b.onCreateEffect((function(e){e.failData.watch((function(e){return console.error(e)}))}));L.use(Object(E.a)(j.a.mark((function e(){var t,n,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=K.getState(),n=_.getState(),e.next=4,M(t,n);case 4:return(r=e.sent).on(a.DISCONNECT,(function(){H(),console.error("Wallet disconnected")})),r.on(a.CONFIRMED,(function(e){var t=e.transactionSignature;return console.info("Confirmed: ".concat(t))})),console.info("Wallet connected"),e.abrupt("return",r.pubkey.toBase58());case 9:case"end":return e.stop()}}),e)})))),H.use((function(){!function(){var e;null===(e=x)||void 0===e||e.disconnect()}(),console.error("Wallet disconnected")})),Y.on(L.done,(function(){return!0})).on(H,(function(){return!1})),q.on(L.doneData,(function(e,t){return t}));n(125),n(141);ke.on(we.doneData,(function(e,t){var n=Object(ve.a)({},e);return t.map((function(e){return n[e.symbol]=e.rate})),n})),we.use(Object(E.a)(j.a.mark((function e(){var t,n,a,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=he.devnet.map((function(e){return e.tokenSymbol})),e.prev=1,e.next=4,fetch("".concat("https://min-api.cryptocompare.com/data","/pricemulti?api_key=").concat(k.b,"&fsyms=").concat(t.join(","),"&tsyms=USD"));case 4:if((n=e.sent).ok){e.next=7;break}throw new Error("Something wrong");case 7:return e.next=9,n.json();case 9:return a=e.sent,r=[],t.forEach((function(e){a[e]&&r.push({symbol:e,rate:a[e].USD})})),e.abrupt("return",r);case 15:throw e.prev=15,e.t0=e.catch(1),console.error("Can't get rates for tokens:",e.t0),e.t0;case 19:case"end":return e.stop()}}),e,null,[[1,15]])})))),Object(J.forward)({"\u0254":{from:d.a.open,to:we},config:{loc:{file:"/src/models/rates/init.ts",line:47,column:0},sid:"-8ym91n"}}),ke.watch((function(e){return console.log(111,e)}));var At=new Map,Tt=0;le.use((function(e){var t=e.modalId,n=e.result;if(!t)throw new Error("Trying to hide modal without modalId");var a=At.get(t);a&&(a.resolve(n),At.delete(t)),de({modalId:t})})),me.use((function(e){var t=e.modalType,n=e.props;if(ue.getState().some((function(e){return e.modalType===t})))throw new Error("Dublicate of modal ".concat(t));Tt=++Tt,fe({modalType:t,modalId:Tt,props:n});var a=new Promise((function(e){At.set(Tt,{modalId:Tt,resolve:e})}));return a.modalId=Tt,a})),ue.on(de,(function(e,t){return e.filter((function(e){return e.modalId!==t.modalId}))})).on(fe,(function(e,t){return e.concat(t)}));Object(s.createInspector)();var Ct,Pt="gew27ew";i.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(St,null)),document.querySelector("#root")),Ct&&Ct instanceof Function&&n.e(5).then(n.bind(null,301)).then((function(e){var t=e.getCLS,n=e.getFID,a=e.getFCP,r=e.getLCP,c=e.getTTFB;t(Ct),n(Ct),a(Ct),r(Ct),c(Ct)})),n(284)},35:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"d",(function(){return O})),n.d(t,"c",(function(){return h})),n.d(t,"b",(function(){return j}));var a,r=n(23),c=n(289),o=n(292),i=n(38),s=n(12),u=n(1),l=n.n(u),d=n(4),m=n(291),f=n(50),b={count:10,intervalMS:200,backoutMultiplier:1.5},p=i.c,v=Object(c.a)(o.a,(function(e){var t=new r.a(e,p);return["getBalance","getAccountInfo","getParsedAccountInfo","getParsedProgramAccounts","getParsedTokenAccountsByOwner","getRecentBlockhash","sendTransaction","sendRawTransaction","requestAirdrop"].forEach((function(e){t[e]=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:b,n=Object(m.a)(t,b),a=function(e,t,a){return function(){var r=Object(d.a)(l.a.mark((function r(c,o,i){var s;return l.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(s=function(){var n=Object(d.a)(l.a.mark((function n(){return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",e.apply(t,a));case 1:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),c){r.next=3;break}return r.abrupt("return",s());case 3:return r.abrupt("return",c.catch((function(e){var t=n.intervalMS*Math.pow(n.backoutMultiplier,i);return console.error(e),console.log("Retrying after ".concat(t,"ms. (Retried ").concat(i," times)")),Object(f.b)(t).then(s)})));case 4:case"end":return r.stop()}}),r)})));return function(e,t,n){return r.apply(this,arguments)}}()};return new Proxy(e,{apply:function(e,t,r){return Object(s.a)(new Array(n.count)).reduce(a(e,t,r)).catch((function(e){throw console.error("No more retries, throwing."),e}))}})}(t[e])})),t})),O=function(e){return"mainnet-beta"===e?"https://solana-api.projectserum.com/":Object(r.d)(e)},h=function(e){e&&(a=e);var t=O(e||a);return v(t)},j=function(e,t){var n=h(),a=new Promise((function(t){return n.onSignature(e,(function(e){console.log("Confirmation via socket:",e),t(e)}))})),r=n.confirmTransaction(e,t||p).then((function(e){return console.log("Confirmation via http:",e),e.value}));return Promise.race([r,a])}},38:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return c})),n.d(t,"d",(function(){return o})),n.d(t,"a",(function(){return i}));var a=n(23),r="ad6104e4e9d655c1faab7ef1743c16651a1628f01d384bc5fea09661c0eb18db",c=Object({NODE_ENV:"production",PUBLIC_URL:"/Non-custodial-DEX-Traded-Funds",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_CRYPTO_COMPARE_API_KEY:"ad6104e4e9d655c1faab7ef1743c16651a1628f01d384bc5fea09661c0eb18db"}).REACT_APP_DEFAULT_COMMITMENT||"singleGossip",o=Number(Object({NODE_ENV:"production",PUBLIC_URL:"/Non-custodial-DEX-Traded-Funds",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_CRYPTO_COMPARE_API_KEY:"ad6104e4e9d655c1faab7ef1743c16651a1628f01d384bc5fea09661c0eb18db"}).REACT_APP_POST_TRANSACTION_SLEEP_MS),i=new a.b(Object({NODE_ENV:"production",PUBLIC_URL:"/Non-custodial-DEX-Traded-Funds",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_CRYPTO_COMPARE_API_KEY:"ad6104e4e9d655c1faab7ef1743c16651a1628f01d384bc5fea09661c0eb18db"}).REACT_APP_DTF_PROGRAM_ID||"HWEaSAnjKNADwA2ZopatwCM5BqrnMCPQBKAphf1s6XNW")},45:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return o}));var a=n(14),r="/src/models/connection/index.ts",c=a.b.createEffect({loc:{file:r,line:5,column:26},name:"findFundFx",sid:"u0syrg"}),o=a.b.createEffect({loc:{file:r,line:10,column:27},name:"findFundsFx",sid:"epaima"})},50:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r}));var a=function(e){return new Promise((function(t){return setTimeout(t,e)}))};function r(e){return"".concat(e.slice(0,4),"\u2026").concat(e.slice(-4))}},65:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var a=n(3),r=n.n(a),c=n(293),o=n(22),i=n.n(o),s=Object(c.a)("button")({name:"ButtonElement",class:"bw8ilx7"}),u=function(e){var t=e.onClick,n=e.primary,a=e.hollow,c=e.full,o=e.disabled,u=e.children,l=e.style,d=e.className;return r.a.createElement(s,{disabled:o,onClick:t,style:l,className:i()(d,{primary:n,hollow:a,full:c})},u)};n(209)},72:function(e,t,n){"use strict";(function(e){var a=n(110),r=n(126),c=n(127),o=n(128),i=n(91),s=this&&this.__createBinding||(Object.create?function(e,t,n,a){void 0===a&&(a=n),Object.defineProperty(e,a,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,a){void 0===a&&(a=n),e[a]=t[n]}),u=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),l=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&s(t,e,n);return u(t,e),t},d=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Fund=t.schema=t.PoolState=t.FundState=t.ParamDesc=t.AssetInfo=t.PoolRequest=t.InitializePoolRequest=t.InitializeFundData=t.PoolRequestInner=void 0;var m=d(n(33)),f=l(n(231)),b=n(245),p=function e(t){var n=this;i(this,e),Object.keys(t).map((function(e){n[e]=t[e]}))},v=function(e){c(n,e);var t=o(n);function n(e){var a=e.value;return i(this,n),t.call(this,a)}return n}(b.PublicKey),O=function(e){c(n,e);var t=o(n);function n(e){var a=e.value;return i(this,n),t.call(this,a.slice(1,a.length))}return n}(b.PublicKey),h=new m.default("220a6cbdcd1cc4cf","hex"),j=function(e){c(n,e);var t=o(n);function n(){return i(this,n),t.apply(this,arguments)}return n}(p);t.PoolRequestInner=j;var E=function(e){c(n,e);var t=o(n);function n(){return i(this,n),t.apply(this,arguments)}return n}(p);t.InitializeFundData=E;var g=function(e){c(n,e);var t=o(n);function n(){return i(this,n),t.apply(this,arguments)}return n}(j);t.InitializePoolRequest=g;var k=function(e){c(n,e);var t=o(n);function n(){return i(this,n),t.apply(this,arguments)}return n}(p);t.PoolRequest=k;var w=function(e){c(n,e);var t=o(n);function n(){return i(this,n),t.apply(this,arguments)}return n}(p);t.AssetInfo=w;var y=function(e){c(n,e);var t=o(n);function n(){return i(this,n),t.apply(this,arguments)}return n}(p);t.ParamDesc=y;var S=function(e){c(n,e);var t=o(n);function n(){return i(this,n),t.apply(this,arguments)}return n}(p);t.FundState=S;var A=function(e){c(n,e);var t=o(n);function n(){return i(this,n),t.apply(this,arguments)}return n}(p);t.PoolState=A,t.schema=new Map([[k,{kind:"struct",fields:[["tag","u64"],["index","u8"],["inner",j]]}],[g,{kind:"struct",fields:[["nonce","u8"],["assetsLength","u8"],["poolName","string"],["feeRate","u32"],["customData",["u8"]]]}],[E,{kind:"struct",fields:[["slippageDivider","u64"],["assetWeights",["u32"]],["initialSupply","u64"]]}],[O,{kind:"struct",fields:[["value",[33]]]}],[v,{kind:"struct",fields:[["value",[32]]]}],[w,{kind:"struct",fields:[["mint",v],["vaultAddress",v]]}],[A,{kind:"struct",fields:[["tag","u64"],["poolTokenMint",v],["assets",[w]],["vaultSigner",v],["vaultSignerNonce","u8"],["accountParams",[y]],["name","string"],["lqdFeeVault",v],["initializerFeeVault",v],["feeRate","u32"],["adminKey",O],["customState",["u8"]]]}],[y,{kind:"struct",fields:[["address",v],["writable","u8"]]}],[S,{kind:"struct",fields:[["paused","u8"],["slippageDivider","u64"],["assetWeights",["u32"]],["basicAsset",w]]}]]);var T=function(){function n(e,t){i(this,n),Object.assign(this,{connection:e,fundProgramId:t})}return r(n,null,[{key:"createInitSwapInstruction",value:function(n,r,c,o,i,s,u,l,d,m,p,v,O,j,w,y,S,A){var T=[{pubkey:r,isSigner:!1,isWritable:!0},{pubkey:c,isSigner:!1,isWritable:!0}].concat(a(o.map((function(e){return{pubkey:e,isSigner:!1,isWritable:!0}}))),[{pubkey:i,isSigner:!1,isWritable:!1},{pubkey:s,isSigner:!1,isWritable:!1},{pubkey:u,isSigner:!1,isWritable:!1},{pubkey:l,isSigner:!1,isWritable:!1},{pubkey:d,isSigner:!1,isWritable:!0},{pubkey:m,isSigner:!1,isWritable:!0},{pubkey:p,isSigner:!1,isWritable:!1},{pubkey:v,isSigner:!1,isWritable:!1}]),C=new E({slippageDivider:A,assetWeights:y,initialSupply:S}),P=f.serialize(t.schema,C),N=new g({nonce:O,assetsLength:o.length,poolName:j,feeRate:w,customData:P}),F=new k({tag:h,index:0,inner:N}),x=f.serialize(t.schema,F);return new b.TransactionInstruction({keys:T,programId:n,data:e.from(x.buffer,x.byteOffset,x.byteLength)})}},{key:"decodePoolState",value:function(n){var a=f.deserialize(t.schema,A,n),r=f.deserialize(t.schema,S,e.from(a.customState));return a.fundState=r,a}}]),n}();t.Fund=T}).call(this,n(40).Buffer)}},[[285,1,2]]]);
//# sourceMappingURL=main.cee1edd1.chunk.js.map