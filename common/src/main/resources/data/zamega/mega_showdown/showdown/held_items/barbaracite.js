{
  name: "barbaracite",
  spritenum: 686,
  megaStone: "Barbaracle-Mega",
  megaEvolves: ["Barbaracle"],
  itemUser: ["Barbaracle"],
  onTakeItem(item, source) {
    if (item.megaEvolves.includes(source.baseSpecies.baseSpecies)) return false;
    return true;
  },
  num: -999,
  gen: 5,
  isNonstandard: "Past",
}