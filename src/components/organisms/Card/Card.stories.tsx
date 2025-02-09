import {
  Avatar,
  Box,
  CircularProgress,
  Divider,
  FormControlLabel,
  Grid,
  IconButton,
  IconButtonProps,
  RadioGroup,
  Theme,
  Typography,
  useTheme
} from '@mui/material';
import { ComponentMeta, Story } from '@storybook/react';
import { Field, Formik } from 'formik';
import { useState } from 'react';
import Badge from 'src/components/atoms/Badge/Badge';
import Button from 'src/components/atoms/Button/Button';
import Chip from 'src/components/atoms/Chip/Chip';
import RadioButton from 'src/components/atoms/RadioButton/RadioButton';
import {
  AvatarAndText,
  LinearProgressIndicator,
  TextInput
} from 'src/components/molecules';
import { AvatarAndTextProps } from 'src/components/molecules/AvatarAndText/AvatarAndText';
import EmptyState from 'src/components/molecules/EmptyState/EmptyState';
import { LinearProgressIndicatorProps } from 'src/components/molecules/LinearProgressIndicator/LinearProgressIndicator';
import { responsiveSpacing } from 'src/components/particles/theme/spacing';
import ColorPicker, { COLOR_PICKER_COLORS } from '../ColorPicker';
import DataGrid from '../DataGrid';
import { DataGridProps } from '../DataGrid/DataGrid';
import { MembersDataGrid } from '../DataGrid/DataGrid.stories';
import type { CardProps } from './Card';
import Card from './Card';
import { ArrowUpRightIcon } from 'src/components/particles/theme/icons/Arrows/arrow-up-right';
import { ChevronRightIcon } from 'src/components/particles/theme/icons/Arrows/chevron-right';
import { PlusIcon } from 'src/components/particles/theme/icons/General/plus';
import { SearchLgIcon } from 'src/components/particles/theme/icons/General/search-lg';
import { CalendarIcon } from 'src/components/particles/theme/icons/Time/calendar';
import {
  BusinessModelIcon,
  ChartUpIcon,
  MoonIcon,
  SunIcon,
  SunMoonIcon
} from 'src/components/particles/theme/overrides/CustomIcons';
import { BookOpen01Icon } from 'src/components/particles/theme/icons/Education/book-open-01';
import { Users01Icon } from 'src/components/particles/theme/icons/Users/users-01';

export default {
  title: 'Organisms/Card',
  component: Card,
  parameters: {
    layout: 'fullscreen'
  }
  // // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   // styles: { backgroundColor: { control: 'color' } }
  // }
} as ComponentMeta<typeof Card>;

const Template: Story<CardProps> = (args) => {
  return <Card {...args} />;
};

export const NoHeaderCard = Template.bind({});
NoHeaderCard.args = {
  // showActions: false,
  children: (
    <>
      <EmptyState
        alignItems="center"
        featuredIconProps={{
          children: <SearchLgIcon />,
          color: 'secondary'
        }}
        avatarAndTextProps={{
          title: 'No projects found',
          titleTypography: { sx: { textAlign: 'center' } },
          subtitle:
            'Your search "Landing page design" did not match any projects. Please try again.',
          subtitleTypography: { sx: { textAlign: 'center' } }
        }}
      />
    </>
  )
};

export const NoActionsCard = Template.bind({});
NoActionsCard.args = {
  showActions: false,
  children: (
    <>
      <EmptyState
        alignItems="center"
        featuredIconProps={{
          children: <SearchLgIcon />,
          color: 'secondary'
        }}
        avatarAndTextProps={{
          title: 'No projects found',
          titleTypography: { sx: { textAlign: 'center' } },
          subtitle:
            'Your search "Landing page design" did not match any projects. Please try again.',
          subtitleTypography: { sx: { textAlign: 'center' } }
        }}
      />
    </>
  )
};

export const WithHeaderCard = Template.bind({});
WithHeaderCard.args = {
  slots: {
    cardHeaderProps: {
      slots: {
        avatarAndTextProps: {
          title: 'Card Header',
          subtitle: 'Subtitle'
        }
      },
      children: <>Dafuk</>
    }
  },
  children: (
    <>
      <Formik initialValues={{ name: '' }} onSubmit={() => {}}>
        <Grid container flexDirection="column">
          <Grid item>
            <Field component={TextInput} name="name" label="Name" fullWidth />
          </Grid>
        </Grid>
      </Formik>
    </>
  )
};

