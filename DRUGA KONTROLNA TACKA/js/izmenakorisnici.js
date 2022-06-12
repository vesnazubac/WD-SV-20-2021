// let firebaseURL="https://pozorista-srbije-548a6-default-rtdb.europe-west1.firebasedatabase.app/korisnici.json";
// let deo_za_izmenu = document.getElementById("forma-korisnici");
// let request = new XMLHttpRequest();
// const url = new URL(window.location.href);


// request.onreadystatechange = function () {

//     if (this.readyState == 4) {
//         if (this.status == 200) {
//             let korisnikID = makeIdFromUrl();
//             let korisnici = JSON.parse(this.responseText);
//             for (let key in korisnici) {
//                 if (key == korisnikID) {
                    
//                     let korisnik = korisnici[key];
//                     createDivKorisnik(korisnik);
//                 }
//             }
//         }
//         else {
//             alert("Greska: " + this.status);
//         }
//     }
// };

// function createDivKorisnik(korisnik){
//     let template = ` <h2 class="naslov-izmena-korisnici">Izmena podataka o korinsicima</h2>

//     <p class="paragraf-izmenakorisnici">Promenite određene podatke o korisniku.Polja oznacena * su obavezna.</p>

//  <form id="forma-korisnici">

  

//     <input type="email" placeholder="NOV EMAIL:" class="inputi-registracija"  id="email-korisnik-js" value="${korisnik.email}"  required>
//     <p class="zvezdica">*</p>
   
   
//     <input type="text" placeholder="NOVO KORISNIČKO IME:" class="inputi-registracija" id="korisnicko-ime-js-izmena" value="${korisnik.korisnickoIme}" required>
//     <p class="zvezdica">*</p>

//     <input type="password" placeholder=" NOVA LOZINKA:" class="inputi-registracija" id="lozinka-js" value="${korisnik.lozinka}"  required>
//     <p class="zvezdica">*</p>

    



//     <input type="text" placeholder="NOVA ADRESA:" class="inputi-registracija"  id="adresa-js" value="${korisnik.adresa}" required>
//     <p class="zvezdica">*</p>

//     <input type="text" placeholder=" NOV BROJ TELEFONA:" class="inputi-registracija" id="telefon-js"  value="${korisnik.telefon}" required>
//     <p class="zvezdica">*</p>
 
//    `;

//     deo_za_izmenu.innerHTML += template;
// }

// function makeIdFromUrl() {


//         //let location = decodeURI(window.location.toString());
//        // let index = location.indexOf("?id=") + 1
//        // let idPredstave = location.substring(index, location.length);
//         let id = url.href.split("?")[1];
//         return id;
//     }


// request.open("GET", firebaseURL);
// request.send();



// dugme = document.getElementById("izmenikorisnike-dugmee");



// dugme.addEventListener("click", function validate() {

//     var regexEmail1 =
//    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

//     var regexPsw1 = /^(?=.*\d)(?=.*[a-z])(?=.*[a-zA-Z]).{8,}$/;

//    var regexBroj1 = /[0-9]{9}/;

//     let email = document.getElementById("email-korisnik-js").value.trim();
//     let korisnicko_ime = document.getElementById("korisnicko-ime-js-izmena").value.trim();
//     let lozinka = document.getElementById("lozinka-js").value.trim();
//     let adresa = document.getElementById("adresa-js").value.trim();
//     let brTelefona = document.getElementById("telefon-js").value.trim();


//     if ((email == "") || (korisnicko_ime == "") || (lozinka == "") || (adresa== "") || (brTelefona.value == "")) {

//         alert("Morate popuniti sve podatke!");
//     } else if (!email.match(regexEmail1)) {
//         alert("Email nije ispravan!");
//         email = "";
        
//     } else if (!lozinka.match(regexPsw1)) {
//         alert("Lozinka mora imati bar 8 karaktera i jedno slovo! ");
//         lozinka= "";
//     } else if(!brTelefona.match(regexBroj1)){
//         alert("Broj mora imati devet karaktera!");
//         brTelefona = "";
//     }
//     else {
//         alert("Podaci su uspesno izmenjeni!");
//     }
// });


const url = new URL(window.location.href);
const firebaseURL = "https://pozorista-srbije-548a6-default-rtdb.europe-west1.firebasedatabase.app/";
const korisniciUrl = "https://pozorista-srbije-548a6-default-rtdb.europe-west1.firebasedatabase.app/korisnici.json";


let form = document.getElementById("forma-korisnici");
const idKorisnika = makeIdFromUrl();
let listOfUsernames;
let current_username;
let korisnik;



