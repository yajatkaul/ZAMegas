{
  name: "greninjite",
  spritenum: 666,
  megaStone: "Greninja-Mega",
  megaEvolves: ["Greninja"],
  itemUser: ["Greninja"],
  onTakeItem(item, source) {
    if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
    return true;
  },
  num: -999,
  gen: 5,
  isNonstandard: "Past"
}