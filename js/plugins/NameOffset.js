//=============================================================================
/*:
 * @plugindesc Enemy Name Offset
 * @author ZainWD
 */
//=============================================================================

var offset_Game_Enemy_setup = Game_Enemy.prototype.setup;
Game_Enemy.prototype.setup = function(enemyId, x, y) {
    offset_Game_Enemy_setup.call(this, enemyId, x, y);
    this.nameoffset = $dataEnemies[enemyId].meta.NameOffset || 0;
 };