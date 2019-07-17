# test

Salutaris: Project 2 UCF Coding Bootcamp 

07/13/2019 

M.E. Villarreal Logic Guide: 

In this logic guide I will attempt to create a journal where I can document all the tasks I’ve completed and keep a log of reasoning behind the implementations I’ve committed from day to day. 

July 13, 2019: 

Created Local Database: 

I created the local database today. It is held in my localhost connection. I will soon have to find time to study database migrations. The other’s working on the backend of the project need to be able to work from the exact same database. Getting this done might take priority over creating tables, or I might ask the other backend developer to hold off until I’ve migrated the database along with the tables. 

Created User Tables in Database: 

So far, I have a rough outline of the user tables: 

User Base: This table will require validation for each line to ensure that the user is unable to enter an invalid value 

UID 

INT NOT NULL PRIMARY KEY AUTO_INCREMENT 

Last_name 

VARCHAR(255) NOT NULL 

First_name 

VARCHAR(255) NOT NULL 

ZIP 

INT NOT NULL 

Created_at 

CURRENT_TIMESTAMP 

 

User Login: This table will require 3 foreign keys; I must study the concept of foreign keys further in order to fully understand if my implementation of the foreign keys. I need to see if it will work and figure out a way to test out the implementation to confirm my logic. 

 

Login_id 

INT NOT NULL PRIMARY KEY AUTO_INCREMENT 

User_name 

VARCHAR(255) NOT NULL 

Password 

Password (STUDY THIS) 

Base_id 

Foreign key that ties to base customer data 

Health_id 

Foreign key that ties to user health data 

Score_id 

Foreign key that ties to user score data 

 

 

User Health: This table will hold the most sensitive data and therefore must be protected and isolated. It also so holds the most profitable data since it will have important and valuable demographic data. Also this table will be used to hold the information that our algorithm will use to calculate user scores. User self honesty is key here. They should be reminded somehow that their identity will not be attached to this data and sold. 

 

User_health_id 

INT NOT NULL AUTO_INCREMENT PRIMARY KEY 

Smoke(Y/N) 

BOOL DEFAULT FALSE 

Drinks (Per week) 

INT (VALIDATE 10+ GETS COUNTED THE SAME) 

Weight (Validate, convert from lbs to kg) 

INT (able to contain decimals up to two places) 

 

Daily caloric intake 

INT (estimates are fine, should provide examples so its easier to estimate) 

Exercise (Minutes per week) 

INT (estimates are fine, encourage people to be honest with themselves) 

Mood 

VARCHAR(255) (Although a string, validation will come through ensuring it is not left blank and also through a selector which will have only a handful of options) 

Race 

VARCHAR(255) (Selector with options for the most common racial groups in the US) 

Gender 

DataTypes.STRING 

Height  

This is going to be a selector that has feet and inches, but converts the input into meters 

BMI 

This will be calculated from the height and weight information 

With the following formula 

(weight(kg)/height(m)^2) 

 

User Scores: This perhaps will be the most challenging table to complete, this table will house an id for the user score, it will also house probability values that range from 0 – 1 with up to 3 decimal places. These will be calculated based on an algorithm that will take in the user health data and provide values that show how risk the user is taking on with their habits when extrapolated over decades. 

User_score_id 

INT NOT NULL AUTO_INCREMENT 

Heart_risk 

INT NOT NULL (must be 0-1 for statistical probability analysis) 

Liver_risk 

INT NOT NULL (must be 0-1 for statistical probability analysis) 

Kidney_risk 

INT NOT NULL (must be 0-1 for statistical probability analysis) 

Diabetes_risk 

INT NOT NULL (must be 0-1 for statistical probability analysis) 

Cancer_risk 

INT NOT NULL (must be 0-1 for statistical probability analysis) 

Stroke_risk 

INT NOT NULL (must be 0-1 for statistical probability analysis) 

Health_score 

INT NOT NULL (This value sits at the core of functionality for the app, it must be dynamically created after the other risk probability ratings have been analyzed and compounded) 

Relevant CDC data-id 

Foreign key to tie the CDC dataset results to our user’s health data 

 

July 15, 2019 

Enterprise Data (candidate for ICEBOX, Priority: LOW) 

The Enterprise data will hold information for different investments that companies make into our companies, it should hold a record of their identity and login, for corporate accounts, as well as financial data to track what services they’re paying for 

Enterprise Login 

Enterprise ID (EID) 

Primary key 

Company Name 

String with verification 

 

Company Email 

Verified with isEmail: true; 

Company Password 

Verified with strong password regex verifier 

 

 

 

 

Enterprise Financial Data: 

Enterprise Financial ID 

Primary key 

Created At 

Timestamp 

adSpace (whether they’ve purchased ads or not) 

Boolean 

adChoice (which ad package they’ve purchased with options of 1000 2000 and 3000 dollars a month) 

Type: string, but the company would purchase through a selector 

 

dataPurchased (a Boolean values that tracks whether that company has purchased data) 

Boolean 

 

datatype (integer that keeps track of how many packages of 1000 users the company has purchased, ideally the company would enter a zip code and purchase data from users matching said zip codes 

Integer 

Foreign key tying back to enterprise login info 

Ties back to EID 

 

Enterprise Purchases: Ideally this table will hold the revenue totals for a specific company with a foreign key that ties into the enterprise financial data 

PID 

Primary Key 

Created at 

Timestamp 

adTotal (total revenue from purchased ads) 

Decimal money integer 

DataTotal(total revenue from purchased data) 

Decimal 

RevenueTotal (total revenue from all purchases) 

Decimal 

FinanceID (foreign key) 

Model: enterpriseInvoice 

Key: EFID 

 

 

Health Data: 

The health data will be using a couple of datasets. These data will be used create a reactive comparison that will match user data to the obtained data in these datasets in order to provide a risk assessment. 

The first dataset comes from the BRFSS – an ongoing telephone health survey system 

The second dataset comes from the NHIS – which tracks disease and risk factor prevalence  

The third dataset comes from GCNKSS – a stroke incidence tracker that shows outcomes within a biracial population 

The final dataset comes from the YRBSS which tracks health-risk behaviors in youth and young adults 