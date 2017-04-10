Here are the server routes for Summer Break:

POST /users
(Register new users)

POST /login
(Log in users)

POST /activities
(Add new Activity)

POST /activities/:id/comments
(Comment on an Activity)

POST /activities/:id/likes
(“Like” an Activity)

POST /activities/:id/rsvp
(“RSVP” an Activity)

POST /activities/:id/likes
(“Like” an Activity)

GET /users
(List all Users)

GET /activities
(List all Activities)

GET /activities/:id
(List Activity by Activity ID)

GET /comments
(List all Comments)

GET /activities/:id/comments
(List all Comments per Activity ID)

 GET /users/:id/events
(List all RSVP’d Activities per User ID)

GET /activities/:id/rsvp
(List all RSVPs per Activity ID)

GET /activities/:id/likes
(List all Likes per Activity ID)

GET /activities/all/feature
(List all Featured Activities)

GET /activities/all/pending
(List all Pending Activities)

GET /activities/all/live
(List all Live Activities)

 PUT /users/:id
(Update User per ID)

PUT /activities/:id
(Update Activity per ID)

DELETE /users/:id
(Delete User per ID)

DELETE /activities/:id
(Delete Activity per ID)

DELETE /likes/:id
(Delete “Like” per Like ID)

DELETE /guestlist/:id
(Un RSVP an Activity per RSVP ID)
