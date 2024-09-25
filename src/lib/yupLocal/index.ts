import * as yup from 'yup';

import { phone } from './validations/validations';

yup.addMethod(yup.string, 'phone', phone);

export default yup;
