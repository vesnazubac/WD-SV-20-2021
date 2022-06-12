let firebaseURL = "https://pozorista-srbije-548a6-default-rtdb.europe-west1.firebasedatabase.app/predstave.json";
let firebaseUrl1 = "https://pozorista-srbije-548a6-default-rtdb.europe-west1.firebasedatabase.app/";
let firebaseurl = "https://pozorista-srbije-548a6-default-rtdb.europe-west1.firebasedatabase.app/"
let deo_izmena = document.getElementById("pomocnijs");
navigacija = document.getElementById("izmena-predstave-js");
pomocni_ocene = document.getElementById("ocene");

let request = new XMLHttpRequest();
const url = new URL(window.location.href);
let idPredstave = makeIdFromUrl();
var dubina;

var komentari_na_predstavu;

request.onreadystatechange = function () {

    if (this.readyState == 4) {
        
        if (this.status == 200) {

            let repertoari = JSON.parse(this.responseText);
            
            


            for (let kljuc1 in repertoari) {
                
                    
                let predstave = repertoari[kljuc1];
                for (let kljuc2 in predstave) {
                        
                    if (kljuc2 == idPredstave) {
                        
                        console.log(kljuc2);
                      let predstava = predstave[kljuc2];
                      // var komentari_na_predstavu = predstava.komentari;
                      // var dubina = 0;
                      // for ( var kljuc_komentar in komentari_na_predstavu) {
                      //   var komentar_za_dodavanje = komentari_na_predstavu[kljuc_komentar];
                      //   //dubina += 1;
                      //   kreirajKomentar(komentar_za_dodavanje.tekst, kljuc_komentar);
                        
                      //   for ( var komentari_replay in komentar_za_dodavanje) {
                          
                      //     if (typeof (komentari_replay) == undefined) {
                      //       break;
                      //     }
                      //     console.log(komentari_replay);
                      //     kom = komentari_replay.tekst;
                      //     console.log(kom);
                      //     kreirajKomentarReplay(kom, kljuc_komentar);
                          
                      //   }

                      // }
                        createDiv(predstava);
                      kreiraj_novu_nav(kljuc2);
                      // kreirajKomentar(komentar_za_dodavanje);
                        //console.log(predstave);
                        
                    }
                }

            }
        }
    
        else {
            alert("Greska " + this.status);
        }
    }
};

request.open("GET", firebaseURL);
request.send();


