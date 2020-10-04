<a  href="https://www.services.suvink.me/volunteer-me">
<center>
<img src="https://volunteerme.netlify.app/img/logo-full.d473237c.png">
</center>
</a>
 
# VolunteerME: All volunteering in one place!

[![Vue version](https://img.shields.io/badge/Vue-v2-brightgreen)]()
[![Vue version](https://img.shields.io/badge/Licence-MIT-orange)]()
[![Netlify Status](https://api.netlify.com/api/v1/badges/b7c67fbb-f660-4922-80bd-85cc4843d46a/deploy-status)](https://app.netlify.com/sites/volunteerme/deploys)

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


### Requirements

- [Vue.js](https://vuejs.org/v2/guide/installation.html)
- A Firebase account - [sign up](https://console.firebase.google.com/)


### Local development

After the above requirements have been met: 
<br><br>

<b>1. Clone this repository and `cd` into it</b>

```bash
git clone https://github.com/Suvink/volunteer-me.git
cd volunteer-me
```
<br>

<b>2. Install dependencies</b>

```bash
npm install
```
<br>

<b>3. Setup Firebase Project</b>

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
<br>

<b>4. Setup Firebase Configuration</b>

Rename the `sample.env.txt` file into `.env` and add your previously copied Firebase configuration details there. (Replace the `######` marks with relevant details.)
<br>
**Note: Leave the `VUE_APP_BACKENDURL` as it is for now. It will be configured later.**
<br>
<br>

<b>5. Setup Firebase Realtime Database</b>

Goto `Database` section in your Firebase Console and create a **Realtime Database**. Import `database.json` file in the `src` folder into Firebase Database. It will create dummy data for you to test.
<br>
<br>

<b>6. Setup the backend.</b>
<br>
You can find the source code and setup guide for the backend <a href="https://github.com/Suvink/volunteerme-functions">here</a>
<br>
<br>

<b>7. Run the project </b>

```bash
npm run serve
```
<br>



## Contributing

This project is open source and welcomes contributions. 

[Visit the project on GitHub](https://github.com/Suvink/volunteer-me)

## License

[MIT](http://www.opensource.org/licenses/mit-license.html)

## Disclaimer

No warranty expressed or implied. Software is as is.
