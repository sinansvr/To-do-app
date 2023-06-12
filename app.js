//selectors

const inputItem =document.querySelector("#add-item-input")
const addBtn = document.querySelector("#add-button")
const addForm = document.querySelector("#add-form")

const itemList=document.querySelector("#item-list")//görev eklenen liste


//Variables
items=[];

//Event Listeners

//yeni task ekleme
addForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    //! yeni item listeye eklendi
    // Creatli fonk. çağrılarak yeni eleman oluşturulması
    const newItem=inputItem.value

    if(newItem==""){
        alert("Lütfen bir görev giriniz!")
    }else{createLi(newItem);

        //bir diziye aktardık
        items.push(newItem)
        console.log(items)
    
        //LocalStorage a kaydettik
        localStorage.setItem("itemsLS",JSON.stringify(items))
    
        // inputItem.value="";// inputu sıfırladık   
        addForm.reset(); }
    

})

//sayfa yüklendiğinde localStorage den verileri güncelleme
window.addEventListener("load",()=>{

    //Localstorage den gelen verilen parse edilmesi ve kontrolü
    items= JSON.parse(localStorage.getItem("itemsLS"))||[]
    console.log(items);
    //localStorage den gelen verilerin listeye eklenmesi
    items.map(item => {
        createLi(item)
        console.log(item)
    });
})

//listelenen elemanı silme
itemList.addEventListener("click",(e)=>{
    if(e.target.classList.contains("fa-trash-can")){
        alert("kdnsfs")
    }

})

//Functions

//Listeye eklenemek istenen elemanın oluşturlması ve localStorage kaydedilmesi
const createLi = function (item){
    const li=document.createElement("li");
    li.classList="list-group-item d-flex justify-content-between align-items-center";

    const iCheck=document.createElement("i");
    iCheck.classList="fa-regular fa-circle-check text-success";

    const span=document.createElement("span");
    span.textContent=item;

    const iTrash=document.createElement("i");
    iTrash.classList="fa-solid fa-trash-can text-danger";

    li.appendChild(iCheck);
    li.appendChild(span);
    li.appendChild(iTrash);

    itemList.prepend(li);

}


 