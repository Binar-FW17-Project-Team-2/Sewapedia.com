import * as Yup from 'yup';

export const validationAddProduct = Yup.object({
  name: Yup.string()
    .required('wajib di isi'),
  details: Yup.string()
    .required('wajib di isi'),
  price: Yup.number()
    .required('wajib di isi'),
  stock: Yup.number()
    .required('wajib di isi'),
  category: Yup.string()
    .required('wajib di isi'),
})

export const validationSewa = Yup.object({
  lamaSewa: Yup.string()
    .required('wajib di isi')
})