{
  name: "scolipite",
  spritenum: 677,
  megaStone: "Scolipede-Mega",
  megaEvolves: ["Scolipede"],
  itemUser: ["Scolipede"],
  onTakeItem(item, source) {
    if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
    return true;
  },
  num: -999,
  gen: 5,
  isNonstandard: "Past",
}