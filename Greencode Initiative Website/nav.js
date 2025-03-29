let navbar = document.getElementById("navbar");
//Setter inn til venstre i navbaren
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


//lager en knapp med knapptekst og knappegenskaper, men uten funksjon. Brukes av createButtonLink og createButtonNedtrekk
function createButton(knappTekst) {
  let p = document.createElement("p");
  p.classList.add("nav-knapp");
  p.innerHTML = knappTekst;
  return p;
}

//Lager en menyknapp som ikke skal værenedtrekk
function createButtonLink(knappTekst, link) {
  p = createButton(knappTekst)
  p.addEventListener("click", function() {
      window.location.href = link;
    });   
  navbar.appendChild(p);
}

//Lager en nedrekksmeny
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



let omBaerekraft = [
  {tekst: "Grønn kode", link: "https://www.vg.no"},
  {tekst: "Case-Studie", link: "https://www.vg.no"},
]
createButtonNedtrekk(`OM BÆREKRAFT<span class="pil">&#x25BE</span>`, omBaerekraft);


createButtonLink("RESSURSER", "https://www.vg.no");

let sertifisering = [
  {tekst: "Informasjon", link: "https://www.vg.no"},
  {tekst: "Søknadsskjema", link: "https://www.vg.no"},
]

createButtonNedtrekk(`SERTIFISERING<span class="pil">&#x25BE</span>`, sertifisering);

let omOssMeny = [
  {tekst: "Hvem er vi", link: "https://www.vg.no"},
  {tekst: "Kontakt", link: "https://www.vg.no"},
  {tekst: "FAQ", link: "https://www.vg.no"},
]
createButtonNedtrekk(`OM OSS<span class="pil">&#x25BE</span> &nbsp`, omOssMeny);

let div = document.createElement("div")
div.style.width = "8px"
navbar.appendChild(div);