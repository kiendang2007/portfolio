/* Stoa Poikile — The Painted Porch
   Porch walk, panel lighting, nav, intro, and the scroll that unrolls. */
(() => {
  'use strict';

  // ---------- Content ----------
  const PANELS = [
    {
      n: 'I', kind: 'scroll', title: 'Trika English',
      line: 'A digital platform for mastering English: cost-effective, self-reliant and straightforward.',
      quote: '“Men learn while they teach.”', src: 'Seneca · Moral Letters 7 · tr. Gummere',
      facts: [
        ['What it is', 'Digital platform designed to help learners master English through a cost-effective, self-reliant and straightforward approach.'],
        ['My part', 'Researched learning methods and designed and coded the entire website.'],
        ['Key takeaway', 'Converted teaching experience into a replicable, consumable format for public use.']
      ],
      file: 'trikaenglish.vercel.app', hint: 'Screens',
      shots: ['assets/img/trika-1.png', 'assets/img/trika-2.png'],
      ext: { href: 'https://trikaenglish.vercel.app/', label: 'Visit site' }
    },
    {
      n: 'II', kind: 'ship', title: 'ASEAN Trade',
      line: 'How exchange rates and interest rates moved ASEAN trade balances, 2010–2024.',
      facts: [
        ['What it is', 'The Impact of Exchange Rates and Interest Rates on ASEAN Trade Balances, 2010–2024.'],
        ['Original title', 'TÁC ĐỘNG CỦA TỶ GIÁ VÀ LÃI SUẤT ĐẾN CÁN CÂN THƯƠNG MẠI CỦA ASEAN GIAI ĐOẠN 2010-2024', 'orig'],
        ['My part', 'Team of five. I did the initial research on past papers.'],
        ['Key finding', 'Exchange rates have a directly positive correlation with trade equilibrium, while inflation held the opposite correlation with lower confidence.']
      ],
      file: 'asean-trade-balance.pdf', pdf: 'assets/pdf/asean-trade-balance.pdf'
    },
    {
      n: 'III', kind: 'sun', title: 'Abenomics',
      line: 'Monetary and fiscal policy coordination in Japan, 2013, and what it means for Vietnam.',
      facts: [
        ['What it is', 'Monetary and Fiscal Policy Coordination under Abenomics in Japan (2013) and Policy Implications for Vietnam.'],
        ['Original title', 'ẢNH HƯỞNG CỦA SỰ PHỐI HỢP GIỮA CHÍNH SÁCH TIỀN TỆ VÀ CHÍNH SÁCH TÀI KHOÁ TRONG HỆ THỐNG CHÍNH SÁCH ABENOMICS TẠI NHẬT BẢN TRONG NĂM 2013 VÀ HÀM Ý CHÍNH SÁCH CHO VIỆT NAM', 'orig'],
        ['My part', 'Team of five. I did the main research and the presentation.'],
        ['Key finding', 'The policy mix had an immediate effect in Japan, though it diminished in the long term.']
      ],
      file: 'abenomics.pdf', pdf: 'assets/pdf/abenomics.pdf'
    },
    {
      n: 'IV', kind: 'pig', title: 'Piggy',
      line: 'A digital wallet that lets parents teach their children personal finance.',
      quote: '“There are things which are within our power, and there are things which are beyond our power.”', src: 'Epictetus · Enchiridion 1 · tr. Higginson',
      facts: [
        ['What it is', 'A digital wallet that lets parents educate their children on personal finance.'],
        ['Context', 'DTI100: Design Thinking and Innovation, final project. My own idea, built with a team of five.'],
        ['My part', 'Came up with the idea and designed the demo.'],
        ['Key idea', 'Solves parents’ anxiety about giving their children cash, and children’s inconvenience of not being able to purchase online.']
      ],
      file: 'piggy-pitch.pdf', pdf: 'assets/pdf/piggy-pitch.pdf'
    }
  ];
  const NAV_EN = ['Hello', 'The Painted Porch', 'Who I am', 'Talk to me'];

  // ---------- Black-figure motifs ----------
  const INC = '<g data-incised fill="none" stroke="#C1622F" stroke-width="1.6" stroke-linecap="round">';
  const SVG = body => `<svg viewBox="0 0 400 240" preserveAspectRatio="xMidYMid meet" aria-hidden="true">${body}</svg>`;
  const MOTIFS = {
    scroll: SVG(`<g fill="#1E1A17"><rect x="30" y="214" width="340" height="4"/><rect x="60" y="58" width="198" height="116"/><rect x="46" y="46" width="28" height="140" rx="14"/><rect x="244" y="46" width="28" height="140" rx="14"/><rect x="54" y="32" width="12" height="16" rx="3"/><rect x="54" y="184" width="12" height="16" rx="3"/><rect x="252" y="32" width="12" height="16" rx="3"/><rect x="252" y="184" width="12" height="16" rx="3"/><g transform="rotate(-65 330 130)"><rect x="255" y="127" width="150" height="6"/><polygon points="255,127 236,130 255,133"/><rect x="398" y="123" width="14" height="14" rx="2"/></g></g>${INC}<line x1="86" y1="80" x2="150" y2="80"/><line x1="86" y1="94" x2="144" y2="94"/><line x1="86" y1="108" x2="150" y2="108"/><line x1="86" y1="122" x2="136" y2="122"/><line x1="86" y1="136" x2="148" y2="136"/><line x1="86" y1="150" x2="122" y2="150"/><line x1="168" y1="80" x2="232" y2="80"/><line x1="168" y1="94" x2="226" y2="94"/><line x1="168" y1="108" x2="232" y2="108"/><line x1="168" y1="122" x2="214" y2="122"/><line x1="168" y1="136" x2="230" y2="136"/><line x1="56" y1="56" x2="56" y2="176"/><line x1="254" y1="56" x2="254" y2="176"/></g>`),
    ship: SVG(`<g fill="#1E1A17"><path d="M44 162 L246 162 Q238 188 206 194 L86 194 Q56 188 44 162 Z"/><path d="M44 162 Q28 140 40 116 Q46 142 60 162 Z"/><rect x="142" y="56" width="5" height="106"/><rect x="92" y="60" width="106" height="5"/><rect x="98" y="65" width="94" height="70"/><rect x="326" y="78" width="4" height="130"/><rect x="306" y="206" width="44" height="6"/><rect x="284" y="72" width="88" height="4"/><circle cx="328" cy="72" r="6"/><path d="M272 132 h36 a18 9 0 0 1 -36 0 z"/><path d="M346 132 h36 a18 9 0 0 1 -36 0 z"/></g><g fill="none" stroke="#1E1A17" stroke-width="1.6"><line x1="288" y1="76" x2="274" y2="132"/><line x1="288" y1="76" x2="306" y2="132"/><line x1="368" y1="76" x2="348" y2="132"/><line x1="368" y1="76" x2="380" y2="132"/></g><path d="M30 214 q11 -9 22 0 t22 0 t22 0 t22 0 t22 0 t22 0 t22 0 t22 0 t22 0 t22 0 t22 0" fill="none" stroke="#1E1A17" stroke-width="3.5"/>${INC}<line x1="112" y1="70" x2="112" y2="130"/><line x1="127" y1="70" x2="127" y2="130"/><line x1="162" y1="70" x2="162" y2="130"/><line x1="177" y1="70" x2="177" y2="130"/><line x1="102" y1="100" x2="188" y2="100"/><line x1="62" y1="176" x2="226" y2="176"/><circle cx="222" cy="168" r="4"/><line x1="90" y1="184" x2="96" y2="190"/><line x1="110" y1="184" x2="116" y2="190"/><line x1="130" y1="184" x2="136" y2="190"/><line x1="150" y1="184" x2="156" y2="190"/><line x1="170" y1="184" x2="176" y2="190"/><line x1="190" y1="184" x2="196" y2="190"/><line x1="278" y1="136" x2="302" y2="136"/><line x1="352" y1="136" x2="376" y2="136"/></g>`),
    sun: SVG(`<path d="M138 206 A92 92 0 0 1 322 206" fill="none" stroke="#1E1A17" stroke-width="7"/><g fill="#1E1A17"><rect x="226" y="76" width="8" height="24" transform="rotate(-60 230 206)"/><rect x="226" y="76" width="8" height="24" transform="rotate(-30 230 206)"/><rect x="226" y="76" width="8" height="24"/><rect x="226" y="76" width="8" height="24" transform="rotate(30 230 206)"/><rect x="226" y="76" width="8" height="24" transform="rotate(60 230 206)"/><rect x="30" y="206" width="340" height="4"/><rect x="168" y="196" width="124" height="10"/><rect x="176" y="186" width="108" height="10"/><rect x="186" y="136" width="12" height="50"/><rect x="210" y="136" width="12" height="50"/><rect x="238" y="136" width="12" height="50"/><rect x="262" y="136" width="12" height="50"/><rect x="178" y="124" width="104" height="12"/><polygon points="174,124 230,98 286,124"/><g transform="translate(30 200) rotate(-40)"><rect x="0" y="-2" width="84" height="4"/><polygon points="84,-8 100,0 84,8"/><polygon points="0,-2 -12,-9 -7,0 -12,9 0,2"/></g><g transform="translate(46 178) rotate(-40)"><rect x="0" y="-2" width="84" height="4"/><polygon points="84,-8 100,0 84,8"/><polygon points="0,-2 -12,-9 -7,0 -12,9 0,2"/></g><g transform="translate(62 156) rotate(-40)"><rect x="0" y="-2" width="84" height="4"/><polygon points="84,-8 100,0 84,8"/><polygon points="0,-2 -12,-9 -7,0 -12,9 0,2"/></g></g>${INC}<polyline points="192,120 230,103 268,120"/><line x1="182" y1="130" x2="278" y2="130"/><line x1="180" y1="191" x2="280" y2="191"/><line x1="172" y1="201" x2="288" y2="201"/><line x1="192" y1="140" x2="192" y2="182"/><line x1="216" y1="140" x2="216" y2="182"/><line x1="244" y1="140" x2="244" y2="182"/><line x1="268" y1="140" x2="268" y2="182"/></g>`),
    pig: SVG(`<g fill="#1E1A17"><rect x="30" y="214" width="340" height="4"/><ellipse cx="196" cy="146" rx="96" ry="56"/><rect x="174" y="72" width="44" height="30"/><rect x="162" y="62" width="68" height="12" rx="4"/><rect x="130" y="186" width="18" height="28"/><rect x="162" y="190" width="18" height="24"/><rect x="222" y="190" width="18" height="24"/><rect x="254" y="186" width="18" height="28"/><rect x="282" y="128" width="26" height="32" rx="8"/><polygon points="252,104 274,78 284,112"/></g><g fill="none" stroke="#1E1A17" stroke-width="6"><circle cx="160" cy="96" r="13"/><circle cx="232" cy="96" r="13"/><circle cx="96" cy="130" r="11" stroke-width="5"/></g><circle cx="196" cy="30" r="15" fill="#D9A441" stroke="#1E1A17" stroke-width="3"/><circle cx="196" cy="30" r="8" fill="none" stroke="#1E1A17" stroke-width="1.5"/>${INC}<path d="M112 140 Q196 160 280 140"/><path d="M118 160 Q196 180 274 160"/><path d="M140 122 l8 -8 l8 8 l8 -8 l8 8 l8 -8 l8 8 l8 -8 l8 8 l8 -8 l8 8 l8 -8 l8 8 l8 -8 l8 8"/><line x1="174" y1="80" x2="218" y2="80"/><circle cx="266" cy="122" r="3.5"/><circle cx="292" cy="146" r="2"/><circle cx="300" cy="146" r="2"/></g>`)
  };

  // ---------- Helpers ----------
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const clamp = (v, a, b) => Math.min(Math.max(v, a), b);
  const EASE = 'cubic-bezier(.16,.84,.24,1)';
  const reducedMQ = window.matchMedia('(prefers-reduced-motion: reduce)');
  const isReduced = () => reducedMQ.matches;

  // Porch geometry (from the 1440 design): bays 760 apart, first bay 300px right of centre.
  const S = 760, PW = 560, LEAD = 300, XMAX = LEAD + 3 * S, K_FRONT = 1.3, K_BACK = 0.55;

  const root = document.documentElement;
  const porch = $('#stoa');
  const track = $('.porch__track');
  const front = $('.porch__front');
  const back = $('.porch__back');
  const porchHead = $('.porch__head');
  const bar = $('.progress__bar');
  const sections = $$('section[data-sec]');
  const navBtns = $$('.nav__btn');
  const navActive = $('.nav__active');
  const countNum = $('.count__num');
  const dashes = $$('.count__dashes i');

  // ---------- Render panels ----------
  track.innerHTML = PANELS.map((p, i) => `
    <article class="panel" data-i="${i}">
      <div class="panel__art">
        <div class="meander meander--terra"></div>
        <div class="meander meander--terra"></div>
        <div class="motif">${MOTIFS[p.kind]}</div>
        <div class="panel__sheen"></div>
      </div>
      <div class="panel__plaque">
        <div class="panel__meta">
          <span class="panel__n">${p.n}</span><span class="panel__dot"></span>
        </div>
        <h3 class="panel__title">${esc(p.title)}</h3>
        <p class="panel__line">${esc(p.line)}</p>
        ${p.quote ? `<p class="panel__quote">${esc(p.quote)} <span>${esc(p.src)}</span></p>` : ''}
        <button type="button" class="btn panel__open" data-open="${i}" aria-haspopup="dialog">Open panel <span class="arr">↗</span></button>
      </div>
    </article>`).join('');
  const panels = $$('.panel', track);

  // ---------- Mode + layout ----------
  let mode = '';
  let center = 720;
  const computeMode = () => {
    if (window.innerWidth < 1100) return 'mobile';
    if (isReduced() || window.innerHeight < 760) return 'stack';
    return 'motion';
  };

  function layout() {
    mode = computeMode();
    root.dataset.mode = mode;
    if (mode !== 'motion') {
      porch.style.height = '';
      [track, front, back].forEach(el => { el.style.transform = ''; el.style.width = ''; });
      panels.forEach(el => { el.style.left = ''; });
      porchHead.style.opacity = '';
      front.innerHTML = '';
      $$('.bcol', back).forEach(el => el.remove());
      return;
    }
    const W = root.clientWidth;
    center = W / 2;
    const C0 = center + LEAD;
    porch.style.height = (window.innerHeight + XMAX) + 'px';
    panels.forEach((el, i) => { el.style.left = (C0 + i * S - PW / 2) + 'px'; });
    track.style.width = (C0 + 3 * S + PW) + 'px';

    // Foreground colonnade: a column either side of each bay, moving faster than the panels.
    let html = '', maxLeft = 0;
    PANELS.forEach((_, i) => {
      const c = C0 + i * S;
      [-350, 350].forEach(d => {
        const left = K_FRONT * c - (K_FRONT - 1) * center + d - 48;
        maxLeft = Math.max(maxLeft, left);
        html += `<div class="fcol" style="left:${left}px"><div class="fcol__a"></div><div class="fcol__b"></div><div class="fcol__s"></div><div class="fcol__t"></div><div class="fcol__p"></div></div>`;
      });
    });
    front.innerHTML = html;
    front.style.width = (maxLeft + 200) + 'px';

    // Back colonnade: slower, fills the whole travel.
    const backW = K_BACK * XMAX + W + 200;
    back.style.width = backW + 'px';
    $$('.bcol', back).forEach(el => el.remove());
    const frag = document.createDocumentFragment();
    for (let x = 40; x < backW; x += 200) {
      const d = document.createElement('div');
      d.className = 'bcol'; d.style.left = x + 'px';
      frag.appendChild(d);
    }
    back.appendChild(frag);
  }

  // ---------- Scroll-driven state ----------
  let active = -1, section = -1, raf = 0;
  const docTop = el => el.getBoundingClientRect().top + window.scrollY;

  function update() {
    raf = 0;
    const y = window.scrollY, vh = window.innerHeight;
    const max = root.scrollHeight - vh;
    bar.style.width = (max > 0 ? clamp(y / max, 0, 1) * 100 : 0).toFixed(2) + '%';

    let sec = 0;
    sections.forEach((el, i) => { if (y + vh * 0.45 >= docTop(el)) sec = i; });

    let act = 0;
    if (mode === 'motion') {
      const x = clamp(y - docTop(porch), 0, XMAX);
      track.style.transform = `translate3d(${-x}px,0,0)`;
      front.style.transform = `translate3d(${-x * K_FRONT}px,0,0)`;
      back.style.transform = `translate3d(${-x * K_BACK}px,0,0)`;
      porchHead.style.opacity = Math.max(0, 1 - x / 260);
      act = clamp(Math.round((x - LEAD) / S), 0, 3);
    } else {
      const mid = vh / 2; let best = Infinity;
      panels.forEach((el, i) => { const r = el.getBoundingClientRect(); const d = Math.abs(r.top + r.height / 2 - mid); if (d < best) { best = d; act = i; } });
    }

    if (act !== active) {
      active = act;
      panels.forEach((el, i) => el.classList.toggle('is-lit', i === act));
      dashes.forEach((el, i) => el.classList.toggle('is-lit', i === act));
      countNum.textContent = PANELS[act].n;
    }
    if (sec !== section) {
      section = sec;
      navBtns.forEach((el, i) => {
        el.classList.toggle('is-active', i === sec);
        if (i === sec) el.setAttribute('aria-current', 'true'); else el.removeAttribute('aria-current');
      });
      navActive.textContent = NAV_EN[sec];
    }
  }
  const requestUpdate = () => { if (!raf) raf = requestAnimationFrame(update); };

  // ---------- Navigation ----------
  function goTo(i) {
    const el = sections[i];
    window.scrollTo({ top: i === 0 ? 0 : docTop(el), behavior: isReduced() ? 'auto' : 'smooth' });
  }
  document.addEventListener('click', e => {
    const a = e.target.closest('.nav__btn, [data-sec-link]');
    if (!a) return;
    e.preventDefault();
    const i = a.hasAttribute('data-sec') ? +a.dataset.sec : +a.dataset.secLink;
    goTo(i);
    history.replaceState(null, '', a.getAttribute('href'));
  });

  // ---------- Hover shimmer ----------
  function shimmer(el, on) {
    (el.__anims || []).forEach(a => a.cancel());
    el.__anims = [];
    if (!on || isReduced() || mode === 'mobile') return;
    $$('[data-incised] > *', el).forEach((ln, i) => el.__anims.push(ln.animate(
      [{ stroke: '#C1622F' }, { stroke: '#F6D9A0' }, { stroke: '#C1622F' }],
      { duration: 1400, delay: i * 45, iterations: Infinity, easing: 'ease-in-out' })));
    const sh = $('.panel__sheen', el);
    if (sh) el.__anims.push(sh.animate([{ transform: 'translateX(-110%)' }, { transform: 'translateX(110%)' }], { duration: 1600, iterations: Infinity, easing: 'ease-in-out' }));
  }
  panels.forEach(el => {
    el.addEventListener('mouseenter', () => shimmer(el, true));
    el.addEventListener('mouseleave', () => shimmer(el, false));
  });

  // ---------- Intro: the porch assembles ----------
  function playIntro() {
    if (isReduced() || window.scrollY > 80) return;
    const mobile = mode === 'mobile';
    $$('.hero__col .col').forEach((c, i) => c.animate([{ transform: 'translateY(105%)' }, { transform: 'translateY(0)' }], { duration: 1300, delay: 150 + i * 140, easing: EASE, fill: 'backwards' }));
    $('.hero__ent').animate([{ opacity: 0, transform: 'translateY(-14px)' }, { opacity: 1, transform: 'none' }], { duration: 600, delay: 1150, easing: EASE, fill: 'backwards' });
    $('.hero__ped').animate([{ opacity: 0, transform: 'translateY(-90px)' }, { opacity: 1, transform: 'translateY(6px)', offset: .7 }, { opacity: 1, transform: 'none' }], { duration: 900, delay: 1450, easing: 'cubic-bezier(.3,.7,.3,1)', fill: 'backwards' });
    $('.pinax').animate([{ clipPath: 'inset(100% 0 0 0)' }, { clipPath: 'inset(0 0 0 0)' }], { duration: 900, delay: 1000, easing: EASE, fill: 'backwards' });
    Array.from($('.hero__text').children).forEach((c, i) => c.animate([{ opacity: 0, transform: 'translateY(18px)' }, { opacity: 1, transform: 'none' }], { duration: 700, delay: 950 + i * 120, easing: EASE, fill: 'backwards' }));
    $('.walk__arrow').animate([{ transform: 'translate(0,0)' }, { transform: mobile ? 'translate(0,5px)' : 'translate(6px,0)' }, { transform: 'translate(0,0)' }], { duration: 1800, delay: 2600, iterations: Infinity, easing: 'ease-in-out' });
  }

  // ---------- The open panel ----------
  const wrap = $('.sheet-wrap');
  const sheet = $('.sheet', wrap);
  const body = $('.sheet__body', wrap);
  const inner = $('.sheet__inner', wrap);
  const scrim = $('.scrim', wrap);
  const closeBtn = $('.sheet__close', wrap);
  const extBtn = $('.sheet__ext', wrap);
  const viewerArea = $('.viewer__area', wrap);
  let openIdx = null, origin = { dx: 0, dy: 0 }, lastFocus = null, closing = false;

  function fillSheet(p) {
    $('.sheet__n', wrap).textContent = `Panel ${p.n} of IV`;
    $('.sheet__title', wrap).textContent = p.title;
    $('.sheet__line', wrap).textContent = p.line;
    $('.sheet__thumb .motif', wrap).innerHTML = MOTIFS[p.kind];
    $('.sheet__facts', wrap).innerHTML = p.facts.map(([k, v, cls]) =>
      `<div><p class="fact__k">${esc(k)}</p><p class="fact__v${cls ? ' fact__v--' + cls : ''}"${cls === 'orig' ? ' lang="vi"' : ''}>${esc(v)}</p></div>`).join('') +
      (p.quote ? `<blockquote class="quote"><p>${esc(p.quote)}</p><cite>${esc(p.src)}</cite></blockquote>` : '');
    $('.viewer__file', wrap).textContent = p.file;
    $('.viewer__hint', wrap).textContent = p.pdf ? 'PDF' : (p.hint || '');
    viewerArea.innerHTML = p.pdf
      ? `<iframe src="${p.pdf}#navpanes=0&view=FitH" title="${esc(p.title)} — PDF" loading="lazy"></iframe>`
      : `<div class="viewer__shots">${p.shots.map((s, i) => `<img src="${s}" alt="${esc(p.title)} screen ${i + 1}">`).join('')}</div>`;
    const ext = p.pdf ? { href: p.pdf, label: 'Open PDF' } : p.ext;
    extBtn.href = ext.href;
    extBtn.innerHTML = `${esc(ext.label)} <span class="arr">↗</span>`;
  }

  function openPanel(i, fromEl) {
    if (openIdx != null) return;
    openIdx = i;
    lastFocus = document.activeElement;
    const art = fromEl && fromEl.closest('.panel');
    origin = { dx: 0, dy: 0 };
    if (art) {
      const r = art.getBoundingClientRect();
      origin = { dx: r.left + r.width / 2 - window.innerWidth / 2, dy: r.top + r.height / 2 - window.innerHeight / 2 };
    }
    fillSheet(PANELS[i]);
    wrap.hidden = false;
    root.classList.add('is-locked');
    body.scrollTop = 0;
    closeBtn.focus({ preventScroll: true });

    if (isReduced()) {
      [sheet, scrim].forEach(el => el.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 200 }));
      return;
    }
    const from = `translate(${origin.dx}px,${origin.dy}px) scale(.42)`;
    scrim.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 500, fill: 'backwards' });
    sheet.animate([{ transform: from, opacity: 0 }, { transform: from, opacity: 1, offset: .15 }, { transform: 'none', opacity: 1 }], { duration: 560, easing: 'cubic-bezier(.2,.8,.2,1)' });
    const h = body.offsetHeight;
    body.animate([{ height: '0px' }, { height: h + 'px' }], { duration: 820, delay: 460, easing: 'cubic-bezier(.65,0,.25,1)', fill: 'backwards' });
    inner.animate([{ opacity: 0, transform: 'translateY(-10px)' }, { opacity: 1, transform: 'none' }], { duration: 500, delay: 900, fill: 'backwards' });
  }

  function finishClose() {
    sheet.getAnimations().concat(body.getAnimations(), scrim.getAnimations(), inner.getAnimations()).forEach(a => a.cancel());
    wrap.hidden = true;
    viewerArea.innerHTML = '';
    root.classList.remove('is-locked');
    openIdx = null; closing = false;
    if (lastFocus && lastFocus.focus) lastFocus.focus({ preventScroll: true });
  }

  function closePanel() {
    if (openIdx == null || closing) return;
    if (isReduced()) { finishClose(); return; }
    closing = true;
    body.animate([{ height: body.offsetHeight + 'px' }, { height: '0px' }], { duration: 420, easing: 'cubic-bezier(.65,0,.35,1)', fill: 'forwards' });
    scrim.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 760, fill: 'forwards' });
    const a = sheet.animate([{ transform: 'none', opacity: 1 }, { transform: `translate(${origin.dx}px,${origin.dy}px) scale(.42)`, opacity: 0 }], { duration: 360, delay: 400, easing: 'cubic-bezier(.5,0,.75,0)', fill: 'forwards' });
    a.onfinish = finishClose;
  }

  track.addEventListener('click', e => {
    const b = e.target.closest('[data-open]');
    if (b) openPanel(+b.dataset.open, b);
  });
  closeBtn.addEventListener('click', closePanel);
  scrim.addEventListener('click', closePanel);
  document.addEventListener('keydown', e => {
    if (openIdx == null) return;
    if (e.key === 'Escape') { e.preventDefault(); closePanel(); return; }
    if (e.key === 'Tab') {
      const f = $$('a[href], button, iframe, [tabindex]:not([tabindex="-1"])', sheet).filter(el => el.offsetParent !== null);
      if (!f.length) return;
      const first = f[0], last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  });

  // ---------- Boot ----------
  layout();
  update();
  playIntro();
  window.addEventListener('scroll', requestUpdate, { passive: true });
  let rt = 0;
  window.addEventListener('resize', () => {
    clearTimeout(rt);
    rt = setTimeout(() => {
      const prev = mode;
      layout();
      if (prev !== mode) active = -1;
      update();
    }, 120);
  });
  reducedMQ.addEventListener && reducedMQ.addEventListener('change', () => { layout(); active = -1; update(); });
  // Fonts shift layout slightly; recompute once they land.
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(requestUpdate);
})();
