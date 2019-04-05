# catania.wordcamp.org-2019
Stile del sito ufficiale del WordCamp Catania 2019

## Setup
* Setup VVV for the local environment: https://make.wordpress.org/community/handbook/wordcamp-organizer/first-steps/web-presence/contributing-to-wordcamp-org/setting-up-a-local-wordcamp-org-sandbox/
* Clone repository inside `www/wordpress-meta-environment/wordcamp.test/public_html/wp-content/themes/`
* Go to theme directory
* Run `yarn install`
* Run `yarn build` to build the less
* Enable the theme in the network in: http://wordcamp.test/wp-admin/network/themes.php
* Enable the theme in the wordcamp website in: http://2014.new-site.wordcamp.test/wp-admin/themes.php
* Enjoy!

## Development
* Run `yarn start` to activate the watcher
* Edit the LESS starting from `src/main.less`
