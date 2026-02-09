{
    name: "Commanded",
    noCopy: true,
    onStart(pokemon) {
      const ally = pokemon.allies()[0];
      const item = ally.getItem();
      const hasTatsugirinite = item?.id === "tatsugirinite";
      if (hasTatsugirinite){
      this.boost({evasion: -2, accuracy: -1 }, pokemon);
    }
    this.boost({ atk: 2, spa: 2, spe: 2, def: 2, spd: 2}, pokemon);
    },
    onDragOutPriority: 2,
    onDragOut() {
      return false;
    },
    onTrapPokemonPriority: -11,
    onTrapPokemon(pokemon) {
      pokemon.trapped = true;
    }
  }