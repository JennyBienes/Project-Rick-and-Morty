(this["webpackJsonpmodulo-3-evaluacion-final-jennybienes"]=this["webpackJsonpmodulo-3-evaluacion-final-jennybienes"]||[]).push([[0],{22:function(e,c,t){},23:function(e,c,t){},30:function(e,c,t){},31:function(e,c,t){},32:function(e,c,t){},33:function(e,c,t){},34:function(e,c,t){},35:function(e,c,t){"use strict";t.r(c);var s=t(1),n=t(15),a=t.n(n),r=t(7),i=t(10),l=t(2),o=function(e,c){return fetch("https://rickandmortyapi.com/api/character/?name=".concat(c,"&species=").concat(e)).then((function(e){return console.log("El Resultado del fetch es",e.status),e.ok?e.json():null})).then((function(t){if(!t)return console.log("El response trajo error, por lo que se devuelve array vacio"),[];console.log("La cantidad de elementos que encuentra en Api es ",t);var s=t.results.map((function(e){return{id:e.id,name:e.name,status:e.status,species:e.species,image:e.image,origin:e.origin.name,episodes:e.episode.length}}));return console.log("La data extraida para la b\xfasqueda por ",c,e,"es:"),s}))},d=(t(22),t(23),t(0));var j=function(e){return Object(d.jsx)("div",{className:"modal__window",children:Object(d.jsxs)("div",{className:"modal__header",children:[Object(d.jsx)("header",{children:Object(d.jsx)(r.b,{to:"/",children:Object(d.jsx)("span",{className:"modal__close",children:"<  Volver"})})}),Object(d.jsx)("section",{className:"modal",children:e.children})]})})},u=function(e){return void 0===e.user?Object(d.jsx)(j,{title:"Personaje no encontrado",children:Object(d.jsx)("p",{children:"Intentalo de nuevo con otra b\xfasqueda"})}):Object(d.jsx)(j,{title:e.user.name,children:Object(d.jsxs)("div",{className:"character__detail",children:[Object(d.jsx)("img",{className:"card__img",src:e.user.image,alt:e.user.name}),Object(d.jsxs)("ul",{className:"text__detail__class",children:[Object(d.jsx)("li",{className:"title_detail",children:e.user.name}),Object(d.jsxs)("li",{children:["Status: ",e.user.status]}),Object(d.jsxs)("li",{children:["Specie: ",e.user.species]}),Object(d.jsxs)("li",{children:["Origin: ",e.user.origin]}),Object(d.jsxs)("li",{children:["Episodes: ",e.user.episodes]})]})]})})};t(30),t(31);var h=function(e){return Object(d.jsxs)(r.b,{to:"./user/".concat(e.character.id),children:[Object(d.jsx)("img",{src:e.character.image,alt:"img",className:"img__class",title:"Foto de ".concat(e.character.name)}),Object(d.jsx)("p",{className:"text__card__class",children:e.character.name}),Object(d.jsx)("p",{className:"text__card__class",children:e.character.species})]})};var m=function(e){var c=e.characters.map((function(e,c){return Object(d.jsx)("li",{className:"card__class",children:Object(d.jsx)(h,{character:e})},c)}));return Object(d.jsx)("div",{children:Object(d.jsx)("ul",{className:"list__class",children:c})})},b=(t(32),t(33),function(e){return Object(d.jsx)("div",{className:"filters",children:Object(d.jsxs)("form",{className:"form__search",onKeyDown:function(e){"Enter"===e.key&&e.preventDefault()},children:[Object(d.jsx)("input",{className:"input__search",type:"text",placeholder:"Escribe el nombre de un personaje",id:"filterName",value:e.filterName,onChange:e.handleFilterName}),Object(d.jsxs)("div",{className:"select__filter",children:[Object(d.jsx)("label",{htmlFor:"filterSpecie",children:"Selecciona la especie "}),Object(d.jsxs)("select",{className:"select__input",name:"filterSpecie",id:"filterSpecie",value:e.filterSpecie,onChange:e.handleFilterSpecie,children:[Object(d.jsx)("option",{value:"",children:"Todos"}),Object(d.jsx)("option",{value:"Human",children:"Humano"}),Object(d.jsx)("option",{value:"Alien",children:"Alien"}),Object(d.jsx)("option",{value:"Animal",children:"Animal"}),Object(d.jsx)("option",{value:"Humanoid",children:"Humanoide"})]})]})]})})}),O=t.p+"static/media/Rick_and_Morty_-_logo_(English).de13d484.png";t(34);var x=function(){return Object(d.jsx)("header",{className:"header",children:Object(d.jsx)(r.b,{to:"/",children:Object(d.jsx)("img",{className:"header__image",src:O,alt:"logo rick and morty"})})})},p=t.p+"static/media/morty-sad.a330cbb1.png",f=function(){return Object(d.jsxs)("div",{className:"container-notfound",children:[Object(d.jsx)("img",{className:"container-notfound__img",src:p,alt:"Morty triste"}),Object(d.jsxs)("div",{className:"container-notfound__text",children:[Object(d.jsx)("h2",{children:"Este personaje no existe!"}),Object(d.jsx)("p",{children:"Introduzca otra b\xfasqueda"})]})]})},_=function(){var e=Object(s.useState)([]),c=Object(i.a)(e,2),t=c[0],n=c[1],a=Object(s.useState)(""),r=Object(i.a)(a,2),j=r[0],h=r[1],O=Object(s.useState)(""),p=Object(i.a)(O,2),_=p[0],g=p[1];Object(s.useEffect)((function(){o(_,j).then((function(e){return n(e)}))}),[_,j]);var v=Object(l.f)("/user/:id"),N=null!==v?v.params.id:"",S=t.find((function(e){return e.id===parseInt(N)}));console.log("El contacto seleccionado para card es",S);return Object(d.jsxs)("form",{className:"form__search",children:[Object(d.jsx)(x,{}),Object(d.jsxs)(l.c,{children:[Object(d.jsx)(l.a,{path:"/user/:id",children:Object(d.jsx)("section",{children:Object(d.jsx)(u,{user:S})})}),Object(d.jsxs)(l.a,{exact:!0,path:"/",children:[Object(d.jsx)("section",{children:Object(d.jsx)(b,{filterSpecie:_,handleFilterSpecie:function(e){g(e.target.value)},filterName:j,handleFilterName:function(e){console.log("El criterio de b\xfasqueda por nombre es ",e.currentTarget.value),h(e.currentTarget.value),console.log("Y filtername es",j)}})}),Object(d.jsxs)("section",{children:[0===t.length?Object(d.jsx)(f,{}):Object(d.jsx)(m,{characters:t}),";"]})]})]})]})};a.a.render(Object(d.jsx)(r.a,{children:Object(d.jsx)(_,{})}),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.64ee000a.chunk.js.map