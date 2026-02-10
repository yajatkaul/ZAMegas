{
  name: "lucarionitez",
  spritenum: 666,
  megaStone: "Lucario-Mega-Z",
  megaEvolves: ["Lucario"],
  itemUser: ["Lucario"],
  onTakeItem(item, source) {
    if (item.megaEvolves.includes(source.baseSpecies.baseSpecies)) return false;
    return true;
  },
  num: -999,
  gen: 5,
  isNonstandard: "Past"
}