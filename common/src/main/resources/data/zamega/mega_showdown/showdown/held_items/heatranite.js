{
  name: "heatranite",
  spritenum: 686,
  megaStone: "Heatran-Mega",
  megaEvolves: ["Heatran"],
  itemUser: ["Heatran"],
  onTakeItem(item, source) {
    if (item.megaEvolves.includes(source.baseSpecies.baseSpecies)) return false;
    return true;
  },
  num: -999,
  gen: 5,
  isNonstandard: "Past",
}