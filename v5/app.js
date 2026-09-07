const $ = (selector, parent = document) => parent.querySelector(selector);
const $$ = (selector, parent = document) => [...parent.querySelectorAll(selector)];

const rooms = {
  carry: {
    title: '전체 Carry', copy: '구성은 곧,\n짧은 자기소개.', online: '＋80', question: '가장 자주 꺼낸 물건은 무엇인가요?', expression: '사진 위에 선택의 이유를 붙여보세요',
    posts: [
      {wide:true, user:'민규', initial:'민', color:'coral', meta:'생활 기술자 · 방금 전', title:'기계는 좋아하지만, 주머니는 가볍게.', body:'실제로 꺼내 쓰는 것만 남긴 472g 출퇴근 Carry입니다.', context:['출퇴근','472g','7개','214일'], visual:'photo', likes:42, talks:11},
      {user:'소은', initial:'소', color:'yellow', meta:'북 디자이너 · 5분 전', title:'캡을 한 손으로 열 수 있다는 것.', body:'비싼 펜보다 매일 꺼내는 펜이 결국 남았어요.', context:['필기구','9개월 사용'], visual:'writing', likes:38, talks:12},
      {user:'도현', initial:'도', color:'green', meta:'무대 기술자 · 12분 전', title:'오늘, 이 도구가 해결한 일.', body:'공연 20분 전 흔들리던 스탠드를 4분 만에 고쳤습니다.', context:['도구','실사용'], visual:'tool', likes:27, talks:8}
    ]
  },
  light: {
    title:'라이트', copy:'루멘보다,\n내가 걷는 길의 빛.', online:'＋22', question:'비 오는 밤, 몇 K의 빛을 고르나요?', expression:'빔의 조건을 맞춰 경험을 비교해보세요',
    posts:[
      {wide:true,user:'진우',initial:'진',color:'blue',meta:'야간 러너 · 2분 전',title:'젖은 아스팔트에서는 3000K.',body:'밝기보다 반사광이 덜 피곤한 쪽을 골랐습니다. 같은 장소, 같은 노출로 찍었어요.',context:['3000K','480lm','한강 러닝'],visual:'light',likes:24,talks:7},
      {user:'태오',initial:'태',color:'coral',meta:'캠퍼 · 8분 전',title:'터보보다 결국 MID.',body:'90초 뒤 열이 올라와서 480lm을 가장 많이 씁니다.',context:['런타임','6개월'],visual:'light',likes:15,talks:4},
      {user:'솔',initial:'솔',color:'green',meta:'시설 관리자 · 14분 전',title:'장갑을 끼면 버튼 위치부터.',body:'측면 버튼 30회 테스트를 올렸어요.',context:['조작감','현장'],visual:'tool',likes:31,talks:9}
    ]
  },
  bag: {
    title:'가방·파우치', copy:'용량보다,\n꺼내는 순서로.', online:'＋15', question:'3초 안에 꺼낼 수 있어야 하는 것은?', expression:'가방 안을 접근 순서의 지도로 그려보세요',
    posts:[
      {wide:true,user:'윤서',initial:'윤',color:'green',meta:'자전거 출퇴근 · 방금 전',title:'비워둔 20%도 수납입니다.',body:'신호 대기 중 오른손으로 교통카드까지 4초. 바깥 칸을 비우니 더 빨라졌어요.',context:['6L 슬링','오른손','수납 지도'],visual:'bag',likes:18,talks:6},
      {user:'미정',initial:'미',color:'coral',meta:'사진가 · 5분 전',title:'젖은 구역은 색으로.',body:'급할 때는 모양보다 색이 먼저 보여요.',context:['비 오는 날','파우치'],visual:'bag',likes:22,talks:4},
      {user:'찬',initial:'찬',color:'blue',meta:'초등 교사 · 17분 전',title:'누구를 위해 꺼내는지.',body:'공용 물건은 언제나 가장 위에 둡니다.',context:['아이와 외출','8L'],visual:'photo',likes:14,talks:3}
    ]
  },
  tool: {
    title:'도구', copy:'스펙보다,\n해결한 일로.', online:'＋37', question:'이번 주 도구로 해결한 가장 작은 일은?', expression:'도구가 실제로 해결한 일을 남겨보세요',
    posts:[
      {wide:true,user:'도현',initial:'도',color:'coral',meta:'무대 기술자 · 3분 전',title:'공연 20분 전, 흔들리는 스탠드.',body:'PH2 비트 하나와 4분. 큰 멀티툴을 계속 들고 다닐 이유가 생겼어요.',context:['해결 기록','4분','PH2'],visual:'tool',likes:27,talks:8},
      {user:'경민',initial:'경',color:'blue',meta:'자전거 정비사 · 9분 전',title:'214일째 유격 0.7mm.',body:'분해 세척 뒤 다시 측정해볼게요.',context:['마모 일지','수리'],visual:'tool',likes:16,talks:6},
      {user:'은비',initial:'은',color:'green',meta:'세트 제작 · 22분 전',title:'쓰지 않은 18g을 빼다.',body:'송곳을 빼고 비트 하나를 추가했어요.',context:['경량화','실사용'],visual:'photo',likes:11,talks:2}
    ]
  },
  writing: {
    title:'필기구', copy:'펜보다,\n손끝에 남은 감각.', online:'＋8', question:'한글을 가장 기분 좋게 쓰게 한 조합은?', expression:'같은 문장으로 획과 마름을 보여주세요',
    posts:[
      {wide:true,user:'하림',initial:'하',color:'blue',meta:'에디터 · 4분 전',title:'왼손, 낮은 필압, 12초.',body:'작은 한글 획도 거의 뭉치지 않았습니다. 같은 문장과 종이로 비교했어요.',context:['EF촉','80gsm','왼손'],visual:'writing',likes:21,talks:6},
      {user:'소은',initial:'소',color:'coral',meta:'북 디자이너 · 11분 전',title:'한 손으로 여는 펜.',body:'9개월간 매일 꺼낸 이유입니다.',context:['9개월','실사용'],visual:'writing',likes:38,talks:12},
      {user:'규민',initial:'규',color:'green',meta:'기록가 · 19분 전',title:'영수증 뒷면까지.',body:'의외로 복사용지가 가장 선명했어요.',context:['종이 비교','한글'],visual:'writing',likes:17,talks:5}
    ]
  }
};

