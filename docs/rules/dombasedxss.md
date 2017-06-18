# DOM Based XSS Rules

| source | expression | property |
+--------+------------+----------+
| location.hash | location | hash |
| location.search | location | search |
| location.href | location | href |
| window.name | window | name |

| sink | expression | property |
+--------+------------+----------+
| docment.href | document | href |
| document.write | docuemnt | write |
| document.writeIn | document | writeIn |

| call | callIdentify |
+--------+------------+
| eval | eval |
| setTimeout | setTimeout |
| setInterval | setInterval |
| execScript | execScript |

| property | property |
+--------+------------+
| innerHMTL | innerHTML | 
| outerHMTL | outerHTML | 
