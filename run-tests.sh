#!/bin/bash

Echo() {
  TS=`date +%Y%m%d-%H:%M:%S`
  echo "### [$TS] $@"
}

Echo "Starting execution"

Echo "Current folder: `pwd`"

### cleanup screenshots folder
export SCREENSHOTSFOLDER=$PWD/screenshots
rm -rf "$SCREENSHOTSFOLDER"

### device udid
if [ -z ${UDID} ] ; then
  export UDID=${IOS_UDID}
fi
echo "UDID is ${UDID}"

### install applesimutils
#Echo "Starting install of applesimutils"
#brew tap wix/brew
#brew install applesimutils
#Echo "Completed install of applesimutils"

### version checks
Echo "node version: `node --version`"
Echo "npm  version: `npm -version`"
#Echo "watchman version: `watchman --version`"
Echo "yarn version: `yarn -v`"
Echo "xcpretty version: `xcpretty --version`"

### install npm packages
Echo "Starting npm install"
npm install
Echo "Completed npm install"

### add local npm bin to path
export PATH=$PATH:$PWD/node_modules/.bin

### start detox build
Echo "Starting detox build"
#detox build -c ios.sim.debug
#react-native run-ios
npm run detox:ios:build:debug 2>&1 | tee detox-build.log
Echo "Completed detox build"

### start detox test
Echo "Starting detox build test"
#detox test -c ios.sim.debug --loglevel verbose --record-videos all  > detox.log 2>&1
#npm run detox:ios > detox.log 2>&1
npm run detox:ios:test:debug -- -a $SCREENSHOTSFOLDER 2>&1 | tee detox.log
scriptExitStatus=$?
Echo "Completed detox test, exit status: '${scriptExitStatus}'"

### export logs
Echo "Current folder [`pwd`] contents [Post Run]"
ls -ltra

Echo "detox-build-log"
cat detox-build.log

Echo "detox-test-log"
cat detox.log

Echo "detox-server-log"
cat detox-server.log

mv ./*.xml TEST-all.xml
#mv artifacts $SCREENSHOTSFOLDER

exit $scriptExitStatus
