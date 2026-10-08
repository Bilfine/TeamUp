// let loginBtn = document.querySelector(".sub");

// loginBtn.addEventListener('click',function(event){
//     event.preventDefault();

//     let username=document.getElementById('name').value.trim();
//     let password=document.getElementById('password').value.trim();

//     if (username === "" || password === "") {
//     alert("Please fill in all fields.");
//     return;
//     }

//     let user = JSON.parse(localStorage.getItem(username));


//     // is null (not found)
//     if(!user){
//         alert("Username does not exist")
//         return;
//     }
//     if(user.password !== password){
//         alert("Incorrect password")
//         return;
//     }
//     alert("login successful!");
//     window.location.href="home-page.html";
// });

// let google = document.querySelector(".google");

// google.addEventListener('click',function(){

//     let googleEmail = prompt("Enter your Google email:");

//     googleEmail = googleEmail.trim();

//     if (googleEmail === "") {
//         alert("Please enter your email.");
//         return;
//     }

//     let found = false;

//     for(let i=0;i<localStorage.length;++i){

//         let key = localStorage.key(i);
//         let user = JSON.parse(localStorage.getItem(key));

//         if(user.email === googleEmail){
//             found=true;
//             alert('Login successful!');
//             window.location.href = "home-page.html";
//             break;
//         }
//     }

//     if (!found) {
//         alert("No account found with this email.");
//     }
// });

let loginBtn = document.querySelector(".sub");

loginBtn.addEventListener("click", function (event) {

    event.preventDefault();

    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();

    let foundUser = null;

    for (let i = 0; i < localStorage.length; i++) {

        let key = localStorage.key(i);
        let user = JSON.parse(localStorage.getItem(key));

        if (user && user.email === email) {
            foundUser = user;
            break;
        }
    }

    if (foundUser == null) {
        alert("Email not found");
        return;
    }

    if (foundUser.password !== password) {
        alert("Incorrect password");
        return;
    }

    alert("Login successful!");
    window.location.href = "index.html";
});



let google = document.querySelector(".google");

google.addEventListener('click',function(){

    let googleEmail = prompt("Enter your Google email:");

    googleEmail = googleEmail.trim();

    if (googleEmail === "") {
        alert("Please enter your email.");
        return;
    }

    let found = false;

    for(let i=0;i<localStorage.length;++i){

        let key = localStorage.key(i);
        let user = JSON.parse(localStorage.getItem(key));

        if(user.email === googleEmail){
            found=true;
            alert('Login successful!');
            window.location.href = "index.html";
            break;
        }
    }

    if (!found) {
        alert("No account found with this email.");
    }
});