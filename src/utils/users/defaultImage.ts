import { Tbase } from 'src/components/organisms/Table/Table';

export const rowDefaultImage = ({ row }: { row: Tbase }): string => {
  const isDefault = row.image === '/placeholder.png';
  return isDefault ? '' : (row.image as string);
};
