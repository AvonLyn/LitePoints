const FALLBACK_SCORE_DATA = {
  version: "1.0",
  type: "score",
  categories: [
    {
      id: "words",
      name: "背单词",
      items: [
        {
          id: "words_cilin",
          name: "词林小憩",
          desc: "复习单词",
          rule: "复习数量50个/1积分，总数小于50算0.5积分",
          points: 1
        },
        {
          id: "words_cihai",
          name: "词海远航",
          desc: "复习单词",
          rule: "总数＞150，每30个增加1积分",
          points: 1
        },
        {
          id: "words_shili",
          name: "十里词香",
          desc: "背诵新单词，十位数发生改变",
          rule: "每变1次0.5积分",
          points: 0.5
        },
        {
          id: "words_baici",
          name: "百词斩",
          desc: "背诵新单词，百位数发生改变",
          rule: "每变1次3积分",
          points: 3
        },
        {
          id: "words_chijie",
          name: "词界传说",
          desc: "背诵新单词，千位数发生改变",
          rule: "每变一次20积分",
          points: 20
        }
      ]
    },
    {
      id: "newconcept3",
      name: "新概念3",
      items: [
        {
          id: "nc3_julin",
          name: "句林采风",
          desc: "听写课文，2遍起步。",
          rule: "每2遍/2积分",
          points: 2
        },
        {
          id: "nc3_yufa",
          name: "语法灯塔",
          desc: "听网课",
          rule: "每节课/10积分",
          points: 10
        },
        {
          id: "nc3_biji",
          name: "笔记回炉",
          desc: "网课复习(见概3-学习方法规划-2)",
          rule: "每节课/3积分",
          points: 3
        },
        {
          id: "nc3_yingdu",
          name: "影读留声",
          desc: "跟读音频，录音",
          rule: "每读一次/1积分",
          points: 1
        },
        {
          id: "nc3_juzi",
          name: "句子操场",
          desc: "默写课文，练习阶段",
          rule: "每写一次/2积分",
          points: 2
        },
        {
          id: "nc3_zhanghui",
          name: "章回通关",
          desc: "默写课文，考核",
          rule: "默写成功/15积分",
          points: 15
        }
      ]
    },
    {
      id: "zhangyu",
      name: "张宇",
      items: [
        {
          id: "zy_shiye",
          name: "十页小跑",
          desc: "30讲教材",
          rule: "每10页/2积分",
          points: 2
        },
        {
          id: "zy_jiejie",
          name: "节节高",
          desc: "30讲，学完1个小节",
          rule: "每小节/3积分",
          points: 3
        },
        {
          id: "zy_zhangyu",
          name: "章域征服",
          desc: "30讲，学完1个章节",
          rule: "每章节/15积分",
          points: 15
        },
        {
          id: "zy_kehou",
          name: "课后扫荡",
          desc: "30讲，写完1个章节的课后题",
          rule: "每章节/10积分",
          points: 10
        },
        {
          id: "zy_tuoyan",
          name: "推演筑基",
          desc: "1000题，写完1个章节的基础篇",
          rule: "每章节/15积分",
          points: 15
        }
      ]
    },
    {
      id: "signals",
      name: "信号与系统",
      items: [
        {
          id: "sig_shiye",
          name: "十页巡航",
          desc: "奥本海姆书籍，每10页",
          rule: "每10页/2积分",
          points: 2
        },
        {
          id: "sig_nianwu",
          name: "廿五奇遇",
          desc: "奥本海姆书籍，每逢25的倍数",
          rule: "每1次/5积分",
          points: 5
        },
        {
          id: "sig_baiye",
          name: "百页跃迁",
          desc: "奥本海姆书籍，百位数变动",
          rule: "每100页/30积分",
          points: 30
        },
        {
          id: "sig_zhangmo",
          name: "章末清怪",
          desc: "奥本海姆完成课后题",
          rule: "每章节/15积分",
          points: 15
        },
        {
          id: "sig_xiaojie",
          name: "小节采样",
          desc: "960，写完1个小节",
          rule: "每小节/5积分",
          points: 5
        },
        {
          id: "sig_zhengzhang",
          name: "整章通关",
          desc: "960，写完1个章节",
          rule: "每章节/10积分",
          points: 10
        },
        {
          id: "sig_jiyi",
          name: "记忆反潜",
          desc: "听网课",
          rule: "每节课/8积分",
          points: 8
        }
      ]
    },
    {
      id: "habits",
      name: "生活习惯",
      items: [
        {
          id: "hab_zaoniao",
          name: "早鸟上线",
          desc: "早起 早于8:30起床",
          rule: "每次/1积分",
          points: 1
        },
        {
          id: "hab_lingdian",
          name: "零点收网",
          desc: "早睡 早于00:00睡觉",
          rule: "每次/1积分",
          points: 1
        },
        {
          id: "hab_xiachu",
          name: "下厨打卡",
          desc: "自己做饭",
          rule: "每顿/2积分",
          points: 2
        }
      ]
    }
  ]
};

