var editBtn1 = document.getElementById('editBtn1');
var editBtn2 = document.getElementById('editBtn2');
var editBtn3 = document.getElementById('editBtn3');
var editables = document.querySelectorAll('#edit1, #edit2, #edit3')

editBtn1.addEventListener('click', function(e) {
if (!editables[0].isContentEditable) {
    editables[0].contentEditable = 'true';
    editables[1].contentEditable = 'true';
    editables[2].contentEditable = 'true';
    editBtn1.innerHTML = 'Save';
    editBtn1.style.backgroundColor = '#F5F5F5';
    editBtn1.style.color = '#796290'
} else {
    // Disable Editing
    editables[0].contentEditable = 'false';
    editables[1].contentEditable = 'false';
    editables[2].contentEditable = 'false';
    // Change Button Text and Color
    editBtn1.innerHTML = 'Edit';
    editBtn1.style.backgroundColor = '#796290';
    editBtn1.style.color = '#F5F5F5'
    // Save the data in localStorage
    for (var i = 0; i < editables.length; i++) {
    localStorage.setItem(editables[i].getAttribute('id'), editables[i].innerHTML);
    }
}
});

editBtn2.addEventListener('click', function(e) {
    if (!editables[0].isContentEditable) {
        editables[0].contentEditable = 'true';
        editables[1].contentEditable = 'true';
        editables[2].contentEditable = 'true';
        editBtn2.innerHTML = 'Save';
        editBtn2.style.backgroundColor = '#F5F5F5';
        editBtn2.style.color = '#796290'
    } else {
        // Disable Editing
        editables[0].contentEditable = 'false';
        editables[1].contentEditable = 'false';
        editables[2].contentEditable = 'false';
        // Change Button Text and Color
        editBtn2.innerHTML = 'Edit';
        editBtn2.style.backgroundColor = '#796290';
        editBtn2.style.color = '#F5F5F5'
        // Save the data in localStorage
        for (var i = 0; i < editables.length; i++) {
        localStorage.setItem(editables[i].getAttribute('id'), editables[i].innerHTML);
        }
    }
    });

    editBtn3.addEventListener('click', function(e) {
        if (!editables[0].isContentEditable) {
            editables[0].contentEditable = 'true';
            editables[1].contentEditable = 'true';
            editables[2].contentEditable = 'true';
            editBtn3.innerHTML = 'Save';
            editBtn3.style.backgroundColor = '#F5F5F5';
            editBtn3.style.color = '#796290'
        } else {
            // Disable Editing
            editables[0].contentEditable = 'false';
            editables[1].contentEditable = 'false';
            editables[2].contentEditable = 'false';
            // Change Button Text and Color
            editBtn3.innerHTML = 'Edit';
            editBtn3.style.backgroundColor = '#796290';
            editBtn3.style.color = '#F5F5F5'
            // Save the data in localStorage
            for (var i = 0; i < editables.length; i++) {
            localStorage.setItem(editables[i].getAttribute('id'), editables[i].innerHTML);
            }
        }
        });

        if (typeof(Storage) !== "undefined") {

            if (localStorage.getItem('edit1') !== null) {
            editables[0].innerHTML = localStorage.getItem('edit1');
            }

            if (localStorage.getItem('edit2') !== null) {
            editables[1].innerHTML = localStorage.getItem('edit2');
            }

            if (localStorage.getItem('edit3') !== null) {
            editables[2].innerHTML = localStorage.getItem('edit3');
            }
        }