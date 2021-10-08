import { API_URL } from './constants';

dotenv.config();

$("#registerBtn").click(function() {
    $.ajax({
        method: 'POST',
        url: API_URL + 'register',
        data: {
            name: $('#name').val(),
            email: $('#email').val(),
            password: $('#password').val(),
            password_confirmation: $('#cpass').val()
        },
        success: function(response) {
            console.log(response)
            localStorage.setItem('name', response.data.name);
            localStorage.setItem('email', response.data.email);
            localStorage.setItem('token', response.token);
            window.location()
        },
        fail: function(xhr, status, error) {
            console.log(error)
        }
    });
})

console.log(API_URL)

let data = {
    name: $('#name').val(),
    email: $('#email').val(),
    password: $('#password').val(),
    password_confirmation: $('#cpass').val()
}

function apiService(method, urlEndpoint, data) {
    $.ajax({
        method: method,
        url: urlEndpoint,
        data: data,
        success: function(response) {

        }
    })
}