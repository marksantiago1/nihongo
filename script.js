const allQuestions = [
    // MONTHS
    { category: "Month", question: "January", answer: "ichi gatsu", japanese: "いちがつ" },
    { category: "Month", question: "February", answer: "ni gatsu", japanese: "にがつ" },
    { category: "Month", question: "March", answer: "san gatsu", japanese: "さんがつ" },
    { category: "Month", question: "April", answer: "shi gatsu", japanese: "しがつ" },
    { category: "Month", question: "May", answer: "go gatsu", japanese: "ごがつ" },
    { category: "Month", question: "June", answer: "roku gatsu", japanese: "ろくがつ" },
    { category: "Month", question: "July", answer: "shichi gatsu", japanese: "しちがつ" },
    { category: "Month", question: "August", answer: "hachi gatsu", japanese: "はちがつ" },
    { category: "Month", question: "September", answer: "ku gatsu", japanese: "くがつ" },
    { category: "Month", question: "October", answer: "juu gatsu", japanese: "じゅうがつ" },
    { category: "Month", question: "November", answer: "juuichi gatsu", japanese: "じゅういちがつ" },
    { category: "Month", question: "December", answer: "juuni gatsu", japanese: "じゅうにがつ" },

    // DAYS
    { category: "Day", question: "Monday", answer: "getsu youbi", japanese: "げつようび" },
    { category: "Day", question: "Tuesday", answer: "ka youbi", japanese: "かようび" },
    { category: "Day", question: "Wednesday", answer: "sui youbi", japanese: "すいようび" },
    { category: "Day", question: "Thursday", answer: "moku youbi", japanese: "もくようび" },
    { category: "Day", question: "Friday", answer: "kin youbi", japanese: "きんようび" },
    { category: "Day", question: "Saturday", answer: "do youbi", japanese: "どようび" },
    { category: "Day", question: "Sunday", answer: "nichi youbi", japanese: "にちようび" },

    // GREETINGS & POLITE EXPRESSIONS
    { category: "Greeting", question: "Hello", answer: "konnichiwa", japanese: "こんにちは" },
    { category: "Greeting", question: "Good evening", answer: "konbanwa", japanese: "こんばんは" },
    { category: "Greeting", question: "Nice to meet you", answer: "hajimemashite", japanese: "はじめまして" },
    { category: "Greeting", question: "Good night", answer: "oyasumi nasai", japanese: "おやすみなさい" },
    { category: "Greeting", question: "Thank you (polite)", answer: "arigatou gozaimasu", japanese: "ありがとうございます" },
    { category: "Greeting", question: "You're welcome", answer: "do itashimashite", japanese: "どういたしまして" },
    { category: "Greeting", question: "Excuse me / I'm sorry", answer: "sumimasen", japanese: "すみません" },
    { category: "Greeting", question: "I'm sorry", answer: "gomen nasai", japanese: "ごめんなさい" },
    { category: "Greeting", question: "I'm leaving", answer: "itte kimasu", japanese: "いってきます" },
    { category: "Greeting", question: "Please treat me well", answer: "yoroshiku onegaishimasu", japanese: "よろしくお願いします" },
    { category: "Greeting", question: "Welcome home", answer: "okaerinasai", japanese: "おかえりなさい" },
    { category: "Greeting", question: "I'm home!", answer: "tadaima", japanese: "ただいま" },
    { category: "Greeting", question: "Have a good day / Take care", answer: "itterasshai", japanese: "いってらっしゃい" },
    { category: "Greeting", question: "Congratulations (polite)", answer: "omedetou gozaimasu", japanese: "おめでとうございます" },
    { category: "Greeting", question: "Congratulations (casual)", answer: "omedetou", japanese: "おめでとう" },
    { category: "Greeting", question: "Do your best (polite)", answer: "ganbatte kudasai", japanese: "がんばってください" },
    { category: "Greeting", question: "Do your best (casual)", answer: "ganbatte", japanese: "がんばって" },
    { category: "Greeting", question: "Long time no see", answer: "hisashiburi", japanese: "ひさしぶり" },
    { category: "Greeting", question: "Excuse me / Sorry to interrupt", answer: "shitsurei shimasu", japanese: "しつれいします" },
    { category: "Greeting", question: "Excuse me for disturbing", answer: "ojama shimasu", japanese: "おじゃまします" },
    { category: "Greeting", question: "I understand", answer: "wakarimashita", japanese: "わかりました" },
    { category: "Greeting", question: "I don’t understand", answer: "wakarimasen", japanese: "わかりません" },
    { category: "Greeting", question: "Please say it again", answer: "mou ichido onegaishimasu", japanese: "もういちどおねがいします" },
    { category: "Greeting", question: "Please wait a moment", answer: "chotto matte kudasai", japanese: "ちょっとまってください" },
    { category: "Greeting", question: "It’s fun", answer: "tanoshii desu", japanese: "たのしいです" },
    { category: "Greeting", question: "I’m sad", answer: "kanashii desu", japanese: "かなしいです" },
    { category: "Greeting", question: "I’m happy", answer: "ureshii desu", japanese: "うれしいです" },
    { category: "Greeting", question: "I’m surprised", answer: "bikkuri shimashita", japanese: "びっくりしました" },
    { category: "Greeting", question: "Please help me", answer: "tasukete kudasai", japanese: "たすけてください" },
    { category: "Greeting", question: "Not allowed / No good", answer: "dame desu", japanese: "だめです" },
    { category: "Greeting", question: "That’s good / Sounds good", answer: "ii desu ne", japanese: "いいですね" },
    { category: "Greeting", question: "Really? / Is that true?", answer: "hontou desu ka", japanese: "ほんとうですか" },
    { category: "Greeting", question: "Amazing / Awesome", answer: "sugoi", japanese: "すごい" },
    { category: "Greeting", question: "That’s right / Let me see", answer: "sou desu ne", japanese: "そうですね" },
    { category: "Greeting", question: "A little / Wait a moment", answer: "chotto", japanese: "ちょっと" }
];

