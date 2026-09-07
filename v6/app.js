const $ = (selector, parent = document) => parent.querySelector(selector);
const $$ = (selector, parent = document) => [...parent.querySelectorAll(selector)];

const categoryData = {
  '나이프': {description:'날보다 손에 익은 감각과\n실제로 쓰는 순간을 나눠요.', online:'31명', question:'지금 가진 나이프 중 가장 오래된 것은?', posts:[
    {user:'민규',initial:'민',color:'orange',meta:'생활 기술자 · 방금 전',title:'4년 동안 바꾸지 않은 건 가장 비싼 물건이 아니었다.',body:'박스를 열 때, 케이블을 정리할 때. 무뎌질 때마다 직접 갈아가며 쓴 작은 나이프입니다.',tags:['4년 사용','직접 구매','출퇴근'],photo:true,likes:42,talks:11},
    {user:'재훈',initial:'재',color:'blue',meta:'목공 작업자 · 7분 전',title:'장갑을 끼면 그립의 답이 달라진다.',body:'같은 손잡이를 맨손과 작업 장갑으로 30번씩 열어봤어요.',tags:['그립 비교','작업실','Used & Abused'],likes:31,talks:8}
  ]},
  '멀티툴': {description:'스펙보다 오늘 해결한\n작은 일을 나눠요.', online:'24명', question:'이번 주 멀티툴로 해결한 가장 작은 일은?', posts:[
    {user:'도현',initial:'도',color:'orange',meta:'무대 기술자 · 3분 전',title:'공연 20분 전, 흔들리는 스탠드.',body:'PH2 비트 하나와 4분. 큰 멀티툴을 계속 들고 다닐 이유가 생겼습니다.',tags:['해결 기록','4분','PH2'],likes:27,talks:8},
    {user:'경민',initial:'경',color:'blue',meta:'자전거 정비사 · 12분 전',title:'214일째, 플라이어 유격 0.7mm.',body:'분해 세척 전후를 재고 있습니다. 다음 달에 한 번 더 기록할게요.',tags:['마모 일지','214일','수리'],likes:19,talks:6}
  ]},
  '라이트': {description:'같은 밤, 서로 다른 빛과\n사용 환경을 비교해요.', online:'28명', question:'비 오는 밤, 몇 K의 빛을 고르나요?', posts:[
    {user:'진우',initial:'진',color:'blue',meta:'야간 러너 · 2분 전',title:'젖은 아스팔트에서는 3000K.',body:'밝기보다 반사광이 덜 피곤한 쪽을 골랐습니다. 같은 장소, 같은 노출로 찍었어요.',tags:['3000K','480lm','한강 러닝'],visual:'light',likes:48,talks:17},
    {user:'솔',initial:'솔',color:'green',meta:'시설 관리자 · 14분 전',title:'장갑을 끼면 버튼 위치부터.',body:'측면 버튼 30회 테스트를 올렸어요. 밝기보다 조작이 먼저였습니다.',tags:['조작감','현장','6개월'],likes:31,talks:9}
  ]},
  '시계': {description:'정확한 시간보다 함께 쌓인\n생활의 흔적을 나눠요.', online:'17명', question:'흠집 하나에 담긴 기억이 있나요?', posts:[
    {user:'해솔',initial:'해',color:'green',meta:'산업 디자이너 · 8분 전',title:'흠집이 생기고 나서야 매일 차게 된 시계.',body:'조심해서 모셔둘 때보다 책상과 문에 부딪힌 뒤 제 물건이 됐어요.',tags:['3년 사용','생활 흠집','매일 착용'],likes:39,talks:13},
    {user:'현',initial:'현',color:'blue',meta:'학생 · 19분 전',title:'시험장에 가져갈 수 있는 가장 단순한 것.',body:'알림도 진동도 없어서 오히려 집중하게 됩니다.',tags:['디지털','학생 EDC'],likes:21,talks:5}
  ]},
  '피젯': {description:'손끝이 기억하는 리듬과\n집중의 순간을 나눠요.', online:'12명', question:'언제 가장 자주 손이 가나요?', posts:[
    {user:'은비',initial:'은',color:'orange',meta:'세트 제작 · 5분 전',title:'회의가 길어질수록 손은 솔직하다.',body:'소리가 나지 않는 작은 슬라이더를 8개월째 들고 다닙니다.',tags:['무소음','8개월','집중'],likes:18,talks:4},
    {user:'규민',initial:'규',color:'green',meta:'기록가 · 22분 전',title:'도구와 장난감 사이, 손에 남은 황동.',body:'반짝임은 사라지고 손이 닿은 자리만 매끈해졌습니다.',tags:['황동','파티나','1년'],likes:26,talks:7}
  ]},
  '정보': {description:'오래 남을 사용기와 가이드를\n함께 쌓는 게시판입니다.', online:'19명', question:'다른 사람에게 꼭 남기고 싶은 팁은?', posts:[
    {user:'진우',initial:'진',color:'blue',meta:'야간 러너 · 2일 전',title:'3000K와 5000K, 비 오는 골목에서 한 달 써본 기록',body:'같은 밝기, 같은 코스, 같은 노출로 비교한 30일의 결과입니다.',tags:['FIELD TEST','30일','8분 읽기'],visual:'light',likes:86,talks:24},
    {user:'서진',initial:'서',color:'green',meta:'가죽 공예가 · 3일 전',title:'가죽 파우치가 젖었을 때 하지 말아야 할 세 가지',body:'급하게 말리다 망친 경험과 천천히 되돌린 과정을 정리했습니다.',tags:['관리 가이드','가죽'],likes:57,talks:15}
  ]},
  '자유': {description:'어떤 주머니든 부담 없이\n편하게 이야기해요.', online:'35명', question:'오늘 주머니에 뜻밖에 들어온 것은?', posts:[
    {user:'윤서',initial:'윤',color:'green',meta:'자전거 출퇴근 · 방금 전',title:'오늘은 우산이 Carry의 절반.',body:'오후 소나기 때문에 평소 구성을 모두 바꿨어요.',tags:['비 오는 날','출퇴근'],photo:true,likes:29,talks:10},
    {user:'소은',initial:'소',color:'orange',meta:'북 디자이너 · 11분 전',title:'영수증 뒤에 적은 문장이 남았다.',body:'노트보다 먼저 꺼낸 종이 한 장과 작은 펜 이야기.',tags:['오늘의 EDC','필기'],likes:22,talks:6}
  ]},
  '유머': {description:'과한 준비와 장비 욕심도\n가볍게 웃으며 나눠요.', online:'22명', question:'결국 한 번도 쓰지 않은 준비물은?', posts:[
    {user:'찬',initial:'찬',color:'orange',meta:'과잉 준비단 · 4분 전',title:'5분 산책에 2kg를 챙긴 사람의 최후.',body:'정작 필요한 건 현관 비밀번호였습니다.',tags:['TRUE STORY','과잉 준비'],likes:72,talks:21},
    {user:'우주',initial:'우',color:'blue',meta:'캠퍼 · 16분 전',title:'파우치를 정리하기 위해 파우치를 샀다.',body:'이제 정리할 파우치가 하나 더 생겼습니다.',tags:['파우치 안의 파우치','무한 수납'],likes:61,talks:19}
  ]}
};

