{
  name: "Zygardite",
  spritenum: 568,
  megaStone: "Zygarde-Mega",
  megaEvolves: "Zygarde-Complete",
  itemUser: ["Zygarde-Complete"],
  onTakeItem(item, source) {
    if (item.megaEvolves.includes(source.baseSpecies.baseSpecies)) return false;
    return true;
  },
  onStart(pokemon) {
    pokemon.canUltraBurst = null;
    if (pokemon.canPrimal) pokemon.canPrimal = null;
    if (pokemon.canZMove) pokemon.canZMove = null;
    if (pokemon.canDynamax) pokemon.canDynamax = false;
    if (pokemon.canTerastallize) pokemon.canTerastallize = false;
  },
  num: 2584,
  gen: 9,
  isNonstandard: "Future",
}