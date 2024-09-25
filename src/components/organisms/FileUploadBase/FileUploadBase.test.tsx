import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';

import * as FileUploadBaseStories from './FileUploadBase.stories'; //👈  Our stories imported here
//👇 composeStories will process all information related to the component (e.g., args)
const { FileUploadBaseTemplate } = composeStories(FileUploadBaseStories);

describe('FileUploadBase', () => {
  test('renders the FileUploadBase', () => {
    render(
      <FileUploadBaseTemplate
        data-testid="custom-element"
        disabled={false}
        onFilesUploaded={(files) => {}}
      />
    );
    const element = screen.getByTestId('custom-element');
    expect(element).toBeInTheDocument();
  });
});
