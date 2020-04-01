class Ajax {
    static url = "http://cards.danit.com.ua/cards";
    static headers = {
        "Authorization": "Bearer "+localStorage.getItem("token"),
        "Content-Type": "application/json"
    };


    static getAll() {
        return fetch(Ajax.url, {
            method: "GET",
            headers: Ajax.headers
        })
    }

    static getCard(id) {
        return fetch(`${Ajax.url}/${id}`, {
            method: "GET",
            headers: Ajax.headers
        })
    }

    static removeCard(id) {
        return fetch(`${Ajax.url}/${id}`, {
            method: "DELETE",
            headers: Ajax.headers
        })
    }

    static editCard(id, card) {

        return fetch(`${Ajax.url}/${id}`, {
            method: "PUT",
            headers: Ajax.headers,
            body: card
        })
    }

    static sendCard(card) {

        console.log(Ajax.headers);

        return fetch(Ajax.url, {
            method: "POST",
            headers: Ajax.headers,
            body: card
        })
    }
}
export default Ajax;