const FALLBACK_TAX_DATA = {
  version: "1.0",
  type: "tax",
  categories: [
    {
      id: "fixed",
      name: "固定税",
      items: [
        {
          id: "fixed_manage",
          name: "管理费",
          desc: "无",
          rule: "每天/4积分",
          points: 4,
          cadence: "每天"
        },
        {
          id: "fixed_weekly",
          name: "周结算税",
          desc: "每周周末做复盘",
          rule: "每周/10积分",
          points: 10,
          cadence: "每周"
        }
      ]
    },
    {
      id: "decreasing",
      name: "递减税",
      items: [
        {
          id: "dec_words_15",
          name: "背单词税收",
          desc: "专项<15积分",
          rule: "每周/12积分",
          points: 12,
          cadence: "每周"
        },
        {
          id: "dec_words_25",
          name: "背单词税收",
          desc: "15<专项<25",
          rule: "每周/10积分",
          points: 10,
          cadence: "每周"
        },
        {
          id: "dec_words_31",
          name: "背单词税收",
          desc: "25<专项<31",
          rule: "每周/5积分",
          points: 5,
          cadence: "每周"
        },
        {
          id: "dec_words_32",
          name: "背单词税收",
          desc: "31<专项",
          rule: "每周/1积分",
          points: 1,
          cadence: "每周"
        },
        {
          id: "dec_nc3_60",
          name: "新概念3税收",
          desc: "专项<60积分",
          rule: "每周/40积分",
          points: 40,
          cadence: "每周"
        },
        {
          id: "dec_nc3_97",
          name: "新概念3税收",
          desc: "60<专项<97",
          rule: "每周/25积分",
          points: 25,
          cadence: "每周"
        },
        {
          id: "dec_nc3_121",
          name: "新概念3税收",
          desc: "97<专项<121",
          rule: "每周/15积分",
          points: 15,
          cadence: "每周"
        },
        {
          id: "dec_nc3_122",
          name: "新概念3税收",
          desc: "121<专项",
          rule: "每周/5积分",
          points: 5,
          cadence: "每周"
        },
        {
          id: "dec_zy_52",
          name: "张宇",
          desc: "专项<52积分",
          rule: "每周/30积分",
          points: 30,
          cadence: "每周"
        },
        {
          id: "dec_zy_83",
          name: "张宇",
          desc: "52<专项<83",
          rule: "每周/20积分",
          points: 20,
          cadence: "每周"
        },
        {
          id: "dec_zy_121",
          name: "张宇",
          desc: "97<专项<121",
          rule: "每周/10积分",
          points: 10,
          cadence: "每周"
        },
        {
          id: "dec_zy_122",
          name: "张宇",
          desc: "121<专项",
          rule: "每周/2积分",
          points: 2,
          cadence: "每周"
        },
        {
          id: "dec_sig_26",
          name: "信号与系统",
          desc: "专项<26积分",
          rule: "每周/18积分",
          points: 18,
          cadence: "每周"
        },
        {
          id: "dec_sig_83",
          name: "信号与系统",
          desc: "52<专项<83",
          rule: "每周/12积分",
          points: 12,
          cadence: "每周"
        },
        {
          id: "dec_sig_121",
          name: "信号与系统",
          desc: "97<专项<121",
          rule: "每周/6积分",
          points: 6,
          cadence: "每周"
        },
        {
          id: "dec_sig_122",
          name: "信号与系统",
          desc: "121<专项",
          rule: "每周/1积分",
          points: 1,
          cadence: "每周"
        },
        {
          id: "dec_hab_14",
          name: "生活习惯",
          desc: "专项<14积分",
          rule: "每周/10积分",
          points: 10,
          cadence: "每周"
        },
        {
          id: "dec_hab_22",
          name: "生活习惯",
          desc: "14<专项<22",
          rule: "每周/6积分",
          points: 6,
          cadence: "每周"
        },
        {
          id: "dec_hab_28",
          name: "生活习惯",
          desc: "22<专项<28",
          rule: "每周/2积分",
          points: 2,
          cadence: "每周"
        },
        {
          id: "dec_hab_29",
          name: "生活习惯",
          desc: "28<专项",
          rule: "每周/0积分",
          points: 0,
          cadence: "每周"
        }
      ]
    },
    {
      id: "discipline",
      name: "纪律税",
      items: [
        {
          id: "disc_idle",
          name: "空转税",
          desc: "当天学习总积分<10",
          rule: "每天/5积分",
          points: 5,
          cadence: "每天"
        },
        {
          id: "disc_delay",
          name: "拖延开工税",
          desc: "当天学习任务首次开工晚于21:00",
          rule: "每天/3积分",
          points: 3,
          cadence: "每天"
        },
        {
          id: "disc_shortvideo",
          name: "短视频税",
          desc: "抖音/小红书，每天使用时间加起来大于3小时",
          rule: "每30min/2积分",
          points: 2,
          cadence: "每30min"
        },
        {
          id: "disc_latewake",
          name: "迟起罚税",
          desc: "晚于8:30起床",
          rule: "每次/2积分",
          points: 2,
          cadence: "每次"
        },
        {
          id: "disc_latenight",
          name: "熬夜罚税",
          desc: "晚于0:00入睡",
          rule: "每次/2积分",
          points: 2,
          cadence: "每次"
        }
      ]
    }
  ]
};

const FALLBACK_EVENT_DATA = {
  version: "1.0",
  type: "event",
  categories: [
    {
      id: "special",
      name: "活动",
      items: [
        {
          id: "event_default",
          name: "特殊活动",
          desc: "自定义活动",
          rule: "按需填写",
          points: 1
        }
      ]
    }
  ]
};

const STORAGE_KEY = "litepoints_entries_v1";
const CATALOG_KEY = "litepoints_catalog_v1";
const WEEKDAY_LABELS = ["一", "二", "三", "四", "五", "六", "日"];
const WEEKDAY_FULL = ["日", "一", "二", "三", "四", "五", "六"];

const state = {
  scoreData: null,
  taxData: null,
  eventData: null,
  activeType: "score",
  activeCategoryId: null,
  activeItemId: null,
  entries: [],
  currentMonth: null,
  selectedDate: null,
  viewMode: "month",
  editorType: "score"
};

