package Com.Repository;

import Com.Entity.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface EmployeeRepository extends JpaRepository<Employee,Integer> {

    //findByFirstName
    public List<Employee> findByFirstname(String firstname);

    //findByLastName
    public List<Employee> findByLastname(String lastname);

    //findByDesignation
    public List<Employee> findByDesignation(String designation);

    //findByDepartment
    public List<Employee> findByDepartment(String department);


}
