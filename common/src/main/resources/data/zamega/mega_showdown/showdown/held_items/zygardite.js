{
  name: "Zygardite",
  spritenum: 568,
  megaStone: "Zygarde-MegaC",
  megaEvolves: "Zygarde-Complete",
  itemUser: ["Zygarde-Complete"],
  onTakeItem(item, source) {
    if (item.megaEvolves.includes(source.baseSpecies.baseSpecies)) return false;
    return true;
  },
  num: 2584,
  gen: 9,
  isNonstandard: "Future",
}