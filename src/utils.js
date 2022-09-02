export function fetchSheetAsArray(sheetUrl) {
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
};