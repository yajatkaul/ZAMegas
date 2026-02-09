{
  runMegaEvo(pokemon) {
    const speciesid = pokemon.canMegaEvo || pokemon.canUltraBurst;
    if (!speciesid) return false;

    if (pokemon.ability === 'aurabreak') {
      this.battle.add('-hint', 'Zygarde cannot Mega Evolve while it has Aura Break!');
      return false;
    }

    const isZygardeMega = speciesid === "Zygarde-MegaC";

    if (isZygardeMega) {
      const i = pokemon.moveSlots.findIndex(m => m.id === "coreenforcer");
      if (i >= 0) {
        const nihil = this.battle.dex.moves.get("nihillight");
        for (const slots of [pokemon.moveSlots, pokemon.baseMoveSlots]) {
          Object.assign(slots[i], {
            id: nihil.id,
            move: nihil.name,
            pp: nihil.pp,
            maxpp: nihil.pp,
            used: false,
          });
        }
      }
    }

    switch (speciesid) {
      case "Raichu-Mega-X": {
        if (pokemon.m._raichuXPatched) break;
        pokemon.m._raichuXPatched = true;

        const baseSpecies = this.battle.dex.species.get("Raichu-Mega-X");
        const patched = this.battle.dex.deepClone(baseSpecies);

        patched.baseStats = {
          hp: 60,
          atk: 135,
          def: 95,
          spa: 90,
          spd: 95,
          spe: 110,
        };
        patched.abilities = { 0: "Levitate", H: "Levitate" };
        patched.types = ["Electric"];
        patched.heightm = 1.2;
        patched.weightkg = 38.0;

        pokemon.formeChange(patched, pokemon.getItem(), true);
        break;
      }

      case "Raichu-Mega-Y": {
        if (pokemon.m._raichuYPatched) break;
        pokemon.m._raichuYPatched = true;

        const baseSpecies = this.battle.dex.species.get("Raichu-Mega-Y");
        const patched = this.battle.dex.deepClone(baseSpecies);

        patched.baseStats = {
          hp: 60,
          atk: 100,
          def: 55,
          spa: 160,
          spd: 80,
          spe: 130,
        };
        patched.abilities = { 0: "Transistor", H: "Transistor"};
        patched.types = ["Electric"];
        patched.heightm = 1.0;
        patched.weightkg = 26.0;

        pokemon.formeChange(patched, pokemon.getItem(), true);
        break;
      }

      default:
        pokemon.formeChange(speciesid, pokemon.getItem(), true);
        break;
    }


    const wasMega = pokemon.canMegaEvo;
    for (const ally of pokemon.side.pokemon) {
      if (wasMega) ally.canMegaEvo = null;
      else ally.canUltraBurst = null;
    }

    this.battle.runEvent("AfterMega", pokemon);
    return true;
  },
  canMegaEvo(pokemon) {
    const species = pokemon.species;
    if (pokemon.ability === 'aurabreak'&& pokemon.terastallized) return null;

    const item = pokemon.getItem();

    if (
      species.baseSpecies === "Rayquaza" &&
      (pokemon.terastallized || item.zMove)
    ) {
      return null;
    }

    if (
      species.baseSpecies === "Rayquaza" &&
      pokemon.baseMoves.includes("dragonascent")
    ) {
      return "Rayquaza-Mega";
    }

    const megaKey = species.otherFormes?.find(form =>
      /.*-Mega(-[a-zA-Z])?/.test(form)
    );
    const megaForme = megaKey && this.dex.species.get(megaKey);

    if (
      (this.battle.gen <= 7 || this.battle.ruleTable.has("+pokemontag:past")) &&
      megaForme?.requiredMove &&
      pokemon.baseMoves.includes(megaForme.requiredMove.toLowerCase()) &&
      !item.zMove
    ) {
      return megaForme.name;
    }

    if (
      item.megaEvolves?.includes(species.name) &&
      item.megaStone !== species.name
    ) {
      return item.megaStone;
    }

    return null;
  }
}
