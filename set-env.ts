/*
This was an attempt to hide the Instagram API token
as it was not working and the API does not return any sensitive information,
I decided to leave the token open for now.
When you have some time and want to return to this issue, here are some useful links:
https://ferie.medium.com/how-to-pass-environment-variables-at-building-time-in-an-angular-application-using-env-files-4ae1a80383c
https://www.freecodecamp.org/news/hide-api-keys-in-frontend-apps-using-netlify-functions/
https://itnext.io/how-to-use-system-environment-variables-process-env-in-angular-application-b9e7104dcc98
https://indepth.dev/tutorials/angular/inject-environment-variables
https://plainenglish.io/blog/setup-dotenv-to-access-environment-variables-in-angular-9-f06c6ffb86c0
https://answers.netlify.com/t/cant-access-environment-variables/20314/3
https://stackoverflow.com/questions/48453493/set-environment-variable-for-build-in-netlify
*/

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