{
  name: "skarmorite",
  spritenum: 673,
  megaStone: "Skarmory-Mega",
  megaEvolves: ["Skarmory"],
  itemUser: ["Skarmory"],
  onTakeItem(item, source) {
    if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
    return true;
  },
  num: -999,
  gen: 5,
  isNonstandard: "Past",
}