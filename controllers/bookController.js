import Book from '../models/bookModel.js';

export const createBook = async (req, res, next) => {
    try {
        if(req.body.author === "" || req.body.title === "" || req.body.summary === "" )
            return res.status(400).json({error: "Please ensure none of the fields are empty"});
        const book = await Book.create(req.body);
        return res.status(201).json(book);
    } catch (error) {
        next(error);
    }
};

export const deleteBook = async (req, res, next) => {
    try {
        const book = await Book.findById(req.params.id);

        if (!book) {
            return res.status(404).json({error: "Book not found"});
        }
        await Book.findByIdAndDelete(req.params.id);
        res.status(200).json('Book has been deleted!');
    } catch (error) {
        next(error);
    }
};

export const updateBook = async (req, res, next) => {
    try {    
        const book = await Book.findById(req.params.id);
        if (!book) {
            return res.status(404).json({error: "Book not found"});
            next();
        }

        const updatedBook = await Book.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        res.status(200).json(updatedBook);
    } catch (error) {
        next(error);
    }
};

export const getBook = async (req, res, next) => {
    try {
        const book = await Book.findById(req.params.id);
        if (!book) {
            return res.status(404).json({error: "Book not found"});
        }
        res.status(200).json(book);
    } catch (error) {
        next(error);
    }
};

export const getBooks = async (req, res, next) => {
    try {
        const books = await Book.find()
            .sort({ 'createdAt': 'desc' });

        return res.status(200).json(books);
    } catch (error) {
        next(error);
    }
};
