/*
* Method: Working with checkboc "ALL"
* Date Create: 2012/12/01
* Create by: Nguyen Tien Lam
* Description: To management all checkbox in the list and set disabled or enabled for button named "btnEdit"
*/

$(document).ready(function() {
    $('input.unique').live("click", function() {
        $('input.unique:checked').not(this).removeAttr('checked');
    });
    $(":checkbox").live("click", function() {
        var n = $(":checkbox:checked").length;

        /*For button Edit*/
        if (n == 1) {
            $('#btnEdit').attr("disabled", false);
           
        } else {
            $('#btnEdit').attr("disabled", true);
        }

        /*For button Delete*/
        if (n > 0) {
            $('#btnDelete').attr("disabled", false);
        } else {
            $('#btnDelete').attr("disabled", true);
        }
    });
});