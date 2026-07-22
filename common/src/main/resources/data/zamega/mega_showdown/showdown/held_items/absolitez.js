{
    name: "Absolitez",
    spritenum: 666,
    megaStone: {
        "Absol": "Absol-Mega-Z",
    },
    itemUser: ["Absol"],
    onTakeItem(item, source) {
        return !item.megaStone?.[source.baseSpecies.baseSpecies];
    },
    num: -999,
    gen: 5,
    isNonstandard: "Past",
}