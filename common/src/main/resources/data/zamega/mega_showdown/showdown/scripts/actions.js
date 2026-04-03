{
  canMegaEvo(p, a = p.side.hasMegaEvolved) {
    if (a) return null;
    const s = p.species, i = p.getItem(), b = this.battle, m = p.baseMoves.map(b.toID, b);

    if (s.baseSpecies === 'Rayquaza' && !p.terastallized && !i.zMove && m.includes('dragonascent')) return 'Rayquaza-Mega';

    const n = s.otherFormes?.find(f => /-Mega(-[a-zA-Z])?$/i.test(f)), g = n && this.dex.species.get(n),
      ok = i.megaEvolves && (Array.isArray(i.megaEvolves) ? i.megaEvolves.includes(s.name) : i.megaEvolves === s.name);

    if (g?.requiredMove && m.includes(b.toID(g.requiredMove)) && !i.zMove && (s.name === s.baseSpecies || ok)) return g.name;

    return typeof i.megaStone === 'string'
      ? ok && i.megaStone !== s.name && i.megaStone
      : typeof i.megaStone === 'object'
        ? i.megaStone[s.name] && i.megaStone[s.name] !== s.name && i.megaStone[s.name]
        : null;
  },

  runMegaEvo(p) {
    const id = p.canMegaEvo || p.canUltraBurst;
    if (!id) return false;

    p.formeChange(id, p.getItem(), true);

    if (p.species.id.includes('zygarde') && p.species.id.includes('meg')) {
      const b = this.battle, o = b.toID('Core Enforcer'), n = b.toID('Nihillight'), mv = this.dex.moves.get(n);
      if (mv.exists) {
        let r;
        for (const s of p.baseMoveSlots.concat(p.moveSlots))
          s.id === o && (s.id = n, s.move = mv.name, s.target = mv.target, r = 1);

        if (r) {
          const am = this.dex.getActiveMove(n);
          for (const a of b.queue.list)
            a?.choice === 'move' && a.pokemon === p && (a.moveid === o || a.move?.id === o) && (a.moveid = n, a.move = am);
        }
      }
    }

    const m = p.canMegaEvo;
    p.side.hasMegaEvolved == true;
    for (const a of p.side.pokemon) m ? a.canMegaEvo = null : a.canUltraBurst = null;

    return this.battle.runEvent("AfterMega", p), true;
  },
}