{
  num: 687,
  accuracy: 100,
  basePower: 100,
  category: "Special",
  isNonstandard: "Past",
  name: "Core Enforcer",
  id: "coreenforcer",
  pp: 10,
  priority: 0,
  flags: { protect: 1, mirror: 1, metronome: 1 },
  onModifyMove(move, source, target) {
    if (source.species.name === 'Zygarde-MegaC' && move.id === 'coreenforcer') {
      const nihilLight = this.dex.moves.get('nihillight');
      if (nihilLight?.exists) {
        move.name = nihilLight.name;
        move.basePower = nihilLight.basePower;
        move.category = nihilLight.category;
        move.type = nihilLight.type;
        move.flags = nihilLight.flags;
        move.secondary = nihilLight.secondary;
        move.zMove = nihilLight.zMove;
        move.onHit = nihilLight.onHit;
        move.onAfterSubDamage = nihilLight.onAfterSubDamage;
        move.contestType = nihilLight.contestType;
      }
    }
  },

  onHit(target, source) {
    if (target.getAbility().flags["cantsuppress"]) return;
    if (target.newlySwitched || this.queue.willMove(target)) return;
    target.addVolatile("gastroacid");
  },
  onAfterSubDamage(damage, target, source) {
    if (target.getAbility().flags["cantsuppress"]) return;
    if (target.newlySwitched || this.queue.willMove(target)) return;
    target.addVolatile("gastroacid");
  },
  secondary: null,
  target: "allAdjacentFoes",
  type: "Dragon",
  zMove: { basePower: 140 },
  contestType: "Tough",
}
