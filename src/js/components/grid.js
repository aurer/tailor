import {h, Component} from 'preact';
import Elements from '../layout/elements';
import Element from '../layout/element';

export default class Grid extends Component {
  render() {
    const cell = <div className="Grid-cell u-size1of2"></div>
    return (
      <Elements id="Grid">
        <Element title="Grid">
          <div className="Grid">
            {[1,2,3,4].map(i => cell)}
          </div>
        </Element>

        <Element title="Grid spaced">
          <div className="Grid Grid--spaced">
            {[1,2,3,4].map(i => cell)}
          </div>
        </Element>

        <Element title="Grid spaced horizontally">
          <div className="Grid Grid--spacedHorizontally">
            {[1,2,3,4].map(i => cell)}
          </div>
        </Element>

        <Element title="Grid spaced vertically">
          <div className="Grid Grid--spacedVertically">
            {[1,2,3,4].map(i => cell)}
          </div>
        </Element>
      </Elements>
    )
  }
}
