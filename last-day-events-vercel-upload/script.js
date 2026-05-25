const events = [
  { title: "1755 Lisbon Earthquake", phase: "Prophetic sign" },
  { title: "1780 Dark Day", phase: "Prophetic sign" },
  { title: "1798 Time of the End Begins / Papacy Wounded / Daniel Unsealed", phase: "Historic waymark" },
  { title: "1833 Falling Stars", phase: "Prophetic sign" },
  { title: "1840 First Angel's Message", phase: "Advent proclamation" },
  { title: "Midnight Cry", phase: "Advent proclamation" },
  { title: "1844 Great Disappointment", phase: "Historic waymark" },
  { title: "1844 Investigative Judgment / Sanctuary Message", phase: "Historic waymark" },
  { title: "Remnant Church / Sabbath Restored / Spirit of Prophecy Restored", phase: "Remnant identity" },
  { title: "1888 Righteousness by Faith Revived", phase: "Message revival" },
  { title: "Papal Wound Healing / Religious Influence Restored", phase: "Prophetic influence returning" },
  { title: "Third Angel's Message", phase: "Final warning" },
  { title: "Threefold Union and Counterfeit Revival", phase: "Final crisis before probation closes" },
  { title: "Religious Liberty Undermined / Church-State Union", phase: "Final crisis before probation closes" },
  { title: "National Sunday Law", phase: "Final public worship test" },
  { title: "Image of the Beast Formed", phase: "Final public worship test" },
  { title: "Seal of God and Mark of the Beast", phase: "Final decision before probation closes" },
  { title: "Judgment of the Living", phase: "Judgment before probation closes" },
  { title: "Shaking and Sifting", phase: "Purification before probation closes" },
  { title: "Perfection of Character / Blotting Out of Sin", phase: "Preparation before probation closes" },
  { title: "Latter Rain", phase: "Spirit-empowered preparation" },
  { title: "Loud Cry / Fourth Angel", phase: "Final world warning" },
  { title: "Fall of Babylon Complete", phase: "Final warning before probation closes" },
  { title: "Little Time of Trouble", phase: "Final crisis before probation closes" },
  { title: "Out of the Cities / Country Living Signal", phase: "Practical preparation" },
  { title: "Individual Close of Probation", phase: "Probation closing" },
  { title: "General Close of Probation", phase: "Transition point" },
  { title: "Spirit of God Withdrawn / Day of the Lord Begins", phase: "After probation closes" },
  { title: "Great Time of Trouble", phase: "After probation closes" },
  { title: "Satan's Last Deceptions / Counterfeit Advent", phase: "After probation closes" },
  { title: "Death Decree", phase: "After probation closes" },
  { title: "Time of Jacob's Trouble", phase: "After probation closes" },
  { title: "Seven Last Plagues", phase: "After probation closes" },
  { title: "Armageddon / Deliverance by Voice of God", phase: "Final deliverance" },
  { title: "Special Resurrection", phase: "Final deliverance" },
  { title: "Second Advent / Saints Taken to Heaven", phase: "Christ's appearing" },
  { title: "Millennium / Earth Desolate / Satan Bound", phase: "Millennium" },
  { title: "Judgment During the Millennium", phase: "Millennium" },
  { title: "Holy City Descends / Wicked Raised / Executive Judgment", phase: "Final judgment" },
  { title: "Final Destruction, Earth Recreated, Eternity", phase: "Final restoration" }
];

