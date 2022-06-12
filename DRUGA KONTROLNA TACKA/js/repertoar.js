

let firebaseURL = "https://pozorista-srbije-548a6-default-rtdb.europe-west1.firebasedatabase.app/predstave.json";
let firebaseURLpozorista="https://pozorista-srbije-548a6-default-rtdb.europe-west1.firebasedatabase.app/pozorista.json";

let kartice_pozorista = document.getElementById("kartice-pozorista");
let samo_naslov = document.getElementById("pomocni-za-js");

const url = new URL(window.location.href);

let request = new XMLHttpRequest();

var idRepertoara;



request.onreadystatechange = function () {
    if (this.readyState == 4) {
        if (this.status == 200) {
            
            let repertoari = JSON.parse(this.responseText);
            let idPredstave = makeIdFromUrl();
            
            //console.log("Tamara");

            for (let kljuc1 in repertoari) {
              //  console.log("Vesna");
                if (kljuc1 == idPredstave) {
                    //console.log("vvv");  ne ulazi 
                    let predstave = repertoari[kljuc1];
                    idRepertoara = kljuc1;
                    for (let kljuc2 in predstave) {
                        let predstava = predstave[kljuc2];
                        //console.log(predstava);
                        let template = ` <div class="kartica-pozorista">
                        <img src="${predstava.slika}" alt="ministarka" style="width:100%"  class="slika-kartica-pozorista">
                        <div class="container">
                          <h4 class="naslov-kartica-pozoriste"><b>${predstava.naziv}</b></h4>
                          <p class="paragraf-kartica">Žanr: ${predstava.zanr}</p>
                          <p class="paragraf-kartica">Kratak opis: ${predstava.kratakOpis}</p>
                          <p class="paragraf-kartica">Broj osoba: ${predstava.maxOsobe}</p>
                          <p class="paragraf-kartica">Kod: ${predstava.kod}</p>
                          <p class="paragraf-kartica">Cena: ${predstava.cena}</p>
                          <p class="paragraf-kartica">Trajanje: ${predstava.trajanje}</p>
                          <p class="paragraf-kartica"> 🌟 ${predstava.ocena}</p>
                          <button class="dugme-kartica1"><a href="gospodjaministarka.html?${kljuc2}?${idRepertoara}"> + Saznaj više</a></button>
                          
                        </div>
                      </div>
            `
                        
                        kartice_pozorista.innerHTML += template;
                    }
                    
                }
                
            }

        }
        else {
            alert("Greska: " + this.status);
        }
    }
};

function makeIdFromUrl() {

    //let location = decodeURI(window.location.toString());
   // let index = location.indexOf("?id=") + 1
   // let idPredstave = location.substring(index, location.length);
    let id = url.href.split("?")[1];
    return id;
}

function makeIdFromUrl1() {

    //let location = decodeURI(window.location.toString());
   // let index = location.indexOf("?id=") + 1
   // let idPredstave = location.substring(index, location.length);
    let id = url.href.split("?")[2];
    return id;
}

request.open("GET", firebaseURL);
request.send();

let request1 = new XMLHttpRequest();

request1.onreadystatechange = function () {
    if (this.readyState == 4) {
        if (this.status == 200) {
            
            //console.log(idPredstave);
            let pozorista = JSON.parse(this.responseText);

            for (key in pozorista) {
                //let idPredstave = makeIdFromUrl();
                let pozoriste = pozorista[key];

                let id = makeIdFromUrl1();
                // let repertoar_za_pozoriste = pozoriste.idPredstava;
               
                if (id == key) {
                    //pozoriste=repertoar_za_pozoriste;
                    //console.log(pozoriste.naziv);
                    let template1 = `<h2 class="naslov-pozoriste">${pozoriste.naziv}</h2>`;
                    samo_naslov.innerHTML += template1;
                    
                    break;
                }
               
               
            
            }
            
        }
        else {
            alert("Greska: " + this.status);
        }
    }
};

request1.open("GET", firebaseURLpozorista);
request1.send();

