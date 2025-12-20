package Com.Repository;

import Com.Entity.LeaveApplication;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface LeaveApplicationRepository extends JpaRepository<LeaveApplication,Integer> {

    public List<LeaveApplication> findByEid(int eid);
}
