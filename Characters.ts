//Solution
interface Attackable {
    attack(char: Character): void;
  }
  
interface Defendable {
    defend(): void;
}
  

  abstract class Character implements Attackable, Defendable {
    protected gold: number = 0;
  
    constructor(protected name: string, protected attacksWith: string, protected defendsWith: string) {}
  
    attack(target: Character): void {
      console.log(`${this.name} attacks ${target.name} with ${this.attacksWith}`);
    }
  
    defend(): void {
      console.log(`${this.name} defends with ${this.defendsWith}`);
    }
  
    collectGold(amount: number): void {
      this.gold += amount;
      console.log(`${this.name} collects ${amount} gold. Total gold: ${this.gold}`);
    }
  
    changeAttacksWith(newAttacksWith: string): void {
      this.attacksWith = newAttacksWith;
      console.log(`${this.name} changes attack method to ${newAttacksWith}`);
    }
  }
  

  
  class Orc extends Character {
    constructor(name: string) {
      super(name, "club", "shield");
    }
  }
  
  class Peon extends Character {
    constructor(name: string) {
      super(name, "club","shield");
    }
  }
  
  class Knight extends Character {
    constructor(name: string) {
      super(name, "sword", "armor");
    }
  }
  
  class Archer extends Character {
    constructor(name: string) {
      super(name, "bow and arrow", "tunic");
    }
  }
  

  const orc = new Orc("OrcaSaurus");
  const knight = new Knight("Sir Knighty nite");
  const archer = new Archer("Robin in the hood");
  
  orc.attack(knight);
  knight.defend();
  orc.collectGold(10);
  knight.changeAttacksWith("club");
  knight.attack(orc);