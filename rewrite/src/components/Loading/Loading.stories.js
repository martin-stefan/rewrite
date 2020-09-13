// YourComponent.stories.js

import React from 'react';
import { Loading } from './Loading';

// This default export determines where you story goes in the story list
export default {
  title: 'Loading',
  component: Loading,
};

export const loading = () => <Loading />;

loading.storyname = "Loading";