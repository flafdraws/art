/* ========================================================
 *  MOCKED DATA
 *  Prevents unnecessary API usage during development
 * ======================================================== */
export function fetchMockedJSON() {
  const data = {
    banner: "https://raw.githubusercontent.com/flafdraws/gallery/main/banner/banner.jpg",
    art: [
      { title: "The Conjuring of Evil Duolingo", "date": "2024/10/08", thumb: "https://raw.githubusercontent.com/flafdraws/gallery/main/thumb/duolingo-witch.jpg", img: "https://raw.githubusercontent.com/flafdraws/gallery/main/full/duolingo-witch.jpg" },
      { title: "That support who doesn't heal", "date": "2024/10/02", thumb: "https://raw.githubusercontent.com/flafdraws/gallery/main/thumb/ro-priest.jpg", img: "https://raw.githubusercontent.com/flafdraws/gallery/main/full/ro-priest.jpg" },
      { title: "Miku Churrasqueira", "date": "2024/09/24", thumb: "https://raw.githubusercontent.com/flafdraws/gallery/main/thumb/mikuchurrasqueira.jpg", img: "https://raw.githubusercontent.com/flafdraws/gallery/main/full/mikuchurrasqueira.jpg" },
      { title: "犬✕猫・Dog x Cat", "date": "2024/07/18", thumb: "https://raw.githubusercontent.com/flafdraws/gallery/main/thumb/dogxcat.jpg", img: "https://raw.githubusercontent.com/flafdraws/gallery/main/full/dogxcat.jpg" },
      { title: "Misty & Psyduck", "date": "2024/07/05", thumb: "https://raw.githubusercontent.com/flafdraws/gallery/main/thumb/misty-psyduck.jpg", img: "https://raw.githubusercontent.com/flafdraws/gallery/main/full/misty-psyduck.jpg" },
      { title: "Paddle!", "date": "2024/05/01", thumb: "https://raw.githubusercontent.com/flafdraws/gallery/main/thumb/paddle.jpg", img: "https://raw.githubusercontent.com/flafdraws/gallery/main/full/paddle.png" },
      { title: "Your Honk", "date": "2024/05/24", thumb: "https://raw.githubusercontent.com/flafdraws/gallery/main/thumb/your-honk.jpg", img: "https://raw.githubusercontent.com/flafdraws/gallery/main/full/your-honk.png" },
      { title: "Mood (study)", "date": "2022/05/03", thumb: "https://raw.githubusercontent.com/flafdraws/gallery/main/thumb/mood.jpg", img: "https://raw.githubusercontent.com/flafdraws/gallery/main/full/mood.png" },
      { title: "Farm Girl (study)", "date": "2022/05/03", thumb: "https://raw.githubusercontent.com/flafdraws/gallery/main/thumb/farm-girl.jpg", img: "https://raw.githubusercontent.com/flafdraws/gallery/main/full/farm-girl.png" },
      { title: "Jinx icon", "date": "2022/05/03", thumb: "https://raw.githubusercontent.com/flafdraws/gallery/main/thumb/jinx.jpg", img: "https://raw.githubusercontent.com/flafdraws/gallery/main/full/jinx.png" },
      { title: "Zelda Facial Expression - Bored Shrek", "date": "2023/06/07", thumb: "https://raw.githubusercontent.com/flafdraws/gallery/main/thumb/zelda5.jpg", img: "https://raw.githubusercontent.com/flafdraws/gallery/main/full/zelda5.png" },
      { title: "Zelda Facial Expression - Ainsley Harriott", "date": "2023/06/07", thumb: "https://raw.githubusercontent.com/flafdraws/gallery/main/thumb/zelda4.jpg", img: "https://raw.githubusercontent.com/flafdraws/gallery/main/full/zelda4.png" },
      { title: "Zelda Facial Expression - Tobey Maguire", "date": "2023/06/07", thumb: "https://raw.githubusercontent.com/flafdraws/gallery/main/thumb/zelda3.jpg", img: "https://raw.githubusercontent.com/flafdraws/gallery/main/full/zelda3.png" },
      { title: "Zelda Facial Expression - Steve Carell", "date": "2023/06/07", thumb: "https://raw.githubusercontent.com/flafdraws/gallery/main/thumb/zelda2.jpg", img: "https://raw.githubusercontent.com/flafdraws/gallery/main/full/zelda2.png" },
      { title: "Zelda Facial Expression - Anthony Davis", "date": "2023/06/07", thumb: "https://raw.githubusercontent.com/flafdraws/gallery/main/thumb/zelda1.jpg", img: "https://raw.githubusercontent.com/flafdraws/gallery/main/full/zelda1.png" },
      { title: "Lumiel - Portrait (OC Redesigned)", "date": "2021/10/23", thumb: "https://raw.githubusercontent.com/flafdraws/gallery/main/thumb/lumiel-avatar.jpg", img: "https://raw.githubusercontent.com/flafdraws/gallery/main/full/lumiel-avatar.png" },
      { title: "Sword Girls 1", "date": "2022/03/16", thumb: "https://raw.githubusercontent.com/flafdraws/gallery/main/thumb/sword-girl-1.jpg", img: "https://raw.githubusercontent.com/flafdraws/gallery/main/full/sword-girl-1.png" },
      { title: "Sword Girls 2", "date": "2022/03/17", thumb: "https://raw.githubusercontent.com/flafdraws/gallery/main/thumb/sword-girl-2.jpg", img: "https://raw.githubusercontent.com/flafdraws/gallery/main/full/sword-girl-2.png" },
      { title: "Sword Girls 3", "date": "2022/03/18", thumb: "https://raw.githubusercontent.com/flafdraws/gallery/main/thumb/sword-girl-3.jpg", img: "https://raw.githubusercontent.com/flafdraws/gallery/main/full/sword-girl-3.png" },
      { title: "Sword Girls 4", "date": "2022/03/19", thumb: "https://raw.githubusercontent.com/flafdraws/gallery/main/thumb/sword-girl-4.jpg", img: "https://raw.githubusercontent.com/flafdraws/gallery/main/full/sword-girl-4.png" },
      { title: "Sword Girls 5", "date": "2022/03/20", thumb: "https://raw.githubusercontent.com/flafdraws/gallery/main/thumb/sword-girl-5.jpg", img: "https://raw.githubusercontent.com/flafdraws/gallery/main/full/sword-girl-5.png" },
      { title: "Sword Girls 6", "date": "2022/03/21", thumb: "https://raw.githubusercontent.com/flafdraws/gallery/main/thumb/sword-girl-6.jpg", img: "https://raw.githubusercontent.com/flafdraws/gallery/main/full/sword-girl-6.png" },
    ],
    socials: [
      { show: true, name: "X (Twitter)", icon: "fa-brands fa-x-twitter", color: "white", href: "https://twitter.com/flafdraws" },
      { show: true, name: "Instagram", icon: "fa-brands fa-instagram", color: "pink-5", href: "https://instagram.com/flafdraws" },
      { show: true, name: "Pixiv", icon: "fa-brands fa-pixiv", color: "light-blue", href: "https://www.pixiv.net/en/users/68301729" },
      { show: true, name: "Youtube", icon: "fa-brands fa-youtube", color: "red", href: "https://www.youtube.com/channel/UCLq1fsQwY9fP3dOF8JBhjLw?sub_confirmation=1" },
      { show: true, name: "Twitch", icon: "fa-brands fa-twitch", color: "purple-5", href: "https://twitch.com/flafdraws" }
    ],
    about: {
      name: "FLÁVIO FREITAS",
      title: "FREELANCE ILLUSTRATOR",
      heading: "Welcome!",
      text: "\
      I am Flaf, a freelance artist from Brazil.<br>\
      I like games, anime and honing my art skills. _〆(。。)<br>\
      <br>\
      You can find my art commissions info in this website..\
      ",
      thanks: "Thank you for your visit!",
      contact: [
        "flafdraws.buy@gmail.com",
        "flafdraws#5176 (Discord)"
      ],
      avatar: "https://raw.githubusercontent.com/flafdraws/gallery/main/ui/avatar.jpg"
    },
    tos: {
      header: "TERMS OF SERVICE",
      body: [
        { type: "h5", content: "Payment" },
        { type: "h6", content: "Split alternatives:" },
        {
          type: "ol", content: [
            "Half upfront, half on completion.",
            "Full payment before commision starts."
          ]
        },
        { type: "spacer", content: null },
        { type: "h6", content: "Accepted platforms / methods:" },
        {
          type: "ul", content: [
            "Wise",
            "Stripe",
            "Paypal",
            "BTC",
            "Ko-fi",
            "Pix (Brazil only)",
          ]
        },
        { type: "big-spacer", content: null },

        { type: "h5", content: "Revisions" },
        { type: "span", content: "Commissions are structured into stages. Once a stage is approved, no more revisions are allowed, backtracking a previous stage costs extra. The standard pipeline is:" },
        { type: "breadcrumbs", content: ["Thumbnail / Composition", "Blocking / Line art", "Base Painting", "Polishing"] },
        { type: "span", content: "Revising the current stage also cannot lead to unreasonable amount of iterations or drastically increase the amount of work planned for the commission." },
        { type: "big-spacer", content: null },

        { type: "h5", content: "Refunds" },
        { type: "span", content: "Commissions will not be refunded after payment unless the artist decides to cancel the commission. If the artist doesn't send any updates on the commission progress for more than 2 weeks (14 days) or the artist is at fault regarding deadlines, commission can be partially or fully refunded upon client request." },
        { type: "big-spacer", content: null },

        { type: "h5", content: "Termination" },
        { type: "span", content: "If the client fails to respond to revisions from the artist for a period longer than 30 days, the commission will deemed completed by both parties without need of refunds or further work." },
        { type: "big-spacer", content: null },

        { type: "h5", content: "Deadline" },
        { type: "span", content: "After payment commissions must be completed by both parties in the span of 2 months maximum. Beyond this, the contract has to be renewed or can lead to full or partial refunds depending on the progress of the artwork and agreement from both parties." },
        { type: "format", content: "<i>- Please note that most commissions usually <b>finish way sooner</b>, but a fully detailed splash art with multiple iterations - for instance - is a long process.</i>" },
        { type: "big-spacer", content: null },

        { type: "h5", content: "Privacy" },
        { type: "h6", content: "(Default: Public)" },
        { type: "span", content: "The artist reserves the right to use and publish the commission and work in progress on their social media, streaming platforms, banners, websites and portfolio unless negotiated otherwise." },
        { type: "big-spacer", content: null },

        { type: "h5", content: "License" },
        { type: "h6", content: "(Default: Personal)" },
        { type: "span", content: "The client is entitled to personal use only, this includes but is not limited to printing for personal display, wallpaper, posting as profile icon on websites/social medias. This does NOT include channel branding, product advertising or merchandising." },
        { type: "span", content: "Personal usage in social media does not require crediting the artist." },
        { type: "span", content: "The artist retains the commercial use rights to the work unless negotiated otherwise." },
      ]
    },
    buy: {
      formUrl: "https://docs.google.com/forms/u/2/d/e/1FAIpQLSdTIue8l5zYda8oF7SYjK0tIZSZ3Ibg6ZTn4N-MUcP6xv4OGg/formResponse"
    }
  };

  return dataToPromise(data);
}

// Private
const REQUEST_DELAY_MS = 100;
const dataToPromise = (data) => new Promise(function (resolve, reject) {
  setTimeout(() => resolve(data), REQUEST_DELAY_MS);
});
/* ======================================================== */