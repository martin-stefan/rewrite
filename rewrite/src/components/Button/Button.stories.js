// YourComponent.stories.js

import React from 'react';
import { Button } from './Button';

// This default export determines where you story goes in the story list
export default {
  title: 'Button',
  component: Button,
};

export const button = () => <Button />;

button.storyname = "Button";