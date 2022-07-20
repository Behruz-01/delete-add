const elPhoneTemplate = document.querySelector("#phone-template");
const elPhoneWrapper = document.querySelector(".list");


const addnull = num => {return num < 10 ? "0" + num : num}

const createRow = product =>{

  const {id, title, price, model,addedDate, benefits:ben} = product

  const elPhoneRow = elPhoneTemplate.cloneNode(true).content;


  const elPhoneImg = elPhoneRow.querySelector(".card-img-top");
  elPhoneImg.src = product.img;

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


  const elDeleteBtn = elPhoneRow.querySelector(".btn-delete");
  elDeleteBtn.dataset.id = id;

  // edit
  const elEditBtn = elPhoneRow.querySelector(".btn-secondary");
  elEditBtn.dataset.id = id;
  


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


// edit

const elEditForm = document.querySelector("#edits-student-modal")
const elEditTitle = elAddForm.querySelector("#edit-title")
const elEditPrice = elAddForm.querySelector("#edit-price")
const elEditManu = elAddForm.querySelector("#edit-manufacturer")
const elEditBen = elAddForm.querySelector("#edits-benefits")

//delete
elPhoneWrapper.addEventListener("click" , (evt)=>{
  if (evt.target.matches(".btn-delete")){
      const clickedID = +evt.target.dataset.id;
     
      const clikedIndex = products.findIndex(productjon=>{
        return productjon.id == clickedID
      })

      products.splice(clikedIndex, 1)
      
      phoneRender()
  }



// edit

if(evt.target.matches(".btn-secondary")){
    const clickedId = +evt.target.dataset.id;
    const clickedIdObj = products.find((product) => product.id === clickedId)

  // findIndex bilan
    // const clickedIDIndex = products.find(product => product.id == clickedID)
    // const clickedIdObj = products[clickedIDIndex]
    
    if(clickedIdObj){
      elEditTitle.value = clickedIdObj.title || "";
      elEditPrice.value = clickedIdObj.price  || "";
      elEditManu.value = clickedIdObj.manufacturer || "";
      elEditBen.value = clickedIdObj.benefits  || "";



      elEditForm.dataset.id = clickedBtnId;
    }
}

})



elEditForm.addEventListener("submit", (evt)=>{
  evt.preventDefault;

  const submittingItemId = +evt.target.dataset.id;
  

  const titleValue = elEditTitle.value.trim();
  const priceValue = +elEditPrice.value.trim();
  const manuValue = elEditManu.value.trim();
  const benValue = +elEditBen.value;


  if (titleValue && priceValue > 0 && manuValue && benValue > 0){
    const submittingItemIndex = products.findIndex(product => product.id == submittingItemId)
  }

  const submittingItemObj = {
    id: submittingItemId,
    title: titleValue,
    price: priceValue,
    benefits:benValue,
    addedDate: new Date().toISOString()
  }


  students.splice(submittingItemIndex, 1, submittingItemObj);
  renderStudents();
  elEditModal.hide();
})



// filter
const elFilterForm = document.querySelector("#filter");

elFilterForm.addEventListener("submit" , (evt) =>{
  evt.preventDefault();

  const elements = evt.target.elements;
  const searchValue = elements.search.value;
  
  const filterProduct = products.filter(function(element){
    const isTitleMatches = element.title.toLowerCase().includes(searchValue.toLowerCase());
    
    return isTitleMatches;
  })
  
  elPhoneWrapper.innerHTML = "";

  const elCreatyPhone = createRow(product);
  elCreatyPhone
})




// bowqa

elEditForm.addEventListener("submit",(evt) => {
  evt.preventDefault();
  
  const submittingItemId = +evt.target.dataset.id;
  
  const titleValue = elEditName.value.trim();
  const priceValue = +elEditPrice.value;
  const manufacturerValue = elEditManuFacturer.value;
  const benefitValue = elEditBenefits.value;
  
  if (priceValue > 0 && titleValue && manufacturerValue && benefitValue) {
      const submittingItemIndex = products.findIndex( mobile => mobile.id === submittingItemId) ;
      const image = document.querySelector('.card-img-top');
      const submittingItemObj = {
          title: titleValue,
          price: ${priceValue},
          lastprice:"000",
          addedDate: new Date().toISOString(),
          model: manufacturerValue,
          benefits: ["Barcha turlari mavjud"],
          info: benefitValue,
          id: submittingItemId
      }
      products.splice(submittingItemIndex , 1 , submittingItemObj)
      
      renderMobile();
      elEditModal.hide();
  }
})