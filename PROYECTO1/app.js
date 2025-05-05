const orderList = document.getElementById('orderList');
const addOrderBtn = document.getElementById('addOrderBtn');

let orderId = 1; // Identificador de ordenes

addOrderBtn.addEventListener('click', () => {
    const order = { id: orderId++, status: 'En Proceso' };
    addOrder(order);
    processOrder(order);
});

// Agregar el pedido
function addOrder(order) {
    const listItem = document.createElement('li');
    listItem.id = `order-${order.id}`;
    listItem.textContent = `Pedido #${order.id}: ${order.status}`;
    orderList.appendChild(listItem);
}

// Estado de la orden 
function updateOrderStatus(order, status) {
    const listItem = document.getElementById(`order-${order.id}`);
    if (listItem) {
        listItem.textContent = `Pedido #${order.id}: ${status}`;
        if (status === 'Completado') {
            listItem.classList.add('completed');
        }
    }
}

// Tiempo de preparación (2 a 5 segundos)
function simulatePreparationTime() {
    const delay = Math.floor(Math.random() * 3000) + 2000;
    return new Promise((resolve) => {
        setTimeout(resolve, delay);
    });
}

// async/await
async function processOrder(order) {
    await simulatePreparationTime();
    updateOrderStatus(order, 'Completado');
}
