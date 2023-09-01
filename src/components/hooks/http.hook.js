export const useHttp = () => {
    const request = async(url, { method='GET', body=null, headers={'Content-Type': 'application/json'}}) => {
        try{
            let res = await fetch(url, {method, body, headers});
            if(!res.ok) {
                throw new Error(`Status request - ${res.status}`)
            }
            return await res.json();
        }catch(e) {
            throw new Error(`Could not get ${url}, error ${e.status}`)
        }
    }
    return { request }
}