export class UserInfo {
  constructor({name, job}) {
    this._name = name;
    this._job = job;
  }

  getUserInfo () {
    const userInfo = {
      name: this._name.textContent,
      job: this._job.textContent
    }

    return userInfo
  }

  setUserInfo ({ name, job }) {
    this._name.textContent = name.value,
    this._job.textContent = job.value
  }
}
