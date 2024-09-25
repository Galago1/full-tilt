import { Divider, Grid, GridProps, Typography, useTheme } from '@mui/material';
import { isEmpty } from 'lodash';
import { Button } from 'src/components/atoms';
import { ButtonProps } from 'src/components/atoms/Button/Button';
import EmptyState from 'src/components/molecules/EmptyState/EmptyState';
import LoadingIndicator from 'src/components/molecules/LoadingIndicator/LoadingIndicator';
import {
  CheckCircleIcon,
  ChevronRightIcon,
  ListIcon,
  PauseCircleIcon,
  PlayCircleIcon,
  PlusIcon
} from 'src/components/particles/theme/overrides/CustomIcons';
import { Todo } from './types';

interface ContentProps {
  todos: Todo[];
  loading?: boolean;
}
const Content = ({ todos, loading }: ContentProps) => {
  const theme = useTheme();
  if (!todos || loading || (!loading && isEmpty(todos)))
    return (
      <Grid item>
        <EmptyState
          flex={1}
          alignItems={'center'}
          justifyContent={'center'}
          avatarAndTextProps={
            loading ? undefined : { title: 'No items', subtitle: '' }
          }
        >
          {loading && <LoadingIndicator />}
        </EmptyState>
      </Grid>
    );

  return (
    <>
      {todos
        .filter((todo) => todo.status !== 'completed')
        .map((todo, index, filteredTodos) => (
          <>
            <Grid item display="flex" alignItems={'center'} py={1}>
              {todo.status === 'todo' ? (
                <PlayCircleIcon
                  sx={{
                    width: theme.spacing(28 / 8),
                    height: theme.spacing(28 / 8)
                  }}
                />
              ) : (
                <PauseCircleIcon
                  sx={{
                    width: theme.spacing(28 / 8),
                    height: theme.spacing(28 / 8),
                    color: theme.palette.warning[500]
                  }}
                />
              )}
              <Typography variant="textSmRegular" ml={1}>
                {todo.title}
              </Typography>
            </Grid>
            {index !== filteredTodos.length - 1 && <Divider />}
          </>
        ))}
      <Typography variant="textSmRegular" my={2}>
        Completed
      </Typography>
      {todos
        .filter((todo) => todo.status === 'completed')
        .map((todo, index, filteredTodos) => (
          <>
            <Grid item display="flex" alignItems={'center'} py={1}>
              <CheckCircleIcon sx={{ color: theme.palette.success[600] }} />
              <Typography variant="textSmRegular" ml={1}>
                {todo.title}
              </Typography>
            </Grid>
            {index !== filteredTodos.length - 1 && <Divider />}
          </>
        ))}
    </>
  );
};

export interface TodosCardProps extends GridProps {
  todos?: Todo[];
  loading?: boolean;
  slots?: {
    buttonProps: ButtonProps;
  };
}

export const TodosCard = ({
  todos = [],
  slots,
  loading,
  ...props
}: TodosCardProps) => {
  const { buttonProps } = slots ?? {};
  const theme = useTheme();
  return (
    <Grid
      container
      flexDirection="column"
      gap={2}
      height={'100%'}
      sx={{
        boxSizing: 'border-box',
        padding: 3,
        backgroundColor: theme.palette.background.paper,
        border: theme.border.outlinedButton,
        borderRadius: theme.borderRadius.xl,
        boxShadow: theme.customShadows.xs,
        // maxHeight: 564,
        flexWrap: 'nowrap'
      }}
      {...props}
    >
      <Grid item display={'flex'} alignItems={'center'}>
        <ListIcon
          sx={{
            mr: 1
          }}
        />
        <Typography variant="textLgSemibold">My Todos</Typography>
        <ChevronRightIcon
          sx={{
            width: 20,
            height: 20,
            ml: 'auto'
          }}
        />
      </Grid>
      <Grid
        item
        flex={1}
        sx={{
          '&::-webkit-scrollbar': {
            display: 'none'
          },
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          overflowY: 'auto',
          height: {
            // 24 + 24 + 30.5 + 16 + 16 + 42= 152.5
            xs: 'calc(100% - 48px)',
            sm: 'calc(100% - 152.5px)'
          }
        }}
      >
        <Content todos={todos} loading={loading} />
      </Grid>
      <Grid item>
        <Button
          variant="outlined"
          startIcon={<PlusIcon />}
          label={'Add To-Do'}
          sx={{ '&': { minWidth: 'auto', width: '100%' } }}
          {...buttonProps}
        />
      </Grid>
    </Grid>
  );
};
