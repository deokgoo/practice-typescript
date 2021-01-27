() => {
  type Coffee = {
    shot: number;
    isIncludeMilk: boolean;
  }
  class CoffeeMachine {
    private coffeeBean: number;
    private static BEAN_PER_SHOT: number = 8;
    constructor(coffeeBean: number) {
      this.coffeeBean = coffeeBean;
    }
    getBean(): number {
      return this.coffeeBean;
    }
    addBean(coffeeBean: number) {
      this.coffeeBean += coffeeBean;
    }
    consumeBean(coffeeBean: number) {
      this.coffeeBean -= coffeeBean;
    }
    createCoffee({shot, milk = false}: {shot: number, milk: boolean}): Coffee {
      if(this.BEAN_PER_SHOT*shot > this.coffeeBean) throw new Error('not enough bean');
      this.consumeBean(this.BEAN_PER_SHOT*shot);
      return {
        shot,
        isIncludeMilk: milk,
      }
    }
    static createCoffeeMachine(initBean: number): CoffeeMachine {
      return new CoffeeMachine(initBean);
    }
  }

  const maker = new CoffeeMachine(123);
  const maker2 = CoffeeMachine.createCoffeeMachine(123);
}