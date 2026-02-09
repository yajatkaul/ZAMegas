{
		name: "Ange",
		spritenum: -992,
		ignoreKlutz:true,
		onTakeItem(item, source) {
			 if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
                return true;
		},
		itemUser: ["Floette-Eternal"],
		num: -992,
		gen: 6,
		isNonstandard: "Past"
}