const category = require('express').Router();
const { getCategories, createCategory, updateCategory, deleteCategory,getCategoryByName } = require('../../controller/category');
const { isAuthenticated, roleAuthorization  } = require('../../middleware');

category.get('/:name', getCategoryByName);
category.use(isAuthenticated, roleAuthorization('admin'));
category.get('/', getCategories);
category.post('/', createCategory);
category.put('/:name', updateCategory);
category.delete('/:name', deleteCategory);

module.exports = category;