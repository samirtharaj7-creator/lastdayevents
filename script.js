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

const READ_ARTICLES_KEY = "lastDayEventsReadArticles";

const glossaryTerms = [
  {
    term: "Judgment Hour",
    definition: "The final phase of Christ's heavenly ministry in which God's people are called to reverence, repentance, and confidence in His intercession.",
    passages: ["Daniel 7", "Daniel 8:14", "Revelation 14:7", "Hebrews 8-10"]
  },
  {
    term: "Sanctuary Message",
    definition: "The Bible teaching that Christ ministers for His people in the heavenly sanctuary, applying the merits of His sacrifice and preparing a people for His appearing.",
    passages: ["Hebrews 8-10", "Daniel 8:14", "Revelation 11:19"]
  },
  {
    term: "Three Angels' Messages",
    definition: "God's final gospel appeal in Revelation 14: the everlasting gospel, the fall of Babylon, and the warning against false worship.",
    passages: ["Revelation 14:6-12", "Revelation 18:1-4"]
  },
  {
    term: "Babylon",
    definition: "A biblical picture of religious confusion, self-exaltation, and worship mixed with error. God's call is merciful: He invites His people to come out.",
    passages: ["Revelation 14:8", "Revelation 18:1-4"]
  },
  {
    term: "Latter Rain",
    definition: "The special outpouring of the Holy Spirit that ripens God's people and empowers the final proclamation of the gospel.",
    passages: ["Joel 2:23-32", "Acts 3:19", "James 5:7"]
  },
  {
    term: "Loud Cry",
    definition: "The final swelling of the three angels' messages under the power of the Holy Spirit, especially joined with Revelation 18's call out of Babylon.",
    passages: ["Revelation 14:6-12", "Revelation 18:1-4"]
  },
  {
    term: "Seal of God",
    definition: "God's mark of settled loyalty in His people, shown in loving obedience, Creator worship, and trust in Christ under final pressure.",
    passages: ["Revelation 7:1-4", "Ezekiel 9", "Revelation 14:12"]
  },
  {
    term: "Mark of the Beast",
    definition: "The final sign of allegiance to human authority when worship and obedience are brought into open conflict with God's commandments.",
    passages: ["Revelation 13:15-17", "Revelation 14:9-12"]
  },
  {
    term: "Image of the Beast",
    definition: "A final religious-civil arrangement patterned after the first beast, using influence and law to enforce counterfeit worship.",
    passages: ["Revelation 13:11-17", "Revelation 14:9"]
  },
  {
    term: "Close of Probation",
    definition: "The solemn end of Christ's intercessory work for humanity, when the choices already made are fixed before the final plagues fall.",
    passages: ["Revelation 22:11-12", "Daniel 12:1", "Revelation 15:8"]
  },
  {
    term: "Time of Trouble",
    definition: "The period of final distress after probation closes, when God's people are tested but not forsaken.",
    passages: ["Daniel 12:1", "Jeremiah 30:7", "Revelation 16"]
  },
  {
    term: "Faith of Jesus",
    definition: "The faithfulness of Jesus Himself and the trusting faith He forms in His people, so obedience rests on grace rather than self-confidence.",
    passages: ["Revelation 14:12", "Galatians 2:20", "Hebrews 12:1-2"]
  }
];

function normalizeReference(reference) {
  return String(reference)
    .replace(/[–—]/g, "-")
    .replace(/\s*:\s*/g, ":")
    .replace(/\s*-\s*/g, "-")
    .replace(/\s+/g, " ")
    .trim();
}

function getScriptureText(reference) {
  const normalized = normalizeReference(reference);
  const passages = window.kjvPassages || {};

  if (passages[normalized]) {
    return {
      reference: normalized,
      label: passages[normalized].label || "King James Version",
      text: passages[normalized].text || []
    };
  }

  const key = Object.keys(passages).find((candidate) => normalized.startsWith(candidate) || candidate.startsWith(normalized));
  if (key) {
    return {
      reference: key,
      label: passages[key].label || "King James Version",
      text: passages[key].text || []
    };
  }

  return {
    reference: normalized,
    label: "King James Version",
    text: ["KJV text has not been added for this reference yet."]
  };
}

