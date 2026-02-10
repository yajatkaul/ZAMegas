{
  name: "chesnaughtite",
  spritenum: 666,
  megaStone: "Chesnaught-Mega",
  megaEvolves: ["Chesnaught"],
  itemUser: ["Chesnaught"],
  onTakeItem(item, source) {
    if (item.megaEvolves.includes(source.baseSpecies.baseSpecies)) return false;
    return true;
  },
  num: -999,
  gen: 5,
  isNonstandard: "Past"
}