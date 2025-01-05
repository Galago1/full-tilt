import initStoryshots from '@storybook/addon-storyshots';
import { render as renderer } from '@testing-library/react';

initStoryshots({
  // storyKindRegex: /^Atoms\/Avatar$/,
  // storyKindRegex: /^Molecules\/Dropdown\/Dropdown Menu/,
  // storyKindRegex: /^Templates\/Collection/,
  // storyKindRegex: /^Atoms\/Input Base\/Date Picker Input Base/
  renderer
});
