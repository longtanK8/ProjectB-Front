import jwtDecode from "jwt-decode";
// not use
export function isTokenExpired() {
  var token = sessionStorage.getItem("token");
  var expire = jwtDecode(token).exp;
  var timeNow = Math.floor(Date.now() / 1000);
  var isExpired = expire - timeNow;
  if (isExpired > 0) {
    console(isExpired);
  } else {
    console.log(isExpired);
    sessionStorage.clear();
    alert("You need to login again");
    setTimeout(() => {
      window.location = "http://localhost:4000/";
    }, 2000);
  }
}
