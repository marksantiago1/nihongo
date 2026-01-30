// Reviewer Data and Functionality

const quizData = {
    GREETINGS: [
        { question: "Hello", answer: "konnichiwa", japanese: "こんにちは" },
        { question: "Good evening", answer: "konbanwa", japanese: "こんばんは" },
        { question: "Nice to meet you", answer: "hajimemashite", japanese: "はじめまして" },
        { question: "Good night", answer: "oyasumi nasai", japanese: "おやすみなさい" },
        { question: "Thank you (polite)", answer: "arigatou gozaimasu", japanese: "ありがとうございます" },
        { question: "You're welcome", answer: "do itashimashite", japanese: "どういたしまして" },
        { question: "Excuse me / I'm sorry", answer: "sumimasen", japanese: "すみません" },
        { question: "I'm sorry", answer: "gomen nasai", japanese: "ごめんなさい" },
        { question: "I'm leaving", answer: "itte kimasu", japanese: "いってきます" },
        { question: "Please treat me well", answer: "yoroshiku onegaishimasu", japanese: "よろしくお願いします" },
        { question: "Welcome home", answer: "okaerinasai", japanese: "おかえりなさい" },
        { question: "I'm home!", answer: "tadaima", japanese: "ただいま" },
        { question: "Have a good day / Take care", answer: "itterasshai", japanese: "いってらっしゃい" },
        { question: "Congratulations (polite)", answer: "omedetou gozaimasu", japanese: "おめでとうございます" },
        { question: "Congratulations (casual)", answer: "omedetou", japanese: "おめでとう" },
        { question: "Do your best (polite)", answer: "ganbatte kudasai", japanese: "がんばってください" },
        { question: "Do your best (casual)", answer: "ganbatte", japanese: "がんばって" },
        { question: "Pleased to meet you too", answer: "douzo yoroshiku onegaishimasu", japanese: "どうぞよろしくお願いします" },
        { question: "Express gratitude before eating your meal", answer: "itadakimasu", japanese: "いただきます" },
        { question: "Express gratitude after eating your meal", answer: "gochisousama deshita", japanese: "ごちそうさまでした" },
        { question: "Thank you for your effort", answer: "otsukaresama deshita", japanese: "おつかれさまでした" },
        { question: "I'll go ahead", answer: "osaki ni shitsureishimasu", japanese: "お先に失礼します" },
        { question: "Good morning", answer: "ohayou gozaimasu", japanese: "おはようございます" },
        { question: "Yes", answer: "hai", japanese: "はい" },
        { question: "No", answer: "iie", japanese: "いいえ" },
        { question: "Excuse me / Hello (to get attention)", answer: "shitsureishimasu", japanese: "失礼します" },
        { question: "Goodbye", answer: "sayonara", japanese: "さようなら" },
        { question: "See you later", answer: "ja ne / mata ne", japanese: "じゃね / またね" },
        { question: "How are you?", answer: "ogenki desu ka?", japanese: "お元気ですか？" },
        { question: "I'm fine", answer: "genki desu", japanese: "元気です" },
        { question: "I don't understand", answer: "wakarimasen", japanese: "わかりません" },
        { question: "Please", answer: "onegaishimasu", japanese: "お願いします" },
        { question: "Delicious", answer: "oishii", japanese: "おいしい" }
    ],

    SELF_INTRODUCTION: [
        { question: "My name is", answer: "watashi no namae wa ___ desu", japanese: "わたしの名前は ___ です" },
        { question: "My birthday is", answer: "watashi no tanjoubi wa ___ desu", japanese: "わたしの誕生日は ___ です" },
        { question: "I’m ___ years old", answer: "watashi wa ___ sai desu", japanese: "わたしは ___ さいです" },
        { question: "I live in", answer: "watashi wa ___ ni sunde imasu", japanese: "わたしは ___ に住んでいます" },
        { question: "My hobby is", answer: "watashi no shumi wa ___ suru koto desu", japanese: "わたしの趣味は ___ することです" },
        { question: "My work is", answer: "watashi wa ___ desu", japanese: "わたしは ___ です" },
        { question: "My dream is", answer: "watashi no yume wa ___ ni naritai desu", japanese: "わたしの夢は ___ になりたいです" }
    ]
};

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
    },
    {
        english: "Pleased to meet you too",
        romaji: "douzo yoroshiku onegaishimasu",
        kana: "どうぞよろしくお願いします",
        explanation: "Response to 'Nice to meet you', meaning please treat me well.",
        example: "Hajimemashite. Douzo yoroshiku onegaishimasu. (Nice to meet you. Pleased to meet you too.)",
        keyVocab: ["hajimemashite - nice to meet you"]
    },
    {
        english: "Express gratitude before eating your meal",
        romaji: "itadakimasu",
        kana: "いただきます",
        explanation: "Said before starting a meal to express gratitude for the food.",
        example: "Itadakimasu. (Expressing gratitude before eating.)",
        keyVocab: []
    },
    {
        english: "Express gratitude after eating your meal",
        romaji: "gochisousama deshita",
        kana: "ごちそうさまでした",
        explanation: "Said after finishing a meal to thank the host or chef.",
        example: "Gochisousama deshita. (Thank you for the meal.)",
        keyVocab: []
    },
    {
        english: "I'll go now and will be back",
        romaji: "ittekimasu",
        kana: "いってきます",
        explanation: "Said when leaving home, meaning I'll go and come back.",
        example: "Ittekimasu. (I'm leaving now.)",
        keyVocab: []
    },
    {
        english: "Please go and come back",
        romaji: "itterasshai",
        kana: "いってらっしゃい",
        explanation: "Response to 'ittekimasu', wishing someone a safe trip.",
        example: "Itterasshai. (Take care, go and come back safely.)",
        keyVocab: []
    },
    {
        english: "I'm home",
        romaji: "tadaima",
        kana: "ただいま",
        explanation: "Said upon returning home.",
        example: "Tadaima. (I'm home.)",
        keyVocab: []
    },
    {
        english: "Welcome back",
        romaji: "okaerinasai",
        kana: "おかえりなさい",
        explanation: "Greeting someone returning home.",
        example: "Okaerinasai. (Welcome back.)",
        keyVocab: []
    },
    {
        english: "Thank you for your effort",
        romaji: "otsukaresama deshita",
        kana: "おつかれさまでした",
        explanation: "Said to acknowledge someone's hard work, often at the end of the day.",
        example: "Otsukaresama deshita. (Thank you for your effort.)",
        keyVocab: []
    },
    {
        english: "I'll go ahead",
        romaji: "osaki ni shitsureishimasu",
        kana: "お先に失礼します",
        explanation: "Polite way to say you're leaving before others.",
        example: "Osaki ni shitsureishimasu. (Excuse me for leaving first.)",
        keyVocab: []
    },
    {
        english: "Good morning",
        romaji: "ohayou gozaimasu",
        kana: "おはようございます",
        explanation: "Morning greeting.",
        example: "Ohayou gozaimasu. (Good morning.)",
        keyVocab: []
    },
    {
        english: "Sorry / Excuse me",
        romaji: "sumimasen",
        kana: "すみません",
        explanation: "Used to apologize or get attention.",
        example: "Sumimasen, koko wa doko desu ka? (Excuse me, where is this place?)",
        keyVocab: ["doko - where"]
    },
    {
        english: "Thank you",
        romaji: "arigatou gozaimasu",
        kana: "ありがとうございます",
        explanation: "Polite way to say thank you.",
        example: "Arigatou gozaimasu. (Thank you.)",
        keyVocab: []
    },
    {
        english: "You're welcome",
        romaji: "dou itashimashite",
        kana: "どういたしまして",
        explanation: "Response to thank you.",
        example: "Arigatou gozaimasu. Dou itashimashite. (Thank you. You're welcome.)",
        keyVocab: []
    },
    {
        english: "Yes",
        romaji: "hai",
        kana: "はい",
        explanation: "Affirmative response.",
        example: "Hai, sou desu. (Yes, that's right.)",
        keyVocab: ["sou - so", "desu - is"]
    },
    {
        english: "No",
        romaji: "iie",
        kana: "いいえ",
        explanation: "Negative response.",
        example: "Iie, chigaimasu. (No, that's wrong.)",
        keyVocab: ["chigaimasu - is wrong"]
    },
    {
        english: "Excuse me / Hello (to get attention)",
        romaji: "shitsureishimasu",
        kana: "失礼します",
        explanation: "Polite way to excuse oneself or get attention.",
        example: "Shitsureishimasu. (Excuse me.)",
        keyVocab: []
    },
    {
        english: "Goodbye",
        romaji: "sayonara",
        kana: "さようなら",
        explanation: "Formal farewell.",
        example: "Sayonara. (Goodbye.)",
        keyVocab: []
    },
    {
        english: "See you later",
        romaji: "ja ne / mata ne",
        kana: "じゃね / またね",
        explanation: "Casual way to say see you later.",
        example: "Ja ne. (See you later.)",
        keyVocab: []
    },
    {
        english: "How are you?",
        romaji: "ogenki desu ka?",
        kana: "お元気ですか？",
        explanation: "Polite way to ask how someone is.",
        example: "Ogenki desu ka? (How are you?)",
        keyVocab: ["ogenki - well"]
    },
    {
        english: "I'm fine",
        romaji: "genki desu",
        kana: "元気です",
        explanation: "Response meaning I'm well.",
        example: "Genki desu. (I'm fine.)",
        keyVocab: []
    },
    {
        english: "I don't understand",
        romaji: "wakarimasen",
        kana: "わかりません",
        explanation: "Used when you don't comprehend something.",
        example: "Wakarimasen. (I don't understand.)",
        keyVocab: []
    },
    {
        english: "Please",
        romaji: "onegaishimasu",
        kana: "お願いします",
        explanation: "Polite request.",
        example: "Onegaishimasu. (Please.)",
        keyVocab: []
    },
    {
        english: "Delicious",
        romaji: "oishii",
        kana: "おいしい",
        explanation: "Used to describe tasty food.",
        example: "Oishii desu. (It's delicious.)",
        keyVocab: []
    }
];

