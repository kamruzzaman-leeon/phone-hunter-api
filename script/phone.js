const loadPhone = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/phones?search=iphone')

    const loadData = await res.json();
    // console.log(data);
    const phones = loadData.data;
    // console.log(phones);
    displayPhones(phones);
}


const displayPhones = phones => {
    //get the the position of id where to show
    const phoneContainer = document.getElementById('phone-container');
    phones.forEach(phone => {
       
        const phoneCard = document.createElement('div');
        phoneCard.classList = `card w-auto bg-base-100 shadow-xl`;
            
        phoneCard.innerHTML=`
        <figure><img src="${phone.image}" alt="Shoes" /></figure>
                    <div class="card-body">
                      <h2 class="card-title">Shoes!</h2>
                      <p>If a dog chews shoes whose shoes does he choose?</p>
                      <div class="card-actions justify-end">
                        <button class="btn btn-primary">Buy Now</button>
                      </div>
                    </div>
        `;
        phoneContainer.appendChild(phoneCard);
    });
}

loadPhone();