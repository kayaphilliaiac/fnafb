if ($gameParty.inBattle() && user.actorId() === 20) {
    value *=7;
    let numBuffs = 0;
    for (let paramId = 0; paramId < 8; paramId++) {
       if ((target._buffs[paramId] > 0) {
          numBuffs += target._buffs(paramId);
       }
    }
    if (target.isStateAffected(65)) { 
    numBuffs++;
    }
    if (numBuffs > 0) {
       value *= (numBuffs + 1);
    }
    value = Math.round(value);
 } else {
    value *=4.5;
    value = Math.round(value);
}