// YourComponent.stories.js

import React from 'react';
import { Links } from './Links';

// This default export determines where you story goes in the story list
export default {
  title: 'Links',
  component: Links,
};

export const links = () => <Links />;

links.storyname = "Links";