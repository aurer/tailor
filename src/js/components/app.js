import {h, Component} from 'preact';
import Router from 'preact-router';
import Nav from '../layout/nav';
import Buttons from './buttons';
import Colors from './colors';
import Forms from './forms';
import Grid from './grid';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      elements: [
        'Buttons',
        'Forms',
        'Colors',
        'Grid'
      ]
    }
  }

  render(props, {elements}) {
    return (
      <div class="Page">
        <Nav elements={elements} />
        <main className="Page-main">
          <Router>
            <Buttons path="buttons" />
            <Forms path="forms" />
            <Colors path="colors" />
            <Grid path="grid" />
          </Router>
        </main>
      </div>
    )
  }
}
