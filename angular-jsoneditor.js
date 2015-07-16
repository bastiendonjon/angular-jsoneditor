/*
 * angular-jsoneditor 1.0.0
 * (c) 2014 Bastien Donjon http://bastien-donjon.fr
 * License: MIT
 */

(function (window, angular) {

    'use strict';

    angular.module('ngJsonEditor', [])

        .directive('jsoneditor', directive);

    /**
     * @returns {}
     */
    function directive() {
        return {
            scope: {
                options: '=',
                json: '='
            },
            restrict: 'E',
            transclude: false,
            link: function (scope, element) {
                var editor = null, defaultOptions = {
                        mode: 'form',
                        editable: false
                    },
                    options = angular.extend(defaultOptions, scope.options);

                if(typeof(scope.options.change) === 'function'){
                    options.change = function(){
                        if(editor !== null){
                            scope.options.change(editor.getText());
                        }
                    }
                }

                editor = new JSONEditor(element[0], options, scope.json);

                scope.$watch(
                    'json',
                    function (newValue, oldValue) {
                        editor.set(newValue);
                    }
                );
            }
        };
    };

})(window, angular);
