# project1_Space_Race

Based on "Avoider" Game

Game where you steer a ship through a series of obstacles, trying to avoid hitting them and losing life, and reach the finish line.

=====================================================
# Basic Goals:
	- Switch pages (start, instructions, play)
		○ Popups for win/lose, replay
	- Dodge obstacles
		○ Define border parameters for player, power-ups, & obstacles
		○ Move with arrow keys
			§ Slow speed with back arrow, increase (cap) with forward arrow
				□ No reverse, but possible stop
	- Keep track of health
		○ Lose heart when obstacle is hit
		○ Gain heart when power-up is hit

# Additional Goals:
	- Character Selection
		○ Page to page through options
		○ Unique vehicle with unique size specifications
		○ Character name, vehicle, bio
	- Course Selection
		○ Page through options
		○ Would need to make extra *
	- Power-ups
		○ Speed boosts
			§ Have to configure how to increase speed
			§ Time to wear off / reduce speed
		○ Point collection?
			§ Think pac-dots
			§ 2 point values; 1 basic, 1 higher (in harder/riskier places)
			§ Running point tally
	- Leaderboard
		○ Display / save fastest times (or highest score + lowest time; how would that calculate?)
			§ Arcade initial method
			§ Where/how would these be saved?
		○ Show upon win

=====================================================
# Gameplan
	- Start by building intro pages; simple
	- Focus on building game page; work out JavaScript before worrying about the look
		○ Learn from tutorials of similar games, and adapt the game logic
		○ Build simplest version to ensure logic is working:
			§ Navigate w d-pad
				□ Speed increase/decrease?
			§ Fixed viewport / move with player
				□ Layer for stationary elements
			§ One obstacle
			§ One power-up
			§ End when reach finish line 
		○ Expand once ^ complete
			§ Longer course, more obstacles, power-ups, etc.
		○ Add in artwork / build CSS
		○ Additional features if time / if feasible

=====================================================
# Pseudocode
# Flow
Standard: Start Page / Instructions Page / Game Page / Results Popup
	- Try Again: restart @ Game Page
	- Back to Start: to Start Page

If [Character Selection] is available:
Start Page / Instructions Page / Character Selection / Game Page / Results Popup
	- Try Again: restart @ Game Page (w current character)
	- [Select New Character]: to Character Selection
	- Back to Start: to Start Page

If [Course Selection] is available:
Start Page / Instructions Page / Course Selection / Game Page (course-specific)* / Results Popup
	- Try Again: restart @ (current course's) Game Page
	- [Select New Course]: to Course Selection
	- Back to Start: to Start Page

If [Character Selection] & [Course Selection] are available:
Start Page / Instructions Page / Course Selection / Game Page (course-specific)* / Results Popup
	- Try Again: restart @ (w current character @ current course's) Game Page
	- [Select New Character]: to Character Selection
	- [Select New Course]: to Course Selection (keep current character)
	- Back to Start: to Start Page

# Pages
Start Page
	Title
	
	Button: Start Game
		Onclick - [Character Selection], [Course Selection], Game Page
	Button: Instructions
		Onclick - Instructions Page

Instructions Page
	Show instructions
		Brief game premise
		Show controls (likely img of directional keys)
		Show what obstacles & what power-ups look like
			- If additional power-ups, explain those too
			
	Button: [Select Character]
		Onclick - [Character Selection Page]
	Button: [Select Course] (only available if [Select Character] doesn't exist)
		Onclick - [Course Selection Page]
	Button: Start Game (only available if [Select Character] & [Select Course] don't exist)
		Onclick - Game Page
	
[Character Selection Page]
	Format: < [character] >
		Page through with arrow buttons (or arrow keys??)
		Show character ship (primary), character name and brief bio
			Possibly photo too, but may conflict too much w art style
			Significant extra artwork to match; may not look good in pixel style
			
	Button: [Select Course]
		Onclick - [Course Selection Page]
	Button: Start Game (only available if [Select Course] doesn't exist)
		Onclick - Game Page
	
[Course Selection Page]
	Format: < [course] >
		Page through with arrow buttons (or arrow keys??)
		Show course appearance (primary), course name and brief bio
			Would require significant extra artwork
			Could make planet-specific (ex. Endor, Hoth)
			
	Button: Start Game
		Onclick - Game Page - specific based on course selection*

Game Page
	[if Character Selection]: set player as selected character
	[if Course Selection]: start race @ selected course

	*Automatic countdown popup (3, 2, 1, Go!)
	Player controls activate
		Function for navigating based on arrow keys
		Move through course, not moving player within course
			- See below
	Move through course as player progresses
		- Viewport? How to keep the view on the player / centered
	Functions:
		Count current lives = start w 3-5
			- Adjust based on the following:
		Obstacles hit = subtract lives
		Power-ups hit = add lives
			- Can cap if necessary; will be a limited number though
			- If additional power-ups available, track those
				□ Speed boosts
					® Increase speed by a given amount for a set amount of time
					® Reduce speed back to default after duration lapses
				□ Points
					® Point count near life count
					® Add when hit
		
		If lives <0, end game = lose
			Player controls disabled; speed =0
			*Results popup: Lose
				Try again: restart current race (Game Page)
				Back to start: back to Start Page
					® More important if character/course selections are options
					® Alt: have ^ as additional options
				[Choose new character]: back to Character Selection Page
				[Choose new course]: back to Course Selection Page
					- Would keep character
		If lives >0 & player reaches finish line = win
			Player controls disabled; speed = 0
			*Results popup: Win
				- See above; same as lose popup but with "congratulations"
				- If leaderboard is available:
					[Show leaderboard]
					[Add high score if achieved]
						If player score > high score #1-5, etc.
							Calculate score based on fastest time to complete + highest points (if available) (+ (possibly) extra lives)
						Enter initials, submit
						Win popup: try again or back to start
						
# Possible / Other
	- CPU to race against??
		- More of an avoidance game than a racing game
        - What does the AI look like to complete that? Likely too complex for this scope