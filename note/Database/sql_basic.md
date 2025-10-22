대문자와 소문자 데이터는 다른 데이터이다.
통일성에서 벗어난 데이터는 항상 막아야 함.
RDBMS의 가장 큰 목적 : 구조에 벗어난 데이터를 막기

###### 데이터 생성

```sql
CREATE TABLE student (
	id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL

);
```

###### 테이블 삭제

```sql
DROP TABLE student;
```

###### CRUD

```sql
-- 데이터 추가 (생성, create)
INSERT INTO student (name) VALUES ('kim');

-- 데이터 읽기(조회, read)
SELECT * FROM student;


-- 데이터 수정 (update)
UPDATE student SET name = 'hong' WHERE id=1;

-- 데이터 삭제 (delete)
DELETE FROM student WHERE id = 1;

```
