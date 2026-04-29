import fs from 'fs';
import path from 'path';

const SOURCE_DIR = '/Users/hayatawataru/Human Body Project';
const DEST_DIR = '/Users/hayatawataru/human-body-web/src/content/vertical';

const metadata = [
  {
    number: 1, slug: '01', title: '筋収縮',
    description: '腕を動かす',
    systems: ['筋骨格系'],
    molecules: ['ACTA1', 'MYH2', 'TNNC2', 'ATP', 'RYR1'],
    sensationTags: ['腕が動く', '筋肉が動く', '力が入る'],
    series: '日常の体験',
  },
  {
    number: 2, slug: '02', title: '筋肉痛',
    description: '翌日の鈍痛',
    systems: ['筋骨格系', '免疫系', '神経系'],
    molecules: ['TTN', 'DES', 'IL6', 'PTGS2', 'MYOD1'],
    sensationTags: ['筋肉痛', '翌日痛い', 'DOMS', '鈍痛'],
    series: '日常の体験',
  },
  {
    number: 3, slug: '03', title: '息切れ',
    description: '走ると息が上がる',
    systems: ['呼吸器系', '循環器系', '神経系', '筋骨格系'],
    molecules: ['HBB', 'CA2', 'KCNK3', 'HIF1A'],
    sensationTags: ['息が上がる', '息切れ', '呼吸が苦しい', '走る'],
    series: '日常の体験',
  },
  {
    number: 4, slug: '04', title: '空腹感',
    description: 'お腹が減った',
    systems: ['消化器系', '内分泌系', '神経系'],
    molecules: ['GHRL', 'MBOAT4', 'NPY', 'AGRP', 'HCRT'],
    sensationTags: ['お腹が鳴る', '食べたい', '空腹', 'グレリン'],
    series: '日常の体験',
  },
  {
    number: 5, slug: '05', title: '眠気',
    description: '夜に眠くなる',
    systems: ['神経系', '内分泌系', '感覚器系'],
    molecules: ['アデノシン', 'AANAT', 'CLOCK', 'OPN4', 'HCRT'],
    sensationTags: ['眠い', '夜眠くなる', '朝だるい', '睡眠'],
    series: '日常の体験',
  },
  {
    number: 6, slug: '06', title: '緊張',
    description: '心拍が上がる',
    systems: ['神経系', '内分泌系', '循環器系', '筋骨格系'],
    molecules: ['PNMT', 'TH', 'CRH', 'HCN4', 'NR3C1'],
    sensationTags: ['緊張', '心拍が上がる', '手が震える', 'ドキドキ'],
    series: '日常の体験',
  },
  {
    number: 7, slug: '07', title: '骨形成',
    description: '運動で骨が強くなる',
    systems: ['筋骨格系', '内分泌系'],
    molecules: ['SOST', 'RUNX2', 'COL1A1', 'TNFSF11', 'FNDC5'],
    sensationTags: ['骨が強くなる', '運動', '骨密度'],
    series: '日常の体験',
  },
  {
    number: 8, slug: '08', title: '発汗',
    description: '汗をかく',
    systems: ['被覆系', '神経系', '循環器系'],
    molecules: ['AQP5', 'CFTR', 'SCNN1A', 'NOS3', 'CHRM3'],
    sensationTags: ['汗が出る', '発汗', '体温調節'],
    series: '日常の体験',
  },
  {
    number: 9, slug: '09', title: '筋膜',
    description: '筋膜の構造と力伝達',
    systems: ['筋骨格系', '神経系', '免疫系'],
    molecules: ['COL1A1', 'ELN', 'HAS1', 'HAS2', 'ACTA2', 'TGFB1', 'MMP1'],
    sensationTags: ['体が硬い', '筋膜が張る', 'コリ', 'テンセグリティ'],
    series: '実践者向け',
  },
  {
    number: 10, slug: '10', title: '固有受容感覚',
    description: '体の位置がわかる仕組み',
    systems: ['神経系', '筋骨格系'],
    molecules: ['PIEZO2', 'SCN8A', 'SLC17A7', 'GRIA1', 'GRIA2', 'GRM1'],
    sensationTags: ['体の位置がわかる', 'バランス', '固有受容', '目を閉じても立てる'],
    series: '実践者向け',
  },
  {
    number: 11, slug: '11', title: '痛みの神経学',
    description: 'なぜ痛いのか・慢性痛の正体',
    systems: ['神経系', '免疫系', '内分泌系'],
    molecules: ['TRPV1', 'SCN9A', 'TAC1', 'PTGS2', 'POMC', 'OPRM1'],
    sensationTags: ['痛い', '慢性痛', '炎症', 'ゲートコントロール'],
    series: '実践者向け',
  },
  {
    number: 12, slug: '12', title: '筋肥大',
    description: '鍛えると筋肉が大きくなる',
    systems: ['筋骨格系', '内分泌系'],
    molecules: ['MTOR', 'AKT1', 'RPS6KB1', 'PAX7', 'MYOD1', 'FBXO32'],
    sensationTags: ['筋肉が大きくなる', '筋トレ', 'mTOR', '衛星細胞'],
    series: '実践者向け',
  },
  {
    number: 13, slug: '13', title: '脊髄反射',
    description: '脳を介さない自動運動応答',
    systems: ['神経系', '筋骨格系'],
    molecules: ['SLC17A7', 'GRIA1', 'GRIA2', 'GLRA1', 'GLRB', 'GPHN', 'CHAT'],
    sensationTags: ['反射', '膝を叩く', '自動的に動く', 'CPG'],
    series: '神経系の階層',
  },
  {
    number: 14, slug: '14', title: '前庭系',
    description: '重力を感じる・視界が安定する',
    systems: ['感覚器系', '神経系'],
    molecules: ['TMC1', 'CDH23', 'PCDH15', 'CACNA1D', 'KCNQ4', 'ATP2B2'],
    sensationTags: ['めまい', 'バランス', 'VOR', '乗り物酔い', '耳石'],
    series: '神経系の階層',
  },
  {
    number: 15, slug: '15', title: '脳幹',
    description: '生命維持と全脳の基調設定',
    systems: ['神経系', '循環器系', '呼吸器系'],
    molecules: ['TH', 'SLC18A2', 'SLC6A3', 'SLC6A4', 'TPH2', 'SNCA'],
    sensationTags: ['呼吸', '覚醒', 'ドーパミン', 'パーキンソン', '脳幹'],
    series: '神経系の階層',
  },
  {
    number: 16, slug: '16', title: '小脳',
    description: 'タイミング・予測・運動学習',
    systems: ['神経系'],
    molecules: ['CALB1', 'GRM1', 'GRID2', 'CACNA1A', 'PRKCG', 'GJD2'],
    sensationTags: ['体で覚える', '運動学習', 'LTD', 'プルキンエ細胞', '失調'],
    series: '神経系の階層',
  },
  {
    number: 17, slug: '17', title: '大脳皮質',
    description: '意図して動かす・感じて認識する',
    systems: ['神経系', '筋骨格系'],
    molecules: ['CAMK2A', 'GRIN2A', 'GRIN2B', 'GRIA1', 'ARC', 'BDNF', 'DLG4'],
    sensationTags: ['意識的に動かす', 'LTP', 'ホムンクルス', '随意運動', '皮質可塑性'],
    series: '神経系の階層',
  },
  {
    number: 18, slug: '18', title: '運動制御の統合',
    description: '全システムの連結マップ',
    systems: ['神経系', '感覚器系', '筋骨格系'],
    molecules: ['PIEZO2', 'TMC1', 'CALB1', 'CAMK2A', 'TH'],
    sensationTags: ['歩く', '立つ', '姿勢', '運動制御', '階層モデル'],
    series: '神経系の階層',
  },
];

