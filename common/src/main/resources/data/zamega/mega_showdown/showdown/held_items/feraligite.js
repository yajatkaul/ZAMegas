{
  name: "feraligite",
  spritenum: 672,
  megaStone: "Feraligatr-Mega",
  megaEvolves: ["Feraligatr"],
  itemUser: ["Feraligatr"],
  onTakeItem(item, source) {
    if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
    return true;
  },
  num: -999,
  gen: 5,
  isNonstandard: "Past",
}