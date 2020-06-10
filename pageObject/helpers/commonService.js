/*
     reusable common methods    
*/
module.exports = {

    /*
        returns a random string
    */
    getRandomString: () => {
        return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    },

    /*
        pauses execution based on passed argument (milliseconds)
    */
    delay: (time) => {
        return new Promise(function(resolve) {
            setTimeout(resolve, time)
        });
    }

}