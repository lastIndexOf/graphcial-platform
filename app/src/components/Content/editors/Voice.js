import React, { Component } from 'react'

import './Voice.scss'

export default class Voice extends Component {
  constructor () {
    super()
    this.state = {
      voiceIndex: -1,
      voiceList: [],
      voice: {},
      currentTime: '00:00',
      wholeTime: '00:00'
    }

    this.fileInput = null
  }

  componentDidMount () {
    const self =this

    this.fileInput = document.createElement('input')
    this.fileInput.type = 'file'

    this.fileInput.addEventListener('change', e => {
      if (e.target.files && e.target.files.length) {

        let file = e.target.files[0]
  
        let buffer = fs.readFileSync(file.path)
        let blob = new Blob([buffer])
        let url = URL.createObjectURL(blob)
        
        this.videoAudio.src = url

        let { voiceList } = this.state

        this.setState({
          voiceList: [ ...voiceList, {
            name: file.name,
            key: url
          } ]
        }, () => {
          editor.voices[file.name] = url 
        })
      }
    })

    this.processWrapper.addEventListener('mousedown', e => {
  
      const preClientX = e.clientX
      const wholeWidth = this.processWrapper.offsetWidth
      const currentX = e.offsetX

      let currentWidth = ((currentX / wholeWidth) * 100).toFixed(0)

      this.currentProcess.style.width = currentWidth + '%'

      document.body.addEventListener('mousemove', processMove)
      document.body.addEventListener('mouseup', processUp)

      function processMove (e) {
        
        const currentClientX = e.clientX
        const _delta = currentClientX - preClientX

        let newCurrentX = currentX + _delta

        newCurrentX = newCurrentX < 0
        ? 0
        : (newCurrentX > wholeWidth
          ? wholeWidth
          : newCurrentX)

        currentWidth = ((newCurrentX / wholeWidth) * 100).toFixed(0)
        self.currentProcess.style.width = currentWidth + '%'
      }

      function processUp (e) {
        
        const currentTime = self.currentProcess.style.width.replace('%', '') - 0

        self.videoAudio.currentTime = self.videoAudio.duration * currentTime / 100
        self.setTime(self.videoAudio.currentTime, 'currentTime')
        
        document.body.removeEventListener('mousemove', processMove)
        
        document.body.removeEventListener('mouseup', processUp)
      }

    })

    window.audio = this.videoAudio
  }

  checkVoice (item, i) {
    let { voiceList } = this.state

    document.querySelector('.btn-voice').innerText = '播放'

    this.videoAudio.src = item.key
    
    setTimeout(() => {

      this.setTime(this.videoAudio.duration)

    }, 100)
    
    this.setState({
      voiceIndex: i,
      voice: voiceList[i],
    })
  }

  checkState (e) {
    e.preventDefault()
    const target = e.target

    let interval = undefined
    if (target.innerText === '播放') {
    
      this.videoAudio.play()
      interval = setInterval(() => {

        this.setTime(this.videoAudio.currentTime, 'currentTime')

        if (this.videoAudio.currentTime === this.videoAudio.duration) {
          
          clearInterval(interval)

          target.innerText = '播放'
        }

      }, 1000)

      target.innerText = '暂停'
    } else if (target.innerText === '暂停') {
      
      this.videoAudio.pause()
      clearInterval(interval)

      target.innerText = '播放'
    } 
  }

  choseFile (e) {
    this.fileInput.click()    
  }

  removeVoice (e) {
    let { voiceIndex, voiceList } = this.state

    if (voiceIndex !== -1) {
      
      if (this.videoAudio.src === voiceList[voiceIndex].key) this.videoAudio.src = ''

      delete editor.voices[voiceList[voiceIndex].name]

      voiceList.splice(voiceIndex, 1)

      this.setState({
        voiceList,
        voiceIndex: voiceIndex === 0 ? -1 : voiceIndex
      })

    }
  }

  setTime (time, key = 'wholeTime') {
    time = time ? time : this.videoAudio.duration

    let minute = Math.floor(time / 60)
    let second = Math.round(time - minute * 60)

    let result = ''
    if (minute >= 10) {
      if (second >= 10) {
        
        result = minute + ':' + second
      } else {     
      
        result = minute + ':0' + second
      }
    } else {
      if (second >= 10) {
        
        result = '0' + minute + ':' + second
      } else {     
      
        result = '0' + minute + ':0' + second
      }
    }
    
    this.currentProcess.style.width = (this.videoAudio.currentTime * 100 / this.videoAudio.duration).toFixed(1) + '%'

    this.setState({
      [key]: result
    })
  }

  render () {
    let { voiceList, voiceIndex, voice, currentTime, wholeTime } = this.state

    return (
      <section className="gra-content-voice-editor">
        <div className="gra-content-voice-left-wrapper">
          <h4 className="gra-content-voice-left-header">新建声音</h4>
          <div className="gra-content-btn-wrapper">
            <a href="javascript:;" className="btn btn-default" onClick={this.choseFile.bind(this)}>导入</a>
            <a href="javascript:;" className="btn btn-danger" onClick={this.removeVoice.bind(this)}>删除</a>
          </div>
          <ul className="gra-content-voice-list">
            {voiceList.map((item, i) => (
              <li 
                className="gra-content-voice-item"
                key={item.key}>
                <div className={`gra-content-voice-item-content ${voiceIndex === i ? 'active' : ''}`}onClick={this.checkVoice.bind(this, item, i)}>
                  {item.name}
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="gra-content-voice-right-wrapper">
          <div className="gra-content-voice-right-content">
            <div className="gra-content-voice-item-wrapper" style={{display: voiceIndex !== -1 ? 'inherit' : 'none'}}>
              <h4 className="gra-content-voice-item-title">{voice.name}</h4>
              <div className="process-wrapper" ref={processWrapper => this.processWrapper = processWrapper}>
                <p className="process-all"></p>
                <p className="process-current" ref={currentProcess => this.currentProcess = currentProcess}></p>
              </div>
              <div className="gra-content-voice-item-time">
                <p className="gra-content-voice-time">
                  {currentTime} / {wholeTime}
                </p>
              </div>
              <div className="gra-content-voice-control-wrapper">
                <a href="javascript:;" className="btn btn-default btn-voice" onClick={this.checkState.bind(this)}>播放</a>
              </div>
            </div>
          </div>
        </div>
        <audio ref={videoAudio => this.videoAudio = videoAudio}></audio>
      </section>
    )
  }
}