const chart = document.querySelector("#chart");
const detailPhase = document.querySelector("#detailPhase");
const title = document.querySelector("#detailTitle");
const summary = document.querySelector("#detailSummary");
const basicWhat = document.querySelector("#basicWhat");
const scriptureList = document.querySelector("#scriptureList");
const egwEmphasis = document.querySelector("#egwEmphasis");
const placementBefore = document.querySelector("#placementBefore");
const placementCurrent = document.querySelector("#placementCurrent");
const placementNext = document.querySelector("#placementNext");
const durationScope = document.querySelector("#durationScope");
const description = document.querySelector("#detailDescription");
const symbolMeaning = document.querySelector("#symbolMeaning");
const peopleAffected = document.querySelector("#peopleAffected");
const propheticIssue = document.querySelector("#propheticIssue");
const primarySources = document.querySelector("#primarySources");
const supportingSources = document.querySelector("#supportingSources");
const notes = document.querySelector("#detailNotes");
const furtherReading = document.querySelector("#furtherReading");
const articleLink = document.querySelector("#articleLink");
const relatedSequence = document.querySelector("#relatedSequence");
const sequenceHeading = document.querySelector("#sequenceHeading");
const sequenceList = document.querySelector("#sequenceList");
const drawer = document.querySelector("#detailDrawer");
const backdrop = document.querySelector("#drawerBackdrop");
const closeButton = document.querySelector("#drawerClose");
const articlesIndex = document.querySelector("#articlesIndex");
const articleReader = document.querySelector("#articleReader");

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function slugify(value) {
  return String(value)
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

const timelinePhases = [
  {
    title: "Historical Signs",
    kicker: "Prophetic signs",
    description: "",
    start: 0,
    end: 3,
    hue: 205,
    step: 12
  },
  {
    title: "Advent Movement and Sanctuary Foundation",
    kicker: "1840-1888",
    description: "",
    start: 4,
    end: 9,
    hue: 36,
    step: 10
  },
  {
    title: "Present Warning Work",
    kicker: "Our present place",
    description: "",
    start: 10,
    end: 11,
    hue: 154,
    step: 22
  },
  {
    title: "Final Crisis Before Probation Closes",
    kicker: "Mercy still open",
    description: "",
    start: 12,
    end: 26,
    hue: 312,
    step: 7
  },
  {
    title: "After Probation Closes",
    kicker: "Final trouble",
    description: "",
    start: 27,
    end: 34,
    hue: 246,
    step: 11
  },
  {
    title: "Second Advent and Millennium",
    kicker: "Christ appears",
    description: "",
    start: 35,
    end: 37,
    hue: 198,
    step: 18
  },
  {
    title: "Final Judgment and New Earth",
    kicker: "Restoration",
    description: "",
    start: 38,
    end: 39,
    hue: 126,
    step: 34
  }
];

const nodeHues = [
  205, 217, 229, 241,
  36, 48, 60, 72, 84, 96,
  150, 172,
  306, 316, 326, 336, 346, 356, 6, 16, 26, 286, 296, 276, 266, 256, 246,
  224, 234, 214, 204, 194, 184, 174, 164,
  142, 132, 122,
  112, 102
];

const studyAddons = events.map(() => ({
  scriptures: [],
  symbols: "",
  duration: "",
  participants: "",
  issue: ""
}));

const curatedEventContent = [];

function getPhaseForIndex(index) {
  return timelinePhases.find((phase) => index >= phase.start && index <= phase.end);
}

function getNodeColor(index) {
  const hue = nodeHues[index] ?? (index * 47) % 360;
  return {
    color: `hsl(${hue} 68% 38%)`,
    color2: `hsl(${(hue + 28) % 360} 82% 62%)`
  };
}

events.forEach((event, index) => {
  const curated = window.lastDayEventContent?.[index] || curatedEventContent[index];
  event.slug = slugify(event.title);
  event.eventIndex = index;
  event.caption = curated?.caption || "";
  event.summary = curated?.summary || "";
  event.placement = curated?.placement || "";
  event.detail = curated?.detail || [];
  event.primarySources = curated?.primarySources || [];
  event.supportingSources = curated?.supportingSources || [];
  event.studyNotes = curated?.studyNotes || [];
  event.articleSections = curated?.articleSections || [];
  delete event.relatedSequence;

  const addon = studyAddons[index];
  if (addon) {
    addon.scriptures = curated?.addon?.scriptures || [];
    addon.symbols = curated?.addon?.symbols || "";
    addon.duration = curated?.addon?.duration || "";
    addon.participants = curated?.addon?.participants || "";
    addon.issue = curated?.addon?.issue || "";
  }
});

timelinePhases.forEach((phase) => {
  phase.description = "";
});

function joinReadable(items) {
  if (!items.length) return "";
  if (items.length === 1) return items[0];
  if (items.length === 2) return `${items[0]} and ${items[1]}`;
  return `${items.slice(0, -1).join(", ")}, and ${items[items.length - 1]}`;
}

function toArticleLanguage(value) {
  return String(value)
    .replace(/\b(?:This|this)\s+node\b/g, (match) => match[0] === "T" ? "This point" : "this point")
    .replace(/\b(?:the|The)\s+chart\b/g, (match) => match[0] === "T" ? "The chronology" : "the chronology")
    .replace(/\b(?:In|in)\s+the\s+timeline,?\s*/g, "")
    .replace(/\b(?:In|in)\s+the\s+study\s+flow,?\s*/g, "")
    .replace(/\b(?:on|for)\s+the\s+page\b/g, "in the study")
    .replace(/\.\s*\./g, ".")
    .replace(/\.,/g, ",")
    .replace(/\s+([,.;:])/g, "$1")
    .replace(/\s+/g, " ")
    .trim();
}

function summarizeSupportingSource(source) {
  return toArticleLanguage(source);
}

function cleanArticleText(value) {
  return toArticleLanguage(value)
    .replace(/\.\s*\./g, ".")
    .replace(/\s+([,.;:])/g, "$1")
    .replace(/,\s+\./g, ".")
    .replace(/,\s+and\s+\./g, ".")
    .replace(/\s+/g, " ")
    .trim();
}

function cleanParagraphs(paragraphs) {
  return paragraphs
    .filter(Boolean)
    .map((paragraph) => cleanArticleText(paragraph))
    .filter(Boolean);
}

const articleBibleNotes = [];

const articleContextNotes = [];

const articleMeaningNotes = [];

const articleApplicationNotes = [];

function buildArticleSections(event) {
  return (event.articleSections || [])
    .map((section) => ({
      heading: section.heading || "",
      paragraphs: cleanParagraphs(section.paragraphs || [])
    }))
    .filter((section) => section.heading || section.paragraphs.length);
}

function buildArticle(event, index) {
  const addon = studyAddons[index];

  return {
    slug: event.slug,
    eventIndex: index,
    title: event.title,
    phase: event.phase,
    summary: toArticleLanguage(event.summary),
    scriptures: addon.scriptures,
    symbols: addon.symbols,
    participants: addon.participants,
    duration: addon.duration,
    sections: buildArticleSections(event, index),
    ellenWhiteSources: event.primarySources,
    supportingSources: event.supportingSources.map((source) => summarizeSupportingSource(source)),
    studyNotes: event.studyNotes.map((note) => toArticleLanguage(note))
  };
}

const articleData = events.map((event, index) => buildArticle(event, index));

function renderParagraphs(paragraphs) {
  return paragraphs.map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`).join("");
}

function renderList(items) {
  return items.map((item) => `<li>${escapeHtml(item)}</li>`).join("");
}

function renderSequence(items) {
  return items.map((item) => `<li><strong>${escapeHtml(item.label)}</strong> ${escapeHtml(item.text)}</li>`).join("");
}

function getArticleParagraphs(event) {
  return (event.articleSections || [])
    .flatMap((section) => section.paragraphs || [])
    .map((paragraph) => cleanArticleText(paragraph))
    .filter(Boolean);
}

function getSentenceParts(value) {
  const text = cleanArticleText(value);
  if (!text) return [];
  return text.match(/[^.!?]+[.!?]+(?:["')\]]+)?|[^.!?]+$/g)?.map((sentence) => sentence.trim()).filter(Boolean) || [text];
}

function trimToSentences(value, sentenceLimit = 2, maxLength = 300) {
  const sentences = getSentenceParts(value);
  if (!sentences.length) return "";

  const picked = [];
  for (const sentence of sentences) {
    const next = [...picked, sentence].join(" ");
    if (picked.length && next.length > maxLength) break;
    picked.push(sentence);
    if (picked.length >= sentenceLimit) break;
  }

  let text = picked.join(" ") || sentences[0];
  if (text.length > maxLength) {
    const cut = text.lastIndexOf(" ", maxLength);
    text = `${text.slice(0, cut > maxLength * 0.62 ? cut : maxLength).replace(/[,:;—-]+$/g, "").trim()}.`;
  }
  return cleanArticleText(text);
}

function isSameLead(candidate, existing) {
  const normalize = (value) => cleanArticleText(value).toLowerCase().slice(0, 90);
  const left = normalize(candidate);
  const right = normalize(existing);
  return left && right && (left === right || left.includes(right) || right.includes(left));
}

function getDrawerIntro(event) {
  const articleParagraphs = getArticleParagraphs(event);
  return trimToSentences(articleParagraphs[0] || event.summary || event.caption, 2, 330);
}

function getDrawerDetails(event) {
  const articleParagraphs = getArticleParagraphs(event);
  const source = articleParagraphs.length > 1 ? articleParagraphs.slice(1, 3) : event.detail;
  return source
    .map((paragraph) => trimToSentences(paragraph, 2, 330))
    .filter(Boolean)
    .slice(0, 2);
}

function getDrawerEmphasis(event, intro) {
  const candidates = [
    ...event.detail.slice(1),
    ...event.studyNotes,
    ...getArticleParagraphs(event).slice(-1)
  ];
  const match = candidates.find((candidate) => candidate && !isSameLead(candidate, intro));
  return trimToSentences(match || event.detail[0] || event.summary, 2, 260);
}

function getEllenWhiteEmphasis(event) {
  return event.detail[0] || event.summary || "";
}

function getFurtherReading(event) {
  if (!event.primarySources.length) return "";
  return `For further study, read ${event.primarySources.slice(0, 2).join("; ")}.`;
}

function renderTimelineItem(event, index) {
  const colors = getNodeColor(index);
  const marker = index === 11 ? `
    <div class="present-marker" aria-label="Current position in the chronology">
      <span class="present-pin">Now</span>
      <div class="present-card">
        <span class="present-label">We are here</span>
      </div>
    </div>` : "";

  return `<div class="timeline-item" style="--color:${colors.color}; --color-2:${colors.color2}" data-step="${index + 1}">
      <button class="timeline-node" data-index="${index}" type="button" aria-label="Open details for ${escapeHtml(event.title)}">
        <span class="node-number">${index + 1}</span>
      </button>
      <div class="timeline-meta" aria-hidden="true">
        <span class="stage-num">Event ${String(index + 1).padStart(2, "0")}</span>
        <strong>${escapeHtml(event.title)}</strong>
      </div>
      <button class="timeline-card" data-index="${index}" type="button">
        <span class="watermark">${String(index + 1).padStart(2, "0")}</span>
        <span class="event-title">${escapeHtml(event.title)}</span>
        <span class="event-caption">${escapeHtml(event.caption)}</span>
        <span class="event-card-footer">
          <span>Open study drawer</span>
          <span aria-hidden="true">+</span>
        </span>
      </button>
    </div>${marker}`;
}

function renderArticleCard(article) {
  const colors = getNodeColor(article.eventIndex);

  return `<a class="article-card" href="article.html?event=${encodeURIComponent(article.slug)}" style="--article-color:${colors.color}; --article-color-2:${colors.color2}">
      <span class="watermark">${String(article.eventIndex + 1).padStart(2, "0")}</span>
      <span class="article-number">${String(article.eventIndex + 1).padStart(2, "0")}</span>
      <span class="article-card-title">${escapeHtml(article.title)}</span>
      <span class="article-card-summary">${escapeHtml(article.summary)}</span>
      <span class="article-card-link">Read full article</span>
    </a>`;
}

function renderArticlesIndex() {
  const phaseLinks = timelinePhases.map((phase, index) => `<a href="#articles-phase-${index}">${escapeHtml(phase.title)}</a>`).join("");
  const phaseMarkup = timelinePhases.map((phase, phaseIndex) => {
    const colors = getNodeColor(phase.start);
    const cards = articleData
      .slice(phase.start, phase.end + 1)
      .map((article) => renderArticleCard(article))
      .join("");

    return `<section class="article-phase" id="articles-phase-${phaseIndex}" style="--phase-color:${colors.color}; --phase-color-2:${colors.color2}">
        <div class="article-phase-heading">
          <span class="phase-kicker">${escapeHtml(phase.kicker)}</span>
          <h2>${escapeHtml(phase.title)}</h2>
          <p>${escapeHtml(phase.description)}</p>
        </div>
        <div class="article-grid">${cards}</div>
      </section>`;
  }).join("");

  articlesIndex.innerHTML = `
    <header class="study-hero article-hero">
      <h1>Articles</h1>
      <p class="subtitle"></p>
    </header>
    <nav class="article-jump-nav" aria-label="Article phase links">
      ${phaseLinks}
    </nav>
    ${phaseMarkup}
  `;
}

function renderArticleSections(sections) {
  return sections.map((section) => `<section class="article-body-section${section.heading ? "" : " article-essay-section"}">
      ${section.heading ? `<h2>${escapeHtml(section.heading)}</h2>` : ""}
      ${renderParagraphs(section.paragraphs)}
    </section>`).join("");
}

function renderArticleReader() {
  const params = new URLSearchParams(window.location.search);
  const slug = params.get("event");
  const article = articleData.find((item) => item.slug === slug);

  if (!article) {
    articleReader.innerHTML = `
      <section class="article-empty">
        <p class="eyebrow">Article not found</p>
        <h1>Choose an Article</h1>
        <p class="subtitle">That article link does not match one of the 40 timeline events.</p>
        <div class="article-actions">
          <a href="articles.html">Back to Articles</a>
          <a href="timeline.html">Back to Timeline</a>
        </div>
      </section>
    `;
    return;
  }

  const colors = getNodeColor(article.eventIndex);
  const previous = articleData[article.eventIndex - 1];
  const next = articleData[article.eventIndex + 1];
  document.title = `${article.title} | Last Day Events`;
  document.documentElement.style.setProperty("--active-color", colors.color);

  articleReader.innerHTML = `
    <article class="article-reader" style="--article-color:${colors.color}; --article-color-2:${colors.color2}">
      <nav class="article-breadcrumb" aria-label="Article navigation">
        <a href="articles.html">Articles</a>
        <span>Event ${String(article.eventIndex + 1).padStart(2, "0")}</span>
        <a href="timeline.html">Timeline</a>
      </nav>

      <header class="article-reader-hero">
        <span class="article-reader-number">${String(article.eventIndex + 1).padStart(2, "0")}</span>
        <p class="eyebrow">${escapeHtml(article.phase)}</p>
        <h1>${escapeHtml(article.title)}</h1>
        <p>${escapeHtml(article.summary)}</p>
      </header>

      <aside class="article-fact-panel" aria-label="Article facts">
        <div>
          <span>Bible anchors</span>
          <ul>${renderList(article.scriptures)}</ul>
        </div>
        <div>
          <span>Key symbols</span>
          <p>${escapeHtml(article.symbols)}</p>
        </div>
        <div>
          <span>Duration / scope</span>
          <p>${escapeHtml(article.duration)}</p>
        </div>
      </aside>

      <div class="article-body">
        ${renderArticleSections(article.sections)}
      </div>

      <section class="article-source-card">
        <h2>For Further Study</h2>
        <div>
          <h3>Ellen White Sources</h3>
          <ul>${renderList(article.ellenWhiteSources)}</ul>
        </div>
        <div>
          <h3>Study Summary</h3>
          <ul>${renderList(article.supportingSources)}</ul>
        </div>
        <div>
          <h3>Study Notes</h3>
          <ul>${renderList(article.studyNotes)}</ul>
        </div>
      </section>

      <nav class="article-pager" aria-label="Previous and next articles">
        ${previous ? `<a href="article.html?event=${encodeURIComponent(previous.slug)}"><span>Previous</span>${escapeHtml(previous.title)}</a>` : `<a href="articles.html"><span>Back</span>All articles</a>`}
        ${next ? `<a href="article.html?event=${encodeURIComponent(next.slug)}"><span>Next</span>${escapeHtml(next.title)}</a>` : `<a href="articles.html"><span>Back</span>All articles</a>`}
      </nav>
    </article>
  `;
}

function renderChart() {
  const timelineMarkup = timelinePhases.map((phase, phaseIndex) => {
    const colors = getNodeColor(phase.start);
    const phaseEvents = events
      .slice(phase.start, phase.end + 1)
      .map((event, offset) => renderTimelineItem(event, phase.start + offset))
      .join("");

    return `<section class="timeline-phase" style="--phase-color:${colors.color}; --phase-color-2:${colors.color2}" aria-labelledby="phase-${phaseIndex}">
        <div class="phase-header">
          <span class="phase-kicker">${escapeHtml(phase.kicker)}</span>
          <h2 id="phase-${phaseIndex}">${escapeHtml(phase.title)}</h2>
          <p>${escapeHtml(phase.description)}</p>
        </div>
        ${phaseEvents}
      </section>`;
  }).join("");

  chart.innerHTML = `
    <div class="timeline-header">
      <p class="eyebrow">Interactive vertical chronology</p>
      <h1>Timeline</h1>
      <p class="subtitle">Click any event to open the study drawer.</p>
    </div>
    <div class="timeline" id="timelineContainer" aria-label="Vertical chronological last-day events timeline">
      <div class="scroll-line" id="scrollLine" aria-hidden="true"></div>
      ${timelineMarkup}
    </div>
  `;

  chart.addEventListener("click", (event) => {
    const button = event.target.closest(".timeline-card, .timeline-node");
    if (!button || !chart.contains(button)) return;
    selectEvent(Number(button.dataset.index));
  });
}

function selectEvent(index) {
  const event = events[index];
  const addon = studyAddons[index];
  const colors = getNodeColor(index);
  const before = events[index - 1]?.title || "Foundational prophetic signs and the long Reformation conflict";
  const next = events[index + 1]?.title || "World without end";
  const visibleSummary = trimToSentences(event.caption || event.summary, 1, 190);
  const drawerIntro = getDrawerIntro(event);
  const drawerDetail = getDrawerDetails(event);
  const visibleNotes = event.studyNotes.map((note) => trimToSentences(note, 1, 180)).filter(Boolean).slice(0, 3);

  detailPhase.textContent = event.phase;
  title.textContent = event.title;
  summary.textContent = visibleSummary;
  basicWhat.textContent = drawerIntro;
  scriptureList.innerHTML = renderList(addon.scriptures);
  egwEmphasis.textContent = getDrawerEmphasis(event, drawerIntro);
  placementBefore.textContent = before;
  placementCurrent.textContent = trimToSentences(event.placement, 1, 190);
  placementNext.textContent = next;
  durationScope.textContent = addon.duration;
  description.innerHTML = renderParagraphs(drawerDetail);
  symbolMeaning.textContent = addon.symbols;
  peopleAffected.textContent = addon.participants;
  propheticIssue.textContent = trimToSentences(addon.issue, 1, 190);
  primarySources.innerHTML = renderList(event.primarySources);
  supportingSources.innerHTML = renderList(event.supportingSources.map((source) => trimToSentences(summarizeSupportingSource(source), 1, 180)).filter(Boolean).slice(0, 3));
  notes.innerHTML = renderList(visibleNotes);
  furtherReading.textContent = getFurtherReading(event);
  articleLink.href = `article.html?event=${encodeURIComponent(event.slug)}`;
  articleLink.setAttribute("aria-label", `Learn more about ${event.title}`);

  if (event.relatedSequence) {
    relatedSequence.hidden = false;
    sequenceHeading.textContent = event.relatedSequence.heading;
    sequenceList.innerHTML = renderSequence(event.relatedSequence.items);
  } else {
    relatedSequence.hidden = true;
    sequenceList.innerHTML = "";
  }

  document.documentElement.style.setProperty("--active-color", colors.color);

  chart.querySelectorAll(".timeline-card, .timeline-node").forEach((button) => {
    button.classList.toggle("active", Number(button.dataset.index) === index);
  });
  openDrawer();
}

function updateDrawerPosition() {
  const timeline = document.getElementById("timelineContainer");
  if (!timeline || window.matchMedia("(max-width: 780px)").matches) {
    document.documentElement.style.removeProperty("--drawer-left");
    document.documentElement.style.removeProperty("--drawer-width");
    return;
  }

  const timelineRect = timeline.getBoundingClientRect();
  const timelineLeft = getComputedStyle(document.documentElement).getPropertyValue("--timeline-left").trim();
  const railRatio = timelineLeft.endsWith("%") ? Number.parseFloat(timelineLeft) / 100 : 0.4;
  const railX = timelineRect.left + timelineRect.width * (Number.isFinite(railRatio) ? railRatio : 0.4);
  const viewportWidth = document.documentElement.clientWidth || window.innerWidth;
  const drawerLeft = Math.max(0, Math.min(viewportWidth - 320, railX));
  const drawerWidth = Math.max(320, viewportWidth - drawerLeft);

  document.documentElement.style.setProperty("--drawer-left", `${Math.round(drawerLeft)}px`);
  document.documentElement.style.setProperty("--drawer-width", `${Math.round(drawerWidth)}px`);
}

function openDrawer() {
  updateDrawerPosition();
  drawer.classList.add("open");
  drawer.setAttribute("aria-hidden", "false");
  backdrop.hidden = false;
  requestAnimationFrame(() => backdrop.classList.add("open"));
}

function closeDrawer() {
  drawer.classList.remove("open");
  drawer.setAttribute("aria-hidden", "true");
  backdrop.classList.remove("open");
  chart.querySelectorAll(".timeline-card, .timeline-node").forEach((button) => button.classList.remove("active"));
  window.setTimeout(() => {
    if (!backdrop.classList.contains("open")) backdrop.hidden = true;
  }, 180);
}

if (chart) {
  renderChart();
  window.scrollTo({ left: 0, top: 0 });

  closeButton.addEventListener("click", closeDrawer);
  backdrop.addEventListener("click", closeDrawer);
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && drawer.classList.contains("open")) {
      closeDrawer();
    }
  });
  window.addEventListener("resize", () => {
    if (drawer.classList.contains("open")) updateDrawerPosition();
  });
}

if (articlesIndex) {
  renderArticlesIndex();
}

if (articleReader) {
  renderArticleReader();
}

function updateNavProgress() {
  const progress = document.querySelector("#navProgress");
  if (!progress) return;
  const scrollable = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const percent = scrollable > 0 ? (document.documentElement.scrollTop / scrollable) * 100 : 0;
  progress.style.width = `${Math.max(0, Math.min(100, percent))}%`;
}

function updateTimelineProgress() {
  const timelineContainer = document.querySelector("#timelineContainer");
  const scrollLine = document.querySelector("#scrollLine");
  if (!timelineContainer || !scrollLine) return;

  const rect = timelineContainer.getBoundingClientRect();
  const activationPoint = window.innerHeight * 0.5;
  const progress = Math.max(0, Math.min(1, (activationPoint - rect.top) / rect.height));
  scrollLine.style.transform = `scaleY(${progress})`;

  timelineContainer.querySelectorAll(".timeline-node").forEach((node) => {
    const nodeRect = node.getBoundingClientRect();
    node.classList.toggle("viewed", nodeRect.top < activationPoint);
  });
}

function initRevealEffects() {
  const revealItems = document.querySelectorAll(".home-hero, .home-intro, .feature-card, .how-to-panel, .prophecy-books, .preparation-callout, .study-hero, .study-intro, .message-choice-card, .source-note, .timeline-header, .timeline-phase, .timeline-item, .present-marker, .article-jump-nav, .article-phase, .article-card, .article-reader-hero, .article-fact-panel, .article-body-section, .article-source-card");
  revealItems.forEach((item) => item.classList.add("reveal-up"));

  if (!("IntersectionObserver" in window)) {
    revealItems.forEach((item) => item.classList.add("active"));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("active");
    });
  }, { root: null, rootMargin: "0px 0px -10% 0px", threshold: 0.1 });

  revealItems.forEach((item) => observer.observe(item));
}

function handleScrollEffects() {
  updateNavProgress();
  updateTimelineProgress();
}

initRevealEffects();
handleScrollEffects();
window.addEventListener("scroll", handleScrollEffects, { passive: true });
window.addEventListener("resize", handleScrollEffects);
