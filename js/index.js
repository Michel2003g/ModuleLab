import {default as data} from '/ModuleLab/js/data/ModuleDatabase.js';

const target = document.querySelector("#modules-container")

function MakeCard (data) {
  const card = document.createElement("div");

  const title = document.createElement("p");
  const icon = document.createElement("img");
  const description = document.createElement("p");
  const link_button = document.createElement("a");

  card.classList.add("module-card");
  title.classList.add("title");
  icon.classList.add("text-icon");
  description.classList.add("description");
  link_button.classList.add("button");
  link_button.classList.add("card-button");

  title.innerText = data.title
  icon.src = data.icon
  description.innerText = data.description
  link_button.href = "/ModuleLab/Module.html?id=" + data.id
  link_button.innerText = "Documentation"

  title.appendChild(icon);
  card.append(title, description, link_button);
  target.appendChild(card);
}

Object.keys(data).forEach(key => {
  const card_data = data[key];
  MakeCard(card_data);
});