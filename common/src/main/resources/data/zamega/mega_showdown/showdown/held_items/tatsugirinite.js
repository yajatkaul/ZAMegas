{
  name: "tatsugirinite",
  spritenum: 666,
  megaStone: "Tatsugiri-Mega",
  megaEvolves: ["Tatsugiri","Tatsugiri-Droopy","Tatsugiri-Stretchy"],
  itemUser: ["Tatsugiri","Tatsugiri-Droopy","Tatsugiri-Stretchy"],
  onTakeItem(item, source) {
    if (item.megaEvolves.includes(source.baseSpecies.baseSpecies)) return false;
    return true;
  },
  num: -999,
  gen: 5,
  isNonstandard: "Past"
}