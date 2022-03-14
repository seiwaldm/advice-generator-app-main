getAdvice();

//die Funktion getAdvice lädt von der öffentlichen API einen zufälligen Ratschlag
async function getAdvice() {
    // richte eine GET-Anfrage an die Adresse der URL
    const res = await fetch("https://api.adviceslip.com/advice");
    // extrahiere die JSON-Daten aus der Antwort des Servers
    const data = await res.json();
    // logge die Daten auf die Browser-Konsole
    console.log(data);
    // schreibe den Advice in das richtige HTML-Element
    document.querySelector("#advice").innerHTML = data.slip.advice;
}

const bildquelle = "https://purr.objects-us-east-1.dream.io/i/2014-11-0100.23.04.jpg";

document.querySelector("#cat").src = bildquelle;

