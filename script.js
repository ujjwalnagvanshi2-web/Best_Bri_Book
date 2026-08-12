// Variable to store

// for 1
//const back1 = document.getElementById("back_1");
//const forward1 = document.getElementById("forward_1");

// for 2
//const back2 = document.getElementById("back_2");
//const forward2 = document.getElementById("forward_2");


// for display a
const display1a = () => {
    // When Back is clicked: Disable Back, Enable Forward
    back1.style.opacity = 0.5;
    back1.disabled = true;
    forward1.style.opacity = 1;
    forward1.disabled = false;
    document.getElementById("name1").innerHTML = `
        <h2>Superhero Fight</h2>
        <p>
        In this story the main of the sory 
        <br>
        are the aliens who don't like the human, and try to
        <br>
        destroy the human civillition by different way,
        <br>
        but the 10 heros were saving the human than 
        <br>
        the alien make a plan to kill all the heros and they 
        <br>
        get sucsses but the human get very angry and the last
        <br>
        part is very entresting 
        <br>
        morals of the story it that truth wins on lie
        </p>
    `;
}

const display2a = () => {
    // When Forward is clicked: Enable Back, Disable Forward
    back1.style.opacity = 1;
    back1.disabled = false;
    forward1.style.opacity = 0.5;
    forward1.disabled = true;
    document.getElementById("name1").innerHTML = `
        <div id = "opinion" class = "opinion">
            <div class="advatigment">
                <div id="reviwe">
                    <div class="reviwe-img">
                        <img src="https://media.bribooks.com/public/BookCovers/book_219414_1.png?width=500&format=avif" alt="Superhero Fight">
                    </div>
                    <div id="star-box-pre1">
                        <span class="star"></span><span class="star"></span><span class="star"></span><span class="star"></span><span class="star"></span><a>5.0</a>
                        <br>
                        <img src="fzs.png" alt="fzs" style="width: 70%">
                        <br>
                        <div class="more">
                            <a>0</a><a>510</a><a>10</a>
                        </div>
                    </div>
                </div>
                <br>
                <br>
                <br>
                <div class ="comment-box">
                    <div class="comment">
                        <div class="star-box">
                            <span class="star"></span><span class="star"></span><span class="star"></span><span class="star"></span><span class="star"></span>
                        </div>
                        <span class="flag"></span>
                        <p>
                            Very nice book it have a surprising ending
                        </p>
                        <a class="commment-name">Ujjwal nagvanshi</a>
                        <a class="time">Thu, Apr 23rd 2026, 3:23PM</a>
                    </div>
                    <div class="comment">
                        <div class="star-box">
                            <span class="star"></span><span class="star"></span><span class="star"></span><span class="star"></span><span class="star"></span>
                        </div>
                        <span class="flag"></span>
                        <p>
                            Good story well done ujjwal
                        </p>
                        <a class="commment-name">Gjdf Vhick</a>
                        <a class="time">Thu, Mar 26th 2026, 11:15PM</a>
                    </div>
                    <br>
                    <div class="comment">
                        <div class="star-box">
                            <span class="star"></span><span class="star"></span><span class="star"></span><span class="star"></span><span class="star"></span>
                        </div>
                        <span class="flag"></span>
                        <p>
                            wow! it have a surprising ending
                        </p>
                        <a class="commment-name">ujjwal</a>
                        <a class="time">Sun, Jun 29th 2025, 1:06PM</a>
                    </div>
                    <br>
                    <div class="comment">
                        <div class="star-box">
                            <span class="star"></span><span class="star"></span><span class="star"></span><span class="star"></span><span class="star"></span>
                        </div>
                        <span class="flag"></span>
                        <p>
                            Very nice
                        </p>
                        <a class="commment-name">Ujjwal</a>
                        <a class="time">Fri, Jun 23rd 2023, 10:33PM</a>
                    </div>
                </div>
           </div>
        </div>
    `;
}


// for display b
const display1b = () => {
    // When Back is clicked: Disable Back, Enable Forward
    back2.style.opacity = 0.5;
    back2.disabled = true;
    forward2.style.opacity = 1;
    forward2.disabled = false;
    document.getElementById("name2").innerHTML = `
        <h2>The Revenge of little hero</h2>
        <p>
            In this story there is a litle boy who was son of
            <br>
            a fairy and a hero, and he don't know that who was he.
            <br>
            They were killed by a monster name stratus, and stratus was the 
            <br>
            king of evil dimension, and want to become king of all the dimention.
            <br>
            After so much challenges and 2 tries finaly the liitle hero  
            <br>
            defeat the stratus 
            <br>
            We lear from this story that we never give up.
        </p>
    `;
}

const display2b = () => {
    // When Forward is clicked: Enable Back, Disable Forward
    back2.style.opacity = 1;
    back2.disabled = false;
    forward2.style.opacity = 0.5;
    forward2.disabled = true;
    document.getElementById("name2").innerHTML = `
        <div id = "opinion1" class = "opinion">
            <div class="advatigment">
                <div id="reviwe1">
                    <div class="reviwe-img">
                        <img src="https://media.bribooks.com/public/AuthorCoverImages/user_cover_686e701a70be9_b1_v1219717.png?width=500&format=avif" alt="The Revenge of little hero">
                    </div>
                    <div id="star-box-pre1">
                        <span class="star"></span><span class="star"></span><span class="star"></span><span class="star"></span><span class="star"></span><a>5.0</a>
                        <br>
                        <img src="fzs.png" alt="fzs" style="width: 70%">
                        <br>
                        <div class="more">
                            <a>1</a><a>260</a><a>5</a>
                        </div>
                    </div>
                </div>
                <br>
                <br>
                <br>
                <div class ="comment-box">
                    <div class="comment1">
                        <div class="star-box">
                            <span class="star"></span><span class="star"></span><span class="star"></span><span class="star"></span><span class="star"></span>
                        </div>
                        <span class="flag"></span>
                        <p>
                            very nice diffrence from other
                        </p>
                        <a class="commment-name">Ujjwal nagvanshi</a>
                        <a class="time">Thu, Apr 23rd 2026, 2:49PM</a>
                    </div>
                    <br>
                    <div class="comment1">
                        <div class="star-box">
                            <span class="star"></span><span class="star"></span><span class="star"></span><span class="star"></span><span class="star"></span>
                        </div>
                        <span class="flag"></span>
                        <p>
                            wow very nice n thrilling book...keep it up
                        </p>
                        <a class="commment-name">sunil nagvanshi</a>
                        <a class="time">Sun, Jul 6th 2025,8:05AM</a>
                    </div>
                </div>
           </div>
        </div>
    `;
}

//for name 1
back1.addEventListener("click", display1a);
forward1.addEventListener("click", display2a);

//for name 2
back2.addEventListener("click", display1b);
forward2.addEventListener("click", display2b);

