-- Create tables
DROP DATABASE IF EXISTS rochaleite;
CREATE DATABASE IF NOT EXISTS rochaleite;

USE rochaleite;

DROP TABLE IF EXISTS projects, projects_details, images, curriculum, distinctions, links, users;
CREATE TABLE IF NOT EXISTS projects (
	project_id    INT UNSIGNED  NOT NULL AUTO_INCREMENT,
	id            VARCHAR(255)	NOT NULL UNIQUE,
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

CREATE TABLE IF NOT EXISTS curriculum (
	description   TEXT			    NOT NULL DEFAULT '',
	address       TEXT			    NOT NULL DEFAULT '',
	year          TEXT			    NOT NULL DEFAULT '',
	state         TEXT			    NOT NULL DEFAULT '',
	language      ENUM('pt', 'en') NOT NULL DEFAULT 'pt',
	order_number	INT UNSIGNED	NOT NULL
);

CREATE TABLE IF NOT EXISTS distinctions (
	project_id    INT UNSIGNED	,
	distinction   TEXT			    NOT NULL DEFAULT '',
	path          TEXT			    NOT NULL DEFAULT '',
	language      ENUM('pt', 'en') NOT NULL DEFAULT 'pt',
	order_number	INT UNSIGNED	NOT NULL,
	FOREIGN KEY (project_id) REFERENCES projects(project_id)
);

CREATE TABLE IF NOT EXISTS links (
	project_id    INT UNSIGNED	NOT NULL,
	description   TEXT			    NOT NULL DEFAULT '',
	link          TEXT			    NOT NULL DEFAULT '',
	language      ENUM('pt', 'en') NOT NULL DEFAULT 'pt',
	order_number	INT UNSIGNED	NOT NULL,
	FOREIGN KEY (project_id) REFERENCES projects(project_id)
);

CREATE TABLE IF NOT EXISTS users (
	username      VARCHAR(50)	  NOT NULL DEFAULT '',
	password      TEXT		      NOT NULL DEFAULT '',
	PRIMARY KEY (username)
);

-- Populate tables
INSERT INTO projects (id, thumbnail, image, categories, order_number) VALUES ('casa-murtinheira', '/images/projects/casa-murtinheira/thumbnail.svg', '/images/projects/casa-murtinheira/1.svg', 'single_family', 3);
INSERT INTO projects (id, thumbnail, image, categories, order_number) VALUES ('palacete-av-boavista', '/images/projects/palacete-av-boavista/thumbnail.svg', '/images/projects/palacete-av-boavista/1.svg', 'rehabilitation,equipments_services', 31);
INSERT INTO projects (id, thumbnail, image, categories, order_number) VALUES ('edificio-sede-espaco-agros', '/images/projects/edificio-sede-espaco-agros/thumbnail.svg', '/images/projects/edificio-sede-espaco-agros/1.svg', 'equipments_services', 1);
INSERT INTO projects (id, thumbnail, image, categories, order_number) VALUES ('entrada-eventos-espaco-agros', '/images/projects/entrada-eventos-espaco-agros/thumbnail.svg', '/images/projects/entrada-eventos-espaco-agros/1.svg', 'equipments_services', 23);
INSERT INTO projects (id, thumbnail, image, categories, order_number) VALUES ('casa-cadoucos', '/images/projects/casa-cadoucos/thumbnail.svg', '/images/projects/casa-cadoucos/1.svg', 'rehabilitation,equipments_services', 22);
INSERT INTO projects (id, thumbnail, image, categories, order_number) VALUES ('empatias', '/images/projects/empatias/thumbnail.svg', '/images/projects/empatias/1.svg', 'interior,restoration_commerce', 33);
INSERT INTO projects (id, thumbnail, image, categories, order_number) VALUES ('jazigo-afife', '/images/projects/jazigo-afife/thumbnail.svg', '/images/projects/jazigo-afife/1.svg', 'equipments_services', 34);
INSERT INTO projects (id, thumbnail, image, categories, order_number) VALUES ('casa-dos-loios', '/images/projects/casa-dos-loios/thumbnail.svg', '/images/projects/casa-dos-loios/1.svg', 'rehabilitation,tourism', 8);
INSERT INTO projects (id, thumbnail, image, categories, order_number) VALUES ('casa-jovim', '/images/projects/casa-jovim/thumbnail.svg', '/images/projects/casa-jovim/1.svg', 'single_family', 6);
INSERT INTO projects (id, thumbnail, image, categories, order_number) VALUES ('casa-da-baixa', '/images/projects/casa-da-baixa/thumbnail.svg', '/images/projects/casa-da-baixa/1.svg', 'rehabilitation,collective,tourism', 2);
INSERT INTO projects (id, thumbnail, image, categories, order_number) VALUES ('pizza-&-drinks', '/images/projects/pizza-&-drinks/thumbnail.svg', '/images/projects/pizza-&-drinks/1.svg', 'rehabilitation,interior,restoration_commerce', 13);
INSERT INTO projects (id, thumbnail, image, categories, order_number) VALUES ('casa-fvd', '/images/projects/casa-fvd/thumbnail.svg', '/images/projects/casa-fvd/1.svg', 'rehabilitation,single_family', 12);
INSERT INTO projects (id, thumbnail, image, categories, order_number) VALUES ('ed-s-lazaro', '/images/projects/ed-s-lazaro/thumbnail.svg', '/images/projects/ed-s-lazaro/1.svg', 'rehabilitation,collective,tourism', 16);
INSERT INTO projects (id, thumbnail, image, categories, order_number) VALUES ('pizzaria-presto-cedofeita', '/images/projects/pizzaria-presto-cedofeita/thumbnail.svg', '/images/projects/pizzaria-presto-cedofeita/1.svg', 'restoration_commerce', 35);
INSERT INTO projects (id, thumbnail, image, categories, order_number) VALUES ('casa-rua-das-flores', '/images/projects/casa-rua-das-flores/thumbnail.svg', '/images/projects/casa-rua-das-flores/1.svg', 'tourism', 26);
INSERT INTO projects (id, thumbnail, image, categories, order_number) VALUES ('ed-cedofeita-i', '/images/projects/ed-cedofeita-i/thumbnail.svg', '/images/projects/ed-cedofeita-i/1.svg', 'rehabilitation,collective', 37);
INSERT INTO projects (id, thumbnail, image, categories, order_number) VALUES ('casa-no-douro', '/images/projects/casa-no-douro/thumbnail.svg', '/images/projects/casa-no-douro/1.svg', 'single_family', 10);
INSERT INTO projects (id, thumbnail, image, categories, order_number) VALUES ('restaurante-pateo-de-tanger', '/images/projects/restaurante-pateo-de-tanger/thumbnail.svg', '/images/projects/restaurante-pateo-de-tanger/1.svg', 'interior,restoration_commerce', 27);
INSERT INTO projects (id, thumbnail, image, categories, order_number) VALUES ('casa-guerra-junqueiro', '/images/projects/casa-guerra-junqueiro/thumbnail.svg', '/images/projects/casa-guerra-junqueiro/1.svg', 'equipments_services,single_family', 15);
INSERT INTO projects (id, thumbnail, image, categories, order_number) VALUES ('casa-nelas', '/images/projects/casa-nelas/thumbnail.svg', '/images/projects/casa-nelas/1.svg', 'single_family', 40);
INSERT INTO projects (id, thumbnail, image, categories, order_number) VALUES ('ed-cedofeita-ii', '/images/projects/ed-cedofeita-ii/thumbnail.svg', '/images/projects/ed-cedofeita-ii/1.svg', 'collective,tourism', 42);
INSERT INTO projects (id, thumbnail, image, categories, order_number) VALUES ('ed-belomonte', '/images/projects/ed-belomonte/thumbnail.svg', '/images/projects/ed-belomonte/1.svg', 'tourism', 24);
INSERT INTO projects (id, thumbnail, image, categories, order_number) VALUES ('casa-caldeireiros', '/images/projects/casa-caldeireiros/thumbnail.svg', '/images/projects/casa-caldeireiros/1.svg', 'rehabilitation', 14);
INSERT INTO projects (id, thumbnail, image, categories, order_number) VALUES ('casa-esposende', '/images/projects/casa-esposende/thumbnail.svg', '/images/projects/casa-esposende/1.svg', 'rehabilitation,single_family', 21);
INSERT INTO projects (id, thumbnail, image, categories, order_number) VALUES ('casa-b-vilarinha', '/images/projects/casa-b-vilarinha/thumbnail.svg', '/images/projects/casa-b-vilarinha/1.svg', 'rehabilitation,single_family', 9);
INSERT INTO projects (id, thumbnail, image, categories, order_number) VALUES ('ed-clerigos', '/images/projects/ed-clerigos/thumbnail.svg', '/images/projects/ed-clerigos/1.svg', 'rehabilitation,collective,tourism', 29);
INSERT INTO projects (id, thumbnail, image, categories, order_number) VALUES ('casa-povoa', '/images/projects/casa-povoa/thumbnail.svg', '/images/projects/casa-povoa/1.svg', 'rehabilitation,single_family', 32);
INSERT INTO projects (id, thumbnail, image, categories, order_number) VALUES ('restaurante-bocca', '/images/projects/restaurante-bocca/thumbnail.svg', '/images/projects/restaurante-bocca/1.svg', 'interior,restoration_commerce', 4);
INSERT INTO projects (id, thumbnail, image, categories, order_number) VALUES ('casa-gondarem', '/images/projects/casa-gondarem/thumbnail.svg', '/images/projects/casa-gondarem/1.svg', 'rehabilitation,single_family', 41);
INSERT INTO projects (id, thumbnail, image, categories, order_number) VALUES ('restaurante-cacau-wine-terrace', '/images/projects/restaurante-cacau-wine-terrace/thumbnail.svg', '/images/projects/restaurante-cacau-wine-terrace/1.svg', 'restoration_commerce', 11);
INSERT INTO projects (id, thumbnail, image, categories, order_number) VALUES ('bancada-espaco-agros', '/images/projects/bancada-espaco-agros/thumbnail.svg', '/images/projects/bancada-espaco-agros/1.svg', '', 5);
INSERT INTO projects (id, thumbnail, image, categories, order_number) VALUES ('edificio-cantina-espaco-agros', '/images/projects/edificio-cantina-espaco-agros/thumbnail.svg', '/images/projects/edificio-cantina-espaco-agros/1.svg', '', 7);
INSERT INTO projects (id, thumbnail, image, categories, order_number) VALUES ('reab-anexos-agricolas', '/images/projects/reab-anexos-agricolas/thumbnail.svg', '/images/projects/reab-anexos-agricolas/1.svg', '', 17);
INSERT INTO projects (id, thumbnail, image, categories, order_number) VALUES ('edificio-exposicoes-espaco-agros', '/images/projects/edificio-exposicoes-espaco-agros/thumbnail.svg', '/images/projects/edificio-exposicoes-espaco-agros/1.svg', '', 18);
INSERT INTO projects (id, thumbnail, image, categories, order_number) VALUES ('sede-ucanorte-xxi', '/images/projects/sede-ucanorte-xxi/thumbnail.svg', '/images/projects/sede-ucanorte-xxi/1.svg', '', 19);
INSERT INTO projects (id, thumbnail, image, categories, order_number) VALUES ('escritorio-gaia', '/images/projects/escritorio-gaia/thumbnail.svg', '/images/projects/escritorio-gaia/1.svg', '', 20);
INSERT INTO projects (id, thumbnail, image, categories, order_number) VALUES ('casa-grande-arouca', '/images/projects/casa-grande-arouca/thumbnail.svg', '/images/projects/casa-grande-arouca/1.svg', '', 25);
INSERT INTO projects (id, thumbnail, image, categories, order_number) VALUES ('estudo-urbanistico-espaco-agros', '/images/projects/estudo-urbanistico-espaco-agros/thumbnail.svg', '/images/projects/estudo-urbanistico-espaco-agros/1.svg', '', 28);
INSERT INTO projects (id, thumbnail, image, categories, order_number) VALUES ('quinta-santana', '/images/projects/quinta-santana/thumbnail.svg', '/images/projects/quinta-santana/1.svg', '', 30);
INSERT INTO projects (id, thumbnail, image, categories, order_number) VALUES ('casa-antas', '/images/projects/casa-antas/thumbnail.svg', '/images/projects/casa-antas/1.svg', '', 36);
INSERT INTO projects (id, thumbnail, image, categories, order_number) VALUES ('habitacao-paranhos', '/images/projects/habitacao-paranhos/thumbnail.svg', '/images/projects/habitacao-paranhos/1.svg', '', 38);
INSERT INTO projects (id, thumbnail, image, categories, order_number) VALUES ('casa-mgc', '/images/projects/casa-mgc/thumbnail.svg', '/images/projects/casa-mgc/1.svg', '', 39);

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
INSERT INTO projects_details (project_id, title, description, address, language) VALUES (30, 'Restaurante Cacau Wine Terrace', '', '', 'pt');

INSERT INTO images (project_id, path) VALUES (1, '/images/projects/casa-murtinheira/1.jpg');
INSERT INTO images (project_id, path) VALUES (1, '/images/projects/casa-murtinheira/2.jpg');
INSERT INTO images (project_id, path) VALUES (1, '/images/projects/casa-murtinheira/3.jpg');
INSERT INTO images (project_id, path) VALUES (1, '/images/projects/casa-murtinheira/4.jpg');
INSERT INTO images (project_id, path) VALUES (1, '/images/projects/casa-murtinheira/5.jpg');
INSERT INTO images (project_id, path) VALUES (1, '/images/projects/casa-murtinheira/6.jpg');

INSERT INTO images (project_id, path) VALUES (5, '/images/projects/casa-cadoucos/1.jpg');
INSERT INTO images (project_id, path) VALUES (5, '/images/projects/casa-cadoucos/2.jpg');
INSERT INTO images (project_id, path) VALUES (5, '/images/projects/casa-cadoucos/3.jpg');
INSERT INTO images (project_id, path) VALUES (5, '/images/projects/casa-cadoucos/4.jpg');
INSERT INTO images (project_id, path) VALUES (5, '/images/projects/casa-cadoucos/5.jpg');
INSERT INTO images (project_id, path) VALUES (5, '/images/projects/casa-cadoucos/6.jpg');
INSERT INTO images (project_id, path) VALUES (5, '/images/projects/casa-cadoucos/7.jpg');
INSERT INTO images (project_id, path) VALUES (5, '/images/projects/casa-cadoucos/8.jpg');
INSERT INTO images (project_id, path) VALUES (5, '/images/projects/casa-cadoucos/9.jpg');
INSERT INTO images (project_id, path) VALUES (6, '/images/projects/empatias/1.jpg');
INSERT INTO images (project_id, path) VALUES (6, '/images/projects/empatias/2.jpg');
INSERT INTO images (project_id, path) VALUES (6, '/images/projects/empatias/3.jpg');
INSERT INTO images (project_id, path) VALUES (7, '/images/projects/jazigo-afife/1.jpg');
INSERT INTO images (project_id, path) VALUES (7, '/images/projects/jazigo-afife/2.jpg');
INSERT INTO images (project_id, path) VALUES (7, '/images/projects/jazigo-afife/3.jpg');
INSERT INTO images (project_id, path) VALUES (7, '/images/projects/jazigo-afife/4.jpg');
INSERT INTO images (project_id, path) VALUES (8, '/images/projects/casa-dos-loios/1.jpg');
INSERT INTO images (project_id, path) VALUES (8, '/images/projects/casa-dos-loios/2.jpg');
INSERT INTO images (project_id, path) VALUES (8, '/images/projects/casa-dos-loios/3.jpg');
INSERT INTO images (project_id, path) VALUES (8, '/images/projects/casa-dos-loios/4.jpg');
INSERT INTO images (project_id, path) VALUES (8, '/images/projects/casa-dos-loios/5.jpg');
INSERT INTO images (project_id, path) VALUES (8, '/images/projects/casa-dos-loios/6.jpg');
INSERT INTO images (project_id, path) VALUES (8, '/images/projects/casa-dos-loios/7.jpg');
INSERT INTO images (project_id, path) VALUES (8, '/images/projects/casa-dos-loios/8.jpg');
INSERT INTO images (project_id, path) VALUES (8, '/images/projects/casa-dos-loios/9.jpg');
INSERT INTO images (project_id, path) VALUES (8, '/images/projects/casa-dos-loios/10.jpg');
INSERT INTO images (project_id, path) VALUES (8, '/images/projects/casa-dos-loios/11.jpg');
INSERT INTO images (project_id, path) VALUES (8, '/images/projects/casa-dos-loios/12.jpg');
INSERT INTO images (project_id, path) VALUES (8, '/images/projects/casa-dos-loios/13.jpg');
INSERT INTO images (project_id, path) VALUES (9, '/images/projects/casa-jovim/1.jpg');
INSERT INTO images (project_id, path) VALUES (9, '/images/projects/casa-jovim/2.jpg');
INSERT INTO images (project_id, path) VALUES (9, '/images/projects/casa-jovim/3.jpg');
INSERT INTO images (project_id, path) VALUES (9, '/images/projects/casa-jovim/4.jpg');
INSERT INTO images (project_id, path) VALUES (9, '/images/projects/casa-jovim/5.jpg');
INSERT INTO images (project_id, path) VALUES (9, '/images/projects/casa-jovim/6.jpg');
INSERT INTO images (project_id, path) VALUES (9, '/images/projects/casa-jovim/7.jpg');
INSERT INTO images (project_id, path) VALUES (9, '/images/projects/casa-jovim/8.jpg');
INSERT INTO images (project_id, path) VALUES (9, '/images/projects/casa-jovim/9.jpg');
INSERT INTO images (project_id, path) VALUES (9, '/images/projects/casa-jovim/10.jpg');
INSERT INTO images (project_id, path) VALUES (9, '/images/projects/casa-jovim/11.jpg');
INSERT INTO images (project_id, path) VALUES (10, '/images/projects/casa-da-baixa/1.jpg');
INSERT INTO images (project_id, path) VALUES (10, '/images/projects/casa-da-baixa/2.jpg');
INSERT INTO images (project_id, path) VALUES (10, '/images/projects/casa-da-baixa/3.jpg');
INSERT INTO images (project_id, path) VALUES (10, '/images/projects/casa-da-baixa/4.jpg');
INSERT INTO images (project_id, path) VALUES (10, '/images/projects/casa-da-baixa/5.jpg');
INSERT INTO images (project_id, path) VALUES (10, '/images/projects/casa-da-baixa/6.jpg');
INSERT INTO images (project_id, path) VALUES (10, '/images/projects/casa-da-baixa/7.jpg');
INSERT INTO images (project_id, path) VALUES (10, '/images/projects/casa-da-baixa/8.jpg');
INSERT INTO images (project_id, path) VALUES (10, '/images/projects/casa-da-baixa/9.jpg');
INSERT INTO images (project_id, path) VALUES (11, '/images/projects/pizza-&-drinks/1.jpg');
INSERT INTO images (project_id, path) VALUES (11, '/images/projects/pizza-&-drinks/2.jpg');
INSERT INTO images (project_id, path) VALUES (11, '/images/projects/pizza-&-drinks/3.jpg');
INSERT INTO images (project_id, path) VALUES (11, '/images/projects/pizza-&-drinks/4.jpg');
INSERT INTO images (project_id, path) VALUES (11, '/images/projects/pizza-&-drinks/5.jpg');
INSERT INTO images (project_id, path) VALUES (11, '/images/projects/pizza-&-drinks/6.jpg');
INSERT INTO images (project_id, path) VALUES (11, '/images/projects/pizza-&-drinks/7.jpg');
INSERT INTO images (project_id, path) VALUES (11, '/images/projects/pizza-&-drinks/8.jpg');
INSERT INTO images (project_id, path) VALUES (11, '/images/projects/pizza-&-drinks/9.jpg');
INSERT INTO images (project_id, path) VALUES (11, '/images/projects/pizza-&-drinks/10.jpg');
INSERT INTO images (project_id, path) VALUES (12, '/images/projects/casa-fvd/1.jpg');
INSERT INTO images (project_id, path) VALUES (12, '/images/projects/casa-fvd/2.jpg');
INSERT INTO images (project_id, path) VALUES (12, '/images/projects/casa-fvd/3.jpg');
INSERT INTO images (project_id, path) VALUES (12, '/images/projects/casa-fvd/4.jpg');
INSERT INTO images (project_id, path) VALUES (12, '/images/projects/casa-fvd/5.jpg');
INSERT INTO images (project_id, path) VALUES (12, '/images/projects/casa-fvd/6.jpg');
INSERT INTO images (project_id, path) VALUES (12, '/images/projects/casa-fvd/7.jpg');


-- CURRICULUM PT
INSERT INTO curriculum (description, address, year, state, language, order_number) VALUES ('RECUPERAÇÃO E AMPLIAÇÃO DE HABITAÇÃO', 'Rua de Tânger, Porto', '2015', 'Em construção', 'pt', 1);
INSERT INTO curriculum (description, address, year, state, language, order_number) VALUES ('REMODELAÇÃO DE MORADIA UNIFAMILIAR', 'RUA PEDRO TEIXEIRA, ANTAS, PORTO', '2012-2013', 'Construída', 'pt', 2);
INSERT INTO curriculum (description, address, year, state, language, order_number) VALUES ('MORADIA UNIFAMILIAR', 'QUINTA DO MONDEGO, NELAS', '2014', 'Projecto de Execução concluído', 'pt', 3);
INSERT INTO curriculum (description, address, year, state, language, order_number) VALUES ('MORADIA UNIFAMILIAR', 'FRENTE MARÍTIMA DE VALADARES – VILA NOVA DE GAIA', '2012-2013', 'Projecto de Licenciamento', 'pt', 4);
INSERT INTO curriculum (description, address, year, state, language, order_number) VALUES ('REMODELAÇÃO DE MORADIA UNIFAMILIAR', 'RUA FERNÃO VAZ DOURADO, FOZ DO DOURO PORTO', '2012', 'Construída', 'pt', 5);
INSERT INTO curriculum (description, address, year, state, language, order_number) VALUES ('MORADIA UNIFAMILIAR', 'QUINTA DAS LUZES, JOVIM - GONDOMAR', '2011', 'Construída', 'pt', 6);
INSERT INTO curriculum (description, address, year, state, language, order_number) VALUES ('MORADIA UNIFAMILIAR PARA FÉRIAS', 'SÃO COSMADO, ARMAMAR', '2010', 'Construída', 'pt', 7);
INSERT INTO curriculum (description, address, year, state, language, order_number) VALUES ('EDIFÍCIO DE HABITAÇÃO COLECTIVA', 'RUA DE PEREIRÓ, PORTO', '2009', 'Estudo Prévio', 'pt', 8);
INSERT INTO curriculum (description, address, year, state, language, order_number) VALUES ('EDIFÍCIO DE HABITAÇÃO COLECTIVA (42 Apart.)', 'TRAVESSA JOSÉ FONTANA, VILA NOVA DE GAIA', '2005', 'Construído', 'pt', 9);
INSERT INTO curriculum (description, address, year, state, language, order_number) VALUES ('EDIFÍCIO DE HABITAÇÃO COLECTIVA (10 Apart-Moradia)', 'AZURARA, VILA DO CONDE', '2005', 'Projecto de Execução concluído', 'pt', 10);
INSERT INTO curriculum (description, address, year, state, language, order_number) VALUES ('EDIFÍCIO DE HABITAÇÃO COLECTIVA (100 Apart.)', 'RUA DO RIO DA FONTE, VILA NOVA DE GAIA', '2004', 'Construído', 'pt', 11);
INSERT INTO curriculum (description, address, year, state, language, order_number) VALUES ('REMODELAÇÃO E AMPLIAÇÃO DE MORADIA', 'BAIRRO MARECHAL GOMES DA COSTA, PORTO', '2003', 'Construída', 'pt', 12);
INSERT INTO curriculum (description, address, year, state, language, order_number) VALUES ('MORADIA UNIFAMILIAR', 'TOUGUINHÓ, VILA DO CONDE', '2003', 'Projecto de Execução concluído', 'pt', 13);
INSERT INTO curriculum (description, address, year, state, language, order_number) VALUES ('MORADIA UNIFAMILIAR', 'MODIVAS, VILA DO CONDE', '2002', 'Projecto de Execução concluído', 'pt', 14);
INSERT INTO curriculum (description, address, year, state, language, order_number) VALUES ('EDIFÍCIO MULTIFAMILIAR', 'MODIVAS, VILA DO CONDE', '2002', 'Construído', 'pt', 15);
INSERT INTO curriculum (description, address, year, state, language, order_number) VALUES ('EDIFÍCIO DE HABITAÇÃO COLECTIVA (16 fogos)', 'AZURARA - VILA DO CONDE', '2002', 'Projecto de Licenciamento', 'pt', 16);
INSERT INTO curriculum (description, address, year, state, language, order_number) VALUES ('EDIFÍCIOS DE HABITAÇÃO, COMÉRCIO E SERVIÇOS – EMPREENDIMENTOS V8 E PARCAUTO', 'VILA NOVA DE GAIA', '2002', 'Estudo sem continuidade', 'pt', 17);
INSERT INTO curriculum (description, address, year, state, language, order_number) VALUES ('EDIFÍCIO DE HABITAÇÃO COLECTIVA COM (24 fogos)', 'AZURARA - VILA DO CONDE', '2002', 'Projecto de Licenciamento', 'pt', 18);
INSERT INTO curriculum (description, address, year, state, language, order_number) VALUES ('EDIFÍCIO DE HABITAÇÃO COLECTIVA (110 fogos)', 'RUA DA FONTE, V N GAIA', '2001', 'Construído', 'pt', 19);
INSERT INTO curriculum (description, address, year, state, language, order_number) VALUES ('MORADIA UNIFAMILIAR', 'PALHEIRA – COIMBRA',  '', '', 'pt', 20);


-- DISTINCTIONS PT
INSERT INTO distinctions (project_id, distinction, path, language, order_number) VALUES (3, 'painel 1 de apresentação para o Prémio Secil, edição de 2014', '/images/distinctions/1.jpg', 'pt', 1);
INSERT INTO distinctions (project_id, distinction, path, language, order_number) VALUES (3, 'painel 2 de apresentação para o Prémio Secil, edição de 2014', '/images/distinctions/2.jpg', 'pt', 2);
INSERT INTO distinctions (project_id, distinction, path, language, order_number) VALUES (NULL, 'exposição Câmara Municipal do Porto do Prémio João de Almada, edição de 2014', '/images/distinctions/3.jpg', 'pt', 3);
INSERT INTO distinctions (project_id, distinction, path, language, order_number) VALUES (8, 'painel 1 de apresentação para o Prémio João de Almada, edição de 2014', '/images/distinctions/4.jpg', 'pt', 4);
INSERT INTO distinctions (project_id, distinction, path, language, order_number) VALUES (8, 'painel 2 de apresentação para o Prémio João de Almada, edição de 2014', '/images/distinctions/5.jpg', 'pt', 5);
INSERT INTO distinctions (project_id, distinction, path, language, order_number) VALUES (NULL, 'roteiro referente à distinção Respect for Architecture 2012 Porto', '/images/distinctions/6.jpg', 'pt', 6);
-- INSERT INTO distinctions (project_id, distinction, path, language, order_number) VALUES (3, 'painel 1 de apresentação para o Prémio Secil, edição de 2014', '/images/distinctions/4.jpg', 'pt', 4); -- MOVIE
INSERT INTO distinctions (project_id, distinction, path, language, order_number) VALUES (10, 'cartaz referente à distinção Respect for Architecture 2012 Porto', '/images/distinctions/8.jpg', 'pt', 8);


-- LINKS PT
INSERT INTO links (project_id, description, link, language, order_number) VALUES (3, 'https://www.archdaily.com.br/br/704139/sede-agros-slash-rocha-leite-arquitectos-associados', 'https://www.archdaily.com.br/br/704139/sede-agros-slash-rocha-leite-arquitectos-associados', 'pt', 1);
INSERT INTO links (project_id, description, link, language, order_number) VALUES (10, 'Respect for Architecture 2012 Porto', 'http://www.norte41.oasrn.org/pt-pt/content/casa-da-baixa', 'pt', 2);
INSERT INTO links (project_id, description, link, language, order_number) VALUES (10, 'Respect for Architecture 2012 Porto', 'http://p3.publico.pt/cultura/arquitectura/4418/respect-architecture-20-espacos-do-porto-em-exposicao', 'pt', 3);
INSERT INTO links (project_id, description, link, language, order_number) VALUES (10, 'https://www.archdaily.com.br/br/01-98920/casa-da-baixa-slash-rocha-leite-arquitectos-associados', 'https://www.archdaily.com.br/br/01-98920/casa-da-baixa-slash-rocha-leite-arquitectos-associados', 'pt', 4);
-- LINKS EN
INSERT INTO links (project_id, description, link, language, order_number) VALUES (3, '652 - Rocha Leite Arquitectos Associados | Sede Agros | Póvoa do Varzim, Pt (182 img)', 'http://ultimasreportagens.com/ultimas.php', 'en', 1);
INSERT INTO links (project_id, description, link, language, order_number) VALUES (3, 'https://www.archdaily.com/324138/agros-headquarters-rocha-leite-arquitectos-associados', 'https://www.archdaily.com/324138/agros-headquarters-rocha-leite-arquitectos-associados', 'en', 2);
INSERT INTO links (project_id, description, link, language, order_number) VALUES (10, 'https://www.archdaily.com/333063/casa-da-baixa-rocha-leite-arquitectos-associados', 'https://www.archdaily.com/333063/casa-da-baixa-rocha-leite-arquitectos-associados', 'en', 3);