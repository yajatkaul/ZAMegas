{
  name: "emboarite",
  spritenum: 675,
  megaStone: "Emboar-Mega",
  megaEvolves: ["Emboar"],
  itemUser: ["Emboar"],
  onTakeItem(item, source) {
    if (item.megaEvolves.includes(source.baseSpecies.baseSpecies)) return false;
    return true;
  },
  num: -999,
  gen: 5,
  isNonstandard: "Past",
}