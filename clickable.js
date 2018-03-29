$(".arrow").click(function() {
    $(this).parent(".rectangle").siblings(".description").slideToggle(300, "linear");
   $(this).toggleClass('flip');
 });
