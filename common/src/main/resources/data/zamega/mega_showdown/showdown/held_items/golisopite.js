{
    name: "Golisopite",
    spritenum: 666,
    megaStone: {
        "Golisopod": "Golisopod-Mega",
    },
    itemUser: ["Golisopod"],
    onTakeItem(item, source) {
        return !item.megaStone?.[source.baseSpecies.baseSpecies];
    },
    num: -999,
    gen: 5,
    isNonstandard: "Past",
}