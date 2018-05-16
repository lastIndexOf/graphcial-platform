
// position

Blockly.Blocks['position'] = {
  init: function() {
    this.jsonInit({
      "type": "position",
      "message0": "向 %1 移动 %2",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "position",
          "options": [
            [
              "x方向",
              "x"
            ],
            [
              "y方向",
              "y"
            ],
            [
              "z方向",
              "z"
            ]
          ]
        },
        {
          "type": "input_value",
          "name": "translate"
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "colour": 210,
      "tooltip": "",
      "helpUrl": ""
    })
  }
}

Blockly.JavaScript['position'] = function(block) {
  var dropdown_position = block.getFieldValue('position')
  var value_translate = Blockly.JavaScript.valueToCode(block, 'translate', Blockly.JavaScript.ORDER_ATOMIC)
  // TODO: Assemble JavaScript into code variable.
  var code = `  this.position.${dropdown_position} += ${value_translate || 0} \n`
  return code
}

// roration

Blockly.Blocks['rotation'] = {
  init: function() {
    this.jsonInit({
      "type": "rotation",
      "message0": "向 %1 旋转 %2",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "rotation",
          "options": [
            [
              "x方向",
              "x"
            ],
            [
              "y方向",
              "y"
            ],
            [
              "z方向",
              "z"
            ]
          ]
        },
        {
          "type": "input_value",
          "name": "rotation"
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "colour": 210,
      "tooltip": "",
      "helpUrl": ""
    })
  }
}

Blockly.JavaScript['rotation'] = function(block) {
  var dropdown_position = block.getFieldValue('rotation')
  var value_rotation = Blockly.JavaScript.valueToCode(block, 'rotation', Blockly.JavaScript.ORDER_ATOMIC)
  // TODO: Assemble JavaScript into code variable.
  var code = `  this.rotation.${dropdown_position} += ${value_rotation || 0} \n`
  return code
}

// scale

Blockly.Blocks['scale'] = {
  init: function() {
    this.jsonInit({
      "type": "scale",
      "message0": "向 %1 缩放 %2",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "scale",
          "options": [
            [
              "x方向",
              "x"
            ],
            [
              "y方向",
              "y"
            ],
            [
              "z方向",
              "z"
            ]
          ]
        },
        {
          "type": "input_value",
          "name": "scale"
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "colour": 210,
      "tooltip": "",
      "helpUrl": ""
    })
  }
}

Blockly.JavaScript['scale'] = function(block) {
  var dropdown_position = block.getFieldValue('scale')
  var value_scale = Blockly.JavaScript.valueToCode(block, 'scale', Blockly.JavaScript.ORDER_ATOMIC)
  // TODO: Assemble JavaScript into code variable.
  var code = `  this.scale.${dropdown_position} += ${value_scale || 0} \n`
  return code
}

// console

