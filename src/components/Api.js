export class Api {
  constructor(url, token) {
    this._url = url;
    this._token = token;
  }

  _report(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  getUserInfo(userInfoUrl) {
    return fetch(`${this._url}/${userInfoUrl}`, {
      headers: {
        authorization: this._token
      }
    })
      .then(this._report)
  }

  patchUserInfo(userInfoUrl, name, job) {
    return fetch(`${this._url}/${userInfoUrl}`, {
      method: 'PATCH',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: name,
        about: job
      })
    })
      .then(this._report)
  }

  patchUserAvatar(serverAvtaarUrl, avatar) {
    return fetch(`${this._url}/${serverAvtaarUrl}`, {
      method: 'PATCH',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        avatar: avatar
      })
    })
      .then(this._report)
  }

  getCreateCard(serverCards) {
    return fetch(`${this._url}/${serverCards}`, {
      headers: {
        authorization: this._token
      }
    })
      .then(this._report)
  }


  postNewPhoto(serverNewCard, name, link) {
    return fetch(`${this._url}/${serverNewCard}`, {
     method: 'POST',
     headers: {
       authorization: this._token,
       'Content-Type': 'application/json'
     },
     body: JSON.stringify({
       name: name,
       link: link
     })
   })
      .then(this._report)
  }

  deletePhoto(deleteCard, dataid) {
    return fetch(`${this._url}/${deleteCard}/${dataid}`, {
      method: 'DELETE',
      headers: {
        authorization: this._token
      }
    })
      .then(this._report)
  }

  
 




      
  

}