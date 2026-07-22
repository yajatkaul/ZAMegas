{
    name: "Garchompitez",
    spritenum: 666,
    megaStone: {
        "Garchomp": "Garchomp-Mega-Z",
    },
    itemUser: ["Garchomp"],
    onTakeItem(item, source) {
        return !item.megaStone?.[source.baseSpecies.baseSpecies];
    },
    num: -999,
    gen: 5,
    isNonstandard: "Past",
}