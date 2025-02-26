window.onload = function () {
  const register = document.getElementById("register");
  register.addEventListener("submit", function (e) {
    e.preventDefault();
    // 임력값 검사
    let userId = document.getElementById("user-id").value;
    let email = document.getElementById("email").value;
    let userPw1 = document.getElementById("user-pw1").value;
    let userPw2 = document.getElementById("user-pw2").value;
    // 에러메세지 초기화
    document.getElementById("user-id-error").textContent = "";
    document.getElementById("email-error").textContent = "";
    document.getElementById("user-pw1-error").textContent = "";
    document.getElementById("user-pw2-error").textContent = "";
    // 아이디 유효성 검사
    let userIdRegex = /^[a-zA-Z0-9]{4,15}$/; // 아이디는 4~15자리의 영문과 숫자
    //만약에(아이디조건에 맞지않을때)
    if(!userIdRegex.test(userId)){
        document.getElementById("user-id-error").textContent = 
        "아이디는 4~15자리의 영문과 숫자로 이루어져야 합니다.";
    }
    // 이메일 유효성 검사
    let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if(!emailRegex.test(email)){
        document.getElementById("email-error").textContent = 
        "올바른 이메일 주소를 입력하세요.";
    }
    // 비밀번호 유효성 검사
    let userPwRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if(!userPwRegex.test(userPw1)){
        document.getElementById("user-pw1-error").textContent = 
        "비밀번호는 8자 이상이어야 하며, 영문과 숫자를 최소 1개씩 포함해야 합니다.";
    }
    // 비밀번호 확인 유효성 검사
    // 만약에(userPw1,userPw2 맞지않으면)
    if(userPw1 !== userPw2){
        document.getElementById("user-pw2-error").textContent = 
        "비밀번호는 8자 이상이어야 하며, 영문과 숫자를 최소 1개씩 포함해야 합니다.";
    }
  });
};
