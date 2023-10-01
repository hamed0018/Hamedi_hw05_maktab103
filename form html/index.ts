const inputUserName = <HTMLInputElement>document.getElementById("username");
const inputpassword = <HTMLInputElement>document.getElementById("password");
const inputrepaidpassword = <HTMLInputElement>(
  document.getElementById("repaidpassword")
);
const btnsubmit = <HTMLButtonElement>document.getElementById("btn");

type objuser = {
  username: string;
  password: string;
};

const Listuser: Array<objuser> = [];
const handelCreateUser = (user: objuser) => {
  const objUser: objuser = {
    username: user.username,
    password: user.password,
  };
  Listuser.push(objUser);
};
const handelPassword = () => {
  if (inputpassword.value === inputrepaidpassword.value) {
    const Usercreate: objuser = {
      username: inputUserName.value,
      password: inputpassword.value,
    };
    handelCreateUser(Usercreate);
  } else {
    console.log("error");
  }
  console.log(Listuser);
};

btnsubmit.addEventListener("click", () => handelPassword());

