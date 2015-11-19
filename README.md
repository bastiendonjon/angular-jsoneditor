angular-jsoneditor
==================

JSON Editor module for AngularJS

# JSON Editor
https://github.com/josdejong/jsoneditor
http://jsoneditoronline.org/

# AngularJS JSON Editor
Github: https://github.com/bastiendonjon/angular-jsoneditor

### Description of JSON Editor

JSON Editor is a web-based tool to view, edit, and format JSON.
It has various modes such as a tree editor, a code editor, and a plain text
editor.

The editor can be used as a component in your own web application. The library
can be loaded as CommonJS module, AMD module, or as a regular javascript file.

Supported browsers: Chrome, Firefox, Safari, Opera, Internet Explorer 9+.

<img alt="json editor" src="https://raw.github.com/josdejong/jsoneditor/master/misc/jsoneditor.png">

### Documentation of JSON Editor

  [API](https://github.com/josdejong/jsoneditor/tree/master/docs/api.md)

### Install AngularJS Module

with npm:

    npm install jsoneditor

with bower:

    bower install angular-jsoneditor
    
### Usage (directive)

Add `ngJsonEditor` to your app’s module dependencies.

    angular
      .module('yourApp', [
        'ngJsonEditor'
      ]);
      
as element

    <jsoneditor options="jsoneditorOptions" json="json"></jsoneditor>
    
in controller

    $scope.json = {
      "products": [{
        "_id": 1,
        "label": "product1"
      }, {
        "_id": 2,
        "label": "product2"
      }]
    };
    
    --optional--
    $scope.jsoneditorOptions = {
      "name": 'Products'
    };

### API

[Full options](https://github.com/josdejong/jsoneditor/blob/master/docs/api.md).

*Forked Options:*
- `{function} change`  
    Set a callback method triggered when the contents of the JSONEditor change. Called with parameter. Will only be triggered on changes made by the user, not in case of programmatic changes via the functions `set` or `setText`.
    Parameter return new json value.
