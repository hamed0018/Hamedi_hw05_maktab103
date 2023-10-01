"use strict";
const inputUserName = document.getElementById("username");
const inputpassword = document.getElementById("password");
const inputrepaidpassword = (document.getElementById("repaidpassword"));
const btnsubmit = document.getElementById("btn");
const Listuser = [];
const handelCreateUser = (user) => {
    const objUser = {
        username: user.username,
        password: user.password,
    };
    Listuser.push(objUser);
};
const handelPassword = () => {
    if (inputpassword.value === inputrepaidpassword.value) {
        const Usercreate = {
            username: inputUserName.value,
            password: inputpassword.value,
        };
        handelCreateUser(Usercreate);
    }
    else {
        console.log("error");
    }
    console.log(Listuser);
};
btnsubmit.addEventListener("click", () => handelPassword());
