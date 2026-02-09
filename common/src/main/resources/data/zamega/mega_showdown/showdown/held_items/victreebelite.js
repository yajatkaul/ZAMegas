{
  name: "victreebelite",
  spritenum: 666,
  megaStone: "Victreebel-Mega",
  megaEvolves: ["Victreebel"],
  itemUser: ["Victreebel"],
  onTakeItem(item, source) {
    if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
    return true;
  },
  num: -999,
  gen: 5,
  isNonstandard: "Past"
}