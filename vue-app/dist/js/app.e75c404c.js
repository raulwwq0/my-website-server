(function(e){function t(t){for(var n,r,i=t[0],s=t[1],u=t[2],l=0,p=[];l<i.length;l++)r=i[l],Object.prototype.hasOwnProperty.call(c,r)&&c[r]&&p.push(c[r][0]),c[r]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);d&&d(t);while(p.length)p.shift()();return o.push.apply(o,u||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],n=!0,i=1;i<a.length;i++){var s=a[i];0!==c[s]&&(n=!1)}n&&(o.splice(t--,1),e=r(r.s=a[0]))}return e}var n={},c={app:0},o=[];function r(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=e,r.c=n,r.d=function(e,t,a){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(a,n,function(t){return e[t]}.bind(null,n));return a},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var d=s;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},2930:function(e,t,a){e.exports=a.p+"img/close.a31f5edc.svg"},"2e1d":function(e,t,a){e.exports=a.p+"img/contact.02f6b059.svg"},"33ba":function(e,t,a){e.exports=a.p+"img/jquery.8bd2a9a0.svg"},3483:function(e,t,a){e.exports=a.p+"img/nodejs.e4ddbe1a.svg"},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("7a23"),c={class:"content"};function o(e,t,a,o,r,i){var s=Object(n["u"])("Sidebar"),u=Object(n["u"])("Background"),d=Object(n["u"])("router-view");return Object(n["p"])(),Object(n["d"])(n["a"],null,[Object(n["g"])(s),Object(n["g"])(u),Object(n["g"])("div",c,[Object(n["g"])(d)])],64)}a("d5d2");var r=a("a52e"),i=a.n(r),s=a("2930"),u=a.n(s),d=a("c6c2"),l=a.n(d),p=a("91eb"),b=a.n(p),g=a("2e1d"),m=a.n(g),j=a("88ce"),f=a.n(j),O={id:"sidebar"},v={class:"hamburger-wrap"},h={key:0,class:"icons",src:i.a,alt:"Abrir Menú"},y={key:1,class:"icons",src:u.a,alt:"Abrir Menú"},x={id:"menu-icons"},w=Object(n["g"])("div",{class:"icon-wrap"},[Object(n["g"])("img",{class:"icons",src:l.a,alt:"Inicio"}),Object(n["g"])("p",{class:"icon-text"},"Inicio")],-1),k=Object(n["g"])("div",{class:"icon-wrap"},[Object(n["g"])("img",{class:"icons",src:b.a,alt:"Proyectos"}),Object(n["g"])("p",{class:"icon-text"},"Proyectos")],-1),S=Object(n["g"])("div",{class:"icon-wrap"},[Object(n["g"])("img",{class:"icons",src:m.a,alt:"Contacto"}),Object(n["g"])("p",{class:"icon-text"},"Contacto")],-1),M=Object(n["g"])("div",{id:"social-icons"},[Object(n["g"])("a",{href:"https://github.com/raulwwq0",target:"_blank"},[Object(n["g"])("div",{class:"icon-wrap"},[Object(n["g"])("img",{id:"github-icon",class:"icons",src:f.a,alt:"GitHub"}),Object(n["g"])("p",{class:"icon-text"},"GitHub")])])],-1);function _(e,t,a,c,o,r){var i=Object(n["u"])("router-link");return Object(n["p"])(),Object(n["d"])("aside",O,[Object(n["g"])("div",{id:"hamburger",onClick:t[1]||(t[1]=function(e){return c.sidebarChangeStatus()})},[Object(n["g"])("div",v,[c.isSidebarOFF?Object(n["e"])("",!0):(Object(n["p"])(),Object(n["d"])("img",h)),c.isSidebarOFF?(Object(n["p"])(),Object(n["d"])("img",y)):Object(n["e"])("",!0)])]),Object(n["g"])("div",x,[Object(n["g"])(i,{to:"/","exact-active-class":"active"},{default:Object(n["z"])((function(){return[w]})),_:1}),Object(n["g"])(i,{to:"/projects","exact-active-class":"active"},{default:Object(n["z"])((function(){return[k]})),_:1}),Object(n["g"])(i,{to:"/contact","exact-active-class":"active"},{default:Object(n["z"])((function(){return[S]})),_:1})]),M])}var F=a("cffa"),H={name:"Sidebar",setup:function(){var e=Object(n["s"])(!0);function t(){var t=F["a"].timeline({defaults:{duration:.3}});screen.width>900?e.value?t.to(".icon-text",{opacity:0,display:"none"}).to(".icon-wrap",{width:"40px"},.3).to("#sidebar",{width:"40px"},.2).to(".content",{marginLeft:"40px"},"<0"):t.to("#sidebar",{width:"160px"}).to(".icon-text",{display:"block"},.2).to(".icon-text",{opacity:1}).to(".content",{marginLeft:"160px"},0).to(".icon-wrap",{width:"150px"},0):e.value?t.to(".icon-text",{opacity:0,display:"none"}).to("#sidebar",{boxShadow:"0 0 0 0 rgba(0, 0 , 0, 0)"},0).to(".icon-wrap",{width:"40px"},.3).to("#sidebar",{width:"40px"},.2):t.to("#sidebar",{width:"160px"}).to(".icon-text",{display:"block"},.2).to(".icon-text",{opacity:1}).to(".icon-wrap",{width:"150px"},0).to("#sidebar",{boxShadow:"0 8px 32px 0 rgba(0, 0 , 0, 0.37)"},0),e.value=!e.value}return{isSidebarOFF:e,sidebarChangeStatus:t}},mounted:function(){this.sidebarChangeStatus()}};H.render=_;var C=H,P={id:"bg"};function E(e,t,a,c,o,r){return Object(n["p"])(),Object(n["d"])("div",P)}var q={name:"Background",setup:function(){function e(){for(var e=0;e<100;e++){var t=document.createElement("span");t.className="box",t.id="box-"+e,document.getElementById("bg").appendChild(t)}}function t(){var e=F["a"].timeline({defaults:{duration:1.5}});e.to(".box",{backgroundColor:"#eee",stagger:{amount:1,grid:"auto",from:"random",ease:"power1"}}),setInterval((function(){for(var t="",a=0;a<=10;a++){var n="#box-"+F["a"].utils.random(0,99,1);t+=n+", "}t=t.substring(0,t.length-2),e.to(t,{backgroundColor:"random([#8effc1, #5efca1, #4eec91, #3edc81, #2ecc71, #1ebc61, #0eac51, #009c41, #008c31, #007c21, #006c11, #005c01])",ease:"power1"}).to(t,{backgroundColor:"#eee"})}),2e3)}return{createBackground:e,animateBackground:t}},mounted:function(){this.createBackground(),this.animateBackground()}};q.render=E;var B=q,A={name:"App",components:{Sidebar:C,Background:B}};A.render=o;var N=A,T=a("6c02");function I(e,t,a,c,o,r){var i=Object(n["u"])("PresentationBanner"),s=Object(n["u"])("AboutMe"),u=Object(n["u"])("Skills");return Object(n["p"])(),Object(n["d"])(n["a"],null,[Object(n["g"])(i),Object(n["g"])(s),Object(n["g"])(u)],64)}var z={id:"presentation-banner"},D=Object(n["g"])("div",{id:"presentation-text"},[Object(n["g"])("h1",{class:"presentation-title"},"Raúl Aguilar"),Object(n["g"])("h2",{class:"subtitle"},"Estudiante de Desarrollo Web")],-1);function J(e,t,a,c,o,r){return Object(n["p"])(),Object(n["d"])("div",z,[D])}var G={name:"PresentationBanner"};G.render=J;var L=G,R=a("6716"),U=a.n(R),V={id:"about-me"},W=Object(n["g"])("div",{id:"about-text"},[Object(n["g"])("h2",{class:"subtitle"},"Sobre mi"),Object(n["g"])("p",null," Soy de Málaga y llevo programando desde los 15 años, cuando descubrí Python gracias a mi profesor de T.I.C (Tecnologías de la Información y la Comunicación, una asignatura como otra cualquiera), donde demostré gran habilidad para resolver problemas. "),Object(n["g"])("p",null," Desde entonces he mejorado mis habilidades de forma autodidacta y mediante cursos, a la vez que aprendía nuevos lenguajes y tecnologías. Por ahora he decidido empezar enfocándome en el desarrollo web, aunque en un futuro me gustaría dedicarme también al desarrollo de aplicaciones. "),Object(n["g"])("p",null," En cuanto a mi, siempre se me ha dado bien encontrar la forma de resolver un problema (aunque a veces más compleja que el propio problema en sí) y tratar de mejorarla todo lo posible. Me gusta trabajar en equipo para compartir nuestros conocimientos, forma de pensar y pasar un buen rato haciendo algo productivo. ")],-1),Q=Object(n["g"])("img",{src:U.a},null,-1);function K(e,t,a,c,o,r){return Object(n["p"])(),Object(n["d"])("div",V,[W,Q])}var X={name:"AboutMe"};X.render=K;var Y=X,Z=a("d3d9"),$=a.n(Z),ee=a("9282"),te=a.n(ee),ae=a("7312"),ne=a.n(ae),ce=a("c614"),oe=a.n(ce),re=a("3483"),ie=a.n(re),se=a("33ba"),ue=a.n(se),de=a("c2f9"),le=a.n(de),pe=a("9a42"),be=a.n(pe),ge=a("8a25"),me=a.n(ge),je={id:"skills"},fe=Object(n["g"])("h2",{class:"subtitle"},"Mis Habilidades",-1),Oe=Object(n["g"])("p",null," Todas las habilidades las he aprendido de forma autodidacta y las he puesto en prácticas en varios proyectos. ",-1),ve=Object(n["g"])("div",{id:"skills-svg"},[Object(n["g"])("img",{src:$.a,alt:"HTML5"}),Object(n["g"])("img",{src:te.a,alt:"CSS3"}),Object(n["g"])("img",{src:ne.a,alt:"SASS"}),Object(n["g"])("img",{src:oe.a,alt:"Javascript"}),Object(n["g"])("img",{src:ie.a,alt:"NodeJS"}),Object(n["g"])("img",{src:ue.a,alt:"JQuery"}),Object(n["g"])("img",{src:le.a,alt:"VueJS"}),Object(n["g"])("img",{src:be.a,alt:"Git"}),Object(n["g"])("img",{src:me.a,alt:"MongoDB"})],-1);function he(e,t,a,c,o,r){return Object(n["p"])(),Object(n["d"])("div",je,[fe,Oe,ve])}var ye={name:"Skills"};ye.render=he;var xe=ye,we={name:"Home",components:{PresentationBanner:L,AboutMe:Y,Skills:xe}};we.render=I;var ke=we,Se=(a("a4d3"),a("e01a"),a("9911"),a("afd7")),Me=a.n(Se),_e=Object(n["g"])("h1",{class:"title"},"Proyectos",-1),Fe=Object(n["g"])("p",{id:"projects-section-text",class:"section-text"}," Esta es la lista de todos los proyectos que he realizado desde mis comienzos como desarrollador web. Visita mi GitHub para ver los repositorios de cada proyecto. ",-1),He={key:0,id:"projects"},Ce={key:1,src:Me.a,alt:"Cargando..."},Pe={class:"project-title"},Ee=Object(n["g"])("button",null,"Ir a la web",-1),qe={key:1,src:Me.a,alt:"Cargando..."};function Be(e,t,a,c,o,r){return Object(n["p"])(),Object(n["d"])(n["a"],null,[_e,Fe,o.projects?(Object(n["p"])(),Object(n["d"])("div",He,[(Object(n["p"])(!0),Object(n["d"])(n["a"],null,Object(n["t"])(o.projects,(function(e){return Object(n["p"])(),Object(n["d"])("article",{class:"project",onMouseover:function(t){return c.infoHoverON(e._id)},onMouseleave:function(t){return c.infoHoverOFF(e._id)},key:e._id},[e.image?(Object(n["p"])(),Object(n["d"])("img",{key:0,src:c.api+"/get-image/"+e.image},null,8,["src"])):Object(n["e"])("",!0),e.image?Object(n["e"])("",!0):(Object(n["p"])(),Object(n["d"])("img",Ce)),Object(n["g"])("div",{class:"project-info project-info-"+e._id},[Object(n["g"])("div",Pe,[Object(n["g"])("h2",null,Object(n["w"])(e.title),1)]),Object(n["g"])("p",null,Object(n["w"])(e.description),1),Object(n["g"])("form",{action:e.link,target:"_blank"},[Ee],8,["action"])],2)],40,["onMouseover","onMouseleave"])})),128))])):Object(n["e"])("",!0),o.projects?Object(n["e"])("",!0):(Object(n["p"])(),Object(n["d"])("img",qe))],64)}var Ae=a("bc3a"),Ne=a.n(Ae),Te={name:"Projects",data:function(){return{projects:[]}},setup:function(){var e="https://raul-aguilar.herokuapp.com/api";function t(e){var t=".project-info-"+e;F["a"].to(t,{duration:.3,y:"-250px",background:"rgba(0, 0, 0, 0.9)"})}function a(e){var t=".project-info-"+e;F["a"].to(t,{duration:.3,y:"0%",background:"rgba(0, 0, 0, 0.5)"})}function n(){F["a"].fromTo(".project",{opacity:0,duration:.5},{stagger:.2,opacity:1,duration:.5})}function c(){var t=this;for(var a in Ne.a.get(e+"/projects").then((function(e){"success"==e.data.status&&(t.projects=e.data.projects)})),this.projects)this.projects[a].className+=a._id}return{api:e,infoHoverON:t,infoHoverOFF:a,entryAnimation:n,getProjects:c}},mounted:function(){this.getProjects()},updated:function(){this.entryAnimation()}};Te.render=Be;var Ie=Te,ze=Object(n["g"])("h1",{class:"title"},"Contacto",-1),De={id:"contact"};function Je(e,t,a,c,o,r){var i=Object(n["u"])("EmailForm"),s=Object(n["u"])("Social");return Object(n["p"])(),Object(n["d"])(n["a"],null,[ze,Object(n["g"])("div",De,[Object(n["g"])(i),Object(n["g"])(s)])],64)}var Ge=Object(n["f"])('<p class="first-p">Usa este formulario para contactarme</p><input type="text" name="user_name" placeholder="Nombre" required><input type="text" name="user_email" placeholder="Correo" required><textarea name="message" placeholder="Mensaje" required></textarea><input type="submit" value="Enviar">',5),Le=Object(n["g"])("div",{class:"advice",id:"email-sent"},"El correo se ha enviado con éxito",-1),Re=Object(n["g"])("div",{class:"advice",id:"email-fail"},"El correo no se ha podido enviar",-1);function Ue(e,t,a,c,o,r){return Object(n["p"])(),Object(n["d"])(n["a"],null,[Object(n["g"])("form",{id:"email-form",onSubmit:t[1]||(t[1]=Object(n["A"])((function(){return c.sendEmail&&c.sendEmail.apply(c,arguments)}),["prevent"]))},[Ge],32),Le,Re],64)}var Ve=a("0f91"),We=a.n(Ve),Qe={name:"EmailForm",setup:function(){var e="service_4t3fp89",t="template_tc10fun",a="user_sWH0f38sG0kqFfBRdm6m6";function n(n){We.a.sendForm(e,t,n.target,a).then((function(e){console.log("Email sent successfully",e.status,e.text),document.getElementById("email-form").reset(),F["a"].to("#email-sent",{opacity:1,scale:1.2,ease:"bounce"}),F["a"].to("#email-sent",{opacity:0,scale:0,delay:5})}),(function(e){console.log("Email sent went wrong",e),F["a"].to("#email-fail",{opacity:1,scale:1.2,ease:"bounce"}),F["a"].to("#email-fail",{opacity:0,scale:0,delay:5})}))}return{sendEmail:n}}};Qe.render=Ue;var Ke=Qe,Xe=a("9d1c"),Ye=a.n(Xe),Ze=a("579b"),$e=a.n(Ze),et=a("5cdf"),tt=a.n(et),at=a("849d"),nt=a.n(at),ct={id:"different-ways-contact"},ot=Object(n["g"])("p",{class:"first-p"},"También puedes encontrarme en:",-1),rt={id:"contact-ways"},it={class:"contact-icon-wrap"},st={href:"https://www.linkedin.com/in/agraul21/",target:"_blank"},ut=Object(n["g"])("p",{class:"contact-icon-text linkedin-text"},"Raúl Aguilar",-1),dt={class:"contact-icon-wrap"},lt={href:"https://www.instagram.com/raulwwq0/",target:"_blank"},pt=Object(n["g"])("p",{class:"contact-icon-text instagram-text"},"@raulwwq0",-1),bt={class:"contact-icon-wrap"},gt={href:"https://t.me/rau_ag21",target:"_blank"},mt=Object(n["g"])("p",{class:"contact-icon-text telegram-text"},"@rau_ag21",-1),jt={class:"contact-icon-wrap"},ft=Object(n["g"])("p",{class:"contact-icon-text discord-text"},"rau_ag21 #7817",-1),Ot=Object(n["g"])("div",{class:"advice",id:"tag-was-copied"}," Has copiado mi tag de Discord al portapapeles ",-1);function vt(e,t,a,c,o,r){return Object(n["p"])(),Object(n["d"])(n["a"],null,[Object(n["g"])("div",ct,[ot,Object(n["g"])("div",rt,[Object(n["g"])("div",it,[Object(n["g"])("a",st,[Object(n["g"])("img",{class:"contact-icons linkedin-svg",src:Ye.a,alt:"Linkedin",onMouseover:t[1]||(t[1]=function(e){return c.iconHoverON("linkedin")}),onMouseout:t[2]||(t[2]=function(e){return c.iconHoverOFF("linkedin")})},null,32)]),ut]),Object(n["g"])("div",dt,[Object(n["g"])("a",lt,[Object(n["g"])("img",{class:"contact-icons instagram-svg",src:$e.a,alt:"Instagram",onMouseover:t[3]||(t[3]=function(e){return c.iconHoverON("instagram")}),onMouseout:t[4]||(t[4]=function(e){return c.iconHoverOFF("instagram")})},null,32)]),pt]),Object(n["g"])("div",bt,[Object(n["g"])("a",gt,[Object(n["g"])("img",{class:"contact-icons telegram-svg",src:tt.a,alt:"Telegram",onMouseover:t[5]||(t[5]=function(e){return c.iconHoverON("telegram")}),onMouseout:t[6]||(t[6]=function(e){return c.iconHoverOFF("telegram")})},null,32)]),mt]),Object(n["g"])("div",jt,[Object(n["g"])("img",{class:"contact-icons discord-svg",src:nt.a,alt:"Discord",onClick:t[7]||(t[7]=function(e){return c.copyDiscordUsername(".discord-text")}),onMouseover:t[8]||(t[8]=function(e){return c.iconHoverON("discord")}),onMouseout:t[9]||(t[9]=function(e){return c.iconHoverOFF("discord")})},null,32),ft])])]),Ot],64)}var ht={name:"Social",setup:function(){function e(e){var t="."+e+"-svg",a="."+e+"-text",n=F["a"].timeline({defaults:{duration:.3}});screen.width>900&&n.to(t,{filter:"invert(100%) brightness(30%) sepia(1) hue-rotate(110deg) saturate(10.5)"},0).to(a,{y:"50px",opacity:1},0)}function t(e){var t="."+e+"-svg",a="."+e+"-text",n=F["a"].timeline({defaults:{duration:.3}});screen.width>900&&n.to(t,{filter:"invert(0%)"},0).to(a,{y:"0px",opacity:0},0)}function a(e){var t=document.createElement("input");t.setAttribute("value",document.querySelector(e).innerHTML),document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t),F["a"].to("#tag-was-copied",{opacity:1,scale:1.2,ease:"bounce"}),F["a"].to("#tag-was-copied",{opacity:0,scale:0,delay:5})}return{iconHoverON:e,iconHoverOFF:t,copyDiscordUsername:a}}};ht.render=vt;var yt=ht,xt={name:"Contact",components:{EmailForm:Ke,Social:yt}};xt.render=Je;var wt=xt,kt=[{path:"/",name:"Home",component:ke},{path:"/projects",name:"Projects",component:Ie},{path:"/contact",name:"Contact",component:wt}],St=Object(T["a"])({history:Object(T["b"])(),routes:kt}),Mt=St,_t=Object(n["c"])(N);_t.use(Mt),_t.mount("#app")},"579b":function(e,t,a){e.exports=a.p+"img/instagram.fa2ba3d7.svg"},"5cdf":function(e,t,a){e.exports=a.p+"img/telegram.354f34e3.svg"},6716:function(e,t,a){e.exports=a.p+"img/me.8cadd8fe.webp"},7312:function(e,t,a){e.exports=a.p+"img/sass.4e3c2a4c.svg"},"849d":function(e,t,a){e.exports=a.p+"img/discord.6c457611.svg"},"88ce":function(e,t,a){e.exports=a.p+"img/github.16b68c78.svg"},"8a25":function(e,t,a){e.exports=a.p+"img/mongodb.409452f1.svg"},"91eb":function(e,t,a){e.exports=a.p+"img/projects.6487e9e7.svg"},9282:function(e,t,a){e.exports=a.p+"img/css3.0d61aec5.svg"},"9a42":function(e,t,a){e.exports=a.p+"img/git.8e4cd62e.svg"},"9d1c":function(e,t,a){e.exports=a.p+"img/linkedin.e61c028b.svg"},a52e:function(e,t,a){e.exports=a.p+"img/hamburger.b18eaddd.svg"},afd7:function(e,t,a){e.exports=a.p+"img/loading.bac79927.svg"},c2f9:function(e,t,a){e.exports=a.p+"img/vue.b4a9bd3e.svg"},c614:function(e,t,a){e.exports=a.p+"img/javascript.684127fb.svg"},c6c2:function(e,t,a){e.exports=a.p+"img/home.c548692e.svg"},d3d9:function(e,t,a){e.exports=a.p+"img/html5.77240c4c.svg"},d5d2:function(e,t,a){}});
//# sourceMappingURL=app.e75c404c.js.map