import * as Yup from 'yup';

export default {
  email: Yup.string().email('Invalid email address').required('Required')
};
