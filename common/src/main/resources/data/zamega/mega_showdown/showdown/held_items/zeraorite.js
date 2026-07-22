{
    name: "Zeraorite",
    spritenum: 666,
    megaStone: {
        "Zeraora": "Zeraora-Mega",
    },
    itemUser: ["Zeraora"],
    onTakeItem(item, source) {
        return !item.megaStone?.[source.baseSpecies.baseSpecies];
    },
    num: -999,
    gen: 5,
    isNonstandard: "Past",
}