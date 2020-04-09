let taArray=[{name:"Suhasini Chakka", image:"./images/TA_Suha.png", position:"TA"},{name:"Alex Chang",image:"./images/alexChang.jpg",position:"TA"},{name:"Jacob Francois",image:"./images/TA_Francois",position:"TA"},{name:"Zachary Frew", image:"./images/zachFrew.jpg", position:"TA"},{name:"Kevyn Gandaho",image:"./images/TA_Kevyn",position:"TA"},{name:"Clary Green",image:"./images/claryGreen.png",position:"TA"},{name:"Shawn Jones", image:"./images/shawnJones.jpg",position:"Teacher"},{name:"Lynn Josse", image:"./images/Lynn_Josse.jpg", position:"TA"},{name:"Cherita Lashley", image:"./images/Cherita_Lashley.png", position:"TA"},{name:"Steven Moxley", image:"./images/SteveMoxley.jpg", position:"TA"},{name:"Ryan Ratajczyk",image:"./images/ryanRatajczyk.png", position:"TA"},{name:"Emma Richardson", image:"./images/TA_Emma.jpg", position:"TA"},{name:"Luis Pinto de Sa",image:"",position:"TA"},{name:"Donnell Schroeter", image:"./images/DonnellSchroter.png", position:"TA"},{name:"Bruce Shimel", image:"./images/TA_Bruce",position:"TA"},{name:"Andy Yang", image:"./images/andyYang.jpg",position:"TA"},{name:"TA_Domonique", image:"./images/TA_Domonique.jpg", position:"TA"}, {name:"Kevyn Gandaho", image:"./images/TA_kevyn", position:"TA"}];

window.addEventListener("load", function(){
    let taDisplays =this.document.getElementsByClassName("person");
    this.console.log(taDisplays);
    let start= document.getElementById('next');
    this.console.log (next);
    let j =0;
    next.addEventListener('click', function(){
        let zoomer = taDisplays[j]
            let i = 0;
            let size = "";
            let zoom = setInterval(function(){
                console.log ("interval fired");
                size = (`scale(${i})`);
                zoomer.style.transform= size;
                zoomer.removeAttribute("hidden");
                i+=.01;
                if (i>1){
                    clearInterval(zoom);
                }
            }, 10);
        j++;
        
    });

})