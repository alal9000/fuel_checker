# Introduction:
Hi, This application will discover your current geo-location and return the cheapeast fuel within a 2km radius within NSW, Sydney. This readme document is split into 7 sections, each of which explain the application in greater detail. Feel free to jump forward to any particular section in which you are interested. 

## 0. Project Title:
Fuel Checker

## 1. Project Description: 
This application does exactly what is says on the box, it is a fuel price checker! With the cost of living so extraordinary high these days, especially energy and fuel, I wanted to create an application that would save the user money when they decided to fill up their tank. With fuel stations changing their prices daily, it is near impossible to ascertain where the cheapest location to fill up is. You can't really drive around to find the cheapest stations as that would waste fuel. Thats where the fuel check application comes in. By utilizing technology and the power of APIs it is able to return real time fuel data to the user including; price, address and station name within a radius that is specified (currently configured to within 2km of their current location). This then will enable the user to check the fuel prices for ALL stations within their current geographical vicinity for 91 unleaded fuel, within the state of NSW.

## 2. How to Run the Application:

### Create a Security Access Token
The application requires an API security token to be generated from the NSW fuel API prior to use. The secuirty token is in the form of a string (such as Hytksdhys75fdnbnmdskhj#2) and is only valid for 24 hours. Due to this by the time my capstone project is submitted and assessed the last security token used would likely be invalid, for this reason the user would need to navigate to https://api.nsw.gov.au/Account/Register and sign up for an account. Once an account has been created they would need to click on the 'add new app' link on the right hand sidebar. Add a title, description and select the API product of 'Fuel API' in the proceeding list. Once an app has been created, navigate into the apps main page and click 'try this api'. This will bring up the page with all the endpoints associated with this api. Click on the arrow next to the first one 'security' so its pointing down then click on the 'Try it out' button. Fill out the description of the first parameter 'grant_type' with the string 'client_credentials'. Then fill out the second get parameter 'Authorization' with the Authorization Header value on the main page of your app. This should be the string starting with 'Basic' and ending with two equal signs. Once the two fields are filled out then hit the 'Execute' button. The API should return a JSON object with a 200 response code. Navigate to the key "access_token" and copy and save the value there. This is your newly created access token to be used with the fuel API.

### Add the Security Access Token to the code
Once the new access token has been created the next step is to add it to the code. In the root directory of the app there is a folder called static and within that a file called script.js. Open this file and on line 41 you will see an old access token prefixed with "Bearer" under the "authorization" key. Replace the old access token with the new one leaving the "Bearer" prefix there. Save the file and thats it, your ready to use the api.


## 3. How to Use the Application:

In your terminal navigate to the root folder of the fuel_checker aplication. Start the development server by running python manage.py runserver. Once the server is running register for an account by clicking register in the nav (there is no strict validation rules). Once a new account is registered go to 'Map' in the nav. Your browser may ask you to share location data, click yes and it will create and set a new pin for your current location and also a flag for the gas station with the lowest price of 91 unleaded fuel within 2km of your current location (must be in state of NSW). The title on the flag will be the name of the gas station and if you hover over, it will show the price per litre. Congrates you now know how to use the fuel_checker application and never have to overpay for gas again!

## 4. Distinctiveness and Complexity:

### Distinctivness
This application is 100% my own code and done completely on my own without any help from others. It is completely different to any other projects done in this course or past courses. I have not used any past projects as a template for this application. This can seen by just inspecting the code, you will see all the code is 100% original with techniques and conventions I have come up with on my own.

### Complexity

This application is mobile responsive and makes use of at least one model in the Django backend. It is sufficiently complex because it makes use of two seperate external APIs. The first is the google maps API. This api provides the actual map user interface where the pin is dropped for the location of the user and the flag that is displayed for the fuel station that is returned from the second API which is the NSW fuel API. This API is responsible for returning in JSON format all the fuel stations and their prices for 91 unleaded fuel within 2km of the current location of the user in NSW. This applicaton is the result of an amalgam of various web technologies such as html, css, javascript, python, django, bootstrap, jQuery.


## 5. File Structure and Contents:

The main project fuel checker has within it three seperate apps which all performs seperate functions:

### Map: 

This app provides the main map functionality which makes a call to the google maps API and the NSW fuel API and shows the users location along with the station with the cheapest fuel within 2km.

### Tracker: 

This app is like a diary of fuel purchases so you can keep track of the prices of the various fuel stations you visit. This app makes it easier to keep track of how much the fuel price is changing overall and how the prices of the individual stations are changing.

### Users: 

This app provides the user authentication system such as register, login, logout and the user home page.

## 6. Supplementary Infomation:

There is no extensive third party packages required to run the application. All you need is django installed and you can run the application as per the requirements.txt file. A jQuery package is included with the project.

# Conclusion:

I have already been using the application in my daily life to fill up, I already have saved a lot of money with the fuel check app! I hope you like my project and thank you.


