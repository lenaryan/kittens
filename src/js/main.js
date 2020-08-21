document.addEventListener('DOMContentLoaded', function() {
    let squareElems;
    let equipElems;
    let rooms = document.querySelectorAll('.room');
    let resetBtn = document.querySelector('.reset-btn');

    document.querySelector('.apply-btn').addEventListener('click', () => {
        let checkedSquare = [];

        squareElems = document.querySelectorAll('.filter__block--square .filter__check:checked');
        equipElems = document.querySelectorAll('.filter__block--equip .filter__check:checked');


        if (squareElems.length || equipElems.length) {
            resetBtn.style.display = 'block';

            //get an array of selected squares
            squareElems.forEach(elem => checkedSquare.push(elem.dataset.square))
            
            rooms.forEach(room => {
                room.classList.remove("show-room");
                if (!room.classList.contains("hide-room")) {
                    room.classList.add("hide-room");
                    room.style.display = "none";
                }
                if (checkedSquare.includes(room.dataset.square)) {
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

    resetBtn.addEventListener('click', () => {
        rooms.forEach(room => {
            room.classList.remove("hide-room");
            room.classList.remove("show-room");
            room.removeAttribute("style");
        })

        document.querySelectorAll('.filter__check:checked').forEach(checkbox => checkbox.checked = false);
        document.querySelectorAll('.filter__input').forEach(input => input.value = null);
        resetBtn.removeAttribute('style');
    })
})