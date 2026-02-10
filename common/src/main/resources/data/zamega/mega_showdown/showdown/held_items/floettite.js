{
  name: "floettite",
  spritenum: 685,
  megaStone: "Floette-MegaE",
  megaEvolves: ["Floette-Eternal"],
  itemUser: ["Floette-Eternal"],
  onTakeItem(item, source) {
    const immuneSpecies = [
      "Floette-Eternal",
      "Floette-MegaE",
    ];
    if (immuneSpecies.includes(source.species.name)) return false;
    if (immuneSpecies.includes(source.baseSpecies.baseSpecies)) return false;
    return true;
  },
  num: -999,
  gen: 5,
  isNonstandard: "Past",
}