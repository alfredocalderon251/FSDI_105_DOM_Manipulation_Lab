const salon={
    name:"Fashion Pets",
    phone:"8675309",
    address:{
        street:"Hope Ave",
        number:"1313-5"
    },
    workingHours:{
        days:"Mon-Fri",
        open:'8:00 am',
        close:'5:00 pm'

    },
    pets:[],

    ShowPets:function(){
        var PetsMsg="Total Pets: "+this.pets.length;

        for(i=0;i<this.pets.length;i++){
            PetsMsg=PetsMsg+`<br>Pet Name: ${this.pets[i].name}`; 
        }

        document.getElementById("Pets").innerHTML=PetsMsg;

    }
}

let{name,phone,address:{street,number},workingHours:{days,open,close}}=salon;
console.log(salon);

document.querySelector("main .info").innerHTML=`<h1>Pet Saloon : ${name}</h1> <br> `;
document.querySelector("footer .info").innerHTML=`Contact : ${phone}, ${street}${number} <br> ${days}, ${open} - ${close}`;
class Pet {
    constructor(name, age, type, gender, breed, service, ownerName, contactPhone) {
        this.name = name;
        this.age = age;
        this.type = type;
        this.gender = gender;
        this.breed = breed;
        this.service = service;
        this.ownerName = ownerName;
        this.contactPhone = contactPhone;
        this.hunger=10;
        this.hapiness=5;

        
    }
    status=function(){
        console.log("Hapiness: "+this.hapiness+" Hunger: "+this.hunger);

    }
    feed=function(){
        this.hunger-=10;
        this.hapiness+=10;
        console.log("Feeding...");

    }

    ownerContact=function(){
        console.log("OwnerName: "+this.ownerName+" Phone:"+this.contactPhone);
    }
    ;

    
}
var txtname=document.getElementById("name"); 
var txtAge=document.getElementById("age");
var txtType=document.getElementById("type");
var txtGender=document.getElementById("gender");
var txtBreed=document.getElementById("breed");
var selectService=document.getElementById("service");
var txtOwnerName=document.getElementById("ownerName");
var txtContactPhone=document.getElementById("contactPhone");
function register(){
     
    const ThePet=new Pet(txtname.value,txtAge.value,txtType.value,txtGender.value,txtBreed.value,selectService.value,txtOwnerName.value,txtContactPhone.value);  

    console.log(txtname.value);
    console.log(ThePet);
    salon.pets.push(ThePet);
    alert("You have registered a Pet");
    document.getElementById("register-form").reset();
    //display(ThePet);
    displayTable(ThePet);
}



function display(aPet){
    var list=document.getElementById("petList");
    var li=document.createElement('li');
    li.className="list-group-item";
    li.innerText=`${aPet.name} -- ${aPet.age} -- ${aPet.type} -- ${aPet.breed}`;
    list.appendChild(li);

}

function displayTable(aPet){
    var tbody=document.getElementById('listBody');
    var row=`<tr>
    <td>${aPet.name}</td>
    <td>${aPet.age}</td>
    <td>${aPet.type}</td>
    <td>${aPet.gender}</td>
    <td>${aPet.breed}</td>
    <td>${aPet.service}</td>
    <td>${aPet.ownerName}</td>
    <td>${aPet.contactPhone}</td>
</tr>`;

tbody.innerHTML+=row;

}

// const pet1=new Pet("Shaggy",5,"Dog","Male","German Shepard","Hair Cut","Oliver","0123456");
// const pet2=new Pet("Scooby-Do",3,"Dog","Male","Great Dane","Shower","Alfredo","789456");
// const pet3=new Pet("Firulais",1,"Dog","Male","Chihuahua","Hair Cut","Adrian","48974566");
// const pet4=new Pet("Mindy",2,"Cat","Female","Munchkin","Hair Cut","Tom","6620194");


// salon.pets.push(pet1);
// salon.pets.push(pet2);
// salon.pets.push(pet3);
// salon.pets.push(pet4);

// pet1.status();
// pet1.feed();
// pet1.ownerContact();

// console.table(salon.pets);

// salon.ShowPets();


