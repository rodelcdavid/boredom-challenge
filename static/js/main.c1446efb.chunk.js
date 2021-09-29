(this["webpackJsonpboredom-challenge"]=this["webpackJsonpboredom-challenge"]||[]).push([[0],{38:function(e,n,t){"use strict";t.r(n);var r,o,c,a,i,s,l,d,b,u,j,h,g,x=t(1),p=t.n(x),m=t(16),O=t.n(m),f=t(9),y=t(2),k=t(3),v=t(4),S=v.b.div(r||(r=Object(k.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin: 0 auto;\n  padding: 1rem;\n  background-color: #14213d;\n\n  @media only screen and (min-width: 600px) {\n    flex-direction: row;\n  }\n"]))),w=v.b.div(o||(o=Object(k.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),C=Object(v.b)(f.b)(c||(c=Object(k.a)(["\n  color: #e5e5e5;\n  text-decoration: none;\n  padding: 0 1rem;\n  font-size: 1rem;\n  transition: all 150ms ease-in;\n\n  &:hover {\n    color: #fca311;\n  }\n\n  &.logo {\n    font-size: 2rem;\n  }\n\n  &.logo:hover {\n    color: #e5e5e5;\n  }\n\n  @media only screen and (min-width: 600px) {\n    &.logo {\n      margin-right: auto;\n    }\n  }\n"]))),D=t(0),F=function(){return Object(D.jsxs)(S,{children:[Object(D.jsx)(C,{className:"logo",to:"/",children:"30-Day Boredom"}),Object(D.jsxs)(w,{children:[Object(D.jsx)(C,{to:"/challenges",children:"Challenges"}),Object(D.jsx)(C,{to:"/motivation",children:"Motivation"}),Object(D.jsx)(C,{to:"/",children:"Home"})]})]})},N=t(15),P=p.a.createContext(),z=function(e){var n=["todo"].concat(Array(29).fill("locked")),t=JSON.parse(localStorage.getItem("dayStatus"))||n,r=Object(x.useState)(t),o=Object(N.a)(r,2),c=o[0],a=o[1];return Object(D.jsx)(P.Provider,{value:{dayStatus:c,setDayStatus:a,defaultDayStatus:n},children:e.children})},I=p.a.createContext(),M=function(e){var n=Object(x.useState)(0),t=Object(N.a)(n,2),r=t[0],o=t[1];return Object(D.jsx)(I.Provider,{value:{currentDayProgress:r,setCurrentDayProgress:o},children:e.children})},A=Object(v.a)(a||(a=Object(k.a)(["\n* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\nbody {\n    background-color: #e5e5e5;\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n}\n"]))),J=Object(v.c)(i||(i=Object(k.a)(["\n    0% {\n        opacity: 0;\n    }\n    100% {\n        opacity: 1;\n    }\n"]))),Y=v.b.div(s||(s=Object(k.a)(["\n  text-align: center;\n  padding: 0.8rem;\n  color: black;\n  animation: 1s "," ease-in;\n\n  /* & h1 {\n        width: 50%;\n        margin: 0 auto;\n    } */\n"])),J),B=Object(v.b)(f.b)(l||(l=Object(k.a)(["\n  display: block;\n  color: black;\n  text-decoration: none;\n  padding: 1rem 2rem;\n  border: solid 3px #14213d;\n  font-weight: bolder;\n  width: 200px;\n  border-radius: 20px;\n  margin: 0.5rem auto;\n  background-color: #fca311;\n  transition: all 150ms ease-in;\n  &:hover {\n    color: black;\n    background-color: #e5e5e5;\n    border-color: #14213d;\n  }\n"]))),H=function(){return Object(D.jsxs)(Y,{children:[Object(D.jsx)("h1",{style:{fontSize:"2rem",lineHeight:"1.2"},children:"Get your brain to focus more than ever."}),Object(D.jsx)("p",{style:{fontSize:"1rem"},children:"Take back your attention span by embracing boredom!"}),Object(D.jsxs)("div",{style:{margin:"2rem auto"},children:[Object(D.jsx)(B,{to:"/motivation",children:"Motivation"}),Object(D.jsx)(B,{to:"/challenges",children:"Challenges"})]})]})},R=function(){return Object(D.jsxs)(Y,{children:[Object(D.jsx)("h2",{children:"Motivation"}),Object(D.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, magni laboriosam quia molestiae obcaecati, id perferendis non, provident quo laborum aliquid sint? Error harum architecto ea deserunt hic eveniet facere! Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, nemo? Sunt amet a blanditiis, illum inventore praesentium tempore similique nemo, velit ipsam distinctio iusto earum dolorem. Voluptas quo dolores ab?"}),Object(D.jsx)("iframe",{width:"320px",height:"240px",src:"https://www.youtube.com/embed/Hu4Yvq-g7_Y",title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})]})},T=v.b.div(d||(d=Object(k.a)(["\n  display: grid;\n  grid-template-columns: repeat(5, 55px);\n  grid-template-rows: repeat(6, 55px);\n  grid-gap: 5px;\n  justify-content: center;\n  align-items: center;\n  padding: 0.5rem;\n"]))),L=Object(v.b)(f.b).attrs((function(e){return{style:{animationDelay:"".concat(e.delay,"s")}}}))(b||(b=Object(k.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 55px;\n  height: 55px;\n  color: black;\n  font-weight: bolder;\n  text-decoration: none;\n  /* border: solid 2px black; */\n  border-radius: 10px;\n  cursor: pointer;\n  transition: all 150ms ease-in;\n  background-color: rgba(123, 149, 251, 0.29); /* TODO: change this bg color */\n  position: relative;\n  border: solid 2px #14213d;\n  /* background-color: ",'; */\n\n  &:hover {\n    box-shadow: 0 0 10px darkgreen;\n  }\n\n  .done&::after {\n    content: "";\n    background-image: url("https://cdn-icons-png.flaticon.com/512/190/190411.png");\n    background-size: 30px 30px;\n    position: absolute;\n    top: 11px;\n    left: 11px;\n    width: 30px;\n    height: 30px;\n  }\n\n  .failed&::after {\n    content: "";\n    background-image: url("https://cdn-icons-png.flaticon.com/512/753/753345.png");\n    background-size: 30px 30px;\n    position: absolute;\n    top: 11px;\n    left: 11px;\n    width: 30px;\n    height: 30px;\n  }\n\n  .locked&::after {\n    content: "";\n    background-image: url("https://cdn-icons-png.flaticon.com/512/2913/2913133.png");\n    background-size: 20px 20px;\n    position: absolute;\n    top: -5px;\n    left: 36px;\n    width: 20px;\n    height: 20px;\n  }\n'])),(function(e){if(e.index===e.currentdayprogress)return"#fca311"})),q=function(){var e=Object(x.useContext)(I).currentDayProgress,n=Object(x.useContext)(P).dayStatus,t=Object(x.useCallback)((function(){for(var t=[],r=1;r<=30;r++)t.push(Object(D.jsx)(L,{className:"animate__animated animate__zoomIn ".concat(n[r-1]),currentdayprogress:e,index:r,delay:1*Math.random(),to:"/challenges/day".concat(r),children:r},r));return t}),[e,n]);return Object(D.jsx)(T,{children:Object(D.jsx)(t,{})})},_=v.b.button(u||(u=Object(k.a)(["\n  display: block;\n  margin: 0 auto;\n  background-color: #fca311;\n  padding: 0.2rem 0.8rem;\n  width: 150px;\n  border: solid 2px #14213d;\n  border-radius: 10px;\n  font-weight: bolder;\n  cursor: pointer;\n"]))),E=v.b.button(j||(j=Object(k.a)(["\n  display: block;\n  width: 200px;\n  margin: 0 auto;\n  padding: 1rem;\n  background-color: #fca311;\n  border: solid 2px #14213d;\n  border-radius: 10px;\n  font-weight: bolder;\n  cursor: pointer;\n"]))),W=v.b.div(h||(h=Object(k.a)(["\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background-color: white;\n  padding: 50px;\n  z-index: 1000;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 300px;\n  border-radius: 20px;\n"]))),G=v.b.div(g||(g=Object(k.a)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.7);\n"])));function U(e){var n=e.open,t=e.children,r=e.onClose,o=e.onReset;return n?O.a.createPortal(Object(D.jsxs)(D.Fragment,{children:[Object(D.jsx)(G,{onClick:r}),Object(D.jsxs)(W,{children:[Object(D.jsx)("button",{onClick:r,children:"Close Modal"}),t,Object(D.jsx)("button",{onClick:o,children:"Reset"}),Object(D.jsx)("button",{onClick:r,children:"Cancel"})]})]}),document.getElementById("portal")):null}var Q,V=function(){var e=Object(x.useContext)(P),n=e.dayStatus,t=e.setDayStatus,r=e.defaultDayStatus,o=Object(x.useContext)(I),c=o.currentDayProgress,a=o.setCurrentDayProgress,i=Object(x.useState)(!1),s=Object(N.a)(i,2),l=s[0],d=s[1];Object(x.useEffect)((function(){new Date;var e=new Date(2021,9,5),r=JSON.parse(localStorage.getItem("startingDate"));console.log("start",r);var o=new Date(r);if(null===r){a(0)}else{var c=Math.ceil((e-o)/864e5+1);a(c);var i=n.map((function(e,n){return n+1<=c&&"failed"!==e&&"done"!==e?"todo":n+1>c?"locked":e}));t(i)}}),[]);var b=function(){t(r),localStorage.removeItem("startingDate"),a(0),d(!1)};Object(x.useEffect)((function(){localStorage.dayStatus=JSON.stringify(n),localStorage.currentDayProgress=JSON.stringify(c)}),[n,c]);var u=n.filter((function(e){return"failed"===e||"done"===e}));return console.log("total",u),30===u.length?Object(D.jsxs)(D.Fragment,{children:[Object(D.jsx)("h1",{children:"Congratulations!"}),Object(D.jsx)(_,{onClick:function(){return d(!0)},children:"Reset"}),Object(D.jsx)(U,{open:l,onClose:function(){return d(!1)},onReset:b,children:"Are you sure you want to reset your progress?"})]}):c>0?Object(D.jsxs)(Y,{children:[Object(D.jsx)("h2",{children:"Challenges"}),Object(D.jsxs)("p",{style:{fontSize:"0.8rem"},children:["Current Day: ",c>30?30:c,"/30"]}),Object(D.jsx)(q,{}),Object(D.jsx)(_,{onClick:function(){return d(!0)},children:"Reset"}),Object(D.jsx)(U,{open:l,onClose:function(){return d(!1)},onReset:b,children:"Are you sure you want to reset your progress?"})]}):Object(D.jsxs)(Y,{children:[Object(D.jsx)("h2",{children:"Ready to take on the challenges?"}),Object(D.jsx)(E,{onClick:function(){var e=new Date,n=new Date(e.getFullYear(),e.getMonth(),e.getDate());localStorage.startingDate=JSON.stringify(n),a(c+1)},children:"Start the Challenge"})]})},K=t(26),X=function(){return Object(D.jsxs)(D.Fragment,{children:[Object(D.jsx)("h2",{style:{textAlign:"center"},children:"Stare at the Clock"}),Object(D.jsx)("img",{src:"https://media.istockphoto.com/photos/businessman-staring-at-the-clock-picture-id612642782?b=1&k=20&m=612642782&s=170667a&w=0&h=HD996n6Y1swhy3hnwdmYCNI03H_yu3DLuyQmbGuYYpc=",style:{height:"300px",border:"solid 2px black"}})]})},Z=function(){return Object(D.jsx)(D.Fragment,{children:Object(D.jsx)("h2",{style:{textAlign:"center"},children:"Stare at the Wall"})})},$=function(){return Object(D.jsx)(D.Fragment,{children:Object(D.jsx)("h2",{style:{textAlign:"center"},children:"Stare at the Sky"})})},ee=Object(v.b)(f.b)(Q||(Q=Object(k.a)(["\n  display: block;\n  width: 200px;\n  margin: 0 auto;\n  color: black;\n  text-decoration: none;\n  background-color: #fca311;\n  font-weight: 600;\n  padding: 0.5rem;\n  border-radius: 10px;\n  border: solid 2px black;\n"]))),ne=function(e){var n=e.match,t=Object(x.useContext)(P),r=t.dayStatus,o=t.setDayStatus,c=JSON.parse(localStorage.getItem("currentDayProgress")),a=function(e){var n=Object(K.a)(r),t=Number(e.target.getAttribute("day").substr(3));"Failed"===e.target.innerHTML&&(n[t-1]="failed",o(n)),"Done"===e.target.innerHTML&&(n[t-1]="done",o(n))},i=function(){var e="done"===r[b-1]||"failed"===r[b-1];return c>=b&&e?Object(D.jsxs)(D.Fragment,{children:[Object(D.jsx)("h1",{children:r[b-1]}),Object(D.jsx)(ee,{to:"/challenges",children:"Back to Challenges"}),";"]}):Object(D.jsxs)("div",{style:{display:"flex",justifyContent:"center",padding:"5px"},children:[Object(D.jsx)(ee,{to:"/challenges",onClick:a,day:n.params.day,children:"Failed"}),Object(D.jsx)(ee,{to:"/challenges",onClick:a,day:n.params.day,children:"Done"})]})},s=function(){switch(n.params.day){case"day1":return Object(D.jsx)(X,{});case"day2":return Object(D.jsx)(Z,{});case"day3":return Object(D.jsx)($,{});default:return Object(D.jsx)("div",{style:{textAlign:"center"},children:"No Challenges Available Yet!"})}},l=JSON.parse(localStorage.getItem("startingDate")),d=new Date(l),b=Number(n.params.day.substr(3)),u=function(e,n){var t=new Date(e);return t.setDate(t.getDate()+n),t.toString().slice(0,10)+","+t.toString().slice(10,15)}(d,b-1);return console.log("current",c),c<b?Object(D.jsxs)(Y,{children:[Object(D.jsx)("h2",{children:"Day ".concat(b)}),Object(D.jsx)("br",{}),Object(D.jsx)("h1",{children:"This day is still locked."}),Object(D.jsxs)("p",{children:["Come back on"," ",Object(D.jsx)("span",{style:{fontWeight:"bolder",color:"#fca311"},children:u})," ","to do another challenge."]}),Object(D.jsx)("br",{}),Object(D.jsx)(ee,{to:"/challenges",children:"Back to Challenges"})]}):Object(D.jsxs)(Y,{children:[Object(D.jsx)("h2",{children:"Day ".concat(b)}),Object(D.jsx)("p",{style:{color:"#fca311",fontWeight:"600"},children:u}),Object(D.jsx)(s,{}),Object(D.jsx)(i,{})]})};var te=function(){return Object(D.jsx)(z,{children:Object(D.jsx)(M,{children:Object(D.jsxs)(f.a,{children:[Object(D.jsx)(F,{}),Object(D.jsxs)(y.c,{children:[Object(D.jsx)(y.a,{path:"/",exact:!0,component:H}),Object(D.jsx)(y.a,{path:"/motivation",component:R}),Object(D.jsx)(y.a,{path:"/challenges",exact:!0,component:V}),Object(D.jsx)(y.a,{path:"/challenges/:day",component:ne})]})]})})})},re=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,39)).then((function(n){var t=n.getCLS,r=n.getFID,o=n.getFCP,c=n.getLCP,a=n.getTTFB;t(e),r(e),o(e),c(e),a(e)}))};O.a.render(Object(D.jsxs)(p.a.StrictMode,{children:[Object(D.jsx)(A,{}),Object(D.jsx)(te,{})]}),document.getElementById("root")),re()}},[[38,1,2]]]);
//# sourceMappingURL=main.c1446efb.chunk.js.map