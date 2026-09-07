const $=(selector,parent=document)=>parent.querySelector(selector);
const $$=(selector,parent=document)=>[...parent.querySelectorAll(selector)];
const notify=message=>{const toast=$('.toast');toast.textContent=message;toast.classList.add('show');clearTimeout(window.toastTimer);window.toastTimer=setTimeout(()=>toast.classList.remove('show'),2200)};

const rooms={
  carry:{label:'01 / FULL CARRY',title:'펼쳐놓으면 보이는, 한 사람.',description:'물건마다 선택한 이유와 생활 맥락을 붙여요. 제품 목록이 짧은 자기소개로 바뀝니다.',author:'민규 · 제품 디자이너',meta:'서울 · 이 구성 214일째',reasons:['바꾸기보다 길들이는 편','검정과 회색, 단 한 점의 주황','대중교통 출퇴근에 맞춘 500g 아래'],visual:`<div class="room-canvas carry-canvas"><img src="assets/edc-flatlay.png" alt="매일 휴대하는 물건을 펼쳐놓은 사진"><span class="canvas-label">MIN-GYU'S POCKET · SEOUL</span><button class="hotspot spot1 active" data-label="어두운 귀갓길의 R10 MINI">01</button><button class="hotspot spot2" data-label="얇은 주머니를 위한 카드 케이스">02</button><button class="hotspot spot3" data-label="직접 고치고 오래 쓰는 멀티툴">03</button><div class="canvas-caption"><h3>기계는 좋아하지만<br>주머니는 가볍게.</h3><div class="stats"><span><b>472g</b>TOTAL</span><span><b>7</b>ITEMS</span><span><b>4.2y</b>AVG. AGE</span></div></div></div>`},
  light:{label:'02 / LIGHT ROOM',title:'숫자보다, 내가 걷는 길의 빛.',description:'같은 장소와 카메라 설정으로 빔을 겹쳐 봐요. 루멘 너머의 색과 퍼짐을 함께 이야기합니다.',author:'서아 · 야간 산책자',meta:'인천 · 8개월 실사용',reasons:['퇴근길 30분 동안 MID 고정','중심광보다 편안한 주변광','겨울 장갑에도 쉬운 측면 버튼'],visual:`<div class="room-canvas mode-canvas light-canvas"><div class="mode-head"><span>BEAM WALL / HAN RIVER 22:14</span><span>ISO 400 · WB 4800K</span></div><div class="beam-view" id="beamView"></div><div class="beam-value" id="beamValue">480<small> lm</small></div><div class="mode-buttons"><button data-beam="low">LOW</button><button class="active" data-beam="mid">MID</button><button data-beam="turbo">TURBO</button></div></div>`},
  bag:{label:'03 / PACK ROOM',title:'용량보다, 꺼내는 순서를.',description:'가방 속을 수납 지도로 그려요. 자주 쓰는 것, 젖으면 안 되는 것, 한 손 동선을 비교합니다.',author:'우진 · 자전거 출퇴근',meta:'서울 · 6L 슬링 131일',reasons:['멘 채 지갑까지 오른손으로 4초','젖은 우산과 전자기기 분리','비어 있는 18%가 나의 여유'],visual:`<div class="room-canvas mode-canvas bag-canvas"><div class="mode-head"><span>PACK MAP / 6L SLING</span><span>1.14KG · 82% FULL</span></div><div class="bag-map"><div class="zone hot"><span><b>3×</b>하루 접근<br>지갑 · 이어폰</span></div><div class="zone"><span><b>1×</b>필요할 때<br>케이블 파우치</span></div><div class="zone wide"><span><b>LONG</b>A6 노트 · 접이식 우산 · 보조배터리</span></div></div></div>`},
  tool:{label:'04 / TOOL BENCH',title:'스펙보다, 해결한 일로.',description:'무엇을 샀는지가 아니라 오늘 무엇을 고쳤는지 쌓아요. 마모와 수리까지 도구의 이력이 됩니다.',author:'도현 · 무대 기술자',meta:'부산 · 수리 기록 37개',reasons:['플라이어 유격도 함께 기록','비트 2개만 골라 무게 절약','장소별 안전 안내를 먼저 확인'],visual:`<div class="room-canvas mode-canvas tool-canvas"><div class="mode-head"><span>WORK LOG / SEPTEMBER</span><span>VERIFIED BY 24 USERS</span></div><div class="log-wall"><div class="log-note"><small>09.02 · 08:41</small><b>자전거 브레이크<br>다시 조정</b>4mm 비트 · 7분</div><div class="log-note"><small>08.28 · 19:12</small><b>친구의 의자<br>나사 다시 조임</b>PH2 비트 · 12분</div><div class="log-note wide"><span>218 DAYS IN POCKET<br><b>이 도구가 해결한 일</b></span><strong>37</strong></div></div></div>`},
  write:{label:'05 / WRITING DESK',title:'펜 사진보다, 손끝에 남은 감각.',description:'같은 종이 위의 획과 마름을 나눠요. 왼손잡이, 낮은 필압처럼 실제 쓰는 사람의 감각이 기준입니다.',author:'하림 · 에디터',meta:'대전 · 11개월 사용',reasons:['작은 한글 획이 뭉치지 않음','왼손으로 써도 12초면 마름','황동 무게가 낮은 필압에 맞음'],visual:`<div class="room-canvas mode-canvas write-canvas"><div class="mode-head"><span>WRITING SAMPLE / A6 80GSM</span><span>LEFT HAND · LOW PRESSURE</span></div><div class="paper"><blockquote>기억은 주머니보다<br>먼저 가벼워진다.</blockquote><div class="inkline"></div><div class="inkline"></div><div class="inkline"></div><div class="sample-stats"><span>부드러움<b>8.6</b></span><span>마름<b>12s</b></span><span>번짐<b>LOW</b></span></div></div></div>`}
};

