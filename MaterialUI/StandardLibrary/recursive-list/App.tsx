import { useState, Fragment } from "react";
import {
  List,
  ListSubheader,
  ListItemButton,
  ListItemText,
  Collapse,
} from "@mui/material"; // 7.1.0
import { ExpandLess, ExpandMore } from "@mui/icons-material"; // 7.1.0

import data, { type ListItemData } from "./data";

const App = () => {
  const [open, setOpen] = useState<Record<string, boolean>>({});

  const handleClick = (id: string) => {
    setOpen((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const renderRow = (listItem: ListItemData, level: number) => {
    const hasNestedItems = listItem.items.length > 0;

    return (
      <Fragment key={listItem.id}>
        <ListItemButton
          onClick={() => handleClick(listItem.id)}
          sx={{ paddingLeft: level * 2 }}
        >
          <ListItemText primary={listItem.name} />
          {hasNestedItems &&
            (open[listItem.id] ? <ExpandLess /> : <ExpandMore />)}
        </ListItemButton>

        {hasNestedItems && (
          <Collapse in={open[listItem.id]} timeout="auto" unmountOnExit={true}>
            <List component="div">
              {listItem.items.map((nestedListItem) => {
                return renderRow(nestedListItem, level + 1);
              })}
            </List>
          </Collapse>
        )}
      </Fragment>
    );
  };

  return (
    <List
      sx={{ width: "100%", maxWidth: 360, bgcolor: "lightgray" }}
      component="nav"
      subheader={
        <ListSubheader component="div">Nested List Items</ListSubheader>
      }
    >
      {data.map((row) => renderRow(row, 0))}
    </List>
  );
};

export default App;
