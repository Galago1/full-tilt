import { phoneRegExp } from '../../../constants/regex';
import type { StringSchema } from 'yup';
declare module 'yup' {
  interface StringSchema {
    phone(value: string): StringSchema;
  }
}

export function phone(this: StringSchema) {
  return this.test('phone', 'Invalid phone format', (value: any) => {
    return phoneRegExp.test(value) || /^[0-9]{10}$/.test(value);
  });
}
