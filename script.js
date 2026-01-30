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

    // GREETINGS
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
    { category: "Greeting", question: "Pleased to meet you too", answer: "douzo yoroshiku onegaishimasu", japanese: "どうぞよろしくお願いします" },
    { category: "Greeting", question: "Express gratitude before eating your meal", answer: "itadakimasu", japanese: "いただきます" },
    { category: "Greeting", question: "Express gratitude after eating your meal", answer: "gochisousama deshita", japanese: "ごちそうさまでした" },
    { category: "Greeting", question: "Thank you for your effort", answer: "otsukaresama deshita", japanese: "おつかれさまでした" },
    { category: "Greeting", question: "I'll go ahead", answer: "osaki ni shitsureishimasu", japanese: "お先に失礼します" },
    { category: "Greeting", question: "Good morning", answer: "ohayou gozaimasu", japanese: "おはようございます" },
    { category: "Greeting", question: "Yes", answer: "hai", japanese: "はい" },
    { category: "Greeting", question: "No", answer: "iie", japanese: "いいえ" },
    { category: "Greeting", question: "Excuse me / Hello (to get attention)", answer: "shitsureishimasu", japanese: "失礼します" },
    { category: "Greeting", question: "Goodbye", answer: "sayonara", japanese: "さようなら" },
    { category: "Greeting", question: "See you later", answer: "ja ne / mata ne", japanese: "じゃね / またね" },
    { category: "Greeting", question: "How are you?", answer: "ogenki desu ka?", japanese: "お元気ですか？" },
    { category: "Greeting", question: "I'm fine", answer: "genki desu", japanese: "元気です" },
    { category: "Greeting", question: "I don't understand", answer: "wakarimasen", japanese: "わかりません" },
    { category: "Greeting", question: "Please", answer: "onegaishimasu", japanese: "お願いします" },
    { category: "Greeting", question: "Delicious", answer: "oishii", japanese: "おいしい" },

    // DAYS OF THE MONTH (1-31)
