// not in workshop

'use strict'

// a beginner film course
let film101 = {  
    professor: 'Mr Caruthers',
    numberOfStudents: 20,
    level: 'easy'
}

// an expert film course
let film102 = {  
    professor: 'Mrs Duguid',
    numberOfStudents: 8,
    level: 'challenging' 
}

// export the courses so other modules can use them; in long-form style
// module.exports.film101 = film101;
// module.exports.film102 = film102;

// export the courses so other modules can use them
exports.film101 = film101;  
exports.film102 = film102;  