const expressionTemplates = {
  carry: `<div class="flatlay-uploader"><div class="upload-photo"><img src="../v2/assets/edc-flatlay.png" alt="업로드할 Carry 예시"></div><div class="upload-copy"><span>＋</span><b>사진을 놓아주세요</b><p>올린 뒤 물건을 눌러 이름과<br>선택한 이유를 붙일 수 있어요.</p><button type="button" data-upload>사진 고르기</button></div></div>`,
  light: `<div class="condition-form"><div class="beam-preview"></div><div class="field-stack"><label>밝기<select><option>480 lm · MID</option><option>80 lm · LOW</option><option>1,200 lm · TURBO</option></select></label><label>색온도<select><option>3000K · WARM</option><option>5000K · NEUTRAL</option></select></label><label>촬영 조건<input value="ISO 400 · 1/30s"></label></div></div>`,
  bag: `<div class="pack-builder"><div class="pack-canvas"><button type="button">3× / 하루<br>지갑 · 이어폰</button><button type="button">1× / 필요할 때<br>케이블 파우치</button><button type="button">＋ 새 구역 추가</button></div><div class="builder-note"><span class="eyebrow">PACK MAP</span><h3>언제, 어느 손으로<br>꺼내나요?</h3><p>내용물보다 접근 순서를 보여주는 수납 지도를 만들어요.</p></div></div>`,
  tool: `<div class="solution-log"><div><span class="eyebrow">TODAY I FIXED</span><h3>어디서 무엇을<br>해결했나요?</h3><p>도구명보다 해결한 상황, 걸린 시간, 사용한 비트를 먼저 기록해요.</p><div class="field-stack"><label>해결한 일<input placeholder="예: 흔들리는 스탠드"></label><label>걸린 시간<input placeholder="예: 4분"></label></div></div><div class="solution-count"><strong>37</strong><span>THINGS SOLVED</span></div></div>`,
  writing: `<div class="writing-builder"><div class="writing-paper" contenteditable="true">기억은 주머니보다<br>먼저 가벼워진다.</div><div class="writing-controls"><span class="eyebrow">WRITING SAMPLE</span><button type="button">종이 · 80gsm</button><button type="button">촉 · EF</button><button type="button">손 · 왼손</button><button type="button">마름 · 12초</button></div></div>`
};

