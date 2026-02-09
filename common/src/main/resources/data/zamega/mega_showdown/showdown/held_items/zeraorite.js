{
  name: "zeraorite",
  spritenum: 666,
  megaStone: "Zeraora-Mega",
  megaEvolves: ["Zeraora"],
  itemUser: ["Zeraora"],
  onTakeItem(item, source) {
    if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
    return true;
  },
  num: -999,
  gen: 5,
  isNonstandard: "Past"
}