let humans = {
  canFly: false,
  canEat: true,
  canSleep: true,
  canEarnMoney: true,
  canHaveEmotions: true,
};

let child = {
  canCode: true,
  canMakeModernWebSites: true,
  canHaveGirlFriends: false,
};

// ! protoypes can be inherited by following below syntax ;
// ! protoypes is nothing but an extra methods or code provided by javaScript developers;
// todo: making an child object inheriting the humans properties as a prototypes;

child.__proto__ = humans;
