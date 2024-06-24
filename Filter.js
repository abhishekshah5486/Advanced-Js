// const myNums = [1, 2, -1, -10, -5, 9, 7];
// let ans = myNums.filter((item) => item != -1);
// console.log(ans);

// let newNums = [];
// myNums.forEach( (num) => {
//     if(num > 2) newNums.push(num);
// })
// console.log(newNums);

// let newNums2 = [];
// newNums2 = myNums.map((num) => {
//     if (num > 2) return num * 2;
// })
// console.log(newNums2);

let books = [
    { title: 'Book One', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Two', genre: 'Fantasy', publish: 2010, edition: 2012 },
    { title: 'Book Three', genre: 'History', publish: 2005, edition: 2010 },
    { title: 'Book Four', genre: 'Romance', publish: 2013, edition: 2014 },
    { title: 'Book Five', genre: 'Science Fiction', publish: 2018, edition: 2019 },
    { title: 'Book Six', genre: 'Mystery', publish: 2011, edition: 2015 },
    { title: 'Book Seven', genre: 'Biography', publish: 2000, edition: 2005 },
    { title: 'Book Eight', genre: 'Horror', publish: 2003, edition: 2008 },
    { title: 'Book Nine', genre: 'Science', publish: 2017, edition: 2020 },
    { title: 'Book Ten', genre: 'Fantasy', publish: 2015, edition: 2017 },
    { title: 'Book Eleven', genre: 'Non-Fiction', publish: 2009, edition: 2011 },
    { title: 'Book Twelve', genre: 'Drama', publish: 2012, edition: 2014 }
];

let userBooks = books.filter( (book) => {
    return book.genre === 'History';
})
console.log(userBooks);