const articleFilters = {
  query: "",
  phase: "all",
  status: "all"
};

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

function getReadArticles() {
  try {
    return new Set(JSON.parse(localStorage.getItem(READ_ARTICLES_KEY) || "[]"));
  } catch {
    return new Set();
  }
}

function saveReadArticles(readArticles) {
  localStorage.setItem(READ_ARTICLES_KEY, JSON.stringify([...readArticles]));
}

function isArticleRead(slug) {
  return getReadArticles().has(slug);
}

function setArticleRead(slug, isRead) {
  const readArticles = getReadArticles();
  if (isRead) readArticles.add(slug);
  else readArticles.delete(slug);
  saveReadArticles(readArticles);
}

function getArticleSearchText(article) {
  return [
    article.title,
    article.phase,
    article.summary,
    article.scriptures.join(" "),
    article.symbols,
    article.duration,
    article.ellenWhiteSources.join(" "),
    article.studyNotes.join(" "),
    article.sections.flatMap((section) => [section.heading, ...section.paragraphs]).join(" ")
  ].join(" ").toLowerCase();
}

function getFilteredArticles() {
  const query = articleFilters.query.trim().toLowerCase();
  const readArticles = getReadArticles();

  return articleData.filter((article) => {
    const phaseMatch = articleFilters.phase === "all" || String(article.eventIndex) === articleFilters.phase || getPhaseForIndex(article.eventIndex)?.title === articleFilters.phase;
    const statusMatch = articleFilters.status === "all"
      || (articleFilters.status === "read" && readArticles.has(article.slug))
      || (articleFilters.status === "unread" && !readArticles.has(article.slug));
    const queryMatch = !query || getArticleSearchText(article).includes(query);
    return phaseMatch && statusMatch && queryMatch;
  });
}

function uniqueItems(items) {
  return [...new Set(items.filter(Boolean).map((item) => String(item).trim()).filter(Boolean))];
}

