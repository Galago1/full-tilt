import {
  Chip,
  Grid,
  IconButton,
  Theme,
  Typography,
  useTheme
} from '@mui/material';
import { Field, FieldAttributes, Form, Formik, FormikConfig } from 'formik';
import { ReactNode, useMemo } from 'react';
import { ButtonProps } from 'src/components/atoms/Button/Button';
import { ChipProps } from 'src/components/atoms/Chip/Chip';
import { ButtonGroup, Dropdown } from 'src/components/molecules';
import { ButtonGroupProps } from 'src/components/molecules/ButtonGroup/ButtonGroup';
import { KanbanData } from './Kanban';
import { KanbanListType } from './KanbanDndContent';
import { FilterLinesIcon } from 'src/components/particles/theme/icons/General/filter-lines';
import { PlusIcon } from 'src/components/particles/theme/icons/General/plus';
import { Columns03Icon } from 'src/components/particles/theme/icons/Layout/columns-03';
import { ListIcon } from 'src/components/particles/theme/icons/Layout/list';

const buttonGroupFn = (
  initialView: KanbanListType,
  currentView: KanbanListType,
  handleViewChange: (view: KanbanListType) => void,
  firstStartIcon: ReactNode = <ListIcon />,
  secondStartIcon: ReactNode = <Columns03Icon />
): Array<ButtonProps & { selected: boolean }> => {
  const listType =
    initialView === KanbanListType.DATAGRID
      ? KanbanListType.DATAGRID
      : KanbanListType.LIST;

  return [
    {
      startIcon: firstStartIcon,
      color: 'secondary',
      onClick: () => {
        (event?.currentTarget as any)?.blur?.();
        handleViewChange(listType);
      },
      selected: currentView === listType
    },
    {
      startIcon: secondStartIcon,
      color: 'secondary',
      onClick: () => {
        (event?.currentTarget as any)?.blur?.();
        handleViewChange(KanbanListType.KANBAN);
      },
      selected: currentView === KanbanListType.KANBAN
    }
  ];
};

export interface KanbanHeaderProps {
  data?: KanbanData;
  showButtonGroup?: boolean;
  showAdd?: boolean;
  showFilters?: boolean;
  filteredCards?: any[];
  sortByOptions?: {
    value: string;
    label: string;
  }[];
  anyComp?: ReactNode;

  handleTypeChange?: (type: string) => void;
  handleViewChange?: (view: KanbanListType) => void;
  view?: KanbanListType;
  initialView?: KanbanListType;
  toggleDrawer?: () => void;
  includeChip?: boolean;
  firstStartIcon?: ReactNode;
  secondStartIcon?: ReactNode;
  slots?: {
    buttonGroupProps?: ButtonGroupProps;
    formikConfig?: FormikConfig<any>;
    fieldAttributes?: FieldAttributes<any>;
    chipProps?: ChipProps;
  };
}
const KanbanHeader = ({
  data,
  showButtonGroup = true,
  showAdd = true,
  showFilters = true,
  filteredCards,
  sortByOptions,
  handleTypeChange,
  handleViewChange,
  view,
  initialView,
  toggleDrawer,
  includeChip = true,
  anyComp,
  firstStartIcon,
  secondStartIcon,
  slots
}: KanbanHeaderProps) => {
  const { buttonGroupProps, formikConfig, fieldAttributes, chipProps } =
    slots || {};
  const buttons = useMemo(
    () =>
      buttonGroupFn(
        initialView!,
        view!,
        handleViewChange!,
        firstStartIcon!,
        secondStartIcon!
      ),
    [initialView, view, handleViewChange]
  );
  const theme = useTheme();

  return (
    <Grid sx={{ flexGrow: 1 }}>
      <Grid
        container
        justifyContent="space-between"
        alignItems="center"
        gap={2}
      >
        <Grid item flex={1}>
          <Grid container alignItems="center" flexWrap={'nowrap'} gap={1}>
            <Typography variant="textLgSemibold" noWrap>
              {data!.title}
            </Typography>
            {includeChip && (
              <Chip
                variant="outlined"
                sx={{ borderRadius: theme.borderRadius.xl }}
                label={filteredCards!.length || '0'}
                {...chipProps}
              />
            )}
          </Grid>
        </Grid>
        <Grid item>
          <Grid container alignItems={'center'} flexWrap="wrap" gap={1}>
            {fieldAttributes && formikConfig && (
              <Grid item>
                <Formik {...formikConfig!}>
                  <Form>
                    <Field {...fieldAttributes} />
                  </Form>
                </Formik>
              </Grid>
            )}

            {showFilters && (
              <Grid item>
                <Dropdown
                  label="Sort By"
                  buttonProps={{
                    startIcon: (
                      <FilterLinesIcon sx={{ width: 20, height: 20 }} />
                    ),
                    variant: 'outlined',
                    color: 'secondary',
                    size: 'small',
                    sx: {
                      width: 'auto',
                      padding: theme.spacing(10 / 8, 14 / 8)
                    }
                  }}
                  dropdownListItems={sortByOptions!.map((option) => ({
                    menuItemProps: {
                      sx: {
                        padding: (theme: Theme) => theme.spacing(1.375, 2)
                      },
                      onClick: () => handleTypeChange!(option.value),
                      children: (
                        <Typography
                          variant="textSmRegular"
                          onSelect={() => handleTypeChange!(option.value)}
                          onClick={() => handleTypeChange!(option.value)}
                        >
                          {option.label}
                        </Typography>
                      )
                    }
                  }))}
                  dropdownMenuProps={{}}
                />
              </Grid>
            )}
            {showButtonGroup && (
              <Grid item>
                <ButtonGroup
                  customVariant="roundedEdges"
                  buttons={buttons}
                  {...buttonGroupProps}
                  sx={{
                    marginLeft: 12 / 8,
                    ...buttonGroupProps?.sx
                    // border: 'unset'
                  }}
                />
              </Grid>
            )}
            {showAdd && (
              <Grid item>
                <IconButton
                  onClick={toggleDrawer}
                  sx={{
                    marginLeft: 12 / 8,
                    border: theme.border.userProfile,
                    borderRadius: theme.borderRadius.md,
                    width: 40,
                    height: 40,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <PlusIcon />
                </IconButton>
              </Grid>
            )}
            {anyComp && <Grid item>{anyComp}</Grid>}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default KanbanHeader;
