// let firebaseURL = "https://pozorista-srbije-548a6-default-rtdb.europe-west1.firebasedatabase.app/predstave.json";
// let forma_za_izmenu = document.getElementById("izmena-predstava-js");

// let request = new XMLHttpRequest();
// const url = new URL(window.location.href);

// request.onreadystatechange = function () {
//     if (this.readyState == 4) {
//         if (this.status == 200) {
//             let repertoari = JSON.parse(this.responseText);
//             let idPredstave = makeIdFromUrl();
//             console.log(idPredstave);
//             for (let kljuc1 in repertoari) {
//                 for (let kljuc2 in repertoari[kljuc1]) {
//                     if (kljuc2 == idPredstave) {
//                         predstava = repertoari[kljuc1][kljuc2];
//                         promeniformu(predstava);
//                   }
//               }
//             }
//         }
//         else {
//             alert("Greska: " + this.status);
//         }
//     }
// };
// request.open("GET", firebaseURL);
// request.send();

// function makeIdFromUrl() {

//     //let location = decodeURI(window.location.toString());
//    // let index = location.indexOf("?id=") + 1
//    // let idPredstave = location.substring(index, location.length);
//     let id = url.href.split("?")[1];
//     return id;
// }

// function promeniformu(predstava) {

//     template = `   <div id="prva-sekcija">
//     <div id="prvi-deo">

//     <label for="kod" class="labela">Kod predstave:</label><br>

//     <input type="text" placeholder="Kod predstave" class="inputizmenapredstava" value="${predstava.kod}" id="kod-js" ></div>

// <div id="drugi-deo">


//     <label for="trajanje" class="labela">Kapacitet:</label><br>


//     <input type="text" placeholder="Kapacitet" class="inputizmenapredstava" id="kapacitet-js" value="${predstava.maxOsobe}">

   

// </div>

// <div id="drugi-deo">


//     <label for="trajanje" class="labela">Cena karte:</label><br>


//     <input type="text" placeholder="Cena:" class="inputizmenapredstava" id="cena-js" value="${predstava.cena}" >
    

// </div>

// </div>






// <div id="treca-sekcija">

// <div id="drugi-deo">

//     <label for="trajanje" class="labela">Trajanje:</label><br>


//     <input type="text" placeholder="Trajanje" class="inputizmenapredstava" id="trajanje-js"  value="${predstava.trajanje}">

// </div>


// <div id="drugi-deo">



    


// </div>

// <label for="opis" class="labela">Opis predstave:</label>

// <textarea class="opisizmena"  rows=" 30" cols="20" id="opisizmena-js" value="">${predstava.kratakOpis}</textarea>



// </di
// v>




// `;
//     forma_za_izmenu.innerHTML += template;
    
// }



// dugme = document.getElementById("dugme-js-izmeni-predstavu");

// dugme.addEventListener("click", function validate() {
//     let kod_predstave = document.getElementById("kod-js").value.trim();
//     let kapacitet = document.getElementById("kapacitet-js").value.trim();
//     let cena = document.getElementById("cena-js").value.trim();
//     let trajanje = document.getElementById("trajanje-js").value.trim();
//     let opis = document.getElementById("opisizmena-js");

//     if ((kod_predstave == "") || (kapacitet == "") || (cena == "") || (trajanje == "") || (opis.value == "")) {

//         alert("Morate popuniti sve podatke!");
//     }
//     else if(!isNaN(kod_predstave) || (!isNaN(cena)) || (!isNaN(kapacitet)) || (!isNaN(trajanje))) {
//         alert("Neispravni podaci");
//         forma_za_izmenu.reset();

//     }
    
    
//     else {
//         alert("Podaci su izmenjeni!");
//     }
// });

const url = new URL(window.location.href);
const link = "https://pozorista-srbije-548a6-default-rtdb.europe-west1.firebasedatabase.app/";
const predstaveURL ="https://pozorista-srbije-548a6-default-rtdb.europe-west1.firebasedatabase.app/predstave.json";


let form = document.getElementById("izmena-predstava-js");
const idPredstave = makeIdFromUrl();
var predstava;

var slika;
var ocena;
var ocene;
var idRepertoara;
var inputDetaljanOpis;
var inputNaziv;
var inputZanr;
var sviKodovi=[]


