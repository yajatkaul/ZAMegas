{
  name: "starminite",
  spritenum: 669,
  megaStone: "Starmie-Mega",
  megaEvolves: ["Starmie"],
  itemUser: ["Starmie"],
  onTakeItem(item, source) {
    if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
    return true;
  },
  num: -999,
  gen: 5,
  isNonstandard: "Past",
}