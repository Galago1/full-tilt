import initStoryshots from '@storybook/addon-storyshots';
import { render as renderer } from '@testing-library/react';

initStoryshots({
  // storyKindRegex: /^Atoms\/Avatar$/,
  // storyKindRegex: /^Molecules\/Dropdown\/Dropdown Menu/,
  // storyKindRegex: /^Templates\/Collection/,
  renderer
});
