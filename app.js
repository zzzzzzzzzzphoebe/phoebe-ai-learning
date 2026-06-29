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
