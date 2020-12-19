/**
 * The developer that wrote the code below tried to make it so that it doesn't get into the 'INITIALISING' block twice.
 * 
 * Besides the obvious answer that the initialise function is called twice, explain what is going wrong.
 * Add your explanation as a comment here:
 * 
 *  We are calling  or invoking the function twice, by envoking the funcion (initialise()) and by envoking also the function Settimeout which is calling the function (initialise()) inside it again.
 * 
 * 
 * 
 * Now the developer has asked you how you would solve the problem. As mentioned in the comments they cannot change the time it takes to run the lines.
 * Explain to them what they should do in the comment here:
 * 
 * they should envoke the function once only in the settimeout  or which it will call the function after the 100 ml second. 
 * 
 */

// REMINDER: DO NOT ACTUALLY CHANGE THE CODE BELOW
let alreadyInitialised = false;

const initialise = () => {
    if (alreadyInitialised) {
        console.log('ALREADY INITIALISED');
    } else {
        console.log('INITIALISING');
        setTimeout(() => {
            // Run initialisation code!
            console.log('INITIALISED')
            alreadyInitialised = true;
        }, 1000); // The developer cannot change the 1000 number in the timeout
    }
}

/** The developer cannot change this code! */
initialise();
setTimeout(initialise, 100);