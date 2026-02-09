{
  name: "darkranite",
  spritenum: 687,
  megaStone: "Darkrai-Mega",
  megaEvolves: ["Darkrai"],
  itemUser: ["Darkrai"],
  onTakeItem(item, source) {
    if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
    return true;
  },
  num: -999,
  gen: 5,
  isNonstandard: "Past",
}