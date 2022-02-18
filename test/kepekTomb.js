const { test } = QUnit;
let jatek = new Jatek();

QUnit.module("KEPEKTOMBFELTOLTESE() METÓDUS", function (assert) {
  test("kepekTombFeltoltese létezik-e ", (assert) => {
    assert.ok(jatek.kepekTombFeltoltese, "Létezik");
  });
  test("kepekTombFeltoltese függvény-e", (assert) => {
    assert.ok(typeof jatek.kepekTombFeltoltese === "function", "Függvény");
  });
  test("A kepekTomb véletlenszerűen rendezett-e", (assert) => {
    kepekTomb = [];
    let randomTomb = [];
    randomTomb = kepekTomb;
    jatek.kepekTombFeltoltese();
    console.log(randomTomb);
    console.log(kepekTomb);
    assert.notEqual(kepekTomb[0], randomTomb[0]);
  });
});
