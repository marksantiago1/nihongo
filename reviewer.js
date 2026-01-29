// Reviewer Data and Functionality

// Months Data
const monthsData = [
    {
        english: "January",
        romaji: "ichi gatsu",
        kana: "いちがつ",
        explanation: "The first month of the year in Japanese.",
        example: "Watashi no tanjoubi wa ichi gatsu desu. (My birthday is in January.)",
        keyVocab: ["tanjoubi - birthday", "desu - is/am/are"]
    },
    {
        english: "February",
        romaji: "ni gatsu",
        kana: "にがつ",
        explanation: "The second month, often associated with Valentine's Day.",
        example: "Ni gatsu ni wa haru ga hajimarimasu. (Spring begins in February.)",
        keyVocab: ["haru - spring", "hajimarimasu - begins"]
    },
    {
        english: "March",
        romaji: "san gatsu",
        kana: "さんがつ",
        explanation: "The third month, end of winter in Japan.",
        example: "San gatsu wa sakura no kisetsu desu. (March is cherry blossom season.)",
        keyVocab: ["sakura - cherry blossom", "kisetsu - season"]
    },
    {
        english: "April",
        romaji: "shi gatsu",
        kana: "しがつ",
        explanation: "The fourth month, start of the school year.",
        example: "Shi gatsu kara gakkou ga hajimarimasu. (School starts in April.)",
        keyVocab: ["gakkou - school", "kara - from"]
    },
    {
        english: "May",
        romaji: "go gatsu",
        kana: "ごがつ",
        explanation: "The fifth month, Golden Week holidays.",
        example: "Go gatsu wa Golden Week desu. (May is Golden Week.)",
        keyVocab: ["Golden Week - Golden Week (holiday period)"]
    },
    {
        english: "June",
        romaji: "roku gatsu",
        kana: "ろくがつ",
        explanation: "The sixth month, rainy season starts.",
        example: "Roku gatsu wa tsuyu no kisetsu desu. (June is the rainy season.)",
        keyVocab: ["tsuyu - rainy season"]
    },
    {
        english: "July",
        romaji: "shichi gatsu",
        kana: "しちがつ",
        explanation: "The seventh month, hot summer.",
        example: "Shichi gatsu wa atsui desu. (July is hot.)",
        keyVocab: ["atsui - hot"]
    },
    {
        english: "August",
        romaji: "hachi gatsu",
        kana: "はちがつ",
        explanation: "The eighth month, peak of summer.",
        example: "Hachi gatsu ni wa obon ga arimasu. (There is Obon in August.)",
        keyVocab: ["obon - Obon (festival for ancestors)"]
    },
    {
        english: "September",
        romaji: "ku gatsu",
        kana: "くがつ",
        explanation: "The ninth month, start of autumn.",
        example: "Ku gatsu wa aki ga hajimarimasu. (Autumn begins in September.)",
        keyVocab: ["aki - autumn"]
    },
    {
        english: "October",
        romaji: "juu gatsu",
        kana: "じゅうがつ",
        explanation: "The tenth month, harvest time.",
        example: "Juu gatsu wa shuukaku no kisetsu desu. (October is harvest season.)",
        keyVocab: ["shuukaku - harvest"]
    },
    {
        english: "November",
        romaji: "juuichi gatsu",
        kana: "じゅういちがつ",
        explanation: "The eleventh month, cooler weather.",
        example: "Juuichi gatsu wa suzushiku narimasu. (November becomes cool.)",
        keyVocab: ["suzushiku - cool (adverb)", "narimasu - becomes"]
    },
    {
        english: "December",
        romaji: "juuni gatsu",
        kana: "じゅうにがつ",
        explanation: "The twelfth month, winter and holidays.",
        example: "Juuni gatsu wa fuyu desu. (December is winter.)",
        keyVocab: ["fuyu - winter"]
    }
];

