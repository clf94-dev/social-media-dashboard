$(document).ready(function() {
    $('#input').click(function() {
        $(".cont-top").toggleClass("dark-mode-top");
        $(".cont-middle").toggleClass("dark-mode-middle");
        $(".card-body").toggleClass("dark-mode-card");
    });
});