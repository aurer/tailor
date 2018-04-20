import {h, Component} from 'preact';
import Elements from '../layout/elements';
import Element from '../layout/element';

export default class Forms extends Component {
  render() {
    return (
      <Elements id="Forms">
        <Element title="Form">
          <form class="Form" onSubmit={this.handleSubmit}>
            <fieldset>
              <legend>Form legend</legend>
              <div class="Form-field">
                <label>Name</label>
                <div class="Form-inputs">
                  <input type="text" placeholder="e.g. John Smith" />
                </div>
              </div>
              <div class="Form-field">
                <label>Email</label>
                <div class="Form-inputs">
                  <input type="email" placeholder="e.g. johnsmith@example.com" />
                </div>
              </div>
              <input class="Button Button--primary" type="submit" />
            </fieldset>
          </form>
        </Element>

        <Element title="Inline form">
          <form class="Form Form--inline" onSubmit={this.handleSubmit}>
            <div class="Form-field">
              <label>Username</label>
              <div class="Form-inputs">
                <input type="text" />
              </div>
            </div>
            <div class="Form-field">
              <label>Password</label>
              <div class="Form-inputs">
                <input type="password" />
              </div>
            </div>
            <div class="Form-field">
              <div class="Form-inputs">
                <button type="submit">Log in</button>
              </div>
            </div>
          </form>
        </Element>

        <Element title="Checkboxes">
          <form class="Form">
            <div class="Form-field">
              <label>Select some</label>
              <div class="Form-inputs Form-inputs--inline">
                <label>
                  <input type="checkbox" />Yes
                </label>
                <label>
                  <input type="checkbox" />No
                </label>
                <label>
                  <input type="checkbox" />I dont know
                </label>
              </div>
            </div>
          </form>
        </Element>

        <Element title="Radios">
          <form class="Form">
            <div class="Form-field">
              <label>Select one</label>
              <div class="Form-inputs Form-inputs--inline">
                <label>
                  <input type="radio" name="radio" value="1"/>Yes
                </label>
                <label>
                  <input type="radio" name="radio" value="2"/>No
                </label>
                <label>
                  <input type="radio" name="radio" value="3"/>I dont know
                </label>
              </div>
            </div>
          </form>
        </Element>
      </Elements>
    )
  }

  handleSubmit(e) {
    e.preventDefault();
  }
}
