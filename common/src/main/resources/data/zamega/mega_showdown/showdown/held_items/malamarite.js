{
  name: "malamarite",
  spritenum: 666,
  megaStone: "Malamar-Mega",
  megaEvolves: ["Malamar"],
  itemUser: ["Malamar"],
  onTakeItem(item, source) {
    if (item.megaEvolves.includes(source.baseSpecies.baseSpecies)) return false;
    return true;
  },
  num: -999,
  gen: 5,
  isNonstandard: "Past"
}