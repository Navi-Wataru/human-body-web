export type Intervention = {
  study: string;
  practice: string;
};

export type Paper = {
  author: string;
  year: number | string;
  title: string;
  journal: string;
  abstract: string;
  isBook?: boolean;
  isNew?: boolean;
  citations?: number | null;
  intervention?: Intervention;
};

export type Cluster = {
  key: string;
  label: string;
  iconPath: string;
  papers: Paper[];
};

const ICONS = {
  core:      "M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z",
  somatic:   "M12 22c5.5 0 10-4.5 10-10S17.5 2 12 2 2 6.5 2 12M12 8v4l3 3M2 12h4",
  aesthetics:"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8M12 15a3 3 0 100-6 3 3 0 000 6",
  leaderful: "M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z",
  theory:    "M12 2L2 7l10 5 10-5-10-5M2 17l10 5 10-5M2 12l10 5 10-5",
  team:      "M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75",
  somaticOD: "M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z",
  neuro:     "M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3M12 17h.01M12 22a10 10 0 100-20 10 10 0 000 20z",
  learning:  "M23 4v6h-6M1 20v-6h6M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15",
};

// ─────────────────────────────────────────
// 身体性リーダーシップ
// ─────────────────────────────────────────
export const leadershipClusters: Cluster[] = [
  {
    key: "core",
    label: "コア論文",
    iconPath: ICONS.core,
    papers: [
      {
        author: "Hamill, P.",
        year: 2013,
        title: "Embodied Leadership: The Somatic Approach to Developing Your Leadership",
        journal: "Kogan Page（書籍）",
        citations: null,
        abstract: "ソマティックの視点からリーダーシップ開発を再定義する基礎書。従来のリーダーシップ論が認知・スキル・コンピテンシーに偏りすぎており、身体の役割を看過してきたと主張する。身体的認識と自己調整の能力を高めることが、より本物のリーダーシップ実践につながるという立場から実践的なフレームワークを提示する。",
        isBook: true,
        intervention: {
          study: "ソマティックコーチングの実践記録とインタビューをもとにフレームワークを構築。リーダーが身体を通じて変容した事例を丁寧に記述している。",
          practice: "リーダーシップの変容は、スキルの習得より先に、身体の習慣の変化から始まることがあります。そのことに気づいたとき、見るべき場所が変わるように思います。",
        },
      },
      {
        author: "Fisher, K. & Robbins, C. R.",
        year: 2015,
        title: "Embodied leadership: Moving from leader competencies to leaderful practices",
        journal: "Leadership, 11(3), 281–299",
        citations: 112,
        abstract: "現象学的レンズを用い、異文化・危険環境下におけるリーダー・フォロワー間の相互作用を前景化する。コンピテンシー論の基盤にある心身二元論と脱文脈的アプローチに疑問を呈し、オーストラリア軍事顧問のベトナム戦争期フレームワークを再分析。身体化された視点から「leaderful practices」を特定する。",
        intervention: {
          study: "ベトナム戦争期オーストラリア軍事顧問のコンピテンシーフレームワークを現象学的手法で再分析。状況の中での身体的リーダーシップを記述した。",
          practice: "コンピテンシーとして測れないものが、場を動かしていることがあります。誰がどんな身体の状態で存在しているか——そこにも、リーダーシップが宿っているように思います。",
        },
      },
      {
        author: "Ladkin, D. & Taylor, S. S.",
        year: 2010,
        title: "Enacting the 'true self': Towards a theory of embodied authentic leadership",
        journal: "Leadership Quarterly, 21(1), 64–74",
        citations: 778,
        abstract: "真正なリーダーシップが「真の自己」に根ざしているとしても、その真正性は身体化を通じて他者に伝わると主張する。スタニスラフスキーの演技理論を援用し、身体化された真正リーダーシップの3要素として「自己開示」「関係性」「リーダー的選択」を提示する。",
        intervention: {
          study: "リーダーシップ経験者と演劇実践者へのインタビュー・理論分析。スタニスラフスキーの演技論との比較から身体と真正性の関係を考察した。",
          practice: "「本物らしさ」は、言葉で語られるよりも先に、身体に現れているように感じます。言葉と身体のあいだにずれがあるとき、どちらが本当のことを伝えているのでしょうか。",
        },
      },
      {
        author: "Ladkin, D.",
        year: 2008,
        title: "Leading beautifully: How mastery, congruence and purpose create the aesthetic of embodied leadership practice",
        journal: "Leadership Quarterly, 19(1), 31–41",
        citations: 427,
        abstract: "「美しいもの」という美学的カテゴリーを通じて、リーダーシップを身体化された行為として探究する。ミュージシャンのボビー・マクファーリンを事例として、「美しく率いる」3要素——熟達・形式と内容の一致・目的——を特定する。",
        intervention: {
          study: "ミュージシャン Bobby McFerrin の指揮スタイルを美学的レンズで分析。「どのように率いるか」の質を身体表現として観察した。",
          practice: "「何を言うか」より「どのようにそこにいるか」が、場に伝わることがあります。熟達・一致・目的——この3つが揃うとき、リーダーシップはひとつの美しさを持つと、この研究者は言っています。",
        },
      },
      {
        author: "Ladkin, D.",
        year: 2013,
        title: "From perception to flesh: A phenomenological account of the felt experience of leadership",
        journal: "Leadership, 9(3), 320–334",
        citations: null,
        abstract: "メルロ＝ポンティの現象学を援用し、リーダーシップ関係における「感じられる経験」を論じる。「私たちは身体レベルで、いつ率いられているか、いつ率いているかをどのように知るのか」という問いを掲げ、言語化しにくい感覚的・身体的経験を「肉（flesh）」概念を通じて再考する。",
        intervention: {
          study: "現象学的手法によるリーダーシップ体験の記述・分析。「いま自分はリードしているか」という感覚を身体レベルで探った。",
          practice: "リードしているとき、率いられているとき——その感覚は、頭で考える前に身体が知っているように思います。そのことに気づくとき、リーダーシップの見え方が変わるのではないでしょうか。",
        },
      },
      {
        author: "Karssiens, A. E. A. et al.",
        year: 2014,
        title: "Embodied mind knowledge in leadership practice: Creating space in patterned thoughts and behaviors",
        journal: "Journal of Management Inquiry, 23(3), 231–241",
        citations: null,
        abstract: "成功しながらも充実感を欠くリーダーに向け、固定化した思考・行動パターンに「空間（space）」を生み出すことを促す。行動パターンは感覚・呼吸・身体にも表れるため、感覚を開き、呼吸を緩め、緩やかな動作練習を通じて「身体知」にアクセスする方法を提示する。",
        intervention: {
          study: "リーダー・マネジャーへのコンサルテーション介入の記録・分析。固定パターンへの気づきと身体的解放のプロセスを記述した。",
          practice: "成功しているのに充実感がない——そんなとき、変化が必要なのは思考ではなく、固まった身体のパターンかもしれません。",
        },
      },
      {
        author: "Bathurst, R. & Cain, T.",
        year: 2013,
        title: "Embodied leadership: The aesthetics of gesture",
        journal: "Leadership, 9(3), 358–377",
        citations: null,
        abstract: "リーダーシップを共同体の中で身体を通じて生起する過程として捉える。リーダーとフォロワーの二項対立は、身体が互いに動き・ジェスチャーを交わし合うことで溶解し、開かれた共創空間での招待と応答の関係性へと変容すると論じる。",
        intervention: {
          study: "オーケストラ指揮の観察と参加者インタビュー。指揮者とオーケストラの身体的ジェスチャーのやり取りを詳細に記録した。",
          practice: "トレーナーとクライアントの境界は、身体のジェスチャーの交わりの中で溶ける瞬間があります。招待し、応答する——その往復の中に、本当のセッションが始まるように感じます。",
        },
      },
      {
        author: "Szelwach, C., Sweet, K. M. et al.",
        year: 2023,
        title: "A holistic approach to embodied leadership development at the U.S. Coast Guard Academy",
        journal: "Organization Development Journal, 41(1), 54–68",
        citations: null,
        abstract: "米国沿岸警備隊士官学校における身体化されたリーダーシップ開発プログラムの実践事例を報告する。認知・情動・身体の統合的アプローチを採用し、士官候補生のリーダーシップ育成に身体的自己認識と自己調整の訓練を組み込む。ODジャーナル掲載の数少ない実証的事例研究。",
        intervention: {
          study: "米国沿岸警備隊士官学校でリーダーシップ開発プログラムを設計・実施。身体的自己認識（心拍・呼吸・筋緊張）のモニタリングを研修に統合した。",
          practice: "認知と情動だけでリーダーを育てようとすることには、限界があるように思います。身体的自己認識——自分の状態を身体で感知できる能力——が、その先を開くのではないでしょうか。",
        },
      },
    ],
  },
  {
    key: "somatic",
    label: "ソマティック学習・身体認知",
    iconPath: ICONS.somatic,
    papers: [
      {
        author: "Rigg, C.",
        year: 2018,
        title: "Somatic learning: Bringing the body into critical reflection",
        journal: "Management Learning, 49(2), 150–167",
        citations: 37,
        abstract: "批判的省察（critical reflection）に身体への焦点化がどう貢献できるかを論じる。仏教的マインドフルネス瞑想とその哲学が、身体的感覚を認知に接続するソマティック学習プロセスにどう寄与するかを示す。",
        intervention: {
          study: "マネジメント教育の授業でマインドフルネス瞑想を取り入れた省察プロセスを記録。身体感覚と認知がつながる瞬間を丁寧に観察した。",
          practice: "身体に浮かぶ感覚は、省察の起点になりうると感じています。思考で過去を振り返るより先に、身体が何かを知っていることがあります。",
        },
      },
      {
        author: "Brendel, W. & Bennett, C.",
        year: 2016,
        title: "Learning to embody leadership through mindfulness and Somatics practice",
        journal: "Advances in Developing Human Resources, 18(3), 409–425",
        citations: 128,
        abstract: "認知処理と批判的省察に主に依拠するリーダーシップ開発プログラムはもはや不十分だと論じる。マインドフルネスとソマティクスの実践を統合した発達的学習方法論を概念化し、行動との関係を「自動的なもの」から「意識的に選択されたもの」へと変容させるモデルを提示する。",
        intervention: {
          study: "マインドフルネス・ソマティクスを統合したリーダーシップ開発プログラムの概念設計とケース記述。「自動的反応→意識的選択」の移行プロセスを記録した。",
          practice: "同じ反応を繰り返してしまうとき、それは意志の問題ではないかもしれません。自動的に起きているパターンに気づくとき、選択の余地が生まれるように思います。",
        },
      },
      {
        author: "Springborg, C.",
        year: 2010,
        title: "Leadership as art – leaders coming to their senses",
        journal: "Leadership, 6(3), 243–258",
        citations: null,
        abstract: "「アートとしてのリーダーシップ」の特徴が、リーダーが現在の感覚にとどまり、分析ではなく感覚を通じた受け取りで意味形成することにあると論じる。リーダーを概念アーティストに例え、現在の知覚から意味形成することで前提の柔軟性が高まると主張する。",
        intervention: {
          study: "芸術実践（コンテンポラリーダンス・音楽）とリーダーシップの比較分析。「今ここの感覚」から意味形成するプロセスを哲学的に整理した。",
          practice: "分析の前に、感覚が何かを受け取っているように感じます。その順序を逆にしてみるだけで、見えてくるものが変わることがあります。",
        },
      },
      {
        author: "Bigo, V. & Islam, G.",
        year: 2022,
        title: "Embodiment and management learning: Understanding the role of bodily analogy in a yoga-based learning model",
        journal: "Academy of Management Learning & Education, 21(4), 648–668",
        citations: null,
        abstract: "ヨガを基盤としたリーダーシップ講座の経験的事例を検討し、省察的な身体実践がリーダーシップ概念の発達をいかに支えるかを探究する。「身体的アナロジー」を分析的レンズとして、参加者が抽象的概念を身体的姿勢・内部感覚・省察を通じてマッピングするプロセスを明らかにする。",
        intervention: {
          study: "ヨガベースのリーダーシップ講座（10週間）の参加観察と分析。身体姿勢が抽象概念理解のアナロジーになる瞬間を記録した。",
          practice: "抽象的な概念が、身体を通過するとき、自分ごとになるように感じます。「理解した」と「身体でわかった」は、違うことがあります。",
        },
      },
      {
        author: "Schuyler, K. G.",
        year: 2010,
        title: "Increasing Leadership Integrity Through Mind Training and Embodied Learning",
        journal: "Consulting Psychology Journal, 62(1), 21–38",
        citations: null,
        isNew: true,
        abstract: "ソマティック学習とチベット仏教の「lojong（心の訓練）」実践を融合した、リーダーシップ統合性へのコンサルテーション・アプローチを提示する。身体化学習と心の訓練は注意と気づきの重要性を共通の基盤とし、意識をもって行動し、起きていることに完全に現前する能力の開発に焦点を当てる。",
        intervention: {
          study: "コンサルテーション実践と事例記述。ソマティクスと瞑想的心の訓練を統合したリーダー開発の実践記録を分析した。",
          practice: "誠実さは、どこかに向かって努力するものではなく、今ここに完全に現れていることから生まれる——そう、この研究者は論じています。",
        },
      },
    ],
  },
  {
    key: "aesthetics",
    label: "リーダーシップ美学・場と空間",
    iconPath: ICONS.aesthetics,
    papers: [
      {
        author: "Hansen, H., Ropo, A. & Sauer, E.",
        year: 2007,
        title: "Aesthetic leadership",
        journal: "Leadership Quarterly, 18(6), 544–560",
        citations: 601,
        abstract: "リーダーシップ研究において美学的リーダーシップを有望なアプローチとして導入する。美学は感覚的知覚から生成される感じられた意味に関わり、感情と情動に根ざした主観的・暗黙知を含む。組織生活において重要でありながらほとんど理解されていないリーダーシップの美学的側面を提示する。",
        intervention: {
          study: "芸術・音楽・演劇におけるリーダーシップの美学的分析。「感じられた意味」を軸にした理論的フレームワークを構築した。",
          practice: "組織の中で感じられる「何か」——居心地のよさ、窮屈さ、開かれた感じ——それは測れませんが、確かに存在していると思います。その感知を大切にすることが、見えないものを見る出発点になるように感じています。",
        },
      },
      {
        author: "Ropo, A. & Salovaara, P.",
        year: 2019,
        title: "Spacing leadership as an embodied and performative process",
        journal: "Leadership, 15(4), 461–479",
        citations: null,
        abstract: "リーダーシップを人間と空間の社会物質的な関係として概念化する。ルフェーブルの空間理論にインスパイアされた「スペーシング・リーダーシップ」概念を導入し、リーダーシップが人々と空間の間の身体化されたパフォーマティブなプロセスにおいて生産されることを論じる。",
        intervention: {
          study: "フィンランドの組織における空間・身体・リーダーシップの関係を民族誌的手法で調査。物理的空間がリーダーシップ行動に与える影響を記録した。",
          practice: "空間は中立ではないと感じています。人々の身体がどこに置かれるか——それが、誰がどう動くかを静かに決めていることがあります。",
        },
      },
      {
        author: "Ropo, A., Sauer, E. & Salovaara, P.",
        year: 2013,
        title: "Embodiment of leadership through material place",
        journal: "Leadership, 9(3), 378–395",
        citations: null,
        abstract: "「物質的な場所とリーダーシップはどのように関係しているか」という問いを探究する。物理的環境とリーダーシップ実践の関係を分析し、環境的要因と身体化された経験がリーダーシップの構成においていかに役割を担うかを示す。",
        intervention: {
          study: "複数組織での民族誌的調査。場所の物質性（温度・光・家具・動線）がリーダーシップの発生に与える影響を観察した。",
          practice: "場所が人を変えることがあります。温度・光・動線——物質的な環境は、そこにいる人の身体を通じて、組織のあり方に影響しているように思います。",
        },
      },
      {
        author: "Ford, J. et al.",
        year: 2017,
        title: "Becoming the leader: Leadership as material presence",
        journal: "Organization Studies, 38(11), 1553–1571",
        citations: null,
        abstract: "リーダーを物質的な存在（material presence）として理解しようとする。リーダーシップを身体的・物体的・可視的なものとして捉え、リーダーの物質的存在感を通じて顕現するという内在的理論を分析。よいリーダーは「見た目でわかる」という理論から、外見的イメージの管理への関与を示す。",
        intervention: {
          study: "中間管理職へのインタビューと観察による質的研究。「リーダーらしさ」が身体的・物質的にどう構築されるかを分析した。",
          practice: "リーダーシップは、言葉より先に、その人の身体的存在感として伝わっていることがあります。「見た目でわかる」という直感は、案外正確かもしれません。",
        },
      },
    ],
  },
  {
    key: "leaderful",
    label: "Leaderful Practice — 集合的リーダーシップ",
    iconPath: ICONS.leaderful,
    papers: [
      {
        author: "Raelin, J. A.",
        year: 2005,
        title: "We the leaders: In order to form a leaderful organization",
        journal: "Journal of Leadership & Organizational Studies, 12(2), 18–30",
        citations: null,
        abstract: "「leaderful practice」として知られるリーダーシップの新たなパラダイムを発展させる。21世紀の組織においては、全員がリーダーとしての経験を共有する必要があり、それは逐次的にではなく同時かつ集合的に行われると主張する。他者への compassion から派生する熱烈な協働を目指す。",
        intervention: {
          study: "理論的論文。多様な組織での観察と事例から、集合的リーダーシップのパターンを抽出した。",
          practice: "リーダーシップが一人に宿るという前提を疑うとき、チームの中で何が起きているかの見え方が変わります。誰もがリードし、誰もが応答している——その瞬間を見つけることができるでしょうか。",
        },
      },
      {
        author: "Raelin, J. A.",
        year: 2016,
        title: "It's not about the leaders: It's about the practice of leadership",
        journal: "Organizational Dynamics, 45(2), 124–131",
        citations: null,
        abstract: "リーダーシップが特定の個人に宿るという神話を問い直す。リーダーシップとは個々のリーダーに関するものではなく、互いの仕事において共同でなされる選択を達成する集合的な相互作用実践であると論じ、対話を基盤とした「leadership-as-practice」への移行を訴える。",
        intervention: {
          study: "理論的論文。leadership-as-practice の概念整理と、カリスマ的アプローチの限界を論じた。",
          practice: "リーダーを育てようとするとき、その人だけを見ていると、見えないものがあると感じています。チームが実際に動いている場——そこで何が起きているかが、より多くのことを教えてくれるように思います。",
        },
      },
      {
        author: "Lord, R. G. & Shondrick, S. J.",
        year: 2011,
        title: "Leadership and knowledge: Symbolic, connectionist, and embodied perspectives",
        journal: "Leadership Quarterly, 22(1), 207–222",
        citations: null,
        abstract: "リーダーシップ研究が、古典的な記号論的知識観から連結主義、そして最近では身体化された・埋め込まれた認知観へと知識観の変化を内在的に反映してきたことを示す。身体化された認知観を除外することはリーダーシップ理解を貧困化させると主張する。",
        intervention: {
          study: "認知科学・知識論・リーダーシップ研究の統合的理論レビュー。3種の知識観の移行を体系的に整理した。",
          practice: "リーダーシップについて語るとき、言語化できるものだけを扱っていると、その半分以上を取り逃しているかもしれません。身体で感知されるもの——存在感・間・空気——もまた、リーダーシップの一部だと思います。",
        },
      },
    ],
  },
];

