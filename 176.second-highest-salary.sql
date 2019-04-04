--
-- @lc app=leetcode id=176 lang=mysql
--
-- [176] Second Highest Salary
--
-- https://leetcode.com/problems/second-highest-salary/description/
--
-- database
-- Easy (25.65%)
-- Total Accepted:    118.8K
-- Total Submissions: 447.9K
-- Testcase Example:  '{"headers": {"Employee": ["Id", "Salary"]}, "rows": {"Employee": [[1, 100], [2, 200], [3, 300]]}}'
--
-- Write a SQL query to get the second highest salary from the Employee
-- table.
-- 
-- 
-- +----+--------+
-- | Id | Salary |
-- +----+--------+
-- | 1  | 100    |
-- | 2  | 200    |
-- | 3  | 300    |
-- +----+--------+
-- 
-- 
-- For example, given the above Employee table, the query should return 200 as
-- the second highest salary. If there is no second highest salary, then the
-- query should return null.
-- 
-- 
-- +---------------------+
-- | SecondHighestSalary |
-- +---------------------+
-- | 200                 |
-- +---------------------+
-- 
-- 
--
# Write your MySQL query statement below
select ifnull(
    (select distinct salary
    from Employee
    order by salary desc
    limit 1 offset 1), null)
as SecondHighestSalary

