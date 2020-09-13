// YourComponent.stories.js

import React from 'react';
import { Contact } from './Contact';

// This default export determines where you story goes in the story list
export default {
  title: 'Contact',
  component: Contact,
};

export const contact = () => <Contact />;

contact.storyname = "Contact";