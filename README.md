<a  href="https://www.services.suvink.me/volunteer-me">
<center>
<img src="https://volunteerme.netlify.app/img/logo-full.d473237c.png">
</center>
</a>
 
# VolunteerME: All volunteering in one place!

[![Vue version](https://img.shields.io/badge/Vue-v2-brightgreen)]()
[![Vue version](https://img.shields.io/badge/Licence-MIT-orange)]()


## About

Sri Lanka is one of the best places to volunteer in the world. In fact Sri Lanka has the highest rate of volunteering in the world according to the <a href="https://www.unv.org/Our-stories/Facilitating-dialogue-volunteerism-and-inclusion-Sri-Lanka">UN Volunteers</a>.

> Sri Lanka has the highest rate of volunteering in the world. Each year
> an average of around seven million people volunteered their time,
> nearly half of those aged over 15 in the country.
> ---CAF World Giving Index


But finding a project to volunteer is not so easy. Mainly because different hosts publish their projects on their own websites and facebook pages and they are scattered everywhere. VolunteerME is a common place to list down all the volunteering opportunities in Sri Lanka so that anyone can easily find and work in projects. 

### How it works

Volunteer event hosts can submit their events into VolunteerME by the submission page and upon successfull submission the host will recieve a text message. The volunteers can view the hosted events from the listings page and they can filter the nearby events by location.


## Features

- Submit volunteering oppotunities.
- Search and filter oppotunities
- Receive submission confirmations using Twilio [Programmable SMS](<[https://www.twilio.com/sms](https://www.twilio.com/sms)>) .


# Set up

## Frontend

### Requirements

- [Vue.js](https://vuejs.org/v2/guide/installation.html)
- A Firebase account - [sign up](https://console.firebase.google.com/)


### Local development

After the above requirements have been met:

1. Clone this repository and `cd` into it

```bash
git clone git@github.com:Suvink/volunteer-me.git
cd volunteer-me
```

2. Install dependencies

```bash
npm install
```

3. Setup Firebase Project

Goto your <a href="">Firebase Console </a>and create a new project in Firebase Console. Then register a new web app.
Copy the **config data** from the config file which will look like this.
```
apiKey: "firebase-api-key",
authDomain: "firebase-auth-domain",
databaseURL: "firebase-db-url",
projectId: "firebase-project-id",
storageBucket: "firebase-storage-bucket",
messagingSenderId: "firebase-messaging-id",
appId: "firebase-app-id"
```

4. Setup Firebase Configuration

Rename the `src/sample.env.txt` file into `.env` and add your previously copied Firebase configuration details there. (Replace the `######` marks with relevant details.)

5. Setup Firebase Realtime Database

Goto `Database` section in your Firebase Console and create a **Realtime Database**. Import `database.json` file in the `src` folder into Firebase Database. It will create dummy data for you to test.

6. Run the project 

```bash
npm run serve
```

7. Setup the backend.
You can find the source code and setup guide for the backend <a href="https://github.com/Suvink/volunteerme-functions">here</a>


**That's it!**


## Contributing

This project is open source and welcomes contributions. 

[Visit the project on GitHub](https://github.com/Suvink/volunteer-me)

## License

[MIT](http://www.opensource.org/licenses/mit-license.html)

## Disclaimer

No warranty expressed or implied. Software is as is.
