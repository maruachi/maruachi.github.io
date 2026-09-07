const $ = (selector, parent = document) => parent.querySelector(selector);
const $$ = (selector, parent = document) => [...parent.querySelectorAll(selector)];

const roomData = {
  carry: {
    eyebrow: 'ROOM 01 · FULL CARRY', title: '전체 캐리 방', subtitle: '구성은 곧, 짧은 자기소개.', online: '84명이 지금 이 방에 있어요',
    topics: ['오늘의 캐리', '500g 아래', '오래 쓴', '직업 캐리'],
    prompt: '오늘 주머니에서 가장 먼저 꺼낸 것은?',
    play: `<div class="play-head"><span>MIN-GYU'S POCKET · SEOUL</span><span>472G · 7 ITEMS · DAY 214</span></div><div class="feature-carry"><img src="../v2/assets/edc-flatlay.png" alt="민규의 전체 EDC 구성"><button class="feature-pin p1 active" data-label="어두운 귀갓길을 위한 R10 Mini">01</button><button class="feature-pin p2" data-label="바꾸기보다 길들인 카드 지갑">02</button><button class="feature-pin p3" data-label="직접 고치며 4년째 쓰는 멀티툴">03</button><div class="feature-caption"><h3>기계는 좋아하지만<br>주머니는 가볍게.</h3><div class="feature-stats"><span><b>472g</b>TOTAL</span><span><b>7</b>ITEMS</span><span><b>4.2y</b>AVG. AGE</span></div></div></div><div class="play-actions"><button class="active">선택의 이유 보기</button><button>구성품 7개 펼치기</button><button>214일 변화 보기</button></div><div class="play-foot"><p>각 번호를 누르면 민규가 이 물건을 고른 이유가 보여요.</p><button data-toast="민규에게 이 구성에 관해 묻는 입력창을 열었어요.">이 구성에 질문하기 →</button></div>`,
    threads: [
      ['해','clay','해솔 · 산업 디자이너','방금 전','저도 검정 위주인데 한 점만 색을 넣어요. 민규님은 주황 카라비너가 먼저였나요, 펜이 먼저였나요?','공감 12','답글 3','민','카라비너부터였어요. 찾기 쉬워서 골랐는데 어느새 제 색이 됐네요.'],
      ['준','cobalt','준호 · 대학원생','6분 전','472g을 유지하는 자기 규칙이 궁금해요. 저는 보조배터리를 넣는 순간 늘 600g을 넘어요.','나도 궁금해 8','답글 5'],
      ['리','moss','리원 · 바리스타','11분 전','오래 쓴 물건이 새 물건보다 많이 보여서 좋네요. 멀티툴의 4년 사용기도 따로 보고 싶어요.','공감 19','답글 2']
    ]
  },
  light: {
    eyebrow: 'ROOM 02 · LIGHT', title: '라이트 방', subtitle: '루멘보다, 내가 걷는 길의 빛.', online: '26명이 같은 빔을 비교하고 있어요',
    topics: ['빔 비교', '야간 출퇴근', '배터리', '버튼 감각'], prompt: '비 오는 밤, 3000K와 5000K 중 어느 쪽인가요?',
    play: `<div class="play-head"><span>BEAM WALL · HAN RIVER 22:14</span><span>ISO 400 · WB 4800K · 1/30S</span></div><div class="mode-demo beam-demo"><div class="beam-circle" id="beamCircle"></div><div class="beam-value" id="beamValue">480<small> lm</small></div><div class="beam-settings"><button data-beam="80">LOW</button><button class="active" data-beam="480">MID</button><button data-beam="1200">TURBO</button></div></div><div class="play-actions"><button class="active">빔 겹쳐보기</button><button>런타임 비교</button><button>내 빔샷 더하기</button></div><div class="play-foot"><p>촬영 조건을 맞춰 색, 중심광, 주변광을 함께 비교해요.</p><button data-toast="이 비교에 내 경험을 보탤 수 있어요.">내 사용감 보태기 →</button></div>`,
    threads: [
      ['진','cobalt','진우 · 야간 러너','2분 전','젖은 아스팔트에서는 3000K가 덜 눈부셨어요. 다만 공원 안쪽에서는 5000K가 경계 보기에 낫더라고요.','도움됐어요 24','답글 7','솔','혹시 두 빔 모두 MID였나요? 촬영값도 같아서 비교하기 좋네요.'],
      ['태','clay','태오 · 캠퍼','8분 전','터보는 90초 뒤 열이 커져서, 저는 결국 480lm을 가장 많이 씁니다.','공감 15','답글 4'],
      ['솔','moss','솔 · 시설 관리자','14분 전','장갑을 끼면 밝기보다 버튼 위치가 더 중요해져요. 측면 버튼 30회 테스트를 올렸습니다.','유용해요 31','답글 9']
    ]
  },
  bag: {
    eyebrow: 'ROOM 03 · BAG & POUCH', title: '가방·파우치 방', subtitle: '용량보다, 꺼내는 순서를.', online: '19명이 수납 지도를 함께 보고 있어요',
    topics: ['수납 지도', '한 손 접근', '비 오는 날', '출퇴근'], prompt: '3초 안에 꺼낼 수 있어야 하는 것은?',
    play: `<div class="play-head"><span>PACK MAP · 6L SLING</span><span>1.14KG · 82% FULL · RIGHT HAND</span></div><div class="mode-demo pack-demo"><div class="pack-shell"><div class="pack-zone"><span><b>3×</b>하루 접근<br>지갑 · 이어폰</span></div><div class="pack-zone"><span><b>1×</b>필요할 때<br>케이블 파우치</span></div><div class="pack-zone wide"><span><b>DRY / WET</b>A6 노트 · 접이식 우산 분리</span></div></div></div><div class="play-actions"><button class="active">접근 동선 보기</button><button>층별 내용물</button><button>내 수납지도 그리기</button></div><div class="play-foot"><p>무엇이 들었는지보다 언제, 어느 손으로 꺼내는지 그려요.</p><button data-toast="윤서님의 수납지도에 팁을 남길 수 있어요.">이 동선에 팁 남기기 →</button></div>`,
    threads: [
      ['윤','moss','윤 · 자전거 출퇴근','방금 전','신호 대기 중 오른손으로 교통카드까지 4초예요. 바깥 칸을 20% 비워두니 확실히 빨라졌습니다.','따라 해볼래요 18','답글 6','미','저도 빈 공간을 수납으로 보지 않았는데, 이게 핵심 같아요.'],
      ['미','clay','미정 · 사진가','5분 전','젖은 우산 구역은 지퍼보다 색으로 구분해요. 급할 때는 모양보다 색이 먼저 보이더라고요.','유용해요 22','답글 4'],
      ['찬','cobalt','찬 · 초등 교사','17분 전','아이들과 걷는 날은 누구를 위해 꺼내는지로 층을 나눕니다. 공용 물건은 가장 위에 둬요.','공감 14','답글 3']
    ]
  },
  tool: {
    eyebrow: 'ROOM 04 · TOOL BENCH', title: '도구 방', subtitle: '스펙보다, 해결한 일로.', online: '41개의 해결 기록이 오늘 쌓였어요',
    topics: ['오늘 해결', '마모 일지', '수리 질문', '안전·법률'], prompt: '이번 주 도구로 해결한 가장 작은 일은?',
    play: `<div class="play-head"><span>WORK LOG · SEPTEMBER</span><span>VERIFIED BY 24 MEMBERS</span></div><div class="mode-demo tool-demo"><div class="work-log"><div class="work-note"><small>09.05 · 18:41</small><b>공연 20분 전,<br>흔들리는 스탠드</b>PH2 비트 · 4분</div><div class="work-note"><small>09.02 · 08:12</small><b>자전거 브레이크<br>다시 조정</b>4mm 비트 · 7분</div><div class="work-note wide"><span>218 DAYS IN POCKET<br><b>이 도구가 해결한 일</b></span><strong>37</strong></div></div></div><div class="play-actions"><button class="active">해결 기록</button><button>마모·수리 이력</button><button>내 해결 더하기</button></div><div class="play-foot"><p>위험 장비는 지역·시설 규정과 안전 안내를 먼저 확인해요.</p><button data-toast="이 해결 기록에 검증이나 다른 방법을 보탤 수 있어요.">다른 방법 제안하기 →</button></div>`,
    threads: [
      ['도','clay','도현 · 무대 기술자','3분 전','큰 멀티툴을 계속 들고 다닐지 고민했는데, 오늘 스탠드를 고친 4분이 답이 됐네요.','해결했어요 27','답글 8','경','같은 나사에서 PH1은 헛돌았어요. PH2 선택 근거까지 남겨주셔서 좋아요.'],
      ['경','cobalt','경민 · 자전거 정비사','9분 전','214일째 플라이어 유격이 0.7mm 늘었습니다. 분해 세척 뒤 다시 측정해볼게요.','지켜볼게요 16','답글 6'],
      ['은','moss','은비 · 세트 제작','22분 전','일주일 사용 횟수를 세니 송곳은 0회. 18g을 줄이고 비트 하나를 추가했어요.','공감 11','답글 2']
    ]
  },
  write: {
    eyebrow: 'ROOM 05 · WRITING DESK', title: '필기구 방', subtitle: '펜보다, 손끝에 남은 감각.', online: '12개의 새 필기 샘플을 보고 있어요',
    topics: ['필기 샘플', '왼손잡이', '종이 비교', '오래 쓴 펜'], prompt: '한글을 가장 기분 좋게 쓰게 한 조합은?',
    play: `<div class="play-head"><span>WRITING SAMPLE · A6 80GSM</span><span>LEFT HAND · LOW PRESSURE · EF</span></div><div class="mode-demo write-demo"><div class="writing-paper"><blockquote>기억은 주머니보다<br>먼저 가벼워진다.</blockquote><i></i><i></i><i></i><div class="writing-stats"><span>부드러움<b>8.6</b></span><span>마름<b>12s</b></span><span>번짐<b>LOW</b></span></div></div></div><div class="play-actions"><button class="active">획 비교하기</button><button>종이 바꾸기</button><button>내 샘플 더하기</button></div><div class="play-foot"><p>같은 문장과 종이에 써서 개인의 감각을 비교 가능한 기록으로 만들어요.</p><button data-toast="하림님의 필기 샘플에 사용감을 물을 수 있어요.">이 조합에 질문하기 →</button></div>`,
    threads: [
      ['하','cobalt','하림 · 에디터','4분 전','왼손으로 썼고 12초 뒤 손날로 문질렀어요. 작은 한글 획도 거의 뭉치지 않았습니다.','도움됐어요 21','답글 6','소','필압이 낮은데도 획이 선명하네요. 같은 잉크의 F촉도 궁금해요.'],
      ['소','clay','소은 · 북 디자이너','11분 전','비싼 펜보다 한 손으로 캡을 열 수 있는 펜이 결국 남았어요. 9개월 사용 흔적도 올립니다.','나도 그래요 38','답글 12'],
      ['규','moss','규민 · 기록가','19분 전','미도리, 복사용지, 영수증 뒷면에 같은 문장을 썼습니다. 의외로 복사용지가 가장 선명했어요.','흥미로워요 17','답글 5']
    ]
  }
};

