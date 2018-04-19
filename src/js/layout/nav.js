import {h, Component} from 'preact';

export default class Nav extends Component {
  render({elements}) {
    return (
      <div className="Page-nav" onClick={this.navigate.bind(this)}>
        <h1><a href="/">Tailor</a></h1>
        <nav>
          {elements.map(element => <a href={'#'+element}>{element}</a>)}
        </nav>
      </div>
    )
  }

  navigate(e) {
    let node = e.target;
    if (node.nodeName == 'A') {
      let id = node.getAttribute('href');
      let target = document.querySelector(id)
      if (target) {
        target.scrollIntoView();
      }
    }
    e.preventDefault();
  }
}
