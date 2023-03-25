(function (window) {
  var names = ["yassin", "Jawad", "Jamal", "Jassim", "Pamar", "Farid", "Lamal", "Passar", "Lamia", "Jassmine"];

  for (var i in names) {
    var firstLetter = names[i].charAt(0).toLowerCase();
    if (firstLetter === 'j') {
      byeSpeaker.speak(names[i]);
    } else {
      helloSpeaker.speak(names[i]);
    }
  }
})(window);

