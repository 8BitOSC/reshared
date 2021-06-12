// document.getElementById("gobo").innerHTML = '<img src="gobo.svg">';
   function setRandom() {
    const random = Math.floor(Math.random() * reasons.length);
    const randomButton = Math.floor(Math.random() * buttonTexts.length);
    console.log(random, reasons[random]);
    console.log(randomButton, buttonTexts[randomButton]);
    document.getElementById("reason").innerHTML = reasons[random];
    reason.setAttribute('Title', reasons[random] + ' - generated reason');
    document.querySelector('#randomButton').textContent = buttonTexts[randomButton];
      var woo = new Audio('wooooo.wav');
    woo.play();
    }
    function copyReason() {
      var doot = new Audio('doot.wav');
      doot.play(); 
        var text = document.getElementById("reason").innerHTML
        copyToClipboard(text)
    }
    function copyToClipboard(text) {
  window.prompt("Copy to clipboard: Ctrl+C, Enter", text);
}
function showInfo() {
  if ( document.getElementById("infobox").hidden=== true) {
    document.getElementById("infobox").hidden=false;
  } else {
    document.getElementById("infobox").hidden=true;
  }
}
    const reasons = ['i added a new feature', 'my dog ate my homework', 'it is a cloud game and someone was afk so i wanted to kick them out', '"mass reported"', 'i wanted to test the exploit', 'i messed up the order of my projects', 'idk', 'this is a free country', 'i was told i would get free candy', 'i needed to fix a bug', 'i wanted to add more famous scratchers to get their attention', 'i forgot sorry', "oh? i reshared it? i don't remember doing that", 'i fixed a LOT of bugs', 'I WANTED TRENDING PLZ FORGIVE ME I NOT FAMOUS', 'i wanted to. none of your business', "of a GAME BREAKING bug that  i didn't notice before the project got on trending", 'a cow ran in my house and pulled a pig and the pig fell on my dog and my mom grabbed the phone and dropped it then a bird picked it up and aCcIdEnTaLlY clicked the unshare button...', 'i wanted it to get mass reported', 'while resharing one of my older projects they went to the front of my projects list so to hide that i had to reshare this one', "it wasn't actually me, it was my cat, I swear--", 'scratch is all about fame these days.', 'i was on mobile and i press unshare, oops', 'my brother unshared all my projects'];
    const buttonTexts = ['another one please', 'more', 'i want more trending', 'i need more', 'another']
    /* var intro = new Audio('Dodo.wav');
    intro.play(); */
    setRandom()    
    showInfo()
 
