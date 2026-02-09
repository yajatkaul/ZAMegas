{
  name: "chandelurite",
  spritenum: 680,
  megaStone: "Chandelure-Mega",
  megaEvolves: ["Chandelure"],
  itemUser: ["Chandelure"],
  onTakeItem(item, source) {
    if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
    return true;
  },
  num: -999,
  gen: 5,
  isNonstandard: "Past",
}