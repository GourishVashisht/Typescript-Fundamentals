interface xyz {
    name?: string
    price?: number
}

// ... stands for elli[pses which are also termed as Rest Parameters
function buyGoods(name: string, price: number, size?: number): xyz {
    return {
        name: 'gourish'
    }
}

function func(ar1, ar2, ...ar3: string[]) {
    console.log(ar1);
    console.log(ar2);
    console.log(ar3)        // ['hello1','hello2','hello3']
    console.log(...ar3)     // hello1 hello2 hello3
    ar3.forEach((i) => {
        console.log(i);
    })
}
func('ap', 'man', 'hello1', 'hello2', 'hello3')
buyGoods('apple', 10)

