(this["webpackJsonpproject-3-frontend"]=this["webpackJsonpproject-3-frontend"]||[]).push([[0],{58:function(e,t,a){},88:function(e,t,a){"use strict";a.r(t);var c=a(2),n=a.n(c),s=a(31),r=a.n(s),i=(a(58),a(7)),o=a(5),l=a(4);function j(){return window.localStorage.getItem("token")}function u(){window.localStorage.removeItem("token")}function d(){var e=j();if(!e)return!1;var t=e.split(".");return!(t.length<3)&&JSON.parse(atob(t[1]))}function b(){var e=d();return!!e&&Math.round(Date.now()/1e3)<e.exp}function h(){var e=d();return!!e&&e.sub}var m=a(0);var x=function(){var e=b(),t=Object(o.g)(),a=n.a.useState(!1),c=Object(l.a)(a,2),s=c[0],r=c[1],j=Object(o.h)().pathname,d=h();return n.a.useEffect((function(){r(!1)}),[j]),Object(m.jsx)("nav",{className:"navbar",role:"navigation","aria-label":"main navigation",children:Object(m.jsxs)("div",{className:"container",children:[Object(m.jsxs)("div",{className:"navbar-brand",children:[Object(m.jsx)(i.b,{to:"/",children:Object(m.jsx)("h2",{children:"mood.ible"})}),Object(m.jsxs)("span",{className:"navbar-burger ".concat(s?"is-active":""),onClick:function(){r(!s)},children:[Object(m.jsx)("span",{}),Object(m.jsx)("span",{}),Object(m.jsx)("span",{})]})]}),Object(m.jsx)("div",{className:"navbar-menu ".concat(s?"is-active":""),children:Object(m.jsx)("div",{className:"navbar-end",children:Object(m.jsx)("div",{className:"navbar-item",children:Object(m.jsxs)("div",{className:"buttons",children:[!e&&Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(i.b,{to:"/signup",children:"Sign up"}),Object(m.jsx)(i.b,{to:"/login",children:"Login"})]}),e&&Object(m.jsxs)("div",{className:"buttons",children:[Object(m.jsx)("button",{className:"button",onClick:function(){u(),t.push("/")},children:"Logout"}),Object(m.jsx)(i.b,{to:"/".concat(d),children:Object(m.jsx)("button",{className:"button",children:"Profile"})})]})]})})})})]})})};var O=function(){return Object(m.jsx)("footer",{className:"footer",children:Object(m.jsxs)("div",{className:"container has-text-centered",children:[Object(m.jsxs)("div",{className:"links",children:[Object(m.jsx)(i.b,{to:"/login",children:"Login"}),Object(m.jsx)(i.b,{to:"/signup",children:"Sign up"}),Object(m.jsx)(i.b,{to:"/about",children:"About"})]}),Object(m.jsxs)("p",{children:["Made by ",Object(m.jsx)("a",{href:"https://github.com/hollylouisarose",children:"Holly Stratton 2021"})]})]})})},p=a.p+"static/media/moodboard.09c53495.png";var f=function(){return Object(m.jsxs)("section",{className:"section",children:[Object(m.jsx)("div",{className:"content",children:Object(m.jsx)("div",{className:"hero",children:Object(m.jsxs)("div",{className:"columns",children:[Object(m.jsxs)("div",{className:"column is-half",children:[Object(m.jsx)("h3",{children:"Inspiration without information overwhelm."}),Object(m.jsx)("p",{children:"Mood.ible generates a curated moodboard of five inspiring images, based on your chosen \u2018mood\u2019."}),Object(m.jsx)("p",{children:"You will never see more than five at a time, this give you time to savour each one, without disappearing down a rabbit hole."}),Object(m.jsx)("p",{children:"Your profile is the perfect place to store your favourite images and write your ideas down, ready for when you need them."})]}),Object(m.jsx)("div",{className:"column is-half",children:Object(m.jsx)("figure",{children:Object(m.jsx)("img",{src:p})})})]})})}),Object(m.jsxs)("div",{className:"hero",children:[Object(m.jsx)("h3",{className:"has-text-centered",children:"More focus, less scrolling"}),Object(m.jsx)("button",{className:"cta-button button",children:Object(m.jsx)(i.b,{to:"/signup",children:"Sign Up"})})]})]})},v=a(11),g=a(53),N=["component"];var w=function(e){var t=e.component,a=Object(g.a)(e,N);return b()?Object(m.jsx)(o.b,Object(v.a)(Object(v.a)({},a),{},{component:t})):(u(),Object(m.jsx)(o.a,{to:"/login"}))},k=a(3),y=a.n(k),S=a(6),C=a(12),I=a.n(C),E="https://backend-moodible.herokuapp.com/api";function D(){return{headers:{Authorization:"Bearer ".concat(j())}}}function F(e){return I.a.get("".concat(E,"/images/").concat(e,"/"))}function L(e,t){return I.a.post("/api/images/".concat(e,"/like/"),t,D())}function M(e,t){return I.a.get("".concat(E,"/images/").concat(e,"/notes/").concat(t,"/"),D())}function P(e,t){return I.a.post("".concat(E,"/images/").concat(e,"/notes/"),t,D())}function T(e,t,a){return I.a.put("/api/images/".concat(e,"/notes/").concat(t,"/"),a,D())}function U(e,t){return I.a.delete("".concat(E,"/images/").concat(e,"/notes/").concat(t,"/"),D())}function Y(){return I.a.get("".concat(E,"/auth/profile/"),D())}function q(e,t){return I.a.put("".concat(E,"/auth/profile/").concat(e,"/"),t,D())}function A(e,t){return I.a.post("".concat(E,"/images/").concat(e,"/like/"),t,D())}function B(e){return I.a.post("".concat(E,"/auth/login/"),e)}function H(e){return I.a.post("".concat(E,"/auth/register/"),e)}var J=a(21);function G(e){var t=n.a.useState(e),a=Object(l.a)(t,2),c=a[0],s=a[1],r=n.a.useState(e),i=Object(l.a)(r,2),o=i[0],j=i[1];return{formData:c,formErrors:o,setFormErrors:j,handleChange:function(e){s(Object(v.a)(Object(v.a)({},c),{},Object(J.a)({},e.target.name,e.target.value))),j(Object(v.a)(Object(v.a)({},o),{},Object(J.a)({},e.target.name,"")))},setFormData:s}}var _={username:"",firstname:"",email:"",password:"",passwordConfirmation:""};var z=function(){var e=Object(o.g)(),t=G(_),a=t.formData,c=t.formErrors,n=t.setFormErrors,s=t.handleChange,r=function(){var t=Object(S.a)(y.a.mark((function t(s){return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s.preventDefault(),t.prev=1,t.next=4,H(a);case 4:e.push("/login"),t.next=11;break;case 7:t.prev=7,t.t0=t.catch(1),n(t.t0.response.data),console.log(c);case 11:case"end":return t.stop()}}),t,null,[[1,7]])})));return function(e){return t.apply(this,arguments)}}();return Object(m.jsx)("section",{className:"section",children:Object(m.jsx)("div",{className:"container",children:Object(m.jsx)("div",{className:"columns",children:Object(m.jsxs)("form",{className:"column is-half is-offset-one-quarter box",onSubmit:r,children:[Object(m.jsx)("h3",{className:"has-text-centered",children:"Lets get started"}),Object(m.jsx)("p",{className:"has-text-centered",children:"Sign up for an account"}),Object(m.jsxs)("div",{className:"field",children:[Object(m.jsx)("label",{className:"label",children:"Username"}),Object(m.jsxs)("div",{className:"control",children:[c.username&&Object(m.jsx)("p",{className:"error-text",children:c.username}),Object(m.jsx)("input",{className:"input ".concat(c.username?"is-danger":""),placeholder:"Username",name:"username",onChange:s})]})]}),Object(m.jsxs)("div",{className:"field",children:[Object(m.jsx)("label",{className:"label",children:"First name"}),Object(m.jsx)("div",{className:"control",children:Object(m.jsx)("input",{className:"input",placeholder:"Your first name",name:"firstname",onChange:s})})]}),Object(m.jsxs)("div",{className:"field",children:[Object(m.jsx)("label",{className:"label",children:"Email"}),Object(m.jsxs)("div",{className:"control",children:[c.email&&Object(m.jsx)("p",{className:"error-text",children:c.email}),Object(m.jsx)("input",{className:"input ".concat(c.email?"is-danger":""),placeholder:"Email Address",name:"email",onChange:s})]})]}),Object(m.jsxs)("div",{className:"field",children:[Object(m.jsx)("label",{className:"label",children:"Password"}),Object(m.jsxs)("div",{className:"control",children:[c.password&&Object(m.jsx)("p",{className:"error-text",children:c.password}),Object(m.jsx)("input",{type:"password",className:"input ".concat(c.password?"is-danger":""),placeholder:"Password",name:"password",onChange:s})]})]}),Object(m.jsxs)("div",{className:"field",children:[Object(m.jsx)("label",{className:"label",children:"Password Confirmation"}),Object(m.jsxs)("div",{className:"control",children:[c.passwordConfirmation&&Object(m.jsx)("p",{className:"error-text",children:c.passwordConfirmation}),Object(m.jsx)("input",{type:"password",className:"input ".concat(c.passwordConfirmation?"is-danger":""),placeholder:"Password Confirmation",name:"passwordConfirmation",onChange:s})]})]}),Object(m.jsx)("div",{className:"field",children:Object(m.jsx)("button",{type:"submit",className:"button is-fullwidth",children:"Sign Up"})})]})})})})};var X=function(){var e=Object(o.g)(),t=n.a.useState({username:"",password:""}),a=Object(l.a)(t,2),c=a[0],s=a[1],r=n.a.useState(!1),i=Object(l.a)(r,2),j=i[0],u=i[1],d=function(e){s(Object(v.a)(Object(v.a)({},c),{},Object(J.a)({},e.target.name,e.target.value))),u(!1)},b=function(){var t=Object(S.a)(y.a.mark((function t(a){var n,s;return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),t.prev=1,t.next=4,B(c);case 4:n=t.sent,r=n.data.token,window.localStorage.setItem("token",r),s=h(),e.push("/".concat(s)),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(1),u(!0);case 13:case"end":return t.stop()}var r}),t,null,[[1,10]])})));return function(e){return t.apply(this,arguments)}}();return Object(m.jsx)("section",{className:"section",children:Object(m.jsx)("div",{className:"container",children:Object(m.jsx)("div",{className:"columns",children:Object(m.jsxs)("form",{className:"column is-half is-offset-one-quarter box",onSubmit:b,children:[Object(m.jsx)("h3",{className:"has-text-centered",children:"Log in"}),Object(m.jsxs)("div",{className:"field",children:[Object(m.jsx)("label",{className:"label",children:"Username"}),Object(m.jsx)("div",{className:"control",children:Object(m.jsx)("input",{className:"input",placeholder:"Username",name:"username",onChange:d})})]}),Object(m.jsxs)("div",{className:"field",children:[Object(m.jsx)("label",{className:"label",children:"Password"}),Object(m.jsx)("div",{className:"control",children:Object(m.jsx)("input",{type:"password",className:"input",placeholder:"Password",name:"password",onChange:d})})]}),Object(m.jsxs)("div",{className:"field",children:[j&&Object(m.jsx)("p",{className:"has-text-centered error",children:"Oops! Incorrect login details"}),Object(m.jsx)("button",{type:"submit",className:"button is-fullwidth login",children:"Login"})]})]})})})})},K=a(22);var Q=function(){var e=h();return Object(m.jsx)("div",{className:"navbar user-nav",role:"navigation","aria-label":"user navigation",children:Object(m.jsx)("div",{className:"navbar-brand",children:Object(m.jsxs)("div",{className:"navbar-item ",children:[Object(m.jsx)(i.b,{to:"/choosemood",children:" Make a Moodboard"}),Object(m.jsx)(i.b,{to:"/".concat(e,"/notes"),children:"Your notes"}),Object(m.jsx)(i.b,{to:"/".concat(e),children:"Your favourites"}),Object(m.jsx)(i.b,{to:"/".concat(e,"/edit"),children:"Edit profile"})]})})})};var R=function(){return Object(m.jsx)("p",{children:"...loading"})};var V=function(){return Object(m.jsx)("section",{className:"section",children:Object(m.jsxs)("div",{className:"container has-text-centered",children:[Object(m.jsx)("h2",{className:"title",children:"Something went wrong... "}),Object(m.jsx)(i.b,{to:"/",children:"Head back to home"})]})})};var W=function(){var e=Object(o.g)(),t=n.a.useState(""),a=Object(l.a)(t,2),c=a[0],s=a[1],r=n.a.useState([]),i=Object(l.a)(r,2),j=i[0],u=i[1],d=Object(o.i)(),b=n.a.useState(!1),h=Object(l.a)(b,2),x=h[0],O=h[1],p=!c&&!x,f=Object(K.useSpring)({to:{opacity:1},from:{opacity:0}});n.a.useEffect((function(){(function(){var e=Object(S.a)(y.a.mark((function e(){var t;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Y();case 3:t=e.sent,s(t.data),u(t.data.likedImages),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),O(!0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}})()()}),[d]);var v=function(){var t=Object(S.a)(y.a.mark((function t(a){var c,n;return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=a.target.value,n=j.filter((function(e){return e.source!==a.target.id})),u(n),t.prev=3,t.next=6,A(c,j);case 6:e.push("/".concat(d)),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(3),console.log(t.t0);case 12:case"end":return t.stop()}}),t,null,[[3,9]])})));return function(e){return t.apply(this,arguments)}}();return Object(m.jsxs)("section",{className:"section",children:[x&&Object(m.jsx)(V,{}),p&&Object(m.jsx)(R,{}),c&&Object(m.jsxs)("div",{children:[Object(m.jsx)("div",{className:"profile-header",children:Object(m.jsxs)("div",{className:"profile-icons",children:[Object(m.jsxs)("h4",{children:["Hi there, ",c.username]}),Object(m.jsx)("img",{className:"profile-image",src:c.profileImage})]})}),Object(m.jsx)(Q,{user:c},c.id)]}),Object(m.jsx)("div",{className:"columns is-multiline",children:c&&c.likedImages.map((function(e){return Object(m.jsx)("div",{className:"column is-one-quarter-desktop is-one-third-tablet",children:Object(m.jsx)(K.animated.div,{style:f,children:Object(m.jsxs)("figure",{className:"user-favourite-figure",children:[Object(m.jsx)("button",{onClick:v,className:"button unfavourite-button",id:e.source,value:e.id,"aria-label":"remove",children:" X "}),Object(m.jsx)("img",{className:"user-favourite",src:e.source})]})})},e.id)}))})]},c.id)};var Z=function(e){var t=e.value,a=e.onChange,c=function(){var e=Object(S.a)(y.a.mark((function e(t){var c,n;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(c=new FormData).append("file",t.target.files[0]),c.append("upload_preset","p1roac0t"),e.next=5,I.a.post("https://api.cloudinary.com/v1_1/hollylouisarose/image/upload",c);case 5:n=e.sent,a(n.data.url);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(m.jsxs)(m.Fragment,{children:[t&&Object(m.jsx)("div",{children:Object(m.jsx)("img",{src:t})}),!t&&Object(m.jsx)("div",{className:"file is-boxed is-fullwidth has-text-centered",children:Object(m.jsxs)("label",{className:"file-label",children:[Object(m.jsx)("input",{className:"file-input",type:"file",name:name,onChange:c}),Object(m.jsx)("span",{className:"file-cta",children:Object(m.jsx)("span",{className:"file-label",children:"Choose a file\u2026"})})]})})]})},$={username:"",email:"",profileImage:""};var ee=function(){var e=Object(o.g)(),t=h(),a=n.a.useState($),c=Object(l.a)(a,2),s=c[0],r=c[1],i=n.a.useState($),j=Object(l.a)(i,2),u=j[0],d=j[1],b=n.a.useState(!1),x=Object(l.a)(b,2),O=x[0],p=x[1],f=!s&&!O;n.a.useEffect((function(){(function(){var e=Object(S.a)(y.a.mark((function e(){var t;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Y();case 3:t=e.sent,r(t.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),p(!0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}})()()}),[r]);var g=function(e){r(Object(v.a)(Object(v.a)({},s),{},Object(J.a)({},e.target.name,e.target.value)))},N=function(){var a=Object(S.a)(y.a.mark((function a(c){return y.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return c.preventDefault(),a.prev=1,a.next=4,q(t,s);case 4:e.push("/".concat(t)),a.next=11;break;case 7:a.prev=7,a.t0=a.catch(1),d(a.t0.response.data),console.log(u);case 11:case"end":return a.stop()}}),a,null,[[1,7]])})));return function(e){return a.apply(this,arguments)}}();return Object(m.jsx)("section",{className:"section",children:Object(m.jsx)("div",{className:"container",children:Object(m.jsxs)("div",{className:"columns",children:[O&&Object(m.jsx)(V,{}),f&&Object(m.jsx)(R,{}),Object(m.jsxs)("form",{className:"column is-half is-offset-one-quarter box",onSubmit:N,children:[Object(m.jsxs)("div",{className:"field",children:[Object(m.jsx)("label",{className:"label",children:"Username"}),u.username&&Object(m.jsx)("p",{className:"error-text",children:u.username}),Object(m.jsx)("div",{className:"control",children:Object(m.jsx)("input",{className:"input ".concat(u.username?"is-danger":""),name:"username",onChange:g,value:s.username})})]}),Object(m.jsxs)("div",{className:"field",children:[Object(m.jsx)("label",{className:"label",children:"Email"}),u.email&&Object(m.jsx)("p",{className:"error-text",children:u.email}),Object(m.jsx)("div",{className:"control",children:Object(m.jsx)("input",{className:"input ".concat(u.email?"is-danger":""),name:"email",onChange:g,value:s.email})})]}),Object(m.jsxs)("div",{className:"field",children:[Object(m.jsx)("label",{className:"label",children:"Profile Image"}),u.profileImage&&Object(m.jsx)("p",{className:"error-text",children:u.profileImage}),Object(m.jsxs)("div",{className:"control",children:[Object(m.jsx)(Z,{className:"input ".concat(u.profileImage?"is-danger":""),name:"profileImage",onChange:function(e){r(Object(v.a)(Object(v.a)({},s),{},{profileImage:e}))},value:s.profileImage}),Object(m.jsx)("div",{onClick:function(){r(Object(v.a)(Object(v.a)({},s),{},{profileImage:""})),console.log("form data",s)},children:Object(m.jsx)("a",{children:"Change Image"})})]})]}),Object(m.jsx)("div",{className:"field",children:Object(m.jsx)("button",{type:"submit",className:"button is-fullwidth login",children:"Save changes"})})]})]})})})};var te=function(){return Object(m.jsx)("section",{className:"section",children:Object(m.jsx)("div",{className:"container",children:Object(m.jsx)("div",{className:"columns",children:Object(m.jsxs)("div",{className:"column is-half-desktop is-two-thirds-tablet",children:[Object(m.jsx)("h3",{children:"Thanks for visiting mood.ible"}),Object(m.jsx)("p",{children:"This site was my final project for my Software Engineering course at General Assembly. I have just graduated and I am looking for opportunities so if you would like to chat, please do get in touch:"}),Object(m.jsxs)("ul",{children:[Object(m.jsx)("li",{children:Object(m.jsx)("a",{href:"https://www.linkedin.com/in/hstratton/",children:"Linkedin "})}),Object(m.jsx)("li",{children:Object(m.jsx)("a",{href:"https://github.com/hollylouisarose",children:"GitHub"})}),Object(m.jsx)("p",{children:"Thanks! Holly \ud83d\udc69\ud83c\udffb\u200d\ud83d\udcbb "})]})]})})})})},ae=a.p+"static/media/outlineheart.df4fe2ab.svg",ce=a.p+"static/media/filledheart.9139fe79.svg";var ne=function(e){var t=e.image,a=n.a.useState([]),c=Object(l.a)(a,2),s=c[0],r=c[1],o=n.a.useState(!1),j=Object(l.a)(o,2),u=j[0],d=j[1],b=n.a.useState(!1),h=Object(l.a)(b,2),x=h[0],O=h[1],p=Object(K.useSpring)({to:{opacity:1},from:{opacity:0}}),f=function(){var e=Object(S.a)(y.a.mark((function e(t){var a;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.target.id,r(t.target.id),d(!0),e.prev=3,e.next=6,A(a,s);case 6:e.next=11;break;case 8:e.prev=8,e.t0=e.catch(3),O(!0);case 11:case"end":return e.stop()}}),e,null,[[3,8]])})));return function(t){return e.apply(this,arguments)}}();return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("div",{children:x&&Object(m.jsx)(V,{})}),Object(m.jsx)("div",{className:"masonry-item",children:Object(m.jsxs)(K.animated.div,{style:p,children:[u?Object(m.jsx)("button",{className:"favourite-button button",id:t.id,children:Object(m.jsx)("img",{src:ce,id:t.id,alt:"like-button",onClick:f})}):Object(m.jsx)("button",{className:"favourite-button button",id:t.id,children:Object(m.jsx)("img",{src:ae,id:t.id,onClick:f,alt:"like-button"})}),Object(m.jsx)(i.b,{to:"/images/".concat(t.id,"/"),children:Object(m.jsx)("img",{className:"masonry-image",src:t.source})})]})},t.id)]})};var se=function(){var e=n.a.useState(""),t=Object(l.a)(e,2),a=t[0],c=t[1],s=Object(o.i)(),r=h(),i=n.a.useState(!1),j=Object(l.a)(i,2),u=j[0],d=j[1],b=!a&&!u;n.a.useEffect((function(){(function(){var e=Object(S.a)(y.a.mark((function e(){var t;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,I.a.get("".concat(E,"/images/"));case 3:t=e.sent,c(t.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),d(!0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}})()()}),[]);var x=a&&a.filter((function(e){return e.mood.choice.toLowerCase().includes(s.moodId)}));return Object(m.jsxs)(m.Fragment,{children:[u&&Object(m.jsx)(V,{}),b&&Object(m.jsx)(R,{}),Object(m.jsx)(Q,{user:r},r),Object(m.jsx)("div",{className:"masonry",children:a&&function(){for(var e=[],t=0;e.length<5;t++){var a=x[Math.floor(Math.random()*x.length)];e.includes(a)||e.push(a)}return e}().map((function(e){return Object(m.jsx)(ne,{image:e},e.id)}))})]})};var re=function(){var e=Object(o.g)(),t=function(t){console.log(t.target.id),e.push("/moodboard/".concat(t.target.id))};return Object(m.jsx)("section",{className:"section",children:Object(m.jsxs)("div",{className:"choices",children:[Object(m.jsx)("button",{onClick:t,className:"button mood-choice",id:"calm",children:" Calm"}),Object(m.jsx)("button",{onClick:t,className:"button mood-choice",id:"playful",children:" Playful"}),Object(m.jsx)("button",{onClick:t,className:"button mood-choice",id:"adventurous",children:" Adventurous"})]})})};var ie=function(){var e=Object(o.g)(),t=Object(o.i)().imageId,a=n.a.useState(null),c=Object(l.a)(a,2),s=c[0],r=c[1],i=n.a.useState(!1),j=Object(l.a)(i,2),u=j[0],d=j[1],b=n.a.useState(!1),x=Object(l.a)(b,2),O=x[0],p=x[1],f=!s&&!O,v=Object(K.useSpring)({to:{opacity:1},from:{opacity:0}});n.a.useEffect((function(){(function(){var e=Object(S.a)(y.a.mark((function e(){var a;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,F(t);case 3:a=e.sent,r(a.data),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0),p(!0);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}})()()}),[t]),console.log();var g=function(){var a=Object(S.a)(y.a.mark((function a(){var c,n;return y.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return c=h(),s.likedBy.includes(c)||s.likedBy.push(c),a.prev=2,a.next=5,L(t,s);case 5:n=a.sent,console.log(n),d(!0),setTimeout((function(){e.push("/moodboard/".concat(s.mood.choice.toLowerCase()))}),400),a.next=14;break;case 11:a.prev=11,a.t0=a.catch(2),console.log(a.t0);case 14:case"end":return a.stop()}}),a,null,[[2,11]])})));return function(){return a.apply(this,arguments)}}();return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)("section",{className:"section",children:Object(m.jsxs)("div",{className:"container",children:[O&&Object(m.jsx)(V,{}),f&&Object(m.jsx)(R,{}),s&&Object(m.jsx)("div",{className:"image-show",children:Object(m.jsx)(K.animated.div,{style:v,children:Object(m.jsxs)("figure",{className:"image-single",children:[u?Object(m.jsx)("button",{className:"favourite-button button",id:s.id,children:Object(m.jsx)("img",{src:ce,id:s.id,alt:"like-button",onClick:g})}):Object(m.jsx)("button",{className:"favourite-button button",id:s.id,children:Object(m.jsx)("img",{src:ae,id:s.id,onClick:g,alt:"like-button"})}),Object(m.jsx)("img",{src:s.source}),Object(m.jsx)("p",{className:"has-text-centered",children:s.description})]})})},s.id)]})})})};var oe=function(){var e=n.a.useState([]),t=Object(l.a)(e,2),a=t[0],c=t[1],s=n.a.useState(!1),r=Object(l.a)(s,2),o=r[0],j=r[1],u=!a&&!o;return n.a.useEffect((function(){(function(){var e=Object(S.a)(y.a.mark((function e(){var t;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,I.a.get("".concat(E,"/auth/profile/"),D());case 3:t=e.sent,c(t.data.notesMade),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),j(!0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(m.jsx)("section",{className:"section",children:Object(m.jsxs)("div",{className:"container",children:[Object(m.jsx)("h4",{className:"has-text-centered",children:"Your notes"}),Object(m.jsx)(Q,{}),Object(m.jsx)(i.b,{className:"button",to:"/notes/new",children:"Add a note"}),o&&Object(m.jsx)(V,{}),u&&Object(m.jsx)(R,{}),a&&a.map((function(e){return Object(m.jsx)("div",{children:Object(m.jsx)("ul",{children:Object(m.jsx)(i.b,{to:"/notes/".concat(e.id),children:Object(m.jsx)("li",{children:e.title})})})},e.id)}))]})})};var le=function(){var e=Object(o.g)(),t=n.a.useState([]),a=Object(l.a)(t,2),c=a[0],s=a[1],r=Object(o.i)().noteId,j=h(),u=n.a.useState(!1),d=Object(l.a)(u,2),b=d[0],x=d[1],O=!c&&!b;n.a.useEffect((function(){(function(){var e=Object(S.a)(y.a.mark((function e(){var t;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,M(j,r);case 3:t=e.sent,s(t.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),x(!0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}})()()}),[j,r]);var p=function(){var t=Object(S.a)(y.a.mark((function t(){return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,U(j,r);case 2:e.push("/".concat(j,"/notes"));case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(m.jsx)("section",{className:"section",children:Object(m.jsxs)("div",{className:"container",children:[Object(m.jsx)(Q,{}),b&&Object(m.jsx)(V,{}),O&&Object(m.jsx)(R,{}),c&&Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("div",{children:[Object(m.jsx)("h4",{children:c.title}),Object(m.jsx)("p",{children:c.text})]},c.id),Object(m.jsx)("button",{className:"button",children:Object(m.jsx)(i.b,{to:"/notes/".concat(r,"/edit"),children:"Edit"})}),Object(m.jsx)("button",{onClick:p,className:"button",children:"Delete"}),Object(m.jsx)("button",{className:"button",children:Object(m.jsx)(i.b,{to:"/".concat(j,"/notes"),children:"Back to notes"})})]})]})})},je={title:"",text:""};var ue=function(){var e=Object(o.g)(),t=h(),a=G(je),c=a.formData,n=a.formErrors,s=a.setFormErrors,r=a.handleChange,i=function(){var a=Object(S.a)(y.a.mark((function a(r){var i;return y.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return r.preventDefault(),a.prev=1,a.next=4,P(t,c);case 4:i=a.sent,e.push("/notes/".concat(i.data.id)),a.next=12;break;case 8:a.prev=8,a.t0=a.catch(1),s(a.t0.response.data),console.log(n);case 12:case"end":return a.stop()}}),a,null,[[1,8]])})));return function(e){return a.apply(this,arguments)}}();return Object(m.jsx)("section",{className:"section",children:Object(m.jsx)("div",{className:"container",children:Object(m.jsx)("div",{className:"columns",children:Object(m.jsxs)("form",{className:"column is-half is-offset-one-quarter box",onSubmit:i,children:[Object(m.jsxs)("div",{className:"field",children:[Object(m.jsx)("label",{className:"label",children:"Title"}),n.title&&Object(m.jsx)("p",{className:"error-text",children:n.title}),Object(m.jsx)("div",{className:"control",children:Object(m.jsx)("input",{className:"input ".concat(n.title?"is-danger":""),name:"title",onChange:r,value:c.title})})]}),Object(m.jsxs)("div",{className:"field",children:[Object(m.jsx)("label",{className:"label",children:"Text"}),n.text&&Object(m.jsx)("p",{className:"error-text",children:n.text}),Object(m.jsx)("div",{className:"control",children:Object(m.jsx)("textarea",{type:"text",className:"textarea ".concat(n.title?"is-danger":""),name:"text",placeholder:"Your next big idea...",onChange:r,value:c.text})})]}),Object(m.jsx)("div",{className:"field",children:Object(m.jsx)("button",{type:"submit",className:"button is-fullwidth login",children:"Save Note"})})]})})})})},de={title:"",text:""};var be=function(){var e=Object(o.g)(),t=Object(o.i)().noteId,a=h(),c=G(de),s=c.formData,r=c.formErrors,i=c.setFormErrors,j=c.handleChange,u=c.setFormData,d=n.a.useState(!1),b=Object(l.a)(d,2),x=b[0],O=b[1],p=!s&&!x;n.a.useEffect((function(){(function(){var e=Object(S.a)(y.a.mark((function e(){var c;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,M(a,t);case 3:c=e.sent,u(c.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),O(!0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}})()()}),[]);var f=function(){var c=Object(S.a)(y.a.mark((function c(n){return y.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return n.preventDefault(),c.prev=1,c.next=4,T(a,t,s);case 4:e.push("/notes/".concat(t)),c.next=11;break;case 7:c.prev=7,c.t0=c.catch(1),i(c.t0.response.data),console.log(r);case 11:case"end":return c.stop()}}),c,null,[[1,7]])})));return function(e){return c.apply(this,arguments)}}();return Object(m.jsx)("section",{className:"section",children:Object(m.jsx)("div",{className:"container",children:Object(m.jsxs)("div",{className:"columns",children:[x&&Object(m.jsx)(V,{}),p&&Object(m.jsx)(R,{}),Object(m.jsxs)("form",{className:"column is-half is-offset-one-quarter box",onSubmit:f,children:[Object(m.jsxs)("div",{className:"field",children:[Object(m.jsx)("label",{className:"label",children:"Title"}),r.title&&Object(m.jsx)("p",{className:"error-text",children:r.title}),Object(m.jsx)("div",{className:"control",children:Object(m.jsx)("input",{className:"input ".concat(r.title?"is-danger":""),name:"title",onChange:j,value:s.title})})]}),Object(m.jsxs)("div",{className:"field",children:[Object(m.jsx)("label",{className:"label",children:"Text"}),r.text&&Object(m.jsx)("p",{className:"error-text",children:r.text}),Object(m.jsx)("div",{className:"control",children:Object(m.jsx)("textarea",{type:"text",className:"textarea ".concat(r.text?"is-danger":""),name:"text",onChange:j,value:s.text})})]}),Object(m.jsx)("div",{className:"field",children:Object(m.jsx)("button",{type:"submit",className:"button is-fullwidth login",children:"Save changes"})})]})]})})})};var he=function(){return Object(m.jsxs)(i.a,{children:[Object(m.jsx)(x,{}),Object(m.jsxs)(o.d,{children:[Object(m.jsx)(o.b,{exact:!0,path:"/",children:Object(m.jsx)(f,{})}),Object(m.jsx)(o.b,{path:"/login",children:Object(m.jsx)(X,{})}),Object(m.jsx)(o.b,{path:"/signup",children:Object(m.jsx)(z,{})}),Object(m.jsx)(w,{path:"/images/:imageId",children:Object(m.jsx)(ie,{})}),Object(m.jsx)(w,{path:"/choosemood",children:Object(m.jsx)(re,{})}),Object(m.jsx)(w,{path:"/moodboard/:moodId",children:Object(m.jsx)(se,{})}),Object(m.jsx)(o.b,{path:"/about",children:Object(m.jsx)(te,{})}),Object(m.jsx)(w,{path:"/notes/new",children:Object(m.jsx)(ue,{})}),Object(m.jsx)(w,{path:"/notes/:noteId/edit",children:Object(m.jsx)(be,{})}),Object(m.jsx)(w,{path:"/notes/:noteId",children:Object(m.jsx)(le,{})}),Object(m.jsx)(w,{path:"/:userId/notes",children:Object(m.jsx)(oe,{})}),Object(m.jsx)(w,{path:"/:userId/edit",children:Object(m.jsx)(ee,{})}),Object(m.jsx)(o.b,{path:"/:userId",children:Object(m.jsx)(W,{})})]}),Object(m.jsx)(O,{})]})};r.a.render(Object(m.jsx)(he,{}),document.getElementById("root"))}},[[88,1,2]]]);
//# sourceMappingURL=main.cd82cc6d.chunk.js.map