function reg()
{
    let name = document.querySelector('#name').value;
    let uname = document.querySelector('#uname').value;
    let mobile =parseInt(document.querySelector('#mobile').value);
    let pass = document.querySelector('#pass').value;
    let cpass = document.querySelector('#cpass').value;

    console.log(name,uname,mobile,pass,cpass);
    let insert ={
        names:name,
        username:uname,
        mobile:mobile,
        password:pass,
        confirm_password:cpass
    }
    fetch('')
}