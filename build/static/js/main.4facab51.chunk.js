(this["webpackJsonppart2-puhelinluettelo-v3"]=this["webpackJsonppart2-puhelinluettelo-v3"]||[]).push([[0],{15:function(e,n,t){e.exports=t(38)},37:function(e,n,t){},38:function(e,n,t){"use strict";t.r(n);var a=t(0),o=t.n(a),u=t(14),c=t.n(u),r=t(4),l=t(2),i=t(3),s=t.n(i),m="https://tranquil-retreat-83953.herokuapp.com/api/persons",f=function(){return s.a.get(m)},d=function(e){return s.a.post(m,e)},h=function(e,n){return s.a.put("".concat(m,"/").concat(e),n)},p=function(e){return s.a.delete("".concat(m,"/").concat(e))},v=(t(37),function(e){var n=e.filtered,t=(e.persons,e.searchByName);return o.a.createElement("div",null,"Type name to filter:",o.a.createElement("input",{value:n,onChange:t}))}),g=function(e){var n=e.addPerson,t=e.newName,a=e.handleNameChange,u=e.newNum,c=e.handleNumChange;return o.a.createElement("div",null,o.a.createElement("h2",null,"Add new"),o.a.createElement("form",{onSubmit:n},o.a.createElement("div",null,"name: ",o.a.createElement("input",{value:t,onChange:a})),o.a.createElement("div",null,"number: ",o.a.createElement("input",{value:u,onChange:c})),o.a.createElement("div",null,o.a.createElement("button",{type:"submit"},"add"))))},b=function(e){var n=e.data,t=e.searchName,a=e.removeContact,u=n.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())})).map((function(e){return o.a.createElement("div",{key:e.id},e.name,", ",e.number," ",o.a.createElement("button",{onClick:function(){return a(e.id)}},"Delete"))}));return o.a.createElement("div",null,u)},E=function(e){var n=e.message,t=e.type;return o.a.createElement("div",{className:t},n)},w=function(){var e=Object(a.useState)([]),n=Object(l.a)(e,2),t=n[0],u=n[1],c=Object(a.useState)(""),i=Object(l.a)(c,2),s=i[0],m=i[1],w=Object(a.useState)(""),O=Object(l.a)(w,2),j=O[0],N=O[1],C=Object(a.useState)(""),S=Object(l.a)(C,2),y=S[0],T=S[1],k=Object(a.useState)(null),x=Object(l.a)(k,2),B=x[0],P=x[1],D=Object(a.useState)(null),J=Object(l.a)(D,2),L=J[0],q=J[1],A=function(){m(""),N("")};Object(a.useEffect)((function(){f().then((function(e){u(e.data)})).catch((function(e){console.log(e),P("Oops! Something went wrong..."),q("error"),setTimeout((function(){P(null),q(null)}),5e3)}))}),[]);var I=function(e,n){h(e,n).then((function(n){console.log("user updated",n.data),P("Contact updated."),q("success"),setTimeout((function(){P(null),q(null)}),5e3),u(t.map((function(t){return t.id===e?n.data:t})))})).catch((function(e){console.log(e),P("Oops! Something went wrong..."),q("error"),setTimeout((function(){P(null),q(null)}),5e3)}))};return o.a.createElement("div",null,o.a.createElement("h2",null,"Phonebook"),o.a.createElement(E,{message:B,type:L}),o.a.createElement(v,{filtered:y,persons:t,searchByName:function(e){console.log("filternames",e.target.value),T(e.target.value)}}),o.a.createElement(g,{addPerson:function(e){if(e.preventDefault(),void 0!==s&&""!==s){var n=t.filter((function(e){return e.name===s}));if(1!==n.length)d({name:s,number:j}).then((function(e){u(t.concat(e.data)),A(),P("New contact '".concat(s,"' added.")),q("success"),setTimeout((function(){P(null),q(null)}),5e3)})).catch((function(e){console.log(e),P("Oops! Something went wrong..."),q("error"),setTimeout((function(){P(null),q(null)}),5e3)}));else{if(window.confirm("".concat(s," is already added to phonebook, update a number?"))){console.log("existing",n);var a=Object(r.a)(Object(r.a)({},n[0]),{},{number:j});I(n[0].id,a)}A()}}},newName:s,handleNameChange:function(e){console.log("nc",e.target.value),m(e.target.value)},newNum:j,handleNumChange:function(e){N(e.target.value)}}),o.a.createElement("h2",null,"Numbers"),o.a.createElement(b,{data:t,searchName:y,removeContact:function(e){p(e).then((function(n){var a=t.filter((function(n){return n.id===e})).map((function(e){return e.name}));console.log("x",a),P("'".concat(a,"' was removed from contacts.")),q("success"),setTimeout((function(){P(null),q(null)}),5e3),u(t.filter((function(n){return n.id!==e})))})).catch((function(n){if(console.log(n),404===n.response.status)return u(t.filter((function(n){return n.id!==e}))),P("Contact has already been removed"),q("success"),void setTimeout((function(){P(null),q(null)}),5e3);P("Oops! Something went wrong..."),q("error"),setTimeout((function(){P(null),q(null)}),5e3)}))}}))};c.a.render(o.a.createElement(w,null),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.4facab51.chunk.js.map