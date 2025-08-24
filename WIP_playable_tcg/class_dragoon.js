export class Dragoon
{
    constructor(dragoon_name, tcg_class, hp_value, ability_1, ability_2, tcg_class_weaknesses, active_status, targetable_TF, attached_items, attached_effects)
    {
        this.dragoon_name = dragoon_name;
        this.tcg_class = tcg_class;
        this.hp_value = hp_value;
        this.ability_1 = ability_1;
        this.ability_2 = ability_2;
        this.tcg_class_weaknesses = tcg_class_weaknesses;
        this.active_status = active_status;
        this.targetable_TF = targetable_TF;
        this.attached_items = attached_items;
        this.attached_effects = attached_effects;
    }
}