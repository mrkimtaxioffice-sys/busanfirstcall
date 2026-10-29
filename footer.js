(function () {
  function renderFooter() {
    // 중복 생성 방지용 방어 코드
    if (document.getElementById('bmt-footer')) return;

    const css = `
      #bmt-footer {
        background: linear-gradient(180deg, #070707 0%, #0E0E0E 100%);
        color: rgba(255,255,255, 0.60);
        font-family: 'Noto Sans KR', sans-serif;
        padding: 64px 0 0;
        position: relative;
        overflow: hidden;
      }
      #bmt-footer::before {
        content: ''; position: absolute; inset: 0; pointer-events: none;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 220'%3E%3Cpath fill='none' stroke='%23C9A646' stroke-opacity='0.07' stroke-width='1.2' d='M-100,180 C300,140 600,80 900,100 C1150,118 1300,160 1560,130'/%3E%3Cpath fill='none' stroke='%23C9A646' stroke-opacity='0.05' stroke-width='0.8' d='M-100,120 C200,90 500,60 800,80 C1050,97 1280,130 1560,100'/%3E%3C/svg%3E");
        background-size: 100% 100%; background-repeat: no-repeat;
      }
      .bmt-footer-inner {
        max-width: 1100px; margin: 0 auto;
        padding: 0 40px 48px;
        display: grid;
        grid-template-columns: 1.6fr 1fr 1fr;
        gap: 48px;
        position: relative; z-index: 1;
      }
      
      /* 헤더와 동일한 스타일의 로고 */
      .bmt-f-logo {
        display: inline-block;
        font-family: 'Cormorant Garamond', Georgia, serif;
        font-size: 22px;
        font-weight: 600;
        letter-spacing: 2px;
        color: #fff;
        margin-bottom: 16px;
        text-decoration: none;
        text-transform: uppercase;
      }
      .bmt-f-logo em {
        color: #E8D49A;
        font-style: normal;
        font-family: 'Cormorant Garamond', Georgia, serif;
      }

      .bmt-f-name { font-size: 14px; font-weight: 700; color: rgba(255,255,255,.85); margin: -8px 0 12px; }
      .bmt-f-tagline {
        font-size: 13px; line-height: 1.8; color: rgba(255,255,255, 0.45);
        margin-bottom: 24px;
      }
      .bmt-f-phone {
        display: inline-flex; align-items: center; gap: 8px;
        padding: 11px 26px; background: #C9A646; color:#111111;
        border-radius: 30px; font-size: 15px; font-weight: 700;
        text-decoration: none; letter-spacing: .5px;
        box-shadow: 0 4px 18px rgba(201,166,70, 0.4);
        transition: background .25s, transform .25s;
      }
      .bmt-f-phone:hover { background: #B08D35; transform: scale(1.04); }
      .bmt-f-actions { display: flex; flex-wrap: wrap; align-items: center; gap: 10px; }
      .bmt-f-blog {
        display: inline-flex; align-items: center; gap: 8px;
        padding: 10px 22px; border-radius: 30px;
        border: 1px solid rgba(201,166,70,0.55); color: #E8D49A;
        font-size: 14px; font-weight: 600; text-decoration: none;
        background: rgba(201,166,70,0.06);
        transition: background .25s, color .25s, border-color .25s, transform .25s;
      }
      .bmt-f-blog i { font-size: 14px; }
      .bmt-f-blog .bmt-ext { font-size: 10px; opacity: .6; }
      .bmt-f-blog:hover { background: #C9A646; color: #111111; border-color: #C9A646; transform: scale(1.04); }
      .bmt-f-col h4 {
        font-size: 11px; font-weight: 700; letter-spacing: 3px;
        color: rgba(255,255,255, 0.35); text-transform: uppercase;
        margin: 0 0 18px;
      }
      .bmt-f-col ul { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 10px; }
      .bmt-f-col ul a {
        font-size: 14px; color: rgba(255,255,255, 0.60); text-decoration: none;
        transition: color .2s;
      }
      .bmt-f-col ul a:hover { color: #E8D49A; }
      .bmt-footer-bottom {
        border-top: 1px solid rgba(255,255,255, 0.07);
        padding: 24px 40px;
        max-width: 100%;
        position: relative; z-index: 1;
      }
      .bmt-footer-bottom-inner {
        max-width: 1100px; margin: 0 auto;
        display: flex; flex-wrap: wrap;
        align-items: flex-start; justify-content: space-between;
        gap: 16px;
      }
      .bmt-biz-info {
        font-size: 12px; line-height: 2; color: rgba(255,255,255, 0.30);
        display: flex; flex-direction: column; gap: 2px;
      }
      .bmt-biz-info .bmt-biz-row { display: flex; flex-wrap: wrap; gap: 6px 20px; }
      .bmt-biz-info strong { color: rgba(255,255,255, 0.50); font-weight: 600; }
      .bmt-copyright {
        font-size: 12px; color: rgba(255,255,255, 0.22);
        align-self: flex-end; white-space: nowrap;
      }
      @media(max-width: 900px) {
        .bmt-footer-inner { grid-template-columns: 1fr; gap: 28px; padding: 0 20px 36px; }
        .bmt-footer-bottom { padding: 18px 20px; }
        .bmt-biz-info .bmt-biz-row { flex-direction: column; gap: 2px; }
        .bmt-f-phone { font-size: 14px; padding: 10px 22px; }
        .bmt-f-blog { font-size: 13px; padding: 9px 20px; }
        .bmt-copyright { align-self: auto; white-space: normal; margin-top: 8px; }
      }
    `;

    const html = `
      <div class="bmt-footer-inner">
        <div class="bmt-f-brand">
          <a href="index.html" class="bmt-f-logo">Busan <em>Firstcall</em> Taxi</a>
          <p class="bmt-f-name">부산 장거리 전문 퍼스트 콜택시</p>
          <p class="bmt-f-tagline">
            부산에서 전국 어디든, 편안한 장거리 이동<br>
            요금은 전화 상담 시 상세히 안내해 드립니다.
          </p>
          <div class="bmt-f-actions">
            <a href="tel:010-7758-4267" class="bmt-f-phone">
              <i class="fas fa-phone-alt"></i> 010-7758-4267
            </a>
            <a href="https://blog.naver.com/hjwhite44" class="bmt-f-blog" target="_blank" rel="noopener" aria-label="네이버 블로그 (새 창)">
              <i class="fas fa-blog"></i> 네이버 블로그 <i class="fas fa-external-link-alt bmt-ext"></i>
            </a>
          </div>
        </div>
        <div class="bmt-f-col">
          <h4>서비스</h4>
          <ul>
            <li><a href="tour-reservation.html"><i class="fas fa-map-marked-alt" style="margin-right:6px;font-size:12px;color:#D9B95E"></i>부산 관광 투어</a></li>
            <li><a href="long-distance-reservation.html"><i class="fas fa-road" style="margin-right:6px;font-size:12px;color:#D9B95E"></i>장거리 콜택시</a></li>
            <li><a href="airport-sending.html"><i class="fas fa-plane-departure" style="margin-right:6px;font-size:12px;color:#D9B95E"></i>공항·기차역 샌딩</a></li>
            <li><a href="fleet.html"><i class="fas fa-car" style="margin-right:6px;font-size:12px;color:#D9B95E"></i>차량 소개</a></li>
            <li><a href="reviews.html"><i class="fas fa-star" style="margin-right:6px;font-size:12px;color:#D9B95E"></i>이용 후기</a></li>
          </ul>
        </div>
        <div class="bmt-f-col">
          <h4>안내</h4>
          <ul>
            <li><a href="privacy.html"><i class="fas fa-user-shield" style="margin-right:6px;font-size:12px;color:#D9B95E"></i>개인정보처리방침</a></li>
            <li><a href="tel:010-7758-4267"><i class="fas fa-phone-alt" style="margin-right:6px;font-size:12px;color:#D9B95E"></i>전화 문의</a></li>
            <li><a href="mailto:hjwhite44@naver.com"><i class="fas fa-envelope" style="margin-right:6px;font-size:12px;color:#D9B95E"></i>이메일 문의</a></li>
            <li><a href="https://blog.naver.com/hjwhite44" target="_blank" rel="noopener"><i class="fas fa-blog" style="margin-right:6px;font-size:12px;color:#D9B95E"></i>네이버 블로그</a></li>
          </ul>
        </div>
      </div>
      <div class="bmt-footer-bottom">
        <div class="bmt-footer-bottom-inner">
          <div class="bmt-biz-info">
            <div class="bmt-biz-row">
              <span><strong>상호</strong> 부산 장거리 전문 퍼스트 콜택시</span>
              <span><strong>차량번호</strong> 개인택시 부산37바4767</span>
              <span><strong>대표</strong> 남현진</span>
              <span><strong>사업자등록번호</strong> 135-37-01621</span>
            </div>
            <div class="bmt-biz-row">
              <span><strong>소재지</strong> 부산광역시 금정구 중앙대로 2120</span>
            </div>
            <div class="bmt-biz-row">
              <span><strong>전화</strong> 010-7758-4267</span>
              <span><strong>이메일</strong> hjwhite44@naver.com</span>
              <span><strong>블로그</strong> <a href="https://blog.naver.com/hjwhite44" target="_blank" rel="noopener" style="color:inherit">blog.naver.com/hjwhite44</a></span>
            </div>
          </div>
          <p class="bmt-copyright">© ${new Date().getFullYear()} 부산 장거리 전문 퍼스트 콜택시. All rights reserved.</p>
        </div>
      </div>
    `;

    // CSS 삽입
    const style = document.createElement('style');
    style.textContent = css;
    document.head.appendChild(style);

    // Footer 요소 생성 및 삽입
    const footer = document.createElement('footer');
    footer.id = 'bmt-footer';
    footer.innerHTML = html;
    document.body.appendChild(footer);
  }

  // HTML 요소가 모두 준비되었을 때만 실행되도록 안전하게 호출
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderFooter);
  } else {
    renderFooter();
  }
})();