const elements = {
  dataStatus: document.getElementById("data-status"),
  toggleButtons: document.querySelectorAll(".toggle-btn"),
  categoryList: document.getElementById("category-list"),
  itemList: document.getElementById("item-list"),
  selectedItem: document.getElementById("selected-item"),
  multiplierInput: document.getElementById("multiplier"),
  dateInput: document.getElementById("entry-date"),
  addButton: document.getElementById("add-entry"),
  hint: document.getElementById("form-hint"),
  calendarGrid: document.getElementById("calendar-grid"),
  weekView: document.getElementById("week-view"),
  weekGrid: document.getElementById("week-grid"),
  weekCategoryList: document.getElementById("week-category-list"),
  monthLabel: document.getElementById("month-label"),
  prevMonth: document.getElementById("prev-month"),
  nextMonth: document.getElementById("next-month"),
  viewToggle: document.querySelector(".view-toggle"),
  viewButtons: document.querySelectorAll(".view-btn"),
  selectedDateTitle: document.getElementById("selected-date-title"),
  daySummary: document.getElementById("day-summary"),
  weekSummary: document.getElementById("week-summary"),
  weekSummaryTitle: document.getElementById("week-summary-title"),
  entryList: document.getElementById("entry-list"),
  openEditor: document.getElementById("open-editor"),
  editorModal: document.getElementById("editor-modal"),
  closeEditor: document.getElementById("close-editor"),
  editorButtons: document.querySelectorAll(".editor-btn"),
  editorCategories: document.getElementById("editor-categories"),
  addCategoryButton: document.getElementById("add-category")
};

function toDateString(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function parseDate(dateStr) {
  const [year, month, day] = dateStr.split("-").map(Number);
  return new Date(year, month - 1, day);
}

function roundPoints(value) {
  return Math.round(value * 100) / 100;
}

function formatPoints(value) {
  const safe = roundPoints(value);
  return Number.isInteger(safe) ? String(safe) : String(safe);
}

function setHint(message, tone) {
  elements.hint.textContent = message || "";
  elements.hint.classList.remove("ok", "warn");
  if (tone) {
    elements.hint.classList.add(tone);
  }
}

function safeId() {
  if (typeof crypto !== "undefined" && typeof crypto.randomUUID === "function") {
    return crypto.randomUUID();
  }
  return `id_${Date.now()}_${Math.random().toString(16).slice(2)}`;
}

async function loadJson(url, fallback) {
  try {
    const response = await fetch(url, { cache: "no-store" });
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    return fallback;
  }
}

function loadEntries() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return [];
    }
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    return [];
  }
}

function saveEntries() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state.entries));
  } catch (error) {
    setHint("本地存储不可用，刷新后数据可能丢失。", "warn");
  }
}

function loadCatalog() {
  try {
    const raw = localStorage.getItem(CATALOG_KEY);
    if (!raw) {
      return null;
    }
    const parsed = JSON.parse(raw);
    return parsed && typeof parsed === "object" ? parsed : null;
  } catch (error) {
    return null;
  }
}

function saveCatalog() {
  try {
    const payload = {
      score: state.scoreData,
      tax: state.taxData,
      event: state.eventData
    };
    localStorage.setItem(CATALOG_KEY, JSON.stringify(payload));
  } catch (error) {
    setHint("本地存储不可用，刷新后自定义配置可能丢失。", "warn");
  }
}

function getDataByType(type) {
  if (type === "score") {
    return state.scoreData;
  }
  if (type === "tax") {
    return state.taxData;
  }
  if (type === "event") {
    return state.eventData;
  }
  return null;
}

function getActiveData() {
  return getDataByType(state.activeType);
}

function getActiveCategory() {
  const data = getActiveData();
  if (!data || !data.categories) {
    return null;
  }
  return data.categories.find((category) => category.id === state.activeCategoryId) || null;
}

function getActiveItem() {
  const category = getActiveCategory();
  if (!category || !Array.isArray(category.items)) {
    return null;
  }
  return category.items.find((item) => item.id === state.activeItemId) || null;
}

function ensureActiveSelection() {
  const data = getActiveData();
  if (!data || !Array.isArray(data.categories) || data.categories.length === 0) {
    state.activeCategoryId = null;
    state.activeItemId = null;
    return;
  }
  if (!data.categories.some((category) => category.id === state.activeCategoryId)) {
    state.activeCategoryId = data.categories[0].id;
    state.activeItemId = null;
  }
  const activeCategory = getActiveCategory();
  if (!activeCategory || !activeCategory.items.some((item) => item.id === state.activeItemId)) {
    state.activeItemId = null;
  }
}

function renderCategories() {
  const data = getActiveData();
  if (!data) {
    return;
  }
  ensureActiveSelection();

  elements.categoryList.innerHTML = "";
  if (!data.categories || data.categories.length === 0) {
    elements.categoryList.innerHTML = `<div class="item-meta">暂无大类，请在管理选项中添加。</div>`;
    return;
  }
  data.categories.forEach((category) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "chip-btn";
    button.textContent = category.name;
    if (category.id === state.activeCategoryId) {
      button.classList.add("active");
    }
    button.addEventListener("click", () => {
      state.activeCategoryId = category.id;
      state.activeItemId = null;
      renderCategories();
      renderItems();
      renderSelectedItem();
    });
    elements.categoryList.appendChild(button);
  });
}

