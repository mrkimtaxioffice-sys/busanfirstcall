(function () {
  function renderFooter() {
    // 중복 생성 방지용 방어 코드
    if (document.getElementById('bmt-footer')) return;

    const css = `
      #bmt-footer {
        background: linear-gradient(180deg, #020344 0%, #03045E 100%);
        color: rgba(255, 255, 255, 0.60);
        font-family: 'Noto Sans KR', sans-serif;
        padding: 64px 0 0;
        position: relative;
        overflow: hidden;
      }
      #bmt-footer::before {
        content: ''; position: absolute; inset: 0; pointer-events: none;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 220'%3E%3Cpath fill='none' stroke='%230096C7' stroke-opacity='0.07' stroke-width='1.2' d='M-100,180 C300,140 600,80 900,100 C1150,118 1300,160 1560,130'/%3E%3Cpath fill='none' stroke='%230096C7' stroke-opacity='0.05' stroke-width='0.8' d='M-100,120 C200,90 500,60 800,80 C1050,97 1280,130 1560,100'/%3E%3C/svg%3E");
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
        color: #90E0EF;
        font-style: normal;
        font-family: 'Cormorant Garamond', Georgia, serif;
      }

      .bmt-f-tagline {
        font-size: 13px; line-height: 1.8; color: rgba(255, 255, 255, 0.45);
        margin-bottom: 24px;
      }
      .bmt-f-phone {
        display: inline-flex; align-items: center; gap: 8px;
        padding: 11px 26px; background: #0096C7; color: #fff;
        border-radius: 30px; font-size: 15px; font-weight: 700;
        text-decoration: none; letter-spacing: .5px;
        box-shadow: 0 4px 18px rgba(0, 150, 199, 0.4);
        transition: background .25s, transform .25s;
      }
      .bmt-f-phone:hover { background: #0077A8; transform: scale(1.04); }
      .bmt-f-col h4 {
        font-size: 11px; font-weight: 700; letter-spacing: 3px;
        color: rgba(255, 255, 255, 0.35); text-transform: uppercase;
        margin: 0 0 18px;
      }
      .bmt-f-col ul { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 10px; }
      .bmt-f-col ul a {
        font-size: 14px; color: rgba(255, 255, 255, 0.60); text-decoration: none;
        transition: color .2s;
      }
      .bmt-f-col ul a:hover { color: #90E0EF; }
      .bmt-footer-bottom {
        border-top: 1px solid rgba(255, 255, 255, 0.07);
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
        font-size: 12px; line-height: 2; color: rgba(255, 255, 255, 0.30);
        display: flex; flex-direction: column; gap: 2px;
      }
      .bmt-biz-info .bmt-biz-row { display: flex; flex-wrap: wrap; gap: 6px 20px; }
      .bmt-biz-info strong { color: rgba(255, 255, 255, 0.50); font-weight: 600; }
      .bmt-copyright {
        font-size: 12px; color: rgba(255, 255, 255, 0.22);
        align-self: flex-end; white-space: nowrap;
      }
      @media(max-width: 900px) {
        .bmt-footer-inner { grid-template-columns: 1fr; gap: 28px; padding: 0 20px 36px; }
        .bmt-footer-bottom { padding: 18px 20px; }
        .bmt-biz-info .bmt-biz-row { flex-direction: column; gap: 2px; }
        .bmt-f-phone { font-size: 14px; padding: 10px 22px; }
        .bmt-copyright { align-self: auto; white-space: normal; margin-top: 8px; }
      }
    `;

    const html = `
      <div class="bmt-footer-inner">
        <div class="bmt-f-brand">
          <a href="index.html" class="bmt-f-logo">Busan <em>Members</em> Taxi</a>
          <p class="bmt-f-tagline">
            설레는 여행의 시작, 쾌적하고 즐거운 이동<br>
            부산 멤버스 택시가 완벽한 하루를 만들어 드립니다.
          </p>
          <a href="tel:010-4242-4767" class="bmt-f-phone">
            <i class="fas fa-phone-alt"></i> 010-4242-4767
          </a>
        </div>
        <div class="bmt-f-col">
          <h4>서비스</h4>
          <ul>
            <li><a href="tour-reservation.html"><i class="fas fa-map-marked-alt" style="margin-right:6px;font-size:12px;color:#0096C7"></i>부산 관광 투어</a></li>
            <li><a href="long-distance-reservation.html"><i class="fas fa-road" style="margin-right:6px;font-size:12px;color:#0096C7"></i>장거리 콜택시</a></li>
            <li><a href="airport-sending.html"><i class="fas fa-plane-departure" style="margin-right:6px;font-size:12px;color:#0096C7"></i>공항·기차역 샌딩</a></li>
            <li><a href="fleet.html"><i class="fas fa-car" style="margin-right:6px;font-size:12px;color:#0096C7"></i>차량 소개</a></li>
            <li><a href="reviews.html"><i class="fas fa-star" style="margin-right:6px;font-size:12px;color:#0096C7"></i>이용 후기</a></li>
          </ul>
        </div>
        <div class="bmt-f-col">
          <h4>안내</h4>
          <ul>
            <li><a href="privacy.html">개인정보처리방침</a></li>
            <li><a href="tel:010-4242-4767">전화 문의</a></li>
            <li><a href="mailto:mrkim_calltaxi@naver.com">이메일 문의</a></li>
          </ul>
        </div>
      </div>
      <div class="bmt-footer-bottom">
        <div class="bmt-footer-bottom-inner">
          <div class="bmt-biz-info">
            <div class="bmt-biz-row">
              <span><strong>상호</strong> 개인택시 부산37바4767</span>
              <span><strong>대표</strong> 남현진</span>
              <span><strong>사업자등록번호</strong> 135-37-01621</span>
            </div>
            <div class="bmt-biz-row">
              <span><strong>주소</strong> 부산광역시 사하구 다대낙조2길 100, 104동 1606호 (다대동)</span>
            </div>
            <div class="bmt-biz-row">
              <span><strong>전화</strong> 010-4242-4767</span>
              <span><strong>이메일</strong> mrkim_calltaxi@naver.com</span>
            </div>
          </div>
          <p class="bmt-copyright">© ${new Date().getFullYear()} 부산 멤버스 택시. All rights reserved.</p>
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
