# Editorialist React & Node Hiring Test

Make a full stack feedback widget ( widget, dashboard and api ) as per the requirements.

## Features

### Widget ( React as webcomponent )

* Repo link : https://github.com/theStonedSage/feedback-widget-ui
* Live link : https://thestonedsage.github.io/feedback-widget-ui

* deployment_platform : github pages

1. Easy to embed dynamic widget ( see how to embed below ).
2. User authentication via firebase auth ( skipable )
3. Integrate by just adding the scripts and embed the webcomponent tag `<feedback-widget />` anywhere to use it.
4. All the questions are dynamically comming from backend and are shown via a custom DynamicInputGenerator component based on input type
5. Support for text, mcq, boolean and number questions

### Dashboard ( React )

* Repo link : https://github.com/theStonedSage/feedback-widget-dashboard-ui
* Live link : https://feedback-dashboard.netlify.app/

* deployment_platform : netlify 

Login creds
* email : admin@admin.com
* password : admin123

1. admin authentication via firebase auth
2. protected routes so only logged in users can access the dashboard.
3. Real time updates on new feedbacks submitted using firebase.
4. Easy modal UI to update and create questions.
5. Easily Review the feedback in one place
6. React query cache to prevent repetative calls.
7. custom hooks to optimize performance and avoid cluttering.

### Backend ( Node.js )

* Repo link : https://github.com/theStonedSage/feedback-widget-api
* Live link : https://feedback-widget-apiv1-a2e788fc5304.herokuapp.com/

* deployment_platform : heroku 

* database : firestore

1. adonisjs framework to make things structured
2. 2 Collections created
   1. Feedback : store feedback responses from users
   2. Questions : store questions to be shown on widget feedback form.
3. Added crud for both the collections

## How to embed Widget

Easily use the widget anywhere using the webcomponent tag `<feedback-widget />` and 2 script tags

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    
    <script src="https://unpkg.com/@tailwindcss/browser@4"></script>
    <script defer="defer" src="https://thestonedsage.github.io/feedback-widget-ui/static/js/main.1525cdc9.js"></script>

</head>
<body>
    <feedback-widget />
</body>
</html>
```

## Conclusion

Please reach out to amitbhattacharjee@gmail.com in case any service/app goes down during testing. The above app fulfils all the base test requirements. The Ux/Ui and backend could have been improved a lot with more time.




