//buttons//
let startButton=document.querySelector(".start");
let resumeButton=document.querySelector(".resume");
let tellButton=document.querySelector(".tell");
let fightButton=document.querySelector(".fight");
let stayButton=document.querySelector(".stay");
let runButton=document.querySelector(".run");
let proceedButton=document.querySelector(".proceed");
let comburstButton=document.querySelector(".comburst");
let wanderButton=document.querySelector(".wander");
let comburstButton2=document.querySelector(".comburst_2");
let joinButton=document.querySelector(".join");
let helpButton=document.querySelector(".help");
let fightWinButton1=document.querySelector(".fight_win_1");
let fightWinButton2=document.querySelector(".fight_win_2");
let fightWinButton3=document.querySelector(".fight_win_3");
let buttonOpt1=document.querySelector(".buttonopt1");
let buttonOpt2=document.querySelector(".buttonopt2");
let buttonOpt3=document.querySelector(".buttonopt3");
let buttonOpt4=document.querySelector(".buttonopt4");


//segments//
let head=document.querySelector(".head");
let storyOpening=document.querySelector(".story_opening");
let part1=document.querySelector(".part_1");
let tellPart=document.querySelector(".tell_part");
let fightPartEnd=document.querySelector(".fight_part_end");
let part2=document.querySelector(".part_2");
let stayPart=document.querySelector(".stay_part");
let end=document.querySelector(".end");
let bitPart=document.querySelector(".bit_part");
let zombiePart=document.querySelector(".zombie_part");
let joinEnd=document.querySelector(".join_end");
let helpPart=document.querySelector(".help_part");
let runPart=document.querySelector(".run_part");
let part3=document.querySelector(".part_3");
let theEnd=document.querySelector(".the_end");


//events//
startButton.addEventListener('click', function(){
    head.style.display = "none";
    startButton.style.display = "none";
    storyOpening.style.display = "block";
    resumeButton.style.display = "block";
    resumeButton.style.textAlign = "center";
});
resumeButton.addEventListener('click', function() {
    resumeButton.style.display = "none";
    storyOpening.style.display = "none";
    part1.style.display = "block";
    tellButton.style.display = "block";
    fightButton.style.display = "block";
})
tellButton.addEventListener('click', function() {
    tellButton.style.display = "none";
    part1.style.display = "none";
    fightButton.style.display = "none";
    tellPart.style.display = "block";
    part2.style.display = "block";
    stayButton.style.display = "block";
    runButton.style.display = "block";
});
fightButton.addEventListener('click', function() {
    part1.style.display = "none";
    tellButton.style.display = "none";
    fightButton.style.display = "none";
    fightPartEnd.style.display = "block";
});
stayButton.addEventListener('click', function() {
    stayButton.style.display = "none";
    runButton.style.display = "none";
    tellPart.style.display = "none";
    part1.style.display = "none";
    part2.style.display = "none";
    stayPart.style.display = "block";
    proceedButton.style.display = "block";
    comburstButton.style.display = "block";
});
runButton.addEventListener("click", function() {
    runButton.style.display = "none";
    stayButton.style.display = "none";
    part2.style.display = "none";
    tellPart.style.display = "none";
    runPart.style.display = "block";
    part3.style.display = "block";
    fightWinButton1.style.display = "block";
});
fightWinButton1.addEventListener('click', function () {
    fightWinButton1.style.display = "none";
    fightWinButton2.style.display = "block";
});
fightWinButton2.addEventListener('click', function() {
    fightWinButton2.style.display = "none";
    fightWinButton3.style.display = "block";
});
fightWinButton3.addEventListener('click', function() {
    fightWinButton3.style.display = "none";
    runPart.style.display = "none";
    part3.style.display = "none";
    theEnd.style.display = "block";
});
proceedButton.addEventListener('click', function() {
    wanderButton.style.display = "none";
    proceedButton.style.display = "none";
    comburstButton.style.display = "none";
    stayPart.style.display = "none";
    bitPart.style.display = "block";
    wanderButton.style.display = "block";
    comburstButton2.style.display = "block"
});
comburstButton.addEventListener('click', function() {
    proceedButton.style.display = "none";
    comburstButton.style.display = "none";
    bitPart.style.display = "none";
    stayPart.style.display = "none";
    end.style.display = "block";
});
comburstButton2.addEventListener('click', function() {
    comburstButton.style.display = "none";
    comburstButton2.style.display = "none";
    bitPart.style.display = "none";
    wanderButton.style.display = "none";
    end.style.display = "block";
});
wanderButton.addEventListener('click', function() {
    stayPart.style.display = "none";
    wanderButton.style.display = "none";
    comburstButton2.style.display = "none";
    bitPart.style.display = "none";
    zombiePart.style.display = "block";
    joinButton.style.display = "block";
    helpButton.style.display = "block";
});
joinButton.addEventListener('click', function() {
    joinButton.style.display = "none";
    helpButton.style.display = "none";
    zombiePart.style.display = "none";
    joinEnd.style.display = "block";
    fightWinButton1.style.display = "block";
});
fightWinButton1.addEventListener('click', function () {
    fightWinButton1.style.display = "none";
    fightWinButton2.style.display = "block";
});
fightWinButton2.addEventListener('click', function() {
    fightWinButton2.style.display = "none";
    fightWinButton3.style.display = "block";
});
fightWinButton3.addEventListener('click', function() {
    fightWinButton3.style.display = "none";
    joinEnd.style.display = "none";
    part3.style.display = "none";
    theEnd.style.display = "block";
});
helpButton.addEventListener('click', function() {
    helpButton.style.display = "none";
    joinButton.style.display = "none";
    zombiePart.style.display = "none";
    helpPart.style.display = "block";
});
