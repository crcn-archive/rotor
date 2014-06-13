module.exports = function(fragment, block, element, text, textBlock, parser, modifiers) {
    return element("div", {
        "class": "col-xs-6"
    }, [ element("div", {
        "class": "rotor-preview"
    }, [ block({
        html: {
            run: function() {
                return this.get([ "entryElement" ]);
            },
            refs: [ [ "entryElement" ] ]
        }
    }, void 0) ]) ]);
};
