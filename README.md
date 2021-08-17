# Wumpus-World-instructions

1.	Start-up
-	In the Wumpus.js file all the variables that are found on the field (world size, number of gold,Wumpus…)
-	Run the file Index.html which is html file but all the functionalities are in JavaScript so it doesn’t need to compile.
-	Opening the file, in the browser will be displayed the world and by clicking the “START” button, the game will be initialized.
-	The course of the game will be displayed bellow the field and with every move of the agent, different warnings will be displayed when he stands on different filed.
-	When the game ends, we can restart it by clicking on the “RESTART” button and new game with different variables will be set in the field.
-	If the agent keeps moving and gets into the pit loop, the game will end, because there will be no solutions for that world.

2.	Variables
-	worldData[x],[y] – two dimensional array for x and y coordinates used for the ask function
-	worldVisited[x],[y] – two dimensional array for x and y coordinates used for the ask function
-	setWumpus() – function that sets Wumpus on random field, by checking first where are all the other elements 
-	SetStench() - function that relies on setWumpus() function and sets stench around Wumpus after the Wumpus is initialized on the field, by checking first where are all the other elements
-	setPit() – function that sets 2 pits on the field, by checking first where are all the other elements 
-	setBreeze() - function that relies on setPit() function and sets breeze around pits after pits is initialized on the field, by checking first where are all the other elements.
-	setGold() – function for setting the gold on the random field, by checking first where are all the other elements 

worldData(x,y) - Sets a world with a size of 4x4 and works by telling us what is in a particular field. We get a representation what is on it.
 worldVisited(x,y),  –  If the field is visited by, in the dialog box, under the field we get the answer in written form what is it on it, and are we in danger.


3.	World Rules
-	The world is always 4x4
-	(0,0) is the field in the bottom left corner from which player starts and also the final field.
-	There is always one Wumpus.
-	There is always one gold.
-	There are stenches and breezes around Wumpus and Pits, according to their location, so there can be 2 breezes or stenches if the Pits or Wumpus is in some of the top or bottom corners, 3 if they are in the top, bottom, left or right , or 4 of them if they are on the any other field besides this mention ones.
-	The chances for pit probability is 30% (0.3)
-	The chances for arrow shot at Wumpus is 60% (0.6)


4.	Agent Description
-	Agent always starts at (0,0)
-	Agent always goes first from (0,0) to first left field (1,0) and then checks all of the rest
-	Every time he comes to the new field, he looks at what’s on that field and move according to it. If it’s safe he moves forward, if not he moves back or In other direction.
-	If it’s a gold field, he picks it up and he wins the game. Also he knows that all other fields around him are safe.
-	The agent knows how many fields of gold there are, but he doesn't know where they are (then he returns to the field (0,0))
-	If agent detects danger of breeze or stench right at the beginning he will try to find another way, but if he is stuck in the loop, the game will end as if there was no solutions to this game.
-	If the agent detects two stenches, he will automatically shoot his arrow in center direction and kill Wumpus and then move forward across all the fields where was previously stench and Wumpus and try to find gold.
-	Agent can’t die because he detects danger one step ahead. He can only end the game if he is stuck into the loop.

5.	Notification 
•	There is a second field on the right of the html page which is displaying all of the elements on the field. In case some user wants to inspect it, he can just open the console and choose the pboard element and change the visibility or simply open the editor and in the css file, delete the visibility attribute. 
•	The algorithm from starting the game is searching the way through the gold and to kill the Wumpus, but if it is stuck in the loop, after it get’s to the result of -20, it will end the sequence and exit the game.
