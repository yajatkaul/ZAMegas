{
  name: "meganiumite",
  spritenum: 671,
  megaStone: "Meganium-Mega",
  megaEvolves: ["Meganium"],
  itemUser: ["Meganium"],
  onTakeItem(item, source) {
    if (item.megaEvolves.includes(source.baseSpecies.baseSpecies)) return false;
    return true;
  },
  num: -999,
  gen: 5,
  isNonstandard: "Past",
}