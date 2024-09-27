# Description 
This is a program used by FRC team 7034 2BDetermined to do scouting during competition matches. 

# How it works

The program runs off of Vue.JS, which is similar to Nextjs or Reactjs, but instead of JavaScript, it runs off of TypeScript. 
To make the program run offline without internet, since most venues try to minimize the number of wifi signals there are, the program will cache the configuration files in the browser's local storage under the key "`qrScout`", but if you make any modifications to the config file on the server end, such as you modify the config.json and the website gets updated, any device that has previously loaded the old configuration files won't be able to get that new change until they go into settings and press the "`Update and Reset Config`" button in the settings. 

But in the case that someone messes the configuration file up before a competition, like maybe a section is off or isn't what you want, then inside the settings of the website, there'll be a button that says "`Edit Config`", and that'll load the config cached in your browser's storage, and you can modify the values of each section and save, and the website will update it accordingly. The caveat of the editor is that it'll only display the changes on _your__ device, not everyone else's. So in the case that you're at the competition venue, you can download your new and modified config file to your device, and share it with the scouters to upload it to their version of the scouting program. 



## Directory Breakdowns

When looking at the directory, it might be a little overwhelming as there are just a ton of files, but a good majority of the files are just website configuration files or classes that you don't need to change or modify, unless you do need to.
When modifying the website, there are only 2 folders to look at, the **src** folder and the **config** folder, inside the src folder there'll be more subdirectories, and depending on what you want to change, such as changing how the commit and reset buttons work, there'll be a folder called `CommitAndResetSection`





# Womp Womp 

> [scouting.wlhsfrc.com](https://scouting.wlhsfrc.com)
