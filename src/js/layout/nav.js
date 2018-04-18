import {h, Component} from 'preact';

export default class Nav extends Component {
  render() {
    return (
      <nav className="Page-nav">
        <a href="#Buttons">Buttons</a>
        <a href="#Colors">Colors</a>
        <a href="#Grid">Grid</a>
        <a href="#Lists">Lists</a>
        <a href="#Media">Media</a>
        <a href="#Messages">Messages</a>
        <a href="#Tables">Tables</a>
        <a href="#Text">Text</a>
      </nav>
    )
  }
}
