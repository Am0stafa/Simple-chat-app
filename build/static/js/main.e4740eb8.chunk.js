(this["webpackJsonpreact-chat"]=this["webpackJsonpreact-chat"]||[]).push([[0],{16:function(e,t,a){e.exports=a(30)},21:function(e,t,a){},22:function(e,t,a){},30:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(12),o=a.n(c),i=(a(21),a(6)),l=(a(22),a(13)),u=a(9),s=a(5),m=a.n(s);a(23),a(27),a(31);m.a.initializeApp({apiKey:"AIzaSyAqCRXCXUZwLgE23_hW51KzLJLAgn0ozns",authDomain:"superchat-5e202.firebaseapp.com",projectId:"superchat-5e202",storageBucket:"superchat-5e202.appspot.com",messagingSenderId:"461431567446",appId:"1:461431567446:web:54c9bee52bb51ad87b37f7"});var p=new m.a.auth.GoogleAuthProvider,d=m.a.firestore.FieldValue.serverTimestamp(),h=m.a.auth(),g=m.a.firestore(),f=(m.a.analytics(),function(){return h.currentUser&&r.a.createElement("button",{className:"sign-out",onClick:function(){return h.signOut()}},"Sign Out")}),b=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{className:"sign-in",onClick:function(){h.signInWithPopup(p).then((function(e){e.credential.accessToken;var t=e.user;console.log(t),t.displayName,t.uid,t.photoURL})).catch((function(e){e.code,e.message,e.email,e.credential,console.log(e)}))}},"Sign in with Google"),r.a.createElement("p",null,"Do not violate the community guidelines or you will be banned for life!"))},E=a(10),v=a.n(E),w=a(15),y=function(e){var t=e.message,a=t.text,n=t.uid,c=t.photoURL,o=n===h.currentUser.uid?"sent":"received";return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"message ".concat(o)},r.a.createElement("img",{src:c||"https://api.adorable.io/avatars/23/abott@adorable.png"}),r.a.createElement("p",null,a)))},k=function(){var e=Object(n.useRef)(),t=g.collection("messages"),a=t.orderBy("createdAt").limit(50),c=Object(u.a)(a,{idField:"id"}),o=Object(i.a)(c,1)[0],l=Object(n.useState)(""),s=Object(i.a)(l,2),m=s[0],p=s[1],f=function(){var a=Object(w.a)(v.a.mark((function a(n){var r,c,o;return v.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n.preventDefault(),r=h.currentUser,c=r.uid,o=r.photoURL,a.next=4,t.add({text:m,createdAt:d,uid:c,photoURL:o});case 4:p(""),e.current.scrollIntoView({behavior:"smooth"});case 6:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement("main",null,o&&o.map((function(e){return r.a.createElement(y,{key:e.id,message:e})})),r.a.createElement("span",{ref:e})),r.a.createElement("form",{onSubmit:f},r.a.createElement("input",{value:m,onChange:function(e){return p(e.target.value)},placeholder:"say something nice"}),r.a.createElement("button",{type:"submit",disabled:!m},"\ud83d\udd4a\ufe0f")))};var O=function(){var e=Object(l.a)(h),t=Object(i.a)(e,1)[0];return r.a.createElement("div",{className:"App"},r.a.createElement("header",null,r.a.createElement("h1",null,"\u269b\ufe0f\ud83d\udd25\ud83d\udcac"),r.a.createElement(f,null)),r.a.createElement("section",null,t?r.a.createElement(k,null):r.a.createElement(b,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(O,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[16,1,2]]]);
//# sourceMappingURL=main.e4740eb8.chunk.js.map