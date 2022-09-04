/* ========================================================
 *  MOCKED DATA
 *  Prevents unnecessary API usage during development
 * ======================================================== */
export function fetchMockedJSON() {
  const data = {
    "art": [
      { "title": "Mood (study)", "date": "2022/05/03", "thumb": "https://i.postimg.cc/N0btdrSs/mood2.png" },
      { "title": "Farm Girl (study)", "date": "2022/05/03", "thumb": "https://i.postimg.cc/mks0RL0X/Blob-Paint1920.png" },
      { "title": "Lumiel - Portrait (OC Redesigned)", "date": "2021/10/23", "thumb": "https://cdna.artstation.com/p/assets/images/images/042/644/882/large/flavio-freitas-lumiel-portrait-1920.jpg?1635087313" },
      { "title": "Lake at night (study)", "date": "2022/05/02", "thumb": "https://i.postimg.cc/Vv1k7wZc/bands2-2.png" },
      { "title": "Random doodle", "date": "2022/06/27", "thumb": "https://i.postimg.cc/rwHPm1mw/polishing-sketch.png" },
      { "title": "Style exploration", "date": "2022/06/13", "thumb": "https://i.postimg.cc/5NnGcdWv/size-bust.png" },
      { "title": "Enpitsu, the art bender", "date": "2021/02/28", "thumb": "https://cdnb.artstation.com/p/assets/images/images/035/424/627/large/flavio-freitas-flaf-enpitsu2-fhd.jpg?1614910695" },
      { "title": "Sword Girls 1", "date": "2022/03/16", "thumb": "https://cdnb.artstation.com/p/assets/images/images/047/874/387/large/flavio-freitas-sword-girl-1.jpg?1648651512" },
      { "title": "Sword Girls 2", "date": "2022/03/17", "thumb": "https://cdna.artstation.com/p/assets/images/images/047/874/392/large/flavio-freitas-sword-girl-2.jpg?1648651517" },
      { "title": "Sword Girls 3", "date": "2022/03/18", "thumb": "https://cdnb.artstation.com/p/assets/images/images/047/874/393/large/flavio-freitas-sword-girl-3.jpg?1648651524" },
      { "title": "Sword Girls 4", "date": "2022/03/19", "thumb": "https://cdnb.artstation.com/p/assets/images/images/047/874/403/large/flavio-freitas-sword-girl-4.jpg?1648651531" },
      { "title": "Sword Girls 5", "date": "2022/03/20", "thumb": "https://cdna.artstation.com/p/assets/images/images/047/874/408/large/flavio-freitas-sword-girl-5.jpg?1648651537" },
      { "title": "Sword Girls 6", "date": "2022/03/21", "thumb": "https://cdnb.artstation.com/p/assets/images/images/047/874/369/large/flavio-freitas-sword-girl-6.jpg?1648651494" },
    ],
    socials: [
      { "show": true, "name": "ArtStation", "icon": "mdi-artstation", "color": "blue", "href": "https://artstation.com/flafdraws" },
      { "show": true, "name": "Instagram", "icon": "mdi-instagram", "color": "pink-5", "href": "https://instagram.com/flafdraws" },
      { "show": true, "name": "DeviantArt", "icon": "mdi-deviantart", "color": "green", "href": "https://deviantart.com/flafdraws" },
      { "show": true, "name": "Twitter", "icon": "mdi-twitter", "color": "light-blue", "href": "https://twitter.com/flafdraws" },
      { "show": true, "name": "Youtube", "icon": "mdi-youtube", "color": "red", "href": "https://www.youtube.com/channel/UCLq1fsQwY9fP3dOF8JBhjLw?sub_confirmation=1" },
      { "show": true, "name": "Twitch", "icon": "mdi-twitch", "color": "purple-5", "href": "https://twitch.com/flafdraws" },
      { "show": true, "name": "Reddit", "icon": "mdi-reddit", "color": "orange-10", "href": "https://www.reddit.com/user/flafdraws" },
      { "show": true, "name": "Discord", "icon": "discord", "color": "deep-purple-4", "href": "https://discord.gg/U3vAmcuxSN" },
      { "show": true, "name": "Ko-fi", "icon": "img:kofi.svg", "color": "light-blue", "href": "https://ko-fi.com/flafdraws" }
    ],
    about: {
      "name": "FLÁVIO FREITAS",
      "title": "FREELANCE ILLUSTRATOR",
      "heading": "Welcome!",
      "text": [
        "I am Flaf, a freelance artist from Brazil.",
        "I like games, anime and honing my art skills. _〆(。。)",
        "",
        "You can find my art commissions info in this website.."
      ],
      "thanks": "Thank you for your visit!",
      "contact": [
        "flafdraws.buy@gmail.com",
        "flafdraws#5176 (Discord)"
      ],
      "avatar": "avatar.png"
    }
  };

  return dataToPromise(data);
}

// Private
const REQUEST_DELAY_MS = 500;
const dataToPromise = (data) => new Promise(function (resolve, reject) {
  setTimeout(() => resolve(data), REQUEST_DELAY_MS);
});
/* ======================================================== */