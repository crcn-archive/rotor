module.exports = function(fragment, block, element, text, textBlock, parser, modifiers) {
    return element("div", {
        "class": "col-xs-7"
    }, [ block({
        html: {
            run: function() {
                return this.get([ "sections", "document" ]);
            },
            refs: [ [ "sections", "document" ] ]
        }
    }, void 0) ]);
};
