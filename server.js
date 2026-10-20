const express = require('express');
const mongoose = require('mongoose');
const Book = require('./bookModel');

const app = express();

app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/bookstoreDB')
.then(() => {
console.log('MongoDB connected successfully!');
})
.catch((error) => {
console.log('MongoDB connection error:', error.message);
});

// Home route
app.get('/', (req, res) => {
res.send('Welcome to Bookstore Inventory Management API!');
});

// Get all books
// Get a book by ID
app.get('/books/:id', async (req, res) => {
try {
const book = await Book.findById(req.params.id);

    if (!book) {
        return res.status(404).json({
            message: 'Book not found'
        });
    }

    res.json(book);
} catch (error) {
    res.status(400).json({
        message: 'Invalid book ID'
    });
}


});


// Add a new book
app.post('/books', async (req, res) => {
try {
const book = new Book(req.body);
const savedBook = await book.save();
res.status(201).json(savedBook);
} catch (error) {
res.status(400).json({ message: error.message });
}
});
// Delete a book by ID
app.delete('/books/:id', async (req, res) => {
    try {
        const deletedBook = await Book.findByIdAndDelete(req.params.id);

        if (!deletedBook) {
            return res.status(404).json({
                message: 'Book not found'
            });
        }

        res.json({
            message: 'Book deleted successfully',
            book: deletedBook
        });

    } catch (error) {
        res.status(400).json({
            message: 'Invalid book ID'
        });
    }
});

// Start server
app.listen(3000, () => {
console.log('Server running at http://localhost:3000');
});

// Update a book by ID
app.put('/books/:id', async (req, res) => {
    try {
        const updatedBook = await Book.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );

        if (!updatedBook) {
            return res.status(404).json({
                message: 'Book not found'
            });
        }

        res.json({
            message: 'Book updated successfully',
            book: updatedBook
        });

    } catch (error) {
        res.status(400).json({
            message: 'Error updating book',
            error: error.message
        });
    }
});