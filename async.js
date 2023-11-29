console.log('person1: showa ticket');
console.log('person2: shows ticket');

const preMovie = async () => {
    const promiseWifeBringTicket = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('ticket')
        }, 3000);
    })
    let ticket = await promiseWifeBringTicket;

    const getPopCorn = new Promise((res, rej) => {
        res(`popCorn`);
    })
    const getButter = new Promise((res, rej) => {
        res(`butter`);
    })
    const getColdDrink = new Promise((res, rej) => {
        res(`Cold`);
    })
    console.log(`wife: i have the ${ticket}`);
    console.log('husband: we should go in');
    console.log('wife: no i am hungry');

    let PopCorn = await getPopCorn;
    console.log(`husband: i got some ${PopCorn}`);
    console.log('husband: we should go in');
    console.log('wife: I want butter on my popcorn');

    
    let butter = await getButter
    console.log(`husband: i got some ${butter} on popCorn`);
    console.log('husband: anything else darling?');
    console.log('wife: lets go we are getting late');
    console.log('husband: Thankyou for the reminder ');

    let ColdDrink = await getColdDrink
    console.log(`wife: I want some ${ColdDrink}`);
    console.log('husband: ok let me get some');
    console.log('husband: here is the drink');
    return ticket
};

preMovie().then((m) => console.log(`proomise3: shows ${m}`))

console.log('person4: shows ticket');
console.log('person5: shows ticket');