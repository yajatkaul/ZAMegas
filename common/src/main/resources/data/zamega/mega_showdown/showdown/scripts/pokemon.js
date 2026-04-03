{
	effectiveWeather() {
		const weather = this.battle.field.effectiveWeather();
		switch (weather) {
		case 'sunnyday':
		case 'raindance':
		case 'desolateland':
		case 'primordialsea':
			if (this.hasItem('utilityumbrella')) return '';
		}
		if (this.hasAbility('megasol') && this.battle.activePokemon === this) return 'sunnyday';
		return weather;
	}
}
