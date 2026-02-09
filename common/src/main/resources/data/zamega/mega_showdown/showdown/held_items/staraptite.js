{
  name: "staraptite",
  spritenum: 666,
  megaStone: "Staraptor-Mega",
  megaEvolves: ["Staraptor"],
  itemUser: ["Staraptor"],
  onTakeItem(item, source) {
    if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
    return true;
  },
  num: -999,
  gen: 5,
  isNonstandard: "Past"
}