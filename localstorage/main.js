

const btn = document.querySelector(".btn")
const tb = document.querySelector("tbody")
let list = []
let curretID = 0;

const localList = JSON.parse(localStorage.getItem("users"))
localList?.forEach(element => {
    tb.innerHTML += `
    <tr>
                <td scope="row">${element.id}</td>
                <td>${element.fullname}</td>
                <td>${element.email}</td>
                <td>
                    <button class="btn btn-danger" onclick="deleteFunc(${element.id})">delete</button>
                    <button class="btn btn-primary" onclick="deleteFunc(${element.id})">update</button>
                </td>
            </tr>`
});


btn.addEventListener("click", (e) => {
    e.preventDefault()
    const localList = JSON.parse(localStorage.getItem("users"))
    if (localList) {
        list = [...localList]
        curretID = localList[localList.length - 1].id
        wrtiterForm()
    } else {
        wrtiterForm()
    }


    tb.innerHTML = ""
    list.forEach(element => {
        tb.innerHTML += `
            <tr>
                <td scope="row">${element.id}</td>
                <td>${element.fullname}</td>
                <td>${element.email}</td>
                <td>
                    <button class="btn btn-danger" onclick="deleteFunc(${element.id})">delete</button>
                    <button class="btn btn-primary" onclick="deleteFunc(${element.id})">update</button>
                </td>
            </tr>`
    });

})

function wrtiterForm() {
    ++curretID;
    list.push({
        id: curretID,
        fullname: username.value,
        email: useremail.value
    })
    localStorage.setItem("users", JSON.stringify(list))
}



function deleteFunc(id) {
    console.log(id);
}