function createDiv(predstava) {
    let template = `<section id="leva-sekcija">

                        <img src="${predstava.slika}" width="400px" height="600px" class="slikaministarka">
        
        
                    </section>
                    <section id="desna-sekcija">
                    <h2 class="glavni-h2-2">Opis predstave</h2>
        
                    <p class="paragraf-predstava">${predstava.opis}</p>
                    
                    
        
        
        
        
        
        
                </section>
        
                
        
               
                
                <table cellspacing="0" class="table-snp">
                    <tr >
                        <th class="th-snp">Kod predstave</th>
                        <th class="th-snp">Žanr</th>
                        <th class="th-snp">Trajanje</th>
                        <th class="th-snp">Cena</th>
                        <th class="th-snp">Kapacitet</th>
                        
                        
        
        
                    </tr>
        
                    <tr>
        
        
                        <td class="td-snp">${predstava.kod}</td>
                        <td class="td-snp">${predstava.zanr}</td>
                        <td  class="td-snp">${predstava.trajanje}</td>
                        <td  class="td-snp">${predstava.cena}</td>
                        <td  class="td-snp">${predstava.maxOsobe}</td>
                    </tr>
                </table>
                
        <footer class="footerpredstava">

        <q> Film će vam donijeti slavu, televizija novac, a pozorište će vas učiniti boljim...", Terens Man, američki glumac i reditelj (1951) </q>
      </footer>
        
            </div>`
    deo_izmena.innerHTML += template;

    
   let niz_ocena = predstava.ocene;
    let ocena1 = niz_ocena[0];
    let ocena2 = niz_ocena[1];
    let ocena3 = niz_ocena[2];
    let ocena4 = niz_ocena[3];
    let ocena5 = niz_ocena[4];

    let ukupan_broj_ocena = ocena1 + ocena2 + ocena3 + ocena4 + ocena5;
   let  prosek1 = (ocena1 / ukupan_broj_ocena) * 100;
    let prosek2 = (ocena2 / ukupan_broj_ocena) * 100;
    let prosek3 = (ocena3 / ukupan_broj_ocena) * 100;
    let prosek4 = (ocena4 / ukupan_broj_ocena) * 100;
    let prosek5 = (ocena5 / ukupan_broj_ocena) * 100;
  

    let template1 = ` <hr style="border:3px solid #f1f1f1">
        
    <div class="row">
      <div class="side">
        <div>5:</div>
      </div>
      <div class="middle">
        <div class="bar-container">
          <div class="bar-5" style="width:${Math.round(prosek5)}%"></div>
        </div>
      </div>
      <div class="side right">
        <div>${ocena5}</div>
      </div>
      <div class="side">
        <div>4:</div>
      </div>
      <div class="middle">
        <div class="bar-container">
          <div class="bar-4" style="width:${Math.round(prosek4)}%"></div>
        </div>
      </div>
      <div class="side right">
        <div>${ocena4}</div>
      </div>
      <div class="side">
        <div>3:</div>
      </div>
      <div class="middle">
        <div class="bar-container">
          <div class="bar-3" style="width:${Math.round(prosek3)}%"></div>
        </div>
      </div>
      <div class="side right">
        <div>${ocena3}</div>
      </div>
      <div class="side">
        <div>2:</div>
      </div>
      <div class="middle">
        <div class="bar-container">
          <div class="bar-2" style="width:${Math.round(prosek2)}%"></div>
        </div>
      </div>
      <div class="side right">
        <div>${ocena2}</div>
      </div>
      <div class="side">
        <div>1:</div>
      </div>
      <div class="middle">
        <div class="bar-container">
          <div class="bar-1" style="width:${Math.round(prosek1)}%"></div>
        </div>
      </div>
      <div class="side right">
        <div>${ocena1}</div>
      </div>
      🌟 ${predstava.ocena}
    </div>
    
    `;

   
    pomocni_ocene.innerHTML += template1;
    





}

function kreiraj_novu_nav(kljuc2) {

    let template_nav = ` <ul>
    <li class="#"><a href="index.html" >Početna</a></li>
    <li><a href="#kontakt">Kontakt</a></li>
   
    <li ><a href="izmenapredstava.html?${kljuc2}">Izmeni</a></li>
  

</ul>`;
    navigacija.innerHTML += template_nav;
    
}

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

var idRepertoara = makeIdFromUrl1();
console.log(idRepertoara);


document.getElementById("obrisipredstavu-dugme").onclick = function(e){
    e.preventDefault();
    if(confirm("Da li ste sigurni da želite da obrišete predstavu?")){
        
        let request = new XMLHttpRequest();
        
        request.open("DELETE", firebaseUrl1 +"predstave/"+idRepertoara+"/"+ idPredstave +".json");
        request.setRequestHeader("Content-Type", "application/json");
        request.onreadystatechange = function(){
            if(this.readyState == 4){
                if(this.status == 200){

                    predstave = JSON.parse(request.responseText);
                    console.log(predstave);
                }
                else{
                    alert("Greška prilikom učitavanja svih predstava.");
                }
            }
        };
        console.log(firebaseUrl1 +idRepertoara+"/"+ idPredstave +".json");
        request.send();
        
        alert("Uspesno ste obrisali predstavu.")
        window.location.href = "index.html";

    }
    else{
        alert("Odustali ste od brisanja predstave.")
    }
}








// let komentar_glavni_id = document.getElementById("first-comment");

// function kreirajKomentar(komentar, id) {
  
//   template_komentar = `<div class="comment__card">
//   <h3 class="comment__title">The first comment</h3>
//   <p>

//   @anonymus: ${komentar} 
//   </p>
//   <div class="comment__card-footer">
//     <div>Likes 123</div>
//     <div>Dislikes 23</div>
//     <div class="show-replies" id="${id}" onclick="OdgovorNaKomentar('${id}')">Reply 2</div>
//   </div>
// </div>

//   </div>
//   </div>`;
//   komentar_glavni_id.innerHTML += template_komentar;
//   //const dodajid = id;
// }

// // document.getElementById("first-reply").style.display = "none";

