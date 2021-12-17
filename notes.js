<main class="container">
<section class="new-tweet">
<form action="/tweets" method="POST" id="submit-tweet">
<div class="error-container">
<span class="error-maxtweet">Your tweet excceds the maximum limit of characters 140</span>
<span class="error-emptytweet">Your tweet can't be empty</span>
</div>
<textarea name="text" placeholder="What are you humming about?" id="tweet-text"></textarea>
<div>
<hr>
<button type="submit" id="btn">Tweet</button>
<output name="counter" class="counter" for="tweet-text">140</output>
</div>
</form>
</section>
<section class="tweet-container">
</section>
</main> 