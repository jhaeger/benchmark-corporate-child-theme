jQuery(document).ready( function() {
    var $ = jQuery;
    $('.wp-polls').hide();
    $('button.go-vote').on('click', function(){
        str = $('input').val();
        str = str.split('@').slice(1);
        var allowedDomains = [ 'benchmark.us', 'ulmtg.com'];
        if ($.inArray(str[0], allowedDomains) !== -1) {
            $('#bmemail').fadeOut(400);
            $('.wp-polls').fadeIn(400);
            $('body:not(.logged-in) .wp-polls-ans p:last-of-type').remove();
            $('.thank-you-for-voting').html('<h2>Thank you!</h2><p>Your VOTE has been counted!</p>');
        }
        else{
            alert('You must enter your benchmark or ulmtg email address to vote.');
        }
    });
});