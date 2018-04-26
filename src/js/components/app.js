import {h, Component} from 'preact';
import Router from 'preact-router';
import Nav from '../layout/nav';
import Buttons from './buttons';
import Forms from './forms';
import Grid from './grid';
import Options from './options';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      elements: [
        'Buttons',
        'Forms',
        'Colors',
        'Grid',
        'Options'
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
            <Grid path="grid" />
            <Options path="options" />
          </Router>
        </main>
      </div>
    )
  }
}
