import {
  Box,
  Button,
  Fade,
  Grid,
  IconButton,
  Stack,
  Zoom
} from '@mui/material';
import type { ComponentMeta, Story } from '@storybook/react';
import {
  PlusCircleIcon,
  TrashIcon
} from 'src/components/particles/theme/overrides/CustomIcons';
import type { TooltipProps } from './Tooltip';
import Tooltip from './Tooltip';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Atoms/Tooltip',
  component: Tooltip
  // // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   // styles: { backgroundColor: { control: 'color' } }
  // }
} as ComponentMeta<typeof Tooltip>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: Story<TooltipProps> = (args) => (
  <Tooltip {...args}>{args.children}</Tooltip>
);

export const Basic = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Basic.args = {
  title: 'Delete',
  open: true,
  children: (
    <IconButton>
      <TrashIcon />
    </IconButton>
  )
};

const TemplateSimple: Story<{
  deleteBasic: TooltipProps;
  greenAdd: TooltipProps;
  blueBasic: TooltipProps;
  blueAdd: TooltipProps;
  buttonTip: TooltipProps;
}> = ({ deleteBasic, greenAdd, blueBasic, blueAdd, buttonTip }) => {
  return (
    <Box sx={{ width: 200 }}>
      <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
        <Tooltip {...deleteBasic}>{deleteBasic?.children}</Tooltip>
        <Tooltip {...greenAdd}>{greenAdd?.children}</Tooltip>
        <Tooltip {...blueBasic}>{blueBasic?.children}</Tooltip>
        <Tooltip {...blueAdd}>{blueAdd?.children}</Tooltip>
        <Tooltip {...buttonTip}>{buttonTip?.children}</Tooltip>
      </Stack>
    </Box>
  );
};

export const Simple = TemplateSimple.bind({});
Simple.args = {
  deleteBasic: {
    title: 'Delete',
    children: (
      <IconButton>
        <TrashIcon />
      </IconButton>
    )
  },
  greenAdd: {
    title: 'Add',
    children: (
      <IconButton>
        <PlusCircleIcon sx={{ color: '#00AB55' }} />
      </IconButton>
    )
  },
  blueBasic: {
    title: 'Delete',
    children: (
      <IconButton>
        <TrashIcon sx={{ color: '#1890FF' }} />
      </IconButton>
    )
  },
  blueAdd: {
    title: 'Add',
    children: (
      <IconButton>
        <PlusCircleIcon sx={{ color: '#1890FF' }} />
      </IconButton>
    )
  },
  buttonTip: {
    title: 'botton',
    children: (
      <Button
        variant="outlined"
        sx={{ color: '#1890FF', borderColor: '#1890FF' }}
        size="small"
      >
        Button
      </Button>
    )
  }
};

const TemplateArrow: Story<TooltipProps> = (args) => (
  <Tooltip {...args}>{args?.children}</Tooltip>
);

export const Arrow = TemplateArrow.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Arrow.args = {
  title: 'Arrow',
  children: (
    <IconButton>
      <PlusCircleIcon sx={{ color: '#00AB55' }} />
    </IconButton>
  ),
  arrow: true
};

const TemplateVariableWidth: Story<{
  defaultTip: TooltipProps;
  customTip: TooltipProps;
  noWrapping: TooltipProps;
}> = ({ defaultTip, customTip, noWrapping }) => {
  return (
    <Box>
      <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
        <Tooltip {...defaultTip}>{defaultTip?.children}</Tooltip>
        <Tooltip {...customTip}>{customTip?.children}</Tooltip>
        <Tooltip {...noWrapping}>{noWrapping?.children}</Tooltip>
      </Stack>
    </Box>
  );
};
const longText = `
Aliquam eget finibus ante, non facilisis lectus. Sed vitae dignissim est, vel aliquam tellus.
Praesent non nunc mollis, fermentum neque at, semper arcu.
Nullam eget est sed sem iaculis gravida eget vitae justo.
`;

export const Variable = TemplateVariableWidth.bind({});
Variable.args = {
  defaultTip: {
    title: longText,
    children: (
      <Button variant="text" size="small">
        Default Width [300px]
      </Button>
    )
  },
  customTip: {
    title: longText,
    children: (
      <Button variant="text" size="small">
        Default Width [500px]
      </Button>
    ),
    sx: { maxWidth: 500 }
  },
  noWrapping: {
    title: longText,
    children: (
      <Button variant="text" size="small">
        No Wrapping
      </Button>
    ),
    sx: { maxWidth: 'none' }
  }
};

