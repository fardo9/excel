console.log('Module.js')


async function start() {
    return await Promise.resolve('async working!!!!!!!!!dsaasd')
}
start().then(console.log)