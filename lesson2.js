const readline = require('readline');

const resourse = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

console.log('Выберити Орёл или Решка? (1 или 2)')

resourse.on('line', (cmd) => {
    if (cmd != 1 && cmd != 2) {
        console.log('Введите 1 или 2')
        console.log('Выберити Орёл или Решка? (1 или 2)')
        return
    }
    //Я не помню число или строка приходит из ввода, поэтому сравнение с привидением типа именно то что нам нужно в данном случае
    const value = (cmd == 1) ? 'Орёл' : 'Решка'
    const date = new Date ()
    //Не то что бы я хорошо знал как это работает, просто знаю что & 1 это один из способов проверки числа на чёт/нечет
    const rng = date.getMilliseconds() & 1
    const a = rng ? '' : 'а'
    const ms = rng ? 'Орёл' : 'Решка'
    console.log(`Вы выбрали ${value}, выпал${a} ${ms}`)
    console.log('')
    console.log('Выберити Орёл или Решка? (1 или 2)')

    //Бага: эта страка никогда не сработает :)
    if(cmd === 'e' || cmd === 'exit'){
        resourse.close();
    }
});