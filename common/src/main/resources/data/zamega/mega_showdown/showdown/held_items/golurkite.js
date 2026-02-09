{
  name: "golurkite",
  spritenum: 672,
  megaStone: "Golurk-Mega",
  megaEvolves: ["Golurk"],
  itemUser: ["Golurk"],
  onTakeItem(item, source) {
    if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
    return true;
  },
  num: -999,
  gen: 5,
  isNonstandard: "Past",
}