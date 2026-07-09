# 나만의 유튜브 사이트 만들기

이 강의는 React 프레임워크와 YouTube API를 이용하여 자신만의 간단한 영상 사이트를 만듭니다. React의 기본 개념을 이해하고, 컴포넌트를 구조화하고 상태를 관리하는 방법을 학습하며,
YouTube Data API를 활용하여 외부 데이터를 가져오는 방법을 익히고, API 응답을 처리하여 사용자에게 의미 있는 정보를 제공하는 방법을 이해합니다.

## 완성작 보기

미리보기 :

## 사용스택

- node.js를 설치하고 사용합니다.
- react를 사용하여 사이트를 완성합니다.
- youTube Api를 이용하여 데이터를 가져옵니다.
- rapidapi를 이용하여 데이터를 가져옵니다.
- netlify를 통해 사이트를 배포합니다.
- firebase를 통해 사이트를 배포합니다.
- vercel를 통해 사이트를 배포합니다.
- git을 사용하여 파일을 관리합니다.

## 프로젝트 실행

- react를 설치합니다. `npx create-react-app 타이틀`
- react-router-dom을 설치합니다. `npm install react-router-dom`
- axios를 설치합니다. `npm install axios`
- react-icons을 설치합니다. `npm install react-icons`
- react-player를 설치합니다. `npm install react-player`
- sass를 설치합니다. `npm install sass`
- react-helmet-async를 설치합니다. `npm install react-helmet-async`
- swiper를 설치합니다. `npm install swiper`

SASS는 Syntactically Awesome Style Sheets의 약자로, CSS의 확장된 문법을 제공하여 스타일 시트 작성을 더욱 효율적으로 만들어주는 CSS 전처리기입니다.
SCSS는 일반 CSS와 호환되기 때문에 기존의 CSS 코드를 그대로 사용할 수 있습니다.
SCSS는 SASS의 다음 버전이며, 약간의 문법 차이가 있지만 SCSS가 좀 더 넓은 범용성과 CSS의 호환성의 장점을 가집니다.
큰 차이점은 SASS는 중첩으로 들여 쓰기를 사용하고 속성 구분은 줄 바꿈을 이용하지만,
SCSS의 경우 중괄호로 중첩을 표현하고 세미콜론으로 속성을 구분합니다.
결론적으로 SCSS는 기존의 CSS 문법을 확장하여 보다 강력하고 유용한 기능을 제공하는 동시에, 웹 개발자가 스타일링 작업을 더 효율적으로 수행할 수 있도록 도와줍니다.
https://sass-lang.com/ 자세한 부분은 여기서 확인할 수 있습니다.

*변수 (Variables): SCSS에서는 변수를 사용하여 색상, 글꼴, 간격 등을 정의하고 재사용할 수 있습니다. 이를 통해 일관된 디자인을 유지하고 스타일링 작업을 단순화할 수 있습니다.
*중첩 (Nesting): SCSS에서는 선택자를 중첩하여 코드를 더 구조화하고 가독성을 높일 수 있습니다. 중첩된 구조를 사용하여 부모/자식 요소 관계를 명확하게 표현할 수 있습니다.
*믹스인 (Mixins): 믹스인은 스타일의 모듈화를 가능하게 해주는 기능입니다. 반복적으로 사용되는 스타일 코드 블록을 함수처럼 정의하고 재사용할 수 있습니다.
*확장 (Extend): 확장은 하나의 선택자에서 다른 선택자로 스타일을 상속할 수 있는 기능입니다. 이를 통해 스타일 규칙의 중복을 피하고 코드의 양을 줄일 수 있습니다. \*연산 (Operations): SCSS는 수학 연산을 지원하여 값들을 계산하거나 조작할 수 있습니다. 이를 통해 여러 속성 값을 계산하여 사용하는 등의 작업이 가능합니다.

출처: https://webstoryboy.co.kr/1967 [WEBSTORYBOY:티스토리]
