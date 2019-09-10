const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

//
// Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.

const highLanguages = users.filter((user)=> user.languages.length >= 3 );
console.log(highLanguages);


//     Use .map to create an array of strings where each element is a user's email address
let userEmails = users.map((user)=> user.email);
console.log(userEmails);

// Use .reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average.
let totalExperience =users.reduce((totalExp, user) => totalExp + user.yearsOfExperience, 0);
console.log(totalExperience);
console.log(totalExperience/users.length);

let longestEmail = users.reduce((longestEmail, user)=> {
    if(longestEmail.length< user.email.length){
        longestEmail =user.email
    }
    return longestEmail;
}, '');
console.log(longestEmail);

//     Use .reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.

const instructorsList = users.reduce((sentence, user, i) => {
    if(i < users.length-1) {
        sentence += user.name + ", ";
    }else{
        sentence += `and ${user.name}.`
    }
    return sentence
    }
    , 'Your instructors are: ');
console.log(instructorsList);

// Use .reduce to get the unique list of languages from the list of users.
// const uniqueLang = users.reduce((listOfLangs), user) => {
//     for (const lang of user.languages){
//         if(listOfLangs.indexOf(lang)===-1){
//             listOfLangs.push(lang)
//         }
//     }
//     return listOfLangs
//
// }, []);


