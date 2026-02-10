{
  name: "excadrite",
  spritenum: 676,
  megaStone: "Excadrill-Mega",
  megaEvolves: ["Excadrill"],
  itemUser: ["Excadrill"],
  onTakeItem(item, source) {
    if (item.megaEvolves.includes(source.baseSpecies.baseSpecies)) return false;
    return true;
  },
  num: -999,
  gen: 5,
  isNonstandard: "Past",
}