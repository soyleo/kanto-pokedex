(this["webpackJsonpkanto-pokedex"]=this["webpackJsonpkanto-pokedex"]||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(2),s=n.n(r),o=(n(14),n(3)),i=n(4),l=n(7),j=n(5),h=(n(15),n(16),n(0)),u=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(e){var c;return Object(o.a)(this,n),(c=t.call(this,e)).state={hasError:!1},c}return Object(i.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?Object(h.jsxs)("div",{children:[Object(h.jsx)("img",{className:"error",alt:"Error",src:"https://i.imgflip.com/3kmejr.jpg"}),Object(h.jsx)("h1",{children:"A savage ERROR has appeared!"}),";"]}):this.props.children}}]),n}(a.a.Component),d=(n(18),function(e){var t=e.searchChange;return Object(h.jsx)("div",{children:Object(h.jsx)("input",{className:"searchbox",type:"search",placeholder:"Search your Pok\xe9mon by his name",onChange:t})})}),m=function(e){return Object(h.jsx)("div",{style:{overflowY:"scroll",height:"70vh"},children:e.children})},b=n(6),f=(n(19),n(9)),O=function(e){var t=e.url,n=Object(c.useState)(null),a=Object(b.a)(n,2),r=a[0],s=a[1];return Object(c.useEffect)((function(){fetch(t).then((function(e){return e.json()})).then((function(e){s(e)}))}),[t]),Object(h.jsx)("div",{children:r&&Object(h.jsxs)("div",{children:[Object(h.jsxs)("p",{children:["Double Damage from: ",r.damage_relations.double_damage_from.map((function(e,t){return Object(h.jsx)("button",{className:"btn ".concat(e.name),children:e.name},"3".concat(t))}))]}),Object(h.jsxs)("p",{children:["Double Damage to: ",r.damage_relations.double_damage_to.map((function(e,t){return Object(h.jsx)("button",{className:"btn ".concat(e.name),children:e.name},"4".concat(t))}))]}),Object(h.jsxs)("p",{children:["Half Damage from: ",r.damage_relations.half_damage_from.map((function(e,t){return Object(h.jsx)("button",{className:"btn ".concat(e.name),children:e.name},"5".concat(t))}))]}),Object(h.jsxs)("p",{children:["Half Damage to: ",r.damage_relations.half_damage_to.map((function(e,t){return Object(h.jsx)("button",{className:"btn ".concat(e.name),children:e.name},"6".concat(t))}))]}),Object(h.jsxs)("p",{children:["No Damage from:",r.damage_relations.no_damage_from.map((function(e,t){return Object(h.jsx)("button",{className:"btn ".concat(e.name),children:e.name},"7".concat(t))}))]}),Object(h.jsxs)("p",{children:["No Damage to: ",r.damage_relations.no_damage_to.map((function(e,t){return Object(h.jsx)("button",{className:"btn ".concat(e.name),children:e.name},"8".concat(t))}))]})]})})},x=function(e){var t=e.name,n=e.url,a=Object(c.useState)(null),r=Object(b.a)(a,2),s=r[0],o=r[1];return Object(c.useEffect)((function(){fetch(n).then((function(e){return e.json()})).then((function(e){o(e)}))}),[n]),Object(h.jsx)("div",{className:"card shadow",children:s&&Object(h.jsxs)("div",{children:[Object(h.jsx)("img",{className:"image",alt:t,src:s.sprites.front_default}),Object(h.jsxs)("div",{children:[Object(h.jsx)("h2",{children:t}),Object(h.jsxs)("p",{children:["Pokedex number: ",s.id]}),Object(h.jsxs)("p",{children:["Height: ",s.height]}),Object(h.jsxs)("p",{children:["Wieght: ",s.weight]}),Object(h.jsxs)("p",{children:["Type: ",s.types.map((function(e,t){return Object(h.jsx)(f.a,{trigger:Object(h.jsx)("button",{className:"button ".concat(e.type.name),children:e.type.name},t),modal:!0,nested:!0,children:function(n){return Object(h.jsxs)("div",{className:"modal modal".concat(e.type.name),children:[Object(h.jsx)("button",{className:"close",onClick:n,children:"\xd7"}),Object(h.jsxs)("div",{className:"header",children:[" ",Object(h.jsx)("button",{className:"btn ".concat(e.type.name),children:e.type.name},"1".concat(t))," "]}),Object(h.jsxs)("div",{className:"content",children:[" ",Object(h.jsx)(O,{url:e.type.url},"2".concat(t))]}),Object(h.jsx)("div",{className:"actions"})]})}})}))]})]})]})})},p=function(e){var t=e.characters;return Object(h.jsx)("div",{children:t.map((function(e,t){return Object(h.jsx)(x,{name:e.name,url:e.url},t)}))})},g=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).onSearchChange=function(t){e.setState({searchfield:t.target.value})},e.state={characters:[],searchfield:""},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://pokeapi.co/api/v2/pokemon?limit=151&offset=0").then((function(e){return e.json()})).then((function(t){e.setState({characters:t.results})}))}},{key:"render",value:function(){var e=this.state,t=e.characters,n=e.searchfield,c=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return t.length?Object(h.jsxs)("div",{className:"tc container",children:[Object(h.jsx)("h1",{className:"f1",children:"Pokedex"}),Object(h.jsx)(u,{children:Object(h.jsx)(d,{searchChange:this.onSearchChange})}),Object(h.jsx)(m,{children:Object(h.jsx)(u,{children:Object(h.jsx)(p,{characters:c})})})]}):Object(h.jsx)("h1",{className:"tc",children:"Loading"})}}]),n}(a.a.Component),v=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,21)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),r(e),s(e)}))};s.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(g,{})}),document.getElementById("root")),v()}],[[20,1,2]]]);
//# sourceMappingURL=main.b81105a9.chunk.js.map