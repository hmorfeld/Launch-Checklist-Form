
window.addEventListener("load", function(){
   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response){
      return response.json();
         }).then(function(json){
      console.log(json);
      let missionTarget = document.querySelector("#missionTarget");
      <div id="destination">
            <h2>Mission Destination</h2>
            <ol>
               <li>Name: ${destination.name}</li>
               <li>Diameter: ${destination.diameter}</li>
               <li>Star: ${destination.star}</li>
               <li>Distance from Earth: ${destination.distance}</li>
               <li>Number of Moons: ${destination.moons}</li>
            </ol>
            <img src="${destination.image}"></img>
        </div> 
   })
   let form = document.getElementById("launchForm");
   form.addEventListener("submit",function(e){
      e.preventDefault();

      
      let button = document.getElementById("formSubmit");
      let name = document.getElementById("pilotName");
      let coName = document.getElementById("copilotName");
      let fuelLevel = document.getElementById("fuelLevel");
      let mass = document.getElementById("cargoMass");

      if (name.value === ""){
         window.alert("Your Forgot Your Name!")
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
   })
})    