// Days Data
const daysData = [
    {
        english: "Monday",
        romaji: "getsu youbi",
        kana: "げつようび",
        explanation: "The first day of the work week.",
        example: "Getsu youbi ni wa renshuu ga arimasu. (There is practice on Monday.)",
        keyVocab: ["renshuu - practice", "arimasu - there is"]
    },
    {
        english: "Tuesday",
        romaji: "ka youbi",
        kana: "かようび",
        explanation: "The second day of the week.",
        example: "Ka youbi wa tenki ga yoi desu. (The weather is good on Tuesday.)",
        keyVocab: ["tenki - weather", "yoi - good"]
    },
    {
        english: "Wednesday",
        romaji: "sui youbi",
        kana: "すいようび",
        explanation: "Mid-week day.",
        example: "Sui youbi ni aimashou. (Let's meet on Wednesday.)",
        keyVocab: ["aimashou - let's meet"]
    },
    {
        english: "Thursday",
        romaji: "moku youbi",
        kana: "もくようび",
        explanation: "Almost the weekend.",
        example: "Moku youbi wa isogashii desu. (Thursday is busy.)",
        keyVocab: ["isogashii - busy"]
    },
    {
        english: "Friday",
        romaji: "kin youbi",
        kana: "きんようび",
        explanation: "End of the work week.",
        example: "Kin youbi wa nomikai ga arimasu. (There is a drinking party on Friday.)",
        keyVocab: ["nomikai - drinking party"]
    },
    {
        english: "Saturday",
        romaji: "do youbi",
        kana: "どようび",
        explanation: "Weekend day for relaxation.",
        example: "Do youbi wa yasumi desu. (Saturday is a day off.)",
        keyVocab: ["yasumi - day off"]
    },
    {
        english: "Sunday",
        romaji: "nichi youbi",
        kana: "にちようび",
        explanation: "Rest day, start of the week.",
        example: "Nichi youbi ni wa terebi o mimasu. (I watch TV on Sunday.)",
        keyVocab: ["terebi - TV", "mimasu - watch"]
    }
];

// Greetings Data
const greetingsData = [
    {
        english: "Hello",
        romaji: "konnichiwa",
        kana: "こんにちは",
        explanation: "General daytime greeting.",
        example: "Konnichiwa, genki desu ka? (Hello, how are you?)",
        keyVocab: ["genki - healthy/well", "desu ka - is it?"]
    },
    {
        english: "Good evening",
        romaji: "konbanwa",
        kana: "こんばんは",
        explanation: "Evening greeting.",
        example: "Konbanwa, oidekite ureshii desu. (Good evening, I'm glad you came.)",
        keyVocab: ["oidekite - came (honorific)", "ureshii - glad"]
    },
    {
        english: "Nice to meet you",
        romaji: "hajimemashite",
        kana: "はじめまして",
        explanation: "Used when meeting someone for the first time.",
        example: "Hajimemashite, [name] to moushimasu. (Nice to meet you, I'm [name].)",
        keyVocab: ["moushimasu - say (humble)"]
    },
    {
        english: "Good night",
        romaji: "oyasumi nasai",
        kana: "おやすみなさい",
        explanation: "Said before going to sleep.",
        example: "Oyasumi nasai, yoi yume o. (Good night, sweet dreams.)",
        keyVocab: ["yume - dream", "yoi - good"]
    },
    {
        english: "Thank you (polite)",
        romaji: "arigatou gozaimasu",
        kana: "ありがとうございます",
        explanation: "Polite way to say thank you.",
        example: "Arigatou gozaimasu, tasukarimashita. (Thank you, you helped me.)",
        keyVocab: ["tasukarimashita - helped"]
    },
    {
        english: "You're welcome",
        romaji: "do itashimashite",
        kana: "どういたしまして",
        explanation: "Response to thank you.",
        example: "Arigatou gozaimasu. Do itashimashite. (Thank you. You're welcome.)",
        keyVocab: []
    },
    {
        english: "Excuse me / I'm sorry",
        romaji: "sumimasen",
        kana: "すみません",
        explanation: "Used to apologize or get attention.",
        example: "Sumimasen, koko wa doko desu ka? (Excuse me, where is this place?)",
        keyVocab: ["doko - where"]
    },
    {
        english: "I'm sorry",
        romaji: "gomen nasai",
        kana: "ごめんなさい",
        explanation: "More casual apology.",
        example: "Gomen nasai, osoku natte shimaimashita. (I'm sorry, I became late.)",
        keyVocab: ["osoku - late", "natte shimaimashita - ended up becoming"]
    },
    {
        english: "I'm leaving",
        romaji: "itte kimasu",
        kana: "いってきます",
        explanation: "Said when leaving home.",
        example: "Itte kimasu, itterasshai. (I'm leaving, take care.)",
        keyVocab: ["itterasshai - take care (response)"]
    },
    {
        english: "Please treat me well",
        romaji: "yoroshiku onegaishimasu",
        kana: "よろしくお願いします",
        explanation: "Used when asking for favor or introduction.",
        example: "Hajimemashite, yoroshiku onegaishimasu. (Nice to meet you, please treat me well.)",
        keyVocab: []
    },
    {
        english: "Welcome home",
        romaji: "okaerinasai",
        kana: "おかえりなさい",
        explanation: "Greeting when someone returns home.",
        example: "Okaerinasai, tadaima. (Welcome home, I'm home.)",
        keyVocab: ["tadaima - I'm home"]
    },
    {
        english: "I'm home!",
        romaji: "tadaima",
        kana: "ただいま",
        explanation: "Said upon returning home.",
        example: "Tadaima, okaerinasai. (I'm home, welcome home.)",
        keyVocab: []
    },
    {
        english: "Have a good day / Take care",
        romaji: "itterasshai",
        kana: "いってらっしゃい",
        explanation: "Said to someone leaving home.",
        example: "Itterasshai, ki o tsukete. (Take care, be careful.)",
        keyVocab: ["ki o tsukete - be careful"]
    },
    {
        english: "Congratulations (polite)",
        romaji: "omedetou gozaimasu",
        kana: "おめでとうございます",
        explanation: "Polite congratulations.",
        example: "Shoushitsu omedetou gozaimasu. (Congratulations on your promotion.)",
        keyVocab: ["shoushitsu - promotion"]
    },
    {
        english: "Congratulations (casual)",
        romaji: "omedetou",
        kana: "おめでとう",
        explanation: "Casual congratulations.",
        example: "Omedetou, ganbatta ne. (Congratulations, you did your best.)",
        keyVocab: ["ganbatta - did one's best", "ne - right?/isn't it?"]
    },
    {
        english: "Do your best (polite)",
        romaji: "ganbatte kudasai",
        kana: "がんばってください",
        explanation: "Encouragement to do well.",
        example: "Ashita no shiken, ganbatte kudasai. (Do your best on tomorrow's exam.)",
        keyVocab: ["ashita - tomorrow", "shiken - exam"]
    },
    {
        english: "Do your best (casual)",
        romaji: "ganbatte",
        kana: "がんばって",
        explanation: "Casual encouragement.",
        example: "Ganbatte, kitto dekiru yo. (Do your best, you can definitely do it.)",
        keyVocab: ["kitto - surely", "dekiru - can do", "yo - emphasis particle"]
    }
];

