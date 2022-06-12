let firebaseURL = "https://pozorista-srbije-548a6-default-rtdb.europe-west1.firebasedatabase.app/korisnici.json";
const firebaseURL1 = "https://pozorista-srbije-548a6-default-rtdb.europe-west1.firebasedatabase.app/";
let deo_za_izmenu = document.getElementById("pomocni-korisnik-pojedinacno-js");
let request = new XMLHttpRequest();
const url = new URL(window.location.href);

var korisnik;
var idKorisnika;

request.onreadystatechange = function () {

    if (this.readyState == 4) {
        if (this.status == 200) {
            idKorisnika = makeIdFromUrl();
            let korisnici = JSON.parse(this.responseText);
            for (let key in korisnici) {
                if (key == idKorisnika) {
                    
                     korisnik = korisnici[key];
                    createDivKorisnik(korisnik);
                }
            }
        }
        else {
            alert("Greska: " + this.status);
        }
    }
};

function createDivKorisnik(korisnik){
    let template = `
    <p class="korisnik-podatak">Ime korisnika: ${korisnik.ime} </p>

    <p class="korisnik-podatak">Prezime korisnika: ${korisnik.prezime} </p>

    <p class="korisnik-podatak">Korisnicko ime: ${korisnik.korisnickoIme} </p>

    <p class="korisnik-podatak">Lozinka: ${korisnik.lozinka}  </p>
    <p class="korisnik-podatak">Datum rođenja: ${korisnik.datumRodjenja}</p>

    <p class="korisnik-podatak">Adresa: ${korisnik.adresa}</p>

    <p class="korisnik-podatak">Broj telefona: ${korisnik.telefon}</p>
    
    <p class="korisnik-podatak">Email: ${korisnik.email}</p>
    
    <p class="korisnik-podatak-poslednji">Status: ${korisnik.status}</p>`;

    deo_za_izmenu.innerHTML += template;
}

function makeIdFromUrl() {


        //let location = decodeURI(window.location.toString());
       // let index = location.indexOf("?id=") + 1
       // let idPredstave = location.substring(index, location.length);
        let id = url.href.split("?")[1];
        return id;
    }


request.open("GET", firebaseURL);
request.send();

let noviel = document.getElementById("obrisi-dugme");
noviel.addEventListener("click", function (e) {
    // Sprecicemo slanje forme na server, jer zelimo mi da imamo kontrolu nad time
    // e.preventDefault();

    if (confirm("Da li ste sigurni da zelite da deaktivirate ovog korisnika?")) {
       
 

    if (korisnik.status == "neaktivan") {
        alert("Korisnik je vec deaktiviran!");
        location.reload();
    }
    
    else {
        let noviKorisnik = {
            "adresa": korisnik.adresa,
            "datumRodjenja": korisnik.datumRodjenja,
            "email": korisnik.email,
            "ime": korisnik.ime,
            "lozinka": korisnik.lozinka,
            "prezime": korisnik.prezime,
            "telefon": korisnik.telefon,
            "korisnickoIme": korisnik.korisnickoIme,
            "status": "neaktivan"
        }


        //Dijalog ubaci

        updateUser(noviKorisnik);
        alert("Korisnik je deaktiviran!");
        location.reload();
        }
    }
    else {
        location.reload();
    }
    

});

function updateUser(korisnik){
    let request = new XMLHttpRequest();
    let korisnikURL = firebaseURL1 + "korisnici/" + idKorisnika + ".json";
    request.open("PUT", korisnikURL);
    request.send(JSON.stringify(korisnik));
}



let noviel1 = document.getElementById("aktiviraj-dugme");
noviel1.addEventListener("click", function (e) {
    // Sprecicemo slanje forme na server, jer zelimo mi da imamo kontrolu nad time
    // e.preventDefault();
    

    if (confirm("Da li ste sigurni da zelite da aktivirate ovog korisnika?")) {
        if (korisnik.status == "aktivan") {
            alert("Korisnik je vec aktivan!");
            location.reload();
        }
    
        else {
            let noviKorisnik = {
                "adresa": korisnik.adresa,
                "datumRodjenja": korisnik.datumRodjenja,
                "email": korisnik.email,
                "ime": korisnik.ime,
                "lozinka": korisnik.lozinka,
                "prezime": korisnik.prezime,
                "telefon": korisnik.telefon,
                "korisnickoIme": korisnik.korisnickoIme,
                "status": "aktivan"
            }


            //Dijalog ubaci

            updateUser(noviKorisnik);
            alert("Korisnik je aktiviran!");
            location.reload();
        }
    }
    else {
        location.reload();
    }
    

});


let noviel2 = document.getElementById("obrisikorisnika-dugme");
noviel2.onclick = function(){
    if (confirm("Jeste li sigurni da želite da obrišete korisnika?")) {
      alert("Korisnik je obrisan");
        deleteUser(idKorisnika);
        window.open("prikazkorisnika.html");
    } else {
        alert("Odustali ste");
        location.reload();
    }

};
  
function deleteUser(idKorisnika){
    let request3 = new XMLHttpRequest();
  
      request3.onreadystatechange = function(){
          if(this.readyState == 4){
              if(this.status == 200){
  
                  users = JSON.parse(request.responseText);
                  //console.log(users);
              }
              else{
                  alert("Greška prilikom učitavanja svih korisnika.");
              }
          }
      };
    request3.open("DELETE",firebaseURL1 + "korisnici/" + idKorisnika + ".json");
    request3.send();
  }