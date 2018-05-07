// not part of the workshop

'use strict'

// stores the favorite Author in a constant variable

const favoriteAuthor = {
    name: 'Ken Bruen',
    genre: 'Noir',
    nationality: 'Irish'
};

//stores the favorite book
function favoriteBook() {
    return [
        { id: 1, title: 'The Guards', author: 'Ken Bruen'},
        { id: 2, title: 'The Stand', author: 'Steven King'},
        { id: 3, title: 'The Postman Always Rings Twice', author: 'James M. Cain'}
    ];
}


// return s a list of good books
function getBookRecommendations() {
    return [
         {
             id: 1,
             title: "The Guards",
             author: "Ken Bruen"
         }, {
             id: 2,
             title: "The Stand",
             author: "Steven King"
         }, {
             id: 3,
             title: "The Postman Always Rings Twice",
             author: "James M. Cain"
         }
    ];
}

// exports the variables and function abvoe so that other modules can use them
module.exports.favoriteAuthor = favoriteAuthor;
module.exports.favoriteBook = favoriteBook;
module.exports.getBookRecommendations = getBookRecommendations;
