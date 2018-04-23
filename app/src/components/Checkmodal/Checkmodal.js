import React, { Component } from 'react'

import './Checkmodal.scss'

export default class Checkmodal extends Component {
  constructor () {
    super()
    this.state = {
      showModal: false,
      data: {
        background: {
          title: '背景库',
          data: [
            {
              part: '分类',
              children: [
                {
                  name: '全部',
                  isActive: false,
                  data: []
                },
                {
                  name: '测试',
                  isActive: false,
                  data: []
                }
              ]
            },
            {
              part: '主题',
              children: [
                {
                  name: '测试',
                  isActive: false,
                  data: []
                }
              ]
            }
          ]
        },
        role: {
          title: '素材库',
          data: [
            {
              part: '分类',
              children: [
                {
                  name: '组合',
                  isActive: false,
                  data: [
                    {
                      title: 'Group',
                      avatar: require('../../../assets/image/Group.png'),
                      func () {
                        let mesh = new THREE.Group()
                        mesh.name = 'Group'

                        editor.execute( new AddObjectCommand( mesh ) )
                        let script = { name: '', source: '', xml: document.querySelector('#function_update') }
                        editor.execute( new AddScriptCommand( editor.selected, script ) )
                        editor.getWorkspace()
                      }
                    }
                  ]
                },
                {
                  name: '形状',
                  isActive: false,
                  data: [
                    {
                      title: 'Plane',
                      avatar: require('../../../assets/image/Plane.png'),
                      func () {
                        let geometry = new THREE.PlaneBufferGeometry( 1, 1, 1, 1 )
                        let material = new THREE.MeshStandardMaterial()
                        let mesh = new THREE.Mesh( geometry, material )
                        mesh.name = 'Plane'

                        editor.execute( new AddObjectCommand( mesh ) )
                        let script = { name: '', source: '', xml: document.querySelector('#function_update') }
                        editor.execute( new AddScriptCommand( editor.selected, script ) )
                        editor.getWorkspace()
                      }
                    },
                    {
                      title: 'Box',
                      avatar: require('../../../assets/image/Box.png'),
                      func () {
                        let geometry = new THREE.BoxBufferGeometry( 1, 1, 1, 1, 1, 1 )
                        let mesh = new THREE.Mesh( geometry, new THREE.MeshStandardMaterial() )
                        mesh.name = 'Box'

                        editor.execute( new AddObjectCommand( mesh ) )
                        let script = { name: '', source: '', xml: document.querySelector('#function_update') }
                        editor.execute( new AddScriptCommand( editor.selected, script ) )
                        editor.getWorkspace()
                      }
                    },
                    {
                      title: 'Circle',
                      avatar: require('../../../assets/image/Circle.png'),
                      func () {
                        let geometry = new THREE.CircleBufferGeometry( 1, 8, 0, Math.PI * 2 )
                        let mesh = new THREE.Mesh( geometry, new THREE.MeshStandardMaterial() )
                        mesh.name = 'Circle'

                        editor.execute( new AddObjectCommand( mesh ) )
                        let script = { name: '', source: '', xml: document.querySelector('#function_update') }
                        editor.execute( new AddScriptCommand( editor.selected, script ) )
                        editor.getWorkspace()
                      }
                    },
                    {
                      title: 'Cylinder',
                      avatar: require('../../../assets/image/Cylinder.png'),
                      func () {
                        let geometry = new THREE.CylinderBufferGeometry( 1, 1, 1, 8, 1, false, 0, Math.PI * 2 )
                        let mesh = new THREE.Mesh( geometry, new THREE.MeshStandardMaterial() )
                        mesh.name = 'Cylinder'

                        editor.execute( new AddObjectCommand( mesh ) )
                        let script = { name: '', source: '', xml: document.querySelector('#function_update') }
                        editor.execute( new AddScriptCommand( editor.selected, script ) )
                        editor.getWorkspace()
                      }
                    },
                    {
                      title: 'Sphere',
                      avatar: require('../../../assets/image/Sphere.png'),
                      func () {
                        let geometry = new THREE.SphereBufferGeometry( 1, 8, 6, 0, Math.PI * 2, 0, Math.PI )
                        let mesh = new THREE.Mesh( geometry, new THREE.MeshStandardMaterial() )
                        mesh.name = 'Sphere'

                        editor.execute( new AddObjectCommand( mesh ) )
                        let script = { name: '', source: '', xml: document.querySelector('#function_update') }
                        editor.execute( new AddScriptCommand( editor.selected, script ) )
                        editor.getWorkspace()
                      }
                    },
                    {
                      title: 'Icosahedron',
                      avatar: require('../../../assets/image/Lcosahedron.png'),
                      func () {
                        let geometry = new THREE.IcosahedronGeometry( 1, 0 )
                        let mesh = new THREE.Mesh( geometry, new THREE.MeshStandardMaterial() )
                        mesh.name = 'Icosahedron'

                        editor.execute( new AddObjectCommand( mesh ) )
                        let script = { name: '', source: '', xml: document.querySelector('#function_update') }
                        editor.execute( new AddScriptCommand( editor.selected, script ) )
                        editor.getWorkspace()
                      }
                    },
                    {
                      title: 'Torus',
                      avatar: require('../../../assets/image/Torus.png'),
                      func () {
                        let geometry = new THREE.TorusBufferGeometry( 1, 0.4, 8, 6, Math.PI * 2 )
                        let mesh = new THREE.Mesh( geometry, new THREE.MeshStandardMaterial() )
                        mesh.name = 'Torus'

                        editor.execute( new AddObjectCommand( mesh ) )
                        let script = { name: '', source: '', xml: document.querySelector('#function_update') }
                        editor.execute( new AddScriptCommand( editor.selected, script ) )
                        editor.getWorkspace()
                      }
                    },
                    {
                      title: 'TorusKnot',
                      avatar: require('../../../assets/image/TorusKnot.png'),
                      func () {
                        let geometry = new THREE.TorusKnotBufferGeometry( 1, 0.4, 64, 8, 2, 3 )
                        let mesh = new THREE.Mesh( geometry, new THREE.MeshStandardMaterial() )
                        mesh.name = 'TorusKnot'

                        editor.execute( new AddObjectCommand( mesh ) )
                        let script = { name: '', source: '', xml: document.querySelector('#function_update') }
                        editor.execute( new AddScriptCommand( editor.selected, script ) )
                        editor.getWorkspace()
                      }
                    },
                    {
                      title: 'Lathe',
                      avatar: require('../../../assets/image/Lathe.png'),
                      func () {
                        let points = [
                          new THREE.Vector2( 0, 0 ),
                          new THREE.Vector2( 0.4, 0 ),
                          new THREE.Vector2( 0.35, 0.05 ),
                          new THREE.Vector2( 0.1, 0.075 ),
                          new THREE.Vector2( 0.08, 0.1 ),
                          new THREE.Vector2( 0.08, 0.4 ),
                          new THREE.Vector2( 0.1, 0.42 ),
                          new THREE.Vector2( 0.14, 0.48 ),
                          new THREE.Vector2( 0.2, 0.5 ),
                          new THREE.Vector2( 0.25, 0.54 ),
                          new THREE.Vector2( 0.3, 1.2 )
                        ]
                    
                        let geometry = new THREE.LatheBufferGeometry( points, 12, 0, Math.PI * 2 )
                        let mesh = new THREE.Mesh( geometry, new THREE.MeshStandardMaterial( { side: THREE.DoubleSide } ) )
                        mesh.name = 'Lathe'
                    
                        editor.execute( new AddObjectCommand( mesh ) )
                        let script = { name: '', source: '', xml: document.querySelector('#function_update') }
                        editor.execute( new AddScriptCommand( editor.selected, script ) )
                        editor.getWorkspace()
                      }
                    },
                    {
                      title: 'Sprite',
                      avatar: require('../../../assets/image/Sprite.png'),
                      func () {
                        let sprite = new THREE.Sprite( new THREE.SpriteMaterial() )
                        sprite.name = 'Sprite'

                        editor.execute( new AddObjectCommand( sprite ) )
                      }
                    }
                  ]
                },
                {
                  name: '光线',
                  isActive: false,
                  data: [
                    {
                      title: 'PointLight',
                      avatar: require('../../../assets/image/PointLight.png'),
                      func () {
                        let color = 0xffffff
                        let intensity = 1
                        let distance = 0

                        let light = new THREE.PointLight( color, intensity, distance )
                        light.name = 'PointLight'

                        editor.execute( new AddObjectCommand( light ) )
                      }
                    },
                    {
                      title: 'SpotLight',
                      avatar: require('../../../assets/image/SpotLight.png'),
                      func () {
                        let color = 0xffffff
                        let intensity = 1
                        let distance = 0
                        let angle = Math.PI * 0.1
                        let penumbra = 0

                        let light = new THREE.SpotLight( color, intensity, distance, angle, penumbra )
                        light.name = 'SpotLight'
                        light.target.name = 'SpotLight Target'

                        light.position.set( 5, 10, 7.5 )

                        editor.execute( new AddObjectCommand( light ) )
                      }
                    },
                    {
                      title: 'DirectionalLight',
                      avatar: require('../../../assets/image/DirectionalLight.png'),
                      func () {
                        let color = 0xffffff
                        let intensity = 1

                        let light = new THREE.DirectionalLight( color, intensity )
                        light.name = 'DirectionalLight'
                        light.target.name = 'DirectionalLight Target'

                        light.position.set( 5, 10, 7.5 )

                        editor.execute( new AddObjectCommand( light ) )
                      }
                    },
                    {
                      title: 'HemisphereLight',
                      avatar: require('../../../assets/image/HemisphereLight.png'),
                      func () {
                        let skyColor = 0x00aaff
                        let groundColor = 0xffaa00
                        let intensity = 1

                        let light = new THREE.HemisphereLight( skyColor, groundColor, intensity )
                        light.name = 'HemisphereLight'

                        light.position.set( 0, 10, 0 )

                        editor.execute( new AddObjectCommand( light ) )
                      }
                    },
                    {
                      title: 'AmbientLight',
                      avatar: '',
                      func () {
                        let color = 0x222222

                        let light = new THREE.AmbientLight( color )
                        light.name = 'AmbientLight'

                        editor.execute( new AddObjectCommand( light ) )
                      }
                    }
                  ]
                },
                {
                  name: '视角相机',
                  isActive: false,
                  data: [
                    {
                      title: 'PerspectiveCamera',
                      avatar: require('../../../assets/image/PerspectiveCamera.png'),
                      func () {
                        let camera = new THREE.PerspectiveCamera( 50, 1, 1, 10000 )
                        camera.name = 'PerspectiveCamera'

                        editor.execute( new AddObjectCommand( camera ) )
                      }
                    }
                  ]
                }
              ]
            }
          ]
        }
      },
      models: [],
      modelIndex: -1
    }
  }