// Days of Month Data (sample, can be expanded)
const daysofmonthData = [
    {
        english: "1st",
        romaji: "tsuitachi",
        kana: "ついたち",
        explanation: "The first day of the month.",
        example: "Tsuitachi ni wa shinbun o yomimasu. (I read the newspaper on the 1st.)",
        keyVocab: ["shinbun - newspaper", "yomimasu - read"]
    },
    {
        english: "2nd",
        romaji: "futsuka",
        kana: "ふつか",
        explanation: "The second day.",
        example: "Futsuka wa tomodachi to au. (I meet friends on the 2nd.)",
        keyVocab: ["tomodachi - friend", "au - meet"]
    },
    // Add more as needed, following the pattern

];

// Helper for numbers
const singleDigits = {
    1: { romaji: 'ichi', kana: 'いち' },
    2: { romaji: 'ni', kana: 'に' },
    3: { romaji: 'san', kana: 'さん' },
    4: { romaji: 'shi', kana: 'し' },
    5: { romaji: 'go', kana: 'ご' },
    6: { romaji: 'roku', kana: 'ろく' },
    7: { romaji: 'shichi', kana: 'しち' },
    8: { romaji: 'hachi', kana: 'はち' },
    9: { romaji: 'ku', kana: 'く' },
};

const compoundDigits = {
    1: { romaji: 'ichi', kana: 'いち' },
    2: { romaji: 'ni', kana: 'に' },
    3: { romaji: 'san', kana: 'さん' },
    4: { romaji: 'yon', kana: 'よん' },
    5: { romaji: 'go', kana: 'ご' },
    6: { romaji: 'roku', kana: 'ろく' },
    7: { romaji: 'nana', kana: 'なな' },
    8: { romaji: 'hachi', kana: 'はち' },
    9: { romaji: 'kyuu', kana: 'きゅう' },
};

