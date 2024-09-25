export const unMaskPhoneNumber = (phone: string | undefined): string => {
  return phone?.replace(/[^\d]/g, '') ?? '';
};
