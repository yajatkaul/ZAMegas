{
  name: "scraftinite",
  spritenum: 678,
  megaStone: "Scrafty-Mega",
  megaEvolves: ["Scrafty"],
  itemUser: ["Scrafty"],
  onTakeItem(item, source) {
    if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
    return true;
  },
  num: -999,
  gen: 5,
  isNonstandard: "Past",
}