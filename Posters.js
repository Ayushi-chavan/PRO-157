AFRAME.registerComponent("posters", {
    init: function () {
      this.placesContainer = this.el;
      this.createCards()
    },
  
    createCards: function () {
      const thumbNailsRef = [
        {
          id: "spider-man",
          title: "Spider Man",
          url: "./assets/thumbnails/spiderman.jpg",
        },
        {
          id: "dr-strange",
          title: "Dr-Strange",
          url: "./assets/thumbnails/dr-strange.jpg",
        },
  
        {
          id: "batman",
          title: "Bat Man",
          url: "./assets/thumbnails/batman.png",
        },
        {
          id: "avengers",
          title: "Avengers",
          url: "./assets/thumbnails/avengers.jpg",
        },
      ];
      let previousXPosition = -60;
  
      for (var item of thumbNailsRef) {
        const posX = previousXPosition + 25;
        const posY = 10;
        const posZ = -40;
        const position = { x: posX, y: posY, z: posZ };
        previousXPosition = posX;
  
        // Border Element
        var borderEl = this.createBorder(position,item.id)
        // Thumbnail Element
       var poster = this.createPoster(item)
       borderEl.appendChild(poster)
        // Title Text Element
        var title = this.createTitle(position,item)
        borderEl.appendChild(title)
  
  
        this.placesContainer.appendChild(borderEl);
      }
    },
  
    createBorder: function(position,id){
      var entityEl = document.createElement("a-entity")
      entityEl.setAttribute("id",id)
      entityEl.setAttribute("position",position)
      entityEl.setAttribute("geometry", {
        primitive:"plane",
        width:21.5,
        height:40
       
  
      })
      entityEl.setAttribute("material",{
        color:"white",
        opacity:1
      })
  
      return entityEl
    },
  
    createPoster: function(item){
      var entityEl = document.createElement("a-entity")
      entityEl.setAttribute("visible",true)
      entityEl.setAttribute("geometry",{
        primitive:"plane",
        width:20,
        height:28
      })
      entityEl.setAttribute("position",{x: 0,y:5,z:0.1})
      entityEl.setAttribute("material",{
        src:item.url
      })
  
      return entityEl
    },
  
    createTitle: function(position,item){
      var entityEl=document.createElement("a-entity")
      entityEl.setAttribute("text",{
        font:"exo2bold",
        align:"center",
        color:"black",
        value: item.title,
        width:70
      })
      var elposition=position
      elposition.y=-20
      entityEl.setAttribute("position",elposition)
      return entityEl
  
    }
    
  });
  