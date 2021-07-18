import { useState, useEffect } from "react";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import LabelIcon from "@material-ui/icons/Label";

import listProducts from "../repositories/products";

const Menu = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    listProducts()
      .then((products) => {
        setProducts(products);
      })
      .catch((err) => {
        // eslint-disable-next-line no-alert
        alert(err.message);
      });
  }, []);

  return (
    <>
      <List>
        {products.map(({ id, name }) => (
          <ListItem button key={id}>
            <ListItemIcon>
              <LabelIcon />
            </ListItemIcon>
            <ListItemText primary={name} />
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default Menu;
