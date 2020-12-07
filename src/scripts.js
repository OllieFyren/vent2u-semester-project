$(document).on('keyup', '.Codebox', function(){
    if (this.value.length == this.maxLength) {
        $(this).parent().next(".codeboxContainer").children().focus();
    }
});
$(document).on('click', '.moodOption', function(){
    $('.moodOption').fadeOut(400);
    $('.moodSelect').delay(400).fadeIn();
    $('.moodSelectBtn').delay(400).fadeIn();
    console.log('hello');

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
$(document).on('click', '.part2', function(){
    $('.quizPart2').delay(1000).fadeOut(400);
    $('.quizPart3').delay(1400).fadeIn(400);
});
$(document).on('click', '.part3', function(){
    $('.quizPart3').delay(1000).fadeOut(400);
    $('.quizPart4').delay(1400).fadeIn(400);
});
$(document).on('click', '.quizPart4', function(){
    $('.quizPart4').delay(1000).fadeOut(400);
    if (correct==0){
        $('.quizPart5_1').delay(1400).fadeIn(400);
    }
    else if (correct==1){
        $('.quizPart5_2').delay(1400).fadeIn(400);
    }
    else if (correct==2) {
        $('.quizPart5_3').delay(1400).fadeIn(400);
    }
    else {
        $('.quizPart5_4').delay(1400).fadeIn(400);
    };
});
