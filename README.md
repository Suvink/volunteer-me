<center>
<img src="https://wizardly-visvesvaraya-500b32.netlify.com/img/logo-trans.767adaaa.png">
</center>

## What I'm building

Sri Lanka is one of the best places to volunteer in the world. In fact Sri Lanka has the highest rate of volunteering in the world according to the <a href="https://www.unv.org/Our-stories/Facilitating-dialogue-volunteerism-and-inclusion-Sri-Lanka">UN Volunteers</a>.

> Sri Lanka has the highest rate of volunteering in the world. Each year
> an average of around seven million people volunteered their time,
> nearly half of those aged over 15 in the country.
> ---CAF World Giving Index


But finding a project to volunteer is not so easy. Mainly because different hosts publish their projects on their own websites and facebook pages and they are scattered everywhere. So I wanted to come up with a common place to list down all the volunteering opportunities in Sri Lanka so that anyone could easily find and work in projects. 


## How I built it

**[Initial Update]**
I'm using VueJS as the frontend framework and Firebase as the backend (for now). The initial Stage is published and it just lists down the opportunities. It's still under constructions and I'm willing to add the following features soon.
- A way to submit opportunities
- Notify a host when the project is submitted. (Using Twillio)
- Notifications for the users when a new opportunity gets listed.

**[Update 2]**
Now VolunteerME can accept submissions from anyone just by filling out the submissions form. I used Vee-Validate for form handling and It was a total nightmare. 😅 They made huge changes in Vee-Validate 3 and docs are jumbled with previous version and the latest version. Finally I learned how to use v3 and Im going to write a separate guide for that later on Dev.
Firebase is integrated as the backend. I just love how the subscriptions work!


## Demo Link
 Demo Link: https://services.suvink.me/volunteer-me


## Link to Code
Github: https://github.com/Suvink/volunteer-me

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






