package Com.Controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import Com.Entity.Employee;
import Com.Service.EmployeeService;

@RestController
@CrossOrigin
//@CrossOrigin(origins = "http://localhost:3000")

public class EmployeeController {

    @Autowired
    private EmployeeService service;

    @PostMapping("/add")
    public ResponseEntity<?> addEmployee(@RequestBody Employee employee) {
        boolean status = service.addEmployee(employee);

        return status ?
                ResponseEntity.status(HttpStatus.OK).body("Student Added Successfully.!")
                : ResponseEntity.status(HttpStatus.NOT_FOUND).build();
    }

    @GetMapping("/all")
    public ResponseEntity<?> getAll() {
        List<Employee> employees = service.findAll();

        return employees.isEmpty() ?
                ResponseEntity.status(HttpStatus.NOT_FOUND).body("Can not found any Employee.")
                : ResponseEntity.status(HttpStatus.OK).body(employees);
    }

    @GetMapping("/findById/{id}")
    public ResponseEntity<?> findById(@PathVariable int id) {
        Optional<Employee> optionalEmployee = service.findById(id);

        return optionalEmployee.isPresent() ?
                ResponseEntity.status(HttpStatus.OK).body(optionalEmployee.get())
                : ResponseEntity.status(HttpStatus.NOT_FOUND).body("Can not found Employee with id : " + id);
    }

    @DeleteMapping("/deleteById/{id}")
    public ResponseEntity<?> deleteById(@PathVariable int id) {
        boolean status = service.deleteById(id);

        return status ?
                ResponseEntity.status(HttpStatus.OK).body("Employee deleted successfully.!")
                : ResponseEntity.status(HttpStatus.NOT_FOUND).body("Can not found Employee with id : " + id);
    }

    @PutMapping("/updateById/{id}")
    public ResponseEntity<?> updateById(@PathVariable int id, @RequestBody Employee employee) {
        boolean status = service.updateById(id, employee);

        return status ?
                ResponseEntity.status(HttpStatus.OK).body("Student update successfully.!")
                : ResponseEntity.status(HttpStatus.NOT_FOUND).body("Can not found Employee with id : " + id);
    }


//findByFirstName
//findByLastName
//findByDesignation
//findByDepartment

    @GetMapping("/findByFirstName/{name}")
    public List<Employee> findByFirstName(@PathVariable String name) {
        return service.findByFirstName(name);
    }

    @GetMapping("/findByLastName/{name}")
    public List<Employee> findByLastName(@PathVariable String name) {
        return service.findByLastName(name);
    }

    @GetMapping("/findByDesignation/{name}")
    public List<Employee> findByDesignation(@PathVariable String name) {
        return service.findByDesignation(name);
    }

    @GetMapping("/findByDepartment/{name}")
    public List<Employee> findByDepartment(@PathVariable String name) {
        return service.findByDepartment(name);
    }
}

//✅ Step 2 — Pull the latest code from GitHub
//Every time you start work:
//git pull

//🚀 When you finish your work
//Run the 3 commands:
//git add .
//git commit -m "your message"
//git push