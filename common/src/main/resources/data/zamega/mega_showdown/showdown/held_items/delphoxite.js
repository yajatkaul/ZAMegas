{
  name: "delphoxite",
  spritenum: 666,
  megaStone: "Delphox-Mega",
  megaEvolves: ["Delphox"],
  itemUser: ["Delphox"],
  onTakeItem(item, source) {
    if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
    return true;
  },
  num: -999,
  gen: 5,
  isNonstandard: "Past"
}