// //https://console.firebase.google.com/u/0/project/pozorista-srbije-548a6/database/pozorista-srbije-548a6-default-rtdb/data/~2Fpredstave~2F-MNVEu6iMr2EFlQO6TW61~2F-MNQftJa4rskH-dBqE9Z0~2Fkomentari
// var firebaseURLkomentari=firebaseUrl1+"/predstave/" +idRepertoara+"/"+ idPredstave +"/komentari"+ ".json";


// var input_komentar = document.getElementById("komentar");



// let button = document.getElementById("dugme_postavljanje_komentara");

// button.addEventListener("click", function validate() {
  
//   //alert("Registrovali ste se");
//   var xhr = new XMLHttpRequest();
//   xhr.open("POST", firebaseURLkomentari, true);
//   xhr.setRequestHeader("Content-Type", "application/json");
//   xhr.onreadystatechange = function () {
//     if (xhr.readyState === 4 && xhr.status === 200) {
//       var json = JSON.parse(xhr.responseText);
//     }
//   }

//   var komentar = input_komentar.value;

//   var data = JSON.stringify({

//     "tekst": komentar,
//     "user":"@anonymus"
// });
//   console.log(data);
//   console.log(firebaseURLkomentari);
//   xhr.send(data);
//   alert("Uspesno ste dodali komentar");
//   location.reload();


// });

// dugme_reply = document.getElementById("reply-dugme");
// var idKomentara;

// for (glavni_komentar in komentari_na_predstavu){
//   if (glavni_komentar.tekst==komentar){
//     idKomentara = glavni_komentar;
//   }
// }
// firebaseURLkomentarireplay=firebaseUrl1+"/predstave/" +idRepertoara+"/"+ idPredstave +"/komentari/"+idKomentara+ ".json";
// dugme_reply.addEventListener("click", function (iddiva) {
//   iddiva=document.getElementById("")
//   console.log(idKomentara);
//   komentar_replay = input_komentar.value;
//   var xhr = new XMLHttpRequest();
//   xhr.open("POST", firebaseURLkomentarireplay, true);
//   xhr.setRequestHeader("Content-Type", "application/json");
//   xhr.onreadystatechange = function () {
//     if (xhr.readyState === 4 && xhr.status === 200) {
//       var json = JSON.parse(xhr.responseText);
//     }
//   }

  
//function OdgovorNaKomentar(idKomentaraRoditelja) {
  //console.log(idKomentaraRoditelja);

  // const  firebaseURLkomentarireplay = firebaseUrl1 + "/predstave/" + idRepertoara + "/" + idPredstave + "/komentari/" + idKomentaraRoditelja + ".json";
  // console.log(firebaseURLkomentarireplay);



  //var  idKomentaraRoditelja1=idKomentaraRoditelja;
//   var reply_komentar = document.getElementById("komentar_replayy");
  
  
//   console.log(reply_komentar_postavi);
//  var roditeljid = document.getElementById("pomocni-id-reply");
//   template_reply = `    <div
//   class="comment__container"
//   dataset="first-comment"
//   id="first-reply"
// >
//   <div class="comment__card">
//     <h3 class="comment__title">The first reply</h3>
//     <p>
//       ${reply_komentar_postavi}
//     </p>
//     <div class="comment__card-footer">
//       <div>Likes 123</div>
//       <div>Dislikes 23</div>
//       <div class="show-replies">Reply 1</div>
//     </div>
//   </div>
//   </div> `;
//   console.log(idKomentaraRoditelja1);

  

  
//   roditeljid.innerHTML += template_reply;
  
  //dugme_post_za_reply = document.getElementById("dugme_postavljanje_komentara_replay");

  //document.getElementById("reply-comentar").style.display = "block";

  //var  firebaseURLkomentarireplay = firebaseUrl1 + "/predstave/" + idRepertoara + "/" + idPredstave + "/komentari/" + idKomentaraRoditelja + ".json";

  //dugme_post_za_reply.addEventListener("click", function () {


   // var reply_komentar = document.getElementById("komentar_replayy");
    //var reply_komentar_postavi = reply_komentar.value;
  
  
  //console.log(reply_komentar_postavi);
    //var roditeljid = idKomentaraRoditelja1;
    
