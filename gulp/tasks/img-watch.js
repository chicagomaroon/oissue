const gulp = require('gulp');
const watch = require('gulp-watch');

module.exports = () => {
  // run the task once on start
  gulp.start('img');

  return watch('./src/images/**/*.@(jpg|jpeg|png)', () => {
    gulp.start('img');
  });
};
