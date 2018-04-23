
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