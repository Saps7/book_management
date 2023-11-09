import express from 'express';
import { createBook, deleteBook, updateBook, getBook, getBooks } from '../controllers/bookController.js';

const router = express.Router();

router.post('/create', createBook);
router.delete('/delete/:id', deleteBook);
router.put('/update/:id', updateBook);
router.get('/get/:id', getBook);
router.get('/get', getBooks);

export default router;