// #!/bin/env node
var express = require('express');
var fs      = require('fs');
var request = require('request');
var cheerio = require("cheerio");
var moment = require("moment");
var MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectID;

var sServer = function() {
	var self = this;
	self.init = function() {
		
	}
	self.go = function() {

	}
}


/*
	Main function "run()"
*/
var run = new sServer();
run.init();
run.go();