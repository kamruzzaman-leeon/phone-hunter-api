const loadPhone = async (searchText = '13', isShowAll) => {
  const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`)

  const loadData = await res.json();
  // console.log(data);
  const phones = loadData.data;
  // console.log(phones);
  displayPhones(phones, isShowAll);
}


const displayPhones = (phones, isShowAll) => {
  //get the the position of id where to show
  const phoneContainer = document.getElementById('phone-container');
  // clear the old data before the new data
  phoneContainer.textContent = '';

  //display show all button if there are more than 12 phones
  const showAllContainer = document.getElementById('show-all-container');
  if (phones.length > 12 && !isShowAll) {
    showAllContainer.classList.remove('hidden');
  } else {
    showAllContainer.classList.add('hidden');
  }


  // display only first 12 phones
  if (!isShowAll) {
    phones = phones.slice(0, 12);
  }


  phones.forEach(phone => {

    const phoneCard = document.createElement('div');
    phoneCard.classList = `card bg-gray-100 p-4 shadow-xl`;

    phoneCard.innerHTML = `
        <figure><img src="${phone.image}" alt="Shoes" /></figure>
                    <div class="card-body ">
                      <h2 class="card-title justify-center">${phone.phone_name}</h2>
                      <p>There are many variations of passages of available, but the majority have suffered</p>
                      <h3 class ="font-bold text-2xl">$999</h3>
                      <div class="card-actions justify-center">
                        <button onclick="handleShowDetail('${phone.slug}')" class="btn btn-primary">Show details</button>
                      </div>
                    </div>
        `;
    phoneContainer.appendChild(phoneCard);
  });
  // hide loading spinner
  toggleLoadingSpinner(false);
}


//handle search button

const handleSearch = (isShowAll) => {
  // console.log('search added')

  toggleLoadingSpinner(true);
  const searchField = document.getElementById('search-field');
  searchText = searchField.value;
  // console.log(searchText);
  loadPhone(searchText, isShowAll);
}


const toggleLoadingSpinner = (isLoading) => {
  const loadingSpinner = document.getElementById('loading-spinner');
  if (isLoading) {
    loadingSpinner.classList.remove('hidden');
  }
  else {
    loadingSpinner.classList.add('hidden');
  }
}

//handle show all
const handleShowAll = () => {
  handleSearch(true);
}


const handleShowDetail = async (id) => {
  // console.log('show details ,',id)
  // load single phone data
  const res = await fetch(`https://openapi.programming-hero.com/api/phone/${id}`);
  const data =await res.json();
  const phone = data.data;
  // console.log(phone);
  showPhoneDetails(phone);
}

const showPhoneDetails = (phone) => {
  console.log(phone);
  // const showDetailPhoneName =document.getElementById('show-detail-phone-name');
  // showDetailPhoneName.innerText=phone.name;

  const showDetailContainer = document.getElementById('show-detail-container');
  showDetailContainer.innerHTML=`
  <div class="flex justify-center items-center bg-slate-100 p-4">
  <img src="${phone.image}" alt="phone" />
  </div>
  <h3 id="show-detail-phone-name" class="font-bold text-lg">${phone.name}</h3>
    
    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
    <p><span class="font-bold">Storage:</span>${phone?.mainFeatures?.storage}</p>
   
 

  `;
  // show the modal
  show_details_modal.showModal();
}


loadPhone();