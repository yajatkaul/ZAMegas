{
  name: "golisopite",
  spritenum: 666,
  megaStone: "Golisopod-Mega",
  megaEvolves: ["Golisopod"],
  itemUser: ["Golisopod"],
  onTakeItem(item, source) {
    if (item.megaEvolves.includes(source.baseSpecies.baseSpecies)) return false;
    return true;
  },
  num: -999,
  gen: 5,
  isNonstandard: "Past"
}