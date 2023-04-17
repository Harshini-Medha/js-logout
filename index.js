function content(event) {
  event.preventDefault();
  let a = document.getElementById("email").value;
  let b = document.getElementById("password").value;
let newArr = [a, b ]
newArr.map((ele)=>console.log(ele))

if(a=="root@gmail.com"&& b =="1234")
{
localStorage.setItem('user',true)
  window.location.href=('http://127.0.0.1:5500/dashboard.html')


}
else
{
  alert("wrong Password or ID");
}



}