function renderItems() {
  const category = getActiveCategory();
  elements.itemList.innerHTML = "";
  if (!category) {
    elements.itemList.innerHTML = `<div class="item-meta">暂无条目，请先选择或添加大类。</div>`;
    return;
  }
  if (!category.items || category.items.length === 0) {
    elements.itemList.innerHTML = `<div class="item-meta">暂无条目，请在管理选项中添加。</div>`;
    return;
  }
  category.items.forEach((item) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "item-btn";
    if (item.id === state.activeItemId) {
      button.classList.add("active");
    }

    const title = document.createElement("div");
    title.className = "item-title";
    title.textContent = item.name;

    const meta = document.createElement("div");
    meta.className = "item-meta";
    meta.textContent = `${formatPoints(item.points)} 积分 · ${item.desc || ""}`;

    const rule = document.createElement("div");
    rule.className = "item-meta";
    rule.textContent = item.rule || item.cadence || "";

    button.appendChild(title);
    button.appendChild(meta);
    if (rule.textContent) {
      button.appendChild(rule);
    }
    button.addEventListener("click", () => {
      state.activeItemId = item.id;
      renderItems();
      renderSelectedItem();
    });
    elements.itemList.appendChild(button);
  });
}

function renderSelectedItem() {
  const item = getActiveItem();
  const category = getActiveCategory();
  if (!item || !category) {
    elements.selectedItem.innerHTML = `
      <div class="selected-title">尚未选择条目</div>
      <div class="selected-meta">请先选择左侧条目</div>
    `;
    return;
  }

  const typeLabel =
    state.activeType === "score" ? "得分" : state.activeType === "tax" ? "税收" : "活动";
  const cadence = item.cadence ? ` · ${item.cadence}` : "";
  const extra = [item.desc, item.rule].filter(Boolean).join(" · ");

  elements.selectedItem.innerHTML = `
    <div class="selected-title">${item.name}</div>
    <div class="selected-meta">${category.name} · ${typeLabel} · 基础 ${formatPoints(item.points)} 积分${cadence}</div>
    <div class="selected-meta">${extra}</div>
  `;
}

function setActiveType(type) {
  if (state.activeType === type) {
    return;
  }
  state.activeType = type;
  state.activeCategoryId = null;
  state.activeItemId = null;
  elements.toggleButtons.forEach((button) => {
    const active = button.dataset.type === type;
    button.classList.toggle("active", active);
    button.setAttribute("aria-selected", active ? "true" : "false");
  });
  renderCategories();
  renderItems();
  renderSelectedItem();
}

function getTotalsForDate(dateStr) {
  const dayEntries = state.entries.filter((entry) => entry.date === dateStr);
  let score = 0;
  let tax = 0;
  dayEntries.forEach((entry) => {
    if (entry.type === "score" || entry.type === "event") {
      score += entry.total;
    } else {
      tax += entry.total;
    }
  });
  return {
    score: roundPoints(score),
    tax: roundPoints(tax),
    net: roundPoints(score - tax)
  };
}

function getWeekRange(dateStr) {
  const date = parseDate(dateStr);
  const dayIndex = (date.getDay() + 6) % 7;
  const start = new Date(date);
  start.setDate(date.getDate() - dayIndex);
  const end = new Date(start);
  end.setDate(start.getDate() + 6);
  return { start, end };
}

function getTotalsForRange(startDate, endDate) {
  let score = 0;
  let tax = 0;
  state.entries.forEach((entry) => {
    const entryDate = parseDate(entry.date);
    if (entryDate >= startDate && entryDate <= endDate) {
      if (entry.type === "score" || entry.type === "event") {
        score += entry.total;
      } else {
        tax += entry.total;
      }
    }
  });
  return {
    score: roundPoints(score),
    tax: roundPoints(tax),
    net: roundPoints(score - tax)
  };
}

function renderSummary(container, totals) {
  container.innerHTML = `
    <div class="summary-card">
      <div class="summary-label">得分</div>
      <div class="summary-value">+${formatPoints(totals.score)}</div>
    </div>
    <div class="summary-card">
      <div class="summary-label">税收</div>
      <div class="summary-value">-${formatPoints(totals.tax)}</div>
    </div>
    <div class="summary-card">
      <div class="summary-label">结余</div>
      <div class="summary-value">${totals.net >= 0 ? "+" : ""}${formatPoints(totals.net)}</div>
    </div>
  `;
}

function renderEntryList(dateStr) {
  const entries = state.entries
    .filter((entry) => entry.date === dateStr)
    .sort((a, b) => a.createdAt - b.createdAt);

  elements.entryList.innerHTML = "";
  if (entries.length === 0) {
    elements.entryList.innerHTML = `<div class="item-meta">当天暂无记录。</div>`;
    return;
  }

  entries.forEach((entry) => {
    const card = document.createElement("div");
    card.className = "entry-card";

    const row = document.createElement("div");
    row.className = "entry-row";

    const title = document.createElement("div");
    title.className = "entry-title";
    const tagClass =
      entry.type === "tax" ? "entry-tag tax" : entry.type === "event" ? "entry-tag event" : "entry-tag";
    const typeLabel = entry.type === "tax" ? "税收" : entry.type === "event" ? "活动" : "得分";
    title.innerHTML = `${entry.itemName}<span class="${tagClass}">${typeLabel}</span>`;

    const removeButton = document.createElement("button");
    removeButton.type = "button";
    removeButton.className = "entry-remove";
    removeButton.textContent = "撤回";
    removeButton.addEventListener("click", () => {
      state.entries = state.entries.filter((item) => item.id !== entry.id);
      saveEntries();
      renderAll();
    });

    row.appendChild(title);
    row.appendChild(removeButton);

    const meta = document.createElement("div");
    meta.className = "entry-meta";
    const signedTotal = entry.type === "tax" ? -entry.total : entry.total;
    meta.textContent = `${entry.categoryName} · 倍数 ${formatPoints(entry.multiplier)} · 合计 ${signedTotal >= 0 ? "+" : ""}${formatPoints(signedTotal)}`;

    const detail = document.createElement("div");
    detail.className = "entry-meta";
    detail.textContent = [entry.desc, entry.rule].filter(Boolean).join(" · ");

    card.appendChild(row);
    card.appendChild(meta);
    if (detail.textContent) {
      card.appendChild(detail);
    }
    elements.entryList.appendChild(card);
  });
}

