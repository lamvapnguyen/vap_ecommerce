select 
col.TABLE_NAME
,col.COLUMN_NAME as 'Field Name'
,col.DATA_TYPE as 'Data Type'
,CAST(
             CASE 
                  WHEN col.CHARACTER_MAXIMUM_LENGTH IS NOT NULL    
                     THEN col.CHARACTER_MAXIMUM_LENGTH  
                  ELSE col.NUMERIC_PRECISION 
             END AS numeric) as 'Length'
,col.COLUMN_DEFAULT as 'Default'
,'Auto' = ''
,CAST(
             CASE 
                  WHEN CHARINDEX('PK',con.CONSTRAINT_NAME) > 0.    
                     THEN 'yes'  
                  ELSE '' 
             END AS nvarchar) as 'PK'

,CAST(
             CASE 
                  WHEN CHARINDEX('FK',con.CONSTRAINT_NAME) > 0.    
                     THEN 'yes'  
                  ELSE '' 
             END AS nvarchar) as 'FK'

,CAST(
             CASE 
                  WHEN CHARINDEX('NO',col.IS_NULLABLE) > 0.    
                     THEN 'yes'  
                  ELSE '' 
             END AS varchar) as 'Not Null'

,'Unique' = ''

,fp.REFERENCED_TABLE_NAME as 'Reference Table'
,fp.REFERENCED_COLUMN_NAME as 'Reference Field'
,con.CONSTRAINT_NAME

from INFORMATION_SCHEMA.COLUMNS as col
left join INFORMATION_SCHEMA.CONSTRAINT_COLUMN_USAGE as con
on  col.COLUMN_NAME = con.COLUMN_NAME
left JOIN(SELECT  
     KCU1.CONSTRAINT_NAME AS FK_CONSTRAINT_NAME 
    ,KCU1.TABLE_NAME AS FK_TABLE_NAME 
    ,KCU1.COLUMN_NAME AS FK_COLUMN_NAME 
    ,KCU1.ORDINAL_POSITION AS FK_ORDINAL_POSITION 
    ,KCU2.CONSTRAINT_NAME AS REFERENCED_CONSTRAINT_NAME 
    ,KCU2.TABLE_NAME AS REFERENCED_TABLE_NAME 
    ,KCU2.COLUMN_NAME AS REFERENCED_COLUMN_NAME 
    ,KCU2.ORDINAL_POSITION AS REFERENCED_ORDINAL_POSITION 
FROM INFORMATION_SCHEMA.REFERENTIAL_CONSTRAINTS AS RC 

INNER JOIN INFORMATION_SCHEMA.KEY_COLUMN_USAGE AS KCU1 
    ON KCU1.CONSTRAINT_CATALOG = RC.CONSTRAINT_CATALOG  
    AND KCU1.CONSTRAINT_SCHEMA = RC.CONSTRAINT_SCHEMA 
    AND KCU1.CONSTRAINT_NAME = RC.CONSTRAINT_NAME 

INNER JOIN INFORMATION_SCHEMA.KEY_COLUMN_USAGE AS KCU2 
    ON KCU2.CONSTRAINT_CATALOG = RC.UNIQUE_CONSTRAINT_CATALOG  
    AND KCU2.CONSTRAINT_SCHEMA = RC.UNIQUE_CONSTRAINT_SCHEMA 
    AND KCU2.CONSTRAINT_NAME = RC.UNIQUE_CONSTRAINT_NAME 
    AND KCU2.ORDINAL_POSITION = KCU1.ORDINAL_POSITION )as fp
on  con.CONSTRAINT_NAME= fp.FK_CONSTRAINT_NAME
--where col.TABLE_NAME = 'wcms_Order'
order by TABLE_NAME;


