module.exports = function(fragment, block, element, text, textBlock, parser, modifiers) {
    return element("div", {
        "class": "col-xs-6"
    }, [ block({
        html: {
            run: function() {
                return this.get([ "sections", "tabs" ]);
            },
            refs: [ [ "sections", "tabs" ] ]
        }
    }, void 0), text(" "), block({
        html: {
            run: function() {
                return this.get([ "sections", "document" ]);
            },
            refs: [ [ "sections", "document" ] ]
        }
    }, void 0) ]);
};
