// Initialize local git repo
/git init/

//Config git infos
/git config --global user.name "Bienvenu Massamba"/
/git config --global user.email "boukamass@gmail.com"/

//Add files to the local staging area
/git add index.html/

//Add any html files to the staging area
/git add *.html/

// Add everything 
/git add ./ 

//Check what is already in the staging area
/git status/

//remove files from the staging area
/git rm --cached index.html/

// Remove any html files from the staging area
/git rm --cached *.html/

//COMMIT CHANGES
/git commit/
/Esc :wq/

//COMMIT CHANGES BETTER
/git commit -m "message"/


// IGNORING SOME FILES
// 1. create a file name .gitignore
// 2. in the .gitignore file add names of files to be ignored with extensions

//ignoring some files

//ADDING ENTIRE DIRECTORIES
/git add./
/git commit -m "message"/

// BRANCHES
// 1. Create a branch
/git branch branch_name/