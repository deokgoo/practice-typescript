() => {
  let bean: number = 8;
  let BeanPerShot: number = 5;
  type Coffee = {
    shot: number;
    isIncludeMilk: boolean;
  }
  function makeCoffee({shot, milk = false}: {shot: number, milk: boolean}): Coffee {
    if(BeanPerShot*shot > bean) throw new Error('not enough bean');
    return {
      shot,
      isIncludeMilk: milk,
    }
  }
}