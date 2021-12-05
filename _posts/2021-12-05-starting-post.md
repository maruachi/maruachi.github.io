# 주피터 노트북 nbextension

nbextension을 extension을 모아 놓은 모음집 같은 것으로 필요한 확장들을 키거나 끌 수 있다. 브라우저에 새로운 기능을 설치하는 chrome extension처럼 주피터 노트북에 extension을 설치할 수 있다.

### 설치
아나콘다에 물려 있는 pip를 이용하여 설치했다. conda install로는 설치가 되지 않았다.

```
pip install jupyter_contrib_nbextensions 
```
설치를 한 후에 주피터 노트북을 실행하면 nbextension을 위한 tap이 추가될 줄 알았는데 보이지 않았다. 보통 일반적으로 nbextension을 설명할 때 해당 tap에 조작을 한다. 검색해보니 다음와 같이 진행하니 tap이 보이기 시작했다.

```
jupyter contrib nbextension install --user
jupyter nbextension enable varInspector/main
```
다음과 같이 실행하면 아래와 같이 사진이 보인다.
![MacDown logo](http://)

### 많이 쓰는 확장
