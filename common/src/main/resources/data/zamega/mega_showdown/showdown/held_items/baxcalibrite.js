{
    name: "Baxcalibrite",
    spritenum: 686,
    megaStone: {
        "Baxcalibur": "Baxcalibur-Mega",
    },
    itemUser: ["Baxcalibur"],
    onTakeItem(item, source) {
        return !item.megaStone?.[source.baseSpecies.baseSpecies];
    },
    num: -999,
    gen: 5,
    isNonstandard: "Past",
}