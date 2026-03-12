const router = require('express').Router();

const { getUsers, getUser, createUser, updateUser, deleteUser } = require('../controllers/books')

router.get('/books', getBooks);
router.get('/books/:book_id', getBook);
router.post('/books', createUser);
router.patch('/books/:book_id', updateUser);
router.delete('/books/:book_id', deleteUser);

module.exports = router;