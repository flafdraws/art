import { fetchMockedSocials, fetchMockedArt, fetchMockedAbout, fetchMockedJSON } from './mock.js';
/* ========================================================
 *  MOCKED DATA
 *  Prevents unnecessary API usage during development
 * ======================================================== */
const IS_MOCKED = false;
/* ======================================================== */

export function fetchJSON(jsonUrl) {
  if (IS_MOCKED) {
    return fetchMockedJSON();
  }
  else {
    return fetch(jsonUrl)
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
}

export function fetchSheetAsArray(sheetUrl) {
  if (IS_MOCKED) {
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

export function fetchSheetAsJSON(sheetUrl, keyProperty = "key", valueProperty = "value") {
  return fetchSheetAsArray(sheetUrl)
    .then(function (array) {
      return arrayToJSON(array, keyProperty, valueProperty);
    });
}

export function stringToBooleanInArray(array, sourceStringTrue = "O", sourceStringFalse = "X") {
  if (array.length > 0) {
    const first = array[0];
    const booleanKey = Object.keys(first).find(key => first[key] === sourceStringTrue || first[key] == sourceStringFalse);

    if (booleanKey === undefined) return Promise.resolve(array);

    for (let i = 0; i < array.length; i++) {
      array[i][booleanKey] = array[i][booleanKey] === sourceStringTrue ? true : false;
    }
  }

  return Promise.resolve(array);
}

function arrayToJSON(array, keyProperty = "key", valueProperty = "value") {
  const json = {};

  try {
    for (let i = 0; i < array.length; i++) {
      const item = array[i];
      const value = item[valueProperty];

      if (typeof (value) === 'string') {
        const split = value.split('\n');
        json[item[keyProperty]] = split.length > 1 ? split : value;
      }
      else {
        json[item[keyProperty]] = value;
      }
    }
  } catch (error) {
    return Promise.reject(null);
  }

  return Promise.resolve(json);
}


// Private
function mockSheetAsArray(sheetUrl) {
  const urlMap = [
    { keyword: "art", procedure: fetchMockedArt },
    { keyword: "socials", procedure: fetchMockedSocials },
    { keyword: "about", procedure: fetchMockedAbout },
  ];

  for (let i = 0; i < urlMap.length; i++) {
    const mapping = urlMap[i];
    if (sheetUrl.indexOf(mapping.keyword) >= 0) {
      return mapping.procedure();
    }
  }

  return Promise.reject(null);
}