function getGlossaryDefinition(term) {
  const lower = String(term).toLowerCase();
  return glossaryTerms.find((entry) => entry.term.toLowerCase() === lower || lower.includes(entry.term.toLowerCase()));
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

  return `<div class="timeline-item" id="timeline-event-${escapeHtml(event.slug)}" style="--color:${colors.color}; --color-2:${colors.color2}" data-step="${index + 1}">
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

function openTimelineHash() {
  if (!chart || !window.location.hash.startsWith("#timeline-event-")) return;

  const slug = decodeURIComponent(window.location.hash.replace("#timeline-event-", ""));
  const index = events.findIndex((event) => event.slug === slug);
  if (index < 0) return;

  const target = document.getElementById(`timeline-event-${events[index].slug}`);
  if (target) target.scrollIntoView({ behavior: "smooth", block: "center" });
  selectEvent(index);
}

function renderArticleCard(article) {
  const colors = getNodeColor(article.eventIndex);
  const read = isArticleRead(article.slug);

  return `<a class="article-card${read ? " is-read" : ""}" href="article.html?event=${encodeURIComponent(article.slug)}" style="--article-color:${colors.color}; --article-color-2:${colors.color2}">
      <span class="watermark">${String(article.eventIndex + 1).padStart(2, "0")}</span>
      <span class="article-number">${String(article.eventIndex + 1).padStart(2, "0")}</span>
      ${read ? `<span class="read-badge">Read</span>` : ""}
      <span class="article-card-title">${escapeHtml(article.title)}</span>
      <span class="article-card-summary">${escapeHtml(article.summary)}</span>
      <span class="article-card-link">Read full article</span>
    </a>`;
}

function renderArticlesIndex() {
  const filteredArticles = getFilteredArticles();
  const filteredIndexes = new Set(filteredArticles.map((article) => article.eventIndex));
  const readCount = getReadArticles().size;
  const phaseLinks = timelinePhases.map((phase, index) => `<a href="#articles-phase-${index}">${escapeHtml(phase.title)}</a>`).join("");
  const phaseOptions = timelinePhases.map((phase) => `<option value="${escapeHtml(phase.title)}"${articleFilters.phase === phase.title ? " selected" : ""}>${escapeHtml(phase.title)}</option>`).join("");
  const phaseMarkup = timelinePhases.map((phase, phaseIndex) => {
    const colors = getNodeColor(phase.start);
    const cards = articleData
      .slice(phase.start, phase.end + 1)
      .filter((article) => filteredIndexes.has(article.eventIndex))
      .map((article) => renderArticleCard(article))
      .join("");

    if (!cards) return "";

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
    <section class="study-tool-panel article-search-panel" aria-label="Search and filter articles">
      <div>
        <label for="articleSearch">Search articles</label>
        <input id="articleSearch" type="search" value="${escapeHtml(articleFilters.query)}" placeholder="Search an event, passage, or theme">
      </div>
      <div>
        <label for="articlePhaseFilter">Phase</label>
        <select id="articlePhaseFilter">
          <option value="all"${articleFilters.phase === "all" ? " selected" : ""}>All phases</option>
          ${phaseOptions}
        </select>
      </div>
      <div>
        <label for="articleStatusFilter">Progress</label>
        <select id="articleStatusFilter">
          <option value="all"${articleFilters.status === "all" ? " selected" : ""}>All articles</option>
          <option value="unread"${articleFilters.status === "unread" ? " selected" : ""}>Unread only</option>
          <option value="read"${articleFilters.status === "read" ? " selected" : ""}>Read only</option>
        </select>
      </div>
      <button id="articleFilterReset" type="button">Reset</button>
      <p class="tool-result-count">${filteredArticles.length} of ${articleData.length} articles shown · ${Math.min(readCount, articleData.length)} read</p>
    </section>
    <nav class="article-jump-nav" aria-label="Article phase links">
      ${phaseLinks}
    </nav>
    ${phaseMarkup || `<section class="article-empty"><p class="eyebrow">No matching articles</p><h2>Try a broader search.</h2></section>`}
  `;

  const searchInput = document.querySelector("#articleSearch");
  const phaseFilter = document.querySelector("#articlePhaseFilter");
  const statusFilter = document.querySelector("#articleStatusFilter");
  const resetButton = document.querySelector("#articleFilterReset");

  searchInput?.addEventListener("input", (event) => {
    articleFilters.query = event.target.value;
    renderArticlesIndex();
    enhanceStudyText(articlesIndex);
  });

  phaseFilter?.addEventListener("change", (event) => {
    articleFilters.phase = event.target.value;
    renderArticlesIndex();
    enhanceStudyText(articlesIndex);
  });

  statusFilter?.addEventListener("change", (event) => {
    articleFilters.status = event.target.value;
    renderArticlesIndex();
    enhanceStudyText(articlesIndex);
  });

  resetButton?.addEventListener("click", () => {
    articleFilters.query = "";
    articleFilters.phase = "all";
    articleFilters.status = "all";
    renderArticlesIndex();
    enhanceStudyText(articlesIndex);
  });
}

function renderArticleSections(sections) {
  return sections.map((section) => `<section class="article-body-section${section.heading ? "" : " article-essay-section"}">
      ${section.heading ? `<h2>${escapeHtml(section.heading)}</h2>` : ""}
      ${renderParagraphs(section.paragraphs)}
    </section>`).join("");
}

function renderArticlePager(previous, next, className = "", ariaLabel = "Previous and next articles") {
  const classes = ["article-pager", className].filter(Boolean).join(" ");
  return `<nav class="${classes}" aria-label="${escapeHtml(ariaLabel)}">
      ${previous ? `<a href="article.html?event=${encodeURIComponent(previous.slug)}"><span>Previous</span>${escapeHtml(previous.title)}</a>` : `<a href="articles.html"><span>Back</span>All articles</a>`}
      ${next ? `<a href="article.html?event=${encodeURIComponent(next.slug)}"><span>Next</span>${escapeHtml(next.title)}</a>` : `<a href="articles.html"><span>Back</span>All articles</a>`}
    </nav>`;
}

