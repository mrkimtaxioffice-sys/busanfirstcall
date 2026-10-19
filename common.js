/* ══════════════════════════════════════════
   부산 장거리 전문 퍼스트 콜택시 — 서브 페이지 공통 스크립트
   - 페이지 진입/이동 시 페이드 전환
   (index.html은 자체 스크립트 사용)
══════════════════════════════════════════ */
(function () {
  var o = document.getElementById('page-transition-overlay');
  if (!o) return; // 오버레이가 없는 페이지에서는 아무것도 하지 않음

  // 진입 시 페이드 인
  o.style.opacity = '1';
  o.style.transition = 'none';
  requestAnimationFrame(function () {
    requestAnimationFrame(function () {
      o.style.transition = 'opacity .5s ease';
      o.style.opacity = '0';
    });
  });

  // 내부 링크 클릭 시 페이드 아웃 후 이동
  document.addEventListener('click', function (e) {
    var l = e.target.closest('a[href]');
    if (!l || l.target === '_blank' || e.ctrlKey || e.metaKey || e.shiftKey) return;
    var h = l.getAttribute('href');
    if (!h || /^(tel:|mailto:|https?:|#)/.test(h)) return;
    e.preventDefault();
    o.style.opacity = '1';
    o.style.pointerEvents = 'all';
    setTimeout(function () { window.location.href = h; }, 400);
  });

  // 뒤로가기(bfcache)로 돌아왔을 때 오버레이가 덮인 채 남는 문제 방지
  window.addEventListener('pageshow', function (e) {
    if (e.persisted) { o.style.opacity = '0'; o.style.pointerEvents = 'none'; }
  });
})();