let activeRoom = 'carry';
const toast = message => {
  const node = $('.toast');
  node.textContent = message;
  node.classList.add('show');
  clearTimeout(window.toastTimer);
  window.toastTimer = setTimeout(() => node.classList.remove('show'), 2300);
};

function renderThreads(room) {
  $('#topicStrip').innerHTML = room.topics.map((topic, index) => `<button type="button" class="${index === 0 ? 'active' : ''}">${topic}</button>`).join('');
  $('#threadList').innerHTML = room.threads.map(([initial, color, name, time, body, reaction, replies, nestedInitial, nestedBody]) => `
    <article class="thread">
      <div class="thread-author"><span class="avatar ${color}">${initial}</span><div><b>${name}</b><small>${time}</small></div><span>${time === '방금 전' ? 'LIVE' : ''}</span></div>
      <p>${body}</p>
      <div class="thread-actions"><button type="button" data-like>${reaction}</button><button type="button" data-reply>${replies}</button><button type="button" data-toast="이 이야기를 내 보관함에 저장했어요.">저장</button></div>
      ${nestedBody ? `<div class="nested-reply"><span class="avatar ink">${nestedInitial}</span><p>${nestedBody}</p></div>` : ''}
    </article>`).join('');
}

function wireRoomInteractions() {
  $$('.feature-pin').forEach(pin => {
    if (pin.dataset.actionWired) return;
    pin.dataset.actionWired = 'true';
    pin.addEventListener('click', () => {
    $$('.feature-pin').forEach(item => item.classList.remove('active'));
    pin.classList.add('active');
    });
  });
  $$('[data-beam]').forEach(button => {
    if (button.dataset.actionWired) return;
    button.dataset.actionWired = 'true';
    button.addEventListener('click', () => {
    const settings = {80: '43%', 480: '72%', 1200: '100%'};
    $$('[data-beam]').forEach(item => item.classList.remove('active'));
    button.classList.add('active');
    $('#beamCircle').style.backgroundSize = settings[button.dataset.beam];
    $('#beamValue').innerHTML = `${Number(button.dataset.beam).toLocaleString()}<small> lm</small>`;
    });
  });
  $$('.play-actions button').forEach(button => {
    if (button.dataset.actionWired) return;
    button.dataset.actionWired = 'true';
    button.addEventListener('click', () => {
    $$('.play-actions button').forEach(item => item.classList.remove('active'));
    button.classList.add('active');
    toast(`${button.textContent} 모드로 바꿨어요.`);
    });
  });
  $$('#topicStrip button').forEach(button => {
    if (button.dataset.actionWired) return;
    button.dataset.actionWired = 'true';
    button.addEventListener('click', () => {
    $$('#topicStrip button').forEach(item => item.classList.remove('active'));
    button.classList.add('active');
    });
  });
  $$('[data-like]').forEach(button => {
    if (button.dataset.actionWired) return;
    button.dataset.actionWired = 'true';
    button.addEventListener('click', () => {
    button.classList.toggle('liked');
    if (button.classList.contains('liked')) button.textContent = `✓ ${button.textContent}`;
    else button.textContent = button.textContent.replace('✓ ', '');
    });
  });
  $$('[data-reply]').forEach(button => {
    if (button.dataset.actionWired) return;
    button.dataset.actionWired = 'true';
    button.addEventListener('click', () => {
    $('#replyInput').focus();
    toast('이 대화에 바로 답할 수 있어요.');
    });
  });
  $$('[data-toast]').forEach(button => {
    if (button.dataset.wired) return;
    button.dataset.wired = 'true';
    button.addEventListener('click', () => toast(button.dataset.toast));
  });
}

