const listOfUsers = new Map([["whatislife@example.com" , "yayjs"]]);

//create class (email, password, password confirmation)
class User{
    constructor(email, password, confirmPassword) {
        this.email = email;
        this.password = password;
        this.confirmPassword = confirmPassword;
        this.signedIn = false;
    }
    //Add into library
    signUp(){
        //If email is not inside library
        if(!listOfUsers.has(this.email)){
            //Check for correct Passwords
            if(this.confirmPassword === this.password){
                listOfUsers.set(this.email, this.password);
                console.log("Account successfully added");
            }
            //Unmatching Passwords
            else{
                console.log("Sorry, your passwords do not match");
            }
        }
        //if email is inside library
        else{
            console.log("Sorry, This username is taken. Please Try anudda 1.");
        }
    }

    //Check to see if in datebase, return authentication result
    signIn(){
        //Check the password and email
        if(listOfUsers.has(this.email) && (this.password === listOfUsers.get(this.email))) {
            console.log("Successful Sign In");
            this.signedIn = true;
        }
        else {
            console.log("Failed to Sign in. Please try again.");
        }
        return this.signedIn;
    }

    //Set auth to false, set things to null.
    signOut() {
        if (this.signedIn) {
            this.signedIn == false;
            console.log("Successfully logged out");
        }
        else {
            console.log("Failed to Logout ");
        }
    }

    //verify password to site, then set value to new pass
    changePassword(prePass, newPass) { 
        if(prePass === listOfUsers.get(this.email)){
            this.password = newPass;
            console.log("Successful Password Change")
        }
        else{
            console.log("Your password does not match our records.");
        }
    }
}

function main(){
    const Bob = new User("whatislife@example.com", "blah", "yayjs");
    Bob.signUp();
    Bob.signIn();
    Bob.signOut();
    Bob.changePassword("yayyjs","talentpath");

}

main();