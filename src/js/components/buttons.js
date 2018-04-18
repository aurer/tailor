import {h, Component} from 'preact';
import Elements from '../layout/elements';
import Element from '../layout/element';

export default class Buttons extends Component {
  render() {
    return (
      <Elements>
        <Element title="Buttons">
          <a class="Button">Default</a>
          <a class="Button Button--primary">Primary</a>
          <a class="Button Button--secondary">Secondary</a>
          <a class="Button Button--neutral">Neutral</a>
        </Element>
        <Element title="Button elements">
          <a class="Button">Link element</a>
          <button class="Button">Button element</button>
          <input class="Button" type="submit" value="Form submit" />
        </Element>
      </Elements>
    )
  }
}
