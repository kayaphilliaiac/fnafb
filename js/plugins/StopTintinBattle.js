//=============================================================================
/*:
 * @plugindesc RPG Maker MV battle tint fixer.
 * @author ZainWD
 * 
 */
//=============================================================================

(function() {

var tintSave;

var _Scene_Battle_start = Scene_Battle.prototype.start
Scene_Battle.prototype.start = function() {
    _Scene_Battle_start.call(this);
    tintSave = $gameScreen._tone;
    $gameScreen._tone = [0,0,0,0];
};

var _zain_Scene_Battle_terminate = Scene_Battle.prototype.terminate
Scene_Battle.prototype.terminate = function() {
    _zain_Scene_Battle_terminate.call(this);
    $gameTemp.reserveCommonEvent(162);
    $gameScreen.startTint(tintSave, 1);
    $gameScreen._tone = tintSave;
};


})();
