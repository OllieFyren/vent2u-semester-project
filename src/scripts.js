$(document).on('click', '.toggleMode', function(){
    $('body').toggleClass('lightMode');
});
$(document).on('keyup', '.Codebox', function(){
    if (this.value.length == this.maxLength) {
        $(this).parent().next(".codeboxContainer").children().focus();
    }
});
$(document).on('click', '.moodOption', function(){
    $('.moodOption').fadeOut(400);
    $('.moodHeader').fadeOut(400);
    $('.back').fadeOut(400);
    if($(this).hasClass("optionWarm")){
        $('.moodSelectWarm').delay(400).fadeIn();
    }
    else if ($(this).hasClass("optionCold")){
        $('.moodSelectCold').delay(400).fadeIn();
    }
    else if ($(this).hasClass("optionTired")){
        $('.moodSelectTired').delay(400).fadeIn();
    }
    else {
        $('.moodSelectGood').delay(400).fadeIn();
    }

});
$(document).on('click', '.continue1', function(){
    window.correct = 0;
    $('.quizPart1').fadeOut(400);
    $('.quizPart2').delay(400).fadeIn(400);
});
$(document).on('click', '.answerContainer', function(){
    if($(this).hasClass("correct")){
        $(this).css('background-color', '#00ff00');
        correct = correct+1;
        console.log(correct);
    }
    else {
        $(this).css('background-color', '#ff0000');
        $(this).siblings('.correct').css('background-color', '#00ff00');
    }
});
//starts here
$(document).on('click', '.part2', function(){
    if($(this).hasClass("correct")){
        $('.quizPart2').delay(1000).fadeOut(400);
        $('.green2_5').delay(1400).fadeIn(400);
        setTimeout(function(){
            $('.globalContainer').addClass('backgroundGreen');
        }, 1000);
    }
    else {
        $('.quizPart2').delay(2000).fadeOut(400);
        $('.red2_5').delay(2400).fadeIn(400);
        setTimeout(function(){
            $('.globalContainer').addClass('backgroundRed');
        }, 2000);
    }
});
$(document).on('click', '.part3', function(){
    if($(this).hasClass("correct")){
        $('.quizPart3').delay(1000).fadeOut(400);
        $('.green3_5').delay(1400).fadeIn(400);
        setTimeout(function(){
            $('.globalContainer').addClass('backgroundGreen');
        }, 1000);
    }
    else {
        $('.quizPart3').delay(2000).fadeOut(400);
        $('.red3_5').delay(2400).fadeIn(400);
        setTimeout(function(){
            $('.globalContainer').addClass('backgroundRed');
        }, 2000);
    }
});
$(document).on('click', '.part4', function(){
    if($(this).hasClass("correct")){
        $('.quizPart4').delay(1000).fadeOut(400);
        $('.green4_5').delay(1400).fadeIn(400);
        setTimeout(function(){
            $('.globalContainer').addClass('backgroundGreen');
        }, 1000);
    }
    else {
        $('.quizPart4').delay(2000).fadeOut(400);
        $('.red4_5').delay(2400).fadeIn(400);
        setTimeout(function(){
            $('.globalContainer').addClass('backgroundRed');
        }, 2000);
    }
});
//Ends here
$(document).on('click', '.2_5continue', function(){
    $('.green').fadeOut(400);
    $('.red').fadeOut(400);
    $('.quizPart3').delay(400).fadeIn(400);
    $('.globalContainer').removeClass('backgroundGreen');
    $('.globalContainer').removeClass('backgroundRed');
});
$(document).on('click', '.3_5continue', function(){
    $('.green').fadeOut(400);
    $('.red').fadeOut(400);
    $('.quizPart4').delay(400).fadeIn(400);
    $('.globalContainer').removeClass('backgroundGreen');
    $('.globalContainer').removeClass('backgroundRed');
});
$(document).on('click', '.4_5continue', function(){
    $('.green').fadeOut(400);
    $('.red').fadeOut(400);
    $('.globalContainer').removeClass('backgroundGreen');
    $('.globalContainer').removeClass('backgroundRed');
    if (correct==0){
        $('.quizPart5_1').delay(400).fadeIn(400);
    }
    else if (correct==1){
        $('.quizPart5_2').delay(400).fadeIn(400);
    }
    else if (correct==2) {
        $('.quizPart5_3').delay(400).fadeIn(400);
    }
    else {
        $('.quizPart5_4').delay(400).fadeIn(400);
    };
});
$(document).on('click', '.retry', function(){
    $('.quizPart5_1').fadeOut(400);
    $('.quizPart5_2').fadeOut(400);
    $('.quizPart5_3').fadeOut(400);
    $('.quizPart1').delay(400).fadeIn(400);
    $('.answerContainer').css('background-color', '#24385c');
    window.correct = 0;
});