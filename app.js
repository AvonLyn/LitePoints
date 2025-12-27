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
          points: 1,
          direction: "score"
        }
      ]
    }
  ]
};

const STORAGE_KEY = "litepoints_entries_v1";
const CATALOG_KEY = "litepoints_catalog_v1";
const PEOPLE_KEY = "litepoints_people_v1";
const ACTIVE_PERSON_KEY = "litepoints_active_person_v1";
const BACKUP_DB_NAME = "litepoints_backup_db";
const BACKUP_DB_STORE = "handles";
const BACKUP_DB_KEY = "backup_directory";
const BACKUP_PREFIX = "litepoints_backup";
const BACKUP_LIMIT = 3;
const BACKUP_VERSION = "1.0";
const WEEKDAY_LABELS = ["一", "二", "三", "四", "五", "六", "日"];
const WEEKDAY_FULL = ["日", "一", "二", "三", "四", "五", "六"];

const state = {
  baseScoreData: null,
  baseTaxData: null,
  baseEventData: null,
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
  editorType: "score",
  people: [],
  activePersonId: null,
  usingFallbackData: false,
  weekCategorySelection: null,
  backupDirectoryHandle: null,
  backupPermission: "unknown",
  backupIndex: null,
  autoBackupQueue: 0,
  autoBackupRunning: false,
  suspendAutoBackup: false,
  yearRange: null,
  yearRangeMode: "year"
};

