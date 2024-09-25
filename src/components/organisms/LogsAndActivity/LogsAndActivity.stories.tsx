import type { ComponentMeta, Story } from '@storybook/react';
import { useState } from 'react';
import type {
  CommunicationLogFormForm,
  LogsAndActivityProps,
  NoteFormForm
} from './LogsAndActivity';
import LogsAndActivity from './LogsAndActivity';
import { TabsProps } from 'src/components/molecules/Tabs/Tabs';
import { Blank as NoteForm } from '../Forms/NoteForm/NoteForm.stories';
import { NoteFormProps } from '../Forms/NoteForm/NoteForm';
import { Blank as CommunicationForm } from '../Forms/CommunicationLogForm/CommunicationLogForm.stories';
import { CommunicationLogFormProps } from '../Forms/CommunicationLogForm/CommunicationLogForm';
import { TabPanelProps } from 'src/components/molecules/TabPanel/TabPanel';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Organisms/Logs And Activity',
  component: LogsAndActivity
  // // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   // styles: { backgroundColor: { control: 'color' } }
  // }
} as ComponentMeta<typeof LogsAndActivity>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: Story<LogsAndActivityProps> = (args) => {
  const [value, setValue] = useState(0);
  // const [noteForm, setNoteForm] = useState<NoteFormForm>({})

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const tabsProps: TabsProps = {
    value,
    onChange: handleChange,
    showMobileDropdown: false,
    tabs: [{ label: 'Notes' }, { label: 'Commuication Log' }],
    centered: true,
    variant: 'fullWidth',
    hideIndicator: true,
    showBottomBorder: true,
    showBackground: true
  };

  const noteTabPanel: TabPanelProps = {
    index: 0,
    value
  };

  const communicationLogTabPanel: TabPanelProps = {
    index: 1,
    value
  };

  return (
    <LogsAndActivity
      {...args}
      tabsProps={tabsProps}
      noteTabPanel={noteTabPanel}
      communicationLogTabPanel={communicationLogTabPanel}
    />
  );
};

export const Empty = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Empty.args = {
  // noteTabPanel: {value: 0, },
  cardContentProps: {
    sx: {
      p: 4,
      '&.MuiCardContent-root:last-child': {
        pb: 4
      }
    }
  },
  noteFormProps: NoteForm.args as NoteFormProps<NoteFormForm>,
  communicationLogFormProps:
    CommunicationForm.args as CommunicationLogFormProps<CommunicationLogFormForm>
};
