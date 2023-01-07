import {default as data} from '/ModuleLab/js/data/ModuleDatabase.js';

function appendHtml(el, str) {
    var div = document.createElement('div');
    div.innerHTML = str;
    while (div.children.length > 0) {
      el.appendChild(div.children[0]);
    }
}


const page = document.querySelector("#page")

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

const _module = data[id];

document.querySelector("#title").textContent = _module.title;

_module.html.forEach(element => {
    appendHtml(page, element)
});