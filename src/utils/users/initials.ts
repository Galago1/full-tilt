import { Tbase } from 'src/components/organisms/Table/Table';

export const rowInitials = (
  { name }: Tbase,
  firstOnly = false,
  fullName = false
): string => {
  if (fullName) return name;
  if (firstOnly) return name?.[0];
  const names = (name as string).split(' ');
  return joinInitials(names);
};

const joinInitials = (names: string[]) => {
  return names.map((n) => (n || '')[0]).join('');
};
