const ATTACK_VALUE = 10;
const STRONG_ATTACK_VALUE = 17;
const MONSTER_ATTACK_VALUE = 14;

let chosenMaxLife = 100;
let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;

adjustHealthBars(chosenMaxLife);

function attackMonster(mode) {
  let maxDamge;
  if (mode === 'ATTACK') {
    maxDamge = ATTACK_VALUE;
  } else if (mode === 'STRONG_ATTACK') {
    maxDamge = STRONG_ATTACK_VALUE;
  }
  const monsterDamge = dealMonsterDamage(STRONG_ATTACK_VALUE);
  currentMonsterHealth -= monsterDamge;
  const playerDamge = dealPlayerDamage(MONSTER_ATTACK_VALUE);
  currentPlayerHealth -= playerDamge;
  if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
    alert('You Won!');
  } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
    alert('You Lost!');
  } else if (currentMonsterHealth <= 0 && currentPlayerHealth <= 0) {
    alert('You have a draw!');
  }
}

function strongAttackHandler() {
  attackMonster('ATTACK');
}

function attackHandler() {
  attackMonster('STRONG_ATTACK');
}

attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click', strongAttackHandler);
