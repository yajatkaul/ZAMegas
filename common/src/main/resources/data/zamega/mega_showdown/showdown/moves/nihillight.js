{
    num: 920,
	accuracy: 100,
	basePower: 200,
	category: "Special",
	isNonstandard: "Future",
	name: "Nihil Light",
	pp: 5,
	priority: 0,
	flags: { protect: 1, mirror: 1, metronome: 1 },
    onEffectiveness(typeMod, target, type, move) {
      if (move.type !== "Dragon")
        return;
      if (!target)
        return;
      if (!target.runImmunity("Dragon")) {
        if (target.hasType("Fairy"))
          return 0;
      }
    },
	ignoreEvasion: true,
	ignoreDefensive: true,
	ignoreImmunity: { 'Dragon': true },
	secondary: null,
	target: "allAdjacentFoes",
	type: "Dragon",
}