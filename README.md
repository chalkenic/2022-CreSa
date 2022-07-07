# CS Exercise

<div class="boxBorder">

REST API & search interface.

## Usability Assumptions

Application was created with assumption of users having node.js installed locally, with code additionally being written in JavaScript. React client frontend programming architecture assumes use of Chromium - results may vary if another browser chosen. MySQL used for local database handling, and requires a manual schema to be created prior to launching server.

## Installation Assumptions

- Git installed - [Windows Link](https://gitforwindows.org/)
- Node.js installed - [Link](https://nodejs.org/en/download/)

## Code Setup - complete via Command Prompt/Git Bash

### 1. Initial clone from Main branch
```bash
# Clone repository
git clone https://github.com/chalkenic/CS_exercise.git
```

### 2.  Build local version of application using commands below:
###     

```bash
# 1. Navigate into directory folder
cd CS_exercise

# 2. Install modules within parent folder
npm install

# 3. Navigate to mysql instance and run following script:
CREATE SCHEMA IF NOT EXISTS `citydb`;

# 4. Complete further client and server installations
npm run packageInstall

# 5 launch Application and Server: 
npm run start

# Some currency symbols are not supported by base sql character set, so
additional queries will need to be ran after server has been launched:
use citydb;
ALTER TABLE cities CONVERT TO CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

```



### 3. After following commands have been completed, navigate to application:

#### Client: localhost:3000
#### Server: localhost:3001


## Tests

Unit testing exists within the server in order to confirm logic on server side works as intended.
```bash
# navigate to parent folder within terminal
cd CS_exercise

# Launch tests
npm run test

```

</div>