const archiveData = {
  records:[
    {type:'photo',kicker:'DAY 214 · 09.06 UPDATE',title:'472g 출퇴근 Carry',body:'이어폰을 뺄지 30일 더 기록 중'},
    {type:'light',kicker:'MONTH 6 · 09.02 UPDATE',title:'비 오는 밤의 R10 Mini',body:'3000K가 남은 이유를 추가했어요'},
    {type:'tool',kicker:'YEAR 4 · 08.28 UPDATE',title:'멀티툴이 해결한 37가지',body:'플라이어 유격 측정 기록 추가'},
    {type:'writing',kicker:'MONTH 9 · 08.17 UPDATE',title:'한 손으로 여는 펜',body:'리필 3개를 다 쓴 뒤의 결론'},
    {type:'empty',kicker:'',title:'새 기록 시작하기',body:'피드 글을 기록으로 이어보세요'}
  ],
  posts:[
    {type:'photo',kicker:'전체 CARRY · 09.06',title:'오늘의 472g 출퇴근',body:'공감 42 · 이야기 11'},
    {type:'writing',kicker:'필기구 · 08.29',title:'복사용지에 쓰는 이유',body:'공감 18 · 이야기 5'},
    {type:'tool',kicker:'도구 · 08.17',title:'우산 손잡이를 고친 날',body:'공감 27 · 이야기 8'}
  ],
  saved:[
    {type:'light',kicker:'진우의 기록',title:'젖은 아스팔트 3000K',body:'라이트 · 6개월 사용'},
    {type:'writing',kicker:'소은의 기록',title:'왼손 필기 샘플',body:'필기구 · EF촉'},
    {type:'photo',kicker:'윤서의 기록',title:'비워둔 20%의 수납',body:'가방·파우치 · 6L'}
  ]
};

let activeScreen = 'home';
let activeRoom = 'carry';

function toast(message){
  const node = $('.toast');
  node.textContent = message;
  node.classList.add('show');
  clearTimeout(window.pocketsToast);
  window.pocketsToast = setTimeout(() => node.classList.remove('show'), 2300);
}

function visualMarkup(type){
  if(type === 'photo') return `<div class="feed-visual"><img src="../v2/assets/edc-flatlay.png" alt="EDC 구성 사진"></div>`;
  if(type === 'light') return `<div class="feed-visual type-light"><span class="beam-label">3000K · 480LM · ISO400</span></div>`;
  if(type === 'bag') return `<div class="feed-visual type-bag"><span>3× / DAY<br>지갑 · 이어폰</span><span>1× / DAY<br>케이블</span><span>DRY / WET · 우산 분리</span></div>`;
  if(type === 'tool') return `<div class="feed-visual type-tool"><p>THIS TOOL<br>SOLVED</p><strong>37</strong></div>`;
  return `<div class="feed-visual type-writing">기억은 주머니보다<br>먼저 가벼워진다.</div>`;
}

function renderFeed(){
  const room = rooms[activeRoom];
  $('#feed-room-title').textContent = room.title;
  $('#mobile-feed-title').textContent = room.title;
  $('#feed-room-copy').innerHTML = room.copy.replace('\n','<br>');
  $('#feed-online').textContent = room.online;
  $('#daily-question').textContent = room.question;
  $('#feed-list').innerHTML = room.posts.map(post => `<article class="feed-card ${post.wide ? 'wide' : ''}">
    <div class="post-person"><span class="avatar avatar-${post.color}">${post.initial}</span><p><b>${post.user}</b><small>${post.meta}</small></p>${post.meta.includes('방금') ? '<em>LIVE</em>' : ''}</div>
    <button class="card-open" type="button" data-open-post aria-label="${post.title} 게시물 열기">${visualMarkup(post.visual)}</button>
    <div class="feed-card-body"><h2>${post.title}</h2><p>${post.body}</p><div class="feed-context">${post.context.map(item => `<span>${item}</span>`).join('')}</div><div class="feed-social"><button type="button" data-react>♡ 공감 ${post.likes}</button><button type="button" data-open-post>↳ 이야기 ${post.talks}</button><button type="button" data-toast="보관함에 저장했어요.">저장</button></div></div>
  </article>`).join('');
  $$('.room-nav button').forEach(button => button.classList.toggle('active', button.dataset.room === activeRoom));
  wireDynamicActions();
}

