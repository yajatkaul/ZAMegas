{
  name: "dragoninite",
  spritenum: 666,
  megaStone: "Dragonite-Mega",
  megaEvolves: ["Dragonite"],
  itemUser: ["Dragonite"],
  onTakeItem(item, source) {
    if (item.megaEvolves.includes(source.baseSpecies.baseSpecies)) return false;
    return true;
  },
  num: -999,
  gen: 5,
  isNonstandard: "Past"
}