export const WithHeaderCardAndDivider = Template.bind({});
WithHeaderCardAndDivider.args = {
  slots: {
    cardHeaderProps: {
      showDivider: true,
      slots: {
        avatarAndTextProps: {
          title: 'Card Header',
          subtitle: 'Subtitle'
        }
      }
    }
  },
  children: (
    <>
      <Formik initialValues={{ name: '' }} onSubmit={() => {}}>
        <Grid container flexDirection="column">
          <Grid item>
            <Field component={TextInput} name="name" label="Name" fullWidth />
          </Grid>
        </Grid>
      </Formik>
    </>
  )
};

export const HideHeader = Template.bind({});
HideHeader.args = {
  showCardHeader: false,
  children: (
    <>
      <EmptyState
        alignItems="center"
        avatarAndTextProps={{
          title: 'No projects found',
          titleTypography: { sx: { textAlign: 'center' } },
          subtitle:
            'Your search "Landing page design" did not match any projects. Please try again.',
          subtitleTypography: { sx: { textAlign: 'center' } }
        }}
      />
    </>
  )
};
export const FinancialPerformanceCard: Story = () => {
  return (
    <Card
      showActions={false}
      showCardHeader={true}
      slots={{
        cardHeaderProps: {
          slots: {
            avatarAndTextProps: {
              title: 'Financial Performance'
            }
          }
        }
      }}
    >
      <Grid container spacing={responsiveSpacing}>
        {[
          {
            subtitle: 'Cash Position / $40,000,000',
            amount: '$20,000,000'
          },
          {
            subtitle: 'Overhead / $1000',
            amount: '$100'
          },
          {
            subtitle: 'Revenue / $40,000,000',
            amount: '$20,000,000'
          },
          {
            subtitle: 'Earning / $24,900,00',
            amount: '$24,900,00'
          }
        ].map(({ subtitle, amount }, index) => (
          <Grid item key={index} xs={12} md={6}>
            <Card
              showActions={false}
              showCardHeader={true}
              children={
                <Grid container item spacing={2} flexDirection={'column'}>
                  <Grid item>
                    <EmptyState
                      avatarAndTextProps={{
                        subtitle: subtitle
                      }}
                    />
                  </Grid>
                  <Grid item container columnSpacing={2}>
                    <Grid item xs={8}>
                      <Typography variant="textXlSemibold">{amount}</Typography>
                    </Grid>
                    <Grid item xs={4}>
                      <Box display={'flex'} justifyContent={'flex-end'}>
                        <Chip label="50%" size="large" variant="outlined" />
                      </Box>
                    </Grid>
                  </Grid>
                </Grid>
              }
            />
          </Grid>
        ))}
      </Grid>
    </Card>
  );
};

export const WideRightCard = Template.bind({});
WideRightCard.args = {
  children: (
    <Grid container spacing={responsiveSpacing}>
      <Grid item xs={12} sm={12} md={4}>
        <Card
          showActions={false}
          showCardHeader={true}
          slots={{
            cardHeaderProps: {
              slots: {
                avatarAndTextProps: {
                  title: 'Happiness Score',
                  subtitle: 'Last 30 days'
                }
              }
            }
          }}
        />
      </Grid>
      <Grid item xs={12} sm={12} md={8}>
        <Card
          showActions={false}
          children={
            <Box>
              <LinearProgressIndicator
                displayLabel="Personal Recognition"
                displayPosition="top"
                displayValue="20%"
                value={20}
                boxSx={{ width: '100%', mb: 2 }}
              />
              <LinearProgressIndicator
                displayLabel="Core Value Alignment"
                displayPosition="top"
                displayValue="40%"
                value={40}
                boxSx={{ width: '100%', mb: 2 }}
              />
              <LinearProgressIndicator
                displayLabel="Organizational Communication"
                displayPosition="top"
                displayValue="10%"
                value={10}
                boxSx={{ width: '100%', mb: 2 }}
              />
              <LinearProgressIndicator
                displayLabel="Reflection Time"
                displayPosition="top"
                displayValue="90%"
                value={10}
                boxSx={{ width: '100%', mb: 2 }}
              />
              <LinearProgressIndicator
                displayLabel="Work-style Autonomy"
                displayPosition="top"
                displayValue="70%"
                value={10}
                boxSx={{ width: '100%', mb: 2 }}
              />
              <Typography variant="textSmRegular">
                Contributors: 2/10
              </Typography>
            </Box>
          }
          showCardHeader={true}
          slots={{
            cardHeaderProps: {
              slots: {
                avatarAndTextProps: {
                  title: 'Happiness Tracker',
                  subtitle:
                    'The Happiness Tracker helps boost harmony and health in your organization'
                }
              }
            }
          }}
        />
      </Grid>
    </Grid>
  )
};

