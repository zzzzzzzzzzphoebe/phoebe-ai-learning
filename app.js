const data = window.AI_LEARNING_DATA;
const entries = data.entries;
let selectedTag = "全部";
let searchTerm = "";

const statusOrder = ["未讀", "已讀", "已練習", "可面試表達"];

const $ = (selector) => document.querySelector(selector);

function getStoredStatus(id, fallback) {
  return localStorage.getItem(`ai-learning-status:${id}`) || fallback;
}

function setStoredStatus(id, status) {
  localStorage.setItem(`ai-learning-status:${id}`, status);
}

function getActiveEntry() {
  return entries[0];
}

function renderToday() {
  const entry = getActiveEntry();
  const status = getStoredStatus(entry.id, entry.status);

  $("#entry-date").textContent = `${entry.date} / ${entry.topic}`;
  $("#today-title").textContent = entry.title;
  $("#entry-summary").textContent = entry.summary;
  $("#entry-topic").textContent = entry.topic;
  $("#entry-impact").textContent = entry.impact;
  $("#entry-status").textContent = status;
  $("#entry-memory").textContent = entry.memory;
  renderReadingPath(entry);
  renderSignals(entry);
  renderDeepDive(entry);

  $("#debate-list").innerHTML = entry.debate
    .map(
      (item) => `
        <div class="stance-item">
          <strong>${item.label}</strong>
          <p>${item.text}</p>
        </div>
      `
    )
    .join("");

  $("#term-name").textContent = entry.term.name;
  $("#term-definition").textContent = entry.term.definition;
  $("#term-example").textContent = entry.term.example;
  $("#term-misunderstanding").textContent = entry.term.misunderstanding;

  $("#fde-scenario").textContent = entry.fde.scenario;
  $("#fde-questions").innerHTML = entry.fde.questions.map((question) => `<li>${question}</li>`).join("");
  $("#fde-exercise").textContent = entry.fde.exercise;
  $("#fde-interview").textContent = entry.fde.interview;
  $("[data-next-status]").textContent = nextStatusLabel(status);
}

function renderSignals(entry) {
  const signals = entry.signals || [];
  $("#signals-list").innerHTML = signals.length
    ? signals
        .map(
          (signal) => `
            <article class="signal-card">
              <div class="signal-meta">
                <span class="signal-type">${signal.type}</span>
                ${signal.priority ? `<span class="signal-priority">${signal.priority}</span>` : ""}
              </div>
              <div>
                <h3>${signal.title}</h3>
                <p>${signal.text}</p>
                <strong>${signal.why}</strong>
                ${signal.learningPoint ? `<em>${signal.learningPoint}</em>` : ""}
                ${renderSources(signal.sources)}
              </div>
            </article>
          `
        )
        .join("")
    : `<article class="signal-card"><div class="signal-type">待補</div><div><h3>今日尚未整理多訊號</h3><p>後續每日任務會固定納入社群與 GitHub 熱門專案。</p></div></article>`;
}

function renderReadingPath(entry) {
  const pathItems = entry.readingPath || [
    { label: "3 分鐘快讀", text: "先讀今日重點與全球 AI 重要訊號。" },
    { label: "10 分鐘深讀", text: "再讀主軸背景、技術脈絡與企業影響。" },
    { label: "今日練習", text: "最後完成 AI FDE 小練習。" }
  ];
  $("#path-items").innerHTML = pathItems
    .map(
      (item) => `
        <div class="path-item">
          <strong>${item.label}</strong>
          <p>${item.text}</p>
        </div>
      `
    )
    .join("");
}

function renderDeepDive(entry) {
  const deepDive = entry.deepDive;
  if (!deepDive) {
    $("#deep-dive-grid").innerHTML =
      `<article class="deep-dive-card"><h3>深讀內容待補</h3><p>後續每日任務會補上背景、技術脈絡、企業影響與後續觀察。</p></article>`;
    return;
  }
  const blocks = [
    ["發生什麼", deepDive.context],
    ["為什麼現在重要", deepDive.whyNow],
    ["技術背景", deepDive.technicalBackground],
    ["企業影響", deepDive.enterpriseImpact],
    ["後續觀察", deepDive.watchNext]
  ];
  $("#deep-dive-grid").innerHTML = blocks
    .map(
      ([title, text]) => `
        <article class="deep-dive-card">
          <h3>${title}</h3>
          <p>${text}</p>
        </article>
      `
    )
    .join("");
}

