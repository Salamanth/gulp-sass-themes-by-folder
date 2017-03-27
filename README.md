# gulp-sass-themes-by-folder

A freely adapted version of [gulp-sass-themes](https://github.com/bbuhler/gulp-sass-themes).

## Install

```
npm install gulp-sass-themes-by-folder gulp-sass --save-dev
```

## Basic Usage

Source files
```
├── styles
|   └── main.scss
└── themes
    ├── red
    |   └── scss
    |       └── _red.scss
    └── blue
        └── scss
            └── _blue.scss
```

Gulpfile
```javascript
const gulp = require('gulp');
const sass = require('gulp-sass');
const sassThemesByFolder = require('gulp-sass-themes-by-folder');

gulp.task('styles', function() {
    gulp.src('styles/*.scss')
        .pipe(sassThemesByFolder('themes/**/_*.scss'))
        .pipe(sass()).on('error', sass.logError)
        .pipe(gulp.dest('themes'));
});
```

Output
```
├── styles
|   └── main.scss
└── themes
    ├── red
    |   ├── scss
    |   |   └── _red.scss
    |   └── main.css
    └── blue
        ├── scss
        |   └── _red.scss
        └── main.css
```

## Parameters

### themes
Type: `String | Array<String>`
Glob pattern to theme files.

### options

#### cwd
Type: `String`
Current working directory for glob pattern.

#### placeholder
Type: `RegExp`
Regular expression to match and replace placeholder in file. The first parentheses-captured matched result will be replaced with the theme name.
Default is `/^.+\.(scss|sass)$/`.
