(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{115:function(e,t,n){},123:function(e,t,n){"use strict";n.r(t);var a,r,o,c,s,i=n(0),l=n.n(i),d=n(40),j=n.n(d),b=(n(114),n(115),n(29)),u=n(65),h=n(8),O=n(106),m=n(142),p=n(144),g=n(139),x=n(103),v=n(23),k=n(12),f=n(18),w=n(11),S=n(132),y=n(133),I=n(141),C=n(101),B=n(134),F=n(135),T=n(148),L=n(21),_=n(22),N=n(91),$=n.n(N),D=new(function(){function e(){Object(L.a)(this,e)}return Object(_.a)(e,[{key:"getProfile",value:function(){return $()(this.getToken())}},{key:"loggedIn",value:function(){var e=this.getToken();return!!e&&!this.isTokenExpired(e)}},{key:"isTokenExpired",value:function(e){try{return $()(e).exp<Date.now()/1e3}catch(t){return!1}}},{key:"getToken",value:function(){return localStorage.getItem("id_token")}},{key:"login",value:function(e){localStorage.setItem("id_token",e),window.location.assign("/")}},{key:"logout",value:function(){localStorage.removeItem("id_token"),window.location.assign("/")}}]),e}()),q=n(131),E=n(56),P=n(143),G=Object(P.a)(a||(a=Object(E.a)(["\n  mutation login($email: String!, $password: String!) {\n    login(email: $email, password: $password) {\n      token\n      user {\n        _id\n        username\n      }\n    }\n  }\n"]))),U=Object(P.a)(r||(r=Object(E.a)(["\n  mutation addUser($username: String!, $email: String!, $password: String!) {\n    addUser(username: $username, email: $email, password: $password) {\n      token\n      user {\n        _id\n        username\n      }\n    }\n  }\n"]))),V=Object(P.a)(o||(o=Object(E.a)(["\n  mutation saveBook($bookData: BookInput!) {\n    saveBook(bookData: $bookData) {\n      _id\n      username\n      email\n      savedBooks {\n        bookId\n        authors\n        image\n        description\n        title\n        link\n      }\n    }\n  }\n"]))),Y=Object(P.a)(c||(c=Object(E.a)(["\n  mutation removeBook($bookId: ID!) {\n    removeBook(bookId: $bookId) {\n      _id\n      username\n      email\n      savedBooks {\n        bookId\n        authors\n        image\n        description\n        title\n        link\n      }\n    }\n  }\n"]))),J=function(e){var t=localStorage.getItem("saved_books")?JSON.parse(localStorage.getItem("saved_books")):null;if(!t)return!1;var n=null===t||void 0===t?void 0:t.filter((function(t){return t!==e}));return localStorage.setItem("saved_books",JSON.stringify(n)),!0},K=n(3),z=function(){var e=Object(i.useState)([]),t=Object(w.a)(e,2),n=t[0],a=t[1],r=Object(i.useState)(""),o=Object(w.a)(r,2),c=o[0],s=o[1],l=Object(i.useState)(localStorage.getItem("saved_books")?JSON.parse(localStorage.getItem("saved_books")):[]),d=Object(w.a)(l,2),j=d[0],u=d[1],h=Object(q.a)(V),O=Object(w.a)(h,2),m=O[0];O[1].error;Object(i.useEffect)((function(){return function(){var e;(e=j).length?localStorage.setItem("saved_books",JSON.stringify(e)):localStorage.removeItem("saved_books")}}));var p=function(){var e=Object(f.a)(Object(k.a)().mark((function e(t){var n,r,o,i;return Object(k.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),c){e.next=3;break}return e.abrupt("return",!1);case 3:return e.prev=3,e.next=6,fetch("https://www.googleapis.com/books/v1/volumes?q=".concat(c));case 6:if((n=e.sent).ok){e.next=9;break}throw new Error("something went wrong!");case 9:return e.next=11,n.json();case 11:r=e.sent,o=r.items,i=o.map((function(e){var t;return{bookId:e.id,authors:e.volumeInfo.authors||["No author to display"],title:e.volumeInfo.title,description:e.volumeInfo.description,image:(null===(t=e.volumeInfo.imageLinks)||void 0===t?void 0:t.thumbnail)||""}})),a(i),s(""),e.next=21;break;case 18:e.prev=18,e.t0=e.catch(3),console.error(e.t0);case 21:case"end":return e.stop()}}),e,null,[[3,18]])})));return function(t){return e.apply(this,arguments)}}(),g=function(){var e=Object(f.a)(Object(k.a)().mark((function e(t){var a,r;return Object(k.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=n.find((function(e){return e.bookId===t})),D.loggedIn()?D.getToken():null){e.next=4;break}return e.abrupt("return",!1);case 4:return e.prev=4,e.next=7,m({variables:{bookData:Object(b.a)({},a)}});case 7:r=e.sent,r.data,console.log(j),u([].concat(Object(v.a)(j),[a.bookId])),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(4),console.error(e.t0);case 16:case"end":return e.stop()}}),e,null,[[4,13]])})));return function(t){return e.apply(this,arguments)}}();return Object(K.jsxs)(K.Fragment,{children:[Object(K.jsx)(S.a,{fluid:!0,className:"text-light bg-dark",children:Object(K.jsxs)(y.a,{children:[Object(K.jsx)("h1",{children:"Search for Books!"}),Object(K.jsx)(I.a,{onSubmit:p,children:Object(K.jsxs)(I.a.Row,{children:[Object(K.jsx)(C.a,{xs:12,md:8,children:Object(K.jsx)(I.a.Control,{name:"searchInput",value:c,onChange:function(e){return s(e.target.value)},type:"text",size:"lg",placeholder:"Search for a book"})}),Object(K.jsx)(C.a,{xs:12,md:4,children:Object(K.jsx)(B.a,{type:"submit",variant:"success",size:"lg",children:"Submit Search"})})]})})]})}),Object(K.jsxs)(y.a,{children:[Object(K.jsx)("h2",{children:n.length?"Viewing ".concat(n.length," results:"):"Search for a book to begin"}),Object(K.jsx)(F.a,{children:n.map((function(e){return Object(K.jsxs)(T.a,{border:"dark",children:[e.image?Object(K.jsx)(T.a.Img,{src:e.image,alt:"The cover for ".concat(e.title),variant:"top"}):null,Object(K.jsxs)(T.a.Body,{children:[Object(K.jsx)(T.a.Title,{children:e.title}),Object(K.jsxs)("p",{className:"small",children:["Authors: ",e.authors]}),Object(K.jsx)(T.a.Text,{children:e.description}),D.loggedIn()&&Object(K.jsx)(B.a,{disabled:null===j||void 0===j?void 0:j.some((function(t){return t===e.bookId})),className:"btn-block btn-info",onClick:function(){return g(e.bookId)},children:null!==j&&void 0!==j&&j.some((function(t){return t===e.bookId}))?"This book has already been saved!":"Save this Book!"})]})]},e.bookId)}))})]})]})},A=n(150),M=Object(P.a)(s||(s=Object(E.a)(["\n  {\n    me {\n      _id\n      username\n      email\n      savedBooks {\n        bookId\n        authors\n        image\n        description\n        title\n        link\n      }\n    }\n  }\n"]))),H=function(){var e=Object(A.a)(M),t=e.loading,n=e.data,a=Object(q.a)(Y),r=Object(w.a)(a,2),o=r[0],c=(r[1].error,(null===n||void 0===n?void 0:n.me)||{}),s=function(){var e=Object(f.a)(Object(k.a)().mark((function e(t){var n;return Object(k.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(D.loggedIn()?D.getToken():null){e.next=3;break}return e.abrupt("return",!1);case 3:return e.prev=3,e.next=6,o({variables:{bookId:t}});case 6:n=e.sent,n.data,J(t),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(3),console.error(e.t0);case 14:case"end":return e.stop()}}),e,null,[[3,11]])})));return function(t){return e.apply(this,arguments)}}();return t?Object(K.jsx)("h2",{children:"LOADING..."}):Object(K.jsxs)(K.Fragment,{children:[Object(K.jsx)(S.a,{fluid:!0,className:"text-light bg-dark",children:Object(K.jsx)(y.a,{children:Object(K.jsx)("h1",{children:"Viewing saved books!"})})}),Object(K.jsxs)(y.a,{children:[Object(K.jsx)("h2",{children:c.savedBooks.length?"Viewing ".concat(c.savedBooks.length," saved ").concat(1===c.savedBooks.length?"book":"books",":"):"You have no saved books!"}),Object(K.jsx)(F.a,{children:c.savedBooks.map((function(e){return Object(K.jsxs)(T.a,{border:"dark",children:[e.image?Object(K.jsx)(T.a.Img,{src:e.image,alt:"The cover for ".concat(e.title),variant:"top"}):null,Object(K.jsxs)(T.a.Body,{children:[Object(K.jsx)(T.a.Title,{children:e.title}),Object(K.jsxs)("p",{className:"small",children:["Authors: ",e.authors]}),Object(K.jsx)(T.a.Text,{children:e.description}),Object(K.jsx)(B.a,{className:"btn-block btn-danger",onClick:function(){return s(e.bookId)},children:"Delete this Book!"})]})]},e.bookId)}))})]})]})},R=n(146),W=n(145),Q=n(140),X=n(147),Z=n(19),ee=n(137),te=function(){var e=Object(i.useState)({username:"",email:"",password:""}),t=Object(w.a)(e,2),n=t[0],a=t[1],r=Object(i.useState)(!1),o=Object(w.a)(r,1)[0],c=Object(i.useState)(!1),s=Object(w.a)(c,2),l=s[0],d=s[1],j=Object(q.a)(U),u=Object(w.a)(j,2),h=u[0],O=u[1].error;Object(i.useEffect)((function(){d(!!O)}),[O]);var m=function(e){var t=e.target,r=t.name,o=t.value;a(Object(b.a)(Object(b.a)({},n),{},Object(Z.a)({},r,o)))},p=function(){var e=Object(f.a)(Object(k.a)().mark((function e(t){var r,o;return Object(k.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),!1===t.currentTarget.checkValidity()&&(t.preventDefault(),t.stopPropagation()),e.prev=3,e.next=6,h({variables:Object(b.a)({},n)});case 6:r=e.sent,o=r.data,console.log(o),D.login(o.addUser.token),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(3),console.error(e.t0),d(!0);case 16:a({username:"",email:"",password:""});case 17:case"end":return e.stop()}}),e,null,[[3,12]])})));return function(t){return e.apply(this,arguments)}}();return Object(K.jsx)(K.Fragment,{children:Object(K.jsxs)(I.a,{noValidate:!0,validated:o,onSubmit:p,children:[Object(K.jsx)(ee.a,{dismissible:!0,onClose:function(){return d(!1)},show:l,variant:"danger",children:"Something went wrong with your signup!"}),Object(K.jsxs)(I.a.Group,{children:[Object(K.jsx)(I.a.Label,{htmlFor:"username",children:"Username"}),Object(K.jsx)(I.a.Control,{type:"text",placeholder:"Your username",name:"username",onChange:m,value:n.username,required:!0}),Object(K.jsx)(I.a.Control.Feedback,{type:"invalid",children:"Username is required!"})]}),Object(K.jsxs)(I.a.Group,{children:[Object(K.jsx)(I.a.Label,{htmlFor:"email",children:"Email"}),Object(K.jsx)(I.a.Control,{type:"email",placeholder:"Your email address",name:"email",onChange:m,value:n.email,required:!0}),Object(K.jsx)(I.a.Control.Feedback,{type:"invalid",children:"Email is required!"})]}),Object(K.jsxs)(I.a.Group,{children:[Object(K.jsx)(I.a.Label,{htmlFor:"password",children:"Password"}),Object(K.jsx)(I.a.Control,{type:"password",placeholder:"Your password",name:"password",onChange:m,value:n.password,required:!0}),Object(K.jsx)(I.a.Control.Feedback,{type:"invalid",children:"Password is required!"})]}),Object(K.jsx)(B.a,{disabled:!(n.username&&n.email&&n.password),type:"submit",variant:"success",children:"Submit"})]})})},ne=function(){var e=Object(i.useState)({email:"",password:""}),t=Object(w.a)(e,2),n=t[0],a=t[1],r=Object(i.useState)(!1),o=Object(w.a)(r,1)[0],c=Object(i.useState)(!1),s=Object(w.a)(c,2),l=s[0],d=s[1],j=Object(q.a)(G),u=Object(w.a)(j,2),h=u[0],O=u[1].error;Object(i.useEffect)((function(){d(!!O)}),[O]);var m=function(e){var t=e.target,r=t.name,o=t.value;a(Object(b.a)(Object(b.a)({},n),{},Object(Z.a)({},r,o)))},p=function(){var e=Object(f.a)(Object(k.a)().mark((function e(t){var r,o;return Object(k.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),!1===t.currentTarget.checkValidity()&&(t.preventDefault(),t.stopPropagation()),e.prev=3,e.next=6,h({variables:Object(b.a)({},n)});case 6:r=e.sent,o=r.data,console.log(o),D.login(o.login.token),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(3),console.error(e.t0);case 15:a({email:"",password:""});case 16:case"end":return e.stop()}}),e,null,[[3,12]])})));return function(t){return e.apply(this,arguments)}}();return Object(K.jsx)(K.Fragment,{children:Object(K.jsxs)(I.a,{noValidate:!0,validated:o,onSubmit:p,children:[Object(K.jsx)(ee.a,{dismissible:!0,onClose:function(){return d(!1)},show:l,variant:"danger",children:"Something went wrong with your login credentials!"}),Object(K.jsxs)(I.a.Group,{children:[Object(K.jsx)(I.a.Label,{htmlFor:"email",children:"Email"}),Object(K.jsx)(I.a.Control,{type:"text",placeholder:"Your email",name:"email",onChange:m,value:n.email,required:!0}),Object(K.jsx)(I.a.Control.Feedback,{type:"invalid",children:"Email is required!"})]}),Object(K.jsxs)(I.a.Group,{children:[Object(K.jsx)(I.a.Label,{htmlFor:"password",children:"Password"}),Object(K.jsx)(I.a.Control,{type:"password",placeholder:"Your password",name:"password",onChange:m,value:n.password,required:!0}),Object(K.jsx)(I.a.Control.Feedback,{type:"invalid",children:"Password is required!"})]}),Object(K.jsx)(B.a,{disabled:!(n.email&&n.password),type:"submit",variant:"success",children:"Submit"})]})})},ae=function(){var e=Object(i.useState)(!1),t=Object(w.a)(e,2),n=t[0],a=t[1];return Object(K.jsxs)(K.Fragment,{children:[Object(K.jsx)(R.a,{bg:"dark",variant:"dark",expand:"lg",children:Object(K.jsxs)(y.a,{fluid:!0,children:[Object(K.jsx)(R.a.Brand,{as:u.b,to:"/",children:"Google Books Search"}),Object(K.jsx)(R.a.Toggle,{"aria-controls":"navbar"}),Object(K.jsx)(R.a.Collapse,{id:"navbar",children:Object(K.jsxs)(W.a,{className:"ml-auto",children:[Object(K.jsx)(W.a.Link,{as:u.b,to:"/",children:"Search For Books"}),D.loggedIn()?Object(K.jsxs)(K.Fragment,{children:[Object(K.jsx)(W.a.Link,{as:u.b,to:"/saved",children:"See Your Books"}),Object(K.jsx)(W.a.Link,{onClick:D.logout,children:"Logout"})]}):Object(K.jsx)(W.a.Link,{onClick:function(){return a(!0)},children:"Login/Sign Up"})]})})]})}),Object(K.jsx)(Q.a,{size:"lg",show:n,onHide:function(){return a(!1)},"aria-labelledby":"signup-modal",children:Object(K.jsxs)(X.a.Container,{defaultActiveKey:"login",children:[Object(K.jsx)(Q.a.Header,{closeButton:!0,children:Object(K.jsx)(Q.a.Title,{id:"signup-modal",children:Object(K.jsxs)(W.a,{variant:"pills",children:[Object(K.jsx)(W.a.Item,{children:Object(K.jsx)(W.a.Link,{eventKey:"login",children:"Login"})}),Object(K.jsx)(W.a.Item,{children:Object(K.jsx)(W.a.Link,{eventKey:"signup",children:"Sign Up"})})]})})}),Object(K.jsx)(Q.a.Body,{children:Object(K.jsxs)(X.a.Content,{children:[Object(K.jsx)(X.a.Pane,{eventKey:"login",children:Object(K.jsx)(ne,{handleModalClose:function(){return a(!1)}})}),Object(K.jsx)(X.a.Pane,{eventKey:"signup",children:Object(K.jsx)(te,{handleModalClose:function(){return a(!1)}})})]})})]})})]})},re=Object(O.a)({uri:"/graphql"}),oe=Object(x.a)((function(e,t){var n=t.headers,a=localStorage.getItem("id_token");return{headers:Object(b.a)(Object(b.a)({},n),{},{authorization:a?"Bearer ".concat(a):""})}})),ce=new m.a({link:oe.concat(re),cache:new p.a});var se=function(){return Object(K.jsx)(g.a,{client:ce,children:Object(K.jsx)(u.a,{children:Object(K.jsxs)(K.Fragment,{children:[Object(K.jsx)(ae,{}),Object(K.jsxs)(h.c,{children:[Object(K.jsx)(h.a,{path:"/",element:Object(K.jsx)(z,{})}),Object(K.jsx)(h.a,{path:"/saved",element:Object(K.jsx)(H,{})}),Object(K.jsx)(h.a,{path:"*",element:Object(K.jsx)("h1",{className:"display-2",children:"Wrong page!"})})]})]})})})};j.a.render(Object(K.jsx)(l.a.StrictMode,{children:Object(K.jsx)(se,{})}),document.getElementById("root"))}},[[123,1,2]]]);
//# sourceMappingURL=main.feee9df1.chunk.js.map