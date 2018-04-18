import {h, Component, render} from 'preact';

export default class Element extends Component {
  constructor({title, source, children}) {
    super();
    this.state = {
      showCode: false
    }
  }

  render({title, source, children}) {
    if (!source) {
      source = true;
    } else {
      source = 'false' ? false : true;
    }

    let sourceCode = children.map(vnode => prettyRender(vnode))

    return (
      <div className="Element">
        <div class="Element-title">
          <h3>{title}</h3>
          {source && <button class="Element-toggle" onClick={this.toggleCode.bind(this)}>{ this.state.showCode ? 'Hide' : 'Show'} source</button>}
        </div>
        {this.state.showCode || (
          <div class="Element-content">
            {children}
          </div>
        )}
        {source && this.state.showCode && (
          <pre class="Element-source">
            {sourceCode}
          </pre>
        )}
      </div>
    )
  }

  toggleCode() {
    let showCode = !this.state.showCode;
    this.setState({showCode});
  }
}

function prettyRender(VNode, depth) {
  depth = depth || 0;
  let tab = "  ";
  let tabs_before = tab;
  let tabs_after = "";
  for (let i = 0; i < depth; i ++) {
    tabs_before += tab;
    tabs_after += tab;
  }
  if (typeof VNode == 'string') {
    return VNode;
  }

  let node = document.createElement(VNode.nodeName);

  // Add attributes
  if (VNode.attributes) {
    for (let attr in VNode.attributes) {
      node.setAttribute(attr, VNode.attributes[attr]);
    }
  }


  if (VNode.children.length && typeof VNode.children[0] == 'string') {
    return node.outerHTML.replace("></", ">" + VNode.children[0] + "</") + "\n";
  }

  depth++;
  let child = "\n" + tabs_before + VNode.children.map(c => prettyRender(c, depth)).join(tabs_before).trim() + "\n" + tabs_after;
  return node.outerHTML.replace("></", `>${child}</`) + "\n";
}
