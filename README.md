budget.js
===========
A NodeJS application to create and check your budget throughout a budget cycle against your actuals.

## General Overview

**`budget.js`** is an express website on [Node.js](https://nodejs.org/) and mySQL datastore.

Dependenancies:

    "assert-plus": "^1.0.0",
    "azure-ad-jwt": "^1.0.0",
    "azure-graphapi": "^0.1.0",
    "bcrypt-nodejs": "0.0.3",
    "body-parser": "^1.17.2",
    "bunyan": "^1.8.12",
    "chart.js": "^2.7.0",
    "cookie-parser": "^1.4.3",
    "debug": "~2.6.3",
    "dotenv": "^4.0.0",
    "ejs": "^2.5.7",
    "ejs-locals": "^1.0.2",
    "express": "^4.15.4",
    "express-session": "^1.15.5",
    "hbs": "~4.0.1",
    "jQuery.print": "^1.5.1",
    "jsonwebtoken": "^8.0.1",
    "mathjs": "^3.16.3",
    "mongoose": "^4.11.9",
    "morgan": "~1.8.1",
    "mysql2": "^1.4.2",
    "passport": "^0.4.0",
    "passport-azure-ad": "^3.0.8",
    "passport-http": "^0.3.0",
    "passport-http-bearer": "^1.0.1",
    "passport-local": "^1.0.0",
    "passport-oauth2-client-password": "^0.1.2",
    "passport-oauth2-password-grant": "0.0.4",
    "passport-saml": "^0.15.0",
    "restify": "^5.2.0",
    "sequelize": "^4.8.0",
    "serve-favicon": "~2.4.2",
    "webfinger": "^0.4.2"

Change Log:
	v. 0.1 - Deployed to Heroku
	v. 0.2 - Added in the sum functionality of the pie chart

Testing:

Deployment Locally:

starting `node ./bin/www budget`


Known Bugs:
-Submit doesn't redirect and enter doesn't submit values

**must create categories prior to adding lineitems**

## [Documentation](#documentation)
<a name="documentation"></a>

### Installation
<a name="installation"></a>

``` shell
npm install
```

### Run
<a name="run"></a>

``` shell
node  bamazon
```





Budgeting tool for Prosperity Now

Current Limitations:
-One department
-Budget forecasting only

Proposed Features:
-Archiving
-Multiple Departments
-Multiple Orgs
-Reporting

SQL Fields:
	-*Organization
	-*Department
	-Budget Cycle Start Date
	-Category
	-rolled up cost
	-SubCategory
	-rolled up cost
	-Line item
	-rolled up cost
	-Cost release
	-Date Added

System Admin edits only

End user will be able to do the follow to fields:
-Add
-Delete
-Edit
~Archive

Viewing Selections:
-Org -> line item
-PDF download
-Pie charts

As this application is built and become more robust this readme will be updated to notate those changes.




A store with command line interface store w/ a connected SQL Database

## Table of Contents

  1. [Documentation](#documentation)
    1. [Installation](#installation)
    2. [Run](#run)
    3. [Examples](#examples)

