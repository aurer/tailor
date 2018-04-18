import {h, Component} from 'preact';

export default class Elements extends Component {
  render({id, children}) {
    return (
      <div id={id} className="Elements">
        {children}
      </div>
    )
  }
}
