$('.carousel').carousel({
    pause: "false"
});

$("#btn-scroll-to-support-us").click(function(){
    $('html, body').animate({
        scrollTop: $(document).height()
    }, 2000, function(){
        $("#support-us-input-text").focus();
    });
});

$("#btn-support-us").click(function(e){
    e.preventDefault();
    var input_email = $("#support-us-input-text").val();
    $("#sent-email").html("<b>" + input_email + "</b>");
    $("#support-us-modal").modal("show");
});

$("#btn-confirmed-support-us").click(function(e){
    var input_email = $("#support-us-input-text").val();
    $("#form-support-us").attr("action", "https://formspree.io/" + input_email);
    $("#form-support-us").submit();
});

$("#form-support-us").submit(function(){
    $("#support-us-modal").modal("hide");
    $("#support-us-result").html("Sorry, This form powered by Formspree. Formspree can't be used for HTML static file. It only can be used for website which is requested by web server (http or https)");
    setTimeout(function(){
        $("#support-us-result").fadeOut();
        $("#support-us-result").html("");
    }, 5000);
    return false;
});