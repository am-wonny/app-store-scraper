'use strict';

const collection = {
  TOP_MAC: 'topmacapps',
  TOP_FREE_MAC: 'topfreemacapps',
  TOP_GROSSING_MAC: 'topgrossingmacapps',
  TOP_PAID_MAC: 'toppaidmacapps',
  NEW_IOS: 'newapplications',
  NEW_FREE_IOS: 'newfreeapplications',
  NEW_PAID_IOS: 'newpaidapplications',
  TOP_FREE_IOS: 'topfreeapplications',
  TOP_FREE_IPAD: 'topfreeipadapplications',
  TOP_GROSSING_IOS: 'topgrossingapplications',
  TOP_GROSSING_IPAD: 'topgrossingipadapplications',
  TOP_PAID_IOS: 'toppaidapplications',
  TOP_PAID_IPAD: 'toppaidipadapplications'
};

const category = {
  BOOKS: 6018,
  BUSINESS: 6000,
  CATALOGS: 6022,
  EDUCATION: 6017,
  ENTERTAINMENT: 6016,
  FINANCE: 6015,
  FOOD_AND_DRINK: 6023,
  GAMES: 6014,
  GAMES_ACTION: 7001,
  GAMES_ADVENTURE: 7002,
  GAMES_ARCADE: 7003,
  GAMES_BOARD: 7004,
  GAMES_CARD: 7005,
  GAMES_CASINO: 7006,
  GAMES_DICE: 7007,
  GAMES_EDUCATIONAL: 7008,
  GAMES_FAMILY: 7009,
  GAMES_MUSIC: 7011,
  GAMES_PUZZLE: 7012,
  GAMES_RACING: 7013,
  GAMES_ROLE_PLAYING: 7014,
  GAMES_SIMULATION: 7015,
  GAMES_SPORTS: 7016,
  GAMES_STRATEGY: 7017,
  GAMES_TRIVIA: 7018,
  GAMES_WORD: 7019,
  HEALTH_AND_FITNESS: 6013,
  LIFESTYLE: 6012,
  MAGAZINES_AND_NEWSPAPERS: 6021,
  MAGAZINES_ARTS: 13007,
  MAGAZINES_AUTOMOTIVE: 13006,
  MAGAZINES_WEDDINGS: 13008,
  MAGAZINES_BUSINESS: 13009,
  MAGAZINES_CHILDREN: 13010,
  MAGAZINES_COMPUTER: 13011,
  MAGAZINES_FOOD: 13012,
  MAGAZINES_CRAFTS: 13013,
  MAGAZINES_ELECTRONICS: 13014,
  MAGAZINES_ENTERTAINMENT: 13015,
  MAGAZINES_FASHION: 13002,
  MAGAZINES_HEALTH: 13017,
  MAGAZINES_HISTORY: 13018,
  MAGAZINES_HOME: 13003,
  MAGAZINES_LITERARY: 13019,
  MAGAZINES_MEN: 13020,
  MAGAZINES_MOVIES_AND_MUSIC: 13021,
  MAGAZINES_POLITICS: 13001,
  MAGAZINES_OUTDOORS: 13004,
  MAGAZINES_FAMILY: 13023,
  MAGAZINES_PETS: 13024,
  MAGAZINES_PROFESSIONAL: 13025,
  MAGAZINES_REGIONAL: 13026,
  MAGAZINES_SCIENCE: 13027,
  MAGAZINES_SPORTS: 13005,
  MAGAZINES_TEENS: 13028,
  MAGAZINES_TRAVEL: 13029,
  MAGAZINES_WOMEN: 13030,
  MEDICAL: 6020,
  MUSIC: 6011,
  NAVIGATION: 6010,
  NEWS: 6009,
  PHOTO_AND_VIDEO: 6008,
  PRODUCTIVITY: 6007,
  REFERENCE: 6006,
  SHOPPING: 6024,
  SOCIAL_NETWORKING: 6005,
  SPORTS: 6004,
  TRAVEL: 6003,
  UTILITIES: 6002,
  WEATHER: 6001
};

