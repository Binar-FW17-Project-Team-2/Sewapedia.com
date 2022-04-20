import * as Yup from 'yup';

export const validationAddProduct = Yup.object({
  name: Yup.string()
    .required('wajib di isi'),
  details: Yup.string()
    .required('wajib di isi'),
  price: Yup.number()
    .min(1, 'price min 1')
    .required('wajib di isi'),
  stock: Yup.number()
    .min(1, 'stock minimal 1')
    .required('wajib di isi'),
  category: Yup.string()
    .required('wajib di isi'),
})

export const validationSewa = Yup.object({
  lamaSewa: Yup.number()
    .min(1, 'min 1 hari')
    .required('wajib di isi')
})

export const validationForgotPw = Yup.object({
  email: Yup.string()
    .email('email tidak valid')
    .required('wajib di isi'),
})

export const validationResetPw = Yup.object({
  password: Yup.string()
    .min(8, 'minimal 8 karakter')
    .matches(/[a-z]/, 'minimal 1 huruf kecil')
    // .matches(/[A-Z]/, 'minimal 1 huruf besar')
    .matches(/\d/, 'minimal 1 angka')
    .required('wajib di isi'),
  confirmPassword: Yup.string()
    .min(8, 'minimal 8 karakter')
    .matches(/[a-z]/, 'minimal 1 huruf kecil')
    // .matches(/[A-Z]/, 'minimal 1 huruf besar')
    .matches(/\d/, 'minimal 1 angka')
    .required('wajib di isi'),
})