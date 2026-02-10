{
  name: "scovillainite",
  spritenum: 684,
  megaStone: "Scovillain-Mega",
  megaEvolves: ["Scovillain"],
  itemUser: ["Scovillain"],
  onTakeItem(item, source) {
    if (item.megaEvolves.includes(source.baseSpecies.baseSpecies)) return false;
    return true;
  },
  num: -999,
  gen: 5,
  isNonstandard: "Past",
}