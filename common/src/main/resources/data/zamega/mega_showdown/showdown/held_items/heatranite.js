{
    name: "Heatranite",
    spritenum: 686,
    megaStone: {
        "Heatran": "Heatran-Mega",
    },
    itemUser: ["Heatran"],
    onTakeItem(item, source) {
        return !item.megaStone?.[source.baseSpecies.baseSpecies];
    },
    num: -999,
    gen: 5,
    isNonstandard: "Past",
}