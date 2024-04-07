class EasyHTTP {

    // Make an HTTP GET Request
    async get(url) {
        const respose = await fetch(url);
        const resData = await respose.json();
        return resData;
    }

    // Make an HTTP POST Request
    async post(url, data) {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(data)
        })

        const resData = await response.json();
        return resData;
    }

    // Make an HTTP PUT Request
    async put(url, data) {
        const response = await fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(data)
        })

        const resData = await response.json();
        return resData;

    }

    // Make an HTTP DELETE Request
    async delete(url) {
        const response = await fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: null
        })

        const resData = await 'Resource Deleted...';
        return resData;

    }
}

// export const http = new EasyHTTP();

export { EasyHTTP as default };