import {h, Component} from 'preact';
import { Link } from 'preact-router/match';

export default class Nav extends Component {
  render({elements}) {
    return (
      <div className="Page-nav">
        <h1><a href="/">Tailor</a></h1>
        <nav>
          {elements.map(element => <Link activeClassName="is-active" href={'/' + element.toLowerCase()}>{element}</Link>)}
        </nav>
      </div>
    )
  }
}