function renderCalendar() {
  const year = state.currentMonth.getFullYear();
  const month = state.currentMonth.getMonth();
  elements.monthLabel.textContent = `${year}年${month + 1}月`;
  setViewVisibility(false);
  elements.prevMonth.textContent = "← 上个月";
  elements.nextMonth.textContent = "下个月 →";

  elements.calendarGrid.innerHTML = "";
  WEEKDAY_LABELS.forEach((label) => {
    const day = document.createElement("div");
    day.className = "weekday";
    day.textContent = label;
    elements.calendarGrid.appendChild(day);
  });

  const firstDay = new Date(year, month, 1);
  const startOffset = (firstDay.getDay() + 6) % 7;
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const totalCells = Math.ceil((startOffset + daysInMonth) / 7) * 7;
  const todayStr = toDateString(new Date());

  for (let index = 0; index < totalCells; index += 1) {
    if (index < startOffset || index >= startOffset + daysInMonth) {
      const empty = document.createElement("div");
      empty.className = "calendar-cell empty";
      elements.calendarGrid.appendChild(empty);
      continue;
    }
    const dayNumber = index - startOffset + 1;
    const date = new Date(year, month, dayNumber);
    const dateStr = toDateString(date);
    const totals = getTotalsForDate(dateStr);

    const button = document.createElement("button");
    button.type = "button";
    button.className = "calendar-cell";
    button.dataset.date = dateStr;
    if (dateStr === state.selectedDate) {
      button.classList.add("selected");
    }
    if (dateStr === todayStr) {
      button.classList.add("today");
    }
    button.setAttribute(
      "aria-label",
      `${dateStr} 得分 ${formatPoints(totals.score)} 税收 ${formatPoints(totals.tax)}`
    );
    button.innerHTML = `
      <div class="day-number">${dayNumber}</div>
      <div class="day-totals">
        <div class="plus">+${formatPoints(totals.score)}</div>
        <div class="minus">-${formatPoints(totals.tax)}</div>
      </div>
    `;
    button.addEventListener("click", () => {
      state.selectedDate = dateStr;
      elements.dateInput.value = dateStr;
      renderAll();
    });
    elements.calendarGrid.appendChild(button);
  }
}

function setViewVisibility(isWeek) {
  if (isWeek) {
    elements.calendarGrid.setAttribute("hidden", "true");
    elements.weekView.removeAttribute("hidden");
  } else {
    elements.weekView.setAttribute("hidden", "true");
    elements.calendarGrid.removeAttribute("hidden");
  }
}

function getCategoryTotalsForRange(startDate, endDate, type) {
  const data = getDataByType(type);
  if (!data || !Array.isArray(data.categories)) {
    return [];
  }
  const totals = data.categories.map((category) => ({
    id: category.id,
    name: category.name,
    total: 0
  }));
  const totalMap = new Map(totals.map((item) => [item.id, item]));
  state.entries.forEach((entry) => {
    if (entry.type !== type) {
      return;
    }
    const entryDate = parseDate(entry.date);
    if (entryDate >= startDate && entryDate <= endDate) {
      const target = totalMap.get(entry.categoryId);
      if (target) {
        target.total += entry.total;
      }
    }
  });
  totals.forEach((item) => {
    item.total = roundPoints(item.total);
  });
  return totals;
}

function renderWeekCategorySummary(startDate, endDate) {
  const totals = getCategoryTotalsForRange(startDate, endDate, "score");
  elements.weekCategoryList.innerHTML = "";
  if (totals.length === 0) {
    elements.weekCategoryList.innerHTML = `<div class="item-meta">暂无得分大类。</div>`;
    return;
  }
  totals.forEach((category) => {
    const card = document.createElement("div");
    card.className = "week-category-card";
    if (!category.total) {
      card.classList.add("is-zero");
    }

    const name = document.createElement("div");
    name.className = "week-category-name";
    name.textContent = category.name;

    const value = document.createElement("div");
    value.className = "week-category-value";
    value.textContent = `+${formatPoints(category.total)}`;

    card.appendChild(name);
    card.appendChild(value);
    elements.weekCategoryList.appendChild(card);
  });
}

