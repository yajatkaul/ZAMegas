{
  name: "raichunitey",
  spritenum: 666,
  megaStone: "Raichu-Mega-Y",
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