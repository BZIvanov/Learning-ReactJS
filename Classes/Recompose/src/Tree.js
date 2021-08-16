import React from 'react';
import { withState, withHandlers, compose } from 'recompose';
import TreeView from './TreeView';
import './tree.css';

const Tree = ({ collapsedNodes, onHandleClick, onCollapseAll, options }) => (
  <div>
    <button onClick={onCollapseAll}>Collapse all</button>

    {options.map((node, i) => (
      <TreeView
        key={i}
        nodeLabel={node.parent}
        collapsed={collapsedNodes[i]}
        onClick={() => onHandleClick(i)}
      >
        {node.children.map((entry) => (
          <div key={entry}>{entry}</div>
        ))}
      </TreeView>
    ))}
  </div>
);

export default compose(
  withState('collapsedNodes', 'setCollapsedNodes', (props) =>
    props.options.map(() => false)
  ),
  withHandlers({
    onHandleClick:
      ({ collapsedNodes, setCollapsedNodes }) =>
      (index) => {
        collapsedNodes[index] = !collapsedNodes[index];
        setCollapsedNodes(collapsedNodes);
      },
    onCollapseAll:
      ({ collapsedNodes, setCollapsedNodes }) =>
      () => {
        setCollapsedNodes(collapsedNodes.map(() => true));
      },
  })
)(Tree);
