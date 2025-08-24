export class gamestate
{
    constructor()
    {
        this.deck_dragoons = [];
        this.deck_effects = [];
        this.deck_items = [];
        this.active_player = null;
        this.inactive_player = null;
        this.turn_number = 0;
        this.log = [];
    }
}