const timeOfDay = "stormy night"; 
const mathResult = 10 - 7;  
const booleanValue = timeOfDay.includes("night"); 
const person = { name: "Alex", age: 30 }; 
const object1Owner = person.name; 

  
const story = `  
On a ${timeOfDay}, I ventured into the haunted house. The creaking walls seemed to whisper, sending chills down my spine. Suddenly, a ghost appeared, its glowing eyes piercing through the darkness. My heart raced as it floated silently toward me. Did you know ${mathResult} equals ${mathResult}? Spooky, right?  
`;  

 
document.getElementById("madlibs-output").textContent = story;  

 
console.log(story);  
