const $=(s,p=document)=>p.querySelector(s);const $$=(s,p=document)=>[...p.querySelectorAll(s)];
const toast=(message)=>{const el=$('.toast');el.textContent=message;el.classList.add('show');clearTimeout(window.toastTimer);window.toastTimer=setTimeout(()=>el.classList.remove('show'),2200)};

const composer=$('#composer');$$('[data-open-composer]').forEach(button=>button.addEventListener('click',()=>composer.showModal()));
$('#fakePublish').addEventListener('click',(event)=>{event.preventDefault();composer.close();toast('좋아요. 다음 단계에서 물건을 하나씩 태그해요.');});
$('#scrollFeed').addEventListener('click',()=>$('#feed').scrollIntoView({behavior:'smooth'}));

$$('.react-button').forEach(button=>button.addEventListener('click',()=>{const liked=button.classList.toggle('liked');const count=$('b',button);count.textContent=Number(count.textContent)+(liked?1:-1);button.firstChild.textContent=liked?'♥ ':'♡ ';}));
$$('.save-button').forEach(button=>button.addEventListener('click',()=>{button.textContent=button.textContent==='✓'?'＋':'✓';toast(button.textContent==='✓'?'나중에 볼 포켓에 저장했어요.':'저장을 취소했어요.')}));

$$('[data-feed-filter]').forEach(button=>button.addEventListener('click',()=>{$$('[data-feed-filter]').forEach(x=>x.classList.remove('active'));button.classList.add('active');const filter=button.dataset.feedFilter;$$('.post').forEach((post,index)=>{const visible=filter==='all'||post.dataset.kind===filter;post.hidden=!visible;post.animate([{opacity:0,transform:'translateY(8px)'},{opacity:1,transform:'none'}],{duration:220,delay:index*25});});}));
$$('[data-filter]').forEach(button=>button.addEventListener('click',()=>{$('#feed').scrollIntoView({behavior:'smooth'});toast(`#${button.dataset.filter} 포켓을 모아볼게요.`)}));

$$('[data-view]').forEach(button=>button.addEventListener('click',()=>{$$('[data-view]').forEach(x=>x.classList.remove('active'));button.classList.add('active');$('#feedGrid').classList.toggle('list',button.dataset.view==='list');}));

$$('.poll button').forEach(button=>button.addEventListener('click',()=>{const poll=button.closest('.poll');if(poll.classList.contains('voted'))return;poll.classList.add('voted');$$('button',poll).forEach(x=>x.style.setProperty('--poll',`${x.dataset.poll}%`));toast('투표 완료. 12개의 댓글이 열렸어요.');}));

$$('.quick-replies button').forEach(button=>button.addEventListener('click',()=>{const count=$('b',button);count.textContent=Number(count.textContent)+1;toast(`“${button.firstChild.textContent.trim()}”에 한 표!`)}));
$('#loadMore').addEventListener('click',()=>{toast('시안에서는 여기까지 준비했어요.');$('#loadMore small').textContent='매일 새로운 포켓이 이어집니다';});

const balancer=$('#balancer');['#openBalancer','#openBalancerAside'].forEach(id=>$(id)?.addEventListener('click',()=>balancer.showModal()));
const updateBalance=()=>{const checked=$$('#gearChecklist input:checked');const weight=checked.reduce((sum,x)=>sum+Number(x.dataset.weight),0);const ready=checked.reduce((sum,x)=>sum+Number(x.dataset.ready),0);$('#totalWeight').innerHTML=`${weight}<small>g</small>`;$('#readyScore').textContent=Math.min(100,ready);$('#itemCount').textContent=checked.length;$('#loadGauge').style.width=`${Math.min(100,weight/10)}%`;$('#loadGauge').style.background=weight>800?'var(--orange)':'var(--acid)';$('#loadMessage').textContent=weight<600?'가볍고 민첩한 구성입니다.':weight<800?'조금 묵직하지만 대비력이 좋아요.':'오늘 일정에 정말 필요한지 한 번 더 봐요.';};
$$('#gearChecklist input').forEach(input=>input.addEventListener('change',updateBalance));updateBalance();

$('#searchOpen').addEventListener('click',()=>toast('⌕ “3L 출퇴근 라이트”처럼 찾아보세요.'));
$$('.club-card a,.safety-note a').forEach(link=>link.addEventListener('click',event=>{event.preventDefault();toast('커뮤니티 시안용 링크입니다.')}));
