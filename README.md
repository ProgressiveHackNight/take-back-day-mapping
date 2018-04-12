<!--- Keep everything below and click 'Submit new issue'  --->

# Latest News

* [Master Plan](https://github.com/ProgressiveHackNight/take-back-day-mapping/wiki/Feb-27-Planning----Feature-Decisions-&-User-Stories) (As of Feb 27)

# Setup

* Clone project

(If you don't have brew) --

* run `ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`

* run `install brew`

(Once you have brew) --

* run `brew install yarn`

* run `yarn`

### Run the app
* run `yarn start`

### Run tests
* run `yarn test `

### Troubleshooting: 
* If install or start doesn't work, try running `yarn add react-scripts`
* If tests get an error that looks like `Error: Error watching file for changes: EMFILE` run `brew install watchman`
* If the app won't compile, and you get an error in compose about not being able to run apply of undefined, try installing react dev tools in chrome

## Updating the Version used in the Microsite
* This map is used in the microsite, which is its own app (https://github.com/cgalbiati/take-back-day-microsite).
* The microiste app imports the map and uses it as a react component by installing directly from git (https://stackoverflow.com/questions/23210437/npm-install-private-github-repositories-by-dependency-in-package-json).
* In order to be used as a library, this app must be built.
 ### To update:
 * In the publish branch in this directory:
  * Rebase in the current develop branch `git rebase -i develop`
  * Delete the lib folder (this seems to be necessary in order to not break styling - not sure why)
  * Build the library `yarn export`
  * Commit your changes and push to origin (still on the publish branch - don't push to develop)
 * Find your most recent commit hash on the publish branch (either through git log or by looking on github ( https://github.com/ProgressiveHackNight/take-back-day-mapping/tree/publish)
 * Follow instrcutions in the other repo to update the dependency on that app to point to your updated map version

# Process
* Tasks to do are kept in a trello board: https://trello.com/b/vvN1NJTB/take-back-map
* If you take a task, move it to the 'In Development' collumn and assign it to yourself
  * If you feel a task can be broken into several smaller tasks, feel free to break it up
* Preference small pull requests - is there a way you can do part of the task and merge that in without breaking the app?
* After you push a branch to github, it will build a preview of your app to netlify (you can find a link in your branch/pull request)
* Please add tests, and run the tests and the app before merging
* Please add screenshots of the app to your pull request
* On merge to master, the new version of the app will build to https://take-back-mapping.netlify.com/

# Take Back Day Events Map

There are two nation-wide Take Back Days held annually. This is a time for people to take their unused and unneeded prescription drugs to designated sites for free and environmentally-friendly disposal.  

One barrier to participating is that it is unclear where Take Back sites are. The DEA publishes a set of sites close to the actual Take Back Day, but some pharmacies like CVS and Walgreens also participate in this event. Users have to navigate to multiple sites to get a full view of 

### Who will benefit (directly and indirectly) from this project?

Government stands to benefit as they are running these Take Back Days. Constituents benefit by having clearer information on where they can take their prescription drugs for free and proper disposal in a "no questions asked" kind of way.

### Where can we find any research/data available/articles?

The New York Attorney General's office has provided publicly available data [here](https://github.com/NYAG/Takeback_Day_Hackathon).

### What help is needed at this time?

#### Designers
We need design for the UI that accepts a zip code, and then renders a map. It'd also be useful to know what information would be the most helpful to display to a user to help them get to where they need to go.

#### Developers

##### Frontend
We need an embeddable service that can be added to different webpages that accepts a NY State zip code and then renders a map. We need to find a mapping service that will work with our set of take back sites.

##### Backend
We need to build an API endpoint that the frontend can hit to retrieve a list of Take Back locations that are close to a zip code. This will likely involve us hitting a 3rd party endpoint for distance estimations based on zip code. The data for Take Back sites is unclear and doesn't all follow one schema, so take that into account when thinking through how to build this.

#### Creatives
We need copy for the zip code input field and an idea of what information should be returned to a user for a give Take Back site.

#### Data
The information regarding the locations of take back sites is hard to manage. It exists across multiple websites/spreadsheets, and it isn't the same year to year. We need a way to be sure that data is fresh and complete (freshness is preferred over completeness though).

### What are the next steps (validation, research, coding, design)?
We need research for the best mapping platform to use to power most of this, and we need basic architectural discussions of how this service should work.

### How can we contact you outside of Github(list social media or places you're present)?
_Add your name [here](https://github.com/ProgressiveHackNight/project-ideas/issues/9) if you plan to stay on with this project through the March 11 HackDay!_

### Contributors
This is all based on the presentation and planning from the following people! They presented at the Pre-HackDay!

* Daniel Spencer (full stack dev) - daniel.patrick.spencer (at) gmail.com
* Carlos Merced (front end dev) - mail.merced (at) gmail.com
* Annie Hirshman (designer) - anniehirshman (at) gmail.com
* Anna de Paula Hanika (product) - annadph (at) gmail.com
* Daeha Ko (IT) - daehako (at) gmail.com
* Ritika Madan (Designer) - ritika.madan (at) gmail.com
* Olivia McGill (project manager) - oliviam09 (at) gmail.com
* Alex Hays (Dev) - alexhays (at) gmail.com
* Chandra Thomas - chandra.galbiati (at) gmail.com
* Meka Seymour - mekaseymour (at) gmail.com
* Rapi Castillo - rapi.castillo (at) gmail.com

----
If you get stuck at any point, feel free to reach out to the leadership team with an email to steering@progressivehacknight.org or come find an organizer at a HackNight. We're here to help bring great ideas to life!
