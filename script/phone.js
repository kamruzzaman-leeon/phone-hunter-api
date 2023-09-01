const loadPhone = async (searchText) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`)

    const loadData = await res.json();
    // console.log(data);
    const phones = loadData.data;
    // console.log(phones);
    displayPhones(phones);
}


const displayPhones = phones => {
    //get the the position of id where to show
    const phoneContainer = document.getElementById('phone-container');
    // clear the old data before the new data
    phoneContainer.textContent='';
    phones.forEach(phone => {

        const phoneCard = document.createElement('div');
        phoneCard.classList = `card bg-gray-100 p-4 shadow-xl`;

        phoneCard.innerHTML = `
        <figure><img src="${phone.image}" alt="Shoes" /></figure>
                    <div class="card-body">
                      <h2 class="card-title">${phone.phone_name}</h2>
                      <p>There are many variations of passages of available, but the majority have suffered</p>
                      <div class="card-actions justify-end">
                        <button class="btn btn-primary">Buy Now</button>
                      </div>
                    </div>
        `;
        phoneContainer.appendChild(phoneCard);
    });
}


//handle search button

const handleSearch = () => {
// console.log('search added')
const searchField = document.getElementById('search-field');
searchText = searchField.value;
// console.log(searchText);
loadPhone(searchText);
}

