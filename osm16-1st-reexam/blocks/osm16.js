'use strict';

goog.provide('Blockly.Blocks.osm16');

goog.require('Blockly.Blocks');

Blockly.Blocks.osm16.t2_HUE = 120;
Blockly.Blocks.osm16.var_HUE = 290;
Blockly.Blocks.osm16.sem_HUE = 120;

Blockly.Blocks['osm16_1st_reexam_sem_decl'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Declarations");
    this.appendStatementInput("DECL")
        .setCheck("vardecl");
    this.setNextStatement(true, "init");
    this.setInputsInline(true);
    this.setDeletable(false);
    this.setMovable(false);
    this.setColour(Blockly.Blocks.osm16.t2_HUE);
  }
};

Blockly.Blocks['osm16_1st_reexam_sem_init'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("init()");
    this.appendStatementInput("INIT")
        .setCheck(null);
    this.setPreviousStatement(true, "init");
    this.setNextStatement(true, "init");
    this.setInputsInline(true);
    this.setDeletable(false);
    this.setMovable(false);
    this.setColour(Blockly.Blocks.osm16.t2_HUE);
  }
};

Blockly.Blocks['osm16_1st_reexam_sem_intersection'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("intersection()");
    this.appendStatementInput("INTERSECTION")
        .setCheck(null);
    this.setPreviousStatement(true, "init");
    this.setNextStatement(true, "init");
    this.setInputsInline(true);
    this.setDeletable(false);
    this.setMovable(false);
    this.setColour(Blockly.Blocks.osm16.t2_HUE);
  }
};

Blockly.Blocks['osm16_1st_reexam_sem_vehicle'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("vehicle(")
        .appendField(new Blockly.FieldVariable("i"), "VARNAME")
        .appendField(")");
    this.appendStatementInput("VEHICLE")
        .setCheck(null);
    this.setPreviousStatement(true, "init");
    this.setInputsInline(true);
    this.setDeletable(false);
    this.setMovable(false);
    this.setColour(Blockly.Blocks.osm16.t2_HUE);
  }
};

Blockly.Blocks['osm16_varget'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable(), "VARNAME");
    this.setOutput(true, "var");
    this.setColour(Blockly.Blocks.osm16.var_HUE);
    this.setTooltip('Use a variable name.');
  }
};

Blockly.Blocks['osm16_arrget'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable(), "ARRAY")
        .appendField("[")
        .appendField(new Blockly.FieldVariable(), "INDEX")
        .appendField("]");
    this.setInputsInline(true);
    this.setOutput(true, "var");
    this.setColour(Blockly.Blocks.osm16.var_HUE);
    this.setTooltip('Use an array name with index.');
  }
};

Blockly.Blocks['osm16_varset'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable(), "VARNAME")
        .appendField("=");
    this.appendValueInput("VALUE");
    this.setInputsInline(true);
    this.setNextStatement(true, null);
    this.setPreviousStatement(true, null);
    this.setColour(Blockly.Blocks.osm16.var_HUE);
    this.setTooltip('Use a variable name.');
  }
};

Blockly.Blocks['osm16_varincdec'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable(), "VARNAME")
        .appendField(new Blockly.FieldDropdown([
            ["++", "INC"],
            ["--", "DEC"]
          ]), "DIRECTION");
    this.setNextStatement(true, null);
    this.setPreviousStatement(true, null);
    this.setColour(Blockly.Blocks.osm16.var_HUE);
    this.setTooltip('Increment/decrement a value.');
  }
};

Blockly.Blocks['osm16_arrset'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable(), "ARRAY")
        .appendField("[")
        .appendField(new Blockly.FieldVariable(), "INDEX")
        .appendField("] =");
    this.appendValueInput("VALUE");
    this.setInputsInline(true);
    this.setNextStatement(true, null);
    this.setPreviousStatement(true, null);
    this.setColour(Blockly.Blocks.osm16.var_HUE);
    this.setTooltip('Use an array name with index.');
  }
};

Blockly.Blocks['osm16_arrincdec'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable(), "ARRAY")
        .appendField("[")
        .appendField(new Blockly.FieldVariable(), "INDEX")
        .appendField("]")
        .appendField(new Blockly.FieldDropdown([
            ["++", "INC"],
            ["--", "DEC"]
          ]), "DIRECTION");
    this.setNextStatement(true, null);
    this.setPreviousStatement(true, null);
    this.setColour(Blockly.Blocks.osm16.var_HUE);
    this.setTooltip('Increment an array element.');
  }
};

Blockly.Blocks['osm16_int_var'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("int")
        .appendField(new Blockly.FieldVariable(), "VARNAME")
        .appendField("=");
    this.appendValueInput("INIT_VALUE")
        .setCheck("Number");
    this.setInputsInline(true);
    this.setPreviousStatement(true, "vardecl");
    this.setNextStatement(true, "vardecl");
    this.setColour(Blockly.Blocks.osm16.var_HUE);
    this.setTooltip('Declare a new integer variable.');
  }
};

Blockly.Blocks['osm16_int_arr'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("int")
        .appendField(new Blockly.FieldVariable(), "VARNAME")
        .appendField("[");
    this.appendValueInput("N")
        .setCheck("var");
    this.appendDummyInput()
        .appendField("]")
    this.setInputsInline(true);
    this.setPreviousStatement(true, "vardecl");
    this.setNextStatement(true, "vardecl");
    this.setColour(Blockly.Blocks.osm16.var_HUE);
    this.setTooltip('Declare an array of integers.');
  }
};

