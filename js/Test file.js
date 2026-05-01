<Custom Apply Effect> 
    var hpCheck = target.mhp * 0.04;
    var formula = 0;
    if (hpCheck >= 2500) {
        formula = 2500;
    } else {
        formula = hpCheck;
    }
    target._poisonDamage = Math.ceil(formula);
</Custom Apply Affect>

<Custom Remove Effect>
    target._poisonDamage = undefined;
</Custom Remove Effect>

<Custom Regenerate Effect>
    var hpCheck = target.mhp * 0.04;
    var formula = 0;
    if (hpCheck >= 2500) {
        formula = 2500;
    } else {
        formula = hpCheck;
    }
    target._poisonDamage = target._poisonDamage || Math.ceil(formula);
    target.startAnimation(59);
    target.gainHp(-target._poisonDamage);
    target.startDamagePopup();
    if (target.isDead()) {
        target.performCollapse();
    }
    target.cleearResult();
</Custom Regenrate Effect>