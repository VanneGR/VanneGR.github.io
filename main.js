let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
 cursor: "<span style='color: #153b8f;'>|</span>",
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #745a9d;">El único límite es tu mente.</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
