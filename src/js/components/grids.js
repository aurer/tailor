import {h, Component} from 'preact';
import Elements from '../layout/elements';
import Element from '../layout/element';

export default class Grids extends Component {
  render() {
    return (
      <Elements>
        <Element title="Grid">
          <div className="Grid">
            <div className="Grid-cell u-size1of2"></div>
            <div className="Grid-cell u-size1of2"></div>
            <div className="Grid-cell u-size1of2"></div>
            <div className="Grid-cell u-size1of2"></div>
          </div>
        </Element>

        <Element title="Grid spaced">
          <div className="Grid Grid--spaced">
            <div className="Grid-cell u-size1of2"></div>
            <div className="Grid-cell u-size1of2"></div>
            <div className="Grid-cell u-size1of2"></div>
            <div className="Grid-cell u-size1of2"></div>
          </div>
        </Element>
      </Elements>
    )
  }
}
