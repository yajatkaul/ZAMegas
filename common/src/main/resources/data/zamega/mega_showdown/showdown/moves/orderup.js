{
    num: 856,
    accuracy: 100,
    basePower: 80,
    category: "Physical",
    name: "Order Up",
    pp: 10,
    priority: 0,
    flags: { protect: 1 },
    onAfterMoveSecondarySelf(pokemon, target, move) {
    try{
      if (!pokemon.volatiles["commanded"])
        return;
      const tatsugiri = pokemon.volatiles["commanded"].source;
      if (tatsugiri.baseSpecies.baseSpecies !== "Tatsugiri")
        return;
      switch (tatsugiri.baseSpecies.forme) {
        case "Mega":
          this.boost({ def: 1, spe: 1, atk: 1  }, pokemon, pokemon);
          break;
        case "MegaS":
          this.boost({ def: 1, spe: 1, atk: 1  }, pokemon, pokemon);
          break;
        case "MegaD":
          this.boost({ def: 1, spe: 1, atk: 1  }, pokemon, pokemon);
          break;
        case "Droopy":
          this.boost({ def: 1 }, pokemon, pokemon);
          break;
        case "Stretchy":
          this.boost({ spe: 1 }, pokemon, pokemon);
          break;
        default:
          this.boost({ atk: 1 }, pokemon, pokemon);
          break;
      }
      } catch (error) {
             this.add('-message', `${error}`);
           }
    },
    secondary: null,
    hasSheerForce: true,
    target: "normal",
    type: "Dragon"
  }