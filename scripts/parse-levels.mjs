/**
 * parse-levels.mjs
 * MDファイルからL1〜L10セクションを抽出してJSONに変換する
 * prebuildとして実行: npm run build
 */
import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const contentDir = join(__dirname, '../src/content/vertical');
const outputDir = join(__dirname, '../src/data');

function parseFrontmatter(raw) {
  const match = raw.match(/^---\n([\s\S]*?)\n---\n/);
  if (!match) return { frontmatter: {}, body: raw };

  const body = raw.slice(match[0].length);
  const fm = {};
  let currentKey = null;

  for (const line of match[1].split('\n')) {
    const keyLine = line.match(/^(\w+):\s*(.*)$/);
    if (keyLine) {
      currentKey = keyLine[1];
      const val = keyLine[2].trim();
      if (val === '') {
        fm[currentKey] = [];
      } else if (!isNaN(val)) {
        fm[currentKey] = Number(val);
      } else {
        fm[currentKey] = val.replace(/^['"]|['"]$/g, '');
      }
    } else if (line.match(/^\s+-\s+/) && currentKey) {
      const item = line.replace(/^\s+-\s+/, '').replace(/^['"]|['"]$/g, '').trim();
      if (!Array.isArray(fm[currentKey])) fm[currentKey] = [];
      fm[currentKey].push(item);
    }
  }
  return { frontmatter: fm, body };
}

function extractLevels(body) {
  const levels = {};
  // "## L{n}：" で始まるセクションに分割
  const parts = body.split(/^(?=## L\d+：)/m);

  for (const part of parts) {
    const headingMatch = part.match(/^## (L(\d+))：(.+)\n/);
    if (!headingMatch) continue;

    const key = headingMatch[1];      // "L1"〜"L10"
    const num = parseInt(headingMatch[2]);
    const title = headingMatch[3].trim();
    // headingの後ろの "---\n" を取り除いてコンテンツを整形
    const content = part
      .slice(headingMatch[0].length)
      .replace(/^---\n/, '')
      .trim();

    levels[key] = { level: num, title, content };
  }
  return levels;
}

// 01〜17 を処理（18は統合ドキュメントのため除外）
const allDocs = {};
for (let i = 1; i <= 17; i++) {
  const id = String(i).padStart(2, '0');
  const filePath = join(contentDir, `${id}.md`);
  try {
    const raw = readFileSync(filePath, 'utf-8');
    const { frontmatter, body } = parseFrontmatter(raw);
    const levels = extractLevels(body);
    const levelCount = Object.keys(levels).length;

    allDocs[id] = { id, ...frontmatter, levels };

    const missing = [];
    for (let l = 1; l <= 10; l++) {
      if (!levels[`L${l}`]) missing.push(`L${l}`);
    }
    const warn = missing.length ? ` ⚠ missing: ${missing.join(',')}` : '';
    console.log(`${id}: ${levelCount}/10 levels${warn}`);
  } catch (e) {
    console.error(`Error ${id}:`, e.message);
  }
}

mkdirSync(outputDir, { recursive: true });
const outputPath = join(outputDir, 'levels.json');
writeFileSync(outputPath, JSON.stringify(allDocs, null, 2), 'utf-8');
console.log(`\n✓ ${outputPath}`);
console.log(`  docs: ${Object.keys(allDocs).length}`);
