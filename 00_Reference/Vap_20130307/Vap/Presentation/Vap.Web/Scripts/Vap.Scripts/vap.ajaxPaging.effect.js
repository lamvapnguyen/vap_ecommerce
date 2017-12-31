
/*
Ajax form
*/

function AjaxFormBeging() {
    $('#divAjaxLoader').show();
}

function AjaxFormSuccess() {
    $('#divAjaxLoader').hide();
}

function AjaxFormFailure() {
    alert("Could not retrieve contacts.");
}


/*
Paging
*/


function beginPaging(args) {

    //Show ajax loading content
    $('#divAjaxLoader').show();

    // Animate
    //$('#divDetail').fadeOut('normal');
}

function successPaging() {

    //Hidden ajax loading content
    $('#divAjaxLoader').hide();
    
    // Animate
    //$('#divDetail').fadeIn('normal');
}

function failurePaging() {
    alert("Could not retrieve contacts.");
}

