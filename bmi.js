'use strict';

let lowBmi = `Jos painoindeksi on alle 18,5, se merkitsee liiallista laihuutta. Sen syynä voi olla jokin pitkällinen sairaus tai laihuushäiriö eli anoreksia. Jos varsinaista sairautta ei ole, mutta painoindeksi on laskenut alle 18,5:n, pitää hakeutua lääkäriin. Jos paino muutamassa kuukaudessa on laskenut yli 20:n tasolta reilusti, on varminta mennä lääkäriin jo painoindeksin lähestyessä 19:ää.`;

let normalBmi = `Normaaliksi on valittu se painoindeksin alue, jossa ihmisen terveys on parhaimmillaan. Normaali painoindeksin alue on välillä 18,5–25. Jos painoindeksi on pienempi kuin 18,5 tai suurempi kuin 25, sairauksien vaara suurenee. Painoindeksiä voidaan käyttää 18 vuoden iästä lähtien.`;

let highBmi = `Kun painoindeksi ylittää 25, ollaan liikapainon puolella. Liikakilojen määrä voi vaihdella erittäin paljon, muutamasta kilosta moniin kymmeniin kiloihin. Siksi on hyödyllistä täsmentää, kuinka suuresta ylipainosta on kyse.`;


const nappula = document.querySelector('.calculate');
nappula.addEventListener('click', function (evt) {

  const weight = Number(document.getElementById('weight').value);
  const height = Number(document.getElementById('height').value);

  if (!weight || !height) {
  } else {
    const result = bmiLaskuri(weight, height);
    resettiFunktio(result);
  }
});

function bmiLaskuri(weight, height) {
  let bmi = (weight / ((height * height) / 10000)).toFixed(1);
  document.querySelector('.bmi-score').textContent = bmi;

  if (bmi < 19) {
    document.querySelector('.analysis').textContent = lowBmi;
    document.querySelector('.bmi0-19').classList.add('lowBmi');
    return 'low';
  } else if (bmi > 25) {
    document.querySelector('.analysis').textContent = highBmi;
    document.querySelector('.bmi25-30').classList.add('highBmi');
    return 'high';
  } else {
    document.querySelector('.analysis').textContent = normalBmi;
    document.querySelector('.bmi19-25').classList.add('normalBmi');
    return 'normal';
  }
}

function resettiFunktio(result) {
  // täällä kannattaa resetoida tyylit
  if (result == "low") {
        document.querySelector(".bmi19-25").classList.remove("normalBmi");
        document.querySelector(".bmi25-30").classList.remove("highBmi");
    }
    else if (result == "normal") {
        document.querySelector(".bmi0-19").classList.remove("lowBmi");
        document.querySelector(".bmi25-30").classList.remove("highBmi");
    }
    else if (result == "high") {
        document.querySelector(".bmi19-25").classList.remove("normalBmi");
        document.querySelector(".bmi0-19").classList.remove("lowBmi");
    }
}