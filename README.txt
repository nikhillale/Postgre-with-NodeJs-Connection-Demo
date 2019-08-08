# Postgre-with-NodeJs-Connection-Demo

1. Install Postgre on linux
=>sudo apt-get update
=>sudo apt install postgresql postgresql-contrib

2.Start Postgre
=>sudo -i -u postgres
=>psql
=>postgres=#

3.Create user or Role
=>postgres=# CREATE ROLE me WITH LOGIN PASSWORD 'password'

4.Alert Role or user
=>postgres=# ALTER ROLE me CREATEDB

5.Create Database
=>postgres=# CREATE DATABASE demo

6.To view list of all database
=>postgres=# \list

7.To use or connect to DB -demo is DB name
=>postgres=# \c demo
=>demo=# 

8.Create table
=>demo=# CREATE TABLE users (
	  ID SERIAL PRIMARY KEY,
	  name VARCHAR(30),
	  email VARCHAR(30)
	);

9.insert data into table
=>demo=# INSERT INTO users (name, email) VALUES ('Jerry', 'jerry@example.com'), ('George', 'george@example.com');

10.If you have Permission error the execute
=> demo=# GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public to me;

