import fs from 'fs';
import path from 'path';

const ROOT = process.cwd();
const SRC = path.join(ROOT, 'src');
const TRANSLATIONS_DIR = path.join(SRC, 'shared/lib/i18n/translations');
const I18N_BASE_DIR = path.join(SRC, 'shared/lib/i18n');
const LOCALES_FILE = path.join(I18N_BASE_DIR, 'config/locales.ts');

const localesContent = fs.readFileSync(LOCALES_FILE, 'utf-8');
const localesMatch = localesContent.match(/export const LOCALES = \[([^\]]+)]/);
if (!localesMatch) throw new Error('Could not parse LOCALES from locales.ts');
const LOCALES = localesMatch[1].split(',').map((s) => s.trim().replace(/['"]/g, ''));

function getAllSubdirs(dir: string): string[] {
  const results: string[] = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(fullPath);
      results.push(...getAllSubdirs(fullPath));
    }
  }
  return results;
}

const allSubdirs = getAllSubdirs(SRC);
const i18nFolders = allSubdirs.filter(
  (dir) => path.basename(dir) === 'i18n' && !dir.startsWith(I18N_BASE_DIR),
);

console.log(
  'Found i18n folders:',
  i18nFolders.map((f) => path.relative(ROOT, f).replace(/\\/g, '/')),
);

const mergedTranslations: Record<string, Record<string, string>> = {};
for (const locale of LOCALES) {
  mergedTranslations[locale] = {};
}

for (const folder of i18nFolders) {
  for (const locale of LOCALES) {
    const filePath = path.join(folder, `${locale}.ts`);
    if (!fs.existsSync(filePath)) continue;

    const content = fs.readFileSync(filePath, 'utf-8');
    const match = content.match(/export default\s*({[\s\S]*?})\s*as const;/);
    if (!match) continue;

    const obj = eval('(' + match[1] + ')') as Record<string, string>;
    for (const key in obj) {
      if (mergedTranslations[locale][key] && mergedTranslations[locale][key] !== obj[key]) {
        console.warn(`Duplicate key ${key} in folder ${path.relative(ROOT, folder)}, overriding`);
      }
      mergedTranslations[locale][key] = obj[key];
    }
  }
}

if (!fs.existsSync(TRANSLATIONS_DIR)) fs.mkdirSync(TRANSLATIONS_DIR, { recursive: true });

for (const locale of LOCALES) {
  const outFile = path.join(TRANSLATIONS_DIR, `${locale}.ts`);
  const content = `export default ${JSON.stringify(mergedTranslations[locale], null, 2)} as const;\n`;
  fs.writeFileSync(outFile, content, 'utf-8');
  console.log(`Written ${outFile}`);
}

console.log('All translations merged successfully!');
