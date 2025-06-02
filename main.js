var phrases = [
  "A banana slipped on another banana then both slipped and laughed.",
  "A dancing robot taught chickens how to moonwalk which failed utterly.",
  "Two pandas opened a pizza shop on the moon but pizza flew away.",
  "A cat became the mayor of a town full of dogs.",
  "A wizard turned broccoli into bubble gum but still got rejected.",
  "A talking potato went on a rollercoaster ride.",
  "A penguin flew a spaceship to sahara.",
  "A giant snail raced a sports car — and won! in his dreams",
  "An alien came to Earth just to eat spaghetti.",
  "A superhero hamster saved the day with his tail wiggles."
];

function generateStory() {
  var story = phrases[Math.floor(Math.random() * phrases.length)];
  document.getElementById("story").innerText = story;
}
