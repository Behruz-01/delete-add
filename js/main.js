const elPhoneTemplate = document.querySelector("#phone-template");
const elPhoneWrapper = document.querySelector(".list");


const addnull = num => {return num < 10 ? "0" + num : num}

const createRow = product =>{

  const {id, title, price, model,addedDate, benefits:ben} = product

  const elPhoneRow = elPhoneTemplate.cloneNode(true).content;



  const elPhoneTitle = elPhoneRow.querySelector(".card-title");
  elPhoneTitle.textContent = product.title;

  const elPhoneID = elPhoneRow.querySelector(".card-text");
  elPhoneID.textContent = id;


  const elPhonePrice = elPhoneRow.querySelector(".card-price");
  elPhonePrice.textContent = price;

  const elPhoneBadge = elPhoneRow.querySelector(".badge");
  elPhoneBadge.textContent = model;


  const elPhoneTime = elPhoneRow.querySelector(".card-date");
  const time = new Date();
  elPhoneTime.textContent = `${addnull(time.getDate())}.${addnull(time.getMonth()+1)}.${time.getFullYear()}`;
  


  const elPhoneRam = elPhoneRow.querySelector(".ram");
  elPhoneRam.textContent = product.benefits[0];

  const elPhoneFasd = elPhoneRow.querySelector(".fasd");
  elPhoneFasd.textContent = product.benefits[1];


  const elPhoneMemory = elPhoneRow.querySelector(".memory");
  elPhoneMemory.textContent = product.benefits[2];


  const elDeleteBtn = elPhoneRow.querySelector(".btn-delete")
  elDeleteBtn.dataset.id = id;
  


  return elPhoneRow;
}

function phoneRender(){
  elPhoneWrapper.innerHTML = "";
  products.forEach((product)=>{
    const cardRow = createRow(product);
  


    elPhoneWrapper.appendChild(cardRow);
    
  })
}

phoneRender();




const elAddForm = document.querySelector("#form-add");

 elAddForm.addEventListener("submit", (evt) => {
  evt.preventDefault();

  const formElements = evt.target.elements;



  const formTitle = formElements.title.value.trim();
  const formPrice = +formElements.price.value.trim();
  const formManu = formElements.manufacturer.value.trim();
  const formBen = formElements.benefits.value.trim();

  if(formTitle && formPrice>0 && formManu && formBen){
     const adding = {
       id:Math.floor(Math.random() *1000),
       title:formTitle,
       price:formPrice,
       model:formManu,
       benefits:formBen,
       addedDate: new Date().toISOString(),
  }
  
  products.unshift(adding);
  

  const elNewPhone = createRow(adding);
  elPhoneWrapper.prepend(elNewPhone);

  }




  
})


elPhoneWrapper.addEventListener("click" , (evt)=>{
  if (evt.target.matches(".btn-delete")){
      const clickedID = +evt.target.dataset.id;
     
      const clikedIndex = products.findIndex(productjon=>{
        return productjon.id == clickedID
      })

      products.splice(clikedIndex, 1)
      
      phoneRender()
  }

})