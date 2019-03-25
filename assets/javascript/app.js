$(document).ready(function () {
    var message = "Trivia Game";
    var msgCount = 0;
    var blinkCount = 0;
    var blinkFlg = 0;
    var timer1, timer2;
    var messageLabel = document.getElementById("messageLabel");


    function textFunc() {
        console.log("We made it into textFunc()")
        messageLabel.innerHTML = message.substring(0, msgCount);

        if (msgCount == message.length) {
            // Stop Timer
            clearInterval(timer1);

            // Start blinking animation!
            timer2 = setInterval(blinkFunc, 200);

        } else {
            msgCount++;
        }
    }

    function blinkFunc() {

        // Blink 5 times
        if (blinkCount < 6) {
            if (blinkFlg == 0) {
                messageLabel.innerHTML = message;
                blinkFlg = 1;
                blinkCount++;
            } else {
                messageLabel.innerHTML = "";
                blinkFlg = 0;
            }
        } else {
            // Stop Timer
            clearInterval(timer2);
        }
    }


    timer1 = setInterval(textFunc, 150); // Every 150 milliseconds


    // setting the button click and navigation to the next block 
    $("#startbutton").on("click", function () {
        $("#startbutton").html("");
        $(".secondcard").css({ display: "block" });
        runtimer();
    });

    $("#third_option").on("click", function () {
        $(".question").css({ display: "none" });
        $(".correctAnswerTitle").css({ display: "block" });
        correctOption();
        setTimeout(nextQuestion, 5000);
        stop();
    });
    $("#first_option").on("click", function () {
        $(".question").css({ display: "none" });
        $(".wrongAnswerTitle").css({ display: "block" });
        correctOption();
        setTimeout(nextQuestion, 5000);
        stop();
    });
    $("#second_option").on("click", function () {
        $(".question").css({ display: "none" });
        $(".wrongAnswerTitle").css({ display: "block" });
        correctOption();
        setTimeout(nextQuestion, 5000);
        stop();
    });
    $("#fourth_option").on("click", function () {
        $(".question").css({ display: "none" });
        $(".wrongAnswerTitle").css({ display: "block" });
        nextQuestion();
        setTimeout(nextQuestion, 5000);
        stop();
    });


    var intervalId;
    var timeRemaining;

    // setting a timer
    $("#remaining_timer").text("30");
    function runtimer() {
        timeRemaining = 30;
        // clearInterval(intervalId);
        intervalId = setInterval(decrement, 1000);
    }

    // creating a decrement function
    function decrement() {
        //  Decrease number by one.
        timeRemaining--;

        //  Show the number in the #show-number tag.
        $("#remaining_timer").html(timeRemaining);


        //  Once number hits zero...
        if (timeRemaining === 0) {
            $(".timeOutCard").css({ display: "block" });
            $(".question").css({ display: "none" });
            //  ...run the stop function.
            correctOption();
            stop();

            //  Alert the user that time is up.
            // alert("Time Up!");
        }

    }

    function stop() {

        //  Clears our intervalId
        //  We just pass the name of the interval
        //  to the clearInterval function.
        clearInterval(intervalId);
    }

    function reset() {
        $("#remaining_timer").text("30");
        runtimer();
    }
    function correctOption() {
        $(".correctOption").text("Bright orange");
    }

    function nextQuestion() {
        $("#question_itself").html("<h4>How many fingers (including thumbs) does SpongeBob have?</h4>");
        $("#first_option").html("<h4>10</h4>");
        $("#second_option").html("<h4>12</h4>");
        $("#third_option").html("<h4>8</h4>");
        $("#fourth_option").html("<h4>6</h4>");
        $(".question").css({ display: "block" });
        $(".wrongAnswerTitle").css({ display: "none" });
        $(".correctAnswerTitle").css({ display: "none" });
    }
    // setTimeout(nextQuestion, 5000);








    // var correctAnswers = 0;
    // var incorrectAnswers = 0;
    // var iteration = 0;
    // var question = "Is Evgenia Cute?";
    // var answersString = "No,Could be better,Ugly,Yes,I do not want to see her,Worst";
    // var correctAnswer = 3;
    // iteration = iteration + 1;
    // createQuestions(question, answersString, correctAnswer, iteration);

    // function createQuestions(question, answersString, correctAnswer, iteration) {
    //     var q = $("<label>", { text: question }, "</label>");
    //     var br1 = $("<br></br");
    //     var br2 = $("<br></br");

    //     var data = answersString.split(',');

    //     var s = $("<select class=\"answers\" id=\"selectId\" name=\"selectName\" />");

    //     for (var val in data) {
    //         $("<option />", { value: val, text: data[val] }).appendTo(s);
    //     }
    //     q.appendTo("#question_form");
    //     br1.appendTo("#question_form");
    //     br2.appendTo("#question_form");
    //     s.appendTo("#question_form");

    //     $(".firstOptionClass").change(function () {
    //         var selectedAnswer = $(this).children("option:selected").val();
    //         verifyAnswer(selectedAnswer, correctAnswer, iteration);
    //     });
    // }

    // function verifyAnswer(answer, correctAnswer, iteration) {
    //     var textLabel = "";

    //     if (answer == correctAnswer) {
    //         textLabel = " Correct answer";
    //         correctAnswers = correctAnswers + 1;
    //     }
    //     else {
    //         textLabel = " Incorrect answer";
    //         incorrectAnswers = incorrectAnswers + 1;
    //     }

    //     var q = $("<label>", { text: textLabel }, "</label>");
    //     var br1 = $("<br></br");
    //     var br2 = $("<br></br");

    //     br1.appendTo("#question_form");
    //     q.appendTo("#question_form");
    //     br2.appendTo("#question_form");

    //     window.setTimeout(function () {
    //         if (iteration == 1) {
    //             var question = "Question2";
    //             var answersString = "1,2,3,4,5,6";
    //             var correctAnswer = 2;
    //             iteration = iteration + 1;
    //             createQuestions(question, answersString, correctAnswer, iteration);
    //         }
    //         else if (iteration == 2) {
    //             var question = "Question3";
    //             var answersString = "11,12,13,14,15,16";
    //             var correctAnswer = 3;
    //             iteration = iteration + 1;
    //             createQuestions(question, answersString, correctAnswer, iteration);
    //         }
    //         else {
    //             var message = "Done. " + "Correct Answers = " + correctAnswers + ", Incorrect Answers = " + incorrectAnswers;
    //             alert(message);
    //         }

    //     }, 3000);
    // }
});