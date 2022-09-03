import { fetchMockedSocials, fetchMockedArt } from './mock.js';

export function fetchSheetAsArray(sheetUrl) {
  if (isMocked) {
    return mockSheetAsArray(sheetUrl);
  }
  else {
    return fetch(sheetUrl)
      .then(function (result) {
        return result.text();
      })
      .then(function (text) {
        try {
          const json = JSON.parse(text);
          return Promise.resolve(json);
        } catch (error) {
          return Promise.reject(null);
        }
      });
  }
};


/* ========================================================
 *  MOCKED DATA
 *  Prevents unnecessary API usage during development
 * ======================================================== */
const isMocked = true;

function mockSheetAsArray(sheetUrl) {
  const urlMap = [
    { keyword: "art", procedure: fetchMockedArt },
    { keyword: "socials", procedure: fetchMockedSocials },
  ];

  for (let i = 0; i < urlMap.length; i++) {
    const mapping = urlMap[i];
    if (sheetUrl.indexOf(mapping.keyword) >= 0) {
      return mapping.procedure();
    }
  }

  return Promise.reject(null);
}
/* ======================================================== */