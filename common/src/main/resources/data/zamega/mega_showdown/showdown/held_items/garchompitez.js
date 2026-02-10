{
  name: "garchompitez",
  spritenum: 666,
  megaStone: "Garchomp-Mega-Z",
  megaEvolves: ["Garchomp"],
  itemUser: ["Garchomp"],
  onTakeItem(item, source) {
    if (item.megaEvolves.includes(source.baseSpecies.baseSpecies)) return false;
    return true;
  },
  num: -999,
  gen: 5,
  isNonstandard: "Past"
}