import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api.iwritethe.codes'
})

export default {
  async postContact(name, email, body) {
    return await api.post('/contact', {
      name, email, body
    });
  }
}