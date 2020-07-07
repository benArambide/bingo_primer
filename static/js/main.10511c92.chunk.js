(this.webpackJsonpbingo_filler=this.webpackJsonpbingo_filler||[]).push([[0],{13:function(e,t,a){e.exports=a(19)},18:function(e,t,a){},19:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(11),c=a.n(r),i=(a(18),a(12)),o=a(2),s=a(8),m=function(e){var t=e.className,a=e.children;return l.a.createElement("div",{className:"cell border-solid border-4 p-4 text-4xl font-bold ".concat(t)},a)},u=function(e){var t=e.className,a=e.cell,n=e.cellUpdated;return l.a.createElement(m,{className:"cell-number ".concat(a.selected&&!a.edit?"cell-selected":""," ").concat(a.free?"bg-gray-400":"bg-white"," ").concat(t)},l.a.createElement("div",{className:"cell-number-content flex items-center justify-center"},a.edit&&!a.free?l.a.createElement("input",{className:"text-4xl w-full text-center",onChange:function(e){return t=e.target.value,void n(Object(o.a)(Object(o.a)({},a),{},{value:t}));var t},value:a.value}):l.a.createElement("span",null,a.value),a.free?l.a.createElement("div",null,l.a.createElement("p",{className:"text-sm p-2"},"Espacio Libre")):""),!a.edit&&a.value?l.a.createElement("button",{className:"bg-red-300 hover:bg-red-400 rounded-full inline-flex items-center w-5 h-5 cell-select-button",onClick:function(){n(Object(o.a)(Object(o.a)({},a),{},{selected:!a.selected}))},title:"".concat(a.selected?"Desmarcar":"Marcar")}):"")},d=a(20),b=function(e){var t=e.className,a=e.onCellUpdated,n=e.numbers;return l.a.createElement("div",{className:"card ".concat(t)},l.a.createElement("div",{className:"flex flex-wrap"},Object(d.a)((function(e,t){return l.a.createElement(m,{className:"w-1/5 text-center card-header",key:t},l.a.createElement("span",{className:"text-white"},e))}),["B","I","N","G","O"]),Object(d.a)((function(e,t){return l.a.createElement(u,{className:"w-1/5 text-center",cell:e,cellUpdated:a,key:t})}),n)))},f=function(e){var t=e.toggleEditMode,a=e.editModeActive,n=e.cleanSelection,r=e.cleanAll;return l.a.createElement("div",null,l.a.createElement("button",{className:"bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center mr-2 mb-2",onClick:function(){return t()}},a?"Cancelar Edici\xf3n":"Editar Cartilla"),l.a.createElement("button",{className:"bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center mr-2 mb-2",onClick:function(){return n()}},"Limpiar Selecci\xf3n"),l.a.createElement("button",{className:"bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center  mb-2",onClick:function(){return r()}},"Limpiar Todo"))},g=function(e){var t=e.className;return l.a.createElement("div",{className:"".concat(t)},l.a.createElement("h1",{className:"text-4xl font-bold"},"Cartilla de BINGO"),l.a.createElement("p",{className:"mb-4"},"Ahora puede jugar BINGO de manera virtual, llene la cartilla con sus n\xfameros asignados, puede seleccionar los n\xfameros en la cartilla y revisar si es el ganador."),l.a.createElement("div",{className:"pl-6"},l.a.createElement("ul",{className:"list-disc "},l.a.createElement("li",null,l.a.createElement("strong",null,"Editar Cartilla:")," Activa el modo edici\xf3n para que usted pueda cambiar el valor de los n\xfameros."),l.a.createElement("li",null,l.a.createElement("strong",null,"Limpiar Selecci\xf3n:")," Elimina la selecci\xf3n de todos los n\xfameros."),l.a.createElement("li",null,l.a.createElement("strong",null,"Limpiar Todo:")," Elimina todos los n\xfameros, incluida su selecci\xf3n."),l.a.createElement("li",null,l.a.createElement("button",{className:"bg-red-300 hover:bg-red-400 rounded-full inline-flex items-center w-5 h-5"})," Presiona el bot\xf3n rojo para seleccionar el n\xfamero."))))},v=a(21),E=a(22),p=function(){return Object(d.a)((function(e){return{index:e,edit:!1,value:"",selected:!1,free:12===e}}),Object(E.a)(0,25))},N=function(e){return JSON.parse(sessionStorage.getItem(e))},x=function(e,t){var a=N()||{};sessionStorage.setItem(t,JSON.stringify(Object(o.a)(Object(o.a)({},a),e)))},O=function(e){var t=N(e);return null===t?{numbers:p(),editModeActive:!1}:t},j=function(){var e=Object(n.useState)(Object(v.a)("numbers",O("bingo-filler"))),t=Object(s.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(Object(v.a)("editModeActive",O("bingo-filler"))),m=Object(s.a)(c,2),u=m[0],E=m[1];return l.a.createElement("div",{className:"flex flex-wrap bg-gray-100"},l.a.createElement("div",{className:"w-full md:w-1/2 p-6"},l.a.createElement(g,{className:"mb-8"}),l.a.createElement(f,{toggleEditMode:function(){var e=!u,t=Object(d.a)((function(t){return Object(o.a)(Object(o.a)({},t),{},{edit:e})}),a);r(t),E(e),x({numbers:t,editModeActive:e},"bingo-filler")},editModeActive:u,cleanSelection:function(){var e=Object(d.a)((function(e){return Object(o.a)(Object(o.a)({},e),{},{selected:!1})}),a);r(e),x({numbers:e},"bingo-filler")},cleanAll:function(){var e=p();r(e),x({numbers:e},"bingo-filler")}})),l.a.createElement("div",{className:"w-full md:w-1/2 flex flex-justify-center items-center pt-6 pb-6"},l.a.createElement(b,{className:"w-4/5 mx-auto",onCellUpdated:function(e){var t=Object(i.a)(a);t[e.index]=e,r(t),x({numbers:t},"bingo-filler")},numbers:a})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(j,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[13,1,2]]]);
//# sourceMappingURL=main.10511c92.chunk.js.map