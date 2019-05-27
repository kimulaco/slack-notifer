import axios from 'axios'

/**
 * SlackNotifer
 * @constructor
 */
class SlackNotifer {
  private optionNames: string[] = [
    'channel',
    'username',
    'icon',
    'text'
  ]

  public notify (url: string, params: any = {}): Promise<any> {
    return axios.post(url, params)
  }

  public parseParams (obj: any): string[] {
    let params: any = {}

    this.optionNames.forEach((optionName: string) => {
      if (optionName === 'icon') {
        params[this.getIconParamKey(obj[optionName])] = obj[optionName]
      } else {
        params[optionName] = obj[optionName]
      }
    })

    return params
  }

  private getIconParamKey (icon: string): string {
    if (icon[0] === ':') {
      return 'icon_emoji'
    } else {
      return 'icon_url'
    }
  }
}

const slackNotifer = new SlackNotifer()

export default slackNotifer
module.exports = slackNotifer
