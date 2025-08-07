import React from 'react';
import { Menu, Input, Button } from 'semantic-ui-react';

const Header = () => {
  return (
    <Menu borderless size="large" style={{ padding: '1rem' }}>
      <Menu.Item header>DEV@Deakin</Menu.Item>

      <Menu.Item style={{ flex: 1 }}>
        <Input icon="search" placeholder="Search..." fluid />
      </Menu.Item>

      <Menu.Item position="right">
        <Button primary style={{ marginRight: '0.5rem' }}>Post</Button>
        <Button>Login</Button>
      </Menu.Item>
    </Menu>
  );
};

export default Header;

