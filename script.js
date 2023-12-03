//Functions
//Random Number Generator Function
function random_number_generator(number) {
    return Math.floor(Math.random() * number);
}

function computer_picture_selector() {
    let random_number = random_number_generator(3);

    if (random_number === 1) {
        return  `<img src="assets/paper.png" alt="paper" id="computer_paper" class="computer_image">`;
    }
    else if (random_number === 2){
        return `<img src="assets/scissors.png" alt="scissors" id="computer_scissors" class="computer_image">`;
    }
    else {
        return `<img src="assets/rock.png" alt="rock" id="computer_rock" class="computer_image">`;
    }

}

function remove_borders() {
    let player_pictures = document.querySelectorAll(".player_image");

    for (let i = 0; i < player_pictures.length; i++) {

        player_pictures[i].style.removeProperty("border");

    }
}

function reset_game() {
    player_choices.addEventListener("click", player_choice_click_handler);

    remove_borders();
    computer_response.innerHTML = `<p> Game has been Reset. You can now play again </p>`;

}

function game_checker(player_target) {
    let computer_target = document.querySelector(".computer_image");

    //console.log(`computer image id is ${computer_target.getAttribute("id")}`);

    let player_image_name = player_target.getAttribute("id").slice(7);

    let computer_image_name = computer_target.getAttribute("id").slice(9);

    console.log(`computer image name is ${computer_image_name}`);

    console.log(`player image name is ${player_image_name}`);

    if (player_image_name == computer_image_name) {
        player_target.style.border = "Yellow Solid 6px";
        computer_target.style.border = "Yellow Solid 6px";

        computer_response.innerHTML += `<h3> You Both Selected ${player_image_name}. It's a tie</h3>`;
    }

    else if (player_image_name === "rock" && computer_image_name === "paper" )
    {
        winner_loser_styler(computer_target, player_target);
        computer_response.innerHTML += `<h3> You Lost  ${computer_image_name} Beats ${player_image_name}.</h3>`;
    }

    else if (player_image_name === "scissors" && computer_image_name === "rock") {
        winner_loser_styler(computer_target, player_target);
        computer_response.innerHTML += `<h3> You Lost  ${computer_image_name} Beats ${player_image_name}.</h3>`;
    }

    else if (player_image_name === "paper" && computer_image_name === "scissors") {
        winner_loser_styler(computer_target, player_target);
        computer_response.innerHTML += `<h3> You Lost  ${computer_image_name} Beats ${player_image_name}.</h3>`;
    }

    else if (player_image_name === "paper" && computer_image_name === "rock") {
        winner_loser_styler(player_target, computer_target);
        computer_response.innerHTML += `<h3> You Win  ${player_image_name} Beats ${computer_image_name}.</h3>`;
    }

    else if (player_image_name === "rock" && computer_image_name === "scissors") {
        winner_loser_styler(player_target, computer_target);
        computer_response.innerHTML += `<h3> You Win  ${player_image_name} Beats ${computer_image_name}.</h3>`;
    }

    else if (player_image_name === "scissors" && computer_image_name === "paper") {
        winner_loser_styler(player_target, computer_target);
        computer_response.innerHTML += `<h3> You Win  ${player_image_name} Beats ${computer_image_name}.</h3>`;
    }


}

function winner_loser_styler(winner, loser) {
    winner.style.border = "Green Solid 6px";
    loser.style.border = "Red Solid 6px";
}

//variables
let computer_picture;

//Get references
player_choices = document.getElementById("player_choices");

computer_response = document.getElementById("computer_response");

//player_pictures = document.getElementsByClassName("player_image");

reset_button = document.getElementById("reset_button");


function player_choice_click_handler(event) {

        console.log(`target is ${event.target}`);
        console.log(`event is ${event}`);
        let target = event.target;
        console.log(`target tagname is is ${target.tagName}`);
        console.log(`target id is is ${target.id}`);
        if (target.tagName === "IMG") {

            computer_picture = computer_picture_selector();
            computer_response.innerHTML = computer_picture;
            //computer_response.innerHTML = computer_picture_selector();

            //target.style.border = 'green solid 6px';
            game_checker(target);

        } //Ending of If tag === IMG

        player_choices.removeEventListener("click", player_choice_click_handler)

}

document.addEventListener("DOMContentLoaded", function(){

    player_choices.addEventListener("click", player_choice_click_handler);


    reset_button.addEventListener("click", reset_game);


});

//OLD approach. I need to adapt
/*

document.addEventListener("DOMContentLoaded", function () {
    player_choices.addEventListener("click", function (event){

        console.log(`target is ${event.target}`);
        console.log(`event is ${event}`);
        let target = event.target;
        console.log(`target tagname is is ${target.tagName}`);
        console.log(`target id is is ${target.id}`);
        if (target.tagName === "IMG") {
            computer_response.innerHTML = computer_picture_selector();

            target.style.border = 'green solid 6px';
            player_choices.removeEventListener("click", arguments.callee, false);

        } //Ending of If tag === IMG




    }); //Ending of player_choices.addEventListener

    reset_button.addEventListener("click", function () {

        player_choices.addEventListener("click", arguments.callee);
    });




} );

 */