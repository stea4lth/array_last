/**
 * 	 Custom Functions
 *************************************/
/**
 * Get last elem of array - arr.last();
 * @param  - none
 * @return - last array element
 */
if (!Array.prototype.last){
    Array.prototype.last = function(){
        return this[this.length - 1];
    };
};
