const container = document.querySelector('.container');
const movieSelect = document.getElementById('movie-select');
const seatCount = document.getElementById('count');
const totalPrice = document.getElementById('total');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');

// Populate UI
populateUI();

 let ticketPrice = +movieSelect.value;

// Save selected movie index and price
function setMovieData(movieIndex, moviePrice) {
    localStorage.setItem('selectedMovieIndex', movieIndex);
    localStorage.setItem('selectedMoviePrice', moviePrice);
}

function updateCountAndTotal() {
    const selectedSeats = document.querySelectorAll('.row .seat.selected');

    const seatIndexes = [...selectedSeats].map(seat => [...seats].indexOf(seat));

    localStorage.setItem('selectedSeats', JSON.stringify(seatIndexes));

    seatCount.textContent = selectedSeats.length;
    totalPrice.textContent = selectedSeats.length * ticketPrice;
}

// Get data from localStorage and populate UI
function populateUI() {
    const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));

    if (selectedSeats !== null && selectedSeats.length > 0) {
        seats.forEach((seat, index) => {
            if (selectedSeats.indexOf(index) > -1) {
                seat.classList.add('selected');
            }
        })
    }

    const selectedMovieIndex = localStorage.getItem('selectedMovieIndex');

    if (selectedMovieIndex !== null) {
        movieSelect.selectedIndex = selectedMovieIndex;
    }
}

// Movie change event
movieSelect.addEventListener('change', e => {
    ticketPrice = +e.target.value;

    setMovieData(e.target.selectedIndex, e.target.value);

    updateCountAndTotal();
});

// Seat click event
container.addEventListener('click', e => {
    if (e.target.classList.contains('seat') && !e.target.classList.contains('occupied')) {
        e.target.classList.toggle('selected');

        updateCountAndTotal();
    }
});

// Update count and total
updateCountAndTotal();