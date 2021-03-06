## 참고 사이트
[jekyll official document](https://jekyllrb.com/docs)
[minimal-mistakes guide](https://mmistakes.github.io/minimal-mistakes/docs/quick-start-guide/)

draft를 확인 ``jekyll serve --drafts``


## Jekyll 디렉토리 구조

1. 반드시 변경
```
_featured_tags/ : 카테고리 대분류 폴더
_featured_categories/ : 카테고리 소분류(태그) 폴더
_data/ : 개발자 및 운영자, 기타 정보 폴더 (author.yml 수정이 필요)
_config.yml : 가장 중요한 환경변수 설정 파일
README.md : GitHub 프로젝트 애서 소개하게 될 글
favicon.ico : 블로그 접속 시 브라우저 주소창에 표시되는 대표 아이콘
about.md : About 메뉴 클릭 시 나타나는 블로그에 대한 소개글
```

2. 필요시 변경
```
assets/ : 이미지, CSS 등을 저장 폴더
_layouts/ : 포스트를 감싸기 위한 레이아웃 정의 폴더(페이지, 구성요소 등 UI변경 시 수정)
_includes/ : 재사용을 위한 기본 페이지 폴더
Gemfile.lock : Gemfile에 기록한 레일 기반 라이브러리를 설치 후 기록하는 파일(중복설치 방지)
Gemfile : 필요한 레일 기반 라이브러리를 자동으로 설치하고 싶을 때 명시하는 설정 파일
.gitignore : GitHub에 올리고 싶지 않은 파일들은 이 파일에 경로지정 가능(예: _site 산출물, 환경설정, 개인정보, 작성중인 글 등)
sitemap.xml : 테마의 사이트맵
search.html : Tipue Search 설치 시, 검색결과를 출력하는 페이지로 활용
robots.xml : 구글 웹로봇 등 검색엔진 수집 등에 대한 정책을 명시하는 설정파일
posts.md : 포스트 작성 관련 설정파일
```

3. 변경 필요없음(참고)
```
_posts/ : 포스트를 저장하는 폴더
.git/ : GitHub 연동을 위한 상태정보가 담긴 폴더
_site/ : Jekyll 빌드 생성 결과물 폴더(실제 GitPages에서 WEB으로 보여지는 산출물)
.sass-cache/ : 레일 엔진에서 사용하는 캐시 저장폴더(변하지 않는 산출물들에 대한 파싱을 하지 않아 속도보장)
_sass/ : 일종의 CSS 조각파일 저장 폴더
_js/ : JavaScript 저장 폴더
_plugins/ : 플로그인 저장 폴더(크롬 정책상 어차피 사용안함)
LICENSE.md : 테마 개발자의 라이센스 설명
index.html : 블로그 최초 접속 페이지
googlea0d1f22cc8208170.html : 구글 검색엔진에 블로그를 등록하는 과정의 소유권 확인 파일
feed.xml : RSS Feed 활용을 위한 XML
browserconfig.xml : 윈도우8 이상 IE11 접속 시 클라이언트가 요청하는 환경설정 파일(윈도우의 표준 파괴 본능은 여기에도 숨어있다. ㅡ,.ㅡ)
404.md : 404 Not Found Page(블로그에 없는 페이지 요청 시 등장하는 페이지)
.eslintrc : EcmaScript Lint(자바스크립트 협업 개발을 위한 규칙 정의) 환경설정 파일
.eslintignore : EcmaScript Lint 무시할 규칙 지정(전역변수 에러표시 예외처리 등)
.babelrc : Babel(자바스크립트 컴파일러) 설정파일
```
