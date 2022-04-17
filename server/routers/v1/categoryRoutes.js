const category = require('express').Router();
const { getCategories, createCategory, updateCategory, deleteCategory } = require('../../controller/category');
const { isAuthenticated, roleAuthorization  } = require('../../middleware');

category.get('/', getCategories);
category.use(isAuthenticated);
category.use(roleAuthorization('admin'))
category.post('/', createCategory);
category.put('/:name', updateCategory);
category.delete('/:name', deleteCategory);

module.exports = category;