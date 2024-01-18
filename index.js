const token = ~~[Math.random() * 12345678]

const pictures = ["1.jpg", "2.jpg", "3.jpg"]

function login(username) {
    console.log('processing...memvalidasi data!')
    setTimeout(() => {
    return {token, username}
}, 200)
}

function getUser(token) {
    if(token) return {apiKey: "xkey123"}
}

function getPictures (apiKey) {
    if(apiKey) return pictures
}

const user = login("muhammad_yusuf");
console.log(user)