function renderTopArticleLinks(previous, next) {
  if (!previous && !next) return "";

  return `
    <span class="article-breadcrumb-spacer" aria-hidden="true"></span>
    <div class="article-step-group">
      ${previous ? `<a class="article-step-link" href="article.html?event=${encodeURIComponent(previous.slug)}" aria-label="Previous article: ${escapeHtml(previous.title)}"><span>Previous</span><strong>${escapeHtml(previous.title)}</strong></a>` : ""}
      ${next ? `<a class="article-step-link" href="article.html?event=${encodeURIComponent(next.slug)}" aria-label="Next article: ${escapeHtml(next.title)}"><span>Next</span><strong>${escapeHtml(next.title)}</strong></a>` : ""}
    </div>
  `;
}

function renderArticleToolbox(article) {
  const read = isArticleRead(article.slug);

  return `<section class="article-toolbox" aria-label="Article study tools">
      <button id="readToggle" type="button" data-read="${read ? "true" : "false"}">${read ? "Mark unread" : "Mark as read"}</button>
      <button id="printArticle" type="button">Print / Save PDF</button>
    </section>`;
}

function renderArticleSequenceStrip(article, previous, next) {
  const phase = getPhaseForIndex(article.eventIndex);
  const phasePosition = phase ? `${article.eventIndex - phase.start + 1} of ${phase.end - phase.start + 1} in this phase` : "";

  return `<section class="article-sequence-strip" aria-label="Timeline position">
      <div>
        <span>Timeline Position</span>
        <strong>Event ${String(article.eventIndex + 1).padStart(2, "0")} · ${escapeHtml(phase?.title || article.phase)}</strong>
        <p>${escapeHtml(phasePosition)}</p>
      </div>
      <nav aria-label="Nearby timeline events">
        ${previous ? `<a href="article.html?event=${encodeURIComponent(previous.slug)}"><span>Before</span>${escapeHtml(previous.title)}</a>` : `<span class="sequence-muted">Beginning of the sequence</span>`}
        ${next ? `<a href="article.html?event=${encodeURIComponent(next.slug)}"><span>Next</span>${escapeHtml(next.title)}</a>` : `<span class="sequence-muted">End of the sequence</span>`}
      </nav>
    </section>`;
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
        ${renderTopArticleLinks(previous, next)}
      </nav>

      <header class="article-reader-hero">
        <span class="article-reader-number">${String(article.eventIndex + 1).padStart(2, "0")}</span>
        <p class="eyebrow">${escapeHtml(article.phase)}</p>
        <h1>${escapeHtml(article.title)}</h1>
        <p>${escapeHtml(article.summary)}</p>
      </header>

      ${renderArticleToolbox(article)}
      ${renderArticleSequenceStrip(article, previous, next)}

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

      ${renderArticlePager(previous, next, "article-pager-bottom")}
    </article>
  `;

  document.querySelector("#readToggle")?.addEventListener("click", (event) => {
    const nextState = event.currentTarget.dataset.read !== "true";
    setArticleRead(article.slug, nextState);
    renderArticleReader();
    enhanceStudyText(articleReader);
  });

  document.querySelector("#printArticle")?.addEventListener("click", () => window.print());
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
  enhanceStudyText(drawer);
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

function getSearchExcerpt(text, query, maxLength = 170) {
  const clean = cleanArticleText(text);
  if (!clean) return "";
  const lower = clean.toLowerCase();
  const index = lower.indexOf(query.toLowerCase());
  const start = index > 45 ? index - 45 : 0;
  const excerpt = clean.slice(start, start + maxLength).trim();
  return `${start > 0 ? "... " : ""}${excerpt}${clean.length > start + maxLength ? " ..." : ""}`;
}

function buildGlobalSearchIndex() {
  const articleResults = articleData.map((article) => ({
    category: "Articles",
    title: article.title,
    eyebrow: `Event ${String(article.eventIndex + 1).padStart(2, "0")} · ${article.phase}`,
    text: getArticleSearchText(article),
    excerptSource: [
      article.summary,
      article.sections.flatMap((section) => section.paragraphs).join(" "),
      article.scriptures.join(" "),
      article.ellenWhiteSources.join(" ")
    ].join(" "),
    href: `article.html?event=${encodeURIComponent(article.slug)}`
  }));

  const timelineResults = events.map((event, index) => ({
    category: "Timeline Events",
    title: event.title,
    eyebrow: `Event ${String(index + 1).padStart(2, "0")} · ${event.phase}`,
    text: [
      event.title,
      event.phase,
      event.caption,
      event.summary,
      event.detail.join(" "),
      event.studyNotes.join(" ")
    ].join(" ").toLowerCase(),
    excerptSource: [event.caption, event.summary, event.detail.join(" ")].join(" "),
    href: `timeline.html#timeline-event-${encodeURIComponent(event.slug)}`
  }));

  const glossaryResults = glossaryTerms.map((entry) => ({
    category: "Glossary Terms",
    title: entry.term,
    eyebrow: "Glossary",
    text: [entry.term, entry.definition, entry.passages.join(" ")].join(" ").toLowerCase(),
    excerptSource: entry.definition,
    glossaryTerm: entry.term
  }));

  const scriptureResults = Object.entries(window.kjvPassages || {}).map(([reference, passage]) => ({
    category: "Scripture Texts",
    title: reference,
    eyebrow: passage.label || "King James Version",
    text: [reference, passage.label, ...(passage.text || [])].join(" ").toLowerCase(),
    excerptSource: (passage.text || []).join(" "),
    reference
  }));

  const referenceResults = [];
  const seen = new Set();
  articleData.forEach((article) => {
    [...article.scriptures, ...article.ellenWhiteSources, ...article.studyNotes].forEach((source) => {
      const key = `${source}::${article.slug}`;
      if (!source || seen.has(key)) return;
      seen.add(key);
      referenceResults.push({
        category: "Study References",
        title: source,
        eyebrow: article.title,
        text: [source, article.title, article.phase].join(" ").toLowerCase(),
        excerptSource: `Connected with ${article.title}.`,
        href: `article.html?event=${encodeURIComponent(article.slug)}`
      });
    });
  });

  return [...articleResults, ...timelineResults, ...glossaryResults, ...scriptureResults, ...referenceResults];
}