//   template_reply = `    <div
//   class="comment__container"
//   dataset="first-comment"
//   id="first-reply"
// >
//   <div class="comment__card">
//     <h3 class="comment__title">The first reply</h3>
//     <p>
//       ${reply_komentar_postavi}
//     </p>
//     <div class="comment__card-footer">
//       <div>Likes 123</div>
//       <div>Dislikes 23</div>
//       <div class="show-replies">Reply 1</div>
//       <div id="mesto_za_dodavanje"></div>
//     </div>
//   </div>
//   </div> `;


  

  
//   roditeljid.innerHTML += template_reply;
    
//     console.log("Id u drugom" + idKomentaraRoditelja1);
    
//    var firebaseURLkomentarireplay=firebaseUrl1 + "/predstave/" + idRepertoara + "/" + idPredstave + "/komentari/" + idKomentaraRoditelja1 + ".json";
       
//     var xhr1 = new XMLHttpRequest();
//     xhr1.open("POST", firebaseURLkomentarireplay);
//     xhr1.setRequestHeader("Content-Type", "application/json");
//     xhr1.onreadystatechange = function () {
//       if (xhr1.readyState === 4 && xhr1.status === 200) {
//         var json = JSON.parse(xhr1.responseText);
//       }
//     }
//     console.log(reply_komentar_postavi);

//     var data1 = JSON.stringify({

//       "tekst": reply_komentar_postavi,
//       "user": "@anonymus"
  

  
//     });

//     console.log(data1);
//     console.log(firebaseURLkomentarireplay);
//     xhr1.send(data1);
//     alert("Uspesno ste dodali komentar");
//     console.log(data1);
//      location.reload();

    

    

//   //});

//   //   var data = JSON.stringify(komentar_replay);
//   //   console.log(data);
//   //   console.log(firebaseURLkomentarireplay);
//   //   xhr.send(data);
//   //   alert("Uspesno ste dodali komentar");
//   //   location.reload();
  



//   // });

  





// function kreirajKomentarReplay(komentar, idRoditeljakomentara) {
//   var dodaj_reply_mesto = document.getElementById("first-reply");
//   console.log(idRoditeljakomentara)
//   template_replay_komentar = `

//   <div class="comment__card">
//     <h3 class="comment__title">The first reply</h3>
//     <p>
//       ${komentar.tekst}
//     </p>
//     <div class="comment__card-footer">
//       <div>Likes 123</div>
//       <div>Dislikes 23</div>
//       <div class="show-replies">Reply 1</div>
//     </div>
//   </div>
// `;

//   dodaj_reply_mesto.innerHTML += template_replay_komentar;

// }





// let firebaseurl = "https://pozorista-srbije-548a6-default-rtdb.europe-west1.firebasedatabase.app/"

let id_Repertoara = makeIdFromUrl1();
let id_Predstave = makeIdFromUrl();
var korisnik = "@anonymus";


let Idkomentara = []; //id svih komentaraaa

//poseban cvor za komentare gde cuvamo kljuc predstave, korisnika(anonnimus),dubinu i tekst komentara

function Test(str) {

  return /^[a-zA-Z]+$/.test(str)

}


document.getElementById("komentarisi").onclick = function(e){
    
    let komentar = document.getElementById("sadrzaj").value;  //uzimamo sadrzaj komentara
  if (document.getElementById("sadrzaj").value == "") {    //ako je komentar "" nista se ne desava
    alert("Komentar je prazan, tako da nece ostati sacuvan!");
        return;
    }
    e.preventDefault();
    prvi_komentar("",komentar,0)}   //prvi komentar, lokacija=id komentara na koji se odgovara    

function prvi_komentar(lokacija, komentar,dubina){
    var xhr = new XMLHttpRequest();
    xhr.open("POST", firebaseurl+ "/komentari.json", true);
   
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var json = JSON.parse(xhr.responseText);
            
        }
    };
    
    var data = JSON.stringify({[id_Predstave]:[korisnik,komentar,lokacija,dubina]}); //smesta se komentar u bazu,korisnik-anoniman, komentar-tekst,lokacija-id glavnog,nivo-dubina
    xhr.send(data);
    document.getElementById("sadrzaj").value = "";
    
    //dodajKomentarObavestenje(true,lokacija);  //true-ucitan 
    alert("Ostavili ste komentar!");
    dodajKomentar(true, lokacija);
}


dodajKomentar(false,"");


let id;
let id1;


// function dodajKomentarObavestenje(ucitan, lokacija){
//     alert("Ostavili ste komentar!");
//     dodajKomentar(ucitan, lokacija);
// }

