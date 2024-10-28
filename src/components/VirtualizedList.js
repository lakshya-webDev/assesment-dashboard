import React from 'react';
import { FixedSizeList as List } from 'react-window';

const Row = ({ index, style }) => (
  <div style={style} className="p-2 border-b">
    Row {index}
  </div>
);

const VirtualizedList = ({ itemCount }) => (
  <List
    height={400}
    itemCount={itemCount}
    itemSize={35}
    width="100%"
  >
    {Row}
  </List>
);

export default VirtualizedList;