function getGlobalSearchResults(query) {
  const normalized = query.trim().toLowerCase();
  if (normalized.length < 2) return {};

  const grouped = {};
  buildGlobalSearchIndex().forEach((item) => {
    if (!item.text.includes(normalized)) return;
    if (!grouped[item.category]) grouped[item.category] = [];
    if (grouped[item.category].length < 6) {
      grouped[item.category].push({
        ...item,
        excerpt: getSearchExcerpt(item.excerptSource || item.text, normalized)
      });
    }
  });

  return grouped;
}

function renderGlobalSearchResults(query) {
  const results = getGlobalSearchResults(query);
  const categories = Object.keys(results);

  if (!query.trim()) {
    return `<p class="global-search-empty">Search for a topic, passage, event, or phrase.</p>`;
  }

  if (!categories.length) {
    return `<p class="global-search-empty">No results found. Try a broader term such as judgment, Babylon, Sabbath, or latter rain.</p>`;
  }

  return categories.map((category) => `<section class="global-search-category">
      <h3>${escapeHtml(category)}</h3>
      <div class="global-search-result-list">
        ${results[category].map((item) => {
          const body = `<span>${escapeHtml(item.eyebrow)}</span><strong>${escapeHtml(item.title)}</strong>${item.excerpt ? `<p>${escapeHtml(item.excerpt)}</p>` : ""}`;
          if (item.reference) {
            return `<button type="button" class="global-search-result scripture-result-button" data-reference="${escapeHtml(item.reference)}">${body}</button>`;
          }
          if (item.glossaryTerm) {
            return `<button type="button" class="global-search-result glossary-result-button" data-glossary-term="${escapeHtml(item.glossaryTerm)}">${body}</button>`;
          }
          return `<a class="global-search-result" href="${escapeHtml(item.href)}">${body}</a>`;
        }).join("")}
      </div>
    </section>`).join("");
}