export const MoreContentCard = () => {
  const truncateText = (text: string, length: number) =>
    isTruncated && text.length > length
      ? text.substring(0, length) + '...'
      : text;
  const [isTruncated, setIsTruncated] = useState(true);
  const toggleTruncate = () => setIsTruncated(!isTruncated);
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={8}>
        <Card
          showCardHeader={true}
          slots={{
            cardHeaderProps: {
              slots: {
                avatarAndTextProps: {
                  title: 'Card Header',
                  subtitle: 'Subtitle'
                }
              }
            }
          }}
        >
          <>
            <Grid container flexDirection={'column'} gap={3}>
              <Grid item xs={12}>
                <Typography variant="textSmRegular">
                  {truncateText(
                    `When I review such portfolios I can’t help but think that the designer
    behind them is either inexperienced, lacks a passion for design, or
    simply can’t communicate the value of their work. Sometimes, all of
    the above are true but even if only one is, it’s enough to be turned
    down by design-mature companies. This brings me to the second point.
    But it’ll most likely be a job with a design-immature company that
    doesn’t fully understand design. You get stuck doing boring design
    work and your career stalls because the quality of your work never
    increases so you don’t have anything better to put in your portfolio.
    You get trapped in a loop`,
                    374
                  )}
                </Typography>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <AvatarAndText
                sx={{ my: 'auto' }}
                avatarProps={{
                  src: 'https://i.pravatar.cc/150?img=24',
                  sizes: 'small'
                }}
                title="Olivia Rhye"
                subtitle="Champion"
                textSx={{ flex: 1 }}
                buttonProps={{
                  gridProps: { alignSelf: 'center' },
                  onClick: toggleTruncate,
                  children: isTruncated ? 'Show More' : 'Show Less'
                }}
              />
            </Grid>
          </>
        </Card>
      </Grid>
    </Grid>
  );
};
export const TwoColCards: Story = (args, context) => (
  <Grid container spacing={3}>
    <Grid item xs={12} md={6}>
      <Card
        showActions={false}
        showCardHeader={true}
        variant="outlined"
        slots={{
          cardHeaderProps: {
            slots: {
              avatarAndTextProps: {
                title: 'Vision',
                subtitle:
                  'Empowering businesses worldwide with innovative solutions to thrive in the digital era, Company Z is dedicated to fostering growth, driving efficiency, and revolutionizing industries through cutting-edge technology and unparalleled expertise.'
              }
            }
          }
        }}
      />
    </Grid>
    <Grid item xs={12} md={6}>
      <Card
        showActions={false}
        showCardHeader={true}
        variant="outlined"
        slots={{
          cardHeaderProps: {
            slots: {
              avatarAndTextProps: {
                title: 'Purpose',
                subtitle:
                  'At Company Z, we are committed to igniting transformative change by providing tailored solutions that empower businesses to reach new heights of success, fostering innovation, and driving positive impact in every industry we serve.'
              }
            }
          }
        }}
      />
    </Grid>
  </Grid>
);

const valuesProps: Record<string, AvatarAndTextProps> = {
  core: {
    title: 'Ingenuity',
    subtitle: 'Innovative problem-solving'
  },
  empathy: {
    title: 'Empathy',
    subtitle: 'Understanding others deeply'
  },
  resilience: {
    title: 'Resilience',
    subtitle: 'Strength in adversity'
  },
  integrity: {
    title: 'Integrity',
    subtitle: 'Uncompromising honesty'
  },
  collaboration: {
    title: 'Collaboration',
    subtitle: 'Unified teamwork',
    sx: { paddingRight: 4 }
  }
};

const purposeCardProps: CardProps = {
  // @ts-ignore
  showCardHeader: true,
  raised: false,
  slots: {
    cardHeaderProps: {
      showDivider: true,
      slots: {
        avatarAndTextProps: {
          title: 'Core values'
        }
      }
    }
  }
};

