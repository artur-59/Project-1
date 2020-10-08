<script>
let coll = document.addEventListener("click-me");
let i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}

Get the modal
var modal = document.getElementsByClassName('flip-card-btn-turn-to-back');

When the user clicks anywhere outside of the modal, close it
// button.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


</script>