let filteredQuestions = [];
let current = 0;
let correctCount = localStorage.getItem("correctCount")
    ? parseInt(localStorage.getItem("correctCount"))
    : 0;

// English → Japanese TTS
function speakEnglishThenJapanese(questionObj, rate = 1) {
    const englishUtter = new SpeechSynthesisUtterance(questionObj.question);
    englishUtter.lang = "en-US";
    englishUtter.rate = 1;

    englishUtter.onend = () => {
        const japaneseUtter = new SpeechSynthesisUtterance(questionObj.japanese);
        japaneseUtter.lang = "ja-JP";
        japaneseUtter.rate = rate;
        speechSynthesis.speak(japaneseUtter);
    };

    speechSynthesis.speak(englishUtter);
}

// CATEGORY SELECTOR
function changeCategory() {
    const selected = document.getElementById("categorySelect").value;
    filteredQuestions = selected === "all"
        ? [...allQuestions]
        : allQuestions.filter(q => q.category === selected);

    current = 0;
    loadQuestion();
}

// LOAD QUESTION
function loadQuestion() {
    const q = filteredQuestions[current];
    document.getElementById("category").innerText = `Category: ${q.category}`;
    document.getElementById("question").innerText =
        `What is "${q.question}" in Japanese?`;
    document.getElementById("answer").value = "";
    document.getElementById("result").innerText = "";
    document.getElementById("correctAnswer").innerText = "";
    updateProgress();
}

// CHECK ANSWER & ANNOUNCE
function checkAnswer() {
    const user = document.getElementById("answer").value.trim().toLowerCase();
    const correct = filteredQuestions[current].answer.toLowerCase();

    // English first, then Japanese
    speakEnglishThenJapanese(filteredQuestions[current], 1);

    if (user === correct) {
        document.getElementById("result").innerText = "✅ Correct!";
        document.getElementById("result").style.color = "green";
        document.getElementById("correctAnswer").innerText = "";
        correctCount++;
        localStorage.setItem("correctCount", correctCount);
    } else {
        document.getElementById("result").innerText = "❌ Incorrect";
        document.getElementById("result").style.color = "red";
        document.getElementById("correctAnswer").innerText =
            `Correct: ${filteredQuestions[current].answer} (${filteredQuestions[current].japanese})`;
    }

    updateProgress();
}

// SLOW PRONUNCIATION
function playSlowPronunciation() {
    speakEnglishThenJapanese(filteredQuestions[current], 0.5);
}

// NORMAL PRONUNCIATION
function playPronunciation() {
    speakEnglishThenJapanese(filteredQuestions[current], 1);
}

// NEXT QUESTION
function nextQuestion() {
    current = (current + 1) % filteredQuestions.length;
    loadQuestion();
}

// PREVIOUS QUESTION
function previousQuestion() {
    current = (current - 1 + filteredQuestions.length) % filteredQuestions.length;
    loadQuestion();
}

function resetProgress() {
    localStorage.removeItem("correctCount"); // clear saved progress
    correctCount = 0; // reset counter
    updateProgress(); // update display
}

// UPDATE PROGRESS
function updateProgress() {
    document.getElementById("progress").innerText =
        `Correct answers saved: ${correctCount}`;
}

// INITIAL LOAD
filteredQuestions = [...allQuestions];
loadQuestion();

// ENTER KEY HANDLER (auto-next after 3 seconds)
document.getElementById("answer").addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
        checkAnswer();
        setTimeout(nextQuestion, 3000); // give 3 seconds to read
    }
});
