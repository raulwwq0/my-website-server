(function(e){function t(t){for(var a,i,r=t[0],s=t[1],l=t[2],d=0,g=[];d<r.length;d++)i=r[d],Object.prototype.hasOwnProperty.call(c,i)&&c[i]&&g.push(c[i][0]),c[i]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a]);u&&u(t);while(g.length)g.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,r=1;r<n.length;r++){var s=n[r];0!==c[s]&&(a=!1)}a&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var a={},c={app:0},o=[];function i(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=a,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(n,a,function(t){return e[t]}.bind(null,a));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],s=r.push.bind(r);r.push=t,r=r.slice();for(var l=0;l<r.length;l++)t(r[l]);var u=s;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},2930:function(e,t,n){e.exports=n.p+"img/close.a31f5edc.svg"},"2e1d":function(e,t,n){e.exports=n.p+"img/contact.02f6b059.svg"},"33ba":function(e,t,n){e.exports=n.p+"img/jquery.8bd2a9a0.svg"},3483:function(e,t,n){e.exports=n.p+"img/nodejs.e4ddbe1a.svg"},"535c":function(e,t,n){e.exports=n.p+"img/me.e1e55085.jpg"},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("7a23"),c={class:"content"};function o(e,t,n,o,i,r){var s=Object(a["v"])("Sidebar"),l=Object(a["v"])("Background"),u=Object(a["v"])("router-view");return Object(a["q"])(),Object(a["d"])(a["a"],null,[Object(a["g"])(s),Object(a["g"])(l),Object(a["g"])("div",c,[Object(a["g"])(u)])],64)}n("d5d2");var i=n("a52e"),r=n.n(i),s=n("2930"),l=n.n(s),u=n("c6c2"),d=n.n(u),g=n("91eb"),b=n.n(g),p=n("2e1d"),m=n.n(p),j=n("88ce"),O=n.n(j),v={id:"sidebar"},f={class:"hamburger-wrap"},h={key:0,class:"icons",src:r.a,alt:"Abrir Menú"},y={key:1,class:"icons",src:l.a,alt:"Abrir Menú"},x={id:"menu-icons"},w={class:"icon-wrap"},k=Object(a["g"])("img",{class:"icons",src:d.a,alt:"Inicio"},null,-1),S={class:"icon-text"},q={key:0},M={key:1},H={class:"icon-wrap"},_=Object(a["g"])("img",{class:"icons",src:b.a,alt:"Proyectos"},null,-1),F={class:"icon-text"},C={key:0},E={key:1},I={class:"icon-wrap"},A=Object(a["g"])("img",{class:"icons",src:m.a,alt:"Contacto"},null,-1),N={class:"icon-text"},P={key:0},B={key:1},T=Object(a["g"])("div",{id:"social-icons"},[Object(a["g"])("a",{href:"https://github.com/raulwwq0",target:"_blank"},[Object(a["g"])("div",{class:"icon-wrap"},[Object(a["g"])("img",{id:"github-icon",class:"icons",src:O.a,alt:"GitHub"}),Object(a["g"])("p",{class:"icon-text"},"GitHub")])])],-1);function G(e,t,n,c,o,i){var r=Object(a["v"])("Buttons"),s=Object(a["v"])("router-link");return Object(a["q"])(),Object(a["d"])("aside",v,[Object(a["g"])("div",{id:"hamburger",onClick:t[1]||(t[1]=function(e){return c.sidebarChangeStatus()})},[Object(a["g"])("div",f,[c.isSidebarOFF?Object(a["e"])("",!0):(Object(a["q"])(),Object(a["d"])("img",h)),c.isSidebarOFF?(Object(a["q"])(),Object(a["d"])("img",y)):Object(a["e"])("",!0)])]),Object(a["g"])(r),Object(a["g"])("div",x,[Object(a["g"])(s,{to:"/".concat(c.lang,"/home"),"exact-active-class":"active"},{default:Object(a["B"])((function(){return[Object(a["g"])("div",w,[k,Object(a["g"])("p",S,["es"===c.lang?(Object(a["q"])(),Object(a["d"])("span",q,"Inicio")):Object(a["e"])("",!0),"en"===c.lang?(Object(a["q"])(),Object(a["d"])("span",M,"Home")):Object(a["e"])("",!0)])])]})),_:1},8,["to"]),Object(a["g"])(s,{to:"/".concat(c.lang,"/projects"),"exact-active-class":"active"},{default:Object(a["B"])((function(){return[Object(a["g"])("div",H,[_,Object(a["g"])("p",F,["es"===c.lang?(Object(a["q"])(),Object(a["d"])("span",C,"Proyectos")):Object(a["e"])("",!0),"en"===c.lang?(Object(a["q"])(),Object(a["d"])("span",E,"Projects")):Object(a["e"])("",!0)])])]})),_:1},8,["to"]),Object(a["g"])(s,{to:"/".concat(c.lang,"/contact"),"exact-active-class":"active"},{default:Object(a["B"])((function(){return[Object(a["g"])("div",I,[A,Object(a["g"])("p",N,["es"===c.lang?(Object(a["q"])(),Object(a["d"])("span",P,"Contacto")):Object(a["e"])("",!0),"en"===c.lang?(Object(a["q"])(),Object(a["d"])("span",B,"Contact")):Object(a["e"])("",!0)])])]})),_:1},8,["to"])]),T])}var L=n("cffa"),D=n("5502"),J=Object(D["a"])({state:{lang:localStorage.getItem("lang")},mutations:{CHANGE_LANG:function(e){"es"===e.lang?(e.lang="en",localStorage.setItem("lang","en")):(e.lang="es",localStorage.setItem("lang","es"))}}}),R=J,z=n("cf84"),U=n.n(z),V=n("b365"),W=n.n(V),Q={id:"options-buttons"},Y={id:"lang-switcher"},K=Object(a["g"])("span",{class:"es"},[Object(a["g"])("img",{src:U.a,alt:"Spanish"})],-1),X=Object(a["g"])("span",{class:"en"},[Object(a["g"])("img",{src:W.a,alt:"English"})],-1);function Z(e,t,n,c,o,i){return Object(a["q"])(),Object(a["d"])("div",Q,[Object(a["g"])("div",Y,[K,Object(a["g"])("input",{id:"lang-checkbox",type:"checkbox",class:"toggle",onChange:t[1]||(t[1]=function(e){return c.changeLanguage()})},null,32),X])])}n("fb6a"),n("99af");var $=n("6c02");function ee(e,t,n,c,o,i){var r=Object(a["v"])("PresentationBanner"),s=Object(a["v"])("AboutMe"),l=Object(a["v"])("Skills");return Object(a["q"])(),Object(a["d"])(a["a"],null,[Object(a["g"])(r),Object(a["g"])(s),Object(a["g"])(l)],64)}var te={id:"presentation-banner"},ne=Object(a["g"])("div",{id:"presentation-text"},[Object(a["g"])("h1",{class:"presentation-title"},"Raúl Aguilar"),Object(a["g"])("h2",{class:"subtitle"},"Estudiante de Desarrollo Web")],-1);function ae(e,t,n,c,o,i){return Object(a["q"])(),Object(a["d"])("div",te,[ne])}var ce={name:"PresentationBanner"};ce.render=ae;var oe=ce,ie=n("6716"),re=n.n(ie),se=n("535c"),le=n.n(se),ue=re.a,de=le.a,ge={id:"about-me"},be=Object(a["g"])("div",{id:"about-text"},[Object(a["g"])("h2",{class:"subtitle"},"Sobre mi"),Object(a["g"])("p",null," Me llamo Raúl y soy de Málaga. Programo desde los 15 años, cuando descubrí el lenguaje de programación Python gracias a mi profesor de TIC (Tecnologías de la Información y Comunicación). "),Object(a["g"])("p",null," Este fue el comienzo de mi camino de aprendizaje autodidacta, que combinándolo con varios cursos en los que aprendí nuevos lenguajes y tecnologías, me han permitido desarrollar una gran capacidad para resolver problemas, conviertiéndome en una persona en la que se puede depositar una gran confianza. También aprecio mucho el trabajo en equipo, en el que podría aportar lo mejor de mi. "),Object(a["g"])("p",null," Actualmente mi meta es el desarrollo web, sin descartar a largo plazo el desarrollo de aplicaciones. ")],-1),pe=Object(a["g"])("picture",null,[Object(a["g"])("source",{srcset:ue,type:"image/webp"}),Object(a["g"])("source",{srcset:de,type:"image/jpeg"}),Object(a["g"])("img",{src:le.a})],-1);function me(e,t,n,c,o,i){return Object(a["q"])(),Object(a["d"])("div",ge,[be,pe])}var je={name:"AboutMe"};je.render=me;var Oe=je,ve=n("d3d9"),fe=n.n(ve),he=n("9282"),ye=n.n(he),xe=n("7312"),we=n.n(xe),ke=n("c614"),Se=n.n(ke),qe=n("3483"),Me=n.n(qe),He=n("33ba"),_e=n.n(He),Fe=n("c2f9"),Ce=n.n(Fe),Ee=n("9a42"),Ie=n.n(Ee),Ae=n("8a25"),Ne=n.n(Ae),Pe={id:"skills"},Be=Object(a["g"])("h2",{class:"subtitle"},"Mis Habilidades",-1),Te=Object(a["g"])("p",null," Todas las habilidades las he aprendido de forma autodidacta y las he puesto en prácticas en varios proyectos. ",-1),Ge=Object(a["g"])("div",{id:"skills-svg"},[Object(a["g"])("img",{src:fe.a,title:"HTML5"}),Object(a["g"])("img",{src:ye.a,title:"CSS3"}),Object(a["g"])("img",{src:we.a,title:"SASS"}),Object(a["g"])("img",{src:Se.a,title:"Javascript"}),Object(a["g"])("img",{src:Me.a,title:"NodeJS"}),Object(a["g"])("img",{src:_e.a,title:"JQuery"}),Object(a["g"])("img",{src:Ce.a,title:"VueJS"}),Object(a["g"])("img",{src:Ie.a,title:"Git"}),Object(a["g"])("img",{src:Ne.a,title:"MongoDB"})],-1);function Le(e,t,n,c,o,i){return Object(a["q"])(),Object(a["d"])("div",Pe,[Be,Te,Ge])}var De={name:"Skills"};De.render=Le;var Je=De,Re={name:"Home",components:{PresentationBanner:oe,AboutMe:Oe,Skills:Je}};Re.render=ee;var ze=Re,Ue=(n("9911"),n("afd7")),Ve=n.n(Ue),We=Object(a["g"])("h1",{class:"title"},"Proyectos",-1),Qe=Object(a["g"])("p",{id:"projects-section-text",class:"section-text"}," Esta es la lista de todos los proyectos que he realizado desde mis comienzos como desarrollador web. Visita mi GitHub para ver los repositorios de cada proyecto. ",-1),Ye={key:0,id:"projects"},Ke={key:1,src:Ve.a,alt:"Cargando..."},Xe={class:"project-title"},Ze=Object(a["g"])("button",null,"Ir a la web",-1),$e={key:1,src:Ve.a,alt:"Cargando..."};function et(e,t,n,c,o,i){return Object(a["q"])(),Object(a["d"])(a["a"],null,[We,Qe,o.projects?(Object(a["q"])(),Object(a["d"])("div",Ye,[(Object(a["q"])(!0),Object(a["d"])(a["a"],null,Object(a["u"])(o.projects,(function(e){return Object(a["q"])(),Object(a["d"])("article",{class:"project",onMouseover:function(t){return c.infoHoverON(e._id)},onMouseleave:function(t){return c.infoHoverOFF(e._id)},key:e._id},[e.image?(Object(a["q"])(),Object(a["d"])("img",{key:0,src:c.api+"/get-image/"+e.image},null,8,["src"])):Object(a["e"])("",!0),e.image?Object(a["e"])("",!0):(Object(a["q"])(),Object(a["d"])("img",Ke)),Object(a["g"])("div",{class:"project-info project-info-"+e._id},[Object(a["g"])("div",Xe,[Object(a["g"])("h2",null,Object(a["x"])(e.title),1)]),Object(a["g"])("p",null,Object(a["x"])(e.description_es),1),e.link?(Object(a["q"])(),Object(a["d"])("form",{key:0,id:"web-button",action:e.link,target:"_blank"},[Ze],8,["action"])):Object(a["e"])("",!0)],2)],40,["onMouseover","onMouseleave"])})),128))])):Object(a["e"])("",!0),o.projects?Object(a["e"])("",!0):(Object(a["q"])(),Object(a["d"])("img",$e))],64)}var tt=n("bc3a"),nt=n.n(tt),at={name:"Projects",data:function(){return{projects:[]}},setup:function(){var e="https://raul-aguilar.herokuapp.com/api";function t(e){var t=".project-info-"+e;L["a"].to(t,{duration:.3,y:"-250px",background:"rgba(0, 0, 0, 0.9)"})}function n(e){var t=".project-info-"+e;L["a"].to(t,{duration:.3,y:"0%",background:"rgba(0, 0, 0, 0.5)"})}function a(){L["a"].fromTo(".project",{opacity:0,duration:.5},{stagger:.2,opacity:1,duration:.5})}function c(){var t=this;for(var n in nt.a.get(e+"/get-projects").then((function(e){console.log(e),"success"==e.data.status&&(t.projects=e.data.projects)})),this.projects)this.projects[n].className+=n._id}return{api:e,infoHoverON:t,infoHoverOFF:n,entryAnimation:a,getProjects:c}},mounted:function(){this.getProjects()},updated:function(){this.entryAnimation()}};at.render=et;var ct=at,ot=Object(a["g"])("h1",{class:"title"},"Contacto",-1),it={id:"contact"};function rt(e,t,n,c,o,i){var r=Object(a["v"])("EmailForm"),s=Object(a["v"])("Social");return Object(a["q"])(),Object(a["d"])(a["a"],null,[ot,Object(a["g"])("div",it,[Object(a["g"])(r),Object(a["g"])(s)])],64)}var st=Object(a["f"])('<p class="first-p">Usa este formulario para contactarme</p><input type="text" name="user_name" placeholder="Nombre" required><input type="text" name="user_email" placeholder="Correo" required><textarea name="message" placeholder="Mensaje" required></textarea><input type="submit" value="Enviar">',5),lt=Object(a["g"])("div",{class:"advice",id:"email-sent"},"El correo se ha enviado con éxito",-1),ut=Object(a["g"])("div",{class:"advice",id:"email-fail"},"El correo no se ha podido enviar",-1);function dt(e,t,n,c,o,i){return Object(a["q"])(),Object(a["d"])(a["a"],null,[Object(a["g"])("form",{id:"email-form",onSubmit:t[1]||(t[1]=Object(a["C"])((function(){return c.sendEmail&&c.sendEmail.apply(c,arguments)}),["prevent"]))},[st],32),lt,ut],64)}var gt=n("0f91"),bt=n.n(gt),pt={name:"EmailForm",setup:function(){var e="service_4t3fp89",t="template_tc10fun",n="user_sWH0f38sG0kqFfBRdm6m6";function a(a){bt.a.sendForm(e,t,a.target,n).then((function(e){console.log("Email sent successfully",e.status,e.text),document.getElementById("email-form").reset(),L["a"].to("#email-sent",{opacity:1,scale:1.2,ease:"bounce"}),L["a"].to("#email-sent",{opacity:0,scale:0,delay:5})}),(function(e){console.log("Email sent went wrong",e),L["a"].to("#email-fail",{opacity:1,scale:1.2,ease:"bounce"}),L["a"].to("#email-fail",{opacity:0,scale:0,delay:5})}))}return{sendEmail:a}}};pt.render=dt;var mt=pt,jt=n("9d1c"),Ot=n.n(jt),vt=n("579b"),ft=n.n(vt),ht=n("5cdf"),yt=n.n(ht),xt=n("849d"),wt=n.n(xt),kt={id:"different-ways-contact"},St=Object(a["g"])("p",{class:"first-p"},"También puedes encontrarme en:",-1),qt={id:"contact-ways"},Mt={class:"contact-icon-wrap"},Ht={href:"https://www.linkedin.com/in/agraul21/",target:"_blank"},_t=Object(a["g"])("p",{class:"contact-icon-text linkedin-text"},"Raúl Aguilar",-1),Ft={class:"contact-icon-wrap"},Ct={href:"https://www.instagram.com/raulwwq0/",target:"_blank"},Et=Object(a["g"])("p",{class:"contact-icon-text instagram-text"},"@raulwwq0",-1),It={class:"contact-icon-wrap"},At={href:"https://t.me/rau_ag21",target:"_blank"},Nt=Object(a["g"])("p",{class:"contact-icon-text telegram-text"},"@rau_ag21",-1),Pt={class:"contact-icon-wrap"},Bt=Object(a["g"])("p",{class:"contact-icon-text discord-text"},"rau_ag21 #7817",-1),Tt=Object(a["g"])("div",{class:"advice",id:"tag-was-copied"}," Has copiado mi tag de Discord al portapapeles ",-1);function Gt(e,t,n,c,o,i){return Object(a["q"])(),Object(a["d"])(a["a"],null,[Object(a["g"])("div",kt,[St,Object(a["g"])("div",qt,[Object(a["g"])("div",Mt,[Object(a["g"])("a",Ht,[Object(a["g"])("img",{class:"contact-icons linkedin-svg",src:Ot.a,alt:"Linkedin",onMouseover:t[1]||(t[1]=function(e){return c.iconHoverON("linkedin")}),onMouseout:t[2]||(t[2]=function(e){return c.iconHoverOFF("linkedin")})},null,32)]),_t]),Object(a["g"])("div",Ft,[Object(a["g"])("a",Ct,[Object(a["g"])("img",{class:"contact-icons instagram-svg",src:ft.a,alt:"Instagram",onMouseover:t[3]||(t[3]=function(e){return c.iconHoverON("instagram")}),onMouseout:t[4]||(t[4]=function(e){return c.iconHoverOFF("instagram")})},null,32)]),Et]),Object(a["g"])("div",It,[Object(a["g"])("a",At,[Object(a["g"])("img",{class:"contact-icons telegram-svg",src:yt.a,alt:"Telegram",onMouseover:t[5]||(t[5]=function(e){return c.iconHoverON("telegram")}),onMouseout:t[6]||(t[6]=function(e){return c.iconHoverOFF("telegram")})},null,32)]),Nt]),Object(a["g"])("div",Pt,[Object(a["g"])("img",{class:"contact-icons discord-svg",src:wt.a,alt:"Discord",onClick:t[7]||(t[7]=function(e){return c.copyDiscordUsername(".discord-text")}),onMouseover:t[8]||(t[8]=function(e){return c.iconHoverON("discord")}),onMouseout:t[9]||(t[9]=function(e){return c.iconHoverOFF("discord")})},null,32),Bt])])]),Tt],64)}var Lt={name:"Social",setup:function(){function e(e){var t="."+e+"-svg",n="."+e+"-text",a=L["a"].timeline({defaults:{duration:.3}});screen.width>900&&a.to(t,{filter:"invert(100%) brightness(30%) sepia(1) hue-rotate(110deg) saturate(10.5)"},0).to(n,{y:"50px",opacity:1},0)}function t(e){var t="."+e+"-svg",n="."+e+"-text",a=L["a"].timeline({defaults:{duration:.3}});screen.width>900&&a.to(t,{filter:"invert(0%)"},0).to(n,{y:"0px",opacity:0},0)}function n(e){var t=document.createElement("input");t.setAttribute("value",document.querySelector(e).innerHTML),document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t),L["a"].to("#tag-was-copied",{opacity:1,scale:1.2,ease:"bounce"}),L["a"].to("#tag-was-copied",{opacity:0,scale:0,delay:5})}return{iconHoverON:e,iconHoverOFF:t,copyDiscordUsername:n}}};Lt.render=Gt;var Dt=Lt,Jt={name:"Contact",components:{EmailForm:mt,Social:Dt}};Jt.render=rt;var Rt=Jt;function zt(e,t,n,c,o,i){var r=Object(a["v"])("PresentationBanner"),s=Object(a["v"])("AboutMe"),l=Object(a["v"])("Skills");return Object(a["q"])(),Object(a["d"])(a["a"],null,[Object(a["g"])(r),Object(a["g"])(s),Object(a["g"])(l)],64)}var Ut={id:"presentation-banner"},Vt=Object(a["g"])("div",{id:"presentation-text"},[Object(a["g"])("h1",{class:"presentation-title"},"Raúl Aguilar"),Object(a["g"])("h2",{class:"subtitle"},"Web Development Student")],-1);function Wt(e,t,n,c,o,i){return Object(a["q"])(),Object(a["d"])("div",Ut,[Vt])}var Qt={name:"PresentationBanner"};Qt.render=Wt;var Yt=Qt,Kt=re.a,Xt=le.a,Zt={id:"about-me"},$t=Object(a["g"])("div",{id:"about-text"},[Object(a["g"])("h2",{class:"subtitle"},"About Me"),Object(a["g"])("p",null," My name is Raúl and I'm from Málaga. I have been coding since I was 15, when my ICT (Information and Communication Technologies) teacher discovered me Python, a programming language. "),Object(a["g"])("p",null," That was the beginning of my travel in self-taught learning, and also with the help from some courses where I learned new programming languages and technologies, allowing me to develop a huge ability to solve problems and becoming myself in a person who you can put your trust in. In addition, I love working in a team, where I will always try to do my best. "),Object(a["g"])("p",null," Nowadays, my main goal is web development. However, in a future I would also like to learn application development. ")],-1),en=Object(a["g"])("picture",null,[Object(a["g"])("source",{srcset:Kt,type:"image/webp"}),Object(a["g"])("source",{srcset:Xt,type:"image/jpeg"}),Object(a["g"])("img",{src:le.a})],-1);function tn(e,t,n,c,o,i){return Object(a["q"])(),Object(a["d"])("div",Zt,[$t,en])}var nn={name:"AboutMe"};nn.render=tn;var an=nn,cn={id:"skills"},on=Object(a["g"])("h2",{class:"subtitle"},"My Skills",-1),rn=Object(a["g"])("p",null," I learn every skill by myself and I have used them in some projects. ",-1),sn=Object(a["g"])("div",{id:"skills-svg"},[Object(a["g"])("img",{src:fe.a,title:"HTML 5"}),Object(a["g"])("img",{src:ye.a,title:"CSS 3"}),Object(a["g"])("img",{src:we.a,title:"SASS/SCSS"}),Object(a["g"])("img",{src:Se.a,title:"JavaScript"}),Object(a["g"])("img",{src:Me.a,title:"NodeJS"}),Object(a["g"])("img",{src:_e.a,title:"JQuery"}),Object(a["g"])("img",{src:Ce.a,title:"VueJS"}),Object(a["g"])("img",{src:Ie.a,title:"Git"}),Object(a["g"])("img",{src:Ne.a,title:"MongoDB"})],-1);function ln(e,t,n,c,o,i){return Object(a["q"])(),Object(a["d"])("div",cn,[on,rn,sn])}var un={name:"Skills"};un.render=ln;var dn=un,gn={name:"Home",components:{PresentationBanner:Yt,AboutMe:an,Skills:dn}};gn.render=zt;var bn=gn,pn=Object(a["g"])("h1",{class:"title"},"Projects",-1),mn=Object(a["g"])("p",{id:"projects-section-text",class:"section-text"}," Here you have a list of all the projects I did since I started as a web developer. Visit my GitHub profile to see every repository of each project. ",-1),jn={key:0,id:"projects"},On={key:1,src:Ve.a,alt:"Cargando..."},vn={class:"project-title"},fn=Object(a["g"])("button",null,"Go to the web",-1),hn={key:1,src:Ve.a,alt:"Cargando..."};function yn(e,t,n,c,o,i){return Object(a["q"])(),Object(a["d"])(a["a"],null,[pn,mn,o.projects?(Object(a["q"])(),Object(a["d"])("div",jn,[(Object(a["q"])(!0),Object(a["d"])(a["a"],null,Object(a["u"])(o.projects,(function(e){return Object(a["q"])(),Object(a["d"])("article",{class:"project",onMouseover:function(t){return c.infoHoverON(e._id)},onMouseleave:function(t){return c.infoHoverOFF(e._id)},key:e._id},[e.image?(Object(a["q"])(),Object(a["d"])("img",{key:0,src:c.api+"/get-image/"+e.image},null,8,["src"])):Object(a["e"])("",!0),e.image?Object(a["e"])("",!0):(Object(a["q"])(),Object(a["d"])("img",On)),Object(a["g"])("div",{class:"project-info project-info-"+e._id},[Object(a["g"])("div",vn,[Object(a["g"])("h2",null,Object(a["x"])(e.title),1)]),Object(a["g"])("p",null,Object(a["x"])(e.description_en),1),e.link?(Object(a["q"])(),Object(a["d"])("form",{key:0,id:"web-button",action:e.link,target:"_blank"},[fn],8,["action"])):Object(a["e"])("",!0)],2)],40,["onMouseover","onMouseleave"])})),128))])):Object(a["e"])("",!0),o.projects?Object(a["e"])("",!0):(Object(a["q"])(),Object(a["d"])("img",hn))],64)}var xn={name:"Projects",data:function(){return{projects:[]}},setup:function(){var e="https://raul-aguilar.herokuapp.com/api";function t(e){var t=".project-info-"+e;L["a"].to(t,{duration:.3,y:"-250px",background:"rgba(0, 0, 0, 0.9)"})}function n(e){var t=".project-info-"+e;L["a"].to(t,{duration:.3,y:"0%",background:"rgba(0, 0, 0, 0.5)"})}function a(){L["a"].fromTo(".project",{opacity:0,duration:.5},{stagger:.2,opacity:1,duration:.5})}function c(){var t=this;for(var n in nt.a.get(e+"/get-projects").then((function(e){"success"==e.data.status&&(t.projects=e.data.projects)})),this.projects)this.projects[n].className+=n._id}return{api:e,infoHoverON:t,infoHoverOFF:n,entryAnimation:a,getProjects:c}},mounted:function(){this.getProjects()},updated:function(){this.entryAnimation()}};xn.render=yn;var wn=xn,kn=Object(a["g"])("h1",{class:"title"},"Contact",-1),Sn={id:"contact"};function qn(e,t,n,c,o,i){var r=Object(a["v"])("EmailForm"),s=Object(a["v"])("Social");return Object(a["q"])(),Object(a["d"])(a["a"],null,[kn,Object(a["g"])("div",Sn,[Object(a["g"])(r),Object(a["g"])(s)])],64)}var Mn=Object(a["f"])('<p class="first-p">Use this form to send me an email</p><input type="text" name="user_name" placeholder="Name" required><input type="text" name="user_email" placeholder="Email" required><textarea name="message" placeholder="Message" required></textarea><input type="submit" value="Send">',5),Hn=Object(a["g"])("div",{class:"advice",id:"email-sent"},"The email has been sent successfully",-1),_n=Object(a["g"])("div",{class:"advice",id:"email-fail"},"The email has not been sent",-1);function Fn(e,t,n,c,o,i){return Object(a["q"])(),Object(a["d"])(a["a"],null,[Object(a["g"])("form",{id:"email-form",onSubmit:t[1]||(t[1]=Object(a["C"])((function(){return c.sendEmail&&c.sendEmail.apply(c,arguments)}),["prevent"]))},[Mn],32),Hn,_n],64)}var Cn={name:"EmailForm",setup:function(){var e="service_4t3fp89",t="template_tc10fun",n="user_sWH0f38sG0kqFfBRdm6m6";function a(a){bt.a.sendForm(e,t,a.target,n).then((function(e){console.log("Email sent successfully",e.status,e.text),document.getElementById("email-form").reset(),L["a"].to("#email-sent",{opacity:1,scale:1.2,ease:"bounce"}),L["a"].to("#email-sent",{opacity:0,scale:0,delay:5})}),(function(e){console.log("Email sent went wrong",e),L["a"].to("#email-fail",{opacity:1,scale:1.2,ease:"bounce"}),L["a"].to("#email-fail",{opacity:0,scale:0,delay:5})}))}return{sendEmail:a}}};Cn.render=Fn;var En=Cn,In={id:"different-ways-contact"},An=Object(a["g"])("p",{class:"first-p"},"You can also find me here:",-1),Nn={id:"contact-ways"},Pn={class:"contact-icon-wrap"},Bn={href:"https://www.linkedin.com/in/agraul21/",target:"_blank"},Tn=Object(a["g"])("p",{class:"contact-icon-text linkedin-text"},"Raúl Aguilar",-1),Gn={class:"contact-icon-wrap"},Ln={href:"https://www.instagram.com/raulwwq0/",target:"_blank"},Dn=Object(a["g"])("p",{class:"contact-icon-text instagram-text"},"@raulwwq0",-1),Jn={class:"contact-icon-wrap"},Rn={href:"https://t.me/rau_ag21",target:"_blank"},zn=Object(a["g"])("p",{class:"contact-icon-text telegram-text"},"@rau_ag21",-1),Un={class:"contact-icon-wrap"},Vn=Object(a["g"])("p",{class:"contact-icon-text discord-text"},"rau_ag21 #7817",-1),Wn=Object(a["g"])("div",{class:"advice",id:"tag-was-copied"}," You have copied my discord tag to your clipboard ",-1);function Qn(e,t,n,c,o,i){return Object(a["q"])(),Object(a["d"])(a["a"],null,[Object(a["g"])("div",In,[An,Object(a["g"])("div",Nn,[Object(a["g"])("div",Pn,[Object(a["g"])("a",Bn,[Object(a["g"])("img",{class:"contact-icons linkedin-svg",src:Ot.a,alt:"Linkedin",onMouseover:t[1]||(t[1]=function(e){return c.iconHoverON("linkedin")}),onMouseout:t[2]||(t[2]=function(e){return c.iconHoverOFF("linkedin")})},null,32)]),Tn]),Object(a["g"])("div",Gn,[Object(a["g"])("a",Ln,[Object(a["g"])("img",{class:"contact-icons instagram-svg",src:ft.a,alt:"Instagram",onMouseover:t[3]||(t[3]=function(e){return c.iconHoverON("instagram")}),onMouseout:t[4]||(t[4]=function(e){return c.iconHoverOFF("instagram")})},null,32)]),Dn]),Object(a["g"])("div",Jn,[Object(a["g"])("a",Rn,[Object(a["g"])("img",{class:"contact-icons telegram-svg",src:yt.a,alt:"Telegram",onMouseover:t[5]||(t[5]=function(e){return c.iconHoverON("telegram")}),onMouseout:t[6]||(t[6]=function(e){return c.iconHoverOFF("telegram")})},null,32)]),zn]),Object(a["g"])("div",Un,[Object(a["g"])("img",{class:"contact-icons discord-svg",src:wt.a,alt:"Discord",onClick:t[7]||(t[7]=function(e){return c.copyDiscordUsername(".discord-text")}),onMouseover:t[8]||(t[8]=function(e){return c.iconHoverON("discord")}),onMouseout:t[9]||(t[9]=function(e){return c.iconHoverOFF("discord")})},null,32),Vn])])]),Wn],64)}var Yn={name:"Social",setup:function(){function e(e){var t="."+e+"-svg",n="."+e+"-text",a=L["a"].timeline({defaults:{duration:.3}});screen.width>900&&a.to(t,{filter:"invert(100%) brightness(30%) sepia(1) hue-rotate(110deg) saturate(10.5)"},0).to(n,{y:"50px",opacity:1},0)}function t(e){var t="."+e+"-svg",n="."+e+"-text",a=L["a"].timeline({defaults:{duration:.3}});screen.width>900&&a.to(t,{filter:"invert(0%)"},0).to(n,{y:"0px",opacity:0},0)}function n(e){var t=document.createElement("input");t.setAttribute("value",document.querySelector(e).innerHTML),document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t),L["a"].to("#tag-was-copied",{opacity:1,scale:1.2,ease:"bounce"}),L["a"].to("#tag-was-copied",{opacity:0,scale:0,delay:5})}return{iconHoverON:e,iconHoverOFF:t,copyDiscordUsername:n}}};Yn.render=Qn;var Kn=Yn,Xn={name:"Contact",components:{EmailForm:En,Social:Kn}};Xn.render=qn;var Zn=Xn,$n=[{path:"/",redirect:"/es/home"},{path:"/es/home",name:"HomeES",component:ze},{path:"/es/projects",name:"ProjectsES",component:ct},{path:"/es/contact",name:"ContactES",component:Rt},{path:"/en/home",name:"HomeEN",component:bn},{path:"/en/projects",name:"ProjectsEN",component:wn},{path:"/en/contact",name:"ContactEN",component:Zn}],ea=Object($["a"])({history:Object($["b"])(),routes:$n});ea.beforeEach((function(e,t,n){window.scrollTo(0,0),n()}));var ta=ea,na={name:"Buttons",setup:function(){function e(){R.commit("CHANGE_LANG");var e=ta.currentRoute.value.path;e=e.slice(4,e.length),ta.push({path:"/".concat(localStorage.getItem("lang"),"/").concat(e)})}function t(){var e=localStorage.getItem("lang");null===e&&localStorage.setItem("lang","es"),document.getElementById("lang-checkbox").checked="en"===e}return Object(a["o"])((function(){t()})),{changeLanguage:e}}};na.render=Z;var aa=na,ca={name:"Sidebar",components:{Buttons:aa},setup:function(){var e=Object(a["t"])(!0);function t(){var t=L["a"].timeline({defaults:{duration:.3}});screen.width>900?e.value?t.to("#options-buttons",{display:"none",opacity:0}).to(".icon-text",{opacity:0,display:"none"},0).to(".icon-wrap",{width:"40px"},.3).to("#sidebar",{width:"40px"},.2).to(".content",{marginLeft:"40px"},"<0"):t.to("#sidebar",{width:"160px"}).to(".icon-text",{display:"block"},.2).to(".icon-text",{opacity:1}).to("#options-buttons",{display:"flex",opacity:1},"<0").to(".content",{marginLeft:"160px"},0).to(".icon-wrap",{width:"150px"},0):e.value?t.to("#options-buttons",{display:"none",opacity:0}).to(".icon-text",{opacity:0,display:"none"},0).to(".icon-wrap",{width:"40px"},.3).to("#sidebar",{width:"40px"},.2).to("#sidebar",{boxShadow:"0 0 0 0 rgba(0, 0 , 0, 0)"},0):t.to("#sidebar",{width:"160px"}).to(".icon-text",{display:"block"},.2).to(".icon-text",{opacity:1}).to("#options-buttons",{display:"flex",opacity:1},"<0").to(".icon-wrap",{width:"150px"},0).to("#sidebar",{boxShadow:"0 8px 32px 0 rgba(0, 0 , 0, 0.37)"},0),e.value=!e.value}var n=Object(a["t"])(R.state.lang);return Object(a["A"])((function(){n.value=R.state.lang})),{isSidebarOFF:e,sidebarChangeStatus:t,lang:n}},mounted:function(){this.sidebarChangeStatus()}};ca.render=G;var oa=ca,ia={id:"bg"};function ra(e,t,n,c,o,i){return Object(a["q"])(),Object(a["d"])("div",ia)}var sa={name:"Background",setup:function(){function e(){for(var e=0;e<100;e++){var t=document.createElement("span");t.className="box",t.id="box-"+e,document.getElementById("bg").appendChild(t)}}function t(){var e=L["a"].timeline({defaults:{duration:1.5}});e.to(".box",{backgroundColor:"#eee",stagger:{amount:1,grid:"auto",from:"random",ease:"power1"}}),setInterval((function(){for(var t="",n=0;n<=10;n++){var a="#box-"+L["a"].utils.random(0,99,1);t+=a+", "}t=t.substring(0,t.length-2),e.to(t,{backgroundColor:"random([#8effc1, #5efca1, #4eec91, #3edc81, #2ecc71, #1ebc61, #0eac51, #009c41, #008c31, #007c21, #006c11, #005c01])",ease:"power1"}).to(t,{backgroundColor:"#eee"})}),2e3)}return{createBackground:e,animateBackground:t}},mounted:function(){this.createBackground(),this.animateBackground()}};sa.render=ra;var la=sa,ua={name:"App",components:{Sidebar:oa,Background:la},setup:function(){var e=Object(a["t"])(localStorage.getItem("lang"));return Object(a["A"])((function(){e.value=localStorage.getItem("lang")})),{lang:e}}};ua.render=o;var da=ua,ga=Object(a["c"])(da);ga.use(ta),ga.use(R),ga.mount("#app")},"579b":function(e,t,n){e.exports=n.p+"img/instagram.fa2ba3d7.svg"},"5cdf":function(e,t,n){e.exports=n.p+"img/telegram.354f34e3.svg"},6716:function(e,t,n){e.exports=n.p+"img/me.8cadd8fe.webp"},7312:function(e,t,n){e.exports=n.p+"img/sass.4e3c2a4c.svg"},"849d":function(e,t,n){e.exports=n.p+"img/discord.6c457611.svg"},"88ce":function(e,t,n){e.exports=n.p+"img/github.16b68c78.svg"},"8a25":function(e,t,n){e.exports=n.p+"img/mongodb.409452f1.svg"},"91eb":function(e,t,n){e.exports=n.p+"img/projects.6487e9e7.svg"},9282:function(e,t,n){e.exports=n.p+"img/css3.0d61aec5.svg"},"9a42":function(e,t,n){e.exports=n.p+"img/git.8e4cd62e.svg"},"9d1c":function(e,t,n){e.exports=n.p+"img/linkedin.e61c028b.svg"},a52e:function(e,t,n){e.exports=n.p+"img/hamburger.b18eaddd.svg"},afd7:function(e,t,n){e.exports=n.p+"img/loading.bac79927.svg"},b365:function(e,t,n){e.exports=n.p+"img/britain.187e0028.svg"},c2f9:function(e,t,n){e.exports=n.p+"img/vue.b4a9bd3e.svg"},c614:function(e,t,n){e.exports=n.p+"img/javascript.684127fb.svg"},c6c2:function(e,t,n){e.exports=n.p+"img/home.c548692e.svg"},cf84:function(e,t,n){e.exports=n.p+"img/spain.74530682.svg"},d3d9:function(e,t,n){e.exports=n.p+"img/html5.77240c4c.svg"},d5d2:function(e,t,n){}});
//# sourceMappingURL=app.28904386.js.map