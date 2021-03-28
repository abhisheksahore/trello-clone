const fetchingData = async () => {
    const promise = await fetch(url);
    const data = await promise.json();
    return data;
}