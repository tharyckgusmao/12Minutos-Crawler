"use strict";

import { login } from './login.js';
import ebooks from './ebooks.js';
import { downloadEbook } from './downloadEbook.js';
import { saveDisk } from './saveEbook.js';


	


	let ebk = new ebooks();
	let max = 145;
	global.ebooks = ebk;
	global.userLogin = process.argv[2];
	global.passLogin = process.argv[3];


	login((callback)=>{


		for(let i = 1; i < max ; i++){

			downloadEbook(i,()=>{
					console.log("salvo")
			});

			
		}

		saveDisk(()=>{
			console.log('Completo')
		});


	})

