-- Create tables
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
	order_number	INT UNSIGNED	NOT NULL,
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

-- Populate tables
INSERT INTO projects (id, thumbnail, image, categories, order_number) VALUES ('casa-murtinheira', '/images/casa-murtinheira/thumbnail.svg', '/images/casa-murtinheira/1.svg', 'single_family', 30);
INSERT INTO projects (id, thumbnail, image, categories, order_number) VALUES ('palacete-av-boavista', '/images/palacete-av-boavista/thumbnail.svg', '/images/palacete-av-boavista/1.svg', 'rehabilitation,equipments_services', 29);
INSERT INTO projects (id, thumbnail, image, categories, order_number) VALUES ('edificio-sede-espaco-agros', '/images/edificio-sede-espaco-agros/thumbnail.svg', '/images/edificio-sede-espaco-agros/1.svg', 'equipments_services', 28);
INSERT INTO projects (id, thumbnail, image, categories, order_number) VALUES ('entrada-eventos-espaco-agros', '/images/entrada-eventos-espaco-agros/thumbnail.svg', '/images/entrada-eventos-espaco-agros/1.svg', 'equipments_services', 27);
INSERT INTO projects (id, thumbnail, image, categories, order_number) VALUES ('casa-cadoucos', '/images/casa-cadoucos/thumbnail.svg', '/images/casa-cadoucos/1.svg', 'rehabilitation,equipments_services', 26);
INSERT INTO projects (id, thumbnail, image, categories, order_number) VALUES ('empatias', '/images/empatias/thumbnail.svg', '/images/empatias/1.svg', 'interior,restoration_commerce', 25);
INSERT INTO projects (id, thumbnail, image, categories, order_number) VALUES ('jazigo-afife', '/images/jazigo-afife/thumbnail.svg', '/images/jazigo-afife/1.svg', 'equipments_services', 24);
INSERT INTO projects (id, thumbnail, image, categories, order_number) VALUES ('casa-dos-loios', '/images/casa-dos-loios/thumbnail.svg', '/images/casa-dos-loios/1.svg', 'rehabilitation,tourism', 23);
INSERT INTO projects (id, thumbnail, image, categories, order_number) VALUES ('casa-jovim', '/images/casa-jovim/thumbnail.svg', '/images/casa-jovim/1.svg', 'single_family', 22);
INSERT INTO projects (id, thumbnail, image, categories, order_number) VALUES ('casa-da-baixa', '/images/casa-da-baixa/thumbnail.svg', '/images/casa-da-baixa/1.svg', 'rehabilitation,collective,tourism', 21);
INSERT INTO projects (id, thumbnail, image, categories, order_number) VALUES ('pizza-&-drinks', '/images/pizza-&-drinks/thumbnail.svg', '/images/pizza-&-drinks/1.svg', 'rehabilitation,interior,restoration_commerce', 20);
INSERT INTO projects (id, thumbnail, image, categories, order_number) VALUES ('casa-fvd', '/images/casa-fvd/thumbnail.svg', '/images/casa-fvd/1.svg', 'rehabilitation,single_family', 19);
INSERT INTO projects (id, thumbnail, image, categories, order_number) VALUES ('ed-s-lazaro', '/images/ed-s-lazaro/thumbnail.svg', '/images/ed-s-lazaro/1.svg', 'rehabilitation,collective,tourism', 18);
INSERT INTO projects (id, thumbnail, image, categories, order_number) VALUES ('pizzaria-presto-cedofeita', '/images/pizzaria-presto-cedofeita/thumbnail.svg', '/images/pizzaria-presto-cedofeita/1.svg', 'restoration_commerce', 17);
INSERT INTO projects (id, thumbnail, image, categories, order_number) VALUES ('casa-rua-das-flores', '/images/casa-rua-das-flores/thumbnail.svg', '/images/casa-rua-das-flores/1.svg', 'tourism', 16);
INSERT INTO projects (id, thumbnail, image, categories, order_number) VALUES ('ed-cedofeita-i', '/images/ed-cedofeita-i/thumbnail.svg', '/images/ed-cedofeita-i/1.svg', 'rehabilitation,collective', 15);
INSERT INTO projects (id, thumbnail, image, categories, order_number) VALUES ('casa-no-douro', '/images/casa-no-douro/thumbnail.svg', '/images/casa-no-douro/1.svg', 'single_family', 14);
INSERT INTO projects (id, thumbnail, image, categories, order_number) VALUES ('restaurante-pateo-de-tanger', '/images/restaurante-pateo-de-tanger/thumbnail.svg', '/images/restaurante-pateo-de-tanger/1.svg', 'interior,restoration_commerce', 13);
INSERT INTO projects (id, thumbnail, image, categories, order_number) VALUES ('casa-guerra-junqueiro', '/images/casa-guerra-junqueiro/thumbnail.svg', '/images/casa-guerra-junqueiro/1.svg', 'equipments_services,single_family', 12);
INSERT INTO projects (id, thumbnail, image, categories, order_number) VALUES ('casa-nelas', '/images/casa-nelas/thumbnail.svg', '/images/casa-nelas/1.svg', 'single_family', 11);
INSERT INTO projects (id, thumbnail, image, categories, order_number) VALUES ('ed-cedofeita-ii', '/images/ed-cedofeita-ii/thumbnail.svg', '/images/ed-cedofeita-ii/1.svg', 'collective,tourism', 10);
INSERT INTO projects (id, thumbnail, image, categories, order_number) VALUES ('ed-belomonte', '/images/ed-belomonte/thumbnail.svg', '/images/ed-belomonte/1.svg', 'tourism', 9);
INSERT INTO projects (id, thumbnail, image, categories, order_number) VALUES ('casa-caldeireiros', '/images/casa-caldeireiros/thumbnail.svg', '/images/casa-caldeireiros/1.svg', 'rehabilitation', 8);
INSERT INTO projects (id, thumbnail, image, categories, order_number) VALUES ('casa-esposende', '/images/casa-esposende/thumbnail.svg', '/images/casa-esposende/1.svg', 'rehabilitation,single_family', 7);
INSERT INTO projects (id, thumbnail, image, categories, order_number) VALUES ('casa-b-vilarinha', '/images/casa-b-vilarinha/thumbnail.svg', '/images/casa-b-vilarinha/1.svg', 'rehabilitation,single_family', 6);
INSERT INTO projects (id, thumbnail, image, categories, order_number) VALUES ('ed-clerigos', '/images/ed-clerigos/thumbnail.svg', '/images/ed-clerigos/1.svg', 'rehabilitation,collective,tourism', 5);
INSERT INTO projects (id, thumbnail, image, categories, order_number) VALUES ('casa-povoa', '/images/casa-povoa/thumbnail.svg', '/images/casa-povoa/1.svg', 'rehabilitation,single_family', 4);
INSERT INTO projects (id, thumbnail, image, categories, order_number) VALUES ('restaurante-bocca', '/images/restaurante-bocca/thumbnail.svg', '/images/restaurante-bocca/1.svg', 'interior,restoration_commerce', 3);
INSERT INTO projects (id, thumbnail, image, categories, order_number) VALUES ('casa-gondarem', '/images/casa-gondarem/thumbnail.svg', '/images/casa-gondarem/1.svg', 'rehabilitation,single_family', 2);
INSERT INTO projects (id, thumbnail, image, categories, order_number) VALUES ('restaurante-cacau-wine-terrace', '/images/restaurante-cacau-wine-terrace/thumbnail.svg', '/images/restaurante-cacau-wine-terrace/1.svg', 'restoration_commerce', 1);

