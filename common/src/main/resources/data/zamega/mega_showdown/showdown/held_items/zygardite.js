{
    name: "Zygardite",
    spritenum: 568,
    megaStone: {
        "Zygarde-Complete": "Zygarde-Mega",
    },
    itemUser: ["Zygarde-Complete"],
    onTakeItem(item, source) {
        return !item.megaStone?.[source.baseSpecies.baseSpecies];
    },
    onStart(pokemon) {
        pokemon.canUltraBurst = null;
        if (pokemon.canPrimal) pokemon.canPrimal = null;
        if (pokemon.canZMove) pokemon.canZMove = null;
        if (pokemon.canDynamax) pokemon.canDynamax = false;
        if (pokemon.canTerastallize) pokemon.canTerastallize = false;
    },
    num: 2584,
    gen: 9,
    isNonstandard: "Future",
}