function renderRoom(key, shouldScroll = false) {
  activeRoom = key;
  const room = roomData[key];
  $('#roomEyebrow').textContent = room.eyebrow;
  $('#roomTitle').textContent = room.title;
  $('#roomSubtitle').textContent = room.subtitle;
  $('#roomOnline').textContent = room.online;
  $('#playground').innerHTML = room.play;
  $('#replyInput').placeholder = `“${room.prompt}”에 답해보세요`;
  renderThreads(room);
  wireRoomInteractions();
  if (shouldScroll) $('#room-detail').scrollIntoView({behavior: 'smooth', block: 'start'});
}

$$('[data-room]').forEach(button => button.addEventListener('click', () => {
  $$('[data-room]').forEach(item => { item.classList.remove('active'); item.setAttribute('aria-selected', 'false'); });
  button.classList.add('active');
  button.setAttribute('aria-selected', 'true');
  renderRoom(button.dataset.room, true);
}));

const composeDialog = $('#composeDialog');
$$('[data-open-compose]').forEach(button => button.addEventListener('click', () => composeDialog.showModal()));
$$('[data-compose-option]').forEach(button => button.addEventListener('click', () => {
  const label = $('b', button).textContent;
  toast(`${label} 방의 기록 도구를 열었어요.`);
}));

