// 当前环境变量，dev test prod
export const currentEnv = process.env.FIG_ENV;
const ctext = currentEnv !== 'prod' ? `前端指北${currentEnv}` : '前端指北';

// 不要删除，用来识别当前项目环境
console.log(
  `\n %c ${ctext} %c https://www.feup.cn \n`,
  'color: #fff; background: #008bf8; padding:5px 0; font-size:12px;font-weight: bold;',
  'background: #008bf8; padding:5px 0; font-size:12px;',
);

export const isDevEnv = currentEnv === 'dev';
export const isPreEnv = currentEnv === 'pre';
export const isTestEnv = currentEnv === 'test';
export const isProdEnv = currentEnv === 'prod';
