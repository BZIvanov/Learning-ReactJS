import React from 'react';

class TreeView extends React.PureComponent {
  render() {
    const { collapsed, nodeLabel, children } = this.props;

    return (
      <div>
        <div>
          <div
            className={`arrow ${collapsed ? 'arrow-collapsed' : ''}`}
            onClick={this.props.onClick}
          />
          <span>{nodeLabel}</span>;
        </div>
        <div className={`children ${collapsed ? 'children-collapsed' : ''}`}>
          {collapsed ? null : children}
        </div>
      </div>
    );
  }
}

export default TreeView;
