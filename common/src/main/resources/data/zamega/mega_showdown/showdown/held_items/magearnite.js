{
  name: "magearnite",
  spritenum: 669,
  megaStone: "Magearna-Mega",
  megaEvolves: ["Magearna","Magearna-Original"],
  itemUser: ["Magearna","Magearna-Original"],
  onTakeItem(item, source) {
    if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
    return true;
  },
  num: -999,
  gen: 5,
  isNonstandard: "Past",
}