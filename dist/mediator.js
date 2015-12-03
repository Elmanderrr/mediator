+function () {
    'use strict';

    var Mediator = {
        _version:'1.0.0',
        _observers: [],

        pub: function (evt) {
            var args = [].slice.call(arguments, 0);

            for ( var i = 0; i < this._observers.length; i++ ) {
                var obs = this._observers[i];
                if ( evt === obs.name ) obs.fn.apply(null, args);
            }

        },

        sub: function (evt, fn) {
            this._observers.push({
                name: evt,
                fn: fn
            });
        }

    };

    window.Mediator = Mediator;

}();
