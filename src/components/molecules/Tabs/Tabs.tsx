import type { TabsProps as MuiTabsProps, TabProps } from '@mui/material';
import { Tabs as MuiTabs, Tab } from '@mui/material';
import type { FormikHelpers } from 'formik';
import { Field, Formik } from 'formik';
import type { SelectOption } from 'src/components/atoms/InputBase/SelectInputBase/SelectInputBase';
import useIsSize from 'src/hooks/useIsSize';
import SelectInput from '../Inputs/SelectInput/SelectInput';
import Tooltip, { TooltipProps } from 'src/components/atoms/Tooltip/Tooltip';

interface ExtendsTabProps extends TabProps {
  tooltipProps?: TooltipProps;
}

export interface TabsProps extends MuiTabsProps {
  /**
   * List of tabs
   */
  tabs: ExtendsTabProps[];
  /**
   * Hide the selected tab indicator
   */
  hideIndicator?: boolean;
  /**
   * Show the background on the selected tab
   */
  showBackground?: boolean;
  /**
   * Show a bottom border under the tabs
   */
  showBottomBorder?: boolean;
  /**
   * Switch to dropdown on mobile
   * @default
   * true
   */
  showMobileDropdown?: boolean;
  /**
   * Optional change handler
   */
  onChange?: (event: React.SyntheticEvent, value: any) => void;
  /**
   * Optional click handler
   */
  onClick?: () => void;
  /**
   * Optional submit handler
   */
  handleSubmit?: (
    values: {},
    formikHelpers: FormikHelpers<{}>
  ) => void | Promise<any>;
}

/**
 * Primary UI component for user interaction
 */
const Tabs = ({
  tabs,
  sx,
  hideIndicator = false,
  showBackground = false,
  showBottomBorder = false,
  showMobileDropdown = true,
  onChange,
  handleSubmit,
  ...props
}: TabsProps) => {
  const { isXSmall, isMobile } = useIsSize();
  const handleChange = (
    e: React.SyntheticEvent<Element, Event>,
    value: any
  ) => {
    onChange?.(e, (e.target as any).value);
  };
  if (showMobileDropdown && (isXSmall || isMobile)) {
    return (
      <Formik
        initialValues={{}}
        onSubmit={handleSubmit ? handleSubmit : () => {}}
      >
        <Field>
          {({ field }: any) => {
            return (
              <SelectInput
                {...field}
                value={+props.value}
                onChange={handleChange}
                fullWidth={true}
                options={tabs.map((tab, index) => {
                  return {
                    value: index,
                    label: { value: tab.label }
                  } as SelectOption;
                })}
              />
            );
          }}
        </Field>
      </Formik>
    );
  }
  return (
    <MuiTabs
      sx={{ ...sx, borderRadius: 0 }}
      {...props}
      onChange={onChange}
      color={'secondary'}
      className={`${hideIndicator ? 'hide-indicator' : ''}${' '}
      ${showBackground ? 'show-background' : ''}${' '}
      ${showBottomBorder ? 'show-bottom-border' : ''}${' '}`}
    >
      {tabs.map(({ tooltipProps, ...tab }: ExtendsTabProps, index: number) => {
        return (
          <Tooltip {...tooltipProps!}>
            <Tab {...tab} key={`tab-index-[${index}]`} />
          </Tooltip>
        );
      })}
    </MuiTabs>
  );
};
export default Tabs;
