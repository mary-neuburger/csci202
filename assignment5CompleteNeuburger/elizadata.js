// data for elizabot.js
// entries prestructured as layed out in Weizenbaum's description 
// [cf: Communications of the ACM, Vol. 9, #1 (January 1966): p 36-45.]

var elizaInitials = [
"What can I do for ya?",
"What's on your mind?",
"Great to meet ya!",
"Hello!",
"How are ya?",
"Well met!",
"I've the finest wares in the land!",
"What can I get for ya today?"
];

var elizaFinals = [
"Safe travels!",
"See you soon!",
"Watch yer back!",
"Off with ye."
];

var elizaQuits = [
"bye",
"goodbye",
"done",
"exit",
"quit",
"thanks",
"thank you"
];

var elizaPres = [
"dont", "don't",
"cant", "can't",
"wont", "won't",
"recollect", "remember",
"recall", "remember",
"dreamt", "dreamed",
"dreams", "dream",
"maybe", "perhaps",
"certainly", "yes",
"machine", "computer",
"machines", "computer",
"computers", "computer",
"were", "was",
"you're", "you are",
"i'm", "i am",
"same", "alike",
"identical", "alike",
"equivalent", "alike"
];

var elizaPosts = [
"am", "are",
"your", "my",
"me", "you",
"myself", "yourself",
"yourself", "myself",
"i", "you",
"you", "I",
"my", "your",
"i'm", "you are"
];

var elizaSynons = {
"be": ["am", "is", "are", "was"],
"belief": ["feel", "think", "believe", "wish"],
"cannot": ["can't"],
"desire": ["want", "need"],
"everyone": ["everybody", "nobody", "noone"],
"family": ["mother", "mom", "father", "dad", "sister", "brother", "wife", "children", "child"],
"happy": ["elated", "glad", "better"],
"sad": ["unhappy", "depressed", "sick"]
};

var elizaKeywords = [

/*
  Array of
  ["<key>", <rank>, [
    ["<decomp>", [
      "<reasmb>",
      "<reasmb>",
      "<reasmb>"
    ]],
    ["<decomp>", [
      "<reasmb>",
      "<reasmb>",
      "<reasmb>"
    ]]
  ]]
*/

["xnone", 0, [
 ["*", [
     "Sorry, that's not on the menu.",
     "Can ye repeat that?",
     "What was yer order?"
  ]]
]],
["stout", 0, [
 ["*", [
     "Here's a flask of our stout! Would ye like anything else?",
     "A good choice! Here ye are. Anythin' else?",
     "A proud Dwarven drink! Would ye like another?"
  ]]
]],
["mead", 0, [
 ["*", [
      "Here's a flask of our mead! Would ye like anything else?",
      "A good choice! Here ye are. Anythin' else?",
      "A proud Dwarven drink! Would ye like another?"
  ]]
]],
["tawny", 0, [
 ["*", [
     "Here's that tawny. The humans make 'em well!",
     "Tawny, fresh from Stormwind. Would ye like something else?",
     "Ach, nothing like our ale, but here ye are!"
  ]]
]],
["bourbon", 0, [
 ["*", [
     "This came from far away. Enjoy!",
     "Nothin' like some good bourbon. Drink up!",
     "That's some tough stuff! Would ye like anything else?"
  ]]
]],
["noir", 0, [
 ["*", [
     "Somethin' light today, ey?",
     "The elves know how to make some tasty drinks! Shame it's no ale.",
     "Here's yer drink. Would you like something stronger?"
  ]]
]],
["milk", 0, [
 ["*", [
     "Just milk today? Here ye go.",
     "Somethin' nice to wash away the stress of today. Would ye like something else?",
     "Probably a good idea. Here ye go!"
  ]]
]],
["juice", 0, [
 ["*", [
     "Just some moonberry juice? It doesn't have the kick!",
     "Here's yer juice. We also have Dalaran noir if yer interested."
  ]]
]]
];

// regexp/replacement pairs to be performed as final cleanings
// here: cleanings for multiple bots talking to each other
var elizaPostTransforms = [
	/ old old/g, " old",
	/\bthey were( not)? me\b/g, "it was$1 me",
	/\bthey are( not)? me\b/g, "it is$1 me",
	/Are they( always)? me\b/, "it is$1 me",
	/\bthat your( own)? (\w+)( now)? \?/, "that you have your$1 $2 ?",
	/\bI to have (\w+)/, "I have $1",
	/Earlier you said your( own)? (\w+)( now)?\./, "Earlier you talked about your $2."
];

// eof