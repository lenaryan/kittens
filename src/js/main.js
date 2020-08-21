document.addEventListener('DOMContentLoaded', function() {
    let squareElems;
    let equipElems;
    let rooms = document.querySelectorAll('.room');

    document.querySelector('.apply-btn').addEventListener('click', () => {
        let checkedSquare = [];

        squareElems = document.querySelectorAll('.filter__block--square .filter__check:checked');
        equipElems = document.querySelectorAll('.filter__block--equip .filter__check:checked');

        squareElems.forEach(elem => checkedSquare.push(elem.dataset.square))
        
        rooms.forEach(room => {
            room.classList.remove("show-room");
            if (!room.classList.contains("hide-room")) {
                room.classList.add("hide-room");
                room.style.display = "none";
            }
            if (checkedSquare.includes(room.dataset.square)) {
                room.style.display = "block";
                room.classList.add('show-room');
                room.classList.remove('hide-room');
            } 
        })
    })

    //если фильтр пустой???
})