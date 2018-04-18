import {h, Component} from 'preact';
import Elements from '../layout/elements';
import Element from '../layout/element';

export default class Colors extends Component {
  render() {
    return (
      <Elements>
        <Element title="Primary colors" source="false">
          <div class="Color Color--primary-lighter">$color-primary-lighter</div>
          <div class="Color Color--primary-light">$color-primary-light</div>
          <div class="Color Color--primary">$color-primary</div>
          <div class="Color Color--primary-dark">$color-primary-dark</div>
          <div class="Color Color--primary-dark">$color-primary-darker</div>
        </Element>
        <Element title="Secondary colors" source="false">
          <div class="Color Color--secondary-lighter">$color-secondary-lighter</div>
          <div class="Color Color--secondary-light">$color-secondary-light</div>
          <div class="Color Color--secondary">$color-secondary</div>
          <div class="Color Color--secondary-dark">$color-secondary-dark</div>
          <div class="Color Color--secondary-dark">$color-secondary-darker</div>
        </Element>
        <Element title="Neutral colors" source="false">
          <div class="Color Color--white">$color-white</div>
          <div class="Color Color--neutral-lighter">$color-neutral-lighter</div>
          <div class="Color Color--neutral-light">$color-neutral-light</div>
          <div class="Color Color--neutral">$color-neutral</div>
          <div class="Color Color--neutral-dark">$color-neutral-dark</div>
          <div class="Color Color--neutral-dark">$color-neutral-darker</div>
          <div class="Color Color--black">$color-blacker</div>
        </Element>
        <Element title="Message colors" source="false">
          <div class="Color Color--message-info">$color-message-info</div>
          <div class="Color Color--message-success">$color-message-success</div>
          <div class="Color Color--message-warning">$color-message-warning</div>
          <div class="Color Color--message-error">$color-message-errorer</div>
        </Element>
      </Elements>
    )
  }
}
