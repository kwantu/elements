/// <reference path="../typings/index.d.ts" />
/// <reference path="../typings/global.d.ts" />

Polymer({
    is: 'select-props',
    properties: {
        visible: {
            type: Boolean,
            notify: true,
            value: false,
            observer: '_setVisibility'
        },
        model: {
            type: Object,
            notify: true
        }
    },
    observers: [
        '_updateModel(model.*)'
    ],

    /**
     * 
     */
    _getType: function (event) {
        let selectedItem = e.target.selectedItem;
        if (selectedItem) {
            console.log("selected: " + selectedItem.innerText);
            this.set('model.type', selectedItem.innerText)
        }
    },

    /**
     * 
     */
    addField: function (event) {
        let field = {
            'id': '',
            'label': {
                "i18n": {
                    "en": '',
                    "pt": ''
                }
            },
            'dataType': '',
            'mapping': ''
        }
        this.push('model.fields', field)
    },

    /**
     * 
     */
    removeField: function (event) {
        let item = event.model.item;
        let index = this.model.dataModel.fields.indexOf(item);
        this.splice('model.dataModel.fields', index, 1);
    },

    /**
     * 
     */
    _updateModel: (data) => {
        let appController = document.getElementsByTagName('kul-app')[0]
        if (appController.CURRENT_ELEMENT_TYPE === 'form-props') {
            console.log('EVENT:: "form-props._updateModel" triggered!!', data)
            let element = document.getElementById(data.base.id)
            this.model = _.isUndefined(data.base) ? this.model : data.base
            if (element)
                // Update the element UI
                element.set(data.path, data.value)
            // Update the SDO_VIEWMODEL
            let viewModel = appController.SDO_VIEWMODEL
            let currentVersion = viewModel.component.version[viewModel.component.currentVersion]
            let elements = currentVersion.elements
            // Find the object index in the App elements array
            let index = _.findIndex(elements, {
                id: this.model.id
            })
            // console.log('this.model', this.model)
            // Inset / Update the related item at index using native splice
            if (index !== -1) {
                elements.splice(index, 1, this.model)
            } else {
                elements.push(this.model)
            }
            // Update the SDO_VIEWMODEL
            appController.set('SDO_VIEWMODEL', viewModel)
            // Call update template event
            setTimeout(() => appController.dispatchEvent(appController.UPDATE_MODEL), 1000)
        }
    },
    /**
     * 
     */
    ready: function () {}

});