{
  name: "falinksite",
  spritenum: 691,
  megaStone: "Falinks-Mega",
  megaEvolves: ["Falinks"],
  itemUser: ["Falinks"],
  onTakeItem(item, source) {
    if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
    return true;
  },
  num: -999,
  gen: 5,
  isNonstandard: "Past",
}