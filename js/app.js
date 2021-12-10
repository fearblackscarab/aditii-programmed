let subTimeQty = 0;
let tax = 0;
let itemCount = 0;
let price = 0;
let amount='item';

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
                alt: 'halo infinite',
                class: ['xbox', 'pc'],
                productCode: '001',
                preOwned: 51.99,
                qty:0
            },
            item2: {
                id: 2,
                name: 'farm simulator 22',
                price: 59.99,
                img: 'media/farm_sim.png',
                alt: 'farm simulator 22',
                class: ['xbox', 'pc', 'playstation'],
                productCode: '002',
                preOwned: 51.99,
                qty:0
            },
            item3: {
                id: 3,
                name: "marvel's guardians of the galaxy",
                price: 29.99,
                img: 'media/marvel_gotg.png',
                alt: "marvel's guardians of the galaxy",
                class: ['xbox', 'pc', 'playstation', 'nintendo'],
                productCode: '003',
                preOwned: 27.99,
                qty:0
            },
            item4: {
                id: 4,
                name: "Marvel's spider-man:Miles morales Ultimate Edition",
                price: 49.99,
                img: 'media/marvel_sm_mm_standard.png',
                alt: "Marvel's spider-man:Miles morales ultimate edition",
                class: ['playstation'],
                productCode: '004',
                preOwned: null,
                qty:0
            },
            item5: {
                id: 5,
                name: "Marvel's spider-man:Miles morales standard edition",
                price: 29.99,
                img: 'media/marvel_sm_mm_standard.png',
                alt: "Marvel's spider-man:Miles morales standard edition",
                class: ['playstation'],
                productCode: '005',
                preOwned: 27.99,
                qty:0
            },
            item6: {
                id: 6,
                name: 'legend of zelda: breath of the wild',
                price: 39.99,
                img: 'media/zelda.png',
                alt: 'legend of zelda: breath of the wild',
                class: ['nintendo'],
                productCode: '006',
                preOwned: null,
                qty:0
            },
            item7: {
                id: 7,
                name: 'mario maker 2',
                price: 52.99,
                img: 'media/mario_maker.png',
                desc:'Super Mario Maker 2 is a 2019 side-scrolling platform game and level creation system developed and published by Nintendo for the Nintendo Switch. It is the sequel to Super Mario Maker and was released worldwide on June 28, 2019.',
                alt: 'mario maker 2',
                class: ['nintendo'],
                productCode: '007',
                preOwned: 47.99,
                qty:0
            },
            item8: {
                id: 8,
                name: 'new world',
                price: 59.99,
                img: 'media/new_world.png',
                alt: 'new world',
                class: ['pc'],
                productCode: '008',
                preOwned: null,
                qty:0
            }
        }
    }

    __init__() {
        this.loadItems()
        this.addToCart()
        this.checkout()
        // this.goToItem()
        // return subTimeQty,tax,shipping,itemCount,price,amount;
    }
    // load page
    loadItems() {
        let productDisplay = document.getElementById('productDisplay');
        let xboxDisplay = document.getElementById('xboxDisplay');
        let playstationDisplay = document.getElementById('playstationDisplay');
        let pcDisplay = document.getElementById('pcDisplay');
        let nintendoDisplay = document.getElementById('nintendoDisplay');

        for (const key in this.inventory) {
            let item = this.inventory[key]
            productDisplay.innerHTML += `
                    <div class="card col-3">
                    <img src="${item.img}" class="card-img-top" alt="${item.alt}">
                    <div class="card-body">
                    <p class="card-text item-price-display">$${item.price}</p>
                    <h5 class="card-title item-name-display">${item.name}</h5>
                    <button class="add-button btn btn-dark" data-id="${item.id}">Buy me</button>
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
                        <button class="add-button btn btn-dark" data-id=${item.id}>Buy me</button>
                        </div>
                        </div>`
                }
            }
            this.addToCart()
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
                        <button class="add-button btn btn-dark" data-id=${item.id}>Buy me</button>
                        </div>
                        </div>`
                }
            }
            this.addToCart()
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
                        <button class="add-button btn btn-dark" data-id=${item.id}>Buy me</button>
                        </div>
                        </div>`
                }
            }
            this.addToCart()
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
                        <button class="add-button btn btn-dark" data-id=${item.id}>Buy me</button>
                        </div>
                        </div>`
                    }
                }
                this.addToCart()
            })

    }

    // add to cart
    addToCart() {
        let addButton = document.querySelectorAll('.add-button');
        let countDisplay = document.getElementById('countDisplay');
        let totalDisplay = document.getElementById('totalDisplay');
        let table = document.getElementById('tbody');
        let subtotalValue = document.getElementById('subtotalValue');
        let taxValue = document.getElementById('taxValue');
        let totalValue = document.getElementById('totalValue');
        let shippingValue = document.getElementById('shippingValue');
        let singleItemPage=document.getElementById('singleItemPage');
        let shipping = 5;
        
        // if(){   

        // }

        addButton.forEach((el) => {
            el.addEventListener('click', () => {
                for (const key in this.inventory) {
                    let item = this.inventory[key];
                    if (el.dataset['id'] == item.id) {
                        console.log(item.img)
                        singleItemPage.innerHTML=`
                        <div id="carouselExampleControls" class="carousel slide col-5 product-carousel" data-bs-ride="carousel">
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
                        <div class="single-product-info col-5 text-center">
                            <div class="__product-info">
                                <h2 class="product-name">test</h2>
                                <p class="product-desc">test</p>
                            </div>
                            <div class="__product-price">
                                <p class="product-price">0.00</p>
                                <div class="quantity-div">
                                    <span>Quantity</span>
                                    <select name="quantity" id="addQuantity">
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                    </select>
                                </div>
                            </div>
                            <div class="buy-div">
                                <button id="buyItem">confirm purchase</button>
                            </div>
                        </div>`
                        itemCount++
                        if(itemCount>1){
                            amount='items'
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
                        if (item.qty >1) {
                            let qtyInput=document.querySelectorAll('.qty-input-value');
                            let itemSubtotal=document.querySelectorAll('.item-subtotal')
                            qtyInput.forEach((element)=>{
                                if(element.dataset['id']==item.id){
                                    element.innerText=`${item.qty}`
                                }
                            })

                            itemSubtotal.forEach((el)=>{
                                if(el.dataset['id']==item.id){
                                    el.innerText=`${subTimeQty}`
                                }
                            })
                        }
                        else{
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
        })
    }
    // display checkout
    checkout() {
        let checkout = document.getElementById('checkout');
        let checkoutItemCount = document.getElementById('checkoutItemCount');
        let productPage = document.getElementById('productPage');
        let checkDisplay = document.getElementById('checkoutPage');

            checkout.addEventListener('click', (e) => {
                e.preventDefault();
                if (productPage.classList.contains('d-none') === false) {
                    productPage.classList.add('d-none')
                    checkDisplay.classList.remove('d-none')
                    checkout.innerText='More shop'
                }
                else {
                    productPage.classList.remove('d-none')
                    checkDisplay.classList.add('d-none')
                    checkout.innerText="cart"
                }

                if (this.itemsCart == 1) {
                    checkoutItemCount.innerText = `${this.itemsCart.itemCount} item`
                } else {
                    checkoutItemCount.innerText = `${this.itemsCart.itemCount} items`
                }
            })

    }
    // individual product pages
    
    goToItem(){
        
        for(const key in this.inventory){
            let item=this.inventory[key];
            singleItemPage.innerHTML=`div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
            <div class="carousel-item active">
            <img src="${item.img}}" class="d-block w-100" alt="...">
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
            </div>`
        }
    }
}

action = new Products
action.__init__()