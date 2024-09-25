import Dropdown from 'src/components/molecules/Dropdown';
import { DropdownProps } from 'src/components/molecules/Dropdown/Dropdown';

export interface FilterFormProps extends DropdownProps {}

const FilterForm = ({ ...props }: FilterFormProps) => {
  return <Dropdown {...props}></Dropdown>;
};
export default FilterForm;
