{
  name: "crabominite",
  spritenum: 666,
  megaStone: "Crabominable-Mega",
  megaEvolves: ["Crabominable"],
  itemUser: ["Crabominable"],
  onTakeItem(item, source) {
    if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
    return true;
  },
  num: -999,
  gen: 5,
  isNonstandard: "Past"
}