const postFeeds={
  carry:{name:'전체 캐리',count:'오늘 46개',question:'오늘 주머니에서 가장 먼저 꺼낸 물건은?',answers:'답변 28',posts:[
    ['해','coral','해솔 · 산업 디자이너','서울 · 6분 전','주황 하나로 정리한 월요일','회의가 긴 날이라 충전기와 작은 노트를 더했습니다. 결국 색 하나가 제 캐리를 묶어주네요.','#출근캐리 #주황한점',42,11,'carry'],
    ['준','blue','준호 · 대학원생','대전 · 21분 전','논문 마감 주간의 386g','일주일 실험해보니 멀티툴보다 USB 허브를 더 자주 꺼냈습니다. 다음 주에는 하나를 빼보려고요.','#학생EDC #500g아래',31,8,'weight'],
    ['리','lime','리원 · 바리스타','부산 · 38분 전','앞치마 주머니 네 칸의 규칙','손이 젖어 있어도 바로 찾을 수 있게 위치를 고정했습니다. 세 달째 바뀌지 않은 조합이에요.','#워크캐리 #실사용',57,16,'pockets']]},
  light:{name:'라이트',count:'새 빔샷 18개',question:'비 오는 밤, 3000K와 5000K 중 어느 쪽인가요?',answers:'의견 64',posts:[
    ['진','blue','진우 · 야간 러너','수원 · 4분 전','비 온 뒤 3000K 빔샷','젖은 아스팔트에서 반사가 덜 피곤했습니다. ISO와 셔터를 고정해 5000K와 나란히 올려요.','#빔샷 #3000K',68,24,'warmbeam'],
    ['솔','lime','솔 · 시설 관리자','인천 · 17분 전','문제는 루멘보다 스위치였어요','장갑을 낀 채 30번 켜봤습니다. 밝기보다 측면 버튼 위치가 실제 작업에서는 더 중요했어요.','#장갑테스트 #실사용',44,13,'switch'],
    ['태','coral','태오 · 캠퍼','강원 · 1시간 전','달 없는 밤, 80m 비교','터보는 멀리 갔지만 90초 뒤 열이 컸습니다. 미들 모드가 오히려 오래 보기 편했습니다.','#런타임 #야외',35,19,'coolbeam']]},
  bag:{name:'가방·파우치',count:'새 수납지도 12개',question:'가방에서 3초 안에 꺼낼 수 있어야 하는 것은?',answers:'답변 39',posts:[
    ['윤','lime','윤 · 자전거 출퇴근','서울 · 8분 전','6L 슬링, 오른손 동선 지도','멈추지 않고 교통카드를 꺼내는 순서입니다. 가장 바깥 칸은 일부러 20% 비워뒀어요.','#6L슬링 #한손접근',53,18,'bagmap'],
    ['미','coral','미정 · 사진가','제주 · 29분 전','비 오는 날의 젖은 것 구역','접이식 우산과 카메라 배터리가 만나지 않도록 파우치 색까지 다르게 정했습니다.','#우천캐리 #파우치',39,7,'rainbag'],
    ['찬','blue','찬 · 초등 교사','광주 · 52분 전','아이들과 걷는 날의 12L','밴드와 물티슈는 위로, 개인 물건은 아래로. 누구를 위해 꺼내는지에 따라 층을 나눴어요.','#직업캐리 #12L',61,22,'layers']]},
  tool:{name:'도구',count:'오늘 해결 41건',question:'이번 주, 주머니 속 도구로 해결한 가장 작은 일은?',answers:'기록 33',posts:[
    ['도','coral','도현 · 무대 기술자','부산 · 3분 전','공연 20분 전, 흔들리는 스탠드','PH2 비트로 세 군데를 조였습니다. 해결 시간 4분, 오늘도 큰 멀티툴을 챙긴 이유가 생겼네요.','#해결기록 #PH2',72,14,'worklog'],
    ['경','blue','경민 · 자전거 정비사','성남 · 34분 전','214일째 플라이어 유격 기록','처음보다 0.7mm 늘었지만 작업에는 문제없습니다. 분해 세척 뒤 변화를 다시 남길게요.','#마모일지 #오래쓴',48,27,'wear'],
    ['은','lime','은비 · 세트 제작','파주 · 1시간 전','도구 하나를 빼도 됐던 이유','일주일 사용 횟수를 세니 송곳은 0회였습니다. 18g을 줄이고 비트 하나를 추가했어요.','#최적화 #18g감량',36,9,'toolcount']]},
  write:{name:'필기구',count:'새 샘플 12개',question:'한글을 가장 기분 좋게 쓰게 해준 조합은?',answers:'샘플 47',posts:[
    ['하','blue','하림 · 에디터','대전 · 12분 전','왼손으로 쓴 EF촉, 12초 뒤','80gsm 종이에 번짐은 거의 없었습니다. 같은 문장을 세 필압으로 써서 비교해봤어요.','#왼손잡이 #EF촉',59,21,'writing'],
    ['소','coral','소은 · 북 디자이너','서울 · 26분 전','결국 매일 쓰는 건 이 펜','비싼 펜보다 캡을 한 손으로 열 수 있는 이 펜이 남았습니다. 9개월 사용 흔적도 함께 올려요.','#매일쓰는펜 #9개월',81,32,'penwear'],
    ['규','lime','규민 · 기록가','전주 · 1시간 전','세 종이에서 같은 잉크 비교','미도리, 복사용지, 영수증 뒷면에 같은 문장을 썼습니다. 의외로 가장 싼 종이가 선명했어요.','#종이비교 #잉크샘플',46,17,'papers']]}
};