function numberToJapanese(num) {
    if (num === 0) return { romaji: 'zero', kana: 'ゼロ' };
    let romaji = '';
    let kana = '';
    if (num >= 1000) {
        romaji += 'sen';
        kana += 'せん';
        num -= 1000;
    }
    if (num >= 100) {
        let h = Math.floor(num / 100);
        if (h === 1) {
            romaji += 'hyaku';
            kana += 'ひゃく';
        } else if (h === 3) {
            romaji += 'sanbyaku';
            kana += 'さんびゃく';
        } else if (h === 6) {
            romaji += 'roppyaku';
            kana += 'ろっぴゃく';
        } else if (h === 8) {
            romaji += 'happyaku';
            kana += 'はっぴゃく';
        } else {
            romaji += compoundDigits[h].romaji + 'hyaku';
            kana += compoundDigits[h].kana + 'ひゃく';
        }
        num %= 100;
    }
    if (num >= 10) {
        let t = Math.floor(num / 10);
        if (t === 1) {
            romaji += 'juu';
            kana += 'じゅう';
        } else {
            romaji += compoundDigits[t].romaji + 'juu';
            kana += compoundDigits[t].kana + 'じゅう';
        }
        num %= 10;
    }
    if (num > 0) {
        romaji += singleDigits[num].romaji;
        kana += singleDigits[num].kana;
    }
    return { romaji, kana };
}

function generateNumbersData() {
    const data = [];
    for (let num = 1; num <= 1000; num++) {
        const jp = numberToJapanese(num);
        data.push({
            english: num.toString(),
            romaji: jp.romaji,
            kana: jp.kana,
            explanation: `The number ${num}.`,
            example: `${jp.romaji} (${num}).`,
            keyVocab: []
        });
    }
    return data;
}

// Numbers Data (1 to 1000)
const numbersData = generateNumbersData();

// Current data based on page
let currentData = [];

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
    // Determine which page we're on
    const path = window.location.pathname;
    if (path.includes('months')) {
        currentData = monthsData;
        document.getElementById('pageTitle').textContent = 'Months Reviewer';
    } else if (path.includes('days')) {
        currentData = daysData;
        document.getElementById('pageTitle').textContent = 'Days Reviewer';
    } else if (path.includes('greetings')) {
        currentData = greetingsData;
        document.getElementById('pageTitle').textContent = 'Greetings Reviewer';
    } else if (path.includes('daysofmonth')) {
        currentData = daysofmonthData;
        document.getElementById('pageTitle').textContent = 'Days of the Month Reviewer';
    } else if (path.includes('numbers')) {
        currentData = numbersData;
        document.getElementById('pageTitle').textContent = 'Numbers Reviewer';
    }

    // Populate category dropdown
    populateCategoryDropdown();

    // Display all lessons initially
    displayLessons(currentData);
});

// Populate category dropdown (for subtopics if needed)
function populateCategoryDropdown() {
    const categorySelect = document.getElementById('categorySelect');
    // For now, just "All" since each page is for one category
    categorySelect.innerHTML = '<option value="all">All</option>';
}

// Search functionality
document.getElementById('searchInput').addEventListener('input', function() {
    const searchTerm = this.value.toLowerCase();
    const filteredData = currentData.filter(item =>
        item.english.toLowerCase().includes(searchTerm) ||
        item.romaji.toLowerCase().includes(searchTerm) ||
        item.kana.includes(searchTerm) ||
        item.explanation.toLowerCase().includes(searchTerm) ||
        item.example.toLowerCase().includes(searchTerm) ||
        item.keyVocab.some(vocab => vocab.toLowerCase().includes(searchTerm))
    );
    displayLessons(filteredData);
});

// Category filter (placeholder for future expansion)
document.getElementById('categorySelect').addEventListener('change', function() {
    // For now, just display all since each page is one category
    displayLessons(currentData);
});

// Display lessons
function displayLessons(data) {
    const container = document.getElementById('lessonsContainer');
    if (data.length === 0) {
        container.innerHTML = '<p class="no-results">No lessons found matching your search.</p>';
        return;
    }

    container.innerHTML = data.map(item => `
        <div class="lesson-card">
            <h3>${item.english}</h3>
            <p class="romaji">${item.romaji}</p>
            <p class="kana">${item.kana}</p>
            <p class="explanation">${item.explanation}</p>
            <div class="example">
                <strong>Example:</strong> ${item.example}
            </div>
            ${item.keyVocab.length > 0 ? `
                <div class="key-vocab">
                    <strong>Key Vocabulary:</strong>
                    <ul>
                        ${item.keyVocab.map(vocab => `<li>${vocab}</li>`).join('')}
                    </ul>
                </div>
            ` : ''}
        </div>
    `).join('');
}
