--
-- @lc app=leetcode id=596 lang=mysql
--
-- [596] Classes More Than 5 Students
--
# Write your MySQL query statement below

select class 
from (
  select count(DISTINCT  student) as num, class 
  from courses
  group by class) as tmp
where num >= 5
  

