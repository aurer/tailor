import {h, Component} from 'preact';
import Elements from '../layout/elements';
import Element from '../layout/element';

export default class Grid extends Component {
  render() {
    const cell = cell
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
          <div className="Grid Grid--spacedSm">
            {[1,2,3,4].map(i => cell)}
          </div>
          <div className="Grid Grid--spacedXs">
            {[1,2,3,4].map(i => cell)}
          </div>
        </Element>

        <Element title="Grid spaced vertically">
          <div className="Grid Grid--spacedVertically">
            {[1,2,3,4].map(i => cell)}
          </div>
        </Element>

        <Element title="Grid spaced horizonally">
          <div className="Grid Grid--spacedHorizontally">
            {[1,2,3,4].map(i => cell)}
          </div>
        </Element>

        <Element title="CSSGrid">
          <div className="CSSGrid">
            {[1,2,3,4].map(i => <div className="Grid-cell"></div>)}
          </div>
        </Element>
      </Elements>
    )
  }
}
