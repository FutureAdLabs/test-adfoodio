import React from 'react';

import {
  Link
} from "react-router-dom";

import clsx from 'clsx';
import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles';
import Drawer, { DrawerProps } from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import PeopleIcon from '@material-ui/icons/People';
import CategoryIcon from '@material-ui/icons/Category';
import AddBoxOutlinedIcon from '@material-ui/icons/AddBoxOutlined';
import ListAltOutlinedIcon from '@material-ui/icons/ListAltOutlined';
import PermMediaOutlinedIcon from '@material-ui/icons/PhotoSizeSelectActual';

import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

import { Omit } from '@material-ui/types';


const categories = [
  {
    id: 'Food',
    iconItem: <CategoryIcon />,
    children: [
      { childId: 'New Food', icon: <AddBoxOutlinedIcon />, active: true, url: '/newfood' },
      { childId: 'List Food', icon: <ListAltOutlinedIcon />, url: '/listfood' },
    ],
  },
  {
    id: 'Costumer',
    iconItem: <PeopleIcon />,
    children: [
      { childId: 'New Costumer', icon: <AddBoxOutlinedIcon />, active: true, url: '/new_category' },
      { childId: 'List Costumer', icon: <ListAltOutlinedIcon />, url: '/new_category' },
    ],
  },
];

const styles = (theme: Theme) =>
  createStyles({
    categoryHeader: {
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
    },
    categoryHeaderPrimary: {
      color: theme.palette.common.white,
    },
    item: {
      paddingTop: 1,
      paddingBottom: 1,
      color: 'rgba(255, 255, 255, 0.7)',
      '&:hover,&:focus': {
        backgroundColor: 'rgba(255, 255, 255, 0.08)',
      },
    },
    itemCategory: {
      backgroundColor: '#232f3e',
      boxShadow: '0 -1px 0 #404854 inset',
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
    },
    firebase: {
      fontSize: 24,
      color: theme.palette.common.white,
    },
    itemActiveItem: {
      color: '#4fc3f7',
    },
    itemPrimary: {
      fontSize: 'inherit',
    },
    itemIcon: {
      minWidth: 'auto',
      marginRight: theme.spacing(2),
    },
    divider: {
      marginTop: theme.spacing(2),
    },
    nested: {
      paddingLeft: theme.spacing(4),
    },
  });

export interface NavigatorProps extends Omit<DrawerProps, 'classes'>, WithStyles<typeof styles> { }

function Navigator(props: NavigatorProps) {
  const { classes, ...other } = props;

  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <Drawer variant="permanent" {...other}>
      <List disablePadding>
        <ListItem className={clsx(classes.firebase, classes.item, classes.itemCategory)}>
          Adfoodio
        </ListItem>

        {categories.map(({ id, iconItem, children }) => (
          <React.Fragment key={id}>
            <ListItem
              button
              onClick={handleClick}
              className={classes.categoryHeader}
            >
              <ListItemIcon className={classes.itemIcon}>{iconItem}</ListItemIcon>
              <ListItemText
                classes={{
                  primary: classes.categoryHeaderPrimary,
                }}
              >
                {id}
              </ListItemText>
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>


            {children.map(({ childId, icon, active, url }) => (
              <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <Link to={url} >
                    <ListItem
                      key={childId}
                      button
                      className={clsx(classes.item, active && classes.itemActiveItem, classes.nested)}
                    >
                      <ListItemIcon className={classes.itemIcon}>{icon}</ListItemIcon>
                      <ListItemText
                        classes={{
                          primary: classes.itemPrimary,
                        }}
                      >
                        {childId}
                      </ListItemText>

                    </ListItem>
                  </Link>
                </List>
              </Collapse>
            ))}
          </React.Fragment>
        ))}
      </List>
    </Drawer>
  );
}

export default withStyles(styles)(Navigator);