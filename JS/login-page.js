let form=document.getElementById('register');

form.addEventListener("submit", function(event){
    // submit -> his object (event) reloads the page after sending data.
    // منع اعادة تحميل الصفحة
    event.preventDefault(); 

    let username=document.getElementById('name').value.trim();
    let Dept=document.getElementById('Department').value.trim();
    let password=document.getElementById('password').value.trim();
    let ConfirmPassword=document.getElementById('ConfirmePass').value.trim();
    let email=document.getElementById('email').value.trim();
    let number=document.getElementById('number').value.trim();

    if(username===""|| Dept===""||password===""||ConfirmPassword===""||email===""||number===""){
        alert("Please fill in all fields.");
        return;
    }
    if(password != ConfirmPassword){
        alert("Passwords do not match.")
        return;
    }
    if(localStorage.getItem(username)){
        alert("Username already exists.")
        return;
    }

    let user={
        name: username,
        email: email,
        password: password,
        number: number,
        department: Dept
    };
    // key->arwa  ,   value -> {"arwa", arwa_ahmed515, "jhdiehh@hmail.com", 01024360677, ......}

    localStorage.setItem(username,JSON.stringify(user));  
    alert("redisteration successful!")
    window.location.href = "index.html";

});

let signUP=document.getElementById('sign-up');

    signUP.addEventListener('click',function(){
        window.location.href="shahd.html";
});