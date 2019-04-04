--
-- @lc app=leetcode id=196 lang=mysql
--
-- [196] Delete Duplicate Emails
--
-- https://leetcode.com/problems/delete-duplicate-emails/description/
--
-- database
-- Easy (31.39%)
-- Total Accepted:    66K
-- Total Submissions: 210.1K
-- Testcase Example:  '{"headers": {"Person": ["Id", "Email"]}, "rows": {"Person": [[1, "john@example.com"], [2, "bob@example.com"], [3, "john@example.com"]]}}'
--
-- Write a SQL query to delete all duplicate email entries in a table named
-- Person, keeping only unique emails based on its smallest Id.
-- 
-- 
-- +----+------------------+
-- | Id | Email            |
-- +----+------------------+
-- | 1  | john@example.com |
-- | 2  | bob@example.com  |
-- | 3  | john@example.com |
-- +----+------------------+
-- Id is the primary key column for this table.
-- 
-- 
-- For example, after running your query, the above Person table should have
-- the following rows:
-- 
-- 
-- +----+------------------+
-- | Id | Email            |
-- +----+------------------+
-- | 1  | john@example.com |
-- | 2  | bob@example.com  |
-- +----+------------------+
-- 
-- 
-- Note:
-- 
-- Your output is the whole Person table after executing your sql. Use delete
-- statement.
-- 
--
# Write your MySQL query statement below

delete p1 from Person p1, Person p2
where p1.email = p2.email
and p1.Id > p2.Id
