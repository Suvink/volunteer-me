<center>
<img src="https://volunteerme.netlify.app/img/logo-full.d473237c.png">
</center>

## What I'm building

Sri Lanka is one of the best places to volunteer in the world. In fact Sri Lanka has the highest rate of volunteering in the world according to the <a href="https://www.unv.org/Our-stories/Facilitating-dialogue-volunteerism-and-inclusion-Sri-Lanka">UN Volunteers</a>.

> Sri Lanka has the highest rate of volunteering in the world. Each year
> an average of around seven million people volunteered their time,
> nearly half of those aged over 15 in the country.
> ---CAF World Giving Index


But finding a project to volunteer is not so easy. Mainly because different hosts publish their projects on their own websites and facebook pages and they are scattered everywhere. So I wanted to come up with a common place to list down all the volunteering opportunities in Sri Lanka so that anyone could easily find and work in projects. 


## How I built it

**[Initial Update]**<br>
I'm using VueJS as the frontend framework and Firebase as the backend (for now). The initial Stage is published and it just lists down the opportunities. It's still under constructions and I'm willing to add the following features soon.
- A way to submit opportunities ✅
- Notify a host when the project is submitted. (Using Twillio) ✅
- A search function to search through oppotinities ✅
- Notifications for the users when a new opportunity gets listed. ⚒️

**[Update 2]**<br>
Now VolunteerME can accept submissions from anyone just by filling out the submissions form. I used Vee-Validate for form handling and It was a total nightmare. 😅 They made huge changes in Vee-Validate 3 and docs are jumbled with previous version and the latest version. Finally I learned how to use v3 and Im going to write a separate guide for that later on Dev.
Firebase is integrated as the backend. I just love how the subscriptions work!

**[Update 3]**<br>
VolunteerME now sends whatsapp messages using Twilio's APIs when you submit an event to the system. But Sadly I haven't submitted my template to Whatsapp and got the approval. Untill then, this feature wont work. I used a Firebase Cloud funcion to send whatsapp message. Although it needed my project to be upgraded to Blaze plan, it was the easiest way to do this (for me!). You can find the source code for the cloud function <a href="https://github.com/Suvink/volunteerme-functions">here.</a> Now I have to work on the UI of the project. I'm really bad at content writing but gonna give this a try and see how it turns up. Cheers!

**[Update 4]**<br>
Finally VolunteerME is now fully functional! Added the search feature so the users can filter oppotunities by their preffered location.
But there is a small bug in the form. It doesnt reset on submit. Still Couldnt any solution for that. Not even in Stack Overflow.
If someone know a solution please comment below! TIA!. Writing content wasn't smooth because I not very good with that. Thought of asking someone for help but then I decided to do it on my own. <br>
The approval process for Whatsapp template is kinda too long and I decided to add another email notfication as well. 

**[Final Update]**<br>
So now Im done with VolunteerME. Found some bugs and fixed them all. The search form reset thing I think probably a minor bug in the package itself. I filed an issue so lets see what will happen. Other than that everything looks fine. One major issue I found was I added a mobile only class to a level component and because of that mobile view was totally messed up. Fixed that and fixed some minor responsive issues. Added some gifs here and there so that you wouldnt get bored! Also another major feature I added was a seperate window to view the complete details of the oppotunities. So when you click on a search result, it will show complete details of the oppotunity. The page looks kinda boring compared to the others but I purposely kept it formal and minimal as possible.
And Twilio Whatsapp didnt turn out to be great to me. I had to get permission for my template and the process requires some Facebook Page and stuff I dont have. So instead I bumped Whatsapp and moved into SMS. Thats it! If you find any issues please don't hesitate to contact me!

## Conclusion
I really enjoyed making VolunteerME despite all the mess I've made. It was quite challenging for me to learn VueJS and build everything from the scratch. YouTube helped a lot along the way! This stage, Im submittng for the Twilio Hackathon and I want to develop this into a commercial product. So I'll just listdown the features I have in mind. I'm gonna pair up with some devs (Can't do it all alone) and keep maintaining VolunteerME. If you are interested, let me know. Im gonna start again right after the Hackathon after a short break! 

Features I want in the long run
- Logins for hosts so they can list and edit their listings
- Logins for users
- Apply for oppotunuties through VolunteerME
- Match making feature based on skills of the user
- Online interview feature for hosts so they can interview people if needed. (using Twilio Programmable Video)
- A Mobile App for VolunteerME
- Making VolunteerME available worldwide

If you have any cool suggestions feel free to contact me! 

## Demo Link
 Demo Link: https://services.suvink.me/volunteer-me


## Link to Code
<u>Github</u> <br>
Frontend: https://github.com/Suvink/volunteer-me <br>
Cloud Function to send Whatsapp message: https://github.com/Suvink/volunteerme-functions

## Submission Category
Interesting Integrations


## Project setup
```
npm install
```
**Firebase config**
<br>
Create a fresh firebase project on Firebase console. Copy the config into  `src/firebase.js` file except project ID and API key.<br>
Rename `sample.env.txt` in `src` directory to `src/.env` and replace the API key and Project ID. <br>
Goto Firebase console and import `database.json` into a new Realtime DB. <br>


### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).






