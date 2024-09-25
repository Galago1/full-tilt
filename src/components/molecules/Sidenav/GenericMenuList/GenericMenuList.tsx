import { Box, BoxProps, Collapse, CollapseProps } from '@mui/material';
import SideNavListItem from '../../SideNavListItem';
import { SideNavListItemProps } from '../../SideNavListItem/SideNavListItem';

export interface GenericMenuListProps extends BoxProps {
  listItems: SideNavListItemProps[];
  isIn: boolean;
  collapseProps?: CollapseProps;
}

const GenericMenuList = ({
  listItems,
  isIn,
  collapseProps,
  ...props
}: GenericMenuListProps) => {
  return (
    <Collapse in={isIn} {...collapseProps}>
      <Box {...props}>
        {(listItems || []).map((item, index) => {
          return <SideNavListItem key={index} {...item} />;
        })}
      </Box>
    </Collapse>
  );
};

export default GenericMenuList;
