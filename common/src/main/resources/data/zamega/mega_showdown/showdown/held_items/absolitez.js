{
  name: "absolitez",
  spritenum: 666,
  megaStone: "Absol-Mega-Z",
  megaEvolves: ["Absol"],
  itemUser: ["Absol"],
  onTakeItem(item, source) {
    if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
    return true;
  },
  num: -999,
  gen: 5,
  isNonstandard: "Past"
}