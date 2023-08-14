async function test() {
    const res = await fetch('https://api.wrdan.com/hitokoto', {cache: 'no-store'})
    const data = await res.json();
    console.log('res:', res)
    console.log('data:', data)
}
test()