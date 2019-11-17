
/**
 * EasyHTTP Library
 * Library for HTTP requests
 * 
 * 
 * @version 3.0.0
 * @author Amy
 * 
 * 
 */

 class EasyHTTP {

    //Make HTTP get request

    async get(url) {

        const response = await fetch(url);
        const resData = await response.json();
        return resData;
    }

    //Make HTTP post request

    async post(url, data){

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    const resData = response.json();
    return resData;

    }

    //Make HTTP put request

    async put(url, data){

        const response = await fetch(url, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        const resData = response.json();
        return resData;
    }

    //Make HTTP delete request

    async delete(url){

        const response = await fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json'
            }
        });
        if (
        response.status === 200 ||
        response.status === 202 ||
        response.status === 204 )
        {
        return 'Resource deleted or Scheduled for deletion...'
        } else {
        return `Error: ${response.status}`
        }
    }

 }