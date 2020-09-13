// YourComponent.stories.js

import React from 'react';
import { Menu } from './Menu';

// This default export determines where you story goes in the story list
export default {
  title: 'Menu',
  component: Menu,
};

export const menu = () => <Menu />;

menu.storyname = "Menu";