import { apiService } from './constants.js';

$("#loginBtn").click(function() {
    let data = {
        email: $('#email').val(),
        password: $('#password').val(),
    }
    apiService('POST', 'login', data)
});