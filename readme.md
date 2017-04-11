https://tiy-mariefilbey-summerbreakfront.surge.sh

"Summer Break" is the final project for Marie Filbey and Kurt Wyckoff at The Iron Yard front-end development coding 12-week boot-camp.  It facilitates and encourages parent-approved opportunities for teens in the greater Atlanta area during the summer.  The opportunity categories are summer jobs, educational events, volunteer events, camps, and general events.

Most websites tend to be very broad, not teen-friendly, not locale, or merely "traffic" sites that take one down a dead end.  Summer Break aids teens and their parents because it provides a source of real events and job postings that have been pre-approved before being posted by the sites’ authors. Anyone can post an opportunity once logged in; however, only a site administrator has access to actually make the opportunity live for the public.  The authors are hopeful that more companies, volunteer organizations, and churches will want to be administrators so they themselves can directly make their events live without any further assistance.  In this way, the site becomes a very dynamic and "grass-roots" resource.  

To follow the flow of the site, a new user is asked to register and then log in. (Facebook login integration is a desired future feature).  Users add events by clicking the "Add an Event" menu button, selecting the category type (jobs, volunteers, etc.), and then filling out the simple form.  The data is held in an administrator-only accessible "holding tank." The holding tank icon is located on the front page and only visible to administrators.

In the holding tank the admins are able to view, edit, approve, and delete events.  Once approved, these events are displayed on the front page under their category heading. Users are able to "Like" the event (ala Facebook), which increments a visible total "likes" counter. By clicking on the "RSVP" button, users build their own list of favorite events/jobs displayed on the right that they will attend (or apply to).  A visible counter shows how many people are planning to attend any particular event as well.  

By clicking on the title of any event, one is taken to a detail page of the event which has a clickable link to that event's site.  Furthermore, users can make comments on the events that are posted in plain view.

Future features would be further Facebook integration, live calendar of events, and GoogleMaps API integration.   

Technically, the front end was developed using AngularJS and UI Router, and user information was stored securely using Angular Cookies.

The back end server used Node JS, Express, and PostGres database.  

The server routes for Summer Break:

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

GET /users/:id/events
(List all RSVP’d Activities per User ID)

GET /activities
(List all Activities)

GET /activities/:id
(List Activity by Activity ID)

GET /activities/:id/comments
(List all Comments per Activity ID)

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

GET /comments
(List all Comments)

GET /jobs
(List all Jobs)

GET /rsvps
(List all RSVP'd events)

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