let request = new XMLHttpRequest();
request.onreadystatechange = function (e) {
    if (this.readyState == 4) {
        if (this.status == 200) {
            let repertoari = JSON.parse(this.responseText);
            let idPredstave = makeIdFromUrl();
          
            for (let kljuc1 in repertoari) {
               // idRepertoara = kljuc1;
                for (let kljuc2 in repertoari[kljuc1]) {

                    let predstava_kod = getKod(repertoari[kljuc1][kljuc2]);

                    sviKodovi.push(predstava_kod);

                    if (kljuc2 == idPredstave) {
                        console.log("usaoo");

                        predstava = repertoari[kljuc1][kljuc2];
                        console.log(predstava);
                    
                        ocena = predstava.ocena;
                        ocene = predstava.ocene;
                        slika = predstava.slika;
                        idRepertoara = kljuc1;
                        inputDetaljanOpis = predstava.opis;
                        inputNaziv = predstava.naziv;
                        inputZanr = predstava.zanr;


                        template = `   <div id="prva-sekcija">
                        <div id="prvi-deo">
                    
                        <label for="kod" class="labela">Kod predstave:</label><br>
                    
                        <input type="text" placeholder="Kod predstave" class="inputizmenapredstava" id="kod-js" value="${predstava.kod}"></div>
                    
                    <div id="drugi-deo">
                    
                    
                        <label for="trajanje" class="labela">Kapacitet:</label><br>
                    
                    
                        <input type="text" placeholder="Kapacitet" class="inputizmenapredstava" id="kapacitet-js" value="${predstava.maxOsobe}">
                    
                       
                    
                    </div>
                    
                    <div id="drugi-deo">
                    
                    
                        <label for="trajanje" class="labela">Cena karte:</label><br>
                    
                    
                        <input type="text" placeholder="Cena:" class="inputizmenapredstava" id="cena-js" value="${predstava.cena}" >
                        
                    
                    </div>
                    
                    </div>
                    
                    
                    
                    
                    
                    
                    <div id="treca-sekcija">
                    
                    <div id="drugi-deo">
                    
                        <label for="trajanje" class="labela">Trajanje:</label><br>
                    
                    
                        <input type="text" placeholder="Trajanje" class="inputizmenapredstava" id="trajanje-js"  value="${predstava.trajanje}">
                    
                    </div>
                    
                    
                    <div id="drugi-deo">
                    
                    
                    
                        
                    
                    
                    </div>
                    
                    <label for="opis" class="labela">Opis predstave:</label>
                    
                    <textarea class="opisizmena"  rows=" 30" cols="20" id="opisizmena-js" value="">${predstava.kratakOpis}</textarea>
                    
                    
                    
                    </di
                    v>
                    
                    
                    
                    
                    
                   `;
                        form.innerHTML += template;

                    }
               
                    
                }
            }
            
         
    
                   
        }
               
                
    }
};
            
  

request.open("GET", predstaveURL);
request.send();

function makeIdFromUrl() { /* Splituj json po id-u */
    let id = url.href.split("?")[1];
    return id;
}

let noviel = document.getElementById("dugme-js-izmeni-predstavu");
noviel.addEventListener("click", function (e) {
    // Sprecicemo slanje forme na server, jer zelimo mi da imamo kontrolu nad time
    e.preventDefault();
    let flag = 0;
    let inputKod = document.getElementById("kod-js").value.trim();
    let inputKratakOpis = document.getElementById("opisizmena-js").value;
    //let inputDetaljanOpis = document.getElementById("detaljan_opis1").value;
    //let inputNaziv = document.getElementById("naziv").value;
    let inputTrajanje = document.getElementById("trajanje-js").value.trim();
    //let inputZanr = document.getElementById("zanr").value;
    let inputCena = document.getElementById("cena-js").value.trim();
    let inputKapacitet = document.getElementById("kapacitet-js").value.trim();
   
    if (sviKodovi.includes(inputKod) && inputKod!=predstava.kod) {
        alert("Kod predstave mora biti jedinstven!");
        
    }

    
    if (inputKod == "" || inputKratakOpis.value == "" || inputTrajanje == 0 || inputCena == 0 || inputKapacitet == 0) {
        alert("Polja ne smeju biti prazna!");
        flag = 1;
    }
    else if (isNaN(inputCena)==true){
        // if ((!Number.isInteger(inputCena)) || (!Number.isInteger(inputTrajanje)) || (!Number.isInteger(inputKapacitet))) {
        //     alert("Polja cena,trajanje i kapacitet moraju biti brojevi!")
        //     flag = 1;
        // }
        alert("Morate uneti broj");
        inputCena = "";
        flag = 1;
        
    }

    else if (isNaN(inputTrajanje)==true){
        alert("Morate uneti broj");
        inputTrajanje="";
        flag = 1;
    }
    else if (isNaN(inputKapacitet)==true){
        alert("Morate uneti broj");
        inputKapacitet = "";
        flag = 1;

    }

    // if (flag == 1) {
    //     form.reset();
    else {
        let novaPredstava = {
            "kod": inputKod,
            "cena": inputCena,
            "kratakOpis": inputKratakOpis,
            "maxOsobe": inputKapacitet,
            "naziv": inputNaziv,
            "slika": slika,
            "trajanje": inputTrajanje,
            "zanr": inputZanr,
            "ocena": ocena,
            "ocene": ocene,
            "opis": inputDetaljanOpis
        }

        updatePredstava(novaPredstava);
        alert("Uspešna izmena podataka o predstavi!");
        window.open("snp.html?" + idRepertoara, "_top");
        
    }

});



function updatePredstava(predstava) {
    let putrequest = new XMLHttpRequest();

    let predstavaURL = link + "predstave/" + idRepertoara + "/" + idPredstave + ".json";
    console.log(predstavaURL);
  
    putrequest.open("PUT",predstavaURL);
    putrequest.send(JSON.stringify(predstava));
}


 function getKod(predstava) {
    return predstava.kod;
}

