import {h, Component} from 'preact';
import Elements from '../layout/elements';
import Element from '../layout/element';

export default class Options extends Component {
  render() {
    return (
      <Elements id="Options">
        <Element title="Fonts">
					<style>
						font-family: $font-primary;
					</style>
        </Element>

				<Element title="Widths">

				</Element>

				<Element title="Spacing">

				</Element>

				<Element title="Colors">

				</Element>
      </Elements>
    )
  }
}
