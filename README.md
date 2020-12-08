# safeNet-code-challenge
A coding challenge given to me, Christopher Lin, by Alicia Riebau.

As its a pretty simple app, I didn't bother with comments.

yarn install 

"yarn run test" for the test script (press a after it runs)
"yarn start" to run it

It was made with create react app and only dependency is Jest

Has around 70-80% testing coverage.

I actually enjoyed this test. About me I am a full stack developer. I prefer front because I like styling. However I realized after starting this test it was totally focused on TDD, regex and recursion... so I focused on those and didn't bother styling. 

Had a test suite malfunction(which i could not solve after 3 hours) and attempted to rm -rf... but I had forgotten to push to the repo so I lost everything. Lucky visual studio code had the files still open as (deleted) and I was able to copy them over.

Weather you decide to move forward or not with my application, please some feedback on the code would be appreciated. christoff123@gmail.com Christopher Lin

Thanks! It was a positive experience. I enjoyed this code test.

Chris

Reqs:
Standard Language Problem
You are to write a cash machine (ATM) application. The cash machine is pre-stocked with the following denominations:
 • $100 - 10 Bills
 • $50 - 10 Bills
 • $20 - 10 Bills
 • $10 - 10 Bills
 • $5 - 10 Bills
 • $1 - 10 Bills

Your application should take input from the standard input stream and support the following commands:
• R - Restocks the cash machine to the original pre-stock levels defined above 
• W<dollar amount>   - Withdraws that amount from the cash machine (e.g. "W $145") 
• I<denominations>   - Displays the number of bills in that denomination present in the cash machine (e.g. I $20 $10 $1) 
• Q - Quits the application

The withdrawals from the cash machine should dispense cash in the most efficient manner possible, with the least amount of bills.  After a withdrawal, the program should display success or failure and the remaining balance in the cash machine (sample output below).  For an inquiry, the program should display the number of bills in the denominations specified (sample output below).  After a restock, the program should display the balance in the cash machine (same as after a withdrawal).  If the input is not understood, "Invalid Command" should be displayed.  No additional messages, prompts or errors should be displayed.

Sample input/output.  Note that the ‘> ‘ are only in the sample to denote input and would not actually be a part of the problem as no additional prompts should be displayed.
> W $208
Success: Dispensed $208
Machine balance:
$100 - 8
$50 - 10
$20 – 10
$10 - 10
$5 - 9
$1 - 7
> W $9
Success: Dispensed $9
Machine balance:
$100 - 8
$50 - 10
$20 - 10
$10 - 10
$5 - 8
$1 - 3
> W $9
Failure: insufficient funds
> I $20 $1 $100
$20 - 10
$1 - 3
$100 – 8
> R
Machine balance:
$100 - 10
$50 - 10
$20 - 10
$10 - 10
$5 - 10
$1 - 10
> K
Failure: Invalid Command

You may use the language/technology of your choice to implement the solution. You can use the following as suggestions to implement your solution.
For front end/UI developers, you can write the application in a web page, for example, single page application (SPA).
For back end developers, you can write the application as a console application or any other user interface you are comfortable with.
Providing unit tests is encouraged, but not required.  No external files or databases are required (i.e. the initial cash machine amount and restock levels can be hard-coded).
