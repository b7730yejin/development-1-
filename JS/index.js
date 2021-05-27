window.onload = ShowDefaultRotate; // 윈도우 로드시 이미지 변환함수 실행

let timeOut; // clearTimeout() 함수를 이용하여 Timeout 을 취소하기위해 사용됨

//배너 이미지 4개 배열로 저장
let ImgArray = new Array();
ImgArray[1] = "https://github.com/b7730yejin/imagesource/blob/main/coffee1.jpg?raw=true";
ImgArray[2] = "https://github.com/b7730yejin/imagesource/blob/main/coffee2.jpg?raw=true";
ImgArray[3] = "https://github.com/b7730yejin/imagesource/blob/main/coffee3.jpg?raw=true";
ImgArray[4] = "https://github.com/b7730yejin/imagesource/blob/main/coffee4.jpg?raw=true";


let imgNum = 1; 

//배너 이미지 diplay 버튼
//이전 이미지 보기
function goFront() {
    clearTimeout(timeOut);
    let a = imgNum;
    let b = 2;
    if (a != 1 && b > 0) {
        b = a - 1;
        timeOut = setTimeout("ShowDefaultRotate()", 5000);
    }
    else if (a == 1) {
        b = a + 3;
        timeOut = setTimeout("ShowDefaultRotate()", 5000);
    }
    imgNum = b;
    banner.src = ImgArray[b];
}
//다음 이미지 보기
function goBack() {
    clearTimeout(timeOut);
    let a = imgNum;
    let b = 2;
    if (a < 4) {
        b = a + 1;
        timeOut = setTimeout("ShowDefaultRotate()", 5000);
    }
    else if (a == 4) {
        b = a - 3;
        timeOut = setTimeout("ShowDefaultRotate()", 5000);
    }
    imgNum = b;
    banner.src = ImgArray[b];
}
//배너 이미지 로테이션
function ShowDefaultRotate() {// 스스로 자신을 호출하는 재귀함수 (Recursive Function)
    imgNum++;

    if (imgNum < ImgArray.length) { // 배열의 갯수 이내일때만 실행
        banner.src = ImgArray[imgNum];
        timeOut = setTimeout("ShowDefaultRotate()", 5000);  // 4초후에 자기자신을 호출 
    }
    else {
        imgNum = 0;
        timeOut = setTimeout("ShowDefaultRotate()", 1000);
    }
}

//검색 버튼 클릭시 입력 받은 문자를 검색하여 표시
//검색 버튼 클릭시 입력 받은 문자를 검색하여 표시
function menu_search() {

    if (document.getElementById('search_input').value == "") {
        alert("검색어를 입력해주세요!");
    }
    else {
        let input = document.getElementById('search_input').value;
        let obj = document.getElementById('text');

        let obj_input = new RegExp(input, 'ig'); //오브젝트 객체 생성 ->입력문자에 ig를 추가

        let str = JSON.stringify(obj.innerHTML);

        let replace_str = str.replace(obj_input, '<mark>' + input + '</mark>'); //입련 문자 mark

        let return_str = JSON.parse(replace_str); //srtring 객체를 오브젝트로 변경해서 '\n' 제거

        document.getElementById('search_input').value = "";
        document.getElementById('text').innerHTML = return_str;
    }
}

//로그인 팝업창 열기
function openLogin() {
    window.open("login.html", "a", "width=400, height=255, left=300, top=300");
}
//도메인 선택 
function domainSelect() {
    let a = getel
    if (getel .value != 0) {
        u_email.value = "@" + e_domain.value;
    }
    else {
        u_email.value = "";
    }
}
//가입 완료 버튼 클릭시
function joinsumit() {
    alert("가입 완료");
    location.href = "index.html";
}
//도메인 선택 
function domainSelect() {
    if (e_domain.value != 0) {
        u_email.value = "@" + e_domain.value;
    }
    else {
        u_email.value = "";
    }
}
function id_ok() {
    alert("확인");
}
function email_ok() {
    alert("메일을 전송했습니다.");
}
//로그인 팝업창을 닫고 회원가입창으로 이동
function goJoin() {
    opener.location.replace("join.html");
    window.close();
}
//로그인 팝업창을 닫고 아이다/비밀번호 찾기창으로 이동
function goFindId() {
    opener.location.replace("findId.html");
    window.close();
}

