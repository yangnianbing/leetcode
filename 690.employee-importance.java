/*
 * @lc app=leetcode id=690 lang=java
 *
 * [690] Employee Importance
 */
/*
// Employee info
class Employee {
    // It's the unique id of each node;
    // unique id of this employee
    public int id;
    // the importance value of this employee
    public int importance;
    // the id of direct subordinates
    public List<Integer> subordinates;
};
*/
class Solution {
    public int getImportance(List<Employee> employees, int id) {
        Map<Integer, Employee> map = new HashMap<>();
        for(Employee employee : employees){
            map.put(employee.id, employee);
        }
        return importance(map, id);
    }

    private int importance(Map<Integer, Employee> map, int id){
        Employee employee = map.get(id);
        int total = employee.importance;

        for(int subordinateId : employee.subordinates){
            total += importance(map, subordinateId);
        }
        return total;
    }
}

