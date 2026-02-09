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

  onBeforeMove(attacker, defender, move) {
    if (
      attacker.baseSpecies?.baseSpecies === "Zygarde" &&
      attacker.species?.isMega &&
      attacker.getItem()?.id === "zygardite"
    ) {
      const nihil = this.dex.moves.get("nihillight");
      if (nihil?.exists) {
        const alreadyNihil = attacker.moveSlots.some(
          (m) => this.dex.toID(m.move) === "nihillight"
        );
        if (!alreadyNihil) {
          const coreIndex = attacker.moveSlots.findIndex(
            (m) => this.dex.toID(m.move) === "coreenforcer"
          );
          if (coreIndex !== -1) {
            attacker.moveSlots[coreIndex].move = nihil.name;
            attacker.moveSlots[coreIndex].id = nihil.id;
            attacker.moveSlots[coreIndex].pp = nihil.pp;
            attacker.moveSlots[coreIndex].maxpp = nihil.pp;
            attacker.baseMoves[coreIndex] = nihil.id;

            move.basePower = nihil.basePower;
            move.accuracy = nihil.accuracy;
            move.type = "Dragon";
            move.category = "Special";

            this.add(
              "-message",
              `${attacker.name}'s Core Enforcer transformed into Nihil Light!`
            );
          }
        }
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
