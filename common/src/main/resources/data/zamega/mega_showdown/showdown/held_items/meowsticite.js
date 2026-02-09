{
  name: "meowsticite",
  spritenum: 677,
  megaStone: "Meowstic-Mega",
  megaEvolves: ["Meowstic","Meowstic-F"],
  itemUser: ["Meowstic","Meowstic-F"],
  onTakeItem(item, source) {
    if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
    return true;
  },
  num: -999,
  gen: 5,
  isNonstandard: "Past",
}