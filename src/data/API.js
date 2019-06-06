class API {
    static baseUrl = 'http://localhost:3001'
    static signinUrl = API.baseUrl + '/signin'
    static signupUrl = API.baseUrl + '/signup'
    static validateUrl = API.baseUrl + '/validate'
    static basketUrl = API.baseUrl + '/basket'
    static productsUrl = API.baseUrl + '/products'

    static signin (customer) {
        return fetch(this.signinUrl, {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(customer)
        }).then(resp => resp.json())
    
       }
    
       static signup (customer) {
        return fetch(this.signupUrl, {
            method: 'POST', 
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(customer)
        }).then(resp => resp.json())
       }
    
       static validate () {
           const token = localStorage.getItem('token') 
           return fetch(this.validateUrl, {
            headers: { Authorization: token }
        }).then(resp => resp.json())
       }
    
       static getBasket () {
           return fetch(this.basketUrl, {
               headers: {Authorization: localStorage.getItem('token')}
           }).then(resp => resp.json())
       }
    

}

export default API