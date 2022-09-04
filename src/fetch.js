import { fetchMockedJSON } from './mock.js';
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