let activeCategory = '나이프';
let activeFormat = 'FEED';
let activeWriteRoom = '나이프';

function toast(message){
  const node = $('.toast');
  node.textContent = message;
  node.classList.add('show');
  clearTimeout(window.pocketsToast);
  window.pocketsToast = setTimeout(() => node.classList.remove('show'), 2200);
}

function go(view, push = true){
  $$('.view').forEach(node => node.classList.toggle('active', node.dataset.view === view));
  $$('[data-nav]').forEach(button => button.classList.toggle('active', button.dataset.nav === view));
  if(view === 'feed') renderFeed();
  if(push) history.replaceState(null, '', `#${view}`);
  window.scrollTo({top:0, behavior:'smooth'});
}

function selectCategory(category){
  activeCategory = category;
  closeCategories();
  go(category === '정보' ? 'post' : 'feed');
}

function feedVisual(post){
  if(post.photo) return `<div class="feed-media"><img src="../v2/assets/edc-flatlay.png" alt="${post.user}의 EDC 구성"><span class="feed-stamp">FIELD CARRY / 09.07</span><span class="item-label label-a">4 YEARS</span><span class="item-label label-b">USED WEEKLY</span></div>`;
  if(post.visual === 'light') return `<div class="abstract-media light-visual"><span>3000K · 480LM · SAME EXPOSURE</span></div>`;
  return `<div class="abstract-media"><span>USED, NOT DISPLAYED · ${post.tags[0].toUpperCase()}</span></div>`;
}

function renderFeed(){
  const data = categoryData[activeCategory];
  $('#feed-title').textContent = activeCategory;
  $('#mobile-category').textContent = activeCategory;
  $('#feed-description').innerHTML = data.description.replace('\n','<br>');
  $('#online-count').textContent = data.online;
  $('#feed-question-text').textContent = data.question;
  $$('[data-feed-category]').forEach(button => button.classList.toggle('active', button.dataset.feedCategory === activeCategory));
  $('#feed-list').innerHTML = data.posts.map(post => `<article class="feed-card">
    <header class="feed-card-head"><div class="person-line"><span class="avatar avatar-${post.color}">${post.initial}</span><p><b>${post.user}</b><small>${post.meta}</small></p></div><button type="button" data-toast="더보기 메뉴를 열었어요." aria-label="게시물 더보기">···</button></header>
    <button type="button" data-open-post aria-label="${post.title} 열기" style="display:block;width:100%;border:0;padding:0;text-align:left">${feedVisual(post)}</button>
    <div class="feed-card-body"><h2>${post.title}</h2><p>${post.body}</p><div class="context-tags">${post.tags.map(tag => `<span>${tag}</span>`).join('')}</div><div class="feed-card-actions"><button type="button" data-react>♡ 공감 ${post.likes}</button><button type="button" data-open-post>↳ 이야기 ${post.talks}</button><button type="button" data-toast="보관함에 저장했어요.">보관</button></div></div>
  </article>`).join('');
  wireDynamic();
}

