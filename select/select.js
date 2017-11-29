/// <reference path="../typings/index.d.ts" />
/// <reference path="../typings/global.d.ts" />

Polymer({
    is: 'kul-select',
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

    _isCheckbox: function(){
        return (this.model.type === 'checkbox') ? true : false
    },

    _isRadio: function(){
        return (this.model.type === 'radio') ? true : false
    },

    _isDropdown: function(){
        return (this.model.type === 'dropdown') ? true : false
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