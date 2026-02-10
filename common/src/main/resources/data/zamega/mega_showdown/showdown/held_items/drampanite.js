{
  name: "drampanite",
  spritenum: 690,
  megaStone: "Drampa-Mega",
  megaEvolves: ["Drampa"],
  itemUser: ["Drampa"],
  onTakeItem(item, source) {
    if (item.megaEvolves.includes(source.baseSpecies.baseSpecies)) return false;
    return true;
  },
  num: -999,
  gen: 5,
  isNonstandard: "Past",
}