const TemplateTransitions: Story<{
  growTip: TooltipProps;
  fadeTip: TooltipProps;
  zoomTip: TooltipProps;
}> = ({ growTip, fadeTip, zoomTip }) => {
  return (
    <Box>
      <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
        <Tooltip {...growTip}>{growTip?.children}</Tooltip>
        <Tooltip {...fadeTip}>{fadeTip?.children}</Tooltip>
        <Tooltip {...zoomTip}>{zoomTip?.children}</Tooltip>
      </Stack>
    </Box>
  );
};

export const Transitions = TemplateTransitions.bind({});
Transitions.args = {
  growTip: {
    title: 'Grow',
    children: (
      <Button variant="text" size="small">
        Grow
      </Button>
    )
  },
  fadeTip: {
    title: 'Fade',
    children: (
      <Button variant="text" size="small">
        Fade
      </Button>
    ),
    TransitionComponent: Fade
  },
  zoomTip: {
    title: 'Zoom',
    children: (
      <Button variant="text" size="small">
        Zoom
      </Button>
    ),
    TransitionComponent: Zoom
  }
};

const TemplatePositions: Story<{
  topStart: TooltipProps;
  top: TooltipProps;
  topEnd: TooltipProps;
  leftStart: TooltipProps;
  left: TooltipProps;
  leftEnd: TooltipProps;
  rightStart: TooltipProps;
  right: TooltipProps;
  rightEnd: TooltipProps;
  bottomStart: TooltipProps;
  bottom: TooltipProps;
  bottomEnd: TooltipProps;
}> = ({
  topStart,
  top,
  topEnd,
  leftStart,
  left,
  leftEnd,
  rightStart,
  right,
  rightEnd,
  bottomStart,
  bottom,
  bottomEnd
}) => {
  return (
    <Box sx={{ width: 500 }}>
      <Grid container justifyContent="center">
        <Grid item>
          <Tooltip {...topStart}>{topStart.children}</Tooltip>
          <Tooltip {...top}>{top.children}</Tooltip>
          <Tooltip {...topEnd}>{topEnd.children}</Tooltip>
        </Grid>
      </Grid>
      <Grid container justifyContent="center">
        <Grid item xs={6}>
          <Tooltip {...leftStart}>{leftStart.children}</Tooltip>
          <br />
          <Tooltip {...left}>{left.children}</Tooltip>
          <br />
          <Tooltip {...leftEnd}>{leftEnd.children}</Tooltip>
        </Grid>
        <Grid item container xs={6} alignItems="flex-end" direction="column">
          <Grid item>
            <Tooltip {...rightStart}>{rightStart.children}</Tooltip>
          </Grid>
          <Grid item>
            <Tooltip {...right}>{right.children}</Tooltip>
          </Grid>
          <Grid item>
            <Tooltip {...rightEnd}>{rightEnd.children}</Tooltip>
          </Grid>
        </Grid>
      </Grid>
      <Grid container justifyContent="center">
        <Grid item>
          <Tooltip {...bottomStart}>{bottomStart.children}</Tooltip>
          <Tooltip {...bottom}>{bottom.children}</Tooltip>
          <Tooltip {...bottomEnd}>{bottomEnd.children}</Tooltip>
        </Grid>
      </Grid>
    </Box>
  );
};

export const Positions = TemplatePositions.bind({});
Positions.args = {
  topStart: {
    title: 'add',
    placement: 'top-start',
    children: <Button>top-start</Button>
  },
  top: { title: 'add', placement: 'top', children: <Button>top</Button> },
  topEnd: {
    title: 'add',
    placement: 'top-end',
    children: <Button>top-end</Button>
  },
  leftStart: {
    title: 'add',
    placement: 'left-start',
    children: <Button>left-start</Button>
  },
  left: { title: 'add', placement: 'left', children: <Button>left</Button> },
  leftEnd: {
    title: 'add',
    placement: 'left-end',
    children: <Button>left-end</Button>
  },
  rightStart: {
    title: 'add',
    placement: 'right-start',
    children: <Button>right-start</Button>
  },
  right: { title: 'add', placement: 'right', children: <Button>right</Button> },
  rightEnd: {
    title: 'add',
    placement: 'right-end',
    children: <Button>right-end</Button>
  },
  bottomStart: {
    title: 'add',
    placement: 'bottom-start',
    children: <Button>bottom-start</Button>
  },
  bottom: {
    title: 'add',
    placement: 'bottom',
    children: <Button>bottom</Button>
  },
  bottomEnd: {
    title: 'add',
    placement: 'bottom-end',
    children: <Button>bottom-end</Button>
  }
};
