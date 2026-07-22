{
    name: "Lucarionitez",
    spritenum: 666,
    megaStone: {
        "Lucario": "Lucario-Mega-Z",
    },
    itemUser: ["Lucario"],
    onTakeItem(item, source) {
        return !item.megaStone?.[source.baseSpecies.baseSpecies];
    },
    num: -999,
    gen: 5,
    isNonstandard: "Past",
}