// ─────────────────────────────────────────
// 身体と場の理論
// ─────────────────────────────────────────
export const odClusters: Cluster[] = [
  {
    key: "theory",
    label: "場と身体の理論",
    iconPath: ICONS.theory,
    papers: [
      {
        author: "Styhre, A.",
        year: 2004,
        title: "The (re)embodied organization: four perspectives on the body in organizations",
        journal: "Human Resource Development International, 7(1), 101–116",
        citations: null,
        abstract: "組織理論における「身体」の概念を論じる基礎論文。ポストモダン・言語論的転回が貢献してきた一方、組織の身体化された活動が排除・周縁化・見過ごされてきたと主張する。現象学・フェミニズム理論・実践の理論・ポストモダン理論という4つの視点から身体を検討し、組織理論が人間の身体を統合することで初めてフルに理解できると結論づける。",
        intervention: {
          study: "理論的レビュー論文（4つの視点から身体を検討）。身体が組織論から排除されてきた経緯を体系的に分析した。",
          practice: "組織で起きていることを理解しようとするとき、言葉と数字だけでは届かない層があると感じています。そこにいる人々の身体が、今どんな状態にあるか——それも、組織の現実の一部だと思います。",
        },
      },
      {
        author: "Harquail, C. V. & King, A. W.",
        year: 2010,
        title: "Construing Organizational Identity: The Role of Embodied Cognition",
        journal: "Organization Studies, 31(12), 1619–1648",
        citations: null,
        abstract: "身体化された認知（embodied cognition）に基づく組織アイデンティティ理論を提示する。メンバーが組織について知ることは頭の中にあることだけでなく、身体的に経験することの関数であると論じる。組織アイデンティティの解釈は身体的経験によって「実証・確認」されなければならないという新たな次元を示す。",
        intervention: {
          study: "理論的論文（身体化認知×組織アイデンティティの統合）。認知科学の知見を組織論に適用する枠組みを構築した。",
          practice: "「この組織らしさ」は、頭で理解するより先に、そこにいる人の身体が感じ取っていることがあります。帰属感も違和感も、身体が先に知っているように思います。",
        },
      },
      {
        author: "Wright, A.",
        year: 2019,
        title: "Embodied Organizational Routines: Explicating a Practice Understanding",
        journal: "Journal of Management Inquiry, 28(2), 153–165",
        citations: null,
        abstract: "組織ルーティン研究における「人々」が脱身体化された行為者として扱われがちである問題を指摘し、身体化された視点からの組織ルーティン理論の発展に貢献する。組織の習慣・慣行が身体にいかに刻み込まれているかを実践理論のレンズから論じる。",
        intervention: {
          study: "理論的・概念的論文（実践理論から組織ルーティンの身体性を論じる）。習慣的行動パターンを身体化の視点で再解釈した。",
          practice: "組織のルーティンは、マニュアルではなく身体に刻まれているように感じます。変えようとしても変わらないとき、それは身体レベルに根ざしているからかもしれません。",
        },
      },
      {
        author: "Lockwood Harris, K. et al.",
        year: 2023,
        title: "Organizational Body Work: Efforts to Shape Human Bodies in Organizations",
        journal: "Academy of Management Annals, 17(1)",
        citations: null,
        abstract: "組織に埋め込まれた人間の身体を形成しようとする意図的な努力（organizational body work）を概念化する。身体の3次元（物質性・意味・機能性）を軸に209本の論文・書籍をレビューし、組織的身体ワークのプロセスモデルを構築する。Academy of Management Annals掲載の大規模レビュー論文。",
        intervention: {
          study: "209本の論文・書籍の系統的レビュー。組織が意図的・無意識的に人々の身体を「形成」しているパターンを体系化した。",
          practice: "組織は、意識するとしないとにかかわらず、そこにいる人の身体を形成しているように思います。「この組織でどんな身体が歓迎されているか」——その問いは、文化の深いところを照らすのではないでしょうか。",
        },
      },
      {
        author: "Kupers, W.",
        year: 2011,
        title: "Phenomenology of the Embodied Organization: The Contribution of Merleau-Ponty for Organizational Studies and Practice",
        journal: "International Journal of Organizational Analysis",
        citations: null,
        abstract: "メルロ＝ポンティの現象学を組織研究と実践に応用する。身体が組織における経験・意味・知識の根本的な基盤であるという視点から脱身体化された組織理論を批判し、「生きられた身体（lived body）」を組織分析の中心に置くことで感覚・情動・関係性の理解が深まると論じる。",
        intervention: {
          study: "メルロ＝ポンティの現象学の組織論への理論的適用。「生きられた身体」概念を組織分析に持ち込む枠組みを整理した。",
          practice: "組織で起きていることを感覚・情動・関係性のレベルで理解しようとするとき、「生きられた身体」という視点が、新しい入口を開くことがあります。",
        },
      },
    ],
  },
  {
    key: "team",
    label: "チーム・集合的ダイナミクスと身体",
    iconPath: ICONS.team,
    papers: [
      {
        author: "Edmondson, A. C.",
        year: 1999,
        title: "Psychological Safety and Learning Behavior in Work Teams",
        journal: "Administrative Science Quarterly, 44(4), 350–383",
        citations: 9112,
        abstract: "チーム心理的安全性——チームが対人的リスクをとるうえで安全であるというメンバーの共有された信念——という概念を導入し、学習行動とパフォーマンスへの影響をモデル化する。製造業51チームの研究で、心理的安全性が学習行動を、学習行動がパフォーマンスを媒介することを実証する。",
        intervention: {
          study: "製造業51チームを対象にした多方法フィールド研究（質問票・観察・インタビュー）。心理的安全性の測定尺度もこの研究で開発された。",
          practice: "心理的安全性は、アンケートで測る前に、身体が感知しているように思います。そのチームで発言するとき、身体がどんな状態にあるか——それが、数値の前に来る問いかもしれません。",
        },
      },
      {
        author: "Heaphy, E. D. & Dutton, J. E.",
        year: 2008,
        title: "Positive Social Interactions and the Human Body at Work: Linking Organizations and Physiology",
        journal: "Academy of Management Review, 33(1), 137–162",
        citations: 488,
        abstract: "職場における肯定的な社会的相互作用と人間の身体の生理的反応を結びつける。職場での高品質な関係がオキシトシン・コルチゾール・免疫系などに影響を与えることを示し、組織研究が生理学的・身体的プロセスを統合する必要があると主張する。チームの関係性と身体反応を直接接続した先駆的論文。",
        intervention: {
          study: "生理学・心理学・組織論の文献統合による理論的論文。職場のポジティブな関係が心臓血管系・免疫系に与える影響のメカニズムを整理した。",
          practice: "「職場の人間関係がいい」というのは、居心地や文化や道徳の話だと思っていた。\n\nでも、この研究が言っているのはもっと直接的なことで、高品質な関係はオキシトシンを上げ、コルチゾールを下げ、免疫系に影響する。つまり、健康診断で測れるレベルで、身体に届いている。\n\n身近な人の健康に自分が影響を受けやすい、というのはなんとなくみんなが知っていることと思う。家族や長く一緒にいる人と、ストレスの反応や体調が似てくることがある。それは単なる生活習慣の話だけではなく、もっと生理的なレベルで起きていることだ。\n\n職場もきっと同じだろう。「関係性」と「生理的健康度合い」は、思っていたより近いところにあるのかもしれない。",
        },
      },
      {
        author: "Gordon, I. et al.",
        year: 2020,
        title: "Physiological and Behavioral Synchrony Predict Group Cohesion and Performance",
        journal: "Scientific Reports, 10, 8484",
        citations: 77,
        isNew: true,
        abstract: "51の3人グループにドラミング課題を実施し、心電図（ECG）データを用いた生理的同期と行動的同期の両方がグループ凝集感を予測し、さらに生理的同期が後続の集団タスクのパフォーマンスを予測することを示した。「チームが一緒に身体的リズムを共有すると凝集感とパフォーマンスが上がる」という因果関係を実験で実証した数少ない論文。",
        intervention: {
          study: "51の3人グループがドラミング課題を共同で実施。心電図（ECG）で生理的同期を計測し、グループ凝集感とパフォーマンスとの相関を実験的に検証した。",
          practice: "身体共鳴、ということが起きる。\n\n<a href=\"https://www.youtube.com/watch?v=suxu1bmPm2g\" target=\"_blank\" rel=\"noopener noreferrer\">バラバラに置いたメトロノームが、しばらく経つと勝手に揃い出す</a>——あれは何度見ても面白い。講習会の会場に着いたとき、最初はみんな気がそぞろなのに、だんだんと場に馴染んでいく感じも、きっと同じことが起きているのだろうと思う。\n\nこの研究でいちばん印象に残ったのは、「仲良くなった感」という自己申告より、心拍の同期データの方が、チームのパフォーマンスを正確に予測していたこと。言葉より、身体の方が正直なのだろうか。",
        },
      },
      {
        author: "Reinero, D. A., Dikker, S. & Van Bavel, J. J.",
        year: 2021,
        title: "Inter-brain synchrony in teams predicts collective performance",
        journal: "Social Cognitive and Affective Neuroscience, 16(1–2), 43–57",
        citations: null,
        isNew: true,
        abstract: "174名を44グループに分けてEEGハイパースキャニング（複数脳同時計測）を行い、チームとして課題に取り組む条件と競合的個人として取り組む条件を比較。脳間同期（inter-brain synchrony）がチームの集合的パフォーマンスを予測し、自己報告によるグループ同一性よりも強力な予測因子であることを示した。",
        intervention: {
          study: "174名を44グループに分けてEEGハイパースキャニングを実施。チーム協力vs競合条件で脳波の同期パターンを比較計測した。",
          practice: "チームのパフォーマンスを予測するものは、自己申告の「うまくいっている感」より、身体・神経レベルの同期にある——そうデータは示しています。",
        },
      },
      {
        author: "Bushe, G. R. & Marshak, R. J.",
        year: 2009,
        title: "Revisioning Organization Development: Diagnostic and Dialogic Premises and Patterns",
        journal: "Journal of Applied Behavioral Science, 45(3), 348–368",
        citations: null,
        abstract: "ODを「診断的OD（問題を特定し解決する）」と「対話的OD（新しい現実を共に生成する）」に分類し、後者へのパラダイム転換を論じる。身体化された対話・センスメイキング・関係性の質が変革の鍵となるという視点から、身体性ODと接続しやすいODの基礎理論として機能する。",
        intervention: {
          study: "ODの診断的・対話的パラダイムの概念的比較分析。多様な組織介入事例を検討した。",
          practice: "変革は、問題を特定して解決することから始まるとは限らないように感じています。今ここで何が起きているかを、ともに感じることから始まる変革があるように思います。",
        },
      },
    ],
  },
  {
    key: "somaticOD",
    label: "ソマティック実践",
    iconPath: ICONS.somaticOD,
    papers: [
      {
        author: "Kenward, T.",
        year: 2018,
        title: "Embodied practices for OD work and life",
        journal: "OD Practitioner, 50(1), 37–43",
        citations: null,
        abstract: "OD実践者向けジャーナルに掲載された実践論文。OD（組織開発）の仕事と生活における身体化された実践の重要性を論じ、OD実践者自身が身体的認識を高めることがクライアントとの関わりにどう影響するかを示す。OD領域で数少ない身体化アプローチ論文のひとつ。",
        intervention: {
          study: "OD実践者としての実践記録・省察。介入前後の自己身体状態の観察と介入効果の関係を記述した。",
          practice: "介入の質は、介入者の身体状態に左右されると感じています。クライアントを変えようとする前に、自分の身体が今どんな状態にあるかを知ること——それが、ファシリテーションの土台になるかもしれません。",
        },
      },
      {
        author: "Hanold, M.",
        year: 2017,
        title: "Toward a New Approach to Authentic Leadership: The Practice of Embodied Dialogical 'Thinking' and the Promise of Shared Power",
        journal: "Advances in Developing Human Resources, 19(4), 454–466",
        citations: null,
        abstract: "従来の真正なリーダーシップ観は高度に個人主義的で合理的プロセスに基づいており、権力構造を再生産すると指摘する。身体化された対話的アプローチを通じて、共有された権力が真正性の文脈でどのように発展できるかを論じる。個人的権力の放棄と身体的対話への転換プロセスを示す。",
        intervention: {
          study: "大学院のリーダーシップ開発講座での参加者体験の質的分析。身体的対話によって「自分の権力を手放す」プロセスがどう起きたかを記録した。",
          practice: "権力を持つ側が身体で「手放す」とき、対話の質が変わることがあります。それは意志の決断より先に、身体の在り方の変化として現れるように感じます。",
        },
      },
      {
        author: "Haines, S.",
        year: 2019,
        title: "The Politics of Trauma: Somatics, Healing, and Social Justice",
        journal: "North Atlantic Books（書籍）",
        citations: null,
        abstract: "Generative Somatics の創始者による著作。ソマティクスを個人療法から組織・コミュニティ変革へと拡張する。トラウマと身体・権力構造・組織変革の接続を論じ、集合的なソマティック変革の理論と実践を提示する。組織変革にソマティクスを最もシステマティックに適用した実践書。",
        isBook: true,
        intervention: {
          study: "Generative Somatics の実践コミュニティでの長期フィールドワーク。個人のソマティック変容と組織変革の相互作用を記録した。",
          practice: "組織の変わらなさは、時として個人のトラウマや集団的な身体パターンと結びついていることがあります。その視点が開くとき、介入の意味が変わるように思います。",
        },
      },
      {
        author: "Scharmer, C. O.",
        year: 2009,
        title: "Theory U: Leading from the Future as It Emerges",
        journal: "Berrett-Koehler（書籍）",
        citations: null,
        abstract: "「プレゼンシング（presencing）」概念を通じて、組織変革における身体・感覚・知覚の役割を再定義する。ダウンローディング（既存パターンの反復）から脱し、身体の感覚を開くことで新しい可能性が立ち現れると論じる。組織変革論における身体性の最も広く参照される統合的フレームワーク。",
        isBook: true,
        intervention: {
          study: "150以上の組織リーダーへのインタビューと実践事例の収集。U字型の変容プロセスのパターンを特定した。",
          practice: "過去のパターンをなぞることをやめ、今ここで何が起きているかに身体を開く——そこから、まだ名前のない可能性が現れることがあります。",
        },
      },
      {
        author: "Creary, S. J. & Locke, K.",
        year: 2022,
        title: "Breaking the Cycle of Overwork and Recuperation: Altering Somatic Engagement Across Boundaries",
        journal: "Organization Science, 33(3), 873–900",
        citations: null,
        isNew: true,
        abstract: "ヨガティーチャートレーニングの2年間の民族誌研究に基づく。過重労働の解決策として「非仕事領域での回復（分離戦略）」ではなく、「ソマティック・エンゲージメント」（身体的経験への内省的つながり）を領域横断的に育む「統合戦略」を提唱する。組織論の最上位誌（Organization Science）に身体実践が正面から掲載された最新論文。",
        intervention: {
          study: "ヨガティーチャートレーニング受講者を2年間民族誌的に追跡。職場と非職場をまたぐ身体的自己認識の変化を記録した。",
          practice: "働くことと回復することを分けようとすることには、限界があるように感じています。仕事の中に身体感覚への気づきを持ち込むとき、疲弊のサイクルが変わり始めることがあります。",
        },
      },
    ],
  },
  {
    key: "neuro",
    label: "神経科学と場の安全性",
    iconPath: ICONS.neuro,
    papers: [
      {
        author: "Porges, S. W.",
        year: 2022,
        title: "Polyvagal Theory: A Science of Safety",
        journal: "Frontiers in Integrative Neuroscience",
        citations: 162,
        abstract: "ポリヴェーガル理論を「安全の科学」として提示する。神経知覚（neuroception）が、意識的な認知を介さずに環境の安全・危険を評価し身体状態を決定する仕組みを論じる。組織における「場の安全性」を身体・神経系レベルで説明する理論的基盤。心理的安全性の神経科学的根拠として活用できる。",
        intervention: {
          study: "神経生理学的実験と臨床観察の統合的理論構築。自律神経系の3階層（腹側迷走神経・交感神経・背側迷走神経）の機能を実証した。",
          practice: "ポリヴェーガル理論が言う「安全な場」は、驚くほど“深いところから癒しを届けてくれる”。私たちの神経系の、より根本的な層であり、日々のリズムからペースダウンしたところにおとずれる。\n\nおそらく、いや間違いなく、フィジカルトレーニングと同じで、体験しているものしか提供できない。その感覚にアクセスできなければ、それを届けることもできないからだ。\n\nクラニオセイクラルバイオダイナミクスやイールドというプレゼンスの鍛錬を積んでいる人は、このリソースが心底から溢れている。\n\nそういえば、「安心安全」という言葉がある。でもBeingによる身体性のプラクティスを受けた時、それは順序が逆だということに身をもって気づきが起こる。安全があって、はじめて安心がくる。\n\n私たちはそのことを、もう一度思い出す必要があるのかもしれない。",
        },
      },
      {
        author: "Kirrane, M. et al.",
        year: 2025,
        title: "The Neurobiology of Effective Leadership: Integrating Polyvagal Theory with the Coaching Leadership Style",
        journal: "Administrative Sciences, 15(12), 461",
        citations: null,
        abstract: "ポリヴェーガル理論とコーチング型リーダーシップを統合した神経生物学的フレームワークを提示する。腹側迷走神経状態（ventral vagal state）が心理的安全性・従業員エンゲージメント・チームパフォーマンスにどう影響するかを論じる。",
        intervention: {
          study: "ポリヴェーガル理論とコーチング型リーダーシップの理論的統合。神経生物学的メカニズムからコーチング効果を説明する枠組みを構築した。",
          practice: "コーチング型リーダーシップがなぜ機能するのかは、神経系のレベルで説明できるように思います。リーダーの身体状態が、チームの神経系に影響しているということが、この研究から見えてきます。",
        },
      },
    ],
  },
  {
    key: "learning",
    label: "学習・知識創造と身体",
    iconPath: ICONS.learning,
    papers: [
      {
        author: "Crossan, M. M., Lane, H. W. & White, R. E.",
        year: 1999,
        title: "An Organizational Learning Framework: From Intuition to Institution",
        journal: "Academy of Management Review, 24(3), 522–537",
        citations: null,
        abstract: "組織学習の「4I」フレームワーク（直感→解釈→統合→制度化）を提示する。「直感（intuition）」は身体的・暗黙的プロセスであるとし、組織学習が個人の身体的直感から始まることを示す。学習の始点としての身体を組織レベルに接続した理論的基盤。",
        intervention: {
          study: "多様な組織を対象にした理論的フレームワーク構築と検証。学習の4段階モデルを組織データで確認した。",
          practice: "組織の学習は、制度や手続きではなく、個人の身体的直感から始まっているように思います。その直感をどう扱うかが、学習文化の質を決めるのではないでしょうか。",
        },
      },
      {
        author: "Nonaka, I. & Konno, N.",
        year: 1998,
        title: "The Concept of 'Ba': Building a Foundation for Knowledge Creation",
        journal: "California Management Review, 40(3), 40–54",
        citations: 2235,
        abstract: "知識創造の「場（ba）」概念を提示する。暗黙知の共有・変換が、物理的・身体的・対面的な相互作用を通じて行われることを論じる。身体性と組織の知識創造・チームダイナミクスを結びつける日本発の理論的基盤。",
        intervention: {
          study: "Honda・Canon等日本企業の知識創造プロセスの分析。SECIモデルと「場」の関係を実例から導いた。",
          practice: "「場（ba）」は、情報が共有される場所ではなく、身体的な相互作用を通じて知識が生まれる場所だと感じています。何かが移ったと感じる場には、身体の共有があるように思います。",
        },
      },
      {
        author: "Tsoukas, H.",
        year: 2003,
        title: "Do We Really Understand Tacit Knowledge?",
        journal: "Handbook of Organizational Learning and Knowledge. Blackwell.",
        citations: null,
        abstract: "ポランニーの暗黙知概念を再考し、暗黙知が「明示化できない知識」ではなく「身体的実践に埋め込まれた知識」であると論じる。組織における知識は根本的に身体的実践に根ざしているという視点から、知識移転・OD実践への含意を示す。",
        intervention: {
          study: "ポランニーの暗黙知論の哲学的再解釈。「明示化できない知識」という誤解を解き、実践に埋め込まれた知識のあり方を分析した。",
          practice: "暗黙知は教えられるものではなく、一緒に実践する中で移るものだと感じています。「言葉にできない」ことが、実は最も重要な知識であることがあります。",
        },
      },
      {
        author: "Wenger, E.",
        year: 1998,
        title: "Communities of Practice: Learning, Meaning, and Identity",
        journal: "Cambridge University Press（書籍）",
        citations: 35989,
        abstract: "実践共同体（Community of Practice）理論を提示する。学習が「参加（participation）」という身体的・関係的プロセスを通じて起こり、知識が共同体の実践に身体化されることを論じる。チームが「実践共同体」としていかに学び変わるかの理論的枠組みとして直接使える。",
        isBook: true,
        intervention: {
          study: "保険会社の業務請求処理チームを2年間観察した民族誌。学習が日常業務の「参加」を通じて起きる様子を詳細に記録した。",
          practice: "学びは、教室ではなく参加の中で起きると感じています。同じ実践を共にすることが、関係と学びの両方を生む——そのことに気づくとき、育成の意味が変わるように思います。",
        },
      },
    ],
  },
];
