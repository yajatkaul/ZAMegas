{
    name: "Magearnite",
    spritenum: 669,
    megaStone: {
        "Magearna": "Magearna-Mega",
        "Magearna-Original": "Magearna-Mega",
    },
    itemUser: [
        "Magearna",
        "Magearna-Original",
    ],
    onTakeItem(item, source) {
        return !item.megaStone?.[source.baseSpecies.baseSpecies];
    },
    num: -999,
    gen: 5,
    isNonstandard: "Past",
}