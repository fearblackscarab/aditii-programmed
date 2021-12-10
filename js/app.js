let subTimeQty = 0;
let tax = 0;
let itemCount = 0;
let price = 0;
let amount = 'item';

class Products {
    constructor() {
        this.itemsCart = {
            itemCount: 0,
            subTotal: 0
        }
        this.inventory = {
            item1: {
                id: 1,
                name: 'halo infinite',
                price: 59.99,
                img: 'media/halo_infinite.png',
                desc:`Halo Infinite is a 2021 first-person shooter game developed by 343 Industries and published by Xbox Game Studios. It is the eighth main entry in the Halo series, and the third in the "reclaimer saga" following 2015's Halo 5: Guardians`,
                alt: 'halo infinite',
                class: ['xbox', 'pc'],
                productCode: '001',
                preOwned: 51.99,
                qty: 0
            },
            item2: {
                id: 2,
                name: 'farm simulator 22',
                price: 59.99,
                img: 'media/farm_sim.png',
                desc:`Take on the role of a modern farmer and creatively build your farm in three diverse American and European environments. Farming Simulator 22 offers a huge variety of farming operations focusing on agriculture, animal husbandry and forestry - now with the exciting addition of seasonal cycles!`,
                alt: 'farm simulator 22',
                class: ['xbox', 'pc', 'playstation'],
                productCode: '002',
                preOwned: 51.99,
                qty: 0
            },
            item3: {
                id: 3,
                name: "marvel's guardians of the galaxy",
                price: 29.99,
                img: 'media/marvel_gotg.png',
                desc:`Marvel's Guardians of the Galaxy is an action-adventure video game developed by Eidos-Montréal and published by Square Enix's European subsidiary.`,
                alt: "marvel's guardians of the galaxy",
                class: ['xbox', 'pc', 'playstation', 'nintendo'],
                productCode: '003',
                preOwned: 27.99,
                qty: 0
            },
            item4: {
                id: 4,
                name: "Marvel's spider-man:Miles morales Ultimate Edition",
                price: 49.99,
                img: 'media/marvel_sm_mm_standard.png',
                desc:`Marvel's Spider-Man: Miles Morales is a 2020 action-adventure game developed by Insomniac Games and published by Sony Interactive Entertainment for the PlayStation 4 and PlayStation 5. `,
                alt: "Marvel's spider-man:Miles morales ultimate edition",
                class: ['playstation'],
                productCode: '004',
                preOwned: null,
                qty: 0
            },
            item5: {
                id: 5,
                name: "Marvel's spider-man:Miles morales standard edition",
                price: 29.99,
                img: 'media/marvel_sm_mm_standard.png',
                desc:`Marvel's Spider-Man: Miles Morales is a 2020 action-adventure game developed by Insomniac Games and published by Sony Interactive Entertainment for the PlayStation 4 and PlayStation 5. `,
                alt: "Marvel's spider-man:Miles morales standard edition",
                class: ['playstation'],
                productCode: '005',
                preOwned: 27.99,
                qty: 0
            },
            item6: {
                id: 6,
                name: 'legend of zelda: breath of the wild',
                price: 39.99,
                img: 'media/zelda.png',
                desc:`The Legend of Zelda: Breath of the Wild is a 2017 action-adventure game developed and published by Nintendo for the Nintendo Switch and Wii U consoles. Breath of the Wild is the nineteenth installment of The Legend of Zelda franchise and is set at the end of the Zelda timeline.`,
                alt: 'legend of zelda: breath of the wild',
                class: ['nintendo'],
                productCode: '006',
                preOwned: null,
                qty: 0
            },
            item7: {
                id: 7,
                name: 'mario maker 2',
                price: 52.99,
                img: 'media/mario_maker.png',
                desc: 'Super Mario Maker 2 is a 2019 side-scrolling platform game and level creation system developed and published by Nintendo for the Nintendo Switch. It is the sequel to Super Mario Maker and was released worldwide on June 28, 2019.',
                alt: 'mario maker 2',
                class: ['nintendo'],
                productCode: '007',
                preOwned: 47.99,
                qty: 0
            },
            item8: {
                id: 8,
                name: 'new world',
                price: 59.99,
                img: 'media/new_world.png',
                desc:`New World is a massively multiplayer online role-playing game developed by Amazon Games Orange County and published by Amazon Games released on September 28, 2021. The game was previously scheduled to release in May 2020 and subsequently August 2021, but was delayed to its current date.`,
                alt: 'new world',
                class: ['pc'],
                productCode: '008',
                preOwned: null,
                qty: 0
            }
        }
    }

