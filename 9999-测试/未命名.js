// 使用javascript实现javascript解析器
// 作者：李鑫
// 日期：2019-12-31
// 说明：本程序仅供学习交流使用，不得用于商业用途
// 本程序仅供学习交流使用，不得用于商业用途


// 词法分析器
function Lexer(input) {
  this.input = input;
  this.pos = 0;
  this.currentChar = input[this.pos];
}

Lexer.prototype.error = function () {

  throw "Error parsing input";
}

Lexer.prototype.advance = function () {
  this.pos++;
  if (this.pos > this.input.length - 1) {
    this.currentChar = null;
  } else {
    this.currentChar = this.input[this.pos];
  }
}

Lexer.prototype.skipWhitespace = function () {
  while (this.currentChar != null && this.currentChar == ' ') {
    this.advance();
  }
}

Lexer.prototype.integer = function () {
  var result = '';
  while (this.currentChar != null && this.isNumeric(this.currentChar)) {
    result += this.currentChar;
    this.advance();
  }
  return parseInt(result);
}

Lexer.prototype.isNumeric = function (ch) {
  return !isNaN(parseInt(ch));
}

Lexer.prototype.get_next_token = function () {
  while (this.currentChar != null) {
    if (this.currentChar == ' ') {
      this.skipWhitespace();
      continue;
    }
    if (this.isNumeric(this.currentChar)) {
      return new Token(INTEGER, this.integer());
    }
    if (this.currentChar == '+') {
      this.advance();
      return new Token(PLUS, '+');
    }
    if (this.currentChar == '-') {
      this.advance();
      return new Token(MINUS, '-');
    }
    if (this.currentChar == '*') {
      this.advance();
      return new Token(MUL, '*');
    }
    if (this.currentChar == '/') {
      this.advance();
      return new Token(DIV, '/');
    }
    this.error();
  }
  return new Token(EOF, null);
}

// 语法分析器

function Parser(lexer) {
  this.lexer = lexer;
  this.currentToken = this.lexer.get_next_token();
}

Parser.prototype.error = function () {
  throw "Error parsing input";
}

Parser.prototype.eat = function (tokenType) {
  if (this.currentToken.type == tokenType) {
    this.currentToken = this.lexer.get_next_token();
  } else {
    this.error();
  }
}

Parser.prototype.factor = function () {

  var token = this.currentToken;
  this.eat(INTEGER);
  return token.value;
}

Parser.prototype.term = function () {
  var result = this.factor();
  while (this.currentToken.type == MUL || this.currentToken.type == DIV) {
    var token = this.currentToken;
    if (token.type == MUL) {
      this.eat(MUL);
      result = result * this.factor();
    } else if (token.type == DIV) {
      this.eat(DIV);
      result = result / this.factor();
    }
  }
  return result;
}

Parser.prototype.expr = function () {
  var result = this.term();
  while (this.currentToken.type == PLUS || this.currentToken.type == MINUS) {
    var token = this.currentToken;
    if (token.type == PLUS) {
      this.eat(PLUS);
      result = result + this.term();
    } else if (token.type == MINUS) {
      this.eat(MINUS);
      result = result - this.term();
    }
  }
  return result;
}

Parser.prototype.parse = function () {
  return this.expr();
}

// 词法分析器的token
var INTEGER = 'INTEGER';
var PLUS = 'PLUS';
var MINUS = 'MINUS';
var MUL = 'MUL';
var DIV = 'DIV';
var EOF = 'EOF';

function Token(type, value) {
  this.type = type;
  this.value = value;
}

// 解释器
function Interpreter(parser) {
  this.parser = parser;
}

Interpreter.prototype.interpret = function () {
  var result = this.parser.parse();
  return result;
}

// 主程序
function main() {
  var input = '7 + 3 * 2 - 4 / 2';
  var lexer = new Lexer(input);
  console.log(lexer);
  var parser = new Parser(lexer);
  var interpreter = new Interpreter(parser);
  var result = interpreter.interpret();
  console.log(result);
}

main();
