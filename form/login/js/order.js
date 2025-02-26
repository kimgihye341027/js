window.onload = function () {
  const check = document.querySelector("#shippingInfo");
  const submit = document.querySelector(".order");
  check.addEventListener("change", function () {
    if (check.checked) {
      //   order.billingName.value = ship.shippingName.value;
      ship.shippingName.value = order.billingName.value;
      ship.shippingTel.value = order.billingTel.value;
      ship.shippingAddr.value = order.billingAddr.value;
    } else {
      ship.shippingName.value = "";
      ship.shippingTel.value = "";
      ship.shippingAddr.value = "";
    }
  });
  submit.addEventListener("click", function (e) {
    e.preventDefault();
    // 체크박스 상태에 따라 배송 정보 업데이트
    if (check.checked) {
      // order.billingName.value = ship.shippingName.value;
      ship.shippingName.value = order.billingName.value;
      ship.shippingTel.value = order.billingTel.value;
      ship.shippingAddr.value = order.billingAddr.value;
    }
    // 확인할 정보 문자열 생성 (제출하기 버튼>유효성검사)
    const billingName = order.billingName.value;
    const billingTel = order.billingTel.value;
    const billingAddr = order.billingAddr.value;
    const shippingName = ship.shippingName.value;
    const shippingTel = ship.shippingTel.value;
    const shippingAddr = ship.shippingAddr.value;
    const confirmMessage = `
     주문 정보:
      이름: ${billingName}
      연락처: ${billingTel}
      주소: ${billingAddr}

      배송 정보:
      이름: ${shippingName}
      연락처: ${shippingTel}
      주소: ${shippingAddr}

      이 정보가 정확합니까?`;
    let userConfirmed = confirm(confirmMessage);
    if (userConfirmed) {
      // 사용자가 "확인"을 클릭하면
      alert("입력완료");
      // 입력창에 값을 빈 문자열로 설정
      order.billingName.value = "";
      order.billingTel.value = "";
      order.billingAddr.value = "";
      ship.shippingName.value = "";
      ship.shippingTel.value = "";
      ship.shippingAddr.value = "";
      //   체크박스 초기화
      check.checked = false;
    } else {
      alert("정보를 다시 확인해 주세요.");
    }
  });
};
