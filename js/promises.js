//
// const wait = number => {
//     return new Promise( resolve => setTimeout(resolve, number));
// };
//
//
// wait(1000).then(() => console.log(`You'll see this after 1 second`));
// wait(3000).then(() => console.log(`You'll see this after 3 seconds`));
//
//
//
// fetch('https://cors-anywhere.herokuapp.com/https://swapi.co/api/people/1')
//     .then(res => res.json())
//     .then(data => console.log(data))
//     .catch(() => console.log('Something went wrong'));



// Create a function that accepts a GitHub username, and returns a promise that resolves with the date of the last commit that user made. Reference the github api documentation to achieve this.

function getUserEvents (username) {
    fetch(`https://cors-anywhere.herokuapp.com/https://api.github.com/users/${username}/events/public`,
        {headers: {'Authorization': 'token f0628a801fe8624d5e87577fe64801c36dc5e4ab'}})
        .then(res => res.json())
        .then(data =>
            data.filter( event => {
            if(event.type==='PushEvent'){
                return event.created_at;
            }
        })).then(data => {
            let date = new Date(data[0].created_at).toDateString();
            console.log(date);
    });
}


getUserEvents('bmills1');







// let hours = date.getHours();
// let minutes = date.getMinutes();
// let seconds = date.getSeconds();
// console.log(`${hours}:${minutes}:${seconds}`);
// return `${hours}:${minutes}:${seconds}`;

