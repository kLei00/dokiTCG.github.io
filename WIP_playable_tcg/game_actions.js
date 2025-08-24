import { Dragoon } from "./class_dragoon";
import { ability } from "./class_abilities";

export function addCardToDeck
{
    
}

export function checkItemsMet(equipped_items, ability)
{
    total_item_count = 0;
    required_item_count = 0;

    for(i = 0; i < equipped_items.length(); i++)
    {
        if(equipped_items[i])
        {
            total_item_count++;
            if(equipped_items.at(i) === ability.item_req_type)
            {
                required_item_count++
            }
        }
    }

    if((total_item_count >= ability.item_req_amount) && (required_item_count >= ability.type_req_amount))
        return true;
    else
        return false;
}