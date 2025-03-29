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
  p = createButton(knappTekst)
  p.addEventListener("click", function() {
      window.location.href = link;
    });   
  navbar.appendChild(p);
}

//Funksjon som leggerfunksjonalitet inn i en menyknapp som skal være nedtrekk
function createButtonNedtrekk(knappTekst, liste) {
  //Lager hovedknappen man hovrer over for å få nedtrekksmenyen frem
  let hUl = document.createElement("ul");
  hUl.classList.add("nedtrekk-hovedmeny");
  let hLi = document.createElement("li");
  hLi.classList.add("nedtrekk-hovedmeny-punkt");
  let p = createButton(knappTekst);
  p.classList.add("nedtrekk-hovedmeny-knapp");
  hLi.appendChild(p);
  
  //Lager nedtrekksmenyen
  let uUl = document.createElement("ul");
  uUl.classList.add("nedtrekk-undermeny");
  liste.forEach(knapp => {
    let uLi = document.createElement("li");
    let a = document.createElement("a");
    a.href = knapp.link;
    a.innerHTML = knapp.tekst
    a.classList.add("nav-knapp")
    uLi.appendChild(a)
    uUl.appendChild(uLi)
  })
  hLi.appendChild(uUl);
  hUl.appendChild(hLi);
  navbar.appendChild(hUl);
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
let omBaerekraft = [
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

//Lager menyknappene
createButtonNedtrekk(`OM BÆREKRAFT<span class="pil">&#x25BE</span>`, omBaerekraft);
createButtonLink("RESSURSER", "2_ressurser.html");
createButtonNedtrekk(`SERTIFISERING<span class="pil">&#x25BE</span>`, sertifisering);
createButtonNedtrekk(`OM OSS<span class="pil">&#x25BE</span> &nbsp`, omOssMeny);

//Legger til et tomt element til slutt for å få litt avstand til scroll
let div = document.createElement("div")
div.style.width = "0"
navbar.appendChild(div);