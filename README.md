# Link_Store

Working: sub-menu bar for products....

To come back
- Test email for forgot_password.php

LIMIT & OFFSET
page = 1;
limit = 10;
offset = 0;
display = 1 to 10;

page = 2;
limit = 10;
offset = 20 - limit = 10;
display = 11 to 20;

page = 3;
limit = 10;
offset = 30 - limit = 20;
display = 21 to 30;

Paigination 
limit = 10;
result = 100;
pages = result / limt = 10;

On page 1,
num = 6;
start = page - 0 = 1;
end = d + 6;
shown pages = 1 to 6;
exception

On page 2,
num = 6;
start = page - 1 = 1;
end = start + 5 = 6;
shown pages = 1 to 6;

On page 3,
num = 6;
start = page - 1 = 2;
end = start + 5 = 7;
shown pages = 2 to 7;
