import { phoneRegExp } from '../../../constants/regex';
import type { StringSchema } from 'yup';
declare module 'yup' {
  interface StringSchema {
    phone(value: string): StringSchema;
  }
}

export function phone(this: StringSchema) {
  return this.test('phone', 'Invalid phone format', (value: any) => {
    // return phoneRegExp.test(value) || /^[0-9]{10}$/.test(value);
    if (!value) return true; // Allow empty values (handled by required validation if needed)
    // Format number to (XXX) XXX-XXXX if it's just digits

    if (/^\d{10}$/.test(value)) {
      const formatted = value?.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
      return phoneRegExp.test(formatted);
    }
    return phoneRegExp.test(value);
  });
}
