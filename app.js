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

//BRANCHES
// 1. create a new branch
/git branch [branch-name]/

// 2. Switch to a brach 
/git checkout  [branch-name]/

// 3. Delete the specified branch
/git branch -d  [branch-name]/

// 4. find out which branch
/git branh/

//5. See all local and remote branches
/git branch -a/ 

// 6. see remote branch
/git branch -r/

// 7. switch to Master or main branch
/git checkout main/

// 8. Combine specified branch to current
// a. first commit current changes
// a. second switch to main or master branch
// b. third merge to the main branch the other branches
// c. merge branch to master 
/git merge [branch-name]/

// REMOTE REPOSITORIES
//Check remote repositories
/ git remote/


// clone a github repository
/git clone https://github.com/Massamba-Bienvenu/git-tutorial.git/

// push your Git branch to the remote repository
/git add ./
/git commit -m "push branch"/

 //If its your first push
/git push -u origin BRANCH/

 //Otherwise
/git push origin BRANCH/

//push all branches to remote
/git push REMOTE '*:*'/
/git push REMOTE --all/
