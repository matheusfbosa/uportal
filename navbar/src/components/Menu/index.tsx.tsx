import { useState, useEffect } from "react";
import { navigateToUrl } from "single-spa";

import List from "@material-ui/core/List";
import ListSubheader from "@material-ui/core/ListSubheader";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import LabelIcon from "@material-ui/icons/Label";

import listApps from "../../repositories/apps";

const Menu = ({ submenus }) => {
  const [menus, setMenus] = useState([]);

  useEffect(() => {
    listApps()
      .then((apps) => {
        setMenus(apps);
      })
      .catch((err) => {
        alert(err.message);
      });
  }, []);

  return (
    <>
      <List>
        {menus.map(({ id, name, url }) => (
          <ListItem button key={id}>
            <ListItemIcon>
              <LabelIcon />
            </ListItemIcon>
            <a style={{ color: "black" }} href={url} onClick={navigateToUrl}>
              <ListItemText primary={name} />
            </a>
          </ListItem>
        ))}
      </List>
      <ListSubheader inset>Submenus</ListSubheader>
      <List>
        {submenus &&
          submenus.map(({ id, name, url }) => (
            <ListItem button key={id}>
              <ListItemIcon>
                <LabelIcon />
              </ListItemIcon>
              <a style={{ color: "black" }} href={url} onClick={navigateToUrl}>
                <ListItemText primary={name} />
              </a>
            </ListItem>
          ))}
      </List>
    </>
  );
};

export default Menu;
