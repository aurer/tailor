import {h, Component} from 'preact';
import Nav from '../layout/nav';
import Buttons from './buttons';
import Colors from './colors';
import Forms from './forms';
import Grids from './grids';

export default class App extends Component {
  render() {
    return (
      <div class="Page">
        <Nav />
        <main className="Page-main">
          <Grids />
          <Forms />
          <Buttons />
          <Colors />
        </main>
      </div>
    )
  }
}
