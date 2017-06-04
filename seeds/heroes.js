
exports.seed = function(knex, Promise) {
  return knex('hero').insert([
    {name: 'Wonder Woman', power: 'superhuman strength'},
    {name: 'Superman', power: 'flying'},
    {name: 'Batman', power: 'genius intellect'}
  ])
  .then(function(){
	return knex.raw("SELECT setval('hero_id_seq', (SELECT MAX(id) FROM hero))")
});
};