...Array.from({ length: 31 }, (_, i) => {
    const n = i + 1;
    let romaji, kana;
    switch (n) {
        case 1: romaji = "tsuitachi"; kana = "ついたち"; break;
        case 2: romaji = "futsuka"; kana = "ふつか"; break;
        case 3: romaji = "mikka"; kana = "みっか"; break;
        case 4: romaji = "yokka"; kana = "よっか"; break;
        case 5: romaji = "itsuka"; kana = "いつか"; break;
        case 6: romaji = "muika"; kana = "むいか"; break;
        case 7: romaji = "nanoka"; kana = "なのか"; break;
        case 8: romaji = "youka"; kana = "ようか"; break;
        case 9: romaji = "kokonoka"; kana = "ここのか"; break;
        case 10: romaji = "tooka"; kana = "とおか"; break;
        case 11: romaji = "juuichi nichi"; kana = "じゅういちにち"; break;
        case 12: romaji = "juuni nichi"; kana = "じゅうににち"; break;
        case 13: romaji = "juusan nichi"; kana = "じゅうさんにち"; break;
        case 14: romaji = "juuyokka"; kana = "じゅうよっか"; break;
        case 15: romaji = "juugo nichi"; kana = "じゅうごにち"; break;
        case 16: romaji = "juuroku nichi"; kana = "じゅうろくにち"; break;
        case 17: romaji = "juunana nichi"; kana = "じゅうななにち"; break;
        case 18: romaji = "juuhachi nichi"; kana = "じゅうはちにち"; break;
        case 19: romaji = "juukyuu nichi"; kana = "じゅうきゅうにち"; break;
        case 20: romaji = "hatsuka"; kana = "はつか"; break;
        case 21: romaji = "nijuuichi nichi"; kana = "にじゅういちにち"; break;
        case 22: romaji = "nijuuni nichi"; kana = "にじゅうににち"; break;
        case 23: romaji = "nijuusan nichi"; kana = "にじゅうさんにち"; break;
        case 24: romaji = "nijuuyokka"; kana = "にじゅうよっか"; break;
        case 25: romaji = "nijuugo nichi"; kana = "にじゅうごにち"; break;
        case 26: romaji = "nijuuroku nichi"; kana = "にじゅうろくにち"; break;
        case 27: romaji = "nijuunana nichi"; kana = "にじゅうななにち"; break;
        case 28: romaji = "nijuuhachi nichi"; kana = "にじゅうはちにち"; break;
        case 29: romaji = "nijuukyuu nichi"; kana = "にじゅうきゅうにち"; break;
        case 30: romaji = "sanjuu nichi"; kana = "さんじゅうにち"; break;
        case 31: romaji = "sanjuuichi nichi"; kana = "さんじゅういちにち"; break;
        default: romaji = `${n} nichi`; kana = `${n}にち`; break;
    }
    return { category: "DayOfMonth", question: `Day ${n}`, answer: romaji, japanese: kana };
}),

    // NUMBERS (1-1000)
    ...Array.from({ length: 1000 }, (_, i) => {
        const n = i + 1;
        const japaneseNumeral = numberToJapanese(n);
        return { category: "Number", question: `${n}`, answer: japaneseNumeral.romaji, japanese: japaneseNumeral.kana };
    }),

    // SELF INTRODUCTION
    { category: "SELF INTRODUCTION", question: "My name is", answer: "watashi no namae wa ___ desu", japanese: "わたしの名前は ___ です" },
    { category: "SELF INTRODUCTION", question: "My birthday is", answer: "watashi no tanjoubi wa ___ desu", japanese: "わたしの誕生日は ___ です" },
    { category: "SELF INTRODUCTION", question: "I’m ___ years old", answer: "watashi wa ___ sai desu", japanese: "わたしは ___ さいです" },
    { category: "SELF INTRODUCTION", question: "I live in", answer: "watashi wa ___ ni sunde imasu", japanese: "わたしは ___ に住んでいます" },
    { category: "SELF INTRODUCTION", question: "My hobby is", answer: "watashi no shumi wa ___ suru koto desu", japanese: "わたしの趣味は ___ することです" },
    { category: "SELF INTRODUCTION", question: "My work is", answer: "watashi wa ___ desu", japanese: "わたしは ___ です" },
    { category: "SELF INTRODUCTION", question: "My dream is", answer: "watashi no yume wa ___ ni naritai desu", japanese: "わたしの夢は ___ になりたいです" }
];

// Helper: Convert numbers 1–1000 to Japanese
function numberToJapanese(n) {
    if (n === 1000) return { romaji: "sen", kana: "せん" };
    const digits = ["", "ichi", "ni", "san", "yon", "go", "roku", "nana", "hachi", "kyuu"];
    const kanji = ["", "いち", "に", "さん", "よん", "ご", "ろく", "なな", "はち", "きゅう"];
    let romaji = "", kana = "";
    const hundreds = Math.floor(n / 100);
    const tens = Math.floor((n % 100) / 10);
    const ones = n % 10;

    if (hundreds > 0) {
        if (hundreds === 1) { romaji += "hyaku"; kana += "ひゃく"; }
        else if (hundreds === 3) { romaji += "sanbyaku"; kana += "さんびゃく"; }
        else if (hundreds === 6) { romaji += "roppyaku"; kana += "ろっぴゃく"; }
        else if (hundreds === 8) { romaji += "happyaku"; kana += "はっぴゃく"; }
        else { romaji += digits[hundreds] + "hyaku"; kana += kanji[hundreds] + "ひゃく"; }
    }

    if (tens > 0) {
        if (romaji) { romaji += " "; kana += " "; }
        if (tens === 1) { romaji += "juu"; kana += "じゅう"; }
        else { romaji += digits[tens] + "juu"; kana += kanji[tens] + "じゅう"; }
    }

    if (ones > 0) {
        if (romaji) { romaji += " "; kana += " "; }
        romaji += digits[ones];
        kana += kanji[ones];
    }

    return { romaji, kana };
}

// ---------------------------
// QUIZ SCRIPT
// ---------------------------
let filteredQuestions = [];
let current = 0;
let correctCount = localStorage.getItem("correctCount") ? parseInt(localStorage.getItem("correctCount")) : 0;

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
    filteredQuestions = selected === "all" ? [...allQuestions] : allQuestions.filter(q => q.category === selected);
    current = 0;
    loadQuestion();
}

