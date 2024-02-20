const askBtn = document.getElementById("ask-btn");
const qstnInput = document.getElementById("qn-input");
const qtnContainer = document.getElementById('qn-container')

askBtn.addEventListener('click', 
(e) => {
    e.preventDefault();
    console.log("test");
    qtnContainer.innerHTML += `
    <div class="qn-box" >
              <img src="images/user.jpg" class="user-icon" />
              <form action="">
                <h4 class="qn-head">
                ${qstnInput.value}
                </h4>
                <p class="qn-para">
                 This is the description of question.
                </p>

                <div class="qn-btn">
                  <div class="qn-box-left">
                    <button class="image-btn qn-box-btns">
                      <i class="fa-regular fa-thumbs-up"></i>
                    </button>
                    <button class="image-btn qn-box-btns">
                      <i class="fa-regular fa-heart"></i>
                    </button>
                    <div class="qn-btns-tag">
                     Science
                    </div>
                  </div>
                  <button class="ask-btn btns">
                    <i class="fa-solid fa-reply"></i> Answer
                  </button>
                </div>
              </form>
            </div>`

}
)