> 【强制】禁止使用存储过程，存储过程难以调试和扩展，更没有移植性。 ——java开发手册

存储过程和存储函数的概念随处可见，这里主要记录一下基本语法，用于体验MySQL编程。

数据准备：

```sql
CREATE TABLE `city`
(
    `city_id`    INT(11)     NOT NULL AUTO_INCREMENT,
    `city_name`  VARCHAR(50) NOT NULL,
    `country_id` INT(11)     NOT NULL,
    PRIMARY KEY (`city_id`)
) ENGINE = InnoDB
  DEFAULT CHARSET = `utf8`;

CREATE TABLE `country`
(
    `country_id`   INT(11)      NOT NULL AUTO_INCREMENT,
    `country_name` VARCHAR(100) NOT NULL,
    PRIMARY KEY (`country_id`)
) ENGINE = InnoDB
  DEFAULT CHARSET = `utf8`;


INSERT INTO `city` (`city_id`, `city_name`, `country_id`)
VALUES (1, '西安', 1);
INSERT INTO `city` (`city_id`, `city_name`, `country_id`)
VALUES (2, 'NewYork', 2);
INSERT INTO `city` (`city_id`, `city_name`, `country_id`)
VALUES (3, '北京', 1);
INSERT INTO `city` (`city_id`, `city_name`, `country_id`)
VALUES (4, '上海', 1);

INSERT INTO `country` (`country_id`, `country_name`)
VALUES (1, 'China');
INSERT INTO `country` (`country_id`, `country_name`)
VALUES (2, 'America');
INSERT INTO `country` (`country_id`, `country_name`)
VALUES (3, 'Japan');
INSERT INTO `country` (`country_id`, `country_name`)
VALUES (4, 'UK');
```



## 循环

```sql
DELIMITER $
-- while
CREATE PROCEDURE `pro_test_while`(`n` INT)
BEGIN
    DECLARE `total` INT DEFAULT 0;
    DECLARE `num` INT DEFAULT 1;
    WHILE `num` <= `n`
        DO
            SET `total` = `total` + `num`;
            SET `num` = `num` + 1;
        END WHILE;
    SELECT `total`;
END$

-- repeat
CREATE PROCEDURE `pro_test_repeat`(`n` INT)
BEGIN
    DECLARE `total` INT DEFAULT 0;
    REPEAT
        SET `total` = `total` + `n`;
        SET `n` = `n` - 1;
    UNTIL `n` = 0
        END REPEAT;
    SELECT `total`;
END$

-- loop
CREATE PROCEDURE `pro_test_loop`(`n` INT)
BEGIN
    DECLARE `total` INT DEFAULT 0;

    `increment`:
    LOOP
        IF `n` <= 0 THEN
            LEAVE `increment`; -- 借助leave关键词
        END IF;

        SET `total` = `total` + `n`;
        SET `n` = `n` - 1;
    END LOOP `increment`;

    SELECT `total`;
END$

DELIMITER ;

CALL `pro_test_while`(100);

CALL `pro_test_repeat`(100);

CALL `pro_test_loop`(100);
```

## 游标

环境准备

```sql
DROP TABLE IF EXISTS `temp`;
CREATE TABLE `temp`
(
    `id`     INT(11)     NOT NULL AUTO_INCREMENT,
    `name`   VARCHAR(50) NOT NULL COMMENT '姓名',
    `age`    INT(11) COMMENT '年龄',
    `salary` INT(11) COMMENT '薪水',
    PRIMARY KEY (`id`)
) ENGINE = innodb
  DEFAULT CHARSET = `utf8`;

INSERT INTO `temp`(`id`, `name`, `age`, `salary`)
VALUES (NULL, '金毛狮王', 55, 3800),
       (NULL, '白眉鹰王', 60, 4000),
       (NULL, '青翼蝠王', 38, 2800),
       (NULL, '紫衫龙王', 42, 1800);

SELECT *
FROM `temp`;
```



