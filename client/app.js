function fetchGreeting() {
    fetch('http://localhost:9000/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: '{ greeting }' }),
        // body: JSON.stringify({ query: 'query { greeting }' }), query is optional
    })
        .then(res => res.json())
        .then(({ data }) => {
            const { greeting } = data;
            console.log(greeting)

            setTimeout(() => {
                document.getElementById('greeting').innerText = greeting;
            }, 1500);
        })
}

fetchGreeting();