// Days of Month Data
const daysofmonthData = [
    {
        english: "1日",
        romaji: "tsuitachi",
        kana: "ついたち",
        explanation: "The first day of the month.",
        example: "Tsuitachi ni wa shinbun o yomimasu. (I read the newspaper on the 1st.)",
        keyVocab: ["shinbun - newspaper", "yomimasu - read"]
    },
    {
        english: "2日",
        romaji: "futsuka",
        kana: "ふつか",
        explanation: "The second day of the month.",
        example: "Futsuka wa tomodachi to au. (I meet friends on the 2nd.)",
        keyVocab: ["tomodachi - friend", "au - meet"]
    },
    {
        english: "3日",
        romaji: "mikka",
        kana: "みっか",
        explanation: "The third day of the month.",
        example: "Mikka ni wa resutoran ni ikimasu. (I go to a restaurant on the 3rd.)",
        keyVocab: ["resutoran - restaurant", "ikimasu - go"]
    },
    {
        english: "4日",
        romaji: "yokka",
        kana: "よっか",
        explanation: "The fourth day of the month.",
        example: "Yokka wa tenki ga yoi desu. (The weather is good on the 4th.)",
        keyVocab: ["tenki - weather", "yoi - good"]
    },
    {
        english: "5日",
        romaji: "itsuka",
        kana: "いつか",
        explanation: "The fifth day of the month.",
        example: "Itsuka ni wa ongaku o kikimasu. (I listen to music on the 5th.)",
        keyVocab: ["ongaku - music", "kikimasu - listen"]
    },
    {
        english: "6日",
        romaji: "muika",
        kana: "むいか",
        explanation: "The sixth day of the month.",
        example: "Muika wa yasumi desu. (The 6th is a day off.)",
        keyVocab: ["yasumi - day off"]
    },
    {
        english: "7日",
        romaji: "nanoka",
        kana: "なのか",
        explanation: "The seventh day of the month.",
        example: "Nanoka ni wa toshokan ni ikimasu. (I go to the library on the 7th.)",
        keyVocab: ["toshokan - library", "ikimasu - go"]
    },
    {
        english: "8日",
        romaji: "youka",
        kana: "ようか",
        explanation: "The eighth day of the month.",
        example: "Youka wa atsui desu. (The 8th is hot.)",
        keyVocab: ["atsui - hot"]
    },
    {
        english: "9日",
        romaji: "kokonoka",
        kana: "ここのか",
        explanation: "The ninth day of the month.",
        example: "Kokonoka ni wa eiga o mimasu. (I watch a movie on the 9th.)",
        keyVocab: ["eiga - movie", "mimasu - watch"]
    },
    {
        english: "10日",
        romaji: "touka",
        kana: "とうか",
        explanation: "The tenth day of the month.",
        example: "Touka wa samui desu. (The 10th is cold.)",
        keyVocab: ["samui - cold"]
    },
    {
        english: "11日",
        romaji: "juuichi nichi",
        kana: "じゅういちにち",
        explanation: "The 11th day of the month.",
        example: "Juuichi nichi ni wa kaigi ga arimasu. (There is a meeting on the 11th.)",
        keyVocab: ["kaigi - meeting", "arimasu - there is"]
    },
    {
        english: "12日",
        romaji: "juuni nichi",
        kana: "じゅうににち",
        explanation: "The 12th day of the month.",
        example: "Juuni nichi wa ame ga furimasu. (It rains on the 12th.)",
        keyVocab: ["ame - rain", "furimasu - falls"]
    },
    {
        english: "13日",
        romaji: "juusan nichi",
        kana: "じゅうさんにち",
        explanation: "The 13th day of the month.",
        example: "Juusan nichi ni wa benkyou shimasu. (I study on the 13th.)",
        keyVocab: ["benkyou - study", "shimasu - do"]
    },
    {
        english: "14日",
        romaji: "juuyon nichi",
        kana: "じゅうよんにち",
        explanation: "The 14th day of the month.",
        example: "Juuyon nichi wa tanjoubi desu. (The 14th is a birthday.)",
        keyVocab: ["tanjoubi - birthday"]
    },
    {
        english: "15日",
        romaji: "juugo nichi",
        kana: "じゅうごにち",
        explanation: "The 15th day of the month.",
        example: "Juugo nichi ni wa uta o utaimasu. (I sing a song on the 15th.)",
        keyVocab: ["uta - song", "utaimasu - sing"]
    },
    {
        english: "16日",
        romaji: "juuroku nichi",
        kana: "じゅうろくにち",
        explanation: "The 16th day of the month.",
        example: "Juuroku nichi wa hare desu. (The 16th is sunny.)",
        keyVocab: ["hare - sunny"]
    },
    {
        english: "17日",
        romaji: "juushichi nichi",
        kana: "じゅうしちにち",
        explanation: "The 17th day of the month.",
        example: "Juushichi nichi ni wa ryokou shimasu. (I travel on the 17th.)",
        keyVocab: ["ryokou - travel", "shimasu - do"]
    },
    {
        english: "18日",
        romaji: "juuhachi nichi",
        kana: "じゅうはちにち",
        explanation: "The 18th day of the month.",
        example: "Juuhachi nichi wa kumo ga arimasu. (There are clouds on the 18th.)",
        keyVocab: ["kumo - cloud", "arimasu - there is"]
    },
    {
        english: "19日",
        romaji: "juukyuu nichi",
        kana: "じゅうきゅうにち",
        explanation: "The 19th day of the month.",
        example: "Juukyuu nichi ni wa shokuji o tabemasu. (I eat a meal on the 19th.)",
        keyVocab: ["shokuji - meal", "tabemasu - eat"]
    },
    {
        english: "20日",
        romaji: "nijuu nichi",
        kana: "にじゅうにち",
        explanation: "The 20th day of the month.",
        example: "Nijuu nichi wa atsui desu. (The 20th is hot.)",
        keyVocab: ["atsui - hot"]
    },
    {
        english: "21日",
        romaji: "nijuuichi nichi",
        kana: "にじゅういちにち",
        explanation: "The 21st day of the month.",
        example: "Nijuuichi nichi ni wa terebi o mimasu. (I watch TV on the 21st.)",
        keyVocab: ["terebi - TV", "mimasu - watch"]
    },
    {
        english: "22日",
        romaji: "nijuuni nichi",
        kana: "にじゅうににち",
        explanation: "The 22nd day of the month.",
        example: "Nijuuni nichi wa samui desu. (The 22nd is cold.)",
        keyVocab: ["samui - cold"]
    },
    {
        english: "23日",
        romaji: "nijuusan nichi",
        kana: "にじゅうさんにち",
        explanation: "The 23rd day of the month.",
        example: "Nijuusan nichi ni wa ongaku o kikimasu. (I listen to music on the 23rd.)",
        keyVocab: ["ongaku - music", "kikimasu - listen"]
    },
    {
        english: "24日",
        romaji: "nijuuyon nichi",
        kana: "にじゅうよんにち",
        explanation: "The 24th day of the month.",
        example: "Nijuuyon nichi wa hare desu. (The 24th is sunny.)",
        keyVocab: ["hare - sunny"]
    },
    {
        english: "25日",
        romaji: "nijuugo nichi",
        kana: "にじゅうごにち",
        explanation: "The 25th day of the month.",
        example: "Nijuugo nichi ni wa tomodachi to au. (I meet friends on the 25th.)",
        keyVocab: ["tomodachi - friend", "au - meet"]
    },
    {
        english: "26日",
        romaji: "nijuuroku nichi",
        kana: "にじゅうろくにち",
        explanation: "The 26th day of the month.",
        example: "Nijuuroku nichi wa ame ga furimasu. (It rains on the 26th.)",
        keyVocab: ["ame - rain", "furimasu - falls"]
    },
    {
        english: "27日",
        romaji: "nijuushichi nichi",
        kana: "にじゅうしちにち",
        explanation: "The 27th day of the month.",
        example: "Nijuushichi nichi ni wa benkyou shimasu. (I study on the 27th.)",
        keyVocab: ["benkyou - study", "shimasu - do"]
    },
    {
        english: "28日",
        romaji: "nijuuhachi nichi",
        kana: "にじゅうはちにち",
        explanation: "The 28th day of the month.",
        example: "Nijuuhachi nichi wa kumo ga arimasu. (There are clouds on the 28th.)",
        keyVocab: ["kumo - cloud", "arimasu - there is"]
    },
    {
        english: "29日",
        romaji: "nijuukyuu nichi",
        kana: "にじゅうきゅうにち",
        explanation: "The 29th day of the month.",
        example: "Nijuukyuu nichi ni wa shokuji o tabemasu. (I eat a meal on the 29th.)",
        keyVocab: ["shokuji - meal", "tabemasu - eat"]
    },
    {
        english: "30日",
        romaji: "sanjuu nichi",
        kana: "さんじゅうにち",
        explanation: "The 30th day of the month.",
        example: "Sanjuu nichi wa atsui desu. (The 30th is hot.)",
        keyVocab: ["atsui - hot"]
    },
    {
        english: "31日",
        romaji: "sanjuuichi nichi",
        kana: "さんじゅういちにち",
        explanation: "The 31st day of the month.",
        example: "Sanjuuichi nichi ni wa yasumi desu. (The 31st is a day off.)",
        keyVocab: ["yasumi - day off"]
    }
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

// Self Introduction Data
const selfIntroductionData = [
    {
        english: "My name is",
        romaji: "watashi no namae wa ___ desu",
        kana: "わたしの名前は ___ です",
        explanation: "This phrase is used to introduce your name in Japanese.",
        example: "Watashi no namae wa Tanaka desu. (My name is Tanaka.)",
        keyVocab: ["watashi - I", "namae - name", "desu - is/am/are"]
    },
    {
        english: "My birthday is",
        romaji: "watashi no tanjoubi wa ___ desu",
        kana: "わたしの誕生日は ___ です",
        explanation: "This phrase is used to state your birthday.",
        example: "Watashi no tanjoubi wa ichi gatsu juu nichi desu. (My birthday is January 10th.)",
        keyVocab: ["tanjoubi - birthday", "desu - is/am/are"]
    },
    {
        english: "I’m ___ years old",
        romaji: "watashi wa ___ sai desu",
        kana: "わたしは ___ さいです",
        explanation: "This phrase is used to state your age.",
        example: "Watashi wa nijuu sai desu. (I am 20 years old.)",
        keyVocab: ["watashi - I", "sai - years old", "desu - is/am/are"]
    },
    {
        english: "I live in",
        romaji: "watashi wa ___ ni sunde imasu",
        kana: "わたしは ___ に住んでいます",
        explanation: "This phrase is used to state where you live.",
        example: "Watashi wa Toukyou ni sunde imasu. (I live in Tokyo.)",
        keyVocab: ["watashi - I", "ni - in/at", "sunde imasu - live"]
    },
    {
        english: "My hobby is",
        romaji: "watashi no shumi wa ___ suru koto desu",
        kana: "わたしの趣味は ___ することです",
        explanation: "This phrase is used to state your hobby.",
        example: "Watashi no shumi wa ongaku o kiku koto desu. (My hobby is listening to music.)",
        keyVocab: ["shumi - hobby", "suru koto desu - doing"]
    },
    {
        english: "My work is",
        romaji: "watashi wa ___ desu",
        kana: "わたしは ___ です",
        explanation: "This phrase is used to state your occupation.",
        example: "Watashi wa gakusei desu. (I am a student.)",
        keyVocab: ["watashi - I", "desu - is/am/are"]
    },
    {
        english: "My dream is",
        romaji: "watashi no yume wa ___ ni naritai desu",
        kana: "わたしの夢は ___ になりたいです",
        explanation: "This phrase is used to state your dream or aspiration.",
        example: "Watashi no yume wa isha ni naritai desu. (My dream is to become a doctor.)",
        keyVocab: ["yume - dream", "naru - become", "desu - is/am/are"]
    }
];

// Current data based on page
let currentData = [];

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
    // Determine which page we're on
    const path = window.location.pathname;
    if (path.includes('months')) {
        currentData = monthsData;
        document.getElementById('pageTitle').textContent = 'Months Reviewer';
    } else if (path.includes('daysofmonth')) {
        currentData = daysofmonthData;
        document.getElementById('pageTitle').textContent = 'Days of the Month Reviewer';
    } else if (path.includes('days')) {
        currentData = daysData;
        document.getElementById('pageTitle').textContent = 'Days Reviewer';
    } else if (path.includes('greetings')) {
        currentData = greetingsData;
        document.getElementById('pageTitle').textContent = 'Greetings Reviewer';
    } else if (path.includes('numbers')) {
        currentData = numbersData;
        document.getElementById('pageTitle').textContent = 'Numbers Reviewer';
    } else if (path.toLowerCase().includes('selfintroduction')) {
        currentData = selfIntroductionData;
        document.getElementById('pageTitle').textContent = 'SELF INTRODUCTION Reviewer';
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
            <p class="kana">${item.kana}</p>
            <p class="romaji">${item.romaji}</p>
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
