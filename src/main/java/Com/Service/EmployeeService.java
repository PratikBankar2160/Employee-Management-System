package Com.Service;

import Com.Entity.Employee;
import Com.Repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EmployeeService {

    @Autowired
    private EmployeeRepository repo;

    //save
    public boolean addEmployee(Employee employee){
        Employee saved = repo.save(employee);
        return saved != null;
    }

    //findAll
    public List<Employee> findAll(){
        return repo.findAll();
    }

    //findBYId
    public Optional<Employee> findById(int id){
        Optional<Employee> optionalEmployee = repo.findById(id);
        return optionalEmployee;
    }

    //deleteById
    public boolean deleteById(int id){
        if(repo.existsById(id)){
            repo.deleteById(id);
            return true;
        }
        return false;
    }

    //updateById
    public boolean updateById(int id, Employee newData) {

        if(newData == null){
            return false;
        }

        Employee employee = repo.findById(id)
                .orElseThrow(() -> new RuntimeException("Employee not found with id: " + id));

        employee.setFirstname(newData.getFirstname());
        employee.setLastname(newData.getLastname());
        employee.setEmail(newData.getEmail());
        employee.setContactno(newData.getContactno());
        employee.setGender(newData.getGender());
        employee.setDob(newData.getDob());
        employee.setAdharno(newData.getAdharno());
        employee.setPanno(newData.getPanno());
        employee.setJoiningdate(newData.getJoiningdate());
        employee.setDepartment(newData.getDepartment());
        employee.setDesignation(newData.getDesignation());
        employee.setSalary(newData.getSalary());
        employee.setReportingmanager(newData.getReportingmanager());
        employee.setExp(newData.getExp());
        employee.setAddress(newData.getAddress());
        employee.setStatus(newData.getStatus());
        employee.setProfile(newData.getProfile());

        repo.save(employee);   // Save updated employee

        return true;
    }

}