const postVisual=type=>({
  carry:'<div class="post-visual carry-post"><span></span><span></span><span></span><span></span><b>MON / 468g</b></div>',weight:'<div class="post-visual weight-post"><strong>386<small>g</small></strong><i></i><b>6 ITEMS · 7 DAYS</b></div>',pockets:'<div class="post-visual pocket-post"><span>01<br><b>PEN</b></span><span>02<br><b>KEY</b></span><span>03<br><b>NOTE</b></span><span>04<br><b>LIGHT</b></span></div>',
  warmbeam:'<div class="post-visual beam-post warm-post"><span>3000K</span><b>ISO 400 · 1/30S</b></div>',switch:'<div class="post-visual switch-post"><span>30×</span><b>GLOVE SWITCH TEST</b><i></i></div>',coolbeam:'<div class="post-visual beam-post cool-post"><span>80m</span><b>MID / TURBO · 90 SEC</b></div>',
  bagmap:'<div class="post-visual map-post"><span>3×<b>WALLET</b></span><span>1×<b>CABLE</b></span><span>20%<b>EMPTY</b></span></div>',rainbag:'<div class="post-visual rain-post"><span>DRY</span><i></i><span>WET</span><b>SEPARATED</b></div>',layers:'<div class="post-visual layer-post"><span>FOR EVERYONE</span><span>QUICK ACCESS</span><span>PERSONAL</span></div>',
  worklog:'<div class="post-visual work-post"><span>04<small>MIN</small></span><b>PH2 · STAND FIXED</b></div>',wear:'<div class="post-visual wear-post"><span>DAY 214</span><i></i><b>PLAY +0.7mm</b></div>',toolcount:'<div class="post-visual count-post"><span>−18g</span><b>AWL OUT / BIT IN</b></div>',
  writing:'<div class="post-visual script-post"><span>가볍게, 매일.</span><i></i><i></i><b>EF · 12 SEC</b></div>',penwear:'<div class="post-visual pen-post"><i></i><span>9 MONTHS</span><b>USED EVERY DAY</b></div>',papers:'<div class="post-visual papers-post"><span>A</span><span>B</span><span>C</span><b>SAME INK / 3 PAPERS</b></div>'
})[type];