function dodajKomentar(ucitan,lokacija){
    let request = new XMLHttpRequest();
    request.onreadystatechange = function(){
        if(this.readyState == 4){
            if(this.status == 200){
               
                
                Idkomentara = JSON.parse(request.responseText);
                console.log(Idkomentara);

                for(id in Idkomentara){
                    let komentar = Idkomentara[id];
                    
                    if (Object.keys(komentar)[0] == id_Predstave && Object.values(komentar)[0][3] == 0){
                        let dubina = 0; //glavni komentar
                        DodajURedKomentara("Prostorzakomentare",id, komentar,ucitan,true,dubina+1);
                        dubina ++;
                        radiopet(dubina,id,ucitan)
                    }
                }
            }
            else{
                alert("Greška prilikom učitavanja");
            }
        }
    };

    request.open("GET", firebaseurl+ "/komentari.json");
    request.send();
}



let brojacaPodkomentara = 0;
function DodajURedKomentara(pocetni, id, komentar, ucitan,glavni,dubina){
    let redKomentara = document.createElement("li");
    redKomentara.classList.add("clearfix");
  if (glavni == true) {  //glavni komentari
      
      let Divzadodavanje = document.createElement("div");
      
      Divzadodavanje.classList.add("clearfix");
      
        Divzadodavanje.style.marginTop = brojacaPodkomentara*110+"px";
        brojacaPodkomentara = 0;
        document.getElementById(pocetni).appendChild(Divzadodavanje);

        Divzadodavanje.appendChild(redKomentara);
    }
    else if(glavni == false){  //podkomentar


        let prvi = document.createElement("li");
        let sirina = 900 - (dubina*160);
        
        divDrugi = document.createElement("div");
        divDrugi.classList.add("clearfix");
        divDrugi.style.width = sirina+"px";
        divDrugi.style.float = "right";
        prvi.classList.add("clearfix");
        document.getElementById(pocetni).appendChild(divDrugi);
        divDrugi.appendChild(prvi);
        prvi.appendChild(redKomentara);
        brojacaPodkomentara ++;
    }
    

    let div1 = document.createElement("div");  //drugi glavni div
    div1.classList.add("post-comments");
    redKomentara.appendChild(div1);

    let p1 = document.createElement("p");
    p1.classList.add("meta");
    div1.appendChild(p1);

    let a1 = document.createElement("a");
    a1.innerText = Object.values(komentar)[0][0];  //uzimamo tekst komentara
    p1.appendChild(a1);  //tekst komentara

    let i1 = document.createElement("i");
    i1.classList.add("pull-right");
    p1.appendChild(i1);

    let a2 = document.createElement("button");  //za odgovore na komentare
    a2.onclick = function(e){ 
        let dubina = Object.values(komentar)[0][3];
      let reply = prompt(Object.values(komentar)[0][1] + "------>>>>>> ");
     // var t = Test(reply);
      if (reply == ""){
        alert("Dodali ste prazan odgovor, pa on nece biti sacuvan!");
        return;
      }

      if (reply== null) {

        alert("Odustali ste");
        return;
        
        
      }
      
        e.preventDefault();
        prvi_komentar(id,reply,dubina+1);
    }
    a2.style.float = "right";
    i1.appendChild(a2);

    let s = document.createElement("small");
    s.innerText = "Odgovori";
    a2.appendChild(s);

    let p2 = document.createElement("p");
    p2.innerText = Object.values(komentar)[0][1];
    div1.appendChild(p2);
    if(ucitan == true){
        window.location.reload();
    }
    
}




function radiopet(dubina,id,ucitan){
    let ubacen = false;  //da li imamo komentara u dubini uopste
    for(id1 in Idkomentara){
        let komentarOdgovor = Idkomentara[id1]; //pristupamo odgovoru na roditeljski kometar
        if(Object.keys(komentarOdgovor)[0] == id_Predstave && Object.values(komentarOdgovor)[0][3] == dubina && Object.values(komentarOdgovor)[0][2] == id){
          DodajURedKomentara("Prostorzakomentare",id1,komentarOdgovor,ucitan,false,dubina+1);
            ubacen = true;
            radiopet(dubina+1,id1,ucitan);
        }
    }
    if(ubacen == false){
        return;
    } 
    
}