const device = {
  IPAD: 'iPadSoftware',
  MAC: 'macSoftware',
  ALL: 'software'
};

const sort = {
  RECENT: 'mostRecent',
  HELPFUL: 'mostHelpful'
};

// From https://github.com/gonzoua/random-stuff/blob/master/appstorereviews.rb
const markets = {
  DZ: 143563,
  AO: 143564,
  AI: 143538,
  AR: 143505,
  AM: 143524,
  AU: 143460,
  AT: 143445,
  AZ: 143568,
  BH: 143559,
  BB: 143541,
  BY: 143565,
  BE: 143446,
  BZ: 143555,
  BM: 143542,
  BO: 143556,
  BW: 143525,
  BR: 143503,
  VG: 143543,
  BN: 143560,
  BG: 143526,
  CA: 143455,
  KY: 143544,
  CL: 143483,
  CN: 143465,
  CO: 143501,
  CR: 143495,
  HR: 143494,
  CY: 143557,
  CZ: 143489,
  DK: 143458,
  DM: 143545,
  EC: 143509,
  EG: 143516,
  SV: 143506,
  EE: 143518,
  FI: 143447,
  FR: 143442,
  DE: 143443,
  GB: 143444,
  GH: 143573,
  GR: 143448,
  GD: 143546,
  GT: 143504,
  GY: 143553,
  HN: 143510,
  HK: 143463,
  HU: 143482,
  IS: 143558,
  IN: 143467,
  ID: 143476,
  IE: 143449,
  IL: 143491,
  IT: 143450,
  JM: 143511,
  JP: 143462,
  JO: 143528,
  KE: 143529,
  KR: 143466,
  KW: 143493,
  LV: 143519,
  LB: 143497,
  LT: 143520,
  LU: 143451,
  MO: 143515,
  MK: 143530,
  MG: 143531,
  MY: 143473,
  ML: 143532,
  MT: 143521,
  MU: 143533,
  MX: 143468,
  MS: 143547,
  NP: 143484,
  NL: 143452,
  NZ: 143461,
  NI: 143512,
  NE: 143534,
  NG: 143561,
  NO: 143457,
  OM: 143562,
  PK: 143477,
  PA: 143485,
  PY: 143513,
  PE: 143507,
  PH: 143474,
  PL: 143478,
  PT: 143453,
  QA: 143498,
  RO: 143487,
  RU: 143469,
  SA: 143479,
  SN: 143535,
  SG: 143464,
  SK: 143496,
  SI: 143499,
  ZA: 143472,
  ES: 143454,
  LK: 143486,
  SR: 143554,
  SE: 143456,
  CH: 143459,
  TW: 143470,
  TZ: 143572,
  TH: 143475,
  TN: 143536,
  TR: 143480,
  UG: 143537,
  UA: 143492,
  AE: 143481,
  US: 143441,
  UY: 143514,
  UZ: 143566,
  VE: 143502,
  VN: 143471,
  YE: 143571
};

// From https://fann.im/blog/2018/05/15/app-store-front-code/
const frontCodes = {
  CN: '143465-19,29',
  US: '143441-1,29',
  JP: '143462-9,29',
  KR: '143466-13,29',
  HK: '143463-18,29',
  AU: '143460,29',
  TW: '143470-18,29',
  CA: '143455-6,29',
  DK: '143458-2,29',
  RU: '143469-16,29',
  ID: '143476-2,29',
  TR: '143480-2,29',
  GR: '143448-2,29',
  DE: '143443-4,29',
  IT: '143450-7,29',
  NO: '143457-2,29',
  FR: '143442-3,29',
  TH: '143475-2,29',
  SE: '143456-17,29',
  FI: '143447-2,29',
  GB: '143444,29',
  NL: '143452-10,29',
  BR: '143503-15,29',
  PT: '143453-24,29',
  MX: '143468-28,29',
  ES: '143454-8,29',
  VN: '143471-2,29'
};


module.exports = {collection, category, device, sort, markets, frontCodes};
