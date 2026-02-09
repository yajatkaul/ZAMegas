{
    num: 464,
    accuracy: 50,
    basePower: 0,
    category: "Status",
    name: "Dark Void",
    pp: 10,
    priority: 0,
    flags: { protect: 1, reflectable: 1, mirror: 1, metronome: 1 },
     onTry(source, target, move) {
          if (source.species.name === "Darkrai" || move.hasBounced || source.species.name === "Darkrai-Mega") {
            return;
          }
          this.add("-fail", source, "move: Dark Void");
          this.hint("Only a Pokemon whose form is Darkrai can use this move.");
          return null;
        },
    onModifyMove(move, pokemon, target, source) {
       try {
      if (pokemon.species.name === "Darkrai-Mega") {
         move.accuracy = 95;
         move.category = "Special";
         move.basePower = 60;
      }
         } catch (error) {
      this.add('-message', `${error}`);
    }
  },
    basePowerCallback(pokemon, target, move) {
       try {
      if (target.status === 'slp' ) {
        return move.basePower * 2;
      }
      return move.basePower;
      } catch (error) {
      this.add('-message', `${error}`);
    }
  },
    onHit(target,source) {
       try {
      if (source.species.name === "Darkrai-Mega") {
            if (this.randomChance(1, 2)) {
     target.trySetStatus("slp", source);
    }
    }
    if (source.species.name === "Darkrai") {

         target.trySetStatus("slp", source);

  }
  } catch (error) {
      this.add('-message', `${error}`);
    }
  },
    onAfterHit(target, source, move) {
       try {
      const damage = target.lastDamage || 0;
    if (damage > 0) {
      const healAmount = Math.floor(damage);
      this.heal(healAmount, source);
    }
    } catch (error) {
      this.add('-message', `${error}`);
    }
  },
    noSketch: true,
    secondary: null,
    target: "allAdjacentFoes",
    type: "Dark",
    zMove: { effect: "clearnegativeboost" },
    contestType: "Clever"
  }