{
  onResidualOrder: 29,
  onResidual(pokemon) {
      if (pokemon.baseSpecies.baseSpecies !== "Zygarde" || pokemon.transformed || !pokemon.hp) return;
      if (pokemon.species.id === "zygardecomplete" || pokemon.hp > pokemon.maxhp / 2) return;

      this.add("-activate", pokemon, "ability: Power Construct");

      pokemon.formeChange("Zygarde-Complete", this.effect, true);

      pokemon.baseMaxhp = Math.floor(Math.floor(
          2 * pokemon.species.baseStats.hp + pokemon.set.ivs.hp + Math.floor(pokemon.set.evs.hp / 4) + 100
      ) * pokemon.level / 100 + 10);
      const newMaxHP = pokemon.volatiles["dynamax"] ? 2 * pokemon.baseMaxhp : pokemon.baseMaxhp;
      pokemon.hp = newMaxHP - (pokemon.maxhp - pokemon.hp);
      pokemon.maxhp = newMaxHP;
      this.add("-heal", pokemon, pokemon.getHealth, "[silent]");

      if (pokemon.getItem().id === "zygardite" ) {
        if (pokemon.side.hasMegaEvolved) return canMegaEvo = null;
          pokemon.canMegaEvo = "Zygarde-Mega";
      }
  },
  flags: { failroleplay: 1, noreceiver: 1, noentrain: 1, notrace: 1, failskillswap: 1, cantsuppress: 1 },
  name: "Power Construct",
  rating: 5,
  num: 211
}