import { writeFile } from 'fs';

// Configure Angular `environment.ts` file path
const targetPath = './src/environments/environment.ts';

const fs = require('fs')
fs.writeFileSync('./.env', `API_TOKEN=${process.env.API_TOKEN}\n`)

// Load node modules
const colors = require('colors');
require('dotenv').load();

// `environment.ts` file structure
const envConfigFile = `export const environment = {
    API_TOKEN: '${process.env.API_TOKEN}',
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