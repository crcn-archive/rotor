module.exports = function(fragment, block, element, text, textBlock, parser, modifiers) {
    return element("div", {
        "class": "rotor"
    }, [ element("div", {
        "class": "row"
    }, [ element("div", {
        "class": "col-xs-7"
    }, [ block({
        html: {
            run: function() {
                return this.get([ "sections", "tabs" ]);
            },
            refs: [ [ "sections", "tabs" ] ]
        }
    }, void 0) ]) ]), text(" "), element("div", {
        "class": "row"
    }, [ block({
        html: {
            run: function() {
                return this.get([ "sections", "editor" ]);
            },
            refs: [ [ "sections", "editor" ] ]
        }
    }, void 0), text(" "), block({
        html: {
            run: function() {
                return this.get([ "sections", "preview" ]);
            },
            refs: [ [ "sections", "preview" ] ]
        }
    }, void 0) ]) ]);
};