function ensureGlobalSearch() {
  let overlay = document.querySelector("#globalSearchOverlay");
  if (overlay) return overlay;

  overlay = document.createElement("div");
  overlay.id = "globalSearchOverlay";
  overlay.className = "global-search-overlay";
  overlay.hidden = true;
  overlay.innerHTML = `
    <section class="global-search-dialog" role="dialog" aria-modal="true" aria-labelledby="globalSearchTitle">
      <button type="button" class="global-search-close" aria-label="Close search">×</button>
      <div class="global-search-heading">
        <p class="eyebrow">Site search</p>
        <h2 id="globalSearchTitle">Search Last Day Events</h2>
      </div>
      <label class="global-search-label" for="globalSearchInput">Search the site</label>
      <input id="globalSearchInput" class="global-search-input" type="search" autocomplete="off" placeholder="Try Sabbath, Babylon, judgment, Daniel 8:14...">
      <div id="globalSearchResults" class="global-search-results" aria-live="polite"></div>
    </section>
  `;

  document.body.append(overlay);

  const input = overlay.querySelector("#globalSearchInput");
  const results = overlay.querySelector("#globalSearchResults");
  const render = () => {
    results.innerHTML = renderGlobalSearchResults(input.value);
    enhanceScriptureReferences(results);
  };

  input.addEventListener("input", render);
  overlay.addEventListener("click", (event) => {
    if (event.target === overlay || event.target.closest(".global-search-close")) {
      closeGlobalSearch();
      return;
    }

    const scriptureButton = event.target.closest(".scripture-result-button");
    if (scriptureButton) {
      event.preventDefault();
      event.stopPropagation();
      showScripturePopover(scriptureButton);
      return;
    }

    const glossaryButton = event.target.closest(".glossary-result-button");
    if (glossaryButton) {
      event.preventDefault();
      event.stopPropagation();
      showGlossaryPopover(glossaryButton, true);
      return;
    }

    if (event.target.closest(".global-search-result[href]")) {
      closeGlobalSearch();
    }
  });

  render();
  return overlay;
}

function openGlobalSearch() {
  const overlay = ensureGlobalSearch();
  overlay.hidden = false;
  overlay.classList.add("open");
  requestAnimationFrame(() => {
    overlay.querySelector("#globalSearchInput")?.focus();
  });
}

function closeGlobalSearch() {
  const overlay = document.querySelector("#globalSearchOverlay");
  if (!overlay) return;
  overlay.classList.remove("open");
  hideScripturePopover();
  window.setTimeout(() => {
    if (!overlay.classList.contains("open")) overlay.hidden = true;
  }, 160);
}

function initGlobalSearch() {
  document.querySelectorAll(".site-nav").forEach((nav) => {
    if (nav.querySelector(".global-search-trigger")) return;
    const button = document.createElement("button");
    button.type = "button";
    button.className = "global-search-trigger";
    button.textContent = "Search";
    button.setAttribute("aria-haspopup", "dialog");
    button.addEventListener("click", openGlobalSearch);
    nav.append(button);
  });
}

if (chart) {
  renderChart();
  window.scrollTo({ left: 0, top: 0 });
  requestAnimationFrame(openTimelineHash);

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
  window.addEventListener("hashchange", openTimelineHash);
}

if (articlesIndex) {
  renderArticlesIndex();
}

if (articleReader) {
  renderArticleReader();
}

function getStudyTextNodes(root) {
  if (!root) return [];
  const skipTags = new Set(["A", "BUTTON", "SCRIPT", "STYLE", "TEXTAREA", "INPUT", "SELECT", "OPTION"]);
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      if (!node.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
      if (node.parentElement?.closest(".scripture-ref, .glossary-ref, .scripture-popover")) return NodeFilter.FILTER_REJECT;
      if (node.parentElement?.closest("a, button")) return NodeFilter.FILTER_REJECT;
      if (node.parentElement && skipTags.has(node.parentElement.tagName)) return NodeFilter.FILTER_REJECT;
      return NodeFilter.FILTER_ACCEPT;
    }
  });

  const nodes = [];
  while (walker.nextNode()) nodes.push(walker.currentNode);
  return nodes;
}

