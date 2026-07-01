const totalJapaneseSentences = [
  {
    id: 1,
    sentence: "聞かない方がいいってわかってんのに",
    meaning: "묻지 않는 편이 좋다는 걸 알면서도……",
    words: [
      { kanji: "聞く", hiragana: "きく", meaning: "듣다, 묻다", dictionary: "聞く", type: "verb" },
      { kanji: "方", hiragana: "ほう", meaning: "편, 쪽", dictionary: "方", type: "noun" },
      { kanji: "わかる", hiragana: "わかる", meaning: "알다, 이해하다", dictionary: "わかる", type: "verb" },
    ]
  },
  {
    id: 2,
    sentence: "優しそうかな",
    meaning: "상냥해 보이려나?",
    words: [
      { kanji: "優しい", hiragana: "やさしい", meaning: "상냥하다", dictionary: "優しい", type: "adjective" },
    ]
  },
  {
    id: 3,
    sentence: "なんか意外なんで？",
    meaning: "왠지 의외인데? 왜?",
    words: [
      { kanji: "意外", hiragana: "いがい", meaning: "의외", dictionary: "意外", type: "noun" },
    ]
  },
  {
    id: 4,
    sentence: "いやただペン忘れた子に貸してあげてたから",
    meaning: "아니 그냥 펜 안 가져온 애 있길래 빌려준 것뿐이야.",
    words: [
      { kanji: "忘れる", hiragana: "わすれる", meaning: "잊다, 두고 오다", dictionary: "忘れる", type: "verb" },
      { kanji: "子", hiragana: "こ", meaning: "아이", dictionary: "子", type: "noun" },
      { kanji: "貸す", hiragana: "かす", meaning: "빌려주다", dictionary: "貸す", type: "verb" },
      { kanji: "ペン", hiragana: "ペン", meaning: "펜", dictionary: "ペン", type: "noun" },
    ]
  },
  {
    id: 5,
    sentence: "優しい人に見えたけどな",
    meaning: "그래도 내 눈엔 다정한 사람처럼 보였는데 말이지~",
    words: [
      { kanji: "優しい", hiragana: "やさしい", meaning: "상냥하다", dictionary: "優しい", type: "adjective" },
      { kanji: "見える", hiragana: "みえる", meaning: "보이다", dictionary: "見える", type: "verb" },
    ]
  },
  {
    id: 6,
    sentence: "それも、まともに話したこともない人から",
    meaning: "그것도 심지어, 평소에 말 한마디 제대로 안 섞어본 사람한테 말이야.",
    words: [
      { kanji: "話す", hiragana: "はなす", meaning: "말하다, 이야기하다", dictionary: "話す", type: "verb" },
      { kanji: "まともに", hiragana: "まともに", meaning: "제대로, 진지하게", dictionary: "まともに", type: "adverb" },
    ]
  },
  {
    id: 7,
    sentence: "たったそれだけのことが俺にとっては、忘れられないこと、嬉しかった。",
    meaning: "겨우 그런 사소한 행동이, 나한테는 평생 잊지 못할 만큼 고맙고 기쁜 일이었어.",
    words: [
      { kanji: "忘れる", hiragana: "わすれる", meaning: "잊다", dictionary: "忘れる", type: "verb" },
      { kanji: "嬉しい", hiragana: "うれしい", meaning: "기쁘다", dictionary: "嬉しい", type: "adjective" },
      { kanji: "たった", hiragana: "たった", meaning: "그저, 단지", dictionary: "たった", type: "adverb" },
    ]
  },
  {
    id: 8,
    sentence: "でも、意識すればするほどタイミングがつかめなくて",
    meaning: "근데, 오히려 너무 신경을 쓰다 보니까 언제 말을 걸어야 할지 타이밍을 못 잡겠더라고……",
    words: [
      { kanji: "意識する", hiragana: "いしきする", meaning: "의식하다, 신경 쓰다", dictionary: "意識する", type: "verb" },
      { kanji: "タイミング", hiragana: "タイミング", meaning: "타이밍", dictionary: "タイミング", type: "noun" },
      { kanji: "つかむ", hiragana: "つかむ", meaning: "잡다", dictionary: "つかむ", type: "verb" },
    ]
  },
  {
    id: 9,
    sentence: "気づいたら、「おはよう」の一言も言えないまま、一ヶ月が経っていた。",
    meaning: "정신 차려보니까, '안녕'이라는 말 한마디조차 못 한 채로 벌써 한 달이나 흘러 있더라.",
    words: [
      { kanji: "気づく", hiragana: "きづく", meaning: "깨닫다, 알아채다", dictionary: "気づく", type: "verb" },
      { kanji: "一言", hiragana: "ひとこと", meaning: "한마디", dictionary: "一言", type: "noun" },
      { kanji: "言う", hiragana: "いう", meaning: "말하다", dictionary: "言う", type: "verb" },
      { kanji: "一ヶ月", hiragana: "いっかげつ", meaning: "한 달", dictionary: "一ヶ月", type: "noun" },
      { kanji: "経つ", hiragana: "たつ", meaning: "지나다, 흐르다", dictionary: "経つ", type: "verb" },
    ]
  },
  {
    id: 10,
    sentence: "気になる子と同じグループになった",
    meaning: "마음에 두고 있던 애랑 같은 조가 됐어.",
    words: [
      { kanji: "気になる", hiragana: "きになる", meaning: "신경 쓰이다", dictionary: "気になる", type: "expression" },
      { kanji: "子", hiragana: "こ", meaning: "아이", dictionary: "子", type: "noun" },
      { kanji: "同じ", hiragana: "おなじ", meaning: "같은", dictionary: "同じ", type: "adjective" },
      { kanji: "グループ", hiragana: "グループ", meaning: "그룹", dictionary: "グループ", type: "noun" },
    ]
  },
  {
    id: 11,
    sentence: "まあ、そうなるよな。",
    meaning: "뭐, 그렇게 되겠지.",
    words: []
  },
  {
    id: 12,
    sentence: "急に言われたら……",
    meaning: "갑자기 말해버리면……",
    words: [
      { kanji: "急に", hiragana: "きゅうに", meaning: "갑자기", dictionary: "急に", type: "adverb" },
      { kanji: "言う", hiragana: "いう", meaning: "말하다", dictionary: "言う", type: "verb" },
    ]
  },
  {
    id: 13,
    sentence: "まさか、こんなにスムーズに話が進むなんて。",
    meaning: "설마 이렇게 매끄럽게 대화가 진행될 줄이야.",
    words: [
      { kanji: "話", hiragana: "はなし", meaning: "이야기, 대화", dictionary: "話", type: "noun" },
      { kanji: "進む", hiragana: "すすむ", meaning: "나아가다, 진행되다", dictionary: "進む", type: "verb" },
      { kanji: "まさか", hiragana: "まさか", meaning: "설마", dictionary: "まさか", type: "adverb" },
      { kanji: "スムーズ", hiragana: "スムーズ", meaning: "순조로움", dictionary: "スムーズ", type: "adjective" },
    ]
  },
  {
    id: 14,
    sentence: "いや、でも日置が何て言うか……",
    meaning: "아니, 근데 내 쪽에서 대체 무슨 말을 꺼내야 할지……",
    words: [
      { kanji: "何て", hiragana: "なんて", meaning: "뭐라고", dictionary: "何て", type: "expression" },
      { kanji: "言う", hiragana: "いう", meaning: "말하다", dictionary: "言う", type: "verb" },
    ]
  },
  {
    id: 15,
    sentence: "うそ！マジで？",
    meaning: "거짓말! 진짜로?",
    words: [
      { kanji: "うそ", hiragana: "うそ", meaning: "거짓말", dictionary: "うそ", type: "noun" },
      { kanji: "マジで", hiragana: "マジで", meaning: "진짜로", dictionary: "マジで", type: "adverb" },
    ]
  },
  {
    id: 16,
    sentence: "うん、てか渡会でいいよ。",
    meaning: "응, 그냥 편하게 '와타라이'라고 불러.",
    words: []
  },
  {
    id: 17,
    sentence: "話せた、初めて。",
    meaning: "드디어 대화가 통했어, 처음으로……!",
    words: [
      { kanji: "話す", hiragana: "はなす", meaning: "말하다, 이야기하다", dictionary: "話す", type: "verb" },
      { kanji: "初めて", hiragana: "はじめて", meaning: "처음으로", dictionary: "初めて", type: "adverb" },
    ]
  },
  {
    id: 18,
    sentence: "なんかいいきっかけがあれば……",
    meaning: "뭔가 좋은 계기가 있다면……",
    words: [
      { kanji: "きっかけ", hiragana: "きっかけ", meaning: "계기", dictionary: "きっかけ", type: "noun" },
    ]
  },
  {
    id: 19,
    sentence: "最初はただ、話したくて",
    meaning: "처음에는 그냥, 이야기하고 싶어서……",
    words: [
      { kanji: "最初", hiragana: "さいしょ", meaning: "처음", dictionary: "最初", type: "noun" },
      { kanji: "話す", hiragana: "はなす", meaning: "말하다, 이야기하다", dictionary: "話す", type: "verb" },
    ]
  },
  {
    id: 20,
    sentence: "隣に座って、少しずつ日置を知っていくうちに",
    meaning: "옆자리에 앉아서, 조금씩 히오키를 알아가는 와중에……",
    words: [
      { kanji: "隣", hiragana: "となり", meaning: "옆자리, 곁", dictionary: "隣", type: "noun" },
      { kanji: "座る", hiragana: "すわる", meaning: "앉다", dictionary: "座る", type: "verb" },
      { kanji: "少しずつ", hiragana: "すこしずつ", meaning: "조금씩", dictionary: "少しずつ", type: "adverb" },
      { kanji: "知る", hiragana: "しる", meaning: "알다", dictionary: "知る", type: "verb" },
    ]
  },
  {
    id: 21,
    sentence: "ただ話してみたい、そんな気持ちが距離が近づくたびに膨らんで",
    meaning: "그저 얘기해 보고 싶다, 그런 마음이 거리가 가까워질 때마다 부풀어 올라서……",
    words: [
      { kanji: "話す", hiragana: "はなす", meaning: "말하다, 이야기하다", dictionary: "話す", type: "verb" },
      { kanji: "気持ち", hiragana: "きもち", meaning: "마음, 기분", dictionary: "気持ち", type: "noun" },
      { kanji: "距離", hiragana: "きょり", meaning: "거리", dictionary: "距離", type: "noun" },
      { kanji: "近づく", hiragana: "ちかづく", meaning: "가까워지다", dictionary: "近づく", type: "verb" },
      { kanji: "膨らむ", hiragana: "ふくらむ", meaning: "부풀다", dictionary: "膨らむ", type: "verb" },
    ]
  },
  {
    id: 22,
    sentence: "俺の名前が、あさひだから……",
    meaning: "내 이름이, 아사히니까……",
    words: [
      { kanji: "名前", hiragana: "なまえ", meaning: "이름", dictionary: "名前", type: "noun" },
    ]
  },
  {
    id: 23,
    sentence: "可愛すぎ",
    meaning: "진짜 너무 귀엽다!",
    words: [
      { kanji: "可愛い", hiragana: "かわいい", meaning: "귀엽다", dictionary: "可愛い", type: "adjective" },
    ]
  },
  {
    id: 24,
    sentence: "日置のこと、もっと知りたくなって、知れば知るほど愛おしくなって、だんだん欲が出て",
    meaning: "히오키에 대해 더 알고 싶어져서, 알면 알수록 사랑스러워져서, 점점 욕심이 생겨서……",
    words: [
      { kanji: "知る", hiragana: "しる", meaning: "알다", dictionary: "知る", type: "verb" },
      { kanji: "愛おしい", hiragana: "いとおしい", meaning: "사랑스럽다", dictionary: "愛おしい", type: "adjective" },
      { kanji: "欲", hiragana: "よく", meaning: "욕심", dictionary: "欲", type: "noun" },
      { kanji: "出る", hiragana: "でる", meaning: "나오다, 생기다", dictionary: "出る", type: "verb" },
    ]
  },
  {
    id: 25,
    sentence: "気づいたときにはもう自分でもどうしようもないくらい、それでも、こんな気持ちを言葉にするのは怖かった。",
    meaning: "정신을 차렸을 때는 이미 나 자신도 어쩔 수 없을 정도로 좋아져 버렸어. 그래도, 이런 마음을 말로 표현하는 건 무서웠어.",
    words: [
      { kanji: "気づく", hiragana: "きづく", meaning: "깨닫다, 알아채다", dictionary: "気づく", type: "verb" },
      { kanji: "自分", hiragana: "じぶん", meaning: "자기, 스스로", dictionary: "自分", type: "noun" },
      { kanji: "気持ち", hiragana: "きもち", meaning: "마음, 기분", dictionary: "気持ち", type: "noun" },
      { kanji: "言葉", hiragana: "ことば", meaning: "말, 언어", dictionary: "言葉", type: "noun" },
      { kanji: "怖い", hiragana: "こわい", meaning: "무섭다", dictionary: "怖い", type: "adjective" },
    ]
  },
  {
    id: 26,
    sentence: "俺、日置のことが好き。",
    meaning: "나, 히오키(너)를 좋아해.",
    words: [
      { kanji: "好き", hiragana: "すき", meaning: "좋아함", dictionary: "好き", type: "adjective" },
    ]
  },
  {
    id: 27,
    sentence: "それは、つまり……そんな、恋愛的に？",
    meaning: "그건, 그러니까…… 그런, 연애적인 의미로?",
    words: [
      { kanji: "恋愛", hiragana: "れんあい", meaning: "연애", dictionary: "恋愛", type: "noun" },
      { kanji: "つまり", hiragana: "つまり", meaning: "즉, 결국", dictionary: "つまり", type: "adverb" },
    ]
  },
  {
    id: 28,
    sentence: "うん。",
    meaning: "응.",
    words: []
  },
  {
    id: 29,
    sentence: "ごめんね。あの、俺、好きな人ができたことなくて、告白とかされたこともないし、したこともないし、恋愛のこととか、全然まだわかんなくて、わかんないけど、人を好きになる気持ちはそれぞれあって、",
    meaning: "미안해. 그게, 나 좋아하는 사람이 생겨본 적이 없어서, 고백 같은 걸 받아본 적도 없고 해본 적도 없고, 연애 같은 건 아직 전혀 잘 몰라서…… 잘은 모르지만 사람을 좋아하는 마음은 사람마다 다 제각각인 거고……",
    words: [
      { kanji: "好き", hiragana: "すき", meaning: "좋아함", dictionary: "好き", type: "adjective" },
      { kanji: "告白", hiragana: "こくはく", meaning: "고백", dictionary: "告白", type: "noun" },
      { kanji: "恋愛", hiragana: "れんあい", meaning: "연애", dictionary: "恋愛", type: "noun" },
      { kanji: "全然", hiragana: "ぜんぜん", meaning: "전혀", dictionary: "全然", type: "adverb" },
      { kanji: "気持ち", hiragana: "きもち", meaning: "마음, 기분", dictionary: "気持ち", type: "noun" },
      { kanji: "わかる", hiragana: "わかる", meaning: "알다, 이해하다", dictionary: "わかる", type: "verb" },
      { kanji: "それぞれ", hiragana: "それぞれ", meaning: "각각, 각자", dictionary: "それぞれ", type: "noun" },
    ]
  },
  {
    id: 30,
    sentence: "気にしなくていいから",
    meaning: "부담 갖지 않아도 되니까 편하게 생각해.",
    words: [
      { kanji: "気にする", hiragana: "きにする", meaning: "신경 쓰다", dictionary: "気にする", type: "verb" },
    ]
  },
  {
    id: 31,
    sentence: "冷やしたタオル、持ってくるよ。",
    meaning: "시원하게 한 수건, 가져올게.",
    words: [
      { kanji: "冷やす", hiragana: "ひやす", meaning: "차갑게/시원하게 하다", dictionary: "冷やす", type: "verb" },
      { kanji: "持ってくる", hiragana: "もってくる", meaning: "가져오다", dictionary: "持ってくる", type: "expression" },
    ]
  },
  {
    id: 32,
    sentence: "やっぱり言うべきじゃなかったな。",
    meaning: "역시…… 괜히 말했나 봐.",
    words: [
      { kanji: "言う", hiragana: "いう", meaning: "말하다", dictionary: "言う", type: "verb" },
    ]
  },
  {
    id: 33,
    sentence: "とにかく、俺は何も困ってないから。",
    meaning: "어쨌든, 나는 아무것도 곤란할 거 없으니까.",
    words: [
      { kanji: "何も", hiragana: "なにも", meaning: "아무것도", dictionary: "何も", type: "expression" },
      { kanji: "困る", hiragana: "こまる", meaning: "곤란하다, 난처하다", dictionary: "困る", type: "verb" },
    ]
  },
  {
    id: 34,
    sentence: "嫌じゃないの？",
    meaning: "싫지 않다는 뜻이야?",
    words: [
      { kanji: "嫌", hiragana: "いや", meaning: "싫음, 거부감", dictionary: "嫌", type: "adjective" },
    ]
  },
  {
    id: 35,
    sentence: "渡会といると楽しいし、安心する。でも、それが恋愛的な気持ちなのかとか全然わかんなくて。だから今すぐ返事はできないんだけど、それでもちゃんと真剣に考えたいなって思ってて……。",
    meaning: "와타라이랑 있으면 즐겁고 안심이 돼. 하지만 그게 연애적인 감정인 건지 전혀 모르겠어서. 그래도 제대로 진지하게 생각하고 싶다고 생각해서……",
    words: [
      { kanji: "楽しい", hiragana: "たのしい", meaning: "즐겁다", dictionary: "楽しい", type: "adjective" },
      { kanji: "安心する", hiragana: "あんしんする", meaning: "안심하다", dictionary: "安心する", type: "verb" },
      { kanji: "恋愛", hiragana: "れんあい", meaning: "연애", dictionary: "恋愛", type: "noun" },
      { kanji: "気持ち", hiragana: "きもち", meaning: "마음, 기분", dictionary: "気持ち", type: "noun" },
      { kanji: "全然", hiragana: "ぜんぜん", meaning: "전혀", dictionary: "全然", type: "adverb" },
      { kanji: "今すぐ", hiragana: "いますぐ", meaning: "지금 당장", dictionary: "今すぐ", type: "adverb" },
      { kanji: "返事", hiragana: "へんじ", meaning: "대답, 답장", dictionary: "返事", type: "noun" },
      { kanji: "真剣に", hiragana: "しんけんに", meaning: "진지하게", dictionary: "真剣に", type: "adverb" },
      { kanji: "考える", hiragana: "かんがえる", meaning: "생각하다", dictionary: "考える", type: "verb" },
      { kanji: "わかる", hiragana: "わかる", meaning: "알다, 이해하다", dictionary: "わかる", type: "verb" },
    ]
  },
  {
    id: 36,
    sentence: "日置……。",
    meaning: "히오키……",
    words: []
  },
  {
    id: 37,
    sentence: "だから……、時間はかかるかもしれないけど、答えは待っててもらえないかな、って……？",
    meaning: "그러니까…… 시간은 좀 걸릴 수도 있겠지만, 대답을 기다려 줄 수 있을까……?",
    words: [
      { kanji: "時間", hiragana: "じかん", meaning: "시간", dictionary: "時間", type: "noun" },
      { kanji: "答え", hiragana: "こたえ", meaning: "대답", dictionary: "答え", type: "noun" },
      { kanji: "待つ", hiragana: "まつ", meaning: "기다리다", dictionary: "待つ", type: "verb" },
    ]
  },
  {
    id: 38,
    sentence: "そうだった。日置、俺の好きな人は、いつだって純粋で、ただ真っ直ぐに、目の前の俺を見てくれる。",
    meaning: "맞아, 그랬었지. 내가 사랑하는 사람은 언제나 순수하게, 똑바로 바라봐 주는 사람이었어.",
    words: [
      { kanji: "好き", hiragana: "すき", meaning: "좋아함", dictionary: "好き", type: "adjective" },
      { kanji: "純粋", hiragana: "じゅんすい", meaning: "순수", dictionary: "純粋", type: "noun" },
      { kanji: "真っ直ぐに", hiragana: "まっすぐに", meaning: "똑바로, 곧게", dictionary: "真っ直ぐに", type: "adverb" },
      { kanji: "目の前", hiragana: "めのまえ", meaning: "눈앞", dictionary: "目の前", type: "noun" },
      { kanji: "見る", hiragana: "みる", meaning: "보다", dictionary: "見る", type: "verb" },
    ]
  },
  {
    id: 39,
    sentence: "このまま、好きでいていいの？",
    meaning: "이대로, 계속 좋아해도 돼?",
    words: [
      { kanji: "好き", hiragana: "すき", meaning: "좋아함", dictionary: "好き", type: "adjective" },
    ]
  },
  {
    id: 40,
    sentence: "ありがとう。じゃあ、もう我慢しなくていいね？",
    meaning: "고마워! 그럼 이제 마음껏 표현해도 되는 거지?",
    words: [
      { kanji: "我慢する", hiragana: "がまんする", meaning: "참다, 견디다", dictionary: "我慢する", type: "verb" },
    ]
  },
  {
    id: 41,
    sentence: "今、何て……？",
    meaning: "방금 뭐라고……?",
    words: [
      { kanji: "今", hiragana: "いま", meaning: "지금, 방금", dictionary: "今", type: "noun" },
      { kanji: "何て", hiragana: "なんて", meaning: "뭐라고", dictionary: "何て", type: "expression" },
    ]
  },
  {
    id: 42,
    sentence: "もう我慢しないから、覚悟しといて。",
    meaning: "이제 안 참을 거니까, 각오해 둬.",
    words: [
      { kanji: "我慢する", hiragana: "がまんする", meaning: "참다, 견디다", dictionary: "我慢する", type: "verb" },
      { kanji: "覚悟する", hiragana: "かくごする", meaning: "각오하다", dictionary: "覚悟する", type: "verb" },
    ]
  },
  {
    id: 43,
    sentence: "覚悟って、今……何だ……？",
    meaning: "각오라니, 방금…… 뭐야……?",
    words: [
      { kanji: "覚悟", hiragana: "かくご", meaning: "각오", dictionary: "覚悟", type: "noun" },
      { kanji: "今", hiragana: "いま", meaning: "지금, 방금", dictionary: "今", type: "noun" },
    ]
  },
  {
    id: 44,
    sentence: "俺が、どれだけ日置のことが好きか、アピールするから。",
    meaning: "내가 얼마나 좋아하는지, 어필할 거니까.",
    words: [
      { kanji: "好き", hiragana: "すき", meaning: "좋아함", dictionary: "好き", type: "adjective" },
    ]
  },
  {
    id: 45,
    sentence: "アピール？その前に、渡会が俺のこと、嫌いになるかもだし……",
    meaning: "하지만 내가 깨닫기 전에, 네가 먼저 싫어하게 될 수도 있잖아……",
    words: [
      { kanji: "前", hiragana: "まえ", meaning: "전, 예전", dictionary: "前", type: "noun" },
      { kanji: "嫌いになる", hiragana: "きらいになる", meaning: "싫어지다", dictionary: "嫌いになる", type: "expression" },
    ]
  },
  {
    id: 46,
    sentence: "それはない。また、改めて気持ちを伝えられたら。返事は急がなくていいよ。",
    meaning: "그럴 리 없어. 다시 마음을 전할 수 있다면. 대답은 조급해하지 않아도 돼.",
    words: [
      { kanji: "改めて", hiragana: "あらためて", meaning: "다시, 새삼스럽게", dictionary: "改めて", type: "adverb" },
      { kanji: "気持ちを伝える", hiragana: "きもちをつたえる", meaning: "마음을 전하다", dictionary: "気持ちを伝える", type: "expression" },
      { kanji: "返事", hiragana: "へんじ", meaning: "대답, 답장", dictionary: "返事", type: "noun" },
      { kanji: "急ぐ", hiragana: "いそぐ", meaning: "서두르다", dictionary: "急ぐ", type: "verb" },
    ]
  },
  {
    id: 47,
    sentence: "てか、体調？もう大丈夫ね？",
    meaning: "그나저나, 몸 상태는? 이제 괜찮은 거지?",
    words: [
      { kanji: "体調", hiragana: "たいちょう", meaning: "몸 상태, 컨디션", dictionary: "体調", type: "noun" },
      { kanji: "大丈夫", hiragana: "だいじょうぶ", meaning: "괜찮음", dictionary: "大丈夫", type: "adjective" },
    ]
  },
  {
    id: 48,
    sentence: "大丈夫そう。",
    meaning: "괜찮은 것 같아.",
    words: [
      { kanji: "大丈夫", hiragana: "だいじょうぶ", meaning: "괜찮음", dictionary: "大丈夫", type: "adjective" },
    ]
  },
  {
    id: 49,
    sentence: "よかった。",
    meaning: "다행이다.",
    words: []
  },
  {
    id: 50,
    sentence: "転ぶなよ。",
    meaning: "넘어지지 마라.",
    words: [
      { kanji: "転ぶ", hiragana: "ころぶ", meaning: "넘어지다, 구르다", dictionary: "転ぶ", type: "verb" },
    ]
  },
  {
    id: 51,
    sentence: "善処します。",
    meaning: "조심할게.",
    words: [
      { kanji: "善処", hiragana: "ぜんしょ", meaning: "선처", dictionary: "善処", type: "noun" },
    ]
  },
  {
    id: 52,
    sentence: "ここにいたんだ。今日、日置が元気ないように見えたから、どうしたのか話したくて。",
    meaning: "여기 있었구나. 오늘 히오키가 기운이 없어 보여서, 무슨 일인지 이야기가 하고 싶어서...",
    words: [
      { kanji: "今日", hiragana: "きょう", meaning: "오늘", dictionary: "今日", type: "noun" },
      { kanji: "元気", hiragana: "げんき", meaning: "기운, 건강", dictionary: "元気", type: "noun" },
      { kanji: "見える", hiragana: "みえる", meaning: "보이다", dictionary: "見える", type: "verb" },
      { kanji: "話す", hiragana: "はなす", meaning: "말하다, 이야기하다", dictionary: "話す", type: "verb" },
    ]
  },
  {
    id: 53,
    sentence: "やばい、俺。なんかめちゃくちゃ好きかも、渡会のこと。てか、なんかもう色々わかんなくて、渡会はいつも俺のキャパ狂わすし、俺のキャパ超えてくるし。",
    meaning: "나 진짜 큰일 났다. 왠지 와타라이를 엄청 좋아하는 걸지도. 이제 정말 이것저것 다 모르겠어. 와타라이는 언제나 내 수용 범위를 넘어와서 정신 못 차리게 하니까...",
    words: [
      { kanji: "好き", hiragana: "すき", meaning: "좋아함", dictionary: "好き", type: "adjective" },
      { kanji: "色々", hiragana: "いろいろ", meaning: "여러 가지, 다양하게", dictionary: "色々", type: "adverb" },
      { kanji: "狂う", hiragana: "くるう", meaning: "미치다, 혼란해지다", dictionary: "狂う", type: "verb" },
      { kanji: "超える", hiragana: "こえる", meaning: "넘다, 초과하다", dictionary: "超える", type: "verb" },
      { kanji: "わかる", hiragana: "わかる", meaning: "알다, 이해하다", dictionary: "わかる", type: "verb" },
    ]
  },
  {
    id: 54,
    sentence: "俺、人好きになったのは、好きになってもらえたのは、人生で初めてだから。だから、なんかもう全部が初めての感情っていうか…。",
    meaning: "나 누군가를 좋아하게 된 건, 누군가가 날 좋아해 준 것도 인생에서 처음이니까. 그러니까 왠지 이제 전부가 처음 겪는 감정이라고 해야 할까…",
    words: [
      { kanji: "好き", hiragana: "すき", meaning: "좋아함", dictionary: "好き", type: "adjective" },
      { kanji: "人生", hiragana: "じんせい", meaning: "인생", dictionary: "人生", type: "noun" },
      { kanji: "初めて", hiragana: "はじめて", meaning: "처음으로", dictionary: "初めて", type: "adverb" },
      { kanji: "全部", hiragana: "ぜんぶ", meaning: "전부", dictionary: "全部", type: "noun" },
      { kanji: "感情", hiragana: "かんじょう", meaning: "감정", dictionary: "感情", type: "noun" },
    ]
  },
  {
    id: 55,
    sentence: "本当に俺なんだね。いいのかな、なんか。「杏奈」の方がお似合いかも、とか。もし俺が女の子だったら、とか。そんなこと考えたら、なんかモヤモヤっていうか、自分でもわけわかんなくなって。",
    meaning: "진짜로 나구나. 이래도 되는 걸까, 뭔가. '안나' 쪽이 더 잘 어울릴지도 모른다든가. 혹시 내가 여자아이였다면 어땠을까든가. 그런 걸 생각하다 보면, 왠지 마음이 답답해진달까, 나 스스로도 헷갈리게 돼버려서.",
    words: [
      { kanji: "本当に", hiragana: "ほんとうに", meaning: "진짜로, 정말로", dictionary: "本当に", type: "adverb" },
      { kanji: "方", hiragana: "ほう", meaning: "편, 쪽", dictionary: "方", type: "noun" },
      { kanji: "似合う", hiragana: "にあう", meaning: "어울리다", dictionary: "似合う", type: "verb" },
      { kanji: "女の子", hiragana: "おんなのこ", meaning: "여자아이", dictionary: "女の子", type: "noun" },
      { kanji: "考える", hiragana: "かんがえる", meaning: "생각하다", dictionary: "考える", type: "verb" },
      { kanji: "自分", hiragana: "じぶん", meaning: "자기, 스스로", dictionary: "自分", type: "noun" },
      { kanji: "わかる", hiragana: "わかる", meaning: "알다, 이해하다", dictionary: "わかる", type: "verb" },
    ]
  },
  {
    id: 56,
    sentence: "日置、もしかして今日ずっと一人で悩んでた？",
    meaning: "히오키, 혹시 오늘 하루 종일 혼자서 고민하고 있었어?",
    words: [
      { kanji: "今日", hiragana: "きょう", meaning: "오늘", dictionary: "今日", type: "noun" },
      { kanji: "一人", hiragana: "ひとり", meaning: "혼자", dictionary: "一人", type: "noun" },
      { kanji: "悩む", hiragana: "なやむ", meaning: "고민하다, 고뇌하다", dictionary: "悩む", type: "verb" },
    ]
  },
  {
    id: 57,
    sentence: "あ、気づいた。めちゃ見てる。",
    meaning: "아, 눈치챘네. 완전 쳐다보고 있어.",
    words: [
      { kanji: "気づく", hiragana: "きづく", meaning: "깨닫다, 알아채다", dictionary: "気づく", type: "verb" },
      { kanji: "見る", hiragana: "みる", meaning: "보다", dictionary: "見る", type: "verb" },
    ]
  },
  {
    id: 58,
    sentence: "手とか振った方がいいのかな？ あ！来るっ。",
    meaning: "손 같은 거 흔드는 게 좋으려나? 아! 온다!",
    words: [
      { kanji: "手", hiragana: "て", meaning: "손", dictionary: "手", type: "noun" },
      { kanji: "振る", hiragana: "ふる", meaning: "흔들다", dictionary: "振る", type: "verb" },
      { kanji: "方", hiragana: "ほう", meaning: "편, 쪽", dictionary: "方", type: "noun" },
      { kanji: "来る", hiragana: "くる", meaning: "오다", dictionary: "来る", type: "verb" },
    ]
  },
  {
    id: 59,
    sentence: "昨日寝れた？",
    meaning: "어제 잘 잤어?",
    words: [
      { kanji: "昨日", hiragana: "きのう", meaning: "어제", dictionary: "昨日", type: "noun" },
      { kanji: "寝る", hiragana: "ねる", meaning: "자다", dictionary: "寝る", type: "verb" },
    ]
  },
  {
    id: 60,
    sentence: "寝てていいよ。着いたら起こすし。",
    meaning: "자고 있어도 돼. 도착하면 깨워줄 테니까.",
    words: [
      { kanji: "寝る", hiragana: "ねる", meaning: "자다", dictionary: "寝る", type: "verb" },
      { kanji: "着く", hiragana: "つく", meaning: "도착하다", dictionary: "着く", type: "verb" },
      { kanji: "起こす", hiragana: "おこす", meaning: "깨우다", dictionary: "起こす", type: "verb" },
    ]
  },
  {
    id: 61,
    sentence: "今日は本当にごめん。せっかくグループ誘ってくれたのに、早速迷惑ばっかりかけて…いつも迷惑ばっかりかけて…",
    meaning: "오늘은 정말 미안해. 일부러 그룹에 초대해 줬는데, 바로 민폐만 끼치고… 맨날 민폐만 끼쳐서…",
    words: [
      { kanji: "今日", hiragana: "きょう", meaning: "오늘", dictionary: "今日", type: "noun" },
      { kanji: "本当に", hiragana: "ほんとうに", meaning: "진짜로, 정말로", dictionary: "本当に", type: "adverb" },
      { kanji: "誘う", hiragana: "さそう", meaning: "초대하다, 권하다", dictionary: "誘う", type: "verb" },
      { kanji: "早速", hiragana: "さっそく", meaning: "곧바로, 즉시", dictionary: "早速", type: "adverb" },
      { kanji: "迷惑をかける", hiragana: "めいわくをかける", meaning: "민폐를 끼치다", dictionary: "迷惑をかける", type: "expression" },
      { kanji: "グループ", hiragana: "グループ", meaning: "그룹", dictionary: "グループ", type: "noun" },
    ]
  },
  {
    id: 62,
    sentence: "そんなに気にしなくていいって。別に迷惑だなんて思ってないし。",
    meaning: "그렇게 신경 쓰지 않아도 된다니까. 딱히 민폐라고 생각하지도 않고.",
    words: [
      { kanji: "気にする", hiragana: "きにする", meaning: "신경 쓰다", dictionary: "気にする", type: "verb" },
      { kanji: "別に", hiragana: "べつに", meaning: "딱히, 별로", dictionary: "別に", type: "adverb" },
      { kanji: "迷惑", hiragana: "めいわく", meaning: "민폐", dictionary: "迷惑", type: "noun" },
      { kanji: "思う", hiragana: "おもう", meaning: "생각하다, 여기다", dictionary: "思う", type: "verb" },
    ]
  },
  {
    id: 63,
    sentence: "お待たせ。やってしまった。何をやってんだ、俺は。",
    meaning: "기다렸지. 저질러 버렸어. 나 대체 뭘 하고 있는 거냐.",
    words: [
      { kanji: "待たせる", hiragana: "またせる", meaning: "기다리게 하다", dictionary: "待たせる", type: "verb" },
      { kanji: "何", hiragana: "なに", meaning: "무엇, 뭐", dictionary: "何", type: "noun" },
      { kanji: "しまった", hiragana: "しまった", meaning: "아차, 이런", dictionary: "しまった", type: "expression" },
    ]
  },
  {
    id: 64,
    sentence: "大丈夫？てか、転ぶなって言ったじゃん。",
    meaning: "괜찮아? 그나저나 넘어지지 말랬잖아.",
    words: [
      { kanji: "大丈夫", hiragana: "だいじょうぶ", meaning: "괜찮음", dictionary: "大丈夫", type: "adjective" },
      { kanji: "転ぶ", hiragana: "ころぶ", meaning: "넘어지다, 구르다", dictionary: "転ぶ", type: "verb" },
      { kanji: "言う", hiragana: "いう", meaning: "말하다", dictionary: "言う", type: "verb" },
    ]
  },
  {
    id: 65,
    sentence: "あれ？コンタクト取れた。あっそうだメガネ。メガネあっちだ。やっぱりなんか心配で…",
    meaning: "어라? 렌즈 빠졌다. 아, 맞다 안경! 안경 저기 있어. 역시 왠지 걱정돼서…",
    words: [
      { kanji: "取れる", hiragana: "とれる", meaning: "빠지다, 떨어지다", dictionary: "取れる", type: "verb" },
      { kanji: "心配", hiragana: "しんぱい", meaning: "걱정", dictionary: "心配", type: "noun" },
    ]
  },
  {
    id: 66,
    sentence: "さっきのことだけど、もしかして怒ってる？",
    meaning: "아까 일 말인데, 혹시 화났어?",
    words: [
      { kanji: "怒る", hiragana: "おこる", meaning: "화나다, 화내다", dictionary: "怒る", type: "verb" },
    ]
  },
  {
    id: 67,
    sentence: "別に怒ってないけど。なんで？",
    meaning: "딱히 화 안 났는데. 왜?",
    words: [
      { kanji: "別に", hiragana: "べつに", meaning: "딱히, 별로", dictionary: "別に", type: "adverb" },
      { kanji: "怒る", hiragana: "おこる", meaning: "화나다, 화내다", dictionary: "怒る", type: "verb" },
    ]
  },
  {
    id: 68,
    sentence: "ほら、前俺が友達と仲良くしてたらいつも…",
    meaning: "거 봐, 전에 내가 친구랑 사이좋게 지내고 있으면 맨날…",
    words: [
      { kanji: "前", hiragana: "まえ", meaning: "전, 예전", dictionary: "前", type: "noun" },
      { kanji: "友達", hiragana: "ともだち", meaning: "친구", dictionary: "友達", type: "noun" },
      { kanji: "仲良くする", hiragana: "なかよくする", meaning: "사이좋게 지내다", dictionary: "仲良くする", type: "verb" },
    ]
  },
  {
    id: 69,
    sentence: "もう平気。俺のこと好きなのは知ってるし。それに誰にも取られない自信しかないから。",
    meaning: "이제 아무렇지도 않아. 네가 나 좋아하는 건 알고 있기도 하고. 게다가 누구에게도 뺏기지 않을 자신밖에 없으니까.",
    words: [
      { kanji: "平気", hiragana: "へいき", meaning: "괜찮음, 아무렇지 않음", dictionary: "平気", type: "adjective" },
      { kanji: "好き", hiragana: "すき", meaning: "좋아함", dictionary: "好き", type: "adjective" },
      { kanji: "知る", hiragana: "しる", meaning: "알다", dictionary: "知る", type: "verb" },
      { kanji: "取る", hiragana: "とる", meaning: "빼앗다, 가지다", dictionary: "取る", type: "verb" },
      { kanji: "自信", hiragana: "じしん", meaning: "자신감", dictionary: "自信", type: "noun" },
    ]
  },
  {
    id: 70,
    sentence: "そっか。気にしないんだったらいいんだけど。",
    meaning: "그렇구나. 신경 안 쓰는 거라면 다행이지만.",
    words: [
      { kanji: "気にする", hiragana: "きにする", meaning: "신경 쓰다", dictionary: "気にする", type: "verb" },
    ]
  },
  {
    id: 71,
    sentence: "でも、今日はもう離れないように、このあとずっと隣にいてよ。いい？",
    meaning: "하지만 오늘은 이제 떨어지지 않도록, 이따가 계속 옆에 있어줘. 알았지?",
    words: [
      { kanji: "今日", hiragana: "きょう", meaning: "오늘", dictionary: "今日", type: "noun" },
      { kanji: "離れる", hiragana: "はなれる", meaning: "떨어지다, 멀어지다", dictionary: "離れる", type: "verb" },
      { kanji: "隣", hiragana: "となり", meaning: "옆자리, 곁", dictionary: "隣", type: "noun" },
    ]
  },
  {
    id: 72,
    sentence: "これって聞いたほうがいいのかな…「俺たち付き合ってる？」って？無理無理、そんなこと聞けるわけないじゃん！",
    meaning: "이거 물어보는 게 좋으려나… 「우리 사귀는 거야?」라고? 무리 무리, 그런 걸 물어볼 수 있을 리가 없잖아!",
    words: [
      { kanji: "聞く", hiragana: "きく", meaning: "듣다, 묻다", dictionary: "聞く", type: "verb" },
      { kanji: "付き合う", hiragana: "つきあう", meaning: "사귀다", dictionary: "付き合う", type: "verb" },
      { kanji: "無理", hiragana: "むり", meaning: "무리, 불가능", dictionary: "無理", type: "noun" },
    ]
  },
  {
    id: 73,
    sentence: "良ければ、まだ時間ある？二人で話し合いたいんだけど。",
    meaning: "괜찮다면, 아직 시간 있어? 둘이서 이야기 나누고 싶은데.",
    words: [
      { kanji: "良い", hiragana: "よい", meaning: "좋다", dictionary: "良い", type: "adjective" },
      { kanji: "時間", hiragana: "じかん", meaning: "시간", dictionary: "時間", type: "noun" },
      { kanji: "二人", hiragana: "ふたり", meaning: "두 사람", dictionary: "二人", type: "noun" },
      { kanji: "話し合う", hiragana: "はなしあう", meaning: "서로 이야기하다", dictionary: "話し合う", type: "verb" },
    ]
  },
  {
    id: 74,
    sentence: "そういえば、あの日みんなでおみくじ引いたじゃん。俺のおみくじ、なんて書いてあったか覚えてる？「己を信じて突き進むべし」ってさ。ちょっと当たってるし。実際あれから突き進んできたからこそ、今こうして一緒にいれるし。",
    meaning: "그러고 보니, 그날 다 같이 운세 뽑기 했잖아. 내 운세에 뭐라고 적혀 있었는지 기억해? 『자신을 믿고 거침없이 나아가라』라고 말이야. 어느 정도 딱 맞기도 하고. 실제로 그때부터 직진해 왔기 때문에, 지금 이렇게 같이 있을 수 있는 거기도 하고.",
    words: [
      { kanji: "日", hiragana: "ひ", meaning: "날", dictionary: "日", type: "noun" },
      { kanji: "引く", hiragana: "ひく", meaning: "뽑다, 당기다", dictionary: "引く", type: "verb" },
      { kanji: "書く", hiragana: "かく", meaning: "쓰다", dictionary: "書く", type: "verb" },
      { kanji: "覚える", hiragana: "おぼえる", meaning: "기억하다", dictionary: "覚える", type: "verb" },
      { kanji: "己", hiragana: "おのれ", meaning: "자기 자신", dictionary: "己", type: "noun" },
      { kanji: "信じる", hiragana: "しんじる", meaning: "믿다", dictionary: "信じる", type: "verb" },
      { kanji: "突き進む", hiragana: "つきすすむ", meaning: "거침없이 나아가다", dictionary: "突き進む", type: "verb" },
      { kanji: "当たる", hiragana: "あたる", meaning: "맞다, 적중하다", dictionary: "当たる", type: "verb" },
      { kanji: "実際", hiragana: "じっさい", meaning: "실제로", dictionary: "実際", type: "adverb" },
      { kanji: "今", hiragana: "いま", meaning: "지금", dictionary: "今", type: "noun" },
    ]
  },
  {
    id: 75,
    sentence: "神様の言う通りだったね。",
    meaning: "신령님 말씀대로였네.",
    words: [
      { kanji: "神様", hiragana: "かみさま", meaning: "신, 신령님", dictionary: "神様", type: "noun" },
      { kanji: "言う", hiragana: "いう", meaning: "말하다", dictionary: "言う", type: "verb" },
      { kanji: "通り", hiragana: "どおり", meaning: "~대로", dictionary: "通り", type: "noun" },
    ]
  },
  {
    id: 76,
    sentence: "でも、実際すごくちょっと心配で。待って、もしかしたら俺、これからも一人で突き進んで、急ぎすぎて、君のこと困らせることあるかもなって。だから、もし俺が暴走しそうになったら止めて。",
    meaning: "하지만, 실제로 진짜 조금 걱정돼서. 있잖아, 어쩌면 나 앞으로도 혼자서 앞서 나가고 너무 서두르다가, 너를 곤란하게 만들 일이 있을지도 모르겠다고 생각해서. 그러니까 만약 내가 폭주할 것 같으면 말려줘.",
    words: [
      { kanji: "実際", hiragana: "じっさい", meaning: "실제로", dictionary: "実際", type: "adverb" },
      { kanji: "心配", hiragana: "しんぱい", meaning: "걱정", dictionary: "心配", type: "noun" },
      { kanji: "待つ", hiragana: "まつ", meaning: "기다리다", dictionary: "待つ", type: "verb" },
      { kanji: "一人", hiragana: "ひとり", meaning: "혼자", dictionary: "一人", type: "noun" },
      { kanji: "突き進む", hiragana: "つきすすむ", meaning: "거침없이 나아가다", dictionary: "突き進む", type: "verb" },
      { kanji: "急ぐ", hiragana: "いそぐ", meaning: "서두르다", dictionary: "急ぐ", type: "verb" },
      { kanji: "君", hiragana: "きみ", meaning: "너, 당신", dictionary: "君", type: "noun" },
      { kanji: "困らせる", hiragana: "こまらせる", meaning: "곤란하게 만들다", dictionary: "困らせる", type: "verb" },
      { kanji: "暴走する", hiragana: "ぼうそうする", meaning: "폭주하다", dictionary: "暴走する", type: "verb" },
      { kanji: "止める", hiragana: "とめる", meaning: "말리다, 멈추다", dictionary: "止める", type: "verb" },
    ]
  },
  {
    id: 77,
    sentence: "君のこと、大切にするから。",
    meaning: "너를, 정말 소중히 대할 테니까.",
    words: [
      { kanji: "君", hiragana: "きみ", meaning: "너, 당신", dictionary: "君", type: "noun" },
      { kanji: "大切にする", hiragana: "たいせつにする", meaning: "소중히 하다", dictionary: "大切にする", type: "verb" },
    ]
  },
  {
    id: 78,
    sentence: "ちょっと目瞑って。目開けていいよ。メリークリスマス！開けてみて。",
    meaning: "잠깐 눈 감아봐. 눈 떠도 돼. 메리 크리스마스! 열어봐.",
    words: [
      { kanji: "目", hiragana: "め", meaning: "눈", dictionary: "目", type: "noun" },
      { kanji: "瞑る", hiragana: "つむる", meaning: "감다", dictionary: "瞑る", type: "verb" },
      { kanji: "開ける", hiragana: "あける", meaning: "열다, 뜨다", dictionary: "開ける", type: "verb" },
    ]
  },
  {
    id: 79,
    sentence: "時計？",
    meaning: "시계?",
    words: [
      { kanji: "時計", hiragana: "とけい", meaning: "시계", dictionary: "時計", type: "noun" },
    ]
  },
  {
    id: 80,
    sentence: "学校でも部活でも、いつでもどこでも身につけやすいもののほうがいいかな。あと、単純に毎日つけてくれたら俺が嬉しいよ。",
    meaning: "학교에서도 동아리에서도, 언제 어디서든 몸에 지니기 쉬운 편이 좋을 것 같아서. 그리고 단순히, 매일 차고 다녀주면 내가 기쁘니까.",
    words: [
      { kanji: "学校", hiragana: "がっこう", meaning: "학교", dictionary: "学校", type: "noun" },
      { kanji: "部活", hiragana: "ぶかつ", meaning: "동아리 활동", dictionary: "部活", type: "noun" },
      { kanji: "身につける", hiragana: "みにつける", meaning: "몸에 지니다", dictionary: "身につける", type: "expression" },
      { kanji: "単純に", hiragana: "たんじゅんに", meaning: "단순히", dictionary: "単純に", type: "adverb" },
      { kanji: "毎日", hiragana: "まいにち", meaning: "매일", dictionary: "毎日", type: "noun" },
      { kanji: "嬉しい", hiragana: "うれしい", meaning: "기쁘다", dictionary: "嬉しい", type: "adjective" },
    ]
  },
  {
    id: 81,
    sentence: "今、重いって思った？",
    meaning: "방금 부담스럽다고 생각했어?",
    words: [
      { kanji: "今", hiragana: "いま", meaning: "지금", dictionary: "今", type: "noun" },
      { kanji: "重い", hiragana: "おもい", meaning: "무겁다, 부담스럽다", dictionary: "重い", type: "adjective" },
      { kanji: "思う", hiragana: "おもう", meaning: "생각하다", dictionary: "思う", type: "verb" },
    ]
  },
  {
    id: 82,
    sentence: "嬉しい。渡会がずっとそばにいる気がして。",
    meaning: "기뻐. 와타라이가 항상 내 곁에 같이 있어 줄 것 같은 기분이 들어서.",
    words: [
      { kanji: "嬉しい", hiragana: "うれしい", meaning: "기쁘다", dictionary: "嬉しい", type: "adjective" },
      { kanji: "気がする", hiragana: "きがする", meaning: "느낌이 들다", dictionary: "気がする", type: "expression" },
      { kanji: "そば", hiragana: "そば", meaning: "옆, 곁", dictionary: "そば", type: "noun" },
    ]
  },
  {
    id: 83,
    sentence: "今日はこのくらいで我慢する。",
    meaning: "오늘은 이 정도로 참을게.",
    words: [
      { kanji: "今日", hiragana: "きょう", meaning: "오늘", dictionary: "今日", type: "noun" },
      { kanji: "我慢する", hiragana: "がまんする", meaning: "참다", dictionary: "我慢する", type: "verb" },
    ]
  },
  {
    id: 84,
    sentence: "もしかして、また日置のキャパ超えちゃった？",
    meaning: "혹시, 내가 또 히오키의 수용범위를 넘겨버린 거야?",
    words: [
      { kanji: "超える", hiragana: "こえる", meaning: "넘다, 초과하다", dictionary: "超える", type: "verb" },
    ]
  },
  {
    id: 85,
    sentence: "多分俺は一生渡会には敵わない。付き合っていなくても、付き合った同士でも、きっと渡会とならずっとこんな幸せが続いていく気がする。",
    meaning: "아마 난 평생 와타라이에겐 이길 수 없어. 사귀고 있지 않더라도, 사귀는 사이가 되더라도, 분명 함께라면 계속 이런 행복이 이어질 것 같은 기분이 들어.",
    words: [
      { kanji: "多分", hiragana: "たぶん", meaning: "아마, 어쩌면", dictionary: "多分", type: "adverb" },
      { kanji: "一生", hiragana: "いっしょう", meaning: "평생", dictionary: "一生", type: "noun" },
      { kanji: "敵わない", hiragana: "かなわない", meaning: "당해낼 수 없다", dictionary: "敵わない", type: "verb" },
      { kanji: "付き合う", hiragana: "つきあう", meaning: "사귀다", dictionary: "付き合う", type: "verb" },
      { kanji: "同士", hiragana: "どうし", meaning: "~끼리, ~사이", dictionary: "同士", type: "noun" },
      { kanji: "幸せ", hiragana: "しあわせ", meaning: "행복", dictionary: "幸せ", type: "noun" },
      { kanji: "続く", hiragana: "つづく", meaning: "계속되다, 이어지다", dictionary: "続く", type: "verb" },
    ]
  },
  {
    id: 86,
    sentence: "ねえ、春休み二人でどこか出かけない？",
    meaning: "저기, 봄방학에 둘이서 어디 놀러 가지 않을래?",
    words: [
      { kanji: "春休み", hiragana: "はるやすみ", meaning: "봄방학", dictionary: "春休み", type: "noun" },
      { kanji: "二人", hiragana: "ふたり", meaning: "두 사람", dictionary: "二人", type: "noun" },
      { kanji: "出かける", hiragana: "でかける", meaning: "외출하다", dictionary: "出かける", type: "verb" },
    ]
  },
  {
    id: 87,
    sentence: "わかんないけど、ちょっと遠出しようか。",
    meaning: "잘은 모르겠지만, 조금 멀리 나가볼까?",
    words: [
      { kanji: "遠出", hiragana: "とおで", meaning: "멀리 나감", dictionary: "遠出", type: "noun" },
      { kanji: "わかる", hiragana: "わかる", meaning: "알다, 이해하다", dictionary: "わかる", type: "verb" },
    ]
  },
  {
    id: 88,
    sentence: "いいね。",
    meaning: "좋네.",
    words: []
  },
  {
    id: 89,
    sentence: "電車とか乗って、景色見るだけでも楽しそう。",
    meaning: "전철 같은 거 타고, 풍경 보는 것만으로도 재밌을 것 같아.",
    words: [
      { kanji: "電車", hiragana: "でんしゃ", meaning: "전철, 기차", dictionary: "電車", type: "noun" },
      { kanji: "乗る", hiragana: "のる", meaning: "타다", dictionary: "乗る", type: "verb" },
      { kanji: "景色", hiragana: "けしき", meaning: "경치, 풍경", dictionary: "景色", type: "noun" },
      { kanji: "見る", hiragana: "みる", meaning: "보다", dictionary: "見る", type: "verb" },
      { kanji: "楽しい", hiragana: "たのしい", meaning: "즐겁다", dictionary: "楽しい", type: "adjective" },
    ]
  },
  {
    id: 90,
    sentence: "確かに。",
    meaning: "맞아.",
    words: [
      { kanji: "確かに", hiragana: "たしかに", meaning: "확실히", dictionary: "確かに", type: "adverb" },
    ]
  },
  {
    id: 91,
    sentence: "春休み、なるべく日置に会いたいな。",
    meaning: "봄방학 되면, 되도록 히오키랑 만나고 싶네.",
    words: [
      { kanji: "春休み", hiragana: "はるやすみ", meaning: "봄방학", dictionary: "春休み", type: "noun" },
      { kanji: "会う", hiragana: "あう", meaning: "만나다", dictionary: "会う", type: "verb" },
    ]
  },
  {
    id: 92,
    sentence: "うん、会おう。俺も会いたい。",
    meaning: "응, 만나자. 나도 만나고 싶어.",
    words: [
      { kanji: "会う", hiragana: "あう", meaning: "만나다", dictionary: "会う", type: "verb" },
    ]
  },
  {
    id: 93,
    sentence: "渡会、俺たち付き合わない？俺と付き合ってほしい。それって…恋人になってほしいってことだよ。",
    meaning: "와타라이, 우리 사귀지 않을래? 나랑 사귀어 줬으면 좋겠어. 그건… 연인이 되어 달라는 말이야.",
    words: [
      { kanji: "付き合う", hiragana: "つきあう", meaning: "사귀다", dictionary: "付き合う", type: "verb" },
      { kanji: "恋人", hiragana: "こいびと", meaning: "연인, 애인", dictionary: "恋人", type: "noun" },
    ]
  },
  {
    id: 94,
    sentence: "いいや、なんか俺すげえかっこ悪いじゃん。だって、本当は俺から言いたかったの。",
    meaning: "아니, 뭔가 나 엄청 꼴사납잖아. 그야, 원래는 내가 먼저 말하고 싶었단 말이야.",
    words: [
      { kanji: "かっこ悪い", hiragana: "かっこわるい", meaning: "멋없다, 꼴사납다", dictionary: "かっこ悪い", type: "adjective" },
      { kanji: "本当は", hiragana: "ほんとうは", meaning: "사실은, 원래는", dictionary: "本当は", type: "adverb" },
      { kanji: "言う", hiragana: "いう", meaning: "말하다", dictionary: "言う", type: "verb" },
    ]
  },
  {
    id: 95,
    sentence: "何それ。たまには俺にもかっこつけさせてよ。",
    meaning: "그게 뭐야. 가끔은 나도 멋 좀 부리게 해줘.",
    words: [
      { kanji: "何", hiragana: "なに", meaning: "무엇, 뭐", dictionary: "何", type: "noun" },
      { kanji: "かっこつける", hiragana: "かっこつける", meaning: "멋 부리다", dictionary: "かっこつける", type: "expression" },
    ]
  },
  {
    id: 96,
    sentence: "てか、渡会はかっこいいよ。だって、告白ってこんなに勇気いるのに、渡会はいつもちゃんと言葉にして俺に気持ち伝えてくれて。それって本当にすごいことだと思う。",
    meaning: "그나저나, 와타라이는 참 멋져. 그야, 고백이라는 건 이렇게나 용기가 필요한 건데, 항상 제대로 말로 표현해서 마음을 전해줬잖아. 그거 정말로 대단한 일이라고 생각해.",
    words: [
      { kanji: "かっこいい", hiragana: "かっこいい", meaning: "멋있다", dictionary: "かっこいい", type: "adjective" },
      { kanji: "告白", hiragana: "こくはく", meaning: "고백", dictionary: "告白", type: "noun" },
      { kanji: "勇気", hiragana: "ゆうき", meaning: "용기", dictionary: "勇気", type: "noun" },
      { kanji: "言葉", hiragana: "ことば", meaning: "말, 언어", dictionary: "言葉", type: "noun" },
      { kanji: "気持ちを伝える", hiragana: "きもちをつたえる", meaning: "마음을 전하다", dictionary: "気持ちを伝える", type: "expression" },
      { kanji: "本当に", hiragana: "ほんとうに", meaning: "진짜로", dictionary: "本当に", type: "adverb" },
      { kanji: "思う", hiragana: "おもう", meaning: "생각하다", dictionary: "思う", type: "verb" },
    ]
  },
  {
    id: 97,
    sentence: "てか、…その、本当に俺でいいの？",
    meaning: "그나저나, …그게, 정말로 나여도 괜찮은 거야?",
    words: [
      { kanji: "本当に", hiragana: "ほんとうに", meaning: "진짜로", dictionary: "本当に", type: "adverb" },
    ]
  },
  {
    id: 98,
    sentence: "うん。渡会がいいし、渡会じゃなきゃ嫌。大好きだよ。",
    meaning: "응. 와타라이가 좋고, 와타라이가 아니면 싫어. 정말 좋아해.",
    words: [
      { kanji: "嫌", hiragana: "いや", meaning: "싫음", dictionary: "嫌", type: "adjective" },
      { kanji: "大好き", hiragana: "だいすき", meaning: "정말 좋아함", dictionary: "大好き", type: "adjective" },
    ]
  },
  {
    id: 99,
    sentence: "これからもよろしく、彼氏として。",
    meaning: "앞으로도 잘 부탁해, 남자친구로서.",
    words: [
      { kanji: "彼氏", hiragana: "かれし", meaning: "남자친구", dictionary: "彼氏", type: "noun" },
    ]
  },
  {
    id: 100,
    sentence: "何照れてんの？",
    meaning: "뭘 부끄러워하고 있어?",
    words: [
      { kanji: "何", hiragana: "なに", meaning: "무엇, 뭐", dictionary: "何", type: "noun" },
      { kanji: "照れる", hiragana: "てれる", meaning: "부끄러워하다", dictionary: "照れる", type: "verb" },
    ]
  },
  {
    id: 101,
    sentence: "照れてない。",
    meaning: "안 부끄러워하거든.",
    words: [
      { kanji: "照れる", hiragana: "てれる", meaning: "부끄러워하다", dictionary: "照れる", type: "verb" },
    ]
  },
  {
    id: 102,
    sentence: "かわいい顔してんじゃん",
    meaning: "귀여운 얼굴을 하고 있잖아.",
    words: [
      { kanji: "顔", hiragana: "かお", meaning: "얼굴", dictionary: "顔", type: "noun" },
      { kanji: "かわいい", hiragana: "かわいい", meaning: "귀엽다", dictionary: "かわいい", type: "adjective" },
    ]
  },
  {
    id: 103,
    sentence: "友達になってほしい",
    meaning: "친구가 되어 줬으면 좋겠어.",
    words: [
      { kanji: "友達", hiragana: "ともだち", meaning: "친구", dictionary: "友達", type: "noun" },
    ]
  },
  {
    id: 104,
    sentence: "てか、転ぶなって言ったじゃん",
    meaning: "넘어지지 말라니까 그랬잖아.",
    words: [
      { kanji: "転ぶ", hiragana: "ころぶ", meaning: "넘어지다", dictionary: "転ぶ", type: "verb" },
      { kanji: "言う", hiragana: "いう", meaning: "말하다", dictionary: "言う", type: "verb" },
    ]
  },
  {
    id: 105,
    sentence: "実は",
    meaning: "사실은",
    words: [
      { kanji: "実は", hiragana: "じつは", meaning: "사실은", dictionary: "実は", type: "adverb" },
    ]
  },
  {
    id: 106,
    sentence: "お前らそれ苦手なだけだろ",
    meaning: "너네 그거 그냥 못하는 거잖아.",
    words: [
      { kanji: "お前", hiragana: "おまえ", meaning: "너, 당신", dictionary: "お前", type: "noun" },
      { kanji: "苦手", hiragana: "にがて", meaning: "서투름, 잘 못함", dictionary: "苦手", type: "adjective" },
    ]
  },
  {
    id: 107,
    sentence: "嫌いだ",
    meaning: "싫어하다.",
    words: [
      { kanji: "嫌い", hiragana: "きらい", meaning: "싫어함", dictionary: "嫌い", type: "adjective" },
    ]
  },
  {
    id: 108,
    sentence: "きれいだね",
    meaning: "예쁘네 / 깨끗하네.",
    words: [
      { kanji: "きれい", hiragana: "きれい", meaning: "예쁘다, 깨끗하다", dictionary: "きれい", type: "adjective" },
    ]
  },
  {
    id: 109,
    sentence: "きれいでしょ",
    meaning: "예쁘지? / 깨끗하지?",
    words: [
      { kanji: "きれい", hiragana: "きれい", meaning: "예쁘다, 깨끗하다", dictionary: "きれい", type: "adjective" },
    ]
  },
  {
    id: 110,
    sentence: "てか、笑うことなの？",
    meaning: "아니, 웃을 일이야?",
    words: [
      { kanji: "笑う", hiragana: "わらう", meaning: "웃다", dictionary: "笑う", type: "verb" },
    ]
  },
  {
    id: 111,
    sentence: "きっかけは些細なことだった",
    meaning: "계기는 사소한 일이었어.",
    words: [
      { kanji: "些細", hiragana: "ささい", meaning: "사소함", dictionary: "些細", type: "adjective" },
      { kanji: "きっかけ", hiragana: "きっかけ", meaning: "계기", dictionary: "きっかけ", type: "noun" },
    ]
  },
  {
    id: 112,
    sentence: "もしかして、ボールペン持ってないの？",
    meaning: "혹시 볼펜 없어?",
    words: [
      { kanji: "持つ", hiragana: "もつ", meaning: "가지다, 들다", dictionary: "持つ", type: "verb" },
      { kanji: "ペン", hiragana: "ペン", meaning: "펜", dictionary: "ペン", type: "noun" },
    ]
  },
  {
    id: 113,
    sentence: "使って",
    meaning: "써 / 사용해.",
    words: [
      { kanji: "使う", hiragana: "つかう", meaning: "사용하다", dictionary: "使う", type: "verb" },
    ]
  },
  {
    id: 114,
    sentence: "また後でね",
    meaning: "또 나중에 봐! / 이따 또 봐!",
    words: [
      { kanji: "後で", hiragana: "あとで", meaning: "나중에", dictionary: "後で", type: "adverb" },
    ]
  },
  {
    id: 115,
    sentence: "タイミング悪い",
    meaning: "타이밍이 안 좋아.",
    words: [
      { kanji: "悪い", hiragana: "わるい", meaning: "나쁘다", dictionary: "悪い", type: "adjective" },
      { kanji: "タイミング", hiragana: "タイミング", meaning: "타이밍", dictionary: "タイミング", type: "noun" },
    ]
  },
  {
    id: 116,
    sentence: "初めて",
    meaning: "처음이야 / 처음으로.",
    words: [
      { kanji: "初めて", hiragana: "はじめて", meaning: "처음으로", dictionary: "初めて", type: "adverb" },
    ]
  },
  {
    id: 117,
    sentence: "俺の知らないところで",
    meaning: "내가 모르는 곳에서.",
    words: [
      { kanji: "知る", hiragana: "しる", meaning: "알다", dictionary: "知る", type: "verb" },
    ]
  },
  {
    id: 118,
    sentence: "タイミングは掴めなくて",
    meaning: "타이밍을 잡을 수 없어서.",
    words: [
      { kanji: "掴む", hiragana: "つかむ", meaning: "잡다, 쥐다", dictionary: "掴む", type: "verb" },
      { kanji: "タイミング", hiragana: "タイミング", meaning: "타이밍", dictionary: "タイミング", type: "noun" },
      { kanji: "つかむ", hiragana: "つかむ", meaning: "잡다", dictionary: "つかむ", type: "verb" },
    ]
  },
  {
    id: 119,
    sentence: "きっかけ、春じゃん",
    meaning: "계기는 봄이잖아.",
    words: [
      { kanji: "春", hiragana: "はる", meaning: "봄", dictionary: "春", type: "noun" },
      { kanji: "きっかけ", hiragana: "きっかけ", meaning: "계기", dictionary: "きっかけ", type: "noun" },
    ]
  },
  {
    id: 120,
    sentence: "着てくるわ",
    meaning: "입고 올게.",
    words: [
      { kanji: "着る", hiragana: "きる", meaning: "입다", dictionary: "着る", type: "verb" },
    ]
  },
  {
    id: 121,
    sentence: "なんでこんなにモヤモヤしてるんだろう？",
    meaning: "왜 이렇게 마음이 답답하고 찌릿찌릿한 걸까?",
    words: []
  },
  {
    id: 122,
    sentence: "言うこと聞かないから",
    meaning: "말을 안 들으니까 그렇잖아.",
    words: [
      { kanji: "言う", hiragana: "いう", meaning: "말하다", dictionary: "言う", type: "verb" },
      { kanji: "聞く", hiragana: "きく", meaning: "듣다, 묻다", dictionary: "聞く", type: "verb" },
    ]
  },
  {
    id: 123,
    sentence: "俺が女の子だったら、こんなに悩まなくてよかったのかな",
    meaning: "내가 여자아이였다면 이런 고민은 안 해도 됐으려나...",
    words: [
      { kanji: "女の子", hiragana: "おんなのこ", meaning: "여자아이", dictionary: "女の子", type: "noun" },
      { kanji: "悩む", hiragana: "なやむ", meaning: "고민하다", dictionary: "悩む", type: "verb" },
    ]
  },
  {
    id: 124,
    sentence: "結局、今日は全然話せなかったな",
    meaning: "결국 오늘은 전혀 이야기하지 못했네.",
    words: [
      { kanji: "結局", hiragana: "けっきょく", meaning: "결국", dictionary: "結局", type: "adverb" },
      { kanji: "今日", hiragana: "きょう", meaning: "오늘", dictionary: "今日", type: "noun" },
      { kanji: "全然", hiragana: "ぜんぜん", meaning: "전혀", dictionary: "全然", type: "adverb" },
      { kanji: "話す", hiragana: "はなす", meaning: "말하다", dictionary: "話す", type: "verb" },
    ]
  },
  {
    id: 125,
    sentence: "ごめん、不安にさせて",
    meaning: "미안, 불안하게 만들어서.",
    words: [
      { kanji: "不安", hiragana: "ふあん", meaning: "불안", dictionary: "不安", type: "noun" },
    ]
  },
  {
    id: 126,
    sentence: "その、もうすぐクリスマスだから、日置にプレゼントあげたいなって。それで日置の好みとか知りたくて",
    meaning: "이제 곧 크리스마스니까 선물을 주고 싶어서... 취향 같은 걸 알고 싶어서...",
    words: [
      { kanji: "好み", hiragana: "このみ", meaning: "취향", dictionary: "好み", type: "noun" },
      { kanji: "知る", hiragana: "しる", meaning: "알다", dictionary: "知る", type: "verb" },
    ]
  },
  {
    id: 127,
    sentence: "俺がもっと時間作って、早く説明すべきだった。ごめん、不安にさせて",
    meaning: "내가 더 시간을 내서 빨리 설명했어야 했어. 미안해, 불안하게 만들어서.",
    words: [
      { kanji: "時間", hiragana: "じかん", meaning: "시간", dictionary: "時間", type: "noun" },
      { kanji: "作る", hiragana: "つくる", meaning: "만들다", dictionary: "作る", type: "verb" },
      { kanji: "早く", hiragana: "はやく", meaning: "빨리", dictionary: "早く", type: "adverb" },
      { kanji: "説明する", hiragana: "せつめいする", meaning: "설명하다", dictionary: "説明する", type: "verb" },
      { kanji: "不安", hiragana: "ふあん", meaning: "불안", dictionary: "不安", type: "noun" },
    ]
  },
  {
    id: 128,
    sentence: "それと、さっき日置が「もし女の子だったら」って言ってたけど、俺もちょうど今日、同じこと考えてた",
    meaning: "그리고 아까 '만약 여자아이였다면' 하고 말했지만, 나도 마침 오늘 똑같은 생각을 하고 있었어.",
    words: [
      { kanji: "女の子", hiragana: "おんなのこ", meaning: "여자아이", dictionary: "女の子", type: "noun" },
      { kanji: "言う", hiragana: "いう", meaning: "말하다", dictionary: "言う", type: "verb" },
      { kanji: "今日", hiragana: "きょう", meaning: "오늘", dictionary: "今日", type: "noun" },
      { kanji: "同じ", hiragana: "おなじ", meaning: "같은", dictionary: "同じ", type: "adjective" },
      { kanji: "考える", hiragana: "かんがえる", meaning: "생각하다", dictionary: "考える", type: "verb" },
    ]
  },
  {
    id: 129,
    sentence: "ていうか、むしろ逆に一緒だ。日置がもし女の子だったら、今みたいな関係になってなかったじゃん、ないかって",
    meaning: "오히려 똑같아. 만약 여자아이였다면 지금 같은 관계는 안 되었잖아? 그렇지 않아?",
    words: [
      { kanji: "逆に", hiragana: "ぎゃくに", meaning: "오히려, 반대로", dictionary: "逆に", type: "adverb" },
      { kanji: "一緒", hiragana: "いっしょ", meaning: "함께, 같음", dictionary: "一緒", type: "noun" },
      { kanji: "女の子", hiragana: "おんなのこ", meaning: "여자아이", dictionary: "女の子", type: "noun" },
      { kanji: "今", hiragana: "いま", meaning: "지금", dictionary: "今", type: "noun" },
      { kanji: "関係", hiragana: "かんけい", meaning: "관계", dictionary: "関係", type: "noun" },
    ]
  },
  {
    id: 130,
    sentence: "女の子だったら修学旅行で同じグループになれなかったかもしれない、って。そうしたら、あの時みたいに朝から晩まで一緒に過ごせるものなかったし、今みたいに恋愛発展するタイミングなかったかも",
    meaning: "여자아이였다면 수학여행에서 같은 그룹이 되지 못했을지도 모른다고. 그랬다면 아침부터 밤까지 같이 보낼 수도 없었을 테고, 연애로 흘러가는 타이밍도 없었을지 몰라.",
    words: [
      { kanji: "女の子", hiragana: "おんなのこ", meaning: "여자아이", dictionary: "女の子", type: "noun" },
      { kanji: "修学旅行", hiragana: "しゅうがくりょこう", meaning: "수학여행", dictionary: "修学旅行", type: "noun" },
      { kanji: "同じ", hiragana: "おなじ", meaning: "같은", dictionary: "同じ", type: "adjective" },
      { kanji: "時", hiragana: "とき", meaning: "때", dictionary: "時", type: "noun" },
      { kanji: "朝", hiragana: "あさ", meaning: "아침", dictionary: "朝", type: "noun" },
      { kanji: "晩", hiragana: "ばん", meaning: "밤, 저녁", dictionary: "晩", type: "noun" },
      { kanji: "一緒", hiragana: "いっしょ", meaning: "함께", dictionary: "一緒", type: "noun" },
      { kanji: "過ごす", hiragana: "すごす", meaning: "지내다, 보내다", dictionary: "過ごす", type: "verb" },
      { kanji: "今", hiragana: "いま", meaning: "지금", dictionary: "今", type: "noun" },
      { kanji: "恋愛", hiragana: "れんあい", meaning: "연애", dictionary: "恋愛", type: "noun" },
      { kanji: "発展する", hiragana: "はってんする", meaning: "발전하다", dictionary: "発展する", type: "verb" },
      { kanji: "タイミング", hiragana: "タイミング", meaning: "타이밍", dictionary: "タイミング", type: "noun" },
      { kanji: "グループ", hiragana: "グループ", meaning: "그룹", dictionary: "グループ", type: "noun" },
    ]
  },
  {
    id: 131,
    sentence: "やっぱり俺は男とか女とか関係なく、日置が好きなんだなって",
    meaning: "역시 남자라든가 여자라든가 상관없이 좋은 거구나 하고.",
    words: [
      { kanji: "男", hiragana: "おとこ", meaning: "남자", dictionary: "男", type: "noun" },
      { kanji: "女", hiragana: "おんな", meaning: "여자", dictionary: "女", type: "noun" },
      { kanji: "関係", hiragana: "かんけい", meaning: "관계", dictionary: "関係", type: "noun" },
      { kanji: "好き", hiragana: "すき", meaning: "좋아함", dictionary: "好き", type: "adjective" },
    ]
  },
  {
    id: 132,
    sentence: "俺も、渡会が渡会だから好き",
    meaning: "나도 와타라이가 와타라이라서 좋아.",
    words: [
      { kanji: "好き", hiragana: "すき", meaning: "좋아함", dictionary: "好き", type: "adjective" },
    ]
  },
  {
    id: 133,
    sentence: "足痛い？じゃあ、俺が抱っこしよっか？",
    meaning: "발 아파? 그럼 내가 안아줄까?",
    words: [
      { kanji: "足", hiragana: "あし", meaning: "발, 다리", dictionary: "足", type: "noun" },
      { kanji: "痛い", hiragana: "いたい", meaning: "아프다", dictionary: "痛い", type: "adjective" },
      { kanji: "抱っこする", hiragana: "だっこする", meaning: "안다", dictionary: "抱っこする", type: "verb" },
    ]
  },
  {
    id: 134,
    sentence: "そこまで…てか、俺重いし",
    meaning: "그렇게까지... 그보다, 나 무거우니까 관둬.",
    words: [
      { kanji: "重い", hiragana: "おもい", meaning: "무겁다", dictionary: "重い", type: "adjective" },
    ]
  },
  {
    id: 135,
    sentence: "俺、あれから筋トレしたしるし",
    meaning: "나 그 뒤로 열심히 운동했단 말야! 여기 알통(증거) 보이지?",
    words: [
      { kanji: "筋トレ", hiragana: "きんとれ", meaning: "근력 운동", dictionary: "筋トレ", type: "noun" },
    ]
  },
  {
    id: 136,
    sentence: "多分、俺のほうが筋肉あるよ？",
    meaning: "아마 내가 (너보다) 근육 더 많을걸?",
    words: [
      { kanji: "多分", hiragana: "たぶん", meaning: "아마, 어쩌면", dictionary: "多分", type: "adverb" },
      { kanji: "筋肉", hiragana: "きんにく", meaning: "근육", dictionary: "筋肉", type: "noun" },
    ]
  },
  {
    id: 137,
    sentence: "俺も一応、運動部だけど？",
    meaning: "나도 이래 봬도 명색이 운동부거든?!",
    words: [
      { kanji: "一応", hiragana: "いちおう", meaning: "일단, 그래도", dictionary: "一応", type: "adverb" },
      { kanji: "運動部", hiragana: "うんどうぶ", meaning: "운동부", dictionary: "運動部", type: "noun" },
    ]
  },
  {
    id: 138,
    sentence: "筋トレ",
    meaning: "근력 운동.",
    words: [
      { kanji: "筋トレ", hiragana: "きんとれ", meaning: "근력 운동", dictionary: "筋トレ", type: "noun" },
    ]
  },
  {
    id: 139,
    sentence: "日置、今 筋トレしてる？",
    meaning: "히오키, 지금 근력 운동 하고 있어?",
    words: [
      { kanji: "今", hiragana: "いま", meaning: "지금", dictionary: "今", type: "noun" },
      { kanji: "筋トレ", hiragana: "きんとれ", meaning: "근력 운동", dictionary: "筋トレ", type: "noun" },
    ]
  },
  {
    id: 140,
    sentence: "俺にこういうことすると、どうなるとか…？",
    meaning: "나한테 이런 짓을 하면 어떻게 되는지 알아?",
    words: []
  },
  {
    id: 141,
    sentence: "お手柔らかに、お願いします…！",
    meaning: "부디 살살 부탁드립니다...!",
    words: [
      { kanji: "お手柔らかに", hiragana: "おてやわらかに", meaning: "부디 살살, 너그럽게", dictionary: "お手柔らかに", type: "expression" },
      { kanji: "お願いする", hiragana: "おねがいする", meaning: "부탁하다", dictionary: "お願いする", type: "verb" },
    ]
  },
  {
    id: 142,
    sentence: "嬉しいよ",
    meaning: "기뻐.",
    words: [
      { kanji: "嬉しい", hiragana: "うれしい", meaning: "기쁘다", dictionary: "嬉しい", type: "adjective" },
    ]
  },
  {
    id: 143,
    sentence: "そんな風に言ってくれて(ありがとう)",
    meaning: "그렇게 말해줘서 (고마워).",
    words: [
      { kanji: "風", hiragana: "ふう", meaning: "식, 모양", dictionary: "風", type: "noun" },
      { kanji: "言う", hiragana: "いう", meaning: "말하다", dictionary: "言う", type: "verb" },
    ]
  },
  {
    id: 144,
    sentence: "俺も、これからも仲良くできたらなと思ってたし",
    meaning: "나도, 앞으로도 사이좋게 지낼 수 있으면 좋겠다고 생각했었고.",
    words: [
      { kanji: "仲良くする", hiragana: "なかよくする", meaning: "사이좋게 지내다", dictionary: "仲良くする", type: "verb" },
      { kanji: "思う", hiragana: "おもう", meaning: "생각하다", dictionary: "思う", type: "verb" },
    ]
  },
  {
    id: 145,
    sentence: "でも俺の言う友達はただの友達じゃないから",
    meaning: "근데 내가 말하는 친구는 그냥 친구가 아니니까.",
    words: [
      { kanji: "言う", hiragana: "いう", meaning: "말하다", dictionary: "言う", type: "verb" },
      { kanji: "友達", hiragana: "ともだち", meaning: "친구", dictionary: "友達", type: "noun" },
    ]
  },
  {
    id: 146,
    sentence: "それはどういう意味？ (それはどういうこと？)",
    meaning: "그게 무슨 의미야? (그게 어떻게 된 거야?)",
    words: [
      { kanji: "意味", hiragana: "いみ", meaning: "의미", dictionary: "意味", type: "noun" },
    ]
  },
  {
    id: 147,
    sentence: "つまり、気を使わない関係ってことかな",
    meaning: "그러니까, 신경 안 쓰는 사이라는 뜻인가?",
    words: [
      { kanji: "気を使う", hiragana: "きをつかう", meaning: "신경 쓰다", dictionary: "気を使う", type: "expression" },
      { kanji: "関係", hiragana: "かんけい", meaning: "관계", dictionary: "関係", type: "noun" },
      { kanji: "つまり", hiragana: "つまり", meaning: "즉, 결국", dictionary: "つまり", type: "adverb" },
    ]
  },
  {
    id: 148,
    sentence: "俺も知らないことらしい (俺も知らないことだね)",
    meaning: "나도 모르는 거라나 봐 (나도 모르는 거네).",
    words: []
  },
  {
    id: 149,
    sentence: "イケメンって距離感バグだの？",
    meaning: "잘생긴 애들은 거리감이 고장 난 거야?",
    words: [
      { kanji: "距離感", hiragana: "きょりかん", meaning: "거리감", dictionary: "距離感", type: "noun" },
      { kanji: "イケメン", hiragana: "イケメン", meaning: "잘생긴 남자", dictionary: "イケメン", type: "noun" },
    ]
  },
  {
    id: 150,
    sentence: "さすが四天王、レベルが違う",
    meaning: "역시 사천왕답네, 레벨이 다르다.",
    words: [
      { kanji: "四天王", hiragana: "してんのう", meaning: "사천왕(핵심 4인방)", dictionary: "四天王", type: "noun" },
      { kanji: "違う", hiragana: "ちがう", meaning: "다르다", dictionary: "違う", type: "verb" },
    ]
  },
  {
    id: 151,
    sentence: "勝負見た目が一番、運がいいか",
    meaning: "승부는 외모가 제일인가, 운이 좋은 건가.",
    words: [
      { kanji: "勝負", hiragana: "しょうぶ", meaning: "승부", dictionary: "勝負", type: "noun" },
      { kanji: "見た目", hiragana: "みため", meaning: "외모, 겉모습", dictionary: "見た目", type: "noun" },
      { kanji: "一番", hiragana: "いちばん", meaning: "가장, 제일", dictionary: "一番", type: "adverb" },
      { kanji: "運", hiragana: "うん", meaning: "운", dictionary: "運", type: "noun" },
    ]
  },
  {
    id: 152,
    sentence: "ごめん、先に入ってて",
    meaning: "미안, 먼저 들어가 있어.",
    words: [
      { kanji: "先に", hiragana: "さきに", meaning: "먼저", dictionary: "先に", type: "adverb" },
      { kanji: "入る", hiragana: "はいる", meaning: "들어가다", dictionary: "入る", type: "verb" },
    ]
  },
  {
    id: 153,
    sentence: "洗い終わったら待ってて",
    meaning: "씻는 거 다 끝나면 기다리고 있어.",
    words: [
      { kanji: "洗う", hiragana: "あらう", meaning: "씻다", dictionary: "洗う", type: "verb" },
      { kanji: "終わる", hiragana: "おわる", meaning: "끝나다", dictionary: "終わる", type: "verb" },
      { kanji: "待つ", hiragana: "まつ", meaning: "기다리다", dictionary: "待つ", type: "verb" },
    ]
  },
  {
    id: 154,
    sentence: "マジで転ばれたら困る",
    meaning: "진짜로 넘어지면 곤란해.",
    words: [
      { kanji: "転ぶ", hiragana: "ころぶ", meaning: "넘어지다", dictionary: "転ぶ", type: "verb" },
      { kanji: "困る", hiragana: "こまる", meaning: "곤란하다", dictionary: "困る", type: "verb" },
      { kanji: "マジで", hiragana: "マジで", meaning: "진짜로", dictionary: "マジで", type: "adverb" },
    ]
  },
  {
    id: 155,
    sentence: "俺も入ってるんだ",
    meaning: "나도 (같이) 들어와 있어.",
    words: [
      { kanji: "入る", hiragana: "はいる", meaning: "들어가다", dictionary: "入る", type: "verb" },
    ]
  },
  {
    id: 156,
    sentence: "怖かったら手繋いでもいいけど",
    meaning: "무서우면 손 잡아도 되는데.",
    words: [
      { kanji: "怖い", hiragana: "こわい", meaning: "무섭다", dictionary: "怖い", type: "adjective" },
      { kanji: "手を繋ぐ", hiragana: "てをつなぐ", meaning: "손을 잡다", dictionary: "手を繋ぐ", type: "expression" },
    ]
  },
  {
    id: 157,
    sentence: "わからない",
    meaning: "모르겠어.",
    words: [
      { kanji: "わかる", hiragana: "わかる", meaning: "알다, 이해하다", dictionary: "わかる", type: "verb" },
    ]
  },
  {
    id: 158,
    sentence: "教えない",
    meaning: "안 알려줄 거야.",
    words: [
      { kanji: "教える", hiragana: "おしえる", meaning: "가르치다, 알려주다", dictionary: "教える", type: "verb" },
    ]
  },
  {
    id: 159,
    sentence: "じゃあ、そうする",
    meaning: "그럼, 그렇게 할게.",
    words: []
  },
  {
    id: 160,
    sentence: "そうして",
    meaning: "그렇게 해.",
    words: []
  },
  {
    id: 161,
    sentence: "高校2年生になって",
    meaning: "고등학교 2학년이 되어서",
    words: [
      { kanji: "高校", hiragana: "こうこう", meaning: "고등학교", dictionary: "高校", type: "noun" },
      { kanji: "年生", hiragana: "ねんせい", meaning: "~학년", dictionary: "年生", type: "noun" },
    ]
  },
  {
    id: 162,
    sentence: "まあ、友達ができたのはありがたいことだけど、普段から一人行動が染み付いている俺は、まだ慣れない。",
    meaning: "친구가 생긴 건 감사한 일이지만, 평소 혼자 행동하는 게 몸에 밴 나는 아직 익숙하지 않아.",
    words: [
      { kanji: "友達", hiragana: "ともだち", meaning: "친구", dictionary: "友達", type: "noun" },
      { kanji: "普段", hiragana: "ふだん", meaning: "평소", dictionary: "普段", type: "noun" },
      { kanji: "一人行動", hiragana: "ひとりこうどう", meaning: "혼자 행동함", dictionary: "一人行動", type: "noun" },
      { kanji: "染みつく", hiragana: "しみつく", meaning: "몸에 배다", dictionary: "染みつく", type: "verb" },
      { kanji: "慣れる", hiragana: "なれる", meaning: "익숙해지다", dictionary: "慣れる", type: "verb" },
    ]
  },
  {
    id: 163,
    sentence: "ていうか、友達ってこんなに尽くしてくれるもんだっけ？",
    meaning: "그나저나, 친구라는 게 이렇게까지 헌신해주는 거였나?",
    words: [
      { kanji: "友達", hiragana: "ともだち", meaning: "친구", dictionary: "友達", type: "noun" },
      { kanji: "尽くす", hiragana: "つくす", meaning: "헌신하다", dictionary: "尽くす", type: "verb" },
    ]
  },
  {
    id: 164,
    sentence: "友達の世界がわからない",
    meaning: "친구라는 세계를 모르겠어.",
    words: [
      { kanji: "友達", hiragana: "ともだち", meaning: "친구", dictionary: "友達", type: "noun" },
      { kanji: "世界", hiragana: "せかい", meaning: "세계", dictionary: "世界", type: "noun" },
      { kanji: "わかる", hiragana: "わかる", meaning: "알다, 이해하다", dictionary: "わかる", type: "verb" },
    ]
  },
  {
    id: 165,
    sentence: "そのままでいい (そのままがいい)",
    meaning: "그대로 있어도 돼 (그대로가 좋아).",
    words: []
  },
  {
    id: 166,
    sentence: "なんか近くない？",
    meaning: "뭔가 가깝지 않아?",
    words: [
      { kanji: "近い", hiragana: "ちかい", meaning: "가깝다", dictionary: "近い", type: "adjective" },
    ]
  },
  {
    id: 167,
    sentence: "ていうか、もしかして俺は今、学年一のイケメンを背もたれにしている状態なのでは！？",
    meaning: "혹시 나 지금 학년 1등 미남을 등받이로 쓰고 있는 상태인 거 아니야?!",
    words: [
      { kanji: "今", hiragana: "いま", meaning: "지금", dictionary: "今", type: "noun" },
      { kanji: "学年一", hiragana: "がくねんいち", meaning: "학년 1등", dictionary: "学年一", type: "noun" },
      { kanji: "状態", hiragana: "じょうたい", meaning: "상태", dictionary: "状態", type: "noun" },
      { kanji: "イケメン", hiragana: "イケメン", meaning: "잘생긴 남자", dictionary: "イケメン", type: "noun" },
    ]
  },
  {
    id: 168,
    sentence: "俺なんだよね",
    meaning: "나거든.",
    words: []
  },
  {
    id: 169,
    sentence: "理由じゃなくて",
    meaning: "이유가 아니라.",
    words: [
      { kanji: "理由", hiragana: "りゆう", meaning: "이유", dictionary: "理由", type: "noun" },
    ]
  },
  {
    id: 170,
    sentence: "知りたくて",
    meaning: "알고 싶어서.",
    words: [
      { kanji: "知る", hiragana: "しる", meaning: "알다", dictionary: "知る", type: "verb" },
    ]
  },
  {
    id: 171,
    sentence: "一度も",
    meaning: "한 번도.",
    words: [
      { kanji: "一度", hiragana: "いちど", meaning: "한 번", dictionary: "一度", type: "noun" },
    ]
  },
  {
    id: 172,
    sentence: "話したことなかった",
    meaning: "이야기해 본 적 없었어.",
    words: [
      { kanji: "話す", hiragana: "はなす", meaning: "말하다", dictionary: "話す", type: "verb" },
    ]
  },
  {
    id: 173,
    sentence: "何も知らないし",
    meaning: "아무것도 모르고.",
    words: [
      { kanji: "何も", hiragana: "なにも", meaning: "아무것도", dictionary: "何も", type: "expression" },
      { kanji: "知る", hiragana: "しる", meaning: "알다", dictionary: "知る", type: "verb" },
    ]
  },
  {
    id: 174,
    sentence: "話してみたいなって",
    meaning: "이야기해 보고 싶다고.",
    words: [
      { kanji: "話す", hiragana: "はなす", meaning: "말하다", dictionary: "話す", type: "verb" },
    ]
  },
  {
    id: 175,
    sentence: "最初はそれだけだった",
    meaning: "처음엔 그것뿐이었어.",
    words: [
      { kanji: "最初", hiragana: "さいしょ", meaning: "처음", dictionary: "最初", type: "noun" },
    ]
  },
  {
    id: 176,
    sentence: "一緒に過ごしてみて",
    meaning: "함께 지내 보니.",
    words: [
      { kanji: "一緒", hiragana: "いっしょ", meaning: "함께", dictionary: "一緒", type: "noun" },
      { kanji: "過ごす", hiragana: "すごす", meaning: "지내다", dictionary: "過ごす", type: "verb" },
    ]
  },
  {
    id: 177,
    sentence: "日置の面白いところも",
    meaning: "히오키의 재미있는 점도.",
    words: [
      { kanji: "面白い", hiragana: "おもしろい", meaning: "재미있다", dictionary: "面白い", type: "adjective" },
    ]
  },
  {
    id: 178,
    sentence: "抜けてて可愛いところも",
    meaning: "조금 덜렁대서 귀여운 점도.",
    words: [
      { kanji: "抜ける", hiragana: "ぬける", meaning: "덜렁대다", dictionary: "抜ける", type: "verb" },
      { kanji: "可愛い", hiragana: "かわいい", meaning: "귀엽다", dictionary: "可愛い", type: "adjective" },
    ]
  },
  {
    id: 179,
    sentence: "いいなって",
    meaning: "좋다고.",
    words: []
  },
  {
    id: 180,
    sentence: "もしよかったら",
    meaning: "혹시 괜찮다면.",
    words: []
  },
  {
    id: 181,
    sentence: "てか、そんなに緊張するんだったら、みんなで来ればよかったじゃん！",
    meaning: "그렇게 긴장할 거면 다 같이 오면 됐잖아!",
    words: [
      { kanji: "緊張する", hiragana: "きんちょうする", meaning: "긴장하다", dictionary: "緊張する", type: "verb" },
      { kanji: "来る", hiragana: "くる", meaning: "오다", dictionary: "来る", type: "verb" },
    ]
  },
  {
    id: 182,
    sentence: "このままでいさせて",
    meaning: "이대로 있게 해줘.",
    words: []
  },
  {
    id: 183,
    sentence: "でも、俺本当に誰とも話したことなくて",
    meaning: "근데, 나 진짜로 누구와도 이야기해 본 적이 없어서.",
    words: [
      { kanji: "本当に", hiragana: "ほんとうに", meaning: "진짜로", dictionary: "本当に", type: "adverb" },
      { kanji: "話す", hiragana: "はなす", meaning: "말하다", dictionary: "話す", type: "verb" },
    ]
  },
  {
    id: 184,
    sentence: "つないでもいい？",
    meaning: "손 잡아도 돼?",
    words: []
  },
  {
    id: 185,
    sentence: "ただの友達じゃないって",
    meaning: "그냥 친구가 아니라고.",
    words: [
      { kanji: "友達", hiragana: "ともだち", meaning: "친구", dictionary: "友達", type: "noun" },
    ]
  },
  {
    id: 186,
    sentence: "今のは",
    meaning: "방금 그건.",
    words: [
      { kanji: "今", hiragana: "いま", meaning: "지금", dictionary: "今", type: "noun" },
    ]
  },
  {
    id: 187,
    sentence: "遅いよ",
    meaning: "늦었어.",
    words: [
      { kanji: "遅い", hiragana: "おそい", meaning: "늦다, 느리다", dictionary: "遅い", type: "adjective" },
    ]
  },
  {
    id: 188,
    sentence: "なんか意味深",
    meaning: "뭔가 의미심장해.",
    words: [
      { kanji: "意味深", hiragana: "いみしん", meaning: "의미심장", dictionary: "意味深", type: "noun" },
    ]
  },
  {
    id: 189,
    sentence: "何を考えているのか、友達なのに全然わからない",
    meaning: "무슨 생각을 하는지, 친구인데 전혀 모르겠어.",
    words: [
      { kanji: "何", hiragana: "なに", meaning: "무엇", dictionary: "何", type: "noun" },
      { kanji: "考える", hiragana: "かんがえる", meaning: "생각하다", dictionary: "考える", type: "verb" },
      { kanji: "友達", hiragana: "ともだち", meaning: "친구", dictionary: "友達", type: "noun" },
      { kanji: "全然", hiragana: "ぜんぜん", meaning: "전혀", dictionary: "全然", type: "adverb" },
      { kanji: "わかる", hiragana: "わかる", meaning: "알다, 이해하다", dictionary: "わかる", type: "verb" },
    ]
  },
  {
    id: 190,
    sentence: "きれいでしょ / きれいだね / でしょ",
    meaning: "예쁘지? / 예쁘네 / 그렇지?",
    words: [
      { kanji: "きれい", hiragana: "きれい", meaning: "예쁘다, 깨끗하다", dictionary: "きれい", type: "adjective" },
    ]
  },
  {
    id: 191,
    sentence: "てか、行こ？",
    meaning: "그나저나, 가자?",
    words: []
  },
  {
    id: 192,
    sentence: "みんな待ってるし",
    meaning: "다들 기다리고 있고.",
    words: [
      { kanji: "待つ", hiragana: "まつ", meaning: "기다리다", dictionary: "待つ", type: "verb" },
    ]
  },
  {
    id: 193,
    sentence: "えっ聞いてる？",
    meaning: "어? 듣고 있어?",
    words: [
      { kanji: "聞く", hiragana: "きく", meaning: "듣다, 묻다", dictionary: "聞く", type: "verb" },
    ]
  },
  {
    id: 194,
    sentence: "ちょ、何？",
    meaning: "야, 뭐야?",
    words: [
      { kanji: "何", hiragana: "なに", meaning: "무엇", dictionary: "何", type: "noun" },
    ]
  },
  {
    id: 195,
    sentence: "言うこと聞かないから、強制連行",
    meaning: "말을 안 들으니까, 강제 연행.",
    words: [
      { kanji: "言う", hiragana: "いう", meaning: "말하다", dictionary: "言う", type: "verb" },
      { kanji: "聞く", hiragana: "きく", meaning: "듣다, 묻다", dictionary: "聞く", type: "verb" },
      { kanji: "強制", hiragana: "きょうせい", meaning: "강제", dictionary: "強制", type: "noun" },
      { kanji: "連行", hiragana: "れんこう", meaning: "연행", dictionary: "連行", type: "noun" },
    ]
  },
  {
    id: 196,
    sentence: "でっけぇ赤ちゃんだな",
    meaning: "엄청 큰 애기네.",
    words: [
      { kanji: "赤ちゃん", hiragana: "あかちゃん", meaning: "아기", dictionary: "赤ちゃん", type: "noun" },
      { kanji: "でかい", hiragana: "でかい", meaning: "크다", dictionary: "でかい", type: "adjective" },
    ]
  },
  {
    id: 197,
    sentence: "おいそこ写真禁止",
    meaning: "야 거기 사진 금지.",
    words: [
      { kanji: "写真", hiragana: "しゃしん", meaning: "사진", dictionary: "写真", type: "noun" },
      { kanji: "禁止", hiragana: "きんし", meaning: "금지", dictionary: "禁止", type: "noun" },
    ]
  },
  {
    id: 198,
    sentence: "気になる子ができた",
    meaning: "마음에 두는 애가 생겼어.",
    words: [
      { kanji: "気になる", hiragana: "きになる", meaning: "신경 쓰이다", dictionary: "気になる", type: "expression" },
    ]
  },
  {
    id: 199,
    sentence: "渡会ってどんな人？",
    meaning: "와타라이는 어떤 사람이야?",
    words: []
  },
  {
    id: 200,
    sentence: "そうなの？なんか意外、なんで？",
    meaning: "그래? 왠지 의외인데, 왜?",
    words: [
      { kanji: "意外", hiragana: "いがい", meaning: "의외", dictionary: "意外", type: "noun" },
    ]
  },
  {
    id: 201,
    sentence: "日置のことが好き",
    meaning: "히오키를 좋아해.",
    words: [
      { kanji: "好き", hiragana: "すき", meaning: "좋아함", dictionary: "好き", type: "adjective" },
    ]
  },
  {
    id: 202,
    sentence: "その、恋愛的に？",
    meaning: "그게, 연애적으로?",
    words: [
      { kanji: "恋愛", hiragana: "れんあい", meaning: "연애", dictionary: "恋愛", type: "noun" },
    ]
  },
  {
    id: 203,
    sentence: "ごめん。本当は言うつもりなかったんだけど、困らせたよね",
    meaning: "미안. 사실 말할 생각 없었는데, 곤란하게 했지.",
    words: [
      { kanji: "本当は", hiragana: "ほんとうは", meaning: "사실은, 원래는", dictionary: "本当は", type: "adverb" },
      { kanji: "言う", hiragana: "いう", meaning: "말하다", dictionary: "言う", type: "verb" },
      { kanji: "困らせる", hiragana: "こまらせる", meaning: "곤란하게 만들다", dictionary: "困らせる", type: "verb" },
    ]
  },
  {
    id: 204,
    sentence: "気にしなくていいから、冷やしたタオル持ってくるよ",
    meaning: "신경 안 써도 되니까, 시원하게 한 수건 가져올게.",
    words: [
      { kanji: "気にする", hiragana: "きにする", meaning: "신경 쓰다", dictionary: "気にする", type: "verb" },
      { kanji: "冷やす", hiragana: "ひやす", meaning: "차갑게/시원하게 하다", dictionary: "冷やす", type: "verb" },
      { kanji: "持ってくる", hiragana: "もってくる", meaning: "가져오다", dictionary: "持ってくる", type: "expression" },
    ]
  },
  {
    id: 205,
    sentence: "待って！",
    meaning: "기다려!",
    words: [
      { kanji: "待つ", hiragana: "まつ", meaning: "기다리다", dictionary: "待つ", type: "verb" },
    ]
  },
  {
    id: 206,
    sentence: "俺にとっては、忘れられないこと、嬉しかった",
    meaning: "나한테는, 잊지 못할 만큼 기쁜 일이었어.",
    words: [
      { kanji: "忘れる", hiragana: "わすれる", meaning: "잊다", dictionary: "忘れる", type: "verb" },
      { kanji: "嬉しい", hiragana: "うれしい", meaning: "기쁘다", dictionary: "嬉しい", type: "adjective" },
    ]
  },
  {
    id: 207,
    sentence: "それから、最初はただ話してみたいって思った",
    meaning: "그리고, 처음엔 그냥 이야기해 보고 싶다고 생각했어.",
    words: [
      { kanji: "最初", hiragana: "さいしょ", meaning: "처음", dictionary: "最初", type: "noun" },
      { kanji: "話す", hiragana: "はなす", meaning: "말하다", dictionary: "話す", type: "verb" },
      { kanji: "思う", hiragana: "おもう", meaning: "생각하다", dictionary: "思う", type: "verb" },
    ]
  },
  {
    id: 208,
    sentence: "こうして俺は、修学旅行で気になる子と同じグループになった",
    meaning: "이렇게 해서 나는, 수학여행에서 마음에 두던 애와 같은 그룹이 됐다.",
    words: [
      { kanji: "修学旅行", hiragana: "しゅうがくりょこう", meaning: "수학여행", dictionary: "修学旅行", type: "noun" },
      { kanji: "気になる", hiragana: "きになる", meaning: "신경 쓰이다", dictionary: "気になる", type: "expression" },
      { kanji: "同じ", hiragana: "おなじ", meaning: "같은", dictionary: "同じ", type: "adjective" },
      { kanji: "グループ", hiragana: "グループ", meaning: "그룹", dictionary: "グループ", type: "noun" },
    ]
  },
  {
    id: 209,
    sentence: "ほかのメンバーって",
    meaning: "다른 멤버는.",
    words: []
  },
  {
    id: 210,
    sentence: "ないんだけど、一人もしゃべったことない",
    meaning: "없는데, 한 명도 이야기해 본 적 없어.",
    words: [
      { kanji: "一人", hiragana: "ひとり", meaning: "한 명, 혼자", dictionary: "一人", type: "noun" },
    ]
  },
  {
    id: 211,
    sentence: "この4人ってもしかしてこの学校で一番目立ってるグループじゃない？",
    meaning: "이 4명, 혹시 이 학교에서 제일 눈에 띄는 그룹 아니야?",
    words: [
      { kanji: "学校", hiragana: "がっこう", meaning: "학교", dictionary: "学校", type: "noun" },
      { kanji: "一番", hiragana: "いちばん", meaning: "가장, 제일", dictionary: "一番", type: "adverb" },
      { kanji: "目立つ", hiragana: "めだつ", meaning: "눈에 띄다", dictionary: "目立つ", type: "verb" },
      { kanji: "4人", hiragana: "よにん", meaning: "네 명", dictionary: "4人", type: "noun" },
      { kanji: "グループ", hiragana: "グループ", meaning: "그룹", dictionary: "グループ", type: "noun" },
    ]
  },
  {
    id: 212,
    sentence: "入るなんて",
    meaning: "들어간다니.",
    words: [
      { kanji: "入る", hiragana: "はいる", meaning: "들어가다", dictionary: "入る", type: "verb" },
    ]
  },
  {
    id: 213,
    sentence: "歓迎されてなくない？",
    meaning: "환영받지 못하는 거 아니야?",
    words: [
      { kanji: "歓迎する", hiragana: "かんげいする", meaning: "환영하다", dictionary: "歓迎する", type: "verb" },
    ]
  },
  {
    id: 214,
    sentence: "なんかみんな困ってるみたいだけど、これって何かの間違い？",
    meaning: "다들 곤란해하는 것 같은데, 이거 뭔가 잘못된 거 아니야?",
    words: [
      { kanji: "困る", hiragana: "こまる", meaning: "곤란하다", dictionary: "困る", type: "verb" },
      { kanji: "間違い", hiragana: "まちがい", meaning: "잘못, 실수", dictionary: "間違い", type: "noun" },
    ]
  },
  {
    id: 215,
    sentence: "みんな合意の上だよ",
    meaning: "다들 합의한 거야.",
    words: [
      { kanji: "合意", hiragana: "ごうい", meaning: "합의", dictionary: "合意", type: "noun" },
    ]
  },
  {
    id: 216,
    sentence: "仕事の関係で遅れました。",
    meaning: "업무 관계로 늦었습니다.",
    words: [
      { kanji: "仕事", hiragana: "しごと", meaning: "일, 직업", dictionary: "仕事", type: "noun" },
      { kanji: "関係", hiragana: "かんけい", meaning: "관계", dictionary: "関係", type: "noun" },
      { kanji: "遅れる", hiragana: "おくれる", meaning: "늦다", dictionary: "遅れる", type: "verb" },
    ]
  },
  {
    id: 217,
    sentence: "私には関係ないことです。",
    meaning: "저랑은 관계없는 일입니다.",
    words: [
      { kanji: "私", hiragana: "わたし", meaning: "나, 저", dictionary: "私", type: "noun" },
      { kanji: "関係", hiragana: "かんけい", meaning: "관계", dictionary: "関係", type: "noun" },
    ]
  },
  {
    id: 218,
    sentence: "関係者各位",
    meaning: "관계자 여러분",
    words: [
      { kanji: "関係者", hiragana: "かんけいしゃ", meaning: "관계자", dictionary: "関係者", type: "noun" },
      { kanji: "各位", hiragana: "かくい", meaning: "각위, 여러분", dictionary: "各位", type: "noun" },
    ]
  },
  {
    id: 219,
    sentence: "気を使わないでください。",
    meaning: "신경 쓰지 마세요.",
    words: [
      { kanji: "気を使う", hiragana: "きをつかう", meaning: "신경 쓰다", dictionary: "気を使う", type: "expression" },
    ]
  },
  {
    id: 220,
    sentence: "彼女は僕にすごく尽くしてくれる。",
    meaning: "그녀는 나에게 정말 잘해준다(헌신해준다).",
    words: [
      { kanji: "彼女", hiragana: "かのじょ", meaning: "그녀, 여자친구", dictionary: "彼女", type: "noun" },
      { kanji: "僕", hiragana: "ぼく", meaning: "나(남성 1인칭, 부드러운 표현)", dictionary: "僕", type: "noun" },
      { kanji: "尽くす", hiragana: "つくす", meaning: "헌신하다", dictionary: "尽くす", type: "verb" },
    ]
  },
  {
    id: 221,
    sentence: "友達としての正解が分からなくて、悩んでいるんだ。",
    meaning: "친구로서의 정답을 몰라서, 고민하고 있어.",
    words: [
      { kanji: "友達", hiragana: "ともだち", meaning: "친구", dictionary: "友達", type: "noun" },
      { kanji: "正解", hiragana: "せいかい", meaning: "정답", dictionary: "正解", type: "noun" },
      { kanji: "分かる", hiragana: "わかる", meaning: "알다, 이해하다", dictionary: "分かる", type: "verb" },
      { kanji: "悩む", hiragana: "なやむ", meaning: "고민하다", dictionary: "悩む", type: "verb" },
    ]
  },
  {
    id: 222,
    sentence: "付き合い方がわからない。",
    meaning: "사귀는 방법을 모르겠어.",
    words: [
      { kanji: "付き合い方", hiragana: "つきあいかた", meaning: "사귀는 방법, 교제 방식", dictionary: "付き合い方", type: "noun" },
      { kanji: "わかる", hiragana: "わかる", meaning: "알다, 이해하다", dictionary: "わかる", type: "verb" },
    ]
  },
  {
    id: 223,
    sentence: "距離感がつかめない。",
    meaning: "거리감을 잡을 수가 없어.",
    words: [
      { kanji: "距離感", hiragana: "きょりかん", meaning: "거리감", dictionary: "距離感", type: "noun" },
      { kanji: "掴む", hiragana: "つかむ", meaning: "잡다, 쥐다", dictionary: "掴む", type: "verb" },
      { kanji: "つかむ", hiragana: "つかむ", meaning: "잡다", dictionary: "つかむ", type: "verb" },
    ]
  },
  {
    id: 224,
    sentence: "無理して一人行動しなくていいのに。",
    meaning: "무리해서 혼자 행동하지 않아도 되는데.",
    words: [
      { kanji: "無理する", hiragana: "むりする", meaning: "무리하다", dictionary: "無理する", type: "verb" },
      { kanji: "一人行動", hiragana: "ひとりこうどう", meaning: "혼자 행동함", dictionary: "一人行動", type: "noun" },
    ]
  },
  {
    id: 225,
    sentence: "最近はスマホをあまり使いません。",
    meaning: "최근에는 스마트폰을 별로 사용하지 않습니다.",
    words: [
      { kanji: "最近", hiragana: "さいきん", meaning: "최근", dictionary: "最近", type: "noun" },
      { kanji: "使う", hiragana: "つかう", meaning: "사용하다", dictionary: "使う", type: "verb" },
      { kanji: "スマホ", hiragana: "スマホ", meaning: "스마트폰", dictionary: "スマホ", type: "noun" },
    ]
  },
  {
    id: 226,
    sentence: "これはもう使わない物です。",
    meaning: "이건 이제 안 쓰는 물건입니다.",
    words: [
      { kanji: "使う", hiragana: "つかう", meaning: "사용하다", dictionary: "使う", type: "verb" },
      { kanji: "物", hiragana: "もの", meaning: "물건", dictionary: "物", type: "noun" },
    ]
  },
  {
    id: 227,
    sentence: "お金を全然使いません。",
    meaning: "돈을 전혀 쓰지 않습니다.",
    words: [
      { kanji: "お金", hiragana: "おかね", meaning: "돈", dictionary: "お金", type: "noun" },
      { kanji: "全然", hiragana: "ぜんぜん", meaning: "전혀", dictionary: "全然", type: "adverb" },
      { kanji: "使う", hiragana: "つかう", meaning: "사용하다", dictionary: "使う", type: "verb" },
    ]
  },
  {
    id: 228,
    sentence: "時間を無駄に使わないでください。",
    meaning: "시간을 헛되이 쓰지 마세요.",
    words: [
      { kanji: "時間", hiragana: "じかん", meaning: "시간", dictionary: "時間", type: "noun" },
      { kanji: "無駄に", hiragana: "むだに", meaning: "헛되이", dictionary: "無駄に", type: "adverb" },
      { kanji: "使う", hiragana: "つかう", meaning: "사용하다", dictionary: "使う", type: "verb" },
    ]
  },
  {
    id: 229,
    sentence: "そんな悪い言葉は使っちゃだめだよ。",
    meaning: "그런 나쁜 말은 쓰면 안 돼.",
    words: [
      { kanji: "悪い", hiragana: "わるい", meaning: "나쁘다", dictionary: "悪い", type: "adjective" },
      { kanji: "言葉", hiragana: "ことば", meaning: "말", dictionary: "言葉", type: "noun" },
      { kanji: "使う", hiragana: "つかう", meaning: "사용하다", dictionary: "使う", type: "verb" },
    ]
  },
  {
    id: 230,
    sentence: "難しい単語は使わないほうがいいです。",
    meaning: "어려운 단어는 쓰지 않는 게 좋습니다.",
    words: [
      { kanji: "難しい", hiragana: "むずかしい", meaning: "어렵다", dictionary: "難しい", type: "adjective" },
      { kanji: "単語", hiragana: "たんご", meaning: "단어", dictionary: "単語", type: "noun" },
      { kanji: "使う", hiragana: "つかう", meaning: "사용하다", dictionary: "使う", type: "verb" },
    ]
  },
  {
    id: 231,
    sentence: "背もたれを倒す。",
    meaning: "등받이를 눕히다(젖히다).",
    words: [
      { kanji: "背もたれ", hiragana: "せもたれ", meaning: "등받이", dictionary: "背もたれ", type: "noun" },
      { kanji: "倒す", hiragana: "たおす", meaning: "눕히다, 넘어뜨리다", dictionary: "倒す", type: "verb" },
    ]
  },
  {
    id: 232,
    sentence: "背もたれに寄りかかる。",
    meaning: "등받이에 기대다.",
    words: [
      { kanji: "背もたれ", hiragana: "せもたれ", meaning: "등받이", dictionary: "背もたれ", type: "noun" },
      { kanji: "寄りかかる", hiragana: "よりかかる", meaning: "기대다", dictionary: "寄りかかる", type: "verb" },
    ]
  },
  {
    id: 233,
    sentence: "背もたれを倒してもいいですか？",
    meaning: "등받이를 젖혀도 될까요?",
    words: [
      { kanji: "背もたれ", hiragana: "せもたれ", meaning: "등받이", dictionary: "背もたれ", type: "noun" },
      { kanji: "倒す", hiragana: "たおす", meaning: "눕히다, 넘어뜨리다", dictionary: "倒す", type: "verb" },
    ]
  },
  {
    id: 234,
    sentence: "椅子を使う。",
    meaning: "의자를 사용하다.",
    words: [
      { kanji: "椅子", hiragana: "いす", meaning: "의자", dictionary: "椅子", type: "noun" },
      { kanji: "使う", hiragana: "つかう", meaning: "사용하다", dictionary: "使う", type: "verb" },
    ]
  },
  {
    id: 235,
    sentence: "公園を散歩する。",
    meaning: "공원을 산책하다.",
    words: [
      { kanji: "公園", hiragana: "こうえん", meaning: "공원", dictionary: "公園", type: "noun" },
      { kanji: "散歩する", hiragana: "さんぽする", meaning: "산책하다", dictionary: "散歩する", type: "verb" },
    ]
  },
  {
    id: 236,
    sentence: "道を渡る。",
    meaning: "길을 건너다.",
    words: [
      { kanji: "道", hiragana: "みち", meaning: "길", dictionary: "道", type: "noun" },
      { kanji: "渡る", hiragana: "わたる", meaning: "건너다", dictionary: "渡る", type: "verb" },
    ]
  },
  {
    id: 237,
    sentence: "空を飛ぶ。",
    meaning: "하늘을 날다.",
    words: [
      { kanji: "空", hiragana: "そら", meaning: "하늘", dictionary: "空", type: "noun" },
      { kanji: "飛ぶ", hiragana: "とぶ", meaning: "날다", dictionary: "飛ぶ", type: "verb" },
    ]
  },
  {
    id: 238,
    sentence: "世界は広い。",
    meaning: "세계는 넓다.",
    words: [
      { kanji: "世界", hiragana: "せかい", meaning: "세계", dictionary: "世界", type: "noun" },
      { kanji: "広い", hiragana: "ひろい", meaning: "넓다", dictionary: "広い", type: "adjective" },
    ]
  },
  {
    id: 239,
    sentence: "これが正解だ。",
    meaning: "이게 정답이다.",
    words: [
      { kanji: "正解", hiragana: "せいかい", meaning: "정답", dictionary: "正解", type: "noun" },
    ]
  },
  {
    id: 240,
    sentence: "普段は何をしていますか？",
    meaning: "평소에는 뭘 하시나요?",
    words: [
      { kanji: "普段", hiragana: "ふだん", meaning: "평소", dictionary: "普段", type: "noun" },
      { kanji: "何", hiragana: "なに", meaning: "무엇", dictionary: "何", type: "noun" },
    ]
  },
  {
    id: 241,
    sentence: "普段はあまりお酒を飲みません。",
    meaning: "평소에는 술을 별로 안 마십니다.",
    words: [
      { kanji: "普段", hiragana: "ふだん", meaning: "평소", dictionary: "普段", type: "noun" },
      { kanji: "お酒", hiragana: "おさけ", meaning: "술", dictionary: "お酒", type: "noun" },
      { kanji: "飲む", hiragana: "のむ", meaning: "마시다", dictionary: "飲む", type: "verb" },
    ]
  },
  {
    id: 242,
    sentence: "普段はよく一人行動をします。",
    meaning: "평소에는 자주 혼자 행동합니다.",
    words: [
      { kanji: "普段", hiragana: "ふだん", meaning: "평소", dictionary: "普段", type: "noun" },
      { kanji: "一人行動", hiragana: "ひとりこうどう", meaning: "혼자 행동함", dictionary: "一人行動", type: "noun" },
    ]
  },
  {
    id: 243,
    sentence: "顔に何かついてる？そんなにじっと見られると、気を使っちゃうよ。",
    meaning: "얼굴에 뭐 묻었어? 그렇게 빤히 보면, 신경 쓰이잖아.",
    words: [
      { kanji: "顔", hiragana: "かお", meaning: "얼굴", dictionary: "顔", type: "noun" },
      { kanji: "何", hiragana: "なに", meaning: "무엇", dictionary: "何", type: "noun" },
      { kanji: "見る", hiragana: "みる", meaning: "보다", dictionary: "見る", type: "verb" },
      { kanji: "気を使う", hiragana: "きをつかう", meaning: "신경 쓰다", dictionary: "気を使う", type: "expression" },
    ]
  },
  {
    id: 244,
    sentence: "俺のこんにゃくいる？",
    meaning: "내 곤약, 먹을래?",
    words: [
      { kanji: "こんにゃく", hiragana: "こんにゃく", meaning: "곤약", dictionary: "こんにゃく", type: "noun" },
    ]
  },
  {
    id: 245,
    sentence: "このこんにゃくいる？",
    meaning: "이 곤약 먹을래?",
    words: [
      { kanji: "こんにゃく", hiragana: "こんにゃく", meaning: "곤약", dictionary: "こんにゃく", type: "noun" },
    ]
  },
  {
    id: 246,
    sentence: "俺のブロッコリーも食べる？",
    meaning: "내 브로콜리도 먹을래?",
    words: [
      { kanji: "食べる", hiragana: "たべる", meaning: "먹다", dictionary: "食べる", type: "verb" },
      { kanji: "ブロッコリー", hiragana: "ブロッコリー", meaning: "브로콜리", dictionary: "ブロッコリー", type: "noun" },
    ]
  },
  {
    id: 247,
    sentence: "別に怒ってないよ。",
    meaning: "딱히 화 안 났어.",
    words: [
      { kanji: "別に", hiragana: "べつに", meaning: "딱히, 별로", dictionary: "別に", type: "adverb" },
      { kanji: "怒る", hiragana: "おこる", meaning: "화나다", dictionary: "怒る", type: "verb" },
    ]
  },
  {
    id: 248,
    sentence: "別に興味はない。",
    meaning: "딱히 관심은 없어.",
    words: [
      { kanji: "別に", hiragana: "べつに", meaning: "딱히, 별로", dictionary: "別に", type: "adverb" },
      { kanji: "興味", hiragana: "きょうみ", meaning: "관심, 흥미", dictionary: "興味", type: "noun" },
    ]
  },
  {
    id: 249,
    sentence: "別に分けてください。",
    meaning: "따로 나눠 주세요.",
    words: [
      { kanji: "別に", hiragana: "べつに", meaning: "따로, 별도로", dictionary: "別に", type: "adverb" },
      { kanji: "分ける", hiragana: "わける", meaning: "나누다", dictionary: "分ける", type: "verb" },
    ]
  },
  {
    id: 250,
    sentence: "誰かに見られたら恥ずかしいよ。",
    meaning: "누군가에게 보이면 부끄러워.",
    words: [
      { kanji: "誰か", hiragana: "だれか", meaning: "누군가", dictionary: "誰か", type: "noun" },
      { kanji: "見る", hiragana: "みる", meaning: "보다", dictionary: "見る", type: "verb" },
      { kanji: "恥ずかしい", hiragana: "はずかしい", meaning: "부끄럽다", dictionary: "恥ずかしい", type: "adjective" },
    ]
  },
  {
    id: 251,
    sentence: "こんなところを見られたら困る。",
    meaning: "이런 모습을 보이면 곤란해.",
    words: [
      { kanji: "見る", hiragana: "みる", meaning: "보다", dictionary: "見る", type: "verb" },
      { kanji: "困る", hiragana: "こまる", meaning: "곤란하다", dictionary: "困る", type: "verb" },
    ]
  },
  {
    id: 252,
    sentence: "えっ、私たち同じ中学だったんだ！",
    meaning: "어? 우리 같은 중학교였구나!",
    words: [
      { kanji: "私たち", hiragana: "わたしたち", meaning: "우리", dictionary: "私たち", type: "noun" },
      { kanji: "同じ", hiragana: "おなじ", meaning: "같은", dictionary: "同じ", type: "adjective" },
      { kanji: "中学", hiragana: "ちゅうがく", meaning: "중학교", dictionary: "中学", type: "noun" },
    ]
  },
  {
    id: 253,
    sentence: "彼とは同じ中学だったけど、話したことはない。",
    meaning: "그와는 같은 중학교였지만, 이야기해 본 적은 없어.",
    words: [
      { kanji: "彼", hiragana: "かれ", meaning: "그(남자)", dictionary: "彼", type: "noun" },
      { kanji: "同じ", hiragana: "おなじ", meaning: "같은", dictionary: "同じ", type: "adjective" },
      { kanji: "中学", hiragana: "ちゅうがく", meaning: "중학교", dictionary: "中学", type: "noun" },
      { kanji: "話す", hiragana: "はなす", meaning: "말하다", dictionary: "話す", type: "verb" },
    ]
  },
  {
    id: 254,
    sentence: "二人は同じ中学だったの？",
    meaning: "두 사람은 같은 중학교였어?",
    words: [
      { kanji: "二人", hiragana: "ふたり", meaning: "두 사람", dictionary: "二人", type: "noun" },
      { kanji: "同じ", hiragana: "おなじ", meaning: "같은", dictionary: "同じ", type: "adjective" },
      { kanji: "中学", hiragana: "ちゅうがく", meaning: "중학교", dictionary: "中学", type: "noun" },
    ]
  },
  {
    id: 255,
    sentence: "確かに変だね。",
    meaning: "확실히 이상하네.",
    words: [
      { kanji: "確かに", hiragana: "たしかに", meaning: "확실히", dictionary: "確かに", type: "adverb" },
      { kanji: "変", hiragana: "へん", meaning: "이상함", dictionary: "変", type: "adjective" },
    ]
  },
  {
    id: 256,
    sentence: "確かにそうだ。",
    meaning: "확실히 그렇다.",
    words: [
      { kanji: "確かに", hiragana: "たしかに", meaning: "확실히", dictionary: "確かに", type: "adverb" },
    ]
  },
  {
    id: 257,
    sentence: "確か、同じ中学だったよね？",
    meaning: "분명, 같은 중학교였지?",
    words: [
      { kanji: "確か", hiragana: "たしか", meaning: "분명, 아마", dictionary: "確か", type: "adverb" },
      { kanji: "同じ", hiragana: "おなじ", meaning: "같은", dictionary: "同じ", type: "adjective" },
      { kanji: "中学", hiragana: "ちゅうがく", meaning: "중학교", dictionary: "中学", type: "noun" },
    ]
  },
  {
    id: 258,
    sentence: "内容を確かめる。",
    meaning: "내용을 확인하다.",
    words: [
      { kanji: "内容", hiragana: "ないよう", meaning: "내용", dictionary: "内容", type: "noun" },
      { kanji: "確かめる", hiragana: "たしかめる", meaning: "확인하다", dictionary: "確かめる", type: "verb" },
    ]
  },
  {
    id: 259,
    sentence: "このカメラ、いいね！",
    meaning: "이 카메라, 좋네!",
    words: [
      { kanji: "カメラ", hiragana: "カメラ", meaning: "카메라", dictionary: "カメラ", type: "noun" },
    ]
  },
  {
    id: 260,
    sentence: "ここで食べてもいい？",
    meaning: "여기서 먹어도 돼?",
    words: [
      { kanji: "食べる", hiragana: "たべる", meaning: "먹다", dictionary: "食べる", type: "verb" },
    ]
  },
  {
    id: 261,
    sentence: "私はブロッコリーが好きだよ。",
    meaning: "나는 브로콜리를 좋아해.",
    words: [
      { kanji: "私", hiragana: "わたし", meaning: "나, 저", dictionary: "私", type: "noun" },
      { kanji: "好き", hiragana: "すき", meaning: "좋아함", dictionary: "好き", type: "adjective" },
      { kanji: "ブロッコリー", hiragana: "ブロッコリー", meaning: "브로콜리", dictionary: "ブロッコリー", type: "noun" },
    ]
  },
  {
    id: 262,
    sentence: "君が好きだ！",
    meaning: "네가 좋아!",
    words: [
      { kanji: "君", hiragana: "きみ", meaning: "너, 당신", dictionary: "君", type: "noun" },
      { kanji: "好き", hiragana: "すき", meaning: "좋아함", dictionary: "好き", type: "adjective" },
    ]
  },
  {
    id: 263,
    sentence: "いい友達を持ったね。",
    meaning: "좋은 친구를 뒀네.",
    words: [
      { kanji: "友達", hiragana: "ともだち", meaning: "친구", dictionary: "友達", type: "noun" },
      { kanji: "持つ", hiragana: "もつ", meaning: "가지다, 들다", dictionary: "持つ", type: "verb" },
    ]
  },
  {
    id: 264,
    sentence: "決まりでいい？",
    meaning: "이걸로 정해도 돼?",
    words: [
      { kanji: "決まり", hiragana: "きまり", meaning: "결정, 규칙", dictionary: "決まり", type: "noun" },
    ]
  },
  {
    id: 265,
    sentence: "日置グループ、もう決まってる？",
    meaning: "히오키 그룹, 벌써 정해졌어?",
    words: [
      { kanji: "決まる", hiragana: "きまる", meaning: "정해지다", dictionary: "決まる", type: "verb" },
      { kanji: "グループ", hiragana: "グループ", meaning: "그룹", dictionary: "グループ", type: "noun" },
    ]
  },
  {
    id: 266,
    sentence: "まだ決まってないよ。",
    meaning: "아직 정해지지 않았어.",
    words: [
      { kanji: "決まる", hiragana: "きまる", meaning: "정해지다", dictionary: "決まる", type: "verb" },
    ]
  },
  {
    id: 267,
    sentence: "まだだけど、決まりだね。",
    meaning: "아직이지만, 정해진 거네.",
    words: [
      { kanji: "決まり", hiragana: "きまり", meaning: "결정, 규칙", dictionary: "決まり", type: "noun" },
    ]
  },
  {
    id: 268,
    sentence: "まだだけど、決まりっぽい。",
    meaning: "아직이지만, 정해진 것 같아.",
    words: [
      { kanji: "決まり", hiragana: "きまり", meaning: "결정, 규칙", dictionary: "決まり", type: "noun" },
    ]
  },
  {
    id: 269,
    sentence: "全然ダメじゃん。",
    meaning: "완전 안 되잖아.",
    words: [
      { kanji: "全然", hiragana: "ぜんぜん", meaning: "전혀", dictionary: "全然", type: "adverb" },
    ]
  },
  {
    id: 270,
    sentence: "何も始まってないよ。",
    meaning: "아무것도 시작되지 않았어.",
    words: [
      { kanji: "何も", hiragana: "なにも", meaning: "아무것도", dictionary: "何も", type: "expression" },
      { kanji: "始まる", hiragana: "はじまる", meaning: "시작되다", dictionary: "始まる", type: "verb" },
    ]
  },
  {
    id: 271,
    sentence: "私のこと、見てなくない？",
    meaning: "나를, 안 보고 있지 않아?",
    words: [
      { kanji: "私", hiragana: "わたし", meaning: "나, 저", dictionary: "私", type: "noun" },
      { kanji: "見る", hiragana: "みる", meaning: "보다", dictionary: "見る", type: "verb" },
    ]
  },
  {
    id: 272,
    sentence: "お互い、見てなくない？",
    meaning: "서로, 안 보고 있지 않아?",
    words: [
      { kanji: "お互い", hiragana: "おたがい", meaning: "서로", dictionary: "お互い", type: "noun" },
      { kanji: "見る", hiragana: "みる", meaning: "보다", dictionary: "見る", type: "verb" },
    ]
  },
  {
    id: 273,
    sentence: "困ったな。",
    meaning: "곤란하네.",
    words: [
      { kanji: "困る", hiragana: "こまる", meaning: "곤란하다", dictionary: "困る", type: "verb" },
    ]
  },
  {
    id: 274,
    sentence: "困らせないで。",
    meaning: "곤란하게 하지 마.",
    words: [
      { kanji: "困らせる", hiragana: "こまらせる", meaning: "곤란하게 만들다", dictionary: "困らせる", type: "verb" },
    ]
  },
  {
    id: 275,
    sentence: "絶対無理！",
    meaning: "절대 무리야!",
    words: [
      { kanji: "絶対", hiragana: "ぜったい", meaning: "절대", dictionary: "絶対", type: "adverb" },
      { kanji: "無理", hiragana: "むり", meaning: "무리, 불가능", dictionary: "無理", type: "noun" },
    ]
  },
  {
    id: 276,
    sentence: "逆に無理。",
    meaning: "오히려 무리야.",
    words: [
      { kanji: "逆に", hiragana: "ぎゃくに", meaning: "오히려", dictionary: "逆に", type: "adverb" },
      { kanji: "無理", hiragana: "むり", meaning: "무리, 불가능", dictionary: "無理", type: "noun" },
    ]
  },
  {
    id: 277,
    sentence: "マジで無理。",
    meaning: "진짜 무리야.",
    words: [
      { kanji: "無理", hiragana: "むり", meaning: "무리, 불가능", dictionary: "無理", type: "noun" },
      { kanji: "マジで", hiragana: "マジで", meaning: "진짜로", dictionary: "マジで", type: "adverb" },
    ]
  },
  {
    id: 278,
    sentence: "勝手に決めないでよ。",
    meaning: "마음대로 정하지 마.",
    words: [
      { kanji: "勝手に", hiragana: "かってに", meaning: "마음대로", dictionary: "勝手に", type: "adverb" },
      { kanji: "決める", hiragana: "きめる", meaning: "정하다", dictionary: "決める", type: "verb" },
    ]
  },
  {
    id: 279,
    sentence: "浮いてるんだけど。",
    meaning: "분위기에 안 맞아서 튀는데.",
    words: [
      { kanji: "浮く", hiragana: "うく", meaning: "뜨다, 겉돌다", dictionary: "浮く", type: "verb" },
    ]
  },
  {
    id: 280,
    sentence: "空気が重い。",
    meaning: "분위기가 무겁다.",
    words: [
      { kanji: "空気", hiragana: "くうき", meaning: "공기, 분위기", dictionary: "空気", type: "noun" },
      { kanji: "重い", hiragana: "おもい", meaning: "무겁다", dictionary: "重い", type: "adjective" },
    ]
  },
  {
    id: 281,
    sentence: "場違いな気がする。",
    meaning: "장소에 안 맞는 느낌이 들어.",
    words: [
      { kanji: "場違い", hiragana: "ばちがい", meaning: "장소에 안 맞음", dictionary: "場違い", type: "adjective" },
      { kanji: "気がする", hiragana: "きがする", meaning: "느낌이 들다", dictionary: "気がする", type: "expression" },
    ]
  },
  {
    id: 282,
    sentence: "私の思い込みかな？",
    meaning: "내 착각인가?",
    words: [
      { kanji: "私", hiragana: "わたし", meaning: "나, 저", dictionary: "私", type: "noun" },
      { kanji: "思い込み", hiragana: "おもいこみ", meaning: "착각, 믿음", dictionary: "思い込み", type: "noun" },
    ]
  },
  {
    id: 283,
    sentence: "私の勘違いじゃないよね？",
    meaning: "내 오해는 아니지?",
    words: [
      { kanji: "私", hiragana: "わたし", meaning: "나, 저", dictionary: "私", type: "noun" },
      { kanji: "勘違い", hiragana: "かんちがい", meaning: "오해, 착각", dictionary: "勘違い", type: "noun" },
    ]
  },
  {
    id: 284,
    sentence: "私の気のせいかな？",
    meaning: "내 기분 탓인가?",
    words: [
      { kanji: "私", hiragana: "わたし", meaning: "나, 저", dictionary: "私", type: "noun" },
      { kanji: "気のせい", hiragana: "きのせい", meaning: "기분 탓", dictionary: "気のせい", type: "noun" },
    ]
  },
  {
    id: 285,
    sentence: "こんなのありえないよ！",
    meaning: "이런 건 말도 안 돼!",
    words: [
      { kanji: "ありえない", hiragana: "ありえない", meaning: "있을 수 없다, 말도 안 되다", dictionary: "ありえない", type: "expression" },
    ]
  },
  {
    id: 286,
    sentence: "そんなわけないじゃん！",
    meaning: "그럴 리 없잖아!",
    words: []
  },
  {
    id: 287,
    sentence: "嘘ばっかり…",
    meaning: "거짓말만…",
    words: [
      { kanji: "嘘", hiragana: "うそ", meaning: "거짓말", dictionary: "嘘", type: "noun" },
    ]
  },
  {
    id: 288,
    sentence: "本当にそう思ってるの？",
    meaning: "진짜로 그렇게 생각하는 거야?",
    words: [
      { kanji: "本当に", hiragana: "ほんとうに", meaning: "진짜로", dictionary: "本当に", type: "adverb" },
      { kanji: "思う", hiragana: "おもう", meaning: "생각하다", dictionary: "思う", type: "verb" },
    ]
  },
  {
    id: 289,
    sentence: "えっ、ひいきされてるの？",
    meaning: "어, 편애받는 거야?",
    words: []
  },
  {
    id: 290,
    sentence: "そんなに気に入られたの？",
    meaning: "그렇게 마음에 들었던 거야?",
    words: [
      { kanji: "気に入る", hiragana: "きにいる", meaning: "마음에 들다", dictionary: "気に入る", type: "expression" },
    ]
  },
  {
    id: 291,
    sentence: "どこを見て言ってるの？",
    meaning: "어디를 보고 말하는 거야?",
    words: [
      { kanji: "見る", hiragana: "みる", meaning: "보다", dictionary: "見る", type: "verb" },
      { kanji: "言う", hiragana: "いう", meaning: "말하다", dictionary: "言う", type: "verb" },
    ]
  },
  {
    id: 292,
    sentence: "そんなわけないだろ。",
    meaning: "그럴 리 없잖아.",
    words: []
  },
  {
    id: 293,
    sentence: "決まったら、名前書くの？",
    meaning: "정해지면, 이름 쓰는 거야?",
    words: [
      { kanji: "決まる", hiragana: "きまる", meaning: "정해지다", dictionary: "決まる", type: "verb" },
      { kanji: "名前", hiragana: "なまえ", meaning: "이름", dictionary: "名前", type: "noun" },
      { kanji: "書く", hiragana: "かく", meaning: "쓰다", dictionary: "書く", type: "verb" },
    ]
  },
  {
    id: 294,
    sentence: "決まってから書くんだよね？",
    meaning: "정해지고 나서 쓰는 거지?",
    words: [
      { kanji: "決まる", hiragana: "きまる", meaning: "정해지다", dictionary: "決まる", type: "verb" },
      { kanji: "書く", hiragana: "かく", meaning: "쓰다", dictionary: "書く", type: "verb" },
    ]
  },
  {
    id: 295,
    sentence: "わかったよ。決まったから、紙に名前書けばいいんでしょ？",
    meaning: "알았어. 정해졌으니까, 종이에 이름 쓰면 되는 거지?",
    words: [
      { kanji: "決まる", hiragana: "きまる", meaning: "정해지다", dictionary: "決まる", type: "verb" },
      { kanji: "紙", hiragana: "かみ", meaning: "종이", dictionary: "紙", type: "noun" },
      { kanji: "名前", hiragana: "なまえ", meaning: "이름", dictionary: "名前", type: "noun" },
      { kanji: "書く", hiragana: "かく", meaning: "쓰다", dictionary: "書く", type: "verb" },
      { kanji: "わかる", hiragana: "わかる", meaning: "알다, 이해하다", dictionary: "わかる", type: "verb" },
    ]
  },
  {
    id: 296,
    sentence: "ちゃんと話を聞いて？",
    meaning: "제대로 얘기 좀 들어줄래?",
    words: [
      { kanji: "話", hiragana: "はなし", meaning: "이야기, 말", dictionary: "話", type: "noun" },
      { kanji: "聞く", hiragana: "きく", meaning: "듣다, 묻다", dictionary: "聞く", type: "verb" },
    ]
  },
  {
    id: 297,
    sentence: "名前、間違いないよね？",
    meaning: "이름, 틀림없지?",
    words: [
      { kanji: "名前", hiragana: "なまえ", meaning: "이름", dictionary: "名前", type: "noun" },
      { kanji: "間違い", hiragana: "まちがい", meaning: "잘못, 틀림", dictionary: "間違い", type: "noun" },
    ]
  },
  {
    id: 298,
    sentence: "これからよろしくね！",
    meaning: "앞으로 잘 부탁해!",
    words: []
  },
  {
    id: 299,
    sentence: "ま、まあ…よろしく。",
    meaning: "그, 그래... 잘 부탁해.",
    words: []
  },
  {
    id: 300,
    sentence: "あ…こんにちは！",
    meaning: "아... 안녕하세요!",
    words: []
  },
  {
    id: 301,
    sentence: "びっくりした…",
    meaning: "놀랐잖아...",
    words: []
  },
  {
    id: 302,
    sentence: "うん、ぐっすり寝れたよ。",
    meaning: "응, 푹 잘 잤어.",
    words: [
      { kanji: "寝る", hiragana: "ねる", meaning: "자다", dictionary: "寝る", type: "verb" },
    ]
  },
  {
    id: 303,
    sentence: "全然寝れなかったよ…",
    meaning: "전혀 못 잤어...",
    words: [
      { kanji: "全然", hiragana: "ぜんぜん", meaning: "전혀", dictionary: "全然", type: "adverb" },
      { kanji: "寝る", hiragana: "ねる", meaning: "자다", dictionary: "寝る", type: "verb" },
    ]
  },
  {
    id: 304,
    sentence: "昨日何時に寝た？",
    meaning: "어제 몇 시에 잤어?",
    words: [
      { kanji: "昨日", hiragana: "きのう", meaning: "어제", dictionary: "昨日", type: "noun" },
      { kanji: "寝る", hiragana: "ねる", meaning: "자다", dictionary: "寝る", type: "verb" },
    ]
  },
  {
    id: 305,
    sentence: "今日のこと考えたら、緊張しちゃって…",
    meaning: "오늘 일을 생각하니, 긴장돼서...",
    words: [
      { kanji: "今日", hiragana: "きょう", meaning: "오늘", dictionary: "今日", type: "noun" },
      { kanji: "考える", hiragana: "かんがえる", meaning: "생각하다", dictionary: "考える", type: "verb" },
      { kanji: "緊張する", hiragana: "きんちょうする", meaning: "긴장하다", dictionary: "緊張する", type: "verb" },
    ]
  },
  {
    id: 306,
    sentence: "なんか、気まずいな…",
    meaning: "뭔가, 분위기가 어색하네...",
    words: [
      { kanji: "気まずい", hiragana: "きまずい", meaning: "어색하다, 서먹하다", dictionary: "気まずい", type: "adjective" },
    ]
  },
  {
    id: 307,
    sentence: "めっちゃ気まずいんだけど。",
    meaning: "완전 어색한데.",
    words: [
      { kanji: "気まずい", hiragana: "きまずい", meaning: "어색하다, 서먹하다", dictionary: "気まずい", type: "adjective" },
    ]
  },
  {
    id: 308,
    sentence: "この沈黙、気まずいくない？",
    meaning: "이 침묵, 어색하지 않아?",
    words: [
      { kanji: "沈黙", hiragana: "ちんもく", meaning: "침묵", dictionary: "沈黙", type: "noun" },
      { kanji: "気まずい", hiragana: "きまずい", meaning: "어색하다", dictionary: "気まずい", type: "adjective" },
    ]
  },
  {
    id: 309,
    sentence: "まだちょっと気まずい仲だよね。",
    meaning: "아직 좀 어색한 사이지.",
    words: [
      { kanji: "気まずい", hiragana: "きまずい", meaning: "어색하다", dictionary: "気まずい", type: "adjective" },
      { kanji: "仲", hiragana: "なか", meaning: "사이, 관계", dictionary: "仲", type: "noun" },
    ]
  },
  {
    id: 310,
    sentence: "ありがとう、お言葉に甘えて…",
    meaning: "고마워, 그 말에 기대서(말씀대로)...",
    words: [
      { kanji: "言葉", hiragana: "ことば", meaning: "말", dictionary: "言葉", type: "noun" },
      { kanji: "甘える", hiragana: "あまえる", meaning: "어리광 부리다, (은혜에) 기대다", dictionary: "甘える", type: "verb" },
    ]
  },
  {
    id: 311,
    sentence: "ありがとう。じゃあ、少しだけ寝るね。",
    meaning: "고마워. 그럼, 잠깐만 잘게.",
    words: [
      { kanji: "少し", hiragana: "すこし", meaning: "조금", dictionary: "少し", type: "adverb" },
      { kanji: "寝る", hiragana: "ねる", meaning: "자다", dictionary: "寝る", type: "verb" },
    ]
  },
  {
    id: 312,
    sentence: "ごめんね。着いたら絶対起こしてね！",
    meaning: "미안해. 도착하면 꼭 깨워줘!",
    words: [
      { kanji: "着く", hiragana: "つく", meaning: "도착하다", dictionary: "着く", type: "verb" },
      { kanji: "絶対", hiragana: "ぜったい", meaning: "절대", dictionary: "絶対", type: "adverb" },
      { kanji: "起こす", hiragana: "おこす", meaning: "깨우다", dictionary: "起こす", type: "verb" },
    ]
  },
  {
    id: 313,
    sentence: "助かる、どうも。",
    meaning: "고마워, 도움이 됐어.",
    words: [
      { kanji: "助かる", hiragana: "たすかる", meaning: "도움이 되다, 살아나다", dictionary: "助かる", type: "verb" },
    ]
  },
  {
    id: 314,
    sentence: "ん…あ、もう着いたの？",
    meaning: "음... 아, 벌써 도착한 거야?",
    words: [
      { kanji: "着く", hiragana: "つく", meaning: "도착하다", dictionary: "着く", type: "verb" },
    ]
  },
  {
    id: 315,
    sentence: "ごめん、ぐっすり寝ちゃった…起こしてくれてありがとう。",
    meaning: "미안, 푹 자버렸어... 깨워줘서 고마워.",
    words: [
      { kanji: "寝る", hiragana: "ねる", meaning: "자다", dictionary: "寝る", type: "verb" },
      { kanji: "起こす", hiragana: "おこす", meaning: "깨우다", dictionary: "起こす", type: "verb" },
    ]
  },
  {
    id: 316,
    sentence: "あと5分…",
    meaning: "5분만 더...",
    words: [
      { kanji: "5分", hiragana: "ごふん", meaning: "5분", dictionary: "5分", type: "noun" },
    ]
  },
  {
    id: 317,
    sentence: "うっかり寝ちゃった…起こしてくれてありがとう。",
    meaning: "깜빡 잠들어버렸어... 깨워줘서 고마워.",
    words: [
      { kanji: "寝る", hiragana: "ねる", meaning: "자다", dictionary: "寝る", type: "verb" },
      { kanji: "起こす", hiragana: "おこす", meaning: "깨우다", dictionary: "起こす", type: "verb" },
    ]
  },
  {
    id: 318,
    sentence: "待たせたかな？ごめんね。",
    meaning: "기다리게 했나? 미안.",
    words: [
      { kanji: "待たせる", hiragana: "またせる", meaning: "기다리게 하다", dictionary: "待たせる", type: "verb" },
    ]
  },
  {
    id: 319,
    sentence: "ご、ごめん！わざとじゃないんだ！",
    meaning: "미, 미안! 일부러 그런 거 아니야!",
    words: [
      { kanji: "わざと", hiragana: "わざと", meaning: "일부러", dictionary: "わざと", type: "adverb" },
    ]
  },
  {
    id: 320,
    sentence: "もう合わせる顔がない…",
    meaning: "이제 볼 낯이 없어...",
    words: [
      { kanji: "合わせる", hiragana: "あわせる", meaning: "맞추다", dictionary: "合わせる", type: "verb" },
      { kanji: "顔", hiragana: "かお", meaning: "얼굴", dictionary: "顔", type: "noun" },
    ]
  },
  {
    id: 321,
    sentence: "肩、凝ってない？",
    meaning: "어깨, 안 뻐근해?",
    words: [
      { kanji: "肩", hiragana: "かた", meaning: "어깨", dictionary: "肩", type: "noun" },
      { kanji: "凝る", hiragana: "こる", meaning: "뻐근하다, 뭉치다", dictionary: "凝る", type: "verb" },
    ]
  },
  {
    id: 322,
    sentence: "肩、痛くない？",
    meaning: "어깨, 안 아파?",
    words: [
      { kanji: "肩", hiragana: "かた", meaning: "어깨", dictionary: "肩", type: "noun" },
      { kanji: "痛い", hiragana: "いたい", meaning: "아프다", dictionary: "痛い", type: "adjective" },
    ]
  },
  {
    id: 323,
    sentence: "しびれたりしてない？",
    meaning: "저리지는 않아?",
    words: [
      { kanji: "しびれる", hiragana: "しびれる", meaning: "저리다, 마비되다", dictionary: "しびれる", type: "verb" },
    ]
  },
  {
    id: 324,
    sentence: "てか、この四人って、この学校で一番顔面偏差値高くない？",
    meaning: "그나저나, 이 4명, 이 학교에서 제일 얼굴 편차치 높지 않아?",
    words: [
      { kanji: "四人", hiragana: "よにん", meaning: "네 명", dictionary: "四人", type: "noun" },
      { kanji: "学校", hiragana: "がっこう", meaning: "학교", dictionary: "学校", type: "noun" },
      { kanji: "一番", hiragana: "いちばん", meaning: "가장, 제일", dictionary: "一番", type: "adverb" },
      { kanji: "顔面", hiragana: "がんめん", meaning: "얼굴", dictionary: "顔面", type: "noun" },
      { kanji: "偏差値", hiragana: "へんさち", meaning: "편차치(평균 대비 수치)", dictionary: "偏差値", type: "noun" },
      { kanji: "高い", hiragana: "たかい", meaning: "높다", dictionary: "高い", type: "adjective" },
    ]
  },
  {
    id: 325,
    sentence: "どうすればいいんだ…",
    meaning: "어떻게 하면 좋을까...",
    words: []
  },
  {
    id: 326,
    sentence: "なんか、みんな困ってないけど。",
    meaning: "뭔가, 다들 곤란해하지 않는데.",
    words: [
      { kanji: "困る", hiragana: "こまる", meaning: "곤란하다", dictionary: "困る", type: "verb" },
    ]
  },
  {
    id: 327,
    sentence: "いやいや、無理！",
    meaning: "아니아니, 무리야!",
    words: [
      { kanji: "無理", hiragana: "むり", meaning: "무리, 불가능", dictionary: "無理", type: "noun" },
    ]
  },
  {
    id: 328,
    sentence: "俺はまだ入るなんて一言も…ていうか、そもそも…！",
    meaning: "나는 아직 들어간다는 말 한마디도... 그보다, 원래...!",
    words: [
      { kanji: "入る", hiragana: "はいる", meaning: "들어가다", dictionary: "入る", type: "verb" },
      { kanji: "一言", hiragana: "ひとこと", meaning: "한마디", dictionary: "一言", type: "noun" },
    ]
  },
  {
    id: 329,
    sentence: "全然歓迎されてなくない？",
    meaning: "전혀 환영받지 못하는 거 아니야?",
    words: [
      { kanji: "全然", hiragana: "ぜんぜん", meaning: "전혀", dictionary: "全然", type: "adverb" },
      { kanji: "歓迎する", hiragana: "かんげいする", meaning: "환영하다", dictionary: "歓迎する", type: "verb" },
    ]
  },
  {
    id: 330,
    sentence: "みんな(君の)ご贔屓だよ！",
    meaning: "다들 (네) 편애야!",
    words: [
      { kanji: "ご贔屓", hiragana: "ごひいき", meaning: "편애, 애호", dictionary: "ご贔屓", type: "noun" },
    ]
  },
  {
    id: 331,
    sentence: "どこがだよ！",
    meaning: "어디가!",
    words: []
  },
  {
    id: 332,
    sentence: "えっと…確か名前は渡会くんだね？",
    meaning: "음... 분명 이름이 와타라이였지?",
    words: [
      { kanji: "確か", hiragana: "たしか", meaning: "분명, 아마", dictionary: "確か", type: "adverb" },
      { kanji: "名前", hiragana: "なまえ", meaning: "이름", dictionary: "名前", type: "noun" },
    ]
  },
  {
    id: 333,
    sentence: "よろしくお願いします。",
    meaning: "잘 부탁드립니다.",
    words: [
      { kanji: "お願いする", hiragana: "おねがいする", meaning: "부탁하다", dictionary: "お願いする", type: "verb" },
    ]
  },
  {
    id: 334,
    sentence: "あ、気づいた。めちゃ見てる。手とか振った方がいいのかな？あ！来…",
    meaning: "아, 눈치챘다. 완전 보고 있어. 손이라도 흔드는 게 좋을까? 아! 온다...",
    words: [
      { kanji: "気づく", hiragana: "きづく", meaning: "눈치채다, 깨닫다", dictionary: "気づく", type: "verb" },
      { kanji: "手", hiragana: "て", meaning: "손", dictionary: "手", type: "noun" },
      { kanji: "振る", hiragana: "ふる", meaning: "흔들다", dictionary: "振る", type: "verb" },
      { kanji: "方", hiragana: "ほう", meaning: "쪽, 편", dictionary: "方", type: "noun" },
      { kanji: "来る", hiragana: "くる", meaning: "오다", dictionary: "来る", type: "verb" },
    ]
  },
  {
    id: 335,
    sentence: "ちょっと緊張して、あまり…",
    meaning: "조금 긴장해서, 별로...",
    words: [
      { kanji: "緊張する", hiragana: "きんちょうする", meaning: "긴장하다", dictionary: "緊張する", type: "verb" },
    ]
  },
  {
    id: 336,
    sentence: "気まずい。",
    meaning: "어색해.",
    words: [
      { kanji: "気まずい", hiragana: "きまずい", meaning: "어색하다", dictionary: "気まずい", type: "adjective" },
    ]
  },
  {
    id: 337,
    sentence: "寝てていいよ。着いたら起こすし。",
    meaning: "자고 있어도 돼. 도착하면 깨울게.",
    words: [
      { kanji: "寝る", hiragana: "ねる", meaning: "자다", dictionary: "寝る", type: "verb" },
      { kanji: "着く", hiragana: "つく", meaning: "도착하다", dictionary: "着く", type: "verb" },
      { kanji: "起こす", hiragana: "おこす", meaning: "깨우다", dictionary: "起こす", type: "verb" },
    ]
  },
  {
    id: 338,
    sentence: "あ、どうもありがとう。",
    meaning: "아, 정말 고마워.",
    words: []
  },
  {
    id: 339,
    sentence: "日置、着いたよ。起きて。",
    meaning: "히오키, 도착했어. 일어나.",
    words: [
      { kanji: "着く", hiragana: "つく", meaning: "도착하다", dictionary: "着く", type: "verb" },
      { kanji: "起きる", hiragana: "おきる", meaning: "일어나다", dictionary: "起きる", type: "verb" },
    ]
  },
  {
    id: 340,
    sentence: "しまった！ごめん。",
    meaning: "아차! 미안.",
    words: [
      { kanji: "しまった", hiragana: "しまった", meaning: "아차, 이런", dictionary: "しまった", type: "expression" },
    ]
  },
  {
    id: 341,
    sentence: "俺はなんと運が悪いんだ…よりによって学年一番の人気者の肩にもたれちゃうなんて…！",
    meaning: "나는 어쩜 이렇게 운이 없을까... 하필 학년 1등 인기인의 어깨에 기대버리다니...!",
    words: [
      { kanji: "学年", hiragana: "がくねん", meaning: "학년", dictionary: "学年", type: "noun" },
      { kanji: "一番", hiragana: "いちばん", meaning: "가장, 제일", dictionary: "一番", type: "adverb" },
      { kanji: "人気者", hiragana: "にんきもの", meaning: "인기인", dictionary: "人気者", type: "noun" },
      { kanji: "肩", hiragana: "かた", meaning: "어깨", dictionary: "肩", type: "noun" },
    ]
  },
  {
    id: 342,
    sentence: "本当に怪我とかない？",
    meaning: "진짜 다친 데 없어?",
    words: [
      { kanji: "本当に", hiragana: "ほんとうに", meaning: "진짜로", dictionary: "本当に", type: "adverb" },
      { kanji: "怪我", hiragana: "けが", meaning: "부상, 상처", dictionary: "怪我", type: "noun" },
    ]
  },
  {
    id: 343,
    sentence: "怒ってない。",
    meaning: "안 화났어.",
    words: [
      { kanji: "怒る", hiragana: "おこる", meaning: "화나다", dictionary: "怒る", type: "verb" },
    ]
  },
  {
    id: 344,
    sentence: "あのさ、一日目だと、覚えてる？旅館で眼鏡取りに行ったこと？",
    meaning: "있잖아, 첫째 날 말이야, 기억나? 여관에서 안경 찾으러 갔던 거?",
    words: [
      { kanji: "一日目", hiragana: "いちにちめ", meaning: "첫째 날", dictionary: "一日目", type: "noun" },
      { kanji: "覚える", hiragana: "おぼえる", meaning: "기억하다", dictionary: "覚える", type: "verb" },
      { kanji: "旅館", hiragana: "りょかん", meaning: "여관", dictionary: "旅館", type: "noun" },
      { kanji: "眼鏡", hiragana: "めがね", meaning: "안경", dictionary: "眼鏡", type: "noun" },
      { kanji: "取りに行く", hiragana: "とりにいく", meaning: "가지러 가다", dictionary: "取りに行く", type: "expression" },
    ]
  },
  {
    id: 345,
    sentence: "うっかり忘れてた",
    meaning: "깜빡 잊고 있었어.",
    words: [
      { kanji: "忘れる", hiragana: "わすれる", meaning: "잊다", dictionary: "忘れる", type: "verb" },
    ]
  },
  {
    id: 346,
    sentence: "すっかり忘れてた",
    meaning: "완전히 잊고 있었어.",
    words: [
      { kanji: "忘れる", hiragana: "わすれる", meaning: "잊다", dictionary: "忘れる", type: "verb" },
    ]
  },
  {
    id: 347,
    sentence: "あの話、まだ生きてたんだ。",
    meaning: "그 얘기, 아직 살아있었네.",
    words: [
      { kanji: "話", hiragana: "はなし", meaning: "이야기", dictionary: "話", type: "noun" },
      { kanji: "生きる", hiragana: "いきる", meaning: "살다", dictionary: "生きる", type: "verb" },
    ]
  },
  {
    id: 348,
    sentence: "じゃあ、一つお願いしてもいいかな？",
    meaning: "그럼, 한 가지 부탁해도 될까?",
    words: [
      { kanji: "一つ", hiragana: "ひとつ", meaning: "한 가지", dictionary: "一つ", type: "noun" },
      { kanji: "お願いする", hiragana: "おねがいする", meaning: "부탁하다", dictionary: "お願いする", type: "verb" },
    ]
  },
  {
    id: 349,
    sentence: "座ろう",
    meaning: "앉자.",
    words: [
      { kanji: "座る", hiragana: "すわる", meaning: "앉다", dictionary: "座る", type: "verb" },
    ]
  },
  {
    id: 350,
    sentence: "実は、修学旅行のグループ、日置を誘って言ったの、俺なんだよね。",
    meaning: "사실은, 수학여행 그룹에 히오키를 초대하자고 말한 거, 나야.",
    words: [
      { kanji: "修学旅行", hiragana: "しゅうがくりょこう", meaning: "수학여행", dictionary: "修学旅行", type: "noun" },
      { kanji: "誘う", hiragana: "さそう", meaning: "초대하다, 꾀다", dictionary: "誘う", type: "verb" },
      { kanji: "言う", hiragana: "いう", meaning: "말하다", dictionary: "言う", type: "verb" },
      { kanji: "グループ", hiragana: "グループ", meaning: "그룹", dictionary: "グループ", type: "noun" },
    ]
  },
  {
    id: 351,
    sentence: "ただ、俺が日置のこと、知りたくて...",
    meaning: "그냥, 내가 히오키에 대해 알고 싶어서...",
    words: [
      { kanji: "知る", hiragana: "しる", meaning: "알다", dictionary: "知る", type: "verb" },
    ]
  },
  {
    id: 352,
    sentence: "なんで今、そんな話を...",
    meaning: "왜 지금, 그런 얘기를...",
    words: [
      { kanji: "話", hiragana: "はなし", meaning: "이야기", dictionary: "話", type: "noun" },
    ]
  },
  {
    id: 353,
    sentence: "一度も話したことなかったから、何も知らないし。ただ話してみたいなって、最初はそれだけだった。",
    meaning: "한 번도 얘기해 본 적 없었으니까, 아무것도 모르고. 그냥 얘기해보고 싶다고, 처음엔 그것뿐이었어.",
    words: [
      { kanji: "一度", hiragana: "いちど", meaning: "한 번", dictionary: "一度", type: "noun" },
      { kanji: "話す", hiragana: "はなす", meaning: "말하다", dictionary: "話す", type: "verb" },
      { kanji: "何も", hiragana: "なにも", meaning: "아무것도", dictionary: "何も", type: "expression" },
      { kanji: "知る", hiragana: "しる", meaning: "알다", dictionary: "知る", type: "verb" },
      { kanji: "最初", hiragana: "さいしょ", meaning: "처음", dictionary: "最初", type: "noun" },
    ]
  },
  {
    id: 354,
    sentence: "でも実際一緒に過ごしてみて、この三日間、日置のことたくさん知れて...",
    meaning: "근데 실제로 함께 지내보니, 이 3일간 히오키에 대해 많이 알게 돼서...",
    words: [
      { kanji: "実際", hiragana: "じっさい", meaning: "실제로", dictionary: "実際", type: "adverb" },
      { kanji: "一緒", hiragana: "いっしょ", meaning: "함께", dictionary: "一緒", type: "noun" },
      { kanji: "過ごす", hiragana: "すごす", meaning: "지내다", dictionary: "過ごす", type: "verb" },
      { kanji: "三日間", hiragana: "みっかかん", meaning: "3일간", dictionary: "三日間", type: "noun" },
      { kanji: "知る", hiragana: "しる", meaning: "알다", dictionary: "知る", type: "verb" },
    ]
  },
  {
    id: 355,
    sentence: "日置の面白いところも、優しいところも、ちょっと抜けてて可愛いところも、なんかいいなって。",
    meaning: "히오키의 재밌는 점도, 다정한 점도, 조금 덜렁대서 귀여운 점도, 뭔가 좋다고.",
    words: [
      { kanji: "面白い", hiragana: "おもしろい", meaning: "재밌다", dictionary: "面白い", type: "adjective" },
      { kanji: "優しい", hiragana: "やさしい", meaning: "상냥하다", dictionary: "優しい", type: "adjective" },
      { kanji: "抜ける", hiragana: "ぬける", meaning: "덜렁대다", dictionary: "抜ける", type: "verb" },
      { kanji: "可愛い", hiragana: "かわいい", meaning: "귀엽다", dictionary: "可愛い", type: "adjective" },
    ]
  },
  {
    id: 356,
    sentence: "日置のこと、もっと知りたいって思った。だから、もしよかったら俺と…",
    meaning: "히오키에 대해, 더 알고 싶다고 생각했어. 그러니까, 혹시 괜찮다면 나랑...",
    words: [
      { kanji: "知る", hiragana: "しる", meaning: "알다", dictionary: "知る", type: "verb" },
      { kanji: "思う", hiragana: "おもう", meaning: "생각하다", dictionary: "思う", type: "verb" },
    ]
  },
  {
    id: 357,
    sentence: "なんか、この雰囲気...稀で...もしかして俺、告白されるの？",
    meaning: "뭔가, 이 분위기... 드물어서... 혹시 나, 고백받는 거야?",
    words: [
      { kanji: "雰囲気", hiragana: "ふんいき", meaning: "분위기", dictionary: "雰囲気", type: "noun" },
      { kanji: "稀", hiragana: "まれ", meaning: "드물다, 희귀하다", dictionary: "稀", type: "adjective" },
      { kanji: "告白する", hiragana: "こくはくする", meaning: "고백하다", dictionary: "告白する", type: "verb" },
    ]
  },
  {
    id: 358,
    sentence: "友達だから別にいいんだろうけど、でもこんなところ、もし渡会のファンに見られたら…マズい！",
    meaning: "친구니까 별로 상관없겠지만, 그래도 이런 모습, 혹시 와타라이 팬들한테 보이면... 큰일이야!",
    words: [
      { kanji: "友達", hiragana: "ともだち", meaning: "친구", dictionary: "友達", type: "noun" },
      { kanji: "別に", hiragana: "べつに", meaning: "별로", dictionary: "別に", type: "adverb" },
      { kanji: "見る", hiragana: "みる", meaning: "보다", dictionary: "見る", type: "verb" },
    ]
  },
  {
    id: 359,
    sentence: "あの、すみません。ちょっと日置借ります。",
    meaning: "저기, 죄송합니다. 잠시 히오키 좀 데려갈게요.",
    words: [
      { kanji: "借りる", hiragana: "かりる", meaning: "빌리다, 데려가다", dictionary: "借りる", type: "verb" },
    ]
  },
  {
    id: 360,
    sentence: "借りられた",
    meaning: "데려가졌다(끌려갔다).",
    words: [
      { kanji: "借りる", hiragana: "かりる", meaning: "빌리다", dictionary: "借りる", type: "verb" },
    ]
  },
  {
    id: 361,
    sentence: "運動部って意外じゃない？",
    meaning: "운동부라니 의외 아니야?",
    words: [
      { kanji: "運動部", hiragana: "うんどうぶ", meaning: "운동부", dictionary: "運動部", type: "noun" },
      { kanji: "意外", hiragana: "いがい", meaning: "의외", dictionary: "意外", type: "noun" },
    ]
  },
  {
    id: 362,
    sentence: "ああ、確かにあそこはちょっと勇気いる。",
    meaning: "아아, 확실히 거기는 좀 용기가 필요해.",
    words: [
      { kanji: "確かに", hiragana: "たしかに", meaning: "확실히", dictionary: "確かに", type: "adverb" },
      { kanji: "勇気", hiragana: "ゆうき", meaning: "용기", dictionary: "勇気", type: "noun" },
    ]
  },
  {
    id: 363,
    sentence: "俺、なんで呼ばれたの？",
    meaning: "나, 왜 불려 나온 거야?",
    words: [
      { kanji: "呼ぶ", hiragana: "よぶ", meaning: "부르다", dictionary: "呼ぶ", type: "verb" },
    ]
  },
  {
    id: 364,
    sentence: "さっき、何話してたの？",
    meaning: "아까, 무슨 얘기 하고 있었어?",
    words: [
      { kanji: "話す", hiragana: "はなす", meaning: "말하다", dictionary: "話す", type: "verb" },
    ]
  },
  {
    id: 365,
    sentence: "別に、何でもないよ。",
    meaning: "별로, 아무것도 아니야.",
    words: [
      { kanji: "別に", hiragana: "べつに", meaning: "별로", dictionary: "別に", type: "adverb" },
      { kanji: "何でも", hiragana: "なんでも", meaning: "아무것도, 무엇이든", dictionary: "何でも", type: "expression" },
    ]
  },
  {
    id: 366,
    sentence: "ただちょっと気になって…日置がすげー楽しそうだったから。",
    meaning: "그냥 좀 신경 쓰여서... 히오키가 너무 즐거워 보였으니까.",
    words: [
      { kanji: "気になる", hiragana: "きになる", meaning: "신경 쓰이다", dictionary: "気になる", type: "expression" },
      { kanji: "楽しい", hiragana: "たのしい", meaning: "즐겁다", dictionary: "楽しい", type: "adjective" },
    ]
  },
  {
    id: 367,
    sentence: "もしかして、嫉妬？",
    meaning: "혹시, 질투?",
    words: [
      { kanji: "嫉妬", hiragana: "しっと", meaning: "질투", dictionary: "嫉妬", type: "noun" },
    ]
  },
  {
    id: 368,
    sentence: "友達に嫉妬するの、ダメ？",
    meaning: "친구한테 질투하는 거, 안 돼?",
    words: [
      { kanji: "友達", hiragana: "ともだち", meaning: "친구", dictionary: "友達", type: "noun" },
      { kanji: "嫉妬する", hiragana: "しっとする", meaning: "질투하다", dictionary: "嫉妬する", type: "verb" },
    ]
  },
  {
    id: 369,
    sentence: "俺は本当は友達になるより前から、ずっと、この距離がもどかしかった。",
    meaning: "나는 사실 친구가 되기 전부터, 계속, 이 거리가 답답했어.",
    words: [
      { kanji: "本当は", hiragana: "ほんとうは", meaning: "사실은", dictionary: "本当は", type: "adverb" },
      { kanji: "距離", hiragana: "きょり", meaning: "거리", dictionary: "距離", type: "noun" },
    ]
  },
  {
    id: 370,
    sentence: "急にどうした？",
    meaning: "갑자기 왜 그래?",
    words: [
      { kanji: "急に", hiragana: "きゅうに", meaning: "갑자기", dictionary: "急に", type: "adverb" },
    ]
  },
  {
    id: 371,
    sentence: "寂しかったから、もう少しこのままでいさせて。",
    meaning: "외로웠으니까, 조금만 더 이대로 있게 해줘.",
    words: [
      { kanji: "寂しい", hiragana: "さびしい", meaning: "외롭다", dictionary: "寂しい", type: "adjective" },
    ]
  },
  {
    id: 372,
    sentence: "なに、この感じ…友達って、こういうことするのか？",
    meaning: "뭐야, 이 느낌... 친구라는 게, 이런 짓도 하는 거야?",
    words: [
      { kanji: "友達", hiragana: "ともだち", meaning: "친구", dictionary: "友達", type: "noun" },
    ]
  },
  {
    id: 373,
    sentence: "これは日置だけ。日置さ、友達とキスしてどう思う？",
    meaning: "이건 히오키만(특별해). 히오키, 친구랑 키스하면 어떻게 생각해?",
    words: [
      { kanji: "友達", hiragana: "ともだち", meaning: "친구", dictionary: "友達", type: "noun" },
      { kanji: "思う", hiragana: "おもう", meaning: "생각하다", dictionary: "思う", type: "verb" },
    ]
  },
  {
    id: 374,
    sentence: "それはダメだろ。",
    meaning: "그건 안 되지.",
    words: []
  },
  {
    id: 375,
    sentence: "大丈夫、まだしないって。でも、俺は言ったから。ただの友達じゃないって。",
    meaning: "괜찮아, 아직 안 한다니까. 근데, 나는 말했으니까. 그냥 친구가 아니라고.",
    words: [
      { kanji: "大丈夫", hiragana: "だいじょうぶ", meaning: "괜찮음", dictionary: "大丈夫", type: "adjective" },
      { kanji: "言う", hiragana: "いう", meaning: "말하다", dictionary: "言う", type: "verb" },
      { kanji: "友達", hiragana: "ともだち", meaning: "친구", dictionary: "友達", type: "noun" },
    ]
  },
  {
    id: 376,
    sentence: "何だったんだ、今のは？",
    meaning: "뭐였던 거야, 방금 그건?",
    words: []
  },
  {
    id: 377,
    sentence: "わからない。渡会が何を考えているのか。友達なのに、全然わからない。",
    meaning: "모르겠어. 와타라이가 무슨 생각을 하는지. 친구인데, 전혀 모르겠어.",
    words: [
      { kanji: "考える", hiragana: "かんがえる", meaning: "생각하다", dictionary: "考える", type: "verb" },
      { kanji: "友達", hiragana: "ともだち", meaning: "친구", dictionary: "友達", type: "noun" },
      { kanji: "全然", hiragana: "ぜんぜん", meaning: "전혀", dictionary: "全然", type: "adverb" },
      { kanji: "わかる", hiragana: "わかる", meaning: "알다, 이해하다", dictionary: "わかる", type: "verb" },
    ]
  },
  {
    id: 378,
    sentence: "髪が乱れる",
    meaning: "머리카락이 헝클어지다.",
    words: [
      { kanji: "髪", hiragana: "かみ", meaning: "머리카락", dictionary: "髪", type: "noun" },
      { kanji: "乱れる", hiragana: "みだれる", meaning: "헝클어지다", dictionary: "乱れる", type: "verb" },
    ]
  },
  {
    id: 379,
    sentence: "風で髪が乱れました",
    meaning: "바람 때문에 머리가 헝클어졌습니다.",
    words: [
      { kanji: "風", hiragana: "かぜ", meaning: "바람", dictionary: "風", type: "noun" },
      { kanji: "髪", hiragana: "かみ", meaning: "머리카락", dictionary: "髪", type: "noun" },
      { kanji: "乱れる", hiragana: "みだれる", meaning: "헝클어지다", dictionary: "乱れる", type: "verb" },
    ]
  },
  {
    id: 380,
    sentence: "状況を説明する",
    meaning: "상황을 설명하다.",
    words: [
      { kanji: "状況", hiragana: "じょうきょう", meaning: "상황", dictionary: "状況", type: "noun" },
      { kanji: "説明する", hiragana: "せつめいする", meaning: "설명하다", dictionary: "説明する", type: "verb" },
    ]
  },
  {
    id: 381,
    sentence: "状況が悪い",
    meaning: "상황이 좋지 않다.",
    words: [
      { kanji: "状況", hiragana: "じょうきょう", meaning: "상황", dictionary: "状況", type: "noun" },
      { kanji: "悪い", hiragana: "わるい", meaning: "나쁘다", dictionary: "悪い", type: "adjective" },
    ]
  },
  {
    id: 382,
    sentence: "今の状況はどうですか？",
    meaning: "지금 상황은 어떤가요?",
    words: [
      { kanji: "今", hiragana: "いま", meaning: "지금", dictionary: "今", type: "noun" },
      { kanji: "状況", hiragana: "じょうきょう", meaning: "상황", dictionary: "状況", type: "noun" },
    ]
  },
  {
    id: 383,
    sentence: "風が強くて、髪が乱れている状況です",
    meaning: "바람이 강해서, 머리가 흐트러진 상황입니다.",
    words: [
      { kanji: "風", hiragana: "かぜ", meaning: "바람", dictionary: "風", type: "noun" },
      { kanji: "強い", hiragana: "つよい", meaning: "강하다", dictionary: "強い", type: "adjective" },
      { kanji: "髪", hiragana: "かみ", meaning: "머리카락", dictionary: "髪", type: "noun" },
      { kanji: "乱れる", hiragana: "みだれる", meaning: "헝클어지다", dictionary: "乱れる", type: "verb" },
      { kanji: "状況", hiragana: "じょうきょう", meaning: "상황", dictionary: "状況", type: "noun" },
    ]
  },
  {
    id: 384,
    sentence: "髪が乱れ、服も汚れている",
    meaning: "머리가 헝클어지고, 옷도 더러워져 있다.",
    words: [
      { kanji: "髪", hiragana: "かみ", meaning: "머리카락", dictionary: "髪", type: "noun" },
      { kanji: "乱れる", hiragana: "みだれる", meaning: "헝클어지다", dictionary: "乱れる", type: "verb" },
      { kanji: "服", hiragana: "ふく", meaning: "옷", dictionary: "服", type: "noun" },
      { kanji: "汚れる", hiragana: "よごれる", meaning: "더러워지다", dictionary: "汚れる", type: "verb" },
    ]
  },
  {
    id: 385,
    sentence: "髪が乱れて恥ずかしい",
    meaning: "머리가 헝클어져서 부끄럽다.",
    words: [
      { kanji: "髪", hiragana: "かみ", meaning: "머리카락", dictionary: "髪", type: "noun" },
      { kanji: "乱れる", hiragana: "みだれる", meaning: "헝클어지다", dictionary: "乱れる", type: "verb" },
      { kanji: "恥ずかしい", hiragana: "はずかしい", meaning: "부끄럽다", dictionary: "恥ずかしい", type: "adjective" },
    ]
  },
  {
    id: 386,
    sentence: "誰かに見られてる気がする",
    meaning: "누군가에게 보이고 있는 느낌이 든다.",
    words: [
      { kanji: "誰か", hiragana: "だれか", meaning: "누군가", dictionary: "誰か", type: "noun" },
      { kanji: "見る", hiragana: "みる", meaning: "보다", dictionary: "見る", type: "verb" },
      { kanji: "気がする", hiragana: "きがする", meaning: "느낌이 들다", dictionary: "気がする", type: "expression" },
    ]
  },
  {
    id: 387,
    sentence: "常に人に見られてる仕事です",
    meaning: "항상 사람들의 시선을 받는 직업입니다.",
    words: [
      { kanji: "常に", hiragana: "つねに", meaning: "항상", dictionary: "常に", type: "adverb" },
      { kanji: "見る", hiragana: "みる", meaning: "보다", dictionary: "見る", type: "verb" },
      { kanji: "仕事", hiragana: "しごと", meaning: "일, 직업", dictionary: "仕事", type: "noun" },
    ]
  },
  {
    id: 388,
    sentence: "見られてるよな",
    meaning: "보고 있네 / 다 보고 있잖아.",
    words: [
      { kanji: "見る", hiragana: "みる", meaning: "보다", dictionary: "見る", type: "verb" },
    ]
  },
  {
    id: 389,
    sentence: "全然申し訳ないと思ってなさそう",
    meaning: "전혀 미안하다고 생각 안 하는 것 같아.",
    words: [
      { kanji: "全然", hiragana: "ぜんぜん", meaning: "전혀", dictionary: "全然", type: "adverb" },
      { kanji: "申し訳ない", hiragana: "もうしわけない", meaning: "미안하다, 죄송하다", dictionary: "申し訳ない", type: "adjective" },
      { kanji: "思う", hiragana: "おもう", meaning: "생각하다", dictionary: "思う", type: "verb" },
    ]
  },
  {
    id: 390,
    sentence: "本当はいいと思ってなさそう",
    meaning: "사실은 좋다고 생각 안 하는 것 같네.",
    words: [
      { kanji: "本当は", hiragana: "ほんとうは", meaning: "사실은", dictionary: "本当は", type: "adverb" },
      { kanji: "思う", hiragana: "おもう", meaning: "생각하다", dictionary: "思う", type: "verb" },
    ]
  },
  {
    id: 391,
    sentence: "多分、彼は転ばないと思ってなさそう",
    meaning: "아마 그는 자기가 안 넘어질 거라고 생각 안 하는 것 같아.",
    words: [
      { kanji: "多分", hiragana: "たぶん", meaning: "아마", dictionary: "多分", type: "adverb" },
      { kanji: "彼", hiragana: "かれ", meaning: "그", dictionary: "彼", type: "noun" },
      { kanji: "転ぶ", hiragana: "ころぶ", meaning: "넘어지다", dictionary: "転ぶ", type: "verb" },
      { kanji: "思う", hiragana: "おもう", meaning: "생각하다", dictionary: "思う", type: "verb" },
    ]
  },
  {
    id: 392,
    sentence: "今の状況、絶対やばいと思ってなさそう",
    meaning: "지금 상황이 절대 위험하다고 생각 안 하는 것 같네.",
    words: [
      { kanji: "今", hiragana: "いま", meaning: "지금", dictionary: "今", type: "noun" },
      { kanji: "状況", hiragana: "じょうきょう", meaning: "상황", dictionary: "状況", type: "noun" },
      { kanji: "絶対", hiragana: "ぜったい", meaning: "절대", dictionary: "絶対", type: "adverb" },
    ]
  },
  {
    id: 393,
    sentence: "多分、大丈夫です",
    meaning: "아마, 괜찮을 거예요.",
    words: [
      { kanji: "多分", hiragana: "たぶん", meaning: "아마", dictionary: "多分", type: "adverb" },
      { kanji: "大丈夫", hiragana: "だいじょうぶ", meaning: "괜찮음", dictionary: "大丈夫", type: "adjective" },
    ]
  },
  {
    id: 394,
    sentence: "多分、雨が降ります",
    meaning: "아마, 비가 올 거예요.",
    words: [
      { kanji: "多分", hiragana: "たぶん", meaning: "아마", dictionary: "多分", type: "adverb" },
      { kanji: "雨", hiragana: "あめ", meaning: "비", dictionary: "雨", type: "noun" },
      { kanji: "降る", hiragana: "ふる", meaning: "내리다", dictionary: "降る", type: "verb" },
    ]
  },
  {
    id: 395,
    sentence: "多分、そうだと思います",
    meaning: "아마 그럴 거라고 생각합니다.",
    words: [
      { kanji: "多分", hiragana: "たぶん", meaning: "아마", dictionary: "多分", type: "adverb" },
      { kanji: "思う", hiragana: "おもう", meaning: "생각하다", dictionary: "思う", type: "verb" },
    ]
  },
  {
    id: 396,
    sentence: "転ばないよ",
    meaning: "안 넘어질 거야.",
    words: [
      { kanji: "転ぶ", hiragana: "ころぶ", meaning: "넘어지다", dictionary: "転ぶ", type: "verb" },
    ]
  },
  {
    id: 397,
    sentence: "絶対に！",
    meaning: "절대로!",
    words: [
      { kanji: "絶対に", hiragana: "ぜったいに", meaning: "절대로", dictionary: "絶対に", type: "adverb" },
    ]
  },
  {
    id: 398,
    sentence: "絶対大丈夫です",
    meaning: "절대 괜찮습니다.",
    words: [
      { kanji: "絶対", hiragana: "ぜったい", meaning: "절대", dictionary: "絶対", type: "adverb" },
      { kanji: "大丈夫", hiragana: "だいじょうぶ", meaning: "괜찮음", dictionary: "大丈夫", type: "adjective" },
    ]
  },
  {
    id: 399,
    sentence: "絶対忘れないで",
    meaning: "절대 잊지 마.",
    words: [
      { kanji: "絶対", hiragana: "ぜったい", meaning: "절대", dictionary: "絶対", type: "adverb" },
      { kanji: "忘れる", hiragana: "わすれる", meaning: "잊다", dictionary: "忘れる", type: "verb" },
    ]
  },
  {
    id: 400,
    sentence: "絶対、転ばないよ",
    meaning: "절대, 안 넘어질 거야.",
    words: [
      { kanji: "絶対", hiragana: "ぜったい", meaning: "절대", dictionary: "絶対", type: "adverb" },
      { kanji: "転ぶ", hiragana: "ころぶ", meaning: "넘어지다", dictionary: "転ぶ", type: "verb" },
    ]
  },
  {
    id: 401,
    sentence: "いいと思う",
    meaning: "좋다고 생각해.",
    words: [
      { kanji: "思う", hiragana: "おもう", meaning: "생각하다", dictionary: "思う", type: "verb" },
    ]
  },
  {
    id: 402,
    sentence: "行こうと思う",
    meaning: "가려고 해.",
    words: [
      { kanji: "行く", hiragana: "いく", meaning: "가다", dictionary: "行く", type: "verb" },
      { kanji: "思う", hiragana: "おもう", meaning: "생각하다", dictionary: "思う", type: "verb" },
    ]
  },
  {
    id: 403,
    sentence: "彼は絶対、転ばないと思う",
    meaning: "그는 절대 안 넘어질 거라고 생각해.",
    words: [
      { kanji: "彼", hiragana: "かれ", meaning: "그", dictionary: "彼", type: "noun" },
      { kanji: "絶対", hiragana: "ぜったい", meaning: "절대", dictionary: "絶対", type: "adverb" },
      { kanji: "転ぶ", hiragana: "ころぶ", meaning: "넘어지다", dictionary: "転ぶ", type: "verb" },
      { kanji: "思う", hiragana: "おもう", meaning: "생각하다", dictionary: "思う", type: "verb" },
    ]
  },
  {
    id: 404,
    sentence: "絶対、なんとかなるだろう",
    meaning: "절대 어떻게든 되겠지.",
    words: [
      { kanji: "絶対", hiragana: "ぜったい", meaning: "절대", dictionary: "絶対", type: "adverb" },
    ]
  },
  {
    id: 405,
    sentence: "多分、状況が違うと思う",
    meaning: "아마 상황이 다를 거라고 생각해.",
    words: [
      { kanji: "多分", hiragana: "たぶん", meaning: "아마", dictionary: "多分", type: "adverb" },
      { kanji: "状況", hiragana: "じょうきょう", meaning: "상황", dictionary: "状況", type: "noun" },
      { kanji: "違う", hiragana: "ちがう", meaning: "다르다", dictionary: "違う", type: "verb" },
      { kanji: "思う", hiragana: "おもう", meaning: "생각하다", dictionary: "思う", type: "verb" },
    ]
  },
  {
    id: 406,
    sentence: "多分、それは書き間違いだと思う",
    meaning: "아마 그건 오타일 거라고 생각해.",
    words: [
      { kanji: "多分", hiragana: "たぶん", meaning: "아마", dictionary: "多分", type: "adverb" },
      { kanji: "書き間違い", hiragana: "かきまちがい", meaning: "오타, 잘못 씀", dictionary: "書き間違い", type: "noun" },
      { kanji: "思う", hiragana: "おもう", meaning: "생각하다", dictionary: "思う", type: "verb" },
    ]
  },
  {
    id: 407,
    sentence: "目が大きい",
    meaning: "눈이 크다.",
    words: [
      { kanji: "目", hiragana: "め", meaning: "눈", dictionary: "目", type: "noun" },
      { kanji: "大きい", hiragana: "おおきい", meaning: "크다", dictionary: "大きい", type: "adjective" },
    ]
  },
  {
    id: 408,
    sentence: "目が回る",
    meaning: "눈이 돌다(어지럽다).",
    words: [
      { kanji: "目", hiragana: "め", meaning: "눈", dictionary: "目", type: "noun" },
      { kanji: "回る", hiragana: "まわる", meaning: "돌다", dictionary: "回る", type: "verb" },
    ]
  },
  {
    id: 409,
    sentence: "眼鏡をかける",
    meaning: "안경을 쓰다.",
    words: [
      { kanji: "眼鏡", hiragana: "めがね", meaning: "안경", dictionary: "眼鏡", type: "noun" },
    ]
  },
  {
    id: 410,
    sentence: "眼鏡をはずす",
    meaning: "안경을 벗다.",
    words: [
      { kanji: "眼鏡", hiragana: "めがね", meaning: "안경", dictionary: "眼鏡", type: "noun" },
    ]
  },
  {
    id: 411,
    sentence: "眼鏡をふく",
    meaning: "안경을 닦다.",
    words: [
      { kanji: "眼鏡", hiragana: "めがね", meaning: "안경", dictionary: "眼鏡", type: "noun" },
    ]
  },
  {
    id: 412,
    sentence: "眼鏡をかけて、髪が乱れている状況です",
    meaning: "안경을 쓰고, 머리가 헝클어진 상황입니다.",
    words: [
      { kanji: "眼鏡", hiragana: "めがね", meaning: "안경", dictionary: "眼鏡", type: "noun" },
      { kanji: "髪", hiragana: "かみ", meaning: "머리카락", dictionary: "髪", type: "noun" },
      { kanji: "乱れる", hiragana: "みだれる", meaning: "헝클어지다", dictionary: "乱れる", type: "verb" },
      { kanji: "状況", hiragana: "じょうきょう", meaning: "상황", dictionary: "状況", type: "noun" },
    ]
  },
  {
    id: 413,
    sentence: "手が後ろにまわっている",
    meaning: "손이 뒤로 돌아가 있다(뒷짐을 지고 있다).",
    words: [
      { kanji: "手", hiragana: "て", meaning: "손", dictionary: "手", type: "noun" },
      { kanji: "後ろ", hiragana: "うしろ", meaning: "뒤", dictionary: "後ろ", type: "noun" },
      { kanji: "回る", hiragana: "まわる", meaning: "돌다", dictionary: "回る", type: "verb" },
    ]
  },
  {
    id: 414,
    sentence: "手を後ろにしろ！",
    meaning: "손 뒤로 해!",
    words: [
      { kanji: "手", hiragana: "て", meaning: "손", dictionary: "手", type: "noun" },
      { kanji: "後ろ", hiragana: "うしろ", meaning: "뒤", dictionary: "後ろ", type: "noun" },
    ]
  },
  {
    id: 415,
    sentence: "お先に失礼します！",
    meaning: "먼저 실례하겠습니다!",
    words: [
      { kanji: "お先に", hiragana: "おさきに", meaning: "먼저", dictionary: "お先に", type: "adverb" },
      { kanji: "失礼する", hiragana: "しつれいする", meaning: "실례하다", dictionary: "失礼する", type: "verb" },
    ]
  },
  {
    id: 416,
    sentence: "修学旅行に行く",
    meaning: "수학여행을 가다.",
    words: [
      { kanji: "修学旅行", hiragana: "しゅうがくりょこう", meaning: "수학여행", dictionary: "修学旅行", type: "noun" },
      { kanji: "行く", hiragana: "いく", meaning: "가다", dictionary: "行く", type: "verb" },
    ]
  },
  {
    id: 417,
    sentence: "あそこにイケメンがいる！",
    meaning: "저기 잘생긴 애가 있어!",
    words: [
      { kanji: "イケメン", hiragana: "イケメン", meaning: "잘생긴 남자", dictionary: "イケメン", type: "noun" },
    ]
  },
  {
    id: 418,
    sentence: "彼は本当にイケメンだね",
    meaning: "그는 정말 잘생겼네.",
    words: [
      { kanji: "彼", hiragana: "かれ", meaning: "그", dictionary: "彼", type: "noun" },
      { kanji: "本当に", hiragana: "ほんとうに", meaning: "진짜로", dictionary: "本当に", type: "adverb" },
      { kanji: "イケメン", hiragana: "イケメン", meaning: "잘생긴 남자", dictionary: "イケメン", type: "noun" },
    ]
  },
  {
    id: 419,
    sentence: "あのイケメン、写真と絶対違うよね",
    meaning: "저 잘생긴 애, 사진이랑 절대 다르지.",
    words: [
      { kanji: "写真", hiragana: "しゃしん", meaning: "사진", dictionary: "写真", type: "noun" },
      { kanji: "絶対", hiragana: "ぜったい", meaning: "절대", dictionary: "絶対", type: "adverb" },
      { kanji: "違う", hiragana: "ちがう", meaning: "다르다", dictionary: "違う", type: "verb" },
      { kanji: "イケメン", hiragana: "イケメン", meaning: "잘생긴 남자", dictionary: "イケメン", type: "noun" },
    ]
  },
  {
    id: 420,
    sentence: "修学旅行の場所を間違えました！",
    meaning: "수학여행 장소를 잘못 알았습니다!",
    words: [
      { kanji: "修学旅行", hiragana: "しゅうがくりょこう", meaning: "수학여행", dictionary: "修学旅行", type: "noun" },
      { kanji: "場所", hiragana: "ばしょ", meaning: "장소", dictionary: "場所", type: "noun" },
      { kanji: "間違える", hiragana: "まちがえる", meaning: "잘못 알다", dictionary: "間違える", type: "verb" },
    ]
  },
  {
    id: 421,
    sentence: "確か、あのイケメンは修学旅行に来ないと思う",
    meaning: "분명, 저 잘생긴 애는 수학여행에 안 올 거라고 생각해.",
    words: [
      { kanji: "確か", hiragana: "たしか", meaning: "분명", dictionary: "確か", type: "adverb" },
      { kanji: "修学旅行", hiragana: "しゅうがくりょこう", meaning: "수학여행", dictionary: "修学旅行", type: "noun" },
      { kanji: "来る", hiragana: "くる", meaning: "오다", dictionary: "来る", type: "verb" },
      { kanji: "思う", hiragana: "おもう", meaning: "생각하다", dictionary: "思う", type: "verb" },
      { kanji: "イケメン", hiragana: "イケメン", meaning: "잘생긴 남자", dictionary: "イケメン", type: "noun" },
    ]
  },
  {
    id: 422,
    sentence: "君の言うことは、確かに間違いじゃない",
    meaning: "네가 하는 말은, 확실히 틀린 게 아니야.",
    words: [
      { kanji: "言う", hiragana: "いう", meaning: "말하다", dictionary: "言う", type: "verb" },
      { kanji: "確かに", hiragana: "たしかに", meaning: "확실히", dictionary: "確かに", type: "adverb" },
      { kanji: "間違い", hiragana: "まちがい", meaning: "잘못", dictionary: "間違い", type: "noun" },
    ]
  },
  {
    id: 423,
    sentence: "修学旅行は、友達と一緒だから絶対楽しいよな！",
    meaning: "수학여행은, 친구랑 같이니까 절대 즐겁지!",
    words: [
      { kanji: "修学旅行", hiragana: "しゅうがくりょこう", meaning: "수학여행", dictionary: "修学旅行", type: "noun" },
      { kanji: "友達", hiragana: "ともだち", meaning: "친구", dictionary: "友達", type: "noun" },
      { kanji: "一緒", hiragana: "いっしょ", meaning: "함께", dictionary: "一緒", type: "noun" },
      { kanji: "絶対", hiragana: "ぜったい", meaning: "절대", dictionary: "絶対", type: "adverb" },
      { kanji: "楽しい", hiragana: "たのしい", meaning: "즐겁다", dictionary: "楽しい", type: "adjective" },
    ]
  },
  {
    id: 424,
    sentence: "確か、彼とは中学校からの友達だと思う",
    meaning: "분명, 그와는 중학교 때부터의 친구라고 생각해.",
    words: [
      { kanji: "確か", hiragana: "たしか", meaning: "분명", dictionary: "確か", type: "adverb" },
      { kanji: "彼", hiragana: "かれ", meaning: "그", dictionary: "彼", type: "noun" },
      { kanji: "中学校", hiragana: "ちゅうがっこう", meaning: "중학교", dictionary: "中学校", type: "noun" },
      { kanji: "友達", hiragana: "ともだち", meaning: "친구", dictionary: "友達", type: "noun" },
    ]
  },
  {
    id: 425,
    sentence: "友達と修学旅行に行けるなんて、絶対嬉しいよな！",
    meaning: "친구랑 수학여행에 갈 수 있다니, 절대 기쁘겠지!",
    words: [
      { kanji: "友達", hiragana: "ともだち", meaning: "친구", dictionary: "友達", type: "noun" },
      { kanji: "修学旅行", hiragana: "しゅうがくりょこう", meaning: "수학여행", dictionary: "修学旅行", type: "noun" },
      { kanji: "嬉しい", hiragana: "うれしい", meaning: "기쁘다", dictionary: "嬉しい", type: "adjective" },
    ]
  },
  {
    id: 426,
    sentence: "イケメンに『会えて嬉しい』と言われたら、目が回る状況だよ",
    meaning: "잘생긴 애한테 '만나서 기뻐'라는 말을 들으면, 눈이 돌아갈(어지러운) 상황이야.",
    words: [
      { kanji: "嬉しい", hiragana: "うれしい", meaning: "기쁘다", dictionary: "嬉しい", type: "adjective" },
      { kanji: "目", hiragana: "め", meaning: "눈", dictionary: "目", type: "noun" },
      { kanji: "回る", hiragana: "まわる", meaning: "돌다", dictionary: "回る", type: "verb" },
      { kanji: "状況", hiragana: "じょうきょう", meaning: "상황", dictionary: "状況", type: "noun" },
      { kanji: "イケメン", hiragana: "イケメン", meaning: "잘생긴 남자", dictionary: "イケメン", type: "noun" },
    ]
  },
  {
    id: 427,
    sentence: "違うよ！",
    meaning: "아니야! / 틀려!",
    words: [
      { kanji: "違う", hiragana: "ちがう", meaning: "다르다, 아니다", dictionary: "違う", type: "verb" },
    ]
  },
  {
    id: 428,
    sentence: "全然違う",
    meaning: "완전히 달라.",
    words: [
      { kanji: "全然", hiragana: "ぜんぜん", meaning: "전혀", dictionary: "全然", type: "adverb" },
      { kanji: "違う", hiragana: "ちがう", meaning: "다르다", dictionary: "違う", type: "verb" },
    ]
  },
  {
    id: 429,
    sentence: "間違いがない",
    meaning: "틀림(실수)이 없다.",
    words: [
      { kanji: "間違い", hiragana: "まちがい", meaning: "잘못, 틀림", dictionary: "間違い", type: "noun" },
    ]
  },
  {
    id: 430,
    sentence: "そんな風に言わないで",
    meaning: "그렇게(그런 식으로) 말하지 마.",
    words: [
      { kanji: "風に", hiragana: "ふうに", meaning: "~식으로, ~듯이", dictionary: "風に", type: "expression" },
      { kanji: "言う", hiragana: "いう", meaning: "말하다", dictionary: "言う", type: "verb" },
    ]
  },
  {
    id: 431,
    sentence: "そんな風に見える",
    meaning: "그렇게 보여.",
    words: [
      { kanji: "風に", hiragana: "ふうに", meaning: "~식으로, ~듯이", dictionary: "風に", type: "expression" },
      { kanji: "見える", hiragana: "みえる", meaning: "보이다", dictionary: "見える", type: "verb" },
    ]
  },
  {
    id: 432,
    sentence: "そんな風になりたい",
    meaning: "그런 사람이 되고 싶어(그렇게 되고 싶어).",
    words: [
      { kanji: "風に", hiragana: "ふうに", meaning: "~식으로, ~듯이", dictionary: "風に", type: "expression" },
    ]
  },
  {
    id: 433,
    sentence: "そんな風に言われたら、絶対嬉しいよな！",
    meaning: "그런 식으로 말을 들으면, 절대 기쁘겠지!",
    words: [
      { kanji: "風に", hiragana: "ふうに", meaning: "~식으로, ~듯이", dictionary: "風に", type: "expression" },
      { kanji: "言う", hiragana: "いう", meaning: "말하다", dictionary: "言う", type: "verb" },
      { kanji: "嬉しい", hiragana: "うれしい", meaning: "기쁘다", dictionary: "嬉しい", type: "adjective" },
    ]
  },
  {
    id: 434,
    sentence: "あのイケメン、友達とそんな風に接するんだ",
    meaning: "저 잘생긴 애, 친구한테 그런 식으로 대하는구나.",
    words: [
      { kanji: "友達", hiragana: "ともだち", meaning: "친구", dictionary: "友達", type: "noun" },
      { kanji: "風に", hiragana: "ふうに", meaning: "~식으로, ~듯이", dictionary: "風に", type: "expression" },
      { kanji: "接する", hiragana: "せっする", meaning: "대하다, 접하다", dictionary: "接する", type: "verb" },
      { kanji: "イケメン", hiragana: "イケメン", meaning: "잘생긴 남자", dictionary: "イケメン", type: "noun" },
    ]
  },
  {
    id: 435,
    sentence: "好きだと言う",
    meaning: "좋아한다고 말하다.",
    words: [
      { kanji: "言う", hiragana: "いう", meaning: "말하다", dictionary: "言う", type: "verb" },
      { kanji: "好き", hiragana: "すき", meaning: "좋아함", dictionary: "好き", type: "adjective" },
    ]
  },
  {
    id: 436,
    sentence: "狭い指摘ですね！",
    meaning: "예리한(까다로운) 지적이시네요!",
    words: [
      { kanji: "狭い", hiragana: "せまい", meaning: "좁다, 예리하다", dictionary: "狭い", type: "adjective" },
      { kanji: "指摘", hiragana: "してき", meaning: "지적", dictionary: "指摘", type: "noun" },
    ]
  },
  {
    id: 437,
    sentence: "渡会は俺の何がいい？",
    meaning: "와타라이는 내 어떤 점이 좋아?",
    words: []
  },
  {
    id: 438,
    sentence: "全部だけど。",
    meaning: "전부인데.",
    words: [
      { kanji: "全部", hiragana: "ぜんぶ", meaning: "전부", dictionary: "全部", type: "noun" },
    ]
  },
  {
    id: 439,
    sentence: "あの時、なんて答えるのが正解だったのかわからない。",
    meaning: "그때, 뭐라고 대답하는 게 정답이었는지 모르겠어.",
    words: [
      { kanji: "答える", hiragana: "こたえる", meaning: "대답하다", dictionary: "答える", type: "verb" },
      { kanji: "正解", hiragana: "せいかい", meaning: "정답", dictionary: "正解", type: "noun" },
      { kanji: "わかる", hiragana: "わかる", meaning: "알다, 이해하다", dictionary: "わかる", type: "verb" },
    ]
  },
  {
    id: 440,
    sentence: "今はまだ、そんな簡単には教えない。",
    meaning: "지금은 아직, 그렇게 간단히는 안 가르쳐 줄게.",
    words: [
      { kanji: "今", hiragana: "いま", meaning: "지금", dictionary: "今", type: "noun" },
      { kanji: "簡単", hiragana: "かんたん", meaning: "간단함", dictionary: "簡単", type: "adjective" },
      { kanji: "教える", hiragana: "おしえる", meaning: "가르치다", dictionary: "教える", type: "verb" },
    ]
  },
  {
    id: 441,
    sentence: "秘密。",
    meaning: "비밀.",
    words: [
      { kanji: "秘密", hiragana: "ひみつ", meaning: "비밀", dictionary: "秘密", type: "noun" },
    ]
  },
  {
    id: 442,
    sentence: "俺を酔わせてどうするつもり？",
    meaning: "나를 취하게 해서 어쩌려는 거야?",
    words: [
      { kanji: "酔う", hiragana: "よう", meaning: "취하다", dictionary: "酔う", type: "verb" },
    ]
  },
  {
    id: 443,
    sentence: "歌うことが好きです。",
    meaning: "노래하는 것을 좋아합니다.",
    words: [
      { kanji: "歌う", hiragana: "うたう", meaning: "노래하다", dictionary: "歌う", type: "verb" },
      { kanji: "好き", hiragana: "すき", meaning: "좋아함", dictionary: "好き", type: "adjective" },
    ]
  },
  {
    id: 444,
    sentence: "日本に行ったことある。",
    meaning: "일본에 간 적이 있어.",
    words: []
  },
  {
    id: 445,
    sentence: "早く帰ることにしました。",
    meaning: "일찍 돌아가기로 했습니다.",
    words: [
      { kanji: "早く", hiragana: "はやく", meaning: "빨리", dictionary: "早く", type: "adverb" },
      { kanji: "帰る", hiragana: "かえる", meaning: "돌아가다", dictionary: "帰る", type: "verb" },
    ]
  },
  {
    id: 446,
    sentence: "君が好き",
    meaning: "네가 좋아.",
    words: [
      { kanji: "好き", hiragana: "すき", meaning: "좋아함", dictionary: "好き", type: "adjective" },
    ]
  },
  {
    id: 447,
    sentence: "君のことが好き",
    meaning: "너라는 존재가 좋아(네 모든 게 좋아).",
    words: [
      { kanji: "好き", hiragana: "すき", meaning: "좋아함", dictionary: "好き", type: "adjective" },
    ]
  },
  {
    id: 448,
    sentence: "俺のことが好き",
    meaning: "나를 좋아해(나라는 사람 자체를 좋아함).",
    words: [
      { kanji: "好き", hiragana: "すき", meaning: "좋아함", dictionary: "好き", type: "adjective" },
    ]
  },
  {
    id: 449,
    sentence: "修学旅行で仲良くないグループに入りました。",
    meaning: "수학여행에서 친하지 않은 그룹에 들어갔습니다.",
    words: [
      { kanji: "修学旅行", hiragana: "しゅうがくりょこう", meaning: "수학여행", dictionary: "修学旅行", type: "noun" },
      { kanji: "仲良く", hiragana: "なかよく", meaning: "사이좋게", dictionary: "仲良く", type: "adverb" },
      { kanji: "入る", hiragana: "はいる", meaning: "들어가다", dictionary: "入る", type: "verb" },
      { kanji: "グループ", hiragana: "グループ", meaning: "그룹", dictionary: "グループ", type: "noun" },
    ]
  },
  {
    id: 450,
    sentence: "今、何してる？",
    meaning: "지금 뭐해?",
    words: [
      { kanji: "今", hiragana: "いま", meaning: "지금", dictionary: "今", type: "noun" },
    ]
  },
  {
    id: 451,
    sentence: "今、行くよ！",
    meaning: "지금 갈게!",
    words: [
      { kanji: "今", hiragana: "いま", meaning: "지금", dictionary: "今", type: "noun" },
      { kanji: "行く", hiragana: "いく", meaning: "가다", dictionary: "行く", type: "verb" },
    ]
  },
  {
    id: 452,
    sentence: "問題に直面する",
    meaning: "문제에 직면하다.",
    words: [
      { kanji: "問題", hiragana: "もんだい", meaning: "문제", dictionary: "問題", type: "noun" },
      { kanji: "直面する", hiragana: "ちょくめんする", meaning: "직면하다", dictionary: "直面する", type: "verb" },
    ]
  },
  {
    id: 453,
    sentence: "危機に直面している",
    meaning: "위기에 직면해 있다.",
    words: [
      { kanji: "危機", hiragana: "きき", meaning: "위기", dictionary: "危機", type: "noun" },
      { kanji: "直面する", hiragana: "ちょくめんする", meaning: "직면하다", dictionary: "直面する", type: "verb" },
    ]
  },
  {
    id: 454,
    sentence: "なんで渡会はこんなに優しくしてくれるんだろう",
    meaning: "와타라이는 왜 이렇게 상냥하게 대해주는 걸까.",
    words: [
      { kanji: "優しい", hiragana: "やさしい", meaning: "상냥하다", dictionary: "優しい", type: "adjective" },
    ]
  },
  {
    id: 455,
    sentence: "全然気にしなくていいよ",
    meaning: "전혀 신경 안 써도 돼.",
    words: [
      { kanji: "全然", hiragana: "ぜんぜん", meaning: "전혀", dictionary: "全然", type: "adverb" },
      { kanji: "気にする", hiragana: "きにする", meaning: "신경쓰다", dictionary: "気にする", type: "expression" },
    ]
  },
  {
    id: 456,
    sentence: "修学旅行が始まって一日目、なんかとんでもないことになってしまいました。",
    meaning: "수학여행이 시작되고 첫째 날, 뭔가 말도 안 되는 상황이 되어버렸습니다.",
    words: [
      { kanji: "修学旅行", hiragana: "しゅうがくりょこう", meaning: "수학여행", dictionary: "修学旅行", type: "noun" },
      { kanji: "始まる", hiragana: "はじまる", meaning: "시작되다", dictionary: "始まる", type: "verb" },
      { kanji: "一日目", hiragana: "いちにちめ", meaning: "첫째 날", dictionary: "一日目", type: "noun" },
    ]
  },
  {
    id: 457,
    sentence: "こっちは朝からイケメンだな。",
    meaning: "이쪽은 아침부터 잘생긴 애네.",
    words: [
      { kanji: "朝", hiragana: "あさ", meaning: "아침", dictionary: "朝", type: "noun" },
      { kanji: "イケメン", hiragana: "イケメン", meaning: "잘생긴 남자", dictionary: "イケメン", type: "noun" },
    ]
  },
  {
    id: 458,
    sentence: "すみませんね、イケメンじゃなくて。",
    meaning: "죄송하네요, 잘생기지 않아서.",
    words: [
      { kanji: "イケメン", hiragana: "イケメン", meaning: "잘생긴 남자", dictionary: "イケメン", type: "noun" },
    ]
  },
  {
    id: 459,
    sentence: "ちょっとコンタクト落としちゃって。",
    meaning: "잠시만요, 콘택트렌즈를 떨어뜨려서요...",
    words: [
      { kanji: "落とす", hiragana: "おとす", meaning: "떨어뜨리다", dictionary: "落とす", type: "verb" },
    ]
  },
  {
    id: 460,
    sentence: "この状況、多分みんなに見られてるよな。",
    meaning: "이 상황, 아마 다들 보고 있겠지.",
    words: [
      { kanji: "状況", hiragana: "じょうきょう", meaning: "상황", dictionary: "状況", type: "noun" },
      { kanji: "多分", hiragana: "たぶん", meaning: "아마", dictionary: "多分", type: "adverb" },
      { kanji: "見る", hiragana: "みる", meaning: "보다", dictionary: "見る", type: "verb" },
    ]
  },
  {
    id: 461,
    sentence: "何でもするから許してほしい。",
    meaning: "뭐든지 할 테니까 용서해 줬으면 좋겠어.",
    words: [
      { kanji: "何でも", hiragana: "なんでも", meaning: "뭐든지", dictionary: "何でも", type: "expression" },
      { kanji: "許す", hiragana: "ゆるす", meaning: "용서하다", dictionary: "許す", type: "verb" },
    ]
  },
  {
    id: 462,
    sentence: "絶対思ってなさそうだけど。",
    meaning: "절대(속으로는 그렇게) 생각 안 하는 것 같지만.",
    words: [
      { kanji: "絶対", hiragana: "ぜったい", meaning: "절대", dictionary: "絶対", type: "adverb" },
      { kanji: "思う", hiragana: "おもう", meaning: "생각하다", dictionary: "思う", type: "verb" },
    ]
  },
  {
    id: 463,
    sentence: "まあ、なんとかなるだろう。",
    meaning: "뭐, 어떻게든 되겠지.",
    words: []
  },
  {
    id: 464,
    sentence: "ごめん、先入ってる。",
    meaning: "미안, (내가) 먼저 들어가 있을게.",
    words: [
      { kanji: "先", hiragana: "さき", meaning: "먼저", dictionary: "先", type: "noun" },
      { kanji: "入る", hiragana: "はいる", meaning: "들어가다", dictionary: "入る", type: "verb" },
    ]
  },
  {
    id: 465,
    sentence: "ごめん、先に入ってて。",
    meaning: "미안, 먼저 들어가 있어.",
    words: [
      { kanji: "先に", hiragana: "さきに", meaning: "먼저", dictionary: "先に", type: "adverb" },
      { kanji: "入る", hiragana: "はいる", meaning: "들어가다", dictionary: "入る", type: "verb" },
    ]
  },
  {
    id: 466,
    sentence: "本当に俺なんかでいいのかとか",
    meaning: "정말 나 같은 애로 괜찮은 걸까 라든지.",
    words: [
      { kanji: "本当に", hiragana: "ほんとうに", meaning: "진짜로", dictionary: "本当に", type: "adverb" },
    ]
  },
  {
    id: 467,
    sentence: "日置の方がお似合いかも、とか。",
    meaning: "히오키 쪽이 더 잘 어울릴지도, 라든지.",
    words: [
      { kanji: "方", hiragana: "ほう", meaning: "쪽, 편", dictionary: "方", type: "noun" },
    ]
  },
  {
    id: 468,
    sentence: "もし俺が女の子だったら、とかさ。",
    meaning: "만약 내가 여자아이였다면, 같은 거 말이야.",
    words: []
  },
  {
    id: 469,
    sentence: "そんなこと考えたら、なんかモヤモヤっていうか、",
    meaning: "그런 걸 생각하면, 뭔가 답답한 마음이 들어서 그런지,",
    words: [
      { kanji: "考える", hiragana: "かんがえる", meaning: "생각하다", dictionary: "考える", type: "verb" },
    ]
  },
  {
    id: 470,
    sentence: "自分でもわけわかんなくなって。",
    meaning: "나 스스로도 영문을 모르게 돼서.",
    words: [
      { kanji: "自分", hiragana: "じぶん", meaning: "자기, 스스로", dictionary: "自分", type: "noun" },
      { kanji: "わかる", hiragana: "わかる", meaning: "알다, 이해하다", dictionary: "わかる", type: "verb" },
    ]
  },
  {
    id: 471,
    sentence: "あっちに部活の奴らいるから。",
    meaning: "저쪽에 부활동 애들 있으니까.",
    words: [
      { kanji: "部活", hiragana: "ぶかつ", meaning: "동아리 활동", dictionary: "部活", type: "noun" },
    ]
  },
  {
    id: 472,
    sentence: "それと、さっき日置が「もし女の子だったら」って言ってたけど、俺もちょうど今日、同じこと考えてた。",
    meaning: "그리고, 아까 히오키가 '만약 여자아이였다면'이라고 말했었는데, 나도 마침 오늘, 같은 걸 생각하고 있었어.",
    words: [
      { kanji: "言う", hiragana: "いう", meaning: "말하다", dictionary: "言う", type: "verb" },
      { kanji: "今日", hiragana: "きょう", meaning: "오늘", dictionary: "今日", type: "noun" },
      { kanji: "同じ", hiragana: "おなじ", meaning: "같음", dictionary: "同じ", type: "adjective" },
    ]
  },
  {
    id: 473,
    sentence: "女の子だったら修学旅行で同じグループになれなかったかもしれない、って。そうしたら、あの時みたいに朝から晩まで一緒に過ごせるものなかったし、今みたいに恋愛発展するタイミングなかったかも。",
    meaning: "여자아이였다면 수학여행에서 같은 그룹이 못 됐을지도 몰랐겠다고. 그랬다면 그때처럼 아침부터 밤까지 함께 보낼 수 있는 것도 없었을 거고, 지금처럼 연애로 발전할 타이밍도 없었을지도.",
    words: [
      { kanji: "同じ", hiragana: "おなじ", meaning: "같음", dictionary: "同じ", type: "adjective" },
      { kanji: "修学旅行", hiragana: "しゅうがくりょこう", meaning: "수학여행", dictionary: "修学旅行", type: "noun" },
      { kanji: "タイミング", hiragana: "タイミング", meaning: "타이밍", dictionary: "タイミング", type: "noun" },
      { kanji: "グループ", hiragana: "グループ", meaning: "그룹", dictionary: "グループ", type: "noun" },
    ]
  },
  {
    id: 474,
    sentence: "足痛い？",
    meaning: "발(다리) 아파?",
    words: [
      { kanji: "足", hiragana: "あし", meaning: "발, 다리", dictionary: "足", type: "noun" },
      { kanji: "痛い", hiragana: "いたい", meaning: "아프다", dictionary: "痛い", type: "adjective" },
    ]
  },
  {
    id: 475,
    sentence: "お手柔らかに、お願いします。",
    meaning: "살살 부탁드립니다.",
    words: [
      { kanji: "お手柔らかに", hiragana: "おてやわらかに", meaning: "부디 살살, 너그럽게", dictionary: "お手柔らかに", type: "expression" },
    ]
  },
  {
    id: 476,
    sentence: "隣にいてよ。",
    meaning: "곁에 있어줘.",
    words: [
      { kanji: "隣", hiragana: "となり", meaning: "옆, 곁", dictionary: "隣", type: "noun" },
    ]
  },
];