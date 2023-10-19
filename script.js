let page = 0;
$(document).ready(function () {
    updateDisplay();
    
    $('#up').on('click', function () {
        
        if (page > 0) page--;
        updateDisplay();
        console.log(page);
    });

    $('#down').on('click', function () {
        page++;
        updateDisplay();
        console.log(page);
    });
});


function updateDisplay() {
    $('#table, #text-container, #Eimages, #redflowers, #castle').hide();
    $('#change').css('align-items', 'center'); // Reset centering by default

    if (page === 0) {
        $('#table').show();
    } else if (page === 1) {
        $('#table').hide();
        $('#text-container').show();
        $('#change').css('justify-content', 'center');
    } else if (page === 2) {
        $('#text-container').hide();
        $('#Eimages').show();
        $('#change').css('justify-content', 'start');
    } else if (page === 3) {
        $('#change').css('justify-content', 'center');
        $('#Eimages').hide();
        $('#redflowers').show();
        // Decline centering by resetting it to "flex-start" when page is 3
        
    }
    else if (page === 4) {
        $('#redflowers').hide();
        $('#castle').show();
        // Decline centering by resetting it to "flex-start" when page is 3
        
    }
}
