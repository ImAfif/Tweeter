/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(document).ready(function () {
  // Fake data taken from initial-tweets.json
  const data = [
    {
      user: {
        name: "Newton",
        avatars: "https://i.imgur.com/73hZDYK.png",
        handle: "@SirIsaac",
      },
      content: {
        text: "If I have seen further it is by standing on the shoulders of giants",
      },
      created_at: 1461116232227,
    },
    {
      user: {
        name: "Descartes",
        avatars: "https://i.imgur.com/nlhLi3I.png",
        handle: "@rd",
      },
      content: {
        text: "Je pense , donc je suis",
      },
      created_at: 1461113959088,
    },
  ];

  const renderTweets = function (tweets) {
    // loops through tweets
    // calls createTweetElement for each tweet
    // takes return value and appends it to the tweets container

    console.log(tweets);

    let tweetscontainer = $(".tweets-container").html("");

    for (let i = 0; i < tweets.length; i++) {
      let tweetelement = createTweetElement(tweets[i]);

      tweetscontainer.prepend(tweetelement);
    }
  };

  const escape = function (tweet) {
    let div = document.createElement("div");
    div.appendChild(document.createTextNode(tweet));
    return div.innerHTML;
  };

  const createTweetElement = function (tweet) {
    // let $tweet = /* Your code for creating the tweet element */
    let html = `<section class="old-tweets-by-users">
          <div class="name-and-handle">
            <h3 class="other-users-name">${tweet.user.name}</h3>
            <p class="twitter-handle">${tweet.user.handle}</p>
          </div>
          <img class="picture2" src="${tweet.user.avatars}" />
          <p class="placeholderfortweet">${escape(tweet.content.text)}</b>
</p>
          <p class="days-since-posted">${timeago.format(tweet.created_at)}</p>
          <span class="bottom-buttons"
            ><i class="fas fa-heart"></i><i class="fas fa-flag"></i
            ><i class="fas fa-retweet"></i
          ></span>
        </section >`;
    return html;
  };

  renderTweets(data);

  //dollar sign is jquery
  //jquery
  //hoisting
  //const vs let
  //gulp
  //webpack

  $(".new-tweet-form").submit(function (event) {
    event.preventDefault();

    const tweetData = $(this).serialize();

    const $input = $(`.new-tweet-text`);

    if ($input.val() === "") {
      alert("Kindly input a character to tweet");
    }

    if ($input.val().length > 140) {
      alert("Characters cannot be over 140");
      return ($input.val() = "")
    }

    $.ajax({
      data: tweetData,
      method: "POST",
      url: "/tweets",
    }).then(function (tweetData) {
      $input.val("");
      fetchTweets();
    });
  });

  //what we have to do:
  //it's an ajax request, it's a get request to get info from the server
  // and

  const fetchTweets = function () {
    $.ajax({
      method: "GET",
      url: "/tweets",
    }).then(function (tweetData) {
      renderTweets(tweetData);
    });
  };

  fetchTweets();
});
// .always(function () {
//   console.log("complete");
// });
