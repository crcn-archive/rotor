module.exports = function(fragment, block, element, text, textBlock, parser, modifiers) {
    return element("div", {
        "class": "rotor row"
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
    }, void 0) ]);
};
