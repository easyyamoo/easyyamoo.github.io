// ============================================================================
// YANG YUHENG PORTFOLIO · SPATIAL GALLERY CONTROLLER (app.js)
// ============================================================================

(function () {
  "use strict";

  const galleriesMap = typeof workGalleries !== "undefined" ? workGalleries : {};

  function esc(str) {
    return String(str ?? "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  // ==================== 00 / 序幕轮播与个人信息表 ====================
  function initPrologue() {
    const slides = document.querySelectorAll(".backdrop-slide");
    if (slides.length > 1) {
      let idx = 0;
      setInterval(() => {
        slides[idx].classList.remove("active");
        idx = (idx + 1) % slides.length;
        slides[idx].classList.add("active");
      }, 5200);
    }

    const ledgerEl = document.getElementById("personal-ledger");
    if (ledgerEl && Array.isArray(PORTFOLIO_DATA.personalInfo)) {
      ledgerEl.innerHTML = PORTFOLIO_DATA.personalInfo
        .map(
          (row) => `
          <div class="ledger-cell">
            <div class="ledger-head">
              <span class="ledger-zh">${esc(row.labelZh)}</span>
              <span class="ledger-en">${esc(row.labelEn)}</span>
            </div>
            <p class="ledger-desc">${esc(row.contentZh)}</p>
            <span class="ledger-desc-en">${esc(row.contentEn)}</span>
          </div>
        `
        )
        .join("");
    }
  }

  // ==================== 01 / 剧目矩阵、重点专章与14部参创剧照 ====================
  function initChapterOne() {
    // 1. 参与剧目矩阵
    const matrixEl = document.getElementById("project-matrix");
    if (matrixEl && Array.isArray(PORTFOLIO_DATA.projectMatrix)) {
      matrixEl.innerHTML = PORTFOLIO_DATA.projectMatrix
        .map(
          (m) => `
          <div class="matrix-row">
            <span class="m-zh">${esc(m.genreZh)}</span>
            <span class="m-works">${esc(m.works)}</span>
            <span class="m-en">${esc(m.genreEn)}</span>
          </div>
        `
        )
        .join("");
    }

    // 2. 《驻藏·张大人》专章
    const lzRoot = document.getElementById("lord-zhang-root");
    const lz = PORTFOLIO_DATA.lordZhangFeature;
    if (lzRoot && lz) {
      const lzAllPhotos = [
        { src: lz.heroImage, caption: `${lz.titleZh} · 演出剧照` },
        { src: "assets/stone-lion-process.webp", caption: `${lz.titleZh} · 原石狮子 → 数字建模 → 纹理上色与完成` },
        ...(galleriesMap[lz.galleryIds] || [])
      ];
      const dedupLz = dedupBySrc(lzAllPhotos);

      lzRoot.innerHTML = `
        <div class="mono-hero">
          <div class="mono-visual" data-lz-hero>
            <img src="${esc(lz.heroImage)}" alt="${esc(lz.titleZh)}" />
          </div>
          <div class="mono-info">
            <div>
              <div class="mono-kicker">FEATURED PRODUCTION · ${esc(lz.genreEn)}</div>
              <h3 class="mono-title-zh">${esc(lz.titleZh)}</h3>
              <p class="mono-title-en">${esc(lz.titleEn)}</p>
              <div class="mono-specs">
                <span><strong>VENUE</strong>${esc(lz.yearVenue)}</span>
                <span><strong>CREDIT</strong>${esc(lz.credit)}</span>
              </div>
            </div>
            <div class="mono-actions">
              <button type="button" class="sharp-btn sharp-btn-ice" data-open-lz-all>
                VIEW ALL ${dedupLz.length} PROCESS &amp; SCENE PLATES →
              </button>
            </div>
          </div>
        </div>
        <div class="mono-steps-grid">
          ${lz.steps
            .map(
              (st, i) => `
            <div class="mono-step">
              <div class="mono-step-img" data-lz-step="${i}">
                <img src="${esc(st.image)}" alt="${esc(st.titleZh)}" loading="lazy" />
              </div>
              <div class="mono-step-body">
                <span class="mono-step-num">STEP ${esc(st.num)}</span>
                <h4>${esc(st.titleZh)}</h4>
                <div class="mono-step-en">${esc(st.titleEn)}</div>
                <p>${esc(st.descZh)}</p>
              </div>
            </div>
          `
            )
            .join("")}
        </div>
      `;

      lzRoot.querySelector("[data-lz-hero]").addEventListener("click", () => openCinema(dedupLz, 0));
      lzRoot.querySelector("[data-open-lz-all]").addEventListener("click", () => openCinema(dedupLz, 0));
      lzRoot.querySelectorAll("[data-lz-step]").forEach((el) => {
        el.addEventListener("click", () => {
          const stepSlides = lz.steps.map((s) => ({
            src: s.image,
            caption: `${lz.titleZh} · ${s.titleZh} (${s.titleEn})`
          }));
          openCinema(stepSlides, Number(el.dataset.lzStep));
        });
      });
    }

    // 3. 《水墨与丝竹的对话3：鳌鱼》专章
    const ayRoot = document.getElementById("aoyu-root");
    const ay = PORTFOLIO_DATA.aoyuFeature;
    if (ayRoot && ay) {
      const aySlides = dedupBySrc([
        { src: ay.heroImage, caption: `${ay.titleZh} · 方案效果图 Concept Render` },
        { src: "assets/aoyu-space.webp", caption: `${ay.titleZh} · 18m×26m 中轴水路与两岸观演` },
        { src: "assets/aoyu-plan.webp", caption: `${ay.titleZh} · 7m 转台与乐器尺寸深化平面图` },
        ...(galleriesMap[ay.id] || [])
      ]);

      ayRoot.innerHTML = `
        <div class="mono-hero">
          <div class="mono-visual" data-ay-hero>
            <img src="${esc(ay.heroImage)}" alt="${esc(ay.titleZh)}" />
          </div>
          <div class="mono-info">
            <div>
              <div class="mono-kicker">SCENOGRAPHIC PROPOSALS · ${esc(ay.genreEn)}</div>
              <h3 class="mono-title-zh">${esc(ay.titleZh)}</h3>
              <p class="mono-title-en">${esc(ay.titleEn)}</p>
              <div class="mono-specs">
                <span><strong>VENUE</strong>${esc(ay.yearVenue)}</span>
                <span><strong>CREDIT</strong>${esc(ay.credit)}</span>
                <span><strong>PRESENT</strong>${esc(ay.producers)}</span>
              </div>
            </div>
            <div class="mono-actions">
              <button type="button" class="sharp-btn sharp-btn-ice" data-open-ay-all>
                VIEW ${aySlides.length} DESIGN PLATES →
              </button>
              <a class="sharp-btn" href="${esc(ay.pdfHref)}" target="_blank" rel="noopener">
                ITERATIONS CHAPTER PDF (7P) ↗
              </a>
            </div>
          </div>
        </div>
        <div class="mono-steps-grid">
          ${ay.steps
            .map(
              (st, i) => `
            <div class="mono-step">
              <div class="mono-step-img" data-ay-step="${i}">
                <img src="${esc(st.image)}" alt="${esc(st.titleZh)}" loading="lazy" />
              </div>
              <div class="mono-step-body">
                <span class="mono-step-num">ITERATION ${esc(st.num)}</span>
                <h4>${esc(st.titleZh)}</h4>
                <div class="mono-step-en">${esc(st.titleEn)}</div>
                <p>${esc(st.descZh)}</p>
              </div>
            </div>
          `
            )
            .join("")}
        </div>
        <div class="mono-footnote">${esc(ay.note)}</div>
      `;

      ayRoot.querySelector("[data-ay-hero]").addEventListener("click", () => openCinema(aySlides, 0));
      ayRoot.querySelector("[data-open-ay-all]").addEventListener("click", () => openCinema(aySlides, 0));
      ayRoot.querySelectorAll("[data-ay-step]").forEach((el) => {
        el.addEventListener("click", () => {
          const stepSlides = ay.steps.map((s) => ({
            src: s.image,
            caption: `${ay.titleZh} · ${s.titleZh}`
          }));
          openCinema(stepSlides, Number(el.dataset.ayStep));
        });
      });
    }

    // 4. 14 部剧目与广东美术馆展览剧照画廊
    const filterStrip = document.getElementById("stage-genre-filters");
    const lookbook = document.getElementById("stage-lookbook");
    const countLabel = document.getElementById("stage-count-label");
    const genres = [
      { key: "ALL", label: "ALL" },
      { key: "DANCE", label: "DANCE 舞剧" },
      { key: "MUSICAL", label: "MUSICAL 音乐剧" },
      { key: "DRAMA", label: "DRAMA 话剧" },
      { key: "PHYSICAL", label: "PHYSICAL 杂技" },
      { key: "OPERA", label: "OPERA 戏曲" },
      { key: "EXHIBITION", label: "EXHIBITION 展览" }
    ];

    let activeGenre = "ALL";

    function renderStageLookbook() {
      const list =
        activeGenre === "ALL"
          ? PORTFOLIO_DATA.stageWorks
          : PORTFOLIO_DATA.stageWorks.filter((w) => w.genre === activeGenre);

      if (countLabel) countLabel.textContent = `${list.length} PRODUCTIONS`;

      lookbook.innerHTML = list
        .map((w) => {
          const photos = getStagePhotos(w);
          return `
            <article class="stage-plate" data-stage-id="${esc(w.id)}" tabindex="0" role="button" aria-label="检视 ${esc(w.titleZh)} 剧照">
              <div class="stage-plate-img">
                <span class="plate-overlay-tag">${esc(w.genre)} · ${esc(w.genreZh)}</span>
                <img src="${esc(w.cover)}" alt="${esc(w.titleZh)}" loading="lazy" />
                <span class="plate-count-tag">${String(photos.length).padStart(2, "0")} PLATES ↗</span>
              </div>
              <div class="stage-plate-caption">
                <h3>${esc(w.titleZh)}</h3>
                <span>${esc(w.titleEn)}</span>
              </div>
            </article>
          `;
        })
        .join("");

      lookbook.querySelectorAll(".stage-plate").forEach((el) => {
        const trigger = () => {
          const work = PORTFOLIO_DATA.stageWorks.find((x) => x.id === el.dataset.stageId);
          if (work) openCinema(getStagePhotos(work), 0);
        };
        el.addEventListener("click", trigger);
        el.addEventListener("keydown", (e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            trigger();
          }
        });
      });
    }

    if (filterStrip && lookbook) {
      filterStrip.innerHTML = genres
        .map(
          (g) => `
          <button type="button" class="genre-tab ${g.key === "ALL" ? "active" : ""}" data-g="${g.key}">
            ${esc(g.label)}
          </button>
        `
        )
        .join("");

      filterStrip.querySelectorAll(".genre-tab").forEach((btn) => {
        btn.addEventListener("click", () => {
          activeGenre = btn.dataset.g;
          filterStrip.querySelectorAll(".genre-tab").forEach((b) => b.classList.toggle("active", b === btn));
          renderStageLookbook();
        });
      });

      renderStageLookbook();
    }
  }

  function getStagePhotos(w) {
    const raw = galleriesMap[w.id] || [];
    const list =
      w.id === "YY-034"
        ? [{ src: w.cover, caption: `${w.titleZh} · 广东美术馆展览现场与海报` }, ...raw]
        : raw;
    return dedupBySrc(
      list.map((p, idx) => ({
        src: p.src,
        caption: `${w.titleZh} (${w.titleEn}) — Scene Photo 0${idx + 1}`
      }))
    );
  }

  // ==================== 02 / 奖项与研究 ====================
  function initChapterTwo() {
    const awardsEl = document.getElementById("awards-rows");
    if (awardsEl && Array.isArray(PORTFOLIO_DATA.awardsSelected)) {
      awardsEl.innerHTML = PORTFOLIO_DATA.awardsSelected
        .map(
          (a) => `
          <div class="award-row">
            <span class="aw-cat">${esc(a.category)}</span>
            <span class="aw-title">${esc(a.title)}</span>
            <span class="aw-tag">${esc(a.tag)}</span>
          </div>
        `
        )
        .join("");
    }

    const writingEl = document.getElementById("writing-cards");
    if (writingEl && Array.isArray(PORTFOLIO_DATA.writingsPublished)) {
      writingEl.innerHTML = PORTFOLIO_DATA.writingsPublished
        .map(
          (w, idx) => `
          <div class="writing-card">
            <div>
              <h4>${esc(w.title)}</h4>
              <span>${esc(w.role)}</span>
            </div>
            ${
              w.previewSrc
                ? `<button type="button" class="sharp-btn" data-paper-idx="${idx}">VIEW PAGE ↗</button>`
                : `<a href="#thesis-root" class="sharp-btn">OUTLINE ↓</a>`
            }
          </div>
        `
        )
        .join("");

      writingEl.querySelectorAll("[data-paper-idx]").forEach((btn) => {
        btn.addEventListener("click", () => {
          const item = PORTFOLIO_DATA.writingsPublished[Number(btn.dataset.paperIdx)];
          if (item && item.previewSrc) {
            openCinema([{ src: item.previewSrc, caption: `${item.title} · ${item.role}` }], 0);
          }
        });
      });
    }

    const thesisEl = document.getElementById("thesis-root");
    const th = PORTFOLIO_DATA.thesis;
    if (thesisEl && th) {
      thesisEl.innerHTML = `
        <div class="thesis-header">
          <div class="mono-kicker">POSTGRADUATE THESIS · ${esc(th.year)}</div>
          <h3>${esc(th.titleZh)}</h3>
          <p>${esc(th.titleEn)}</p>
        </div>
        <div class="thesis-bilingual">
          <p>${esc(th.abstractZh)}</p>
          <p>${esc(th.abstractEn)}</p>
        </div>
        <div class="thesis-keywords">
          <strong>关键词 / Key words：</strong>${esc(th.keywordsZh)} &nbsp;|&nbsp; ${esc(th.keywordsEn)}
        </div>
        <div class="sub-bar">
          <span>DISSERTATION OUTLINE · 论文大纲架构</span>
          <span>CHAPTER 01 — 04</span>
        </div>
        <div class="thesis-outline-grid">
          ${th.chapters
            .map(
              (ch) => `
            <div class="outline-col">
              <span class="outline-code">${esc(ch.code)}</span>
              <h4>${esc(ch.title)}</h4>
              <ul>
                ${ch.points.map((pt) => `<li>${esc(pt)}</li>`).join("")}
              </ul>
            </div>
          `
            )
            .join("")}
        </div>
        <div class="methods-bar">
          ${th.methods.map((m) => `<span class="method-tag">${esc(m)}</span>`).join("")}
        </div>
      `;
    }

    const transEl = document.getElementById("translation-root");
    const tr = PORTFOLIO_DATA.translation;
    if (transEl && tr) {
      transEl.innerHTML = `
        <div>
          <div class="mono-kicker">TRANSLATION · ${esc(tr.period)}</div>
          <h3 style="font-size:clamp(1.45rem,2.4vw,2rem); font-weight:500; margin:8px 0 6px;">${esc(tr.titleZh)}</h3>
          <p style="font-family:var(--font-editorial); font-style:italic; font-size:1.25rem; color:var(--ice); margin-bottom:20px;">
            ${esc(tr.titleEn)}
          </p>
          <p style="font-size:14px; color:var(--platinum); margin-bottom:12px;">${esc(tr.descZh)}</p>
          <p style="font-size:13px; color:var(--dim);">${esc(tr.descEn)}</p>
        </div>
        <div class="trans-stats">
          ${tr.stats
            .map(
              (s) => `
            <div>
              <span class="trans-stat-num">${esc(s.value)}</span>
              <span class="trans-stat-label">${esc(s.label)}</span>
            </div>
          `
            )
            .join("")}
        </div>
      `;
    }
  }

  // ==================== 03 / 雕塑与装置展厅 ====================
  function initChapterThree() {
    const root = document.getElementById("sculpture-root");
    if (!root || !Array.isArray(PORTFOLIO_DATA.sculptures)) return;

    root.innerHTML = PORTFOLIO_DATA.sculptures
      .map((sc, sIdx) => {
        const imgs = dedupBySrc(
          [sc.cover, ...(sc.images || [])].map((src, i) => ({
            src,
            caption: `${sc.titleZh} (${sc.titleEn}) · ${sc.material} · ${sc.size} [${i + 1}]`
          }))
        );

        return `
          <article class="sculp-exhibit reveal" data-sculp-idx="${sIdx}">
            <div>
              <div class="sculp-main-stage" data-active-slide="0">
                <img src="${esc(imgs[0].src)}" alt="${esc(sc.titleZh)}" loading="lazy" />
              </div>
              ${
                imgs.length > 1
                  ? `
                  <div class="sculp-thumbs-row">
                    ${imgs
                      .map(
                        (im, i) =>
                          `<img class="sculp-mini ${i === 0 ? "active" : ""}" src="${esc(im.src)}" alt="" data-thumb="${i}" loading="lazy" />`
                      )
                      .join("")}
                  </div>
                `
                  : ""
              }
            </div>

            <div class="museum-plaque">
              <div class="plaque-index">SCULPTURE &amp; INSTALLATION · 0${sIdx + 1}</div>
              <h3 class="plaque-title-zh">${esc(sc.titleZh)}</h3>
              <p class="plaque-title-en">${esc(sc.titleEn)}</p>

              <div class="plaque-specs">
                <span><strong>MATERIAL</strong>${esc(sc.material)}</span>
                <span><strong>SIZE</strong>${esc(sc.size)}</span>
              </div>

              ${sc.statementZh ? `<p class="plaque-statement-zh">${esc(sc.statementZh)}</p>` : ""}
              ${sc.statementEn ? `<p class="plaque-statement-en">${esc(sc.statementEn)}</p>` : ""}

              <button type="button" class="sharp-btn" data-open-sculp>
                INSPECT ${imgs.length} PORTFOLIO PLATES ↗
              </button>
            </div>
          </article>
        `;
      })
      .join("");

    root.querySelectorAll(".sculp-exhibit").forEach((exEl) => {
      const sc = PORTFOLIO_DATA.sculptures[Number(exEl.dataset.sculpIdx)];
      const imgs = dedupBySrc(
        [sc.cover, ...(sc.images || [])].map((src, i) => ({
          src,
          caption: `${sc.titleZh} (${sc.titleEn}) · ${sc.material} · ${sc.size} [0${i + 1}]`
        }))
      );
      const stageEl = exEl.querySelector(".sculp-main-stage");
      const mainImg = stageEl.querySelector("img");
      const thumbs = exEl.querySelectorAll(".sculp-mini");

      thumbs.forEach((th) => {
        th.addEventListener("click", () => {
          const i = Number(th.dataset.thumb);
          stageEl.dataset.activeSlide = String(i);
          mainImg.src = imgs[i].src;
          thumbs.forEach((t, ti) => t.classList.toggle("active", ti === i));
        });
      });

      stageEl.addEventListener("click", () => {
        openCinema(imgs, Number(stageEl.dataset.activeSlide || 0));
      });

      exEl.querySelector("[data-open-sculp]").addEventListener("click", () => {
        openCinema(imgs, Number(stageEl.dataset.activeSlide || 0));
      });
    });
  }

  // ==================== 04 / 绘画与速写展墙 ====================
  function initChapterFour() {
    const root = document.getElementById("drawing-root");
    if (!root || !Array.isArray(PORTFOLIO_DATA.drawings)) return;

    root.innerHTML = PORTFOLIO_DATA.drawings
      .map((dr, idx) => {
        const isWide = idx >= 3;
        return `
          <article class="drawing-frame ${isWide ? "wide" : ""} reveal" data-dr-idx="${idx}" tabindex="0" role="button" aria-label="检视 ${esc(dr.titleZh)}">
            <div class="drawing-canvas">
              <img src="${esc(dr.images[0])}" alt="${esc(dr.titleZh)}" loading="lazy" />
            </div>
            <div class="drawing-label">
              <h3>${esc(dr.titleZh)}</h3>
              <span class="dr-en">${esc(dr.titleEn)}</span>
              <span class="dr-meta">${esc(dr.material)} &nbsp;·&nbsp; ${esc(dr.size)}${
          dr.images.length > 1 ? ` &nbsp;·&nbsp; ${dr.images.length} PLATES` : ""
        }</span>
            </div>
          </article>
        `;
      })
      .join("");

    root.querySelectorAll(".drawing-frame").forEach((el) => {
      const trigger = () => {
        const dr = PORTFOLIO_DATA.drawings[Number(el.dataset.drIdx)];
        const slides = dr.images.map((src, i) => ({
          src,
          caption: `${dr.titleZh} (${dr.titleEn}) · ${dr.material} · ${dr.size}${
            dr.images.length > 1 ? ` [0${i + 1}]` : ""
          }`
        }));
        openCinema(slides, 0);
      };
      el.addEventListener("click", trigger);
      el.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          trigger();
        }
      });
    });
  }

  // ==================== 无边框电影级灯箱 ====================
  const cinemaState = {
    slides: [],
    index: 0,
    zoomed: false
  };

  function openCinema(slides, startIdx = 0) {
    if (!Array.isArray(slides) || !slides.length) return;
    cinemaState.slides = slides;
    cinemaState.index = Math.max(0, Math.min(startIdx, slides.length - 1));
    cinemaState.zoomed = false;

    const lb = document.getElementById("cinema-lightbox");
    const stage = document.getElementById("cinema-stage");
    const zoomBtn = document.getElementById("cinema-zoom");
    if (!lb) return;
    if (stage) stage.classList.remove("is-zoomed");
    if (zoomBtn) zoomBtn.textContent = "ZOOM +";

    lb.hidden = false;
    lb.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    renderCinemaSlide();
  }

  function renderCinemaSlide() {
    const cur = cinemaState.slides[cinemaState.index];
    if (!cur) return;

    const imgEl = document.getElementById("cinema-img");
    const idxEl = document.getElementById("cinema-idx");
    const titleEl = document.getElementById("cinema-title");
    const stripEl = document.getElementById("cinema-strip");
    const prevBtn = document.getElementById("cinema-prev");
    const nextBtn = document.getElementById("cinema-next");

    if (imgEl) {
      imgEl.src = cur.src;
      imgEl.alt = cur.caption || "";
    }
    if (idxEl) {
      idxEl.textContent = `${String(cinemaState.index + 1).padStart(2, "0")} / ${String(
        cinemaState.slides.length
      ).padStart(2, "0")}`;
    }
    if (titleEl) titleEl.textContent = cur.caption || "";
    if (prevBtn) prevBtn.style.display = cinemaState.slides.length > 1 ? "flex" : "none";
    if (nextBtn) nextBtn.style.display = cinemaState.slides.length > 1 ? "flex" : "none";

    if (stripEl) {
      if (cinemaState.slides.length <= 1) {
        stripEl.innerHTML = "";
      } else {
        stripEl.innerHTML = cinemaState.slides
          .map(
            (s, i) =>
              `<img class="cinema-thumb ${i === cinemaState.index ? "active" : ""}" src="${esc(s.src)}" alt="" data-i="${i}" loading="lazy" />`
          )
          .join("");
        stripEl.querySelectorAll(".cinema-thumb").forEach((th) => {
          th.addEventListener("click", () => {
            cinemaState.index = Number(th.dataset.i);
            renderCinemaSlide();
          });
        });
      }
    }
  }

  function closeCinema() {
    const lb = document.getElementById("cinema-lightbox");
    if (!lb || lb.hidden) return;
    lb.hidden = true;
    lb.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  function initCinemaControls() {
    const closeBtn = document.getElementById("cinema-close");
    const prevBtn = document.getElementById("cinema-prev");
    const nextBtn = document.getElementById("cinema-next");
    const zoomBtn = document.getElementById("cinema-zoom");
    const stageEl = document.getElementById("cinema-stage");
    const imgEl = document.getElementById("cinema-img");

    if (closeBtn) closeBtn.addEventListener("click", closeCinema);
    if (prevBtn) {
      prevBtn.addEventListener("click", () => {
        cinemaState.index =
          (cinemaState.index - 1 + cinemaState.slides.length) % cinemaState.slides.length;
        renderCinemaSlide();
      });
    }
    if (nextBtn) {
      nextBtn.addEventListener("click", () => {
        cinemaState.index = (cinemaState.index + 1) % cinemaState.slides.length;
        renderCinemaSlide();
      });
    }

    const toggleZoom = () => {
      cinemaState.zoomed = !cinemaState.zoomed;
      if (stageEl) stageEl.classList.toggle("is-zoomed", cinemaState.zoomed);
      if (zoomBtn) zoomBtn.textContent = cinemaState.zoomed ? "FIT" : "ZOOM +";
    };
    if (zoomBtn) zoomBtn.addEventListener("click", toggleZoom);
    if (imgEl) imgEl.addEventListener("dblclick", toggleZoom);

    document.addEventListener("keydown", (e) => {
      const lb = document.getElementById("cinema-lightbox");
      if (!lb || lb.hidden) return;
      if (e.key === "Escape") closeCinema();
      if (e.key === "ArrowLeft" && cinemaState.slides.length > 1) {
        cinemaState.index =
          (cinemaState.index - 1 + cinemaState.slides.length) % cinemaState.slides.length;
        renderCinemaSlide();
      }
      if (e.key === "ArrowRight" && cinemaState.slides.length > 1) {
        cinemaState.index = (cinemaState.index + 1) % cinemaState.slides.length;
        renderCinemaSlide();
      }
    });
  }

  // ==================== 滚动章节高亮与渐显观察器 ====================
  function initScrollObservers() {
    const revealEls = document.querySelectorAll(".reveal");
    if ("IntersectionObserver" in window) {
      const revObs = new IntersectionObserver(
        (entries) => {
          entries.forEach((en) => {
            if (en.isIntersecting) {
              en.target.classList.add("is-visible");
              revObs.unobserve(en.target);
            }
          });
        },
        { threshold: 0.08 }
      );
      revealEls.forEach((el) => revObs.observe(el));

      const sections = document.querySelectorAll("main section[id]");
      const links = document.querySelectorAll(".hud-nav .hud-link");
      const navObs = new IntersectionObserver(
        (entries) => {
          entries.forEach((en) => {
            if (en.isIntersecting) {
              const id = en.target.id;
              links.forEach((a) => a.classList.toggle("active", a.dataset.sec === id));
            }
          });
        },
        { rootMargin: "-35% 0px -55% 0px" }
      );
      sections.forEach((s) => navObs.observe(s));
    } else {
      revealEls.forEach((el) => el.classList.add("is-visible"));
    }
  }

  function dedupBySrc(arr) {
    const seen = new Set();
    return arr.filter((item) => {
      if (!item || !item.src || seen.has(item.src)) return false;
      seen.add(item.src);
      return true;
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    initPrologue();
    initChapterOne();
    initChapterTwo();
    initChapterThree();
    initChapterFour();
    initCinemaControls();
    initScrollObservers();
  });
})();
