{
    name: "Darkranite",
    spritenum: 687,
    megaStone: {
        "Darkrai": "Darkrai-Mega",
    },
    itemUser: ["Darkrai"],
    onTakeItem(item, source) {
        return !item.megaStone?.[source.baseSpecies.baseSpecies];
    },
    num: -999,
    gen: 5,
    isNonstandard: "Past",
}