function renderPosts(key){const feed=postFeeds[key];$('#roomPostsTitle').textContent=`${feed.name} 방의 새 이야기`;$('#roomPostsLabel').textContent=`INSIDE THE ROOM · ${feed.count}`;$('#roomQuestion').innerHTML=`<span>오늘 이 방의 질문</span><b>${feed.question}</b><button data-question>${feed.answers} <i>→</i></button>`;$('#roomPostGrid').innerHTML=feed.posts.map(([initial,color,author,meta,title,body,tags,likes,comments,visual])=>`<article class="room-post-card"><div class="post-author"><span class="avatar ${color}">${initial}</span><div><b>${author}</b><small>${meta}</small></div><button aria-label="더보기">•••</button></div>${postVisual(visual)}<div class="post-copy"><h4>${title}</h4><p>${body}</p><div class="post-tags">${tags.split(' ').map(tag=>`<span>${tag}</span>`).join('')}</div></div><footer><button data-post-like>공감 <b>${likes}</b></button><button>이야기 <b>${comments}</b></button><button data-bookmark>저장</button></footer></article>`).join('');wirePosts()}

function wirePosts(){$('[data-question]')?.addEventListener('click',()=>notify('이 방의 질문에 답할 자리를 열었어요.'));$$('[data-post-like]').forEach(button=>button.addEventListener('click',()=>{button.classList.toggle('liked');const count=$('b',button);count.textContent=Number(count.textContent)+(button.classList.contains('liked')?1:-1)}));$$('[data-bookmark]').forEach(button=>button.addEventListener('click',()=>{button.classList.toggle('saved');button.textContent=button.classList.contains('saved')?'저장됨':'저장'}))}

