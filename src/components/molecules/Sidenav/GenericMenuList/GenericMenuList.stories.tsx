import GenericMenuList, { GenericMenuListProps } from './GenericMenuList';

export default {
  title: 'Molecules/SideNav/Generic Menu List',
  component: GenericMenuList
};

export const Default = (props: GenericMenuListProps) => (
  <GenericMenuList {...props} />
);
Default.args = { price: 750 };
