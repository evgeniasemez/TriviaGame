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

    var correctAnswer = 0;
    var wrongAnswer = 0;
    var unansweredAnswer = 0;
    // setting the button click and navigation to the next block 
    $("#startbutton").on("click", function () {
        $("#startbutton").css({ display: "none" });
        $(".secondcard").css({ display: "block" });

        nextstep = 0;
        $("#question_itself").html("<h4>" + arrayOfQuestions[nextstep].Question + "</h4>");
        $("#first_option").html("<h4>" + arrayOfQuestions[nextstep].Options[0] + "</h4>");
        $("#second_option").html("<h4>" + arrayOfQuestions[nextstep].Options[1] + "</h4>");
        $("#third_option").html("<h4>" + arrayOfQuestions[nextstep].Options[2] + "</h4>");
        $("#fourth_option").html("<h4>" + arrayOfQuestions[nextstep].Options[3] + "</h4>");
        $(".question").css({ display: "block" });
        $(".wrongAnswerTitle").css({ display: "none" });
        $(".correctAnswerTitle").css({ display: "none" });
        $(".timeOutCard").css({ display: "none" });
        reset();
        resetNumbers();
    });

    $("#third_option").on("click", function () {

        $(".question").css({ display: "none" });
        if (arrayOfQuestions[nextstep].rightOption === 2) {
            $(".correctAnswerTitle").css({ display: "block" });
            correctAnswer++;
        }
        else {
            wrongAnswer++;
            $(".wrongAnswerTitle").css({ display: "block" });
        }
        correctOption();
        setTimeout(nextQuestion, 5000);
        stop();
    });
    $("#first_option").on("click", function () {
        $(".question").css({ display: "none" });
        if (arrayOfQuestions[nextstep].rightOption === 0) {
            $(".correctAnswerTitle").css({ display: "block" });
            correctAnswer++;
        }
        else {
            wrongAnswer++;
            $(".wrongAnswerTitle").css({ display: "block" });
        }
        correctOption();
        setTimeout(nextQuestion, 5000);
        stop();
    });
    $("#second_option").on("click", function () {
        $(".question").css({ display: "none" });
        if (arrayOfQuestions[nextstep].rightOption === 1) {
            $(".correctAnswerTitle").css({ display: "block" });
            correctAnswer++;
        }
        else {
            wrongAnswer++;
            $(".wrongAnswerTitle").css({ display: "block" });
        }
        correctOption();
        setTimeout(nextQuestion, 5000);
        stop();
    });
    $("#fourth_option").on("click", function () {

        $(".question").css({ display: "none" });
        if (arrayOfQuestions[nextstep].rightOption === 3) {
            $(".correctAnswerTitle").css({ display: "block" });
            correctAnswer++;
        }
        else {
            $(".wrongAnswerTitle").css({ display: "block" });
            wrongAnswer++;
        }
        correctOption();
        setTimeout(nextQuestion, 5000);
        stop();
    });
    $("#startOver").on("click", function () {
        $("#startbutton").css({ display: "block" });
        $(".secondcard").css({ display: "none" });
        $(".resultCard").css({ display: "none" });
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

            setTimeout(nextQuestion, 5000);
            //  ...run the stop function.
            unansweredAnswer++;
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
        var questionObject = arrayOfQuestions[nextstep];
        $(".correctOption").html(questionObject.Options[questionObject.rightOption]);
    }

    function nextQuestion() {
        nextstep++;
        if (nextstep > 3) {
            $(".correctAnswersCount").html(correctAnswer);
            $(".wrongAnswersCount").html(wrongAnswer);
            $(".unansweredAnswersCount").html(unansweredAnswer);

            $(".resultCard").css({ display: "block" });
            $(".correctAnswerTitle").css({ display: "none" });
            $(".wrongAnswerTitle").css({ display: "none" });
            $(".timeOutCard").css({ display: "none" });
        }
        else {

            $("#question_itself").html("<h4>" + arrayOfQuestions[nextstep].Question + "</h4>");
            $("#first_option").html("<h4>" + arrayOfQuestions[nextstep].Options[0] + "</h4>");
            $("#second_option").html("<h4>" + arrayOfQuestions[nextstep].Options[1] + "</h4>");
            $("#third_option").html("<h4>" + arrayOfQuestions[nextstep].Options[2] + "</h4>");
            $("#fourth_option").html("<h4>" + arrayOfQuestions[nextstep].Options[3] + "</h4>");
            $(".question").css({ display: "block" });
            $(".wrongAnswerTitle").css({ display: "none" });
            $(".correctAnswerTitle").css({ display: "none" });
            $(".timeOutCard").css({ display: "none" });
            reset();
        }
    }

    var arrayOfQuestions = [{
        Question: "What color are aircraft black boxes?",
        Options: ["Black", "Yeallow", "Bright Orange", "Blue"],
        rightOption: 2
    }, {
        Question: "How many fingers (including thumbs) does SpongeBob have?",
        Options: ["12", "10", "8", "6"],
        rightOption: 2
    }, {
        Question: "Which country was the Caesar salad invented in?",
        Options: ["Mexico", "Cyprus", "USA", "France"],
        rightOption: 0
    }, {
        Question: "From which country do French fries originate?",
        Options: ["USA", "Peru", "Amsterdam", "Belgium"],
        rightOption: 3
    }
    ];
    var nextstep = 0;

    function resetNumbers() {
        correctAnswer = 0;
        wrongAnswer = 0;
        unansweredAnswer = 0;
    }


});