function renderRoom(key){const room=rooms[key];$('#roomStage').innerHTML=`<div class="room-layout">${room.visual}<aside class="room-info"><p class="eyebrow">${room.label}</p><h3>${room.title}</h3><p>${room.description}</p><div class="who"><span class="avatar apricot">${room.author[0]}</span><div><b>${room.author}</b><small>${room.meta}</small></div><span>지금 대화 중 ↗</span></div><div class="reasons">${room.reasons.map((reason,index)=>`<span><b>0${index+1}</b>${reason}</span>`).join('')}</div><div class="room-actions"><button data-join="${key}">이 방에 끼어들기 →</button><button data-save aria-label="방 저장">＋</button></div></aside></div>`;wireRoom();renderPosts(key)}

function wireRoom(){
  $$('.hotspot').forEach(button=>button.addEventListener('click',()=>{$$('.hotspot').forEach(item=>item.classList.remove('active'));button.classList.add('active')}));
  $$('[data-beam]').forEach(button=>button.addEventListener('click',()=>{const settings={low:['80','45%'],mid:['480','72%'],turbo:['1,200','100%']};$$('[data-beam]').forEach(item=>item.classList.remove('active'));button.classList.add('active');const [value,size]=settings[button.dataset.beam];$('#beamValue').innerHTML=`${value}<small> lm</small>`;$('#beamView').style.backgroundSize=size}));
  $('[data-join]')?.addEventListener('click',event=>notify(`${rooms[event.currentTarget.dataset.join].title.replace('.', '')} 방에 자리를 만들었어요.`));
  $('[data-save]')?.addEventListener('click',event=>{event.currentTarget.textContent=event.currentTarget.textContent==='＋'?'✓':'＋';notify(event.currentTarget.textContent==='✓'?'내 클럽에 이 방을 저장했어요.':'저장을 취소했어요.')});
}

renderRoom('carry');
$$('[data-room]').forEach(button=>button.addEventListener('click',()=>{$$('[data-room]').forEach(item=>{item.classList.remove('active');item.setAttribute('aria-selected','false')});button.classList.add('active');button.setAttribute('aria-selected','true');renderRoom(button.dataset.room)}));

const dialog=$('#composeDialog');
$$('[data-compose]').forEach(button=>button.addEventListener('click',()=>dialog.showModal()));
$$('[data-compose-type]').forEach(button=>button.addEventListener('click',()=>notify(`${$('b',button).textContent} 기록 도구를 열었어요.`)));
$('#searchButton').addEventListener('click',()=>notify('“비 오는 출퇴근”, “500g 아래”처럼 찾아보세요.'));
$$('.filter-pills button').forEach(button=>button.addEventListener('click',()=>{$$('.filter-pills button').forEach(item=>item.classList.remove('active'));button.classList.add('active');notify(`${button.textContent} 이야기로 모아봤어요.`)}));
$('.react').addEventListener('click',event=>{event.currentTarget.classList.toggle('liked');const count=$('b',event.currentTarget);count.textContent=Number(count.textContent)+(event.currentTarget.classList.contains('liked')?1:-1)});
$$('[data-vote]').forEach(button=>button.addEventListener('click',()=>{$$('[data-vote]').forEach(item=>{item.classList.remove('voted');item.style.setProperty('--vote',`${item.dataset.vote}%`)});button.classList.add('voted');notify(`${button.dataset.vote}%의 선택. 이제 91개의 이유를 볼 수 있어요.`)}));
$('[data-answer]').addEventListener('click',()=>notify('당신의 단 하나를 적을 자리를 열었어요.'));
$$('.post-view-options button').forEach(button=>button.addEventListener('click',()=>{$$('.post-view-options button').forEach(item=>item.classList.remove('active'));button.classList.add('active');notify(`${button.textContent} 순서로 이야기를 모았어요.`)}));
$('#loadPosts').addEventListener('click',()=>notify('이 방의 다음 이야기들을 불러왔어요.'));
