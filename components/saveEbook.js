"use strict";

import fs from 'fs';

export function saveDisk (callback){

		let ebooks = global.ebooks.convert();

		fs.writeFile('Ebooks.json', ebooks, 'utf8',callback);


}