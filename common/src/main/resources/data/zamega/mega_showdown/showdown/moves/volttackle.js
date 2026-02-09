{
    num: 344,
    accuracy: 100,
    basePower: 120,
    category: "Physical",
    name: "Volt Tackle",
    pp: 15,
    priority: 0,
    flags: { contact: 1, protect: 1, mirror: 1, metronome: 1 },
    onHit(move, source, target, pokemon, attacker) {
      if (source.baseSpecies?.baseSpecies === "Raichu" &&
                source.species?.isMega &&
                source.getItem()?.id === "raichunitex") {
          this.boost({ atk: 1  }, source, source);
      }
    },
    recoil: [33, 100],
    secondary: {
      chance: 10,
      status: "par"
    },

    target: "normal",
    type: "Electric",
    contestType: "Cool"
  }