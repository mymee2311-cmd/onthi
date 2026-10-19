// CHỈ gồm những câu đã được số hóa từ ảnh sách buổi sáng (không bao gồm 90 câu mẫu).
// 92 câu trắc nghiệm và 12 câu viết lại. Một số bài đọc trong ảnh chưa được số hóa.
let mcqs = [
  {
    "id": "BOOK_M001",
    "type": "grammar",
    "q": "Although Tim felt tired, he stayed up to finish his homework.",
    "options": [
      "In spite of being tired, Tim stayed up to finish his homework.",
      "Despite of being tired, Tim stayed up to finish his homework.",
      "Tim felt tired because he stayed up to finish his homework.",
      "Because Tim felt tired, he stayed up to finish his homework."
    ],
    "correct": 0,
    "explain": "Đáp án A: In spite of being tired, Tim stayed up to finish his homework.. So sánh nghĩa giữa câu gốc và câu viết lại; các phương án khác làm đổi ý hoặc sai cấu trúc.",
    "passage": ""
  },
  {
    "id": "BOOK_M002",
    "type": "grammar",
    "q": "Elena speaks Polish well, she's never been to Poland.",
    "options": [
      "Elena speaks Polish well though she's never been to Poland.",
      "Elena speaks Polish well in spite she's never been to Poland.",
      "Elena has never been to Poland despite speaks Polish well.",
      "Elena speaks Polish well because she's never been to Poland."
    ],
    "correct": 0,
    "explain": "Câu gốc nối hai mệnh đề bằng dấu phẩy, nên dùng although/though; đáp án A đúng nghĩa.",
    "passage": ""
  },
  {
    "id": "BOOK_M003",
    "type": "grammar",
    "q": "Jane kept running, even though she knew she couldn't win.",
    "options": [
      "Jane kept running in spite of knowing that she couldn't win.",
      "Despite of knowing that she couldn't win, Jane kept running.",
      "Jane kept running because she knew she couldn't win.",
      "Although Jane kept running but she knew she couldn't win."
    ],
    "correct": 0,
    "explain": "Đáp án A: Jane kept running in spite of knowing that she couldn't win.. So sánh nghĩa giữa câu gốc và câu viết lại; các phương án khác làm đổi ý hoặc sai cấu trúc.",
    "passage": ""
  },
  {
    "id": "BOOK_M004",
    "type": "grammar",
    "q": "Despite the heat, Diana wore her winter clothes.",
    "options": [
      "In spite of the heat, Diana wore her winter clothes.",
      "Diana wore her winter clothes because of the heat.",
      "Diana wore her winter clothes despite of the heat.",
      "Diana wore her winter clothes due to the heat."
    ],
    "correct": 0,
    "explain": "Đáp án A: In spite of the heat, Diana wore her winter clothes.. So sánh nghĩa giữa câu gốc và câu viết lại; các phương án khác làm đổi ý hoặc sai cấu trúc.",
    "passage": ""
  },
  {
    "id": "BOOK_M005",
    "type": "grammar",
    "q": "Does your father cycle to work?",
    "options": [
      "Does your father get to work by bike?",
      "Does your father go to work on foot?",
      "Does your father walk to work?",
      "Does your father go to work by motorbike?"
    ],
    "correct": 0,
    "explain": "Đáp án A: Does your father get to work by bike?. So sánh nghĩa giữa câu gốc và câu viết lại; các phương án khác làm đổi ý hoặc sai cấu trúc.",
    "passage": ""
  },
  {
    "id": "BOOK_M006",
    "type": "grammar",
    "q": "My father was ill so he stayed at home yesterday.",
    "options": [
      "Because my father was ill, he stayed at home yesterday.",
      "Because my father was ill, so he stayed at home yesterday.",
      "Despite my father was ill, he stayed at home yesterday.",
      "As my father was ill, so he stayed at home yesterday."
    ],
    "correct": 0,
    "explain": "Đáp án A: Because my father was ill, he stayed at home yesterday.. So sánh nghĩa giữa câu gốc và câu viết lại; các phương án khác làm đổi ý hoặc sai cấu trúc.",
    "passage": ""
  },
  {
    "id": "BOOK_M007",
    "type": "grammar",
    "q": "I intend to visit Spain this summer.",
    "options": [
      "I'm going to visit Spain this summer.",
      "I would like to visit Spain this summer.",
      "I don't want to visit Spain this summer.",
      "I visited Spain once."
    ],
    "correct": 0,
    "explain": "Đáp án A: I'm going to visit Spain this summer.. So sánh nghĩa giữa câu gốc và câu viết lại; các phương án khác làm đổi ý hoặc sai cấu trúc.",
    "passage": ""
  },
  {
    "id": "BOOK_M008",
    "type": "grammar",
    "q": "We plan to play volleyball this weekend.",
    "options": [
      "We're going to play volleyball this weekend.",
      "We shouldn't play volleyball this weekend.",
      "We want to play volleyball this weekend.",
      "Why don't we play volleyball this weekend?"
    ],
    "correct": 0,
    "explain": "Đáp án A: We're going to play volleyball this weekend.. So sánh nghĩa giữa câu gốc và câu viết lại; các phương án khác làm đổi ý hoặc sai cấu trúc.",
    "passage": ""
  },
  {
    "id": "BOOK_M009",
    "type": "grammar",
    "q": "How much does an ice-cream cost?",
    "options": [
      "What's the price of an ice-cream?",
      "How many is an ice cream?",
      "What does the price of an ice-cream cost?",
      "How much is an ice-cream cost?"
    ],
    "correct": 0,
    "explain": "Đáp án A: What's the price of an ice-cream?. So sánh nghĩa giữa câu gốc và câu viết lại; các phương án khác làm đổi ý hoặc sai cấu trúc.",
    "passage": ""
  },
  {
    "id": "BOOK_M010",
    "type": "grammar",
    "q": "Let's play volleyball tomorrow afternoon.",
    "options": [
      "Why don't we play volleyball tomorrow afternoon?",
      "We should play volleyball tomorrow afternoon.",
      "We shouldn't play volleyball this afternoon.",
      "Do you want to play volleyball this afternoon?"
    ],
    "correct": 0,
    "explain": "Đáp án A: Why don't we play volleyball tomorrow afternoon?. So sánh nghĩa giữa câu gốc và câu viết lại; các phương án khác làm đổi ý hoặc sai cấu trúc.",
    "passage": ""
  },
  {
    "id": "BOOK_M011",
    "type": "grammar",
    "q": "Let's come to my house after school.",
    "options": [
      "What about coming to my house after school?",
      "You should come to my house after school.",
      "Please don't come to my house after school.",
      "We ought to come to my house after school."
    ],
    "correct": 0,
    "explain": "Đáp án A: What about coming to my house after school?. So sánh nghĩa giữa câu gốc và câu viết lại; các phương án khác làm đổi ý hoặc sai cấu trúc.",
    "passage": ""
  },
  {
    "id": "BOOK_M012",
    "type": "grammar",
    "q": "How about going camping this weekend?",
    "options": [
      "Let's go camping this weekend.",
      "Do you go camping this weekend?",
      "You should go camping this weekend.",
      "Don't you like going camping this weekend?"
    ],
    "correct": 0,
    "explain": "Đáp án A: Let's go camping this weekend.. So sánh nghĩa giữa câu gốc và câu viết lại; các phương án khác làm đổi ý hoặc sai cấu trúc.",
    "passage": ""
  },
  {
    "id": "BOOK_M013",
    "type": "vocabulary",
    "q": "Let's go for a swim as soon as we _____ the hotel.",
    "options": [
      "reach",
      "arrive",
      "get",
      "come"
    ],
    "correct": 0,
    "explain": "Đáp án A. reach: phù hợp nghĩa và cấu trúc của câu. Đối chiếu lại ngữ cảnh cùng các phương án còn lại.",
    "passage": ""
  },
  {
    "id": "BOOK_M014",
    "type": "vocabulary",
    "q": "It's important to have a sense of _____ or it's easy to get depressed.",
    "options": [
      "humour",
      "laughter",
      "amusement",
      "comedy"
    ],
    "correct": 0,
    "explain": "Đáp án A. humour: phù hợp nghĩa và cấu trúc của câu. Đối chiếu lại ngữ cảnh cùng các phương án còn lại.",
    "passage": ""
  },
  {
    "id": "BOOK_M015",
    "type": "vocabulary",
    "q": "Alice can't stand waiting in queues. She's very _____.",
    "options": [
      "impatient",
      "patient",
      "aggressive",
      "shy"
    ],
    "correct": 0,
    "explain": "Đáp án A. impatient: phù hợp nghĩa và cấu trúc của câu. Đối chiếu lại ngữ cảnh cùng các phương án còn lại.",
    "passage": ""
  },
  {
    "id": "BOOK_M016",
    "type": "vocabulary",
    "q": "Don't _____ until tomorrow what you can do today.",
    "options": [
      "put off",
      "put on",
      "put out",
      "put up with"
    ],
    "correct": 0,
    "explain": "Đáp án A. put off: phù hợp nghĩa và cấu trúc của câu. Đối chiếu lại ngữ cảnh cùng các phương án còn lại.",
    "passage": ""
  },
  {
    "id": "BOOK_M017",
    "type": "vocabulary",
    "q": "A _____ is an object that helps you remember a place you have visited.",
    "options": [
      "souvenir",
      "diary",
      "memory",
      "gift"
    ],
    "correct": 0,
    "explain": "Đáp án A. souvenir: phù hợp nghĩa và cấu trúc của câu. Đối chiếu lại ngữ cảnh cùng các phương án còn lại.",
    "passage": ""
  },
  {
    "id": "BOOK_M018",
    "type": "vocabulary",
    "q": "If you want to see the dentist, it's best to make _____ with him.",
    "options": [
      "an appointment",
      "an interview",
      "a date",
      "a meeting"
    ],
    "correct": 0,
    "explain": "Đáp án A. an appointment: phù hợp nghĩa và cấu trúc của câu. Đối chiếu lại ngữ cảnh cùng các phương án còn lại.",
    "passage": ""
  },
  {
    "id": "BOOK_M019",
    "type": "vocabulary",
    "q": "If you park your car in the wrong place, you have to pay a _____.",
    "options": [
      "fine",
      "money",
      "fee",
      "punishment"
    ],
    "correct": 0,
    "explain": "Đáp án A. fine: phù hợp nghĩa và cấu trúc của câu. Đối chiếu lại ngữ cảnh cùng các phương án còn lại.",
    "passage": ""
  },
  {
    "id": "BOOK_M020",
    "type": "vocabulary",
    "q": "I like to see \"World News\". That’s my _____.",
    "options": [
      "favourite",
      "popular",
      "preferable",
      "preferable"
    ],
    "correct": 0,
    "explain": "“That’s my favourite” chấp nhận khi favourite là danh từ; câu sách hơi thiếu ngữ cảnh.",
    "passage": ""
  },
  {
    "id": "BOOK_M021",
    "type": "vocabulary",
    "q": "To request more _____ about any of our products and services, please visit our website.",
    "options": [
      "information",
      "news",
      "brochure",
      "equipment"
    ],
    "correct": 0,
    "explain": "Đáp án A. information: phù hợp nghĩa và cấu trúc của câu. Đối chiếu lại ngữ cảnh cùng các phương án còn lại.",
    "passage": ""
  },
  {
    "id": "BOOK_M022",
    "type": "vocabulary",
    "q": "I know him by _____, but I have no idea what his name is.",
    "options": [
      "sight",
      "chance",
      "heart",
      "myself"
    ],
    "correct": 0,
    "explain": "Đáp án A. sight: phù hợp nghĩa và cấu trúc của câu. Đối chiếu lại ngữ cảnh cùng các phương án còn lại.",
    "passage": ""
  },
  {
    "id": "BOOK_M023",
    "type": "vocabulary",
    "q": "Ann refused to take _____ in the preparations for the school concert.",
    "options": [
      "part",
      "place",
      "notice",
      "leave"
    ],
    "correct": 0,
    "explain": "Đáp án A. part: phù hợp nghĩa và cấu trúc của câu. Đối chiếu lại ngữ cảnh cùng các phương án còn lại.",
    "passage": ""
  },
  {
    "id": "BOOK_M024",
    "type": "vocabulary",
    "q": "She has a lot of spare time and wants to know how best to _____ it.",
    "options": [
      "spend",
      "save",
      "waste",
      "make"
    ],
    "correct": 0,
    "explain": "Đáp án A. spend: phù hợp nghĩa và cấu trúc của câu. Đối chiếu lại ngữ cảnh cùng các phương án còn lại.",
    "passage": ""
  },
  {
    "id": "BOOK_M025",
    "type": "vocabulary",
    "q": "He failed to call her and say goodbye because his telephone was _____.",
    "options": [
      "out of order",
      "out of work",
      "off work",
      "off duty"
    ],
    "correct": 0,
    "explain": "Đáp án A. out of order: phù hợp nghĩa và cấu trúc của câu. Đối chiếu lại ngữ cảnh cùng các phương án còn lại.",
    "passage": ""
  },
  {
    "id": "BOOK_M026",
    "type": "vocabulary",
    "q": "The _____ for winning that match is a gold medal.",
    "options": [
      "Award",
      "prizing",
      "reward",
      "gift"
    ],
    "correct": 0,
    "explain": "Đáp án A. Award: phù hợp nghĩa và cấu trúc của câu. Đối chiếu lại ngữ cảnh cùng các phương án còn lại.",
    "passage": ""
  },
  {
    "id": "BOOK_M027",
    "type": "vocabulary",
    "q": "Mr. Wilson is a very _____ teacher. He's always calm and never gets angry.",
    "options": [
      "patient",
      "strict",
      "funny",
      "generous"
    ],
    "correct": 0,
    "explain": "Đáp án A. patient: phù hợp nghĩa và cấu trúc của câu. Đối chiếu lại ngữ cảnh cùng các phương án còn lại.",
    "passage": ""
  },
  {
    "id": "BOOK_M028",
    "type": "vocabulary",
    "q": "What's the weather _____ for tomorrow?",
    "options": [
      "forecast",
      "storm",
      "like",
      "lightning"
    ],
    "correct": 0,
    "explain": "Đáp án A. forecast: phù hợp nghĩa và cấu trúc của câu. Đối chiếu lại ngữ cảnh cùng các phương án còn lại.",
    "passage": ""
  },
  {
    "id": "BOOK_M029",
    "type": "vocabulary",
    "q": "You don't have to pay for delivery. It is free of _____.",
    "options": [
      "charge",
      "cost",
      "fee",
      "payment"
    ],
    "correct": 0,
    "explain": "Đáp án A. charge: phù hợp nghĩa và cấu trúc của câu. Đối chiếu lại ngữ cảnh cùng các phương án còn lại.",
    "passage": ""
  },
  {
    "id": "BOOK_M030",
    "type": "vocabulary",
    "q": "He is very _____ because he is concerned only with his own interests and feelings.",
    "options": [
      "confident",
      "selfish",
      "helpful",
      "generous"
    ],
    "correct": 1,
    "explain": "Đáp án B. selfish: phù hợp nghĩa và cấu trúc của câu. Đối chiếu lại ngữ cảnh cùng các phương án còn lại.",
    "passage": ""
  },
  {
    "id": "BOOK_M031",
    "type": "vocabulary",
    "q": "John wanted a new hobby so he decided to _____ stamp collecting.",
    "options": [
      "take over",
      "take up",
      "take off",
      "take in"
    ],
    "correct": 1,
    "explain": "Đáp án B. take up: phù hợp nghĩa và cấu trúc của câu. Đối chiếu lại ngữ cảnh cùng các phương án còn lại.",
    "passage": ""
  },
  {
    "id": "BOOK_M032",
    "type": "vocabulary",
    "q": "I often go to the countryside at the weekends. The quiet and _____ atmosphere there calm me down.",
    "options": [
      "peaceful",
      "polluted",
      "dirty",
      "noisy"
    ],
    "correct": 0,
    "explain": "A. peaceful: quiet and peaceful atmosphere = bầu không khí yên bình. Trong sách “atmosphere ... calm” cần là “calms”.",
    "passage": ""
  },
  {
    "id": "BOOK_M033",
    "type": "vocabulary",
    "q": "When he was at university, my dad did a _____ in maths.",
    "options": [
      "degree",
      "subject",
      "study",
      "certificate"
    ],
    "correct": 0,
    "explain": "Đáp án A. degree: phù hợp nghĩa và cấu trúc của câu. Đối chiếu lại ngữ cảnh cùng các phương án còn lại.",
    "passage": ""
  },
  {
    "id": "BOOK_M034",
    "type": "vocabulary",
    "q": "I wanted to buy a drink, but the machine was out of _____.",
    "options": [
      "order",
      "position",
      "operation",
      "work"
    ],
    "correct": 0,
    "explain": "Đáp án A. order: phù hợp nghĩa và cấu trúc của câu. Đối chiếu lại ngữ cảnh cùng các phương án còn lại.",
    "passage": ""
  },
  {
    "id": "BOOK_M035",
    "type": "vocabulary",
    "q": "The audience is laughing most of the time in a _____.",
    "options": [
      "comedy",
      "science fiction",
      "documentary",
      "soap opera"
    ],
    "correct": 0,
    "explain": "Đáp án A. comedy: phù hợp nghĩa và cấu trúc của câu. Đối chiếu lại ngữ cảnh cùng các phương án còn lại.",
    "passage": ""
  },
  {
    "id": "BOOK_M036",
    "type": "vocabulary",
    "q": "If something is illegal, it's against the _____.",
    "options": [
      "law",
      "government",
      "society",
      "rule"
    ],
    "correct": 0,
    "explain": "Đáp án A. law: phù hợp nghĩa và cấu trúc của câu. Đối chiếu lại ngữ cảnh cùng các phương án còn lại.",
    "passage": ""
  },
  {
    "id": "BOOK_M037",
    "type": "vocabulary",
    "q": "There was an accident, but fortunately no one was _____ injured.",
    "options": [
      "seriously",
      "almost",
      "dangerously",
      "exactly"
    ],
    "correct": 0,
    "explain": "Đáp án A. seriously: phù hợp nghĩa và cấu trúc của câu. Đối chiếu lại ngữ cảnh cùng các phương án còn lại.",
    "passage": ""
  },
  {
    "id": "BOOK_M038",
    "type": "vocabulary",
    "q": "Their income is so low that they are living in _____.",
    "options": [
      "poverty",
      "difficult",
      "poor",
      "comfort"
    ],
    "correct": 0,
    "explain": "Đáp án A. poverty: phù hợp nghĩa và cấu trúc của câu. Đối chiếu lại ngữ cảnh cùng các phương án còn lại.",
    "passage": ""
  },
  {
    "id": "BOOK_M039",
    "type": "vocabulary",
    "q": "Johnny _____ very badly at Mary's birthday party.",
    "options": [
      "behaved",
      "showed",
      "looked",
      "operated"
    ],
    "correct": 0,
    "explain": "Đáp án A. behaved: phù hợp nghĩa và cấu trúc của câu. Đối chiếu lại ngữ cảnh cùng các phương án còn lại.",
    "passage": ""
  },
  {
    "id": "BOOK_M040",
    "type": "vocabulary",
    "q": "Nowadays more and more women go out to work, and they become more _____.",
    "options": [
      "independent",
      "dependent",
      "independently",
      "dependently"
    ],
    "correct": 0,
    "explain": "Đáp án A. independent: phù hợp nghĩa và cấu trúc của câu. Đối chiếu lại ngữ cảnh cùng các phương án còn lại.",
    "passage": ""
  },
  {
    "id": "BOOK_M041",
    "type": "vocabulary",
    "q": "Don't eat those chips! They're _____.",
    "options": [
      "unhealthy",
      "delicious",
      "healthy",
      "tasty"
    ],
    "correct": 0,
    "explain": "Đáp án A. unhealthy: phù hợp nghĩa và cấu trúc của câu. Đối chiếu lại ngữ cảnh cùng các phương án còn lại.",
    "passage": ""
  },
  {
    "id": "BOOK_M042",
    "type": "vocabulary",
    "q": "I don't like people who are noisy and _____.",
    "options": [
      "aggressive",
      "confident",
      "sociable",
      "generous"
    ],
    "correct": 0,
    "explain": "Đáp án A. aggressive: phù hợp nghĩa và cấu trúc của câu. Đối chiếu lại ngữ cảnh cùng các phương án còn lại.",
    "passage": ""
  },
  {
    "id": "BOOK_M043",
    "type": "vocabulary",
    "q": "Mary is a friendly girl who _____ everyone she meets.",
    "options": [
      "gets on with",
      "gets over",
      "gets off",
      "gets up"
    ],
    "correct": 0,
    "explain": "Đáp án A. gets on with: phù hợp nghĩa và cấu trúc của câu. Đối chiếu lại ngữ cảnh cùng các phương án còn lại.",
    "passage": ""
  },
  {
    "id": "BOOK_M044",
    "type": "vocabulary",
    "q": "If we don't meet those deadlines, we're going to be in _____ troubles.",
    "options": [
      "big",
      "heavy",
      "large",
      "great"
    ],
    "correct": 0,
    "explain": "A. big: big trouble = rắc rối lớn. Sách dùng “troubles” không tự nhiên ở đây; cách nói chuẩn là “be in big trouble”.",
    "passage": ""
  },
  {
    "id": "BOOK_M045",
    "type": "vocabulary",
    "q": "If you are _____ Mrs. Rogers, you'll find her in the board room.",
    "options": [
      "looking for",
      "looking after",
      "looking up",
      "looking into"
    ],
    "correct": 0,
    "explain": "Đáp án A. looking for: phù hợp nghĩa và cấu trúc của câu. Đối chiếu lại ngữ cảnh cùng các phương án còn lại.",
    "passage": ""
  },
  {
    "id": "BOOK_M046",
    "type": "vocabulary",
    "q": "Many children are _____ by single parents.",
    "options": [
      "brought up",
      "grown up",
      "taken care",
      "looked after"
    ],
    "correct": 0,
    "explain": "Đáp án A. brought up: phù hợp nghĩa và cấu trúc của câu. Đối chiếu lại ngữ cảnh cùng các phương án còn lại.",
    "passage": ""
  },
  {
    "id": "BOOK_M047",
    "type": "vocabulary",
    "q": "Do you think a _____ for cancer will ever be found?",
    "options": [
      "cure",
      "prescription",
      "remedy",
      "recipe"
    ],
    "correct": 0,
    "explain": "Đáp án A. cure: phù hợp nghĩa và cấu trúc của câu. Đối chiếu lại ngữ cảnh cùng các phương án còn lại.",
    "passage": ""
  },
  {
    "id": "BOOK_M048",
    "type": "vocabulary",
    "q": "Air _____ is cheaper than other forms of long-distance transport in my country.",
    "options": [
      "travel",
      "trip",
      "journey",
      "voyage"
    ],
    "correct": 0,
    "explain": "Đáp án A. travel: phù hợp nghĩa và cấu trúc của câu. Đối chiếu lại ngữ cảnh cùng các phương án còn lại.",
    "passage": ""
  },
  {
    "id": "BOOK_M049",
    "type": "vocabulary",
    "q": "Her wedding ring was made of _____.",
    "options": [
      "gold",
      "glass",
      "cotton",
      "leather"
    ],
    "correct": 0,
    "explain": "Đáp án A. gold: phù hợp nghĩa và cấu trúc của câu. Đối chiếu lại ngữ cảnh cùng các phương án còn lại.",
    "passage": ""
  },
  {
    "id": "BOOK_M050",
    "type": "vocabulary",
    "q": "We don't exchange goods unless you still have the _____.",
    "options": [
      "receipt",
      "bill",
      "check",
      "invoice"
    ],
    "correct": 0,
    "explain": "Đáp án A. receipt: phù hợp nghĩa và cấu trúc của câu. Đối chiếu lại ngữ cảnh cùng các phương án còn lại.",
    "passage": ""
  },
  {
    "id": "BOOK_M051",
    "type": "vocabulary",
    "q": "I _____ some very good photos of our dog with my new camera.",
    "options": [
      "took",
      "made",
      "shot",
      "did"
    ],
    "correct": 0,
    "explain": "Đáp án A. took: phù hợp nghĩa và cấu trúc của câu. Đối chiếu lại ngữ cảnh cùng các phương án còn lại.",
    "passage": ""
  },
  {
    "id": "BOOK_M052",
    "type": "vocabulary",
    "q": "My bedroom has a fitted _____ which covers the whole floor.",
    "options": [
      "carpet",
      "sofa",
      "furniture",
      "curtain"
    ],
    "correct": 0,
    "explain": "Đáp án A. carpet: phù hợp nghĩa và cấu trúc của câu. Đối chiếu lại ngữ cảnh cùng các phương án còn lại.",
    "passage": ""
  },
  {
    "id": "BOOK_M053",
    "type": "vocabulary",
    "q": "One way to cook potatoes is to _____ them in a pan of water with a little salt.",
    "options": [
      "boil",
      "fry",
      "grill",
      "bake"
    ],
    "correct": 0,
    "explain": "Đáp án A. boil: phù hợp nghĩa và cấu trúc của câu. Đối chiếu lại ngữ cảnh cùng các phương án còn lại.",
    "passage": ""
  },
  {
    "id": "BOOK_M054",
    "type": "vocabulary",
    "q": "Don't worry about the washing-up. We'll put everything in the _____.",
    "options": [
      "dishwasher",
      "cupboard",
      "sink",
      "washing machine"
    ],
    "correct": 0,
    "explain": "Đáp án A. dishwasher: phù hợp nghĩa và cấu trúc của câu. Đối chiếu lại ngữ cảnh cùng các phương án còn lại.",
    "passage": ""
  },
  {
    "id": "BOOK_M055",
    "type": "vocabulary",
    "q": "If you are not satisfied with the service in this store, ask to speak to the _____.",
    "options": [
      "manager",
      "secretary",
      "shop keeper",
      "cashier"
    ],
    "correct": 0,
    "explain": "Đáp án A. manager: phù hợp nghĩa và cấu trúc của câu. Đối chiếu lại ngữ cảnh cùng các phương án còn lại.",
    "passage": ""
  },
  {
    "id": "BOOK_M056",
    "type": "vocabulary",
    "q": "These _____ are too tight! I'll have to lose some weight!",
    "options": [
      "trousers",
      "shoes",
      "trainers",
      "gloves"
    ],
    "correct": 0,
    "explain": "Đáp án A. trousers: phù hợp nghĩa và cấu trúc của câu. Đối chiếu lại ngữ cảnh cùng các phương án còn lại.",
    "passage": ""
  },
  {
    "id": "BOOK_M057",
    "type": "vocabulary",
    "q": "I have a/an _____ in computer aided design and three years' experience.",
    "options": [
      "qualification",
      "degree",
      "course",
      "exam"
    ],
    "correct": 0,
    "explain": "Đáp án A. qualification: phù hợp nghĩa và cấu trúc của câu. Đối chiếu lại ngữ cảnh cùng các phương án còn lại.",
    "passage": ""
  },
  {
    "id": "BOOK_M058",
    "type": "vocabulary",
    "q": "The hairdryer broke the first time I used it so the store gave me a full _____.",
    "options": [
      "refund",
      "payment",
      "sale",
      "discount"
    ],
    "correct": 0,
    "explain": "Đáp án A. refund: phù hợp nghĩa và cấu trúc của câu. Đối chiếu lại ngữ cảnh cùng các phương án còn lại.",
    "passage": ""
  },
  {
    "id": "BOOK_M059",
    "type": "vocabulary",
    "q": "Which of the following is NOT a country?",
    "options": [
      "French",
      "Germany",
      "Sweden",
      "Turkey"
    ],
    "correct": 0,
    "explain": "Đáp án A. French: phù hợp nghĩa và cấu trúc của câu. Đối chiếu lại ngữ cảnh cùng các phương án còn lại.",
    "passage": ""
  },
  {
    "id": "BOOK_M060",
    "type": "vocabulary",
    "q": "In the desert the air is very dry, but in the jungle, it is _____.",
    "options": [
      "humid",
      "cloud",
      "flood",
      "drought"
    ],
    "correct": 0,
    "explain": "Đáp án A. humid: phù hợp nghĩa và cấu trúc của câu. Đối chiếu lại ngữ cảnh cùng các phương án còn lại.",
    "passage": ""
  },
  {
    "id": "BOOK_M061",
    "type": "vocabulary",
    "q": "Last year's champions were _____ in the final game 5-3.",
    "options": [
      "defeated",
      "beat",
      "taken over",
      "fought"
    ],
    "correct": 0,
    "explain": "Đáp án A. defeated: phù hợp nghĩa và cấu trúc của câu. Đối chiếu lại ngữ cảnh cùng các phương án còn lại.",
    "passage": ""
  },
  {
    "id": "BOOK_M062",
    "type": "vocabulary",
    "q": "David wants to be a _____ because he absolutely adores cars.",
    "options": [
      "racing driver",
      "motor racer",
      "car racer",
      "race driver"
    ],
    "correct": 0,
    "explain": "“racing driver” là danh từ chỉ tay đua xe; D “race driver” không phải đáp án ưu tiên trong văn cảnh.",
    "passage": ""
  },
  {
    "id": "BOOK_M063",
    "type": "cloze",
    "q": "CAMPING — Question 26: Choose the word for gap (26).",
    "options": [
      "famous",
      "popular",
      "favourite",
      "current"
    ],
    "correct": 1,
    "explain": "popular: be popular = trở nên phổ biến (to be popular).",
    "passage": "Although (0) _____ groups of people have always lived outdoors in tents, camping as we know it today only began to be (26) _____ about 50 years ago. The increase in the use of cars and improvements in camping (27) _____ have allowed more people to travel longer (28) _____ into the countryside and to stay there in greater comfort.\nMany campers like to be (29) _____ themselves in quiet areas, so they (30) _____ their tent and food and walk or cycle into the forests or the mountains. Others, preferring to be near people, drive to a public or privately-owned campsite (31) _____ has up-to-date facilities, (32) _____ hot showers and swimming pools.\nWhether campers are (33) _____ in the mountains or on a busy site, they should remember to (34) _____ the area clean and tidy. In the forests, they must put out any fires and keep food hidden to avoid attracting (35) _____ animals."
  },
  {
    "id": "BOOK_M064",
    "type": "cloze",
    "q": "CAMPING — Question 27: Choose the word for gap (27).",
    "options": [
      "tools",
      "baggage",
      "equipment",
      "property"
    ],
    "correct": 2,
    "explain": "equipment: dụng cụ/trang thiết bị cắm trại; không phải baggage.",
    "passage": "Although (0) _____ groups of people have always lived outdoors in tents, camping as we know it today only began to be (26) _____ about 50 years ago. The increase in the use of cars and improvements in camping (27) _____ have allowed more people to travel longer (28) _____ into the countryside and to stay there in greater comfort.\nMany campers like to be (29) _____ themselves in quiet areas, so they (30) _____ their tent and food and walk or cycle into the forests or the mountains. Others, preferring to be near people, drive to a public or privately-owned campsite (31) _____ has up-to-date facilities, (32) _____ hot showers and swimming pools.\nWhether campers are (33) _____ in the mountains or on a busy site, they should remember to (34) _____ the area clean and tidy. In the forests, they must put out any fires and keep food hidden to avoid attracting (35) _____ animals."
  },
  {
    "id": "BOOK_M065",
    "type": "cloze",
    "q": "CAMPING — Question 28: Choose the word for gap (28).",
    "options": [
      "ways",
      "directions",
      "voyages",
      "distances"
    ],
    "correct": 3,
    "explain": "distances: travel longer distances = đi quãng đường xa hơn.",
    "passage": "Although (0) _____ groups of people have always lived outdoors in tents, camping as we know it today only began to be (26) _____ about 50 years ago. The increase in the use of cars and improvements in camping (27) _____ have allowed more people to travel longer (28) _____ into the countryside and to stay there in greater comfort.\nMany campers like to be (29) _____ themselves in quiet areas, so they (30) _____ their tent and food and walk or cycle into the forests or the mountains. Others, preferring to be near people, drive to a public or privately-owned campsite (31) _____ has up-to-date facilities, (32) _____ hot showers and swimming pools.\nWhether campers are (33) _____ in the mountains or on a busy site, they should remember to (34) _____ the area clean and tidy. In the forests, they must put out any fires and keep food hidden to avoid attracting (35) _____ animals."
  },
  {
    "id": "BOOK_M066",
    "type": "cloze",
    "q": "CAMPING — Question 29: Choose the word for gap (29).",
    "options": [
      "on",
      "by",
      "at",
      "of"
    ],
    "correct": 1,
    "explain": "by: be by themselves = ở một mình, tự lập.",
    "passage": "Although (0) _____ groups of people have always lived outdoors in tents, camping as we know it today only began to be (26) _____ about 50 years ago. The increase in the use of cars and improvements in camping (27) _____ have allowed more people to travel longer (28) _____ into the countryside and to stay there in greater comfort.\nMany campers like to be (29) _____ themselves in quiet areas, so they (30) _____ their tent and food and walk or cycle into the forests or the mountains. Others, preferring to be near people, drive to a public or privately-owned campsite (31) _____ has up-to-date facilities, (32) _____ hot showers and swimming pools.\nWhether campers are (33) _____ in the mountains or on a busy site, they should remember to (34) _____ the area clean and tidy. In the forests, they must put out any fires and keep food hidden to avoid attracting (35) _____ animals."
  },
  {
    "id": "BOOK_M067",
    "type": "cloze",
    "q": "CAMPING — Question 30: Choose the word for gap (30).",
    "options": [
      "take",
      "make",
      "pick",
      "do"
    ],
    "correct": 0,
    "explain": "A. take: take their tent and food = mang lều và thức ăn theo khi đi cắm trại. Không phải “make themselves comfortable”.",
    "passage": "Although (0) _____ groups of people have always lived outdoors in tents, camping as we know it today only began to be (26) _____ about 50 years ago. The increase in the use of cars and improvements in camping (27) _____ have allowed more people to travel longer (28) _____ into the countryside and to stay there in greater comfort.\nMany campers like to be (29) _____ themselves in quiet areas, so they (30) _____ their tent and food and walk or cycle into the forests or the mountains. Others, preferring to be near people, drive to a public or privately-owned campsite (31) _____ has up-to-date facilities, (32) _____ hot showers and swimming pools.\nWhether campers are (33) _____ in the mountains or on a busy site, they should remember to (34) _____ the area clean and tidy. In the forests, they must put out any fires and keep food hidden to avoid attracting (35) _____ animals."
  },
  {
    "id": "BOOK_M068",
    "type": "cloze",
    "q": "CAMPING — Question 31: Choose the word for gap (31).",
    "options": [
      "where",
      "who",
      "which",
      "when"
    ],
    "correct": 2,
    "explain": "which: đại từ quan hệ thay cho campsite (a campsite which has...).",
    "passage": "Although (0) _____ groups of people have always lived outdoors in tents, camping as we know it today only began to be (26) _____ about 50 years ago. The increase in the use of cars and improvements in camping (27) _____ have allowed more people to travel longer (28) _____ into the countryside and to stay there in greater comfort.\nMany campers like to be (29) _____ themselves in quiet areas, so they (30) _____ their tent and food and walk or cycle into the forests or the mountains. Others, preferring to be near people, drive to a public or privately-owned campsite (31) _____ has up-to-date facilities, (32) _____ hot showers and swimming pools.\nWhether campers are (33) _____ in the mountains or on a busy site, they should remember to (34) _____ the area clean and tidy. In the forests, they must put out any fires and keep food hidden to avoid attracting (35) _____ animals."
  },
  {
    "id": "BOOK_M069",
    "type": "cloze",
    "q": "CAMPING — Question 32: Choose the word for gap (32).",
    "options": [
      "such",
      "like",
      "as",
      "just"
    ],
    "correct": 1,
    "explain": "like: giới thiệu ví dụ, like hot showers and swimming pools; such phải đi cùng as.",
    "passage": "Although (0) _____ groups of people have always lived outdoors in tents, camping as we know it today only began to be (26) _____ about 50 years ago. The increase in the use of cars and improvements in camping (27) _____ have allowed more people to travel longer (28) _____ into the countryside and to stay there in greater comfort.\nMany campers like to be (29) _____ themselves in quiet areas, so they (30) _____ their tent and food and walk or cycle into the forests or the mountains. Others, preferring to be near people, drive to a public or privately-owned campsite (31) _____ has up-to-date facilities, (32) _____ hot showers and swimming pools.\nWhether campers are (33) _____ in the mountains or on a busy site, they should remember to (34) _____ the area clean and tidy. In the forests, they must put out any fires and keep food hidden to avoid attracting (35) _____ animals."
  },
  {
    "id": "BOOK_M070",
    "type": "cloze",
    "q": "CAMPING — Question 33: Choose the word for gap (33).",
    "options": [
      "lonely",
      "single",
      "separate",
      "alone"
    ],
    "correct": 3,
    "explain": "separate: separate from = tách biệt khỏi.",
    "passage": "Although (0) _____ groups of people have always lived outdoors in tents, camping as we know it today only began to be (26) _____ about 50 years ago. The increase in the use of cars and improvements in camping (27) _____ have allowed more people to travel longer (28) _____ into the countryside and to stay there in greater comfort.\nMany campers like to be (29) _____ themselves in quiet areas, so they (30) _____ their tent and food and walk or cycle into the forests or the mountains. Others, preferring to be near people, drive to a public or privately-owned campsite (31) _____ has up-to-date facilities, (32) _____ hot showers and swimming pools.\nWhether campers are (33) _____ in the mountains or on a busy site, they should remember to (34) _____ the area clean and tidy. In the forests, they must put out any fires and keep food hidden to avoid attracting (35) _____ animals."
  },
  {
    "id": "BOOK_M071",
    "type": "cloze",
    "q": "CAMPING — Question 34: Choose the word for gap (34).",
    "options": [
      "remain",
      "stay",
      "leave",
      "let"
    ],
    "correct": 2,
    "explain": "leave: leave the area clean and tidy = giữ khu vực sạch khi rời đi.",
    "passage": "Although (0) _____ groups of people have always lived outdoors in tents, camping as we know it today only began to be (26) _____ about 50 years ago. The increase in the use of cars and improvements in camping (27) _____ have allowed more people to travel longer (28) _____ into the countryside and to stay there in greater comfort.\nMany campers like to be (29) _____ themselves in quiet areas, so they (30) _____ their tent and food and walk or cycle into the forests or the mountains. Others, preferring to be near people, drive to a public or privately-owned campsite (31) _____ has up-to-date facilities, (32) _____ hot showers and swimming pools.\nWhether campers are (33) _____ in the mountains or on a busy site, they should remember to (34) _____ the area clean and tidy. In the forests, they must put out any fires and keep food hidden to avoid attracting (35) _____ animals."
  },
  {
    "id": "BOOK_M072",
    "type": "cloze",
    "q": "CAMPING — Question 35: Choose the word for gap (35).",
    "options": [
      "wild",
      "natural",
      "loose",
      "free"
    ],
    "correct": 0,
    "explain": "wild: wild animals = động vật hoang dã.",
    "passage": "Although (0) _____ groups of people have always lived outdoors in tents, camping as we know it today only began to be (26) _____ about 50 years ago. The increase in the use of cars and improvements in camping (27) _____ have allowed more people to travel longer (28) _____ into the countryside and to stay there in greater comfort.\nMany campers like to be (29) _____ themselves in quiet areas, so they (30) _____ their tent and food and walk or cycle into the forests or the mountains. Others, preferring to be near people, drive to a public or privately-owned campsite (31) _____ has up-to-date facilities, (32) _____ hot showers and swimming pools.\nWhether campers are (33) _____ in the mountains or on a busy site, they should remember to (34) _____ the area clean and tidy. In the forests, they must put out any fires and keep food hidden to avoid attracting (35) _____ animals."
  },
  {
    "id": "BOOK_M073",
    "type": "cloze",
    "q": "HONEY — Question 26: Choose the word for gap (26).",
    "options": [
      "involves",
      "contains",
      "includes",
      "consists"
    ],
    "correct": 3,
    "explain": "consists: consist of = bao gồm; chủ ngữ It chia consists.",
    "passage": "Honey is a sweet liquid (0) _____ by bees. It (26) _____ of water and sugars. Bees may travel as (27) _____ as seventy-five thousand kilometres and visit over two million flowers to produce just half a kilo of honey. The colour and flavour of honey depend (28) _____ the type of flower visited. In (29) _____, there are more than three hundred (30) _____ of honey.\nThe lighter-coloured ones are generally milder in flavour than darker honey.\nIn ancient (31) _____, honey was the main sweet food, as sugar was very (32) _____. Honey was of great (33) _____ to the ancient Egyptians, who used it as payment.\nToday, honey is produced and eaten in (34) _____ part of the world. Research suggests that it prevents tiredness and improves athletic performance. However, honey is not just food — it (35) _____ be taken for sore throats and is used in many skin and hair-care products."
  },
  {
    "id": "BOOK_M074",
    "type": "cloze",
    "q": "HONEY — Question 27: Choose the word for gap (27).",
    "options": [
      "well",
      "long",
      "soon",
      "far"
    ],
    "correct": 3,
    "explain": "far: as far as = xa tới mức; nói về số km.",
    "passage": "Honey is a sweet liquid (0) _____ by bees. It (26) _____ of water and sugars. Bees may travel as (27) _____ as seventy-five thousand kilometres and visit over two million flowers to produce just half a kilo of honey. The colour and flavour of honey depend (28) _____ the type of flower visited. In (29) _____, there are more than three hundred (30) _____ of honey.\nThe lighter-coloured ones are generally milder in flavour than darker honey.\nIn ancient (31) _____, honey was the main sweet food, as sugar was very (32) _____. Honey was of great (33) _____ to the ancient Egyptians, who used it as payment.\nToday, honey is produced and eaten in (34) _____ part of the world. Research suggests that it prevents tiredness and improves athletic performance. However, honey is not just food — it (35) _____ be taken for sore throats and is used in many skin and hair-care products."
  },
  {
    "id": "BOOK_M075",
    "type": "cloze",
    "q": "HONEY — Question 28: Choose the word for gap (28).",
    "options": [
      "to",
      "on",
      "for",
      "with"
    ],
    "correct": 1,
    "explain": "on: depend on = phụ thuộc vào.",
    "passage": "Honey is a sweet liquid (0) _____ by bees. It (26) _____ of water and sugars. Bees may travel as (27) _____ as seventy-five thousand kilometres and visit over two million flowers to produce just half a kilo of honey. The colour and flavour of honey depend (28) _____ the type of flower visited. In (29) _____, there are more than three hundred (30) _____ of honey.\nThe lighter-coloured ones are generally milder in flavour than darker honey.\nIn ancient (31) _____, honey was the main sweet food, as sugar was very (32) _____. Honey was of great (33) _____ to the ancient Egyptians, who used it as payment.\nToday, honey is produced and eaten in (34) _____ part of the world. Research suggests that it prevents tiredness and improves athletic performance. However, honey is not just food — it (35) _____ be taken for sore throats and is used in many skin and hair-care products."
  },
  {
    "id": "BOOK_M076",
    "type": "cloze",
    "q": "HONEY — Question 29: Choose the word for gap (29).",
    "options": [
      "case",
      "order",
      "fact",
      "place"
    ],
    "correct": 2,
    "explain": "fact: in fact = thực tế là.",
    "passage": "Honey is a sweet liquid (0) _____ by bees. It (26) _____ of water and sugars. Bees may travel as (27) _____ as seventy-five thousand kilometres and visit over two million flowers to produce just half a kilo of honey. The colour and flavour of honey depend (28) _____ the type of flower visited. In (29) _____, there are more than three hundred (30) _____ of honey.\nThe lighter-coloured ones are generally milder in flavour than darker honey.\nIn ancient (31) _____, honey was the main sweet food, as sugar was very (32) _____. Honey was of great (33) _____ to the ancient Egyptians, who used it as payment.\nToday, honey is produced and eaten in (34) _____ part of the world. Research suggests that it prevents tiredness and improves athletic performance. However, honey is not just food — it (35) _____ be taken for sore throats and is used in many skin and hair-care products."
  },
  {
    "id": "BOOK_M077",
    "type": "cloze",
    "q": "HONEY — Question 30: Choose the word for gap (30).",
    "options": [
      "varieties",
      "collections",
      "sets",
      "differences"
    ],
    "correct": 0,
    "explain": "varieties: varieties of honey = các loại mật ong.",
    "passage": "Honey is a sweet liquid (0) _____ by bees. It (26) _____ of water and sugars. Bees may travel as (27) _____ as seventy-five thousand kilometres and visit over two million flowers to produce just half a kilo of honey. The colour and flavour of honey depend (28) _____ the type of flower visited. In (29) _____, there are more than three hundred (30) _____ of honey.\nThe lighter-coloured ones are generally milder in flavour than darker honey.\nIn ancient (31) _____, honey was the main sweet food, as sugar was very (32) _____. Honey was of great (33) _____ to the ancient Egyptians, who used it as payment.\nToday, honey is produced and eaten in (34) _____ part of the world. Research suggests that it prevents tiredness and improves athletic performance. However, honey is not just food — it (35) _____ be taken for sore throats and is used in many skin and hair-care products."
  },
  {
    "id": "BOOK_M078",
    "type": "cloze",
    "q": "HONEY — Question 31: Choose the word for gap (31).",
    "options": [
      "seasons",
      "times",
      "years",
      "dates"
    ],
    "correct": 1,
    "explain": "times: in ancient times = thời cổ đại.",
    "passage": "Honey is a sweet liquid (0) _____ by bees. It (26) _____ of water and sugars. Bees may travel as (27) _____ as seventy-five thousand kilometres and visit over two million flowers to produce just half a kilo of honey. The colour and flavour of honey depend (28) _____ the type of flower visited. In (29) _____, there are more than three hundred (30) _____ of honey.\nThe lighter-coloured ones are generally milder in flavour than darker honey.\nIn ancient (31) _____, honey was the main sweet food, as sugar was very (32) _____. Honey was of great (33) _____ to the ancient Egyptians, who used it as payment.\nToday, honey is produced and eaten in (34) _____ part of the world. Research suggests that it prevents tiredness and improves athletic performance. However, honey is not just food — it (35) _____ be taken for sore throats and is used in many skin and hair-care products."
  },
  {
    "id": "BOOK_M079",
    "type": "cloze",
    "q": "HONEY — Question 32: Choose the word for gap (32).",
    "options": [
      "distant",
      "rare",
      "small",
      "slim"
    ],
    "correct": 1,
    "explain": "rare: sugar was very rare = đường rất hiếm.",
    "passage": "Honey is a sweet liquid (0) _____ by bees. It (26) _____ of water and sugars. Bees may travel as (27) _____ as seventy-five thousand kilometres and visit over two million flowers to produce just half a kilo of honey. The colour and flavour of honey depend (28) _____ the type of flower visited. In (29) _____, there are more than three hundred (30) _____ of honey.\nThe lighter-coloured ones are generally milder in flavour than darker honey.\nIn ancient (31) _____, honey was the main sweet food, as sugar was very (32) _____. Honey was of great (33) _____ to the ancient Egyptians, who used it as payment.\nToday, honey is produced and eaten in (34) _____ part of the world. Research suggests that it prevents tiredness and improves athletic performance. However, honey is not just food — it (35) _____ be taken for sore throats and is used in many skin and hair-care products."
  },
  {
    "id": "BOOK_M080",
    "type": "cloze",
    "q": "HONEY — Question 33: Choose the word for gap (33).",
    "options": [
      "cost",
      "price",
      "value",
      "charge"
    ],
    "correct": 2,
    "explain": "value: be of great value to = rất có giá trị đối với.",
    "passage": "Honey is a sweet liquid (0) _____ by bees. It (26) _____ of water and sugars. Bees may travel as (27) _____ as seventy-five thousand kilometres and visit over two million flowers to produce just half a kilo of honey. The colour and flavour of honey depend (28) _____ the type of flower visited. In (29) _____, there are more than three hundred (30) _____ of honey.\nThe lighter-coloured ones are generally milder in flavour than darker honey.\nIn ancient (31) _____, honey was the main sweet food, as sugar was very (32) _____. Honey was of great (33) _____ to the ancient Egyptians, who used it as payment.\nToday, honey is produced and eaten in (34) _____ part of the world. Research suggests that it prevents tiredness and improves athletic performance. However, honey is not just food — it (35) _____ be taken for sore throats and is used in many skin and hair-care products."
  },
  {
    "id": "BOOK_M081",
    "type": "cloze",
    "q": "HONEY — Question 34: Choose the word for gap (34).",
    "options": [
      "all",
      "some",
      "most",
      "every"
    ],
    "correct": 3,
    "explain": "every: in every part of the world = ở mọi nơi trên thế giới.",
    "passage": "Honey is a sweet liquid (0) _____ by bees. It (26) _____ of water and sugars. Bees may travel as (27) _____ as seventy-five thousand kilometres and visit over two million flowers to produce just half a kilo of honey. The colour and flavour of honey depend (28) _____ the type of flower visited. In (29) _____, there are more than three hundred (30) _____ of honey.\nThe lighter-coloured ones are generally milder in flavour than darker honey.\nIn ancient (31) _____, honey was the main sweet food, as sugar was very (32) _____. Honey was of great (33) _____ to the ancient Egyptians, who used it as payment.\nToday, honey is produced and eaten in (34) _____ part of the world. Research suggests that it prevents tiredness and improves athletic performance. However, honey is not just food — it (35) _____ be taken for sore throats and is used in many skin and hair-care products."
  },
  {
    "id": "BOOK_M082",
    "type": "cloze",
    "q": "HONEY — Question 35: Choose the word for gap (35).",
    "options": [
      "shall",
      "need",
      "can",
      "ought"
    ],
    "correct": 2,
    "explain": "can: it can be taken = nó có thể được sử dụng; thể bị động với can.",
    "passage": "Honey is a sweet liquid (0) _____ by bees. It (26) _____ of water and sugars. Bees may travel as (27) _____ as seventy-five thousand kilometres and visit over two million flowers to produce just half a kilo of honey. The colour and flavour of honey depend (28) _____ the type of flower visited. In (29) _____, there are more than three hundred (30) _____ of honey.\nThe lighter-coloured ones are generally milder in flavour than darker honey.\nIn ancient (31) _____, honey was the main sweet food, as sugar was very (32) _____. Honey was of great (33) _____ to the ancient Egyptians, who used it as payment.\nToday, honey is produced and eaten in (34) _____ part of the world. Research suggests that it prevents tiredness and improves athletic performance. However, honey is not just food — it (35) _____ be taken for sore throats and is used in many skin and hair-care products."
  },
  {
    "id": "BOOK_M083",
    "type": "cloze",
    "q": "MONEY — Question 26: Choose the word for gap (26).",
    "options": [
      "other",
      "else",
      "another",
      "apart"
    ],
    "correct": 1,
    "explain": "else: something else = một thứ khác.",
    "passage": "What is money? The pound, the dollar or the euro are actually just (0) _____ a gram or a kilometre. The difference is that you can exchange money for something (26) _____. A ten pound note may buy a book, a huge bag of sweets, or a (27) _____ of cinema tickets. But the note itself is only a printed (28) _____ of paper which costs almost nothing to make. Thousands of years (29) _____, people didn't have money as we know (30) _____. There were no banks (31) _____ even shops. In those days, Mr Green the farmer exchanged the corn he (32) _____ grown for Mr Hive's honey. This was an exchange arranged between two (33) _____, each of whom had something that the other wanted. But in time, most societies invented their own 'currencies' (34) _____ that people could exchange more. The different currencies began to join together, which is why (35) _____ everyone uses the same currency in their country."
  },
  {
    "id": "BOOK_M084",
    "type": "cloze",
    "q": "MONEY — Question 27: Choose the word for gap (27).",
    "options": [
      "couple",
      "double",
      "few",
      "several"
    ],
    "correct": 0,
    "explain": "couple: a couple of cinema tickets = một cặp/hai vé xem phim.",
    "passage": "What is money? The pound, the dollar or the euro are actually just (0) _____ a gram or a kilometre. The difference is that you can exchange money for something (26) _____. A ten pound note may buy a book, a huge bag of sweets, or a (27) _____ of cinema tickets. But the note itself is only a printed (28) _____ of paper which costs almost nothing to make. Thousands of years (29) _____, people didn't have money as we know (30) _____. There were no banks (31) _____ even shops. In those days, Mr Green the farmer exchanged the corn he (32) _____ grown for Mr Hive's honey. This was an exchange arranged between two (33) _____, each of whom had something that the other wanted. But in time, most societies invented their own 'currencies' (34) _____ that people could exchange more. The different currencies began to join together, which is why (35) _____ everyone uses the same currency in their country."
  },
  {
    "id": "BOOK_M085",
    "type": "cloze",
    "q": "MONEY — Question 28: Choose the word for gap (28).",
    "options": [
      "slice",
      "part",
      "side",
      "piece"
    ],
    "correct": 3,
    "explain": "piece: a printed piece of paper = một mảnh/tờ giấy.",
    "passage": "What is money? The pound, the dollar or the euro are actually just (0) _____ a gram or a kilometre. The difference is that you can exchange money for something (26) _____. A ten pound note may buy a book, a huge bag of sweets, or a (27) _____ of cinema tickets. But the note itself is only a printed (28) _____ of paper which costs almost nothing to make. Thousands of years (29) _____, people didn't have money as we know (30) _____. There were no banks (31) _____ even shops. In those days, Mr Green the farmer exchanged the corn he (32) _____ grown for Mr Hive's honey. This was an exchange arranged between two (33) _____, each of whom had something that the other wanted. But in time, most societies invented their own 'currencies' (34) _____ that people could exchange more. The different currencies began to join together, which is why (35) _____ everyone uses the same currency in their country."
  },
  {
    "id": "BOOK_M086",
    "type": "cloze",
    "q": "MONEY — Question 29: Choose the word for gap (29).",
    "options": [
      "since",
      "past",
      "before",
      "ago"
    ],
    "correct": 3,
    "explain": "ago: thousands of years ago = hàng nghìn năm trước.",
    "passage": "What is money? The pound, the dollar or the euro are actually just (0) _____ a gram or a kilometre. The difference is that you can exchange money for something (26) _____. A ten pound note may buy a book, a huge bag of sweets, or a (27) _____ of cinema tickets. But the note itself is only a printed (28) _____ of paper which costs almost nothing to make. Thousands of years (29) _____, people didn't have money as we know (30) _____. There were no banks (31) _____ even shops. In those days, Mr Green the farmer exchanged the corn he (32) _____ grown for Mr Hive's honey. This was an exchange arranged between two (33) _____, each of whom had something that the other wanted. But in time, most societies invented their own 'currencies' (34) _____ that people could exchange more. The different currencies began to join together, which is why (35) _____ everyone uses the same currency in their country."
  },
  {
    "id": "BOOK_M087",
    "type": "cloze",
    "q": "MONEY — Question 30: Choose the word for gap (30).",
    "options": [
      "them",
      "it",
      "some",
      "that"
    ],
    "correct": 1,
    "explain": "it: as we know it = như cách chúng ta biết đến nó.",
    "passage": "What is money? The pound, the dollar or the euro are actually just (0) _____ a gram or a kilometre. The difference is that you can exchange money for something (26) _____. A ten pound note may buy a book, a huge bag of sweets, or a (27) _____ of cinema tickets. But the note itself is only a printed (28) _____ of paper which costs almost nothing to make. Thousands of years (29) _____, people didn't have money as we know (30) _____. There were no banks (31) _____ even shops. In those days, Mr Green the farmer exchanged the corn he (32) _____ grown for Mr Hive's honey. This was an exchange arranged between two (33) _____, each of whom had something that the other wanted. But in time, most societies invented their own 'currencies' (34) _____ that people could exchange more. The different currencies began to join together, which is why (35) _____ everyone uses the same currency in their country."
  },
  {
    "id": "BOOK_M088",
    "type": "cloze",
    "q": "MONEY — Question 31: Choose the word for gap (31).",
    "options": [
      "or",
      "neither",
      "and",
      "but"
    ],
    "correct": 0,
    "explain": "or: no banks or even shops; trong câu phủ định dùng or để nối.",
    "passage": "What is money? The pound, the dollar or the euro are actually just (0) _____ a gram or a kilometre. The difference is that you can exchange money for something (26) _____. A ten pound note may buy a book, a huge bag of sweets, or a (27) _____ of cinema tickets. But the note itself is only a printed (28) _____ of paper which costs almost nothing to make. Thousands of years (29) _____, people didn't have money as we know (30) _____. There were no banks (31) _____ even shops. In those days, Mr Green the farmer exchanged the corn he (32) _____ grown for Mr Hive's honey. This was an exchange arranged between two (33) _____, each of whom had something that the other wanted. But in time, most societies invented their own 'currencies' (34) _____ that people could exchange more. The different currencies began to join together, which is why (35) _____ everyone uses the same currency in their country."
  },
  {
    "id": "BOOK_M089",
    "type": "cloze",
    "q": "MONEY — Question 32: Choose the word for gap (32).",
    "options": [
      "did",
      "was",
      "had",
      "has"
    ],
    "correct": 2,
    "explain": "had: he had grown = anh ấy đã trồng (trước lúc trao đổi), quá khứ hoàn thành.",
    "passage": "What is money? The pound, the dollar or the euro are actually just (0) _____ a gram or a kilometre. The difference is that you can exchange money for something (26) _____. A ten pound note may buy a book, a huge bag of sweets, or a (27) _____ of cinema tickets. But the note itself is only a printed (28) _____ of paper which costs almost nothing to make. Thousands of years (29) _____, people didn't have money as we know (30) _____. There were no banks (31) _____ even shops. In those days, Mr Green the farmer exchanged the corn he (32) _____ grown for Mr Hive's honey. This was an exchange arranged between two (33) _____, each of whom had something that the other wanted. But in time, most societies invented their own 'currencies' (34) _____ that people could exchange more. The different currencies began to join together, which is why (35) _____ everyone uses the same currency in their country."
  },
  {
    "id": "BOOK_M090",
    "type": "cloze",
    "q": "MONEY — Question 33: Choose the word for gap (33).",
    "options": [
      "jobs",
      "people",
      "things",
      "goods"
    ],
    "correct": 1,
    "explain": "people: between two people = giữa hai người.",
    "passage": "What is money? The pound, the dollar or the euro are actually just (0) _____ a gram or a kilometre. The difference is that you can exchange money for something (26) _____. A ten pound note may buy a book, a huge bag of sweets, or a (27) _____ of cinema tickets. But the note itself is only a printed (28) _____ of paper which costs almost nothing to make. Thousands of years (29) _____, people didn't have money as we know (30) _____. There were no banks (31) _____ even shops. In those days, Mr Green the farmer exchanged the corn he (32) _____ grown for Mr Hive's honey. This was an exchange arranged between two (33) _____, each of whom had something that the other wanted. But in time, most societies invented their own 'currencies' (34) _____ that people could exchange more. The different currencies began to join together, which is why (35) _____ everyone uses the same currency in their country."
  },
  {
    "id": "BOOK_M091",
    "type": "cloze",
    "q": "MONEY — Question 34: Choose the word for gap (34).",
    "options": [
      "for",
      "by",
      "because",
      "so"
    ],
    "correct": 3,
    "explain": "so: so that + mệnh đề = để mà/chỉ mục đích.",
    "passage": "What is money? The pound, the dollar or the euro are actually just (0) _____ a gram or a kilometre. The difference is that you can exchange money for something (26) _____. A ten pound note may buy a book, a huge bag of sweets, or a (27) _____ of cinema tickets. But the note itself is only a printed (28) _____ of paper which costs almost nothing to make. Thousands of years (29) _____, people didn't have money as we know (30) _____. There were no banks (31) _____ even shops. In those days, Mr Green the farmer exchanged the corn he (32) _____ grown for Mr Hive's honey. This was an exchange arranged between two (33) _____, each of whom had something that the other wanted. But in time, most societies invented their own 'currencies' (34) _____ that people could exchange more. The different currencies began to join together, which is why (35) _____ everyone uses the same currency in their country."
  },
  {
    "id": "BOOK_M092",
    "type": "cloze",
    "q": "MONEY — Question 35: Choose the word for gap (35).",
    "options": [
      "tomorrow",
      "today",
      "recently",
      "soon"
    ],
    "correct": 1,
    "explain": "today: today everyone uses... = ngày nay mọi người dùng...",
    "passage": "What is money? The pound, the dollar or the euro are actually just (0) _____ a gram or a kilometre. The difference is that you can exchange money for something (26) _____. A ten pound note may buy a book, a huge bag of sweets, or a (27) _____ of cinema tickets. But the note itself is only a printed (28) _____ of paper which costs almost nothing to make. Thousands of years (29) _____, people didn't have money as we know (30) _____. There were no banks (31) _____ even shops. In those days, Mr Green the farmer exchanged the corn he (32) _____ grown for Mr Hive's honey. This was an exchange arranged between two (33) _____, each of whom had something that the other wanted. But in time, most societies invented their own 'currencies' (34) _____ that people could exchange more. The different currencies began to join together, which is why (35) _____ everyone uses the same currency in their country."
  }
];
let rewrites = [
  {
    "id": "BOOK_R001",
    "q": "Although Tim felt tired, he stayed up to finish his homework.",
    "answer": "In spite of being tired, Tim stayed up to finish his homework.",
    "hint": "Gợi ý: In spite of being tired, Tim stayed up to finish his homework. — So sánh cấu trúc và nghĩa với câu gốc; có thể tồn tại đáp án tương đương khác."
  },
  {
    "id": "BOOK_R002",
    "q": "Elena speaks Polish well, she's never been to Poland.",
    "answer": "Elena speaks Polish well though she's never been to Poland.",
    "hint": "Gợi ý: Elena speaks Polish well though she's never been to Poland. — So sánh cấu trúc và nghĩa với câu gốc; có thể tồn tại đáp án tương đương khác."
  },
  {
    "id": "BOOK_R003",
    "q": "Jane kept running, even though she knew she couldn't win.",
    "answer": "Jane kept running in spite of knowing that she couldn't win.",
    "hint": "Gợi ý: Jane kept running in spite of knowing that she couldn't win. — So sánh cấu trúc và nghĩa với câu gốc; có thể tồn tại đáp án tương đương khác."
  },
  {
    "id": "BOOK_R004",
    "q": "Despite the heat, Diana wore her winter clothes.",
    "answer": "In spite of the heat, Diana wore her winter clothes.",
    "hint": "Gợi ý: In spite of the heat, Diana wore her winter clothes. — So sánh cấu trúc và nghĩa với câu gốc; có thể tồn tại đáp án tương đương khác."
  },
  {
    "id": "BOOK_R005",
    "q": "Does your father cycle to work?",
    "answer": "Does your father get to work by bike?",
    "hint": "Gợi ý: Does your father get to work by bike? — So sánh cấu trúc và nghĩa với câu gốc; có thể tồn tại đáp án tương đương khác."
  },
  {
    "id": "BOOK_R006",
    "q": "My father was ill so he stayed at home yesterday.",
    "answer": "Because my father was ill, he stayed at home yesterday.",
    "hint": "Gợi ý: Because my father was ill, he stayed at home yesterday. — So sánh cấu trúc và nghĩa với câu gốc; có thể tồn tại đáp án tương đương khác."
  },
  {
    "id": "BOOK_R007",
    "q": "I intend to visit Spain this summer.",
    "answer": "I'm going to visit Spain this summer.",
    "hint": "Gợi ý: I'm going to visit Spain this summer. — So sánh cấu trúc và nghĩa với câu gốc; có thể tồn tại đáp án tương đương khác."
  },
  {
    "id": "BOOK_R008",
    "q": "We plan to play volleyball this weekend.",
    "answer": "We're going to play volleyball this weekend.",
    "hint": "Gợi ý: We're going to play volleyball this weekend. — So sánh cấu trúc và nghĩa với câu gốc; có thể tồn tại đáp án tương đương khác."
  },
  {
    "id": "BOOK_R009",
    "q": "How much does an ice-cream cost?",
    "answer": "What's the price of an ice-cream?",
    "hint": "Gợi ý: What's the price of an ice-cream? — So sánh cấu trúc và nghĩa với câu gốc; có thể tồn tại đáp án tương đương khác."
  },
  {
    "id": "BOOK_R010",
    "q": "Let's play volleyball tomorrow afternoon.",
    "answer": "Why don't we play volleyball tomorrow afternoon?",
    "hint": "Gợi ý: Why don't we play volleyball tomorrow afternoon? — So sánh cấu trúc và nghĩa với câu gốc; có thể tồn tại đáp án tương đương khác."
  },
  {
    "id": "BOOK_R011",
    "q": "Let's come to my house after school.",
    "answer": "What about coming to my house after school?",
    "hint": "Gợi ý: What about coming to my house after school? — So sánh cấu trúc và nghĩa với câu gốc; có thể tồn tại đáp án tương đương khác."
  },
  {
    "id": "BOOK_R012",
    "q": "How about going camping this weekend?",
    "answer": "Let's go camping this weekend.",
    "hint": "Gợi ý: Let's go camping this weekend. — So sánh cấu trúc và nghĩa với câu gốc; có thể tồn tại đáp án tương đương khác."
  }
];
