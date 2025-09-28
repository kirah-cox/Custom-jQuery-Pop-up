

function DialogBox(){
    let formText = $('#addinformation').val();

    if(formText.trim() === 'opensesame'){
        $(function() {
            $('#dialogsuccess').dialog('open');
        });
        setTimeout(function() {
            $('#dialogsuccess').dialog('close');
        }, 3000);
    }
    else{
        $(function() {
            $('#dialogfailure').dialog('open');
        });
        setTimeout(function() {
            $('#dialogfailure').dialog('close');
        }, 3000);
    }

    $('#addinformation').val('');
}

$(function() {
    $('#dialogsuccess').dialog({ autoOpen: false });
});

$(function() {
    $('#dialogfailure').dialog({ autoOpen: false });
});

$('#mybutton').on('click', function() {
    $(document).ready(function(){
        DialogBox();
    })
});

$('#addinformationform').keypress(function(e) {
    var code = e.keyCode || e.which;
    if (code === 13) { 
        $(document).ready(function(){
            DialogBox();
        })
        
        e.preventDefault();
    }
});