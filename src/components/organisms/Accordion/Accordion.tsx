import {
  AccordionDetails,
  AccordionDetailsProps,
  AccordionSummary,
  AccordionSummaryProps,
  Accordion as MuiAccordion,
  AccordionProps as MuiAccordionProps
} from '@mui/material';
import { memo } from 'react';

const AccordionContent = memo(({ children }: any) => {
  return <>{children}</>;
});

export interface AccordionProps extends Omit<MuiAccordionProps, 'children'> {
  /**
   * Accordion summary props
   */
  accordionSummaryProps?: AccordionSummaryProps;
  /**
   * Accordion details props
   */
  accordionDetailsProps?: AccordionDetailsProps;
  /**
   * Accordion summary children
   */
  accordionSummaryChildren?: React.ReactNode;
  /**
   * Accordion details children
   */
  accordionDetailsChildren?: React.ReactNode;
  /**
   * Show icons
   */
  showIcons?: boolean;
  /**
   * Is Expanded
   */
  expanded: boolean;
  /**
   * Expanded Icon
   */
  expandedIcon?: React.ReactNode;
  /**
   * Collapsed Icon
   */
  collapsedIcon?: React.ReactNode;
}

const Accordion = ({
  accordionSummaryProps,
  accordionDetailsProps,
  accordionSummaryChildren,
  accordionDetailsChildren,
  showIcons,
  expandedIcon,
  collapsedIcon,
  expanded,
  ...props
}: AccordionProps) => {
  return (
    <MuiAccordion expanded={expanded} {...props}>
      {accordionSummaryProps && (
        <AccordionSummary
          {...accordionSummaryProps}
          // Injecting the icon is causing the ui to freeze
          expandIcon={showIcons && (expanded ? expandedIcon : collapsedIcon)}
        >
          <AccordionContent>
            {accordionSummaryChildren ? accordionSummaryChildren : null}
          </AccordionContent>
        </AccordionSummary>
      )}
      {accordionDetailsProps && (
        <AccordionDetails {...accordionDetailsProps}>
          <AccordionContent>
            {accordionDetailsChildren ? accordionDetailsChildren : null}
          </AccordionContent>
        </AccordionDetails>
      )}
    </MuiAccordion>
  );
};
export default Accordion;
