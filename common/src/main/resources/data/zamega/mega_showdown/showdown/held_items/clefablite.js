{
  name: "clefablite",
  spritenum: 666,
  megaStone: "Clefable-Mega",
  megaEvolves: ["Clefable"],
  itemUser: ["Clefable"],
  onTakeItem(item, source) {
    if (item.megaEvolves.includes(source.baseSpecies.baseSpecies)) return false;
    return true;
  },
  num: -999,
  gen: 5,
  isNonstandard: "Past",
}