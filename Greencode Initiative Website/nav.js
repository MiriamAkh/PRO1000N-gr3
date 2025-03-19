//Setter inn til venstre i navbaren
let img = document.createElement("img");
img.src = "images/logo.png";
img.style.flex = 1;
document.getElementById("navbar").appendChild(img);

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
  document.getElementById("navbar").appendChild(p);
}

//Lager en nedrekksmeny
function createButtonNedtrekk(knappTekst, liste) {
  //Lager hovedknappen man hovrer over for å få nedtrekksmenyen frem
  let hUl = document.createElement("ul");
  hUl.classList.add("nedtrekk-hovedmeny");
  let hLi = document.createElement("li");
  hLi.classList.add("nedtrekk-hovedmeny-punkt");
  knappTekst = `${knappTekst} <span class="pil">&#x25BE</span>`
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
  document.getElementById("navbar").appendChild(hUl);
}



let omBaerekraft = [
  {tekst: "Grønn kode", link: "https://www.vg.no"},
  {tekst: "Case-Studie", link: "https://www.vg.no"},
]
createButtonNedtrekk("OM BÆREKRAFT", omBaerekraft);


createButtonLink("Ressurser", "https://www.vg.no");
createButtonLink("SERTIFISERING", "https://www.vg.no");

let omOssMeny = [
  {tekst: "Hvem er vi", link: "https://www.vg.no"},
  {tekst: "Kontakt", link: "https://www.vg.no"},
  {tekst: "FAQ", link: "https://www.vg.no"},
]
createButtonNedtrekk("OM OSS", omOssMeny);

let navHoyde = document.getElementById("navbar").offsetHeight;
document.getElementById("nav-bakgrunn").style.height = navHoyde + "px";



//<nav id="navbar">
//<ul class="nedtrekk-hovedmeny">
//  <li class="nedtrekk-hovedmeny-punkt">
//    <p class="nav-knapp nedtrekk-hovedmeny-knapp"> 
//      OM OSS <span class="pil">▼</span>
//   </p>
//    <ul class="nedtrekk-undermeny">
//      <li><a href="http://www.vg.no">HVEM ER VI?</a></li>
//      <li><a href="#">KONTAKT</a></li>
//      <li><a href="#">FAQ</a></li>
//    </ul>
//  </li>
//</ul>
//</nav> 