  addNewModel () {
    if (this.state.modelIndex !== -1) {
      this.state.models[this.state.modelIndex].func()
      this.closeModal()
      this.props.checkToBackground()
      this.props.checkToBackgroundView()
      this.setState({
        modelIndex: -1
      })
    }
  }

  closeModal () {
    this.setState({
      showModal: false
    })
  }

  modelCheck (index) {
    this.setState({
      modelIndex: index
    })
  }

  showModal () {
    this.setState({
      showModal: true
    })
  }

  typeChange (i, index) {
    let { role } = this.props

    this.setState((o, n) => {
      let { data } = o
      data[role].data = data[role].data.map(item => {
        item.children = item.children.map(child => {
          child.isActive = false
          return child
        })
        return item
      })
      data[role].data[i].children[index].isActive = true
      
      return {
        data,
        modelIndex: -1,
        models: data[role].data[i].children[index].data
      }
    })
  }

  render () {
    let { showModal, data, models, modelIndex } = this.state
    let { role } = this.props

    return showModal
      ? (
        <section className="gra-modal">
          <div className="gra-modal-main">
            <i className="iconfont icon-iconfontguanbi gra-icon-close" onClick={this.closeModal.bind(this, 'role')}></i>

            <div className="gra-modal-left-wrapper">
              <h3 className="gra-modal-title">{data[role].title}</h3>
              {data[role].data.map((item, i) => (
                <div className="gra-modal-list-wrpper" key={item.part}>
                  <h4 className="gra-modal-type-title">{item.part}</h4>
                  <ul className="gra-modal-type-list">
                    {item.children.map((child, index) => (
                      <li
                        className={`gra-modal-type-item ${child.isActive ? 'active' : ''}`}
                        onClick={this.typeChange.bind(this, i, index)}
                        key={child.name}>
                        {child.name}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="gra-modal-right-wrapper">
              <div className="gra-modal-content-wrapper">
              <ul className="gra-modal-content-list">
                {models.map((item, i) => (
                  <li 
                    className={`gra-modal-content-list-item ${modelIndex === i ? 'active' : ''}`} 
                    onClick={this.modelCheck.bind(this, i)}
                    key={item.title}>
                    <img src={item.avatar} className="gra-modal-content-list-item-avatar"/>
                    <p className="gra-modal-content-list-item-desc">{item.title}</p>
                  </li>
                ))}
              </ul>
              </div>
              <div className="gra-modal-content-operate-wrapper">
                <a href="javascript:;" className="btn btn-primary" onClick={this.addNewModel.bind(this)}>确定</a>
                <a href="javascript:;" className="btn btn-default" onClick={this.closeModal.bind(this, 'role')}>取消</a>
              </div>
            </div>
          </div>
        </section>
      )
      : null
  }
}