function renderExpression(){
  const room = rooms[activeRoom];
  $('#expression-title').textContent = room.expression;
  $('#expression-ui').innerHTML = expressionTemplates[activeRoom];
  $('.publish-button').textContent = `${room.title} 피드에 펼치기 ↗`;
  $$('[data-upload]').forEach(button => button.addEventListener('click', () => {
    button.textContent = '사진을 놓았어요 ✓';
    $('.upload-photo img').style.filter = 'none';
    toast('사진을 추가했어요. 물건에 번호를 붙여보세요.');
  }));
}

function renderArchive(key='records'){
  $('#archive-grid').innerHTML = archiveData[key].map(item => {
    if(item.type === 'empty') return `<button class="empty-card" type="button" data-go="compose"><span>＋</span>${item.title}<small>${item.body}</small></button>`;
    const cover = item.type === 'photo' ? `<div class="record-cover"><img src="../v2/assets/edc-flatlay.png" alt="${item.title}"></div>` : item.type === 'tool' ? `<div class="record-cover type-tool">37</div>` : item.type === 'light' ? `<div class="record-cover type-light"></div>` : `<div class="record-cover type-writing">가볍게,<br>매일 오래.</div>`;
    return `<article class="record-card">${cover}<div><small>${item.kicker}</small><h3>${item.title}</h3><p>${item.body}</p><button type="button" data-toast="${item.title} 기록을 열었어요.">이어 보기 →</button></div></article>`;
  }).join('');
  wireDynamicActions();
}

function go(screen, push=true){
  activeScreen = screen;
  $$('.screen').forEach(node => node.classList.toggle('active', node.dataset.screen === screen));
  $$('.main-nav [data-go], .mobile-nav [data-go]').forEach(button => button.classList.toggle('active', button.dataset.go === screen || (screen === 'detail' && button.dataset.go === 'feed')));
  if(screen === 'feed') renderFeed();
  if(screen === 'compose') renderExpression();
  if(screen === 'profile') renderArchive($('.archive-tabs .active')?.dataset.archive || 'records');
  if(push) history.replaceState(null,'',`#${screen}`);
  window.scrollTo({top:0,behavior:'smooth'});
}

function selectRoom(key, navigate=true){
  activeRoom = key;
  $$('.compose-rooms button').forEach(button => {
    const selected = button.dataset.composeRoom === key;
    button.classList.toggle('active', selected);
    button.setAttribute('aria-checked', selected ? 'true' : 'false');
  });
  closeDrawer();
  if(navigate) go('feed'); else renderExpression();
}

function closeDrawer(){
  const drawer = $('#room-drawer');
  drawer.classList.remove('open');
  drawer.setAttribute('aria-hidden','true');
}

function wireDynamicActions(){
  $$('[data-open-post]').forEach(button => { if(button.dataset.wired) return; button.dataset.wired='1'; button.addEventListener('click',()=>go('detail')); });
  $$('[data-react]').forEach(button => { if(button.dataset.wired) return; button.dataset.wired='1'; button.addEventListener('click',()=>{button.classList.toggle('active'); if(button.classList.contains('active')) button.innerHTML = button.innerHTML.replace('♡','♥'); else button.innerHTML = button.innerHTML.replace('♥','♡');}); });
  $$('[data-toast]').forEach(button => { if(button.dataset.wired) return; button.dataset.wired='1'; button.addEventListener('click',()=>toast(button.dataset.toast)); });
  $$('[data-go]').forEach(button => { if(button.dataset.goWired) return; button.dataset.goWired='1'; button.addEventListener('click',()=>go(button.dataset.go)); });
  $$('[data-focus-comment]').forEach(button => { if(button.dataset.focusWired) return; button.dataset.focusWired='1'; button.addEventListener('click',()=>{$('#comment-input').focus();$('#comment-input').scrollIntoView({behavior:'smooth',block:'center'});}); });
}

