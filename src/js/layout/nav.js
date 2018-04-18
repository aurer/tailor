import {h, Component} from 'preact';

export default class Nav extends Component {
  render({elements}) {
    return (
      <nav className="Page-nav" onClick={this.navigate.bind(this)}>
        {elements.map(element => <a href={'#'+element}>{element}</a>)}
      </nav>
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
  }
}
