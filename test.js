// function insertAfter(newNode, referenceNode) {
//     referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
// }

// let inputpass = document.querySelector("#passwordInput");

// let email_h1 = document.createElement("h1");
// email_h1.innerText = "Email";
// document.body.appendChild(email_h1);
// insertAfter(email_h1, inputpass)

// let email_input = document.createElement("input");
// email_input.placeholder = "alamat email";
// insertAfter(email_input, email_h1);


// let batal_btn = document.createElement("button");
// batal_btn.innerText = "Batal";
// document.body.appendChild(batal_btn);

// let data = []

// let buttonTarget = document.querySelector("#buttonTamba");

// buttonTarget.addEventListener("click", function(){
//     data.push({
//         id: data.length + 1,
//         img: "./public/Screenshot_5.png",
//         judul: "gacha",
//         count: 10000
//     })

//     for(let i = 0; i < data.length-1; i++){
//         document.querySelector(".card1").remove();

//     }

//     data.map(element => {

//         //create element
//         let card = document.createElement("div");
//         let img = document.createElement("img");
//         let judul = document.createElement("h1");
//         let count = document.createElement("p");
//         let btn = document.createElement("button");
        
//         //set attribute img
//         img.setAttribute('src', element.img);
//         judul.innerText = element.judul;
//         count.innerText = element.count;
//         btn.innerText = "gatcha now!";
    
//         //set classname
//         card.className = "card1";
//         img.className = "img";
//         judul.className = "judul";
//         count.className = "count";
//         btn.className = "btn";
    
//         document.body.appendChild(card);
//         card.appendChild(img);
//         card.appendChild(judul);
//         card.appendChild(count);
//         card.appendChild(btn);
//     });
// })

let tambah = [
//     {
//     id: 1,
//     img: "./public/Screenshot_5.png",
//     judul: "gacha",
//     count: 10000

// },
// {
//     id: 2,
//     img: "./public/Screenshot_5.png",
//     judul: "gacha",
//     count: 10000
// }
]

// tambah.map(element => {
//     // let card = document.createElement("div");
//     // let img = document.createElement("img");
//     // let judul = document.createElement("h1");
//     // let count = document.createElement("p");
//     // let btn = document.createElement("button");
    
//     //set attribute img
//     img.setAttribute('src', element.img);
//     judul.innerText = element.judul;
//     count.innerText = element.count;
//     btn.innerText = "gatcha now!";

//     //set classname
//     card.className = "card1";
//     img.className = "img";
//     judul.className = "judul";
//     count.className = "count";
//     btn.className = "btn";

//     document.body.appendChild(card);
//     card.appendChild(img);
//     card.appendChild(judul);
//     card.appendChild(count);
//     card.appendChild(btn);
// })

let bunttonTambah1 = document.querySelector("#buttonTambah1");
bunttonTambah1.addEventListener("click", function(){
    alert("r u sure?");
    tambah.push({
        id: tambah.length + 1,
        img: "./public/Screenshot_5.png",
        judul: "Congrats!", 
        count: tambah.length + 1
    })

    let card = document.createElement("div");
    let img = document.createElement("img");
    let judul = document.createElement("h1");
    let count = document.createElement("p");
    let prize = document.createElement("p");
    let btn1 = document.createElement("button");
    let btnx = document.createElement("button");
    let btn10 = document.createElement("button");

    btn1 = bunttonTambah1;
    btn10 = bunttonTambah10;

    card.className = "card1";

    img.setAttribute('src', "./public/Wish x1.jpg");
    judul.innerText = tambah[tambah.length - 1].judul;
    count.innerText = `Wish ${tambah[tambah.length - 1].count}`;
    prize.innerText = "You got 1x 5* Weapon";
    btn1.innerText = "x1";
    btnx.innerText = "x";
    btn10.innerText = "x10";

    document.body.appendChild(card);
    card.appendChild(img);
    card.appendChild(judul);
    card.appendChild(count);
    card.appendChild(prize);
    card.appendChild(btn1);
    card.appendChild(btnx);
    card.appendChild(btn10);
})


let bunttonTambah10 = document.querySelector("#buttonTambah10");
bunttonTambah10.addEventListener("click", function(){
    alert("r u sure?");
    tambah.push({
        id: tambah.length + 1,
        img: "./public/Screenshot_5.png",
        judul: "Congrats!", 
        count: tambah.length + 1
    })

    let card = document.createElement("div");
    let img = document.createElement("img");
    let judul = document.createElement("h1");
    let count = document.createElement("p");
    let prize = document.createElement("p");
    let btn1 = document.createElement("button");
    let btnx = document.createElement("button");
    let btn10 = document.createElement("button");

    btn1 = bunttonTambah1;
    btn10 = bunttonTambah10;

    card.className = "card1";

    img.setAttribute('src', "./public/Screenshot_5.png");
    judul.innerText = tambah[tambah.length - 1].judul;
    count.innerText = `Wish ${tambah[tambah.length - 1].count}`;
    prize.innerText = "You got 1x 5* Character, 1x 4* Character, etc";
    btn1.innerText = "x1";
    btnx.innerText = "x";
    btn10.innerText = "x10";

    document.body.appendChild(card);
    card.appendChild(img);
    card.appendChild(judul);
    card.appendChild(count);
    card.appendChild(prize);
    card.appendChild(btn1);
    card.appendChild(btnx);
    card.appendChild(btn10);
})
