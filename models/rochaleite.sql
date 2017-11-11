DROP DATABASE IF EXISTS rochaleite;
CREATE DATABASE IF NOT EXISTS rochaleite;

USE rochaleite;

DROP TABLE IF EXISTS projects, projects_details, users, images;
CREATE TABLE IF NOT EXISTS projects (
	project_id			INT UNSIGNED	NOT NULL AUTO_INCREMENT,
	thumbnail	  		TEXT					NOT NULL DEFAULT '',
	is_rehabilitation	BOOLEAN			NOT NULL DEFAULT FALSE ,
	is_equipments	  BOOLEAN				NOT NULL DEFAULT FALSE ,
	is_housing	  	BOOLEAN				NOT NULL DEFAULT FALSE ,
	is_completed	  BOOLEAN				NOT NULL DEFAULT FALSE ,
	is_under_construction	  BOOLEAN			NOT NULL DEFAULT FALSE ,
	PRIMARY KEY  (project_id)
);

CREATE TABLE IF NOT EXISTS projects_details (
	project_id	INT UNSIGNED	NOT NULL,
	title				VARCHAR(50)	NOT NULL DEFAULT '',
	description	TEXT		NOT NULL DEFAULT '',
	address			VARCHAR(50)	DEFAULT '',
	language		CHAR(2)		NOT NULL DEFAULT 'pt',
	FOREIGN KEY (project_id) REFERENCES projects (project_id)
);

CREATE TABLE IF NOT EXISTS images (
	project_id	INT UNSIGNED	NOT NULL,
	path				TEXT			NOT NULL DEFAULT '',
	FOREIGN KEY (project_id)		REFERENCES projects (project_id)
);

CREATE TABLE IF NOT EXISTS users (
	username	VARCHAR(50)	NOT NULL DEFAULT '',
	password	TEXT		NOT NULL DEFAULT '',
	PRIMARY KEY  (username)
);

INSERT INTO projects VALUES (1,'', TRUE , FALSE, FALSE, FALSE, FALSE);
INSERT INTO projects VALUES (2,'', FALSE, FALSE, FALSE, FALSE, TRUE);