---
layout: posts
title: jekyll server local test
tags: [local, jekyll server]
categories: IT
---

jekyll은 ruby로 구성된 텍스트 변환 프로그램이다. mackdown 언어나 기타 환경 파일들을 읽어 정접 웹을 만들어준다. jekyll-theme마 별로 플러그인이나 기타 필요한 파일들이 다를 수 있다. 여기서는 minimal-mistakes 테마를 로컬로 구동시키는 경우를 살펴본다

**ruby 설치**

```
#Mac terminal
brew install ruby # ruby를 설치하면 package설치 프로그램인 gem을 사용할 수 있다.
brew install rbenv # jekyll bundler를 sudo 권한 없이 설치하기. rbenv는 ruby를 독립적으로 사용할 수 있게 해주는 가상환경이다.

rbenv install --list # 가능한 versions list 검색. 필자의 경우는 3.0.3이 가장 최신이라 선택 일반적으로 2.X.X 대의 버전을 많이 쓰는 것으로 보인다.
rbenv install 3.0.3
rbenv global 3.0.3
rbenv versions # 설치가 제대로 됐는지 확인
```

**.zshrc 파일에 path 포함**

```
[[ -d ~/.rbenv  ]] && \
 	export PATH=${HOME}/.rbenv/bin:${PATH} && \
 	eval "$(rbenv init -)"
```

**path 업데이트**

```
source ~/.zshrc
```

**jekyll 설치**

```
gem install jekyll bundler # jekyll bundle 다운로드. bundle은 gem을 위한 패키지 관리 프로그램
gem install minimal-mistakes-jekyll # jekyll에 필요한 플러그인(?) 설치
bundle add webrick # ruby 3.0.3 부터 webrick이 gem에서 제외됐다.

cd ./path/to/my-website
```

**jekyll server 실행**

```
bundle exec jekyll serve --trace
```
