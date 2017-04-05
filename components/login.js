"use strict";

import request from 'request';
import Cookie from './cookie.js'

export function login(callback) {
    let cok = new Cookie();


    let config = {

        headers: {
            'User-Agent': 'okhttp/3.4.1',
        },
        uri: 'https://12min.com.br/api/v1/login',
        body: {
            "email": global.userLogin,
            "password": global.passLogin
        },
        json: true,
        method: 'POST'
    }


    request(config, (error, response, body) => {
        cok.cookie = body.authentication_token;
    	global.Cookie = cok;

    	callback();

    })




}
