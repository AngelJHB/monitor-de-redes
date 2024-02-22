document.addEventListener("DOMContentLoaded",function(){
    var noLess = document.querySelectorAll('input[type="number"][name="cant"]');
    noLess.forEach(input => {
    input.addEventListener("input",function(){
        var currentValue = parseInt(input.value);
        if (currentValue < 1) {
            input.value = 1;
        }
    });
});
});