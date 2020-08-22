document.addEventListener('DOMContentLoaded', function() {
    let squareElems;
    let equipElems;
    let minPrice = document.querySelector('.filter__input--min');
    let maxPrice = document.querySelector('.filter__input--max');
    let rooms = document.querySelectorAll('.room');
    let resetBtn = document.querySelector('.reset-btn');

    document.querySelector('.apply-btn').addEventListener('click', () => {
        rooms.forEach(room => {
            room.classList.remove("show-room");
            if (!room.classList.contains("hide-room")) {
                room.classList.add("hide-room");
                room.style.display = "none";
            }
        })

        squareElems = document.querySelectorAll('.filter__block--square .filter__check:checked');
        equipElems = document.querySelectorAll('.filter__block--equip .filter__check:checked');

        //selected square part only
        if (squareElems.length && !equipElems.length && !minPrice.value && !maxPrice.value) {
            let checkedSquare = [];

            //get an array of selected squares
            squareElems.forEach(elem => checkedSquare.push(elem.dataset.square));

            rooms.forEach(room => {
                if (checkedSquare.includes(room.dataset.square)) {
                    room.style.display = "flex";
                    room.classList.add('show-room');
                    room.classList.remove('hide-room');
                }  
            })
        }

        //filled in price part only
        if ((minPrice.value || maxPrice.value) && !squareElems.length && !equipElems.length) {
            if (minPrice.value && maxPrice.value) {
                rooms.forEach(room => {
                    if ((room.dataset.price < minPrice.value) || (room.dataset.price > maxPrice.value)) {
                        room.classList.add("hide-room");
                        room.classList.remove('show-room');
                        room.style.display = "none";
                    } else {
                        room.classList.remove("hide-room");
                        room.classList.add('show-room');
                        room.style.display = "flex";
                    }
                })
            } else if (minPrice.value) {
                rooms.forEach(room => {
                    if (room.dataset.price < minPrice.value) {
                        room.classList.add("hide-room");
                        room.classList.remove('show-room');
                        room.style.display = "none";
                    } else {
                        room.classList.remove("hide-room");
                        room.classList.add('show-room');
                        room.style.display = "flex";
                    }
                })
            } else if (maxPrice.value) {
                rooms.forEach(room => {
                    if (room.dataset.price > maxPrice.value) {
                        room.classList.add("hide-room");
                        room.classList.remove('show-room');
                        room.style.display = "none";
                    } else {
                        room.classList.remove("hide-room");
                        room.classList.add('show-room');
                        room.style.display = "flex";
                    }
                })
            }
        }

        //selected equipment part only
        if (equipElems.length && !squareElems.length && !minPrice.value && !maxPrice.value) {
            let checkedEquip = [];

            //get an array of selected equipment
            equipElems.forEach(elem => checkedEquip.push(elem.dataset.equip));

            rooms.forEach(room => {
                if (checkedEquip.some((index) => room.dataset.equip.includes(index))) {
                    room.style.display = "flex";
                    room.classList.add('show-room');
                    room.classList.remove('hide-room');
                }  
            })
        }

        if (squareElems.length || equipElems.length || minPrice.value || maxPrice.value) {
            resetBtn.style.display = 'block';
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
            if (filterInput.value < parseInt(filterInput.getAttribute('min'))) {
                filterInput.value = parseInt(filterInput.getAttribute('min'));
            }
            if (filterInput.value > parseInt(filterInput.getAttribute('max'))) {
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