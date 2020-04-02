# frontend

A projekt built for mendly. The idea is to make the CBT tools they have interactive. For now its just a glimpse of the final project. The final project is ment to be used IRL and deployed. 

As is now:
admin and user login.
Admin can assign a task to user. 
User gets the task in a list.
opening a task and finishing it will update the task and put it self in a list over done tasks.

Coming up:
admin will become u therapist user. handling results from tasks.
specific user and therapist endpoints will connect to each other. 
more tasks, models and text 
might be a coment field to the tasks or perhaps a small chat to every part. 


Other things thats going to change.
Implementing better state handler. (redux)
cleaning up code and split up in to components.


To run App on android emulator:
1. 
make sure to have enviroment set up
I used https://reactnative.dev/docs/environment-setup

2. 
run npm i

3. 
start emulator
(works on both android and ios, but at the moment it looks better on android)

4. 
run adb devices  , to make sure your emulator is connected. 
run npx react-native run-android

temmporary users and admins:
Login user: username: "jens" , Password: "jens"
Login admin: adminname: "admin" , password: "admin"