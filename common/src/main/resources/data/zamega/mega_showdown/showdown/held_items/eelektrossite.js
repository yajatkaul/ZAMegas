{
  name: "eelektrossite",
  spritenum: 679,
  megaStone: "Eelektross-Mega",
  megaEvolves: ["Eelektross"],
  itemUser: ["Eelektross"],
  onTakeItem(item, source) {
    if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
    return true;
  },
  num: -999,
  gen: 5,
  isNonstandard: "Past",
}