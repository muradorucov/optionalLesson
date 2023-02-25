//document, 
//querySelector, 
// getElementById, 
// querySelectorAll
// querySelectorAll = > forEach()
// createElement
// append
// insertBefore
// innerHTML, => html iceriyi
// innerText, => text iceriyi, css nezere alir.
// textContent => text iceriyi, css nezere almir.
//addeventListener
//onclick
// removeEVentListener
// preEventDefault
// classList
//

// const body = document.querySelector("body")
// const list = document.createElement("ul")
// const heading = document.getElementById("heading")
// const heading2 = document.getElementById("heading2")
// body.append(list)
// body.insertBefore(list,heading2)
// list.innerText = "IT Academy"

// ulList.innerHTML = ''

// const desc = document.querySelector(".desc")


// const ulList = document.querySelector(".list")
// const li1 = document.querySelector(".child1")
// console.log(li1);
// ulList.innerHTML = ""
// li1.remove()
// console.log(li1);

// const btn = document.querySelector("button")

//addeventListener
//onclick

// function getData(event) {
//     console.log("click edildi");
//     console.log(event.target.innerText);
// }

// btn.addEventListener("click",()=>{
//     console.log("click edildi");
// })

// btn.addEventListener("click",function(){
//     console.log("click edildi");
// })

// btn.addEventListener("click", getData)

// btn.onclick = getData

//removeEVentListener
// const btn = document.querySelector("button")

// function getData(event) {
//     btn.removeEventListener("click", getData)
//     console.log("click edildi");
//     console.log(event.target.innerText);
// }
// btn.addEventListener("click", getData)

//preEventDefault

// const btn = document.querySelector("#btn")

// btn.addEventListener("click", (event) => {
//     event.preventDefault()
//     console.log(nickname.value);
// })


//form id select

const btns = document.querySelectorAll(".btn-list li button")

btns.forEach((btn) => {
    btn.addEventListener("click", function (e) {
        // btns.forEach((item) => {
        //     item.classList.remove("active")
        // })
        // e.target.classList.add("active")
        // e.target.className = "active"
        console.log(btn.classList.contains("active"));
    })
})