export const HorizontalListCards: Story = (args, context) => (
  <Grid container item>
    <Grid item xs={12}>
      <Card {...purposeCardProps}>
        <Box
          sx={{
            display: 'flex',
            alignContent: 'center',
            alignItems: 'baseline',
            justifyContent: 'space-between',
            borderColor: (theme: Theme) => theme.border.divider,
            flexWrap: { xs: 'wrap', sm: 'wrap', md: 'nowrap', lg: 'nowrap' }
          }}
          gap={2}
        >
          {Object.keys(valuesProps).map((key, index, self) => (
            <Box key={key}>
              <AvatarAndText {...valuesProps[key]} />
              {index !== self.length - 1 && (
                <Divider
                  orientation="vertical"
                  flexItem
                  sx={{ backgroundColor: 'red' }}
                />
              )}
            </Box>
          ))}
        </Box>
      </Card>
    </Grid>
  </Grid>
);

const iconAndListsPropsList: Record<string, AvatarAndTextProps> = {
  growthProps: {
    sx: { my: 'auto' },
    title: 'Growth',
    subtitle: 'Business Stage',
    avatarProps: {
      children: (
        <Avatar variant="rounded">
          <ChartUpIcon
            fontSize={'medium'}
            sx={{ backgroundColor: 'transparent' }}
          />
        </Avatar>
      ),
      sx: { backgroundColor: 'secondary.main' },
      variant: 'rounded'
    }
  },
  btobProps: {
    sx: { my: 'auto' },
    title: 'B2B',
    subtitle: 'Business Model',
    avatarProps: {
      children: (
        <Avatar>
          <BusinessModelIcon
            fontSize={'medium'}
            sx={{ backgroundColor: 'transparent' }}
          />
        </Avatar>
      ),
      variant: 'rounded'
    }
  },
  distributionList: {
    title: 'Distribution',
    flexDirection: 'column',
    textSx: {
      alignSelf: 'flex-start',
      '&.MuiGrid-item': {
        paddingTop: '0 !important'
      }
    },
    sx: { alignContent: 'flex-start' },
    children: (
      <Box>
        <ul>
          <li>Direct Sales Team</li>
          <li>Channel Sales</li>
          <li>Reseller and Partner Network</li>
        </ul>
      </Box>
    )
  },
  productList: {
    title: 'Products',
    flexDirection: 'column',
    textSx: {
      alignSelf: 'flex-start',
      '&.MuiGrid-item': {
        paddingTop: '0 !important'
      }
    },
    sx: { alignContent: 'flex-start' },
    children: (
      <Box>
        <ul>
          <li>Smart Business Analytics Platform</li>
          <li>Integrated Cloud-Based CRM System</li>
          <li>Cybersecurity Suite</li>
        </ul>
      </Box>
    )
  },
  servicesList: {
    title: 'Services',
    flexDirection: 'column',
    textSx: {
      alignSelf: 'flex-start',
      '&.MuiGrid-item': {
        paddingTop: '0 !important'
      }
    },
    sx: { alignContent: 'flex-start' },
    children: (
      <Box>
        <ul>
          <li>Custom Software Development</li>
          <li>Business Process Consultation</li>
          <li>Training and Support Services</li>
        </ul>
      </Box>
    )
  }
};

export const IconAndLists: Story = () => (
  <Grid container spacing={3}>
    <Grid item container>
      <Card
        // showActions={false}
        showCardHeader={true}
        variant="outlined"
        sx={{ width: '100%' }}
        slots={{
          cardHeaderProps: {
            slots: {
              avatarAndTextProps: {
                title: 'Business Structure | Current State',
                subtitle: 'Updated: 11/01/2023',
                subtitleTypography: {
                  variant: 'textSmRegular',
                  color: 'text.secondary'
                },
                textSx: { flex: 1 }
              }
            }
          }
        }}
      >
        <Grid container flexDirection={'column'} gap={3}>
          <Grid item container xs={12}>
            <Grid item xs={12} sm={12} md={6}>
              <AvatarAndText {...iconAndListsPropsList.growthProps} />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <AvatarAndText {...iconAndListsPropsList.btobProps} />
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Divider sx={{ mb: { xs: 3, md: 3 } }} />
          </Grid>
          <Grid item container xs={12}>
            <Grid item xs={12} sm={12} md={4}>
              <AvatarAndText {...iconAndListsPropsList.distributionList} />
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <AvatarAndText {...iconAndListsPropsList.productList} />
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <AvatarAndText {...iconAndListsPropsList.servicesList} />
            </Grid>
          </Grid>
        </Grid>
      </Card>
    </Grid>
  </Grid>
);