    __init__() {
        this.loadItems()
        this.checkout()
        this.goToItem()
        // return subTimeQty,tax,shipping,itemCount,price,amount;
    }
    loop(){
            if(confirm("sure this isnt a scam?")){
                this.loop()
            }
    }
    // load page
    loadItems() {
        let productDisplay = document.getElementById('productDisplay');
        let xboxDisplay = document.getElementById('xboxDisplay');
        let playstationDisplay = document.getElementById('playstationDisplay');
        let pcDisplay = document.getElementById('pcDisplay');
        let nintendoDisplay = document.getElementById('nintendoDisplay');
        let productPage = document.getElementById('productPage');
        let checkDisplay = document.getElementById('checkoutPage');
        let singleItemPage = document.getElementById('singleItemPage');
        let home=document.getElementById('home');
        let confirmButton=document.getElementById('confirmButton');
        
        confirmButton.addEventListener('click',()=>{
            this.loop()
        })

        home.addEventListener('click',(e)=>{
            e.preventDefault()
            if(productPage.classList.contains('d-none')){
                productPage.classList.remove('d-none');
                if(!checkDisplay.classList.contains('d-none')){
                    checkDisplay.classList.add('d-none');
                }else{
                    singleItemPage.classList.add('d-none');
                }

            }
        })

        for (const key in this.inventory) {
            let item = this.inventory[key]
            productDisplay.innerHTML += `
                    <div class="card col-3">
                    <img src="${item.img}" class="card-img-top" alt="${item.alt}">
                    <div class="card-body">
                    <p class="card-text item-price-display">$${item.price}</p>
                    <h5 class="card-title item-name-display">${item.name}</h5>
                    <button class="buy-item btn btn-dark" data-id="${item.id}">Buy me</button>
                    </div>
                    </div>`
        }
        // if not these has ran dont
        xboxDisplay.addEventListener('click', () => {
            productDisplay.innerHTML = ''
            for (const key in this.inventory) {
                let item = this.inventory[key]
                if (item.class.includes('xbox')) {
                    productDisplay.innerHTML += `
                        <div class="card col-3">
                        <img src="${item.img}" class="card-img-top" alt="${item.alt}">
                        <div class="card-body">
                        <p class="card-text item-price-display">${item.price}</p>
                        <h5 class="card-title item-name-display">${item.name}</h5>
                        <button class="buy-item btn btn-dark" data-id=${item.id}>Buy me</button>
                        </div>
                        </div>`
                }
            }
            this.goToItem()
        })

        playstationDisplay.addEventListener('click', () => {
            productDisplay.innerHTML = ''
            for (const key in this.inventory) {
                let item = this.inventory[key]
                if (item.class.includes('playstation')) {
                    productDisplay.innerHTML += `
                        <div class="card col-3">
                        <img src="${item.img}" class="card-img-top" alt="${item.alt}">
                        <div class="card-body">
                        <p class="card-text item-price-display">${item.price}</p>
                        <h5 class="card-title item-name-display">${item.name}</h5>
                        <button class="buy-item btn btn-dark" data-id=${item.id}>Buy me</button>
                        </div>
                        </div>`
                }
            }
            this.goToItem()
        })

        pcDisplay.addEventListener('click', () => {
            productDisplay.innerHTML = ''
            for (const key in this.inventory) {
                let item = this.inventory[key]
                if (item.class.includes('pc')) {
                    productDisplay.innerHTML += `
                        <div class="card col-3">
                        <img src="${item.img}" class="card-img-top" alt="${item.alt}">
                        <div class="card-body">
                        <p class="card-text item-price-display">${item.price}</p>
                        <h5 class="card-title item-name-display">${item.name}</h5>
                        <button class="buy-item btn btn-dark" data-id=${item.id}>Buy me</button>
                        </div>
                        </div>`
                }
            }
            this.goToItem()
        })

        nintendoDisplay.addEventListener('click', () => {
            productDisplay.innerHTML = ''
            for (const key in this.inventory) {
                let item = this.inventory[key]
                if (item.class.includes('nintendo')) {
                    productDisplay.innerHTML += `
                        <div class="card col-3">
                        <img src="${item.img}" class="card-img-top" alt="${item.alt}">
                        <div class="card-body">
                        <p class="card-text item-price-display">${item.price}</p>
                        <h5 class="card-title item-name-display">${item.name}</h5>
                        <button class="buy-item btn btn-dark" data-id=${item.id}>Buy me</button>
                        </div>
                        </div>`
                }
            }
            this.goToItem()
        })

    }

