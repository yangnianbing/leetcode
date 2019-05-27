--
-- @lc app=leetcode id=627 lang=mysql
--
-- [627] Swap Salary
--
# Write your MySQL query statement below

UPDATE salary
SET sex = if(sex = 'm', 'f', 'm')