```sql
DROP PROCEDURE IF EXISTS `pro_test_cursor`;
DELIMITER $

-- 查询temp表中数据并逐行展示
CREATE PROCEDURE `pro_test_cursor_old`()
BEGIN
    DECLARE `e_id` INT(11); -- 类型必须和数据库表结构一致
    DECLARE `e_name` VARCHAR(50);
    DECLARE `e_age` INT(11);
    DECLARE `e_salary` INT(11);

    DECLARE `employee_result` CURSOR FOR SELECT * FROM `temp`;

    OPEN `employee_result`;

    FETCH `employee_result` INTO `e_id`,`e_name`,`e_age`,`e_salary`;
    SELECT concat('id=', `e_id`, ', name=', `e_name`, ', age=', `e_age`, ', 薪资为: ', `e_salary`) AS `result`;
    FETCH `employee_result` INTO `e_id`,`e_name`,`e_age`,`e_salary`;
    SELECT concat('id=', `e_id`, ', name=', `e_name`, ', age=', `e_age`, ', 薪资为: ', `e_salary`) AS `result`;
    FETCH `employee_result` INTO `e_id`,`e_name`,`e_age`,`e_salary`;
    SELECT concat('id=', `e_id`, ', name=', `e_name`, ', age=', `e_age`, ', 薪资为: ', `e_salary`) AS `result`;
    FETCH `employee_result` INTO `e_id`,`e_name`,`e_age`,`e_salary`;
    SELECT concat('id=', `e_id`, ', name=', `e_name`, ', age=', `e_age`, ', 薪资为: ', `e_salary`) AS `result`;

    CLOSE `employee_result`;
END$

-- 借助循环和事件
CREATE PROCEDURE `pro_test_cursor`()
BEGIN
    DECLARE `e_id` INT(11); -- 类型必须和数据库表结构一致
    DECLARE `e_name` VARCHAR(50);
    DECLARE `e_age` INT(11);
    DECLARE `e_salary` INT(11);
    DECLARE `has_data` INT DEFAULT 1;

    DECLARE `employee_result` CURSOR FOR SELECT * FROM `temp`;
    DECLARE EXIT HANDLER FOR NOT FOUND SET `has_data` = 0; -- 事件处理函数

    OPEN `employee_result`;
    REPEAT
        FETCH `employee_result` INTO `e_id`,`e_name`,`e_age`,`e_salary`;
        SELECT concat('id=', `e_id`, ', name=', `e_name`, ', age=', `e_age`, ', 薪资为: ', `e_salary`) AS `result`;
    UNTIL `has_data` = 0
        END REPEAT;

    CLOSE `employee_result`;
END$

-- 不要再idea中调用，会报错
CALL pro_test_cursor_old();
CALL pro_test_cursor();
```

## 存储函数

```sql
DELIMITER $                    
                               
CREATE FUNCTION count_city(`id`
    RETURNS INT                
BEGIN                          
    DECLARE `num` INT;         
    SELECT count(*) INTO `num` 
    RETURN `num`;              
END$                           
                               
DELIMITER ;                    
                               
SELECT count_city(1);                
```

## 触发器

环境准备：

```sql
DROP TABLE IF EXISTS `emp_log`;
CREATE TABLE `emp_log`
(
    `id`             INT(11)     NOT NULL AUTO_INCREMENT,
    `operation`      VARCHAR(20) NOT NULL COMMENT '操作类型, insert/update/delete',
    `operate_time`   DATETIME    NOT NULL COMMENT '操作时间',
    `operate_id`     INT(11)     NOT NULL COMMENT '操作表的ID',
    `operate_params` VARCHAR(500) COMMENT '操作参数',
    PRIMARY KEY (`id`)
) ENGINE = innodb
  DEFAULT CHARSET = `utf8`;
```



语法：

```sql
create trigger <trigger_name> 
before/after insert/update/delete
on <table_name>
[ for each row ]  -- 行级触发器

begin
	trigger_statement;
end;
```



例子：

- 创建 insert 型触发器，完成插入数据时的日志记录

- 创建 update 型触发器，完成更新数据时的日志记录

- 创建delete 行的触发器 , 完成删除数据时的日志记录 

```sql
DELIMITER $

CREATE TRIGGER `emp_log_insert_trigger`
    AFTER INSERT
    ON `emp`
    FOR EACH ROW
BEGIN
    INSERT INTO `emp_log` (`id`, `operation`, `operate_time`, `operate_id`, `operate_params`)
    VALUES (NULL,
            'insert',
            now(),
            `new`.`id`,
            concat(
                    '插入后(id:',
                    `new`.`id`,
                    ', name:',
                    `new`.`name`,
                    ', age:', `new`.`age`,
                    ', salary:',
                    `new`.`salary`,
                    ')'
                ));
END $

CREATE TRIGGER `emp_log_update_trigger`
    AFTER UPDATE
    ON `emp`
    FOR EACH ROW
BEGIN
    INSERT INTO `emp_log` (`id`, `operation`, `operate_time`, `operate_id`, `operate_params`)
    VALUES (NULL,
            'update',
            now(),
            `new`.`id`,
            concat('修改前(id:',
                   `old`.`id`,
                   ', name:',
                   `old`.`name`,
                   ', age:',
                   `old`.`age`,
                   ', salary:',
                   `old`.`salary`,
                   ') , 修改后(id',
                   `new`.`id`,
                   'name:',
                   `new`.`name`,
                   ', age:',
                   `new`.`age`,
                   ', salary:',
                   `new`.`salary`,
                   ')'
                ));
END $

CREATE TRIGGER `emp_log_delete_trigger`
    AFTER DELETE
    ON `emp`
    FOR EACH ROW
BEGIN
    INSERT INTO `emp_log` (`id`, `operation`, `operate_time`, `operate_id`, `operate_params`)
    VALUES (NULL,
            'delete',
            now(),
            `old`.`id`,
            concat('删除前(id:',
                   `old`.`id`,
                   ', name:',
                   `old`.`name`,
                   ', age:',
                   `old`.`age`,
                   ', salary:',
                   `old`.`salary`,
                   ')'
                ));
END $

DELIMITER ;
```

测试：

```sql
INSERT INTO `emp`(`id`, `name`, `age`, `salary`)
VALUES (NULL, '光明左使', 30, 3500);

UPDATE `emp`
SET `age` = 39
WHERE `id` = 3;

DELETE
FROM `emp`
WHERE `id` = 5;
```