function renderWeekView() {
  if (!state.selectedDate) {
    return;
  }
  const range = getWeekRange(state.selectedDate);
  const todayStr = toDateString(new Date());
  elements.monthLabel.textContent = `${toDateString(range.start)} ~ ${toDateString(range.end)}`;
  setViewVisibility(true);
  elements.prevMonth.textContent = "← 上周";
  elements.nextMonth.textContent = "下周 →";

  elements.weekGrid.innerHTML = "";
  for (let index = 0; index < 7; index += 1) {
    const date = new Date(range.start);
    date.setDate(range.start.getDate() + index);
    const dateStr = toDateString(date);
    const totals = getTotalsForDate(dateStr);

    const button = document.createElement("button");
    button.type = "button";
    button.className = "week-cell";
    if (dateStr === state.selectedDate) {
      button.classList.add("selected");
    }
    if (dateStr === todayStr) {
      button.classList.add("today");
    }
    button.setAttribute(
      "aria-label",
      `${dateStr} 得分 ${formatPoints(totals.score)} 税收 ${formatPoints(totals.tax)}`
    );
    button.innerHTML = `
      <div class="week-day">周${WEEKDAY_LABELS[index]}</div>
      <div class="week-date">${date.getMonth() + 1}.${date.getDate()}</div>
      <div class="day-totals">
        <div class="plus">+${formatPoints(totals.score)}</div>
        <div class="minus">-${formatPoints(totals.tax)}</div>
      </div>
    `;
    button.addEventListener("click", () => {
      state.selectedDate = dateStr;
      state.currentMonth = new Date(date.getFullYear(), date.getMonth(), 1);
      renderAll();
    });
    elements.weekGrid.appendChild(button);
  }

  renderWeekCategorySummary(range.start, range.end);
}

function setViewMode(mode) {
  if (mode !== "month" && mode !== "week") {
    return;
  }
  if (state.viewMode === mode) {
    return;
  }
  state.viewMode = mode;
  elements.viewButtons.forEach((button) => {
    const active = button.dataset.view === mode;
    button.classList.toggle("active", active);
    button.setAttribute("aria-selected", active ? "true" : "false");
  });
  renderAll();
}

function renderDetails() {
  if (!state.selectedDate) {
    return;
  }
  if (elements.dateInput.value !== state.selectedDate) {
    elements.dateInput.value = state.selectedDate;
  }
  const dateObj = parseDate(state.selectedDate);
  const weekday = WEEKDAY_FULL[dateObj.getDay()];
  const todayStr = toDateString(new Date());
  const todayLabel = state.selectedDate === todayStr ? " · 今天" : "";
  elements.selectedDateTitle.textContent = `${state.selectedDate} 周${weekday}${todayLabel}`;

  const dayTotals = getTotalsForDate(state.selectedDate);
  renderSummary(elements.daySummary, dayTotals);

  const range = getWeekRange(state.selectedDate);
  const weekTotals = getTotalsForRange(range.start, range.end);
  const rangeLabel = `${toDateString(range.start)} ~ ${toDateString(range.end)}`;
  elements.weekSummaryTitle.textContent = `本周统计 · ${rangeLabel}`;
  renderSummary(elements.weekSummary, weekTotals);

  renderEntryList(state.selectedDate);
}

function renderAll() {
  renderCategories();
  renderItems();
  renderSelectedItem();
  if (state.viewMode === "week") {
    renderWeekView();
  } else {
    renderCalendar();
  }
  renderDetails();
}

function syncEntryCategoryName(type, categoryId, name) {
  let updated = false;
  state.entries.forEach((entry) => {
    if (entry.type === type && entry.categoryId === categoryId) {
      entry.categoryName = name;
      updated = true;
    }
  });
  if (updated) {
    saveEntries();
  }
}

function syncEntryItemName(type, itemId, name) {
  let updated = false;
  state.entries.forEach((entry) => {
    if (entry.type === type && entry.itemId === itemId) {
      entry.itemName = name;
      updated = true;
    }
  });
  if (updated) {
    saveEntries();
  }
}

function setEditorType(type) {
  if (state.editorType === type) {
    return;
  }
  state.editorType = type;
  elements.editorButtons.forEach((button) => {
    const active = button.dataset.type === type;
    button.classList.toggle("active", active);
    button.setAttribute("aria-selected", active ? "true" : "false");
  });
  renderEditor();
}

function createEditorField(labelText, field, value, options) {
  const label = document.createElement("label");
  label.className = "editor-field";
  const text = document.createElement("span");
  text.textContent = labelText;

  const input = document.createElement("input");
  input.className = "editor-input";
  input.type = options.type || "text";
  if (options.step) {
    input.step = options.step;
  }
  if (options.min !== undefined) {
    input.min = options.min;
  }
  input.value = value ?? "";
  input.dataset.field = field;
  input.dataset.type = options.dataType;
  input.dataset.categoryId = options.categoryId;
  if (options.itemId) {
    input.dataset.itemId = options.itemId;
  }

  label.appendChild(text);
  label.appendChild(input);
  return label;
}

