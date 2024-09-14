let favActorFirstName = "Kong-sang";  
let favActorLastName = "Chan";  

let fullName = favActorFirstName + " " + favActorLastName;
console.log('Full Name:', fullName);

let uppercase = fullName.toLowerCase();
console.log('Lowercase Version of Actor Name:', uppercase);

let petName = "JJ";
let lowercase = petName.charAt(0).toUpperCase() + petName.slice(1);
console.log('Capitalized Pet Name:', lowercase);

let message = "My favorite actor is " + fullName.toUpperCase() + ".";
console.log('Message:', message);

message += " His best movie is Police Story .";
console.log('Appended Message:', message);

console.log('Favorite Actor First Name:', favActorFirstName);
console.log('Favorite Actor Last Name:', favActorLastName);
console.log('Uppercase Actor Name:', uppercase);
console.log('Capitalized Pet Name:', lowercase);
console.log('Final Message:', message);