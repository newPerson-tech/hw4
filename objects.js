const user = {
    age: null,
    currentPlaceOfResidence: null,
    favSport: null
};


user.age = prompt('How old are you?', 0);
user.currentPlaceOfResidence = prompt('What is your current place of residence?', ' ');
user.favSport = prompt('What is your favorite sport? (football/tennis/rugby)', ' ');


function showCurrentCity(city) {
    switch (city.toLowerCase()) {
        case 'london': return 'You live in the capital of UK, good for you!';
        case 'washington': return 'You live in the capital of USA, how do you feel about that?';
        case 'kyiv': return 'You live in the capital of Ukraine. The best place on Earth I swear!';
        default: return 'You live in ' + city + '.';
    }
}


function showSportsLegends(sport) {
    switch (sport.toLowerCase()) {
        case 'football': return 'Would you want to become a new Messi?';
        case 'tennis': return 'Do you think you could beat Djocovic?';
        case 'rugby': return 'Do you know Etzebeth? Me neither!';
        default: return 'You are a fan of ' + sport + ' and I can do nothing with that!';
    }
}


let message = 'Hey, you are ' + user.age + ' old, ' +

    showCurrentCity(user.currentPlaceOfResidence) + ' ' +

    showSportsLegends(user.favSport);


alert(message);