const listItemStyle: any = {
  borderBottom: (theme: Theme) => theme.border.outlinedButton,
  borderBottomWidth: '100%',
  listStylePosition: 'inside',
  lineHeight: 3,
  my: 1
};

const listItemNoBorderStyle: any = {
  listStylePosition: 'inside',
  lineHeight: 3
};

const listCardProps: Record<string, AvatarAndTextProps> = {
  obstaclesList: {
    title: 'Obstacles',
    subtitle: 'What obstacles are in the way of growing my business?',
    flexDirection: 'column',
    sx: { alignContent: 'flex-start' },
    children: (
      <Box>
        <ul>
          <li style={listItemStyle}>Talent Acquisition Challenges</li>
          <li style={listItemStyle}>Regulatory Hurdles</li>
          <li style={listItemStyle}>Economic Uncertainty</li>
          <li style={listItemStyle}>Intense Market Competition</li>
          <li style={listItemNoBorderStyle}>Cybersecurity Threats</li>
        </ul>
      </Box>
    )
  },
  opportunitiesList: {
    title: 'Opportunities',
    subtitle: 'What opportunities will help in growing my business?',
    flexDirection: 'column',
    sx: { alignContent: 'flex-start' },
    children: (
      <Box>
        <ul>
          <li style={listItemStyle}>Smart Business Analytics Platform</li>
          <li style={listItemStyle}>Integrated Cloud-Based CRM System</li>
          <li style={listItemNoBorderStyle}>Cybersecurity Suite</li>
        </ul>
      </Box>
    )
  }
};
export const ListCard: Story = () => (
  <Card
    showCardHeader={true}
    variant="outlined"
    sx={{ width: '100%' }}
    slots={{
      cardHeaderProps: {
        showDivider: true,
        slots: {
          avatarAndTextProps: {
            title: 'Obstacles & Opportunities',
            subtitle: 'What obstacles are in the way of growing my business?'
          }
        }
      }
    }}
  >
    <Grid container spacing={3}>
      <Grid item xs={12} sm={12} md={6}>
        <AvatarAndText {...listCardProps.obstaclesList} />
      </Grid>
      <Grid item xs={12} sm={12} md={6}>
        <AvatarAndText {...listCardProps.opportunitiesList} />
      </Grid>
    </Grid>
  </Card>
);
const iconButtonProps: IconButtonProps = {
  children: <ChevronRightIcon />
};

const linearProgressIndicatorProps: LinearProgressIndicatorProps = {
  value: 40,
  displayValue: '40%',
  linearProgressBarProps: {
    sx: {
      height: 8,
      minWidth: '18rem',
      maxWidth: '100%',
      borderRadius: 6,
      '&': {
        borderRadius: 6
      }
    }
  }
};
const createMetricsCardProps = (
  title: string,
  value: number
): AvatarAndTextProps => ({
  title,
  flexDirection: 'column',
  textSx: { alignSelf: 'flex-start' },
  sx: { alignContent: 'flex-start' },
  children: <LinearProgressIndicator {...linearProgressIndicatorProps} />
});

const metricsCardProps: Record<string, AvatarAndTextProps> = {
  awarenessProgress: createMetricsCardProps('Brand Awareness Index', 40),
  industryAwards: createMetricsCardProps('Industry Awards', 40)
};

export const MetricsCard: Story = () => (
  <Card
    showCardHeader={true}
    variant="outlined"
    sx={{ width: '100%' }}
    slots={{
      cardHeaderProps: {
        showDivider: true,
        slots: {
          avatarAndTextProps: {
            title: 'Obstacles & Opportunities',
            subtitle: 'What obstacles are in the way of growing my business?'
          }
        }
      }
    }}
  >
    <Grid container spacing={3}>
      {Array(3)
        .fill(null)
        .map((_, index) =>
          Object.keys(metricsCardProps).map((key) => (
            <Grid item xs={6} sm={6} md={5} lg={4} key={key + index}>
              <Grid container spacing={3} flexWrap={'nowrap'}>
                <Grid item flex={1}>
                  <AvatarAndText {...metricsCardProps[key]} />
                </Grid>
                <Grid item>
                  <Box>
                    <IconButton {...iconButtonProps} />
                    <Divider orientation="vertical"></Divider>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          ))
        )}
    </Grid>
  </Card>
);

