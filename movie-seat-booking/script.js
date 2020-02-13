const container = document.querySelector('.container');
const movieSelect = document.getElementById('movie-select');
const seatCount = document.getElementById('count');
const totalPrice = document.getElementById('total');

let ticketPrice = +movieSelect.value;

function updateCountAndTotal() {
    const selectedSeats = document.querySelectorAll('.row .seat.selected');

    seatCount.textContent = selectedSeats.length;
    totalPrice.textContent = selectedSeats.length * ticketPrice;
}

// Movie change event
movieSelect.addEventListener('change', e => {
    ticketPrice = +e.target.value;

    updateCountAndTotal();
})

// Seat click event
container.addEventListener('click', e => {
    if (e.target.classList.contains('seat') && !e.target.classList.contains('occupied')) {
        e.target.classList.toggle('selected');

        updateCountAndTotal();
    }
});