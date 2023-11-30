export const requestAllTools = async() => {
    let jsonData;

    await fetch('server/jsonAllTools.php')
            .then(response => response.json())
            .then(data => jsonData = data)
            .catch((error) => console.error('Error:', error));

    return jsonData;
}

export const requestAllWorkers = async() => {
    let jsonData;

    await fetch('server/jsonAllWorkers.php')
            .then(response => response.json())
            .then(data => jsonData = data)
            .catch((error) => console.error('Error:', error));

    return jsonData;
}