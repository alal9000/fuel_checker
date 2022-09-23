# Introduction:
Hi, my name is Aaron Lal from Sydney, Australia and I am proud to be submitting my cs50w capstone project called "Fuel Checker". This readme document is split into 7 sections, each of which explain the application in greater detail. Feel free to jump forward to any particular section in which you are interested. 

## 0. Project Title:
Fuel Checker

## 1. Project Description: 
This application does exactly what is says on the box, it is a fuel price checker! With the cost of living so extraordinary high these days, especially energy and fuel, I wanted to create an application that would save the user money when they decided to fill up their tank. With fuel stations changing their prices daily, it is near impossible to ascertain where the cheapest location to fill up is. You can't really drive around to find the cheapest stations as that would waste fuel. Thats where the fuel checker application comes in. By utilizing technology and the power of APIs it is able to return real time fuel data to the user including; price, address and station name within a radius that is specified (currently configured to within 2km of their current location). This then will enable the user to check the fuel prices for ALL stations within their current geographical vicinity for 91 unleaded fuel.

## 2. How to Run the Application:

### Create a Security Access Token
The application requires an API security token to be generated from the NSW fuel API prior to use. The secuirty token is in the form of a string (such as Hytksdhys75fdnbnmdskhj#2) and is only valid for 48 hours. Due to this by the time my capstone project is submitted and assessed the last security token used would likely be invalid, for this reason the user would need to navigate to https://api.nsw.gov.au/Account/Register and sign up for an account. Once an account has been created they would need to click on the 'add new app' link on the right hand sidebar. Add a title, description and select the API product of 'Fuel API' in the proceeding list. Once an app has been created, navigate into the apps main page and click 'try this api'. This will bring up the page with all the endpoints associated with this api. Click on the arrow next to the first one 'security' so its pointing down then click on the 'Try it out' button. Fill out the description of the first get parameter 'grant_type' with the string 'client_credentials'. Then fill out the second get parameter 'Authorization' with the Authorization Header value on the main page of your app. This should be the string starting with 'Basic' and ending with two equal signs. Once the two fields are filled out then hit the 'Execute' button. The API should return a JSON object with a 200 response code. Navigate to the key "access_token" and copy and save the value there. This is your newly created access token to be used with the fuel API.

### Add the Security Access Token to the code
Once the new access token has been created the next step is to add it to the code. In the root directory of the app there is a folder called static and within that a file called script.js. Open this file and on line 40 you will see an old access token prefixed with "Bearer" under the "authorization" key. Replace the old access token with the new one leaving the "Bearer" prefix there. Save the file and thats it, your ready to use the api.


## 3. How to Use the Application:

Start the development server by running python manage.py runserver. Once the server is running nagivate to the map link on the top navigation. It may ask you to share location data, click yes and it will create and set a new pin for your current location and also a flag for the gas station with the lowest price of 91 unleaded fuel within 2km of your current location. The title on the flag will be the name of the gas station and if you hover over, it will show the price per litre. Congrates you now know how to use the fuel_checker application and never have to overpay for gas again!

## 4. Distinctiveness and Complexity:

This application makes use of two seperate external APIs. The first is google maps API and the second is the NSW fuel API.

## 5. File Structure and Contents:

## 6. Supplementary Infomation:

# Conclusion:


