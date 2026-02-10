{
  name: "glimmoranite",
  spritenum: 677,
  megaStone: "Glimmora-Mega",
  megaEvolves: ["Glimmora"],
  itemUser: ["Glimmora"],
  onTakeItem(item, source) {
    if (item.megaEvolves.includes(source.baseSpecies.baseSpecies)) return false;
    return true;
  },
  num: -999,
  gen: 5,
  isNonstandard: "Past",
}