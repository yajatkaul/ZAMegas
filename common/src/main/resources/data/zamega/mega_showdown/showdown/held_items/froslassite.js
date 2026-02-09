{
  name: "froslassite",
  spritenum: 674,
  megaStone: "Froslass-Mega",
  megaEvolves: ["Froslass"],
  itemUser: ["Froslass"],
  onTakeItem(item, source) {
    if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
    return true;
  },
  num: -999,
  gen: 5,
  isNonstandard: "Past",
}