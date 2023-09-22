var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Character = /** @class */ (function () {
    function Character(name, attacksWith, defendsWith) {
        this.name = name;
        this.attacksWith = attacksWith;
        this.defendsWith = defendsWith;
        this.gold = 0;
    }
    Character.prototype.attack = function (target) {
        console.log("".concat(this.name, " attacks ").concat(target.name, " with ").concat(this.attacksWith));
    };
    Character.prototype.defend = function () {
        console.log("".concat(this.name, " defends with ").concat(this.defendsWith));
    };
    Character.prototype.collectGold = function (amount) {
        this.gold += amount;
        console.log("".concat(this.name, " collects ").concat(amount, " gold. Total gold: ").concat(this.gold));
    };
    Character.prototype.changeAttacksWith = function (newAttacksWith) {
        this.attacksWith = newAttacksWith;
        console.log("".concat(this.name, " changes attack method to ").concat(newAttacksWith));
    };
    return Character;
}());
var Orc = /** @class */ (function (_super) {
    __extends(Orc, _super);
    function Orc(name) {
        return _super.call(this, name, "club", "shield") || this;
    }
    return Orc;
}(Character));
var Peon = /** @class */ (function (_super) {
    __extends(Peon, _super);
    function Peon(name) {
        return _super.call(this, name, "club", "shield") || this;
    }
    return Peon;
}(Character));
var Knight = /** @class */ (function (_super) {
    __extends(Knight, _super);
    function Knight(name) {
        return _super.call(this, name, "sword", "armor") || this;
    }
    return Knight;
}(Character));
var Archer = /** @class */ (function (_super) {
    __extends(Archer, _super);
    function Archer(name) {
        return _super.call(this, name, "bow and arrow", "tunic") || this;
    }
    return Archer;
}(Character));
var orc = new Orc("OrcaSaurus");
var knight = new Knight("Sir Knighty nite");
var archer = new Archer("Robin in the hood");
orc.attack(knight);
knight.defend();
orc.collectGold(10);
knight.changeAttacksWith("club");
knight.attack(orc);
