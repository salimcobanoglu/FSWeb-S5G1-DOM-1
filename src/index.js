const siteContent = {
  // BU NESNEYİ DEĞİŞTİRMEYİN
  nav: {
    "nav-item-1": "Servisler",
    "nav-item-2": "Ürünler",
    "nav-item-3": "Vizyon",
    "nav-item-4": "Özellikler",
    "nav-item-5": "Hakkımızda",
    "nav-item-6": "İletişim",
  },
  cta: {
    h1: "Bu DOM Mükemmel",
    button: "Başlayın",
  },
  "ana-içerik": {
    "özellikler-h4": "Özellikler",
    "özellikler-içerik":
      "Özellikler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "hakkımızda-h4": "Hakkında",
    "hakkımızda-içerik":
      "Hakkında içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "servisler-h4": "Servisler",
    "servisler-içeriği":
      "Servisler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "ürünler-h4": "Ürünler",
    "ürünler-içeriği":
      "Ürünler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vizyon-h4": "Vizyon",
    "vizyon-içeriği":
      "Vizyon içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  iletisim: {
    "iletişim-h4": "İletişim",
    adres: "100 numara Bilmem ne sokak Ankara'da bir semt, Türkiye",
    telefon: "+90 (123) 456-7899",
    email: "satis@birsirketsitesi.com.tr",
  },
  footer: {
    copyright: "Copyright Bir Şirket Sitesi 2022",
  },
  images: {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

console.log("Proje açıldı!");

/* Kodlar Buradan aşağıya */

const allLinks = document.querySelectorAll("nav a");
for (let i = 0; i < allLinks.length; i++) {
  allLinks[i].textContent = siteContent.nav[`nav-item-${i + 1}`];
}

const italicElements = document.querySelectorAll("header nav a");
for (let i = 0; i < italicElements.length; i++) {
  italicElements[i].setAttribute("class", "italic");
}

// for (let i = 0; i < italicElements.length; i++) {
//   italicElements[i].style.fontStyle = "italic";
// }

const h1 = document.querySelector("h1");
h1.textContent = siteContent.cta.h1;

const button = document.querySelector("button");
button.textContent = siteContent.cta.button;

const h4List = document.querySelectorAll("h4");
const h4Values = Object.keys(siteContent["ana-içerik"])
  .filter((key) => key.includes("-h4"))
  .map((key) => siteContent["ana-içerik"][key]);

for (let i = 0; i < h4List.length; i++) {
  h4List[i].textContent = h4Values[i];
}

//console.log(h4List);

const tumP = document.querySelectorAll("p");

const pValues = Object.keys(siteContent["ana-içerik"])
  .filter((key) => key.includes("-içeri"))
  .map((key) => siteContent["ana-içerik"][key]);

for (let i = 0; i < tumP.length; i++) {
  tumP[i].textContent = pValues[i];
}

//console.log(tumP);

const logoImg = document.getElementById("logo-img");
const CtaImg = document.getElementById("cta-img");
const MiddleImg = document.getElementById("middle-img");

logoImg.setAttribute("src", "http://localhost:9000/img/logo.png");
CtaImg.setAttribute("src", "http://localhost:9000/img/cta.png");
MiddleImg.setAttribute("src", "http://localhost:9000/img/accent.png");

// Sınıf(class) adları ekleyin
//  (menü içindeki) öğeleri italic(yatay) yapmak için class'ına italic atayın ve yalnız bırakın.
//  (footer içindeki) öğelerin bold(kalın) görünmesi için class'ına bold atayın ve yalnız bırakın.

const contacts = document.querySelectorAll(".contact h4, .contact p");
const contactKeys = Object.keys(siteContent.iletisim);
for (let i = 0; i < contactKeys.length; i++) {
  contacts[i].textContent = siteContent.iletisim[contactKeys[i]];
}

const bold = document.querySelector("footer a");
bold.textContent = siteContent.footer.copyright;
bold.classList.add("bold");
