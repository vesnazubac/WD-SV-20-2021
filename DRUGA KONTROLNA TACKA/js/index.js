let firebaseURL="https://pozorista-srbije-548a6-default-rtdb.europe-west1.firebasedatabase.app/pozorista.json";

let request=new XMLHttpRequest();

let kartice = document.getElementById("kartice");





request.onreadystatechange = function () {
  if (this.readyState == 4) {
    if (this.status == 200) {
      let pozorista = JSON.parse(this.responseText);

      for (let id in pozorista) {
        let pozoriste = pozorista[id];
        createNewDiv(pozoriste,id);
      }
    } else {
      alert("Greska: " + this.status);
    }
  }
};
request.open("GET", firebaseURL);
request.send();



function createNewDiv(pozoriste,id){


  
  template = `<div class="kartica">
  <img
    src="${pozoriste.slika}"
    alt="snp"
    style="width: 100%"
    class="slika-kartica"
  />
  <div class="container">
    <h4 class="spusti"><b>${pozoriste.naziv}</b></h4>
    <p class="paragraf-kartica">${pozoriste.adresa}</p>
    <p id="brpredstava">Broj predstava:${pozoriste.brojPredstava}</p>
    <button class="dugme-kartica1">
      <a href="snp.html?${pozoriste.idPredstava}?${id}"> + Repertoar</a>
    </button>
  </div>
</div>`;
  
  kartice.innerHTML += template;
  


}




let loginForm = document.getElementById("forma-za-login");


loginForm.addEventListener("submit", function (e) {

  e.preventDefault();

  let username = document.getElementById("korisnicko-ime-login").value.trim();
  let password = document.getElementById("lozinka-login").value.trim();

  
  if (username == "" || password == "") {

    alert("Morate uneti sve podatke za prijavu.");
  } else {
 
    let request = new XMLHttpRequest();

    request.onreadystatechange = function () {
      
      if (this.readyState == 4) {
        
        if (this.status == 200) {
       
          let users = JSON.parse(request.responseText);

        
          var name = "";
          var flag;
         
          for (let id in users) {
            var user = users[id];
            if (user.korisnickoIme == username && user.lozinka == password) {
              
              if (user.status == "aktivan") {

                name = user.korisnickoIme;
                flag = 0;
                break;
              }
              else {
                alert("Korisnik nije aktivan!");
                flag = 1;
                loginForm.reset();
                break;
              }
            }
            else {
              name = "";
              flag = 0;
            }
          }
          if (name == "" && flag != 1) {
            alert("Neispravni login podaci!");
            loginForm.reset();
          }
          else {
            if (flag != 1) {
              alert("Uspesno ste ulogovani");
                  
                  
        
              document.getElementById("prijava-registracija").style.display = "none";
              document.getElementById("novo_ime").innerText = name;
            }
           

          }
        }
               
         else {
         
          alert("GRESKA: " + this.status);
        }
      }
    };
    
    let url = loginForm.getAttribute("action");
  
    request.open("GET", url);

    request.send();
  }
});

function makeIdFromUrl(url) {


  //let location = decodeURI(window.location.toString());
 // let index = location.indexOf("?id=") + 1
 // let idPredstave = location.substring(index, location.length);
  let id = url.href.split("?")[1];
  return id;
}

