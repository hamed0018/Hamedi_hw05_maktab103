// que1
// const user = {
//     Name : "hamed" ,
//     age : 19 ,
//     sayhello : function(){
//         console.log(` hello ${this.Name}`);
//     }
// }
// user.sayhello()
//que2
// const pedometer = {
//     step : 0 ,
//     increase : function(){
//         this.step ++
//         return pedometer
//     },
//     decrease : function(){
//         this.step --
//         return pedometer
//     },
//     reset : function(){
//         this.step = 0
//         return pedometer
//     },
//     read : function(){
//         console.log(this.step);
//         return pedometer
//     }
// }
// pedometer.increase().read()
// pedometer.increase().read()
// pedometer.decrease().read()
// pedometer.increase().read()
// pedometer.increase().read()
// que3
// function sortage (a , b) {
//     return a.age - b.age
// }
// const sortByAge = (arry) =>{
//     return arry.sort(sortage)
// }
// const users = [
//     {
//         name  :"hamed" ,
//         age : 19 
//     }
//     ,
//     {
//         name  :"ali" ,
//         age : 12 
//     }
//     ,
//     {
//         name  :"mammad" ,
//         age : 30 
//     }
// ]
// console.log(sortByAge(users));
// que4
// const notifelemnt = document.getElementById('notif')
// const showNotif =(obj)=>{
//     notifelemnt.style.position = "absolute"
//     notifelemnt.innerText = obj.html ,
//     notifelemnt.style.top = obj.top ,
//     notifelemnt.style.right = obj.right ,
//     notifelemnt.classList = obj.classname 
// }
// showNotif({
//     html : "hamed" ,
//     top : "40px" ,
//     right : "440px",
//     classname : "hi"
// })
// que5
// const ask = (question , yes , no) =>{
//     if(confirm(question)){
//         yes()
//     }
//     else
//     no()
// }
// ask("Do you agree?" , ()=> alert("agree") , ()=>alert("You canceled the execution."))