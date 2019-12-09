const ATTACK_VALUE = 10;

let chosenMaxLife = 100;
let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;

adjustHealthBars(chosenMaxLife);

function attackHandler() {
  const damge = dealMonsterDamage(ATTACK_VALUE);
  currentMonsterHealth -= damge;
}

attackBtn.addEventListener('click', attackHandler);
