(this.webpackJsonpbrogblog=this.webpackJsonpbrogblog||[]).push([[0],{61:function(e,t,a){e.exports=a(94)},66:function(e,t,a){},94:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(9),l=a.n(o),i=(a(66),a(20)),s=a(24),c=function(e){return r.a.createElement("div",{className:"my_link"},function(){var t="";switch(e.type){case"default":t=r.a.createElement(i.b,Object.assign({className:"link_default",to:e.linkTo},e.addStyles),e.title);break;default:t=""}return t}())},u=a(5),m=a(6),d=a(8),p=a(7),h=function(e){var t=e.formdata,a=e.change,n=e.id,o=function(){var e=null;return t.validation&&!t.valid&&(e=r.a.createElement("div",{className:"error_label"},t.validationMessage)),e};return r.a.createElement("div",null,function(){var e=null;switch(t.element){case"input":e=r.a.createElement("div",{className:"formBlock",type:"submit"},t.showlabel?r.a.createElement("div",{className:"label_inputs"},t.config.label):null,r.a.createElement("input",Object.assign({},t.config,{value:t.value,onBlur:function(e){return a({event:e,id:n,blur:!0})},onChange:function(e){return a({event:e,id:n})}})),o());break;case"textarea":e=r.a.createElement("div",{className:"formBlock"},t.showlabel?r.a.createElement("div",{className:"label_inputs"},t.config.label):null,r.a.createElement("textarea",Object.assign({},t.config,{value:t.value,onBlur:function(e){return a({event:e,id:n,blur:!0})},onChange:function(e){return a({event:e,id:n})}})),o());break;default:e=null}return e}())},f=a(19),v=function(e,t,a){var n=Object(f.a)({},t),r=Object(f.a)({},n[e.id]);if(r.value=e.event.target.value,e.blur){var o=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],a=[!0,""];if(e.validation.email){var n=/\S+@\S+\.\S+/.test(e.value),r="".concat(n?"":"Must be a valid email");a=n?a:[n,r]}if(e.validation.confirm){var o=e.value.trim()===t[e.validation.confirm].value,l="".concat(o?"":"Passwords do not match");a=o?a:[o,l]}if(e.validation.required){var i=""!==e.value.trim(),s="".concat(i?"":"This field is required");a=i?a:[i,s]}return a}(r,t);r.valid=o[0],r.validationMessage=o[1]}return r.touched=e.blur,n[e.id]=r,n},g=function(e,t){var a={};for(var n in e)"confirmPassword"!==n&&(a[n]=e[n].value);return a},b=function(e,t){var a=!0;for(var n in e)a=e[n].valid&&a;return a},E=a(11),y=a(14),w=a.n(y);function k(e){return{type:"register_user",payload:w.a.post("127.0.0.1/api/users/register",e).then((function(e){return e.data}))}}function N(e){return{type:"login_user",payload:w.a.post("".concat("/api/users","/login"),e).then((function(e){return e.data}))}}function _(){return{type:"auth_user",payload:w.a.get("".concat("/api/users","/auth")).then((function(e){return e.data}))}}function I(){return{type:"logout_user",payload:w.a.get("".concat("/api/users","/logout")).then((function(e){return e.data}))}}var O=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={formError:!1,formSuccess:"",formdata:{email:{element:"input",value:"",config:{name:"email_input",type:"email",placeholder:"Enter your email"},validation:{required:!0,email:!0},valid:!1,touched:!1,validationMessage:""},password:{element:"input",value:"",config:{name:"password_input",type:"password",placeholder:"Enter your password"},validation:{required:!0},valid:!1,touched:!1,validationMessage:""}}},e.updateForm=function(t){var a=v(t,e.state.formdata);e.setState({formError:!1,formdata:a})},e.submitForm=function(t){t.preventDefault();var a=g(e.state.formdata);b(e.state.formdata)?e.props.dispatch(N(a)).then((function(t){t.payload.loginSuccess?(console.log(t.payload),e.props.history.push("/user/dashboard")):e.setState({formError:!0})})):e.setState({formError:!0})},e}return Object(m.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"signin_wrapper"},r.a.createElement("form",{onSubmit:function(t){return e.submitForm(t)}},r.a.createElement(h,{id:"email",formdata:this.state.formdata.email,change:function(t){return e.updateForm(t)}}),r.a.createElement(h,{id:"password",formdata:this.state.formdata.password,change:function(t){return e.updateForm(t)}}),this.state.formError?r.a.createElement("div",{className:"error_label"},"Username or Password is incorrect"):null,r.a.createElement("button",{type:"button",onClick:function(t){return e.submitForm(t)}},"Log in")))}}]),a}(n.Component),j=Object(E.b)()(Object(s.f)(O)),S=function(){return r.a.createElement("div",{className:"page_wrapper"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"register_login_container"},r.a.createElement("div",{className:"left"},r.a.createElement("h1",null,"Register"),r.a.createElement("p",null,"Welcome to the Brog!If you haven't signed up yet, here is your chance.By signing up, I will not bombard you with emails, unless you ask me to. "),r.a.createElement(c,{type:"default",title:"Create an account",linkTo:"/register",addStyles:{margin:"10px 0 0 0"}})),r.a.createElement("div",{className:"right"},r.a.createElement("h2",null,"Welcome back!"),r.a.createElement("p",null,"If you have an account please log in."),r.a.createElement(j,null)))))},A=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){var e;return Object(u.a)(this,a),(e=t.call(this)).getAllArticles=function(){w.a.get("/api/articles/showMostRecent").then((function(t){e.setState({mostRecentPost:t.data})}))},e.state={mostRecentPost:[]},e}return Object(m.a)(a,[{key:"componentDidMount",value:function(){this.getAllArticles()}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("h1",{className:"welcome"},"Welcome to da BROG"),r.a.createElement("p",{className:"welcomeSub"},"All about Coding Bootcamps && Object Oriented Programming ")),r.a.createElement("div",{className:"page_wrapper_home",key:this.state.mostRecentPost._id},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"homeContainer"},r.a.createElement("div",null,r.a.createElement("h1",{className:"postTitle"},this.state.mostRecentPost.title),r.a.createElement("p",{className:"postBody"},this.state.mostRecentPost.body)),r.a.createElement("div",{className:"datePosted"},"Date Posted: ",this.state.mostRecentPost.date)))))}}]),a}(n.Component),T=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(e=t.call.apply(t,[this].concat(o))).state={page:[{name:"Home",linkTo:"/",public:!0},{name:"Posts",linkTo:"/posts",public:!0},{name:"About",linkTo:"/about",public:!0}],user:[{name:"My Account",linkTo:"/user/dashboard",public:!1},{name:"Log in",linkTo:"/register_login",public:!0},{name:"Log out",linkTo:"/user/logout",public:!1}]},e.logoutHandler=function(){e.props.dispatch(I()).then((function(t){t.payload.success&&e.props.history.push("/")}))},e.defaultLink=function(t,a){return"Log out"===t.name?r.a.createElement("div",{className:"log_out_link",key:a,onClick:function(){return e.logoutHandler()}},t.name):r.a.createElement(i.b,{to:t.linkTo,key:a},t.name)},e.showLinks=function(t){var a=[];return e.props.user.userData&&t.forEach((function(t){e.props.user.userData.isAuth?"Log in"!==t.name&&a.push(t):!0===t.public&&a.push(t)})),a.map((function(t,a){return e.defaultLink(t,a)}))},e}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("header",null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"left"},r.a.createElement("div",{className:"logo"},"the BROG"),r.a.createElement("div",{className:"header_logo_title"},"AKA Brads Blog")),r.a.createElement("div",{className:"right"},r.a.createElement("div",{className:"top"},this.showLinks(this.state.user)),r.a.createElement("div",{className:"bottom"},this.showLinks(this.state.page)))))}}]),a}(n.Component);var C=Object(E.b)((function(e){return{user:e.user}}))(Object(s.f)(T)),P=a(33),x=a(35),F=a(36),M=function(){return r.a.createElement("footer",{className:"footerBackgroundColor"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"logo"},"the BROG"),r.a.createElement("div",{className:"wrapper"},r.a.createElement("div",{className:"left"},r.a.createElement("h2",null,"Contact Information"),r.a.createElement("div",{className:"business_nfo"},r.a.createElement("div",{className:"tag"},r.a.createElement(P.a,{icon:x.a,className:"icon"}),r.a.createElement("div",{className:"nfo"},r.a.createElement("div",null,"Location"),r.a.createElement("div",null,"Denver, CO"))),r.a.createElement("div",{className:"tag"},r.a.createElement("a",{href:"https://www.linkedin.com/in/braddonakowski/"},r.a.createElement(P.a,{icon:F.b,className:"icon"})),r.a.createElement("div",{className:"nfo"},r.a.createElement("div",null,"Click the logo to"),r.a.createElement("div",null,"Connect with me on LinkedIn"))),r.a.createElement("div",{className:"tag"},r.a.createElement("a",{href:"https://www.github.com/braddonako"},r.a.createElement(P.a,{icon:F.a,className:"icon"})),r.a.createElement("div",{className:"nfo"},r.a.createElement("div",null,"Click the logo to"),r.a.createElement("div",null,"access my Github"))),r.a.createElement("div",{className:"tag"},r.a.createElement(P.a,{icon:x.b,className:"icon"}),r.a.createElement("div",{className:"nfo"},r.a.createElement("div",null,"Email"),r.a.createElement("div",null,"braddonakowski@yahoo.com"))))),r.a.createElement("div",{className:"left"},r.a.createElement("h2",null,"Share your thoughts"),r.a.createElement("div",null,r.a.createElement("div",null,"I love receiving feedback, and am always open to suggestions. If you have a topic you would like me to discuss, just want to chat, or you want to grab a cup of coffee (aka 'fee) shoot me a message!"))))))},D=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(C,null),r.a.createElement("div",{className:"page_container"},this.props.children),r.a.createElement(M,null))}}]),a}(n.Component),B=a(112),L=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,o=function(n){Object(d.a)(l,n);var o=Object(p.a)(l);function l(){var e;Object(u.a)(this,l);for(var t=arguments.length,a=new Array(t),n=0;n<t;n++)a[n]=arguments[n];return(e=o.call.apply(o,[this].concat(a))).state={loading:!1},e}return Object(m.a)(l,[{key:"componentDidMount",value:function(){var e=this;this.props.dispatch(_()).then((function(n){var r=e.props.user.userData;r.isAuth?(a&&!r.isAdmin||!1===t)&&e.props.history.push("/user/dashboard"):t&&e.props.history.push("/register_login"),e.setState({loading:!1})}))}},{key:"render",value:function(){return this.state.loading?r.a.createElement("div",{className:"main_loader"},r.a.createElement(B.a,{style:{color:"#2196F3"},thickness:7})):r.a.createElement("div",null,r.a.createElement(e,Object.assign({},this.props,{user:this.props.user})))}}]),l}(n.Component);function l(e){return{user:e.user}}return Object(E.b)(l)(o)},q=function(){return r.a.createElement("div",{className:"page_wrapper"},r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"brogAbout"},"So, what is THE BROG all about?"),r.a.createElement("p",{className:"aboutFont"},"Well, I am going to tell you right now. But first, I'm going to set the record straight... I am not a writer. Realistically, I should probably start doing a podcast or some shit cause I love to talk. Especially about technology. ** Note on language -- I will sometimes be using 'bad words'. This is my blog, I want to connect with people that want to get the authentic me. **  But yes, talking about technology is one of the many reasons I wanted to create a blog about JavaScript, my coding bootcamp experience, and how MY career change is going. Whenever I talk to my friends about programming, they have no flippin idea what I am talking about. And quite frankly, that stinks. I just want to tell someone about all the cool new tricks and tips that I am learning, and receive a response from them other than 'I don\u2019t know what the hell you are talking about.\u2019  So ya, that is a reason I really want to do this. If I can help one person out that is currently learning how to code, or wants to make a career change, then this was a huge success."),r.a.createElement("h2",{className:"brogAboutMe"},"About me"),r.a.createElement("p",{className:"aboutFont"},"I'm Brad Donakowski, and I live in Denver, CO, born and raised. Currently, I am looking for a new role in Software Development. I finished a bootcamp in December of 2019. I can give you a quick rundown of my career so far, so you have an idea of why I decided to make the career change into software development. Soooo, During college I really had no idea what I wanted to do. Even post college, I still didn't Know. ",r.a.createElement("strong",null,"UNTIL")," I was introduced to coding. I really wish I knew that I enjoyed software development this much while I was attending college.. but, Oh well. It was all a great experience and having a degree in Management, could be very helpful since I would love to lead a team someday. I graduated from University of Northern Colorado during the Summer of 2017 with a degree in Business Management. I broke my knee shortly after, (Long story short, a golf cart flipped on me). I then got my first job out of school as an Account Manager with a company by the name of Apex Systems.  Apex Systems introduced me to the crazy world of tech. At first I had no idea what back-end and front-end development was or 'full stack' development, I didn't know there was a difference between JavaScript and Java. I was a complete noob when it came to tech, so I wanted to learn more about this just because it sounded really cool. I began to teach myself the basics with HTML and CSS, and I thought it was badass to see how a webpage is really made. I left Apex on April Fools day, what a weird day to quit, huh? But as I was saying, I left Apex to enroll in a coding bootcamp that was starting soon. At this point, I had been thinking about attending a bootcamp for about 8 months. It was such a huge decision because I felt there was a lot of uncertainty, mixed reviews, etc. I wanted to make sure I made the best decision for myself, so I took my time to pull the trigger. Of course, sometimes, things don't go as planned, and I got a call from a startup a week after I quit Apex. This startup was called Pax8, and they sold a variety of software products. I could not turn this opportunity down, because I have always wanted to be a part of a startup. Working there was great, but I realized I was in the wrong role, and still had the gut feeling I needed to pursue software development. After a short stint with Pax8, which was an incredible opportunity, I finally took a leap of faith, and enrolled in the bootcamp. It was one of the best decisions I have made and one of the greatest experiences I have had in my life. I can truly say I love the process of learning programming, and I am so happy I made the decision to do so. For now, that is all you need to know about me. You will learn quite a bit through my posts! Thanks and I appreciate you checking out the BROG.")))},R=a(115),U=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={formError:!1,formSuccess:!1,formdata:{name:{element:"input",value:"",config:{name:"name_input",type:"text",placeholder:"First Name"},validation:{required:!0},valid:!1,touched:!1,validationMessage:""},lastname:{element:"input",value:"",config:{name:"lastname_input",type:"text",placeholder:"Last Name"},validation:{required:!0},valid:!1,touched:!1,validationMessage:""},email:{element:"input",value:"",config:{name:"email_input",type:"email",placeholder:"Email"},validation:{required:!0,email:!0},valid:!1,touched:!1,validationMessage:""},password:{element:"input",value:"",config:{name:"password_input",type:"password",placeholder:"Password"},validation:{required:!0},valid:!1,touched:!1,validationMessage:""},confirmPassword:{element:"input",value:"",config:{name:"confirm_password_input",type:"password",placeholder:"Confirm password"},validation:{required:!0,confirm:"password"},valid:!1,touched:!1,validationMessage:""}}},e.updateForm=function(t){var a=v(t,e.state.formdata);e.setState({formError:!1,formdata:a})},e.submitForm=function(t){t.preventDefault();var a=g(e.state.formdata);b(e.state.formdata)?e.props.dispatch(k(a)).then((function(t){t.payload.success?(e.setState({formError:!1,formSuccess:!0}),setTimeout((function(){e.props.history.push("/register_login")}),3e3)):e.setState({formError:!0})})).catch((function(t){e.setState({formError:!0})})):e.setState({formError:!0})},e}return Object(m.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"page_wrapper"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"register_login_container"},r.a.createElement("div",{className:"left"},r.a.createElement("form",{onSubmit:function(t){return e.submitForm(t)}},r.a.createElement("h2",null,"Personal Information"),r.a.createElement("div",{className:"form_block_two"},r.a.createElement("div",{className:"block"},r.a.createElement(h,{id:"name",formdata:this.state.formdata.name,change:function(t){return e.updateForm(t)}})),r.a.createElement("div",{className:"block"},r.a.createElement(h,{id:"lastname",formdata:this.state.formdata.lastname,change:function(t){return e.updateForm(t)}}))),r.a.createElement("div",null,r.a.createElement(h,{id:"email",formdata:this.state.formdata.email,change:function(t){return e.updateForm(t)}})),r.a.createElement("h2",null,"Veryify Password"),r.a.createElement("div",{className:"form_block_two"},r.a.createElement("div",{className:"block"},r.a.createElement(h,{id:"password",formdata:this.state.formdata.password,change:function(t){return e.updateForm(t)}})),r.a.createElement("div",{className:"block"},r.a.createElement(h,{id:"confirmPassword",formdata:this.state.formdata.confirmPassword,change:function(t){return e.updateForm(t)}}))),r.a.createElement("div",null,this.state.formError?r.a.createElement("div",{className:"error_label"},"Something went wrong, Please try again"):null,r.a.createElement("button",{type:"button",onClick:function(t){return e.submitForm(t)}},"Create an account")))))),r.a.createElement(R.a,{open:this.state.formSuccess},r.a.createElement("div",{className:"dialog_alert"},r.a.createElement("div",null,"Congratulations"),r.a.createElement("div",null,"You will be redirected back to the signin in a couple of seconds"))))}}]),a}(n.Component),G=Object(E.b)()(U),W=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){var e;return Object(u.a)(this,a),(e=t.call(this)).getAllArticles=function(){w.a.get("/api/articles/show").then((function(t){e.setState({articlePosts:t.data})}))},e.state={articlePosts:[]},e}return Object(m.a)(a,[{key:"componentDidMount",value:function(){this.getAllArticles()}},{key:"render",value:function(){var e=this.state.articlePosts.map((function(e,t){return r.a.createElement("div",{className:"page_wrapper",key:t},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"homeContainer"},r.a.createElement("div",null,r.a.createElement("h1",{className:"postTitle"},e.title),r.a.createElement("p",{className:"postBody"},e.body)),r.a.createElement("div",{className:"datePosted"},"Date Posted: ",e.date))))}));return r.a.createElement("div",null,r.a.createElement("div",null,e))}}]),a}(n.Component),H=[{name:"My account",linkTo:"/user/dashboard"},{name:"User information",linkTo:"/user/user_profile"}],J=[{name:"Add a new post",linkTo:"/admin/add_post"},{name:"Site Info",linkTo:"/admin/site_info"}],X=Object(E.b)((function(e){return{user:e.user}}))((function(e){var t=function(e){return e.map((function(e,t){return r.a.createElement(i.b,{to:e.linkTo,key:t},e.name)}))};return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"user_container"},r.a.createElement("div",{className:"user_left_nav"},r.a.createElement("h2",null,"My Account"),r.a.createElement("div",{className:"links"},t(H)),e.user.userData.isAdmin?r.a.createElement("div",null,r.a.createElement("h2",null,"Admin"),r.a.createElement("div",{className:"links"},t(J))):null),r.a.createElement("div",{className:"user_right"},e.children)))}));function V(e){return{type:"add_post",payload:w.a.post("".concat("/api/articles","/new"),e).then((function(e){return e.data}))}}var Y=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={formError:!1,formSuccess:!1,formdata:{title:{element:"input",value:"",config:{label:"Title of your post",name:"name_input",type:"text",placeholder:"Title"},validation:{required:!0},valid:!1,touched:!1,validationMessage:"",showLabel:!0},body:{element:"textarea",value:"",config:{label:"Content of the POST",name:"body_input",type:"text",placeholder:"Body"},validation:{required:!0},valid:!1,touched:!1,validationMessage:"",showLabel:!0},image:{element:"input",value:"",config:{name:"image_input",type:"text",placeholder:"image URL"},validation:{required:!1},valid:!1,touched:!1,validationMessage:"",showLabel:!0},date:{element:"input",value:"",config:{name:"name_input",type:"text",placeholder:"date"},validation:{required:!0},valid:!1,touched:!1,validationMessage:"",showLabel:!0}}},e.updateForm=function(t){var a=v(t,e.state.formdata);e.setState({formError:!1,formdata:a})},e.submitForm=function(t){t.preventDefault(),console.log("click click");var a=g(e.state.formdata),n=b(e.state.formdata);console.log(a),n&&e.props.dispatch(V(a)).then((function(t){t.payload.success?(e.setState({formError:!1,formSuccess:!0}),setTimeout((function(){e.props.history.push("/")}),2e3)):e.setState({formError:!0})}))},e}return Object(m.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement(X,null,r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("h1",null,"Add new Post"),r.a.createElement("form",{onSubmit:function(t){return e.submitForm(t)}},r.a.createElement(h,{id:"title",formdata:this.state.formdata.title,change:function(t){return e.updateForm(t)}}),r.a.createElement(h,{id:"body",formdata:this.state.formdata.body,change:function(t){return e.updateForm(t)}}),r.a.createElement(h,{id:"image",formdata:this.state.formdata.image,change:function(t){return e.updateForm(t)}}),r.a.createElement(h,{id:"date",formdata:this.state.formdata.date,change:function(t){return e.updateForm(t)}}),r.a.createElement("button",{type:"button",onClick:function(t){return e.submitForm(t)}},"Submit a new post")))))}}]),a}(n.Component),z=Object(E.b)((function(e){return{article:e.article}}))(Y),K=function(e){var t=e.user;return r.a.createElement(X,null,r.a.createElement("div",null,r.a.createElement("div",{className:"user_nfo_panel"},r.a.createElement("h1",null,"User information"),r.a.createElement("div",null,r.a.createElement("span",null,t.userData.name),r.a.createElement("span",null,t.userData.lastname),r.a.createElement("span",null,t.userData.email)),r.a.createElement(c,{type:"default",title:"Edit account info",linkTo:"/user/user_profile"}))))},Q=function(){return r.a.createElement(D,null,r.a.createElement(s.c,null,r.a.createElement(s.a,{path:"/user/dashboard",exact:!0,component:L(K,!0)}),r.a.createElement(s.a,{path:"/admin/add_post",exact:!0,component:L(z,!0)}),r.a.createElement(s.a,{path:"/register_login",exact:!0,component:L(S,!1)}),r.a.createElement(s.a,{path:"/register",exact:!0,component:L(G,!1)}),r.a.createElement(s.a,{path:"/",exact:!0,component:L(A,null)}),r.a.createElement(s.a,{path:"/about",exact:!0,component:L(q,null)}),r.a.createElement(s.a,{path:"/posts",exact:!0,component:L(W,null)})))},Z=a(26),$=a(57),ee=a.n($),te=a(58),ae=Object(Z.c)({user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"register_user":return Object(f.a)({},e,{register:t.payload});case"login_user":return Object(f.a)({},e,{loginSuccess:t.payload});case"auth_user":return Object(f.a)({},e,{userData:t.payload});case"logout_user":return Object(f.a)({},e);default:return e}},article:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"add_post":return Object(f.a)({},e,{addPost:t.payload});case"get_all_posts":return Object(f.a)({},e,{getAllPosts:t.payload});default:return e}}}),ne=Object(Z.a)(ee.a,te.a)(Z.d);l.a.render(r.a.createElement(E.a,{store:ne(ae,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__())},r.a.createElement(i.a,null,r.a.createElement(Q,null))),document.getElementById("root"))}},[[61,1,2]]]);
//# sourceMappingURL=main.1daea96c.chunk.js.map