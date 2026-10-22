// Bean Feasa: all the words. WOMEN = the "Tell me more" pages. SAYINGS = the daily quotes.
// Each saying: w = which woman, t = 'i' (a new saying, inspired by her) or 's' (a traditional Irish saying, seanfhocal),
// ga = the Irish (sayings only), q = the quote in English, s = a short story for that day.
// The day order goes round the women in turn (first saying of each woman, then the second of each, and so on).

const WOMEN = {
  brigid: {
    name: 'Brigid', ga: 'Bríd', say: 'BRIJ-id, or in Irish "Breed"', means: 'exalted one',
    who: 'Brigid is two women in one: an old goddess of the Tuatha Dé Danann, daughter of the Dagda, and Saint Brigid of Kildare, who lived around 1,500 years ago. Over time their stories wove together.',
    story: 'The goddess Brigid looked after poets, healers and smiths. The saint founded a great church at Kildare, Cill Dara, the church of the oak, where a sacred flame was kept burning for centuries. She was famous for giving away everything she had to people in need.',
    stands: 'Generosity, healing, creativity and new beginnings. Her day, 1 February, is Imbolc, the first day of spring, and since 2023 it has been a public holiday in Ireland.',
    source: 'Lives of Saint Brigid (from the 600s on); Gerald of Wales on the Kildare flame (1180s); Cormac\'s Glossary'
  },
  medb: {
    name: 'Medb', ga: 'Méabh', say: 'MAYV', means: 'she who intoxicates',
    who: 'Queen of Connacht, ruling from Cruachan in Co. Roscommon. One of the most powerful women in all of Irish myth.',
    story: 'One night Medb and her husband Ailill compared everything they owned. They were equal in every way except one: Ailill had a great white-horned bull. Medb set out to get the only bull that could match it, the Brown Bull of Cooley, and that started the greatest Irish epic, the Táin.',
    stands: 'Knowing your own worth, ambition, and refusing to be second to anyone. She chose her husbands by her own rules.',
    source: 'Táin Bó Cúailnge (The Cattle Raid of Cooley), kept in manuscripts from the 1100s'
  },
  macha: {
    name: 'Macha', ga: 'Macha', say: 'MAH-kha', means: 'plain or field',
    who: 'A goddess of the land, of horses and of sovereignty. There are several Machas in the old stories, and they may all be one goddess in different forms.',
    story: 'Macha\'s husband boasted to the king of Ulster that his wife could outrun the royal horses. The king forced her to race even though she was about to give birth. She won, had twins at the finish line, and cursed the men of Ulster to feel the pains of childbirth in their hour of greatest need.',
    stands: 'Endurance, justice, and making sure a wrong is remembered. The great fort Emain Macha (Navan Fort) and the city of Armagh, Ard Mhacha, carry her name.',
    source: 'Noínden Ulad (The Debility of the Ulstermen); Dindshenchas (the lore of places)'
  },
  scathach: {
    name: 'Scáthach', ga: 'Scáthach', say: 'SKAW-hukh', means: 'the shadowy one',
    who: 'A warrior woman and teacher who lived in a fortress, Dún Scáthaigh, on the Isle of Skye. Only the bravest could even reach her door.',
    story: 'Cú Chulainn, the greatest hero of Ulster, crossed the sea to train with her. She taught him the salmon leap and gave him the Gáe Bolg, the spear no one else could use. She could see the future too, and told him what lay ahead before he left.',
    stands: 'Skill earned through practice. Being the expert others travel to learn from.',
    source: 'Tochmarc Emire (The Wooing of Emer)'
  },
  aife: {
    name: 'Aífe', ga: 'Aoife', say: 'EE-fa', means: 'beauty or radiance',
    who: 'A warrior queen in Scotland and Scáthach\'s great rival. The old tale calls her the hardest woman warrior in the world.',
    story: 'When Aífe went to war with Scáthach, Cú Chulainn fought her. He couldn\'t beat her by strength, so he tricked her, shouting that her chariot and horses had fallen off a cliff. They made peace, and she later had his son, Connla.',
    stands: 'Fierceness, pride in your strength, and carrying on after a hard loss.',
    source: 'Tochmarc Emire (The Wooing of Emer); Aided Óenfir Aífe (The Death of Aífe\'s Only Son)'
  },
  morrigan: {
    name: 'The Morrígan', ga: 'An Mhór-Ríon', say: 'MOR-ee-gan', means: 'great queen, or phantom queen',
    who: 'A goddess of battle, fate and prophecy. She often appears as a crow.',
    story: 'The Morrígan could take any shape: a crow, a wolf, an eel, a red-haired woman. She warned the Brown Bull of Cooley that Medb\'s army was coming, and after the great battle of Mag Tuired she announced the victory to all of Ireland and spoke a poem of peace.',
    stands: 'Power, change, seeing what is coming, and being more than one thing.',
    source: 'Cath Maige Tuired (The Battle of Mag Tuired); Táin Bó Cúailnge; Táin Bó Regamna'
  },
  deirdre: {
    name: 'Deirdre', ga: 'Deirdre', say: 'DEER-dra', means: 'uncertain, maybe "the one who rages"',
    who: 'Known as Deirdre of the Sorrows. Her story is one of the best known in Ireland and has been retold by poets like Yeats and Synge.',
    story: 'At her birth a druid foretold that she\'d bring trouble, so King Conchobar had her raised in hiding to be his own wife. Deirdre chose for herself instead: she fell in love with the young warrior Naoise and they ran away to Scotland together. The story ends in sorrow, but she never gave her heart where she didn\'t choose.',
    stands: 'Choosing your own love and your own life, and refusing to be owned.',
    source: 'Longes mac nUislenn (The Exile of the Sons of Uisliu)'
  },
  emer: {
    name: 'Emer', ga: 'Eimhear', say: 'EE-mer', means: 'swift',
    who: 'Wife of Cú Chulainn and daughter of Forgall Monach. Famous for her wisdom and quick wit.',
    story: 'When Cú Chulainn came to court her, Emer spoke to him in riddles and set him hard tasks before she\'d agree; that is why he went to train with Scáthach. The old tale says she had six gifts: beauty, a lovely voice, sweet speech, needlework, wisdom and virtue. Later, when he fell for Fand of the Otherworld, Emer faced her with such honesty and dignity that Fand stepped away.',
    stands: 'Wit, self-respect, and making others rise to meet you.',
    source: 'Tochmarc Emire (The Wooing of Emer); Serglige Con Culainn (The Wasting Sickness of Cú Chulainn)'
  },
  niamh: {
    name: 'Niamh', ga: 'Niamh Chinn Óir', say: 'NEEV', means: 'bright or radiant',
    who: 'Niamh of the Golden Hair, a woman of Tír na nÓg, the Land of Youth.',
    story: 'Niamh rode across the sea on a white horse, found the poet-warrior Oisín, and asked him to come away with her. They lived happily in Tír na nÓg, where no one grows old. When Oisín longed to see Ireland again she let him go, with one warning: don\'t touch the ground. Three hundred years had passed.',
    stands: 'Asking for what you want, courage, and love that lets people choose.',
    source: 'Laoi Oisín i dTír na nÓg (The Lay of Oisín in the Land of Youth), Mícheál Coimín, 1700s'
  },
  etain: {
    name: 'Étaín', ga: 'Éadaoin', say: 'AY-deen', means: 'uncertain, maybe "jealousy" or "passion"',
    who: 'Called the most beautiful woman in Ireland. She lived more than one life.',
    story: 'The jealous Fuamnach turned Étaín into a pool of water, then a worm, then a beautiful purple fly that the wind blew around Ireland for years. At last she fell into a cup, was swallowed, and was born again as a baby girl, over a thousand years after her first birth. She grew up to be queen of Ireland.',
    stands: 'Resilience, change, and becoming whole again after being scattered.',
    source: 'Tochmarc Étaíne (The Wooing of Étaín)'
  },
  boann: {
    name: 'Boann', ga: 'Bóinn', say: 'BOH-in', means: 'white cow',
    who: 'The goddess of the River Boyne and mother of Aengus, god of love.',
    story: 'Only her husband Nechtan and his cupbearers could visit the Well of Segais, where hazelnuts of wisdom fell into the water. Boann went anyway and walked around it. The well rose up and rushed after her all the way to the sea, and became the River Boyne. Newgrange stands beside it.',
    stands: 'Curiosity, seeking wisdom, and refusing a rule that keeps knowledge for a few.',
    source: 'Dindshenchas (the lore of places)'
  },
  eriu: {
    name: 'Ériu', ga: 'Éire', say: 'AY-roo', means: 'uncertain, linked to the name of the land',
    who: 'One of three goddesses of the land, with her sisters Banba and Fódla. Ireland, Éire in Irish, is named after her.',
    story: 'When the sons of Míl came to take Ireland, the three sisters met them one by one, and each asked that the island be named after her. The poet Amergin promised Ériu that hers would be the chief name. It still is.',
    stands: 'Belonging, the land itself, and the right to give or refuse blessing. In old Ireland a king ruled only with the goddess of the land on his side.',
    source: 'Lebor Gabála Érenn (The Book of the Taking of Ireland)'
  },
  tailtiu: {
    name: 'Tailtiu', ga: 'Tailte', say: 'TAL-tyoo', means: 'uncertain, maybe "the earth"',
    who: 'A queen of the Fir Bolg, the people before the Tuatha Dé Danann, and foster-mother of Lugh.',
    story: 'Tailtiu cleared the great forests of Meath with her own hands so the land could be farmed. She worked until her heart gave out. Lugh held games and a great gathering in her memory at Teltown, Co. Meath, every year at Lughnasa, 1 August, and people kept coming for centuries.',
    stands: 'Hard work for others, caring for the next generation, and the harvest.',
    source: 'Lebor Gabála Érenn; Dindshenchas'
  },
  aine: {
    name: 'Áine', ga: 'Áine', say: 'AWN-ya', means: 'brightness, radiance',
    who: 'A goddess of summer, the sun, wealth and the land, linked to Knockainey, Cnoc Áine, and Lough Gur in Co. Limerick.',
    story: 'On Midsummer\'s Eve, people carried torches of straw around Áine\'s hill and waved them over the fields and cattle for luck, a custom that went on into the 1800s. Legend also says she was the mother of Gearóid Iarla, the poet Earl of Desmond, who sleeps under Lough Gur.',
    stands: 'Warmth, light, plenty, and the power of joy.',
    source: 'Local folklore of Co. Limerick; Dindshenchas'
  },
  grainne: {
    name: 'Gráinne', ga: 'Gráinne', say: 'GRAWN-ya', means: 'maybe "grain" or "the one who inspires love"',
    who: 'Daughter of the high king Cormac mac Airt.',
    story: 'Gráinne was promised to the elderly Fionn mac Cumhaill. At the wedding feast she slipped a sleeping potion to the guests and talked the young warrior Diarmuid into running away with her. Fionn chased them across Ireland for years, and many old stone tombs are still called the beds of Diarmuid and Gráinne.',
    stands: 'Choosing your own path, boldness, and not being promised away.',
    source: 'Tóraíocht Dhiarmada agus Ghráinne (The Pursuit of Diarmuid and Gráinne)'
  },
  fionnuala: {
    name: 'Fionnuala', ga: 'Fionnuala', say: 'fin-NOO-la', means: 'fair shoulder',
    who: 'The eldest of the Children of Lir.',
    story: 'Her jealous stepmother turned Fionnuala and her three brothers into swans for 900 years: 300 on Lough Derravaragh, 300 on the stormy Sea of Moyle and 300 off the west coast. Fionnuala sheltered her brothers under her wings through the worst storms, and they kept their human voices and sang.',
    stands: 'Protecting the people you love, patience, and holding a family together.',
    source: 'Oidheadh Chlainne Lir (The Fate of the Children of Lir)'
  },
  bodhmall: {
    name: 'Bodhmall and Liath', ga: 'Bodhmall agus Liath Luachra', say: 'BOW-vul and LEE-a LOO-akh-ra', means: 'Liath Luachra means "the grey one of Luachair"',
    who: 'The two women who raised Fionn mac Cumhaill: Bodhmall the druid and Liath Luachra the warrior.',
    story: 'Fionn\'s father was killed before he was born, and his enemies wanted the baby dead too. His mother sent him to the forest of Slieve Bloom, where Bodhmall and Liath Luachra hid him, raised him and trained him to hunt, run and fight until he was ready to go out into the world.',
    stands: 'The quiet strength of the people who raise heroes.',
    source: 'Macgnímartha Finn (The Boyhood Deeds of Fionn)'
  },
  cailleach: {
    name: 'The Cailleach', ga: 'An Chailleach Bhéarra', say: 'KAL-yokh VAY-ra', means: 'the old woman (or veiled one) of Beara',
    who: 'The great old woman of winter, linked to the Beara peninsula in Co. Cork. She was said to have lived through seven youths.',
    story: 'Stories say the Cailleach shaped the land, dropping stones from her apron to make hills and cairns. A poem from over a thousand years ago, the Lament of the Old Woman of Beare, has her look back on her long life with honesty and fire. A stone on Beara called the Hag of Beara still has coins left on it.',
    stands: 'Age, wisdom, endurance, and the strength gathered in winter.',
    source: 'The Lament of the Old Woman of Beare (around the 800s); folklore of Ireland and Scotland'
  },
  granuaile: {
    name: 'Gráinne Mhaol', ga: 'Gráinne Ní Mháille', say: 'GRAWN-ya WAIL', means: 'bald Gráinne (also called Granuaile)',
    who: 'A real woman, around 1530 to 1603: chieftain of the O\'Malley clan and a sea captain in Co. Mayo. Known as the pirate queen.',
    story: 'As a girl she was told she couldn\'t sail with her father because her hair would catch in the ropes, so the story says she cut it off. She went on to lead fleets of ships from castles around Clew Bay. In 1593 she sailed to London and met Queen Elizabeth I face to face to win the release of her son and brother, and she got her way.',
    stands: 'Leadership, daring, and refusing to be told your place.',
    source: 'English state papers of the 1500s; Irish folklore'
  },
  uallach: {
    name: 'Uallach', ga: 'Uallach iníon Mhuineacháin', say: 'OO-a-lakh', means: 'proud',
    who: 'A real poet. The Annals of Inisfallen record her death in 934 and call her the chief woman-poet of Ireland.',
    story: 'Poets in early Ireland trained for many years and held real power: their praise could raise up a king, and their satire could shame one. We know almost nothing about Uallach, but one line in the annals has kept her name alive for over a thousand years.',
    stands: 'The power of words, and taking your place in the record.',
    source: 'Annals of Inisfallen, year 934'
  },
  fedelm: {
    name: 'Fedelm', ga: 'Feidhealm', say: 'FEH-delm', means: 'uncertain',
    who: 'A prophetess and poet of Connacht who had just come home from studying across the sea.',
    story: 'As Medb set out with her army, Fedelm met her on the road: golden hair in three braids, weaving with a golden rod. Medb asked how her army looked. Fedelm said she saw it crimson, red. Medb asked again and again, hoping for a better answer, and Fedelm gave the same one every time.',
    stands: 'Honesty, clear sight, and telling the truth even to a queen.',
    source: 'Táin Bó Cúailnge (The Cattle Raid of Cooley)'
  },
  sadhbh: {
    name: 'Sadhbh', ga: 'Sadhbh', say: 'SIVE (rhymes with five)', means: 'sweet, goodness',
    who: 'Wife of Fionn mac Cumhaill and mother of Oisín.',
    story: 'Sadhbh refused to marry a dark druid, Fear Doirche, so he turned her into a deer. Fionn\'s hounds knew she was really a woman and wouldn\'t hurt her. Back in her own shape she married Fionn, but the druid tricked her away again. Years later Fionn found a boy living wild on a mountain: their son, Oisín, "little deer".',
    stands: 'Saying no, staying true to yourself, and love that finds its way.',
    source: 'Fenian folklore; retold in many collections from the 1800s on'
  },
  liban: {
    name: 'Lí Ban', ga: 'Lí Ban', say: 'LEE-ban', means: 'beauty of women',
    who: 'A woman of old Ulster, sometimes called Ireland\'s mermaid.',
    story: 'When a neglected well overflowed and became Lough Neagh, it drowned Lí Ban\'s family. She survived a year in a room under the water, then became half woman, half salmon, and swam the seas for 300 years. In the 500s fishermen pulled her up in a net, and she was given a new name, Muirgen, "born of the sea".',
    stands: 'Survival, adapting, and keeping your heart through great change.',
    source: 'Aided Echach meic Maireda (The Death of Eochaid son of Mairid), in the Book of the Dun Cow'
  },
  danu: {
    name: 'Danu', ga: 'Danu', say: 'DAH-noo', means: 'uncertain',
    who: 'The mother goddess the Tuatha Dé Danann, "the people of the goddess Danu", are named after.',
    story: 'The Tuatha Dé Danann were the magical people of old Ireland, who later went into the hills to become the people of the sídhe. Almost nothing else about Danu herself survived. Some link her with Anu, a goddess of plenty: two round hills in Co. Kerry are still called the Paps of Anu.',
    stands: 'Beginnings, and the deep roots we can\'t always see.',
    source: 'Lebor Gabála Érenn; Cormac\'s Glossary (on Anu)'
  },
  tlachtga: {
    name: 'Tlachtga', ga: 'Tlachtga', say: 'TLAKHT-ga', means: 'uncertain',
    who: 'Daughter of the great druid Mug Ruith.',
    story: 'Tlachtga travelled the world with her father, learning his magic. She gave birth to three sons on a hill in Co. Meath and died there after great hardship. The hill, the Hill of Ward near Athboy, carries her name, and the great fire of Samhain was said to be lit there to begin the new year.',
    stands: 'Learning, fire, and light after the darkest times.',
    source: 'Dindshenchas (the lore of places); Seathrún Céitinn\'s history of Ireland (1600s)'
  }
};

