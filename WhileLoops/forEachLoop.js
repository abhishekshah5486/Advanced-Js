// const coding = ['java', 'react', 'redux', 'mongo', 'python'];
// coding.forEach(function(item){
//     console.log(item);
// })
// coding.forEach((item) => {console.log(item)});

const myCoding = [
    {
        'languageName' : 'Javascript',
        'languageFileName' : '.js'
    },
    {
        'languageName' : 'Java',
        'languageFileName' : '.java'
    },
    {
        'languageName' : 'python',
        'languageFileName' : '.py'
    }
];

myCoding.forEach( (item) => {
    console.log(item.languageName);
    console.log(item.languageFileName);
} );