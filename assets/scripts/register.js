import { apiService } from './constants.js';

$("#registerBtn").click(function() {
    let data = {
        name: $('#name').val(),
        email: $('#email').val(),
        password: $('#password').val(),
        password_confirmation: $('#cpass').val()
    }
    apiService('POST', 'register', data)
});