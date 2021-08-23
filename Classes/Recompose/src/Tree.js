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

// compose help us to have easier to read hierarchy of components, instead of something like comp1(comp2(comp3()))
// compose from recompose is similar to compose from redux
// every parameter for compose is HOC and every next parameter is wrapped by the previous
// the Tree component in this example will collect all the state from all the previous HOCs
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
