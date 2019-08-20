const $jelly = $(".jelly");
const $bubbleWrap = $(".bubble-wrap");

$(".intro").one(
  "webkitAnimationEnd oanimationend msAnimationEnd animationend",
  jellyIn
);

function jellyIn() {
  $jelly.addClass("swimming");
  $bubbleWrap.on("click", function() {
    $bubbleWrap.append(`
      <div class="bubble-spawn">
        <span class="bubble"></span>
        <span class="bubble"></span>
        <span class="bubble"></span>
        <span class="bubble"></span>
      </div>
    `);

    $(".bubble-spawn").on(
      "webkitAnimationEnd oanimationend msAnimationEnd animationend",
      function(event) {
        $(this).detach();
      }
    );
  });
}
