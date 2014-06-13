module.exports = function(fragment, block, element, text, textBlock, parser, modifiers) {
    return element("ul", {
        "class": "rotor-tabs"
    }, [ block({
        html: {
            run: function() {
                return this.get([ "sections", "items" ]);
            },
            refs: [ [ "sections", "items" ] ]
        }
    }, void 0) ]);
};
