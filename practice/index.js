let users =JSON.parse(localStorage.getItem("user")) || [] ;

const ui = () => {
    // document.getElementById("ui").innerHTML = ""

    let temp =``
    users.map((ele,user) => {
        temp +=`
        <div>
        <h2>${ele.name}</h2>
        <h4>${ele.age}</h4>
        <h4>${ele.email}</h4>
    </div>`
    })
    document.getElementById("ui").innerHTML = temp
}
ui (users)


let userdata = (e) => {
    e.preventDefault();
    let user ={
        name :document.getElementById("name").value,
        age:document.getElementById("age").value,
        email:document.getElementById("email").value
    }
    users.push(user);
    localStorage.setItem("user",JSON.stringify(users))
    ui(users)

}



document.querySelector("form").addEventListener("submit", userdata)

let  userage =() => {
    let data = users.sort ((a,b) => a.age - b.age);
    ui(data)

}

document.getElementById("agetoage").addEventListener("click",userage)

let userhigh =() => {
    let data2 = users.sort((a,b) => b.age - a.age)
    ui(data2)
}

document.getElementById("agehigh").addEventListener("click", userhigh)