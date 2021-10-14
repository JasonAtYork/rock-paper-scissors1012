# rock-paper-scissors1012
**Team:** Royal Never Give Up (RNG)

**Member:**

Ruixin Zhang: jason666@my.yorku.ca, Sec A, Lab 01.

Wuyang Dai: ddai2002@my.yorku.ca, Sec A, Lab 03.

Zeming Lin: icetea@my.yorku.ca, Sec A, Lab 01.

**Project:** Rock Paper Scissors:

We will do a Rock Paper Scissor game, which the user plays the game with the server. The user will choose a symbol by clicking them and it will show if the user wins, loses or ties. The best of three will be done and there is a scoreboard on the center to show the current score. If the user wins three games, they win otherwise they lose. We will add some side features like the weather broadcast and the stock trends to the client.

**Programing Layout of Key Feature:**

Instead of making the program choose from 3 options then judge it is a win or lose or tie, calculating the result first then show the choice of program base on which situation is chosen. So we can make it work by only doing one judgement instead of three. And make it possible for user to select difficulty.

<li>Use a random number generator to choose from i= {0,1,2}
<li>Grab user input “j”, rock=1, paper = 0, scissors = 2
<li>Define 0=tie, 1=win, 2=lose
<li>Build functions for each situation for each input what program should show to make it true
<li>Call function base on the i and j
<li>All the record can be saved in array 

**Functional requirement:**

<li>User can play their game on a brower.
<li>User can start the game by clicking the “Start Game” button on the client.
<li>User can select rock, paper, or scissors by clicking the symbols that has the corresponding images on the bottom of the screen.
<li>User can select “rock”, “paper”, and “scissors” by pressing the specific keys on the keyboard. “Q” for rock, “W” for paper and “E” for scissors.
<li>User can see a score board presented on the center of the screen.
<li>User will receive a pop up “You Win” that indicates he/she wins if he/she wins 3 games.
<li>A pop up “You Lose” will be shown if the user loses 3 games.
<li>User can select the difficulty by clicking the “Select Difficulty” button on the client.
<li>User can see their match history by clicking the “Match History” button on the client.
<li>User can enter hacking mode by entering specific code. (For example, if the user clicking rock, paper, and scissors twice, the user will receive a pop-up notification and for next 10 games he/she can always win).
<li>User can see the weather broadcast on the edge of the screen.
<li>User can see the covid-19 report on the edge of the screen.
<li>User can see the stock trends on the edge of the screen.
<li>User can see the League of Legends schedule on the edge of the screen.
