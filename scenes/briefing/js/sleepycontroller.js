goog.provide('app.SleepyController');

goog.require('app.Constants');

/**
 *
 * Sleepy controller
 * that allows a sleepy character to sleep or not.
 *
 * @param {Element} context An DOM element which wraps the scene.
 * @constructor
 * @author  14islands (14islands.com)
 */
app.SleepyController = function(context) {
  this.count = 0;
};

/**
 * Initializes the class.
 */
app.SleepyController.prototype.init = function() {
};

/**
 * Prepares to destroy this instance by removing
 * any event listeners and doing additional cleaning up.
 */
app.SleepyController.prototype.destroy = function() {
  this.count = 0;
};

/**
 * Finds out if the elf requesting to sleep can fall asleep
 * based on the limit of elves sleeping at the same time.
 *
 * @return {Boolean} Tru/False if is allowed to fall asleep or not.
 */
app.SleepyController.prototype.canSleep = function() {
  return this.count < app.Constants.SLEEPING_ELVES_LIMIT;
};

/**
 * Counts one more elf just went to sleepy mode.
 */
app.SleepyController.prototype.addSleepy = function() {
  this.count++;
};

/**
 * Substracts one less elf that just woke up.
 */
app.SleepyController.prototype.subtractSleepy = function() {
  this.count--;
};