function enhanceScriptureReferences(root) {
  const bookPattern = "(?:[1-3]\\s*)?(?:Revelation|Daniel|Matthew|Mark|Luke|Joel|Habakkuk|Leviticus|Exodus|Genesis|Hebrews|James|Ezekiel|Zechariah|Malachi|Nahum|Peter|Thessalonians|Galatians|Jeremiah|Acts|Romans|John|Isaiah|Psalm|Psalms)";
  const referencePattern = new RegExp(`\\b${bookPattern}\\s+\\d+(?::[\\d,\\-–\\s]+)?`, "g");

  getStudyTextNodes(root).forEach((node) => {
    const text = node.nodeValue;
    if (!referencePattern.test(text)) return;
    referencePattern.lastIndex = 0;

    const fragment = document.createDocumentFragment();
    let lastIndex = 0;
    for (const match of text.matchAll(referencePattern)) {
      const reference = match[0].trim().replace(/\s+/g, " ");
      fragment.append(document.createTextNode(text.slice(lastIndex, match.index)));
      const button = document.createElement("button");
      button.type = "button";
      button.className = "scripture-ref";
      button.dataset.reference = reference;
      button.textContent = reference;
      fragment.append(button);
      lastIndex = match.index + match[0].length;
    }
    fragment.append(document.createTextNode(text.slice(lastIndex)));
    node.replaceWith(fragment);
  });
}

function enhanceGlossaryTerms(root) {
  const termPattern = new RegExp(`\\b(${glossaryTerms.map((entry) => entry.term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|")})\\b`, "gi");

  getStudyTextNodes(root).forEach((node) => {
    const text = node.nodeValue;
    if (!termPattern.test(text)) return;
    termPattern.lastIndex = 0;

    const fragment = document.createDocumentFragment();
    let lastIndex = 0;
    let replacements = 0;
    for (const match of text.matchAll(termPattern)) {
      if (replacements >= 1) break;
      const term = match[0];
      const entry = getGlossaryDefinition(term);
      if (!entry) continue;
      fragment.append(document.createTextNode(text.slice(lastIndex, match.index)));
      const button = document.createElement("button");
      button.type = "button";
      button.className = "glossary-ref";
      button.dataset.glossaryTerm = entry.term;
      button.title = entry.definition;
      button.setAttribute("aria-label", `${entry.term}: ${entry.definition}`);
      button.textContent = term;
      fragment.append(button);
      lastIndex = match.index + match[0].length;
      replacements += 1;
    }
    fragment.append(document.createTextNode(text.slice(lastIndex)));
    if (replacements) node.replaceWith(fragment);
  });
}

let glossaryPopoverLocked = false;

function ensureGlossaryPopover() {
  let popover = document.querySelector("#glossaryPopover");
  if (popover) return popover;

  popover = document.createElement("div");
  popover.id = "glossaryPopover";
  popover.className = "glossary-popover";
  popover.hidden = true;
  document.body.append(popover);
  return popover;
}

function renderGlossaryPopover(entry) {
  return `
    <button type="button" class="glossary-popover-close" aria-label="Close glossary note">×</button>
    <strong>${escapeHtml(entry.term)}</strong>
    <p>${escapeHtml(entry.definition)}</p>
    ${entry.passages?.length ? `<div><span>Related passages</span>${entry.passages.map((passage) => `<button type="button" class="scripture-ref" data-reference="${escapeHtml(passage)}">${escapeHtml(passage)}</button>`).join("")}</div>` : ""}
  `;
}

function positionGlossaryPopover(trigger, popover) {
  const rect = trigger.getBoundingClientRect();
  const margin = 14;
  const width = Math.min(420, window.innerWidth - margin * 2);
  popover.style.width = `${width}px`;
  popover.style.left = `${Math.max(margin, Math.min(window.innerWidth - width - margin, rect.left))}px`;

  const estimatedHeight = Math.min(popover.offsetHeight || 220, window.innerHeight - margin * 2);
  const below = rect.bottom + 10;
  const above = rect.top - estimatedHeight - 10;
  popover.style.top = `${below + estimatedHeight < window.innerHeight - margin ? below : Math.max(margin, above)}px`;
}

