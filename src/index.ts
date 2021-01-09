import fetch from 'isomorphic-unfetch'

class Figmalytics {
  token: string
  host: string

  constructor(token: string, host: string = 'https://figmalytics.herokuapp.com') {
    this.token = token
    this.host = host
  }

  async log (name: string, id?: string) {
    let URL = this.host + `/track?name=${name}`
    if (id) URL + `&id=${id}`

    return await fetch(URL, {
      // method: 'POST',
      headers: {
        'Authorization': this.token
      }
    })
    .then( r => [true, null])
    .catch(e => [false, e.message])
  }
}

export default Figmalytics
  