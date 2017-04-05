"use strict";

import request from 'request';

export function downloadEbook(index, callback) {

    let title, content;

    let config = {

        headers: {
            'User-Agent': 'okhttp/3.4.1',
            'x-token': global.Cookie.cookie
        },
        uri: 'https://12min.com.br/api/v1/books/' + index + '/details',
        json: true,
        method: 'GET'

    }


    request(config, (error, response, body) => {
        title = body.tagline;

        config.uri = 'https://12min.com.br/api/v1/books/' + index + '/content'

        if (title != undefined) {

            request(config, (error, response, body) => {

                content = body.html_text;


                global.ebooks.ebooks = {
                    "title": title,
                    "content": content
                }
                console.log('Salvando Livro: ' + title);

                callback();

            })

        }else{
        	callback();
        }



    })



}
