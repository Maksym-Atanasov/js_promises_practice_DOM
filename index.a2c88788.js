var e=document.querySelector("body");function n(n,t){var o=document.createElement("div");o.setAttribute("data-qa","notification"),o.className=t,o.textContent=n,e.append(o)}new Promise(function(e,n){document.addEventListener("click",function(){e()}),setTimeout(function(){n(Error())},3e3)}).then(function(){return n("First promise was resolved!","success")}).catch(function(){return n("First promise was rejected!","error")}),new Promise(function(e,n){document.addEventListener("click",function(n){0===n.button&&2!==n.button&&e()}),document.addEventListener("contextmenu",function(){e()})}).then(function(){n("Second promise was resolved!","success")});var t=!1,o=!1;new Promise(function(e){document.addEventListener("mousedown",function(n){0===n.button&&(t=!0),2===n.button&&(o=!0),t&&o&&e()})}).then(function(){n("Third promise was resolved!","success")});
//# sourceMappingURL=index.a2c88788.js.map
