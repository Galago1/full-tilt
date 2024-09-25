import { fireEvent, render, screen, waitFor } from '@testing-library/react';

import { composeStories } from '@storybook/testing-react';
import * as ImageUploadStories from './ImageUpload.stories'; //👈  Our stories imported here
//👇 composeStories will process all information related to the component (e.g., args)
const { Default } = composeStories(ImageUploadStories);

import { Formik } from 'formik';
import ImageUpload from './ImageUpload';

describe('ImageUpload', () => {
  const renderForm = () => (
    <Formik initialValues={{ image: '' }} onSubmit={jest.fn()}>
      {(formikProps) => (
        <ImageUpload formProps={formikProps} skeletonImageProps={{}} />
      )}
    </Formik>
  );

  it('renders the component without crashing', () => {
    render(renderForm());
    const title = screen.getByText(/Click to upload a photo/i);
    expect(title).toBeInTheDocument();
  });

  it('shows the image cropper after selecting an image', async () => {
    const { getByTestId } = render(renderForm());

    const fileInput = getByTestId('file-input');
    const file = new File(['image'], 'image.png', { type: 'image/png' });

    fireEvent.change(fileInput, { target: { files: [file] } });

    // Wait for the image to be loaded and processed
    await waitFor(() => screen.getByText('Set'));

    const setButton = screen.getByText('Set');
    expect(setButton).toBeInTheDocument();
  });

  xit('shows the cropped image and replace button after setting the cropped area', async () => {
    const { getByTestId } = render(renderForm());

    const fileInput = getByTestId('file-input');
    const file = new File(['image'], 'image.png', { type: 'image/png' });

    fireEvent.change(fileInput, { target: { files: [file] } });

    // Wait for the image to be loaded and processed
    await waitFor(() => screen.getByText('Set'));

    const setButton = screen.getByText('Set');
    fireEvent.click(setButton);

    // Wait for the cropped image to be processed
    await waitFor(() => screen.getByText('Replace'));

    const replaceButton = screen.getByText('Replace');
    expect(replaceButton).toBeInTheDocument();
  });
});