// The order the women take turns in.
const ORDER = ['brigid', 'medb', 'scathach', 'niamh', 'macha', 'tailtiu', 'emer', 'morrigan', 'fionnuala', 'boann',
  'granuaile', 'etain', 'aine', 'cailleach', 'fedelm', 'deirdre', 'eriu', 'aife', 'grainne', 'bodhmall', 'uallach',
  'sadhbh', 'liban', 'danu', 'tlachtga'];

const SAYINGS = {
  brigid: [
    { t: 'i', q: 'Keep one flame lit, and you will never sit fully in the dark.', s: 'In Kildare, Brigid\'s nuns kept a fire burning for centuries. A visitor in the 1180s wrote that it had never gone out.' },
    { t: 's', ga: 'Ar scáth a chéile a mhaireann na daoine.', q: 'People live in each other\'s shelter.', s: 'Brigid was famous for giving everything away to people in need, even, the story goes, her father\'s jewelled sword.' },
    { t: 'i', q: 'Ask for a small thing with a big heart, and watch it spread.', s: 'A king told Brigid she could have as much land as her cloak would cover. She laid it down, and it spread across the whole Curragh of Kildare.' },
    { t: 's', ga: 'Tús maith leath na hoibre.', q: 'A good start is half the work.', s: 'Brigid\'s day, 1 February, is Imbolc, the first day of spring. People weave her cross from rushes to welcome a fresh start.' }
  ],
  medb: [
    { t: 'i', q: 'Know your worth, and count it out loud if you have to.', s: 'One night Queen Medb and her husband Ailill compared everything they owned. When his one bull tipped the balance, she set out to even the score.' },
    { t: 'i', q: 'Choose a partner without meanness, without jealousy and without fear.', s: 'Medb said she would only marry a man who was not mean, not jealous and not afraid. She knew exactly what she would not put up with.' },
    { t: 's', ga: 'Ná nocht d\'fhiacail go bhféadair an greim do bhreith.', q: 'Don\'t show your teeth until you can bite.', s: 'Medb gathered armies from all over Ireland before she marched on Ulster for the Brown Bull. She planned first and struck second.' },
    { t: 'i', q: 'A queen doesn\'t wait to be given a seat. She builds the hall.', s: 'Medb ruled Connacht from Cruachan in Co. Roscommon. You can still walk among the old mounds at Rathcroghan today.' }
  ],
  macha: [
    { t: 'i', q: 'They may doubt you right up to the finish line. Cross it anyway.', s: 'Macha\'s husband boasted she could outrun the king\'s horses. The king forced her to race while she was about to give birth, and she won.' },
    { t: 'i', q: 'When you are wronged, you are allowed to make them remember.', s: 'After the race, Macha cursed the men of Ulster: in their hour of greatest need, they would feel the pains of childbirth. The curse lasted nine generations.' },
    { t: 's', ga: 'Is fada an bóthar nach mbíonn casadh ann.', q: 'It\'s a long road that has no turning.', s: 'Macha gave birth to twins at the finish line. The great fort there was named Emain Macha, the twins of Macha.' },
    { t: 'i', q: 'Your name can outlast every king who ignored you.', s: 'Another Macha, Macha of the Red Hair, is said to have ruled all of Ireland. The city of Armagh, Ard Mhacha, means Macha\'s height.' }
  ],
  scathach: [
    { t: 'i', q: 'Strength is not handed to you. It is trained, one hard morning at a time.', s: 'Scáthach ran a school for warriors on the Isle of Skye. The greatest hero of Ulster, Cú Chulainn, crossed the sea to learn from her.' },
    { t: 'i', q: 'The best teachers don\'t make you need them. They make you ready.', s: 'Scáthach taught Cú Chulainn the salmon leap and gave him the Gáe Bolg, a spear only he could use. Then she sent him home.' },
    { t: 's', ga: 'De réir a chéile a thógtar na caisleáin.', q: 'Castles are built little by little.', s: 'To reach Scáthach\'s fort, students had to cross a bridge that rose up and threw off anyone who rushed it. You had to learn the leap first.' },
    { t: 'i', q: 'Skill is the one thing no one can take from you.', s: 'Scáthach could also see the future, and told Cú Chulainn what lay ahead before he left. She gave him knowledge as well as strength.' }
  ],
  aife: [
    { t: 'i', q: 'Be fierce enough that the stories have to mention you.', s: 'The old tale calls Aífe the hardest woman warrior in the world. Even Scáthach was wary of facing her.' },
    { t: 's', ga: 'An té nach bhfuil láidir, ní foláir dó a bheith glic.', q: 'Whoever isn\'t strong had better be clever.', s: 'Cú Chulainn could only beat Aífe with a trick, shouting that her horses and chariot had fallen off a cliff. It took cunning to match her.' },
    { t: 'i', q: 'Losing one fight doesn\'t make you less of a warrior.', s: 'Aífe made peace with Cú Chulainn and went on ruling in her own right. Their son, Connla, grew up to be a great fighter too.' }
  ],
  morrigan: [
    { t: 'i', q: 'You can be more than one thing. Change shape when you need to.', s: 'The Morrígan could appear as a crow, a wolf, an eel or a red-haired woman. She was never only one thing.' },
    { t: 'i', q: 'Speak the future you want to see.', s: 'After the great battle of Mag Tuired, the Morrígan announced the victory to the hills, rivers and waters of Ireland. Then she spoke a poem about peace.' },
    { t: 's', ga: 'Is minic a bhris béal duine a shrón.', q: 'A person\'s mouth has often broken their nose.', s: 'Cú Chulainn was rude to the Morrígan when she offered to help him. She came back to trouble him in battle, and he learned to respect her.' },
    { t: 'i', q: 'Give your warnings, even when no one wants to hear them.', s: 'The Morrígan flew to warn the Brown Bull of Cooley that Medb\'s army was coming. She saw trouble before anyone else did.' }
  ],
  deirdre: [
    { t: 'i', q: 'Your heart is yours to give. No one else gets to decide.', s: 'King Conchobar had Deirdre raised in hiding so he could marry her. She chose the young warrior Naoise instead, and ran away with him.' },
    { t: 'i', q: 'Describe the life you want clearly, then go and find it.', s: 'Seeing a raven on snow, Deirdre said she wanted a man with hair black as the raven, cheeks red as blood and skin white as snow. Then she went and found him.' },
    { t: 's', ga: 'Níl aon tinteán mar do thinteán féin.', q: 'There\'s no hearth like your own hearth.', s: 'Deirdre and Naoise made a happy home in Scotland for years. In an old poem she says farewell to it with love.' }
  ],
  emer: [
    { t: 'i', q: 'Make them rise to meet you.', s: 'When Cú Chulainn came courting, Emer spoke to him in riddles and set him hard tasks. He had to prove himself before she\'d say yes.' },
    { t: 'i', q: 'Count all your gifts, not only the ones people can see.', s: 'The old story says Emer had six gifts: beauty, a lovely voice, sweet speech, needlework, wisdom and virtue. Most had nothing to do with looks.' },
    { t: 's', ga: 'Níor bhris focal maith fiacail riamh.', q: 'A good word never broke a tooth.', s: 'Emer and Cú Chulainn\'s first meeting was a whole conversation in clever, hidden words. Her speech was as sharp as his sword.' },
    { t: 'i', q: 'Dignity is louder than anger.', s: 'When Cú Chulainn fell for Fand of the Otherworld, Emer came to face her. She spoke so honestly that Fand chose to step away.' }
  ],
  niamh: [
    { t: 'i', q: 'You are allowed to ask for what you want.', s: 'Niamh of the Golden Hair rode across the sea on a white horse and asked Oisín to come away with her. She didn\'t wait to be chosen.' },
    { t: 'i', q: 'Some places only appear once you\'re brave enough to ride toward them.', s: 'Niamh took Oisín over the waves to Tír na nÓg, the Land of Youth, where no one grows old.' },
    { t: 's', ga: 'Is glas iad na cnoic i bhfad uainn.', q: 'Faraway hills are green.', s: 'Oisín missed Ireland and went back to visit. When he got there, three hundred years had passed and everyone he knew was gone.' },
    { t: 'i', q: 'Warn the people you love, and then trust them to choose.', s: 'Niamh let Oisín go home, with one warning: don\'t touch the ground. She couldn\'t decide for him, and she knew it.' }
  ],
  etain: [
    { t: 'i', q: 'You can be blown about for years and still land where you belong.', s: 'A jealous rival turned Étaín into a beautiful purple fly. The wind tossed her around Ireland for years.' },
    { t: 's', ga: 'Mair, a chapaill, agus gheobhaidh tú féar.', q: 'Live, horse, and you\'ll get grass.', s: 'Étaín kept going through every change put on her: water, a worm, a fly. In the end she became herself again.' },
    { t: 'i', q: 'Starting over is not failing. It\'s being reborn.', s: 'Étaín fell into a cup, was swallowed, and was born again as a baby girl, over a thousand years after she was first born.' },
    { t: 'i', q: 'You don\'t have to remember who you were to become who you are.', s: 'Reborn, Étaín grew up to be queen of Ireland, wife of the high king Eochaid. Her old life came looking for her later.' }
  ],
  boann: [
    { t: 'i', q: 'Go to the well they told you not to touch.', s: 'Only Nechtan and his cupbearers were allowed to visit the Well of Segais. Boann went anyway.' },
    { t: 'i', q: 'Some rules are only there to keep the wisdom for a few.', s: 'Hazelnuts of wisdom fell into the Well of Segais. When Boann walked around it, the water rose up and rushed out after her.' },
    { t: 's', ga: 'Is maith an scéalaí an aimsir.', q: 'Time is a good storyteller.', s: 'The water that rushed after Boann became the River Boyne, which still carries her name. Newgrange sits beside it.' },
    { t: 'i', q: 'Curiosity changes the shape of the land.', s: 'Without Boann\'s walk there\'d be no Boyne, and no pool where the Salmon of Knowledge swam, waiting for Fionn.' }
  ],
  eriu: [
    { t: 'i', q: 'Ask for your name to be remembered, and it will be.', s: 'When the sons of Míl arrived, three goddesses met them: Banba, Fódla and Ériu. Each asked that the island be named after her.' },
    { t: 's', ga: 'Tír gan teanga, tír gan anam.', q: 'A country without a language is a country without a soul.', s: 'The poet Amergin promised Ériu her name would be the chief name of the land. In Irish, Ireland is still Éire.' },
    { t: 'i', q: 'You are part of the land you stand on.', s: 'In many old tales Ériu was the land itself. A king could rule only with her blessing.' }
  ],
  tailtiu: [
    { t: 'i', q: 'Some of the hardest work is clearing the ground for others.', s: 'Tailtiu cleared the great forests of Meath with her own hands, so people could farm the plains.' },
    { t: 'i', q: 'The people you raise will carry your name forward.', s: 'Tailtiu was foster-mother to Lugh. When she died, he started games in her honour that ran for centuries.' },
    { t: 's', ga: 'Mura gcuirfidh tú san earrach, ní bhainfidh tú san fhómhar.', q: 'If you don\'t sow in spring, you won\'t reap in autumn.', s: 'Tailtiu\'s festival was Lughnasa, 1 August, the start of the harvest. People gathered at Teltown, Co. Meath, to celebrate.' },
    { t: 'i', q: 'Rest is part of the work, not a break from it.', s: 'The story says Tailtiu worked until her heart gave out. Her festival became a time for games, feasting and joy.' }
  ],
  aine: [
    { t: 'i', q: 'Bring your own light, and others will carry it too.', s: 'On Midsummer\'s Eve, people carried torches of straw around Knockainey, Áine\'s hill in Co. Limerick, and waved them over fields and cattle for luck.' },
    { t: 'i', q: 'Warmth is a kind of power.', s: 'Áine was a goddess of summer and the sun. Her name means brightness.' },
    { t: 's', ga: 'Bíonn blas ar an mbeagán.', q: 'There\'s taste in a little.', s: 'Áine was thanked for good harvests around Lough Gur, and for small blessings too.' },
    { t: 'i', q: 'What you pass on can outlive you.', s: 'Legend says Áine was the mother of Gearóid Iarla, the poet Earl of Desmond. He\'s said to sleep under Lough Gur still.' }
  ],
  grainne: [
    { t: 'i', q: 'No one can promise you away without your say.', s: 'Gráinne was promised to the elderly Fionn mac Cumhaill. At the wedding feast she put the guests to sleep with a potion and ran off with Diarmuid.' },
    { t: 'i', q: 'If you must run, run toward something.', s: 'Gráinne and Diarmuid were chased across Ireland for years, sleeping somewhere new each night.' },
    { t: 's', ga: 'Giorraíonn beirt bóthar.', q: 'Two shorten the road.', s: 'Many old stone tombs across Ireland are still called the beds of Diarmuid and Gráinne, after the places they rested.' }
  ],
  fionnuala: [
    { t: 'i', q: 'Shelter the people you love, even when your own feathers are soaked.', s: 'Fionnuala and her three brothers were turned into swans by their stepmother. In the worst storms she gathered them under her wings.' },
    { t: 's', ga: 'Ní neart go cur le chéile.', q: 'There\'s no strength without unity.', s: 'Whenever storms on the Sea of Moyle split the four swans up, they met again on the same rock. They never gave up on each other.' },
    { t: 'i', q: 'They can change your shape, but not your voice.', s: 'Even as swans, the Children of Lir kept their human voices. People came from far away to hear them sing.' },
    { t: 'i', q: 'Nine hundred years is long, but it ends.', s: 'The spell lasted 300 years on Lough Derravaragh, 300 on the Sea of Moyle and 300 off the west coast. Fionnuala lived to see it lifted.' }
  ],
  bodhmall: [
    { t: 'i', q: 'Raise them quietly. Raise them strong.', s: 'When baby Fionn mac Cumhaill was in danger, his mother sent him to two women in the forest of Slieve Bloom: Bodhmall the druid and Liath Luachra the warrior.' },
    { t: 'i', q: 'Every hero everyone sings about was taught by someone.', s: 'Bodhmall and Liath Luachra taught young Fionn to hunt, run and fight. Without them there\'d be no Fionn.' },
    { t: 's', ga: 'Mol an óige agus tiocfaidh sí.', q: 'Praise the young and they will flourish.', s: 'The two women kept Fionn hidden and safe for years, until he was ready to go out into the world.' }
  ],
  cailleach: [
    { t: 'i', q: 'Age is not the end of power. It\'s where the deep power lives.', s: 'The Cailleach Bhéarra, the Old Woman of Beara, was said to have lived through seven youths. She was as old as the hills, because she made them.' },
    { t: 'i', q: 'Even mountains start as a handful of stones.', s: 'Stories say the Cailleach dropped stones from her apron as she walked, and they became the hills and cairns of Ireland.' },
    { t: 's', ga: 'Ní thagann ciall roimh aois.', q: 'Sense doesn\'t come before age.', s: 'A poem over a thousand years old, the Lament of the Old Woman of Beare, has her look back on her long life with honesty and fire.' },
    { t: 'i', q: 'Winter is not empty. It\'s where strength is gathered.', s: 'In many stories winter belongs to the Cailleach. A stone on the Beara peninsula called the Hag of Beara still has coins left on it.' }
  ],
  granuaile: [
    { t: 'i', q: 'If they say you can\'t go to sea, cut your hair and get on the boat.', s: 'As a girl, Gráinne was told she couldn\'t sail because her hair would catch in the ropes. The story says she cut it off, and that\'s how she got her name, Gráinne Mhaol, bald Gráinne.' },
    { t: 'i', q: 'Meet the queen as an equal.', s: 'In 1593, Gráinne sailed to London and met Queen Elizabeth I face to face to win the release of her son and brother. She got her way.' },
    { t: 's', ga: 'Ní hé lá na gaoithe lá na scolb.', q: 'The windy day is not the day for thatching.', s: 'Gráinne knew the tides and storms of Clew Bay better than anyone, and chose her moments to suit them.' },
    { t: 'i', q: 'Lead your own people, whatever anyone calls you.', s: 'Gráinne led the O\'Malley ships from castles like Rockfleet in Co. Mayo. The English called her a pirate. Her people called her their chief.' }
  ],
  uallach: [
    { t: 'i', q: 'Your words count. Write them down.', s: 'The old annals of Ireland record that Uallach, daughter of Muinechán, died in the year 934. They call her the chief woman-poet of Ireland.' },
    { t: 's', ga: 'Beatha teanga í a labhairt.', q: 'The life of a language is speaking it.', s: 'Poets in early Ireland trained for years and held real power. Their praise could raise a king up, and their satire could bring one down.' },
    { t: 'i', q: 'Take your place in the record. Someone a thousand years from now may be looking for you.', s: 'We know almost nothing about Uallach except one line in the annals. That line has kept her name alive for over a thousand years.' }
  ],
  fedelm: [
    { t: 'i', q: 'Tell the truth, even to a queen.', s: 'Before Medb marched to war, the prophetess Fedelm met her on the road. Medb asked how her army looked. Fedelm said she saw it crimson, red.' },
    { t: 'i', q: 'Go away and learn, then come home with your gift.', s: 'Fedelm had just come home from across the sea, where she had studied poetry and the art of seeing what\'s to come.' },
    { t: 's', ga: 'Bíonn an fhírinne searbh.', q: 'The truth is bitter.', s: 'Medb asked Fedelm again and again, hoping for a better answer. Every time, Fedelm gave the same one.' },
    { t: 'i', q: 'Your clear sight is a gift, even when it isn\'t welcome.', s: 'The old tale describes Fedelm with golden hair in three braids, weaving with a golden rod. She saw what was coming and wouldn\'t pretend she didn\'t.' }
  ],
  sadhbh: [
    { t: 'i', q: 'No is a whole sentence.', s: 'Sadhbh refused to marry the dark druid Fear Doirche. In revenge he turned her into a deer, but he never got his yes.' },
    { t: 's', ga: 'Aithníonn ciaróg ciaróg eile.', q: 'One beetle recognises another.', s: 'Fionn\'s hounds Bran and Sceolán, who were born human themselves, knew the deer was really a woman and wouldn\'t hurt her.' },
    { t: 'i', q: 'Some love stays wild, and still finds its way home.', s: 'Years later, Fionn found a boy living wild on a mountain. It was his son by Sadhbh, and he named him Oisín, little deer.' }
  ],
  liban: [
    { t: 'i', q: 'When the flood comes, you can learn to swim.', s: 'When a neglected well overflowed and became Lough Neagh, it drowned Lí Ban\'s family. She survived for a year in a room under the water.' },
    { t: 'i', q: 'You can change your form and keep your heart.', s: 'Lí Ban became half woman, half salmon, and swam the seas for 300 years.' },
    { t: 's', ga: 'Is fearr súil le muir ná súil le huaigh.', q: 'Better hope from the sea than hope from the grave.', s: 'In the 500s, fishermen pulled Lí Ban from the water in a net. She was given a new name, Muirgen, born of the sea.' }
  ],
  danu: [
    { t: 'i', q: 'Even the forgotten parts of you are still holding things up.', s: 'The Tuatha Dé Danann, the magical people of old Ireland, are named after the goddess Danu. Almost nothing else about her survived.' },
    { t: 'i', q: 'You don\'t need a long story to be the beginning of one.', s: 'The old books say the people of Danu arrived in Ireland in a dark cloud, and later went into the hills to become the people of the sídhe.' },
    { t: 's', ga: 'Is í an dias is troime is ísle a chromann a ceann.', q: 'The heaviest ear of grain bends its head the lowest.', s: 'Some link Danu with Anu, a goddess of plenty. Two round hills in Co. Kerry are still called the Paps of Anu.' }
  ],
  tlachtga: [
    { t: 'i', q: 'Learn from the best, then make it your own.', s: 'Tlachtga travelled the world with her father, the great druid Mug Ruith, learning his magic.' },
    { t: 's', ga: 'Bíonn gach tosú lag.', q: 'Every beginning is weak.', s: 'On Tlachtga\'s hill, the Hill of Ward near Athboy, Co. Meath, the great fire of Samhain was said to be lit to begin the new year.' },
    { t: 'i', q: 'Out of your hardest night, a fire can be lit for everyone.', s: 'Tlachtga died on that hill after great hardship, and it became a place of light. Archaeologists have found huge rings dug around the hilltop.' }
  ]
};

// Build the day-by-day list: round 1 = each woman's first saying, round 2 = each woman's second, and so on.
const DAYS = [];
for (let r = 0; r < 10; r++) for (const w of ORDER) { const x = SAYINGS[w][r]; if (x) DAYS.push(Object.assign({ w }, x)); }
