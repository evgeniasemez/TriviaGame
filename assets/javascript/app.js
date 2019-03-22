$(document).ready(function () {

    $("#startbutton").on("click", function () {
        $("#startbutton").html("");
        $(".secondcard").css({ display: "block" });
        runtimer();
    });

    var intervalId;
    var timeRemaining;

    $("#remaining_timer").text("30");
    function runtimer() {
        timeRemaining =30;
        // clearInterval(intervalId);
        intervalId = setInterval(decrement, 1000);
    }

    function decrement() {
        //  Decrease number by one.
        timeRemaining--;

        //  Show the number in the #show-number tag.
        $("#remaining_timer").html(timeRemaining);


        //  Once number hits zero...
        if (timeRemaining === 0) {

            //  ...run the stop function.
            stop();

            //  Alert the user that time is up.
            alert("Time Up!");
        }
    }

    function stop() {

        //  Clears our intervalId
        //  We just pass the name of the interval
        //  to the clearInterval function.
        clearInterval(intervalId);
    }




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

    //     $("select.answers").change(function () {
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