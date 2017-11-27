/// <reference path="../typings/index.d.ts" />
/// <reference path="../typings/global.d.ts" />

// @ts-ignore
Polymer({
    is: 'elem-form',

    /**
     * This is the config JSON model for the kul-button element type
     * 
     * @param uuid the unique id used to identify the model
     * @return JSON button data model
     */
    _createModel: function (uuid) {
        return {
            'id': uuid,
            'type': 'kul-form',
            'class': 'element',
            'title': {
                "i18n": {
                    "en": '',
                    "pt": ''
                }
            },
            'subTitle': {
                "i18n": {
                    "en": '',
                    "pt": ''
                }
            },            
            'dataModel': {
                'rootNode': '',
                'fields': [{
                    'id': '',
                    'label': {
                        "i18n": {
                            "en": '',
                            "pt": ''
                        }
                    },
                    'dataType': '',
                    'mapping': ''
                }]
            },
            'event': {
                'name': 'saveModel'
            }
        }
    },

    /**
     * 
     */
    create: function (appController) {
        let self = this
        let guid = uuid.make(1).format()
        return new Promise((resolve, reject) => {
            try {
                // Create the element
                let KElement = new KULElement('kul-form', self._createModel(guid), appController)
                // Attach to the DOM
                Polymer.dom(self.parentNode).replaceChild(KElement.getView(), self)
                // Return the updated data model                
                resolve(KElement.getModel())
            } catch (error) {
                console.error(error)
                reject(error)
            }
        })
    }

});