window.onload = function () {
  // 제출버튼을 클릭했을때 확인 함수
  const showconfirmaion = document.getElementById("showconfirmation");
  showconfirmaion.addEventListener("click", function () {
    const form = document.getElementById("testForm");
    // 메시지 확인 변수
    const confirmation = document.getElementById("confirmation");
    // 입력된 폼 데이터 가져오기
    const userName = form.userName.value.trim();
    // const userName = document.getElementById("userName").value
    console.log(userName);

    // console.log(userName);
    const major = form.major.value;
    // console.log(major);
    const subject = form.subject.value;
    // console.log(subject);
    const mailing1 = form.mailling1.checked;
    const mailing2 = form.mailling2.checked;
    const mailing3 = form.mailling3.checked;
    // console.log(mailing1);
    // 에러 메시지 초기화
    let errorMessage = "";
    // 유효성 검사
    if (userName === "") {
      errorMessage += `<p>이름을 입력해 주세요.</p>`;
    }
    if (major === "" || major === "----- 학과 -----") {
      errorMessage += `<p>학과를 선택해 주세요.</p>`;
    }
    if (subject === "") {
      errorMessage += `<p>신청할 과목을 선택해 주세요.</p>`;
    }
    if (!mailing1 && !mailing2 && !mailing3) {
      errorMessage += `<p>메일로 받을 뉴스를 하나 이상 선택해 주세요.</p>`;
    }
    // 에러 메시지 있는경우
    if (errorMessage) {
      confirmation.innerHTML = `
          <div class="error">${errorMessage}</div>
          `;
      confirmation.style.display = "block";
      return; //폼 제출 중단
    } else {
      confirmation.style.display = "none";
    }
    // 확인 메시지 생성
    const fconfirmationMessage = `
      <h2>수강신청 내용 확인</h2>
       <p><strong>이름:</strong>${userName} </p>
       <p><strong>학과:</strong>${major} </p>
       <p><strong>신청과목:</strong>${subject} </p>
       <p><strong>메일링:</strong> </p>
       <ul>
        <li>${mailing1 ? "해외 단신" : ""}</li>
        <li>${mailing2 ? "5분 회화" : ""}</li>
        <li>${mailing3 ? "모닝팝스" : ""}</li>
      </ul>
      <button type="button" id="confirmBtn">확인</button>
      <button type="button" id="retryBtn">다시 신청</button>
      `;
    // 확인 메시지 표시 및 폼 숨기기

    confirmation.innerHTML = fconfirmationMessage;
    // 다른페이지로 보여지는 코드
    form.style.display = "none";
    confirmation.style.display = "block";
    // 수상신청 확인 버튼 클릭시
    document.getElementById("confirmBtn").addEventListener("click", function () {
      alert("수강신청완료 홈으로 이동");
      window.location.href = "index.html";
    });
    // 다시 신청 버튼 클릭시
    document.getElementById("retryBtn").addEventListener("click", function () {
      document.getElementById("testForm").reset();
      // 폼을 다시 보여주고, 확인 메세지를 숨기기
      form.style.display = "block";
      confirmation.style.display = "none";
    });
  });
  // 취소 버튼 클릭시
  const resetbtn = document.querySelector(".reset");
  resetbtn.addEventListener("click", function () {
    document.getElementById("testForm").reset();
    document.getElementById("confirmation").style.display = "none";
  });
};
