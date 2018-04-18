import {h, Component} from 'preact';

export default class Elements extends Component {
  render({children}) {
    return (
      <div className="Elements">
        {children}
      </div>
    )
  }
}
