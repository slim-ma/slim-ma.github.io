// use local storage with "mIcon" prepended
async function fetchIcon(name) {
  if (!name) return '';
  const key = `mIcon-${name}`;
  const cachedValue = localStorage.getItem(key);
  if (cachedValue !== null) return cachedValue;

  const res = await fetch(`./svg/${name}.svg`);
  const string = await res.text();
  localStorage.setItem(key, string);
  return localStorage.getItem(key);
}

class Icon extends HTMLElement {
  static observedAttributes = ["name"];
  async connectedCallback() {
    const name = this.getAttribute('name');
    const markup = await fetchIcon(name);
    this.innerHTML = markup;
  }
}

customElements.define('m-icon', Icon);
