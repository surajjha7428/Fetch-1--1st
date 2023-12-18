


let form=document.getElementById("form");
let Name=document.getElementById("name");
let Age=document.getElementById("age");
form.addEventListener("submit",function(e){
    e.preventDefault();
    let obj=[
        {
        Name:Name.value,
        Age:Age.value,
    },
];



localStorage.setItem("obj",JSON.stringify(obj));
form.reset();
if(Name==Name && Age==Age){
    alert("your details sucessfully saved");
};
});
let table=document.getElementById("table");
table.style.display="none";
let tdName=document.getElementById("tdName");

let tdAge=document.getElementById("tdAge");
let Retrieve=document.getElementById("retrieve");
Retrieve.addEventListener("click",function(){
    let object=JSON.parse(localStorage.getItem("obj"));
    if (object && object.length > 0) {
        let lastEntry = object[object.length - 1];
        tdName.innerText = lastEntry.Name;
        tdAge.innerText = lastEntry.Age;
    }
    else{
        tdName.innerText="Data Not Found";
        tdAge.innerText="Data Not Found";
    }

    table.style.display="block"
})