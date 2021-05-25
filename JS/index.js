var timeOut; // clearTimeout() 함수를 이용하여 Timeout 을 취소하기위해 사용됨
        
    var ImgArray = new Array ();
    ImgArray[1] = "https://github.com/b7730yejin/imagesource/blob/main/coffee1.jpg?raw=true";
    ImgArray[2] = "https://github.com/b7730yejin/imagesource/blob/main/coffee2.jpg?raw=true";
    ImgArray[3] = "https://github.com/b7730yejin/imagesource/blob/main/coffee3.jpg?raw=true";
    ImgArray[4] = "https://github.com/b7730yejin/imagesource/blob/main/coffee4.jpg?raw=true";


    var imgNum = 0;	

    function ShowDefaultRotate() {// 스스로 자신을 호출하는 재귀함수 (Recursive Function)
		imgNum++;

		if( imgNum < ImgArray.length ) { // 배열의 갯수 이내일때만 실행
			banner.src = ImgArray[imgNum];		 
			timeOut = setTimeout("ShowDefaultRotate()",4000);  // 1초후에 자기자신을 호출 
		}

		else{
			imgNum=0;
			timeOut = setTimeout("ShowDefaultRotate()",4000); // 1초후에 자기자신을 호출 
		}		
	}

	window.onload = ShowDefaultRotate; // 윈도우 로드시 이미지 변환함수 실행
    

//검색 버튼 클릭시 

function menu_search(){
    
    var a = input.value;
   
    var str = document.getElementById('text');
    
    var str2 = str.innerHTML.replace(a, '<mark>'+ a + '</mark>');

    str.innerHTML = str2;
}

//로그인 팝업창 열기
function openLogin(){
    window.open("login.html", "a", "width=400, height=255, left=300, top=300" );
}
//도메인 선택 
function domainSelect(){
    if(e_domain.value != 0){
        email.value= "@" + e_domain.value;
    }
    else{
        email.value= "";
    }
}
//가입 완료 버튼 클릭시
function joinsumit(){
    alert("가입 완료");
    location.href="index.html";
}
//도메인 선택 
function domainSelect(){
    if(f_domain.value != 0){
        f_email.value= "@" + f_domain.value;
    }
    else{
        f_email.value= "";
    }
}
function id_ok(){
    alert("확인");
}
function email_ok(){
    alert("메일을 전송했습니다.");
}
//로그인 팝업창을 닫고 회원가입창으로 이동
function goJoin(){
    opener.location.replace("join.html");
    window.close();
}
//로그인 팝업창을 닫고 아이다/비밀번호 찾기창으로 이동
function goFindId(){
    opener.location.replace("findId.html");
    window.close();
}