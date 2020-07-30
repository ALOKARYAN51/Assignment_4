/*
Solution of assignment 4:
Expected output:
Hello Alok
Good Bye John
Good Bye Jen
Good Bye Jason
Hello Aman
Hello Deep
Hello Alokx
Hello Pawan
Hello anu
Good Bye nive
*/

(function() {
    var names = ["Alok", "John", "Jen", "Jason", "Aman", "Deep", "Alokx", "Pawan", "anu", "nive"];
    for (var i = 0; i < names.length; i++) {
        var firstLetter = names[i].charAt(0).toLowerCase();
        if (firstLetter === 'j') {
            byeSpeaker.speak(names[i]);
        } else {
            helloSpeaker.speak(names[i]);
        }
    }
})();