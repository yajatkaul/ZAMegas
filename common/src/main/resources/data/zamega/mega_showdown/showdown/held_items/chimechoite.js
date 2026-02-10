{
  name: "chimechoite",
  spritenum: 686,
  megaStone: "Chimecho-Mega",
  megaEvolves: ["Chimecho"],
  itemUser: ["Chimecho"],
  onTakeItem(item, source) {
    if (item.megaEvolves.includes(source.baseSpecies.baseSpecies)) return false;
    return true;
  },
  num: -999,
  gen: 5,
  isNonstandard: "Past",
}