insert into "users" ("username", "hashedPassword")
values ('autodidact', '$argon2i$v=19$m=4096,t=3,p=1$h7icQD/xZr8akZsX+hNA0A$h68atJWyjvunAwNOpSpMfg9sPvoMQ6dKwoh0dJhurWA');

insert into "events" ("title", "description", "timestamp", "origin", "destination", "notification", "sent", "email", "userId", "coords")
values ('Coding Bootcamp',
'I have been going here every day for the past two and a half months to learn how to code.',
'2021-09-24 10:30:00',
'401 Newport Center Dr, Newport Beach, CA 92660',
'9200 Irvine Center Dr #200, Irvine, CA 92618',
'true',
'false',
'grimmerravenn@gmail.com',
1,
'{"originCoords":{"lat":33.8823476,"lng":-117.8851033},"destinationCoords":{"lat":33.6348748,"lng":-117.7404808}}');