Blockly.Blocks['osm16_sem_t_var'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("sem_t")
        .appendField(new Blockly.FieldVariable(), "VARNAME");
    this.setInputsInline(true);
    this.setPreviousStatement(true, "vardecl");
    this.setNextStatement(true, "vardecl");
    this.setColour(Blockly.Blocks.osm16.var_HUE);
    this.setTooltip('Declare an uninitizlied semaphore.');
  }
};

Blockly.Blocks['osm16_sem_t_arr'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("sem_t")
        .appendField(new Blockly.FieldVariable(), "VARNAME")
        .appendField("[");
    this.appendValueInput("N")
        .setCheck("var");
    this.appendDummyInput()
        .appendField("]")
    this.setInputsInline(true);
    this.setPreviousStatement(true, "vardecl");
    this.setNextStatement(true, "vardecl");
    this.setColour(Blockly.Blocks.osm16.var_HUE);
    this.setTooltip('Declare an array of (uninitialized) semaphores.');
  }
};

Blockly.Blocks['osm16_sem_init'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("sem_init(");
    this.appendValueInput("SEMAPHORE")
        .setCheck("var");
    this.appendDummyInput()
        .appendField(",");
    this.appendValueInput("VALUE")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField(")");
    this.setInputsInline(true);
    this.setColour(Blockly.Blocks.osm16.sem_HUE);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Procure the semaphore');
  }
};

Blockly.Blocks['osm16_sem_P'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("sem_P(");
    this.appendValueInput("SEMAPHORE")
        .setCheck("var");
    this.appendDummyInput()
        .appendField(")");
    this.setInputsInline(true);
    this.setColour(Blockly.Blocks.osm16.sem_HUE);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Procure the semaphore');
  }
};

Blockly.Blocks['osm16_sem_V'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("sem_V(");
    this.appendValueInput("SEMAPHORE")
        .setCheck("var");
    this.appendDummyInput()
        .appendField(")");
    this.setInputsInline(true);
    this.setColour(Blockly.Blocks.osm16.sem_HUE);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Vacate the semaphore');
  }
};

Blockly.Blocks['osm16_for'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("for (int")
        .appendField(new Blockly.FieldVariable(), "VARNAME")
        .appendField("= 1 to");
    this.appendValueInput("END");
    this.appendDummyInput()
        .appendField(")");
    this.appendStatementInput("BODY")
        .setCheck(null);
    this.setInputsInline(true);
    this.setColour(210);
    this.setTooltip('');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};

Blockly.Blocks['osm16_if'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("if (");
    this.appendValueInput("LHS");
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([
            ['=', 'EQ'],
            ['\u2260', 'NEQ'],
            ['<', 'LT'],
            ['\u2264', 'LTE'],
            ['>', 'GT'],
            ['\u2265', 'GTE']
          ]), "OPERATOR");
    this.appendValueInput("RHS");
    this.appendDummyInput()
        .appendField(")");
    this.appendStatementInput("TRUEBODY")
        .appendField("then")
        .setCheck(null);
    this.appendStatementInput("FALSEBODY")
        .appendField("else")
        .setCheck(null);
    this.setInputsInline(true);
    this.setColour(210);
    this.setTooltip('');
    this.setPreviousStatement(true, null);
  }
};

Blockly.Blocks['osm16_infloop'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("loop forever");
    this.appendStatementInput("BODY")
        .setCheck(null);
    this.setInputsInline(false);
    this.setColour(210);
    this.setTooltip('Loop indefinitely');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};

Blockly.Blocks['osm16_break'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("break");
    this.setColour(210);
    this.setTooltip('Break out of the loop.');
    this.setPreviousStatement(true, null);
  }
};

Blockly.Blocks['osm16_arithmetic'] = {
  init: function() {
    this.jsonInit({
      "message0": "%1 %2 %3",
      "args0": [
        {
          "type": "input_value",
          "name": "A",
          "check": ["var", "Number"]
        },
        {
          "type": "field_dropdown",
          "name": "OP",
          "options":
            [[Blockly.Msg.MATH_ADDITION_SYMBOL, 'ADD'],
             [Blockly.Msg.MATH_SUBTRACTION_SYMBOL, 'MINUS'],
             [Blockly.Msg.MATH_MULTIPLICATION_SYMBOL, 'MULTIPLY'],
             ["(mod)", 'MODULO']]
        },
        {
          "type": "input_value",
          "name": "B",
          "check": ["var", "Number"]
        }
      ],
      "inputsInline": true,
      "output": "Number",
      "colour": Blockly.Blocks.math.HUE,
      "helpUrl": Blockly.Msg.MATH_ARITHMETIC_HELPURL
    });
    // Assign 'this' to a variable for use in the tooltip closure below.
    var thisBlock = this;
    this.setTooltip(function() {
      var mode = thisBlock.getFieldValue('OP');
      var TOOLTIPS = {
        'ADD': Blockly.Msg.MATH_ARITHMETIC_TOOLTIP_ADD,
        'MINUS': Blockly.Msg.MATH_ARITHMETIC_TOOLTIP_MINUS,
        'MULTIPLY': Blockly.Msg.MATH_ARITHMETIC_TOOLTIP_MULTIPLY,
        'DIVIDE': Blockly.Msg.MATH_ARITHMETIC_TOOLTIP_DIVIDE,
        'POWER': Blockly.Msg.MATH_ARITHMETIC_TOOLTIP_POWER
      };
      return TOOLTIPS[mode];
    });
  }
};
