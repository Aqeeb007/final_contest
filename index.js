// Function to get the menu using fetch
function getMenu() {
    return fetch('https://raw.githubusercontent.com/saksham-accio/f2_contest_3/main/food.json')
        .then(response => response.json())
        .then(menu => {
            console.log('Menu:', menu);
            return menu;
        })
        .catch(error => console.error('Error:', error));
}

// Function to take the order
function takeOrder() {
    return new Promise(resolve => {
        setTimeout(() => {
            const burgers = ['Classic Burger', 'Cheeseburger', 'Bacon Burger'];
            const randomBurgers = burgers.sort(() => 0.5 - Math.random()).slice(0, 3);
            const order = {
                burgers: randomBurgers
            };
            console.log('Order:', order);
            resolve(order);
        }, 2500);
    });
}

// Function for order preparation
function orderPrep() {
    return new Promise(resolve => {
        setTimeout(() => {
            const prepStatus = {
                order_status: true,
                paid: false
            };
            console.log('Order Preparation:', prepStatus);
            resolve(prepStatus);
        }, 1500);
    });
}

// Function for payment
function payOrder() {
    return new Promise(resolve => {
        setTimeout(() => {
            const paymentStatus = {
                order_status: true,
                paid: true
            };
            console.log('Payment:', paymentStatus);
            resolve(paymentStatus);
        }, 1000);
    });
}

// Function to display thank you message
function thankYouFnc() {
    return new Promise(resolve => {
        setTimeout(() => {
            alert('Thank you for eating with us today!');
            resolve();
        }, 0);
    });
}

// Handling promises using async/await
async function restaurantFlow() {
    try {
        const menu = await getMenu();
        const order = await takeOrder();
        const prepStatus = await orderPrep();
        const paymentStatus = await payOrder();
        await thankYouFnc();
    } catch (error) {
        console.error('Error:', error);
    }
}

// Running the restaurant flow
restaurantFlow();
