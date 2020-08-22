document.addEventListener('DOMContentLoaded', function() {
    let squareElems;
    let equipElems;
    let minPrice = document.querySelector('.filter__input--min');
    let maxPrice = document.querySelector('.filter__input--max');
    let rooms = document.querySelectorAll('.room');
    let resetBtn = document.querySelector('.reset-btn');

    document.querySelector('.apply-btn').addEventListener('click', () => {
        let filteredRooms = null;
        let checkedSquare = []; //an array for selected square elements
        let checkedEquip = []; //an array for selected equipment elements
        let priceFrom = 100;
        let priceTo = 600;

        squareElems = document.querySelectorAll('.filter__block--square .filter__check:checked');
        equipElems = document.querySelectorAll('.filter__block--equip .filter__check:checked');

        if (minPrice.value) {
            priceFrom = minPrice.value;
        }

        if (maxPrice.value) {
            priceTo = maxPrice.value;
        }

        //if filters are not empty
        if (squareElems.length || equipElems.length || minPrice.value || maxPrice.value) {
            resetBtn.style.display = 'block';

            rooms.forEach(room => {
                room.classList.remove("show-room");
                if (!room.classList.contains("hide-room")) {
                    room.classList.add("hide-room");
                    room.style.display = "none";
                }
            })

            //if only price is filled in
            if ((minPrice.value || maxPrice.value) && !squareElems.length && !equipElems.length) {
                filteredRooms = Array.from(rooms).filter(room => (room.dataset.price >= priceFrom) && (room.dataset.price <= priceTo));
            } else {
            
                //get an array of selected squares
                squareElems.forEach(elem => checkedSquare.push(elem.dataset.square));

                //get an array of selected equipment
                equipElems.forEach(elem => checkedEquip.push(elem.dataset.equip));

                if (squareElems.length && equipElems.length) {

                    //if square and equipment blocks checked
                    filteredRooms = Array.from(rooms).filter(room => checkedSquare.includes(room.dataset.square) 
                        && checkedEquip.some((index) => room.dataset.equip.includes(index))
                        && (room.dataset.price >= priceFrom) && (room.dataset.price <= priceTo));
                } else if (!squareElems.length && equipElems.length) {

                    //if the equipment block checked
                    filteredRooms = Array.from(rooms).filter(room => checkedEquip.some((index) => room.dataset.equip.includes(index))
                        && (room.dataset.price >= priceFrom) && (room.dataset.price <= priceTo));
                } else if (squareElems.length && !equipElems.length) {

                    //if the square block checked
                    filteredRooms = Array.from(rooms).filter(room => checkedSquare.includes(room.dataset.square)
                        && (room.dataset.price >= priceFrom) && (room.dataset.price <= priceTo));
                }

            }
            
            //show filtered rooms
            rooms.forEach(room => {
                if (filteredRooms.includes(room)) {
                    room.style.display = "flex";
                    room.classList.add('show-room');
                    room.classList.remove('hide-room');
                }
            })

        } else {
            //show rooms and hide the reset button
            //if filters are empty
            resetBtn.style.display = 'none';
            rooms.forEach(room => {
                room.classList.remove("hide-room");
                room.classList.remove("show-room");
                room.removeAttribute("style");
            })
        }

    })

    //reset filter
    resetBtn.addEventListener('click', () => {
        rooms.forEach(room => {
            room.classList.remove("hide-room");
            room.classList.remove("show-room");
            room.removeAttribute("style");
        })

        document.querySelectorAll('.filter__check:checked').forEach(checkbox => checkbox.checked = false);
        document.querySelectorAll('.filter__input').forEach(input => input.value = null);
        document.querySelectorAll('.filter__check-wrap--checked').forEach(input => input.classList.remove("filter__check-wrap--checked"));
        resetBtn.removeAttribute('style');
    })
})

//open-close mobile menu
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.header__burger').addEventListener('click', () => {
        document.querySelector('.nav').classList.add('show-menu');
        document.querySelector('.nav').classList.remove('hide-menu');
        document.querySelector('.header__burger').style.display = "none";
        document.querySelector('.header__cross').style.display = "block";
    })

    document.querySelector('.header__cross').addEventListener('click', () => {
        document.querySelector('.nav').classList.remove('show-menu');
        document.querySelector('.nav').classList.add('hide-menu');
        document.querySelector('.header__burger').style.display = "block";
        document.querySelector('.header__cross').style.display = "none";
    })
})

//if input price value is less than min value,
//set the value equal to the min one
//if input price value is more than max value,
//set the value equal to the max one
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.filter__input').forEach(filterInput => {
        filterInput.addEventListener('change', () => {
            if (filterInput.value < parseInt(filterInput.getAttribute('min')) && filterInput.value) {
                filterInput.value = parseInt(filterInput.getAttribute('min'));
            }
            if (filterInput.value > parseInt(filterInput.getAttribute('max')) && filterInput.value) {
                filterInput.value = parseInt(filterInput.getAttribute('max'));
            }
        });
    })
})

//add class for custom check-uncheck checkboxes
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.filter__check').forEach(filterCheck => {
        filterCheck.addEventListener('click', () => {
            filterCheck.parentNode.classList.toggle('filter__check-wrap--checked');
        })
    })
})

//open-close sorting dropdown 
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.sort__btn').addEventListener('click', () => {
        document.querySelector('.sort__options').style.display = "block";
        document.querySelector('.sort__arrow').classList.add('rotate-arrow');
    })

    document.querySelectorAll('.sort__option').forEach(option => {
        option.addEventListener('click', () => {
            document.querySelector('.sort__btn').innerHTML = option.innerHTML;
            document.querySelector('.sort__options').style.display = "none";
            document.querySelector('.sort__arrow').classList.remove('rotate-arrow');
        })
    })
})

//scripts for sorting rooms
document.addEventListener('DOMContentLoaded', function() {
    let rooms = document.querySelector('.rooms');
    let arr = [];
    let roomsArr = Array.from(document.querySelectorAll('.room'));
    document.querySelector('.price-down').addEventListener('click', () => {
        arr = roomsArr.sort((a, b) => b.dataset.price - a.dataset.price);
        arr.forEach(room => rooms.appendChild(room));
    })
    document.querySelector('.price-up').addEventListener('click', () => {
        arr = roomsArr.sort((a, b) => a.dataset.price - b.dataset.price);
        arr.forEach(room => rooms.appendChild(room));
    })
    document.querySelector('.square-up').addEventListener('click', () => {
        arr = roomsArr.sort((a, b) => a.dataset.square - b.dataset.square);
        arr.forEach(room => rooms.appendChild(room));
    })
    document.querySelector('.square-down').addEventListener('click', () => {
        arr = roomsArr.sort((a, b) => b.dataset.square - a.dataset.square);
        arr.forEach(room => rooms.appendChild(room));
    })
})