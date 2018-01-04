DROP DATABASE IF EXISTS rochaleite;
CREATE DATABASE IF NOT EXISTS rochaleite;

USE rochaleite;

DROP TABLE IF EXISTS projects, projects_details, users, images;
CREATE TABLE IF NOT EXISTS projects (
	project_id    INT UNSIGNED  NOT NULL AUTO_INCREMENT,
	id            TEXT					NOT NULL,
	thumbnail     TEXT          NOT NULL DEFAULT '',
	image					TEXT          NOT NULL DEFAULT '',
	categories    TEXT          NOT NULL DEFAULT '',
	PRIMARY KEY (project_id)
);

CREATE TABLE IF NOT EXISTS projects_details (
	project_id    INT UNSIGNED	NOT NULL,
	title         VARCHAR(50)	  NOT NULL DEFAULT '',
	description   TEXT		      NOT NULL DEFAULT '',
	address       VARCHAR(50)	  DEFAULT '',
	language      ENUM('pt', 'en') NOT NULL DEFAULT 'pt',
	FOREIGN KEY (project_id) REFERENCES projects(project_id)
);

CREATE TABLE IF NOT EXISTS images (
	project_id    INT UNSIGNED	NOT NULL,
	path          TEXT			    NOT NULL DEFAULT '',
	FOREIGN KEY (project_id) REFERENCES projects(project_id)
);

CREATE TABLE IF NOT EXISTS users (
	username      VARCHAR(50)	  NOT NULL DEFAULT '',
	password      TEXT		      NOT NULL DEFAULT '',
	PRIMARY KEY (username)
);

INSERT INTO projects VALUES (1,'');
INSERT INTO projects VALUES (2,'');