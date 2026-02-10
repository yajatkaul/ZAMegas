{
  name: "raichunitex",
  spritenum: 666,
  megaStone: "Raichu-Mega-X",
  megaEvolves: ["Raichu"],
  itemUser: ["Raichu"],
  onTakeItem(item, source) {
    if (item.megaEvolves.includes(source.baseSpecies.baseSpecies)) return false;
    return true;
  },
  num: -999,
  gen: 5,
  isNonstandard: "Past"
}