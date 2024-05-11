let imageNames = [
    "Monstera.jpg",
"monstera1.jpeg",
"1666185644_57-mykaleidoscope-ru-p-monstera-manki-pinterest-59.jpg",
"1633311628_4-p-domashnii-tsvetok-monstera-foto-4.jpg",
"flower.jpg",
]
let img = document.getElementById("flower")
img.onmousemove = function (event) {
    console.log(event.offsetX);
    if(event.offsetX < 100 ){
        img.src = imageNames[0]
    }
    else if(event.offsetX < 200){
        img.src = imageNames[1]
    }
    else if(event.offsetX < 300){
        img.src = imageNames[2]
    }
    else if(event.offsetX <  400){
        img.src = imageNames[3]
    }
    else{
        img.src = imageNames[4]
    }
}