{
    name: "Tatsugirinite",
    spritenum: 666,
    megaStone: {
        "Tatsugiri": "Tatsugiri-Mega",
        "Tatsugiri-Droopy": "Tatsugiri-Mega",
        "Tatsugiri-Stretchy": "Tatsugiri-Mega",
    },
    itemUser: [
        "Tatsugiri",
        "Tatsugiri-Droopy",
        "Tatsugiri-Stretchy",
    ],
    onTakeItem(item, source) {
        return !item.megaStone?.[source.baseSpecies.baseSpecies];
    },
    num: -999,
    gen: 5,
    isNonstandard: "Past",
}