// YourComponent.stories.js

import React from 'react';
import { About } from './About';

// This default export determines where you story goes in the story list
export default {
  title: 'About',
  component: About,
};

export const about = () => <About />;

about.storyname = "About";