function renderEditor() {
  const data = getDataByType(state.editorType);
  elements.editorCategories.innerHTML = "";
  if (!data || !Array.isArray(data.categories) || data.categories.length === 0) {
    elements.editorCategories.innerHTML = `<div class="item-meta">暂无大类，请先添加。</div>`;
    return;
  }

  data.categories.forEach((category) => {
    const card = document.createElement("div");
    card.className = "editor-category";

    const row = document.createElement("div");
    row.className = "editor-row";
    row.appendChild(
      createEditorField("大类名称", "name", category.name, {
        dataType: state.editorType,
        categoryId: category.id
      })
    );

    const removeCategoryButton = document.createElement("button");
    removeCategoryButton.type = "button";
    removeCategoryButton.className = "editor-remove";
    removeCategoryButton.textContent = "删除大类";
    removeCategoryButton.dataset.action = "remove-category";
    removeCategoryButton.dataset.type = state.editorType;
    removeCategoryButton.dataset.categoryId = category.id;
    row.appendChild(removeCategoryButton);
    card.appendChild(row);

    const itemsContainer = document.createElement("div");
    itemsContainer.className = "editor-items";

    if (!category.items || category.items.length === 0) {
      const empty = document.createElement("div");
      empty.className = "item-meta";
      empty.textContent = "暂无条目，请添加。";
      itemsContainer.appendChild(empty);
    } else {
      category.items.forEach((item) => {
        const itemCard = document.createElement("div");
        itemCard.className = "editor-item";

        const itemGrid = document.createElement("div");
        itemGrid.className = "editor-item-grid";
        itemGrid.appendChild(
          createEditorField("条目名称", "name", item.name, {
            dataType: state.editorType,
            categoryId: category.id,
            itemId: item.id
          })
        );
        itemGrid.appendChild(
          createEditorField("积分", "points", item.points, {
            dataType: state.editorType,
            categoryId: category.id,
            itemId: item.id,
            type: "number",
            step: "0.5",
            min: "0"
          })
        );
        itemGrid.appendChild(
          createEditorField("说明", "desc", item.desc || "", {
            dataType: state.editorType,
            categoryId: category.id,
            itemId: item.id
          })
        );
        itemGrid.appendChild(
          createEditorField("规则", "rule", item.rule || "", {
            dataType: state.editorType,
            categoryId: category.id,
            itemId: item.id
          })
        );
        if (state.editorType === "tax") {
          itemGrid.appendChild(
            createEditorField("频次", "cadence", item.cadence || "", {
              dataType: state.editorType,
              categoryId: category.id,
              itemId: item.id
            })
          );
        }
        itemCard.appendChild(itemGrid);

        const removeItemButton = document.createElement("button");
        removeItemButton.type = "button";
        removeItemButton.className = "editor-remove";
        removeItemButton.textContent = "删除条目";
        removeItemButton.dataset.action = "remove-item";
        removeItemButton.dataset.type = state.editorType;
        removeItemButton.dataset.categoryId = category.id;
        removeItemButton.dataset.itemId = item.id;
        itemCard.appendChild(removeItemButton);

        itemsContainer.appendChild(itemCard);
      });
    }

    card.appendChild(itemsContainer);

    const addItemButton = document.createElement("button");
    addItemButton.type = "button";
    addItemButton.className = "ghost-btn editor-add";
    addItemButton.textContent = "+ 添加条目";
    addItemButton.dataset.action = "add-item";
    addItemButton.dataset.type = state.editorType;
    addItemButton.dataset.categoryId = category.id;
    card.appendChild(addItemButton);

    elements.editorCategories.appendChild(card);
  });
}

function openEditor() {
  state.editorType = state.activeType;
  elements.editorButtons.forEach((button) => {
    const active = button.dataset.type === state.editorType;
    button.classList.toggle("active", active);
    button.setAttribute("aria-selected", active ? "true" : "false");
  });
  renderEditor();
  elements.editorModal.classList.add("open");
  elements.editorModal.setAttribute("aria-hidden", "false");
}

function closeEditor() {
  elements.editorModal.classList.remove("open");
  elements.editorModal.setAttribute("aria-hidden", "true");
}

function handleEditorInput(event) {
  const target = event.target;
  if (!target.classList.contains("editor-input")) {
    return;
  }
  const { type, categoryId, itemId, field } = target.dataset;
  if (!type || !categoryId || !field) {
    return;
  }
  const data = getDataByType(type);
  if (!data || !Array.isArray(data.categories)) {
    return;
  }
  const category = data.categories.find((item) => item.id === categoryId);
  if (!category) {
    return;
  }

  if (!itemId) {
    if (field === "name") {
      category.name = target.value.trim() || "未命名";
      syncEntryCategoryName(type, categoryId, category.name);
    }
    saveCatalog();
  } else if (category.items) {
    const item = category.items.find((entry) => entry.id === itemId);
    if (!item) {
      return;
    }
    if (field === "points") {
      const parsed = parseFloat(target.value);
      item.points = Number.isFinite(parsed) ? parsed : 0;
    } else {
      item[field] = target.value.trim();
      if (field === "name") {
        item.name = item[field] || "未命名";
        syncEntryItemName(type, itemId, item.name);
      }
    }
    saveCatalog();
  }

  if (type === state.activeType) {
    renderCategories();
    renderItems();
    renderSelectedItem();
  }
  if (state.viewMode === "week") {
    renderWeekView();
  }
}

function handleEditorAction(event) {
  const button = event.target.closest("button[data-action]");
  if (!button) {
    return;
  }
  const action = button.dataset.action;
  const type = button.dataset.type || state.editorType;
  const data = getDataByType(type);
  if (!data) {
    return;
  }
  if (!Array.isArray(data.categories)) {
    data.categories = [];
  }

  if (action === "add-category") {
    const category = {
      id: safeId(),
      name: "新大类",
      items: []
    };
    data.categories.push(category);
    saveCatalog();
    renderEditor();
    if (type === state.activeType) {
      state.activeCategoryId = category.id;
      state.activeItemId = null;
      renderAll();
    } else if (state.viewMode === "week" && type === "score") {
      renderWeekView();
    }
    return;
  }

  if (action === "remove-category") {
    const { categoryId } = button.dataset;
    data.categories = data.categories.filter((category) => category.id !== categoryId);
    saveCatalog();
    if (type === state.activeType) {
      if (state.activeCategoryId === categoryId) {
        state.activeCategoryId = null;
        state.activeItemId = null;
      }
      renderAll();
    } else if (state.viewMode === "week" && type === "score") {
      renderWeekView();
    }
    renderEditor();
    return;
  }

  if (action === "add-item") {
    const { categoryId } = button.dataset;
    const category = data.categories.find((item) => item.id === categoryId);
    if (!category) {
      return;
    }
    if (!Array.isArray(category.items)) {
      category.items = [];
    }
    const newItem = {
      id: safeId(),
      name: "新条目",
      desc: "",
      rule: "",
      points: 1
    };
    if (type === "tax") {
      newItem.cadence = "";
    }
    category.items.push(newItem);
    saveCatalog();
    renderEditor();
    if (type === state.activeType) {
      renderItems();
      renderSelectedItem();
    }
    return;
  }

  if (action === "remove-item") {
    const { categoryId, itemId } = button.dataset;
    const category = data.categories.find((item) => item.id === categoryId);
    if (!category || !Array.isArray(category.items)) {
      return;
    }
    category.items = category.items.filter((item) => item.id !== itemId);
    saveCatalog();
    if (type === state.activeType && state.activeItemId === itemId) {
      state.activeItemId = null;
      renderSelectedItem();
    }
    renderEditor();
    renderItems();
    return;
  }
}

