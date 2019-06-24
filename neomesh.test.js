const NeoMesh = require('./neomesh').NeoMesh;

test('NeoMesh generates default config', () => {
  expect(new NeoMesh().defaultConfig()).toBe("{}");
});
