package Com.Controller;

import Com.Entity.LeaveApplication;
import Com.Service.LeaveApplicationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/leave")
@CrossOrigin // for React (optional)
public class LeaveApplicationController {

    @Autowired
    private LeaveApplicationService service;

    // 1. Apply for leave
    @PostMapping("/apply")
    public LeaveApplication applyForLeave(@RequestBody LeaveApplication leave) {
        return service.applyForLeave(leave);
    }

    // 2. Get all leave details (HR / Manager)
    @GetMapping("/all")
    public List<LeaveApplication> getAllLeaveDetails() {
        return service.findAllLeaveDetails();
    }

    // 3. Get leave details by employee id
    @GetMapping("/employee/{empid}")
    public List<LeaveApplication> getLeaveByEmpId(@PathVariable int empid) {
        return service.findLeaveListByEmpId(empid);
    }

    // 4. Cancel leave by leave id
    @DeleteMapping("/cancel/{leaveid}")
    public String cancelLeave(@PathVariable int leaveid) {
        service.cancelLeave(leaveid);
        return "Leave cancelled successfully";
    }

    // 5. Update leave (fromdate, todate, reason)
    @PutMapping("/update/{leaveid}")
    public LeaveApplication updateLeave(
            @PathVariable int leaveid,
            @RequestBody LeaveApplication updatedLeave) {
        return service.updateLeave(leaveid, updatedLeave);
    }

    // 6. Approve / Reject leave
    @PutMapping("/status/{leaveid}/{action}")
    public LeaveApplication updateLeaveStatus(
            @PathVariable int leaveid,
            @PathVariable String action) {
        return service.updateLeaveStatus(leaveid, action);
    }

    @GetMapping("/approvedLeaves")
    public ResponseEntity<?> findApprovedLeaves(){
        List<LeaveApplication> ApprovedLeaves = service.findApprovedLeaves();

        return ApprovedLeaves.isEmpty() ?
                ResponseEntity.status(HttpStatus.NOT_FOUND).body("Can not find any approved leave")
                :ResponseEntity.status(HttpStatus.OK).body(ApprovedLeaves);
    }

    @GetMapping("/rejectedLeaves")
    public ResponseEntity<?> findRejectedLeaves(){
        List<LeaveApplication> RejectedLeaves = service.findRejectedLeaves();

        return RejectedLeaves.isEmpty() ?
                ResponseEntity.status(HttpStatus.NOT_FOUND).body("Can not find any rejected leave")
                :ResponseEntity.status(HttpStatus.OK).body(RejectedLeaves);
    }

    @GetMapping("/pendingLeaves")
    public ResponseEntity<?> findPendingLeaves(){
        List<LeaveApplication> PendingLeaves = service.findPendingLeaves();

        return PendingLeaves.isEmpty() ?
                ResponseEntity.status(HttpStatus.NOT_FOUND).body("Can not find any pending leave")
                :ResponseEntity.status(HttpStatus.OK).body(PendingLeaves);
    }
}


//React strict mode is off