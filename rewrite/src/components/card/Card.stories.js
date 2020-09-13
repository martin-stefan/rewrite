// YourComponent.stories.js

import React from 'react';
import { Card } from './Card';

// This default export determines where you story goes in the story list
export default {
  title: 'Card',
  component: Card,
};

export const jobCard = () => <Card />;

jobCard.storyname = "Card";