const elements = {
  dataStatus: document.getElementById("data-status"),
  personSelect: document.getElementById("person-select"),
  managePeople: document.getElementById("manage-people"),
  backupFolderButton: document.getElementById("backup-folder"),
  backupExportButton: document.getElementById("backup-export"),
  backupImportButton: document.getElementById("backup-import"),
  backupFileInput: document.getElementById("backup-file-input"),
  backupStatus: document.getElementById("backup-status"),
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
  weekScoreCategoryList: document.getElementById("week-score-category-list"),
  weekTaxCategoryList: document.getElementById("week-tax-category-list"),
  monthLabel: document.getElementById("month-label"),
  prevMonth: document.getElementById("prev-month"),
  nextMonth: document.getElementById("next-month"),
  viewToggle: document.querySelector(".view-toggle"),
  viewButtons: document.querySelectorAll(".view-btn"),
  monthSection: document.getElementById("month-section"),
  weekSection: document.getElementById("week-section"),
  daySection: document.getElementById("day-section"),
  openYearPage: document.getElementById("open-year-page"),
  openWeekPage: document.getElementById("open-week-page"),
  yearPage: document.getElementById("year-page"),
  yearPageClose: document.getElementById("year-page-close"),
  yearMonthList: document.getElementById("year-month-list"),
  weekPage: document.getElementById("week-page"),
  weekPageClose: document.getElementById("week-page-close"),
  weekPagePrev: document.getElementById("week-page-prev"),
  weekPageNext: document.getElementById("week-page-next"),
  weekPageToday: document.getElementById("week-page-today"),
  weekPageSummaryTitle: document.getElementById("week-page-summary-title"),
  weekPageSummary: document.getElementById("week-page-summary"),
  weekDayList: document.getElementById("week-day-list"),
  weekPageScoreCategoryList: document.getElementById("week-page-score-category-list"),
  weekPageTaxCategoryList: document.getElementById("week-page-tax-category-list"),
  weekPageDetailTitle: document.getElementById("week-page-detail-title"),
  weekPageDetailList: document.getElementById("week-page-detail-list"),
  yearSummaryTitle: document.getElementById("year-summary-title"),
  yearSummary: document.getElementById("year-summary"),
  yearScoreCategoryList: document.getElementById("year-score-category-list"),
  yearTaxCategoryList: document.getElementById("year-tax-category-list"),
  yearRangeStart: document.getElementById("year-range-start"),
  yearRangeEnd: document.getElementById("year-range-end"),
  yearRangeApply: document.getElementById("year-range-apply"),
  yearRangeReset: document.getElementById("year-range-reset"),
  monthSummaryTitle: document.getElementById("month-summary-title"),
  monthSummary: document.getElementById("month-summary"),
  monthScoreCategoryList: document.getElementById("month-score-category-list"),
  monthTaxCategoryList: document.getElementById("month-tax-category-list"),
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
  addCategoryButton: document.getElementById("add-category"),
  peopleModal: document.getElementById("people-modal"),
  closePeople: document.getElementById("close-people"),
  peopleList: document.getElementById("people-list"),
  addPersonButton: document.getElementById("add-person")
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

function formatRangeLabel(startDate, endDate) {
  return `${toDateString(startDate)} ~ ${toDateString(endDate)}`;
}

function getYearRange(dateStr) {
  const date = parseDate(dateStr);
  const start = new Date(date.getFullYear(), 0, 1);
  const end = new Date(date.getFullYear(), 11, 31);
  return { start, end };
}

function getMonthRange(baseDate) {
  const date = baseDate instanceof Date ? baseDate : parseDate(baseDate);
  const start = new Date(date.getFullYear(), date.getMonth(), 1);
  const end = new Date(date.getFullYear(), date.getMonth() + 1, 0);
  return { start, end };
}

function roundPoints(value) {
  return Math.round(value * 100) / 100;
}

function formatPoints(value) {
  const safe = roundPoints(value);
  return Number.isInteger(safe) ? String(safe) : String(safe);
}

function formatSignedValue(value, type) {
  const safe = roundPoints(Math.abs(value));
  if (!safe) {
    return "0";
  }
  const sign = type === "tax" ? "-" : "+";
  return `${sign}${formatPoints(safe)}`;
}

function getEntryEffect(entry) {
  if (!entry) {
    return "score";
  }
  if (entry.type === "tax") {
    return "tax";
  }
  if (entry.type === "score") {
    return "score";
  }
  if (entry.type === "event") {
    return entry.effect === "tax" ? "tax" : "score";
  }
  return "score";
}

function cloneData(data) {
  return JSON.parse(JSON.stringify(data));
}

function normalizeEventData(data) {
  if (!data || !Array.isArray(data.categories)) {
    return data;
  }
  data.categories.forEach((category) => {
    if (!Array.isArray(category.items)) {
      return;
    }
    category.items.forEach((item) => {
      item.direction = item.direction === "tax" ? "tax" : "score";
    });
  });
  return data;
}

function setHint(message, tone) {
  elements.hint.textContent = message || "";
  elements.hint.classList.remove("ok", "warn");
  if (tone) {
    elements.hint.classList.add(tone);
  }
}

function setBackupStatus(message, tone) {
  if (!elements.backupStatus) {
    return;
  }
  elements.backupStatus.textContent = message || "";
  elements.backupStatus.classList.remove("ok", "warn");
  if (tone) {
    elements.backupStatus.classList.add(tone);
  }
}

function openBackupDb() {
  return new Promise((resolve, reject) => {
    if (!("indexedDB" in window)) {
      reject(new Error("IndexedDB not supported"));
      return;
    }
    const request = indexedDB.open(BACKUP_DB_NAME, 1);
    request.onupgradeneeded = () => {
      const db = request.result;
      if (!db.objectStoreNames.contains(BACKUP_DB_STORE)) {
        db.createObjectStore(BACKUP_DB_STORE);
      }
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error || new Error("Failed to open DB"));
  });
}

async function loadBackupDirectoryHandle() {
  try {
    const db = await openBackupDb();
    return await new Promise((resolve) => {
      const tx = db.transaction(BACKUP_DB_STORE, "readonly");
      const store = tx.objectStore(BACKUP_DB_STORE);
      const request = store.get(BACKUP_DB_KEY);
      request.onsuccess = () => resolve(request.result || null);
      request.onerror = () => resolve(null);
      tx.oncomplete = () => db.close();
      tx.onerror = () => db.close();
    });
  } catch (error) {
    return null;
  }
}

async function saveBackupDirectoryHandle(handle) {
  try {
    const db = await openBackupDb();
    await new Promise((resolve, reject) => {
      const tx = db.transaction(BACKUP_DB_STORE, "readwrite");
      const store = tx.objectStore(BACKUP_DB_STORE);
      const request = store.put(handle, BACKUP_DB_KEY);
      request.onsuccess = () => resolve();
      request.onerror = () => reject(request.error);
      tx.oncomplete = () => db.close();
      tx.onerror = () => db.close();
    });
    return true;
  } catch (error) {
    return false;
  }
}

function supportsFileSystemAccess() {
  return typeof window.showDirectoryPicker === "function";
}

async function queryBackupPermission(handle) {
  if (!handle || typeof handle.queryPermission !== "function") {
    return "granted";
  }
  try {
    return await handle.queryPermission({ mode: "readwrite" });
  } catch (error) {
    return "denied";
  }
}

async function requestBackupPermission(handle) {
  if (!handle || typeof handle.requestPermission !== "function") {
    return "denied";
  }
  try {
    return await handle.requestPermission({ mode: "readwrite" });
  } catch (error) {
    return "denied";
  }
}

async function resolveBackupDirectoryHandle(handle) {
  if (!handle || handle.kind !== "directory") {
    return null;
  }
  if (handle.name === "user_data") {
    return handle;
  }
  try {
    return await handle.getDirectoryHandle("user_data", { create: true });
  } catch (error) {
    return handle;
  }
}

async function initializeBackup() {
  if (!elements.backupStatus) {
    return;
  }
  if (!supportsFileSystemAccess()) {
    setBackupStatus("自动备份：浏览器不支持", "warn");
    return;
  }
  let storedHandle = await loadBackupDirectoryHandle();
  if (!storedHandle) {
    setBackupStatus("自动备份：未设置", "warn");
    return;
  }
  const resolvedHandle = await resolveBackupDirectoryHandle(storedHandle);
  if (!resolvedHandle) {
    setBackupStatus("自动备份：未设置", "warn");
    return;
  }
  state.backupDirectoryHandle = resolvedHandle;
  if (resolvedHandle !== storedHandle) {
    await saveBackupDirectoryHandle(resolvedHandle);
  }
  state.backupPermission = await queryBackupPermission(resolvedHandle);
  updateBackupStatusSummary();
  if (state.backupPermission === "granted") {
    await syncBackupIndex(resolvedHandle);
  }
}

async function ensureBackupDirectory(interactive) {
  if (!supportsFileSystemAccess()) {
    setBackupStatus("自动备份：浏览器不支持", "warn");
    return null;
  }
  let handle = state.backupDirectoryHandle;
  if (!handle) {
    handle = await loadBackupDirectoryHandle();
  }
  if (!handle) {
    setBackupStatus("自动备份：未设置", "warn");
    return null;
  }

  const resolvedHandle = await resolveBackupDirectoryHandle(handle);
  if (!resolvedHandle) {
    setBackupStatus("自动备份：未设置", "warn");
    return null;
  }
  if (resolvedHandle !== handle) {
    state.backupDirectoryHandle = resolvedHandle;
    await saveBackupDirectoryHandle(resolvedHandle);
  } else {
    state.backupDirectoryHandle = handle;
  }

  let permission = await queryBackupPermission(state.backupDirectoryHandle);
  if (permission !== "granted" && interactive) {
    permission = await requestBackupPermission(state.backupDirectoryHandle);
  }
  state.backupPermission = permission;
  updateBackupStatusSummary();
  if (permission === "granted") {
    return state.backupDirectoryHandle;
  }
  return null;
}

function formatBackupTimestamp(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  return `${year}-${month}-${day} ${hours}:${minutes}`;
}

function formatBackupFileStamp(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  const ms = String(date.getMilliseconds()).padStart(3, "0");
  return `${year}${month}${day}_${hours}${minutes}${seconds}${ms}`;
}

function sanitizeFileName(value) {
  const safe = String(value || "")
    .trim()
    .replace(/[\\/:*?"<>|]/g, "_");
  return safe || "未命名";
}

function buildBackupPayload(reason) {
  const person = getActivePerson();
  return {
    type: "litepoints-backup",
    version: BACKUP_VERSION,
    exportedAt: new Date().toISOString(),
    reason,
    person: {
      id: person ? person.id : state.activePersonId,
      name: person ? person.name : "未命名"
    },
    entries: state.entries,
    catalog: {
      score: state.scoreData,
      tax: state.taxData,
      event: state.eventData
    }
  };
}

function buildBackupFileName(personName, timestamp) {
  const safeName = sanitizeFileName(personName);
  const stamp = formatBackupFileStamp(new Date(timestamp));
  return `${BACKUP_PREFIX}_${safeName}_${stamp}.json`;
}

function isBackupFileName(name) {
  return name.startsWith(BACKUP_PREFIX) && name.endsWith(".json");
}

async function readBackupMeta(fileHandle, name) {
  try {
    const file = await fileHandle.getFile();
    const text = await file.text();
    const data = JSON.parse(text);
    if (!data || data.type !== "litepoints-backup") {
      return null;
    }
    const person = data.person && typeof data.person === "object" ? data.person : {};
    const personId = typeof person.id === "string" ? person.id : null;
    const personName = typeof person.name === "string" ? person.name : "未命名";
    const parsedStamp = Date.parse(data.exportedAt);
    const stamp = Number.isFinite(parsedStamp) ? parsedStamp : file.lastModified || 0;
    return {
      name,
      stamp,
      personId,
      personName
    };
  } catch (error) {
    return null;
  }
}

async function buildBackupIndex(dirHandle) {
  const index = {
    people: {},
    syncedAt: Date.now()
  };
  try {
    for await (const [name, handle] of dirHandle.entries()) {
      if (!isBackupFileName(name)) {
        continue;
      }
      if (handle.kind !== "file") {
        continue;
      }
      const meta = await readBackupMeta(handle, name);
      if (!meta) {
        continue;
      }
      const key = meta.personId || `name:${meta.personName}`;
      if (!index.people[key]) {
        index.people[key] = {
          id: meta.personId,
          name: meta.personName,
          count: 0,
          lastStamp: 0,
          files: []
        };
      }
      const target = index.people[key];
      target.count += 1;
      target.files.push({ name: meta.name, stamp: meta.stamp });
      if (meta.stamp > target.lastStamp) {
        target.lastStamp = meta.stamp;
      }
    }
  } catch (error) {
    return index;
  }

  Object.values(index.people).forEach((info) => {
    info.files.sort((a, b) => a.stamp - b.stamp);
  });
  return index;
}

function getBackupInfo(personId) {
  if (!state.backupIndex || !state.backupIndex.people || !personId) {
    return null;
  }
  return state.backupIndex.people[personId] || null;
}

function getBackupInfoLabel(personId) {
  if (!supportsFileSystemAccess()) {
    return "备份状态：浏览器不支持";
  }
  if (!state.backupDirectoryHandle) {
    return "备份状态：未设置";
  }
  if (state.backupPermission !== "granted") {
    return "备份状态：未同步";
  }
  const info = getBackupInfo(personId);
  if (!info || info.count === 0) {
    return "备份状态：暂无";
  }
  const lastLabel = info.lastStamp ? formatBackupTimestamp(new Date(info.lastStamp)) : "未知时间";
  return `备份 ${info.count} 份 · 最近 ${lastLabel}`;
}

function syncPeopleFromBackupIndex(index) {
  if (!index || !index.people) {
    return false;
  }
  let changed = false;
  const peopleMap = new Map(state.people.map((person) => [person.id, person]));

  Object.values(index.people).forEach((info) => {
    if (!info.id) {
      return;
    }
    let person = peopleMap.get(info.id);
    if (!person) {
      person = {
        id: info.id,
        name: info.name || "未命名"
      };
      state.people.push(person);
      peopleMap.set(info.id, person);
      changed = true;
      return;
    }
    if (info.name && (!person.name || person.name === "未命名")) {
      person.name = info.name;
      changed = true;
    }
  });

  if (changed) {
    savePeople();
    renderPersonSelect();
  }
  if (!state.people.some((person) => person.id === state.activePersonId)) {
    state.activePersonId = state.people[0] ? state.people[0].id : null;
    if (state.activePersonId) {
      try {
        localStorage.setItem(ACTIVE_PERSON_KEY, state.activePersonId);
      } catch (error) {
        return changed;
      }
    }
  }
  return changed;
}

function updateBackupStatusSummary() {
  if (!elements.backupStatus) {
    return;
  }
  if (!supportsFileSystemAccess()) {
    setBackupStatus("自动备份：浏览器不支持", "warn");
    return;
  }
  if (!state.backupDirectoryHandle) {
    setBackupStatus("自动备份：未设置", "warn");
    return;
  }
  if (state.backupPermission === "prompt") {
    setBackupStatus("自动备份：待授权", "warn");
    return;
  }
  if (state.backupPermission !== "granted") {
    setBackupStatus("自动备份：未授权", "warn");
    return;
  }
  const activePerson = getActivePerson();
  const personLabel = activePerson ? activePerson.name : "当前成员";
  const info = activePerson ? getBackupInfo(activePerson.id) : null;
  if (!info || info.count === 0) {
    setBackupStatus(`自动备份：${personLabel} · 当前无备份 · 保留${BACKUP_LIMIT}份`, "ok");
    return;
  }
  const lastLabel = info.lastStamp ? formatBackupTimestamp(new Date(info.lastStamp)) : "未知时间";
  setBackupStatus(`自动备份：${personLabel} · ${info.count}份 · 最近 ${lastLabel} · 保留${BACKUP_LIMIT}份`, "ok");
}

async function syncBackupIndex(dirHandle) {
  const handle = dirHandle || (await ensureBackupDirectory(false));
  if (!handle || state.backupPermission !== "granted") {
    state.backupIndex = null;
    updateBackupStatusSummary();
    return null;
  }
  const activeBefore = state.activePersonId;
  const index = await buildBackupIndex(handle);
  state.backupIndex = index;
  const changed = syncPeopleFromBackupIndex(index);
  if (state.activePersonId && state.activePersonId !== activeBefore) {
    setActivePerson(state.activePersonId);
  }
  if (
    changed ||
    (elements.peopleModal && elements.peopleModal.classList.contains("open"))
  ) {
    renderPeopleManager();
  }
  updateBackupStatusSummary();
  return index;
}

async function listBackups(dirHandle, personId) {
  const backups = [];
  const activePerson = getActivePerson();
  const activeName = activePerson ? activePerson.name : null;
  try {
    for await (const [name, handle] of dirHandle.entries()) {
      if (!isBackupFileName(name)) {
        continue;
      }
      if (handle.kind !== "file") {
        continue;
      }
      const meta = await readBackupMeta(handle, name);
      if (!meta) {
        continue;
      }
      if (personId) {
        if (meta.personId && meta.personId !== personId) {
          continue;
        }
        if (!meta.personId && activeName && meta.personName !== activeName) {
          continue;
        }
      }
      backups.push({
        name: meta.name,
        stamp: meta.stamp
      });
    }
  } catch (error) {
    return [];
  }
  backups.sort((a, b) => a.stamp - b.stamp);
  return backups;
}

async function writeBackupFile(dirHandle, payload) {
  const personId = state.activePersonId;
  if (!personId) {
    return false;
  }
  const person = getActivePerson();
  const personName = person ? person.name : "未命名";
  const backups = await listBackups(dirHandle, personId);
  const timestamp = Date.now();
  let targetName = buildBackupFileName(personName, timestamp);

  if (backups.length >= BACKUP_LIMIT) {
    const removeCount = backups.length - (BACKUP_LIMIT - 1);
    if (typeof dirHandle.removeEntry === "function") {
      for (let index = 0; index < removeCount; index += 1) {
        const backup = backups[index];
        if (!backup) {
          continue;
        }
        try {
          await dirHandle.removeEntry(backup.name);
        } catch (error) {
          targetName = backups[0].name;
          break;
        }
      }
    } else {
      targetName = backups[0].name;
    }
  }

  const fileHandle = await dirHandle.getFileHandle(targetName, { create: true });
  const writable = await fileHandle.createWritable();
  await writable.write(JSON.stringify(payload, null, 2));
  await writable.close();
  return true;
}

async function performBackup(mode) {
  if (!state.activePersonId) {
    return false;
  }
  const interactive = mode === "manual";
  const dirHandle = await ensureBackupDirectory(interactive);
  if (!dirHandle) {
    if (mode === "manual") {
      setHint("请先设置备份文件夹。", "warn");
    }
    return false;
  }
  const payload = buildBackupPayload(mode);
  try {
    await writeBackupFile(dirHandle, payload);
    await syncBackupIndex(dirHandle);
    if (mode === "manual") {
      setHint("备份已导出。", "ok");
    }
    return true;
  } catch (error) {
    setBackupStatus("自动备份：失败", "warn");
    if (mode === "manual") {
      setHint("备份导出失败，请重试。", "warn");
    }
    return false;
  }
}

function queueAutoBackup() {
  if (state.suspendAutoBackup) {
    return;
  }
  state.autoBackupQueue += 1;
  if (state.autoBackupRunning) {
    return;
  }
  flushAutoBackupQueue();
}

async function flushAutoBackupQueue() {
  state.autoBackupRunning = true;
  while (state.autoBackupQueue > 0) {
    state.autoBackupQueue -= 1;
    await performBackup("auto");
  }
  state.autoBackupRunning = false;
}

async function selectBackupDirectory() {
  if (!supportsFileSystemAccess()) {
    setBackupStatus("自动备份：浏览器不支持", "warn");
    setHint("当前浏览器不支持选择备份文件夹。", "warn");
    return;
  }
  try {
    const pickedHandle = await window.showDirectoryPicker({
      id: "litepoints-backup",
      mode: "readwrite"
    });
    const handle = await resolveBackupDirectoryHandle(pickedHandle);
    if (!handle) {
      setHint("备份文件夹设置失败。", "warn");
      return;
    }
    state.backupDirectoryHandle = handle;
    await saveBackupDirectoryHandle(handle);
    state.backupPermission = await queryBackupPermission(handle);
    if (state.backupPermission !== "granted") {
      state.backupPermission = await requestBackupPermission(handle);
    }
    updateBackupStatusSummary();
    if (state.backupPermission === "granted") {
      await syncBackupIndex(handle);
      setHint("备份文件夹已设置。", "ok");
    } else {
      setHint("备份文件夹已选择，需授权读写。", "warn");
    }
  } catch (error) {
    if (error && error.name === "AbortError") {
      return;
    }
    setHint("备份文件夹设置失败。", "warn");
  }
}

function normalizeBackupPayload(data) {
  if (!data || typeof data !== "object") {
    return null;
  }
  if (!Array.isArray(data.entries)) {
    return null;
  }
  let catalog = null;
  if (data.catalog && typeof data.catalog === "object") {
    catalog = data.catalog;
  } else if (data.score || data.tax || data.event) {
    catalog = {
      score: data.score,
      tax: data.tax,
      event: data.event
    };
  }
  if (!catalog) {
    return null;
  }
  const entries = data.entries.map((entry) => {
    const effect =
      entry.type === "tax"
        ? "tax"
        : entry.type === "event"
          ? entry.effect === "tax"
            ? "tax"
            : "score"
          : "score";
    return {
      ...entry,
      effect,
      createdAt: Number.isFinite(entry.createdAt) ? entry.createdAt : Date.now()
    };
  });
  return {
    person: data.person && typeof data.person === "object" ? data.person : null,
    entries,
    scoreData: catalog.score ? cloneData(catalog.score) : cloneData(state.baseScoreData),
    taxData: catalog.tax ? cloneData(catalog.tax) : cloneData(state.baseTaxData),
    eventData: normalizeEventData(catalog.event ? cloneData(catalog.event) : cloneData(state.baseEventData))
  };
}

async function handleBackupImport(event) {
  const file = event.target.files && event.target.files[0];
  if (!file) {
    return;
  }
  event.target.value = "";
  try {
    const text = await file.text();
    const parsed = JSON.parse(text);
    const normalized = normalizeBackupPayload(parsed);
    if (!normalized) {
      setHint("备份文件格式不正确。", "warn");
      return;
    }
    const activePerson = getActivePerson();
    const targetName = activePerson ? activePerson.name : "当前成员";
    const sourceName = normalized.person && normalized.person.name ? normalized.person.name : "未知成员";
    if (!confirm(`导入后将覆盖「${targetName}」的记录与条目（来源：${sourceName}），是否继续？`)) {
      return;
    }
    state.suspendAutoBackup = true;
    state.entries = normalized.entries;
    state.scoreData = normalized.scoreData;
    state.taxData = normalized.taxData;
    state.eventData = normalized.eventData;
    state.activeCategoryId = null;
    state.activeItemId = null;
    state.weekCategorySelection = null;
    saveEntries();
    saveCatalog();
    state.suspendAutoBackup = false;
    renderAll();
    setHint("备份已导入。", "ok");
    queueAutoBackup();
  } catch (error) {
    setHint("备份文件解析失败。", "warn");
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

function getEntriesKey(personId) {
  return `${STORAGE_KEY}__${personId}`;
}

function getCatalogKey(personId) {
  return `${CATALOG_KEY}__${personId}`;
}

function loadEntries(personId) {
  try {
    const targetId = personId || state.activePersonId;
    if (!targetId) {
      return [];
    }
    const raw = localStorage.getItem(getEntriesKey(targetId));
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
  if (!state.activePersonId) {
    return;
  }
  try {
    localStorage.setItem(getEntriesKey(state.activePersonId), JSON.stringify(state.entries));
  } catch (error) {
    setHint("本地存储不可用，刷新后数据可能丢失。", "warn");
  }
  queueAutoBackup();
}

function loadCatalog(personId) {
  try {
    const targetId = personId || state.activePersonId;
    if (!targetId) {
      return null;
    }
    const raw = localStorage.getItem(getCatalogKey(targetId));
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
  if (!state.activePersonId) {
    return;
  }
  try {
    const payload = {
      score: state.scoreData,
      tax: state.taxData,
      event: state.eventData
    };
    localStorage.setItem(getCatalogKey(state.activePersonId), JSON.stringify(payload));
    updateDataStatus(true);
  } catch (error) {
    setHint("本地存储不可用，刷新后自定义配置可能丢失。", "warn");
  }
  queueAutoBackup();
}

function loadPeople() {
  try {
    const raw = localStorage.getItem(PEOPLE_KEY);
    if (!raw) {
      return null;
    }
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : null;
  } catch (error) {
    return null;
  }
}

function savePeople() {
  try {
    localStorage.setItem(PEOPLE_KEY, JSON.stringify(state.people));
  } catch (error) {
    setHint("本地存储不可用，人员列表可能无法保存。", "warn");
  }
}

function getActivePerson() {
  return state.people.find((person) => person.id === state.activePersonId) || null;
}

function updateDataStatus(hasCustom) {
  if (!elements.dataStatus) {
    return;
  }
  const person = getActivePerson();
  const personName = person ? person.name : "未命名";
  const dataSource = hasCustom
    ? "本地自定义数据"
    : state.usingFallbackData
      ? "内置数据"
      : "JSON 数据";
  elements.dataStatus.textContent = `已载入${dataSource} · ${personName} · 本地存储已启用`;
}

function renderPersonSelect() {
  if (!elements.personSelect) {
    return;
  }
  elements.personSelect.innerHTML = "";
  state.people.forEach((person) => {
    const option = document.createElement("option");
    option.value = person.id;
    option.textContent = person.name;
    elements.personSelect.appendChild(option);
  });
  if (state.activePersonId) {
    elements.personSelect.value = state.activePersonId;
  }
}

function migrateLegacyData(defaultId) {
  try {
    const legacyEntries = localStorage.getItem(STORAGE_KEY);
    if (legacyEntries && !localStorage.getItem(getEntriesKey(defaultId))) {
      localStorage.setItem(getEntriesKey(defaultId), legacyEntries);
    }
    const legacyCatalog = localStorage.getItem(CATALOG_KEY);
    if (legacyCatalog && !localStorage.getItem(getCatalogKey(defaultId))) {
      localStorage.setItem(getCatalogKey(defaultId), legacyCatalog);
    }
  } catch (error) {
    return;
  }
}

function initializePeople() {
  let people = loadPeople();
  if (!Array.isArray(people) || people.length === 0) {
    const defaultPerson = {
      id: safeId(),
      name: "默认"
    };
    people = [defaultPerson];
    state.people = people;
    savePeople();
    state.activePersonId = defaultPerson.id;
    try {
      localStorage.setItem(ACTIVE_PERSON_KEY, defaultPerson.id);
    } catch (error) {
      return;
    }
    migrateLegacyData(defaultPerson.id);
    return;
  }

  state.people = people;
  try {
    const storedActive = localStorage.getItem(ACTIVE_PERSON_KEY);
    if (storedActive && people.some((person) => person.id === storedActive)) {
      state.activePersonId = storedActive;
    } else {
      state.activePersonId = people[0].id;
      localStorage.setItem(ACTIVE_PERSON_KEY, state.activePersonId);
    }
  } catch (error) {
    state.activePersonId = people[0].id;
  }
}

function setActivePerson(personId) {
  if (!personId || !state.people.some((person) => person.id === personId)) {
    return;
  }
  state.activePersonId = personId;
  try {
    localStorage.setItem(ACTIVE_PERSON_KEY, personId);
  } catch (error) {
    setHint("本地存储不可用，当前人员状态可能无法保存。", "warn");
  }

  const catalog = loadCatalog(personId);
  state.scoreData = catalog && catalog.score ? catalog.score : cloneData(state.baseScoreData);
  state.taxData = catalog && catalog.tax ? catalog.tax : cloneData(state.baseTaxData);
  state.eventData = normalizeEventData(
    catalog && catalog.event ? catalog.event : cloneData(state.baseEventData)
  );
  state.entries = loadEntries(personId);
  state.activeCategoryId = null;
  state.activeItemId = null;
  state.weekCategorySelection = null;

  renderPersonSelect();
  updateDataStatus(!!catalog);
  renderAll();
  updateBackupStatusSummary();
}

function openPeopleModal() {
  renderPeopleManager();
  elements.peopleModal.classList.add("open");
  elements.peopleModal.setAttribute("aria-hidden", "false");
}

function closePeopleModal() {
  elements.peopleModal.classList.remove("open");
  elements.peopleModal.setAttribute("aria-hidden", "true");
}

function renderPeopleManager() {
  elements.peopleList.innerHTML = "";
  state.people.forEach((person) => {
    const row = document.createElement("div");
    row.className = "people-row";

    const info = document.createElement("div");
    info.className = "people-info";

    const label = document.createElement("label");
    label.className = "people-label";
    label.textContent = "姓名";

    const input = document.createElement("input");
    input.className = "people-input";
    input.value = person.name;
    input.dataset.personId = person.id;
    label.appendChild(input);
    info.appendChild(label);

    const backupMeta = document.createElement("div");
    backupMeta.className = "people-meta";
    backupMeta.textContent = getBackupInfoLabel(person.id);
    info.appendChild(backupMeta);

    if (person.id === state.activePersonId) {
      const tag = document.createElement("div");
      tag.className = "people-tag";
      tag.textContent = "当前";
      info.appendChild(tag);
    }

    const actions = document.createElement("div");
    actions.className = "people-actions";

    const removeButton = document.createElement("button");
    removeButton.type = "button";
    removeButton.className = "people-remove";
    removeButton.textContent = "删除";
    removeButton.dataset.action = "remove-person";
    removeButton.dataset.personId = person.id;
    if (state.people.length === 1) {
      removeButton.disabled = true;
    }
    actions.appendChild(removeButton);

    row.appendChild(info);
    row.appendChild(actions);
    elements.peopleList.appendChild(row);
  });
}

function handlePeopleInput(event) {
  const target = event.target;
  if (!target.classList.contains("people-input")) {
    return;
  }
  const personId = target.dataset.personId;
  const person = state.people.find((item) => item.id === personId);
  if (!person) {
    return;
  }
  person.name = target.value.trim() || "未命名";
  savePeople();
  renderPersonSelect();
  renderPeopleManager();
  if (person.id === state.activePersonId) {
    updateDataStatus(!!loadCatalog(person.id));
  }
}

function addPerson() {
  const nextIndex = state.people.length + 1;
  const person = {
    id: safeId(),
    name: `成员${nextIndex}`
  };
  state.people.push(person);
  savePeople();
  setActivePerson(person.id);
  renderPeopleManager();
}

function handlePeopleAction(event) {
  const button = event.target.closest("button[data-action]");
  if (!button) {
    return;
  }
  const action = button.dataset.action;
  if (action === "add-person") {
    addPerson();
    return;
  }
  if (action === "remove-person") {
    if (state.people.length <= 1) {
      return;
    }
    const personId = button.dataset.personId;
    const person = state.people.find((item) => item.id === personId);
    const personName = person ? person.name : "该成员";
    if (!confirm(`确认删除 ${personName}？删除后对应数据将被清空。`)) {
      return;
    }
    state.people = state.people.filter((item) => item.id !== personId);
    savePeople();
    try {
      localStorage.removeItem(getEntriesKey(personId));
      localStorage.removeItem(getCatalogKey(personId));
    } catch (error) {
      return;
    }
    if (state.activePersonId === personId) {
      setActivePerson(state.people[0].id);
    } else {
      renderPersonSelect();
    }
    renderPeopleManager();
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

function getCategoryById(type, categoryId) {
  const data = getDataByType(type);
  if (!data || !Array.isArray(data.categories)) {
    return null;
  }
  return data.categories.find((category) => category.id === categoryId) || null;
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
    const metaParts = [`${formatPoints(item.points)} 积分`];
    if (state.activeType === "event") {
      metaParts.push(item.direction === "tax" ? "税收活动" : "得分活动");
    }
    if (item.desc) {
      metaParts.push(item.desc);
    }
    meta.textContent = metaParts.join(" · ");

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
    state.activeType === "score"
      ? "得分"
      : state.activeType === "tax"
        ? "税收"
        : item.direction === "tax"
          ? "活动税收"
          : "活动得分";
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
    if (getEntryEffect(entry) === "score") {
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
      if (getEntryEffect(entry) === "score") {
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

function getScoreCategoryTotalsForRange(startDate, endDate) {
  const scoreTotals = getCategoryTotalsForRange(startDate, endDate, "score").map((item) => ({
    ...item,
    sourceType: "score"
  }));
  const eventTotals = getCategoryTotalsForRange(startDate, endDate, "event", "score").map((item) => ({
    ...item,
    sourceType: "event"
  }));
  return scoreTotals.concat(eventTotals);
}

function getTaxCategoryTotalsForRange(startDate, endDate) {
  const taxTotals = getCategoryTotalsForRange(startDate, endDate, "tax").map((item) => ({
    ...item,
    sourceType: "tax"
  }));
  const eventTotals = getCategoryTotalsForRange(startDate, endDate, "event", "tax").map((item) => ({
    ...item,
    sourceType: "event"
  }));
  return taxTotals.concat(eventTotals);
}

function renderCategoryList(container, totals, type, limit) {
  if (!container) {
    return;
  }
  container.innerHTML = "";
  const typeLabel = type === "tax" ? "税收" : "得分";
  const visible = totals.filter((item) => item.total > 0);
  if (visible.length === 0) {
    container.innerHTML = `<div class="item-meta">暂无${typeLabel}记录。</div>`;
    return;
  }
  const sorted = visible.sort((a, b) => b.total - a.total);
  const display = limit ? sorted.slice(0, limit) : sorted;
  display.forEach((item) => {
    const row = document.createElement("div");
    row.className = "category-row";

    const name = document.createElement("div");
    name.className = "category-name";
    const label = item.sourceType === "event" ? `活动 · ${item.name}` : item.name;
    name.textContent = label;

    const value = document.createElement("div");
    value.className = "category-value";
    if (type === "tax") {
      value.classList.add("tax");
    }
    value.textContent = formatSignedValue(item.total, type);

    row.appendChild(name);
    row.appendChild(value);
    container.appendChild(row);
  });

  if (sorted.length > display.length) {
    const more = document.createElement("div");
    more.className = "item-meta";
    more.textContent = `还有 ${sorted.length - display.length} 项未展开`;
    container.appendChild(more);
  }
}

function renderCategoryBreakdown(scoreContainer, taxContainer, startDate, endDate, limit) {
  renderCategoryList(scoreContainer, getScoreCategoryTotalsForRange(startDate, endDate), "score", limit);
  renderCategoryList(taxContainer, getTaxCategoryTotalsForRange(startDate, endDate), "tax", limit);
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
    const line = document.createElement("div");
    line.className = "entry-line";

    const info = document.createElement("div");
    info.className = "entry-info";

    const name = document.createElement("div");
    name.className = "entry-name";
    name.textContent = entry.itemName;

    const meta = document.createElement("div");
    meta.className = "entry-meta";
    meta.textContent = `${entry.categoryName} · 倍数 ${formatPoints(entry.multiplier)}`;

    info.appendChild(name);
    info.appendChild(meta);

    const actions = document.createElement("div");
    actions.className = "entry-actions";

    const effect = getEntryEffect(entry);
    const value = document.createElement("div");
    value.className = "entry-value";
    if (effect === "tax") {
      value.classList.add("tax");
    }
    value.textContent = formatSignedValue(entry.total, effect);

    const removeButton = document.createElement("button");
    removeButton.type = "button";
    removeButton.className = "entry-remove";
    removeButton.textContent = "撤回";
    removeButton.addEventListener("click", () => {
      state.entries = state.entries.filter((item) => item.id !== entry.id);
      saveEntries();
      renderAll();
    });

    actions.appendChild(value);
    actions.appendChild(removeButton);

    line.appendChild(info);
    line.appendChild(actions);
    elements.entryList.appendChild(line);
  });
}

function updateInfoVisibility() {
  if (elements.monthSection) {
    elements.monthSection.hidden = state.viewMode !== "month";
  }
  if (elements.weekSection) {
    elements.weekSection.hidden = state.viewMode !== "week";
  }
}

function updateYearRangeInputs() {
  if (!elements.yearRangeStart || !elements.yearRangeEnd || !state.yearRange) {
    return;
  }
  const startValue = toDateString(state.yearRange.start);
  const endValue = toDateString(state.yearRange.end);
  if (elements.yearRangeStart.value !== startValue) {
    elements.yearRangeStart.value = startValue;
  }
  if (elements.yearRangeEnd.value !== endValue) {
    elements.yearRangeEnd.value = endValue;
  }
}

function applyYearRange() {
  if (!elements.yearRangeStart || !elements.yearRangeEnd) {
    return;
  }
  const startStr = elements.yearRangeStart.value;
  const endStr = elements.yearRangeEnd.value;
  if (!startStr || !endStr) {
    setHint("请填写完整的年度范围。", "warn");
    return;
  }
  const startDate = parseDate(startStr);
  const endDate = parseDate(endStr);
  if (startDate > endDate) {
    setHint("年度范围起始不能晚于结束。", "warn");
    return;
  }
  state.yearRange = { start: startDate, end: endDate };
  state.yearRangeMode = "custom";
  renderDetails();
}

function resetYearRange() {
  if (!state.selectedDate) {
    return;
  }
  state.yearRange = getYearRange(state.selectedDate);
  state.yearRangeMode = "year";
  renderDetails();
}

function renderYearInfo() {
  if (!state.selectedDate || !elements.yearSummary || !elements.yearSummaryTitle) {
    return;
  }
  if (!state.yearRange || state.yearRangeMode === "year") {
    state.yearRange = getYearRange(state.selectedDate);
  }
  updateYearRangeInputs();
  const { start, end } = state.yearRange;
  const totals = getTotalsForRange(start, end);
  const rangeLabel = formatRangeLabel(start, end);
  const modeLabel = state.yearRangeMode === "custom" ? "自定义范围" : `${start.getFullYear()}年`;
  elements.yearSummaryTitle.textContent = `${modeLabel}统计 · ${rangeLabel}`;
  renderSummary(elements.yearSummary, totals);
  renderCategoryBreakdown(elements.yearScoreCategoryList, elements.yearTaxCategoryList, start, end, 6);
  renderYearMonthList();
}

function renderMonthInfo() {
  if (!elements.monthSummary || !elements.monthSummaryTitle) {
    return;
  }
  const monthBase = state.currentMonth || parseDate(state.selectedDate);
  const range = getMonthRange(monthBase);
  const totals = getTotalsForRange(range.start, range.end);
  const rangeLabel = formatRangeLabel(range.start, range.end);
  elements.monthSummaryTitle.textContent = `${range.start.getFullYear()}年${range.start.getMonth() + 1}月统计 · ${rangeLabel}`;
  renderSummary(elements.monthSummary, totals);
  renderCategoryBreakdown(elements.monthScoreCategoryList, elements.monthTaxCategoryList, range.start, range.end, 4);
}

function renderWeekInfo() {
  if (!state.selectedDate || !elements.weekSummary || !elements.weekSummaryTitle) {
    return;
  }
  const range = getWeekRange(state.selectedDate);
  const totals = getTotalsForRange(range.start, range.end);
  const rangeLabel = formatRangeLabel(range.start, range.end);
  elements.weekSummaryTitle.textContent = `本周统计 · ${rangeLabel}`;
  renderSummary(elements.weekSummary, totals);
}

function renderYearMonthList() {
  if (!elements.yearMonthList || !state.yearRange) {
    return;
  }
  elements.yearMonthList.innerHTML = "";
  const start = new Date(state.yearRange.start.getFullYear(), state.yearRange.start.getMonth(), 1);
  const end = new Date(state.yearRange.end.getFullYear(), state.yearRange.end.getMonth(), 1);
  const cursor = new Date(start);
  let hasRows = false;
  while (cursor <= end) {
    const monthRange = getMonthRange(cursor);
    const rangeStart = monthRange.start < state.yearRange.start ? state.yearRange.start : monthRange.start;
    const rangeEnd = monthRange.end > state.yearRange.end ? state.yearRange.end : monthRange.end;
    const totals = getTotalsForRange(rangeStart, rangeEnd);

    const row = document.createElement("div");
    row.className = "month-line";

    const label = document.createElement("div");
    label.className = "month-label";
    label.textContent = `${cursor.getFullYear()}年${cursor.getMonth() + 1}月`;

    const values = document.createElement("div");
    values.className = "month-values";

    const score = document.createElement("span");
    score.className = "score";
    score.textContent = `+${formatPoints(totals.score)}`;

    const tax = document.createElement("span");
    tax.className = "tax";
    tax.textContent = `-${formatPoints(totals.tax)}`;

    const net = document.createElement("span");
    net.textContent = `${totals.net >= 0 ? "+" : ""}${formatPoints(totals.net)}`;

    values.appendChild(score);
    values.appendChild(tax);
    values.appendChild(net);

    row.appendChild(label);
    row.appendChild(values);
    elements.yearMonthList.appendChild(row);
    hasRows = true;

    cursor.setMonth(cursor.getMonth() + 1);
  }
  if (!hasRows) {
    elements.yearMonthList.innerHTML = `<div class="item-meta">暂无记录。</div>`;
  }
}

function renderWeekDayList(range) {
  if (!elements.weekDayList) {
    return;
  }
  elements.weekDayList.innerHTML = "";
  const todayStr = toDateString(new Date());
  for (let index = 0; index < 7; index += 1) {
    const date = new Date(range.start);
    date.setDate(range.start.getDate() + index);
    const dateStr = toDateString(date);
    const totals = getTotalsForDate(dateStr);

    const row = document.createElement("button");
    row.type = "button";
    row.className = "week-day-row";
    row.dataset.date = dateStr;
    if (dateStr === state.selectedDate) {
      row.classList.add("is-selected");
    }

    const label = document.createElement("div");
    label.className = "week-day-label";
    const todayLabel = dateStr === todayStr ? " · 今天" : "";
    label.textContent = `周${WEEKDAY_LABELS[index]} ${date.getMonth() + 1}.${date.getDate()}${todayLabel}`;

    const values = document.createElement("div");
    values.className = "week-day-values";

    const score = document.createElement("span");
    score.className = "score";
    score.textContent = `+${formatPoints(totals.score)}`;

    const tax = document.createElement("span");
    tax.className = "tax";
    tax.textContent = `-${formatPoints(totals.tax)}`;

    const net = document.createElement("span");
    net.textContent = `${totals.net >= 0 ? "+" : ""}${formatPoints(totals.net)}`;

    values.appendChild(score);
    values.appendChild(tax);
    values.appendChild(net);

    row.appendChild(label);
    row.appendChild(values);
    elements.weekDayList.appendChild(row);
  }
}

function handleWeekDaySelect(event) {
  const button = event.target.closest(".week-day-row");
  if (!button) {
    return;
  }
  const dateStr = button.dataset.date;
  if (!dateStr) {
    return;
  }
  const next = parseDate(dateStr);
  state.selectedDate = dateStr;
  state.currentMonth = new Date(next.getFullYear(), next.getMonth(), 1);
  renderAll();
}

function renderWeekPage() {
  if (!elements.weekPage || !state.selectedDate) {
    return;
  }
  const range = getWeekRange(state.selectedDate);
  const totals = getTotalsForRange(range.start, range.end);
  const rangeLabel = formatRangeLabel(range.start, range.end);
  if (elements.weekPageSummaryTitle) {
    elements.weekPageSummaryTitle.textContent = `周统计 · ${rangeLabel}`;
  }
  if (elements.weekPageSummary) {
    renderSummary(elements.weekPageSummary, totals);
  }
  renderWeekDayList(range);
  if (elements.weekPageScoreCategoryList) {
    renderWeekCategorySummary("score", elements.weekPageScoreCategoryList, range.start, range.end, {
      includeEvent: true
    });
  }
  if (elements.weekPageTaxCategoryList) {
    renderWeekCategorySummary("tax", elements.weekPageTaxCategoryList, range.start, range.end, {
      includeEvent: true
    });
  }
  renderWeekCategoryDetails();
}

function shiftWeek(offset) {
  if (!state.selectedDate) {
    return;
  }
  const selected = parseDate(state.selectedDate);
  selected.setDate(selected.getDate() + offset * 7);
  state.selectedDate = toDateString(selected);
  state.currentMonth = new Date(selected.getFullYear(), selected.getMonth(), 1);
  renderAll();
}

function goToCurrentWeek() {
  const today = new Date();
  state.selectedDate = toDateString(today);
  state.currentMonth = new Date(today.getFullYear(), today.getMonth(), 1);
  renderAll();
}

function openYearPage() {
  if (!elements.yearPage) {
    return;
  }
  elements.yearPage.classList.add("open");
  elements.yearPage.setAttribute("aria-hidden", "false");
  renderYearInfo();
  renderYearMonthList();
}

function closeYearPage() {
  if (!elements.yearPage) {
    return;
  }
  elements.yearPage.classList.remove("open");
  elements.yearPage.setAttribute("aria-hidden", "true");
}

function openWeekPage() {
  if (!elements.weekPage) {
    return;
  }
  elements.weekPage.classList.add("open");
  elements.weekPage.setAttribute("aria-hidden", "false");
  renderWeekPage();
}

function closeWeekPage() {
  if (!elements.weekPage) {
    return;
  }
  elements.weekPage.classList.remove("open");
  elements.weekPage.setAttribute("aria-hidden", "true");
}

function renderDayInfo() {
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
  renderEntryList(state.selectedDate);
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

function getCategoryTotalsForRange(startDate, endDate, type, direction) {
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
    if (type === "event" && direction && getEntryEffect(entry) !== direction) {
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

function renderWeekCategorySummary(type, container, startDate, endDate, options = {}) {
  const typeLabel = type === "tax" ? "税收" : "得分";
  const baseTotals = getCategoryTotalsForRange(startDate, endDate, type).map((item) => ({
    ...item,
    sourceType: type
  }));
  const eventTotals = options.includeEvent
    ? getCategoryTotalsForRange(startDate, endDate, "event", type).map((item) => ({
        ...item,
        sourceType: "event",
        direction: type
      }))
    : [];
  const totals = baseTotals.concat(eventTotals);

  const selection = state.weekCategorySelection;
  const matchesSelection = (category) => {
    if (!selection) {
      return false;
    }
    if (category.sourceType === "event") {
      return (
        selection.type === "event" &&
        selection.categoryId === category.id &&
        selection.direction === type
      );
    }
    return selection.type === type && selection.categoryId === category.id;
  };

  if (selection) {
    const selectionMatchesList =
      selection.type === type || (selection.type === "event" && selection.direction === type);
    if (selectionMatchesList) {
      const exists = totals.some(matchesSelection);
      if (!exists) {
        state.weekCategorySelection = null;
      }
    }
  }

  container.innerHTML = "";
  if (totals.length === 0) {
    container.innerHTML = `<div class="item-meta">暂无${typeLabel}大类。</div>`;
    return;
  }
  totals.forEach((category) => {
    const card = document.createElement("button");
    card.type = "button";
    card.className = "week-category-card";
    if (type === "tax") {
      card.classList.add("is-tax");
    }
    if (!category.total) {
      card.classList.add("is-zero");
    }
    if (matchesSelection(category)) {
      card.classList.add("is-active");
    }
    card.dataset.type = category.sourceType === "event" ? "event" : type;
    card.dataset.categoryId = category.id;
    if (category.sourceType === "event") {
      card.dataset.direction = type;
    }

    const name = document.createElement("div");
    name.className = "week-category-name";
    name.textContent = category.sourceType === "event" ? `活动 · ${category.name}` : category.name;

    const value = document.createElement("div");
    value.className = "week-category-value";
    if (type === "tax") {
      value.classList.add("tax");
    }
    value.textContent = formatSignedValue(category.total, type);

    card.appendChild(name);
    card.appendChild(value);
    container.appendChild(card);
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

  if (elements.weekScoreCategoryList) {
    renderWeekCategorySummary("score", elements.weekScoreCategoryList, range.start, range.end, {
      includeEvent: true
    });
  }
  if (elements.weekTaxCategoryList) {
    renderWeekCategorySummary("tax", elements.weekTaxCategoryList, range.start, range.end, {
      includeEvent: true
    });
  }
}

function handleWeekCategorySelect(event) {
  const button = event.target.closest(".week-category-card");
  if (!button) {
    return;
  }
  const { type, categoryId, direction } = button.dataset;
  if (!type || !categoryId) {
    return;
  }
  const selectionDirection = type === "event" ? (direction === "tax" ? "tax" : "score") : type;
  const isSameSelection =
    state.weekCategorySelection &&
    state.weekCategorySelection.type === type &&
    state.weekCategorySelection.categoryId === categoryId &&
    state.weekCategorySelection.direction === selectionDirection;

  if (isSameSelection) {
    state.weekCategorySelection = null;
  } else {
    state.weekCategorySelection = {
      type,
      categoryId,
      direction: selectionDirection
    };
  }
  if (state.viewMode === "week") {
    renderWeekView();
  }
  renderDetails();
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

function renderWeekCategoryDetails() {
  if (!elements.weekPageDetailTitle || !elements.weekPageDetailList || !state.selectedDate) {
    return;
  }
  elements.weekPageDetailTitle.classList.remove("tax", "score");
  if (!state.weekCategorySelection) {
    elements.weekPageDetailTitle.textContent = "本周大类明细";
    elements.weekPageDetailList.innerHTML = `<div class="item-meta">点击大类查看明细。</div>`;
    return;
  }

  const { type, categoryId, direction } = state.weekCategorySelection;
  const effect = type === "event" ? (direction === "tax" ? "tax" : "score") : type;
  const typeLabel = effect === "tax" ? "税收" : "得分";
  elements.weekPageDetailTitle.classList.add(effect === "tax" ? "tax" : "score");
  const category = getCategoryById(type === "event" ? "event" : type, categoryId);
  const categoryName = category ? category.name : "已删除大类";
  const displayName = type === "event" ? `活动 · ${categoryName}` : categoryName;

  const range = getWeekRange(state.selectedDate);
  const entries = state.entries
    .filter((entry) => {
      if (entry.categoryId !== categoryId) {
        return false;
      }
      if (type === "event") {
        if (entry.type !== "event" || getEntryEffect(entry) !== effect) {
          return false;
        }
      } else if (entry.type !== type) {
        return false;
      }
      const entryDate = parseDate(entry.date);
      return entryDate >= range.start && entryDate <= range.end;
    })
    .sort((a, b) => {
      if (a.date === b.date) {
        return a.createdAt - b.createdAt;
      }
      return a.date.localeCompare(b.date);
    });

  const total = entries.reduce((sum, entry) => sum + entry.total, 0);
  elements.weekPageDetailTitle.textContent = `本周${typeLabel} · ${displayName} · ${formatSignedValue(
    total,
    effect
  )}`;

  elements.weekPageDetailList.innerHTML = "";
  if (entries.length === 0) {
    elements.weekPageDetailList.innerHTML = `<div class="item-meta">本周暂无记录。</div>`;
    return;
  }

  entries.forEach((entry) => {
    const line = document.createElement("div");
    line.className = "week-detail-line";

    const info = document.createElement("div");
    info.className = "week-detail-info";

    const dateTag = document.createElement("div");
    dateTag.className = "week-detail-date";
    const weekday = WEEKDAY_FULL[parseDate(entry.date).getDay()];
    dateTag.textContent = `${entry.date} 周${weekday}`;

    const name = document.createElement("div");
    name.className = "week-detail-name";
    name.textContent = entry.itemName;

    const meta = document.createElement("div");
    meta.className = "week-detail-meta";
    meta.textContent = `倍数 ${formatPoints(entry.multiplier)}`;

    info.appendChild(dateTag);
    info.appendChild(name);
    info.appendChild(meta);

    const amount = document.createElement("div");
    amount.className = "week-detail-amount";
    if (effect === "tax") {
      amount.classList.add("tax");
    }
    amount.textContent = formatSignedValue(entry.total, effect);

    line.appendChild(info);
    line.appendChild(amount);
    elements.weekPageDetailList.appendChild(line);
  });
}

function renderDetails() {
  if (!state.selectedDate) {
    return;
  }
  updateInfoVisibility();
  renderYearInfo();
  renderMonthInfo();
  renderWeekInfo();
  renderDayInfo();
  if (elements.weekPage && elements.weekPage.classList.contains("open")) {
    renderWeekPage();
  }
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

function createEditorSelect(labelText, field, value, options) {
  const label = document.createElement("label");
  label.className = "editor-field";
  const text = document.createElement("span");
  text.textContent = labelText;

  const select = document.createElement("select");
  select.className = "editor-input";
  select.dataset.field = field;
  select.dataset.type = options.dataType;
  select.dataset.categoryId = options.categoryId;
  if (options.itemId) {
    select.dataset.itemId = options.itemId;
  }
  (options.choices || []).forEach((choice) => {
    const option = document.createElement("option");
    option.value = choice.value;
    option.textContent = choice.label;
    select.appendChild(option);
  });
  select.value = value;

  label.appendChild(text);
  label.appendChild(select);
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
        if (state.editorType === "event") {
          itemGrid.appendChild(
            createEditorSelect("方向", "direction", item.direction === "tax" ? "tax" : "score", {
              dataType: state.editorType,
              categoryId: category.id,
              itemId: item.id,
              choices: [
                { value: "score", label: "得分" },
                { value: "tax", label: "税收" }
              ]
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
    if (field === "direction") {
      item.direction = target.value === "tax" ? "tax" : "score";
    } else if (field === "points") {
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
    if (type === "event") {
      newItem.direction = "score";
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
  const effect = state.activeType === "event" ? (item.direction === "tax" ? "tax" : "score") : state.activeType;
  const entry = {
    id: safeId(),
    type: state.activeType,
    effect,
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
  state.baseScoreData = scoreData;
  state.baseTaxData = taxData;
  state.baseEventData = normalizeEventData(eventData);
  state.usingFallbackData =
    scoreData === FALLBACK_SCORE_DATA || taxData === FALLBACK_TAX_DATA || eventData === FALLBACK_EVENT_DATA;

  const today = new Date();
  state.currentMonth = new Date(today.getFullYear(), today.getMonth(), 1);
  state.selectedDate = toDateString(today);
  elements.dateInput.value = state.selectedDate;
  state.yearRange = getYearRange(state.selectedDate);
  state.yearRangeMode = "year";

  initializePeople();
  await initializeBackup();

  if (elements.personSelect) {
    elements.personSelect.addEventListener("change", (event) => setActivePerson(event.target.value));
  }
  if (elements.managePeople) {
    elements.managePeople.addEventListener("click", openPeopleModal);
  }
  if (elements.closePeople) {
    elements.closePeople.addEventListener("click", closePeopleModal);
  }
  if (elements.peopleList) {
    elements.peopleList.addEventListener("change", handlePeopleInput);
    elements.peopleList.addEventListener("click", handlePeopleAction);
  }
  if (elements.addPersonButton) {
    elements.addPersonButton.dataset.action = "add-person";
    elements.addPersonButton.addEventListener("click", handlePeopleAction);
  }
  if (elements.peopleModal) {
    elements.peopleModal.addEventListener("click", (event) => {
      if (event.target.dataset.action === "close-people") {
        closePeopleModal();
      }
    });
  }
  if (elements.backupFolderButton) {
    elements.backupFolderButton.addEventListener("click", selectBackupDirectory);
  }
  if (elements.backupExportButton) {
    elements.backupExportButton.addEventListener("click", () => performBackup("manual"));
  }
  if (elements.backupImportButton && elements.backupFileInput) {
    elements.backupImportButton.addEventListener("click", () => elements.backupFileInput.click());
    elements.backupFileInput.addEventListener("change", handleBackupImport);
  }

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
  if (elements.weekView) {
    elements.weekView.addEventListener("click", handleWeekCategorySelect);
  }
  if (elements.openYearPage) {
    elements.openYearPage.addEventListener("click", openYearPage);
  }
  if (elements.openWeekPage) {
    elements.openWeekPage.addEventListener("click", openWeekPage);
  }
  if (elements.yearPageClose) {
    elements.yearPageClose.addEventListener("click", closeYearPage);
  }
  if (elements.weekPageClose) {
    elements.weekPageClose.addEventListener("click", closeWeekPage);
  }
  if (elements.weekPagePrev) {
    elements.weekPagePrev.addEventListener("click", () => shiftWeek(-1));
  }
  if (elements.weekPageNext) {
    elements.weekPageNext.addEventListener("click", () => shiftWeek(1));
  }
  if (elements.weekPageToday) {
    elements.weekPageToday.addEventListener("click", goToCurrentWeek);
  }
  if (elements.weekDayList) {
    elements.weekDayList.addEventListener("click", handleWeekDaySelect);
  }
  if (elements.yearPage) {
    elements.yearPage.addEventListener("click", (event) => {
      if (event.target.dataset.action === "close-year") {
        closeYearPage();
      }
    });
  }
  if (elements.weekPage) {
    elements.weekPage.addEventListener("click", (event) => {
      if (event.target.dataset.action === "close-week") {
        closeWeekPage();
        return;
      }
      handleWeekCategorySelect(event);
    });
  }
  if (elements.yearRangeApply) {
    elements.yearRangeApply.addEventListener("click", applyYearRange);
  }
  if (elements.yearRangeReset) {
    elements.yearRangeReset.addEventListener("click", resetYearRange);
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
    if (event.key !== "Escape") {
      return;
    }
    if (elements.editorModal.classList.contains("open")) {
      closeEditor();
    }
    if (elements.peopleModal.classList.contains("open")) {
      closePeopleModal();
    }
    if (elements.yearPage && elements.yearPage.classList.contains("open")) {
      closeYearPage();
    }
    if (elements.weekPage && elements.weekPage.classList.contains("open")) {
      closeWeekPage();
    }
  });

  setActivePerson(state.activePersonId);
}

init();
