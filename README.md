# Project2_GA_TouristGuide
Second Project made on Unit2 GA

-------------------------------------------------------------------------
- as a user I would like to see my posts
- as a user I would like to click and see details of my post
- as a user I would like to insert new posts
- as a user I would like to delete posts
- as a user I would like to edit posts
- as a user I would like to see a picture of the places
- as a user I would like to siginup to my acount
- as a user I would like to login to my account and log out
- as a user I would like to add comments/ delete / edits





-------------------------------------------------------------------------
- create the seeds
- create routes
- create 1st page
- create posts
- create html for the screen
- create login signup and logout


-------------------------------------------------------------------------







-------------------------------------------------------------------------

Page1:
- This page will hold all the posts
- Show Button Home and Searchbar

Page4:
- When click in some options ex:HIKE, it will show all the hike spots
- It will show the comment below that specific spot

Page5:
- Maybe can be a Add/Edit post

Page6:
- SearchBAr
    - In htis part , will need to have access to all the array holding the posts and filter the name/description

Page Showing post:
- Show picture of the places
- Name of the place and Description









///////////////////////////////////
////////-----------------////////////////////
////////////////////////////////////


-------------------PLANNING--------------
MOdels/Seeds:
|  name     |  String   |
|  address  |  String   |
|  free     |  Boolean  |


----------------------------------------------
Models/Places:
|   name     | String   |
|   address  | String   |
|   free     | Boolean  |

----------------------------------------------

Model/User.js
    username:
    |    type      |  String  |
    |   required  |  Boolean   |  
    |   unique    |  Boolean    |
   
    password:
    |   type      | String  |
    |   required  | Boolean    |


---------------------------------------------------


Model/comment.js

note:
 |  type     |     String
 |  require  |     Boolean
author:
 |  type     |     mongoose.Schema.Types.ObjectId, //single User
 |  ref      |     'User' // string value from the model creation





---------------------------------------------------


![](imgplanproj2/first.JPEG)
![](imgplanproj2/fourth.JPEG)
![](imgplanproj2/fifth.JPEG)
![](imgplanproj2/sisxth.JPEG)
![](imgplanproj2/planning.JPEG)
![](imgplanproj2/showingpost.JPEG)
