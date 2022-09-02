/* ========================================================
 *  MOCKED DATA
 * ======================================================== */
const dataToPromise = (data) => new Promise(function (resolve, reject) {
  setTimeout(() => resolve(data), 500);
});

export function fetchMockedData() {
  const data = [
    { "title": "Farm Girl (study)", "date": "2022/05/03", "thumb": "https://i.postimg.cc/mks0RL0X/Blob-Paint1920.png" },
    { "title": "Mood (study)", "date": "2022/05/03", "thumb": "https://i.postimg.cc/N0btdrSs/mood2.png" },
    { "title": "Lumiel - Portrait (OC Redesigned)", "date": "2021/10/23", "thumb": "https://cdna.artstation.com/p/assets/images/images/042/644/882/large/flavio-freitas-lumiel-portrait-1920.jpg?1635087313" },
    { "title": "Enpitsu, the art bender", "date": "2021/02/28", "thumb": "https://cdnb.artstation.com/p/assets/images/images/035/424/627/large/flavio-freitas-flaf-enpitsu2-fhd.jpg?1614910695" },
    { "title": "Lake at night (study)", "date": "2022/05/02", "thumb": "https://i.postimg.cc/Vv1k7wZc/bands2-2.png" },
    { "title": "Sword Girls 1", "date": "2022/03/16", "thumb": "https://cdnb.artstation.com/p/assets/images/images/047/874/387/large/flavio-freitas-sword-girl-1.jpg?1648651512" },
    { "title": "Sword Girls 2", "date": "2022/03/17", "thumb": "https://cdna.artstation.com/p/assets/images/images/047/874/392/large/flavio-freitas-sword-girl-2.jpg?1648651517" },
    { "title": "Sword Girls 3", "date": "2022/03/18", "thumb": "https://cdnb.artstation.com/p/assets/images/images/047/874/393/large/flavio-freitas-sword-girl-3.jpg?1648651524" },
    { "title": "Sword Girls 4", "date": "2022/03/19", "thumb": "https://cdnb.artstation.com/p/assets/images/images/047/874/403/large/flavio-freitas-sword-girl-4.jpg?1648651531" },
    { "title": "Sword Girls 5", "date": "2022/03/20", "thumb": "https://cdna.artstation.com/p/assets/images/images/047/874/408/large/flavio-freitas-sword-girl-5.jpg?1648651537" },
    { "title": "Sword Girls 6", "date": "2022/03/21", "thumb": "https://cdnb.artstation.com/p/assets/images/images/047/874/369/large/flavio-freitas-sword-girl-6.jpg?1648651494" },
  ];

  return dataToPromise(data);
}
/* ======================================================== */