$(document).ready(function () {
  // --- our code goes here ---
  $(".new-tweet-text").on("keydown", function () {
    let counter = 140;
    counter = counter - $(this).val().length;
    $(".new-tweet-submit-counter").text(counter);
    if (counter < 0) {
      $(".new-tweet-submit-counter").css("color", "red");
    } else {
      $(".new-tweet-submit-counter").css("color", "white");
    }
  });
});

//https://jquery.com/
