$(function(){

    populate();

    $('#submit').click(function() {
        var selected = []
        selected = $('#courses').val();
        
        generate(selected);
    });


    $("#html2pdf").on('click', function(){
        var doc = new jsPDF();
        doc.fromHTML($('body').get(0), 15, 15, {
            'width': 170
        });
        console.log(doc);
    });

});