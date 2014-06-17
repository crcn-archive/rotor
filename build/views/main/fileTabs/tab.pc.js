module.exports = function(fragment, block, element, text, textBlock, parser, modifiers) {
    return element("li", {
        "data-bind": [ {
            onClick: {
                run: function() {
                    return this.call(this.__context, "setCurrentDocument", [ this.get([ "model" ]) ]);
                },
                refs: [ [ "setCurrentDocument" ], [ "model" ] ]
            },
            css: {
                run: function() {
                    return {
                        selected: this.get([ "model", "selected" ])
                    };
                },
                refs: [ [ "model", "selected" ] ]
            }
        } ]
    }, [ block({
        value: {
            run: function() {
                return this.get([ "model", "relpath" ]);
            },
            refs: [ [ "model", "relpath" ] ]
        }
    }, void 0) ]);
};