function renderSources(sources = []) {
  if (!sources.length) return "";
  return `
    <div class="source-links">
      ${sources
        .map(
          (source) => `
            <a href="${source.url}" target="_blank" rel="noopener noreferrer">
              <span>${source.kind}</span>${source.label}
            </a>
          `
        )
        .join("")}
    </div>
  `;
}

function nextStatusLabel(status) {
  const currentIndex = statusOrder.indexOf(status);
  const next = statusOrder[(currentIndex + 1) % statusOrder.length];
  return `標記${next}`;
}

function renderTags() {
  const tags = ["全部", ...new Set(entries.flatMap((entry) => entry.tags))];
  $("#filter-tags").innerHTML = tags
    .map(
      (tag) => `
        <button class="tag-button" type="button" data-tag="${tag}" aria-pressed="${tag === selectedTag}">
          ${tag}
        </button>
      `
    )
    .join("");
}

function matchesEntry(entry) {
  const text = [
    entry.title,
    entry.topic,
    entry.summary,
    entry.memory,
    ...(entry.signals || []).flatMap((signal) => [
      signal.type,
      signal.priority,
      signal.title,
      signal.text,
      signal.why,
      signal.learningPoint,
      ...(signal.sources || []).flatMap((source) => [source.label, source.kind])
    ]),
    ...(entry.readingPath || []).flatMap((item) => [item.label, item.text]),
    ...(entry.deepDive ? Object.values(entry.deepDive) : []),
    entry.term.name,
    entry.term.definition,
    entry.fde.scenario,
    ...entry.tags
  ]
    .join(" ")
    .toLowerCase();
  const matchesSearch = text.includes(searchTerm.toLowerCase());
  const matchesTag = selectedTag === "全部" || entry.tags.includes(selectedTag);
  return matchesSearch && matchesTag;
}

function renderArchive() {
  const filtered = entries.filter(matchesEntry);
  $("#archive-list").innerHTML = filtered.length
    ? filtered
        .map(
          (entry) => `
            <article class="archive-card">
              <div class="archive-date">${entry.date}</div>
              <div>
                <h3>${entry.title}</h3>
                <p>${entry.summary}</p>
              </div>
              <div class="archive-tags">
                ${entry.tags.map((tag) => `<span>${tag}</span>`).join("")}
              </div>
            </article>
          `
        )
        .join("")
    : `<article class="archive-card"><div class="archive-date">無結果</div><div><h3>找不到符合條件的筆記</h3><p>請換一個關鍵字或標籤。</p></div></article>`;
}

function renderWeekly() {
  $("#weekly-items").innerHTML = data.weekly
    .map(
      (item) => `
        <div class="weekly-item">
          <strong>${item.title}</strong>
          <p>${item.text}</p>
        </div>
      `
    )
    .join("");
}

function copySection(type) {
  const entry = getActiveEntry();
  const text =
    type === "fde"
      ? [
          `客戶情境：${entry.fde.scenario}`,
          `需求釐清：${entry.fde.questions.join(" / ")}`,
          `今日小練習：${entry.fde.exercise}`,
          `面試可用表述：${entry.fde.interview}`
        ].join("\n")
      : entry.debate.map((item) => `${item.label}：${item.text}`).join("\n");

  navigator.clipboard?.writeText(text);
}

function bindEvents() {
  $("#filter-tags").addEventListener("click", (event) => {
    const button = event.target.closest("[data-tag]");
    if (!button) return;
    selectedTag = button.dataset.tag;
    renderTags();
    renderArchive();
  });

  $("#search-input").addEventListener("input", (event) => {
    searchTerm = event.target.value.trim();
    renderArchive();
  });

  document.querySelectorAll("[data-scroll-target]").forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelector(button.dataset.scrollTarget)?.scrollIntoView({ behavior: "smooth" });
    });
  });

  document.querySelectorAll("[data-copy-section]").forEach((button) => {
    button.addEventListener("click", () => copySection(button.dataset.copySection));
  });

  $("[data-next-status]").addEventListener("click", () => {
    const entry = getActiveEntry();
    const current = getStoredStatus(entry.id, entry.status);
    const next = statusOrder[(statusOrder.indexOf(current) + 1) % statusOrder.length];
    setStoredStatus(entry.id, next);
    renderToday();
  });
}

renderToday();
renderTags();
renderArchive();
renderWeekly();
bindEvents();
