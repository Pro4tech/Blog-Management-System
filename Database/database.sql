create table user (
user_id integer primary key auto_increment,
full_name varchar(50),
email varchar (50),
password varchar(100),
phone_no varchar (10),
created_time DATETIME default CURRENT_TIMESTAMP
);

create table category(
	category_id int primary key auto_increment,
	title varchar(30),
	description varchar(50)
);

create table blogs(
	blog_id int primary key auto_increment,
	title varchar(30),
	content varchar(100),
	created_time DATETIME default CURRENT_TIMESTAMP,
	user_id int ,
	category_id int,
    FOREIGN KEY(user_id) REFERENCES user(user_id),
    FOREIGN KEY(category_id) REFERENCES category(category_id)
);


