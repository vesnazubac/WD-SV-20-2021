const firebaseURL1="https://pozorista-srbije-548a6-default-rtdb.europe-west1.firebasedatabase.app/korisnici.json"




var sviUsernames=[];
request_korisnici = new XMLHttpRequest();
request_korisnici.onreadystatechange=function(){

    if (this.readyState==4){
        if (this.status==200){

            let korisnici=JSON.parse(this.responseText);

            for (let id in korisnici){
                let korisnik = korisnici[id];
                sviUsernames.push(korisnik.korisnickoIme);
        
            }
        }
    
    else{
        alert("Greska: "+this.status);
    }
}
};

request_korisnici.open("GET",firebaseURL1);
request_korisnici.send();

console.log(sviUsernames);

var button = document.getElementById("registracija-dugme-js");


var ime = document.getElementById("ime-js");
var prezime = document.getElementById("prezime-js");
var korisnickoIme = document.getElementById("korisnicko-ime-js");
var adresa = document.getElementById("adresa-js");
var email = document.getElementById("email-js");
var regexEmail =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
var lozinka = document.getElementById("lozinka-js");
var regexPsw = /^(?=.*\d)(?=.*[a-z])(?=.*[a-zA-Z]).{8,}$/;
var brojTelefona = document.getElementById("brtelefona-js");
var regexBroj = /[0-9]{9}/;
var datum = document.getElementById("datum-rodjenja");

// document.getElementById("email_validacija").style.display = "block";
// document.getElementById("korisnickoime_validacija").style.display = "block";
// document.getElementById("lozinka_validacija").style.display = "block";
// document.getElementById("brojtelefona_validacija").style.display = "block";

button.addEventListener("click", function validate() {
   document.getElementById("email_validacija").style.display = "none";
   document.getElementById("korisnickoime_validacija").style.display = "none";
   document.getElementById("lozinka_validacija").style.display = "none";
   document.getElementById("brojtelefona_validacija").style.display = "none";
  if (
    ime.value == "" ||
    prezime.value == "" ||
    korisnickoIme.value == "" ||
    adresa.value == "" ||
    email.value == "" ||
    lozinka.value == "" ||
    brojTelefona.value == "" ||
    datum.value == ""
  ) {
    alert("Morate popuniti polja ");
    
  } else if (!email.value.match(regexEmail)) {
    console.log("email");

    // document.getElementById("email_validacija").style.display = "block";
    alert("Email nije ispravan");

    email.value = "";

  } else if (!lozinka.value.match(regexPsw)) {

    // document.getElementById("lozinka_validacija").style.display = "block";
    alert("Lozinka mora imati najmanje 8 karaktera i brojeve");
    lozinka.value = "";

  } else if (!brojTelefona.value.match(regexBroj)) {
    alert("Broj mora imati 9 karaktera ");
    
    // document.getElementById("brojtelefona_validacija").style.display = "block";

    brojTelefona.value = "";

  } else if (sviUsernames.includes(korisnickoIme.value)) {
    alert("Korisnicko ime je zauzeto!");
   // document.getElementById("korisnickoime-validacija").style.display = "block";
    korisnickoIme.value = "";
    
  } else if (DatumUbuducnosti(datum.value)) {
    alert("Ne mozete uneti datum iz buducnosti!");
    datum.value = "";
  }
  else {
    //alert("Registrovali ste se");
    var xhr = new XMLHttpRequest();
    xhr.open("POST", firebaseURL1, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        var json = JSON.parse(xhr.responseText);
      }
    };

    var data = JSON.stringify({
      "adresa": adresa.value,
      "datumRodjenja": datum.value,
      "email": email.value.trim(),
      "ime": ime.value.trim(),
      "lozinka": lozinka.value,
      "prezime": prezime.value.trim(),
      "telefon": brojTelefona.value.trim(),
      "korisnickoIme": korisnickoIme.value,
      "status":"aktivan"



    });
    console.log(data);
    xhr.send(data);
    alert("Uspesno ste se registrovali");
  }
});

function DatumUbuducnosti(date) {

  datum_unet = new Date(date);
  var today = new Date();
   var danasnji_datum = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
  

 
  //today.setHours(23, 59, 59, 998);

  if (datum_unet> danasnji_datum) {
    return true;
  }
  else {
    return false;
  }
  
}