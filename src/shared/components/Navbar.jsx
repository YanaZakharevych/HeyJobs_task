import React from 'react'
import { NavLink } from 'react-router-dom'
import AppBar from 'material-ui/AppBar';

const linkStyle = {
    textDecoration: 'none',
    color: 'white',
};

export const Navbar = (props) => (
    <div>
      <AppBar
          title={(
              <NavLink style={linkStyle} to={'/'} >Job Fabrik</NavLink>
          )}
          iconElementLeft={<div />}
      />
    </div>
);