$$('[data-room]').forEach(button => button.addEventListener('click',()=>selectRoom(button.dataset.room)));
$$('[data-compose-room]').forEach(button => button.addEventListener('click',()=>selectRoom(button.dataset.composeRoom,false)));
$$('.topic-tabs button').forEach(button => button.addEventListener('click',()=>{$$('.topic-tabs button').forEach(item=>item.classList.remove('active'));button.classList.add('active');toast(`${button.textContent} 이야기부터 보고 있어요.`);}));
$$('.context-chips button').forEach(button => button.addEventListener('click',()=>button.classList.toggle('active')));
$$('[data-room-menu]').forEach(button => button.addEventListener('click',()=>{$('#room-drawer').classList.add('open');$('#room-drawer').setAttribute('aria-hidden','false');}));
$$('[data-close-drawer]').forEach(button => button.addEventListener('click',closeDrawer));
$$('[data-join]').forEach(button => button.addEventListener('click',()=>{button.classList.toggle('joined');button.textContent=button.classList.contains('joined')?'✓ 들어온 방':'＋ 방에 들어오기';toast(button.classList.contains('joined')?'내 방에 담았어요.':'내 방에서 뺐어요.');}));
$$('.item-pin').forEach(button => button.addEventListener('click',()=>{$$('.item-pin').forEach(item=>item.classList.remove('active'));button.classList.add('active');const [title,body]=button.dataset.item.split(' · ');$('#item-caption').innerHTML=`<b>${String(button.textContent).padStart(2,'0')} · ${title}</b><span>${body}</span>`;}));
$$('[data-convert]').forEach(button => button.addEventListener('click',()=>{button.textContent='✓ 기록에 이어졌어요';button.classList.add('active');toast('피드 글을 내 기록의 첫 장으로 바꿨어요.');}));
$$('[data-archive]').forEach(button => button.addEventListener('click',()=>{$$('[data-archive]').forEach(item=>item.classList.remove('active'));button.classList.add('active');renderArchive(button.dataset.archive);}));
$$('[data-load-more]').forEach(button => button.addEventListener('click',()=>{button.textContent='오늘의 이야기를 모두 봤어요';toast('새 이야기가 생기면 여기에서 이어집니다.');}));

$('#comment-form').addEventListener('submit',event=>{
  event.preventDefault();
  const input=$('#comment-input');
  const value=input.value.trim();
  if(!value){toast('짧게라도 말을 걸어보세요.');input.focus();return;}
  const article=document.createElement('article');
  article.innerHTML=`<span class="avatar my-avatar">동</span><div><header><b>동규 <i>새 멤버</i></b><time>방금 전</time></header><p></p><footer><button type="button" data-react>♡ 공감 0</button><button type="button" data-focus-comment>답글</button></footer></div>`;
  $('p',article).textContent=value;
  $('#comments').append(article);
  input.value='';
  $('#comment-count').textContent=Number($('#comment-count').textContent)+1;
  wireDynamicActions();
  toast('민규의 Carry에 이야기를 보탰어요.');
});

$('#composer').addEventListener('submit',event=>{
  event.preventDefault();
  const title=$('#post-title').value.trim();
  if(!title){toast('Carry를 소개하는 한 줄 제목을 적어주세요.');$('#post-title').focus();return;}
  toast(`${rooms[activeRoom].title} 피드에 Carry를 펼쳤어요!`);
  setTimeout(()=>go('feed'),700);
});

wireDynamicActions();
renderFeed();
renderExpression();
renderArchive();
const initial=location.hash.replace('#','');
if(['home','feed','compose','detail','profile'].includes(initial)) go(initial,false);