export const MembersTableCard = Template.bind({});
MembersTableCard.args = {
  slots: {
    cardHeaderProps: {
      slots: {
        avatarAndTextProps: {
          title: 'Action Plan' // Changed title to 'Action Plan'
        }
      }
    }
  },
  children: (
    <Box>
      <DataGrid {...(MembersDataGrid.args as DataGridProps)} />{' '}
    </Box>
  )
};

const strategies = [
  {
    title: 'Influencing Key Distributors',
    description:
      'A concerted effort to consistently engage and influence key distributors, ensuring NALs bulk and packaged products are prioritized in vital markets. This involves building robust relationships, understanding distributor needs, and providing them with the necessary support and incentives.'
  },
  {
    title: 'Educational Outreach',
    description:
      "A continuous program to educate prospects, distributors, and customers about NAL's extensive range of over 1,000 SKUs of bulk and packaged products. This initiative will involve creating engaging educational materials, organizing workshops, and leveraging digital platforms for wider reach."
  },
  {
    title: 'Trojan Horse Strategy',
    description:
      'A strategic maneuver to initially forge relationships through the sale of bulk products, subsequently transitioning to increase sales of higher-margin packaged products. This approach aims to establish a foothold in new markets and expand market share in existing ones.'
  },
  {
    title: 'SMART Business Development ',
    description:
      'Tasking Aaron Read with the development and execution of a SMART (Specific, Measurable, Achievable, Relevant, Time-bound) business development strategy. This plan will target growth in diverse lubricant markets such as Automotive, Heavy Duty, Industrial, Commercial, Food, and Pellet, while also exploring potential acquisition opportunities in refining or manufacturing.'
  },
  {
    title: 'Sales Team Upskilling ',
    description:
      "Elevating the sales team's capabilities through HALO's C.A.M.P. system. This will involve clarifying roles, setting clear accountability measures, defining performance metrics, and providing ongoing training and support to ensure alignment with strategic goals."
  },
  {
    title: 'Adapting to Market Conditions',
    description:
      'Maintaining agility and continuously evolving NAL’s business intelligence capabilities to respond effectively to national and international market dynamics. This involves staying abreast of industry trends, customer preferences, and competitive landscapes.'
  }
];

export const GrowthPlanCard = Template.bind({});
GrowthPlanCard.args = {
  showActions: false,
  slots: {
    cardHeaderProps: {
      showDivider: true,
      slots: {
        avatarAndTextProps: {
          title: '3-Year Growth Strategies', // Changed title to '3-Year Growth Strategies'
          subtitle: 'Lorem ipsum dolor sit amet consectetur...'
        }
      }
    }
  },
  children: (
    <Grid container spacing={3}>
      {strategies.map((strategy, index) => (
        <Grid item xs={12} md={6} key={index}>
          <AvatarAndText title={strategy.title}>
            <Typography variant="textMdRegular">
              {strategy.description}
            </Typography>
          </AvatarAndText>
        </Grid>
      ))}
    </Grid>
  )
};

export const AppearanceSettingsCard: Story = (args, context) => {
  const theme = useTheme();
  return (
    <Card showActions={false} showCardHeader={false} variant="outlined">
      <>
        <Grid container paddingBottom={3}>
          <Grid item xs={6}>
            <Typography variant={'textLgSemibold'}>
              Theme Configuration
            </Typography>
          </Grid>
          <Grid
            item
            xs={6}
            sx={{ display: 'flex', justifyContent: 'flex-end' }}
          >
            <Button
              variant="contained"
              sx={{
                backgroundColor: theme.palette.primary[600],
                borderRadius: theme.borderRadius.md
              }}
            >
              Save
            </Button>
          </Grid>
        </Grid>
        <Divider sx={{ marginBottom: 3 }} />
        <Grid container marginBottom={3}>
          <Grid item display={'flex'} flexDirection={'column'} marginRight={4}>
            <Typography variant="textLgSemibold">Accent Color</Typography>
            <Typography variant="textMdRegular">
              Update your dashboard to your brand color.
            </Typography>
          </Grid>
          <Grid item display={'flex'}>
            <ColorPicker colors={COLOR_PICKER_COLORS} />
            <Button
              variant="contained"
              startIcon={<PlusIcon sx={{ color: 'grey.700' }} />}
              sx={{
                marginLeft: 2,
                backgroundColor: theme.palette.common.white,
                borderRadius: theme.borderRadius.md,
                '&:hover .MuiSvgIcon-root': {
                  color: theme.palette.common.white
                }
              }}
            />
          </Grid>
        </Grid>
        <Divider sx={{ marginBottom: 3 }} />
        <Box display={'flex'} flexDirection={'column'} marginBottom={2.5}>
          <Typography variant="textLgSemibold">Interface theme</Typography>
          <Typography variant="textMdRegular">
            Select or customize your UI theme.
          </Typography>
        </Box>
        <CardSelector />
      </>
    </Card>
  );
};