Blockly.Blocks['console'] = {
  init: function () {
    this.jsonInit({
      "type": "console",
      "message0": "在控制台输出 %1",
      "args0": [
        {
          "type": "input_value",
          "name": "console"
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "colour": 160,
      "tooltip": "",
      "helpUrl": ""
    })
  }
}

Blockly.JavaScript['console'] = function(block) {
  var value_console = Blockly.JavaScript.valueToCode(block, 'console', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `console.log(${value_console}) \n`
  return code;
};

// camera change

Blockly.Blocks['camera_change'] = {
  init: function () {
    this.jsonInit({
      "type": "camera_change",
      "message0": "切换视角至此相机",
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "colour": 210,
      "tooltip": "",
      "helpUrl": ""
    })
  }
}

Blockly.JavaScript['camera_change'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'player.setCamera(this) \n';
  return code;
};

// get object property

Blockly.Blocks['get_object_property'] = {
  init: function () {
    this.jsonInit({
      "type": "get_object_property",
      "message0": "从对象 %1 中取出属性 %2",
      "args0": [
        {
          "type": "field_variable",
          "name": "object",
          "variable": "item"
        },
        {
          "type": "field_input",
          "name": "property",
          "text": "property"
        }
      ],
      "inputsInline": true,
      "output": null,
      "colour": 260,
      "tooltip": "",
      "helpUrl": ""
    })
  }
}

Blockly.JavaScript['get_object_property'] = function(block) {
  var variable_object = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('object'), Blockly.Variables.NAME_TYPE);
  var text_property = block.getFieldValue('property');
  // TODO: Assemble JavaScript into code variable.
  var code = `${variable_object}.${text_property}`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

// look at center

Blockly.Blocks['look_at_center'] = {
  init: function () {
    this.jsonInit({
      "type": "look_at_center",
      "message0": "看向中心位置",
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "colour": 210,
      "tooltip": "",
      "helpUrl": ""
    })
  }
}

Blockly.JavaScript['look_at_center'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'this.lookAt(scene.position) \n';
  // TODO: Change ORDER_NONE to the correct strength.
  return code;
};

// check position

Blockly.Blocks['check_position'] = {
  init: function () {
    this.jsonInit({
      "type": "check_position",
      "message0": "移动到 %1 点 %2",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "position",
          "options": [
            [
              "x方向",
              "x"
            ],
            [
              "y方向",
              "y"
            ],
            [
              "z方向",
              "z"
            ]
          ]
        },
        {
          "type": "input_value",
          "name": "check_transition",
          "check": "Number"
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "colour": 210,
      "tooltip": "",
      "helpUrl": ""
    })
  }
}

Blockly.JavaScript['check_position'] = function(block) {
  var dropdown_position = block.getFieldValue('position');
  var value_check_transition = Blockly.JavaScript.valueToCode(block, 'check_transition', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `this.position.${dropdown_position} = ${value_check_transition} \n`;
  return code;
};

// keydown

Blockly.Blocks['key_down'] = {
  init: function () {
    this.jsonInit({
      "type": "key_down",
      "message0": "按下键盘按键 %1",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "keyCode",
          "options": [
            [
              "←",
              "37"
            ],
            [
              "↑",
              "38"
            ],
            [
              "→",
              "39"
            ],
            [
              "↓",
              "40"
            ]
          ]
        }
      ],
      "inputsInline": true,
      "output": "Boolean",
      "colour": 210,
      "tooltip": "",
      "helpUrl": ""
    })
  }
}

Blockly.JavaScript['key_down'] = function(block) {
  var dropdown_keycode = block.getFieldValue('keyCode');
  // TODO: Assemble JavaScript into code variable.
  var code = `event.keyCode === ${dropdown_keycode}`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

// get object by id

Blockly.Blocks['get_object_by_id'] = {
  init: function () {
    this.jsonInit({
      "type": "get_object_by_id",
      "message0": "获取id为 %1 的素材",
      "args0": [
        {
          "type": "field_input",
          "name": "ID",
          "text": "id"
        }
      ],
      "output": null,
      "colour": 210,
      "tooltip": "",
      "helpUrl": ""
    })
  }
}

Blockly.JavaScript['get_object_by_id'] = function(block) {
  var text_id = block.getFieldValue('ID');
  // TODO: Assemble JavaScript into code variable.
  var code = `this.getObjectByName('${text_id}')`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

// this transition

Blockly.Blocks['this_transition'] = {
  init: function () {
    this.jsonInit({
      "type": "this_transition",
      "message0": "该角色在 %1 方向上的 %2",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "direction",
          "options": [
            [
              "x",
              "x"
            ],
            [
              "y",
              "y"
            ],
            [
              "z",
              "z"
            ]
          ]
        },
        {
          "type": "field_dropdown",
          "name": "transition",
          "options": [
            [
              "坐标",
              "position"
            ],
            [
              "旋转",
              "rotation"
            ],
            [
              "缩放",
              "scale"
            ]
          ]
        }
      ],
      "output": null,
      "colour": 210,
      "tooltip": "",
      "helpUrl": ""
    })
  }
}

Blockly.JavaScript['this_transition'] = function(block) {
  var dropdown_direction = block.getFieldValue('direction');
  var dropdown_transition = block.getFieldValue('transition');
  // TODO: Assemble JavaScript into code variable.
  var code = `this.${dropdown_transition}.${dropdown_direction}`;
  return [code, Blockly.JavaScript.ORDER_NONE];
};

// create direction

Blockly.Blocks['create_direction'] = {
  init: function () {
    this.jsonInit({
      "type": "create_direction",
      "message0": "创建一个在x %1 y %2 z的方向 %3",
      "args0": [
        {
          "type": "input_value",
          "name": "direction_x"
        },
        {
          "type": "input_value",
          "name": "direction_y"
        },
        {
          "type": "input_value",
          "name": "direction_z"
        }
      ],
      "output": null,
      "colour": 230,
      "tooltip": "",
      "helpUrl": ""
    })
  }
}

Blockly.JavaScript['create_direction'] = function(block) {
  var value_direction_x = Blockly.JavaScript.valueToCode(block, 'direction_x', Blockly.JavaScript.ORDER_ATOMIC);
  var value_direction_y = Blockly.JavaScript.valueToCode(block, 'direction_y', Blockly.JavaScript.ORDER_ATOMIC);
  var value_direction_z = Blockly.JavaScript.valueToCode(block, 'direction_z', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `(function () {
    var direction = new THREE.Vector3();

    direction.x = ${value_direction_x}
    direction.y = ${value_direction_y}
    direction.z = ${value_direction_z}

    direction.normalize()

    return direction 
  })()`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

// object transition

Blockly.Blocks['object_transition'] = {
  init: function () {
    this.jsonInit({
      "type": "object_transition",
      "message0": "角色 %1 在 %2 方向上的 %3",
      "args0": [
        {
          "type": "field_variable",
          "name": "object",
          "variable": "item"
        },
        {
          "type": "field_dropdown",
          "name": "direction",
          "options": [
            [
              "x",
              "x"
            ],
            [
              "y",
              "y"
            ],
            [
              "z",
              "z"
            ]
          ]
        },
        {
          "type": "field_dropdown",
          "name": "transition",
          "options": [
            [
              "坐标",
              "position"
            ],
            [
              "旋转",
              "rotation"
            ],
            [
              "缩放",
              "scale"
            ]
          ]
        }
      ],
      "output": null,
      "colour": 210,
      "tooltip": "",
      "helpUrl": ""
    })
  }
}

Blockly.JavaScript['object_transition'] = function(block) {
  var variable_object = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('object'), Blockly.Variables.NAME_TYPE);
  var dropdown_direction = block.getFieldValue('direction');
  var dropdown_transition = block.getFieldValue('transition');
  // TODO: Assemble JavaScript into code variable.
  var code = `${variable_object}.${dropdown_transition}.${dropdown_direction}`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

// direction reverse

Blockly.Blocks['direction_reverse'] = {
  init: function () {
    this.jsonInit({
      "type": "direction_reverse",
      "message0": "颠倒方向 %1 的 %2",
      "args0": [
        {
          "type": "field_variable",
          "name": "direction",
          "variable": "direction"
        },
        {
          "type": "field_dropdown",
          "name": "order",
          "options": [
            [
              "x方向",
              "x"
            ],
            [
              "y方向",
              "y"
            ],
            [
              "z方向",
              "z"
            ]
          ]
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": 230,
      "tooltip": "",
      "helpUrl": ""
    })
  }
}

Blockly.JavaScript['direction_reverse'] = function(block) {
  var variable_direction = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('direction'), Blockly.Variables.NAME_TYPE);
  var dropdown_order = block.getFieldValue('order');
  // TODO: Assemble JavaScript into code variable.
  var code = `${variable_direction}.${dropdown_order} = -${variable_direction}.${dropdown_order} \n`;
  return code;
};

// assignment

Blockly.Blocks['assignment'] = {
  init: function () {
    this.jsonInit({
      "type": "assignment",
      "message0": "赋值 %1 为 %2 %3",
      "args0": [
        {
          "type": "input_value",
          "name": "A"
        },
        {
          "type": "input_dummy"
        },
        {
          "type": "input_value",
          "name": "B"
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": 230,
      "tooltip": "",
      "helpUrl": ""
    })
  }
}

Blockly.JavaScript['assignment'] = function(block) {
  var value_a = Blockly.JavaScript.valueToCode(block, 'A', Blockly.JavaScript.ORDER_ATOMIC);
  var value_b = Blockly.JavaScript.valueToCode(block, 'B', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `${value_a} = ${value_b} \n`;
  return code;
};

// move_under_direction

Blockly.Blocks['move_under_direction'] = {
  init: function () {
    this.jsonInit({
      "type": "move_under_direction",
      "message0": "让角色 %1 沿着方向 %2 以速度 %3 运动",
      "args0": [
        {
          "type": "field_variable",
          "name": "role",
          "variable": "role"
        },
        {
          "type": "field_variable",
          "name": "direction",
          "variable": "direction"
        },
        {
          "type": "field_input",
          "name": "速度",
          "text": "1"
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": 210,
      "tooltip": "",
      "helpUrl": ""
    })
  }
}

Blockly.JavaScript['move_under_direction'] = function(block) {
  var variable_role = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('role'), Blockly.Variables.NAME_TYPE);
  var variable_direction = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('direction'), Blockly.Variables.NAME_TYPE);
  var text___ = block.getFieldValue('速度');
  // TODO: Assemble JavaScript into code variable.
  var code = `var speed = new THREE.Vector3()
  ${variable_role}.position.add(speed.copy(${variable_direction}).multiplyScalar(${text___})) \n`;
  return code;
};

// assign_object_property

Blockly.Blocks['assign_object_property'] = {
  init: function () {
    this.jsonInit({
      "type": "assign_object_property",
      "message0": "给对象 %1 的属性 %2 赋值为 %3",
      "args0": [
        {
          "type": "field_variable",
          "name": "object",
          "variable": "item"
        },
        {
          "type": "field_input",
          "name": "property",
          "text": "property"
        },
        {
          "type": "input_value",
          "name": "new_property"
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "colour": 260,
      "tooltip": "",
      "helpUrl": ""
    })
  }
}

Blockly.JavaScript['assign_object_property'] = function(block) {
  var variable_object = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('object'), Blockly.Variables.NAME_TYPE);
  var text_property = block.getFieldValue('property');
  var value_new_property = Blockly.JavaScript.valueToCode(block, 'new_property', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `${variable_object}.${text_property} = ${value_new_property} \n`;
  return code;
};

// create_group

Blockly.Blocks['create_group'] = {
  init: function () {
    this.jsonInit({
      "type": "create_group",
      "message0": "创建一个容器",
      "inputsInline": true,
      "output": null,
      "colour": 230,
      "tooltip": "",
      "helpUrl": ""
    })
  }
}

Blockly.JavaScript['create_group'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = `(function (self) {
  var group = new THREE.Group()
  self.add(group)

  return group
})(this) `;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

// create_raycaster

Blockly.Blocks['create_raycaster'] = {
  init: function () {
    this.jsonInit({
      "type": "create_raycaster",
      "message0": "创建一条射线",
      "inputsInline": true,
      "output": null,
      "colour": 230,
      "tooltip": "",
      "helpUrl": ""
    })
  }
}

Blockly.JavaScript['create_raycaster'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = `new THREE.Raycaster() `;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

// create_raycaster

Blockly.Blocks['raycaster_set'] = {
  init: function () {
    this.jsonInit({
      "type": "raycaster_set",
      "message0": "设置射线 %1 的出发点为 %2 发射方向为 %3",
      "args0": [
        {
          "type": "field_variable",
          "name": "raycaster",
          "variable": "raycaster"
        },
        {
          "type": "field_input",
          "name": "origin",
          "text": "origin"
        },
        {
          "type": "field_variable",
          "name": "direction",
          "variable": "direction"
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "colour": 210,
      "tooltip": "",
      "helpUrl": ""
    })
  }
}

Blockly.JavaScript['raycaster_set'] = function(block) {
  var variable_raycaster = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('raycaster'), Blockly.Variables.NAME_TYPE);
  var text_origin = block.getFieldValue('origin');
  var variable_direction = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('direction'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble JavaScript into code variable.
  var code = `${variable_raycaster}.set(${text_origin}, ${variable_direction}) \n`;
  return code;
};

// group_add

Blockly.Blocks['group_add'] = {
  init: function () {
    this.jsonInit({
      "type": "group_add",
      "message0": "在容器 %1 中加入 %2",
      "args0": [
        {
          "type": "field_variable",
          "name": "group",
          "variable": "group"
        },
        {
          "type": "field_input",
          "name": "child",
          "text": "child"
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "colour": 210,
      "tooltip": "",
      "helpUrl": ""
    })
  }
}

Blockly.JavaScript['group_add'] = function(block) {
  var variable_group = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('group'), Blockly.Variables.NAME_TYPE);
  var text_child = block.getFieldValue('child');
  // TODO: Assemble JavaScript into code variable.
  var code = `${variable_group}.add(${text_child}) \n \n`;
  return code;
};

// group_remove

Blockly.Blocks['group_remove'] = {
  init: function () {
    this.jsonInit({
      "type": "group_remove",
      "message0": "在容器 %1 中移除 %2",
      "args0": [
        {
          "type": "field_variable",
          "name": "group",
          "variable": "group"
        },
        {
          "type": "field_input",
          "name": "child",
          "text": "child"
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "colour": 210,
      "tooltip": "",
      "helpUrl": ""
    })
  }
}

Blockly.JavaScript['group_remove'] = function(block) {
  var variable_group = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('group'), Blockly.Variables.NAME_TYPE);
  var text_child = block.getFieldValue('child');
  // TODO: Assemble JavaScript into code variable.
  var code = `${variable_group}.remove(${text_child}) \n \n`;
  return code;
};

// raycaster_insert_object

Blockly.Blocks['raycaster_insert_object'] = {
  init: function () {
    this.jsonInit({
      "type": "raycaster_insert_object",
      "message0": "向物体所在的列表 %1 发出射线 %2 返回相交物体组成的列表",
      "args0": [
        {
          "type": "field_input",
          "name": "list",
          "text": "list"
        },
        {
          "type": "field_variable",
          "name": "raycaster",
          "variable": "raycaster"
        }
      ],
      "inputsInline": true,
      "output": null,
      "colour": 210,
      "tooltip": "",
      "helpUrl": ""
    })
  }
}

Blockly.JavaScript['raycaster_insert_object'] = function(block) {
  var text_list = block.getFieldValue('list');
  var variable_raycaster = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('raycaster'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble JavaScript into code variable.
  var code = `(function () {
    return ${variable_raycaster}.intersectObjects(${text_list}) 
  })()`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

// object_clone

Blockly.Blocks['object_clone'] = {
  init: function () {
    this.jsonInit({
      "type": "object_clone",
      "message0": "返回一个 %1 角色的复制体",
      "args0": [
        {
          "type": "field_variable",
          "name": "object",
          "variable": "object"
        }
      ],
      "inputsInline": true,
      "output": null,
      "colour": 210,
      "tooltip": "",
      "helpUrl": ""
    })
  }
}

Blockly.JavaScript['object_clone'] = function(block) {
  var variable_object = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('object'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble JavaScript into code variable.
  var code = `${variable_object}.clone()`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

// player_stop

Blockly.Blocks['player_stop'] = {
  init: function () {
    this.jsonInit({
      "type": "player_stop",
      "message0": "结束游戏",
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "colour": 210,
      "tooltip": "",
      "helpUrl": ""
    })
  }
}

Blockly.JavaScript['player_stop'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = `editor.signals.stopPlayer.dispatch() \n`;
  return code;
};

// setInterval

Blockly.Blocks['set_interval'] = {
  init: function () {
    this.jsonInit({
      "type": "set_interval",
      "message0": "设置一个定时器每隔 %1 毫秒执行 %2",
      "args0": [
        {
          "type": "field_input",
          "name": "time",
          "text": "16.77"
        },
        {
          "type": "input_statement",
          "name": "interval"
        }
      ],
      "output": null,
      "colour": 210,
      "tooltip": "",
      "helpUrl": ""
    })
  }
}

Blockly.JavaScript['set_interval'] = function(block) {
  var text_time = block.getFieldValue('time');
  var statements_interval = Blockly.JavaScript.statementToCode(block, 'interval');
  // TODO: Assemble JavaScript into code variable.
  var code = `setInterval(() => {
  ${statements_interval}
}, ${text_time})`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

// clear_interval

Blockly.Blocks['clear_interval'] = {
  init: function () {
    this.jsonInit({
      "type": "clear_interval",
      "message0": "清除定时器 %1",
      "args0": [
        {
          "type": "field_variable",
          "name": "interval",
          "variable": "interval"
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": 210,
      "tooltip": "",
      "helpUrl": ""
    })
  }
}

Blockly.JavaScript['clear_interval'] = function(block) {
  var variable_interval = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('interval'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble JavaScript into code variable.
  var code = `clearInterval(${variable_interval}) \n`;
  return code;
};