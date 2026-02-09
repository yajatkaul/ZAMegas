{
  name: "floettite",
  spritenum: 685,
  megaStone: "Floette-MegaE",
  megaEvolves: ["Floette-Eternal"],
  itemUser: ["Floette-Eternal"],
  onTakeItem(item, source) {
    if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
    return true;
  },
  num: -999,
  gen: 5,
  isNonstandard: "Past",
}