function closeCategories(){
  $('#category-drawer').classList.remove('open');
  $('#category-drawer').setAttribute('aria-hidden','true');
}

function updatePublishLabel(){
  $('#publish-label').textContent = activeFormat === 'POST' ? `${activeWriteRoom}에 포스트 공개하기` : `${activeWriteRoom} 피드에 펼치기`;
}

function wireDynamic(){
  $$('[data-open-post]').forEach(button => {if(button.dataset.wired)return;button.dataset.wired='1';button.addEventListener('click',()=>go('post'));});
  $$('[data-react]').forEach(button => {if(button.dataset.wired)return;button.dataset.wired='1';button.addEventListener('click',()=>{button.classList.toggle('reacted');button.innerHTML=button.innerHTML.replace(button.classList.contains('reacted')?'♡':'♥',button.classList.contains('reacted')?'♥':'♡');});});
  $$('[data-toast]').forEach(button => {if(button.dataset.wired)return;button.dataset.wired='1';button.addEventListener('click',()=>toast(button.dataset.toast));});
}

$$('[data-go]').forEach(button => button.addEventListener('click',()=>go(button.dataset.go)));
$$('[data-category]').forEach(button => button.addEventListener('click',()=>selectCategory(button.dataset.category)));
$$('[data-feed-category]').forEach(button => button.addEventListener('click',()=>selectCategory(button.dataset.feedCategory)));
$$('.feed-tabs button').forEach(button => button.addEventListener('click',()=>{$$('.feed-tabs button').forEach(item=>item.classList.remove('active'));button.classList.add('active');toast(`${button.textContent} 순서로 보고 있어요.`);}));
$$('[data-open-categories]').forEach(button => button.addEventListener('click',()=>{$('#category-drawer').classList.add('open');$('#category-drawer').setAttribute('aria-hidden','false');}));
$$('[data-close-categories]').forEach(button => button.addEventListener('click',closeCategories));
$$('[data-format-option]').forEach(button => button.addEventListener('click',()=>{activeFormat=button.dataset.formatOption;$$('[data-format-option]').forEach(item=>{item.classList.toggle('active',item===button);$('em',item).textContent=item===button?'선택됨 ✓':'선택';});updatePublishLabel();}));
$$('[data-write-room]').forEach(button => button.addEventListener('click',()=>{activeWriteRoom=button.dataset.writeRoom;$$('[data-write-room]').forEach(item=>item.classList.toggle('active',item===button));updatePublishLabel();}));
$$('.detail-chips button').forEach(button => button.addEventListener('click',()=>button.classList.toggle('active')));
$('[data-upload]').addEventListener('click',event=>{const button=event.currentTarget;button.classList.add('uploaded');$('b',button).textContent='carry-flatlay.jpg';$('small',button).textContent='사진을 놓았어요 · 바꾸려면 다시 눌러주세요';$('em',button).textContent='바꾸기';toast('사진을 추가했어요.');});
$('[data-load]').addEventListener('click',event=>{event.currentTarget.innerHTML='오늘 올라온 이야기를 모두 봤어요';toast('새 이야기가 생기면 여기에서 이어집니다.');});
$('[data-focus-reply]').addEventListener('click',()=>{$('#reply-input').focus();$('#reply-form').scrollIntoView({behavior:'smooth',block:'center'});});
$('#reply-form').addEventListener('submit',event=>{event.preventDefault();const input=$('#reply-input');if(!input.value.trim()){toast('짧게라도 경험을 적어주세요.');input.focus();return;}toast('진우의 기록에 경험을 보탰어요.');input.value='';$('#reply-count').textContent=Number($('#reply-count').textContent)+1;});
$('#write-form').addEventListener('submit',event=>{event.preventDefault();if(!$('#write-title-input').value.trim()){toast('이야기의 한 줄 제목을 적어주세요.');$('#write-title-input').focus();return;}toast(`${activeWriteRoom}에 이야기를 놓았어요!`);setTimeout(()=>{activeCategory=activeWriteRoom;go(activeFormat==='POST'?'post':'feed');},700);});
$('[data-open-post][tabindex]').addEventListener('keydown',event=>{if(event.key==='Enter'||event.key===' '){event.preventDefault();go('post');}});
wireDynamic();
renderFeed();
const initial = location.hash.replace('#','');
if(['home','feed','post','write'].includes(initial)) go(initial,false);
