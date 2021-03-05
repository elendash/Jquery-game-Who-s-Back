# Who's Back?
Game reference - Mastermind

## Wireframe
Load page => Storyline and Instructions
Start Button => Play by selecting selections to the right position
Indicator => will prompt if certain selection has been made correctly
total of 8 trys => repeat process => or player fail to select correctly 
load page fail => restart game button.
Or player wins => load final page => end storyline
Button to restart the game.

### Structure
program = logic + data
data = object / array
logic = conditioning by comparing answer with input

#### Storyline
Owner freddy while walking his dogs, all of them ran loose. Luckily some well train dogs went home, but he is not sure who he needs to find. Player is suppose to help Freddy find out who is home and who is on the loose. Player will have 8 tries to determind the dogs who is in their kennel using their treats to attempt find the correct answer.
At the end when player got the right answer, he/she will call Freddy to let him know which dogs he has to search for. 

##### Projected Flow
- create Header-html
- create - h1 write storyline and instructions - js & html
- create button to hide current page reveal next page, hide all others
- create text to prompt play how to select the selection and press button to reveal answer or hint
- create object(answers and selections) append in div 
- create math random 'answers' compare with selection using boolean by giving true or false- indicate hint with color indicators - create element box x 4
- create button to trigger console.log to compare answer with selection
- hide all page go to next attempt page if answer false, if true hide all reveal end page.
- Either hide current page and reveal the last page 
- or to repeat execute the same for 7 more times. - using loop and conditions or to hide all reveal alternative last page.
- alternative page - play fail to get correct answer - text & button to refresh page to go back to first page.
- Last page - text & button to refresh page to go back to first page.

###### Manatory 'Items'
- intruction text
- button to reveal next page
- instruction to start playing game - text
- trigger math.random answers
- answer object (min.2)
- selection -ask if selection === to answer
- false - reveal next page with 2nd try & indicative hints (temporary do 3 tries)
- answer === true will trigger to hide all page reveal last page
- storyline and congratulation text
- button to refresh go to start of the game
- answer !== true will trigger 3rd attempt page.
- repeat steps, check true, go to last page, false go to alternative page
- storyline text ask player try again with a button that refresh to first page.
- text and button

###### Optional 'Items'
- To have 4 answers objects
- Have 8 selection instead of 3
- have indicators in colors to hint if is correct, somewhat correct or wrong in boolean and conditions
- animate ther characters in first page with colours
- selection becomes drag and drop effect
- nice background image
- have 8 tries instead of 3 tries
- create logo for game
- animate last page with characters
- put music in game background
- trigger sound
- sound effect of dogs when click button after input selection


