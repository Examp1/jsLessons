const postData = async (url, data) => { // asynk означает что внутри ф-ции будет асинхронный код
    const res = await fetch(url, { // асинк и авейт всегда в паре авейт ставим на те операции которые мы должны дождатся 
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: data
    });

    return await res.json();
};

const getResourses = async (url) => {
    const res = await fetch(url);

    if (!res.ok) {
        throw new Error(`Coul not fetch ${url}, status: ${res.status}`);
    }

    return await res.json();
};

export {postData};
export {getResourses};