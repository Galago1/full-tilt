import { render, screen, fireEvent } from '@testing-library/react';

import { composeStories } from '@storybook/testing-react';
import * as UploadAvatarStories from './UploadAvatar.stories'; //👈  Our stories imported here
//👇 composeStories will process all information related to the component (e.g., args)
const { DefaultImg } = composeStories(UploadAvatarStories);

// import UploadAvatar from './UploadAvatar';
// import { Formik, Form, Field } from 'formik';

describe('UploadAvatar', () => {
  it('renders image buttons for DefaultImg', () => {
    render(<DefaultImg />);
    const img = screen.getByRole('img');
    expect(img).toBeVisible();
  });
});

// describe('UploadAvatar', () => {
//   const initialValues = {
//     avatar: ''
//   };
//   function FileListItems(files) {
//     var b = new ClipboardEvent('').clipboardData || new DataTransfer();
//     for (var i = 0, len = files.length; i < len; i++) b.items.add(files[i]);
//     return b.files;
//   }

//   const renderComponent = () =>
//     render(
//       <Formik initialValues={initialValues} onSubmit={() => {}}>
//         <Form>
//           <Field component={UploadAvatar} />
//         </Form>
//       </Formik>
//     );

//   it('updates the avatar image when the edit icon is clicked', async () => {
//     const file = new File(['test-image'], 'test-image.png', {
//       type: 'image/png'
//     });
//     const fileInput: any = document.createElement('input');
//     fileInput.type = 'file';
//     fileInput.files = new FileListItems([file]);

//     renderComponent();
//     const editIcon = screen.getByRole('button');
//     fireEvent.click(editIcon);

//     Object.defineProperty(fileInput, 'files', {
//       value: [file]
//     });

//     fireEvent.change(fileInput);
//     await screen.findByAltText('avatar');
//     expect(screen.getByAltText('avatar')).toHaveAttribute(
//       'src',
//       expect.any(String)
//     );
//   });
// });