export const PulseCard: Story = (args, context) => {
  const truncateText = (text: string, length: number) =>
    isTruncated && text.length > length
      ? text.substring(0, length) + '...'
      : text;
  const [isTruncated, setIsTruncated] = useState(true);
  const toggleTruncate = () => setIsTruncated(!isTruncated);
  return (
    <Card showActions={false} showCardHeader={false} variant="outlined">
      <>
        <Grid container flexDirection={'column'} gap={3}>
          <Grid item>
            <Grid container spacing={3}>
              <Grid item>
                <Typography variant="textLgSemibold">
                  Multiple Integration Example
                </Typography>
              </Grid>

              <Grid item sx={{ mr: 2 }}>
                <Badge badgeContent="Daily" />
              </Grid>
              <Grid item>
                <Badge badgeContent="New" />
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Typography
              sx={{
                color: (theme: Theme) => theme.palette.grey[600]
              }}
              onClick={toggleTruncate}
            >
              {truncateText(
                'In this example article, we showcase the value of having multiple integrations. Each integration bla bla bla bla bla ibjnowfn',
                121
              )}
            </Typography>
          </Grid>
          <Grid item width={'100%'}>
            <Grid container>
              <Grid item xs={8} display={'flex'}>
                <CalendarIcon
                  sx={{
                    color: (theme: Theme) => theme.palette.grey[400],
                    width: 20
                  }}
                />
                <Typography
                  sx={{
                    marginLeft: 1,
                    color: (theme: Theme) => theme.palette.grey[600]
                  }}
                  variant="textSmRegular"
                >
                  March 27, 2024
                </Typography>
                <BookOpen01Icon
                  sx={{
                    marginLeft: 2.5,
                    color: (theme: Theme) => theme.palette.grey[400],
                    width: 20
                  }}
                />
                <Typography
                  sx={{
                    marginLeft: 1,
                    color: (theme: Theme) => theme.palette.grey[600]
                  }}
                  variant="textSmRegular"
                >
                  10 min read
                </Typography>
              </Grid>
              <Grid
                item
                xs={4}
                display={'flex'}
                justifyContent={'flex-end'}
                alignItems={'center'}
              >
                <Typography
                  sx={{ marginRight: 1 }}
                  color={'greyiron.900'}
                  variant="textSmRegular"
                >
                  1m Shot
                </Typography>
                <ArrowUpRightIcon />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </>
    </Card>
  );
};

