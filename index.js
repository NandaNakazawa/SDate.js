class SDate {
  constructor(timezone, parse) {
    this.time = null;
    if (parse) {
      this.time = new Date(parse)
    } else {
      this.time = new Date(parse)
    }

    this.dateString = this.time.toLocaleDateString('id-ID', { timezone: timezone })
    this.timeString = this.time.toLocaleTimeString('id-ID', { timezone: timezone })
  }

  getHour() {
    var regex = new RegExp('([0-9]+:)', 's')
    var match = this.timeString.match(regex)
    var n = match[0]
    n = n.replaceAll(":", "")
    return Number.parseInt(n)
  }

  getMinute() {
    var regex = new RegExp('(:+[0-9]+:)', 's')
    var match = this.timeString.match(regex)
    var n = match[0]
    n = n.replaceAll(":", "")
    return Number.parseInt(n)
  }
  
  getSecond() {
    var regex = new RegExp('(:+[0-9])', 's')
    var match = this.timeString.match(regex)
    var n = match[0]
    n = n.replaceAll(":", "")
    return Number.parseInt(n)
  }
}

module.exports = SDate
