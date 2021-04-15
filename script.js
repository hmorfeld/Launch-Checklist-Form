
window.addEventListener("load", function(){
   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response){
      return response.json();
         }).then(function(json){
            console.log(json);
            let container = document.querySelector('#missionTarget');
            let targetPlanet = '';
            for (planet in json){
               targetPlanet =`
               <div id="missionTarget">
                  <div id= "destination">
                     <h2>Mission Target</h2>
                     <ol>
                        <li>Name: ${planet.name}</li>
                        <li>Diameter: ${planet.diameter}</li>
                        <li>Star: ${planet.star}</li>
                        <li>Distance from Earth: ${planet.distance}</li>
                        <li>Number of Moons: ${planet.moons}</li>
                     </ol>
                     <img src="${planet.image}"></img>
                  </div>
               </div>
               `
      }
      container.innerHTML = targetPlanet

   
      
   let form = document.getElementById("launchForm");
   form.addEventListener("submit",function(e){
      e.preventDefault();

      let button = document.getElementById("formSubmit");
      let name = document.getElementById("pilotName");
      let coName = document.getElementById("copilotName");
      let fuelLevel = document.getElementById("fuelLevel");
      let mass = document.getElementById("cargoMass");

      if (name.value === ""){
         window.alert("Your Forgot Your Name!");
         console.log("This is working")
      }
      if (coName.value === ""){
         window.alert("Do you have a Co-Pilot? Adde their name!");
      }
      if( fuelLevel.value === ""){
         window.alert("Add Fuel Level!");
      }
      if (mass.value === ""){
         window.alert("Add Cargo Mass!");
      };
   });
})

})