const sourceFiles = {
  1: 'VERTICAL_01_筋収縮.md',
  2: 'VERTICAL_02_筋肉痛.md',
  3: 'VERTICAL_03_息切れ.md',
  4: 'VERTICAL_04_空腹感.md',
  5: 'VERTICAL_05_眠気.md',
  6: 'VERTICAL_06_緊張.md',
  7: 'VERTICAL_07_骨形成.md',
  8: 'VERTICAL_08_発汗.md',
  9: 'VERTICAL_09_筋膜.md',
  10: 'VERTICAL_10_固有受容感覚.md',
  11: 'VERTICAL_11_痛みの神経学.md',
  12: 'VERTICAL_12_筋肥大.md',
  13: 'VERTICAL_13_脊髄反射.md',
  14: 'VERTICAL_14_前庭系.md',
  15: 'VERTICAL_15_脳幹.md',
  16: 'VERTICAL_16_小脳.md',
  17: 'VERTICAL_17_大脳皮質.md',
  18: 'VERTICAL_18_運動制御の統合.md',
};

for (const meta of metadata) {
  const sourceFile = path.join(SOURCE_DIR, sourceFiles[meta.number]);
  const destFile = path.join(DEST_DIR, `${meta.slug}.md`);

  const originalContent = fs.readFileSync(sourceFile, 'utf-8');

  const frontmatter = `---
number: ${meta.number}
title: "${meta.title}"
description: "${meta.description}"
systems: ${JSON.stringify(meta.systems)}
molecules: ${JSON.stringify(meta.molecules)}
sensationTags: ${JSON.stringify(meta.sensationTags)}
series: "${meta.series}"
---

`;

  fs.writeFileSync(destFile, frontmatter + originalContent);
  console.log(`✓ ${meta.slug}.md`);
}

console.log('\n完了：18ファイルを生成しました');
