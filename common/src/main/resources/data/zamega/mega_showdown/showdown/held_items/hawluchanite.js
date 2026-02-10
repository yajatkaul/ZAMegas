{
  name: "hawluchanite",
  spritenum: 666,
  megaStone: "Hawlucha-Mega",
  megaEvolves: ["Hawlucha"],
  itemUser: ["Hawlucha"],
  onTakeItem(item, source) {
    if (item.megaEvolves.includes(source.baseSpecies.baseSpecies)) return false;
    return true;
  },
  num: -999,
  gen: 5,
  isNonstandard: "Past"
}