const CardSelector = () => {
  const theme = useTheme();
  const [selected, setSelected] = useState('sunMoon');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelected(event.target.value);
  };

  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLDivElement>,
    cardName: string
  ) => {
    if (event.key === 'Enter') {
      setSelected(cardName);
    }
  };

  const cardStyle = (cardName: string) => ({
    width: '100%',
    height: 113,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:
      cardName === 'moon'
        ? 'grey.950'
        : cardName === 'sun'
        ? 'grey.50'
        : 'none',
    border:
      selected === cardName
        ? theme.border.appearanceCardSelectedHover
        : theme.border.appearanceCardHover,
    boxShadow:
      selected === cardName
        ? theme.customShadows.appearanceCardSelected
        : 'none',
    ':hover': {
      border: theme.border.appearanceCardSelectedHover,
      boxShadow: theme.customShadows.appearanceCardSelected
    }
  });

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={12} md={4}>
        <Card
          showActions={false}
          sx={cardStyle('sunMoon')}
          onClick={() => setSelected('sunMoon')}
          tabIndex={0}
          onKeyDown={(event) => handleKeyDown(event, 'sunMoon')}
        >
          <SunMoonIcon sx={{ width: 43, height: 43 }} />
        </Card>
        <RadioGroup sx={{ pt: 2 }}>
          <FormControlLabel
            sx={{
              alignItems: 'center',
              '& .MuiFormControlLabel-label': {
                paddingBottom: 0,
                paddingLeft: 1.5
              }
            }}
            control={
              <RadioButton
                checked={selected === 'sunMoon'}
                onChange={handleChange}
                value="sunMoon"
                variant="purple"
                sx={{ padding: 0 }}
                labelHasBottomPadding={false}
              />
            }
            label="System"
          />
        </RadioGroup>
      </Grid>
      <Grid item xs={12} sm={12} md={4}>
        <Card
          showActions={false}
          sx={cardStyle('sun')}
          onClick={() => setSelected('sun')}
          tabIndex={0}
          onKeyDown={(event) => handleKeyDown(event, 'sun')}
        >
          <SunIcon sx={{ width: 43, height: 43 }} />
        </Card>
        <RadioGroup sx={{ pt: 2 }}>
          <FormControlLabel
            sx={{
              alignItems: 'center',
              '& .MuiFormControlLabel-label': {
                paddingBottom: 0,
                paddingLeft: 1.5
              }
            }}
            control={
              <RadioButton
                checked={selected === 'sun'}
                onChange={handleChange}
                value="sun"
                variant="purple"
                sx={{ padding: 0 }}
                labelHasBottomPadding={false}
              />
            }
            label="Light"
          />
        </RadioGroup>
      </Grid>
      <Grid item xs={12} sm={12} md={4}>
        <Card
          showActions={false}
          sx={cardStyle('moon')}
          onClick={() => setSelected('moon')}
          tabIndex={0}
          onKeyDown={(event) => handleKeyDown(event, 'moon')}
        >
          <MoonIcon sx={{ width: 43, height: 43 }} />
        </Card>
        <RadioGroup sx={{ pt: 2 }}>
          <FormControlLabel
            sx={{
              alignItems: 'center',
              '& .MuiFormControlLabel-label': {
                paddingBottom: 0,
                paddingLeft: 1.5
              }
            }}
            control={
              <RadioButton
                checked={selected === 'moon'}
                onChange={handleChange}
                value="moon"
                variant="purple"
                sx={{ padding: 0 }}
                labelHasBottomPadding={false}
              />
            }
            label="Dark"
          />
        </RadioGroup>
      </Grid>
    </Grid>
  );
};

export const OKRCard: Story = (args, context) => {
  const theme = useTheme();
  return (
    <Card showActions={false}>
      <Grid container spacing={2} sx={{ py: responsiveSpacing }}>
        <Grid
          item
          display={'flex'}
          justifyContent="flex-start"
          alignItems="center"
          xs={12}
          sm={3}
          md={2}
          sx={{ height: 'auto' }}
        >
          <Box
            sx={{
              position: 'relative',
              height: {
                xs: 120,
                sm: '100%'
              },
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <CircularProgress
              variant="determinate"
              value={25}
              size={120}
              thickness={11}
              sx={{
                position: 'absolute',
                zIndex: 1,
                color: '#1976d2'
              }}
            />
            <CircularProgress
              variant="determinate"
              value={100}
              size={120}
              thickness={11}
              sx={{
                position: 'absolute',
                zIndex: 0,
                color: '#e0e0e0'
              }}
            />
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          sm={8}
          md={10}
          // lg={11}
          alignContent={'flex-start'}
          justifyContent={'flex-start'}
        >
          <Grid container gap={2} flexDirection={'column'}>
            <Grid item>
              <Typography variant="displayXsRegular" component="div">
                Increase Reputation
              </Typography>

              <Typography variant="textSmSemibold" color="secondary">
                Connect multiple calendars so that Limitless has more context.
              </Typography>
            </Grid>
            <Grid item>
              <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                <CalendarIcon
                  sx={{ marginRight: 0.5, color: theme.palette.grey[400] }}
                />
                <Typography
                  variant="textSmSemibold"
                  color="secondary"
                  sx={{ marginRight: 2 }}
                >
                  Quarter 1
                </Typography>
                <Users01Icon
                  sx={{ marginRight: 0.5, color: theme.palette.grey[400] }}
                />
                <Typography variant="textXsRegular" color="secondary">
                  Org Wide
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Card>
  );
};
