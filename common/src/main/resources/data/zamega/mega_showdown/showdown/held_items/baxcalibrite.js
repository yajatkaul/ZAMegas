{
  name: "baxcalibrite",
  spritenum: 686,
  megaStone: "Baxcalibur-Mega",
  megaEvolves: ["Baxcalibur"],
  itemUser: ["Baxcalibur"],
  onTakeItem(item, source) {
    if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
    return true;
  },
  num: -999,
  gen: 5,
  isNonstandard: "Past",
}