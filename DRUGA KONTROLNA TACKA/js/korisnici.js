let firebaseURL="https://pozorista-srbije-548a6-default-rtdb.europe-west1.firebasedatabase.app/korisnici.json";

let korisnici = document.getElementById("pomocni-korisnici-js");

let footer = document.getElementById("pomocni-footer");

let request = new XMLHttpRequest();

request.onreadystatechange = function () {
    let brojac = 0;
    if (this.readyState == 4) {
      if (this.status == 200) {
          let korisnici = JSON.parse(this.responseText);
        
          for (let id in korisnici) {
            
              let korisnik = korisnici[id];
              
              if (brojac % 2 == 0) {

                createNewDiv1(korisnik,id);
                  
              }
              else {
                  createNewDiv2(korisnik,id);
              }

              brojac += 1;

            
              
              
        }
      } else {
        alert("Greska: " + this.status);
      }
    }
  };
  request.open("GET", firebaseURL);
  request.send();
  
  
  
  function createNewDiv1(korisnik,id){
  
  
    
      template1 = `      <tr class="belo"> 
 <td><a href="korisnik.html?${id}" class="link-tabela">${korisnik.ime} </a></td>
 <td><a href="korisnik.html?${id}" class="link-tabela">${korisnik.prezime}</a></td>

 <td><a href="korisnik.html?${id}" class="link-tabela">${korisnik.korisnickoIme}</a></td>
 <td><button class="dugmeizmenikorisnika"><a href="izmenakorisnici.html?${id}">✎</a></button></td>


 
</tr>`;
    
    korisnici.innerHTML += template1;
    
  
  
}
  
 function createNewDiv2(korisnik,id) {
     template2 = `    <tr class="naslovni-red-tabela-crveno" >
     <td><a href="korisnik.html?${id}" class="link-tabela">${korisnik.ime}</a></td>
     <td><a href="korisnik.html?${id}" class="link-tabela">${korisnik.prezime}</a></td>
     <td><a href="korisnik.html?${id}" class="link-tabela">${korisnik.korisnickoIme}</a></td>
     <td><button class="dugmeizmenikorisnika"><a href="izmenakorisnici.html?${id}">✎</a></button></td>

  </tr>`;
     korisnici.innerHTML += template2;
}
 


  
  
// let templatefooter = `<footer >

// <q> Film će vam donijeti slavu, televizija novac, a pozorište će vas učiniti boljim...", Terens Man, američki glumac i reditelj (1951) </q>
// </footer>`;

// footer.innerHTML += templatefooter;