function addEntry() {
  const item = getActiveItem();
  const category = getActiveCategory();
  if (!item || !category) {
    setHint("请先选择一个条目。", "warn");
    return;
  }

  const multiplier = parseFloat(elements.multiplierInput.value);
  if (!multiplier || multiplier <= 0) {
    setHint("倍数需要大于 0。", "warn");
    return;
  }

  const dateStr = elements.dateInput.value;
  if (!dateStr) {
    setHint("请选择日期。", "warn");
    return;
  }

  const total = roundPoints(item.points * multiplier);
  const entry = {
    id: safeId(),
    type: state.activeType,
    categoryId: category.id,
    categoryName: category.name,
    itemId: item.id,
    itemName: item.name,
    desc: item.desc || "",
    rule: item.rule || "",
    points: item.points,
    multiplier,
    total,
    date: dateStr,
    createdAt: Date.now()
  };

  state.entries.push(entry);
  saveEntries();
  setHint("已记录本次积分。", "ok");

  const entryDate = parseDate(dateStr);
  state.currentMonth = new Date(entryDate.getFullYear(), entryDate.getMonth(), 1);
  state.selectedDate = dateStr;
  renderAll();
}

function shiftPeriod(offset) {
  if (state.viewMode === "week") {
    const selected = parseDate(state.selectedDate);
    const next = new Date(selected);
    next.setDate(selected.getDate() + offset * 7);
    state.selectedDate = toDateString(next);
    state.currentMonth = new Date(next.getFullYear(), next.getMonth(), 1);
    renderAll();
    return;
  }

  const newMonth = new Date(state.currentMonth);
  newMonth.setMonth(newMonth.getMonth() + offset);
  state.currentMonth = new Date(newMonth.getFullYear(), newMonth.getMonth(), 1);
  const selected = parseDate(state.selectedDate);
  if (
    selected.getFullYear() !== state.currentMonth.getFullYear() ||
    selected.getMonth() !== state.currentMonth.getMonth()
  ) {
    state.selectedDate = toDateString(state.currentMonth);
  }
  renderAll();
}

async function init() {
  const [scoreData, taxData, eventData] = await Promise.all([
    loadJson("data/score_items.json", FALLBACK_SCORE_DATA),
    loadJson("data/tax_items.json", FALLBACK_TAX_DATA),
    loadJson("data/event_items.json", FALLBACK_EVENT_DATA)
  ]);
  const catalog = loadCatalog();
  state.scoreData = (catalog && catalog.score) || scoreData;
  state.taxData = (catalog && catalog.tax) || taxData;
  state.eventData = (catalog && catalog.event) || eventData;
  state.entries = loadEntries();

  const usingFallback = scoreData === FALLBACK_SCORE_DATA || taxData === FALLBACK_TAX_DATA;
  const hasCustom = !!(catalog && (catalog.score || catalog.tax || catalog.event));
  const dataSource = hasCustom ? "本地自定义数据" : usingFallback ? "内置数据" : "JSON 数据";
  elements.dataStatus.textContent = `已载入${dataSource} · 本地存储已启用`;

  const today = new Date();
  state.currentMonth = new Date(today.getFullYear(), today.getMonth(), 1);
  state.selectedDate = toDateString(today);
  elements.dateInput.value = state.selectedDate;

  elements.toggleButtons.forEach((button) => {
    button.addEventListener("click", () => setActiveType(button.dataset.type));
  });
  elements.viewButtons.forEach((button) => {
    button.addEventListener("click", () => setViewMode(button.dataset.view));
  });
  if (elements.viewToggle) {
    elements.viewToggle.addEventListener("click", (event) => {
      const button = event.target.closest(".view-btn");
      if (!button) {
        return;
      }
      setViewMode(button.dataset.view);
    });
  }
  elements.addButton.addEventListener("click", addEntry);
  elements.prevMonth.addEventListener("click", () => shiftPeriod(-1));
  elements.nextMonth.addEventListener("click", () => shiftPeriod(1));
  elements.openEditor.addEventListener("click", openEditor);
  elements.closeEditor.addEventListener("click", closeEditor);
  elements.editorButtons.forEach((button) => {
    button.addEventListener("click", () => setEditorType(button.dataset.type));
  });
  elements.editorCategories.addEventListener("change", handleEditorInput);
  elements.editorCategories.addEventListener("click", handleEditorAction);
  elements.addCategoryButton.dataset.action = "add-category";
  elements.addCategoryButton.addEventListener("click", handleEditorAction);
  elements.editorModal.addEventListener("click", (event) => {
    if (event.target.dataset.action === "close-editor") {
      closeEditor();
    }
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && elements.editorModal.classList.contains("open")) {
      closeEditor();
    }
  });

  renderAll();
}

init();
