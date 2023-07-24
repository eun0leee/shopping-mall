<div align="center">
  
# 👑 Luxury Brand Shop
**명품 가방과 옷을 구매할 수 있는 쇼핑몰 웹사이트**  

2022.12.13 ~ 2023.01.01(3주)

![React](https://img.shields.io/badge/react-v18+-blue?logo=react)  

사용자 페이지 : https://moonlit-paprenjak-f17873.netlify.app/  
(테스트 계정 : test@gmail.com / test1234)

<img width="700px" alt="N4" src="https://github.com/eun0leee/shopping-mall/assets/90189513/b2b2fb6c-400a-434c-b9ca-f4e5da759a66">

</div>

<br/>

## 1. 담당 구현 기능

![상세페이지](https://github.com/eun0leee/shopping-mall/assets/90189513/391e9102-675c-46f1-8e05-0cd7d2b1bf1d)

### 1.1 제품상세 페이지
- 오른쪽 사이드바 
  - 최상단 카테고리 : 분류별로 버튼 클릭시 해당 카테고리로 이동 
  - 결제 및 장바구니 버튼 : 매진상품일 경우 두 개의 버튼 대신 SOLD OUT 출력 
  - 장바구니 버튼
    - 클릭시 alert창 띄우기(확인 누르면 장바구니로 이동)
    - 세션스토리지로 상품 정보 전달(같은 상품이 담기면 수량 증가해, 세션스토리지로 전달)
  - 결제 버튼
    - 세션스토리지로 단일 상품 결제 정보 전달

![장바구니](https://github.com/eun0leee/shopping-mall/assets/90189513/8ec6dbc8-09aa-4a54-bd5a-429de715c380)


### 1.2 장바구니 페이지
- 최초 접속시, 세션스토리지 정보로 장바구니 내역 출력. 세션스토리지에 있는 결제 정보는 초기화
- 장바구니에 담은 것이 없을 경우, `Oops! Your cart is empty.` 문구 및 메인 페이지로 이동 버튼 출력
- 썸네일 사진 : 클릭시 상세페이지로 이동
- 수량 버튼
  - input 값이 `2~9` 일 때만 증가 및 감소 버튼 활성화
  - input 값이 `2~9` 가 아니면, 증가 및 감소 버튼 비활성화, input창 border 색 변경
  - input 입력 : 0이거나 null이면 값을 `1`로 임의변경, 숫자만 입력가능
  - 수량에 따라 제품별 총액과, order summery의 총액 변동
- 삭제 버튼 : 화면 및 세션스토리지에서 해당 상품 삭제
- 결제하기 버튼
  - 클릭시, 세션스토리지로 결제 정보 전달
  - 비회원일 경우, 버튼 클릭시 로그인창으로 이동. 회원일 경우에만 결제 페이지로 이동
- main 위에 Step 컴포넌트로 현재 주문단계 표시

![image](https://github.com/eun0leee/shopping-mall/assets/90189513/67f3b934-c298-48d2-961d-afa92ee2dc0a)


### 1.3 마이페이지 홈 페이지
- 마이페이지 홈에서 접속할 개별 컴포넌트 생성후 outlet 사용하여 연결
- 탭버튼으로 주소변경, 파라미터별로 Title과 컴포넌트 출력
- 비밀번호 재확인
  - Bank Accounts와 My profile 탭버튼 클릭시에만, 비밀번호 재확인창 출력

### 1.4 주문내역(주문 조회/확정/취소) 페이지

- 주문내역 없을 경우, 문구 및 메인페이지 이동 버튼 출력
- 제품 썸네일 클릭시, 제품상세페이지로 이동
- 거래 확정 및 취소
  - 거래확정 또는 취소여부 표시
  - 거래확정 및 취소를 둘 다 선택 안 했을 경우 `구매확정` `취소요청` 버튼 두개 출력
  - `구매확정` 및 `취소요청` 버튼 클릭시, alert창 출력
- 주문상세내역 보기 버튼
  - 클릭시 해당 상품의 상세 내역으로 이동

<br/>

## 2. 개발 환경 세팅
```
git clone https://github.com/eun0leee/shopping-mall.git
cd shopping-mall
npm install
npm start
```

<br/>

## 3. 기술 스택

<img src="https://img.shields.io/badge/%20-%20Axios-black"/> <img src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=HTML5&logoColor=white"/> <img src="https://img.shields.io/badge/CSS-1572B6?style=flat-square&logo=CSS3&logoColor=white"/> <img src="https://img.shields.io/badge/node-339933?style=flat-square&logo=Node.js&logoColor=white"/> <img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=white"/> <img src="https://img.shields.io/badge/styled components-DB7093?style=flat-square&logo=Styled-components&logoColor=white"/><br/> <img src="https://img.shields.io/badge/NETLIFY-00C7B7?style=for-the-badge&logo=NETLIFY&logoColor=white"> <img src="https://img.shields.io/badge/.ENV-ECD53F?style=for-the-badge&logo=.ENV&logoColor=white"> <img src="https://camo.githubusercontent.com/cfd032a0d113d1b8b79a5c515c395cb501738e017e9fb3f8945dae10e2a918f6/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f5377697065722d3633333246363f7374796c653d666c61742d726f756e64266c6f676f3d537769706572266c6f676f436f6c6f723d7768697465">

<br/>

## 4. 협업 방식

- GitHub : 각 페이지마다 branch를 생성하여 관리했어요!

- Slack : 슬랙과 깃허브를 연동하여 상시 상황을 공유하도록 했어요!

- [Notion](https://www.notion.so/eun0leee/5-f2fbc5129a85427c83bf01e8fc584d08) 매일 공부하고 적용하여 PR을 날리고 해결과 오류가 있었던 부분을 기재하고,
  일주일 2번 정도 회의를 하며 원활한 소통을 위해 하루 계획, 현재 진행 상황, 팀원 칭찬 등 여러 부분을 작성했어요!

<br/>

<br/>

## 5. 회고
* [React 팀프로젝트로 쇼핑몰 만들기 회고](https://velog.io/@eun0leee/React-팀프로젝트로-쇼핑몰-만들기-회고)

<br/>

## 6. 팀원

|<a href="https://github.com/syoon0624">이승윤</a>|<a href="https://github.com/0nesan">한수산</a>|<a href="https://github.com/KoreanVisionaryCoder">곽혜지</a>|<a href="https://github.com/eun0leee">이은영</a>|
|:---:|:---:|:---:|:---:|
|<a href="https://github.com/syoon0624"><img src="https://avatars.githubusercontent.com/u/77139957?v=4" width=160/></a>|<a href="https://github.com/0nesan"><img src="https://avatars.githubusercontent.com/u/76930602?v=4" width=160/></a>|<a href="https://github.com/KoreanVisionaryCoder"><img src="https://avatars.githubusercontent.com/u/98737388?v=4" width=160/></a>|<a href="https://github.com/eun0leee"><img src="https://avatars.githubusercontent.com/u/90189513?v=4" width=160/></a>|
* [팀 레포지토리](https://github.com/shopping-mall-Frontend/team-project)
* [팀 노션](https://www.notion.so/eun0leee/5-f2fbc5129a85427c83bf01e8fc584d08) 
