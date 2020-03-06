
/* contact form submit button */

$(document).ready(function() {
    // Flash functions
    $('btn-submit').on('click', function() {
      console.log("you've been clicked")
    })
    
    $('btn-submit').mousedown(function() {
      $(this).addClass('hold-mouse')
      console.log('event', event)
      var x = event.offsetX - 10;
      var y = event.offsetY - 10;
      $('btn-submit').append('<div class="circle grow" style="left:' + x + 'px;top:' + y + 'px;"></div>')
    })
    $('btn-submit').mouseup(function() {
      $(this).removeClass('hold-mouse');
    })
    

/* contact form */
(function ($) {
    "use strict";


    /*==================================================================
    [ Validate ]*/
    var input = $('.validate-input .input100');

    $('.validate-form').on('submit',function(){
        var check = true;

        for(var i=0; i<input.length; i++) {
            if(validate(input[i]) == false){
                showValidate(input[i]);
                check=false;
            }
        }

        return check;
    });


    $('.validate-form .input100').each(function(){
        $(this).focus(function(){
           hideValidate(this);
        });
    });

    function validate (input) {
        if($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
            if($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
                return false;
            }
        }
        else {
            if($(input).val().trim() == ''){
                return false;
            }
        }
    }

    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass('alert-validate');
    }
    
    

})(jQuery)