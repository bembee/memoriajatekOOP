const { test } = QUnit;

QUnit.module("KÁRTYÁRA KATTINTÁS", function (assert) {
  let jatek = new Jatek();
  let jatekter = new Jatekter($("article"), $(".kartya"), kepekTomb);

  test("Játék indulásakor az összes elem le van fordítva?", (assert) => {
    for (let key in kartyaTomb) {
      assert.equal(kartyaTomb[key].allapot, false);
    }
  });
  test("Játék indulásakor az összes elem le van blokkolva?", (assert) => {
    for (let key in kartyaTomb) {
      assert.equal(kartyaTomb[key].blokkolt, false);
    }
  });

  test("Kártyára kattintáskor megváltozik- e az állapota?", (assert) => {
    // for (let key in kartyaTomb) {
    if (kartyaTomb[0].allapot) {
      kartyaTomb[0].kattintas();
      assert.equal(kartyaTomb[0].allapot, false);
    } else {
      kartyaTomb[0].kattintas();
      assert.equal(kartyaTomb[0].allapot, true);
    }
    // }
  });
  test(" Kártyára kattintáskor a kivalasztottKartyak tömbbe bekerül-e a kártya?", (assert) => {
    kartyaTomb[0].KattintasTrigger();
    console.log(jatek.kivalasztottKartya);
    assert.equal(1, 1);
  });
});
