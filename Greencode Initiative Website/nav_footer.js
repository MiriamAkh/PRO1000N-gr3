// Lager en Favicon
let faviconLink = document.createElement('link');
faviconLink.rel = 'icon';
faviconLink.type = 'image/x-icon'; // Change to "image/x-icon" if using a .ico file
faviconLink.href = 'images/favicon.ico'; // Update the path to your favicon
document.head.appendChild(faviconLink);

//Legger inn ikke-standard fonter

let styleSheets = [
  {href: "https://fonts.googleapis.com/css?family=Hammersmith One"},
  {href: "https://fonts.googleapis.com/css?family=Roboto"},
  {href: "nav_footer_styles.css"}
];

styleSheets.forEach(style => {
  let link = document.createElement('link');
  link.href = style.href;
  link.rel = "stylesheet";
  document.head.appendChild(link);
});

//Navbar

//Funksjon som lager en knapp med knapptekst men uten funksjonalitet. 
// Brukes av createButtonLink og createButtonNedtrekk
function createButton(knappTekst) {
  let p = document.createElement("p");
  p.classList.add("nav-knapp");
  p.innerHTML = knappTekst;
  
  return p;
}

//Funksjon som leggerfunksjonalitet inn i en menyknapp som ikke skal være nedtrekk
function createButtonLink(knappTekst, link) {
  let li1 = document.createElement("li");
  li1.classList.add("nivå1-punkt")
  p = createButton(knappTekst)
  p.addEventListener("click", function() {
      window.location.href = link;
    });   
  li1.appendChild(p);
  ul1.appendChild(li1)

}

//Funksjon som leggerfunksjonalitet inn i en menyknapp som skal være nedtrekk
function createButtonNedtrekk(knappTekst, liste) {
  
  //Lager hovedknappen man hovrer over for å få nedtrekksmenyen frem
  let li1 = document.createElement("li");
  li1.classList.add("nivå1-punkt")
  let p = createButton(knappTekst);
  p.classList.add("nedtrekk-knapp")
  li1.appendChild(p);
  
  
  //Lager nedtrekksmenyen
  let ul2 = document.createElement("ul");
  ul2.classList.add("nivå2");
  liste.forEach(knapp => {
    let li2 = document.createElement("li");
    li2.classList.add("nivå2-punkt")
    let a = document.createElement("a");
    a.href = knapp.link;
    a.innerHTML = knapp.tekst
    a.classList.add("nav-knapp")
    li2.appendChild(a)
    ul2.appendChild(li2)  
  })
  li1.addEventListener("click", function() {
    ul2.classList.toggle("aktiv");
  });
  li1.appendChild(ul2);
  ul1.appendChild(li1);
  navbar.appendChild(ul1);
}


//Lager et alias for navbaren
let navbar = document.getElementById("navbar");

//Setter logo inn til venstre i navbaren
let divLogo = document.createElement("div");
divLogo.addEventListener("click", function() {
  window.location.href = "index.html";
});
divLogo.classList.add("logo")
let logoTopp = document.createElement("p");
logoTopp.classList.add("logo-topp", "logo-tekst");
logoTopp.innerHTML = `GreenCode`;
divLogo.appendChild(logoTopp);
let logoBunn = document.createElement("p");
logoBunn.classList.add("logo-bunn", "logo-tekst");
logoBunn.innerHTML = `Initiative`;
divLogo.appendChild(logoBunn);
navbar.appendChild(divLogo);


// Lister med undermenyer
let baerekraft = [
  {tekst: "Grønn kode", link: "1_bærekraft_artikler.html"},
  {tekst: "Case-Studie", link: "1_bærekraft_casestudie.html"},
]

let sertifisering = [
  {tekst: "Informasjon", link: "3_sertifisering_info.html"},
  {tekst: "Søknadsskjema", link: "3_sertifisering_søknad.html"},
]

let omOssMeny = [
  {tekst: "Hvem er vi", link: "4_omoss_hvemervi.html"},
  {tekst: "Kontakt", link: "4_omoss_kontakt.html"},
  {tekst: "FAQ", link: "4_omoss_FAQ.html"},
]



let ul1 = document.createElement("ul");
ul1.classList.add("nivå1");

//Lager menyknappene
createButtonNedtrekk(`BÆREKRAFT<span class="pil">&#x25BE</span>`, baerekraft);
createButtonLink("RESSURSER", "2_ressurser.html");
createButtonNedtrekk(`SERTIFISERING<span class="pil">&#x25BE</span>`, sertifisering);
createButtonNedtrekk(`OM OSS<span class="pil">&#x25BE</span> &nbsp`, omOssMeny);

let divHam = document.createElement("div");
divHam.classList.add("hamburger")
for (let i = 0; i < 3; i++) {
  let span = document.createElement("span");
  divHam.appendChild(span)
}
divHam.addEventListener("click", function() {
  ul1.classList.toggle("aktiv");
});
navbar.appendChild(ul1)
navbar.appendChild(divHam)





//Footer

let footer = document.getElementById("footer");
let footDivLenker = document.createElement("div");
footDivLenker.classList.add("footer-content");
let footLenker = [
  {tekst: `<img src="images/footerpil.png" alt="Arrow Icon" class="footer-icon"><span>Til toppen</span>`, link: "#", class: "top-link"},
  {tekst: "Kontakt", link: "4_omoss_kontakt.html", class: "footer-link"},
  {tekst: "FAQ", link: "4_omoss_FAQ.html", class: "footer-link"},
  {tekst: "Kildehenvisninger", link: "0_kilder.html", class: "footer-link"}
];

footLenker.forEach(knapp => {
  let a = document.createElement("a");
  a.classList.add(knapp.class);
  a.href = knapp.link;
  a.innerHTML = knapp.tekst;
  footDivLenker.appendChild(a);
});



let footSpan = document.createElement("span");
footSpan.classList.add("footer-text");
footSpan.innerHTML = `Nettstedet er utviklet av Team 3 for <i>GreenCode Initiative © 2025.</i>`;
footDivLenker.appendChild(footSpan);
footer.appendChild(footDivLenker);

let footDivIcons = document.createElement("div");
footDivIcons.classList.add("footer-icons");

let footerIcons = [
  {src: "images/fIcon1.png", alt: "Footer Icon Facebook", link: "https://www.facebook.com"},
  {src: "images/fIcon2.png", alt: "Footer Icon Instagram", link: "https://www.instagram.com"},
  {src: "images/fIcon3.png", alt: "Footer Icon Leked In", link: "https://www.linkedin.com"},
  {src: "images/fIcon4.png", alt: "Footer Icon X", link: "https://www.x.com"},
  {src: "images/fIcon5.png", alt: "Footer Icon Youtube", link: "https://www.youtube.com"}
]

footerIcons.forEach(icon => {
  let a = document.createElement("a");
  a.href = icon.link;
  a.target = "_blank";
  let img = document.createElement("img");
  img.src = icon.src;
  img.alt = icon.alt;
  a.appendChild(img);
  footDivIcons.appendChild(a);
})
footer.appendChild(footDivIcons);

