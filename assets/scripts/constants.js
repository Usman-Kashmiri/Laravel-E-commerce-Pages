export const API_URL = 'http://localhost:8000/api/v1/';

function apiService(method, urlEndpoint, data) {
    $.ajax({
        method: method,
        url: API_URL + urlEndpoint,
        data: data,
        headers: { 'Accept': 'application/json' },
        success: function(response) {
            if (response.token != '' || undefined) {
                localStorage.setItem('token', response.token);
                localStorage.setItem('username', response.data.name);
                localStorage.setItem('email', response.data.email);
            }
            return response
        }
    })
}

export { apiService };