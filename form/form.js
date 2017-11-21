/// <reference path="../typings/index.d.ts" />
/// <reference path="../typings/global.d.ts" />

Polymer({
    is: 'kul-form',
    properties: {
        id: {
            type: String
        },
        model: {
            type: Object,
            observe: true,
            notify: true
        }
    },

    /**
     * 
     */
    ready: function () {},

    /**
     * 
     */
    setFocus: function (event) {
        if (event)
            event.stopPropagation()
        // @ts-ignore
        utils.setFocus(this.$.element, document.getElementById('canvas'))
    }

});