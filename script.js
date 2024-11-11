const questions = {
    "Historia": {
        100: { question: "¿Quién fue el científico que identificó a Rickettsia rickettsii?", answer: "Howard T. Ricketts" },
        200: { question: "¿Cuál es el nombre de la enfermedad causada por Rickettsia prowazekii?", answer: "Tifus epidémico" },
        300: { question: "¿En qué siglo fueron identificadas las primeras especies de Rickettsia?", answer: "Siglo XX" },
        400: { question: "¿Qué investigador dio nombre a una especie del grupo del tifus?", answer: "Stanislaus von Prowazek" },
        500: { question: "¿Cómo se llama la enfermedad recurrente por Rickettsia prowazekii?", answer: "Enfermedad de Brill-Zinsser" },
    },
    "Taxonomía": {
        100: { question: "¿A qué familia pertenece Rickettsia?", answer: "Rickettsiaceae" },
        // Agrega más preguntas aquí
    },
    // Agrega las demás categorías con sus preguntas aquí
};

function showQuestion(category, points) {
    const questionData = questions[category][points];
    document.getElementById("question-text").textContent = questionData.question;
    document.getElementById("answer-text").textContent = questionData.answer;
    document.getElementById("answer-text").style.display = "none";
    document.getElementById("question-modal").style.display = "block";
}

function showAnswer() {
    document.getElementById("answer-text").style.display = "block";
}

function closeModal() {
    document.getElementById("question-modal").style.display = "none";
}