let request = new XMLHttpRequest();
request.onreadystatechange = function (e) {
  if (this.readyState == 4) {
    if (this.status == 200) {
      let korisnici = JSON.parse(this.responseText);
        listOfUsernames = getAllUsernames(korisnici);
        console.log(listOfUsernames);
      
      for (let key in korisnici){
        if (key == idKorisnika){
            korisnik = korisnici[key];
            current_username = korisnik.korisnickoIme;
            console.log(current_username);
            template = `<input type="email" placeholder="NOV EMAIL:" class="inputi-registracija" id ="email-js" value="${korisnik.email}" required>
            <p class="zvezdica">*</p>
           
           
            <input type="text" placeholder="NOVO KORISNIČKO IME:" class="inputi-registracija" id="username-js" value="${korisnik.korisnickoIme} " required>
            <p class="zvezdica">*</p>

            <input type="text" placeholder=" NOVA LOZINKA:" class="inputi-registracija" id="lozinka-js" value="${korisnik.lozinka}" required>
            <p class="zvezdica">*</p>
            <input type="text" placeholder=" IME:" class="inputi-registracija" id="ime-js" value="${korisnik.ime}" required>
            <p class="zvezdica">*</p>

            <input type="text" placeholder=" PREZIME:" class="inputi-registracija" id="prezime-js" value="${korisnik.prezime}" required>
            <p class="zvezdica">*</p>

            <input type="date" placeholder=" DATUM RODJENJA:" class="inputi-registracija" id="datum-js" value="${korisnik.datumRodjenja}" required>
            <p class="zvezdica">*</p>
           


            <input type="text" placeholder="NOVA ADRESA:" class="inputi-registracija" id="novaadresa-js" value="${korisnik.adresa}" required>
            <p class="zvezdica">*</p>

            <input type="text" placeholder=" NOV BROJ TELEFONA:" class="inputi-registracija" id="telefon-js" value="${korisnik.telefon}" required>
            <p class="zvezdica">*</p>

            
`
        ;
            form.innerHTML += template;
            break
        }       
      }        
    }
  }
}


request.open("GET", korisniciUrl);
request.send();

function makeIdFromUrl() { /* Splituj json po id-u */
    let id = url.href.split("?")[1];
    return id;
}


let noviel = document.getElementById("izmenikorisnike-dugmee");
noviel.addEventListener("click", function (e) {
    // Sprecicemo slanje forme na server, jer zelimo mi da imamo kontrolu nad time
    e.preventDefault();
    let flag = 0;
    let inputName = document.getElementById("ime-js").value.trim();
    let inputSurname = document.getElementById("prezime-js").value.trim();
    let inputDate = document.getElementById("datum-js").value.trim();
    let inputUsername = document.getElementById("username-js").value.trim();
    let inputPassword = document.getElementById("lozinka-js").value;
    let inputMail = document.getElementById("email-js").value.trim();
    let inputAdress = document.getElementById("novaadresa-js").value.trim();
    let inputPhone = document.getElementById("telefon-js").value.trim();
   

    console.log(inputUsername);

    let mailFormat = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/; //regex
  let passwordFormat = /^(?=.*\d)(?=.*[a-z])(?=.*[a-zA-Z]).{8,}$/;
  var regexBroj = /[0-9]{10}/;

    if (listOfUsernames.includes(inputUsername) && inputUsername != current_username){
        alert("Ovakvo korisničko ime već postoji!");
        flag = 1;
    } else if(inputUsername.length < 5 || inputUsername.length > 12 ) {
        alert("Korisničko ime mora imati 5-12 karaktera");
        flag = 1;
    }

    if (inputName.length == 0 || inputSurname.length == 0 || inputDate.length == 0 || inputAdress.length == 0 || inputPhone.length == 0){
        alert("Polja ne smeju biti prazna!");
        flag = 1;
    } else if (!inputMail.match(mailFormat)) {
        alert("Mail nije unet u ispravnom formatu!");
        flag = 1;
      } else if (!inputPassword.match(passwordFormat)){
        alert("Lozinka mora imati najmanje 8 karaktera i brojeve");
        flag = 1;
      }
    else if (!inputPhone.match(regexBroj)) {

      alert("Broj telefona mora sadrzati 10 cifara");
        flag = 1;
      
      }

    if (flag == 1){
        form.reset();
    } else {
        let noviKorisnik = {
            "adresa": inputAdress,
            "datumRodjenja": inputDate,
            "email": inputMail,
            "ime": inputName,
            "lozinka": inputPassword,
            "prezime": inputSurname,
            "telefon": inputPhone,
            "korisnickoIme": inputUsername,
            "status": korisnik.status
          }

        updateUser(noviKorisnik);
        alert("Uspešna izmena podataka!");
        window.open("prikazkorisnika.html" ,"_top");
    }

})

//Funkcija koja vraca listu svih korisnickih imena
function getAllUsernames(korisnici){
    let listOfUsernames = [];
    for (let key in korisnici){
        let korisnik = korisnici[key];
        listOfUsernames.push(korisnik.korisnickoIme);    
    }
    return listOfUsernames
}

function updateUser(korisnik){
    let request = new XMLHttpRequest();
    let korisnikURL = firebaseURL + "korisnici/" + idKorisnika + ".json";
    request.open("PUT", korisnikURL);
    request.send(JSON.stringify(korisnik));
}