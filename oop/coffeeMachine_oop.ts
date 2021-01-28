{
  type CoffeeCup = {
    shot: number;
    isIncludeMilk: boolean;
    color: 'red' | 'black' | 'white';
  }
  type Order = {
    shots: number;
    milk?: boolean;
  }

  interface CoffeeMaker {
    makeCoffee(order: Order): CoffeeCup;
  }

  interface CommercialCoffeeMaker {
    makeCoffee(order: Order): CoffeeCup;
    fillCoffeeBeans(bean: number): void;
    clean(): void;
  }

  class CoffeeMachine implements CoffeeMaker, CommercialCoffeeMaker {
    private static _BEAN_PER_SHOT: number = 8;
    private _coffeeBean: number= 0;

    private constructor(initBean: number) {
      this.fillCoffeeBeans(initBean);
    }
    static create(initBean: number): CoffeeMachine {
      return new CoffeeMachine(initBean);
    }

    get bean(): number {
      return this._coffeeBean;
    }

    fillCoffeeBeans(coffeeBean: number): number {
      if(coffeeBean < 0) throw new Error('value for bean should be greather than 0');
      this._coffeeBean += coffeeBean;
      return this.bean;
    }

    grindBeans(shots: number) {
      const needBean = CoffeeMachine._BEAN_PER_SHOT * shots;
      console.log('✅ check the bean...');
      if(needBean > this._coffeeBean) throw new Error('not enough coffee bean ');
      console.log('🧵 gridBeans....');
      this._coffeeBean -= needBean;
    }

    preheat() {
      console.log('🔥 preheating... ');
    }

    extract({shots, milk=false}: Order): CoffeeCup {
      return {
        shot: shots,
        isIncludeMilk: milk,
        color: 'white',
      }
    }

    clean() {
      console.log('cleaning the machine...🧽')
    }

    makeCoffee({shots, milk}: Order): CoffeeCup {
      this.grindBeans(shots);
      this.preheat();
      return this.extract({shots, milk});
    }
  }

  const coffeeMachine1: CoffeeMachine = CoffeeMachine.create(150);
  const order1 = coffeeMachine1.makeCoffee({shots: 2, milk: false});
  console.log('☕️', order1);
  const order2 = coffeeMachine1.makeCoffee({shots: 2, milk: true});
  console.log('☕️', order2);
  const order3 = coffeeMachine1.makeCoffee({shots: 3, milk: false});
  console.log('☕️', order3);

  const coffeeMachine2: CoffeeMaker = CoffeeMachine.create(80);
  const order4 = coffeeMachine2.makeCoffee({shots: 2});
  console.log('☕️', order4);

  const coffeeMachine3: CommercialCoffeeMaker = CoffeeMachine.create(80);
  coffeeMachine3.fillCoffeeBeans(100);
  const order5 = coffeeMachine3.makeCoffee({shots: 3, milk: true});
  console.log('☕️', order5);
}