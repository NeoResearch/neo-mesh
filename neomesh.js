// neo-mesh

(function(exports) {
"use strict";

// storing internal information on javascript BN library
//const BN = require('bn.js');

// function utils
function assert(val, msg) {
	if (!val) throw new Error(msg || 'Assertion failed');
}

function NeoMesh() {
}

NeoMesh._construct = function() {
	return new NeoMesh();
};


NeoMesh.defConfig = {}; // empty config


NeoMesh.prototype.someMethod = function() {

  return "";
};


NeoMesh.staticMethod = function() {
};


exports.NeoMesh = NeoMesh;
})(typeof exports !== 'undefined' ? exports : this);