    // add to cart
    addToCart() {
        let buyItem = document.getElementById('buyItem');
        let countDisplay = document.getElementById('countDisplay');
        let totalDisplay = document.getElementById('totalDisplay');
        let table = document.getElementById('tbody');
        let subtotalValue = document.getElementById('subtotalValue');
        let taxValue = document.getElementById('taxValue');
        let totalValue = document.getElementById('totalValue');
        let shippingValue = document.getElementById('shippingValue');
        let shipping = 5;

        // if(){   

        // }

            buyItem.addEventListener('click', () => {
                for (const key in this.inventory) {
                    let item = this.inventory[key];
                    if (buyItem.dataset['id'] == item.id) {
                        console.log(item.img)
                        itemCount++
                        if (itemCount > 1) {
                            amount = 'items'
                        }
                        price += item.price;
                        this.itemsCart.itemCount = itemCount;
                        this.itemsCart.subTotal = price;

                        item.qty++;
                        console.log(item)
                        console.log(this.itemsCart)

                        subTimeQty = (item.qty * item.price).toFixed(2);
                        subtotalValue.innerText = this.itemsCart.subTotal.toFixed(2);
                        shippingValue.innerText = shipping.toFixed(2);
                        tax = this.itemsCart.subTotal * 0.07;
                        taxValue.innerText = tax.toFixed(2);
                        totalValue.innerText = (this.itemsCart.subTotal + tax + shipping).toFixed(2);
                        // if qty is > 0(item is added to cart)
                        if (item.qty > 1) {
                            let qtyInput = document.querySelectorAll('.qty-input-value');
                            let itemSubtotal = document.querySelectorAll('.item-subtotal')
                            qtyInput.forEach((element) => {
                                if (element.dataset['id'] == item.id) {
                                    element.innerText = `${item.qty}`
                                }
                            })

                            itemSubtotal.forEach((el) => {
                                if (el.dataset['id'] == item.id) {
                                    el.innerText = `${subTimeQty}`
                                }
                            })
                        }
                        else {
                            const tableRow = document.createElement('tr');
                            tableRow.className = 'product-checkout';

                            tableRow.innerHTML += `
                            <td id="checkoutImg">
                            <div class="row">
                            <img src="${item.img}" alt="${item.alt}" class="col img-fluid checkout-img">
                            <p class="col text-center item-name">${item.name}</p>
                            </div>
                            <div class="product-desc">
                            </div>
                            </td>
                            <td id="productCode">${item.productCode}</td>
                            <td>
                            <p class="unit-price">${item.price.toFixed(2)}</p>
                            </td>
                            <td>
                            <div id="itemQuantity">
                            <p class="text-center qty-input-value" id="qtyInput" data-id="${item.id}">${item.qty}</p>
                            </td>
                            <td class="item-subtotal" id="itemSubtotal" data-id="${item.id}">${subTimeQty}</td>`

                            table.append(tableRow);
                        }
                    }
                    countDisplay.innerText = `${itemCount} ${amount}`;
                    totalDisplay.innerText = `$${price.toFixed(2)}`
                }
                console.log('click')
            })
    }
    // display checkout
    checkout() {
        let checkout = document.getElementById('checkout');
        let checkoutItemCount = document.getElementById('checkoutItemCount');
        let productPage = document.getElementById('productPage');
        let checkDisplay = document.getElementById('checkoutPage');
        let singleItemPage = document.getElementById('singleItemPage');
        

        checkout.addEventListener('click', (e) => {
            e.preventDefault();
            if (!productPage.classList.contains('d-none')) {
                productPage.classList.add('d-none');
                checkDisplay.classList.remove('d-none');
                checkout.innerText = 'More shop';
            }else if(!singleItemPage.classList.contains('d-none')){
                singleItemPage.classList.add('d-none');
                checkDisplay.classList.remove('d-none');
                checkout.innerText = 'More shop';
            }
            else {
                productPage.classList.remove('d-none');
                checkDisplay.classList.add('d-none')
                checkout.innerText = "cart"
            }

            if (this.itemsCart == 1) {
                checkoutItemCount.innerText = `${this.itemsCart.itemCount} item`
            } else {
                checkoutItemCount.innerText = `${this.itemsCart.itemCount} items`
            }
        })

    }
    // individual product pages

    goToItem() {
        let buyItem = document.querySelectorAll('.buy-item');
        let productPage = document.getElementById('productPage');
        let singleItemPage = document.getElementById('singleItemPage');
        buyItem.forEach((el) => {
            el.addEventListener('click', () => {
                singleItemPage.classList.remove('d-none')
                for (const key in this.inventory) {
                    let item = this.inventory[key];
                if (el.dataset['id'] == item.id) {
                    singleItemPage.innerHTML = `
                <div id="carouselExampleControls" class="carousel slide col-6 product-carousel" data-bs-ride="carousel">
                <div class="carousel-inner">
                <div class="carousel-item active">
                <img src="${item.img}" class="w-100" alt="...">
                </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                            </button>
                            </div>
                            <div class="single-product-info col-6 text-center">
                            <div class="__product-info">
                            <h2 class="product-name">${item.name}</h2>
                            <p class="product-desc">${item.desc}</p>
                            </div>
                            <div class="__product-price">
                            <p class="product-price">${item.price}</p>
                            </div>
                            <div class="buy-div">
                            <button class="add-button btn btn-dark" data-id="${item.id}" id="buyItem">confirm purchase</button>
                            </div>
                            </div>`
                        }
                    }
                    productPage.classList.add('d-none')
                    this.addToCart()
            })
        })
    }
}

action = new Products
action.__init__()