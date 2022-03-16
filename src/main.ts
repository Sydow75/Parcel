//för att lägga till en bild måste du göra enl nedan:
const img = document.createElement('img');
document.body.append(img);

const imgUrl = new URL('./img/bild.jpg', import.meta.url)
console.log(imgUrl);
img.src = imgUrl.href;
//måste skapa en ny fil ts config för att ovan skall funka. annars funkar inte import.meta.url se steg för steg i claras underlag



//const imgNames = ['./img/bild.jpg', './img/katt2.jpg', './img.katt3.jpg'];

/*for (let i:number= 0; i<imgNames.length; i++) {
    const img = document.createElement('img');
    document.body.append(img);
    const imgUrl = new URL(`./img/${el}.jpg`, import.meta.url)
    img.src = imgUrl.href
}*/