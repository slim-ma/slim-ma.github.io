// No localStorage caching to view changes
document.addEventListener('DOMContentLoaded', () => {
  const isFirefox = 'MozAppearance' in document.documentElement.style;
  console.log("** M-ICON dev-mode: Icon loading is not cached **")
});

async function fetchIcon(name) {
  if (!name) return '';

  const res = await fetch(`./svg/${name}.svg`);
  const string = await res.text();
  return string;
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

class IconDisplay extends HTMLElement {
  static observedAttributes = ["name"];
  async connectedCallback() {
    const name = this.getAttribute('name');
    const content = document.createElement('m-icon');
    content.setAttribute('name', name);
    this.appendChild(content);
  }
}

customElements.define('icon-display', IconDisplay);

