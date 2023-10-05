npx create-react-app client
cd client
npm start

http://localhost:3000/ - client
http://localhost:8080/api/contacts бд

https://telegra.ph/MySQL-bystryj-start-11-27

docker run --name contacts-db -p 9000:3306 -e MYSQL_ROOT_PASSWORD=12345678 -d mysql

contacts-db – имя docker-контейнера
9000:3306 – порт внутри контейнера 3306 пробрасываем на локальный 9000
12345678 – пароль root пользователя mysql

docker run --name contacts-db -p 9000:3306 -e MYSQL_ROOT_PASSWORD=12345678 -d mysql

CREATE DATABASE contacts_app;
USE contacts_app;

CREATE TABLE contacts (
id bigint NOT NULL AUTO_INCREMENT,
full_name varchar(100) DEFAULT NULL,
phone varchar(25) DEFAULT NULL,
notes text,
PRIMARY KEY (id)
) engine=InnoDB auto_increment=1 default charset=utf8mb3;

## SELECT \* FROM contacts;

spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver
spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.MySQL8Dialect
spring.datasource.url=jdbc:mysql://localhost:9000/contacts_app
spring.datasource.username=root
spring.datasource.password=12345678

spring.data.rest.base-path=/api

https://code.visualstudio.com/docs/java/java-project#_add-a-jar

GET для чтения данных вщзвращается 200OK
POST для добавления данных
PUT для изменения данных
DELETE для удаления данных

Post зфпрос - ссылка общая
headers:
Content-Type application/json

Body
галка raw
{
"name": "dfdfd",
"fdfdfd": "dfdfdfd"
}
Возвращается 201Created

npm install axios