// LOAD QUESTION
function loadQuestion() {
    const q = filteredQuestions[current];
    document.getElementById("category").innerText = `Category: ${q.category}`;
    document.getElementById("question").innerHTML = `What is "${q.question}" in Japanese?`;
    document.getElementById("answer").value = "";
    document.getElementById("result").innerText = "";       
    document.getElementById("correctAnswer").innerText = ""; 
    updateProgress();
}

// CHECK ANSWER
function checkAnswer() {
    const user = document.getElementById("answer").value.trim().toLowerCase();
    const correct = filteredQuestions[current].answer.toLowerCase();
    const answerInput = document.getElementById("answer");
    answerInput.disabled = true; // prevent multiple enters

    // Build result display immediately
    const romaji = `<b>${filteredQuestions[current].answer}</b>`;
    const kana = `<b>${filteredQuestions[current].japanese}</b>`;
    const english = `<b>${filteredQuestions[current].question}</b>`; 

    let isCorrect = false;
    if (filteredQuestions[current].category === "SELF INTRODUCTION") {
        // Use regex pattern matching: replace "___" with ".*" for flexible matching
        const pattern = correct.replace(/___/g, ".*");
        const regex = new RegExp(`^${pattern}$`, 'i');
        isCorrect = regex.test(user);
    } else {
        isCorrect = user === correct;
    }

    if (isCorrect) {
        document.getElementById("result").innerHTML = `✅ Correct! ${romaji} → ${kana} → ${english}`;
        document.getElementById("result").style.color = "green";
        document.getElementById("correctAnswer").innerHTML = "";
        correctCount++;
        localStorage.setItem("correctCount", correctCount);
    } else {
        document.getElementById("result").innerHTML = `❌ Incorrect`;
        document.getElementById("result").style.color = "red";
        document.getElementById("correctAnswer").innerHTML = `${romaji} → ${kana} → ${english}`;
    }

    updateProgress();

    // Play English → Japanese TTS in background
    const englishUtter = new SpeechSynthesisUtterance(filteredQuestions[current].question);
    englishUtter.lang = "en-US";
    englishUtter.rate = 1;

    englishUtter.onend = () => {
        const japaneseUtter = new SpeechSynthesisUtterance(filteredQuestions[current].japanese);
        japaneseUtter.lang = "ja-JP";
        japaneseUtter.rate = 1;
        speechSynthesis.speak(japaneseUtter);
    };

    speechSynthesis.speak(englishUtter);

    // Auto-next after 5 seconds
    setTimeout(() => {
        current = (current + 1) % filteredQuestions.length;
        loadQuestion();
        answerInput.disabled = false;
        answerInput.focus();
    }, 5000);
}

// PRONUNCIATION
function playSlowPronunciation() { speakEnglishThenJapanese(filteredQuestions[current], 0.5); }
function playPronunciation() { speakEnglishThenJapanese(filteredQuestions[current], 1); }

// NEXT / PREVIOUS
function nextQuestion() { current = (current + 1) % filteredQuestions.length; loadQuestion(); }
function previousQuestion() { current = (current - 1 + filteredQuestions.length) % filteredQuestions.length; loadQuestion(); }

// PROGRESS
function resetProgress() { localStorage.removeItem("correctCount"); correctCount = 0; updateProgress(); }
function updateProgress() { document.getElementById("progress").innerText = `Correct answers saved: ${correctCount}`; }

// INITIAL LOAD
filteredQuestions = [...allQuestions];
loadQuestion();

// TOGGLE MENU FUNCTION
function toggleMenu() {
    const nav = document.getElementById("nav-menu");
    nav.classList.toggle("open");
}

// ---------------------------
// ENTER KEY HANDLER (works for all categories)
// ---------------------------
document.addEventListener("DOMContentLoaded", () => {
    const answerInput = document.getElementById("answer");
    answerInput.addEventListener("keydown", function(e) {
        if (e.key === "Enter") {
            e.preventDefault(); // prevent form submit
            checkAnswer();
        }
    });
});
