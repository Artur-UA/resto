export default class RestServ {

    url = 'http://localhost:3000/menu';
    
    getMenuItem = async () => {

        const res = await fetch(this.url)

        if(!res.ok){
            throw new Error(`Could not fetch ${this.url}, status: ${res.status}`)
        }
        const result = await res.json();
        return result;
    }
}