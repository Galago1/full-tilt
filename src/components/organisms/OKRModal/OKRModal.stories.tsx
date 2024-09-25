// OKRModal.stories.jsx
import { useModal } from 'mui-modal-provider';
import { Button } from 'src/components/atoms';
import ThemeProvider from 'src/components/particles/theme';
import OKRModal from './OKRModal';
import Modal from '../Modal';

export default {
  title: 'organisms/OKRModal',
  component: OKRModal
};

const ModalWithButton = () => {
  const champions = [
    { value: '123', label: { value: 'Bill Gates' } },
    { value: '456', label: { value: 'Steve Jobs' } },
    { value: '789', label: { value: 'Elon Musk' } }
  ];
  const teams = [
    { value: '123', label: { value: 'Leadership' } },
    { value: '456', label: { value: 'Engineering' } },
    { value: '789', label: { value: 'Product' } }
  ];
  const categories = [
    { value: '123', label: { value: 'Marketing' } },
    { value: '456', label: { value: 'Sales' } },
    { value: '789', label: { value: 'Customer Support' } }
  ];

  const { showModal } = useModal();
  const onShowModal = () => {
    const modal = showModal(Modal, {
      onClose: () => {
        modal.hide();
      },
      slots: {
        modalHeaderProps: {
          slots: {
            avatarAndTextProps: {
              title: 'Add New OKR'
            }
          }
        }
      },
      children: (
        <OKRModal
          champions={champions}
          teams={teams}
          categories={categories}
          onSubmit={(values) => {}}
        />
      )
    });
  };

  return (
    <ThemeProvider>
      <Button
        variant="contained"
        onClick={onShowModal}
        color="primary"
        label={'simple dialog'}
        data-testid="open-modal"
      />
    </ThemeProvider>
  );
};

export const Default = () => <ModalWithButton />;
Default.args = {};
