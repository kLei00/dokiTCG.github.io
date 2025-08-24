import { gamestate } from './class_gamestate';
import { Dragoon } from "./class_dragoon";
import { checkItemsMet } from "./game_actions";

export class ability
{
    constructor(name, item_req_amount, item_req_type, type_req_amount)
    {
        this.name = name;
        this.item_req_amount = item_req_amount;
        this.item_req_type = item_req_type
        this.type_req_amount = type_req_amount;
    }

    execute(source, target, gamestate)
    {
        console.warn(`Ability '${this.name}' has not been implemented.`);
    }
}

export class SimpleDamageAbility extends ability
{
    constructor(name, item_req_amount, item_req_type, type_req_amount, atk_value)
    {
        super(name, item_req_amount, item_req_type, type_req_amount)
        this.atk_value = atk_value;
    }

    execute(source, target, gamestate)
    {
        if(checkItemsMet)
        {
            target.hp_value -= this.atk_value;
            gamestate.log.push(`TURN ${gamestate.turn_number}: ${source.name} used ${this.name} on ${target.name} for ${this.atk_value} damage.`);
            gamestate.log.push(`TURN ${gamestate.turn_number}: ${source.name} is now at ${source.hp_value} HP; ${target.name} is now at ${target.hp_value} HP.`);
        }
    }
}

// SlvrMars
// Common
