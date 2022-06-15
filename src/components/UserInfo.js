export class UserInfo {
  constructor(nameSelector, jobSelector, avatarSelector) {
    this._name = document.querySelector(nameSelector)
    this._job = document.querySelector(jobSelector)
    this._avatar = document.querySelector(avatarSelector)

  }

  getUserInfo() {
    const userInfo = {
      name: this._name.textContent,
      job: this._job.textContent
    }
    return userInfo
  }

  setUserInfo(data) {
    this._name.textContent = data.name,
    this._job.textContent = data.about,
    this._avatar.src = data.avatar
  }
  
}
