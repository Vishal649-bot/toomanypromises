console.log('person1: showa ticket');
console.log('person2: shows ticket');

const promiseWifeBringTicket = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve('ticket')
    }, 3000);
})

const getPopCorn  = promiseWifeBringTicket.then((t)=>{
    console.log('wife: i have the tics');
    console.log('husband: we should go in');
    console.log('wife: no i am hungry');
    return new Promise((res, rej)=>{
        res(`${t} popCorn`);
    })
})

const getButter=  getPopCorn.then((t)=>{
    console.log('husband: i got some popcorn');
    console.log('husband: we should go in');
    console.log('wife: I want butter on my popcorn');
    return new Promise((res,rej)=>{
        res(`${t} butter`)
    })
})
const getColdDrink =  getButter.then((t)=>{
    console.log('wife: I want some drinks');
    console.log('husband: ok let me get some');
    console.log('husband: here is the drink');
    return new Promise((res,rej)=>{
        res(`${t} drinks`)
    })
})
getColdDrink.then((t)=>{
    console.log(t);
})
console.log('person4: shows ticket');
console.log('person5: shows ticket');