function showGlossaryPopover(trigger, lock = false) {
  const term = trigger.dataset.glossaryTerm || trigger.textContent.trim();
  const entry = getGlossaryDefinition(term);
  if (!entry) return;

  const popover = ensureGlossaryPopover();
  glossaryPopoverLocked = lock;
  popover.innerHTML = renderGlossaryPopover(entry);
  popover.hidden = false;
  positionGlossaryPopover(trigger, popover);
}

function hideGlossaryPopover() {
  const popover = document.querySelector("#glossaryPopover");
  if (popover) popover.hidden = true;
  glossaryPopoverLocked = false;
}

function ensureScripturePopover() {
  let popover = document.querySelector("#scripturePopover");
  if (popover) return popover;

  popover = document.createElement("div");
  popover.id = "scripturePopover";
  popover.className = "scripture-popover";
  popover.hidden = true;
  document.body.append(popover);
  return popover;
}

function renderScripturePopover(reference) {
  const passage = getScriptureText(reference);
  return `
    <button type="button" class="scripture-popover-close" aria-label="Close Bible text">×</button>
    <strong>${escapeHtml(passage.reference)}</strong>
    <span>${escapeHtml(passage.label)}</span>
    <div class="scripture-popover-text">
      ${passage.text.map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`).join("")}
    </div>
  `;
}

function showScripturePopover(button) {
  const popover = ensureScripturePopover();
  const reference = button.dataset.reference || button.textContent.trim();
  popover.innerHTML = renderScripturePopover(reference);
  popover.hidden = false;
  popover.querySelector(".scripture-popover-text")?.scrollTo({ top: 0 });
}

function hideScripturePopover() {
  const popover = document.querySelector("#scripturePopover");
  if (popover) popover.hidden = true;
}

function enhanceStudyText(root = document.body) {
  enhanceScriptureReferences(root);
  enhanceGlossaryTerms(root);
}

document.addEventListener("click", (event) => {
  if (event.target.closest(".glossary-popover-close")) {
    hideGlossaryPopover();
    return;
  }

  if (event.target.closest(".scripture-popover-close")) {
    hideScripturePopover();
    return;
  }

  const glossaryButton = event.target.closest(".glossary-ref");
  if (glossaryButton) {
    event.preventDefault();
    showGlossaryPopover(glossaryButton, true);
    return;
  }

  const button = event.target.closest(".scripture-ref");
  if (button) {
    event.preventDefault();
    showScripturePopover(button);
    return;
  }

  if (!event.target.closest(".scripture-popover")) {
    hideScripturePopover();
  }

  if (!event.target.closest(".glossary-popover")) {
    hideGlossaryPopover();
  }
});

document.addEventListener("mouseover", (event) => {
  const glossaryButton = event.target.closest(".glossary-ref");
  if (glossaryButton) showGlossaryPopover(glossaryButton, false);
});

document.addEventListener("mouseout", (event) => {
  if (!event.target.closest(".glossary-ref") || glossaryPopoverLocked) return;
  window.setTimeout(() => {
    const popover = document.querySelector("#glossaryPopover");
    if (!glossaryPopoverLocked && !popover?.matches(":hover")) hideGlossaryPopover();
  }, 140);
});

document.addEventListener("focusin", (event) => {
  const glossaryButton = event.target.closest(".glossary-ref");
  if (glossaryButton) showGlossaryPopover(glossaryButton, false);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    hideGlossaryPopover();
    hideScripturePopover();
    closeGlobalSearch();
  }
});

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

initGlobalSearch();
enhanceStudyText(document.body);
initRevealEffects();
handleScrollEffects();
window.addEventListener("scroll", handleScrollEffects, { passive: true });
window.addEventListener("resize", handleScrollEffects);
