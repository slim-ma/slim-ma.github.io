const cache = {};
async function fetchIcon(name) {
  if (!name) return '';
  if (cache[name]) return cache[name];

  const res = await fetch(`https://slim-ma.github.io/svg/${name}.svg`, {
    method: 'GET',
    mode: 'cors',
  });
  cache[name] = await res.text();
  return cache[name];
}

class Icon extends HTMLElement {
  static observedAttributes = ["name"];
  constructor() {
    super();
  }
  async connectedCallback() {
    const name = this.getAttribute('name');
    console.log(name);
    const markup = await fetchIcon(name);
    this.innerHTML = markup;
  }
}

customElements.define('m-icon', Icon);
