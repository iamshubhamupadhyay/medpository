const loginForm = document.getElementById('login-form')
loginForm.addEventListener('submit', function (e) {
    e.preventDefault();

    var username = document.getElementById('username').value
    var password = document.getElementById('password').value

    const data = { username, password }
    fetch('http://localhost:5000/api/user/login', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)

    }).then((res) => {
        return res.json()
    }).then((res) => {
        localStorage.setItem('token', JSON.stringify(res.token));
        window.location.replace('http://127.0.0.1:5502/dashboard.html');
    }).catch(err => {
        console.log(err)
    })
})