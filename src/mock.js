/* ========================================================
 *  MOCKED DATA
 *  Prevents unnecessary API usage during development
 * ======================================================== */
export function fetchMockedJSON() {
  const data = {
    banner: "https://raw.githubusercontent.com/flafdraws/gallery/main/banner/farm-girl.png",
    art: [
      { title: "Mood (study)", "date": "2022/05/03", thumb: "https://raw.githubusercontent.com/flafdraws/gallery/main/thumb/mood.png", img: "https://raw.githubusercontent.com/flafdraws/gallery/main/full/mood.png" },
      { title: "Farm Girl (study)", "date": "2022/05/03", thumb: "https://raw.githubusercontent.com/flafdraws/gallery/main/thumb/farm-girl.png", img: "https://raw.githubusercontent.com/flafdraws/gallery/main/full/farm-girl.png" },
      { title: "Lumiel - Portrait (OC Redesigned)", "date": "2021/10/23", thumb: "https://raw.githubusercontent.com/flafdraws/gallery/main/thumb/lumiel-avatar.png", img: "https://raw.githubusercontent.com/flafdraws/gallery/main/full/lumiel-avatar.png" },
      { title: "Lake at night (study)", "date": "2022/05/02", thumb: "https://raw.githubusercontent.com/flafdraws/gallery/main/thumb/lake-night.png", img: "https://raw.githubusercontent.com/flafdraws/gallery/main/full/lake-night.png" },
      { title: "Random doodle", "date": "2022/06/27", thumb: "https://raw.githubusercontent.com/flafdraws/gallery/main/thumb/doodle.png", img: "https://raw.githubusercontent.com/flafdraws/gallery/main/full/doodle.png" },
      { title: "Style exploration", "date": "2022/06/13", thumb: "https://raw.githubusercontent.com/flafdraws/gallery/main/thumb/style-exploration.png", img: "https://raw.githubusercontent.com/flafdraws/gallery/main/full/style-exploration.png" },
      { title: "Enpitsu, the art bender", "date": "2021/02/28", thumb: "https://raw.githubusercontent.com/flafdraws/gallery/main/thumb/enpitsu.png", img: "https://raw.githubusercontent.com/flafdraws/gallery/main/full/enpitsu.png" },
      { title: "Sword Girls 1", "date": "2022/03/16", thumb: "https://raw.githubusercontent.com/flafdraws/gallery/main/thumb/sword-girl-1.png", img: "https://raw.githubusercontent.com/flafdraws/gallery/main/full/sword-girl-1.png" },
      { title: "Sword Girls 2", "date": "2022/03/17", thumb: "https://raw.githubusercontent.com/flafdraws/gallery/main/thumb/sword-girl-2.png", img: "https://raw.githubusercontent.com/flafdraws/gallery/main/full/sword-girl-2.png" },
      { title: "Sword Girls 3", "date": "2022/03/18", thumb: "https://raw.githubusercontent.com/flafdraws/gallery/main/thumb/sword-girl-3.png", img: "https://raw.githubusercontent.com/flafdraws/gallery/main/full/sword-girl-3.png" },
      { title: "Sword Girls 4", "date": "2022/03/19", thumb: "https://raw.githubusercontent.com/flafdraws/gallery/main/thumb/sword-girl-4.png", img: "https://raw.githubusercontent.com/flafdraws/gallery/main/full/sword-girl-4.png" },
      { title: "Sword Girls 5", "date": "2022/03/20", thumb: "https://raw.githubusercontent.com/flafdraws/gallery/main/thumb/sword-girl-5.png", img: "https://raw.githubusercontent.com/flafdraws/gallery/main/full/sword-girl-5.png" },
      { title: "Sword Girls 6", "date": "2022/03/21", thumb: "https://raw.githubusercontent.com/flafdraws/gallery/main/thumb/sword-girl-6.png", img: "https://raw.githubusercontent.com/flafdraws/gallery/main/full/sword-girl-6.png" },
    ],
    socials: [
      { show: true, name: "ArtStation", icon: "mdi-artstation", color: "blue", href: "https://artstation.com/flafdraws" },
      { show: true, name: "Instagram", icon: "mdi-instagram", color: "pink-5", href: "https://instagram.com/flafdraws" },
      { show: true, name: "DeviantArt", icon: "mdi-deviantart", color: "green", href: "https://deviantart.com/flafdraws" },
      { show: true, name: "Twitter", icon: "mdi-twitter", color: "light-blue", href: "https://twitter.com/flafdraws" },
      { show: true, name: "Youtube", icon: "mdi-youtube", color: "red", href: "https://www.youtube.com/channel/UCLq1fsQwY9fP3dOF8JBhjLw?sub_confirmation=1" },
      { show: true, name: "Twitch", icon: "mdi-twitch", color: "purple-5", href: "https://twitch.com/flafdraws" },
      { show: true, name: "Reddit", icon: "mdi-reddit", color: "orange-10", href: "https://www.reddit.com/user/flafdraws" },
      { show: true, name: "Discord", icon: "discord", color: "deep-purple-4", href: "https://discord.gg/U3vAmcuxSN" },
      { show: true, name: "Ko-fi", icon: "img:kofi.svg", color: "light-blue", href: "https://ko-fi.com/flafdraws" }
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
      avatar: "avatar.png"
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
            "Paypal",
            "Wise",
            "Ko-fi",
            "Pix (Brazil only)"
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
        { type: "span", content: "If the client fails to respond to revisions from the artist for a period longer than 14 days, the commission will deemed completed by both parties without need of refunds or further work." },
        { type: "big-spacer", content: null },

        { type: "h5", content: "Deadline" },
        { type: "span", content: "After payment commissions must be completed by both parties in the span of 2 months maximum. Beyond this, the contract has to be renewed or can lead to full or partial refunds depending on the progress of the artwork and agreement from both parties." },
        { type: "format", content: "<i>- Please note that most commissions usually <b>finish way sooner</b>, but a fully detailed splash art with multiple iterations - for instance - is a long process.</i>" },
        { type: "big-spacer", content: null },

        { type: "h5", content: "Privacy Level" },
        { type: "h6", content: "(Default: Public)" },
        { type: "span", content: "The artist reserves the right to use and publish the commission and work in progress on their social media, streaming platforms, banners, websites and portfolio unless negotiated otherwise." },
        { type: "big-spacer", content: null },

        { type: "h5", content: "License" },
        { type: "h6", content: "(Default: Personal)" },
        { type: "span", content: "The client has the right to use the commission for their personal usage, this includes but not limited to print for personal display, wallpaper, posted as profile icons on websites/social medias as long as they give proper credits to the artist. The artist retains the commercial use licenses of the work unless negotiated otherwise." },
        { type: "mega-spacer", content: null },

        { type: "h4", content: "COMMERCIAL USE LICENSES" },
        { type: "h5", content: "Usage" },
        { type: "span", content: "The purchaser of commercial use licenses have the rights to use the commission as merchandise to sell, promote, distribute, produce and for any other commercial purposes as long as they don't involve modifying the product or impacting negatively the artist." },
        { type: "span", content: "If you want to re-sell artworks or use them as assets within any sort of application, contact me for a personalized negotiation." },
        { type: "big-spacer", content: null },

        { type: "h5", content: "Credits" },
        { type: "span", content: "The purchaser of commercial use is still required to give proper credits to the artist while using or exposing the work." },
        { type: "big-spacer", content: null },

        { type: "h5", content: "License Options" },
        {
          type: "format", content: "\
        The commercial licensing options are listed in a table at <i>Prices tab</i>.<br>\
        * Additional fees do stack by <b>sum</b>, not by multiplying - they are applied to the base price always. E.g.:"
        },
        { type: "format", content: "<b>Correct</b><br>A1 + B = Base + 50% + 100% = +150% = x 2.5" },
        { type: "format", content: "<b>Wrong</b><br>A1 + B = Base x 1.5 x 2 = x 3 = +200%." },
      ]
    },
    prices: {
      header: undefined,
      body: [
        { type: "h5", content: "Notes", icon: "mdi-comment-alert", iconColor: "warning" },
        {
          type: "ul", content: [
            "All prices listed here are <b>estimated</b> and may change based on multiple factors (e.g.: character detail, scene detail, render level).",
            "Prices are <b>limited time offers</b> and are not guaranteed to stay the same in the future.",
            "Everything is negotiable - <i>\"Dormammu, I've come to bargain\"</i>",
            "Remember to check the TOS tab for in-depth details.",
          ]
        },
        { type: "mega-spacer", content: null },

        { type: "h4", content: "CHARACTERS" },
        {
          type: "table", content: [
            ["Item", "Price (Line Art)", "Price (Painting)"],
            ["Bust", "+ 30 USD", "+ 60 USD"],
            ["Half-body", "+ 40 USD", "+ 75 USD"],
            ["Full-body", "+ 50 USD", "+ 90 USD"],
            ["Additional Character", "+ 60%", "+ 60%"]
          ]
        },
        {
          type: "gallery", content: [
            { thumb: "https://raw.githubusercontent.com/flafdraws/gallery/main/thumb/style-exploration.png", img: "https://raw.githubusercontent.com/flafdraws/gallery/main/full/style-exploration.png" },
            { thumb: "https://raw.githubusercontent.com/flafdraws/gallery/main/thumb/sword-girl-6.png", img: "https://raw.githubusercontent.com/flafdraws/gallery/main/full/sword-girl-6.png" },
            { thumb: "https://raw.githubusercontent.com/flafdraws/gallery/main/thumb/mood.png", img: "https://raw.githubusercontent.com/flafdraws/gallery/main/full/mood.png" },
          ]
        },
        { type: "mega-spacer", content: null },

        { type: "h4", content: "BACKGROUND" },
        {
          type: "table", content: [
            ["Item", "Price (Line Art)", "Price (Painting)"],
            ["Plain Color or Gradient", "Free", "Free"],
            ["Abstract Design", "+ 10 USD", "+ 20 USD"],
            ["Simple Environment", "+ 30 USD", "+ 50 USD"],
            ["Complex Scene (Perspective, architecture...)", "+ 60 USD", "+ 90 USD"]
          ]
        },
        {
          type: "gallery", content: [
            { thumb: "https://raw.githubusercontent.com/flafdraws/gallery/main/thumb/lake-night.png", img: "https://raw.githubusercontent.com/flafdraws/gallery/main/full/lake-night.png" },
          ]
        },
        { type: "big-spacer", content: null },

        { type: "h4", content: "RUSH ORDER" },
        {
          type: "table", content: [
            ["Rush", "Description", "Price Increase"],
            ["Boost", "⏱️🔽 Reduce deadline", "+ 50%"],
            ["Nitro", "⏱️🔽 Reduce deadline +", "+ 100%"],
          ]
        },
        { type: "mega-spacer", content: null },

        { type: "h4", content: "COMMERCIAL LICENSES" },
        {
          type: "table", content: [
            ["License", "Description", "Price Increase"],
            ["A1: Branding only", "Promotional content linked to commercial projects: online shops, Youtube Twitch, influencer branding...", "+ 50%"],
            ["A2: Indirect Merch", "Merchandise where the art is not the main focus itself: book covers, commercial concept art, game assets...", "+ 100%"],
            ["A3: Direct Merch", "Merchandise where the art itself is the main focus: keychains, pillow covers, t-shirts...", "+ 200%"],
            ["B: Privacy", "Private commission: the work remains secret until agreed date.", "+ 50%"]
          ]
        },
      ],
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