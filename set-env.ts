import { writeFile } from 'fs';

// Configure Angular `environment.ts` file path
const targetPath = './src/environments/environment.ts';

// Load node modules
const colors = require('colors');
require('dotenv').load();

// `environment.ts` file structure
//GamNaVlJ5cDV0M19ZAYV9pRHFYS2pnLXRNOHVjWkxEUUN4RDVvRTF6YnpLakJwS0VYWAZDZD
const envConfigFile = `export const environment = {
    API_TOKEN: '',
};
`;

console.log(colors.magenta('The file `environment.ts` will be written with the following content: \n'));
console.log(colors.grey(envConfigFile));
console.log(process.env.API_TOKEN);
writeFile(targetPath, envConfigFile, function (err) {
   if (err) {
       throw console.error(err);
   } else {
       console.log(colors.magenta(`Angular environment.ts file generated correctly at ${targetPath} \n`));
   }
});