$('#quickReply').addEventListener('submit', event => {
  event.preventDefault();
  const input = $('#replyInput');
  const value = input.value.trim();
  if (!value) { toast('짧게라도 내 경험을 적어주세요.'); input.focus(); return; }
  const article = document.createElement('article');
  article.className = 'thread';
  article.innerHTML = `<div class="thread-author"><span class="avatar ink">나</span><div><b>나 · 새 멤버</b><small>방금 전</small></div><span>LIVE</span></div><p></p><div class="thread-actions"><button type="button" data-like>공감 0</button><button type="button" data-reply>답글 0</button><button type="button" data-toast="이 이야기를 내 보관함에 저장했어요.">저장</button></div>`;
  $('p', article).textContent = value;
  $('#threadList').prepend(article);
  input.value = '';
  wireRoomInteractions();
  toast(`${roomData[activeRoom].title}에 내 이야기를 보탰어요.`);
});

$$('[data-join]').forEach(button => button.addEventListener('click', () => {
  button.textContent = button.textContent === '들어온 방' ? '방에 들어오기' : '들어온 방';
  button.classList.toggle('joined');
  toast(button.classList.contains('joined') ? `${roomData[activeRoom].title}을 내 방에 담았어요.` : '내 방에서 뺐어요.');
}));

renderRoom('carry');
