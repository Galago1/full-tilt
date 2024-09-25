import { Card, CardContent, CardContentProps, Grid } from '@mui/material';
import { TabPanel, Tabs } from 'src/components/molecules';
import { TabPanelProps } from 'src/components/molecules/TabPanel/TabPanel';
import { TabsProps } from 'src/components/molecules/Tabs/Tabs';
import CommunicationLogForm from '../Forms/CommunicationLogForm';
import { CommunicationLogFormProps } from '../Forms/CommunicationLogForm/CommunicationLogForm';
import NoteForm from '../Forms/NoteForm';
import { NoteFormProps } from '../Forms/NoteForm/NoteForm';
export interface NoteFormForm {}

export interface CommunicationLogFormForm {
  contact?: string;
  note?: string;
  position?: string;
  communication?: string;
  category?: string;
  attachment?: File | null;
}

export interface LogsAndActivityProps {
  /**
   * The tabs props
   */
  tabsProps: TabsProps;
  /**
   * The note tab panel props
   */
  noteTabPanel: TabPanelProps;
  /**
   * The note form props
   */
  noteFormProps: NoteFormProps<NoteFormForm>;
  /**
   * The communication log tab panel props
   */
  communicationLogTabPanel: TabPanelProps;
  /**
   * The communication log form props
   */
  communicationLogFormProps: CommunicationLogFormProps<CommunicationLogFormForm>;
  /**
   * The card content props
   */
  cardContentProps: CardContentProps;
}

const LogsAndActivity = ({
  tabsProps,
  noteTabPanel,
  noteFormProps,
  communicationLogTabPanel,
  communicationLogFormProps,
  cardContentProps,
  ...props
}: LogsAndActivityProps) => {
  return (
    <Card {...props}>
      <CardContent {...cardContentProps}>
        <Grid container flexDirection={'column'} gap={3}>
          <Grid item>
            <Tabs {...tabsProps} />
          </Grid>
          <TabPanel {...noteTabPanel}>
            <Grid item>
              <NoteForm {...noteFormProps} />
            </Grid>
          </TabPanel>
          <TabPanel {...communicationLogTabPanel}>
            <Grid item>
              <CommunicationLogForm {...communicationLogFormProps} />
            </Grid>
          </TabPanel>
        </Grid>
      </CardContent>
    </Card>
  );
};
export default LogsAndActivity;
