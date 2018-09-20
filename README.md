sprawlCalc

Revision notes:

9/19/2018
**Resolved** Trying to calculate district totals.
In the .htm file, the first 4 input boxes are supose to be evaluated by the button and placed into the 5th box, but nothing apears. Not quite sure where the hang up is because my text editor, nor crome console has flagged any error.**Resolved**

In the process of error handling, I have come across a curious bug. When evaluating multiple numbers for the 'Town Condition' values.
Entering a sequence of '1,1,9' for example will display the appropriate erorr message, but then will overwrite the '9' with a '1' for some unknown reason.


Sprawlopolis just released from its kickstarter campaign and Its a beast to score.
It has several elements to how the game scores.

The game has a target score. the target score are 3 cards chosen to be separated from the deck and the number in the circles are added together, this is the players score. Match or beat, you win.

There are also conditions that may help or hinder a player from reaching the above goal.
a few are as follows.

A. Town conditions stated on the 3 cards that make up the target score.
B. Largest district sizes, one for residential(orange),commercial(blue),industrial(grey),recreational(green).
C. the number of roads within the city. Its unavoidable to have them so the fewer number of them the better your score might be.
D. If playing with the KS stretch goal cards, those affect the score of the players as well. 

Obviously, the toughest element to count within the score are the number of roads in the town. 
the smaller ones are easier to count, but the ones spanning multiple cards could be tough.

The main intent of this program, is to be a dedicated calculator for the end game. yeah, it came with a
postcard as a KS stretch goal that you can use a dry erase marker, but who is going to carry that around intheir pocket?

intended input fields: the 3 town conditions, the 4 districts and roads.
CTE optional fields: the construction zone cards, the district boost card, wrecktaur. 
radial inputs: difficulty settings.
