"use strict"

import fs from 'fs';
import ebooks from './Ebooks.json';
import pdf from 'html-to-pdf';

let options = { format: 'Letter' };

let len = ebooks.ebooks.length - 1;


pdf.setInputEncoding('UTF-8');
pdf.setOutputEncoding('UTF-8');
	

let convert = (index,callback) =>{

    let title =  ebooks.ebooks[index].title != " " ? ebooks.ebooks[index].title : "Sem Titulo-"+index ;
    let data = '<h2>' + title + '</h2>' + ebooks.ebooks[index].content;



    pdf.convertHTMLString(data, './livros/' + title,
        function(error, success) {

            if (error)
                console.log(title);
            callback();

        }
    );



}




for (let i = 0; i < len; i++) {


    convert(i,()=>{
    	console.log(i)
    })

};


