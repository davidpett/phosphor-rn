const fs = require('fs');
const path = require('path');
const child_process = require('child_process');
const { transform } = require('@svgr/core');
const camelcase = require('camelcase');

const svgr = path.resolve(
  require.resolve('@svgr/core'),
  '../../../cli/bin/svgr'
);
const iconSourcePath = path.resolve(
  require.resolve('@phosphor-icons/core'),
  '../../assets'
);
const outDir = path.resolve(__dirname, '../src/phosphor-icons');

const iconWeights = fs
  .readdirSync(iconSourcePath, { withFileTypes: true })
  .filter((dirent) => dirent.isDirectory())
  .map((dirent) => dirent.name);

const icons = fs
  .readdirSync(`${iconSourcePath}/regular`)
  .map((dirent) => path.parse(dirent).name);

const generateWeightIndex = () => {
  iconWeights.forEach((weight) => {
    const weightSuffix = weight === 'regular' ? '' : `-${weight}`;
    const str = icons.map((value) => {
      const w = `${value}${weightSuffix}`;
      return `export { default as ${camelcase(w, {
        pascalCase: true,
      })} } from './${w}'`;
    });
    fs.writeFileSync(`${outDir}/${weight}/index.ts`, str.join('\n'));
  });
};
const generateIndex = () => {
  fs.writeFileSync(
    `${outDir}/index.ts`,
    iconWeights.map((w) => `export * from './${w}';`).join('\n')
  );
};
const generateTypes = () => {
  const variants = [
    'export type PhosphorIconVariant =',
    ...icons.map((val) => `'${val}'`),
  ].join('\n  | ');
  const weights = [
    'export type PhosphorIconWeight =',
    ...iconWeights.map((val) => `'${val}'`),
  ].join('\n  | ');
  fs.writeFileSync(
    `${outDir}/phosphor-icon.types.ts`,
    [variants, weights].join('\n')
  );

  const allIcons = `import type { PhosphorIconVariant } from './phosphor_icon.types';
export const ALL_PHOSPHOR_ICONS: PhosphorIconVariant[] = [${icons
    .map((val) => `'${val}'`)
    .join(',')}]`;
  fs.writeFileSync(`${outDir}/phosphor-icon.ts`, allIcons);
};
const generateIcons = () => {
  try {
    fs.rmSync(outDir, { recursive: true, force: true });
  } catch (err) {}
  try {
    child_process.execSync(
      `node ${svgr} --out-dir ${outDir} --config-file ./scripts/svgr.config.js -- ${iconSourcePath}`
    );
  } catch (err) {
  } finally {
    generateWeightIndex();
    generateIndex();
    generateTypes();

    child_process.execSync('npm run lint');
  }
};

generateIcons();