INSERT INTO projects_details (project_id, title, description, address, language) VALUES (1, 'Casa Murtinheira', '', '', 'pt');
INSERT INTO projects_details (project_id, title, description, address, language) VALUES (2, 'Palacete Av. Boavista', '', '', 'pt');
INSERT INTO projects_details (project_id, title, description, address, language) VALUES (3, 'Edifício Sede, Espaço Agros', '', '', 'pt');
INSERT INTO projects_details (project_id, title, description, address, language) VALUES (4, 'Entrada Eventos, Espaço Agros', '', '', 'pt');
INSERT INTO projects_details (project_id, title, description, address, language) VALUES (5, 'Casa Cadouços', '', '', 'pt');
INSERT INTO projects_details (project_id, title, description, address, language) VALUES (6, 'Empatias', '', '', 'pt');
INSERT INTO projects_details (project_id, title, description, address, language) VALUES (7, 'Jazigo Afife', '', '', 'pt');
INSERT INTO projects_details (project_id, title, description, address, language) VALUES (8, 'Casa dos Lóios', '', '', 'pt');
INSERT INTO projects_details (project_id, title, description, address, language) VALUES (9, 'Casa Jovim', '', '', 'pt');
INSERT INTO projects_details (project_id, title, description, address, language) VALUES (10, 'Casa da Baixa', '', '', 'pt');
INSERT INTO projects_details (project_id, title, description, address, language) VALUES (11, 'Pizza & Drinks', '', '', 'pt');
INSERT INTO projects_details (project_id, title, description, address, language) VALUES (12, 'Casa FVD', '', '', 'pt');
INSERT INTO projects_details (project_id, title, description, address, language) VALUES (13, 'Ed. S. Lázaro', '', '', 'pt');
INSERT INTO projects_details (project_id, title, description, address, language) VALUES (14, 'Pizzaria Presto Cedofeita', '', '', 'pt');
INSERT INTO projects_details (project_id, title, description, address, language) VALUES (15, 'Casa Rua das Flores', '', '', 'pt');
INSERT INTO projects_details (project_id, title, description, address, language) VALUES (16, 'Ed. Cedofeita I', '', '', 'pt');
INSERT INTO projects_details (project_id, title, description, address, language) VALUES (17, 'Casa no Douro', '', '', 'pt');
INSERT INTO projects_details (project_id, title, description, address, language) VALUES (18, 'Restaurante Páteo de Tânger', '', '', 'pt');
INSERT INTO projects_details (project_id, title, description, address, language) VALUES (19, 'Casa Guerra Junqueiro', '', '', 'pt');
INSERT INTO projects_details (project_id, title, description, address, language) VALUES (20, 'Casa nelas', '', '', 'pt');
INSERT INTO projects_details (project_id, title, description, address, language) VALUES (21, 'Ed. Cedofeita II', '', '', 'pt');
INSERT INTO projects_details (project_id, title, description, address, language) VALUES (22, 'Ed. Belomonte', '', '', 'pt');
INSERT INTO projects_details (project_id, title, description, address, language) VALUES (23, 'Casa Caldeireiros', '', '', 'pt');
INSERT INTO projects_details (project_id, title, description, address, language) VALUES (24, 'Casa Esposende', '', '', 'pt');
INSERT INTO projects_details (project_id, title, description, address, language) VALUES (25, 'Casa B. Vilarinha', '', '', 'pt');
INSERT INTO projects_details (project_id, title, description, address, language) VALUES (26, 'Ed. Clérigos', '', '', 'pt');
INSERT INTO projects_details (project_id, title, description, address, language) VALUES (27, 'Casa Póvoa', '', '', 'pt');
INSERT INTO projects_details (project_id, title, description, address, language) VALUES (28, 'Restaurante Bocca', '', '', 'pt');
INSERT INTO projects_details (project_id, title, description, address, language) VALUES (29, 'Casa Gondarém', '', '', 'pt');
INSERT INTO projects_details (project_id, title, description, address, language) VALUES (30, 'Restaurante Ccau Wine Terrace', '', '', 'pt');