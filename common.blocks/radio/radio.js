/**
 * @module radio
 */

modules.define(
    'radio',
    ['i-bem__dom', 'base-control'],
    function(provide, BEMDOM, BaseControl) {

/**
 * @exports
 * @class radio
 * @augments base-control
 * @bem
 */
provide(BEMDOM.decl({ block : this.name, baseBlock : BaseControl }, /** @lends radio.prototype */{
    onSetMod : {
        'checked' : function(modName, modVal) {
            this.elem('control').prop(modName, modVal);
        }
    },

    _onPointerClick : function() {
        this.hasMod('disabled') || this.setMod('checked');
    }
}, /** @lends radio */{
    live : function() {
        this.liveBindTo('pointerclick', this.prototype._onPointerClick);
        return this.__base.apply(this, arguments);
    }
}));

});
