abstract class StreetFighter{
    constructor(){}

    move() {};
    fight() {
        return `${this.name} attacks with ${this.getSpecialAttack()}`;
    };

    // getter
    abstract get name():string;
    abstract getSpecialAttack(): string;
}

class Ryu extends StreetFighter{
    get name(): string {
        return "Ryu";
    }
    getSpecialAttack(): string {
        return "Hadoken";
    }


}

const ryu = new Ryu();
console.log(ryu.getSpecialAttack());
console.log(ryu.fight());
