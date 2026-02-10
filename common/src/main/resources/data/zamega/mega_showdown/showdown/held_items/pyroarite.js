{
  name: "pyroarite",
  spritenum: 684,
  megaStone: "Pyroar-Mega",
  megaEvolves: ["Pyroar","Pyroar-F"],
  itemUser: ["Pyroar","Pyroar-F"],
  onTakeItem(item, source) {
    if (item.megaEvolves.includes(source.baseSpecies.baseSpecies)) return false;
    return true;
  },
  num: -999,
  gen: 5,
  isNonstandard: "Past",
}