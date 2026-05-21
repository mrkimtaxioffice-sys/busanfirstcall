(function () {
  /* ── Cormorant Garamond 폰트 보장 (모든 페이지 공통 로드) ── */
  if (!document.querySelector('link[href*="Cormorant+Garamond"]')) {
    const fontLink = document.createElement('link');
    fontLink.rel = 'stylesheet';
    fontLink.href = 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,600;0,700;1,300;1,600&display=swap';
    document.head.insertBefore(fontLink, document.head.firstChild);
  }

  /* ── 현재 페이지 파일명 감지 ── */
  const path = location.pathname.split('/').pop() || 'index.html';

  /* 중앙 메뉴 */
  const centerLinks = [
    { href: 'index.html',                     label: 'Home' },
    { href: 'tour-reservation.html',          label: '부산 관광 투어' },
    { href: 'long-distance-reservation.html', label: '장거리 예약' },
    { href: 'airport-sending.html',           label: '공항·기차역 샌딩' },
  ];

  /* 우측 메뉴 */
  const rightLinks = [
    { href: 'fleet.html',   label: '차량 소개' },
    { href: 'reviews.html', label: '이용 후기' },
  ];

  function makeLinks(links) {
    return links.map(l => {
      const active = (path === l.href || (path === '' && l.href === 'index.html')) ? ' bmt-active' : '';
      return `<a href="${l.href}" class="bmt-nav-link${active}">${l.label}</a>`;
    }).join('');
  }

  const allLinksForMobile = [...centerLinks, ...rightLinks];

  /* ── CSS ── */
  const css = `
    :root { --bmt-h: 68px; }

    #bmt-header {
      font-size: 16px !important;
      line-height: 1 !important;
      position: fixed; top: 0; left: 0; right: 0; z-index: 1000;
      height: var(--bmt-h);
      display: grid;
      grid-template-columns: 1fr auto 1fr;
      align-items: center;
      padding: 0 40px;
      background: rgba(3,4,94,0.72);
      backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px);
      border-bottom: 1px solid rgba(255,255,255,0.10);
      transition: background .35s, box-shadow .35s;
      box-sizing: border-box;
    }
    #bmt-header.scrolled {
      background: rgba(3,4,94,0.96);
      box-shadow: 0 4px 28px rgba(0,0,0,0.25);
    }

    .bmt-logo {
      font-family: 'Cormorant Garamond', Georgia, serif !important;
      font-size: 18px !important;
      line-height: 1 !important;
      font-weight: 600 !important;
      letter-spacing: 2px !important;
      color: #fff !important;
      text-decoration: none !important;
      white-space: nowrap !important;
      text-transform: uppercase !important;
      display: inline-block !important;
    }
    .bmt-logo em {
      color: #90E0EF !important;
      font-style: normal !important;
      font-size: 18px !important;
      font-family: 'Cormorant Garamond', Georgia, serif !important;
    }

    .bmt-nav-center {
      display: flex; align-items: center; gap: 2px;
      justify-content: center;
      margin: 0 !important; padding: 0 !important;
    }

    .bmt-nav-right {
      display: flex; align-items: center; gap: 2px;
      justify-content: flex-end;
      margin: 0 !important; padding: 0 !important;
    }

    .bmt-nav-link {
      font-family: 'Noto Sans KR', sans-serif !important;
      font-size: 13px !important;
      line-height: 1 !important;
      font-weight: 500 !important;
      letter-spacing: .3px !important;
      padding: 7px 13px !important;
      border-radius: 20px !important;
      color: rgba(255,255,255,0.72) !important;
      text-decoration: none !important;
      transition: background .2s, color .2s;
      white-space: nowrap !important;
      display: inline-block !important;
    }
    .bmt-nav-link:hover    { color: #fff !important; background: rgba(255,255,255,0.10) !important; }
    .bmt-nav-link.bmt-active { color: #90E0EF !important; background: rgba(0,150,199,0.18) !important; }

    /* ── 햄버거 ── */
    .bmt-hamburger {
      display: none; flex-direction: column; gap: 5px;
      background: none; border: none; cursor: pointer; padding: 4px;
      justify-self: end;
    }
    .bmt-hamburger span {
      display: block; width: 24px; height: 2px;
      background: rgba(255,255,255,0.85); border-radius: 2px;
      transition: transform .3s, opacity .3s;
    }
    .bmt-hamburger.open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
    .bmt-hamburger.open span:nth-child(2) { opacity: 0; }
    .bmt-hamburger.open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

    /* ── 모바일 드롭다운 ── */
    #bmt-mobile-nav {
      font-size: 16px !important;
      display: none; position: fixed;
      top: var(--bmt-h); left: 0; right: 0;
      background: rgba(3,4,94,0.97); backdrop-filter: blur(20px);
      padding: 20px 24px 28px; z-index: 999;
      border-bottom: 1px solid rgba(255,255,255,0.10);
      flex-direction: column; gap: 4px;
      margin: 0 !important;
    }
    #bmt-mobile-nav.open { display: flex; }
    #bmt-mobile-nav .bmt-nav-link {
      padding: 12px 18px !important;
      font-size: 15px !important;
      border-radius: 12px !important;
    }

    /* ── 서브 페이지: .page-header에 헤더 높이만큼 margin-top 적용 ── */
    /* index.html(is-fullscreen)은 hero가 fixed이므로 제외 */
    body:not(.is-fullscreen) .page-header {
      margin-top: var(--bmt-h);
    }

    @media (max-width: 960px) {
      #bmt-header {
        grid-template-columns: 1fr auto;
        padding: 0 24px;
      }
      .bmt-nav-center { display: none !important; }
      .bmt-nav-right  { display: none !important; }
      .bmt-hamburger  { display: flex !important; }
    }
  `;

  /* ── 스타일 주입 ── */
  const style = document.createElement('style');
  style.textContent = css;
  document.head.appendChild(style);

  /* ── 헤더 DOM ── */
  const header = document.createElement('header');
  header.id = 'bmt-header';
  header.innerHTML = `
    <a href="index.html" class="bmt-logo">Busan <em>Members</em> Taxi</a>
    <nav class="bmt-nav-center">${makeLinks(centerLinks)}</nav>
    <nav class="bmt-nav-right">
      ${makeLinks(rightLinks)}
      <button class="bmt-hamburger" id="bmt-ham" aria-label="메뉴 열기">
        <span></span><span></span><span></span>
      </button>
    </nav>
  `;
  document.body.insertBefore(header, document.body.firstChild);

  /* ── 모바일 메뉴 DOM ── */
  const mobileNav = document.createElement('nav');
  mobileNav.id = 'bmt-mobile-nav';
  mobileNav.innerHTML = makeLinks(allLinksForMobile);
  header.insertAdjacentElement('afterend', mobileNav);

  /* ── 햄버거 토글 ── */
  document.getElementById('bmt-ham').addEventListener('click', function () {
    this.classList.toggle('open');
    mobileNav.classList.toggle('open');
  });

  /* ── 모바일 메뉴 열렸을 때 바깥 클릭으로 닫기 ── */
  document.addEventListener('click', function (e) {
    if (
      mobileNav.classList.contains('open') &&
      !mobileNav.contains(e.target) &&
      !document.getElementById('bmt-ham').contains(e.target)
    ) {
      mobileNav.classList.remove('open');
      document.getElementById('bmt-ham').classList.remove('open');
    }
  });

  /* ── 스크롤 시 헤더 강조 ── */
  window.addEventListener('scroll', function () {
    header.classList.toggle('scrolled', window.scrollY > 40);
  }, { passive: true });

})();