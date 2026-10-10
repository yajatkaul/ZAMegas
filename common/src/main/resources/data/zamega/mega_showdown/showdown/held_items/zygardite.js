({
    name: "Zygardite",
    spritenum: 568,
    megaStone: {
        "Zygarde-Complete": "Zygarde-Mega",
    },
    itemUser: ["Zygarde-Complete"],
    onTakeItem(item, source) {
        return !item.megaStone?.[source.baseSpecies.baseSpecies];
    },
    megaSwap: {
        'Zygarde-Mega': [
            ['coreenforcer', 'nihillight']
        ]
    },
    onStart(pokemon) {
        if (pokemon.baseSpecies.baseSpecies === "Zygarde") {
            pokemon.species.cannotDynamax = true;
        }
        if (pokemon.canTerastallize) pokemon.canTerastallize = false;
    },
    num: 2584,
    gen: 9,
    isNonstandard: "Future"
})